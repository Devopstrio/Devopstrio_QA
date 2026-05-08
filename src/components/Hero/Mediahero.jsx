import { useState } from "react";
import { useNavigate } from "react-router-dom";
import oviya from "../../assets/images/oviya_dev.png";
import { Zap, Shield, TrendingUp, ArrowRight, Check } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  const [isVisible] = useState(true);
  const navigate = useNavigate();

  // Word scrolling state
  const wordPairs = [
    { cloud: "Resources", product: "Media" },
    { cloud: "News", product: "Events" },
    { cloud: "Insights", product: "Updates" },
    { cloud: "Awards", product: "Success" },
  ];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-layout">
          <div className={`hero-content ${isVisible ? "visible" : ""}`}>
            {/* Main Heading with Staggered Animation */}
            <div className="heading-container">
              <h1>
                <span className="line line-1">Devopstrio</span>
                <span className="line line-2">
                  <div className="word-scroll-container">
                    {/* Unified scroll container with both words */}
                    <div className="unified-scroll-track1">
                      {[...wordPairs, ...wordPairs].map((pair, i) => (
                        <div className="scroll-row" key={i}>
                          <span className="scroll-cloud1">{pair.cloud}</span>
                          <span className="scroll-amp">&</span>
                          <span className="scroll-product">{pair.product}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </span>
                <span className="line line-3">MediaHub</span>
              </h1>

              {/* Animated underline */}
              <div className="hero-underline">
                <div className="underline-glow" />
              </div>
            </div>

            {/* Description with fade-in */}
            <p className="hero-description">
              Devopstriois a top DevOps consulting firm that assists businesses
              in speeding up their digital transformation process using cloud
              migration, DevSecOps automation, and product engineering.
            </p>

            {/* Premium CTA Buttons with Animated Icons */}
            <div className="hero-actions">
              <button
                className="hero-btn primary"
                onClick={() => navigate("/contact")}
              >
                <span className="btn-text">Book a DevOps Strategy Call</span>
                <ArrowRight className="btn-icon" size={20} />
                <div className="btn-glow" />
              </button>
            </div>

            {/* Trust indicators with Animated Icons */}
            {/* <div className="trust-indicators">
              <div className="trust-item">
                <div className="trust-icon">
                  <Shield size={14} />
                </div>
                <span>Enterprise-Grade</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <TrendingUp size={14} />
                </div>
                <span>High Performance</span>
              </div>
              <div className="trust-item">
                <div className="trust-icon">
                  <Check size={14} />
                </div>
                <span>Secure & Scalable</span>
              </div>
            </div> */}
          </div>
          {/* RIGHT SIDE IMAGE */}
          <div className="hero-image">
            <img src={oviya} alt="Hero Visual" />
          </div>
        </div>
      </div>
    </section>
  );
}
