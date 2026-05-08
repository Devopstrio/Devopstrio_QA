import React from "react";
import { FiStar } from "react-icons/fi";
import "./AuthorityInfoBar.css";

const AuthorityInfoBar = ({ isScrolled }) => {
  return (
    <div className={`drio-navbar-infobar ${isScrolled ? "drio-hidden" : ""}`}>
      <div className="drio-infobar-container">
        <div className="drio-infobar-left">
          <div className="drio-partner-badge">
            <div className="drio-ms-logo">
              <span className="ms-box-1"></span>
              <span className="ms-box-2"></span>
              <span className="ms-box-3"></span>
              <span className="ms-box-4"></span>
            </div>
            <div className="drio-partner-text">
              <span className="drio-partner-main">Microsoft</span>
              <span className="drio-partner-sub">Solutions Partner</span>
            </div>
          </div>

          <div className="drio-infobar-divider"></div>

          <div className="drio-rating-section">
            <span className="drio-rating-label">Excellent</span>
            <div className="drio-stars">
              <FiStar className="star-filled" />
              <FiStar className="star-filled" />
              <FiStar className="star-filled" />
              <FiStar className="star-filled" />
              <FiStar className="star-filled" />
            </div>
            <span className="drio-reviews-count">819 reviews</span>
          </div>
        </div>

        <div className="drio-infobar-right">
          <div className="drio-support-info">
            <span className="drio-support-label">
              Customer Support — +44 7471 482903
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorityInfoBar;
