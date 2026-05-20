import Cta from "../components/Cta/Cta";
import PlatformSectionhero from "../components/Hero/PlatformSectionhero";
import OrderJourneySection from "../components/OrderJourneySection/OrderJourneySection";
import UnifiedIntegrations from "../components/UnifiedIntegrations/UnifiedIntegrations";

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ChartBarIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import "../Style/PlatformPage.css";
import { useEffect } from "react";
import useSEO from "../hooks/useSEO";

export default function PlatformPage() {
  useSEO({
    title: "Enterprise DevOps & Cloud Platform Company | Devopstrio",
    description: "Our AI-powered DevOps platform integrates automation, cloud-native infrastructure, and real-time intelligence to accelerate enterprise digital transformation.",
    keywords: "DevOps platform, cloud-native architecture, enterprise automation platform, AI workflow automation, Kubernetes microservices orchestration, SaaS scaling, retail cloud solutions, data intelligence platform, Devopstrio platform",
    ogTitle: "Enterprise DevOps & Cloud Platform | Devopstrio",
    ogDescription: "Leverage intelligent automation, real-time analytics, and secure multi-cloud scaling to transform your enterprise infrastructure with Devopstrio.",
    ogImage: "https://devopstrio.com/assets/images/devopstrio-og-platform.jpg",
    ogUrl: "https://devopstrio.com/platform",
    canonicalUrl: "https://devopstrio.com/platform"
  });

  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    );

    document
      .querySelectorAll("[data-aos]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="platform-dark-root">
      <PlatformSectionhero />
      {/* Trust Badges Section */}
      <section className="platform-trust-badges">
        <div className="platform-container">
          <div className="platform-trust-wrapper">
            <span className="platform-trust-text">
              Trusted by 10,000+ companies worldwide
            </span>
            <div className="platform-badge-strip">
              <span className="platform-company-badge">TECHVISION</span>
              <span className="platform-company-badge">CLOUDNOVA</span>
              <span className="platform-company-badge">DATACORE</span>
              <span className="platform-company-badge">STACKFLOW</span>
              <span className="platform-company-badge">DEVBRIDGE</span>
            </div>
          </div>
        </div>
      </section>

      {/* Zig-Zag Showcase - Alternating Content with Real Images */}
      <section className="zigzag-showcase">
        <div className="zigzag-container">
          {/* Section Header */}
          <div className="zigzag-header" data-aos="fade-up">
            <span className="platform-section-mini-title">
              INNOVATION SHOWCASE
            </span>
            <h2 className="platform-section-main-heading">
              Transform Your{" "}
              <span className="platform-gradient-text">Business</span>
            </h2>
            <p className="platform-section-description">
              Discover how our platform drives digital transformation across
              industries
            </p>
          </div>

          {/* Zig-Zag Item 1 - Content Left, Image Right */}
          <div className="zigzag-item" data-aos="fade-up">
            <div className="zigzag-grid content-left">
              <div className="zigzag-content">
                <div className="content-badge">01 — INTELLIGENT AUTOMATION</div>
                <h3 className="content-title">
                  AI-Powered Workflow Automation
                </h3>
                <p className="content-description">
                  Leverage cutting-edge artificial intelligence to automate
                  complex business processes, reduce manual intervention, and
                  accelerate decision-making with unprecedented accuracy.
                </p>
                <ul className="content-features">
                  <li>
                    <svg
                      className="feature-check"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span>Intelligent process orchestration</span>
                  </li>
                  <li>
                    <svg
                      className="feature-check"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span>Real-time anomaly detection</span>
                  </li>
                  <li>
                    <svg
                      className="feature-check"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span>Predictive task routing</span>
                  </li>
                </ul>
                <a href="#" className="content-cta">
                  Explore Technology
                  <svg className="cta-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </div>
              <div className="zigzag-image-wrapper">
                <div className="graph-pattern top"></div>
                <div className="graph-pattern bottom"></div>
                <div className="image-glow"></div>
                <div className="image-frame">
                  <img
                    src="/images/NewFolder/Groups_39.png"
                    alt="AI Automation Technology"
                    className="showcase-image"
                  />
                  <div className="image-overlay-grid"></div>
                  <div className="image-caption">
                    <span>AI</span>
                    <span>ML</span>
                    <span>AUTOMATION</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Zig-Zag Item 2 - Image Left, Content Right (FIXED) */}
          <div className="zigzag-item" data-aos="fade-up">
            <div className="zigzag-grid content-right">
              <div className="zigzag-image-wrapper">
                <div className="graph-pattern top"></div>
                <div className="graph-pattern bottom"></div>
                <div className="image-glow"></div>
                <div className="image-frame">
                  <img
                    src="/images/NewFolder/Groups_36.png"
                    alt="Cloud Computing Infrastructure"
                    className="showcase-image"
                  />
                  <div className="image-overlay-grid"></div>
                  <div className="image-caption">
                    <span>CLOUD</span>
                    <span>SCALE</span>
                    <span>GLOBAL</span>
                  </div>
                </div>
              </div>
              <div className="zigzag-content">
                <div className="content-badge">02 — CLOUD NATIVE</div>
                <h3 className="content-title">
                  Cloud-Native Architecture & Scaling
                </h3>
                <p className="content-description">
                  Build resilient, scalable applications with cloud-native
                  technologies that seamlessly adapt to demand while ensuring
                  high availability across hybrid and multi-cloud environments.
                </p>
                <ul className="content-features">
                  <li>
                    <svg
                      className="feature-check"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span>Kubernetes-native deployment</span>
                  </li>
                  <li>
                    <svg
                      className="feature-check"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span>Auto-scaling microservices</span>
                  </li>
                  <li>
                    <svg
                      className="feature-check"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span>Multi-cloud orchestration</span>
                  </li>
                </ul>
                <a href="#" className="content-cta">
                  Explore Technology
                  <svg className="cta-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Zig-Zag Item 3 - Content Left, Image Right */}
          <div className="zigzag-item" data-aos="fade-up">
            <div className="zigzag-grid content-left">
              <div className="zigzag-content">
                <div className="content-badge">03 — DATA INTELLIGENCE</div>
                <h3 className="content-title">
                  Real-Time Analytics & Machine Learning
                </h3>
                <p className="content-description">
                  Transform raw data into actionable intelligence with advanced
                  analytics and machine learning models that predict trends,
                  optimize operations, and drive strategic decisions.
                </p>
                <ul className="content-features">
                  <li>
                    <svg
                      className="feature-check"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span>Streaming analytics pipelines</span>
                  </li>
                  <li>
                    <svg
                      className="feature-check"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span>Predictive ML models</span>
                  </li>
                  <li>
                    <svg
                      className="feature-check"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M8 12L11 15L16 9"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                    <span>Interactive data visualization</span>
                  </li>
                </ul>
                <a href="#" className="content-cta">
                  Explore Technology
                  <svg className="cta-icon" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </a>
              </div>
              <div className="zigzag-image-wrapper">
                <div className="graph-pattern top"></div>
                <div className="graph-pattern bottom"></div>
                <div className="image-glow"></div>
                <div className="image-frame">
                  <img
                    src="/images/NewFolder/Groups_28.png"
                    alt="Data Analytics Dashboard"
                    className="showcase-image"
                  />
                  <div className="image-overlay-grid"></div>
                  <div className="image-caption">
                    <span>ANALYTICS</span>
                    <span>INSIGHTS</span>
                    <span>ML</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Journey Section */}
      {/* <OrderJourneySection /> */}

      {/* Key Features Section */}
      <section className="platform-capabilities-vault">
        <div className="platform-container">
          <div className="platform-section-header" data-aos="fade-up">
            <span className="platform-section-mini-title">
              ENTERPRISE GRADE
            </span>
            <h2 className="platform-section-main-heading">
              Platform{" "}
              <span className="platform-gradient-text">Capabilities</span>
            </h2>
            <p className="platform-section-description">
              Built for scale, security, and performance
            </p>
          </div>

          <div className="platform-capabilities-grid">
            <div
              className="platform-capability-item"
              data-aos="zoom-in"
              data-aos-delay="100"
            >
              <div className="platform-capability-icon-wrapper platform-icon-deep-purple-bg">
                <CloudArrowUpIcon className="platform-capability-icon platform-icon-deep-purple" />
              </div>
              <h3 className="platform-capability-title">
                Scalable Infrastructure
              </h3>
              <p className="platform-capability-description">
                Automatically scale resources based on demand with zero
                downtime.
              </p>
            </div>

            <div
              className="platform-capability-item"
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              <div className="platform-capability-icon-wrapper platform-icon-purple-pink-bg">
                <LockClosedIcon className="platform-capability-icon platform-icon-purple-pink" />
              </div>
              <h3 className="platform-capability-title">Enterprise Security</h3>
              <p className="platform-capability-description">
                End-to-end encryption and compliance with industry standards.
              </p>
            </div>

            <div
              className="platform-capability-item"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="platform-capability-icon-wrapper platform-icon-rose-red-bg">
                <ChartBarIcon className="platform-capability-icon platform-icon-rose-red" />
              </div>
              <h3 className="platform-capability-title">Advanced Analytics</h3>
              <p className="platform-capability-description">
                Real-time insights and predictive analytics for data-driven
                decisions.
              </p>
            </div>

            <div
              className="platform-capability-item"
              data-aos="zoom-in"
              data-aos-delay="250"
            >
              <div className="platform-capability-icon-wrapper platform-icon-warm-coral-bg">
                <ServerIcon className="platform-capability-icon platform-icon-warm-coral" />
              </div>
              <h3 className="platform-capability-title">
                Global Infrastructure
              </h3>
              <p className="platform-capability-description">
                Deploy across multiple regions for low-latency access worldwide.
              </p>
            </div>

            <div
              className="platform-capability-item"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="platform-capability-icon-wrapper platform-icon-soft-orange-bg">
                <CircleStackIcon className="platform-capability-icon platform-icon-soft-orange" />
              </div>
              <h3 className="platform-capability-title">Data Management</h3>
              <p className="platform-capability-description">
                Automated backup, recovery, and data lifecycle management.
              </p>
            </div>

            <div
              className="platform-capability-item"
              data-aos="zoom-in"
              data-aos-delay="350"
            >
              <div className="platform-capability-icon-wrapper platform-icon-deep-purple-bg">
                <ShieldCheckIcon className="platform-capability-icon platform-icon-deep-purple" />
              </div>
              <h3 className="platform-capability-title">Compliance Ready</h3>
              <p className="platform-capability-description">
                SOC2, ISO 27001, and GDPR compliant infrastructure.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Integration Ecosystem */}
      <section className="platform-ecosystem-hub">
        <div className="platform-container">
          <div className="platform-section-header" data-aos="fade-up">
            <span className="platform-section-mini-title">
              SEAMLESS INTEGRATION
            </span>
            <h2 className="platform-section-main-heading">
              Connect with Your{" "}
              <span className="platform-gradient-text">Favorite Tools</span>
            </h2>
            <p className="platform-section-description">
              Native integrations with leading services and platforms
            </p>
          </div>

          <div
            className="platform-integration-wall"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <span className="platform-integration-chip">AWS</span>
            <span className="platform-integration-chip">Azure</span>
            <span className="platform-integration-chip">GCP</span>
            <span className="platform-integration-chip">Kubernetes</span>
            <span className="platform-integration-chip">Docker</span>
            <span className="platform-integration-chip">GitHub</span>
            <span className="platform-integration-chip">Slack</span>
            <span className="platform-integration-chip">Datadog</span>
            <span className="platform-integration-chip">MongoDB</span>
            <span className="platform-integration-chip">PostgreSQL</span>
            <span className="platform-integration-chip">Redis</span>
            <span className="platform-integration-chip">Kafka</span>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="platform-use-cases-showcase">
        <div className="platform-container">
          <div className="platform-section-header" data-aos="fade-up">
            <span className="platform-section-mini-title">
              REAL WORLD APPLICATIONS
            </span>
            <h2 className="platform-section-main-heading">
              Platform <span className="platform-gradient-text">Use Cases</span>
            </h2>
            <p className="platform-section-description">
              How organizations leverage our platform
            </p>
          </div>

          <div className="platform-use-cases-layout">
            <div
              className="platform-use-case-block platform-use-case-saas"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="platform-use-case-pattern"></div>
              <div className="platform-use-case-content">
                <div className="platform-use-case-icon-container">
                  <CpuChipIcon className="platform-use-case-icon" />
                </div>
                <h3 className="platform-use-case-heading">
                  For SaaS Companies
                </h3>
                <p className="platform-use-case-description">
                  Build and scale your software as a service with our
                  comprehensive platform tools.
                </p>
                <ul className="platform-use-case-list">
                  <li className="platform-use-case-list-item">
                    <span className="platform-list-marker">→</span>
                    Quick deployment of multi-tenant applications
                  </li>
                  <li className="platform-use-case-list-item">
                    <span className="platform-list-marker">→</span>
                    Integrated billing and subscription management
                  </li>
                  <li className="platform-use-case-list-item">
                    <span className="platform-list-marker">→</span>
                    API-first architecture for easy integration
                  </li>
                </ul>
              </div>
            </div>

            <div
              className="platform-use-case-block platform-use-case-retail"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="platform-use-case-pattern"></div>
              <div className="platform-use-case-content">
                <div className="platform-use-case-icon-container">
                  <GlobeAltIcon className="platform-use-case-icon" />
                </div>
                <h3 className="platform-use-case-heading">
                  For Retail & E-commerce
                </h3>
                <p className="platform-use-case-description">
                  Transform your retail operations with scalable e-commerce
                  solutions.
                </p>
                <ul className="platform-use-case-list">
                  <li className="platform-use-case-list-item">
                    <span className="platform-list-marker">→</span>
                    Handle peak shopping seasons with auto-scaling
                  </li>
                  <li className="platform-use-case-list-item">
                    <span className="platform-list-marker">→</span>
                    Real-time inventory across all channels
                  </li>
                  <li className="platform-use-case-list-item">
                    <span className="platform-list-marker">→</span>
                    Personalized shopping experiences with AI
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Statistics Bar */}
      <section className="platform-statistics-bar">
        <div className="platform-container">
          <div className="platform-statistics-grid">
            <div
              className="platform-stat-item"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <span className="platform-stat-number">10K+</span>
              <span className="platform-stat-label">Active Customers</span>
            </div>
            <div className="platform-stat-divider"></div>
            <div
              className="platform-stat-item"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="platform-stat-number">1B+</span>
              <span className="platform-stat-label">API Calls/Day</span>
            </div>
            <div className="platform-stat-divider"></div>
            <div
              className="platform-stat-item"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="platform-stat-number">25</span>
              <span className="platform-stat-label">Global Regions</span>
            </div>
            <div className="platform-stat-divider"></div>
            <div
              className="platform-stat-item"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span className="platform-stat-number">99.99%</span>
              <span className="platform-stat-label">Uptime SLA</span>
            </div>
          </div>
        </div>
      </section>
      {/* UNIFIED INTEGRATIONS (NEW COMPONENT) */}
      <UnifiedIntegrations />

      {/* Success Stories */}
      <section className="platform-success-stories">
        <div className="platform-container">
          <div className="platform-section-header" data-aos="fade-up">
            <span className="platform-section-mini-title">
              CUSTOMER SUCCESS
            </span>
            <h2 className="platform-section-main-heading">
              Trusted by{" "}
              <span className="platform-gradient-text">Industry Leaders</span>
            </h2>
            <p className="platform-section-description">
              See how companies are transforming with our platform
            </p>
          </div>

          <div className="platform-stories-grid">
            <div
              className="platform-story-card"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="platform-story-badge">SaaS</div>
              <h3 className="platform-story-title">
                How TechFlow scaled to 1M users
              </h3>
              <p className="platform-story-excerpt">
                Using our platform, they achieved 10x growth without
                infrastructure changes.
              </p>
              <a href="#" className="platform-story-link">
                Read case study →
              </a>
            </div>
            <div
              className="platform-story-card"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="platform-story-badge">E-COMMERCE</div>
              <h3 className="platform-story-title">
                Global Retails Black Friday success
              </h3>
              <p className="platform-story-excerpt">
                Handled 5M concurrent users with zero downtime during peak
                season.
              </p>
              <a href="#" className="platform-story-link">
                Read case study →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="platform-faq-section">
        <div className="platform-container">
          <div className="platform-section-header" data-aos="fade-up">
            <span className="platform-section-mini-title">QUESTIONS?</span>
            <h2 className="platform-section-main-heading">
              Frequently Asked{" "}
              <span className="platform-gradient-text">Questions</span>
            </h2>
          </div>

          <div className="platform-faq-grid">
            <div
              className="platform-faq-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h4 className="platform-faq-question">How does scaling work?</h4>
              <p className="platform-faq-answer">
                Automatic horizontal scaling based on traffic patterns with zero
                downtime.
              </p>
            </div>
            <div
              className="platform-faq-card"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h4 className="platform-faq-question">
                What about data sovereignty?
              </h4>
              <p className="platform-faq-answer">
                Choose your data regions for compliance requirements across 25+
                global regions.
              </p>
            </div>
            <div
              className="platform-faq-card"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h4 className="platform-faq-question">
                What is your uptime guarantee?
              </h4>
              <p className="platform-faq-answer">
                We guarantee 99.9% uptime SLA with credits issued for any
                downtime exceeding our commitment.
              </p>
            </div>
            <div
              className="platform-faq-card"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <h4 className="platform-faq-question">
                Can I get a demo before signing up?
              </h4>
              <p className="platform-faq-answer">
                Absolutely! Schedule a personalized demo with our solution
                architects to see the platform in action.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Cta />
    </div>
  );
}
