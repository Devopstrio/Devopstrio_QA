import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Components
import Serviceshero from "../../components/Hero/Serviceshero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

// Icons
import {
  FiArrowRight,
  FiCloud,
  FiShield,
  FiTrendingUp,
  FiRepeat,
  FiCheckCircle,
  FiServer,
  FiDatabase,
  FiLayers,
  FiBox,
  FiActivity,
  FiZap,
  FiGlobe,
  FiCpu,
  FiLock,
  FiPlayCircle,
  FiChevronDown,
  FiChevronUp,
  FiX,
} from "react-icons/fi";

import {
  FaAws,
  FaMicrosoft,
  FaGoogle,
  FaDocker,
  FaJenkins,
  FaGithub,
  FaQuoteRight,
  FaQuoteLeft,
} from "react-icons/fa";

import "../../Style/serve/MultiCloud.css";

const MultiCloud = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (study) => {
    setSelectedCaseStudy(study);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const images = {
    heroVisual: "/images/NewFolder/Groups_79.png",
    architecture: "/images/NewFolder/Groups_80.png",
    governance: "/images/NewFolder/Groups_81.png",
    devops: "/images/NewFolder/Groups_86.png",
    healthSync: "/images/NewFolder/Groups_88.png",
    performance: "/images/NewFolder/Groups_89.png",
    team: "/images/NewFolder/Groups_87.png",
    unifiedSecurity: "/images/NewFolder/Groups_82.png",
    costIntelligence: "/images/NewFolder/Groups_83.png",
    crossCloudFailover: "/images/NewFolder/Groups_84.png",
    globalDistribution: "/images/NewFolder/Groups_85.png",
  };

  const stats = [
    { value: "99.99%", label: "SLA Uptime" },
    { value: "3x", label: "Faster Deployment" },
    { value: "45%", label: "Cost Reduction" },
    { value: "500+", label: "Enterprise Clients" },
  ];

  const providers = [
    {
      icon: <FaAws />,
      name: "Amazon Web Services",
      tag: "AWS",
      desc: "Compute, storage, AI/ML, and 200+ fully featured services.",
      color: "#ff9900",
    },
    {
      icon: <FaMicrosoft />,
      name: "Microsoft Azure",
      tag: "Azure",
      desc: "Enterprise-grade hybrid cloud, AI, and DevOps tools.",
      color: "#0078d4",
    },
    {
      icon: <FaGoogle />,
      name: "Google Cloud Platform",
      tag: "GCP",
      desc: "Data analytics, Kubernetes, and cutting-edge AI capabilities.",
      color: "#4285f4",
    },
  ];

  const features = [
    {
      icon: <FiShield />,
      title: "Unified Security",
      desc: "Single security model across all cloud environments with zero-trust architecture.",
      image: images.unifiedSecurity,
    },
    {
      icon: <FiTrendingUp />,
      title: "Cost Intelligence",
      desc: "AI-driven workload placement and automated cost optimization across providers.",
      image: images.costIntelligence,
    },
    {
      icon: <FiRepeat />,
      title: "Cross-Cloud Failover",
      desc: "Automatic disaster recovery and redundancy across multiple cloud providers.",
      image: images.crossCloudFailover,
    },
    {
      icon: <FiGlobe />,
      title: "Global Distribution",
      desc: "Deploy workloads closer to users with multi-region, multi-cloud networking.",
      image: images.globalDistribution,
    },
  ];

  const processSteps = [
    {
      icon: <FiActivity />,
      title: "Discovery & Assessment",
      desc: "Deep analysis of your existing infrastructure, workloads, and business goals.",
    },
    {
      icon: <FiLayers />,
      title: "Strategy & Design",
      desc: "Custom multi-cloud architecture tailored to your performance and compliance needs.",
    },
    {
      icon: <FiCpu />,
      title: "Build & Migrate",
      desc: "Seamless migration with zero downtime using infrastructure as code and automation.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Optimize & Scale",
      desc: "Continuous monitoring, cost optimization, and intelligent scaling across clouds.",
    },
  ];

  const caseStudies = [
    {
      company: "Global FinTech Corp",
      industry: "Financial Services",
      metric: "60% cost reduction",
      detail:
        "Migrated 500+ microservices across AWS and Azure with zero downtime.",
      image: images.team,
      challenge:
        "Faced high operational costs and vendor lock-in with a single cloud provider, leading to scaling bottlenecks and frequent downtime during peak trading hours.",
      solution:
        "Architected a dual-cloud environment using AWS and Azure, managed by a custom-built intelligent orchestration layer that dynamically balances workloads based on real-time cost and performance metrics.",
      result:
        "Achieved a 60% reduction in infrastructure costs, eliminated single-point failures, and maintained 100% uptime during high-volume trading periods.",
    },
    {
      company: "HealthSync",
      industry: "Healthcare",
      metric: "99.999% uptime",
      detail: "HIPAA-compliant multi-cloud architecture across 3 providers.",
      image: images.healthSync,
      challenge:
        "Required a HIPAA-compliant infrastructure that could guarantee zero data loss and absolute availability for mission-critical patient monitoring systems across global regions.",
      solution:
        "Implemented a zero-trust multi-cloud framework across three major providers with real-time data replication and automated cross-cloud failover mechanisms to ensure continuous operation.",
      result:
        "Achieved 'five nines' availability (99.999%), reduced data latency by 40%, and ensured 100% compliance with international healthcare data regulations.",
    },
    {
      company: "RetailMax",
      industry: "E-Commerce",
      metric: "3x faster deploys",
      detail: "Unified CI/CD pipeline spanning GCP and AWS for 200+ services.",
      image: images.performance,
      challenge:
        "Legacy deployment processes were slow and prone to error, with manual configurations causing inconsistencies across their multi-region cloud footprint.",
      solution:
        "Developed a unified, cloud-agnostic CI/CD pipeline using Terraform and Kubernetes, enabling consistent environment provisioning and automated deployments across GCP and AWS.",
      result:
        "Increased deployment frequency from bi-weekly to daily, reduced deployment errors by 85%, and accelerated time-to-market for new features by 300%.",
    },
  ];

  const technologies = [
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaMicrosoft />, name: "Azure" },
    { icon: <FaGoogle />, name: "GCP" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FiBox />, name: "Kubernetes" },
    { icon: <FiLayers />, name: "Terraform" },
    { icon: <FaJenkins />, name: "Jenkins" },
    { icon: <FaGithub />, name: "GitHub Actions" },
    { icon: <FiDatabase />, name: "Databases" },
    { icon: <FiServer />, name: "Bare Metal" },
  ];

  const testimonials = [
    {
      text: "Their multi-cloud expertise transformed our infrastructure. We cut costs by 60% and achieved true vendor independence.",
      author: "James Mitchell",
      position: "VP Engineering, Global FinTech",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
    {
      text: "The cross-cloud failover architecture they designed gives us peace of mind. Our healthcare platform has had zero downtime since launch.",
      author: "Dr. Lisa Wang",
      position: "CTO, HealthSync",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    },
  ];

  const faqs = [
    {
      q: "What is multi-cloud, and why is it important?",
      a: "Multi-cloud is the use of two or more cloud computing services. It prevents vendor lock-in, improves resilience, optimizes costs, and lets you leverage each provider's unique strengths.",
    },
    {
      q: "How do you handle data consistency across clouds?",
      a: "We implement distributed data strategies with real-time synchronization, conflict resolution, and eventual consistency models tailored to your application requirements.",
    },
    {
      q: "Is multi-cloud more expensive than single-cloud?",
      a: "Not necessarily. Our cost intelligence engine actually reduces total spend by 30-45% through optimal workload placement and automated reserved instance management.",
    },
    {
      q: "How long does a multi-cloud implementation take?",
      a: "Typical engagements range from 8-16 weeks depending on complexity. We use an iterative approach so you see value from the first sprint.",
    },
    {
      q: "Do you provide ongoing management?",
      a: "Yes, we offer 24/7 managed services including monitoring, optimization, security patching, and incident response across all your cloud environments.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="mc-page">
      <Serviceshero />

      {/* ========== STATS BAR ========== */}
      <section className="mc-stats-bar">
        <div className="mc-container">
          <div className="mc-stats-grid">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className="mc-stat-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <h3 className="mc-gradient-text">{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== HERO CONTENT SECTION ========== */}
      <section className="mc-hero-section">
        <div className="mc-hero-bg-pattern"></div>
        <div className="mc-container">
          <div className="mc-hero-grid">
            <motion.div
              className="mc-hero-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              transition={{ duration: 0.8 }}
            >
              <span className="mc-section-tag mc-gradient-text">
                MULTI-CLOUD STRATEGY
              </span>
              <h1 className="mc-hero-title">
                Orchestrate Every Cloud{" "}
                <span className="mc-gradient-text">One Platform</span>
              </h1>
              <p className="mc-hero-subtitle">
                Eliminate vendor lock-in, maximize resilience, and optimize
                costs across AWS, Azure, and GCP with intelligent multi cloud
                orchestration.
              </p>
              {/* <div className="mc-hero-btns">
                <button
                  className="mc-primary-btn"
                  onClick={() => navigate("/contact")}
                >
                  Get Started <FiArrowRight className="mc-btn-icon" />
                </button>
                <button className="mc-secondary-btn">
                  <FiPlayCircle className="mc-btn-icon" /> Watch Overview
                </button>
              </div> */}
            </motion.div>

            <motion.div
              className="mc-hero-image-wrapper"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={images.heroVisual}
                alt="Multi-Cloud Infrastructure"
                className="mc-hero-img"
              />
              <div className="mc-hero-img-overlay"></div>
              <div className="mc-hero-float-card mc-float-top">
                <FiCloud className="mc-float-icon" />
                <div>
                  <h4>3 Clouds Connected</h4>
                  <p>AWS • Azure • GCP</p>
                </div>
              </div>
              <div className="mc-hero-float-card mc-float-bottom">
                <FiShield className="mc-float-icon" />
                <div>
                  <h4>Zero-Trust Security</h4>
                  <p>End-to-end encrypted</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CLOUD PROVIDERS ========== */}
      <section className="mc-providers-section">
        <div className="mc-container">
          <motion.div
            className="mc-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="mc-section-tag mc-gradient-text">
              CLOUD PROVIDERS
            </span>
            <h2 className="mc-section-title">
              Powered by the <span className="mc-gradient-text">Big Three</span>
            </h2>
            <p className="mc-section-desc">
              Leverage the best of each cloud provider through unified
              management
            </p>
          </motion.div>

          <div className="mc-providers-grid">
            {providers.map((provider, i) => (
              <motion.div
                key={i}
                className="mc-provider-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div
                  className="mc-provider-icon-wrap"
                  style={{ borderColor: provider.color }}
                >
                  <span style={{ color: provider.color }}>{provider.icon}</span>
                </div>
                <span className="mc-provider-tag">{provider.tag}</span>
                <h3>{provider.name}</h3>
                <p>{provider.desc}</p>
                <div
                  className="mc-provider-bar"
                  style={{
                    background: `linear-gradient(90deg, ${provider.color}, transparent)`,
                  }}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== ARCHITECTURE IMAGE-TEXT SPLIT 1 ========== */}
      <section className="mc-split-section">
        <div className="mc-container">
          <div className="mc-split-grid mc-content-left">
            <motion.div
              className="mc-split-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              transition={{ duration: 0.7 }}
            >
              <span className="mc-section-tag mc-gradient-text">
                ARCHITECTURE
              </span>
              <h2 className="mc-split-title">
                Enterprise Multi-Cloud Infrastructure
              </h2>
              <p className="mc-split-desc">
                Build a resilient cloud foundation with distributed workloads,
                intelligent routing, and real-time cost optimization across all
                major providers.
              </p>
              <ul className="mc-split-list">
                <li>
                  <FiCheckCircle className="mc-list-icon" /> Automated workload
                  distribution
                </li>
                <li>
                  <FiCheckCircle className="mc-list-icon" /> Cross-cloud
                  networking & peering
                </li>
                <li>
                  <FiCheckCircle className="mc-list-icon" /> Unified
                  observability dashboard
                </li>
                <li>
                  <FiCheckCircle className="mc-list-icon" /> Infrastructure as
                  Code across providers
                </li>
              </ul>
              <button
                className="mc-content-btn"
                onClick={() => navigate("/services/cloud-architecture")}
              >
                Learn More
              </button>
            </motion.div>
            <motion.div
              className="mc-split-image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img src={images.architecture} alt="Cloud Architecture" />
              <div className="mc-img-gradient-overlay"></div>

              {/* Floating Architecture Card */}
              <motion.div
                className="mc-float-glass-card mc-arch-card"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="mc-arch-header">
                  <FiLayers className="mc-arch-main-icon" />
                </div>
                <div className="mc-arch-grid">
                  <div className="mc-arch-item">
                    <div className="mc-arch-dot"></div>
                    <FiTrendingUp />
                    <span>Cost</span>
                  </div>
                  <div className="mc-arch-item">
                    <div className="mc-arch-dot"></div>
                    <FiZap />
                    <span>Latency</span>
                  </div>
                  <div className="mc-arch-item">
                    <div className="mc-arch-dot"></div>
                    <FiShield />
                    <span>Availability</span>
                  </div>
                </div>
                <div className="mc-arch-footer">
                  <div className="mc-arch-clouds">
                    <FaAws /> <FaMicrosoft /> <FaGoogle />
                  </div>
                  <div className="mc-arch-dest">Final Destination</div>
                </div>
              </motion.div>

              {/* Floating Code Windows */}
              <motion.div
                className="mc-float-glass-card mc-code-card-1"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="mc-code-header">
                  <div className="mc-code-dots"><span></span><span></span><span></span></div>
                </div>
                <div className="mc-code-content">
                  <div className="mc-code-line"><span className="c-1">resource</span> <span className="c-2">"aws_instance"</span></div>
                  <div className="mc-code-line indent"><span className="c-3">ami</span> = "ami-0c55b159"</div>
                  <div className="mc-code-line indent"><span className="c-3">type</span> = "t2.micro"</div>
                </div>
              </motion.div>

              <motion.div
                className="mc-float-glass-card mc-code-card-2"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="mc-code-header">
                  <div className="mc-code-dots"><span></span><span></span><span></span></div>
                </div>
                <div className="mc-code-content">
                  <div className="mc-code-line"><span className="c-1">kubectl</span> <span className="c-2">apply</span> -f</div>
                  <div className="mc-code-line"><span className="c-3">deployment.yaml</span></div>
                </div>
              </motion.div>

              <motion.div
                className="mc-code-symbol"
                animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                &lt;/&gt;
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== SPLIT 2: IMAGE LEFT, CONTENT RIGHT ========== */}
      <section className="mc-split-section mc-alt-bg">
        <div className="mc-container">
          <div className="mc-split-grid mc-image-left">
            <motion.div
              className="mc-split-image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              transition={{ duration: 0.7 }}
            >
              <img src={images.governance} alt="Cloud Governance" />
              <div className="mc-img-gradient-overlay"></div>

              {/* Security Score Card */}
              <motion.div
                className="mc-float-glass-card mc-security-score-card"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="mc-score-header">
                  <div className="mc-score-icon-wrap">
                    <FiActivity />
                  </div>
                  <div>
                    <span className="mc-score-value">9.9</span>
                    <p className="mc-score-label">Security Posture Score</p>
                  </div>
                </div>
                <div className="mc-score-graph">
                  <svg viewBox="0 0 100 40">
                    <path
                      d="M0,35 Q10,10 20,25 T40,15 T60,30 T80,10 T100,20"
                      fill="none"
                      stroke="rgba(255, 255, 255, 0.4)"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div className="mc-score-footer">
                  <div className="mc-placeholder-lines">
                    <span></span>
                    <span></span>
                  </div>
                  <span className="mc-view-details">View Details</span>
                </div>
              </motion.div>

              {/* Verify Bubble */}
              <motion.div
                className="mc-float-glass-card mc-verify-bubble"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="mc-verify-content">
                  <p>Never Trust Always Verified</p>
                  <div className="mc-placeholder-lines">
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="mc-verify-icon">
                  <FiCheckCircle />
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              className="mc-split-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="mc-section-tag mc-gradient-text">
                GOVERNANCE & SECURITY
              </span>
              <h2 className="mc-split-title">
                Unified Security Across All Clouds
              </h2>
              <p className="mc-split-desc">
                Implement zero-trust security, centralized identity management,
                and compliance automation across every cloud provider in your
                ecosystem.
              </p>
              <div className="mc-mini-features">
                <div className="mc-mini-feature">
                  <FiShield className="mc-mini-icon" />
                  <div>
                    <h4>Zero-Trust Architecture</h4>
                    <p>Never trust, always verify</p>
                  </div>
                </div>
                <div className="mc-mini-feature">
                  <FiLock className="mc-mini-icon" />
                  <div>
                    <h4>Identity Federation</h4>
                    <p>Single SSO across all clouds</p>
                  </div>
                </div>
              </div>
              <button
                className="mc-content-btn"
                onClick={() => navigate("/services/security")}
              >
                Learn More
              </button>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ========== FEATURES GRID ========== */}
      <section className="mc-features-section">
        <div className="mc-container">
          <motion.div
            className="mc-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="mc-section-tag mc-gradient-text">
              CAPABILITIES
            </span>
            <h2 className="mc-section-title">
              Why <span className="mc-gradient-text">Multi-Cloud</span> Wins
            </h2>
          </motion.div>

          <div className="mc-features-grid">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="mc-feature-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="mc-feature-img">
                  <img src={feature.image} alt={feature.title} />
                  <div className="mc-feature-img-overlay"></div>
                </div>
                <div className="mc-feature-body">
                  <div className="mc-feature-icon-wrap">{feature.icon}</div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS TIMELINE ========== */}
      <section className="mc-process-section">
        <div className="mc-container">
          <motion.div
            className="mc-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="mc-section-tag mc-gradient-text">OUR PROCESS</span>
            <h2 className="mc-section-title">
              From Discovery to <span className="mc-gradient-text">Scale</span>
            </h2>
            <p className="mc-section-desc">
              A proven methodology that delivers results at every stage
            </p>
          </motion.div>

          <div className="mc-process-grid">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="mc-process-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="mc-process-number">{i + 1}</div>
                <div className="mc-process-icon-wrap">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="mc-process-connector"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== SPLIT 3: DEVOPS ========== */}
      <section className="mc-split-section">
        <div className="mc-container">
          <div className="mc-split-grid mc-content-left">
            <motion.div
              className="mc-split-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeLeft}
              transition={{ duration: 0.7 }}
            >
              <span className="mc-section-tag mc-gradient-text">
                DEVOPS & AUTOMATION
              </span>
              <h2 className="mc-split-title">
                Unified CI/CD Across All Clouds
              </h2>
              <p className="mc-split-desc">
                Deploy to any cloud from a single pipeline. Our platform unifies
                your DevOps workflow with multi-cloud infrastructure as code,
                automated testing, and continuous delivery.
              </p>
              <div className="mc-tech-stats">
                <div className="mc-tech-stat">
                  <FiZap className="mc-tech-stat-icon" />
                  <div>
                    <h4>70% Faster</h4>
                    <p>Deployment cycles</p>
                  </div>
                </div>
                <div className="mc-tech-stat">
                  <FiActivity className="mc-tech-stat-icon" />
                  <div>
                    <h4>99.9%</h4>
                    <p>Pipeline reliability</p>
                  </div>
                </div>
              </div>
              <button
                className="mc-content-btn"
                onClick={() => navigate("/services/devops-enablement")}
              >
                Learn More
              </button>
            </motion.div>
            <motion.div
              className="mc-split-image"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeRight}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img src={images.devops} alt="DevOps Team" />
              <div className="mc-img-gradient-overlay"></div>

              {/* Pipeline Card */}
              <motion.div
                className="mc-float-glass-card mc-pipeline-card"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="mc-pipeline-header">
                  <FiRepeat className="mc-pipeline-icon" />
                  <span>Deployment Pipeline</span>
                </div>
                <div className="mc-pipeline-steps">
                  <div className="mc-step active">
                    <FiCheckCircle /> <span>Build</span>
                  </div>
                  <div className="mc-step active">
                    <FiCheckCircle /> <span>Test</span>
                  </div>
                  <div className="mc-step loading">
                    <div className="mc-dot-pulse"></div> <span>Deploy</span>
                  </div>
                </div>
              </motion.div>

              {/* GitHub/DevOps Stat Card */}
              <motion.div
                className="mc-float-glass-card mc-devops-stat-card"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="mc-devops-icon-circle">
                  <FaGithub />
                </div>
                <div className="mc-devops-stat-info">
                  <span className="mc-stat-val">99.9%</span>
                  <p>Success Rate</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CASE STUDIES ========== */}
      <section className="mc-casestudies-section">
        <div className="mc-container">
          <motion.div
            className="mc-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="mc-section-tag mc-gradient-text">
              CASE STUDIES
            </span>
            <h2 className="mc-section-title">
              Real Results from{" "}
              <span className="mc-gradient-text">Real Clients</span>
            </h2>
          </motion.div>

          <div className="mc-casestudies-grid">
            {caseStudies.map((study, i) => (
              <motion.div
                key={i}
                className="mc-casestudy-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="mc-casestudy-img">
                  <img src={study.image} alt={study.company} />
                  <div className="mc-casestudy-img-overlay"></div>
                  <span className="mc-casestudy-industry">
                    {study.industry}
                  </span>
                </div>
                <div className="mc-casestudy-body">
                  <h3>{study.company}</h3>
                  <p className="mc-casestudy-metric mc-gradient-text">
                    {study.metric}
                  </p>
                  <p className="mc-casestudy-detail">{study.detail}</p>
                  <button
                    className="mc-casestudy-btn"
                    onClick={() => handleOpenModal(study)}
                  >
                    Read Case Study <FiArrowRight />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TECHNOLOGIES SLIDER ========== */}
      <section className="mc-tech-section">
        <div className="mc-container">
          <motion.div
            className="mc-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="mc-section-tag mc-gradient-text">
              TECHNOLOGIES
            </span>
            <h2 className="mc-section-title">
              Tools We <span className="mc-gradient-text">Excel At</span>
            </h2>
          </motion.div>

          <div className="mc-tech-slider-container">
            <div className="mc-tech-slider-track">
              {[...technologies, ...technologies].map((tech, i) => (
                <div key={i} className="mc-tech-slider-item">
                  <span className="mc-tech-slider-icon">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      <section className="mc-testimonials-section">
        <div className="mc-container">
          <motion.div
            className="mc-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="mc-section-tag mc-gradient-text">
              TESTIMONIALS
            </span>
            <h2 className="mc-section-title">
              Trusted by{" "}
              <span className="mc-gradient-text">Industry Leaders</span>
            </h2>
          </motion.div>

          <div className="mc-testimonials-grid">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                className="mc-testimonial-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <FaQuoteLeft className="mc-quote-icon" />
                <p className="mc-testimonial-text">{t.text}</p>
                <div className="mc-testimonial-author">
                  <img src={t.avatar} alt={t.author} />
                  <div>
                    <h4>{t.author}</h4>
                    <p>{t.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FAQ SECTION ========== */}
      <section className="mc-faq-section">
        <div className="mc-container">
          <motion.div
            className="mc-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <span className="mc-section-tag mc-gradient-text">FAQ</span>
            <h2 className="mc-section-title">
              Frequently Asked{" "}
              <span className="mc-gradient-text">Questions</span>
            </h2>
          </motion.div>

          <div className="mc-faq-list">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`mc-faq-item ${openFaq === i ? "mc-faq-open" : ""}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <button
                  className="mc-faq-question"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  {openFaq === i ? <FiChevronUp /> : <FiChevronDown />}
                </button>
                <div className="mc-faq-answer">
                  <p>{faq.a}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      {/* <section className="mc-bottom-cta">
        <div className="mc-bottom-cta-bg"></div>
        <div className="mc-container">
          <motion.div
            className="mc-bottom-cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <h2>
              Ready to Build Your{" "}
              <span className="mc-gradient-text">Multi-Cloud Strategy?</span>
            </h2>
            <p>
              Talk to our cloud architects and get a free assessment of your
              infrastructure.
            </p>
            <div className="mc-bottom-cta-btns">
              <button
                className="mc-primary-btn"
                onClick={() => navigate("/contact")}
              >
                Schedule a Consultation <FiArrowRight className="mc-btn-icon" />
              </button>
              <button className="mc-secondary-btn">
                <FiPlayCircle className="mc-btn-icon" /> See How It Works
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}

      <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
        <Newsletter />
      </div>      <Cta />

      {/* ========== CASE STUDY MODAL ========== */}
      <AnimatePresence>
        {isModalOpen && selectedCaseStudy && (
          <motion.div
            className="mc-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              className="mc-modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="mc-modal-close" onClick={handleCloseModal}>
                <FiX />
              </button>

              <div className="mc-modal-grid">
                <div className="mc-modal-image">
                  <img
                    src={selectedCaseStudy.image}
                    alt={selectedCaseStudy.company}
                  />
                  <div className="mc-modal-image-overlay"></div>
                  <div className="mc-modal-metric-badge">
                    <span className="mc-gradient-text">
                      {selectedCaseStudy.metric}
                    </span>
                  </div>
                </div>

                <div className="mc-modal-info">
                  <span className="mc-modal-tag">
                    {selectedCaseStudy.industry}
                  </span>
                  <h2 className="mc-modal-title">
                    {selectedCaseStudy.company}
                  </h2>

                  <div className="mc-modal-sections">
                    <div className="mc-modal-section">
                      <h4>
                        <FiActivity className="mc-modal-section-icon" /> The
                        Challenge
                      </h4>
                      <p>{selectedCaseStudy.challenge}</p>
                    </div>

                    <div className="mc-modal-section">
                      <h4>
                        <FiZap className="mc-modal-section-icon" /> Our Solution
                      </h4>
                      <p>{selectedCaseStudy.solution}</p>
                    </div>

                    <div className="mc-modal-section">
                      <h4>
                        <FiTrendingUp className="mc-modal-section-icon" /> The
                        Result
                      </h4>
                      <p>{selectedCaseStudy.result}</p>
                    </div>
                  </div>

                  <button
                    className="mc-modal-btn"
                    onClick={() => navigate("/insights-knowledge/case-studies")}
                  >
                    Discover More Case Studies <FiArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MultiCloud;
