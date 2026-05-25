import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiShield, 
  FiCpu, 
  FiActivity, 
  FiAward, 
  FiChevronRight, 
  FiUser, 
  FiPlay, 
  FiChevronLeft,
  FiFileText,
  FiCalendar
} from "react-icons/fi";
import PlatformSectionhero from "../../components/Hero/PlatformSectionhero";
import AIConsultationForm from "../../components/AIConsultationForm/AIConsultationForm";
import LifeSciCaseStudies from "../../components/LifeSciCaseStudies/LifeSciCaseStudies";
import rahmanImg from "../../assets/images/rahman.png";
import "../../Style/platform/LifeSciences.css";

export default function LifeSciences() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  // Tab definitions
  const tabsData = [
    {
      title: "Software for Pharma",
      heading: "Transforming Pharmaceutical Operations & Drug Development",
      desc: "Accelerate pipeline research, automate clinical supply tracking, and build FDA-compliant data pipelines to bring therapies to market faster and safer.",
      bullets: [
        "GxP & FDA Title 21 CFR Part 11 compliant setups",
        "Clinical trials data pipeline automation",
        "Drug formulation simulation databases",
        "Secure cloud research environment deployment"
      ]
    },
    {
      title: "Medical Technology",
      heading: "IoMT & Medical Device Software Engineering",
      desc: "Design secure, highly reliable software systems for smart medical hardware, connected health implants, and remote telemetry devices.",
      bullets: [
        "Software as a Medical Device (SaMD) creation",
        "Real-time sensor telemetry processing",
        "ISO 13485 compliant workflow setups",
        "Edge computing diagnostics layers"
      ]
    },
    {
      title: "Precision Medicine Solutions",
      heading: "Custom Multi-Omics Analysis & Precision Care Platforms",
      desc: "Process complex genomic databases, DNA sequencing results, and custom proteomic parameters to deliver personalized treatments at scale.",
      bullets: [
        "High-performance bioinformatics data pools",
        "Next-generation sequencing (NGS) processing",
        "AI-driven genome mapping integrations",
        "Clinical decision support engines"
      ]
    },
    {
      title: "Patient Services",
      heading: "Connected Digital Health Portals & Patient Support Platforms",
      desc: "Deliver intuitive, secure, and reliable user interfaces for disease tracking, drug adherence monitoring, and remote specialist consultation.",
      bullets: [
        "Secure multi-role portal architectures",
        "HIPAA-compliant video and messaging channels",
        "Automated medicine intake notifications",
        "Integration with standard wearables"
      ]
    },
    {
      title: "Laboratory Informatics",
      heading: "Modern LIMS & Digital Lab Workflow Management",
      desc: "Automate lab operations, track sample status in real-time, and streamline collaborative scientific pipelines across international departments.",
      bullets: [
        "Flexible LIMS system integration",
        "Sample storage temperature telemetry tracking",
        "Audit logs and analytical record vaults",
        "EHR/EMR standard platform synchronization"
      ]
    },
    {
      title: "Decentralized Clinical Trials Software",
      heading: "Next-Gen Decentralized Trial Platforms (DCT)",
      desc: "Enable virtual trials, electronic informed consent (eConsent), and high-fidelity patient telemetry to lower trial drop-out rates.",
      bullets: [
        "Remote digital consent verifications",
        "Distributed clinical data vaults",
        "Multi-country localized legal compliance",
        "Real-world data (RWD) pipeline structures"
      ]
    }
  ];



  return (
    <div className="plt-lifesci-page">
      {/* 1. Hero Section */}
      <PlatformSectionhero />

      <section className="plt-lifesci-hero-section">
        <div className="plt-lifesci-hero-bg" />
        <div className="plt-lifesci-container">
          <div className="plt-lifesci-hero-title-area">
            <h1 className="plt-lifesci-hero-h1">
              Software Solutions for <br />
              <span className="plt-lifesci-gradient-text">Life Sciences Companies</span>
            </h1>
          </div>

          <div className="plt-lifesci-hero-card">
            <div className="plt-lifesci-hero-card-left">
              <h3>Innovative and trusted software solutions for Life Sciences</h3>
              <p>Accelerating drug discovery, clinical trials, and multi-omics data computation. We build safe, high-throughput pipelines, GxP-compliant data warehouses, and secure remote patient monitoring integrations.</p>
            </div>
            <div className="plt-lifesci-hero-stats-grid">
              <div className="plt-lifesci-hero-stat-item">
                <div className="plt-lifesci-hero-stat-val">60+</div>
                <div className="plt-lifesci-hero-stat-lbl">life sciences software developers</div>
              </div>
              <div className="plt-lifesci-hero-stat-item">
                <div className="plt-lifesci-hero-stat-val">100%</div>
                <div className="plt-lifesci-hero-stat-lbl">compliant with industry regulations</div>
              </div>
              <div className="plt-lifesci-hero-stat-item">
                <div className="plt-lifesci-hero-stat-val">4.9/5</div>
                <div className="plt-lifesci-hero-stat-lbl">rating on Clutch</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Choose Us Section */}
      <section className="plt-lifesci-choose-section">
        <div className="plt-lifesci-container">
          <div className="plt-lifesci-choose-header">
            <h2 className="plt-lifesci-sec-h2">Choose us for life science software</h2>
            <p className="plt-lifesci-choose-p">
              To ensure the successful work of Devopstrio's Life Sciences software development team, we are compliant with ISO standards certified confirming the high level of information security and quality management.
            </p>
          </div>

          <div className="plt-lifesci-choose-grid">
            <div className="plt-lifesci-choose-card">
              <div className="plt-lifesci-choose-icon-wrap">
                <FiShield />
              </div>
              <h3>ISO 9001</h3>
              <p>Certified Quality Management Systems ensuring rigorous software testing, consistent delivery models, and stellar engineering performance.</p>
            </div>
            <div className="plt-lifesci-choose-card">
              <div className="plt-lifesci-choose-icon-wrap">
                <FiAward />
              </div>
              <h3>ISO 27001</h3>
              <p>Gold-standard Information Security compliance. Guarding clinical datasets, patient records, and sensitive pharmaceutical IP from threat vectors.</p>
            </div>
            <div className="plt-lifesci-choose-card">
              <div className="plt-lifesci-choose-icon-wrap">
                <FiCheckCircle />
              </div>
              <h3>HIPAA & GxP Compliance</h3>
              <p>Strict structural alignment with GxP protocols and international HIPAA safety metrics safeguarding health info flow.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Value Chains Section */}
      <section className="plt-lifesci-value-chain-section">
        <div className="plt-lifesci-container">
          <div className="plt-lifesci-choose-header">
            <h2 className="plt-lifesci-sec-h2">Life science software in value chains</h2>
            <p className="plt-lifesci-choose-p">Explore the strategic sectors where our tech stack delivers immediate returns for research and digital trials.</p>
          </div>

          <div className="plt-lifesci-tabs-layout">
            <div className="plt-lifesci-tabs-sidebar">
              {tabsData.map((tab, idx) => (
                <button
                  key={idx}
                  className={`plt-lifesci-tab-btn ${activeTab === idx ? "active" : ""}`}
                  onClick={() => setActiveTab(idx)}
                >
                  {tab.title}
                  <FiChevronRight />
                </button>
              ))}
            </div>

            <div className="plt-lifesci-tab-content-panel">
              <h3>{tabsData[activeTab].heading}</h3>
              <p className="tab-desc">{tabsData[activeTab].desc}</p>
              <h4>What we do:</h4>
              <ul className="plt-lifesci-tab-bullets">
                {tabsData[activeTab].bullets.map((bullet, idx) => (
                  <li key={idx}>
                    <FiCheckCircle className="plt-lifesci-bullet-icon" />
                    {bullet}
                  </li>
                ))}
              </ul>
              <button className="plt-lifesci-tab-cta-btn" onClick={() => navigate('/contact')}>
                Get in touch <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Expert Section */}
      <section className="plt-lifesci-expert-section">
        <div className="plt-lifesci-container">
          <div className="plt-lifesci-expert-card">
            <div className="plt-lifesci-expert-img-part">
              <img src={rahmanImg} alt="Rahman" />
            </div>

            <div className="plt-lifesci-expert-info-part">
              <div className="plt-lifesci-expert-badge">
                <span>HEAD OF LIFE SCIENCES</span>
              </div>
              <h3>Rahman</h3>
              <p className="expert-title">Machine Learning Engineer</p>
              <p className="expert-bio">
                Rahman is a leading Machine Learning Engineer at Devopstrio, specializing in deep learning, neural networks, GxP software compliance, and predictive AI models for healthcare telemetry.
              </p>
              <button className="plt-lifesci-expert-schedule-btn" onClick={() => navigate('/contact')}>
                Schedule a call <FiCalendar style={{ marginLeft: "8px" }} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interview Banner */}
      <section className="plt-lifesci-interview-section">
        <div className="plt-lifesci-container">
          <div className="plt-lifesci-interview-card">
            <div className="plt-lifesci-interview-text">
              <h3>Interview with Craig Lipset. Clinical Trials, Investments in Pharma, and Challenges of the Future.</h3>
              <button className="plt-lifesci-btn-primary" onClick={() => navigate('/contact')}>
                Watch now <FiPlay style={{ marginLeft: "4px" }} />
              </button>
            </div>
            <div className="plt-lifesci-interview-media">
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80" 
                alt="Craig Lipset Interview Mockup" 
                className="plt-lifesci-interview-media-img"
              />
              <div className="plt-lifesci-play-btn" onClick={() => navigate('/contact')}>
                <FiPlay />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Case Studies Section */}
      <LifeSciCaseStudies />

      {/* Reusable Form Component */}
      <AIConsultationForm />
    </div>
  );
}
