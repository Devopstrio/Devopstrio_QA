import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useInView,
} from "framer-motion";
import { useNavigate } from "react-router-dom";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";
import {
  FiArrowRight,
  FiCheck,
  FiStar,
  FiZap,
  FiServer,
  FiDatabase,
  FiCode,
  FiShield,
  FiCpu,
  FiGlobe,
  FiActivity,
  FiTrendingUp,
  FiUsers,
  FiPackage,
  FiLayers,
  FiExternalLink,
  FiChevronRight,
  FiChevronLeft,
  FiPlay,
  FiBarChart2,
  FiSettings,
  FiMonitor,
  FiRefreshCw,
} from "react-icons/fi";
import "../../Style/partners/ServiceNowPartners.css";

/* ─── Motion variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ─── DATA ─── */
const MARQUEE_ITEMS = [
  "ServiceNow Elite Partner",
  "ITSM",
  "ITOM",
  "HRSD",
  "App Engine",
  "Customer Service Mgmt",
  "SecOps",
  "GRC",
  "IT Asset Management",
  "Now Platform",
  "Flow Designer",
  "Virtual Agent",
  "Process Automation",
  "Workforce Optimisation",
  "Predictive Intelligence",
  "CreatorStudio",
];

const TABS = [
  { id: "itsm", label: "IT Service Mgmt", icon: <FiSettings /> },
  { id: "itom", label: "IT Operations Mgmt", icon: <FiMonitor /> },
  { id: "hrsd", label: "HR Service Delivery", icon: <FiUsers /> },
  { id: "appeng", label: "App Engine & Low-Code", icon: <FiCode /> },
  { id: "secops", label: "Security Operations", icon: <FiShield /> },
  { id: "csm", label: "Customer Service Mgmt", icon: <FiGlobe /> },
];

const TAB_CONTENT = {
  itsm: {
    headline: "Enterprise ITSM Transformation",
    body: "We implement and optimise ServiceNow ITSM — from Incident & Change Management to Problem, CMDB, and SLA governance — transforming reactive IT teams into proactive service engines.",
    points: [
      "Incident, Problem & Change Management",
      "CMDB Design & Discovery",
      "SLA/OLA/UC framework setup",
      "Self-Service Portal & Knowledge Base",
      "ITIL 4 aligned implementation",
    ],
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80",
    color: "#ce2453",
  },
  itom: {
    headline: "Intelligent IT Operations",
    body: "We deploy ServiceNow ITOM Discovery, Event Management, and AIOps to give your IT teams real-time visibility into infrastructure health and reduce MTTR.",
    points: [
      "Discovery & Service Mapping",
      "Event Management & AIOps",
      "Cloud Provisioning & ITOM Health",
      "Operational Intelligence dashboards",
      "Cloud Infrastructure Management",
    ],
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
    color: "#962964",
  },
  hrsd: {
    headline: "HR Service Delivery at Scale",
    body: "We modernise employee journeys with ServiceNow HRSD — building omni-channel case management, onboarding workflows, and employee self-service portals your workforce will love.",
    points: [
      "Employee Centre Pro portals",
      "Onboarding & offboarding flows",
      "Case & Knowledge Mgmt for HR",
      "Document Management workflows",
      "Global workforce compliance",
    ],
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80",
    color: "#e79e57",
  },
  appeng: {
    headline: "Low-Code App Engine & Creator Studio",
    body: "We empower business teams to build departmental applications on Now Platform with App Engine Studio — accelerating citizen development with guardrails, governance, and DevOps integration.",
    points: [
      "App Engine Studio implementation",
      "Flow Designer & Process Automation",
      "Creator Studio playbooks",
      "IntegrationHub spoke development",
      "App Portfolio governance",
    ],
    img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900&q=80",
    color: "#522c72",
  },
  secops: {
    headline: "Security Operations & GRC",
    body: "We integrate ServiceNow SecOps with your SIEM/SOAR stack — enabling vulnerability response, threat intelligence, and GRC risk frameworks that reduce mean time to remediate.",
    points: [
      "Security Incident Response (SIR)",
      "Vulnerability Response workflows",
      "Threat Intelligence integration",
      "GRC Risk & Policy Management",
      "Compliance dashboards & audit trails",
    ],
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80",
    color: "#dd5c54",
  },
  csm: {
    headline: "Customer Service Management",
    body: "We build ServiceNow CSM solutions that connect front-office customer requests with back-office resolution — proactive case deflection, field service, and omni-channel customer portals.",
    points: [
      "Omni-channel Customer Portal",
      "Proactive Customer Service Ops",
      "Field Service Management",
      "Case Escalation & SLA management",
      "Customer Central 360 views",
    ],
    img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=900&q=80",
    color: "#ce2453",
  },
};

const SOLUTIONS = [
  {
    icon: <FiSettings />,
    title: "ITSM Pro Implementation",
    desc: "End-to-end ITSM with Predictive Intelligence, Virtual Agent, and Continual Improvement Management.",
    color: "#522c72",
  },
  {
    icon: <FiMonitor />,
    title: "ITOM Discovery & Health",
    desc: "Automated CMDB population, service mapping, and AIOps-powered event correlation for resiliency.",
    color: "#962964",
  },
  {
    icon: <FiUsers />,
    title: "HRSD Employee Experience",
    desc: "Employee Centre Pro, onboarding workflows, document management, and global HR case management.",
    color: "#ce2453",
  },
  {
    icon: <FiCode />,
    title: "App Engine Development",
    desc: "Build and govern departmental apps with App Engine Studio, Flow Designer, and IntegrationHub spokes.",
    color: "#dd5c54",
  },
  {
    icon: <FiShield />,
    title: "SecOps & GRC Platform",
    desc: "Security Incident Response, Vulnerability Response, and GRC Risk Frameworks on Now Platform.",
    color: "#e79e57",
  },
  {
    icon: <FiGlobe />,
    title: "CSM & Field Service",
    desc: "Customer portals, proactive service ops, and field service management for seamless customer journeys.",
    color: "#522c72",
  },
  {
    icon: <FiDatabase />,
    title: "CMDB & Asset Intelligence",
    desc: "Discovery-driven CMDB with HAM/SAM Pro, licence optimisation, and technology portfolio visibility.",
    color: "#962964",
  },
  {
    icon: <FiRefreshCw />,
    title: "Platform Upgrades & Health",
    desc: "Expert upgrade management, instance health checks, and technical debt remediation for Now Platform.",
    color: "#ce2453",
  },
  {
    icon: <FiBarChart2 />,
    title: "Performance Analytics",
    desc: "KPI dashboards, NOW Analytics, and Workspace design to drive data-driven service decisions.",
    color: "#dd5c54",
  },
];

const CASE_STUDIES = [
  {
    tag: "ITSM Transformation",
    company: "Global Retailer",
    metric: "68% reduction in MTTR",
    title:
      "Unified 7 disparate ITSM tools into a single ServiceNow instance — 50,000 end users onboarded in 12 weeks",
    color: "#ce2453",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80",
  },
  {
    tag: "HRSD & Onboarding",
    company: "FinTech Scale-up",
    metric: "82% faster employee onboarding",
    title:
      "Built an AI-powered onboarding flow on HRSD serving 14 countries — cutting time-to-productivity from 30 to 5 days",
    color: "#962964",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80",
  },
  {
    tag: "SecOps & GRC",
    company: "NHS Foundation Trust",
    metric: "3× faster vulnerability response",
    title:
      "Deployed ServiceNow SecOps and GRC across 6 hospital sites — automating compliance reporting that previously took 3 weeks per quarter",
    color: "#e79e57",
    img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80",
  },
];

const NEWS = [
  {
    tag: "Blog",
    date: "Feb 20, 2025",
    title:
      "ServiceNow GenAI Actions in Flow Designer: What We Built and What You Should Know",
    read: "7 min",
    color: "#ce2453",
  },
  {
    tag: "Case Study",
    date: "Feb 8, 2025",
    title:
      "How We Cut ServiceNow Licence Spend by 38% With SAM Pro and CMDB Hygiene",
    read: "5 min",
    color: "#962964",
  },
  {
    tag: "Deep Dive",
    date: "Jan 30, 2025",
    title: "App Engine vs Custom Scoped App: A Decision Framework for 2025",
    read: "9 min",
    color: "#e79e57",
  },
];

const STATS = [
  { val: "12+", lbl: "ServiceNow Practice Areas", icon: <FiStar /> },
  { val: "180+", lbl: "Certified Now Platform Engineers", icon: <FiUsers /> },
  { val: "500+", lbl: "Now Platform Implementations", icon: <FiZap /> },
  { val: "97%", lbl: "Client Satisfaction Score", icon: <FiActivity /> },
];

/* ─── Particle hook ─── */
function useParticles(count = 40) {
  const [particles] = useState(() =>
    [...Array(count)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 0.5,
      dur: Math.random() * 20 + 12,
      delay: Math.random() * -20,
    })),
  );
  return particles;
}

/* ─── Animated counter ─── */
function Counter({ to }) {
  const [val, setVal] = useState("0");
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(to.replace(/[^0-9.]/g, ""));
    const suffix = to.replace(/[0-9.]/g, "");
    const isFloat = to.includes(".");
    let frame;
    const start = Date.now(),
      dur = 1800;
    const tick = () => {
      const p = Math.min((Date.now() - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setVal((isFloat ? (num * e).toFixed(1) : Math.floor(num * e)) + suffix);
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);
  return <span ref={ref}>{val}</span>;
}

/* ════════════════════════════════════════
   COMPONENT
════════════════════════════════════════ */
const ServiceNowPartners = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("itsm");
  const [caseIdx, setCaseIdx] = useState(0);
  const [newsIdx, setNewsIdx] = useState(0);
  const particles = useParticles(44);

  const heroRef = useRef();
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "28%"]);
  const heroOp = useTransform(heroScroll, [0, 0.7], [1, 0]);

  const prevCase = () =>
    setCaseIdx((i) => (i - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  const nextCase = () => setCaseIdx((i) => (i + 1) % CASE_STUDIES.length);

  const c = CASE_STUDIES[caseIdx];
  const n = NEWS[newsIdx];
  const tab = TAB_CONTENT[activeTab];

  return (
    <div className="snw-page">
      {/* ── PARTICLE FIELD ── */}
      <div className="snw-particles" aria-hidden="true">
        {particles.map((p) => (
          <span
            key={p.id}
            className="snw-particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              animationDuration: `${p.dur}s`,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
        <div className="snw-orb snw-orb-1" />
        <div className="snw-orb snw-orb-2" />
        <div className="snw-orb snw-orb-3" />
        <div className="snw-grid" />
      </div>

      {/* ════════ 1. HERO ════════ */}
      <section className="snw-hero" ref={heroRef}>
        <motion.div className="snw-hero-bg" style={{ y: heroY }}>
          <div className="snw-hero-bg-overlay" />
        </motion.div>

        <motion.div
          className="snw-container snw-hero-inner"
          style={{ opacity: heroOp }}
        >
          {/* Left content */}
          <motion.div
            className="snw-hero-content"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* ServiceNow Elite badge — SNow brand green */}
            <motion.div className="snw-badge" variants={scaleIn}>
              <div className="snw-badge-logo">
                {/* ServiceNow stylised "N" in brand green */}
                <svg
                  viewBox="0 0 40 40"
                  width="22"
                  height="22"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="40" height="40" rx="8" fill="none" />
                  <text
                    x="50%"
                    y="54%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#fff"
                    fontSize="22"
                    fontWeight="900"
                    fontFamily="Inter,sans-serif"
                  >
                    N
                  </text>
                </svg>
              </div>
              <div className="snw-badge-text">
                <strong>ServiceNow Elite Partner</strong>
                <span>
                  12 Practice Areas · 180+ Certified Engineers · Since 2019
                </span>
              </div>
              <div className="snw-badge-verified">
                <FiCheck />
              </div>
            </motion.div>

            <motion.h1 className="snw-hero-h1" variants={fadeUp}>
              <span className="snw-brand">Devopstrio& </span>
              <span className="snw-grad">ServiceNow</span>
            </motion.h1>

            <motion.p className="snw-hero-sub" variants={fadeUp}>
              Transforming enterprise workflows with ServiceNow{`'`}s Now
              Platform — from ITSM and HRSD to App Engine and SecOps — backed by
              Elite Partnership and 500+ successful implementations.
            </motion.p>

            <motion.div className="snw-hero-cta" variants={fadeUp}>
              <button
                className="snw-btn-primary snw-btn-lg"
                onClick={() => navigate("/contact")}
              >
                Talk to ServiceNow Experts
              </button>
              <button
                className="snw-btn-ghost snw-btn-lg"
                onClick={() => navigate("/case-studies")}
              >
                View Implementations <FiExternalLink />
              </button>
            </motion.div>

            <motion.div className="snw-hero-chips" variants={stagger}>
              {STATS.slice(0, 3).map((s, i) => (
                <motion.div key={i} className="snw-chip" variants={scaleIn}>
                  <span className="snw-chip-icon">{s.icon}</span>
                  <span className="snw-chip-val">{s.val}</span>
                  <span className="snw-chip-lbl">{s.lbl}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — video card */}
          <motion.div
            className="snw-hero-media"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
          >
            <div className="snw-video-card">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80"
                alt="ServiceNow Now Platform"
                className="snw-video-img"
              />
              <div className="snw-video-tint" />
              <button className="snw-play" aria-label="Play overview">
                <FiPlay />
                <div className="snw-play-ring" />
              </button>
              <div className="snw-video-pill">
                <span className="snw-live-dot" />
                ServiceNow Partnership Overview · 5:12
              </div>
              <motion.div
                className="snw-float-card"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <FiTrendingUp />
                <div>
                  <strong>500+</strong>
                  <span>Now Platform Implementations</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════ 2. MARQUEE ════════ */}
      <div className="snw-marquee-band">
        <div className="snw-marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="snw-marquee-item">
              <span className="snw-marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ════════ 3. PARTNERSHIP BANNER ════════ */}
      <section className="snw-banner-section">
        <div className="snw-container">
          <motion.div
            className="snw-banner-box"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="snw-banner-glow" />
            <motion.p className="snw-eyebrow snw-grad" variants={fadeUp}>
              Elite Status
            </motion.p>
            <motion.h2 className="snw-banner-h2" variants={fadeUp}>
              Automating Enterprise Workflows
              <br />
              <span className="snw-grad">at Every Layer</span>
            </motion.h2>
            <motion.p className="snw-banner-sub" variants={fadeUp}>
              As a ServiceNow Elite Technology Partner, Devopstrio deploys,
              customises, and optimises the Now Platform across IT, HR,
              Security, and Customer Operations — delivering measurable ROI
              within 90 days.
            </motion.p>
            <motion.div className="snw-banner-badges" variants={stagger}>
              {[
                "Elite Technology Partner",
                "ITSM Specialist",
                "HRSD Certified",
                "App Engine Accredited",
              ].map((b, i) => (
                <motion.span
                  key={i}
                  className="snw-banner-badge"
                  variants={scaleIn}
                >
                  <FiCheck /> {b}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════ 4. STATS STRIP ════════ */}
      <section className="snw-stats-section">
        <div className="snw-container">
          <motion.div
            className="snw-stats-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STATS.map((s, i) => (
              <motion.div key={i} className="snw-stat-card" variants={fadeUp}>
                <div className="snw-stat-icon">{s.icon}</div>
                <div className="snw-stat-val">
                  <Counter to={s.val} />
                </div>
                <div className="snw-stat-lbl">{s.lbl}</div>
                <div className="snw-stat-line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ 5. SIDEBAR TABS — PRACTICE AREAS ════════ */}
      <section className="snw-tab-section">
        <div className="snw-container">
          <motion.div
            className="snw-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="snw-eyebrow snw-grad">Deep Expertise</p>
            <h2 className="snw-sec-h2">
              Our Now Platform
              <br />
              <span className="snw-grad">Practice Areas</span>
            </h2>
            <p className="snw-sec-sub">
              Six certified Now Platform practice areas — each with dedicated
              delivery teams, reference workflows, and certified technical
              architects.
            </p>
          </motion.div>

          <div className="snw-tab-layout">
            {/* Sidebar */}
            <motion.div
              className="snw-tab-sidebar"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {TABS.map((t) => (
                <button
                  key={t.id}
                  className={`snw-tab-btn ${activeTab === t.id ? "on" : ""}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  <span className="snw-tab-icon">{t.icon}</span>
                  <span className="snw-tab-label">{t.label}</span>
                  <FiChevronRight className="snw-tab-arrow" />
                  <div
                    className="snw-tab-bar"
                    style={{ "--tc": TAB_CONTENT[t.id].color }}
                  />
                </button>
              ))}
            </motion.div>

            {/* Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="snw-tab-panel"
                style={{ "--tc": tab.color }}
                initial={{ opacity: 0, x: 40 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={{ opacity: 0, x: -30, transition: { duration: 0.28 } }}
              >
                <div className="snw-tab-img-wrap">
                  <img src={tab.img} alt={tab.headline} />
                  <div
                    className="snw-tab-img-overlay"
                    style={{ "--tc": tab.color }}
                  />
                  <div
                    className="snw-tab-img-label"
                    style={{ borderColor: tab.color, color: tab.color }}
                  >
                    {TABS.find((t) => t.id === activeTab)?.icon}
                    {TABS.find((t) => t.id === activeTab)?.label}
                  </div>
                </div>
                <div className="snw-tab-body">
                  <h3 className="snw-tab-h3" style={{ color: tab.color }}>
                    {tab.headline}
                  </h3>
                  <p className="snw-tab-p">{tab.body}</p>
                  <ul className="snw-tab-points">
                    {tab.points.map((pt, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 16 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { delay: i * 0.08, duration: 0.4 },
                        }}
                      >
                        <span
                          className="snw-tab-check"
                          style={{ background: tab.color }}
                        >
                          <FiCheck />
                        </span>
                        {pt}
                      </motion.li>
                    ))}
                  </ul>
                  <button
                    className="snw-btn-primary"
                    style={{ "--bc": tab.color }}
                    onClick={() => navigate("/contact")}
                  >
                    Talk to Our {TABS.find((t) => t.id === activeTab)?.label}{" "}
                    Team <FiArrowRight />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ════════ 6. SOLUTIONS GRID ════════ */}
      <section className="snw-solutions-section">
        <div className="snw-container">
          <motion.div
            className="snw-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="snw-eyebrow snw-grad">What We Build</p>
            <h2 className="snw-sec-h2">
              Offerings &amp;
              <br />
              <span className="snw-grad">Solutions</span>
            </h2>
            <p className="snw-sec-sub">
              Nine production-proven Now Platform solution areas — each backed
              by reference architectures, certified architects, and measurable
              client outcomes.
            </p>
          </motion.div>
          <motion.div
            className="snw-solutions-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {SOLUTIONS.map((s, i) => (
              <motion.div
                key={i}
                className="snw-sol-card"
                variants={fadeUp}
                whileHover={{ y: -7 }}
                style={{ "--sc": s.color }}
              >
                <div
                  className="snw-sol-icon"
                  style={{
                    color: s.color,
                    background: `${s.color}10`,
                    borderColor: `${s.color}20`,
                  }}
                >
                  {s.icon}
                </div>
                <h3 className="snw-sol-title">{s.title}</h3>
                <p className="snw-sol-desc">{s.desc}</p>
                <div className="snw-sol-arrow">
                  <FiChevronRight />
                </div>
                <div className="snw-sol-bar" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ 7. CASE STUDIES SLIDER ════════ */}
      <section className="snw-cases-section">
        <div className="snw-container">
          <motion.div
            className="snw-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="snw-eyebrow snw-grad">Client Success</p>
            <h2 className="snw-sec-h2">
              Impact <span className="snw-grad">Stories</span>
            </h2>
          </motion.div>

          <div className="snw-case-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={caseIdx}
                className="snw-case-card"
                style={{ "--cc": c.color }}
                initial={{ opacity: 0, scale: 0.96, x: 60 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                  x: -40,
                  transition: { duration: 0.3 },
                }}
              >
                <div className="snw-case-img-wrap">
                  <img src={c.img} alt={c.title} />
                  <div
                    className="snw-case-overlay"
                    style={{ "--cc": c.color }}
                  />
                  <div
                    className="snw-case-tag"
                    style={{
                      color: c.color,
                      borderColor: `${c.color}30`,
                      background: `${c.color}10`,
                    }}
                  >
                    {c.tag}
                  </div>
                </div>
                <div className="snw-case-body">
                  <div className="snw-case-company">{c.company}</div>
                  <h3 className="snw-case-title">{c.title}</h3>
                  <div
                    className="snw-case-metric"
                    style={{
                      borderColor: `${c.color}30`,
                      background: `${c.color}08`,
                    }}
                  >
                    <FiTrendingUp style={{ color: c.color }} />
                    {c.metric}
                  </div>
                  <button
                    className="snw-btn-primary"
                    style={{ "--bc": c.color }}
                  >
                    Read Full Story <FiArrowRight />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="snw-slider-controls">
              <button className="snw-ctrl-btn" onClick={prevCase}>
                <FiChevronLeft />
              </button>
              <div className="snw-ctrl-dots">
                {CASE_STUDIES.map((_, i) => (
                  <button
                    key={i}
                    className={`snw-dot-btn ${caseIdx === i ? "on" : ""}`}
                    style={
                      caseIdx === i ? { background: CASE_STUDIES[i].color } : {}
                    }
                    onClick={() => setCaseIdx(i)}
                  />
                ))}
              </div>
              <button className="snw-ctrl-btn" onClick={nextCase}>
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ 8. NEWS & INSIGHTS ════════ */}
      <section className="snw-news-section">
        <div className="snw-container">
          <motion.div
            className="snw-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="snw-eyebrow snw-grad">From the Field</p>
            <h2 className="snw-sec-h2">
              News &amp; <span className="snw-grad">Insights</span>
            </h2>
          </motion.div>
          <div className="snw-news-layout">
            <AnimatePresence mode="wait">
              <motion.div
                key={newsIdx}
                className="snw-news-featured"
                style={{ "--nc": n.color }}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.28 } }}
              >
                <div
                  className="snw-news-tag"
                  style={{
                    color: n.color,
                    background: `${n.color}10`,
                    borderColor: `${n.color}25`,
                  }}
                >
                  {n.tag}
                </div>
                <p className="snw-news-date">{n.date}</p>
                <h3 className="snw-news-title">{n.title}</h3>
                <p className="snw-news-read">{n.read} read</p>
                <button
                  className="snw-btn-primary"
                  style={{ "--bc": n.color, marginTop: "20px" }}
                >
                  Read Article <FiArrowRight />
                </button>
              </motion.div>
            </AnimatePresence>

            <div className="snw-news-list">
              {NEWS.map((item, i) => (
                <button
                  key={i}
                  className={`snw-news-item ${newsIdx === i ? "on" : ""}`}
                  style={{ "--nc": item.color }}
                  onClick={() => setNewsIdx(i)}
                >
                  <div
                    className="snw-news-item-tag"
                    style={{ color: item.color }}
                  >
                    {item.tag}
                  </div>
                  <p className="snw-news-item-title">{item.title}</p>
                  <span className="snw-news-item-read">{item.read}</span>
                  <div className="snw-news-item-bar" />
                </button>
              ))}
              <div className="snw-news-ctrl">
                <button
                  className="snw-ctrl-btn sm"
                  onClick={() =>
                    setNewsIdx((i) => (i - 1 + NEWS.length) % NEWS.length)
                  }
                >
                  <FiChevronLeft />
                </button>
                <div className="snw-ctrl-dots">
                  {NEWS.map((_, i) => (
                    <button
                      key={i}
                      className={`snw-dot-btn ${newsIdx === i ? "on" : ""}`}
                      style={newsIdx === i ? { background: NEWS[i].color } : {}}
                      onClick={() => setNewsIdx(i)}
                    />
                  ))}
                </div>
                <button
                  className="snw-ctrl-btn sm"
                  onClick={() => setNewsIdx((i) => (i + 1) % NEWS.length)}
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <Newsletter />
    </div>
  );
};

export default ServiceNowPartners;
