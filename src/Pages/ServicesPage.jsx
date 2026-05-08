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
import DevOps from "../assets/images/Site_img/Devops_2.png";
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

  useSEO(
    "DevOps & Cloud Services UK | Cloud Migration & DevSecOps",
    "Explore Devopstrio’s DevOps, cloud migration, CI/CD automation, DevSecOps, and infrastructure as code services designed for scalable enterprise transformation.",
  );

  useEffect(() => {
    // Elements to observe
    const proBlocks = document.querySelectorAll(".pro-service-block");
    const quantumSteps = document.querySelectorAll(".quantum-step");
    const quantumTrack = document.querySelector(".quantum-track");
    const valueCards = document.querySelectorAll(".value-card");
    const metrics = document.querySelectorAll(".metrics div");
    const leadershipLeft = document.querySelector(".leadership-left");
    const leadershipRight = document.querySelector(".leadership-right");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");

            // Special handling for timeline steps
            if (entry.target.classList.contains("quantum-step")) {
              setTimeout(() => {
                entry.target.classList.add("active");
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
      <section className="sv-e2e-section">
        <div className="sv-e2e-container">
          <div className="sv-e2e-grid">
            <div className="sv-e2e-content">
              <span className="sv-e2e-badge">OUR SERVICES</span>
              <h2 className="sv-e2e-title">
                End-to-End DevOps Services<br />
                to <span className="sv-gradient-text">Accelerate Your Success</span>
              </h2>
              <p className="sv-e2e-desc">
                We help businesses automate, deploy, and scale with confidence 
                using modern DevOps and Cloud technologies.
              </p>
            </div>

            <div className="sv-e2e-visual">
              <div className="sv-s-pipeline-container">
                {/* Background S-Line */}
                <svg className="sv-s-line-svg" viewBox="0 0 1000 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    d="M 120 120 H 900 C 950 120 950 240 900 240 H 100 C 50 240 50 360 100 360 H 900" 
                    stroke="url(#sv-gradient)" 
                    strokeWidth="4" 
                    strokeLinecap="round" 
                    strokeDasharray="10 15"
                    className="sv-s-path-bg"
                  />
                  <defs>
                    <linearGradient id="sv-gradient" x1="0" y1="0" x2="1000" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#ce2453" />
                      <stop offset="0.5" stopColor="#962964" />
                      <stop offset="1" stopColor="#e79e57" />
                    </linearGradient>
                  </defs>
                </svg>

                <div className="sv-s-steps">
                  {/* TOP ROW */}
                  <div className="sv-s-step step-plan">
                    <div className="sv-s-icon"><FiCode /></div>
                    <div className="sv-s-info">
                      <strong>PLAN</strong>
                      <p>Plan and track everything</p>
                    </div>
                  </div>
                  <div className="sv-s-step step-code">
                    <div className="sv-s-icon"><FiLayers /></div>
                    <div className="sv-s-info">
                      <strong>CODE</strong>
                      <p>Write and review code faster</p>
                    </div>
                  </div>
                  <div className="sv-s-step step-build">
                    <div className="sv-s-icon"><FiSettings /></div>
                    <div className="sv-s-info">
                      <strong>BUILD</strong>
                      <p>Automate build process</p>
                    </div>
                  </div>

                  {/* BOTTOM ROW (Reversed in flow) */}
                  <div className="sv-s-step step-monitor">
                    <div className="sv-s-icon"><FiCheckCircle /></div>
                    <div className="sv-s-info">
                      <strong>TEST</strong>
                      <p>Ensure quality with testing</p>
                    </div>
                  </div>
                  <div className="sv-s-step step-deploy">
                    <div className="sv-s-icon"><FiCloud /></div>
                    <div className="sv-s-info">
                      <strong>DEPLOY</strong>
                      <p>Deploy to any environment</p>
                    </div>
                  </div>
                    <div className="sv-s-step step-test">
                    <div className="sv-s-icon"><FiActivity /></div>
                    <div className="sv-s-info">
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
      <section className="sv-tech-marquee-section">
        <div className="marquee-label">OUR CORE SERVICES</div>
        <div className="marquee-outer">
          <div className="marquee-inner">
            {/* Triple the array for seamless looping on high-res displays */}
            {[...servicesList, ...servicesList, ...servicesList].map((service, idx) => (
              <div key={idx} className="marquee-item-wrapper">
                <span className="marquee-tech-name">{service.toUpperCase()}</span>
                <span className="marquee-divider"></span>
              </div>
            ))}
          </div>
        </div>
      </section>

    

      {/* =========================================
          PRO SERVICES SECTION
          ========================================= */}
      <section className="pro-services-section">
        <div className="pro-services-container">
          {/* CLOUD SERVICES */}
          <div className="pro-service-block">
            <div className="pro-service-bg-glow"></div>
            <div className="pro-service-content">
              <span className="pro-badge">01 // ARCHITECTURE</span>
              <h2>Cloud Services</h2>
              <p>
                We design scalable, secure, and high-performance cloud
                infrastructures that accelerate digital transformation and
                reduce operational complexity.
              </p>

              <ul className="pro-features">
                <li>
                  <div className="pro-icon-box">
                    <FiZap />
                  </div>
                  <div className="pro-feature-text">
                    <strong>Cloud Architecture</strong>
                    <span>
                      Architect scalable, resilient, and cost-optimized
                      environments.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="pro-icon-box">
                    <FiRepeat />
                  </div>
                  <div className="pro-feature-text">
                    <strong>Cloud Migration</strong>
                    <span>
                      Seamless migration with zero downtime and minimal
                      disruption.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="pro-icon-box">
                    <FiGlobe />
                  </div>
                  <div className="pro-feature-text">
                    <strong>Multi-Cloud & Hybrid</strong>
                    <span>
                      Integrated strategies across Azure, AWS, and GCP.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pro-service-visual">
              <div className="pro-image-wrapper">
                <img src={Cloud} alt="Cloud Services" />
                <div className="pro-visual-gradient-rim"></div>
              </div>

              {/* Dynamic Cloud Orbit Arc */}
              <div className="cloud-orbit-wrap">
                <div className="orbit-circle c-1"></div>
                <div className="orbit-circle c-2"></div>
                <div className="orbit-circle c-3"></div>

                <div className="orbit-node n-1">
                  <FaMicrosoft />
                  <div className="node-glow"></div>
                </div>
                <div className="orbit-node n-2">
                  <FaAws />
                  <div className="node-glow"></div>
                </div>
                <div className="orbit-node n-3">
                  <FaGoogle />
                  <div className="node-glow"></div>
                </div>
                
              </div>


              <div className="floating-card cloud-card-2">
                <div className="icon-circle">
                  <FiRefreshCw />
                </div>
                <div className="card-text">
                  <strong>Migration</strong>
                  <span>Seamless Transition</span>
                </div>
              </div>
            </div>

          </div>

          {/* DEVOPS */}
          <div className="pro-service-block reverse">
            <div className="pro-service-bg-glow alt"></div>
            <div className="pro-service-content">
              <span className="pro-badge">02 // AUTOMATION</span>
              <h2>DevOps & Platform Engineering</h2>
              <p>
                We accelerate release cycles and improve system reliability
                through automation, CI/CD pipelines, and infrastructure
                modernization.
              </p>

              <ul className="pro-features">
                <li>
                  <div className="pro-icon-box">
                    <FiSend />
                  </div>
                  <div className="pro-feature-text">
                    <strong>DevOps Enablement</strong>
                    <span>
                      Build high performance DevOps culture and frameworks.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="pro-icon-box">
                    <FiRefreshCw />
                  </div>
                  <div className="pro-feature-text">
                    <strong>CI/CD Automation</strong>
                    <span>
                      Fully automated build, test, and deployment pipelines.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="pro-icon-box">
                    <FiSettings />
                  </div>
                  <div className="pro-feature-text">
                    <strong>Infrastructure as Code</strong>
                    <span>
                      Manage infrastructure using secure, version controlled
                      code.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pro-service-visual">
              <div className="pro-image-wrapper">
                <img src={DevOps} alt="DevOps Services" />
                <div className="pro-visual-gradient-rim"></div>
              </div>

              {/* Floating Cards */}
              <div className="floating-card devops-card-1">
                <div className="card-badge">CI/CD</div>
                <div className="pipeline-visual">
                  <div className="p-node active"></div>
                  <div className="p-line active"></div>
                  <div className="p-node active"></div>
                  <div className="p-line"></div>
                  <div className="p-node"></div>
                </div>
                <div className="card-label">Auto-Deploy</div>
              </div>

              <div className="floating-card devops-card-2">
                <div className="icon-circle alt">
                  <FiZap />
                </div>
                <div className="card-text">
                  <strong>Velocity</strong>
                  <span>10x Faster Shipping</span>
                </div>
              </div>
            </div>

          </div>

          {/* SECURITY */}
          <div className="pro-service-block">
            <div className="pro-service-bg-glow"></div>
            <div className="pro-service-content">
              <span className="pro-badge">03 // PROTECTION</span>
              <h2>Security & Reliability</h2>
              <p>
                We protect enterprise cloud ecosystems with advanced security
                frameworks, identity governance, and compliance management.
              </p>

              <ul className="pro-features">
                <li>
                  <div className="pro-icon-box">
                    <FiShield />
                  </div>
                  <div className="pro-feature-text">
                    <strong>Cloud Security</strong>
                    <span>
                      Enterprise grade threat detection and proactive
                      protection.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="pro-icon-box">
                    <FiKey />
                  </div>
                  <div className="pro-feature-text">
                    <strong>Identity & Access</strong>
                    <span>
                      Secure access control and robust policy enforcement.
                    </span>
                  </div>
                </li>
                <li>
                  <div className="pro-icon-box">
                    <FiClipboard />
                  </div>
                  <div className="pro-feature-text">
                    <strong>Compliance & Governance</strong>
                    <span>
                      Regulatory alignment and active risk mitigation
                      strategies.
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pro-service-visual">
              <div className="pro-image-wrapper">
                <img src={Security} alt="Security Services" />
                <div className="pro-visual-gradient-rim"></div>
              </div>

              {/* Floating Cards */}
              <div className="floating-card security-card-1">
                <div className="card-badge">Security</div>
                <div className="security-visual">
                  <FiShield className="main-shield" />
                  <div className="radar-circle"></div>
                </div>
                <div className="card-label">Zero Trust</div>
              </div>

              <div className="floating-card security-card-2">
                <div className="icon-circle sec">
                  <FiLock />
                </div>
                <div className="card-text">
                  <strong>Encryption</strong>
                  <span>AES-256 Protocol</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="core-values">
        <span className="section-badge">WHY CHOOSE US</span>
        <h2 className="products-title">
          Core <span>Values</span>
        </h2>

        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">
              <FiZap />
            </div>
            <h3>Innovation First</h3>
            <p>
              We stay ahead of technology curves to deliver cutting edge
              solutions.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
              <FiLock />
            </div>
            <h3>Security Obsessed</h3>
            <p>
              Every solution is built with enterprise grade security at its
              core.
            </p>
          </div>
          <div className="value-card">
            <div className="value-icon">
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
      <section className="approach-section">
        <div className="approach-content">
          <span className="section-badge">OUR APPROACH</span>
          <h2>
            Engineering Excellence
            <br />
            Delivered
          </h2>
          <p>
            We combine deep technical expertise with strategic thinking to
            deliver solutions that drive real business outcomes.
          </p>

          <div className="metrics">
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
      <section className="business-domains-section">
        <div className="bd-right-backdrop"></div>
        <div className="bd-container">
          <div className="bd-left">
            <span className="section-badge">CORE EXPERTISE</span>
            <h2 className="bd-title">
              Cloud
              <br />
              <span>Solutions</span>
            </h2>
            <p className="bd-subtitle">
              Delivering high-performance architecture, automated pipelines, and
              highly scalable cloud-native products designed to accelerate
              engineering speed.
            </p>
            <div className="bd-nav-arrows">
              <button className="bd-arrow" onClick={scrollBdLeft}>
                <FiArrowLeft />
              </button>
              <button className="bd-arrow" onClick={scrollBdRight}>
                <FiArrowRight />
              </button>
            </div>
          </div>

          <div className="bd-cards-slider" ref={bdSliderRef}>
            {/* Card 1 */}
            <div className="bd-card">
              <div className="bd-card-img">
                <img
                  src="/images/NewFolder/Groups_70.png"
                  alt="SaaS & Cloud Platforms"
                />
              </div>
              <div className="bd-card-content">
                <span className="bd-card-num">Service. 01</span>
                <h3>SaaS & Cloud Platforms</h3>
              </div>
            </div>
            {/* Card 2 */}
            <div className="bd-card">
              <div className="bd-card-img">
                <img
                  src="/images/NewFolder/Groups_71.png"
                  alt="Infrastructure Migration"
                />
              </div>
              <div className="bd-card-content">
                <span className="bd-card-num">Service. 02</span>
                <h3>Infrastructure Migration</h3>
              </div>
            </div>
            {/* Card 3 */}
            <div className="bd-card">
              <div className="bd-card-img">
                <img
                  src="/images/NewFolder/Groups_72.png"
                  alt="Enterprise DevOps"
                />
              </div>
              <div className="bd-card-content">
                <span className="bd-card-num">Service. 03</span>
                <h3>Enterprise CI/CD</h3>
              </div>
            </div>
            {/* Card 4 */}
            <div className="bd-card">
              <div className="bd-card-img">
                <img
                  src="/images/NewFolder/Groups_73.png"
                  alt="Data & AI Solutions"
                />
              </div>
              <div className="bd-card-content">
                <span className="bd-card-num">Service. 04</span>
                <h3>Data & AI Solutions</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP SECTION */}
      <section className="leadership-section">
        <div className="leadership-content">
          <div className="leadership-left">
            <span className="section-badge">LEADERSHIP</span>
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
          <div className="leadership-right">
            <div className="leadership-stats">
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
      <section className="quantum-timeline-section">
        <div className="quantum-timeline-container">
          <div className="quantum-header">
            <span className="quantum-badge">THE BLUEPRINT</span>
            <h2 className="quantum-title">
              Our Path to <span>Transformation</span>
            </h2>
            <p className="quantum-subtitle">
              From initial assessment to global deployment, we execute with
              architectural precision at every stage.
            </p>
          </div>

          <div className="quantum-track">
            <div className="quantum-center-line"></div>

            {/* STAGE 1 */}
            <div className="quantum-step left-step">
              <div className="quantum-node">
                <div className="quantum-core"></div>
                <div className="quantum-pulse"></div>
              </div>
              <div className="quantum-card">
                <div className="quantum-card-glow"></div>
                <div className="quantum-step-number">01</div>
                <h3>Discovery & Audit</h3>
                <p>
                  Deep analysis of current legacy architecture, identifying
                  bottlenecks and cataloging technical debt.
                </p>
              </div>
            </div>

            {/* STAGE 2 */}
            <div className="quantum-step right-step">
              <div className="quantum-node">
                <div className="quantum-core"></div>
                <div className="quantum-pulse"></div>
              </div>
              <div className="quantum-card">
                <div className="quantum-card-glow"></div>
                <div className="quantum-step-number">02</div>
                <h3>3D Prototyping</h3>
                <p>
                  Visualizing complex data flows and mapping infrastructure
                  topologies in immersive environments.
                </p>
              </div>
            </div>

            {/* STAGE 3 */}
            <div className="quantum-step left-step">
              <div className="quantum-node">
                <div className="quantum-core"></div>
                <div className="quantum-pulse"></div>
              </div>
              <div className="quantum-card">
                <div className="quantum-card-glow"></div>
                <div className="quantum-step-number">03</div>
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
