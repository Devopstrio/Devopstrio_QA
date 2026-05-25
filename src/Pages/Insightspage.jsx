import React, { useEffect, useState, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import Insightshero from "../components/Hero/Insightshero";
import Newsletter from "../components/Newsletter/Newsletter";
import Cta from "../components/Cta/Cta";
import "../Style/Insightspage.css";
import api from "../Services/api";

// React Icons
import {
  FaAws,
  FaGithub,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaRocket,
  FaBriefcase,
  FaArrowRight,
  FaCalendarAlt,
  FaUserTie,
  FaClock,
  FaCode,
  FaCogs,
  FaLock,
  FaChartBar,
  FaSearch,
  FaFilter,
  FaInfoCircle,
} from "react-icons/fa";
import { FiBox, FiLayers, FiActivity, FiFileText } from "react-icons/fi";
import useSEO from "../hooks/useSEO";

const Insightspage = () => {
  useSEO({
    title: "DevOps & Cloud Insights | AI & Engineering Blog | Devopstrio",
    description: "Explore expert insights, tech blogs, and research papers on DevOps automation, secure cloud migration, AI-driven operations, Kubernetes scalability, and enterprise digital transformation strategies.",
    keywords: "DevOps blog, cloud computing insights, AI automation research, Kubernetes guides, tech journey timeline, Devopstrio insights, DevOps professional community, cloud architecture blog",
    ogTitle: "DevOps & Cloud Insights Blog | Devopstrio",
    ogDescription: "Stay ahead of the curve. Dive into six years of technical excellence, enterprise case studies, and modern engineering blogs from the Devopstrio team.",
    ogImage: "https://devopstrio.com/assets/images/devopstrio-og-insights.jpg",
    ogUrl: "https://devopstrio.com/insights",
    canonicalUrl: "https://devopstrio.com/insights"
  });

  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState("All");

  // Scroll animation observer
  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("dt-visible");

          // For timeline items with staggered animation
          if (entry.target.classList.contains("dt-timeline-section")) {
            const items = entry.target.querySelectorAll(".dt-timeline-item");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("dt-visible");
              }, index * 100);
            });
          }

          // For featured cards stagger
          if (entry.target.classList.contains("dt-featured-section")) {
            const cards = entry.target.querySelectorAll(".dt-featured-card");
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("dt-visible");
              }, index * 100);
            });
          }

          // For article cards stagger
          if (entry.target.classList.contains("dt-library-section")) {
            const articles = entry.target.querySelectorAll(".dt-article-card");
            articles.forEach((article, index) => {
              setTimeout(() => {
                article.classList.add("dt-visible");
              }, index * 100);
            });
          }
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll(
      ".dt-section-header, .dt-integrations-section, .dt-timeline-section, " +
      ".dt-featured-section, .dt-library-section, .dt-newsletter-section, " +
      ".dt-cta-section, .dt-explanation-section",
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [posts]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await api.getAllPosts(100);
        // Exclude white-paper category from insights library
        const filtered = data.filter(p => p.category?.slug !== "white-paper");
        setPosts(filtered);
      } catch (err) {
        console.error("Failed to fetch posts for insights page:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Company journey data (Kept static as it's company history timeline)
  const companyMilestones = [
    {
      id: 1,
      year: "2019",
      title: "The Beginning",
      description:
        "Devopstrio was founded with a vision to transform DevOps practices",
      icon: <FaRocket />,
      explanation:
        "Started in a small garage with 3 engineers, we set out to revolutionize how companies handle DevOps automation.",
    },
    {
      id: 2,
      year: "2020",
      title: "First Enterprise Client",
      description:
        "Secured our first Fortune 500 client and expanded integrations",
      icon: <FaBriefcase />,
      explanation:
        "Major breakthrough with a global bank, proving our platform could handle enterprise-scale workloads.",
    },
    {
      id: 3,
      year: "2021",
      title: "Series A Funding",
      description: "Raised $10M to accelerate platform development",
      icon: <FaChartLine />,
      explanation:
        "Investment from top VCs enabled us to triple our engineering team and expand our product roadmap.",
    },
    {
      id: 4,
      year: "2022",
      title: "Global Expansion",
      description: "Opened offices in EU and APAC regions",
      icon: <FaCloud />,
      explanation:
        "Established presence in London, Singapore, and Sydney to serve our growing international client base.",
    },
    {
      id: 5,
      year: "2023",
      title: "100+ Integrations",
      description: "Crossed 100+ technology integrations milestone",
      icon: <FaCogs />,
      explanation:
        "Achieved comprehensive coverage of all major DevOps tools, from CI/CD to monitoring and security.",
    },
    {
      id: 6,
      year: "2024",
      title: "AI-Powered Insights",
      description: "Launched AI-driven analytics platform",
      icon: <FaChartBar />,
      explanation:
        "Revolutionary AI algorithms now predict deployment issues before they occur, saving millions in downtime.",
    },
    {
      id: 7,
      year: "2025",
      title: "Community of 50K+",
      description: "Growing community of DevOps professionals",
      icon: <FaUserTie />,
      explanation:
        "Our community platform became the go-to place for DevOps engineers to share knowledge and best practices.",
    },
    {
      id: 8,
      year: "2026",
      title: "Six Years of Excellence",
      description: "Celebrating six years of transforming DevOps",
      icon: <FaAws />,
      explanation:
        "Serving 1000+ clients worldwide with 99.99% platform uptime and industry-leading customer satisfaction.",
    },
  ];

  // Map dynamic icons
  const getCategoryIcon = (categoryName) => {
    const name = categoryName?.toLowerCase() || "";
    if (name.includes("cloud")) return <FaCloud />;
    if (name.includes("security") || name.includes("compliance"))
      return <FaLock />;
    if (name.includes("automation") || name.includes("cicd")) return <FaCode />;
    if (name.includes("devops")) return <FaCogs />;
    if (name.includes("case studies")) return <FaBriefcase />;
    if (name.includes("blog")) return <FiFileText />;
    return <FaChartLine />;
  };

  const getFeaturedBadgeIcon = (index) => {
    switch (index % 3) {
      case 0:
        return <FaRocket />;
      case 1:
        return <FaChartLine />;
      case 2:
        return <FaBriefcase />;
      default:
        return <FaRocket />;
    }
  };

  const getFeaturedBadgeText = (index, catName) => {
    if (catName) return catName;
    switch (index % 3) {
      case 0:
        return "Featured Blog";
      case 1:
        return "Latest Research";
      case 2:
        return "Case Study Highlight";
      default:
        return "Insights";
    }
  };
  // process posts for insights page
  const featuredInsights = useMemo(() => {
    if (!posts.length) return [];

    // sort by newest first
    const sorted = [...posts].sort(
      (a, b) => new Date(b.date) - new Date(a.date),
    );

    const usedCategories = new Set();
    const featured = [];

    for (const post of sorted) {
      const category = post.category?.slug;

      // avoid duplicate categories
      if (!usedCategories.has(category)) {
        featured.push(post);
        usedCategories.add(category);
      }

      if (featured.length === 3) break;
    }

    return featured;
  }, [posts]);

  // Handle grid list data with search & filter
  const libraryPosts = useMemo(() => {
    let filtered = [...posts];

    // Filter by active category
    if (activeCategoryFilter !== "All") {
      filtered = filtered.filter((p) => {
        const catName = p.category?.name;
        return catName
          ?.toLowerCase()
          .includes(activeCategoryFilter.toLowerCase());
      });
    }

    // Search query matches title, excerpt, category name, or author
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          (p.title && p.title.toLowerCase().includes(q)) ||
          (p.excerpt && p.excerpt.toLowerCase().includes(q)) ||
          (p.category?.name && p.category.name.toLowerCase().includes(q)) ||
          (p.author && p.author.toLowerCase().includes(q)),
      );
    }

    // Sort to show the recently posted logic always
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    return filtered.slice(0, 6); // Show up to 6 mixed posts/category posts
  }, [posts, featuredInsights, activeCategoryFilter, searchQuery]);

  // Dynamic Categories builder
  const dynamicCategories = useMemo(() => {
    const counts = { All: posts.length };
    posts.forEach((p) => {
      const cat = p.category?.name;
      counts[cat] = (counts[cat] || 0) + 1;
    });

    const cats = Object.entries(counts)
      .map(([name, count]) => ({
        name,
        count,
        icon: name === "All" ? <FaFilter /> : getCategoryIcon(name),
      }))
      .sort((a, b) => {
        if (a.name === "All") return -1;
        if (b.name === "All") return 1;
        return b.count - a.count;
      })
      .slice(0, 7); // Max 7 distinct category pills

    return cats;
  }, [posts]);

  return (
    <div className="ip-container">
      {/* HERO */}
      <Insightshero />

      {/* FEATURED INSIGHTS SECTION */}
      <section className="dt-featured-section">
        <div className="dt-container">
          <div className="dt-section-header">
            <span className="dt-badge">FEATURED CONTENT</span>
            <h2>Must-Read Insights</h2>
            <p>Hand-picked articles and research for DevOps professionals</p>
          </div>

          <div className="dt-featured-grid">
            {loading ? (
              <div className="dt-loading-grid">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="dt-skeleton-card"></div>
                ))}
              </div>
            ) : featuredInsights.length > 0 ? (
              featuredInsights.map((insight, index) => (
                <div
                  key={insight.id}
                  className="dt-featured-card"
                  onClick={() =>
                    navigate(
                      `/${insight.section?.slug}/${insight.category?.slug}/${insight.id}`,
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <div className="dt-featured-badge">
                    <span className="dt-badge-icon">
                      {getFeaturedBadgeIcon(index)}
                    </span>
                    <span className="dt-badge-text">
                      {getFeaturedBadgeText(index, insight.category?.name)}
                    </span>
                  </div>
                  <div
                    className="dt-featured-content"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <h3>{insight.title}</h3>
                    <p className="dt-featured-desc" style={{ flexGrow: 0.7 }}>
                      {insight.excerpt || insight.title}
                    </p>
                    <div className="dt-featured-meta">
                      <span className="dt-meta-item">
                        <FaUserTie /> {insight.author}
                      </span>
                      <span className="dt-meta-item">
                        <FaCalendarAlt />{" "}
                        {insight.date
                          ? new Date(insight.date).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                          : "Recently"}
                      </span>
                      <span className="dt-meta-item">
                        <FaClock /> {insight.readTime} min read
                      </span>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div
                style={{
                  color: "#888",
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "2rem",
                }}
              >
                Loading featured insights...
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COMPANY JOURNEY TIMELINE - HORIZONTAL WITH SINGLE LINE */}
      <section className="dt-timeline-ins-section">
        <div className="dt-container">
          <div className="dt-section-header">
            <span className="dt-badge">OUR JOURNEY</span>
            <h2>Six Years of DevOps Excellence</h2>
            <p>
              From startup to industry leader - our path of innovation and
              growth
            </p>
          </div>
          <div className="dt-timeline-header"></div>
          <div className="dt-timeline-harp">
            {/* Main timeline wrapper with horizontal line */}
            <div className="dt-timeline-wrapper">
              {/* Single straight horizontal line */}
              <div className="dt-timeline-line"></div>

              {/* Timeline steps */}
              <div className="dt-timeline-steps">
                {companyMilestones.map((milestone) => (
                  <div key={milestone.id} className="dt-timeline-item">
                    {/* Year marker on the line */}
                    <div className="dt-year-marker">
                      <span className="dt-year">{milestone.year}</span>
                    </div>

                    {/* Content card (alternates top/bottom via CSS) */}
                    <div className="dt-milestone-card">
                      <div className="dt-milestone-icon">{milestone.icon}</div>
                      <h3>{milestone.title}</h3>
                      <p>{milestone.description}</p>

                      {/* Explanation tooltip */}
                      <div className="dt-milestone-explanation">
                        <FaInfoCircle className="dt-info-icon" />
                        <div className="dt-explanation-tooltip">
                          <p>{milestone.explanation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHTS GRID SECTION */}
      <section className="dt-library-section">
        <div className="dt-container">
          <div className="dt-section-header">
            <span className="dt-badge">INSIGHTS LIBRARY</span>
            <h2>Latest Articles & Resources</h2>
            <p>
              Stay ahead with the latest DevOps trends, tutorials, and best
              practices
            </p>
          </div>

          {/* Categories Filter */}
          <div className="dt-filter-bar">
            {dynamicCategories.map((category, index) => (
              <button
                key={index}
                className={`dt-filter-btn ${activeCategoryFilter === category.name ? "active-filter" : ""}`}
                style={{
                  background:
                    activeCategoryFilter === category.name
                      ? "linear-gradient(90deg, #ce2453, #e79e57)"
                      : "transparent",
                  color:
                    activeCategoryFilter === category.name ? "#fff" : "inherit",
                  borderColor:
                    activeCategoryFilter === category.name ? "transparent" : "",
                }}
                onClick={() => setActiveCategoryFilter(category.name)}
              >
                <span className="dt-filter-icon">{category.icon}</span>
                <span className="dt-filter-name">{category.name}</span>
                <span className="dt-filter-count">{category.count}</span>
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="dt-search-wrapper">
            <FaSearch className="dt-search-icon" />
            <input
              type="text"
              placeholder="Search insights by title, category, or topic..."
              className="dt-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Insights Grid */}
          <div className="dt-articles-grid">
            {loading ? (
              <div className="dt-loading-grid">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="dt-skeleton-card"></div>
                ))}
              </div>
            ) : libraryPosts.length > 0 ? (
              libraryPosts.map((insight) => (
                <div
                  key={insight.id}
                  className="dt-article-card"
                  onClick={() =>
                    navigate(
                      `/${insight.section?.slug}/${insight.category?.slug}/${insight.id}`,
                    )
                  }
                  style={{ cursor: "pointer" }}
                >
                  <div className="dt-article-image">
                    <img
                      src={insight.image || "/images/placeholder.jpg"}
                      alt={insight.title}
                    />
                    <span className="dt-article-category">
                      <span className="dt-cat-icon">
                        {getCategoryIcon(insight.category?.name)}
                      </span>
                      {insight.category?.name || "General"}
                    </span>
                  </div>
                  <div className="dt-article-content">
                    <h3>{insight.title}</h3>
                    <p
                      style={{
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {insight.excerpt}
                    </p>
                    <div className="dt-article-footer">
                      <div className="dt-article-meta">
                        <span>
                          <FaCalendarAlt />{" "}
                          {insight.date
                            ? new Date(insight.date).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              },
                            )
                            : "Recently"}
                        </span>
                        <span>
                          <FaClock /> {insight.readTime} min read
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div
                style={{
                  color: "#888",
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "3rem",
                }}
              >
                No articles found matching your criteria. Try adjusting your
                search or filters.
              </div>
            )}
          </div>

          {/* Load More Button */}
          <div className="dt-loadmore-wrapper">
            <button
              className="dt-loadmore-btn"
              onClick={() => navigate("/events")}
            >
              Load More Articles <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
        <Newsletter />
      </div>
      {/* CTA */}
      <Cta />
    </div>
  );
};

export default Insightspage;
