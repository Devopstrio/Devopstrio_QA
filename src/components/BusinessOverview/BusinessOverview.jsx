import React from "react";
import "./BusinessOverview.css";
import Business_overview from "../../assets/images/Business_overview.png";

export default function BusinessOverview() {
  return (
    <section className="bussoverview-root">
      <div className="bussoverview-container">
        
        {/* HEADER AREA */}
        <div className="bussoverview-header-row">
          <div className="bussoverview-header-left">
            <div className="bussoverview-pill">
              <span className="bussoverview-pill-icon"></span> Business Overview
            </div>
            <h2 className="bussoverview-main-title">
              Enterprise DevOps & <br />
              <span>Cloud Solutions</span> for Business
            </h2>
          </div>
          <div className="bussoverview-header-right">
            <p className="bussoverview-header-desc">
              Devopstrio delivers world-class DevOps consulting, reliable cloud migration, and secure multi-cloud engineering. We modernize legacy core infrastructures into automated, high-performing systems.
            </p>
          </div>
        </div>

        {/* CONTENT GRID */}
        <div className="bussoverview-content-grid">
          
          {/* LEFT COLUMN: IMAGE */}
          <div className="bussoverview-image-card">
            <img src={Business_overview} alt="Devopstrio engineering collaboration" />
          </div>

          {/* RIGHT COLUMN: 2x2 CARDS */}
          <div className="bussoverview-cards-col">
            
            {/* TOP ROW (2 Columns) */}
            <div className="bussoverview-top-cards-row">
              
              {/* TOP LEFT CARD */}
              <div className="bussoverview-text-card">
                <h3 className="bussoverview-card-title">Your Growth, Our Priority</h3>
                <p className="bussoverview-card-desc">
                  We align our technical expertise with your goals, ensuring every pipeline and cloud configuration directly contributes to your bottom-line success.
                </p>
                <a href="/services" className="bussoverview-card-link">
                  Learn More <span className="bussoverview-link-arrow">↗</span>
                </a>
              </div>

              {/* TOP RIGHT CARD: STATS */}
              <div className="bussoverview-stats-card">
                <div className="bussoverview-stat-item">
                  <span className="bussoverview-stat-val">450+</span>
                  <span className="bussoverview-stat-lbl">Successful Deployments</span>
                </div>
                <div className="bussoverview-stat-divider"></div>
                <div className="bussoverview-stat-item">
                  <span className="bussoverview-stat-val">750+</span>
                  <span className="bussoverview-stat-lbl">Automated Pipelines</span>
                </div>
              </div>

            </div>

            {/* BOTTOM CARD (Span 2) */}
            <div className="bussoverview-bottom-card">
              <div className="bussoverview-bottom-card-content">
                <h3 className="bussoverview-card-title">Innovating for Your Success</h3>
                <p className="bussoverview-card-desc">
                  By integrating predictive AI checks and zero-trust security compliance directly into your CI/CD cycles, we deliver cutting-edge continuous innovation by default.
                </p>
                <a href="/platform" className="bussoverview-card-link">
                  Learn More <span className="bussoverview-link-arrow">↗</span>
                </a>
              </div>
              
              {/* INTERACTIVE SQUARE BUTTONS */}
              <div className="bussoverview-action-buttons">
                <button className="bussoverview-btn-square rose-btn" aria-label="Previous offering">
                  <span>↙</span>
                </button>
                <button className="bussoverview-btn-square yellow-btn" aria-label="Next offering">
                  <span>↗</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
