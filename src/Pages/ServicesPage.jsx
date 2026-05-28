import { useState, useEffect, useRef } from "react";
import "../Style/ServicesPage.css";
import ServicesHero from "../components/Hero/Serviceshero";
import Cta from "../components/Cta/Cta";
import useSEO from "../hooks/useSEO";
import {
  FiArrowLeft,
  FiArrowRight,
  FiZap,
  FiRepeat,
  FiGlobe,
  FiSend,
  FiRefreshCw,
  FiSettings,
  FiShield,
  FiKey,
  FiClipboard,
  FiLock,
  FiCloud,
  FiActivity,
  FiDatabase,
  FiLayers,
  FiCheckCircle,
  FiCode,
  FiMonitor,
  FiHeadphones,
  FiBox,
} from "react-icons/fi";
import { FaAws, FaMicrosoft, FaGoogle } from "react-icons/fa";




//images
import DevOps from "../assets/images/Site_img/Groups_74.png";
import Cloud from "../assets/images/Site_img/Devops_1.png";
import Security from "../assets/images/Site_img/Devops_3.png";

import { motion, AnimatePresence } from "framer-motion";

const servicesList = [
  "CI/CD Automation", "Cloud Engineering", "Infrastructure as Code", "DevSecOps Integration", "Observability & Insights", "Strategic Consulting"
];

export default function ServicesPage() {
  const bdSliderRef = useRef(null);

  const scrollBdLeft = () => {
    if (bdSliderRef.current) {
      bdSliderRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollBdRight = () => {
    if (bdSliderRef.current) {
      bdSliderRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  useSEO({
    title: "DevOps & Cloud Services UK | Cloud Migration & DevSecOps | Devopstrio",
    description: "Explore Devopstrio’s DevOps services, cloud migration solutions, automated CI/CD pipelines, DevSecOps integration, and Infrastructure as Code (IaC) designed for scalable enterprise growth.",
    keywords: "Devops services UK, Devopstrio cloud engineering, enterprise cloud migration, automated CI/CD pipelines, DevSecOps integration, infrastructure as code, cloud security solutions, Kubernetes orchestration, zero-trust cloud architecture",
    ogTitle: "DevOps & Cloud Services UK | Devopstrio",
    ogDescription: "Discover how Devopstrio drives high-performance cloud architecture, automated pipelines, and highly scalable cloud-native environments for enterprise digital transformation.",
    ogImage: "https://devopstrio.com/assets/images/devopstrio-og-services.jpg",
    ogUrl: "https://devopstrio.com/services",
    canonicalUrl: "https://devopstrio.com/services"
  });

  useEffect(() => {
    // Elements to observe
    const proBlocks = document.querySelectorAll(".spg-pro-service-block");
    const quantumSteps = document.querySelectorAll(".spg-quantum-step");
    const quantumTrack = document.querySelector(".spg-quantum-track");
    const valueCards = document.querySelectorAll(".spg-value-card");
    const metrics = document.querySelectorAll(".spg-metrics div");
    const leadershipLeft = document.querySelector(".spg-leadership-left");
    const leadershipRight = document.querySelector(".spg-leadership-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("spg-show");

            // Special handling for timeline steps
            if (entry.target.classList.contains("spg-quantum-step")) {
              setTimeout(() => {
                entry.target.classList.add("spg-active");
              }, 300);
            }
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    // Observe all elements
    proBlocks.forEach((block) => observer.observe(block));
    quantumSteps.forEach((step) => observer.observe(step));
    valueCards.forEach((card) => observer.observe(card));
    metrics.forEach((metric) => observer.observe(metric));

    if (quantumTrack) observer.observe(quantumTrack);
    if (leadershipLeft) observer.observe(leadershipLeft);
    if (leadershipRight) observer.observe(leadershipRight);

    // Stagger animations
    const quantumStepsArray = Array.from(quantumSteps);
    quantumStepsArray.forEach((step, index) => {
      step.style.transitionDelay = `${index * 0.25}s`;
    });

    const valueCardsArray = Array.from(valueCards);
    valueCardsArray.forEach((card, index) => {
      card.style.transitionDelay = `${index * 0.15}s`;
    });
  }, []);

  return (
    <>
      <ServicesHero />

        {/* =========================================
          END-TO-END DEVOPS SECTION
          ========================================= */}
      <section className="spg-sv-e2e-section">
        <div className="spg-sv-e2e-container">
          <div className="spg-sv-e2e-grid">
            <div className="spg-sv-e2e-content">
              <span className="spg-sv-e2e-badge">OUR SERVICES</span>
              <h2 className="spg-sv-e2e-title">
                End-to-End DevOps Services<br />
                to <span className="sv-gradient-text">Accelerate Your Success</span>
              </h2>
              <p className="spg-sv-e2e-desc">
                We help businesses automate, deploy, and scale with confidence 
                using modern DevOps and Cloud technologies.
              </p>
            </div>

            <div className="spg-sv-e2e-visual">
              <div className="spg-sv-s-pipeline-container">
                {/* Background S-Line */}
                <svg className="spg-sv-s-line-svg" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M 120 120 H 900 C 950 120 950 240 900 240 H 100 C 50 240 50 360 100 360 H 900" 
                    stroke="url(#sv-gradient)" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeDasharray="10 15"
                    className="spg-sv-s-path-bg"
                  />
                  <defs>
                    <linearGradient id="sv-gradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ce2453" />
                      <stop offset="0.5" stopColor="#962964" />
                      <stop offset="1" stopColor="#e79e57" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="spg-sv-s-steps">
                  {/* TOP ROW */}
                  <div className="spg-sv-s-step spg-step-plan">
                    <div className="spg-sv-s-icon"><FiCode /></div>
                    <div className="spg-sv-s-info">
                      <strong>PLAN</strong>
                      <p>Plan and track everything</p>
                    </div>
                  </div>
                  <div className="spg-sv-s-step spg-step-code">
                    <div className="spg-sv-s-icon"><FiLayers /></div>
                    <div className="spg-sv-s-info">
                      <strong>CODE</strong>
                      <p>Write and review code faster</p>
                    </div>
                  </div>
                  <div className="spg-sv-s-step spg-step-build">
                    <div className="spg-sv-s-icon"><FiSettings /></div>
                    <div className="spg-sv-s-info">
                      <strong>BUILD</strong>
                      <p>Automate build process</p>
                    </div>
                  </div>

                  {/* BOTTOM ROW (Reversed in flow) */}
                  <div className="spg-sv-s-step spg-step-monitor">
                    <div className="spg-sv-s-icon"><FiCheckCircle /></div>
                    <div className="spg-sv-s-info">
                      <strong>TEST</strong>
                      <p>Ensure quality with testing</p>
                    </div>
                  </div>
                  <div className="spg-sv-s-step spg-step-deploy">
                    <div className="spg-sv-s-icon"><FiCloud /></div>
                    <div className="spg-sv-s-info">
                      <strong>DEPLOY</strong>
                      <p>Deploy to any environment</p>
                    </div>
                  </div>
                    <div className="spg-sv-s-step spg-step-test">
                    <div className="spg-sv-s-icon"><FiActivity /></div>
                    <div className="spg-sv-s-info">
                      <strong>MONITOR</strong>
                      <p>Monitor and optimize</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          TECH STACK MARQUEE SECTION - DESIGN FROM IMAGE
          ========================================= */}
      <section className="spg-sv-tech-marquee-section">
        <div className="spg-marquee-label">OUR CORE SERVICES</div>
        <div className="spg-marquee-outer">
          <div className="spg-marquee-inner">
            {/* Triple the array for seamless looping on high-res displays */}
            {[...servicesList, ...servicesList, ...servicesList].map((service, idx) => (
              <div key={idx} className="spg-marquee-item-wrapper">
                <span className="spg-marquee-tech-name">{service.toUpperCase()}</span>
                <span className="spg-marquee-divider"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* =========================================
          PRO SERVICES SECTION
          ========================================= */}
      <section className="spg-pro-services-section">
        <div className="spg-pro-services-container">
          {/* CLOUD SERVICES */}
          <div className="spg-pro-service-block">
            <div className="spg-pro-service-bg-glow"></div>
            <div className="spg-pro-service-content">
              <span className="spg-pro-badge">01 // ARCHITECTURE</span>
              <h2>Cloud Services</h2>
              <p>
                We design scalable, secure, and high-performance cloud
                infrastructures that accelerate digital transformation and
                reduce operational complexity.
              </p>

              <ul className="spg-pro-features">
                <li>
                  <div className="spg-pro-icon-box">
                    <FiZap />
                  </div>
                  <div className="spg-pro-feature-text">
                    <strong>Cloud Architecture</strong>
                    <span>
                      Architect scalable, resilient, and cost-optimized
                      environments.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="spg-pro-icon-box">
                    <FiRepeat />
                  </div>
                  <div className="spg-pro-feature-text">
                    <strong>Cloud Migration</strong>
                    <span>
                      Seamless migration with zero downtime and minimal
                      disruption.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="spg-pro-icon-box">
                    <FiGlobe />
                  </div>
                  <div className="spg-pro-feature-text">
                    <strong>Multi-Cloud & Hybrid</strong>
                    <span>
                      Integrated strategies across Azure, AWS, and GCP.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="spg-pro-service-visual">
              <div className="spg-pro-image-wrapper">
                <img src={Cloud} alt="Cloud Services" />
                <div className="pro-visual-gradient-rim"></div>
              </div>

              {/* Dynamic Cloud Orbit Arc */}
              <div className="spg-cloud-orbit-wrap">
                <div className="spg-orbit-circle spg-c-1"></div>
                <div className="spg-orbit-circle spg-c-2"></div>
                <div className="spg-orbit-circle spg-c-3"></div>

                <div className="spg-orbit-node spg-n-1">
                  <FaMicrosoft />
                  <div className="spg-node-glow"></div>
                </div>
                <div className="spg-orbit-node spg-n-2">
                  <FaAws />
                  <div className="spg-node-glow"></div>
                </div>
                <div className="spg-orbit-node spg-n-3">
                  <FaGoogle />
                  <div className="spg-node-glow"></div>
                </div>
                
              </div>


              <div className="spg-floating-card spg-cloud-card-2">
                <div className="spg-icon-circle">
                  <FiRefreshCw />
                </div>
                <div className="spg-card-text">
                  <strong>Migration</strong>
                  <span>Seamless Transition</span>
                </div>
              </div>
            </div>

          </div>

          {/* DEVOPS */}
          <div className="spg-pro-service-block spg-reverse">
            <div className="spg-pro-service-bg-glow spg-alt"></div>
            <div className="spg-pro-service-content">
              <span className="spg-pro-badge">02 // AUTOMATION</span>
              <h2>DevOps & Platform Engineering</h2>
              <p>
                We accelerate release cycles and improve system reliability
                through automation, CI/CD pipelines, and infrastructure
                modernization.
              </p>

              <ul className="spg-pro-features">
                <li>
                  <div className="spg-pro-icon-box">
                    <FiSend />
                  </div>
                  <div className="spg-pro-feature-text">
                    <strong>DevOps Enablement</strong>
                    <span>
                      Build high performance DevOps culture and frameworks.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="spg-pro-icon-box">
                    <FiRefreshCw />
                  </div>
                  <div className="spg-pro-feature-text">
                    <strong>CI/CD Automation</strong>
                    <span>
                      Fully automated build, test, and deployment pipelines.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="spg-pro-icon-box">
                    <FiSettings />
                  </div>
                  <div className="spg-pro-feature-text">
                    <strong>Infrastructure as Code</strong>
                    <span>
                      Manage infrastructure using secure, version controlled
                      code.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="spg-pro-service-visual">
              <div className="spg-pro-image-wrapper">
                <img src={DevOps} alt="DevOps Services" />
                <div className="pro-visual-gradient-rim"></div>
              </div>

              {/* Floating Cards */}
              <div className="spg-floating-card spg-devops-card-1">
                <div className="spg-card-badge">CI/CD</div>
                <div className="spg-pipeline-visual">
                  <div className="spg-p-node spg-active"></div>
                  <div className="spg-p-line spg-active"></div>
                  <div className="spg-p-node spg-active"></div>
                  <div className="spg-p-line"></div>
                  <div className="spg-p-node"></div>
                </div>
                <div className="spg-card-label">Auto-Deploy</div>
              </div>

              <div className="spg-floating-card spg-devops-card-2">
                <div className="spg-icon-circle spg-alt">
                  <FiZap />
                </div>
                <div className="spg-card-text">
                  <strong>Velocity</strong>
                  <span>10x Faster Shipping</span>
                </div>
              </div>
            </div>

          </div>

          {/* SECURITY */}
          <div className="spg-pro-service-block">
            <div className="spg-pro-service-bg-glow"></div>
            <div className="spg-pro-service-content">
              <span className="spg-pro-badge">03 // PROTECTION</span>
              <h2>Security & Reliability</h2>
              <p>
                We protect enterprise cloud ecosystems with advanced security
                frameworks, identity governance, and compliance management.
              </p>

              <ul className="spg-pro-features">
                <li>
                  <div className="spg-pro-icon-box">
                    <FiShield />
                  </div>
                  <div className="spg-pro-feature-text">
                    <strong>Cloud Security</strong>
                    <span>
                      Enterprise grade threat detection and proactive
                      protection.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="spg-pro-icon-box">
                    <FiKey />
                  </div>
                  <div className="spg-pro-feature-text">
                    <strong>Identity & Access</strong>
                    <span>
                      Secure access control and robust policy enforcement.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="spg-pro-icon-box">
                    <FiClipboard />
                  </div>
                  <div className="spg-pro-feature-text">
                    <strong>Compliance & Governance</strong>
                    <span>
                      Regulatory alignment and active risk mitigation
                      strategies.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="spg-pro-service-visual">
              <div className="spg-pro-image-wrapper">
                <img src={Security} alt="Security Services" />
                <div className="pro-visual-gradient-rim"></div>
              </div>

              {/* Floating Cards */}
              <div className="spg-floating-card spg-security-card-1">
                <div className="spg-card-badge">Security</div>
                <div className="spg-security-visual">
                  <FiShield className="spg-main-shield" />
                  <div className="spg-radar-circle"></div>
                </div>
                <div className="spg-card-label">Zero Trust</div>
              </div>

              <div className="spg-floating-card spg-security-card-2">
                <div className="spg-icon-circle spg-sec">
                  <FiLock />
                </div>
                <div className="spg-card-text">
                  <strong>Encryption</strong>
                  <span>AES-256 Protocol</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="spg-core-values">
        <span className="spg-section-badge">WHY CHOOSE US</span>
        <h2 className="spg-products-title">
          Core <span>Values</span>
        </h2>

        <div className="spg-values-grid">
          <div className="spg-value-card">
            <div className="spg-value-icon">
              <FiZap />
            </div>
            <h3>Innovation First</h3>
            <p>
              We stay ahead of technology curves to deliver cutting edge
              solutions.
            </p>
          </div>
          <div className="spg-value-card">
            <div className="spg-value-icon">
              <FiLock />
            </div>
            <h3>Security Obsessed</h3>
            <p>
              Every solution is built with enterprise grade security at its
              core.
            </p>
          </div>
          <div className="spg-value-card">
            <div className="spg-value-icon">
              <FiSend />
            </div>
            <h3>Speed & Scale</h3>
            <p>
              Optimized for performance from day one, ready to scale instantly.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH SECTION */}
      <section className="spg-approach-section">
        <div className="spg-approach-content">
          <span className="spg-section-badge">OUR APPROACH</span>
          <h2>
            Engineering Excellence
            <br />
            Delivered
          </h2>
          <p>
            We combine deep technical expertise with strategic thinking to
            deliver solutions that drive real business outcomes.
          </p>

          <div className="spg-metrics">
            <div>
              <h3>200+</h3>
              <span>Projects Delivered</span>
            </div>
            <div>
              <h3>98%</h3>
              <span>Client Retention</span>
            </div>
            <div>
              <h3>99.9%</h3>
              <span>Uptime SLA</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          BUSINESS DOMAINS SECTION
          ========================================= */}
      <section className="spg-business-domains-section">
        <div className="spg-bd-right-backdrop"></div>
        <div className="spg-bd-container">
          <div className="spg-bd-left">
            <span className="spg-section-badge">CORE EXPERTISE</span>
            <h2 className="spg-bd-title">
              Cloud
              <br />
              <span>Solutions</span>
            </h2>
            <p className="spg-bd-subtitle">
              Delivering high-performance architecture, automated pipelines, and
              highly scalable cloud-native products designed to accelerate
              engineering speed.
            </p>
            <div className="spg-bd-nav-arrows">
              <button className="spg-bd-arrow" onClick={scrollBdLeft}>
                <FiArrowLeft />
              </button>
              <button className="spg-bd-arrow" onClick={scrollBdRight}>
                <FiArrowRight />
              </button>
            </div>
          </div>

          <div className="spg-bd-cards-slider" ref={bdSliderRef}>
            {/* Card 1 */}
            <div className="spg-bd-card">
              <div className="spg-bd-card-img">
                <img
                  src="/images/NewFolder/Groups_70.png"
                  alt="SaaS & Cloud Platforms"
                />
              </div>
              <div className="spg-bd-card-content">
                <span className="spg-bd-card-num">Service. 01</span>
                <h3>SaaS & Cloud Platforms</h3>
              </div>
            </div>
            {/* Card 2 */}
            <div className="spg-bd-card">
              <div className="spg-bd-card-img">
                <img
                  src="/images/NewFolder/Groups_71.png"
                  alt="Infrastructure Migration"
                />
              </div>
              <div className="spg-bd-card-content">
                <span className="spg-bd-card-num">Service. 02</span>
                <h3>Infrastructure Migration</h3>
              </div>
            </div>
            {/* Card 3 */}
            <div className="spg-bd-card">
              <div className="spg-bd-card-img">
                <img
                  src="/images/NewFolder/Groups_72.png"
                  alt="Enterprise DevOps"
                />
              </div>
              <div className="spg-bd-card-content">
                <span className="spg-bd-card-num">Service. 03</span>
                <h3>Enterprise CI/CD</h3>
              </div>
            </div>
            {/* Card 4 */}
            <div className="spg-bd-card">
              <div className="spg-bd-card-img">
                <img
                  src="/images/NewFolder/Groups_73.png"
                  alt="Data & AI Solutions"
                />
              </div>
              <div className="spg-bd-card-content">
                <span className="spg-bd-card-num">Service. 04</span>
                <h3>Data & AI Solutions</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="spg-leadership-section">
        <div className="spg-leadership-content">
          <div className="spg-leadership-left">
            <span className="spg-section-badge">LEADERSHIP</span>
            <h2>
              Built by Engineers,
              <br />
              Led by Visionaries
            </h2>
            <p>
              Our leadership team brings decades of experience in cloud
              architecture, DevOps, and enterprise security from the worlds
              leading technology companies.
            </p>
            <ul>
              <li>✓ 50+ Enterprise Architects</li>
              <li>✓ 200+ Certified Engineers</li>
              <li>✓ 15+ Years Average Experience</li>
            </ul>
          </div>
          <div className="spg-leadership-right">
            <div className="spg-leadership-stats">
              <div>
                <h3>500+</h3>
                <span>Expert Engineers</span>
              </div>
              <div>
                <h3>100%</h3>
                <span>Client Success</span>
              </div>
              <div>
                <h3>50ms</h3>
                <span>Avg Response</span>
              </div>
              <div>
                <h3>99.9%</h3>
                <span>Uptime SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          QUANTUM TIMELINE SECTION
          ========================================= */}
      <section className="spg-quantum-timeline-section">
        <div className="spg-quantum-timeline-container">
          <div className="spg-quantum-header">
            <span className="spg-quantum-badge">THE BLUEPRINT</span>
            <h2 className="spg-quantum-title">
              Our Path to <span>Transformation</span>
            </h2>
            <p className="spg-quantum-subtitle">
              From initial assessment to global deployment, we execute with
              architectural precision at every stage.
            </p>
          </div>

          <div className="spg-quantum-track">
            <div className="spg-quantum-center-line"></div>

            {/* STAGE 1 */}
            <div className="spg-quantum-step spg-left-step">
              <div className="spg-quantum-node">
                <div className="spg-quantum-core"></div>
                <div className="spg-quantum-pulse"></div>
              </div>
              <div className="spg-quantum-card">
                <div className="spg-quantum-card-glow"></div>
                <div className="spg-quantum-step-number">01</div>
                <h3>Discovery & Audit</h3>
                <p>
                  Deep analysis of current legacy architecture, identifying
                  bottlenecks and cataloging technical debt.
                </p>
              </div>
            </div>

            {/* STAGE 2 */}
            <div className="spg-quantum-step spg-right-step">
              <div className="spg-quantum-node">
                <div className="spg-quantum-core"></div>
                <div className="spg-quantum-pulse"></div>
              </div>
              <div className="spg-quantum-card">
                <div className="spg-quantum-card-glow"></div>
                <div className="spg-quantum-step-number">02</div>
                <h3>3D Prototyping</h3>
                <p>
                  Visualizing complex data flows and mapping infrastructure
                  topologies in immersive environments.
                </p>
              </div>
            </div>

            {/* STAGE 3 */}
            <div className="spg-quantum-step spg-left-step">
              <div className="spg-quantum-node">
                <div className="spg-quantum-core"></div>
                <div className="spg-quantum-pulse"></div>
              </div>
              <div className="spg-quantum-card">
                <div className="spg-quantum-card-glow"></div>
                <div className="spg-quantum-step-number">03</div>
                <h3>Hyper-Deployment</h3>
                <p>
                  Automated CI/CD pipelines deploying immutable infrastructure
                  and pushing updates globally.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
