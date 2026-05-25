import React, { useEffect } from "react";
import {
  FiChevronRight,
  FiCpu,
  FiCloud,
  FiZap,
  FiShield,
  FiAward,
  FiTrendingUp,
  FiInfo,
  FiBookOpen,
  FiUsers,
  FiBriefcase,
  FiLock,
  FiCompass,
  FiActivity,
} from "react-icons/fi";

// Existing Components
import GlobalPresence from "../components/GlobalOffices/GlobalPresence";
import AboutHero from "../components/Hero/Abouthero";
import Newsletter from "../components/Newsletter/Newsletter";
import Cta from "../components/Cta/Cta";
import Milestones from "../components/Milestones/Milestones";
import CertificationSlider from "../components/Certification/Certification";
import Pinboard from "../components/Pinboard/Pinboard";
import CSRCommitment from "../components/CSRCommitment/CSRCommitment";

// Cloud image imports
import cloud from "../assets/images/ai_inte.png";
import cloud1 from "../assets/images/snaplytics.png";
import cloud2 from "../assets/images/snaplytics_1.jpg";

// Images - Team photos
import Founder1 from "../assets/images/Manikandan_dev.jpg";
import Team1 from "../assets/images/sahadevan_dev.png";
import Team2 from "../assets/images/marees_dev.png";
import Team3 from "../assets/images/subaiya_dev.png";
import Team4 from "../assets/images/Kishore_dev.png";
import Team5 from "../assets/images/Sermaraj_dev.png";
import Team6 from "../assets/images/thangalakshmi_dev.png";
import Team7 from "../assets/images/punitha_dev.png";
import Team8 from "../assets/images/oviya_dev.png";
import coreValuesGraphic from "../assets/images/about_core_values_graphic_q.png";

// Story Section Images
const StoryImage1 = cloud1;
const StoryImage2 = cloud;
const StoryImage3 = cloud2;
const StoryImage4 = "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&auto=format";

// Styles
import "../Style/Aboutpage.css";
import useSEO from "../hooks/useSEO";

const Aboutpage = () => {
  useSEO({
    title: "About Devopstrio | DevOps & Cloud Engineering Company UK",
    description: "Learn about Devopstrio's mission, vision, and global expertise in AI-driven cloud engineering, DevOps automation, and secure digital infrastructure solutions.",
    keywords: "About Devopstrio, DevOps Company UK, Cloud Engineering Experts, AI-driven DevOps, Secure Digital Infrastructure, Cloud Native Consulting, Manikandan Founder Devopstrio, Enterprise Automation Solutions",
    ogTitle: "About Devopstrio | DevOps & Cloud Engineering Company UK",
    ogDescription: "Discover how Devopstrio merges cloud power with AI intelligence to deliver resilient, scalable, and autonomous infrastructure solutions for global enterprises.",
    ogImage: "https://devopstrio.com/assets/images/devopstrio-og-about.jpg",
    ogUrl: "https://devopstrio.com/about",
    canonicalUrl: "https://devopstrio.com/about"
  });

  // Company Stats
  const companyStats = [
    { value: "2019", label: "Founded", icon: <FiCloud /> },
    { value: "200+", label: "Team Members", icon: <FiCpu /> },
    { value: "5+", label: "Offices", icon: <FiShield /> },
    { value: "4", label: "Countries", icon: <FiAward /> },
  ];

  // Core Values
  const coreValues = [
    {
      icon: <FiCloud />,
      title: "Cloud-Native Excellence",
      description: "Engineered for the modern cloud, we build resilient, scalable architectures that power global enterprises.",
    },
    {
      icon: <FiZap />,
      title: "AI-First Innovation",
      description: "Integrating intelligent automation into every layer of the delivery pipeline to accelerate decision-making.",
    },
    {
      icon: <FiShield />,
      title: "Adaptive Security",
      description: "AI-powered security that evolves with threats, ensuring your cloud infrastructure remains impenetrable.",
    },
    {
      icon: <FiCpu />,
      title: "Autonomous Systems",
      description: "Creating self-healing, self-optimizing systems that reduce manual toil and maximize operational efficiency.",
    },
    {
      icon: <FiAward />,
      title: "Performance Driven",
      description: "Leveraging deep cloud insights and AI analytics to deliver peak performance at any scale.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Cognitive Scaling",
      description: "Moving beyond traditional scaling to intelligent, predictive resource management in the cloud.",
    },
  ];

  // Team Members
  const teamMembers = [
    {
      name: "Mareeswaran",
      role: "Cloud-Native Product Lead",
      image: Team2,
      initial: "MA",
    },
    {
      name: "Sagadevan",
      role: "Machine Learning Engineer",
      image: Team1,
      initial: "SG",
    },
    {
      name: "Subbiah Muthu Murugan",
      role: "Deep Learning Specialist",
      image: Team3,
      initial: "SU",
    },
    {
      name: "Kishore",
      role: "AI Security Engineer",
      image: Team4,
      initial: "KI",
    },
    {
      name: "Sermaraja",
      role: "UI/UX Design Manager",
      image: Team5,
      initial: "SE",
    },
    {
      name: "Thangalakshmi",
      role: "Cognitive Success Lead",
      image: Team6,
      initial: "TH",
    },
    {
      name: "Punitha",
      role: "Design Thinking Lead",
      image: Team7,
      initial: "PU",
    },
    {
      name: "Ooviya",
      role: "SEO & Content Marketing",
      image: Team8,
      initial: "OV",
    },
  ];

  const storyImages = [
    { url: StoryImage1, alt: "AI Technology Abstract" },
    { url: StoryImage2, alt: "Cloud Data Center" },
    { url: StoryImage3, alt: "AI Robotics" },
    { url: StoryImage4, alt: "Circuit Technology" },
  ];

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
    <div className="about-page-wrapper">
      
      {/* 1. HERO SECTION */}
      <AboutHero />

      {/* 1.5 CLUTCH & IAOP SHOWCASE BANNER */}
      <section className="about-clutch-section reveal">
        <div className="about-container">
          <div className="about-clutch-card">
            
            {/* Left Side: Value Statement */}
            <div className="about-clutch-left">
              <p className="about-clutch-text">
                We specialize in developing software solutions through the synergy of skilled professionals and efficient processes.
              </p>
            </div>

            {/* Middle Divider */}
            <div className="about-clutch-divider"></div>

            {/* Right Side: IAOP Logo & Clutch Star Ratings */}
            <div className="about-clutch-right">
              
              {/* IAOP Logo */}
              <div className="about-clutch-logo-box">
                <svg className="clutch-iaop-svg" viewBox="0 0 160 50" fill="none">
                  {/* Left Circle Arc emblem */}
                  <path d="M40 25 C40 12, 18 12, 18 25 C18 38, 40 38, 40 25" stroke="#cbd5e1" strokeWidth="2.5" fill="none" />
                  <path d="M12 25 L46 25" stroke="#cbd5e1" strokeWidth="2.5" />
                  <circle cx="28" cy="20" r="1.5" fill="#cbd5e1" />
                  {/* IAOP Text */}
                  <text x="52" y="34" fontFamily="'Inter', -apple-system, sans-serif" fontWeight="900" fontSize="27" fill="#cbd5e1" letterSpacing="0.5">IAOP</text>
                </svg>
              </div>

              {/* clutch ratings */}
              <div className="about-clutch-info">
                <span className="clutch-rating-text">4.9 ON CLUTCH</span>
                <div className="clutch-stars">
                  {/* 5 Stars constructed using scalable vectors with 90% filling on the last star for 4.9 rating */}
                  <svg className="clutch-star-svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" fill="#EAB308"/></svg>
                  <svg className="clutch-star-svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" fill="#EAB308"/></svg>
                  <svg className="clutch-star-svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" fill="#EAB308"/></svg>
                  <svg className="clutch-star-svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" fill="#EAB308"/></svg>
                  <svg className="clutch-star-svg" viewBox="0 0 24 24">
                    <defs>
                      <linearGradient id="half-clutch-star-grad">
                        <stop offset="90%" stopColor="#EAB308"/>
                        <stop offset="90%" stopColor="#475569"/>
                      </linearGradient>
                    </defs>
                    <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.21l8.2-1.192z" fill="url(#half-clutch-star-grad)"/>
                  </svg>
                </div>
                <span className="clutch-reviews-count">100+ reviews</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR CORE VALUES (PREMIUM TECHNICAL SPLIT LAYOUT) */}
      <section className="about-values-section reveal">
        <div className="about-container">
          <div className="about-values-grid">
            
            {/* Left Column: Text Content and Stats */}
            <div className="about-values-left-col">
              <h2 className="about-values-title">Our core values</h2>
              <p className="about-values-description">
                As a leading strategic partner to companies around the world, we have leveraged technology to enable business transformation. We address the entire breadth of business needs, from strategy and design to managing operations. To do this, we draw on deep industry expertise and a command of the fast-evolving fields of cloud, data artificial intelligence, connectivity, software, digital engineering, and platforms.
              </p>
              
              {/* Stats Row */}
              <div className="about-values-stats-row">
                <div className="about-values-stat-item">
                  <span className="about-values-stat-num">3,500+</span>
                  <span className="about-values-stat-label">in-house experts</span>
                </div>
                <div className="about-values-stat-item">
                  <span className="about-values-stat-num">20</span>
                  <span className="about-values-stat-label">office locations</span>
                </div>
                <div className="about-values-stat-item">
                  <span className="about-values-stat-num">2,000+</span>
                  <span className="about-values-stat-label">global clients</span>
                </div>
                <div className="about-values-stat-item">
                  <span className="about-values-stat-num">19</span>
                  <span className="about-values-stat-label">years of experience</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Generative Code Graphic */}
            <div className="about-values-right-col">
              <div className="about-values-graphic-container">
                <img src={coreValuesGraphic} alt="Devopstrio Tech Core Values Illustration" className="about-values-vector-art" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MISSION & VISION */}
      {/* OUR MISSION */}
      <section className="about-doc-section mission reveal">
        <div className="about-container">
          <div className="about-doc-split">
            <div className="about-doc-visual">
              <div className="about-doc-img-box">
                <img src="/images/New/freepick_2.png" alt="Our Mission" />
              </div>
            </div>
            <div className="about-doc-content">
              <div className="about-doc-badge">OUR PURPOSE</div>
              <h2 className="about-doc-h2">OUR <span className="about-accent-dot">MISSION</span></h2>
              <p className="about-doc-lead">
                To empower enterprises by <a href="/services/explore" className="about-inline-link">simplifying the complex</a>. We deliver
                intelligent, <a href="/services/artificial-intelligence" className="about-inline-link">AI-driven cloud ecosystems</a> that act as a seamless
                extension of your team, turning infrastructure into your greatest competitive advantage.
              </p>
              <p className="about-doc-p">
                We believe that technology should be an enabler, not a hurdle. Our mission is to bridge the gap between human ambition and <a href="/services/cloud-architecture" className="about-inline-link">technical excellence</a> by providing tools that are as intuitive as they are powerful.
              </p>
              <div className="about-doc-dots-top"></div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR VISION */}
      <section className="about-doc-section vision reveal">
        <div className="about-container">
          <div className="about-doc-split">
            <div className="about-doc-content">
              <div className="about-doc-badge">OUR FUTURE</div>
              <h2 className="about-doc-h2">OUR <span className="about-accent-dot">VISION</span></h2>
              <p className="about-doc-lead">
                To architect a future where software never fails. We envision a world powered by the <a href="/services/ai-consulting-services" className="about-inline-link">perfect synergy of AI intelligence</a> and human creativity.
              </p>
              <p className="about-doc-p">
                We strive to create <a href="/services/devops-enablement" className="about-inline-link">resilient digital foundations</a> that allow innovation to flourish without limits, where every line of code is a step toward a more efficient, automated, and imaginative world.
              </p>
              <div className="about-doc-dots-bottom"></div>
            </div>
            <div className="about-doc-visual">
              <div className="about-doc-img-box">
                <img src="/images/New/freepick_1.png" alt="Our Vision" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR STORY (BENTO GRID STYLE) */}
      <section className="about-story-section reveal">
        <div className="about-container">
          
          <div className="about-story-bento-grid">
            
            {/* Bento Cell 1: Image 1 */}
            <div className="bento-cell bento-img-cell-1">
              <img src={StoryImage1} alt="Collaborative Developers Syncing" />
            </div>

            {/* Bento Cell 2: Story Main Text Block */}
            <div className="bento-cell bento-text-cell-2">
              <span className="about-pill"><FiBookOpen size={14} /> Our Story</span>
              <h2 className="bento-main-heading">Merging Cloud Power with AI Intelligence</h2>
              <p className="bento-desc-text">
                Devopstrio was born from a vision where infrastructure isn't just passive hardware, but an intelligent, adaptive organism. We saw that traditional cloud management was too slow for the AI era. Today, we lead the industry in AI-driven Cloud Engineering.
              </p>
              <p className="bento-desc-text-secondary">
                By integrating machine learning into the very fabric of DevOps, we enable enterprises to build, deploy, and scale systems with unprecedented cognitive capability, zero manual friction, and flawless reliability.
              </p>
              <a href="/services" className="bento-action-btn">Explore Platform <FiChevronRight /></a>
            </div>

            {/* Bento Cell 3: Feature Highlight Card */}
            <div className="bento-cell bento-feature-cell-3">
              <h3>200+</h3>
              <p>Expert cloud architects and AI engineers globally delivering excellence.</p>
            </div>

            {/* Bento Cell 4: Multi-Stat Cluster Card */}
            <div className="bento-cell bento-stats-cell-4">
              <div className="bento-stat-sub-box">
                <h4>500+</h4>
                <p>Production Clusters Scaled</p>
              </div>
              <div className="bento-stat-divider"></div>
              <div className="bento-stat-sub-box">
                <h4>5+ Years</h4>
                <p>Of Cloud Excellence</p>
              </div>
            </div>

            {/* Bento Cell 5: Highlights List Card */}
            <div className="bento-cell bento-list-cell-5">
              <div className="bento-highlight-item">
                <div className="bento-icon-circle">
                  <FiCloud />
                </div>
                <div className="bento-highlight-content">
                  <h5>Cloud-Native Automation</h5>
                  <p>Declarative GitOps and IaC loop architectures engineered to scale.</p>
                </div>
              </div>
              
              <div className="bento-highlight-item">
                <div className="bento-icon-circle">
                  <FiCpu />
                </div>
                <div className="bento-highlight-content">
                  <h5>AI-First Engineering</h5>
                  <p>Self-healing system nodes powered by deep learning models.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* OUR TEAM */}
      <section className="about-team-section reveal">
        <div className="about-container">
          <div className="about-section-header">
            <span className="about-pill"><FiUsers size={14} /> Our Team</span>
            <h2 className="about-gradient-text">The People Behind Our Success</h2>
            <p className="about-subhead">200+ passionate professionals dedicated to your success</p>
          </div>

          <div className="about-team-grid">
            {teamMembers.map((member, index) => (
              <div className="about-team-card" key={index}>
                <div className="about-team-image">
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="about-team-img" />
                  ) : (
                    <div className="about-team-initial">
                      <span>{member.initial}</span>
                    </div>
                  )}
                </div>
                <p className="about-team-role">{member.role}</p>
                <h4 className="about-team-name">{member.name}</h4>
              </div>
            ))}
          </div>

          <div className="about-team-cta">
            <a href="/careers" className="about-cta-button">
              Join Our Team <FiChevronRight />
            </a>
          </div>
        </div>
      </section>

      {/* 6. CORE SERVICES */}
      <section className="about-services-section reveal">
        <div className="about-container">
          <div className="about-section-header">
            <span className="about-pill"><FiCpu size={14} /> Core Services</span>
            <h2 className="about-gradient-text">What We Excel At</h2>
            <p className="about-subhead">Resilient, automated cloud solutions custom engineered for scale</p>
          </div>
          <div className="about-services-grid">
            
            {/* Card 1 */}
            <div className="about-service-card">
              <div className="service-card-top-num">01</div>
              <h3 className="service-card-title">Cloud-Native Migration</h3>
              <p className="service-card-desc">
                Flawless lifting and shift optimization across major cloud providers with zero traffic friction.
              </p>
              
              <div className="service-card-checklist">
                <div className="service-checklist-item">
                  <span className="service-check-icon">✓</span>
                  <span>Transformation programs and digital cloud initiatives</span>
                </div>
                <div className="service-checklist-item">
                  <span className="service-check-icon">✓</span>
                  <span>Legacy modernization for complex server architecture</span>
                </div>
                <div className="service-checklist-item">
                  <span className="service-check-icon">✓</span>
                  <span>Multi-cloud workload migration and integrations</span>
                </div>
              </div>

              <div className="service-card-sparkle-box">
                <svg className="card-sparkle-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l1.932 5.068L19 9l-5.068 1.932L12 16l-1.932-5.068L5 9l5.068-1.932zm7 13l1.1 2.9L23 19l-2.9 1.1L19 23l-1.1-2.9L15 19l2.9-1.1z" />
                </svg>
              </div>
            </div>

            {/* Card 2 (Active/Gradient Card) */}
            <div className="about-service-card active-card">
              <div className="service-card-top-num">02</div>
              <h3 className="service-card-title">DevOps Automation</h3>
              <p className="service-card-desc">
                Engineered CI/CD, IaC deployments, and Kubernetes orchestration architectures built to scale infinitely.
              </p>
              
              <div className="service-card-checklist">
                <div className="service-checklist-item">
                  <span className="service-check-icon">✓</span>
                  <span>High-throughput Kubernetes orchestration fabrics</span>
                </div>
                <div className="service-checklist-item">
                  <span className="service-check-icon">✓</span>
                  <span>GitOps & Infrastructure as Code (IaC) automation</span>
                </div>
                <div className="service-checklist-item">
                  <span className="service-check-icon">✓</span>
                  <span>Continuous Integration & Deployment (CI/CD) pipelines</span>
                </div>
              </div>

              <div className="service-card-sparkle-box">
                <svg className="card-sparkle-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l1.932 5.068L19 9l-5.068 1.932L12 16l-1.932-5.068L5 9l5.068-1.932zm7 13l1.1 2.9L23 19l-2.9 1.1L19 23l-1.1-2.9L15 19l2.9-1.1z" />
                </svg>
              </div>
            </div>

            {/* Card 3 */}
            <div className="about-service-card">
              <div className="service-card-top-num">03</div>
              <h3 className="service-card-title">SecOps Guardrails</h3>
              <p className="service-card-desc">
                Evolving zero-trust defensive architectures protecting data pipeline integrity from threat signatures.
              </p>
              
              <div className="service-card-checklist">
                <div className="service-checklist-item">
                  <span className="service-check-icon">✓</span>
                  <span>Zero-trust network perimeter defensive shields</span>
                </div>
                <div className="service-checklist-item">
                  <span className="service-check-icon">✓</span>
                  <span>Real-time active threat signature threat detection</span>
                </div>
                <div className="service-checklist-item">
                  <span className="service-check-icon">✓</span>
                  <span>Automated compliance audits and IAM policies</span>
                </div>
              </div>

              <div className="service-card-sparkle-box">
                <svg className="card-sparkle-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l1.932 5.068L19 9l-5.068 1.932L12 16l-1.932-5.068L5 9l5.068-1.932zm7 13l1.1 2.9L23 19l-2.9 1.1L19 23l-1.1-2.9L15 19l2.9-1.1z" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 8. CSR SECTION */}
      <div style={{ margin: "0px auto", maxWidth: "1250px" }} className="reveal">
        <CSRCommitment />
      </div>

      {/* 9. OUR PARTNERSHIPS */}
      <section className="about-partnerships-section reveal">
        <div className="about-container">
          <div className="about-section-header" style={{ marginBottom: "40px" }}>
            <span className="about-pill"><FiBriefcase size={14} /> Our Partnerships</span>
            <h2 className="about-gradient-text">Authorized Credentials & Certifications</h2>
          </div>
          <CertificationSlider />
        </div>
      </section >

      {/* 11. METRICS & STATISTICS */}
      <Milestones />

      {/* 12. OUR ACHIEVEMENTS */}
      <section className="about-achievements-section reveal">
        <div className="about-container">
          <div className="about-section-header">
            <span className="about-pill"><FiAward size={14} /> Our Achievements</span>
            <h2 className="about-gradient-text">Industry Milestones & Recognitions</h2>
            <p className="about-subhead">Celebrating our high-performing team's hard-earned accolades</p>
          </div>
          <div className="about-achievements-grid">
            <div className="about-achievement-card">
              <FiAward className="achievement-icon" />
              <h3>AWS Advanced Tier Partner</h3>
              <p>Certified for world-class technical capability and customer delivery milestones.</p>
            </div>
            <div className="about-achievement-card">
              <FiAward className="achievement-icon" />
              <h3>HashiCorp Specialized Partner</h3>
              <p>Accredited for zero-trust vault credentials and secure terraform delivery loops.</p>
            </div>
            <div className="about-achievement-card">
              <FiAward className="achievement-icon" />
              <h3>Top Cloud Employer 2025</h3>
              <p>Awarded for progressive, remote-friendly engineering culture and growth curves.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL PRESENCE */}
      <GlobalPresence />

      {/* NEWSLETTER */}
      <div style={{ margin: "0px auto", maxWidth: "1240px" }} className="reveal">
        <Newsletter />
      </div>

      {/* 13. CTA SECTION */}
      <div className="about-cta">
        <Cta />
      </div>

    </div>
  );
};

export default Aboutpage;
