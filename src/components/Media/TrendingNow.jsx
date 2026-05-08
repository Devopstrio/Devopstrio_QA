import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useScrollReveal from "../../hooks/useScrollReveal";
import "./TrendingNow.css";

const TrendingNow = ({ posts }) => {
  const revealRef = useScrollReveal();

  if (!posts || posts.length === 0) return null;

  // Add a slight variance to filter to make sure it's trending
  const trending = [...posts]
    .sort(
      (a, b) =>
        (b.views || 0) + (b.likes || 0) - ((a.views || 0) + (a.likes || 0)),
    )
    .slice(0, 3);

  if (trending.length === 0) return null;

  return (
    <div ref={revealRef} className="trending-now-section scroll-reveal">
      <div className="trending-now-container">
        <h2 className="trending-now-heading">TRENDING NOW</h2>
        <div className="trending-now-grid">
          {trending.map((post, idx) => (
            <Link
              key={post.id || idx}
              to={`/${post.section?.slug || ""}/${post.category?.slug || "general"}/${post.id}`}
              className="trending-card"
            >
              <div className="trending-card-img-wrapper">
                <img
                  src={post.image || "/images/placeholder.jpg"}
                  alt={post.title}
                  className="trending-card-img"
                />
              </div>
              <div className="trending-card-content">
                <span className="trending-card-category">
                  {post.category?.name || "ARTICLE"}
                </span>
                <h3 className="trending-card-title">{post.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

TrendingNow.propTypes = {
  posts: PropTypes.array,
};

export default TrendingNow;
