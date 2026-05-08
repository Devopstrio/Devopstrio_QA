import React from "react";

// Check these import paths - make sure they are correct
import Serviceshero from "../../components/Hero/Serviceshero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";
import { Helmet } from "react-helmet-async";

import "../../Style/serve/CloudArchitecture.css";

// React Icons - Using only Fi and Fa
import {
  FiCloud,
  FiPlayCircle,
  FiShield,
  FiZap,
  FiRefreshCw,
  FiArrowRight,
  FiServer,
  FiLock,
  FiDatabase,
  FiGitBranch,
  FiActivity,
  FiCheckCircle,
  FiBox,
  FiLayers,
  FiTrendingUp,
  FiUsers,
  FiClock,
  FiAward,
} from "react-icons/fi";

import {
  FaAws,
  FaMicrosoft,
  FaGoogle,
  FaDocker,
  FaJenkins,
  FaGithub,
  FaQuoteRight,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

const CloudArchitecture = () => {
  const navigate = useNavigate();
  // Unsplash image URLs
  const images = {
    cloudInfrastructure:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    dataSecurity: "/images/NewFolder/Groups_75.png",
    devopsTeam: "/images/NewFolder/Groups_76.png",
    cloudMigration: "/images/NewFolder/Groups_74.png",
    teamCollaboration: "/images/NewFolder/Groups_77.png",
    dataCenter:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2034&q=80",
  };

  return (
    <div className="page-wrapper ca-page">
      <Helmet>
        <title>
          Cloud Architecture Services UK | Scalable, Secure Cloud Design |
          DevOpsTrio
        </title>
        <meta
          name="description"
          content="DevOpsTrio designs and builds enterprise-grade cloud architecture across the UK scalable infrastructure, advanced security, DevOps automation, and hybrid cloud solutions on AWS, Azure & GCP. Trusted by 200+ UK businesses. Get your free consultation today."
        />
        <meta
          name="keywords"
          content="Cloud architecture services UK, Cloud architecture company UK, Cloud architecture consultants UK, Enterprise cloud architecture UK, Cloud solution architect UK, Cloud infrastructure design UK, Scalable cloud architecture UK, Secure cloud architecture UK, Hybrid cloud architecture UK, Cloud architecture design UK, AWS architecture services UK, Azure cloud architecture UK, GCP cloud architecture UK, Cloud infrastructure services UK"
        />
      </Helmet>
      <Serviceshero />

      {/* Enhanced Hero Section */}
      <section className="ca-hero-section">
        <div className="ca-hero-overlay"></div>
        <div className="ca-hero-background"></div>
        <div className="ca-container">
          <div className="ca-hero-content">
            <h1 className="ca-title">
              <span className="ca-gradient-text">Cloud Architecture Services UK</span>
              <br />
              <span className="ca-title-secondary">Scalable, Secure & Enterprise-Grade</span>
            </h1>
            <p className="ca-subtitle">
              Experience the future of Cloud & AI innovation with
              enterprise-grade solutions designed for scalability, security, and
              performance.
            </p>

            <div className="ca-hero-stats">
              <div className="ca-hero-stat-item">
                <h4>99.9%</h4>
                <p>Uptime Guarantee</p>
              </div>
              <div className="ca-hero-stat-item">
                <h4>500+</h4>
                <p>Enterprise Clients</p>
              </div>
              <div className="ca-hero-stat-item">
                <h4>70% Faster</h4>
                <p>Migration Speed</p>
              </div>
            </div>

            <div className="ca-hero-buttons">
              <button
                className="ca-primary-btn ca-gradient-bg"
                onClick={() => navigate("/contact")}
              >
                Get Started <FiArrowRight className="ca-btn-icon" />
              </button>
              <button className="ca-secondary-btn">
                Watch Demo <FiPlayCircle className="ca-btn-icon" />
              </button>
            </div>

            <div className="ca-hero-trustpilot">
              <div className="ca-trustpilot-stars">
                <span>★★★★★</span>
                <span className="ca-trustpilot-text">
                  4.9/5 from 2,000+ reviews
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="ca-features-section">
        <div className="ca-container">
          <div className="ca-section-header">
            <span className="ca-section-subtitle ca-gradient-text">
              WHY CHOOSE US
            </span>
            <h2 className="ca-section-title">
              Why UK Businesses Choose{" "}
              <span className="ca-gradient-text">DevOpsTrio for Cloud Architecture</span>
            </h2>
            <p className="ca-section-description">
              We design secure, scalable cloud architecture that adapts to your
              business and supports long-term growth.
            </p>
          </div>
          <div className="ca-features-grid">
            <div className="ca-feature-card">
              <div className="ca-feature-icon-wrapper ca-gradient-bg">
                <FiLayers className="ca-feature-icon" />
              </div>
              <h3>Scalable Infrastructure</h3>
              <p>
                Build resilient cloud architecture that scales seamlessly with
                your business needs
              </p>
            </div>
            <div className="ca-feature-card">
              <div className="ca-feature-icon-wrapper ca-gradient-bg">
                <FiShield className="ca-feature-icon" />
              </div>
              <h3>Enterprise Security</h3>
              <p>
                Advanced security architecture and compliance measures to
                protect your data
              </p>
            </div>
            <div className="ca-feature-card">
              <div className="ca-feature-icon-wrapper ca-gradient-bg">
                <FiZap className="ca-feature-icon" />
              </div>
              <h3>High Performance</h3>
              <p>
                Optimized cloud architecture for high performance and low
                latency
              </p>
            </div>
            <div className="ca-feature-card">
              <div className="ca-feature-icon-wrapper ca-gradient-bg">
                <FiRefreshCw className="ca-feature-icon" />
              </div>
              <h3>Hybrid Solutions</h3>
              <p>
                Seamless integration between on-premise systems and cloud
                environments
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image-Content Section 1: Left Content, Right Image */}
      <section className="ca-image-content-section">
        <div className="ca-container">
          <div className="ca-image-content-grid ca-content-left">
            <div className="ca-content-box">
              <span className="ca-accent-label">CLOUD MIGRATION</span>
              <h2 className="ca-content-title">
                Enterprise-Grade Scalable Cloud Infrastructure Design
              </h2>
              <p className="ca-content-description">
                Move your workloads to the cloud with zero downtime and maximum
                efficiency. Our proven migration methodology ensures business
                continuity throughout the transition.
              </p>
              <ul className="ca-content-list">
                <li>
                  <FiCheckCircle className="ca-list-icon" /> Zero-downtime
                  migration
                </li>
                <li>
                  <FiCheckCircle className="ca-list-icon" /> Automated data
                  synchronization
                </li>
                <li>
                  <FiCheckCircle className="ca-list-icon" /> Post-migration
                  optimization
                </li>
              </ul>
              <button
                className="ca-learn-more-btn"
                onClick={() => navigate("/services/cloud-migration")}
              >
                Learn More <FiArrowRight />
              </button>
            </div>
            <div className="ca-image-box">
              <div className="ca-image-glow"></div>
              <div className="ca-floating-badge">
                <div className="ca-floating-badge-icon">
                  <FiTrendingUp />
                </div>
                <div className="ca-floating-badge-text">
                  <h5>ISO 27001</h5>
                  <p>Certified Solution</p>
                </div>
              </div>
              <img
                src={images.cloudMigration}
                alt="cloud architecture services UK - DevOpsTrio scalable enterprise cloud infrastructure design UK"
                className="ca-content-image"
              />
              <div className="ca-image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Image-Content Section 2: Left Image, Right Content */}
      <section className="ca-image-content-section">
        <div className="ca-container">
          <div className="ca-image-content-grid ca-image-left">
            <div className="ca-image-box">
              <div className="ca-image-glow"></div>
              <div className="ca-floating-badge">
                <div className="ca-floating-badge-icon">
                  <FiShield />
                </div>
                <div className="ca-floating-badge-text">
                  <h5>Military Grade</h5>
                  <p>AES-256 Bit Encryption</p>
                </div>
              </div>
              <img
                src={images.dataSecurity}
                alt="Advanced Security & GDPR Compliant Cloud Architecture UK"
                className="ca-content-image"
              />
              <div className="ca-image-overlay"></div>
            </div>
            <div className="ca-content-box">
              <span className="ca-accent-label">ENTERPRISE SECURITY</span>
              <h2 className="ca-content-title">
                Advanced Security & GDPR Compliant Cloud Architecture
              </h2>
              <p className="ca-content-description">
                Protect your sensitive data with military-grade encryption and
                compliance with global security standards including GDPR, HIPAA,
                and SOC2.
              </p>
              <div className="ca-mini-feature-grid">
                <div className="ca-mini-feature">
                  <FiShield className="ca-mini-icon" />
                  <div>
                    <h4>End-to-End Encryption</h4>
                    <p>AES-256 encryption for all data</p>
                  </div>
                </div>
                <div className="ca-mini-feature">
                  <FiLock className="ca-mini-icon" />
                  <div>
                    <h4>Access Control</h4>
                    <p>Granular IAM policies</p>
                  </div>
                </div>
              </div>
              <button
                className="ca-learn-more-btn"
                style={{ marginTop: "30px" }}
                onClick={() => navigate("/services/security")}
              >
                Learn More <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Image-Content Section 3: Left Content, Right Image */}
      <section className="ca-image-content-section">
        <div className="ca-container">
          <div className="ca-image-content-grid ca-content-left">
            <div className="ca-content-box">
              <span className="ca-accent-label">DEVOPS & AUTOMATION</span>
              <h2 className="ca-content-title">DevOps & Automation for UK Cloud Environments</h2>
              <p className="ca-content-description">
                Automate your development workflow with CI/CD pipelines,
                infrastructure as code, and real-time monitoring to improve efficiency and reliability.
              </p>
              <div className="ca-tech-stats">
                <div className="ca-tech-stat">
                  <FiTrendingUp className="ca-tech-stat-icon" />
                  <h4>70% Faster</h4>
                  <p>Deployment time</p>
                </div>
                <div className="ca-tech-stat">
                  <FiActivity className="ca-tech-stat-icon" />
                  <h4>99%</h4>
                  <p>Automation coverage</p>
                </div>
              </div>
              <button
                className="ca-learn-more-btn"
                onClick={() => navigate("/services/devops-enablement")}
              >
                Learn More <FiArrowRight />
              </button>
            </div>
            <div className="ca-image-box">
              <div className="ca-image-glow"></div>
              <div className="ca-floating-badge">
                <div className="ca-floating-badge-icon">
                  <FiActivity />
                </div>
                <div className="ca-floating-badge-text">
                  <h5>99.9% Uptime</h5>
                  <p>Guaranteed Stability</p>
                </div>
              </div>
              <img
                src={images.devopsTeam}
                alt="DevOps & Automation for UK Cloud Environments - DevOpsTrio"
                className="ca-content-image"
              />
              <div className="ca-image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Image-Content Section 4: Left Image, Right Content */}
      <section className="ca-image-content-section">
        <div className="ca-container">
          <div className="ca-image-content-grid ca-image-left">
            <div className="ca-image-box">
              <div className="ca-image-glow"></div>
              <div className="ca-floating-badge">
                <div className="ca-floating-badge-icon">
                  <FiAward />
                </div>
                <div className="ca-floating-badge-text">
                  <h5>Top 1% Experts</h5>
                  <p>Global Talent Pool</p>
                </div>
              </div>
              <img
                src={images.teamCollaboration}
                alt="hybrid cloud solutions UK – DevOpsTrio"
                className="ca-content-image"
              />
              <div className="ca-image-overlay"></div>
            </div>
            <div className="ca-content-box">
              <span className="ca-accent-label">HYBRID CLOUD</span>
              <h2 className="ca-content-title">Hybrid Cloud Architecture Solutions for UK Businesses</h2>
              <p className="ca-content-description">
                Work with certified cloud experts who have years of experience
                in designing, implementing, and optimizing cloud solutions for
                enterprises worldwide.
              </p>
              <div className="ca-team-stats">
                <div className="ca-team-stat">
                  <FiUsers className="ca-team-icon" />
                  <h4>50+</h4>
                  <p>Cloud Experts</p>
                </div>
                <div className="ca-team-stat">
                  <FiAward className="ca-team-icon" />
                  <h4>100+</h4>
                  <p>Certifications</p>
                </div>
                <div className="ca-team-stat">
                  <FiClock className="ca-team-icon" />
                  <h4>10+ Years</h4>
                  <p>Avg Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="ca-services-section">
        <div className="ca-container">
          <div className="ca-section-header">
            <span className="ca-section-subtitle ca-gradient-text">
              OUR SERVICES
            </span>
            <h2 className="ca-section-title">
              Comprehensive{" "}
              <span className="ca-gradient-text">Cloud Services</span>
            </h2>
          </div>
          <div className="ca-services-grid">
            <div className="ca-service-card">
              <div className="ca-service-icon-wrapper">
                <FiCloud className="ca-service-icon" />
              </div>
              <h3>Cloud Migration</h3>
              <p>
                Seamless transition of your applications and data to the cloud.
              </p>
              <ul className="ca-service-features">
                <li>
                  <FiCheckCircle className="ca-check-icon" /> Assessment &
                  Planning
                </li>
                <li>
                  <FiCheckCircle className="ca-check-icon" /> Data Migration
                </li>
                <li>
                  <FiCheckCircle className="ca-check-icon" /> Application
                  Refactoring
                </li>
              </ul>
            </div>
            <div className="ca-service-card">
              <div className="ca-service-icon-wrapper">
                <FiLock className="ca-service-icon" />
              </div>
              <h3>Cloud Security</h3>
              <p>
                Comprehensive security solutions for your cloud infrastructure.
              </p>
              <ul className="ca-service-features">
                <li>
                  <FiCheckCircle className="ca-check-icon" /> Identity
                  Management
                </li>
                <li>
                  <FiCheckCircle className="ca-check-icon" /> Encryption
                </li>
                <li>
                  <FiCheckCircle className="ca-check-icon" /> Threat Detection
                </li>
              </ul>
            </div>
            <div className="ca-service-card">
              <div className="ca-service-icon-wrapper">
                <FiActivity className="ca-service-icon" />
              </div>
              <h3>Performance Optimization</h3>
              <p>Optimize your cloud resources for maximum efficiency.</p>
              <ul className="ca-service-features">
                <li>
                  <FiCheckCircle className="ca-check-icon" /> Auto-scaling
                </li>
                <li>
                  <FiCheckCircle className="ca-check-icon" /> Load Balancing
                </li>
                <li>
                  <FiCheckCircle className="ca-check-icon" /> Caching Strategies
                </li>
              </ul>
            </div>
            <div className="ca-service-card">
              <div className="ca-service-icon-wrapper">
                <FiDatabase className="ca-service-icon" />
              </div>
              <h3>Cloud Storage</h3>
              <p>Scalable and durable storage solutions for any workload.</p>
              <ul className="ca-service-features">
                <li>
                  <FiCheckCircle className="ca-check-icon" /> Object Storage
                </li>
                <li>
                  <FiCheckCircle className="ca-check-icon" /> Block Storage
                </li>
                <li>
                  <FiCheckCircle className="ca-check-icon" /> Backup & Recovery
                </li>
              </ul>
            </div>
            <div className="ca-service-card">
              <div className="ca-service-icon-wrapper">
                <FiGitBranch className="ca-service-icon" />
              </div>
              <h3>DevOps & Automation</h3>
              <p>
                Streamline your development and operations with CI/CD pipelines.
              </p>
              <ul className="ca-service-features">
                <li>
                  <FiCheckCircle className="ca-check-icon" /> CI/CD Pipeline
                </li>
                <li>
                  <FiCheckCircle className="ca-check-icon" /> Infrastructure as
                  Code
                </li>
                <li>
                  <FiCheckCircle className="ca-check-icon" /> Automated Testing
                </li>
              </ul>
            </div>
            <div className="ca-service-card">
              <div className="ca-service-icon-wrapper">
                <FiServer className="ca-service-icon" />
              </div>
              <h3>Database Management</h3>
              <p>
                Managed database services for optimal performance and
                reliability.
              </p>
              <ul className="ca-service-features">
                <li>
                  <FiCheckCircle className="ca-check-icon" /> SQL & NoSQL
                </li>
                <li>
                  <FiCheckCircle className="ca-check-icon" /> Automated Backups
                </li>
                <li>
                  <FiCheckCircle className="ca-check-icon" /> High Availability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section - Infinite Slider */}
      <section className="ca-tech-section">
        <div className="ca-container">
          <div className="ca-section-header">
            <span className="ca-section-subtitle ca-gradient-text">
              TECHNOLOGIES
            </span>
            <h2 className="ca-section-title">
              Cloud Technologies We Use —{" "}
              <span className="ca-gradient-text">AWS, Azure & GCP</span>
            </h2>
          </div>
          <p className="ca-tech-description" style={{ textAlign: "center", marginBottom: "40px", color: "var(--text-muted)" }}>
            Tools and Technologies We Use to Deliver Scalable Cloud Solutions
          </p>

          <div className="ca-tech-slider-container">
            <div className="ca-tech-slider-track">
              {/* First set of technologies */}
              <div className="ca-tech-item">
                <FaAws className="ca-tech-icon" />
                <span>AWS</span>
              </div>
              <div className="ca-tech-item">
                <FaMicrosoft className="ca-tech-icon" />
                <span>Azure</span>
              </div>
              <div className="ca-tech-item">
                <FaGoogle className="ca-tech-icon" />
                <span>Google Cloud</span>
              </div>
              <div className="ca-tech-item">
                <FaDocker className="ca-tech-icon" />
                <span>Docker</span>
              </div>
              <div className="ca-tech-item">
                <FiBox className="ca-tech-icon" />
                <span>Kubernetes</span>
              </div>
              <div className="ca-tech-item">
                <FiLayers className="ca-tech-icon" />
                <span>Terraform</span>
              </div>
              <div className="ca-tech-item">
                <FaJenkins className="ca-tech-icon" />
                <span>Jenkins</span>
              </div>
              <div className="ca-tech-item">
                <FaGithub className="ca-tech-icon" />
                <span>GitHub Actions</span>
              </div>

              {/* Duplicate set for seamless infinite loop */}
              <div className="ca-tech-item">
                <FaAws className="ca-tech-icon" />
                <span>AWS</span>
              </div>
              <div className="ca-tech-item">
                <FaMicrosoft className="ca-tech-icon" />
                <span>Azure</span>
              </div>
              <div className="ca-tech-item">
                <FaGoogle className="ca-tech-icon" />
                <span>Google Cloud</span>
              </div>
              <div className="ca-tech-item">
                <FaDocker className="ca-tech-icon" />
                <span>Docker</span>
              </div>
              <div className="ca-tech-item">
                <FiBox className="ca-tech-icon" />
                <span>Kubernetes</span>
              </div>
              <div className="ca-tech-item">
                <FiLayers className="ca-tech-icon" />
                <span>Terraform</span>
              </div>
              <div className="ca-tech-item">
                <FaJenkins className="ca-tech-icon" />
                <span>Jenkins</span>
              </div>
              <div className="ca-tech-item">
                <FaGithub className="ca-tech-icon" />
                <span>GitHub Actions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="ca-testimonial-section">
        <div className="ca-container">
          <FaQuoteRight className="ca-testimonial-quote-icon" />
          <div className="ca-testimonial-content">
            <p className="ca-testimonial-text">
              "Their cloud architecture transformed our infrastructure
              completely. We've seen a 60% reduction in costs and 99.99% uptime
              since migration."
            </p>
            <div className="ca-testimonial-author">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Author"
              />
              <div>
                <h4>John Smith</h4>
                <p>CTO, TechCorp</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="ca-stats-section">
        <div className="ca-container">
          <div className="ca-stats-grid">
            <div className="ca-stat-item">
              <h3 className="ca-gradient-text">99.9%</h3>
              <p>Uptime SLA</p>
            </div>
            <div className="ca-stat-item">
              <h3 className="ca-gradient-text">500+</h3>
              <p>Projects Delivered</p>
            </div>
            <div className="ca-stat-item">
              <h3 className="ca-gradient-text">50+</h3>
              <p>Cloud Experts</p>
            </div>
            <div className="ca-stat-item">
              <h3 className="ca-gradient-text">24/7</h3>
              <p>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <Newsletter />
      <Cta 
        heading="Ready to Transform Your Cloud Infrastructure?"
        description="Join 200+ businesses that have modernized their cloud environments with scalable, secure, and high-performance solutions."
      />
    </div>
  );
};

export default CloudArchitecture;
