// Base API configuration

const API_BASE_URL = import.meta.env.VITE_API_URL;

const COMPANY_ID = import.meta.env.VITE_COMPANY_ID;

if (!COMPANY_ID) {
  console.error("COMPANY_ID:", COMPANY_ID);
  throw new Error("VITE_COMPANY_ID is not defined");
}

const API_PREFIX = "/api";

class api {
  constructor() {
    this.baseUrl = API_BASE_URL;
    this.companyId = COMPANY_ID;

    // ADD THIS
    this.cache = new Map();
    this.pendingRequests = new Map();
  }

  // Helper for API calls
  async fetchApi(endpoint, options = {}) {
    const url = `${this.baseUrl}${API_PREFIX}${endpoint}`;
    const cacheKey = `${url}:${options.method || "GET"}:${options.body || ""}`;

    // return cached data
    if (this.cache.has(cacheKey)) {
      return this.cache.get(cacheKey);
    }

    // return pending request
    if (this.pendingRequests.has(cacheKey)) {
      return this.pendingRequests.get(cacheKey);
    }

    const requestPromise = fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.detail || `API error: ${response.status}`);
        }

        const data = await response.json();

        this.cache.set(cacheKey, data);
        this.pendingRequests.delete(cacheKey);

        return data;
      })
      .catch((err) => {
        this.pendingRequests.delete(cacheKey);
        if (options.throwError) throw err;
        return null;
      });

    this.pendingRequests.set(cacheKey, requestPromise);

    return requestPromise;
  }

  // Public endpoints (no auth required)

  async getSections() {
    return this.fetchApi(`/public/${this.companyId}/sections`);
  }

  async getCategories(sectionSlug) {
    return this.fetchApi(
      `/public/${this.companyId}/categories?section_slug=${sectionSlug}`,
    );
  }

  async getContent(params = {}) {
    const queryParams = new URLSearchParams({
      skip: params.skip || 0,

      limit: params.limit || 20,

      ...(params.section_slug && { section_slug: params.section_slug }),

      ...(params.category_slug && { category_slug: params.category_slug }),
    }).toString();

    return this.fetchApi(`/public/${this.companyId}/content?${queryParams}`);
  }

  async getContentById(contentId) {
    return this.fetchApi(`/public/content/${contentId}`);
  }

  // Get all content in a category with pagination

  async getAllContentByCategory(sectionSlug, categorySlug, limit = 50) {
    let allItems = [];

    let skip = 0;

    const pageSize = 20;

    while (true) {
      const response = await this.getContent({
        section_slug: sectionSlug,
        category_slug: categorySlug,
        skip,
        limit: pageSize,
      });

      if (!response || !response.items || response.items.length === 0) {
        break;
      }

      allItems = [...allItems, ...response.items];

      if (response.items.length < pageSize || allItems.length >= limit) {
        break;
      }

      skip += pageSize;
    }

    return allItems.slice(0, limit);
  }

  // Get complete site structure with sections, categories, and posts

  async getFullSiteStructure() {
    try {
      const sectionsRes = await this.getSections();

      if (!sectionsRes || !sectionsRes.sections) {
        return [];
      }
      const sections = sectionsRes.sections || [];

      const result = await Promise.all(
        sections.map(async (section) => {
          try {
            const categoriesRes = await this.getCategories(section.slug);
            if (!categoriesRes) {
              return {
                ...section,
                categories: [],
              };
            }
            const categories = categoriesRes.categories || [];

            const categoryData = await Promise.all(
              categories.map(async (category) => {
                try {
                  const contentRes = await this.getContent({
                    section_slug: section.slug,
                    category_slug: category.slug,
                    limit: 10,
                  });

                  if (!contentRes) {
                    return {
                      ...category,
                      section_slug: section.slug,
                      posts: [],
                    };
                  }

                  const posts = (contentRes.items || []).map((item) =>
                    this.transformContent(item, section, category),
                  );

                  return {
                    ...category,
                    section_slug: section.slug,
                    posts,
                  };
                } catch {
                  return {
                    ...category,
                    section_slug: section.slug,
                    posts: [],
                  };
                }
              }),
            );

            return {
              ...section,
              categories: categoryData,
            };
          } catch {
            return {
              ...section,
              categories: [],
            };
          }
        }),
      );

      return result;
    } catch (err) {
      console.error("Error fetching site structure:", err);

      throw err;
    }
  }

  // Get all posts across all categories (for AllPosts page)

  async getAllPosts(limit = 100) {
    try {
      const structure = await this.getFullSiteStructure();

      const allPosts = [];

      structure.forEach((section) => {
        section.categories.forEach((category) => {
          category.posts.forEach((post) => {
            allPosts.push({
              ...post,

              section: {
                slug: section.slug,

                name: section.name,
              },

              category: {
                slug: category.slug,

                name: category.name,
              },
            });
          });
        });
      });

      // Sort by date (newest first)

      return allPosts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
    } catch (err) {
      console.error("Error fetching all posts:", err);

      return [];
    }
  }

  // Get posts for a specific section

  async getSectionPosts(sectionSlug, limit = 100) {
    try {
      const categories = await this.getCategories(sectionSlug);

      let allPosts = [];

      for (const category of categories.categories || []) {
        try {
          const posts = await this.getAllContentByCategory(
            sectionSlug,
            category.slug,
            20,
          );

          const transformed = posts.map((post) =>
            this.transformContent(post, { slug: sectionSlug }, category),
          );

          allPosts = [...allPosts, ...transformed];
        } catch (err) {
          console.error(
            `Error fetching posts for category ${category.slug}:`,
            err,
          );
        }
      }

      return allPosts
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, limit);
    } catch (err) {
      console.error(`Error fetching section posts for ${sectionSlug}:`, err);

      return [];
    }
  }

  // Transform backend content to match frontend expected format

  transformContent(backendContent, section = null, category = null) {
    const renderedContent = this.renderBlocks(backendContent.blocks);
    const computedReadTime = Math.max(
      1,
      Math.ceil((renderedContent || "").trim().split(/\s+/).length / 200),
    );

    return {
      id: backendContent.id,

      title: backendContent.title,

      section: section
        ? { name: section.name, slug: section.slug }
        : {
            name: backendContent.section_name,

            slug: backendContent.section_slug,
          },

      category: category
        ? { name: category.name, slug: category.slug }
        : {
            name: backendContent.category_name,

            slug: backendContent.category_slug,
          },

      excerpt:
        backendContent.subtitle || this.extractExcerpt(backendContent.blocks),

      subtitle: backendContent.subtitle || null,

      text: this.extracttext(backendContent.blocks),

      image: backendContent.cover_image_id
        ? `${this.baseUrl}${API_PREFIX}/images/${backendContent.cover_image_id}`
        : null,

      content: renderedContent,

      date: new Date(backendContent.published_at || backendContent.created_at)
        .toISOString()
        .split("T")[0],

      author: backendContent.author?.name || "Devopstrio Team",

      readTime: backendContent.stats?.read_time || computedReadTime,

      tags: backendContent.tags || [],

      views: backendContent.stats?.views || 0,

      likes: backendContent.stats?.likes || 0,

      comments: backendContent.stats?.comments || 0,

      featured: backendContent.settings?.is_featured || false,
    };
  }

  extractExcerpt(blocks) {
    if (!blocks || blocks.length === 0) return "";

    // Find first text block

    const textBlock = blocks.find((b) =>
      ["text", "heading", "subheading"].includes(b.type),
    );

    if (textBlock?.data?.value) {
      const text = textBlock.data.value.replace(/[#*`]/g, "").trim();

      return text.length > 150 ? text.substring(0, 150) + "..." : text;
    }

    return "Read more about this topic...";
  }

  extracttext(blocks) {
    if (!blocks || blocks.length === 0) return null;

    const headingBlock = blocks.find((b) => b.type === "heading");

    if (headingBlock?.data?.value) {
      return headingBlock.data.value.replace(/[#*`]/g, "").trim();
    }

    return null;
  }

  renderBlocks(blocks) {
    if (!blocks || blocks.length === 0) return "";

    return blocks
      .map((block) => {
        switch (block.type) {
          case "heading":
            return `# ${block.data.value}`;

          case "subheading":
            return `## ${block.data.value}`;

          case "text":
            return block.data.value;

          case "quote":
            return `> ${block.data.value}`;

          case "list":
            return block.data.items?.map((item) => `- ${item}`).join("\n");

          case "bullet-list":
            return block.data.items?.map((item) => `- ${item}`).join("\n");

          case "numbered-list":
            return block.data.items
              ?.map((item, i) => `${i + 1}. ${item}`)
              .join("\n");

          case "image":
            return `![${block.data.alt || "image"}](${this.baseUrl}${API_PREFIX}/images/${block.data.file_id})`;

          case "video":
            return block.data.url;

          case "embed":
            return block.data.url;

          case "document": {
            const docUrl = block.data.file_id
              ? `${this.baseUrl}${API_PREFIX}/documents/${block.data.file_id}`
              : block.data.url;
            return `[📁 Download ${block.data.title || "Document"}](${docUrl})`;
          }

          default:
            return "";
        }
      })
      .join("\n\n");
  }

  // Comment functionality

  async addComment(contentId, text) {
    const token = localStorage.getItem("authToken");

    return this.fetchApi(`/content/${contentId}/comments`, {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify({ text }),
    });
  }

  async getComments(contentId) {
    return this.fetchApi(`/content/${contentId}/comments`);
  }
  async likePost(contentId) {
    const token = localStorage.getItem("authToken");

    return this.fetchApi(`/public/content/${contentId}/like`, {
      method: "POST",
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  }
  async getLikeStatus(contentId) {
    const token = localStorage.getItem("authToken");

    return this.fetchApi(`/public/content/${contentId}/like-status`, {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  }

  // Newsletter subscribe
  async subscribe(email, sections = [], categories = []) {
    return this.fetchApi(`/public/subscribe`, {
      method: "POST",
      body: JSON.stringify({
        email,
        company_id: this.companyId,
        sections,
        categories,
      }),
      throwError: true,
    });
  }

  async getSubscriberPreferences(email) {
    return this.fetchApi(
      `/public/subscriber-preferences?email=${encodeURIComponent(email)}&company_id=${this.companyId}`,
    );
  }
}

export default new api();
