import { useState } from "react";
import { useNavigate } from "react-router-dom";
import suman from "../../assets/images/suman_dev.png";
import { Zap, Shield, TrendingUp, ArrowRight, Check } from "lucide-react";
import "./Hero.css";

export default function Hero() {
  const [isVisible] = useState(true);
  const navigate = useNavigate();

  // Word scrolling state
  const wordPairs = [
    { cloud: "Cloud", product: "Migration" },
    { cloud: "AI", product: "Platforms" },
    { cloud: "Data", product: "Engineering" },
    { cloud: "DevOps", product: "Product" },
  ];

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-layout">
          <div className={`hero-content ${isVisible ? "visible" : ""}`}>
            {/* Main Heading with Staggered Animation */}
            <div className="heading-container">
              <h1>
                <span className="line line-1">Building Scalable</span>
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
                <span className="line line-3">Solutions</span>
              </h1>

              {/* Animated underline */}
              <div className="hero-underline">
                <div className="underline-glow" />
              </div>
            </div>

            <p className="hero-description" dangerouslySetInnerHTML={{ __html: "We design, build, and operate intelligent cloud platforms on <a href='/partners/azure' class='about-inline-link'>Azure</a>, <a href='/partners/aws' class='about-inline-link'>AWS</a>, and <a href='/partners/gcp' class='about-inline-link'>GCP</a> accelerating innovation, reducing cost, and enabling <a href='/services/artificial-intelligence' class='about-inline-link'>autonomous operations through AI</a>." }}></p>

            {/* Premium CTA Buttons with Animated Icons */}
            <div className="hero-actions">
              <button
                className="hero-btn primary"
                onClick={() => navigate("/contact")}
              >
                <span className="btn-text">Book a Strategy Call</span>
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
            <img src={suman} alt="Hero Visual" />
          </div>
        </div>
      </div>
    </section>
  );
}
