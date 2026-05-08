import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  FiArrowLeft,
  FiSearch,
  FiHeart,
  FiShare2,
  FiLinkedin,
  FiEye,
  FiFacebook,
  FiMail,
  FiMessageCircle,
  FiCode,
  FiX,
  FiInstagram,
  FiDownload,
  FiLink,
  FiExternalLink,
} from "react-icons/fi";
import api from "../../Services/api";
import "../../Style/Media/PostDetail.css";
import TrendingNow from "../../components/Media/TrendingNow";

export default function PostDetail() {
  // params
  const { sectionSlug, categorySlug, postId } = useParams();
  const navigate = useNavigate();

  // states
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);

  const [views, setViews] = useState(0);
  const [flyHearts, setFlyHearts] = useState([]);

  const [showShare, setShowShare] = useState(false);
  const [embedMode, setEmbedMode] = useState(false);
  const [copied, setCopied] = useState(false);

  // Generate unique hexadecimal share ID similar to YouTube tracking
  const [shareId] = useState(
    () =>
      Math.random().toString(16).substring(2, 14) +
      Math.random().toString(16).substring(2, 6),
  );

  const [previewDoc, setPreviewDoc] = useState(null);

  const shareUrl = `${window.location.origin}${window.location.pathname}?si=${shareId}`;

  // handlers Like and Comment and fetch data
  const handleLike = async () => {
    let storedLikes = [];

    try {
      storedLikes =
        JSON.parse(localStorage.getItem(`likedPosts_${categorySlug}`)) || [];
    } catch {
      storedLikes = [];
    }

    if (liked) {
      const updatedLikes = storedLikes.filter((id) => id !== postId);

      localStorage.setItem(
        `likedPosts_${categorySlug}`,
        JSON.stringify(updatedLikes),
      );

      setLikes((prev) => Math.max(prev - 1, 0));
      setLiked(false);
    } else {
      const newHearts = Array.from({ length: 6 }).map((_, i) => ({
        id: Date.now() + i,
        style: {
          "--tx2": `${(Math.random() - 0.5) * 120}px`,
          "--ty2": `-${Math.random() * 120 + 150}px`,
          "--r2": `${(Math.random() - 0.5) * 60}deg`,
          animationDelay: `${Math.random() * 0.3}s`,
          animationDuration: `${1.5 + Math.random() * 1}s`,
        },
      }));
      setFlyHearts((prev) => [...prev, ...newHearts]);
      setTimeout(() => {
        const ids = new Set(newHearts.map((h) => h.id));
        setFlyHearts((prev) => prev.filter((h) => !ids.has(h.id)));
      }, 3000);

      const updatedLikes = [...new Set([...storedLikes, postId])];

      localStorage.setItem(
        `likedPosts_${categorySlug}`,
        JSON.stringify(updatedLikes),
      );

      setLikes((prev) => prev + 1);
      setLiked(true);

      try {
        const res = await api.likePost(postId);
        // If your backend returns the new total count, sync it dynamically
        if (res && typeof res.likes !== "undefined") {
          setLikes(res.likes);
        }
      } catch (err) {
        console.error("Failed to sync like with server:", err);
      }
    }
  };

  // useEffect for fetch data
  useEffect(() => {
    if (!postId) return;

    fetchPostData();

    // scroll to top when post changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [postId, sectionSlug, categorySlug]);

  const fetchPostData = async () => {
    try {
      setLoading(true);
      setError(null);
      setPost(null);

      const data = await api.getContentById(postId);

      if (!data?.item) {
        setError("Post not found");
        return;
      }

      const transformed = api.transformContent(data.item);
      setPost(transformed);
      setViews(transformed.views || 0);

      const storedLikes =
        JSON.parse(localStorage.getItem(`likedPosts_${categorySlug}`)) || [];
      const userLiked = storedLikes.includes(postId);
      setLiked(userLiked);

      // combine backend + local like
      const calculatedLikes = (transformed.likes || 0) + (userLiked ? 1 : 0);
      setLikes(calculatedLikes);

      // Fetch related blogs dynamically
      const categoryPosts = await api.getAllContentByCategory(
        sectionSlug,
        categorySlug,
        10,
      );

      if (!categoryPosts) {
        setRelatedPosts([]);
        return;
      }

      const transformedCategoryPosts = categoryPosts.map((p) =>
        api.transformContent(
          p,
          { slug: sectionSlug, name: sectionSlug },
          { slug: categorySlug, name: categorySlug },
        ),
      );
      const related = transformedCategoryPosts
        .filter((p) => p.id !== transformed.id)
        .sort((a, b) => new Date(b.date) - new Date(a.date));

      const uniqueRelated = Array.from(
        new Map(related.map((item) => [item.id, item])).values(),
      ).filter(p => p.category?.slug !== "white-paper");


      setRelatedPosts(uniqueRelated);

      // Fetch all posts for TrendingNow section
      const allData = await api.getAllPosts(100);
      const filteredAll = (allData || []).filter(p => p.category?.slug !== "white-paper");
      setAllPosts(filteredAll);
    } catch (err) {
      console.error(err);
      setError("Failed to load post.");
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadFile = async (url, filename) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.setAttribute('download', filename.endsWith('.pdf') ? filename : `${filename}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(blobUrl);
    } catch (err) {
      console.error("Direct download failed:", err);
      window.open(url, '_blank');
    }
  };
  if (loading) {
    return (
      <div className="pd-wrapper">
        <div className="pd-layout-container">
          <div className="pd-main-content">
            <div className="pd-skeleton-title"></div>

            <div className="pd-skeleton-meta">
              <div className="pd-skeleton-avatar"></div>
              <div className="pd-skeleton-line short"></div>
            </div>

            <div className="pd-skeleton-image"></div>

            <div className="pd-skeleton-content">
              <div className="pd-skeleton-line"></div>
              <div className="pd-skeleton-line"></div>
              <div className="pd-skeleton-line"></div>
              <div className="pd-skeleton-line"></div>
              <div className="pd-skeleton-line short"></div>
            </div>
          </div>

          <div className="pd-sidebar">
            <div className="pd-skeleton-related">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="pd-skeleton-related-card">
                  <div className="pd-skeleton-related-img"></div>
                  <div className="pd-skeleton-related-text"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pd-error">
        <p>{error || "Post not found"}</p>
        <button className="pd-back-btn" onClick={() => navigate(-1)}>
          <FiArrowLeft className="pd-icon-spacing" /> Return
        </button>
      </div>
    );
  }

  const displayedRelated = relatedPosts
    .filter((p) => p.title?.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(0, 8);

  return (
    <div className="pd-wrapper">
      {showShare && (
        <div
          className="share-popup"
          onClick={() => {
            setShowShare(false);
            setEmbedMode(false);
          }}
        >
          <div
            className="share-box-modern"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="share-header">
              <h3>{embedMode ? "Embed Video" : "Share"}</h3>
              <button
                className="close-share-btn"
                onClick={() => {
                  setShowShare(false);
                  setEmbedMode(false);
                }}
              >
                <FiX />
              </button>
            </div>

            {embedMode ? (
              <div className="share-embed-view">
                <textarea
                  readOnly
                  className="embed-textarea"
                  value={`<iframe width="560" height="315" src="${shareUrl}" title="${post?.title || "Devopstrio Media"}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`}
                />
                <div className="embed-actions">
                  <button
                    className="embed-copy-btn"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        `<iframe width="560" height="315" src="${shareUrl}" title="${post?.title || "Devopstrio Media"}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
                      );
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                  >
                    {copied ? "Copied!" : "Copy"}
                  </button>
                </div>
              </div>
            ) : (
              <div className="share-content-wrapper">
                <div className="share-icons-row-wrapper">
                  <div className="share-icons-row">
                    <button
                      className="share-icon-btn embed"
                      onClick={() => setEmbedMode(true)}
                    >
                      <div className="icon-circle embed-circle">
                        <FiCode />
                      </div>
                      <span>Embed</span>
                    </button>
                    <a
                      href={`https://wa.me/?text=${shareUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      className="share-icon-btn whatsapp"
                    >
                      <div className="icon-circle whatsapp-circle">
                        <FiMessageCircle />
                      </div>
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      className="share-icon-btn facebook"
                    >
                      <div className="icon-circle facebook-circle">
                        <FiFacebook />
                      </div>
                      <span>Facebook</span>
                    </a>
                    <a
                      href={`https://twitter.com/intent/tweet?url=${shareUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      className="share-icon-btn x-twitter"
                    >
                      <div className="icon-circle x-circle">
                        <span
                          style={{
                            fontWeight: "bold",
                            fontSize: "18px",
                            fontStyle: "italic",
                            fontFamily: "serif",
                          }}
                        >
                          X
                        </span>
                      </div>
                      <span>X</span>
                    </a>
                    <a
                      href={`mailto:?subject=Read this article&body=${shareUrl}`}
                      className="share-icon-btn email"
                    >
                      <div className="icon-circle email-circle">
                        <FiMail />
                      </div>
                      <span>Email</span>
                    </a>
                    <a
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}`}
                      target="_blank"
                      rel="noreferrer"
                      className="share-icon-btn linkedin"
                    >
                      <div className="icon-circle linkedin-circle">
                        <FiLinkedin />
                      </div>
                      <span>LinkedIn</span>
                    </a>
                  </div>
                </div>

                <div className="share-copy-link-box">
                  <div className="link-text-scroll">{shareUrl}</div>
                  <button
                    className="copy-link-submit"
                    onClick={() => {
                      navigator.clipboard.writeText(shareUrl);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }}
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      {/* Top Navbar */}

      <nav className="pd-top-nav">
        <button className="pd-nav-back" onClick={() => navigate(-1)}>
          <FiArrowLeft /> Back
        </button>
        <div className="pd-search-bar">
          <FiSearch className="pd-search-icon" />
          <input
            type="text"
            placeholder="Search related articles..."
            className="pd-search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </nav>

      {/* Main Layout */}
      <div className="pd-layout-container">
        {/* Left Column: Article Content */}
        <div className="pd-main-content">
          <h1 className="pd-title">{post.title}</h1>
          {/* 
          <div className="pd-meta-bar">
            {post.authorAvatar ? (
              <img
                src={post.authorAvatar}
                alt={post.author || "Devopstrio  Editorial"}
                className="pd-author-avatar"
              />
            ) : (
              <div className="pd-author-avatar-placeholder">
                {(post.author || "Devopstrio  Editorial")
                  .charAt(0)
                  .toUpperCase()}
              </div>
            )}
            <span className="pd-author-name">
              {post.author || "Devopstrio  Editorial"}
            </span>
            <span className="pd-meta-dot">•</span>
            <span className="pd-category-name">
              {post.category?.name || "Article"}
            </span>
            <span className="pd-meta-dot">•</span>
            <span className="pd-date">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div> */}

          {post.image && (
            <div className="pd-hero-media">
              <img
                src={post.image}
                alt={post.title}
                className="pd-hero-image"
              />
            </div>
          )}

          <article className="pd-body-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                // eslint-disable-next-line no-unused-vars
                a: ({ node: _node, children, href, ...props }) => {
                  let isDoc = false;
                  let title = "Document";
                  const extractText = (child) => {
                    if (typeof child === 'string') return child;
                    if (Array.isArray(child)) return child.map(extractText).join('');
                    if (child?.props?.children) return extractText(child.props.children);
                    return '';
                  };

                  const textContent = extractText(children);
                  if (textContent.includes('📁')) {
                    isDoc = true;
                    title = textContent.replace('📁 Download ', '').replace('📁 ', '').trim() || "Document";
                  }

                  if (isDoc) {
                    return (
                      <button
                        className="pd-document-download"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          let correctedUrl = href;
                          if (correctedUrl && correctedUrl.includes('/api/images/')) {
                            correctedUrl = correctedUrl.replace('/api/images/', '/api/documents/');
                          }
                          setPreviewDoc({ url: correctedUrl, title, id: post.id });
                        }}
                      >
                        <FiDownload style={{ marginRight: "8px", verticalAlign: "middle" }} />
                        {title}
                      </button>
                    );
                  }
                  return <a href={href} {...props}>{children}</a>;
                }
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>

          {/* Interaction Bar */}
          <div className="pd-interaction-bar">
            <button className="pd-action-btn" onClick={handleLike}>
              <div className="pd-heart-icon-wrapper">
                <FiHeart
                  className={liked ? "liked" : ""}
                  color={liked ? "#ff2e63" : "#999"}
                />
                {flyHearts.map((heart) => (
                  <FiHeart
                    key={heart.id}
                    className="pd-flying-heart"
                    color="#ff2e63"
                    style={heart.style}
                  />
                ))}
              </div>
              {likes} {liked ? "Liked" : "Likes"}
            </button>

            <button className="pd-action-btn">
              <FiEye /> <span>{views} Views</span>
            </button>

            <button
              className="pd-action-btn"
              onClick={() => setShowShare(true)}
            >
              <FiShare2 /> <span>Share</span>
            </button>
          </div>
        </div>

        {/* Right Column: Sidebar (all categories) */}
        <div className="pd-sidebar">
          <div className="pd-share-section">
            <div className="pd-author-written">
              <h3 className="pd-sidebar-heading">Written by</h3>
              <div className="pd-author-media">
                {post.authorAvatar ? (
                  <img
                    src={post.authorAvatar}
                    alt={post.author || "Devopstrio  Editorial"}
                    className="pd-author-avatar"
                  />
                ) : (
                  <div className="pd-author-avatar-placeholder">
                    {(post.author || "Devopstrio  Editorial")
                      .charAt(0)
                      .toUpperCase()}
                  </div>
                )}
              </div>
              <span className="pd-author-name">
                {post.author || "Devopstrio  Editorial"}
              </span>
              <span className="pd-date">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="pd-category-name">
                {post.category?.name || "Article"}
              </span>
            </div>
            <h3 className="pd-sidebar-heading">Share to</h3>
            <div className="pd-social-icons">
              <a
                href="https://www.linkedin.com/company/Devopstrio-global/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="pd-social-btn linkedin"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://wa.me/+441784640216"
                target="_blank"
                rel="noopener noreferrer"
                className="pd-social-btn whatsapp"
              >
                <FiMessageCircle />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61579126233218"
                target="_blank"
                rel="noopener noreferrer"
                className="pd-social-btn facebook"
              >
                <FiFacebook />
              </a>
              <a
                href="mailto:info@Devopstrioglobal.com"
                className="pd-social-btn email"
              >
                <FiMail />
              </a>
              <a
                href="https://www.instagram.com/Devopstrio_offcl/"
                target="_blank"
                rel="noopener noreferrer"
                className="pd-social-btn instagram"
              >
                <FiInstagram />
              </a>
            </div>
          </div>

          <div className="pd-related-section">
            <h3 className="pd-sidebar-heading">Related Articles</h3>
            <div className="pd-related-list">
              {displayedRelated.length === 0 ? (
                <p style={{ color: "#888", fontSize: "0.875rem" }}>
                  No related articles found.
                </p>
              ) : (
                displayedRelated.map((related) => (
                  <Link
                    to={`/${related.section?.slug}/${related.category?.slug}/${related.id}`}
                    key={related.id}
                    className="pd-related-card"
                  >
                    <div className="pd-related-img-wrapper">
                      <img
                        src={related.image || "/images/placeholder.jpg"}
                        alt={related.title}
                        className="pd-related-img"
                      />
                    </div>
                    <div className="pd-related-info">
                      <h4 className="pd-related-title">{related.title}</h4>
                      <span className="pd-related-category">
                        {related.category?.name}
                      </span>
                    </div>
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Trending Now Section */}
      <div className="pd-trending-section">
        <TrendingNow posts={allPosts} />
      </div>

      {/* Document Preview Modal */}
      {previewDoc && (
        <div className="pd-doc-modal-overlay" onClick={() => setPreviewDoc(null)}>
          <div className="pd-doc-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pd-doc-modal-header">
              <div className="pd-doc-modal-title">
                {previewDoc.title}
              </div>
              <div className="pd-doc-modal-actions">
                <button
                  onClick={() => handleDownloadFile(previewDoc.url, previewDoc.title)}
                  className="pd-doc-action-btn"
                  title="Download"
                >
                  <FiDownload />
                </button>
                <button
                  className="pd-doc-action-btn"
                  title="Share Document"
                  onClick={() => {
                    const readerUrl = `${window.location.origin}/${sectionSlug}/${categorySlug}/${previewDoc.id}/reader`;
                    if (navigator.share) {
                      navigator.share({
                        title: previewDoc.title,
                        url: readerUrl
                      }).catch(console.error);
                    } else {
                      navigator.clipboard.writeText(readerUrl);
                      setCopied(true);
                      setTimeout(() => setCopied(false), 2000);
                    }
                  }}
                >
                  <FiShare2 />
                </button>
                <button
                  className="pd-doc-action-btn"
                  title="Copy Link"
                  onClick={() => {
                    navigator.clipboard.writeText(previewDoc.url);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  }}
                >
                  <FiLink />
                </button>
                <Link
                  to={`/${sectionSlug}/${categorySlug}/${previewDoc.id}/reader`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pd-doc-action-btn"
                  title="View Fullscreen"
                >
                  <FiExternalLink />
                </Link>
                <div className="pd-doc-divider"></div>
                <button className="pd-doc-action-btn close" onClick={() => setPreviewDoc(null)} title="Close">
                  <FiX />
                </button>
              </div>
            </div>
            <div className="pd-doc-modal-content">
              <iframe
                src={`${previewDoc.url}#toolbar=0&navpanes=0`}
                title={previewDoc.title}
                className="pd-doc-iframe"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
