import React, { useState } from "react";
import { ArrowRight, Server, Shield, Brain, Sparkles, TrendingUp } from "lucide-react";
import "./CaseStudies.css";
import Success_Stories from "../../assets/images/Success_Stories.png"

const CATEGORIES = [
  { id: "all", label: "All Cases" },
  { id: "cloud", label: "Cloud Migration" },
  { id: "devsecops", label: "DevSecOps" },
  { id: "ai", label: "AI & Automation" }
];

const CASE_STUDIES = [
   {
    id: "case-logistics",
    title: "Predictive Routing Platform for Global Logistics Hubs",
    client: "Centric Logix",
    category: "ai",
    desc: "Scaled an ultra-low latency real-time routing engine handling 25M+ active daily queries on GCP, optimizing fleet resource allocation and scheduling pipelines.",
    metrics: [
      { label: "Daily Queries", value: "25M+" },
      { label: "Fuel Efficiency", value: "+18%" }
    ],
    icon: <Brain size={24} />,
    color: "#ce2453"
  },
 
  {
    id: "case-neobank",
    title: "Zero-Downtime Multi-Region Financial Cloud Migration",
    client: "NeoBank International",
    category: "cloud",
    desc: "Architected a zero-trust multi-region financial platform on AWS, cutting infrastructure costs by 42% while automating compliance mappings for SOC2 & PCI-DSS.",
    metrics: [
      { label: "Cost Reduction", value: "42%" },
      { label: "Platform SLA", value: "99.999%" }
    ],
    icon: <Server size={24} />,
    color: "#522c72"
  },
  {
    id: "case-clinical",
    title: "High-Security Decoupling Pipeline for Patient Telemetry",
    client: "HexaCare Health",
    category: "devsecops",
    desc: "Engineered robust Azure Kubernetes pipelines with integrated static code analyzers and vulnerability gates, accelerating secure software delivery rates.",
    metrics: [
      { label: "Patch Speed", value: "85% Faster" },
      { label: "Sec Vulnerabilities", value: "0 Critical" }
    ],
    icon: <Shield size={24} />,
    color: "#e79e57"
  },
  {
    id: "case-retail",
    title: "Autonomous Scale & Cache Orchestration for Retail Peak",
    client: "ShopVibe E-Commerce",
    category: "cloud",
    desc: "Implemented automated load-testing harnesses and horizontal node scaling schedules ahead of Black Friday peak, preventing transaction bottlenecks.",
    metrics: [
      { label: "Peak Transactions", value: "80k/sec" },
      { label: "System Uptime", value: "100%" }
    ],
    icon: <TrendingUp size={24} />,
    color: "#962964"
  },
  {
    id: "case-factory",
    title: "Edge Compute Platform for Automated Defect Sorting",
    client: "Krupp Heavy Industry",
    category: "ai",
    desc: "Deployed containerized computer-vision models on local manufacturing edge gateways, reducing industrial sorting latency down to single-digit milliseconds.",
    metrics: [
      { label: "Edge Latency", value: "<8ms" },
      { label: "Accuracy Rating", value: "99.8%" }
    ],
    icon: <Sparkles size={24} />,
    color: "#dd5c54"
  }
];

export default function CaseStudies() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredCases = activeCategory === "all"
    ? CASE_STUDIES
    : CASE_STUDIES.filter(cs => cs.category === activeCategory);

  return (
    <section className="casestudies-root" id="case-studies-section">
      <div className="casestudies-container">
        
        {/* Section Header (Left-aligned to match other sections) */}
        <div className="casestudies-header">
          <span className="casestudies-pill">Success Stories</span>
          <h2 className="casestudies-title">
            Real impact, <span>delivered at scale</span>
          </h2>
          <p className="casestudies-subtitle">
            Explore how Devopstrio partners with forward-thinking enterprises to architect high-throughput cloud platforms, secure CI/CD pipelines, and scale advanced AI capabilities.
          </p>
        </div>

        {/* Dynamic Category Navigation */}
        <div className="casestudies-filters">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              className={`casestudies-filter-btn ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
              aria-label={`Filter case studies by ${cat.label}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Interactive Case Studies Grid & Layout matching the image mockup */}
        <div className="casestudies-main-layout">
          {/* Left: Portrait Image */}
          <div className="casestudies-portrait-wrap">
            <img 
              src={Success_Stories} 
              alt="Successful business executive portrait" 
            />
          </div>

          {/* Right: 3 Case Study Cards Row */}
          <div className="casestudies-cards-row">
            {filteredCases.slice(0, 3).map((cs, idx) => {
              // The 3rd card has a solid highlighted background
              const isHighlighted = idx === 2;
              const primaryMetric = cs.metrics[0] || { value: "100%", label: "Success" };
              return (
                <div
                  key={cs.id}
                  className={`casestudies-modern-card card-idx-${idx} ${isHighlighted ? "highlighted" : ""}`}
                  id={`case-card-${cs.id}`}
                >
                  <div className="casestudies-card-top">
                    <span className="casestudies-card-metric-val">{primaryMetric.value}</span>
                    <span className="casestudies-card-metric-lbl">{primaryMetric.label}</span>
                  </div>
                  <h3 className="casestudies-card-title-modern">{cs.title}</h3>
                  <p className="casestudies-card-desc-modern">{cs.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
