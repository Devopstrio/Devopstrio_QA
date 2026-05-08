import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Components
import Serviceshero from "../../components/Hero/Serviceshero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

// Icons
import {
  FiArrowRight,
  FiArrowDown,
  FiCode,
  FiGitBranch,
  FiTerminal,
  FiRepeat,
  FiCheckCircle,
  FiServer,
  FiDatabase,
  FiLayers,
  FiCpu,
  FiActivity,
  FiMonitor,
  FiPackage,
  FiSettings,
  FiPlay,
  FiChevronDown,
  FiChevronRight,
  FiShield,
  FiZap,
  FiTrendingUp,
  FiBox,
  FiGrid,
  FiBarChart2,
  FiSearch,
  FiLock,
  FiGlobe,
  FiTool,
  FiTarget,
  FiClock,
  FiAward,
  FiRefreshCw,
  FiUploadCloud,
  FiGitMerge,
  FiCheck,
  FiEye,
} from "react-icons/fi";

import { FaDocker, FaQuoteLeft } from "react-icons/fa";

import "../../Style/service/CICD.css";

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const CICD = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [activeSidebar, setActiveSidebar] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const slideInterval = useRef(null);

  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  // ---- AUTO SLIDER ----
  const slides = [
    {
      image:
        "/images/New/Build_&_Test-Automatically.png",
      tag: "CONTINUOUS INTEGRATION",
      title: "Build & Test Automatically",
      desc: "Every code push triggers automated builds, runs comprehensive test suites, and generates detailed quality reports — catching bugs before they reach production.",
    },
    {
      image:
        "/images/New/Deploy_with_Confidence.png",
      tag: "CONTINUOUS DELIVERY",
      title: "Deploy with Confidence",
      desc: "Automated deployment pipelines push validated code through staging environments to production with zero-downtime blue-green and canary release strategies.",
    },
    {
      image:
        "/images/New/Scalable_Pipeline_Architecture.png",
      tag: "INFRASTRUCTURE",
      title: "Scalable Pipeline Architecture",
      desc: "Cloud-native pipeline infrastructure that auto-scales with demand, supports parallel execution, and integrates with your entire DevOps toolchain.",
    },
  ];

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(slideInterval.current);
  }, [slides.length]);

  // ---- SIDEBAR TABS ----
  const sidebarTabs = [
    {
      icon: <FiGitBranch />,
      label: "Source Control",
      title: "Git-Based Workflow Automation",
      desc: "Monorepo and multi-repo support with branch protection rules, automated merge checks, and intelligent code review assignments. Every change is tracked, reviewed, and tested before merge.",
      features: [
        "Branch protection & merge policies",
        "Automated PR reviews",
        "Commit signing & verification",
        "Monorepo change detection",
      ],
      image:
        "/images/New/Git-Based_Workflow_Automation.png",
    },
    {
      icon: <FiCpu />,
      label: "Build System",
      title: "Distributed Build Engine",
      desc: "Parallel build execution across containerized runners with intelligent caching, artifact management, and dependency resolution. Build once, deploy anywhere.",
      features: [
        "Parallel & distributed builds",
        "Layer caching & incremental builds",
        "Multi-architecture support",
        "Artifact versioning & registry",
      ],
      image:
        "/images/New/Distributed-Build_Engine.png",
    },
    {
      icon: <FiShield />,
      label: "Security Scans",
      title: "Shift-Left Security Pipeline",
      desc: "Automated security scanning at every stage — SAST, DAST, SCA, container image scanning, and secrets detection. Block vulnerable code before it ships.",
      features: [
        "SAST & DAST integration",
        "Container vulnerability scanning",
        "License compliance checks",
        "Secrets detection & rotation",
      ],
      image:
        "/images/New/Shift-Left_Security_Pipeline.png",
    },
    {
      icon: <FiUploadCloud />,
      label: "Deployment",
      title: "Zero-Downtime Release Engine",
      desc: "Blue-green deployments, canary releases, and rolling updates with automated rollback. Multi-environment promotion with approval gates and audit trails.",
      features: [
        "Blue-green & canary deploys",
        "Environment promotion gates",
        "Automated rollback triggers",
        "Multi-cloud deployment targets",
      ],
      image:
        "/images/New/Pipeline-Observability_&_Analytics.png",
    },
    {
      icon: <FiEye />,
      label: "Monitoring",
      title: "Pipeline Observability & Analytics",
      desc: "Real-time pipeline dashboards, deployment frequency tracking, DORA metrics, and intelligent anomaly detection. Know your bottlenecks before they impact delivery.",
      features: [
        "DORA metrics dashboard",
        "Build time analytics",
        "Failure pattern detection",
        "Cost per deployment tracking",
      ],
      image:
        "/images/New/Zero-Downtime_Release_Engine.png",
    },
  ];

  // ---- PIPELINE STAGES ----
  const pipelineStages = [
    { icon: <FiGitMerge />, label: "Commit", color: "#522c72" },
    { icon: <FiCpu />, label: "Build", color: "#962964" },
    { icon: <FiCheck />, label: "Test", color: "#ce2453" },
    { icon: <FiShield />, label: "Scan", color: "#dd5c54" },
    { icon: <FiUploadCloud />, label: "Deploy", color: "#e79e57" },
    { icon: <FiBarChart2 />, label: "Monitor", color: "#e79e57" },
  ];

  // ---- BENEFITS ----
  const benefits = [
    {
      icon: <FiZap />,
      title: "10x Faster Releases",
      desc: "From weekly to hourly deployment cycles",
    },
    {
      icon: <FiShield />,
      title: "Security Built In",
      desc: "Automated scanning at every pipeline stage",
    },
    {
      icon: <FiTrendingUp />,
      title: "70% Cost Reduction",
      desc: "Through automation and resource optimization",
    },
    {
      icon: <FiRefreshCw />,
      title: "Zero Downtime",
      desc: "Blue-green and canary release strategies",
    },
    {
      icon: <FiTarget />,
      title: "99.9% Reliability",
      desc: "Self-healing pipelines with auto-recovery",
    },
    {
      icon: <FiAward />,
      title: "Full Compliance",
      desc: "Audit trails and policy-as-code enforcement",
    },
  ];

  // ---- COMPARISON ----
  const comparisonRows = [
    {
      feature: "Deployment Frequency",
      before: "Weekly / Monthly",
      after: "Multiple times daily",
    },
    {
      feature: "Lead Time for Changes",
      before: "2-4 weeks",
      after: "Under 1 hour",
    },
    { feature: "Change Failure Rate", before: "15-30%", after: "< 5%" },
    {
      feature: "Recovery Time",
      before: "Hours to days",
      after: "Under 10 minutes",
    },
    {
      feature: "Security Scanning",
      before: "Manual / Quarterly",
      after: "Every commit",
    },
    { feature: "Infrastructure Setup", before: "Days", after: "Minutes (IaC)" },
  ];

  // ---- FAQ ----
  const faqs = [
    {
      q: "What CI/CD tools do you work with?",
      a: "We work with Jenkins, GitHub Actions, GitLab CI, CircleCI, ArgoCD, Tekton, and cloud-native solutions like AWS CodePipeline, Azure DevOps, and GCP Cloud Build. We recommend tools based on your team and infrastructure.",
    },
    {
      q: "How do you handle secrets and credentials in pipelines?",
      a: "We implement secrets management using tools like HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault. Secrets are injected at runtime, never stored in code, and rotated automatically.",
    },
    {
      q: "Can you integrate CI/CD with our existing infrastructure?",
      a: "Absolutely. We integrate with any cloud provider, on-premises systems, container registries, monitoring tools, and communication platforms. Our pipelines are designed to work with your existing stack.",
    },
    {
      q: "What does a typical CI/CD implementation timeline look like?",
      a: "Initial pipeline setup takes 2-4 weeks. Production-ready pipelines with full security scanning, multi-environment support, and observability typically take 6-10 weeks.",
    },
    {
      q: "How do you ensure pipeline reliability?",
      a: "We implement self-healing pipelines with automatic retry, fallback strategies, parallel execution, and comprehensive monitoring. Pipeline failures trigger instant alerts and automated diagnostics.",
    },
  ];

  return (
    <div className="ci-page">
      <Serviceshero />
      {/* ========== 1. AUTO-SLIDING HERO ========== */}
      <section className="ci-slider-section">
        <div className="ci-slider-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              className="ci-slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={slides[activeSlide].image}
                alt={slides[activeSlide].title}
                className="ci-slide-img"
              />
              <div className="ci-slide-overlay"></div>
              <div className="ci-slide-content">
                <p className="ci-label ci-gradient-text">
                  {slides[activeSlide].tag}
                </p>
                <h2 className="ci-slide-title">{slides[activeSlide].title}</h2>
                <p className="ci-slide-desc">{slides[activeSlide].desc}</p>
                <button
                  className="ci-primary-btn"
                  onClick={() => navigate("/contact")}
                >
                  Get Started <FiArrowRight className="ci-btn-icon" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="ci-slide-dots">
            {slides.map((_, i) => (
              <button
                key={i}
                className={`ci-dot ${activeSlide === i ? "ci-dot-active" : ""}`}
                onClick={() => {
                  setActiveSlide(i);
                  clearInterval(slideInterval.current);
                  slideInterval.current = setInterval(() => {
                    setActiveSlide((prev) => (prev + 1) % slides.length);
                  }, 5000);
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ========== 2. ANIMATED PIPELINE STRIP ========== */}
      <section className="ci-pipeline-strip">
        <div className="ci-pipeline-track">
          {pipelineStages.map((stage, i) => (
            <React.Fragment key={i}>
              <motion.div
                className="ci-pipeline-node"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div
                  className="ci-pipeline-circle"
                  style={{ borderColor: stage.color }}
                >
                  {stage.icon}
                </div>
                <span>{stage.label}</span>
              </motion.div>
              {i < pipelineStages.length - 1 && (
                <div className="ci-pipeline-line">
                  <div
                    className="ci-pipeline-line-fill"
                    style={{
                      background: `linear-gradient(90deg, ${stage.color}, ${pipelineStages[i + 1].color})`,
                    }}
                  ></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* ========== 3. BENEFITS GRID ========== */}
      <section className="ci-benefits-section">
        <div className="ci-container">
          <motion.div
            className="ci-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="ci-label ci-gradient-text">WHY CI/CD</p>
            <h2 className="ci-section-title">The Impact of Automation</h2>
            <p className="ci-section-desc">
              Transform your delivery pipeline from a bottleneck into a
              competitive advantage.
            </p>
          </motion.div>

          <motion.div
            className="ci-benefits-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {benefits.map((b, i) => (
              <motion.div key={i} className="ci-benefit-card" variants={fadeUp}>
                <div className="ci-benefit-icon">{b.icon}</div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== 4. SIDEBAR CONTROL SECTION ========== */}
      <section className="ci-sidebar-section">
        <div className="ci-container">
          <motion.div
            className="ci-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="ci-label ci-gradient-text">DEEP DIVE</p>
            <h2 className="ci-section-title">Pipeline Capabilities</h2>
          </motion.div>

          <div className="ci-sidebar-layout">
            {/* Sidebar tabs */}
            <div className="ci-sidebar-nav">
              {sidebarTabs.map((tab, i) => (
                <button
                  key={i}
                  className={`ci-sidebar-tab ${activeSidebar === i ? "ci-tab-active" : ""}`}
                  onClick={() => setActiveSidebar(i)}
                >
                  <span className="ci-tab-icon">{tab.icon}</span>
                  <span className="ci-tab-label">{tab.label}</span>
                  <FiChevronRight className="ci-tab-arrow" />
                </button>
              ))}
            </div>

            {/* Content panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSidebar}
                className="ci-sidebar-content"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <div className="ci-sidebar-text">
                  <h3>{sidebarTabs[activeSidebar].title}</h3>
                  <p>{sidebarTabs[activeSidebar].desc}</p>
                  <ul className="ci-sidebar-features">
                    {sidebarTabs[activeSidebar].features.map((f, j) => (
                      <li key={j}>
                        <FiCheckCircle className="ci-feature-check" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="ci-content-btn"
                    onClick={() => navigate("/services/cloud-architecture")}
                  >
                    Learn More <FiArrowRight />
                  </button>
                </div>
                <div className="ci-sidebar-image">
                  <img
                    src={sidebarTabs[activeSidebar].image}
                    alt={sidebarTabs[activeSidebar].title}
                  />
                  <div className="ci-sidebar-img-overlay"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ========== 5. VIDEO CTA BANNER ========== */}
      {/* <section className="ci-video-banner">
        <div className="ci-video-bg">
          <img
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fc5?w=1600&q=80"
            alt="CI/CD Environment"
            className="ci-video-bg-img"
          />
        </div>
        <div className="ci-video-overlay"></div>
        <motion.div
          className="ci-video-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>
            See Your Pipeline{" "}
            <span className="ci-gradient-text">Come to Life</span>
          </h2>
          <p>
            Watch how we build production-grade CI/CD pipelines from scratch.
          </p>
          <button className="ci-play-btn">
            <FiPlay /> Watch Demo
          </button>
        </motion.div>
      </section> */}

      {/* ========== 6. BEFORE/AFTER COMPARISON ========== */}
      <section className="ci-comparison-section">
        <div className="ci-container">
          <motion.div
            className="ci-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="ci-label ci-gradient-text">TRANSFORMATION</p>
            <h2 className="ci-section-title">Before vs After CI/CD</h2>
            <p className="ci-section-desc">
              Real metrics from production environments before and after our
              CI/CD implementation.
            </p>
          </motion.div>

          <motion.div
            className="ci-comparison-table"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="ci-comparison-header">
              <div className="ci-comp-col ci-comp-feature">Metric</div>
              <div className="ci-comp-col ci-comp-before">Before</div>
              <div className="ci-comp-col ci-comp-after">After CI/CD</div>
            </div>
            {comparisonRows.map((row, i) => (
              <motion.div
                key={i}
                className="ci-comparison-row"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="ci-comp-col ci-comp-feature">{row.feature}</div>
                <div className="ci-comp-col ci-comp-before">{row.before}</div>
                <div className="ci-comp-col ci-comp-after">
                  <span className="ci-gradient-text">{row.after}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== 7. FEATURED TESTIMONIAL ========== */}
      <section className="ci-testimonial-section">
        <div className="ci-container">
          <motion.div
            className="ci-testimonial-card"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="ci-testimonial-left">
              <FaQuoteLeft className="ci-quote-icon" />
              <blockquote>
                &quot;Their CI/CD implementation cut our release cycle from two
                weeks to under an hour. We now deploy 30+ times a day with
                complete confidence. The ROI was visible within the first
                month.&quot;
              </blockquote>
              <div className="ci-testimonial-author">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                  alt="James Carter"
                />
                <div>
                  <h4>James Carter</h4>
                  <p>Head of Engineering, TechForge</p>
                </div>
              </div>
            </div>
            <div className="ci-testimonial-stats">
              <div className="ci-testi-stat">
                <h3 className="ci-gradient-text">30+</h3>
                <p>Daily Deploys</p>
              </div>
              <div className="ci-testi-stat">
                <h3 className="ci-gradient-text">&lt; 1hr</h3>
                <p>Lead Time</p>
              </div>
              <div className="ci-testi-stat">
                <h3 className="ci-gradient-text">99.9%</h3>
                <p>Success Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== 8. FAQ (CENTERED) ========== */}
      <section className="ci-faq-section">
        <div className="ci-container">
          <motion.div
            className="ci-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="ci-label ci-gradient-text">FAQ</p>
            <h2 className="ci-section-title">Common Questions</h2>
          </motion.div>

          <div className="ci-faq-list">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`ci-faq-item ${openFaq === i ? "ci-faq-open" : ""}`}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <button
                  className="ci-faq-question"
                  onClick={() => toggleFaq(i)}
                >
                  <span>{faq.q}</span>
                  <FiChevronDown />
                </button>
                <div className="ci-faq-answer">
                  <p>{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Cta />
      <Newsletter />
    </div>
  );
};

export default CICD;
