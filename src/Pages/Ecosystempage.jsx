import React, { useEffect } from "react";
import { 
  FiChevronRight, 
  FiUsers, 
  FiCpu, 
  FiAward, 
  FiShield, 
  FiTarget, 
  FiLayers, 
  FiGlobe, 
  FiCheckCircle, 
  FiTerminal,
  FiArrowUpRight
} from "react-icons/fi";

// Existing Components
import Ecosystemhero from "../components/Hero/Ecosystemhero";
import Newsletter from "../components/Newsletter/Newsletter";
import Cta from "../components/Cta/Cta";

// Assets
import AWSLogo from "../assets/images/AWS.png";
import AWSLogo1 from "../assets/images/AWS_certification.png";
import AzureLogo from "../assets/images/azureLogo.png";
import GCPLogo from "../assets/images/gcpLogo.png";
import DockerLogo from "../assets/images/dockerLogo.png";
import KubernetesLogo from "../assets/images/kubernetesLogo.png";
import KubernetesLogo1 from "../assets/images/kubernetesLogo_1.png";
import GitLab from "../assets/images/GitLab.png";
import GitLabLogo from "../assets/images/GitLab_logo.png";
import DatadogLogo from "../assets/images/MLOps.png";
import MLOps from "../assets/images/MLOps_logo.png";
import SplunkLogo from "../assets/images/Openai.png";
import OWASPLogo from "../assets/images/OWASP.png";
import CheckmarxLogo from "../assets/images/Github.png";
import ServiceNowLogo from "../assets/images/Boviet_Solar.png";
import OracleLogo from "../assets/images/Oracle_logo.png";
import jenkins from "../assets/images/jenkins.svg";
import Lenova from "../assets/images/Lenovologo.svg";
import BT from "../assets/images/BT.svg";

// Styles
import "../Style/Ecosystempage.css";

const Ecosystempage = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.05,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
  // Why Partner With Us (Why Choose Our Ecosystem)
  const whyPartnerItems = [
    {
      icon: <FiUsers size={28} />,
      title: "Engineering Leadership",
      description:
        "Access to world-class engineering teams with deep expertise in DevOps, cloud architecture, and enterprise transformation.",
    },
    {
      icon: <FiCpu size={28} />,
      title: "Proven Solutions",
      description:
        "Battle-tested frameworks and methodologies that have delivered results for Fortune 500 companies across industries.",
    },
    {
      icon: <FiAward size={28} />,
      title: "Certified Workforce",
      description:
        "Partners gain access to our certified network of professionals with top-tier cloud and DevOps certifications.",
    },
  ];

  // Product Ecosystem Grid
  const strategicPartners = [
    {
      name: "AWS Platform",
      logo: AWSLogo,
      badge: "Premier Partner",
      description:
        "Scalable hyperscale server instances, technical sandboxes, and accelerated multi-cloud capabilities.",
    },
    {
      name: "Microsoft Azure",
      logo: AzureLogo,
      badge: "Gold Partner",
      description:
        "Enterprise cloud networks enabling seamless hybrid setups and intelligent cognitive services.",
    },
    {
      name: "Google Cloud",
      logo: GCPLogo,
      badge: "Specialized Partner",
      description:
        "High-performance Big Data systems, serverless scaling layers, and custom MLOps capabilities.",
    },
    {
      name: "Docker Engine",
      logo: DockerLogo,
      badge: "Core Integration",
      description:
        "Reliable application encapsulation patterns that deploy identically on any localized server node.",
    },
    {
      name: "Kubernetes",
      logo: KubernetesLogo,
      badge: "Core Orchestrator",
      description:
        "Self-healing production-grade cluster orchestration that scales up based on incoming traffic spikes.",
    },
    {
      name: "GitLab Systems",
      logo: GitLabLogo,
      badge: "DevOps CI/CD",
      description:
        "Source code protection repositories with automated compliance testing and testing pipelines.",
    },
    {
      name: "MLOps Control",
      logo: MLOps,
      badge: "Observability",
      description:
        "Deep infrastructure metrics, continuous log telemetry pipelines, and predictive alert configurations.",
    },
    {
      name: "OWASP Shield",
      logo: OWASPLogo,
      badge: "Security Standard",
      description:
        "Strict application compliance checklists that defend microservices from threat vectors.",
    },
    {
      name: "Oracle Cloud",
      logo: OracleLogo,
      badge: "Database Partner",
      description:
        "Ultra-reliable enterprise database systems, high-integrity ledgers, and secure migrations.",
    },
  ];

  // Dense Logo Grid for Partner Ecosystem
  const ecosystemLogos = [
    { logo: AWSLogo1, name: "AWS Certification" },
    { logo: AzureLogo, name: "Microsoft Azure" },
    { logo: GCPLogo, name: "Google Cloud Platform" },
    { logo: DockerLogo, name: "Docker Containerization" },
    { logo: KubernetesLogo1, name: "Kubernetes K8s" },
    { logo: GitLab, name: "GitLab CI" },
    { logo: DatadogLogo, name: "MLOps Metrics" },
    { logo: SplunkLogo, name: "OpenAI AI Services" },
    { logo: OWASPLogo, name: "OWASP Top 10" },
    { logo: CheckmarxLogo, name: "GitHub Repository" },
    { logo: ServiceNowLogo, name: "Boviet Solar Integration" },
    { logo: OracleLogo, name: "Oracle Enterprise" },
    { logo: jenkins, name: "Jenkins Automation" },
    { logo: Lenova, name: "Lenovo Solutions" },
    { logo: BT, name: "BT Communications" },
  ];

  return (
    <div className="ecosystem-page-wrapper">
      
      {/* 1. HERO SECTION */}
      <Ecosystemhero />

      {/* 2. ECOSYSTEM OVERVIEW */}
      <section className="eco-section eco-overview reveal">
        <div className="eco-container">
          <div className="eco-overview-split">
            <div className="eco-overview-left">
              <span className="eco-pill"><FiLayers size={12} /> System Architecture</span>
              <h2 className="eco-main-title">A Unified Ecosystem Built for Extreme Scale</h2>
              <p className="eco-desc">
                We combine industry-leading cloud platforms, container engines, and continuous integration pipelines into a single, cohesive delivery system. This unified fabric empowers our engineering teams to deploy resilient, zero-downtime solutions instantly.
              </p>
              
              <div className="eco-overview-stats">
                <div className="eco-stat-item">
                  <h3>200+</h3>
                  <p>Certified Tech Integrations</p>
                </div>
                <div className="eco-stat-item">
                  <h3>99.999%</h3>
                  <p>Production Pipeline SLA</p>
                </div>
                <div className="eco-stat-item">
                  <h3>24/7</h3>
                  <p>Follow-the-Sun Support</p>
                </div>
              </div>
            </div>
            
            <div className="eco-overview-right">
              {/* Dense tooltip-enabled brand logo showcase */}
              <div className="eco-logo-cloud-card">
                <h3>Our Technology Fabric</h3>
                <p>Hover over the nodes to explore the integrated tools in our delivery pipeline:</p>
                
                <div className="eco-logo-grid">
                  {ecosystemLogos.map((partner, index) => (
                    <div className="eco-logo-item" key={index}>
                      <img src={partner.logo} alt={partner.name} />
                      <span className="eco-logo-tooltip">{partner.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT ECOSYSTEM GRID */}
      <section className="eco-section eco-product-grid-section reveal">
        <div className="eco-container">
          <div className="eco-section-header-centered">
            <span className="eco-pill"><FiCpu size={12} /> Tech Grid</span>
            <h2 className="eco-section-title">Integrated Platforms</h2>
            <p className="eco-section-subtitle">
              Deep, battle-tested integrations with the world's most powerful cloud and deployment technologies.
            </p>
          </div>

          <div className="eco-product-grid">
            {strategicPartners.map((partner, index) => (
              <div className="eco-partner-card" key={index}>
                <div className="eco-card-top-row">
                  <div className="eco-partner-logo-wrapper">
                    <img src={partner.logo} alt={partner.name} />
                  </div>
                  <span className="eco-card-badge">{partner.badge}</span>
                </div>
                <h4>{partner.name}</h4>
                <p>{partner.description}</p>
                <div className="eco-card-sparkle">
                  <FiArrowUpRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BUSINESS OUTCOMES */}
      <section className="eco-section eco-outcomes reveal">
        <div className="eco-container">
          <div className="eco-outcomes-split">
            <div className="eco-outcomes-left">
              <span className="eco-pill"><FiTarget size={12} /> Quantifiable Impact</span>
              <h2 className="eco-main-title">Proven Business Results for Our Clients</h2>
              <p className="eco-desc">
                By leveraging our integrated ecosystems, enterprises achieve unprecedented efficiency gains, drastically reduced time-to-market, and ironclad security guardrails.
              </p>
              
              <div className="eco-outcome-list">
                <div className="eco-outcome-row">
                  <FiCheckCircle className="eco-check-icon" />
                  <div>
                    <strong>85% Reduction in Manual Processes</strong>
                    <p>GitOps and automated IaC deployments replace human error patterns completely.</p>
                  </div>
                </div>
                <div className="eco-outcome-row">
                  <FiCheckCircle className="eco-check-icon" />
                  <div>
                    <strong>99.999% Platform Uptime Maintained</strong>
                    <p>Self-healing Kubernetes clusters adjust capacity dynamically under traffic surges.</p>
                  </div>
                </div>
                <div className="eco-outcome-row">
                  <FiCheckCircle className="eco-check-icon" />
                  <div>
                    <strong>70% Faster Pipeline Delivery Loops</strong>
                    <p>Pre-validated container patterns accelerate testing cycles across dev teams.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="eco-outcomes-right">
              {/* Highlight Announcement banner */}
              <div className="eco-highlight-banner-card">
                <div className="eco-banner-tag">Strategic Collaboration</div>
                <h3>Devopstrio Partners with Azure to Accelerate Enterprise AI Adoption</h3>
                <p>
                  We are proud to announce a multi-year technical partnership aimed at accelerating secure cloud-native deployment patterns and custom cognitive service integrations for healthcare and fintech industries.
                </p>
                <a href="/insights-knowledge/white-paper" className="eco-banner-link">
                  Read the Full Announcement <FiChevronRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TECH STACKS */}
      <section className="eco-section eco-tech-stacks reveal">
        <div className="eco-container">
          <div className="eco-section-header-centered">
            <span className="eco-pill"><FiTerminal size={12} /> Reference Architectures</span>
            <h2 className="eco-section-title">Our Standard Delivery Stacks</h2>
            <p className="eco-section-subtitle">
              Pre-validated, robust technical templates designed to spin up secure production infrastructure in minutes.
            </p>
          </div>
          
          <div className="eco-stacks-grid">
            <div className="eco-stack-card">
              <h3>Enterprise DevOps Stack</h3>
              <p>Designed for scalable, resilient container deployments on secure clouds.</p>
              <div className="eco-stack-tags">
                <span>Kubernetes</span>
                <span>Terraform</span>
                <span>AWS Cloud</span>
                <span>Docker Engine</span>
                <span>GitLab CI</span>
              </div>
            </div>
            
            <div className="eco-stack-card">
              <h3>SecOps & Vault Stack</h3>
              <p>Implements strict zero-trust networks with automated compliance guardrails.</p>
              <div className="eco-stack-tags">
                <span>HashiCorp Vault</span>
                <span>Zero-Trust Auth</span>
                <span>SonarQube SAST</span>
                <span>OWASP Standards</span>
                <span>IAM Roles</span>
              </div>
            </div>
            
            <div className="eco-stack-card">
              <h3>Next-Gen AI / App Stack</h3>
              <p>For custom machine learning workflows and premium visual interfaces.</p>
              <div className="eco-stack-tags">
                <span>Next.js</span>
                <span>FastAPI MLOps</span>
                <span>React Engine</span>
                <span>Vite Bundler</span>
                <span>Node.js API</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE OUR ECOSYSTEM */}
      <section className="eco-section eco-why-ecosystem reveal">
        <div className="eco-container">
          <div className="eco-section-header-centered">
            <span className="eco-pill"><FiAward size={12} /> Rationale</span>
            <h2 className="eco-section-title">Why Partner with Devopstrio?</h2>
            <p className="eco-section-subtitle">
              We translate raw computing infrastructure into highly reliable business capabilities.
            </p>
          </div>
          
          <div className="eco-three-column">
            {whyPartnerItems.map((item, index) => (
              <div className="eco-benefit-block" key={index}>
                <div className="eco-benefit-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. GLOBAL DELIVERY SUPPORT */}
      <section className="eco-section eco-global-support reveal">
        <div className="eco-container">
          <div className="eco-global-card">
            <div className="eco-global-left">
              <span className="eco-pill"><FiGlobe size={12} /> Global Support</span>
              <h2>24/7 Enterprise Follow-the-Sun Support</h2>
              <p>
                Our technical support desks span critical time zones (London, India, USA) to ensure continuous monitoring, immediate incident management, and seamless pipeline recoveries at all times.
              </p>
              
              <div className="eco-support-details">
                <div className="eco-support-row">
                  <strong>Headquarters:</strong>
                  <span>128 City Road, London, EC1V 2NX</span>
                </div>
                <div className="eco-support-row">
                  <strong>Hotline Support:</strong>
                  <span>+44 7471 482903</span>
                </div>
                <div className="eco-support-row">
                  <strong>Partner Escalation:</strong>
                  <span>partners@devopstrioglobal.com</span>
                </div>
              </div>
            </div>
            
            <div className="eco-global-right">
              <div className="eco-sla-box">
                <div className="eco-sla-title">Support Commitments</div>
                <div className="eco-sla-row">
                  <span>Critical Incidents (P1)</span>
                  <strong>&lt; 15 Mins</strong>
                </div>
                <div className="eco-sla-row">
                  <span>Standard Incidents (P2)</span>
                  <strong>&lt; 1 Hour</strong>
                </div>
                <div className="eco-sla-row">
                  <span>Deployment Queries</span>
                  <strong>&lt; 4 Hours</strong>
                </div>
                <div className="eco-sla-row">
                  <span>SLA Guarantee</span>
                  <strong>99.99%</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <div style={{ margin: "0 auto", maxWidth: "1240px" }} className="reveal">
        <Newsletter />
      </div>
      
      <Cta />
    </div>
  );
};

export default Ecosystempage;
