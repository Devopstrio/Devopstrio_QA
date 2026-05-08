import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Ooviya from "../../assets/images/oviya_dev.png";
import { Zap, Shield, TrendingUp, ArrowRight, Check } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  const [isVisible] = useState(true);
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-layout">
          <div className={`hero-content ${isVisible ? "visible" : ""}`}>
            {/* Premium Badge with Animated Icon */}
            {/* <div className="hero-badge-wrapper">
              <span className="hero-badge">
                <span className="hero-badge-pulse"></span>
                <Zap className="badge-icon" size={16} />
                Innovate | Deliver | Impact
              </span>
              <div className="badge-glow" />
            </div> */}

            {/* Main Heading with Staggered Animation */}
            <div className="heading-container">
              <h1>
                <span className="line line-1" style={{ display: "inline-block", marginRight: "16px" }}>Build</span>
                <span className="line line-2" style={{ 
                  display: "inline-block",
                  background: "linear-gradient(120deg, #522c72 0%, #962964 25%, #ce2453 50%, #dd5c54 75%, #e79e57 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent"
                }}>
                  Your Future
                </span>
                <span className="line line-3">With Us</span>
              </h1>

              {/* Animated underline */}
              <div className="hero-underline">
                <div className="underline-glow" />
              </div>
            </div>

            {/* Description with fade-in */}
            <p className="hero-description">
              Join a fast-growing tech Company shaping cloud, AI & Innovation
            </p>

            {/* Premium CTA Buttons with Animated Icons */}
            <div className="hero-actions">
              <button
                className="hero-btn primary"
                onClick={() => navigate("/careers/jobs")}
              >
                <span className="btn-text">Explore Careers</span>
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
            <img src={Ooviya} alt="Hero Visual" />
          </div>
        </div>
      </div>
    </section>
  );
}
