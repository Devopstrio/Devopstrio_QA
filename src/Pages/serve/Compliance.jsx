import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Serviceshero from "../../components/Hero/Serviceshero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

import {
  FiShield,
  FiCheckCircle,
  FiAlertTriangle,
  FiFileText,
  FiBarChart2,
  FiLock,
  FiRefreshCw,
  FiArrowRight,
  FiChevronDown,
  FiCheck,
  FiX,
  FiActivity,
  FiGlobe,
  FiTarget,
  FiClock,
  FiDatabase,
  FiEye,
  FiSettings,
  FiAward,
  FiTrendingUp,
  FiCode,
  FiLayers,
  FiZap,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

import "../../Style/serve/Compliance.css";

/* ── Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -55 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65 } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 55 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55 } },
};

/* ── DATA ── */

/* Frameworks slider */
const frameworks = [
  {
    code: "SOC 2",
    name: "SOC 2 Type II",
    color: "#522c72",
    desc: "End-to-end SOC 2 readiness — continuous control monitoring, automated evidence collection, and rapid trust services criteria mapping.",
    pillars: [
      "CC6 Logical Access",
      "CC7 System Operations",
      "CC8 Change Management",
      "CC9 Risk Mitigation",
    ],
    timeline: "8–12 weeks",
    img: "/images/NewFolder/Groups_95.png",
  },
  {
    code: "ISO 27001",
    name: "ISO 27001:2022",
    color: "#962964",
    desc: "Full ISMS design, Annex A control implementation, SoA documentation, and audit preparation for ISO 27001 certification.",
    pillars: [
      "Risk Assessment",
      "Annex A Controls",
      "SoA Document",
      "Internal Audit",
    ],
    timeline: "12–16 weeks",
    img: "/images/NewFolder/Groups_96.png",
  },
  {
    code: "PCI DSS",
    name: "PCI DSS v4.0",
    color: "#ce2453",
    desc: "Cardholder data environment scoping, network segmentation, encryption validation, and all 12 PCI DSS requirement assessments.",
    pillars: [
      "CDE Scoping",
      "Network Segmentation",
      "ASV Scanning",
      "Penetration Testing",
    ],
    timeline: "10–14 weeks",
    img: "/images/NewFolder/Groups_97.png",
  },
  // {
  //   code: "HIPAA",
  //   name: "HIPAA / HITECH",
  //   color: "#dd5c54",
  //   desc: "PHI data flow mapping, safeguard implementation, BAA management, and HIPAA Security Rule compliance for healthcare cloud environments.",
  //   pillars: [
  //     "PHI Data Flows",
  //     "Administrative Safeguards",
  //     "Technical Controls",
  //     "BAA Management",
  //   ],
  //   timeline: "8–10 weeks",
  //   img: "/images/NewFolder/Groups_98.png",
  // },
  {
    code: "GDPR",
    name: "GDPR / DPDP",
    color: "#e79e57",
    desc: "Data subject rights implementation, DPIA execution, data residency controls, privacy-by-design architecture, and DPO advisory support.",
    pillars: [
      "Data Subject Rights",
      "DPIA Execution",
      "Data Residency",
      "Privacy by Design",
    ],
    timeline: "6–10 weeks",
    img: "/images/NewFolder/Groups_99.png",
  },
];

/* Compliance posture stats */
const postureStats = [
  { icon: <FiAward />, value: "100%", label: "Frameworks Covered" },
  { icon: <FiClock />, value: "< 12wk", label: "Avg Time to Audit" },
  { icon: <FiCheckCircle />, value: "Zero", label: "Failed Audits" },
  { icon: <FiRefreshCw />, value: "24/7", label: "Continuous Monitoring" },
  { icon: <FiBarChart2 />, value: "95%", label: "Evidence Automated" },
  { icon: <FiShield />, value: "250+", label: "Controls Mapped" },
];

/* How it works — 4-step process */
const processSteps = [
  {
    num: "01",
    icon: <FiTarget />,
    title: "Gap Assessment",
    desc: "We map your current state against your target framework, identify control gaps, and produce a prioritized remediation roadmap.",
    color: "#522c72",
  },
  {
    num: "02",
    icon: <FiSettings />,
    title: "Control Implementation",
    desc: "We implement technical and procedural controls, configure security tooling, and build your compliance infrastructure — as code.",
    color: "#962964",
  },
  {
    num: "03",
    icon: <FiActivity />,
    title: "Continuous Monitoring",
    desc: "Automated policy checks, control drift detection, and real-time compliance posture scoring — your compliance never goes stale.",
    color: "#ce2453",
  },
  {
    num: "04",
    icon: <FiFileText />,
    title: "Audit-Ready Reports",
    desc: "On-demand evidence packages, mapped control libraries, and board-ready compliance dashboards — produced in minutes, not months.",
    color: "#e79e57",
  },
];

/* Risk register items */
const risks = [
  {
    level: "Critical",
    label: "Unencrypted PII in S3",
    framework: "GDPR · SOC 2",
    status: "Remediating",
    progress: 72,
  },
  {
    level: "High",
    label: "Missing MFA on Admin Roles",
    framework: "ISO 27001",
    status: "Resolved",
    progress: 100,
  },
  {
    level: "High",
    label: "Uncertified Access Reviews",
    framework: "SOC 2 CC6",
    status: "In Review",
    progress: 55,
  },
  {
    level: "Medium",
    label: "Audit Log Retention < 12mo",
    framework: "PCI DSS",
    status: "Remediating",
    progress: 40,
  },
  // {
  //   level: "Medium",
  //   label: "No DR Test Documented",
  //   framework: "HIPAA",
  //   status: "Planned",
  //   progress: 15,
  // },
  {
    level: "Low",
    label: "Vendor SLA Not Reviewed",
    framework: "ISO 27001",
    status: "Resolved",
    progress: 100,
  },
];

/* Comparison table */
const compRows = [
  {
    label: "Evidence Collection",
    before: "Manual Spreadsheets",
    after: "95% Automated",
  },
  {
    label: "Audit Frequency",
    before: "Annual Point-in-Time",
    after: "Continuous",
  },
  {
    label: "Control Coverage",
    before: "Patchy & Undocumented",
    after: "250+ Controls Mapped",
  },
  { label: "Time to Audit Ready", before: "3–6 Months", after: "8–12 Weeks" },
  {
    label: "Cross-Framework Work",
    before: "Repeated for Each",
    after: "Shared Control Library",
  },
  {
    label: "Board Reporting",
    before: "Quarterly Manual Decks",
    after: "Real-Time Dashboard",
  },
];

/* FAQ */
const faqs = [
  {
    q: "How do you handle multiple compliance frameworks simultaneously?",
    a: "We use a unified control library — SOC 2, ISO 27001, PCI DSS, HIPAA, and GDPR controls are mapped to a single framework. Controls that satisfy multiple requirements are implemented once and mapped to all relevant frameworks, eliminating up to 60% of duplicate work.",
  },
  {
    q: "What's the difference between compliance and security?",
    a: "Security means having the right technical controls in place. Compliance means proving to an auditor that those controls are operational and effective. We deliver both — security architecture that satisfies compliance requirements, documented and evidenced for audit.",
  },
  {
    q: "Can you help a startup achieve SOC 2 Type II?",
    a: "Yes — we offer fast-track SOC 2 programs designed for startups, typically achieving readiness in 8–12 weeks. We handle everything from control selection and tooling to policy documentation, evidence collection, and auditor liaison.",
  },
  {
    q: "What is continuous compliance monitoring?",
    a: "Instead of a one-time audit that goes stale on day two, continuous compliance deploys automated policy checks that run 24/7. Any configuration drift, new risk, or control failure is detected and alerted instantly — so you're always audit-ready, not just once a year.",
  },
  {
    q: "Do you offer compliance as code (CaC)?",
    a: "Yes — we implement all controls as code using tools like OPA, Terraform Sentinel, AWS Config Rules, and custom policy engines. This means compliance policies are version-controlled, testable, and automatically enforced across your entire infrastructure.",
  },
];

/* ── COMPONENT ── */
const Compliance = () => {
  const navigate = useNavigate();
  const [activeFramework, setActiveFramework] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [scoreVisible, setScoreVisible] = useState(false);
  const scoreRef = useRef(null);

  /* auto-rotate frameworks */
  useEffect(() => {
    const t = setInterval(
      () => setActiveFramework((i) => (i + 1) % frameworks.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  /* trigger score ring animation */
  useEffect(() => {
    const el = scoreRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setScoreVisible(true);
      },
      { threshold: 0.4 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="cg-page">
      <Serviceshero />

      {/* ══════════════════════════════════════
          1. CINEMATIC HERO — TWO-PANEL
          ══════════════════════════════════════ */}
      {/* <section className="cg-hero">
        <div className="cg-container">
          <div className="cg-hero-layout">
            
            <motion.div
              className="cg-hero-copy"
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
            >
              <p className="cg-eyebrow cg-gradient-text">
                COMPLIANCE & GOVERNANCE
              </p>
              <h1 className="cg-hero-title">
                Regulatory Alignment.
                <br />
                Risk Under
                <br />
                <span className="cg-gradient-text">Complete Control.</span>
              </h1>
              <p className="cg-hero-sub">
                SOC 2, ISO 27001, PCI DSS, HIPAA, GDPR — we design, implement,
                and maintain compliance programs that keep you audit-ready 365
                days a year, not just the week before your auditor arrives.
              </p>
              <div className="cg-hero-ctas">
                <button
                  className="cg-primary-btn"
                  onClick={() => navigate("/contact")}
                >
                  Start Compliance Program <FiArrowRight />
                </button>
                <button
                  className="cg-ghost-btn"
                  onClick={() => navigate("/contact")}
                >
                  Download Framework Guide
                </button>
              </div>
            </motion.div>

            
            <motion.div
              className="cg-score-panel"
              ref={scoreRef}
              variants={fadeRight}
              initial="hidden"
              animate="visible"
            >
              <div className="cg-score-header">
                <span className="cg-pulse-dot"></span>
                <span>Live Compliance Posture</span>
                <span className="cg-badge-live">MONITORING</span>
              </div>
              <div className="cg-score-body">
                
                <div className="cg-ring-wrap">
                  <svg viewBox="0 0 120 120" className="cg-ring-svg">
                    <circle cx="60" cy="60" r="50" className="cg-ring-track" />
                    <circle
                      cx="60"
                      cy="60"
                      r="50"
                      className={`cg-ring-fill ${scoreVisible ? "cg-ring-animate" : ""}`}
                    />
                  </svg>
                  <div className="cg-ring-label">
                    <span className="cg-score-num cg-gradient-text">94</span>
                    <span className="cg-score-unit">/ 100</span>
                    <span className="cg-score-status">Excellent</span>
                  </div>
                </div>
                
                <div className="cg-fw-list">
                  {frameworks.map((fw, i) => (
                    <div key={i} className="cg-fw-row">
                      <span className="cg-fw-code" style={{ color: fw.color }}>
                        {fw.code}
                      </span>
                      <div className="cg-fw-bar-wrap">
                        <motion.div
                          className="cg-fw-bar"
                          style={{ background: fw.color }}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${85 + i * 3}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: i * 0.15 }}
                        />
                      </div>
                      <span className="cg-fw-pct">{85 + i * 3}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* ══════════════════════════════════════
          2. STATS TICKER
          ══════════════════════════════════════ */}
      <div className="cg-ticker">
        <div className="cg-ticker-badge">
          <span className="cg-pulse-dot"></span>
          COMPLIANCE POSTURE
        </div>
        <div className="cg-ticker-wrap">
          <div className="cg-ticker-slider">
            {[0, 1].map((clone) => (
              <div
                key={clone}
                className="cg-ticker-track"
                aria-hidden={clone === 1}
              >
                {postureStats.map((s, i) => (
                  <div key={i} className="cg-ticker-item">
                    <span className="cg-t-icon">{s.icon}</span>
                    <span className="cg-t-val cg-gradient-text">{s.value}</span>
                    <span className="cg-t-lbl">{s.label}</span>
                    <span className="cg-t-sep">·</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          3. FRAMEWORKS SLIDER — TABS
          ══════════════════════════════════════ */}
      <section className="cg-frameworks-section">
        <div className="cg-container">
          <motion.div
            className="cg-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="cg-eyebrow cg-gradient-text">FRAMEWORKS WE DELIVER</p>
            <h2 className="cg-section-title">Every Framework. One Partner.</h2>
            <p className="cg-section-desc">
              From startup SOC 2 to enterprise multi-framework programs — we
              cover every standard your customers, board, and auditors require.
            </p>
          </motion.div>

          {/* Framework tab pills */}
          <div className="cg-fw-tabs">
            {frameworks.map((fw, i) => (
              <button
                key={i}
                className={`cg-fw-tab ${activeFramework === i ? "cg-fw-tab-active" : ""}`}
                style={{ "--fw-color": fw.color }}
                onClick={() => setActiveFramework(i)}
              >
                {fw.code}
              </button>
            ))}
          </div>

          {/* Framework panel */}
          <AnimatePresence mode="wait">
            <motion.div
              // key={activeFramework}
              className="cg-fw-panel"
              // initial={{ opacity: 0, y: 20 }}
              // animate={{ opacity: 1, y: 0 }}
              // exit={{ opacity: 0, y: -15 }}
              // transition={{ duration: 0.4 }}
            >
              <div className="cg-fw-panel-text">
                <div
                  className="cg-fw-badge"
                  style={{
                    color: frameworks[activeFramework].color,
                    borderColor: `${frameworks[activeFramework].color}40`,
                    background: `${frameworks[activeFramework].color}10`,
                  }}
                >
                  {frameworks[activeFramework].code}
                </div>
                <h3 className="cg-fw-panel-title">
                  {frameworks[activeFramework].name}
                </h3>
                <p className="cg-fw-panel-desc">
                  {frameworks[activeFramework].desc}
                </p>
                <div className="cg-fw-pillars">
                  {frameworks[activeFramework].pillars.map((p, j) => (
                    <div key={j} className="cg-pillar-chip">
                      <FiCheckCircle
                        style={{ color: frameworks[activeFramework].color }}
                      />
                      {p}
                    </div>
                  ))}
                </div>
                <div className="cg-fw-meta">
                  <div className="cg-fw-meta-item">
                    <FiClock />
                    <span>
                      Typical Timeline:{" "}
                      <strong>{frameworks[activeFramework].timeline}</strong>
                    </span>
                  </div>
                </div>
                <button
                  className="cg-primary-btn"
                  onClick={() => navigate("/contact")}
                >
                  Start {frameworks[activeFramework].code} Program{" "}
                  <FiArrowRight />
                </button>
              </div>
              <div className="cg-fw-panel-img">
                <img
                  src={frameworks[activeFramework].img}
                  alt={frameworks[activeFramework].name}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. HOW IT WORKS — 4-STEP CARDS
          ══════════════════════════════════════ */}
      <section className="cg-process-section">
        <div className="cg-container">
          <motion.div
            className="cg-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="cg-eyebrow cg-gradient-text">OUR METHODOLOGY</p>
            <h2 className="cg-section-title">From Gap to Certified</h2>
            <p className="cg-section-desc">
              A battle-tested four-phase approach that gets you compliant
              without disrupting your engineering teams.
            </p>
          </motion.div>

          <div className="cg-process-grid">
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                className="cg-process-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div className="cg-process-num" style={{ color: step.color }}>
                  {step.num}
                </div>
                <div
                  className="cg-process-icon"
                  style={{
                    background: `${step.color}12`,
                    borderColor: `${step.color}30`,
                    color: step.color,
                  }}
                >
                  {step.icon}
                </div>
                <h3 className="cg-process-title">{step.title}</h3>
                <p className="cg-process-desc">{step.desc}</p>
                {/* connecting line between cards */}
                {i < processSteps.length - 1 && (
                  <div className="cg-process-connector"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. LIVE RISK REGISTER
          ══════════════════════════════════════ */}
      <section className="cg-risk-section">
        <div className="cg-container">
          <div className="cg-risk-layout">
            <motion.div
              className="cg-risk-copy"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="cg-eyebrow cg-gradient-text">RISK MANAGEMENT</p>
              <h2 className="cg-risk-title">
                Your Compliance
                <br />
                <span className="cg-gradient-text">Risk Register,</span>
                <br />
                Live & Automated.
              </h2>
              <p className="cg-risk-desc">
                Every compliance gap, risk finding, and remediation action —
                tracked, assigned, and resolved in a unified platform. No more
                spreadsheets.
              </p>
              <div className="cg-risk-stats">
                <div className="cg-rstat">
                  <span className="cg-gradient-text">95%</span>
                  <small>Auto-detected</small>
                </div>
                <div className="cg-rstat">
                  <span className="cg-gradient-text">24h</span>
                  <small>Avg Remediation</small>
                </div>
                <div className="cg-rstat">
                  <span className="cg-gradient-text">0</span>
                  <small>Missed Findings</small>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="cg-risk-panel"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="cg-risk-panel-header">
                <span className="cg-pulse-dot"></span>
                <span>Live Risk Register</span>
                <span className="cg-risk-count">6 findings</span>
              </div>
              <div className="cg-risk-list">
                {risks.map((r, i) => (
                  <motion.div
                    key={i}
                    className={`cg-risk-row cg-risk-${r.level.toLowerCase()}`}
                    initial={{ opacity: 0, x: 18 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="cg-risk-row-top">
                      <span
                        className={`cg-risk-badge cg-rbadge-${r.level.toLowerCase()}`}
                      >
                        {r.level}
                      </span>
                      <span className="cg-risk-label">{r.label}</span>
                      <span
                        className={`cg-risk-status cg-rstatus-${r.status.toLowerCase().replace(" ", "-")}`}
                      >
                        {r.status}
                      </span>
                    </div>
                    <div className="cg-risk-row-bot">
                      <span className="cg-risk-fw">{r.framework}</span>
                      <div className="cg-risk-prog-wrap">
                        <motion.div
                          className="cg-risk-prog"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${r.progress}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.08 }}
                        />
                      </div>
                      <span className="cg-risk-pct">{r.progress}%</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. FREEZE BANNER
          ══════════════════════════════════════ */}
      <section className="cg-banner">
        <div className="cg-banner-overlay"></div>
        <motion.div
          className="cg-banner-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="cg-eyebrow cg-gradient-text">COMPLIANCE AS CODE</p>
          <h2>
            Stop Treating Compliance
            <br />
            <span className="cg-gradient-text">as a Once-a-Year Event.</span>
          </h2>
          <p>
            Build it in. Automate it. Prove it every day — not just when the
            auditor shows up.
          </p>
          <button
            className="cg-primary-btn cg-btn-lg"
            onClick={() => navigate("/contact")}
          >
            Get Your Compliance Gap Assessment <FiArrowRight />
          </button>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          7. BEFORE / AFTER
          ══════════════════════════════════════ */}
      <section className="cg-compare-section">
        <div className="cg-container">
          <motion.div
            className="cg-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="cg-eyebrow cg-gradient-text">THE TRANSFORMATION</p>
            <h2 className="cg-section-title">
              Before vs. After Devopstrio Compliance
            </h2>
          </motion.div>
          <motion.div
            className="cg-compare-table"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="cg-comp-head">
              <div className="cg-comp-lbl">Compliance Aspect</div>
              <div className="cg-comp-col cg-before-head">
                <FiX /> Before
              </div>
              <div className="cg-comp-col cg-after-head">
                <FiCheck /> After
              </div>
            </div>
            {compRows.map((row, i) => (
              <motion.div
                key={i}
                className="cg-comp-row"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="cg-comp-lbl">{row.label}</div>
                <div className="cg-comp-col cg-before-val">{row.before}</div>
                <div className="cg-comp-col cg-after-val cg-gradient-text">
                  {row.after}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. TESTIMONIAL
          ══════════════════════════════════════ */}
      <section className="cg-quote-section">
        <div className="cg-container">
          <motion.div
            className="cg-quote-card"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="cg-quote-shine"></div>
            <FaQuoteLeft className="cg-q-icon" />
            <blockquote>
              &quot;We went from zero compliance posture to a clean SOC 2 Type
              II report in 10 weeks. Devopstrio didn&apos;t just tick boxes —
              they built a real compliance engine that now runs automatically.
              Our enterprise deals close 3x faster because customers trust our
              security posture from day one.&quot;
            </blockquote>
            <div className="cg-quote-author">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80"
                alt="James Okafor"
              />
              <div>
                <h4>James Okafor</h4>
                <p>CTO, DataBridge Analytics</p>
              </div>
              <div className="cg-qm-row">
                <div className="cg-qm">
                  <span className="cg-gradient-text">10wk</span>
                  <small>SOC 2 Ready</small>
                </div>
                <div className="cg-qm">
                  <span className="cg-gradient-text">3x</span>
                  <small>Faster Deals</small>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. FAQ
          ══════════════════════════════════════ */}
      <section className="cg-faq-section">
        <div className="cg-container">
          <div className="cg-faq-layout">
            <motion.div
              className="cg-faq-left"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="cg-eyebrow cg-gradient-text">FAQ</p>
              <h2 className="cg-faq-title">
                Compliance
                <br />
                <span className="cg-gradient-text">Questions Answered</span>
              </h2>
              <p className="cg-faq-sub">
                Everything you need to know about automated compliance and
                governance.
              </p>
              <button
                className="cg-primary-btn"
                onClick={() => navigate("/contact")}
              >
                Talk to a Compliance Expert <FiArrowRight />
              </button>
            </motion.div>
            <div className="cg-faq-right">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className={`cg-faq-item ${openFaq === i ? "cg-faq-open" : ""}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <button
                    className="cg-faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <FiChevronDown />
                  </button>
                  <div className="cg-faq-a">
                    <p>{faq.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <Newsletter />
    </div>
  );
};

export default Compliance;
