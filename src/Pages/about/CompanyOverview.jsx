import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useNavigate } from "react-router-dom";

import AboutHero from "../../components/Hero/Abouthero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

import KishoreImg from "../../assets/images/Kishore_dev.png";
import SumanImg from "../../assets/images/suman_dev.png";
import ManiImg from "../../assets/images/Manikandan_dev.jpg";

import {
  FiArrowRight,
  FiChevronDown,
  FiGlobe,
  FiUsers,
  FiZap,
  FiShield,
  FiAward,
  FiTrendingUp,
  FiTarget,
  FiHeart,
  FiCode,
  FiLayers,
  FiStar,
  FiMapPin,
  FiCalendar,
  FiExternalLink,
} from "react-icons/fi";

import "../../Style/about/CompanyOverview.css";

/* ── Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

/* ── DATA ── */
const STATS = [
  { val: "2019", lbl: "Founded", icon: <FiCalendar /> },
  { val: "150+", lbl: "Engineers", icon: <FiUsers /> },
  { val: "40+", lbl: "Countries", icon: <FiGlobe /> },
  { val: "£2B+", lbl: "Client Revenue", icon: <FiTrendingUp /> },
  { val: "300+", lbl: "Projects Shipped", icon: <FiZap /> },
  { val: "99%", lbl: "Client Retention", icon: <FiHeart /> },
];

const MISSION_PILLARS = [
  {
    icon: <FiTarget />,
    title: "Mission",
    body: "To engineer the digital infrastructure that empowers founders, enterprises, and governments to build technology that outlasts trends — resilient, scalable, and humanly meaningful.",
    color: "#7d18d1",
  },
  {
    icon: <FiStar />,
    title: "Vision",
    body: "A world where the gap between ambition and execution disappears — where any organisation, anywhere, can deploy world-class technology without world-class risk.",
    color: "#ce2453",
  },
  {
    icon: <FiHeart />,
    title: "Values",
    body: "Radical ownership, transparent delivery, engineering excellence, and permanent curiosity. We don't ship features — we ship outcomes.",
    color: "#e79e57",
  },
];

const TIMELINE = [
  {
    year: "2019",
    title: "Founded in London",
    desc: "Devopstrio was founded by three engineers who believed great infrastructure should be accessible to every ambitious company — not just the Fortune 500.",
    tag: "Origin",
    color: "#7d18d1",
  },
  {
    year: "2020",
    title: "First £100M ARR Platform",
    desc: "Delivered the first enterprise SaaS platform on behalf of a Series B client. Within 12 months of launch, it crossed £100M ARR — validating our architecture-first approach.",
    tag: "Milestone",
    color: "#962964",
  },
  {
    year: "2021",
    title: "Expanded to Cloud Consulting",
    desc: "Launched our Cloud & Infrastructure practice, earning AWS Advanced Partner and Microsoft Solutions Partner status within the same year.",
    tag: "Expansion",
    color: "#ce2453",
  },
  {
    year: "2022",
    title: "AI & ML Practice Launched",
    desc: "Built our dedicated AI engineering team — shipping LLM-powered products, computer vision systems, and MLOps platforms for clients across retail, health, and finance.",
    tag: "Innovation",
    color: "#dd5c54",
  },
  {
    year: "2023",
    title: "40+ Countries. 150+ Engineers.",
    desc: "Crossed 150 full-time engineers across 40+ countries. Became the go-to engineering partner for deep-tech companies scaling globally.",
    tag: "Global Scale",
    color: "#e79e57",
  },
  {
    year: "2024",
    title: "£2B+ in Client Revenue Generated",
    desc: "Our platforms and products collectively generated over £2 billion in measurable client revenue — cementing our position as an outcomes-first engineering partner.",
    tag: "Impact",
    color: "#c46d16",
  },
  {
    year: "2025",
    title: "Accelerating Next-Gen Solutions",
    desc: "We scaled our enterprise cloud operations globally, integrating advanced AI engineering practices to automate end-to-end dev pipelines, dramatically increasing delivery speed.",
    tag: "Evolution",
    color: "#a446a8",
  },
  {
    year: "2026",
    title: "Leading the AI Native Era",
    desc: "Re-imagining engineering through an AI-first lens. Shipping completely autonomous workflow modules and setting a new standard for intelligent software delivery architecture.",
    tag: "Present",
    color: "#9b1e5a",
  },
];

const LEADERSHIP = [
  {
    name: "Kishore Kumar",
    role: "Co-founder & CEO",
    bio: "Former engineering lead at a £500M fintech. Built and exited two software companies before founding Devopstrio .",
    img: KishoreImg,
    location: "London, UK",
    color: "#7d18d1",
  },
  {
    name: "Suman Babu",
    role: "Co-founder & CTO",
    bio: "12 years building distributed systems at scale. Led infrastructure for platforms serving 50M+ daily active users.",
    img: SumanImg,
    location: "Bangalore, India",
    color: "#ce2453",
  },
  {
    name: "Manikandan",
    role: "Co-founder & CPO",
    bio: "Product leader with a background in enterprise SaaS. Shipped 20+ products across cloud, AI, and data engineering.",
    img: ManiImg,
    location: "Chennai, India",
    color: "#e79e57",
  },
];

const LOCATIONS = [
  {
    city: "London",
    country: "United Kingdom",
    role: "HQ & Sales",
    color: "#7d18d1",
  },
  {
    city: "Bangalore",
    country: "India",
    role: "Engineering Hub",
    color: "#ce2453",
  },
  {
    city: "Chennai",
    country: "India",
    role: "Product & Design",
    color: "#dd5c54",
  },
  {
    city: "Tennessee",
    country: "USA",
    role: "MENA Operations",
    color: "#e79e57",
  },
];

const CAPABILITIES = [
  {
    icon: <FiCode />,
    title: "Software Engineering",
    desc: "Full-stack, mobile, and embedded — from MVP to 100M-user platforms.",
  },
  {
    icon: <FiLayers />,
    title: "Cloud & DevOps",
    desc: "AWS, Azure, GCP. Kubernetes, Terraform, CI/CD pipelines that don't break.",
  },
  {
    icon: <FiZap />,
    title: "AI & Machine Learning",
    desc: "LLMs, computer vision, MLOps. Production AI, not demo notebooks.",
  },
  {
    icon: <FiShield />,
    title: "Cybersecurity",
    desc: "SecOps, penetration testing, SOC 2 readiness, and compliance tooling.",
  },
  {
    icon: <FiGlobe />,
    title: "SaaS Products",
    desc: "We design, build, and scale SaaS products from zero to global reach.",
  },
  {
    icon: <FiAward />,
    title: "Platform Engineering",
    desc: "Internal developer platforms, data platforms, and integration layers.",
  },
];

/* ── COMPONENT ── */
const CompanyOverview = () => {
  const navigate = useNavigate();
  const [activeTimeline, setActiveTimeline] = useState(0);
  const [openValues, setOpenValues] = useState(0);
  const heroRef = useRef(null);
  const timelineRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const fadeOp = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  /* auto-advance timeline */
  useEffect(() => {
    const t = setInterval(
      () => setActiveTimeline((p) => (p + 1) % TIMELINE.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="co-page">
      {/* ── ANIMATED BACKGROUND ── */}
      {/* <div className="co-bg" aria-hidden="true">
        <div className="co-orb co-orb-1" />
        <div className="co-orb co-orb-2" />
        <div className="co-orb co-orb-3" />
        <div className="co-grid" />
      </div> */}

      <AboutHero />

      {/* ════════════════════════════════
          1. CINEMATIC INTRO — parallax
          ════════════════════════════════ */}
      <section className="co-intro-section" ref={heroRef}>
        <motion.div className="co-intro-bg-img" style={{ y: parallaxY }}>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80"
            alt="Devopstrio HQ"
          />
          <div className="co-intro-overlay" />
        </motion.div>

        <motion.div
          className="co-container co-intro-content"
          style={{ opacity: fadeOp }}
        >
          <motion.p
            className="co-eyebrow co-grad"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Who We Are
          </motion.p>
          <motion.h2
            className="co-intro-h2"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            Engineering Partners
            <br />
            <span className="co-grad">for Ambitious Builders.</span>
          </motion.h2>
          <motion.p
            className="co-intro-p"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            Devopstrio is a global technology engineering firm — not an agency,
            not a consultancy. We embed deeply with founders and enterprise
            teams to design, build, and scale the technology that drives their
            most important outcomes.
          </motion.p>
          <motion.div
            className="co-intro-chips"
            variants={stagger}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            {[
              "Founded 2019",
              "London HQ",
              "150+ Engineers",
              "40+ Countries",
            ].map((c, i) => (
              <motion.span key={i} className="co-chip" variants={fadeUp}>
                {c}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ════════════════════════════════
          2. STATS MARQUEE BAR
          ════════════════════════════════ */}
      <section className="co-stats-section">
        <div className="co-container">
          <motion.div
            className="co-stats-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STATS.map((s, i) => (
              <motion.div key={i} className="co-stat-card" variants={fadeUp}>
                <div className="co-stat-icon">{s.icon}</div>
                <div className="co-stat-val co-grad">{s.val}</div>
                <div className="co-stat-lbl">{s.lbl}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          3. MISSION / VISION / VALUES
          ════════════════════════════════ */}
      <section className="co-mvv-section">
        <div className="co-container">
          <motion.div
            className="co-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="co-eyebrow co-grad">Our Foundation</p>
            <h2 className="co-sec-h2">
              Why We Exist.
              <br />
              <span className="co-grad">What Drives Us.</span>
            </h2>
          </motion.div>

          <motion.div
            className="co-mvv-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {MISSION_PILLARS.map((p, i) => (
              <motion.div
                key={i}
                className={`co-mvv-card ${openValues === i ? "active" : ""}`}
                style={{ "--pc": p.color }}
                variants={fadeUp}
                onClick={() => setOpenValues(i)}
                whileHover={{ y: -6 }}
              >
                <div className="co-mvv-icon-wrap">
                  <span className="co-mvv-icon">{p.icon}</span>
                </div>
                <h3 className="co-mvv-title">{p.title}</h3>
                <p className="co-mvv-body">{p.body}</p>
                <div className="co-mvv-line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          4. CINEMATIC TIMELINE
          ════════════════════════════════ */}
      <section className="co-timeline-section" ref={timelineRef}>
        <div className="co-container">
          <motion.div
            className="co-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="co-eyebrow co-grad">Our Journey</p>
            <h2 className="co-sec-h2">
              Eight Years
              <br />
              <span className="co-grad">Built on Outcomes.</span>
            </h2>
          </motion.div>

          <div className="co-timeline-layout">
            {/* Left: selector */}
            <div className="co-timeline-nav">
              {TIMELINE.map((t, i) => (
                <button
                  key={i}
                  className={`co-tl-btn ${activeTimeline === i ? "on" : ""}`}
                  style={{ "--tc": t.color }}
                  onClick={() => setActiveTimeline(i)}
                >
                  <span className="co-tl-year">{t.year}</span>
                  <span className="co-tl-tag">{t.tag}</span>
                </button>
              ))}
              <div className="co-tl-track-line" />
            </div>

            {/* Right: detail */}
            <div className="co-timeline-detail">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTimeline}
                  className="co-tl-panel"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  }}
                  exit={{ opacity: 0, x: -30, transition: { duration: 0.3 } }}
                >
                  <div
                    className="co-tl-year-big"
                    style={{ color: TIMELINE[activeTimeline].color }}
                  >
                    {TIMELINE[activeTimeline].year}
                  </div>
                  <div
                    className="co-tl-tag-pill"
                    style={{
                      color: TIMELINE[activeTimeline].color,
                      borderColor: `${TIMELINE[activeTimeline].color}40`,
                      background: `${TIMELINE[activeTimeline].color}0e`,
                    }}
                  >
                    {TIMELINE[activeTimeline].tag}
                  </div>
                  <h3 className="co-tl-title">
                    {TIMELINE[activeTimeline].title}
                  </h3>
                  <p className="co-tl-desc">{TIMELINE[activeTimeline].desc}</p>
                  <div
                    className="co-tl-accent-bar"
                    style={{ background: TIMELINE[activeTimeline].color }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Progress dots */}
              <div className="co-tl-dots">
                {TIMELINE.map((t, i) => (
                  <button
                    key={i}
                    className={`co-tl-dot ${activeTimeline === i ? "on" : ""}`}
                    style={{ "--tc": t.color }}
                    onClick={() => setActiveTimeline(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          5. CAPABILITIES — Alternating rows
          ════════════════════════════════ */}
      <section className="co-caps-section">
        <div className="co-container">
          <motion.div
            className="co-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="co-eyebrow co-grad">What We Do</p>
            <h2 className="co-sec-h2">
              Six Practices.
              <br />
              <span className="co-grad">One Partner.</span>
            </h2>
          </motion.div>
          <motion.div
            className="co-caps-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {CAPABILITIES.map((cap, i) => (
              <motion.div
                key={i}
                className="co-cap-card"
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
              >
                <div className="co-cap-icon">{cap.icon}</div>
                <h3 className="co-cap-title">{cap.title}</h3>
                <p className="co-cap-desc">{cap.desc}</p>
                <span className="co-cap-link">
                  Learn more <FiArrowRight />
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          6. LEADERSHIP TEAM
          ════════════════════════════════ */}
      {/* <section className="co-team-section">
        <div className="co-container">
          <motion.div
            className="co-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="co-eyebrow co-grad">Leadership</p>
            <h2 className="co-sec-h2">
              The People
              <br />
              <span className="co-grad">Behind The Code.</span>
            </h2>
          </motion.div>

          <motion.div
            className="co-team-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {LEADERSHIP.map((person, i) => (
              <motion.div
                key={i}
                className="co-team-card"
                style={{ "--pc": person.color }}
                variants={fadeUp}
                whileHover={{ y: -8 }}
              >
                <div className="co-team-img-wrap">
                  <img
                    src={person.img}
                    alt={person.name}
                    className="co-team-img"
                  />
                  <div className="co-team-img-overlay" />
                </div>
                <div className="co-team-body">
                  <div className="co-team-location">
                    <FiMapPin style={{ color: person.color }} />
                    {person.location}
                  </div>
                  <h3 className="co-team-name">{person.name}</h3>
                  <p className="co-team-role" style={{ color: person.color }}>
                    {person.role}
                  </p>
                  <p className="co-team-bio">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* ════════════════════════════════
          7. GLOBAL OFFICES
          ════════════════════════════════ */}
      <section className="co-offices-section">
        <div className="co-container">
          <motion.div
            className="co-offices-layout"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="co-offices-left" variants={fadeLeft}>
              <p className="co-eyebrow co-grad">Global Presence</p>
              <h2 className="co-offices-h2">
                Engineering From
                <br />
                <span className="co-grad">Every Timezone.</span>
              </h2>
              <p className="co-offices-p">
                We operate across four offices and 40+ countries — which means
                someone on your team is always on, always responsive, and always
                ahead of the next release.
              </p>
              <button
                className="co-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Work With Us <FiArrowRight />
              </button>
            </motion.div>

            <motion.div className="co-offices-right" variants={stagger}>
              {LOCATIONS.map((loc, i) => (
                <motion.div
                  key={i}
                  className="co-office-card"
                  style={{ "--lc": loc.color }}
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                >
                  <div className="co-office-dot" />
                  <div className="co-office-info">
                    <h4 className="co-office-city">{loc.city}</h4>
                    <p className="co-office-country">{loc.country}</p>
                  </div>
                  <span className="co-office-role">{loc.role}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          8. CINEMATIC CALL-OUT BANNER
          ════════════════════════════════ */}
      <section className="co-banner-section">
        <div className="co-banner-bg">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=80"
            alt="Team collaboration"
          />
          <div className="co-banner-overlay" />
        </div>
        <motion.div
          className="co-container co-banner-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="co-eyebrow co-grad">Join The Mission</p>
          <h2 className="co-banner-h2">
            We Don&rsquo;t Just Build Tech.
            <br />
            <span className="co-grad">We Build Legacies.</span>
          </h2>
          <p className="co-banner-p">
            Whether you&rsquo;re a startup with a bold idea or an enterprise
            with a complex problem — we want to hear from you.
          </p>
          <div className="co-banner-btns">
            <button
              className="co-btn-primary co-btn-lg"
              onClick={() => navigate("/contact")}
            >
              Start a Conversation <FiArrowRight />
            </button>
            <button
              className="co-btn-ghost co-btn-lg"
              onClick={() => navigate("/careers")}
            >
              Join Our Team <FiExternalLink />
            </button>
          </div>
        </motion.div>
      </section>

      <Cta />
      <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
        <Newsletter />
      </div>    </div>
  );
};

export default CompanyOverview;
