import React, { useState } from "react";
import "./CoreServices.css";
import { Database, Code, Cloud, ArrowRight, Cpu, Users } from "lucide-react";

//IMAGES

export default function CoreServices() {
  const [activeTab, setActiveTab] = useState("ai");

  const services = [
    {
      id: "ai",
      title: "AI & Data",
      icon: <Database size={20} />,
      image: "/images/New/notewoman.png",
      capabilities: [
        { name: "AI Strategy & Consulting", link: "/services/ai-consulting-services" },
        { name: "Artificial Intelligence Solutions", link: "/services/artificial-intelligence" },
        { name: "Advanced Data Science", link: "/services/data-science" },
        { name: "Database Creation & Management", link: "/services/database-creation-and-management" },
        { name: "Hire AI Experts", link: "/services/hire-ai-experts" }
      ],
      desc: "Architect scalable AI models and highly automated data ingestion pipelines. We transform raw telemetry into production insights."
    },
    {
      id: "cloud",
      title: "Cloud Development",
      icon: <Cloud size={20} />,
      image: "/images/New/Support_intern_img1.png",
      capabilities: [
        { name: "Cloud Migration Solutions", link: "/services/cloud-migration" },
        { name: "Multi-Cloud Infrastructure", link: "/services/multi-cloud" },
        { name: "Cloud Architecture Design", link: "/services/cloud-architecture" },
        { name: "Infrastructure as Code (IaC)", link: "/services/iac" },
        { name: "CI/CD Automation & Pipelines", link: "/services/cicd" }
      ],
      desc: "Engineer automated AWS, Azure, and GCP landing zones. We declare and orchestrate secure self-healing nodes via declarative GitOps pipelines."
    },
    {
      id: "software",
      title: "Software Engineering",
      icon: <Code size={20} />,
      image: "/images/New/internship_collaboration.png",
      capabilities: [
        { name: "Web Application Development", link: "/services/web-development" },
        { name: "Mobile App Development", link: "/services/mobile-development" },
        { name: "Cross-Platform Solutions", link: "/services/cross-platform-development" },
        { name: "Progressive Web Apps (PWA)", link: "/services/pwa-development" },
        { name: "CMS-Based Web Systems", link: "/services/cms-based-web-development" }
      ],
      desc: "Design resilient, containerized modern applications. We optimize lifecycle operations through rigorous Test-Driven DevSecOps."
    },
    {
      id: "modernization",
      title: "Legacy Modernization",
      icon: <Cpu size={20} />,
      image: "/images/New/Support_image.png",
      capabilities: [
        { name: "DevOps Infrastructure Enablement", link: "/services/devops-enablement" },
        { name: "Application Security & Compliance", link: "/services/compliance" },
        { name: "Threat Detection & Monitoring", link: "/services/threat-detection" },
        { name: "Identity & Access Management (IAM)", link: "/services/iam" },
        { name: "Cloud Security Operations", link: "/services/security" }
      ],
      desc: "Embed vulnerability scanning, compliance policies, and legacy migration roadmaps inside continuous automation scripts."
    },
    {
      id: "augmentation",
      title: "Staff Augmentation",
      icon: <Users size={20} />,
      image: "/images/devopstrio_collaboration.png",
      capabilities: [
        { name: "IT Security & SOC Management", link: "/services/security-management" },
        { name: "Security Operations Center", link: "/services/security-operations-center" },
        { name: "Penetration Testing & Security Audit", link: "/services/penetration-testing" },
        { name: "Enterprise Digital Transformation", link: "/services/digital-transformation" },
        { name: "Strategic IT Consulting", link: "/services/it-consulting" },
        { name: "Digital Sovereignty & Governance", link: "/services/digital-sovereignty" }
      ],
      desc: "Augment your internal teams with seasoned DevOps consultants, enterprise software architects, and digital transformation leads."
    }
  ];

  const activeService = services.find(s => s.id === activeTab) || services[0];

  return (
    <section className="coreservs-root">
      <div className="coreservs-container">
        
        {/* TOP ROW HEADER */}
        <div className="coreservs-header">
          <div className="coreservs-pill">Core Capabilities</div>
          <h2 className="coreservs-title">
            Enterprise Grade <span>Core Services</span>
          </h2>
          <p className="coreservs-subtitle">
            Devopstrio powers modern enterprises by integrating bleeding-edge AI models, zero-trust cloud pipelines, and secure continuous automation cycles.
          </p>
        </div>

        {/* INTERACTIVE WORKSPACE LAYOUT */}
        <div className="coreservs-workspace">
          
          {/* TOP NAVBAR: MENU WRAPPER */}
          <div className="coreservs-navbar-wrapper">
            <div className="coreservs-navbar">
              {services.map((item) => (
                <button
                  key={item.id}
                  className={`coreservs-menu-btn ${activeTab === item.id ? "active" : ""}`}
                  onClick={() => setActiveTab(item.id)}
                  aria-label={`Select ${item.title}`}
                >
                  <span className="coreservs-btn-icon">{item.icon}</span>
                  <span className="coreservs-btn-text">{item.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* DETAILED PANEL */}
          <div className="coreservs-panel">
            
            {/* PANEL LEFT: CAPABILITIES DETAILS */}
            <div className="coreservs-panel-details">
              <h3 className="coreservs-panel-title">Our Core Capabilities</h3>
              
              <ul className="coreservs-caps-list">
                {activeService.capabilities.map((cap, idx) => (
                  <li key={idx}>
                    <a href={cap.link} className="coreservs-cap-item">
                      <span className="coreservs-cap-bullet"></span>
                      <span className="coreservs-cap-text">{cap.name}</span>
                      <ArrowRight size={14} className="coreservs-cap-arrow" />
                    </a>
                  </li>
                ))}
              </ul>

              <p className="coreservs-panel-desc">{activeService.desc}</p>

              <a href="/services" className="coreservs-all-link">
                All Capabilities <ArrowRight size={16} />
              </a>
            </div>

            {/* PANEL RIGHT: SERVICE IMAGE */}
            <div className="coreservs-panel-image-container">
              <img 
                key={activeTab}
                src={activeService.image} 
                alt={activeService.title} 
                className="coreservs-panel-image"
              />
              <div className="coreservs-image-overlay"></div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
