import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  FiArrowLeft,
  FiArrowRight,
  FiClock,
  FiUser,
  FiCalendar,
} from "react-icons/fi";
import api from "../../Services/api";
import "../../Style/Media/CategoryPage.css";
import Mediahero from "../../components/Hero/Mediahero";
import Newsletter from "../../components/Newsletter/Newsletter";

export default function CategoryPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { sectionSlug, categorySlug } = useParams();

  useEffect(() => {
    const fetchCategoryPosts = async () => {
      try {
        setLoading(true);
        const categoryPosts = await api.getAllContentByCategory(
          sectionSlug,
          categorySlug,
          100,
        );

        if (!categoryPosts) return;
        const transformedPosts = categoryPosts.map((post) =>
          api.transformContent(post),
        );

        // Sort by date descending
        transformedPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
        setPosts(transformedPosts);
      } catch (err) {
        console.error(err);
        Swal.fire({
          icon: "error",
          title: "Connection Alert",
          text: "Failed to load posts.",
          confirmButtonColor: "#ce2453",
          background: "#0a0a0a",
          color: "#fff",
        });
        setError("Failed to load posts.");
      } finally {
        setLoading(false);
      }
    };
    fetchCategoryPosts();
  }, [sectionSlug, categorySlug]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [sectionSlug, categorySlug]);

  if (loading) {
    return (
      <div className="catpage-loading">
        <div className="catpage-spinner"></div>
        <p className="catpage-loading-text">Curating Insights...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="catpage-error">
        <div className="catpage-error-content">
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="catpage-wrapper">
        <Mediahero />
        <div className="catpage-container">
          <div className="catpage-header-nav">
            <Link to="/events" className="catpage-back">
              <FiArrowLeft className="catpage-back-icon" /> Hub Explorer
            </Link>
          </div>
          <div className="catpage-empty">
            {/* <div className="catpage-empty-icon"></div> */}
            <h3>No contents available yet</h3>
            <p>
              We&apos;re brewing something amazing for this category. Check back
              later.
            </p>
          </div>
        </div>
        <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
          <Newsletter />
        </div>      </div>
    );
  }

  const trendingPost = posts.reduce(
    (prev, current) =>
      (prev.views || 0) > (current.views || 0) ? prev : current,
    posts[0],
  );

  const displayPosts = posts.filter((p) => p.id !== trendingPost.id);

  const formatCategoryName = (slug) => {
    if (!slug) return "";
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };
  const categoryName = formatCategoryName(categorySlug);

  return (
    <div className="catpage-wrapper">
      <Mediahero />
      <div className="catpage-container">
        <div className="catpage-header-nav">
          <Link to="/events" className="catpage-back">
            <FiArrowLeft className="catpage-back-icon" /> Hub Explorer
          </Link>
        </div>

        {/* Featured Card */}
        <section className="catpage-featured-section">
          <Link
            to={`/${sectionSlug}/${categorySlug}/${trendingPost.id}`}
            className="catpage-featured-banner"
          >
            <div className="catpage-featured-img-container">
              <img
                src={trendingPost.image || "/images/placeholder.jpg"}
                alt={trendingPost.title}
                className="catpage-featured-bg"
              />
              <div className="catpage-featured-overlay"></div>
            </div>
            <div className="catpage-featured-content">
              <span className="catpage-featured-badge">
                Featured {categoryName}
              </span>
              <h2 className="catpage-featured-title">{trendingPost.title}</h2>
              <p className="catpage-featured-excerpt">{trendingPost.excerpt}</p>
              <div className="catpage-featured-footer">
                <div className="catpage-author">
                  {trendingPost.authorAvatar ? (
                    <img
                      src={trendingPost.authorAvatar}
                      alt={trendingPost.author}
                    />
                  ) : (
                    <div className="avatar-placeholder">
                      <FiUser />
                    </div>
                  )}
                  <span>{trendingPost.author || "Devopstrio"}</span>
                </div>
                <div className="catpage-meta">
                  <FiCalendar />{" "}
                  {new Date(trendingPost.date).toLocaleDateString()}
                </div>
              </div>
            </div>
            <div className="catpage-featured-arrow">
              <FiArrowRight />
            </div>
          </Link>
        </section>

        <div className="catpage-recent-header">
          <h2>
            Latest in <span>{categoryName}</span>
          </h2>
          <div className="catpage-header-line"></div>
        </div>

        <div className="catpage-grid-modern">
          {displayPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/${sectionSlug}/${categorySlug}/${post.id}`}
              className="catpage-card-modern"
              style={{ "--index": index }}
            >
              <div className="catpage-card-img-wrapper">
                <img
                  src={post.image || "/images/placeholder.jpg"}
                  alt={post.title}
                  className="catpage-card-img"
                />
                <div className="catpage-card-tag">{categoryName}</div>
              </div>
              <div className="catpage-card-content">
                <h3 className="catpage-card-title">{post.title}</h3>
                <p className="catpage-card-excerpt">{post.excerpt}</p>
                <div className="catpage-card-footer">
                  <div className="catpage-card-author">
                    <FiUser className="footer-icon" />
                    <span>{post.author || "Devopstrio "}</span>
                  </div>
                  <div className="catpage-card-meta">
                    <FiClock className="footer-icon" />
                    <span>5 min read</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
        <Newsletter />
      </div>    </div>
  );
}
