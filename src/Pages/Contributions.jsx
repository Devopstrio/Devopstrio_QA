import React, { useEffect } from "react";
import {
  FiGithub,
  FiCode,
  FiGitPullRequest,
  FiUsers,
  FiCpu,
  FiCloud,
  FiDatabase,
  FiShield,
  FiTerminal,
  FiActivity,
  FiAward,
  FiHeart,
  FiExternalLink,
  FiChevronRight,
  FiArrowRight,
  FiLock,
  FiServer,
  FiMonitor,
  FiLayers,
  FiBox,
  FiGrid,
} from "react-icons/fi";

import useSEO from "../hooks/useSEO";
import Newsletter from "../components/Newsletter/Newsletter";
import Cta from "../components/Cta/Cta";

import "../Style/Contributions.css";

const Contributions = () => {
  useSEO(
    "Contributions - Devopstrio ",
    "Discover Devopstrio’s commitment to the open-source community, our contributions to cloud engineering, and our initiatives in building a collaborative tech ecosystem.",
  );

  const integrationNodes = [
    { x: 400, y: 50, icon: <FiCloud color="#00E5FF" /> },
    { x: 500, y: 50, icon: <FiShield color="#00FF7F" /> },
    { x: 600, y: 50, icon: <FiTerminal color="#FF00FF" /> },
    { x: 400, y: 150, icon: <FiCpu color="#1E90FF" /> },
    { x: 500, y: 150, icon: <FiLock color="#FFD700" /> },
    { x: 600, y: 150, icon: <FiServer color="#FF8C00" /> },
    { x: 400, y: 250, icon: <FiMonitor color="#FF1493" /> },
    { x: 500, y: 250, icon: <FiLayers color="#7B68EE" /> },
    { x: 600, y: 250, icon: <FiCode color="#00FA9A" /> },
    { x: 400, y: 350, icon: <FiBox color="#FF4500" /> },
    { x: 500, y: 350, icon: <FiActivity color="#32CD32" /> },
    { x: 600, y: 350, icon: <FiGrid color="#8A2BE2" /> },
  ];

  // Global Contributions Stats
  const contributionStats = [
    { value: "50+", label: "Open Source Projects", icon: <FiGithub /> },
    { value: "10K+", label: "Commits Merged", icon: <FiGitPullRequest /> },
    { value: "5M+", label: "Library Downloads", icon: <FiActivity /> },
    { value: "200+", label: "Active Contributors", icon: <FiUsers /> },
  ];

  // Featured Open Source Projects / Tools
  const projects = [
    {
      title: "CloudScaler AI",
      description:
        "An open-source adaptive autoscale operator for Kubernetes that uses machine learning to predict cluster load.",
      icon: <FiCloud />,
      link: "#",
      tags: ["Kubernetes", "Golang", "AI/ML"],
      color: "#522c72",
    },
    {
      title: "SecOps Pipeline Builder",
      description:
        "A framework to embed automated security scanning, policy compliance, and audit logs into generic CI/CD pipelines.",
      icon: <FiShield />,
      link: "#",
      tags: ["CI/CD", "DevSecOps", "Python"],
      color: "#962964",
    },
    {
      title: "TerraCognita",
      description:
        "A reverse-engineering tool that reads your existing cloud infrastructure and outputs declarative Terraform definitions.",
      icon: <FiDatabase />,
      link: "#",
      tags: ["Terraform", "AWS", "Rust"],
      color: "#ce2453",
    },
    {
      title: "MetricFlow",
      description:
        "A highly resilient observability agent tailored for multi-cloud environments, optimizing telemetry routing cost.",
      icon: <FiActivity />,
      link: "#",
      tags: ["Observability", "C++", "Metrics"],
      color: "#dd5c54",
    },
    {
      title: "KubeChaos",
      description:
        "A robust chaos engineering solution integrated directly into Kubernetes control plane for real-time resilience testing.",
      icon: <FiTerminal />,
      link: "#",
      tags: ["Chaos Engineering", "K8s"],
      color: "#e79e57",
    },
    {
      title: "AutoML-Ops",
      description:
        "Streamlined infrastructure blueprints specifically designed to train, evaluate, and deploy LLMs securely at scale.",
      icon: <FiCpu />,
      link: "#",
      tags: ["LLM", "DataOps", "Python"],
      color: "#522c72",
    },
  ];

  // Community & Sponsorship Initiatives
  const initiatives = [
    {
      title: "Open Source Sponsorships",
      description:
        "We actively sponsor critical open-source infrastructure projects and independent maintainers. By funding the maintainers of foundational packages, we ensure the stability and security of the entire ecosystem we rely upon.",
      icon: <FiHeart />,
    },
    {
      title: "DevOps & Cloud Meetups",
      description:
        "We regularly host and sponsor global meetups across London, San Francisco, and Bangalore to foster learning, share insights on AI integration, and build stronger local technology communities.",
      icon: <FiUsers />,
    },
    {
      title: "Code for Tomorrow",
      description:
        "An initiative aimed at mentoring aspiring cloud engineers and high school students, introducing them to cloud-native technologies, coding standards, and collaborative open-source practices.",
      icon: <FiCode />,
    },
    {
      title: "Tech Conferences & Keynotes",
      description:
        "Our engineers actively speak at major international conferences including KubeCon, AWS re:Invent, and DevOpsDays, contributing thought leadership and practical insights to the global engineering dialogue.",
      icon: <FiAward />,
    },
  ];

  // Animation logic
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="contrib-page-wrapper">
      {/* 1. HERO SECTION */}
      <section className="contrib-hero reveal">
        <div className="contrib-container">
          <span className="contrib-label">Giving Back to the Community</span>
          <h1 className="contrib-hero-title">Engineering Open Innovation</h1>
          <p className="contrib-hero-subtitle">
            At Devopstrio, we believe the best technology is built
            collaboratively. We actively contribute to the open-source software
            ecosystem, release our internal tools, and foster communities that
            redefine what&apos;s possible in cloud and AI.
          </p>
        </div>
      </section>

      {/* NEW: Devopstrio-STYLE INTEGRATIONS SECTION */}
      <section className="contrib-integrations-section reveal">
        <div className="contrib-container integrations-layout">
          <div className="integrations-text-content">
            <h2 className="integrations-title">DevopstrioIntegrations</h2>
            <p className="integrations-description">
              Share security findings across the cloud security ecosystem to
              reduce risk, improve efficiency and enable an open cloud security
              ecosystem.
            </p>

            <div className="integrations-actions">
              <a href="#explore" className="btn-primary-integration">
                Explore Integrations <FiChevronRight />
              </a>
              <div className="partner-link">
                <span>Become a WIN partner</span>
                <a href="#apply">
                  Apply now <FiArrowRight />
                </a>
              </div>
            </div>
          </div>

          <div className="integrations-visual">
            <div className="visual-scaler">
              <svg viewBox="0 0 700 400" className="connections-svg">
                {integrationNodes.map((node, i) => (
                  <path
                    key={i}
                    className="connection-path"
                    d={`M 150 200 C 275 200, 275 ${node.y}, ${node.x} ${node.y}`}
                    pathLength="1"
                  />
                ))}
                {integrationNodes.map((node, i) => (
                  <circle
                    key={`dot-${i}`}
                    cx={node.x}
                    cy={node.y}
                    r="4"
                    fill="#1F51FF"
                  />
                ))}
              </svg>

              <div
                className="crystal-ball-container"
                style={{ left: "21.42%", top: "50%" }}
              >
                <div className="crystal-ball">
                  <div className="glass-reflection"></div>
                  <div className="inner-star">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                    </svg>
                  </div>
                  <div className="crater crater-1"></div>
                  <div className="crater crater-2"></div>
                  <div className="crater crater-3"></div>
                </div>
                <div className="stand">
                  <div className="stand-layer-1"></div>
                  <div className="stand-layer-2"></div>
                  <div className="stand-layer-3"></div>
                </div>
              </div>

              {integrationNodes.map((node, index) => (
                <div
                  className="integration-node"
                  key={index}
                  style={{
                    left: `${(node.x / 700) * 100}%`,
                    top: `${(node.y / 400) * 100}%`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  {node.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="contrib-stats-section reveal">
        <div className="contrib-container">
          <div className="contrib-stats-grid">
            {contributionStats.map((stat, index) => (
              <div className="contrib-stat-item" key={index}>
                <div className="contrib-stat-icon">{stat.icon}</div>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CONTRIBUTED PROJECTS */}
      <section className="contrib-projects-section reveal">
        <div className="contrib-container">
          <div className="contrib-section-header">
            <span className="contrib-label">Open Source Arsenal</span>
            <h2 className="contrib-gradient-text">Our Featured Projects</h2>
            <p className="contrib-subhead">
              Explore the tools, frameworks, and libraries we have built and
              shared with the global developer community to accelerate
              cloud-native deployments.
            </p>
          </div>

          <div className="contrib-projects-grid">
            {projects.map((project, index) => (
              <div
                className="contrib-project-card"
                key={index}
                style={{ "--project-color": project.color }}
              >
                <div className="contrib-project-header">
                  <div
                    className="contrib-project-icon"
                    style={{
                      background: `linear-gradient(135deg, ${project.color}, #111)`,
                    }}
                  >
                    {project.icon}
                  </div>
                  <div className="contrib-project-links">
                    <a href={project.link} aria-label="View on GitHub">
                      <FiExternalLink />
                    </a>
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="contrib-project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. INITIATIVES & SPONSORSHIPS */}
      <section className="contrib-initiatives-section reveal">
        <div className="contrib-container">
          <div className="contrib-section-header">
            <span className="contrib-label">Beyond Code</span>
            <h2 className="contrib-gradient-text">Community Initiatives</h2>
            <p className="contrib-subhead">
              We know that a thriving ecosystem requires more than just pull
              requests. We invest in people, education, and the sustainability
              of open-source software.
            </p>
          </div>

          <div className="contrib-initiatives-grid">
            {initiatives.map((item, index) => (
              <div className="contrib-initiative-item" key={index}>
                <div className="contrib-initiative-icon">{item.icon}</div>
                <div className="contrib-initiative-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER & CTA */}
      <Newsletter />
      <Cta />
    </div>
  );
};

export default Contributions;
