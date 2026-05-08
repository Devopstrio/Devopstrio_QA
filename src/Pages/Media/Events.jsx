import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import api from "../../Services/api";
import {
  FiFileText,
  FiBriefcase,
  FiMail,
  FiMic,
  FiStar,
  FiUsers,
  FiImage,
  FiHeart,
  FiAward,
  FiTarget,
  FiMessageCircle,
  FiCalendar,
  FiSettings,
  FiTrendingUp,
  FiMessageSquare,
  FiArrowRight,
  FiEye,
  FiActivity,
  FiClock,
  FiTag,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
import "../../Style/Media/Events.css";
import Mediahero from "../../components/Hero/Mediahero";
import useCompanySections from "../../hooks/useCompanySections";
import Newsletter from "../../components/Newsletter/Newsletter";
import useScrollReveal from "../../hooks/useScrollReveal";
import TrendingNow from "../../components/Media/TrendingNow";

const CATEGORIES = [
  {
    section: "Insights & Knowledge",
    items: [
      {
        name: "Blogs",
        icon: <FiFileText />,
        description: "Expert articles, industry trends",
      },
      {
        name: "Case Studies",
        icon: <FiBriefcase />,
        description: "Detailed breakdowns of client success",
      },
      {
        name: "Newsletters",
        icon: <FiMail />,
        description: "Curated updates and highlights",
      },
      {
        name: "Podcasts",
        icon: <FiMic />,
        description: "Conversations with industry leaders",
      },
    ],
  },
  {
    section: "Life at Devopstrio ",
    items: [
      {
        name: "Celebrations",
        icon: <FiStar />,
        description: "Moments that define our culture",
      },
      {
        name: "Community",
        icon: <FiUsers />,
        description: "Social impact and tech communities",
      },
      {
        name: "Posters",
        icon: <FiImage />,
        description: "Creative visuals showcasing events",
      },
      {
        name: "Team Culture",
        icon: <FiHeart />,
        description: "Inside look at collaboration",
      },
    ],
  },
  {
    section: "News & Events",
    items: [
      {
        name: "Achievements",
        icon: <FiAward />,
        description: "Key accomplishments and breakthroughs",
      },
      {
        name: "Awards & Milestones",
        icon: <FiTarget />,
        description: "Recognition and growth milestones",
      },
      {
        name: "Company Announcements",
        icon: <FiMessageCircle />,
        description: "Official updates and news",
      },
      {
        name: "Industry Events",
        icon: <FiCalendar />,
        description: "Conferences and technology events",
      },
    ],
  },
  {
    section: "Success Stories",
    items: [
      {
        name: "Client Transformations",
        icon: <FiSettings />,
        description: "Real-world digital transformation",
      },
      {
        name: "Impact Metrics",
        icon: <FiTrendingUp />,
        description: "Measurable results and performance",
      },
      {
        name: "Testimonials",
        icon: <FiMessageSquare />,
        description: "What our clients say about us",
      },
    ],
  },
];


const ScrollRevealWrapper = ({
  children,
  delayClass = "",
  style = {},
  className = "",
}) => {
  const revealRef = useScrollReveal();
  return (
    <div
      ref={revealRef}
      className={`scroll-reveal ${delayClass} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

ScrollRevealWrapper.propTypes = {
  children: PropTypes.node,
  delayClass: PropTypes.string,
  style: PropTypes.object,
  className: PropTypes.string,
};

const Premium3DSlider = ({ posts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const revealRef = useScrollReveal();

  useEffect(() => {
    if (!posts || posts.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % posts.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [posts]);

  if (!posts || posts.length === 0) return null;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  return (
    <div ref={revealRef} className="premium-banner-section scroll-reveal">
      <div className="premium-slider-container">
        {posts.map((post, idx) => {
          let positionClass = "slider-hidden";
          if (idx === currentIndex) positionClass = "slider-active";
          else if (idx === (currentIndex - 1 + posts.length) % posts.length)
            positionClass = "slider-prev";
          else if (idx === (currentIndex + 1) % posts.length)
            positionClass = "slider-next";

          // Extract tags if exist, otherwise use a placeholder based on category
          const tags =
            post.tags && post.tags.length > 0
              ? post.tags.slice(0, 3)
              : [post.category?.name || "Featured", "Devopstrio"];

          return (
            <div
              key={post.id || idx}
              className={`slider-item ${positionClass}`}
            >
              <div className="slider-item-inner">
                <img
                  src={post.image || "/images/placeholder.jpg"}
                  alt={post.title}
                  className="slider-img"
                />
                <div className="slider-gradient-overlay"></div>
                <div className="slider-content">
                  <div className="slider-tags">
                    <FiTag className="slider-icon" />
                    {tags.slice(0, 3).map((tag, tIdx) => (
                      <span key={tIdx} className="slider-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {/* <h2 className="slider-title">{post.title}</h2> */}
                  {/* <p className="slider-excerpt">{post.excerpt}</p> */}
                  <div className="slider-bottom-row">
                    <div className="slider-meta">
                      <span>
                        <FiClock className="slider-icon" /> {post.readTime || 5}{" "}
                        MIN READ
                      </span>
                      <span>
                        <FiCalendar className="slider-icon" /> {post.date}
                      </span>
                    </div>
                    <Link
                      to={`/${post.section?.slug || "media"}/${post.category?.slug || "general"}/${post.id}`}
                      className="slider-cta"
                    >
                      Read Article{" "}
                      <FiArrowRight className="slider-icon-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <button className="slider-btn slider-btn-left" onClick={handlePrev}>
          <FiChevronLeft size={24} />
        </button>
        <button className="slider-btn slider-btn-right" onClick={handleNext}>
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

Premium3DSlider.propTypes = {
  posts: PropTypes.array,
};

const AccordionGallery = ({ posts }) => {
  const [active, setActive] = useState(2);
  const revealRef = useScrollReveal();

  if (!posts || posts.length === 0) return null;
  const items = posts.slice(0, 5);

  const getIconForIndex = (idx) => {
    switch (idx % 5) {
      case 0:
        return <FiUsers />;
      case 1:
        return <FiStar />;
      case 2:
        return <FiTarget />;
      case 3:
        return <FiActivity />;
      case 4:
        return <FiAward />;
      default:
        return <FiImage />;
    }
  };

  return (
    <div ref={revealRef} className="accordion-gallery-section scroll-reveal">
      <div className="accordion-gallery-container">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`accordion-gallery-item ${active === idx ? "active" : ""}`}
            onMouseEnter={() => setActive(idx)}
            onFocus={() => setActive(idx)}
            tabIndex={0}
            role="button"
          >
            <div className="accordion-gallery-bg">
              <img
                src={item.image || "/images/placeholder.jpg"}
                alt={item.title}
              />
            </div>
            <div className="accordion-gallery-content">
              <div className="accordion-gallery-icon">
                {getIconForIndex(idx)}
              </div>
              <div className="accordion-gallery-text">
                <h3>{item.title}</h3>
                <p>{item.excerpt || item.category?.name || "Featured Story"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

AccordionGallery.propTypes = {
  posts: PropTypes.array,
};


const PremiumCTA = () => {
  const revealRef = useScrollReveal();
  return (
    <div ref={revealRef} className="premium-cta-section scroll-reveal">
      <div className="premium-cta-bg-image">
        {/* Ideal for a transparent PNG of the silhouette character from the design */}
        <img
          src="/images/events_banner.png"
          alt="Reclaim Time"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>
      <div className="premium-cta-overlay"></div>
      <div className="premium-cta-container">
        <div className="premium-cta-left">
          <p className="premium-cta-subtitle">No stress. Just fine.</p>
          <h2 className="premium-cta-title">
            Ready to Reclaim
            <br />
            Your Time?
          </h2>
        </div>
        <div className="premium-cta-right">
          <p className="premium-cta-desc">
            Start organizing, prioritizing, and managing your workflow
            effortlessly today.
          </p>
          <Link
            to="/careers"
            className="premium-cta-btn"
            aria-label="Start Now"
          >
            <FiArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const { categorySlug } = useParams();
  const [activeCategory, setActiveCategory] = useState(categorySlug || "blogs");

  const { platformSections, aboutSections } = useCompanySections();
  const allSections = [...platformSections, ...aboutSections];

  useEffect(() => {
    if (categorySlug) {
      setActiveCategory(categorySlug);
    }
  }, [categorySlug]);

  useEffect(() => {
    const fetchAllData = async () => {
      try {
        setLoading(true);
        const allPosts = await api.getAllPosts(500);
        setPosts(allPosts);
      } catch (err) {
        console.error("Failed to load posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAllData();
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter(
      (post) =>
        post.category?.slug?.toLowerCase() === activeCategory.toLowerCase(),
    );
  }, [posts, activeCategory]);

  const activeCategoryInfo = useMemo(() => {
    for (const sec of CATEGORIES) {
      const match = sec.items.find(
        (i) => i.name.toLowerCase() === activeCategory.toLowerCase(),
      );
      if (match) return match;
    }
    return { name: activeCategory, description: "", icon: <FiFileText /> };
  }, [activeCategory]);

  const GridCard = ({ post, index }) => {
    const revealRef = useScrollReveal();
    const delayClass = `scroll-reveal-delay-${(index % 3) + 1}`;

    return (
      <Link
        ref={revealRef}
        to={`/${post.section?.slug || "media"}/${post.category?.slug || "general"}/${post.id}`}
        className={`premium-card-3d scroll-reveal ${delayClass}`}
      >
        <div className="premium-card-3d-inner">
          <div className="premium-card-image-box">
            <img
              src={post.image || "/images/placeholder.jpg"}
              alt={post.title}
              className="premium-card-img"
            />
          </div>
          <div className="premium-card-content">
            <h3 className="premium-card-title">{post.title}</h3>
            <p className="premium-card-excerpt">{post.excerpt}</p>
            <div className="premium-card-footer">
              <div className="premium-author-info">
                {post.authorAvatar ? (
                  <img
                    src={post.authorAvatar}
                    alt={post.author || "Devopstrio"}
                    className="premium-author-avatar"
                  />
                ) : (
                  <div className="premium-author-avatar-fallback">
                    {(post.author || "Devopstrio").charAt(0).toUpperCase()}
                  </div>
                )}
                <span className="premium-author-name">
                  {post.author || "Devopstrio"}
                </span>
              </div>
              <div className="premium-card-stats">
                <span>
                  <FiEye size={14} /> {post.views || 0}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  };
  GridCard.propTypes = {
    post: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
  };

  const renderUI = () => {
    if (loading) {
      return (
        <div className="event-loading-wrapper">
          <div className="event-spinning-loader"></div>
          <p className="event-loading-text">
            Curating {activeCategoryInfo.name}...
          </p>
        </div>
      );
    }

    if (filteredPosts.length === 0) {
      return (
        <div className="event-empty-premium">
          <FiActivity className="event-empty-icon" />
          <h3 className="event-empty-title">Check Back Soon</h3>
          <p className="event-empty-desc">
            We are crafting new contents for this section.
          </p>
        </div>
      );
    }

    // Since they want the clean 3-column layout from the design for ALL, we just use the grid layout for everything now.
    return (
      <div className="premium-grid-layout">
        {filteredPosts.map((post, idx) => (
          <GridCard key={post.id} post={post} index={idx} />
        ))}
      </div>
    );
  };

  const nonWhitePaperPosts = posts.filter(p => p.category?.slug !== "white-paper");
  const featuredFeed = nonWhitePaperPosts.slice(0, 5);
  const spotlightFeed = nonWhitePaperPosts
    .filter((post) => post.section?.slug === "news-events")
    .slice(0, 5);

  return (
    <div className="event-master-container">
      <Mediahero />

      {/* NEW: Massive 3D Banner Slider for Featured Content */}
      <ScrollRevealWrapper className="event-section-header">
        <span className="event-section-label">Top Content</span>
        <h2 className="event-section-title">
          <span>Featured</span> Highlight
        </h2>
        <p className="event-section-subtitle">
          Discover our most impactful and popular stories curated just for you.
        </p>
      </ScrollRevealWrapper>
      <Premium3DSlider posts={featuredFeed} />

      <div className="event-master-layout">
        {/* NEW DYNAMIC SIDEBAR Navigation */}
        <aside className="event-master-sidebar">
          <div className="event-sticky-nav">
            <h3 className="event-sidebar-heading">
              <FiActivity className="event-heading-icon" /> Hub Explorer
            </h3>
            <div className="event-category-list">
              {allSections.map(
                (section) =>
                  section.items &&
                  section.items.length > 0 && (
                    <div key={section.slug} className="event-category-group">
                      <h4 className="event-category-group-title">
                        {section.name}
                      </h4>
                      {section.items.filter(cat => cat.slug !== "white-paper").map((cat) => (
                        <button
                          key={cat.slug}
                          onClick={() => setActiveCategory(cat.slug)}
                          className={`event-category-btn ${
                            activeCategory === cat.slug ? "active" : ""
                          }`}
                        >
                          {cat.icon || (
                            <FiFileText className="event-category-btn-icon" />
                          )}
                          <span className="event-category-name">
                            {cat.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  ),
              )}
            </div>
          </div>
        </aside>

        <main className="event-master-main">
          <ScrollRevealWrapper
            className="event-section-header"
            style={{ margin: "0 auto 3rem" }}
          >
            <span className="event-section-label">Articles</span>
            <h2 className="event-section-title">
              Recent <span>{activeCategoryInfo.name || "Posts"}</span>
            </h2>
            <p className="event-section-subtitle">
              {activeCategoryInfo.description ||
                "Stay ahead of the curve with our latest articles, tutorials, and thoughts."}
            </p>
          </ScrollRevealWrapper>
          <div className="event-master-renderbox">{renderUI()}</div>
        </main>
      </div>

      {/* NEW: Expanding Accordion Gallery Section */}
      <ScrollRevealWrapper className="event-section-header">
        <span className="event-section-label">Inside Look</span>
        <h2 className="event-section-title">
          Spotlight <span>Events</span>
        </h2>
        <p className="event-section-subtitle">
          A glimpse into the milestones and moments that define our journey.
        </p>
      </ScrollRevealWrapper>
      <AccordionGallery posts={spotlightFeed} />

      {/* NEW: Trending Now Layout Component */}
      <TrendingNow posts={nonWhitePaperPosts} />

      {/* NEW: Premium Call to Action Section from visual design */}
      <PremiumCTA />
      <Newsletter />
    </div>
  );
};

export default Events;
