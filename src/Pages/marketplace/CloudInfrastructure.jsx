// CloudInfrastructure.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Standard components
import Newsletter from "../../components/Newsletter/Newsletter";

// Icons
import {
  FiZap,
  FiShield,
  FiDatabase,
  FiActivity,
  FiServer,
  FiCpu,
  FiLayers,
  FiCheckCircle,
  FiArrowRight,
  FiDollarSign,
  FiPlus,
  FiPlay,
  FiMinus,
  FiGlobe,
  FiLock,
  FiMessageCircle,
} from "react-icons/fi";

import "../../Style/marketplace/CloudInfrastructure.css";

/* ── Content Data ── */
const cloudStats = [
  { value: "99.9%", label: "Uptime SLA", icon: <FiActivity /> },
  { value: "45%+", label: "Avg. TCO Savings", icon: <FiDollarSign /> },
  { value: "SOC2 +", label: "Global Compliance", icon: <FiShield /> },
  { value: "30ms", label: "P99 Global Latency", icon: <FiZap /> },
];

const features = [
  {
    icon: <FiCpu />,
    title: "Elastic Compute Engine",
    desc: "Deploy multi-architecture instances with sub-second scaling and intelligent workload placement across global regions.",
    color: "blue",
  },
  {
    icon: <FiShield />,
    title: "Advanced Shield",
    desc: "Multi-layered security with automated DDoS protection, private VPC networking, and hardware-level encryption.",
    color: "purple",
  },
  {
    icon: <FiDatabase />,
    title: "Distributed Data Lake",
    desc: "Globally replicated, high-throughput storage for unstructured and structured data with native AI/ML integration.",
    color: "pink",
  },
  {
    icon: <FiGlobe />,
    title: "Anycast Edge Mesh",
    desc: "Direct-to-consumer delivery via our private backbone with edge compute capabilities and smart traffic routing.",
    color: "orange",
  },
  {
    icon: <FiLayers />,
    title: "Service Reliability Layer",
    desc: "Built-in service discovery, circuit breaking, and deep observability across your entire microservices architecture.",
    color: "green",
  },
  {
    icon: <FiLock />,
    title: "Identity & Access Control",
    desc: "Fine-grained IAM with zero-trust principles, MFA enforcement, and automated secret rotation for every service.",
    color: "red",
  },
];

const processes = [
  {
    id: "blueprint",
    num: "01",
    label: "Infrastructure Blueprinting",
    meta: "Design Phase",
    title: "Standardized Infrastructure-as-Code",
    desc: "Define your entire stack using shared, versioned blueprints. We support Terraform, OpenTofu, and CDK with automated policy-as-code validation.",
    checks: [
      "Modular, reusable templates",
      "Automated drift detection",
      "Cost estimation per change",
      "Security scanning in CI/CD",
    ],
    image:
      "/images/Ecosystem/Infrastructure_Blueprinting.png",
    color: "blue",
  },
  {
    id: "deploy",
    num: "02",
    label: "Multi-Cloud Deployment",
    meta: "Implementation",
    title: "Zero-Downtime Orchestration",
    desc: "Seamlessly deploy across AWS, Azure, and GCP. Our orchestrator handles load balancing, health checks, and gradual rollouts automatically.",
    checks: [
      "Blue-green deployment strategies",
      "Self-healing cluster nodes",
      "Automated rollback on failure",
      "Global traffic management",
    ],
    image:
      "/images/Ecosystem/Multi-Cloud-Deployment.png",
    color: "purple",
  },
  {
    id: "observe",
    num: "03",
    label: "Intelligent Monitoring",
    meta: "Operations",
    title: "Full-Stack Observability",
    desc: "Gain deep insights into your infrastructure and application health with integrated metrics, logs, and distributed tracing.",
    checks: [
      "AI-driven anomaly detection",
      "Custom SLI/SLO dashboards",
      "Predictive capacity planning",
      "Unified logging pipeline",
    ],
    image:
      "/images/Ecosystem/Intelligent_Monitoring.png",
    color: "pink",
  },
];

const faqs = [
  {
    q: "How does your pricing compare to direct cloud providers?",
    a: "We offer better-than-standard pricing through bulk resource commitment and intelligent right-sizing. Most enterprise clients see an immediate 30-45% reduction in their monthly cloud bill.",
  },
  {
    q: "Do you support hybrid cloud environments?",
    a: "Yes, our control plane can manage resources in public clouds as well as your on-premise data centers through our secure hybrid-connect bridge.",
  },
  {
    q: "Is migration support available?",
    a: "Our Zero-Touch Migration team specializes in moving complex legacy workloads to modern infrastructure with minimal downtime and guaranteed data integrity.",
  },
  {
    q: "What kind of support SLA do you offer?",
    a: "Enterprise accounts come with 24/7/365 'Human-to-Human' support. Our engineers respond within 15 minutes for critical P1 incidents.",
  },
];

const testimonials = [
  {
    text: "CloudStruc's marketplace changed how we deploy. We moved from monthly release cycles to hourly deployments with complete confidence.",
    author: "Elena Petrova",
    role: "VP Engineering at CloudScale",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    text: "The observability tools built into the platform are world-class. We caught more production issues in the first week than we did in the last year.",
    author: "Jordan Smith",
    role: "Architect at Fintech Global",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

/* ── COMPONENT ── */
const CloudInfrastructure = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observers = stepRefs.current.map((el, idx) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(idx);
        },
        { rootMargin: "-40% 0px -40% 0px" },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const getFeatureColorClass = (color) => {
    switch (color) {
      case "blue":
        return "cloudstruc-feature-blue";
      case "purple":
        return "cloudstruc-feature-purple";
      case "pink":
        return "cloudstruc-feature-pink";
      case "orange":
        return "cloudstruc-feature-orange";
      case "green":
        return "cloudstruc-feature-green";
      case "red":
        return "cloudstruc-feature-red";
      default:
        return "cloudstruc-feature-blue";
    }
  };

  const getStepColorClass = (color) => {
    switch (color) {
      case "blue":
        return "cloudstruc-step-blue";
      case "purple":
        return "cloudstruc-step-purple";
      case "pink":
        return "cloudstruc-step-pink";
      default:
        return "cloudstruc-step-blue";
    }
  };

  return (
    <div className="cloudstruc-page">
      {/* Background Elements */}
      <div className="cloudstruc-bg-grid" />
      <div className="cloudstruc-gradient-orb cloudstruc-orb-1" />
      <div className="cloudstruc-gradient-orb cloudstruc-orb-2" />

      {/* Hero Section */}
      <section className="cloudstruc-hero">
        <div className="cloudstruc-container">
          <motion.div
            className="cloudstruc-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="cloudstruc-hero-badge">
              <span className="cloudstruc-badge-dot" />
              <span>Next-Gen Cloud Marketplace v3.0</span>
            </motion.div>

            <motion.h1 className="cloudstruc-hero-title" variants={fadeInUp}>
              Architecture That{" "}
              <span className="cloudstruc-gradient-text">Scales</span> With Your
              Ambition
            </motion.h1>

            <motion.p className="cloudstruc-hero-subtitle" variants={fadeInUp}>
              Unify your multi-cloud strategy with an enterprise-grade
              marketplace. Deploy, manage, and optimize infrastructure across
              global providers from a single, high-performance control plane.
            </motion.p>

            <motion.div className="cloudstruc-hero-actions" variants={fadeInUp}>
              <button
                className="cloudstruc-primary-btn"
                onClick={() => navigate("/contact")}
              >
                Provision Now <FiArrowRight />
              </button>
              {/* <button className="cloudstruc-secondary-btn">
                <FiPlay className="cloudstruc-btn-icon" /> System Demo
              </button> */}
            </motion.div>
          </motion.div>

          <motion.div
            className="cloudstruc-hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="cloudstruc-visual-card">
              <div className="cloudstruc-visual-header">
                <div className="cloudstruc-visual-dots">
                  <span className="cloudstruc-dot cloudstruc-dot-red" />
                  <span className="cloudstruc-dot cloudstruc-dot-yellow" />
                  <span className="cloudstruc-dot cloudstruc-dot-green" />
                </div>
                <span className="cloudstruc-visual-title">
                  GLOBAL-EDGE-DASHBOARD
                </span>
              </div>
              <div className="cloudstruc-visual-content">
                <div className="cloudstruc-node-grid">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`cloudstruc-node ${i < 4 ? "cloudstruc-node-active" : ""}`}
                      animate={{
                        opacity: [0.7, 1, 0.7],
                        scale: i === 0 ? [1, 1.05, 1] : 1,
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    >
                      <FiServer />
                    </motion.div>
                  ))}
                </div>
                <div className="cloudstruc-metrics-dashboard">
                  <div className="cloudstruc-chart-mini">
                    {[30, 45, 25, 60, 80, 55, 70, 40, 90, 65].map((h, i) => (
                      <motion.div
                        key={i}
                        className="cloudstruc-chart-bar"
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: 0.5 + i * 0.05, duration: 1 }}
                      />
                    ))}
                  </div>
                  <div className="cloudstruc-metric-row">
                    <span>Traffic Throughput</span>
                    <span className="cloudstruc-metric-value">1.4 GB/s</span>
                  </div>
                  <div className="cloudstruc-metric-row">
                    <span>Active Sessions</span>
                    <span className="cloudstruc-metric-value">12,482</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="cloudstruc-stats">
        <div className="cloudstruc-container">
          <div className="cloudstruc-stats-grid">
            {cloudStats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="cloudstruc-stat-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="cloudstruc-stat-icon">{stat.icon}</div>
                <div className="cloudstruc-stat-value">{stat.value}</div>
                <div className="cloudstruc-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="cloudstruc-features">
        <div className="cloudstruc-container">
          <div className="cloudstruc-section-header">
            <span className="cloudstruc-section-label">Core Capabilities</span>
            <h2 className="cloudstruc-section-title">
              Built for Performance and Resiliency
            </h2>
            <p className="cloudstruc-section-description">
              Our infrastructure stack is engineered from the ground up to solve
              complex deployment challenges while maintaining peak efficiency.
            </p>
          </div>

          <div className="cloudstruc-features-grid">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                className={`cloudstruc-feature-card ${getFeatureColorClass(feature.color)}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
              >
                <div className="cloudstruc-icon-box">{feature.icon}</div>
                <h3 className="cloudstruc-feature-title">{feature.title}</h3>
                <p className="cloudstruc-feature-text">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="cloudstruc-timeline">
        <div className="cloudstruc-container">
          <div className="cloudstruc-timeline-layout">
            <aside className="cloudstruc-timeline-sidebar">
              <div className="cloudstruc-sidebar-inner">
                <span className="cloudstruc-section-label cloudstruc-sidebar-label">
                  Our Process
                </span>
                {processes.map((step, idx) => (
                  <div
                    key={idx}
                    className={`cloudstruc-step-item ${activeStep === idx ? "cloudstruc-step-active" : ""} ${getStepColorClass(step.color)}`}
                    onClick={() => {
                      stepRefs.current[idx].scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                  >
                    <div className="cloudstruc-step-number">{step.num}</div>
                    <span className="cloudstruc-step-label">{step.label}</span>
                  </div>
                ))}
              </div>
            </aside>

            <main className="cloudstruc-timeline-main">
              {processes.map((step, idx) => (
                <div
                  key={idx}
                  className={`cloudstruc-content-panel ${getStepColorClass(step.color)}`}
                  ref={(el) => (stepRefs.current[idx] = el)}
                >
                  <motion.div
                    className="cloudstruc-panel-info"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ margin: "-20%" }}
                  >
                    <span className="cloudstruc-panel-meta">{step.meta}</span>
                    <h3 className="cloudstruc-panel-heading">{step.title}</h3>
                    <p className="cloudstruc-panel-body">{step.desc}</p>
                    <ul className="cloudstruc-panel-checklist">
                      {step.checks.map((check, i) => (
                        <li key={i} className="cloudstruc-checklist-item">
                          <FiCheckCircle className="cloudstruc-check-circle" />
                          <span>{check}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                  <motion.div
                    className="cloudstruc-panel-visual"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ margin: "-20%" }}
                  >
                    <img src={step.image} alt={step.title} />
                  </motion.div>
                </div>
              ))}
            </main>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="cloudstruc-testimonials">
        <div className="cloudstruc-container">
          <div className="cloudstruc-section-header">
            <span className="cloudstruc-section-label">Success Stories</span>
            <h2 className="cloudstruc-section-title">
              Trusted by Modern Engineering Teams
            </h2>
          </div>
          <div className="cloudstruc-testimonials-list">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="cloudstruc-quote-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
              >
                <FiMessageCircle className="cloudstruc-quote-icon" />
                <p className="cloudstruc-quote-text">{t.text}</p>
                <div className="cloudstruc-author">
                  <img
                    src={t.avatar}
                    alt={t.author}
                    className="cloudstruc-author-img"
                  />
                  <div className="cloudstruc-author-details">
                    <span className="cloudstruc-author-name">{t.author}</span>
                    <span className="cloudstruc-author-role">{t.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cloudstruc-faq">
        <div className="cloudstruc-container">
          <div className="cloudstruc-section-header">
            <span className="cloudstruc-section-label">Common Inquiries</span>
            <h2 className="cloudstruc-section-title">
              Everything You Need to Know
            </h2>
          </div>

          <div className="cloudstruc-faq-list">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`cloudstruc-accordion-item ${openFaq === idx ? "cloudstruc-accordion-active" : ""}`}
              >
                <button
                  className="cloudstruc-accordion-trigger"
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                >
                  <span>{faq.q}</span>
                  {openFaq === idx ? <FiMinus /> : <FiPlus />}
                </button>
                <div className="cloudstruc-accordion-content">
                  <div className="cloudstruc-accordion-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA Components */}
      <div style={{ margin:"0 auto",maxWidth:"1240px" }}>
        <Newsletter />
      </div>
    </div>
  );
};

export default CloudInfrastructure;
