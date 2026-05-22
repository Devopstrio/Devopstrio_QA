import React, { useState } from "react";
import "./CSRCommitment.css";
import mainTeam from "../../assets/images/csr_main_team.png";
import archedPerson from "../../assets/images/csr_arched_person.png";
import { 
  Leaf, 
  Cpu, 
  Award, 
  Calendar, 
  Check, 
  Star, 
  ArrowRight, 
  Shield, 
  TrendingDown, 
  Trees, 
  Zap, 
  Sparkles, 
  History, 
  Target, 
  Eye 
} from "lucide-react";

export default function CSRCommitment() {
  const [activeTab, setActiveTab] = useState("history");

  const tabData = {
    history: {
      intro: "We have pioneered carbon-efficient DevOps strategies and cloud architecture since 2019.",
      bullets: [
        "Pioneered green cloud optimization formulas, reducing redundant server runtime by 45%.",
        "Transitioned to a 100% remote-first model, saving 120+ metric tons of commuter emissions.",
        "Partnered with global carbon offset platforms to seed reforestation projects worldwide."
      ]
    },
    mission: {
      intro: "Our current mission is to guide enterprises in deploying hyper-efficient, zero-waste cloud systems.",
      bullets: [
        "Architect serverless setups that automatically scale to zero idle energy usage.",
        "Provide unified dashboard instrumentation to track digital carbon footprints.",
        "Devote 5% of our monthly engineering capacity to pro-bono non-profit technology upgrades."
      ]
    },
    vision: {
      intro: "We envision a tech ecosystem where software scale never compromises our ecological future.",
      bullets: [
        "Setting the benchmark for green computing frameworks and automated cloud optimization.",
        "Planting 10,000+ mature trees annually through our 'One Migration, One Tree' initiative.",
        "Fostering diverse and inclusive engineering teams dedicated to ethical and sustainable AI."
      ]
    }
  };

  return (
    <section className="csr-root" id="csr-section">
      <div className="csr-grid-bg"></div>
      
      <div className="csr-container">
        
        {/* TWO-COLUMN LAYOUT */}
        <div className="csr-body">
          
          {/* LEFT COLUMN: OVERLAPPING IMAGES & FLOATING BADGES */}
          <div className="csr-visuals">
            <div className="visuals-glow"></div>
            
            {/* Primary Main Image */}
            <div className="csr-img-wrap-primary">
              <img 
                src={mainTeam} 
                alt="Devopstrio CSR team forest planting" 
                className="csr-img-primary" 
              />
            </div>

            {/* Overlapping Arched Secondary Image */}
            <div className="csr-img-wrap-secondary">
              <img 
                src={archedPerson} 
                alt="Greenhouse tech worker examining plants" 
                className="csr-img-secondary" 
              />
            </div>

            {/* Floating Badge 1: Experience */}
            <div className="csr-badge-years">
              <div className="badge-years-icon">
                <Calendar className="badge-icon-svg" />
              </div>
              <div className="badge-years-text">
                <h3>5+</h3>
                <p>Years Green DevOps</p>
              </div>
            </div>

            {/* Floating Badge 2: Award */}
            <div className="csr-badge-award">
              <div className="badge-award-icon">
                <Award className="badge-icon-svg" />
              </div>
              <div className="badge-award-text">
                <h3>2026 Eco-Cloud</h3>
                <p>Excellence Award Winner</p>
              </div>
            </div>
            
          </div>

          {/* RIGHT COLUMN: TEXT CONTENT & INTERACTIVE TABS */}
          <div className="csr-content-col">
            
            {/* Title / Leaf Pill */}
            <div className="csr-pill-wrap">
              <span className="csr-pill-new">
                <Leaf className="pill-leaf-icon" /> About Us
              </span>
            </div>

            <h2 className="csr-title-new">
              Building a <span>Greener Future</span> Together & Protect
            </h2>

            {/* Tab Selector Buttons */}
            <div className="csr-tab-nav">
              <button 
                className={`tab-btn ${activeTab === "history" ? "active" : ""}`}
                onClick={() => setActiveTab("history")}
              >
                Our History
              </button>
              <button 
                className={`tab-btn ${activeTab === "mission" ? "active" : ""}`}
                onClick={() => setActiveTab("mission")}
              >
                Our Mission
              </button>
              <button 
                className={`tab-btn ${activeTab === "vision" ? "active" : ""}`}
                onClick={() => setActiveTab("vision")}
              >
                Our Vision
              </button>
            </div>

            {/* Tab Panel Content */}
            <div className="csr-tab-panel">
              <p className="tab-intro-text">{tabData[activeTab].intro}</p>
              
              <ul className="tab-bullets-list">
                {tabData[activeTab].bullets.map((bullet, index) => (
                  <li key={index} className="tab-bullet-item">
                    <span className="bullet-check-circle">
                      <Check className="bullet-check-icon" />
                    </span>
                    <p>{bullet}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA and Trustpilot row */}
            <div className="csr-cta-row">
              <a href="/sustainability" className="csr-explore-btn">
                <span>Explore More</span>
                <span className="btn-circle-arrow">
                  <ArrowRight className="btn-arrow-icon" />
                </span>
              </a>

              <div className="csr-trustpilot">
                <div className="tp-stars">
                  <Star className="tp-star-icon filled" /> Trustpilot
                </div>
                <div className="tp-rating">
                  <span className="tp-stars-group">★★★★★</span>
                  <p>Excellent 4.9 out of 5</p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM METRICS BANNER WITH ICONS */}
        <div className="csr-metrics-banner-new">
          
          <div className="banner-metric-new">
            <div className="metric-icon-wrap rose-icon">
              <Zap className="metric-icon-svg" />
            </div>
            <h3>98%</h3>
            <p>Cloud Optimization Efficiency</p>
          </div>

          <div className="banner-metric-new">
            <div className="metric-icon-wrap coral-icon">
              <TrendingDown className="metric-icon-svg" />
            </div>
            <h3>565t+</h3>
            <p>Annual CO₂ Saved</p>
          </div>

          <div className="banner-metric-new">
            <div className="metric-icon-wrap orange-icon">
              <Trees className="metric-icon-svg" />
            </div>
            <h3>36k+</h3>
            <p>Trees Planted Worldwide</p>
          </div>

          <div className="banner-metric-new">
            <div className="metric-icon-wrap purple-icon">
              <Sparkles className="metric-icon-svg" />
            </div>
            <h3>100%</h3>
            <p>Carbon Neutral Operations</p>
          </div>

        </div>

      </div>
    </section>
  );
}
