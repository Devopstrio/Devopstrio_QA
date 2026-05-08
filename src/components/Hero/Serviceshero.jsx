import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import thangalakshmi from "../../assets/images/thangalakshmi_dev.png";
import { Zap, Shield, TrendingUp, ArrowRight, Check } from "lucide-react";
import "./Hero.css";

export default function Hero({ title, subtitle, description, image }) {
  const [isVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  // Word scrolling state
  const wordPairs = [
    { cloud: "Cloud", product: "Migration" },
    { cloud: "AI", product: "Platforms" },
    { cloud: "Data", product: "Engineering" },
    { cloud: "DevOps", product: "Product" },
  ];

  const defaultDescription = location.pathname === "/services/cloud-architecture"
    ? "We design and build scalable cloud architectures and intelligent systems that support automation, improve performance, and enable sustainable business growth—focusing on real outcomes, not just code."
    : "We design and execute secure, scalable cloud migration services that seamlessly move your applications, data, and infrastructure to the cloud reducing costs, improving performance.";

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-layout">
          <div className={`hero-content ${isVisible ? "visible" : ""}`}>
            {/* Main Heading with Staggered Animation */}
            <div className="heading-container">
              {title ? (
                <h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
              ) : (
                <h1>
                  <span className="line line-1">Powering Digital</span>
                  <span className="line line-2">
                    <div className="word-scroll-container">
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
                  <span className="line line-3">Transformation</span>
                </h1>
              )}

              {/* Animated underline */}
              <div className="hero-underline">
                <div className="underline-glow" />
              </div>
            </div>

            {subtitle && <h3 className="hero-subtitle-text">{subtitle}</h3>}

            {/* Description with fade-in */}
            <p className="hero-description">
              {description || defaultDescription}
            </p>

            {/* Premium CTA Buttons with Animated Icons */}
            <div className="hero-actions">
              <button
                className="hero-btn primary"
                onClick={() => navigate("/contact")}
              >
                <span className="btn-text">Get a Free Consultation</span>
                <ArrowRight className="btn-icon" size={20} />
                <div className="btn-glow" />
              </button>
            </div>
          </div>
          {/* RIGHT SIDE IMAGE */}
          <div className="hero-image">
            <img src={image || thangalakshmi} alt="Hero Visual" />
          </div>
        </div>
      </div>
    </section>
  );
}
