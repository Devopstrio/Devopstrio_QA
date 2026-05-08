import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Zap,
  Users,
  Clock,
  Globe,
  CheckCircle2,
  MessageSquare,
  Award,
  ArrowRight,
  Rocket,
  FileCode,
  Shield,
  Layers,
  Sparkles,
  Trophy,
} from "lucide-react";
import "../Style/InternshipPage.css";
import useSEO from "../hooks/useSEO";
import CtaFinalies from "../Components/CtaFinalies/CtaFinalies";

const InternshipPage = () => {
  useSEO(
    "Student Internship Program | Devopstrio",
    "Join Devopstrio's internship program. Gain real-world experience in DevOps, Cloud, AI, and more. Apply today.",
  );

  useEffect(() => {
    // Premium Cursor Glow Interaction
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll(".ip-glass-card, .ip-bento-card");
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--x", `${x}px`);
        card.style.setProperty("--y", `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToDetails = () => {
    const detailsSection = document.getElementById("details-section");
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const highlights = [
    {
      icon: <Shield size={24} />,
      title: "Production Grade",
      desc: "Deploying infrastructure that powers global enterprises.",
    },
    {
      icon: <Rocket size={24} />,
      title: "Hyper Growth",
      desc: "A fast-paced environment designed to'scale your skills.",
    },
    {
      icon: <Layers size={24} />,
      title: "Architecture",
      desc: "Deep dives into system design and cloud patterns.",
    },
    {
      icon: <Sparkles size={24} />,
      title: "Innovation",
      desc: "Working on the bleeding edge of AI and DevOps.",
    },
  ];

  const requirements = [
    {
      id: "01",
      title: "Core Logic",
      desc: "Fundamental understanding of data structures and algorithms.",
    },
    {
      id: "02",
      title: "System Focus",
      desc: "Interest in Linux, Networking, and Cloud ecosystems.",
    },
    {
      id: "03",
      title: "Soft Skills",
      desc: "Communication and the ability to thrive in collaborative sprints.",
    },
    {
      id: "04",
      title: "Consistency",
      desc: "A track record of shipping projects and continuous learning.",
    },
  ];

  const selectionProcess = [
    {
      step: "Level 1",
      title: "Aptitude Test",
      desc: "Logic & problem-solving assessment.",
    },
    {
      step: "Level 2",
      title: "Technical Discussion",
      desc: "In-depth engineering review.",
    },
    {
      step: "Level 3",
      title: "HR Discussion",
      desc: "Cultural fit & career goals.",
    },
    {
      step: "Level 4",
      title: "Onboarding",
      desc: "Welcome to the Devopstrio team.",
    },
  ];

  // const benefits = [
  //   { icon: <Zap size={32} />, title: "Skill Up", desc: "Master tools like K8s, Terraform, and AWS." },
  //   { icon: <Globe size={32} />, title: "Global Reach", desc: "Your code will have impact across borders." },
  //   { icon: <Users size={32} />, title: "Direct Mentorship", desc: "Weekly 1-on-1s with senior engineering leads." },
  //   { icon: <Award size={32} />, title: "Certification", desc: "Industry-recognized Devopstrio Excellence certificate." },
  // ];

  const internshipTracks = [
    {
      title: "Platform Engineering",
      desc: "Build the foundations that scale global traffic.",
      tools: ["K8s", "Go", "Terraform"],
    },
    {
      title: "Full-Stack Ops",
      desc: "Bridge the gap between frontend beauty and backend logic.",
      tools: ["React", "Node", "PostgreSQL"],
    },
    {
      title: "AI Integration",
      desc: "Implement LLMs and Vector databases into real production flows.",
      tools: ["Python", "OpenAI", "Pinecone"],
    },
    {
      title: "Design Systems",
      desc: "Craft pixel-perfect experiences with technical depth.",
      tools: ["Figma", "CSS", "Motion"],
    },
  ];

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    viewport: { once: true },
  };

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <div className="ip-page">
      {/* ── NEW REDESIGNED CONTENT START ── */}
      <div className="ip-v2-container">
        {/* NEW HERO SECTION */}
        <section className="ip-hero-new">
          <div className="ip-hero-new-inner">
            <div className="ip-hero-new-left">
              <motion.div 
                className="ip-hero-new-img"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <img 
                  src="/images/New/Support_image.png" 
                  alt="Intern Team Illustration"
                  style={{ display: 'block', width: '100%', height: 'auto' }}
                />
              </motion.div>
            </div>
            <div className="ip-hero-new-right">
              <motion.div 
                className="ip-hero-new-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                <span className="ip-hero-new-tag">JOIN THE MOVEMENT</span>
                <h1 className="ip-hero-new-h1">
                  HELLO <br /> INTERNS!<span>.</span>
                </h1>
                <p className="ip-hero-new-p">
                  Step into a space where your ideas matter. We are building the next generation of builders, designers, and engineers. Join our global internship program and start your journey with Devopstrio today.
                </p>
                <button 
                  className="ip-hero-new-btn"
                  onClick={scrollToDetails}
                >
                  KNOW MORE
                </button>
              </motion.div>
              <div className="ip-hero-dots-top-right">
                <span></span><span></span><span></span><span></span><span></span>
              </div>
            </div>
          </div>
          <div className="ip-hero-dots-bottom-center">
            <span></span><span></span><span></span><span></span><span></span><span></span>
          </div>
          {/* <div className="ip-hero-chat-icon">
            <MessageSquare size={24} fill="currentColor" />
          </div> */}
        </section>

        {/* SECTION: THE BLUEPRINT (Boxed Layout) */}
        <section className="ip-v2-section">
          <div className="ip-blueprint-v2">
            <motion.div className="ip-v2-header" {...fadeUp}>
              <span className="ip-v2-tag">01 / OVERVIEW</span>
              <h2 className="ip-v2-mega-h">
                Real World <br />
                <span>Immersion</span>
              </h2>
              <p className="ip-v2-p">
                Experience the velocity of a global tech firm. No simulations,
                just production code.
              </p>
            </motion.div>

            <motion.div
              className="ip-v2-blueprint-grid"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className="ip-blueprint-card"
                  variants={fadeUp}
                >
                  <div className="ip-bp-header">
                    <div className="ip-bp-icon">{item.icon}</div>
                    <span className="ip-bp-index">0{i + 1}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION: TRACKS (Editorial Collage Style) */}
        <section className="ip-v2-section">
          <div className="ip-v2-tracks-layout">
            <motion.div className="ip-v2-tracks-left" {...fadeUp}>
              <h2 className="ip-v2-editorial-h">
                TODAY&apos;S ENGINEERS <br />
                HAVE TO KNOW <br />
                <span className="ip-text-highlight">MORE THAN</span> <br />
                JUST CODING.
              </h2>
              <div className="ip-v2-tracks-visual">
                <img
                  src="/internship_tracks_collage_v2.png"
                  alt="Internship Tracks Collage"
                />
                <div className="ip-v2-tracks-overlay"></div>
              </div>
            </motion.div>

            <motion.div
              className="ip-v2-tracks-list"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {internshipTracks.map((track, i) => (
                <motion.div
                  key={i}
                  className="ip-v2-track-item"
                  variants={fadeUp}
                >
                  <span className="ip-track-num">0{i + 1}</span>
                  <div className="ip-track-info">
                    <h3>{track.title}</h3>
                    <p>{track.desc}</p>
                    <div className="ip-track-tags">
                      {track.tools.map((tool, j) => (
                        <span key={j}>{tool}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION: THE CRITERIA (Bento Grid Redesign) */}
        <section className="ip-v2-section">
          <motion.div className="ip-v2-header center" {...fadeUp}>
            <span className="ip-v2-tag">02 / THE MINDSET</span>
            <h2 className="ip-v2-mega-h">
              Who we <span>Look for</span>
            </h2>
          </motion.div>

          <div className="ip-criteria-bento">
            <motion.div className="ip-crit-bento-main" {...fadeUp}>
              <div className="ip-crit-main-inner">
                <h3>
                  Cultural <br /> <span>Blueprint</span>
                </h3>
                <div className="ip-crit-gif-wrapper">
                  <video
                    src="/images/freepic.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
                <p>
                  We prioritize mindset over memorization. If you can bridge
                  logic and creativity, you belong here.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="ip-crit-bento-grid"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {requirements.map((req, i) => (
                <motion.div
                  key={i}
                  className={`ip-crit-bento-card card-${i}`}
                  variants={fadeUp}
                >
                  <span className="ip-crit-index">{req.id}</span>
                  <h4>{req.title}</h4>
                  <p>{req.desc}</p>
                  <div className="ip-crit-card-bg"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION: SELECTION PROCESS (The Horizontal Timeline) */}
        <section className="ip-v2-section">
          <motion.div className="ip-v2-header center" {...fadeUp}>
            <span className="ip-v2-tag">03 / THE JOURNEY</span>
            <h2 className="ip-v2-mega-h">
              Proven process <span>for success</span>
            </h2>
            <p className="ip-v2-subtext center">
              We help you on every step of the journey into professional
              excellence.
            </p>
          </motion.div>

          <div className="ip-horizontal-pipeline-wrapper">
            <div className="ip-pipeline-line"></div>
            <motion.div
              className="ip-horizontal-pipeline"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {selectionProcess.map((item, i) => (
                <motion.div
                  key={i}
                  className="ip-h-pipeline-step"
                  variants={fadeUp}
                >
                  <div className="ip-h-step-number">0{i + 1}</div>
                  <div className="ip-h-step-dot"></div>
                  <div className="ip-h-step-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* SECTION: THE APPLICATION (Modularized) */}
        <section id="details-section">
          <CtaFinalies />
        </section>

        {/* FOOTER: CONTACT */}
        <footer className="ip-cinematic-footer">
          <div className="ip-footer-content">
            <h2 className="ip-footer-logo">
              DEVOPSTRIO <span>INTERN</span>
            </h2>
            <div className="ip-footer-divider"></div>
            <p className="ip-footer-query">
              Questions? Our engineering team is here.
            </p>
            <a
              href="mailto:internship@devopstrioglobal.com"
              className="ip-footer-email"
            >
              internship@devopstrioglobal.com
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default InternshipPage;
