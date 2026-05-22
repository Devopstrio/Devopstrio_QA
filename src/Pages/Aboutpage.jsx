import React, { useEffect } from "react";
import {
  FiChevronRight,
  FiCpu,
  FiCloud,
  FiZap,
  FiShield,
  FiAward,
  FiTrendingUp,
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


//cloud image
import cloud from "../assets/images/ai_inte.jpg";
import cloud1 from "../assets/images/snaplytics.jpg";
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



// Story Section Images - Unsplash URLs for "Merging Cloud Power with AI Intelligence"
const StoryImage1 = cloud1; // AI/Cloud abstract
const StoryImage2 = cloud; // Data center
const StoryImage3 = cloud2; // AI robot
const StoryImage4 =
  "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&auto=format"; // Technology circuit
const StoryImage5 =
  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&auto=format"; // Cloud computing
const StoryImage6 =
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop&auto=format"; // Tech abstract

// Client Logos - Using Unsplash image URLs
const ClientLogo1 =
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format";
const ClientLogo2 =
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&auto=format";
const ClientLogo3 =
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=100&fit=crop&auto=format";
const ClientLogo4 =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop&auto=format";
const ClientLogo5 =
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&h=100&fit=crop&auto=format";
const ClientLogo6 =
  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200&h=100&fit=crop&auto=format";
const ClientLogo7 =
  "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&auto=format";
const ClientLogo8 =
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&h=100&fit=crop&auto=format";

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
  // const companyStats = [
  //   { value: "2019", label: "Founded", icon: <FiCalendar /> },
  //   { value: "500+", label: "Team Members", icon: <FiUsers /> },
  //   { value: "5+", label: "Offices", icon: <FiGlobe /> }, // Updated from "Clients Worldwide"
  //   { value: "4", label: "Countries", icon: <FiMapPin /> },
  // ];

  // Core Values
  const coreValues = [
    {
      icon: <FiCloud />,
      title: "Cloud-Native Excellence",
      description:
        "Engineered for the modern cloud, we build resilient, scalable architectures that power global enterprises.",
    },
    {
      icon: <FiZap />,
      title: "AI-First Innovation",
      description:
        "Integrating intelligent automation into every layer of the delivery pipeline to accelerate decision-making.",
    },
    {
      icon: <FiShield />,
      title: "Adaptive Security",
      description:
        "AI-powered security that evolves with threats, ensuring your cloud infrastructure remains impenetrable.",
    },
    {
      icon: <FiCpu />,
      title: "Autonomous Systems",
      description:
        "Creating self-healing, self-optimizing systems that reduce manual toil and maximize operational efficiency.",
    },
    {
      icon: <FiAward />,
      title: "Performance Driven",
      description:
        "Leveraging deep cloud insights and AI analytics to deliver peak performance at any scale.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Cognitive Scaling",
      description:
        "Moving beyond traditional scaling to intelligent, predictive resource management in the cloud.",
    },
  ];


  // // Leadership Team with Images
  // const leadershipTeam = [
  //   {
  //     name: "Manikandan",
  //     role: "CEO & Co-Founder",
  //     bio: "20+ years in enterprise software, former VP at AWS. Passionate about building high-performance teams.",
  //     image: Founder1,
  //     initial: "Mk",
  //     social: {
  //       linkedin: "https://linkedin.com/in/manikandan",
  //     },
  //   },
  //   {
  //     name: "Krishnakumar",
  //     role: "CTO & Co-Founder",
  //     bio: "Ex-Google, leading innovation in cloud architecture and AI/ML integration.",
  //     image: null,
  //     initial: "KC",
  //     social: {
  //       linkedin: "https://linkedin.com/in/krishnakumar",
  //     },
  //   },
  // ];

  // Team Members with Images
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
      role: "AI Security Engineer ",
      image: Team4,
      initial: "KI",
    },
    {
      name: "Sermaraja",
      role: "UI/UX Design manager",
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
      role: "SEO & Content Marketing Specialist",
      image: Team8,
      initial: "OV",
    },
  ];

  // const storyImages = [
  //   { url: StoryImage1, alt: "AI Technology Abstract" },
  //   { url: StoryImage2, alt: "Cloud Data Center" },
  //   { url: StoryImage3, alt: "AI Robotics" },
  //   { url: StoryImage4, alt: "Circuit Technology" },
  //   { url: StoryImage5, alt: "Cloud Computing" },
  //   { url: StoryImage6, alt: "Digital Transformation" },
  // ];


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

      {/* 2. OUR STORY SECTION - WITH IMAGES */}
      {/* <section className="about-story-section reveal">
        <div className="about-container">
          <div className="about-story-grid">
            <div className="about-story-content reveal">
              <span className="about-label">Intelligence & Infrastructure</span>
              <h2>Merging Cloud Power with AI Intelligence</h2>
              <p className="about-story-text">
                Devopstrio was born from a vision where infrastructure isn&apos;t
                just passive hardware, but an intelligent, adaptive organism. We
                saw that traditional cloud management was too slow for the AI
                era.
              </p>
              <p className="about-story-text">
                Today, we lead the industry in AI-driven Cloud Engineering. By
                integrating machine learning into the very fabric of DevOps, we
                enable enterprises to build, deploy, and scale systems with
                unprecedented cognitive capability.
              </p>

              <div className="about-story-stats reveal">
                {companyStats.map((stat, index) => (
                  <div className="about-stat-item" key={index}>
                    <div className="about-stat-icon">{stat.icon}</div>
                    <div className="about-stat-content">
                      <h3>{stat.value}</h3>
                      <p>{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-story-image reveal">
              <div className="about-image-grid">
                {storyImages.slice(0, 4).map((image, index) => (
                  <div
                    className={`about-grid-item item-${index + 1}`}
                    key={index}
                  >
                    <img src={image.url} alt={image.alt} />
                  </div>
                ))}
              </div>
              <div className="about-image-overlay">
                <span>7+ Years</span>
                <span>of Engineering Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* 2. OUR JOURNEY TIMELINE */}
      <Milestones />

      {/* 3. OUR MISSION & VISION */}
      {/* ── OUR MISSION SECTION ── */}
      <section className="about-doc-section mission reveal">
        <div className="about-container">
          <div className="about-doc-split">
            {/* Left: Illustration */}
            <div className="about-doc-visual">
              <div className="about-doc-img-box">
                <img
                  src="/images/New/freepick_2.png"
                  alt="Our Mission"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="about-doc-content">
              <div className="about-doc-badge">OUR PURPOSE</div>
              <h2 className="about-doc-h2">OUR <span className="about-accent-dot">MISSION</span></h2>
              <p className="about-doc-lead">
                To empower enterprises by <a href="/services/explore" className="about-inline-link">simplifying the complex</a>. We deliver
                intelligent, <a href="/services/artificial-intelligence" className="about-inline-link">AI-driven cloud ecosystems</a> that act as a seamless
                extension of your team, turning infrastructure into your
                greatest competitive advantage.
              </p>
              <p className="about-doc-p">
                We believe that technology should be an enabler, not a hurdle.
                Our mission is to bridge the gap between human ambition and
                <a href="/services/cloud-architecture" className="about-inline-link">technical excellence</a> by providing tools that are as intuitive
                as they are powerful.
              </p>

              <div className="about-doc-dots-top"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR VISION SECTION ── */}
      <section className="about-doc-section vision reveal">
        <div className="about-container">
          <div className="about-doc-split">
            {/* Left: Content */}
            <div className="about-doc-content">
              <div className="about-doc-badge">OUR FUTURE</div>
              <h2 className="about-doc-h2">OUR <span className="about-accent-dot">VISION</span></h2>
              <p className="about-doc-lead">
                To architect a future where software never fails. We envision
                a world powered by the <a href="/services/ai-consulting-services" className="about-inline-link">perfect synergy of AI intelligence</a> and human creativity.
              </p>
              <p className="about-doc-p">
                We strive to create <a href="/services/devops-enablement" className="about-inline-link">resilient digital foundations</a> that allow
                innovation to flourish without limits, where every line of code
                is a step toward a more efficient, automated, and imaginative world.
              </p>

              <div className="about-doc-dots-bottom"></div>
            </div>

            {/* Right: Illustration */}
            <div className="about-doc-visual">
              <div className="about-doc-img-box">
                <img
                  src="/images/New/freepick_1.png"
                  alt="Our Vision"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES - PROCESS DESIGN */}
      <Pinboard items={coreValues} />


       {/* CSR & SUSTAINABILITY */}
      <CSRCommitment />


      {/* 7. OUR TEAM */}
      <section className="about-team-section reveal">
        <div className="about-container">
          <div className="about-section-header">
            <span className="about-label">Our Team</span>
            <h2 className="about-gradient-text">
              The People Behind Our Success
            </h2>
            <p className="about-subhead">
              200+ passionate professionals dedicated to your success
            </p>
          </div>

          <div className="about-team-grid">
            {teamMembers.map((member, index) => (
              <div className="about-team-card" key={index}>
                <div className="about-team-image">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="about-team-img"
                    />
                  ) : (
                    <div className="about-team-initial">
                      <span>{member.initial}</span>
                    </div>
                  )}
                </div>
                <p className="about-team-role">{member.role}</p>
                <h4 className="about-team-name">{member.name}</h4>
                {/* <p className="about-team-email">{member.email}</p> */}
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

      <GlobalPresence />
      

      {/* 10. NEWSLETTER */}
        <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
          <Newsletter />
        </div>     
    

      {/* 11. CTA */}
      <div className="about-cta">
        <Cta />
      </div>
      <CertificationSlider />
    </div>
  );
};

export default Aboutpage;
