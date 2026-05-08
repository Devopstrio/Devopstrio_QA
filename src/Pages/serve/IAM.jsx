import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Serviceshero from "../../components/Hero/Serviceshero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

import {
  FiShield,
  FiLock,
  FiKey,
  FiUsers,
  FiEye,
  FiActivity,
  FiCheckCircle,
  FiArrowRight,
  FiChevronDown,
  FiCode,
  FiGlobe,
  FiZap,
  FiAlertTriangle,
  FiClock,
  FiRefreshCw,
  FiBarChart2,
  FiTrendingUp,
  FiAward,
  FiCheck,
  FiX,
  FiTarget,
  FiSettings,
  FiMonitor,
  FiCpu,
  FiDatabase,
} from "react-icons/fi";
import { FaQuoteLeft, FaAws, FaMicrosoft, FaGoogle } from "react-icons/fa";

import "../../Style/serve/IAM.css";

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
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55 } },
};

/* ── DATA ── */

/* Hero auto-rotate identity cards */
const identities = [
  {
    role: "Platform Engineer",
    email: "priya.sharma@acme.io",
    access: ["AWS EC2 ReadOnly", "S3 Full Access", "CloudWatch Logs"],
    risk: "Low",
    mfa: true,
    img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80",
  },
  {
    role: "DevOps Lead",
    email: "carlos.r@acme.io",
    access: ["Kubernetes Admin", "Terraform Apply", "Secret Manager"],
    risk: "Medium",
    mfa: true,
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&q=80",
  },
  {
    role: "Data Analyst",
    email: "mei.lin@acme.io",
    access: ["BigQuery Read", "Looker View", "GCS ReadOnly"],
    risk: "Low",
    mfa: false,
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80",
  },
];

/* Stats marquee */
const iamStats = [
  { icon: <FiKey />, value: "Zero", label: "Standing Privileges" },
  { icon: <FiClock />, value: "< 30s", label: "JIT Access Grant" },
  { icon: <FiShield />, value: "100%", label: "MFA Enforcement" },
  { icon: <FiUsers />, value: "50K+", label: "Identities Managed" },
  { icon: <FiEye />, value: "24/7", label: "Access Surveillance" },
  { icon: <FiAward />, value: "99.99%", label: "Auth Uptime" },
];

/* Vertical timeline nav sections — THE KEY UNIQUE ELEMENT */
const timelineSections = [
  {
    num: "01",
    title: "Zero Standing Privilege",
    sub: "Just-In-Time Access",
    desc: "Eliminate permanent access entirely. Engineers request access for specific tasks, get it just-in-time, and it auto-expires. No standing privilege means no attack surface.",
    features: [
      "Time-bound access windows",
      "Auto-expiry on task completion",
      "Full audit trail per session",
      "Manager approval workflows",
    ],
    image: "/images/New/Zero_Stand.png",
    accent: "#522c72",
  },
  {
    num: "02",
    title: "Least Privilege Enforcement",
    sub: "Right-Size Every Role",
    desc: "AI-powered analysis of actual usage versus granted permissions. Automatically detects and removes toxic entitlements, over-privileged roles, and unused access.",
    features: [
      "Permission gap analysis",
      "AI-driven right-sizing",
      "Toxic entitlement detection",
      "One-click remediation",
    ],
    image: "/images/New/Least_Privilege.png",
    accent: "#962964",
  },
  {
    num: "03",
    title: "MFA & SSO Everywhere",
    sub: "Unified Identity Plane",
    desc: "Universal MFA enforcement and Single Sign-On across every app, cloud, and workload. Federate with Okta, Azure AD, Google Workspace, or any SAML/OIDC provider.",
    features: [
      "Phishing-resistant MFA (FIDO2)",
      "Universal SSO via SAML/OIDC",
      "Adaptive risk-based auth",
      "Passwordless identity",
    ],
    image: "/images/New/Universal_MFA.png",
    accent: "#ce2453",
  },
  {
    num: "04",
    title: "Privileged Access Management",
    sub: "Vaulted Credentials",
    desc: "Enterprise-grade PAM — secrets vaulting, session recording, privileged session brokering, and break-glass emergency access. Complete privileged identity lifecycle.",
    features: [
      "Secrets vault & rotation",
      "Session recording & replay",
      "Privileged session brokering",
      "Break-glass emergency access",
    ],
    image: "/images/New/Privileged_Access.png",
    accent: "#dd5c54",
  },
  {
    num: "05",
    title: "Compliance & Audit",
    sub: "Always Audit-Ready",
    desc: "Continuous access certification campaigns, automated evidence collection for SOC 2 / ISO 27001 / HIPAA, and on-demand audit reports. Stay always ready, never scramble.",
    features: [
      "Automated access reviews",
      "SOC 2 / ISO 27001 evidence",
      "User access recertification",
      "Real-time compliance dashboard",
    ],
    image: "/images/New/Compliance_Audit.png",
    accent: "#e79e57",
  },
];

/* Access flow steps */
const flowSteps = [
  { icon: <FiUsers />, label: "User Requests Access", color: "#522c72" },
  { icon: <FiTarget />, label: "Policy Engine Evaluates", color: "#962964" },
  { icon: <FiEye />, label: "Risk Score Calculated", color: "#ce2453" },
  { icon: <FiCheckCircle />, label: "MFA Challenge Sent", color: "#dd5c54" },
  { icon: <FiKey />, label: "JIT Token Issued", color: "#e79e57" },
  { icon: <FiActivity />, label: "Session Monitored", color: "#522c72" },
];

/* Comparison */
const compRows = [
  {
    label: "Access Duration",
    before: "Permanent / Standing",
    after: "Just-In-Time, Auto-Expires",
  },
  {
    label: "MFA Coverage",
    before: "Selected Apps Only",
    after: "Universal — Every Resource",
  },
  {
    label: "Privilege Reviews",
    before: "Annual Manual Review",
    after: "Continuous AI Analysis",
  },
  {
    label: "Secrets Management",
    before: "Hardcoded / Spreadsheet",
    after: "Vaulted + Auto-Rotated",
  },
  {
    label: "Audit Readiness",
    before: "Weeks of Prep",
    after: "Instant On-Demand Reports",
  },
  {
    label: "Breach Blast Radius",
    before: "Full Environment",
    after: "Zero — No Standing Access",
  },
];

/* FAQ */
const faqs = [
  {
    q: "What is Just-In-Time (JIT) access?",
    a: "JIT access means engineers only receive permissions when they need them, for as long as they need them. When a task is complete, access is automatically revoked. This eliminates 'standing privileges' — the root cause of most cloud breaches via compromised credentials.",
  },
  {
    q: "How do you integrate with our existing identity provider?",
    a: "We federate with any SAML 2.0 or OIDC-compatible identity provider — including Okta, Azure AD, Google Workspace, Ping Identity, and OneLogin. We also support LDAP sync and custom integrations for legacy systems.",
  },
  {
    q: "What is the difference between IAM and PAM?",
    a: "IAM (Identity & Access Management) governs all user and service identity — who can authenticate and what they can access. PAM (Privileged Access Management) focuses specifically on high-risk privileged accounts, secrets, and administrative sessions, with session recording and vaulted credential management.",
  },
  {
    q: "How quickly can you deploy an IAM platform?",
    a: "Most initial deployments are live within 2–4 weeks. Our phased approach covers discovery, policy definition, MFA rollout, and JIT activation. Full enterprise-wide rollout including PAM typically completes in 6–10 weeks.",
  },
  {
    q: "Can your platform help with SOC 2 compliance?",
    a: "Yes — our platform directly maps to SOC 2 CC6 (Logical and Physical Access) controls. We automate access review evidence collection, generate audit-ready reports, and continuously track control effectiveness.",
  },
];

/* ── COMPONENT ── */
const IAM = () => {
  const navigate = useNavigate();
  const [activeIdentity, setActiveIdentity] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const sectionRefs = useRef([]);
  const pageRef = useRef(null);

  /* auto-rotate identity card */
  useEffect(() => {
    const t = setInterval(
      () => setActiveIdentity((i) => (i + 1) % identities.length),
      4000,
    );
    return () => clearInterval(t);
  }, []);

  /* scroll-spy for timeline nav */
  useEffect(() => {
    const observers = sectionRefs.current.map((el, idx) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(idx);
        },
        { rootMargin: "-35% 0px -55% 0px" },
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <div className="iam-page" ref={pageRef}>
      <Serviceshero />
      {/* ══════════════════════════════════════
          1. HERO — SPLIT: Identity Card + Copy
          ══════════════════════════════════════ */}
      <section className="iam-hero">
        <div className="iam-container">
          <div className="iam-hero-layout">
            {/* left: copy */}
            <motion.div
              className="iam-hero-copy"
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
            >
              <p className="iam-label iam-gradient-text">
                IDENTITY & ACCESS MANAGEMENT
              </p>
              <h1 className="iam-hero-title">
                Every Identity.
                <br />
                Every Access.
                <br />
                <span className="iam-gradient-text">Under Control.</span>
              </h1>
              <p className="iam-hero-sub">
                Zero-trust IAM — just-in-time access, least privilege
                enforcement, universal MFA, and continuous compliance across
                every cloud, every app, every identity.
              </p>
              <div className="iam-hero-btns">
                <button
                  className="iam-primary-btn"
                  onClick={() => navigate("/contact")}
                >
                  Start IAM Assessment <FiArrowRight />
                </button>
                <button className="iam-ghost-btn" onClick={() => navigate("")}>
                  See Platform Demo
                </button>
              </div>
              {/* trust logos */}
              <div className="iam-trust-row">
                <span className="iam-trust-label">Integrates with</span>
                <FaAws className="iam-trust-icon" />
                <FaMicrosoft className="iam-trust-icon" />
                <FaGoogle className="iam-trust-icon" />
                <span className="iam-trust-more">+ 40 more</span>
              </div>
            </motion.div>

            {/* right: live identity card */}
            <motion.div
              className="iam-hero-card-wrap"
              variants={fadeRight}
              initial="hidden"
              animate="visible"
            >
              <div className="iam-card-header">
                <span className="iam-pulse-dot"></span>
                <span>Live Identity Dashboard</span>
                <span className="iam-card-badge">SECURED</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdentity}
                  className="iam-id-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="iam-id-top">
                    <img
                      src={identities[activeIdentity].img}
                      alt={identities[activeIdentity].role}
                      className="iam-id-avatar"
                    />
                    <div className="iam-id-info">
                      <h3>{identities[activeIdentity].role}</h3>
                      <p>{identities[activeIdentity].email}</p>
                      <div className="iam-id-row">
                        <span
                          className={`iam-risk iam-risk-${identities[activeIdentity].risk.toLowerCase()}`}
                        >
                          Risk: {identities[activeIdentity].risk}
                        </span>
                        <span
                          className={`iam-mfa ${identities[activeIdentity].mfa ? "iam-mfa-on" : "iam-mfa-off"}`}
                        >
                          {identities[activeIdentity].mfa
                            ? "✓ MFA"
                            : "✗ No MFA"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="iam-id-perms">
                    <p className="iam-id-perms-label">Active Permissions</p>
                    {identities[activeIdentity].access.map((a, i) => (
                      <div key={i} className="iam-perm-row">
                        <FiCheckCircle className="iam-perm-chk" />
                        <span>{a}</span>
                        <span className="iam-perm-jit">JIT · 4h left</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
              {/* card dots */}
              <div className="iam-card-dots">
                {identities.map((_, i) => (
                  <button
                    key={i}
                    className={`iam-cdot ${i === activeIdentity ? "iam-cdot-active" : ""}`}
                    onClick={() => setActiveIdentity(i)}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. STATS MARQUEE TICKER
          ══════════════════════════════════════ */}
      <div className="iam-ticker">
        <div className="iam-ticker-badge">
          <span className="iam-pulse-dot"></span>
          IAM METRICS
        </div>
        <div className="iam-ticker-wrap">
          <div className="iam-ticker-slider">
            {[0, 1].map((clone) => (
              <div
                key={clone}
                className="iam-ticker-track"
                aria-hidden={clone === 1}
              >
                {iamStats.map((s, i) => (
                  <div key={i} className="iam-ticker-item">
                    <span className="iam-ticker-icon">{s.icon}</span>
                    <span className="iam-ticker-val iam-gradient-text">
                      {s.value}
                    </span>
                    <span className="iam-ticker-lbl">{s.label}</span>
                    <span className="iam-ticker-sep">·</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          3. ACCESS FLOW DIAGRAM
          ══════════════════════════════════════ */}
      <section className="iam-flow-section">
        <div className="iam-container">
          <motion.div
            className="iam-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="iam-label iam-gradient-text">HOW IT WORKS</p>
            <h2 className="iam-section-title">The Zero-Trust Access Flow</h2>
            <p className="iam-section-desc">
              Every request, evaluated. Every session, monitored. No exceptions.
            </p>
          </motion.div>

          <div className="iam-flow-track">
            {flowSteps.map((step, i) => (
              <motion.div
                key={i}
                className="iam-flow-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <div
                  className="iam-flow-icon"
                  style={{
                    background: `${step.color}18`,
                    borderColor: `${step.color}40`,
                  }}
                >
                  <span style={{ color: step.color }}>{step.icon}</span>
                </div>
                <div className="iam-flow-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="iam-flow-label">{step.label}</p>
                {i < flowSteps.length - 1 && (
                  <div className="iam-flow-arrow"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. TIMELINE SIDEBAR NAV  ← UNIQUE
             Vertical numbered line with scroll-spy
          ══════════════════════════════════════ */}
      <section className="iam-timeline-section">
        <div className="iam-container iam-timeline-container">
          {/* Left: sticky vertical line nav */}
          <div className="iam-timeline-nav">
            <div className="iam-timeline-line"></div>
            {timelineSections.map((s, i) => (
              <button
                key={i}
                className={`iam-timeline-node ${activeSection === i ? "iam-node-active" : ""}`}
                onClick={() =>
                  sectionRefs.current[i]?.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  })
                }
                style={{ "--accent": s.accent }}
              >
                <div className="iam-node-dot">
                  <span>{s.num}</span>
                </div>
                <div className="iam-node-label">
                  <strong>{s.title}</strong>
                  <small>{s.sub}</small>
                </div>
              </button>
            ))}
          </div>

          {/* Right: scrollable content panels */}
          <div className="iam-timeline-panels">
            {timelineSections.map((s, i) => (
              <div
                key={i}
                className="iam-timeline-panel"
                ref={(el) => (sectionRefs.current[i] = el)}
              >
                <motion.div
                  className="iam-panel-inner"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="iam-panel-num" style={{ color: s.accent }}>
                    {s.num}
                  </div>
                  <p className="iam-label" style={{ color: s.accent }}>
                    {s.sub}
                  </p>
                  <h3 className="iam-panel-title">{s.title}</h3>
                  <p className="iam-panel-desc">{s.desc}</p>
                  <ul className="iam-panel-list">
                    {s.features.map((f, j) => (
                      <li key={j}>
                        <FiCheckCircle style={{ color: s.accent }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.div
                  className="iam-panel-image"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <img src={s.image} alt={s.title} />
                  <div
                    className="iam-panel-img-gloss"
                    style={{ "--accent": s.accent }}
                  ></div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. POLICY CODE TERMINAL
          ══════════════════════════════════════ */}
      <section className="iam-code-section">
        <div className="iam-container">
          <div className="iam-code-layout">
            <motion.div
              className="iam-code-copy"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="iam-label iam-gradient-text">POLICY AS CODE</p>
              <h2 className="iam-code-title">
                IAM Policies That
                <br />
                <span className="iam-gradient-text">Write Themselves.</span>
              </h2>
              <p className="iam-code-desc">
                Define access policies as code. Version-control them. Test them
                in CI. Auto-deploy them. No more manual IAM console clicks — no
                more drift.
              </p>
              <ul className="iam-code-list">
                {[
                  "OPA policy-as-code enforcement",
                  "Terraform IAM module libraries",
                  "GitOps-driven policy deployment",
                  "Policy violation auto-remediation",
                ].map((f, i) => (
                  <li key={i}>
                    <FiCheck className="iam-chk" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="iam-terminal"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="iam-term-bar">
                <span className="iam-tdot iam-tdot-r"></span>
                <span className="iam-tdot iam-tdot-y"></span>
                <span className="iam-tdot iam-tdot-g"></span>
                <span className="iam-term-title">iam-policy.rego</span>
              </div>
              <div className="iam-term-body">
                <pre className="iam-code-block">
                  <code>{`package iam.least_privilege

import future.keywords.if

# Deny any policy granting * actions
deny[msg] if {
  binding := input.policy.bindings[_]
  binding.actions[_] == "*"
  msg := sprintf(
    "❌ Wildcard action denied for role: %v",
    [binding.role]
  )
}

# Enforce JIT — max 4h session
deny[msg] if {
  session := input.session
  session.duration_hours > 4
  msg := "❌ Session exceeds 4h JIT limit"
}

# Require MFA for privileged roles
deny[msg] if {
  role   := input.identity.role
  startswith(role, "Admin")
  not input.identity.mfa_verified
  msg := "❌ MFA required for Admin roles"
}`}</code>
                </pre>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. FREEZE BANNER
          ══════════════════════════════════════ */}
      <section className="iam-banner">
        <div className="iam-banner-overlay"></div>
        <motion.div
          className="iam-banner-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="iam-label iam-gradient-text">
            ZERO TRUST STARTS WITH IDENTITY
          </p>
          <h2>
            The Breach You Fear
            <br />
            <span className="iam-gradient-text">
              Starts with a Stolen Identity.
            </span>
          </h2>
          <p>
            Stop it before it begins. Eliminate standing privileges. Enforce
            zero trust from day one.
          </p>
          <button
            className="iam-primary-btn iam-btn-lg"
            onClick={() => navigate("/contact")}
          >
            Get Your IAM Risk Score <FiArrowRight />
          </button>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════
          7. BEFORE / AFTER
          ══════════════════════════════════════ */}
      <section className="iam-compare-section">
        <div className="iam-container">
          <motion.div
            className="iam-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="iam-label iam-gradient-text">THE TRANSFORMATION</p>
            <h2 className="iam-section-title">
              Before vs. After Devopstrio IAM
            </h2>
          </motion.div>
          <motion.div
            className="iam-compare-table"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="iam-comp-head">
              <div className="iam-comp-col-lbl">Access Aspect</div>
              <div className="iam-comp-col iam-before-head">
                <FiX /> Before
              </div>
              <div className="iam-comp-col iam-after-head">
                <FiCheck /> After
              </div>
            </div>
            {compRows.map((row, i) => (
              <motion.div
                key={i}
                className="iam-comp-row"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="iam-comp-col-lbl">{row.label}</div>
                <div className="iam-comp-col iam-before-val">{row.before}</div>
                <div className="iam-comp-col iam-after-val iam-gradient-text">
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
      <section className="iam-quote-section">
        <div className="iam-container">
          <motion.div
            className="iam-quote-card"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="iam-quote-glow"></div>
            <FaQuoteLeft className="iam-q-icon" />
            <blockquote>
              &quot;Devopstrioeliminated every standing privilege in our cloud
              environment within 60 days. Our SOC 2 audit that previously took 3
              months of prep was completed in under a week. The JIT access model
              has become our gold standard — zero trust is finally real for
              us.&quot;
            </blockquote>
            <div className="iam-quote-author">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80"
                alt="Priya Krishnan"
              />
              <div>
                <h4>Priya Krishnan</h4>
                <p>Head of Security, NexaCloud Systems</p>
              </div>
              <div className="iam-qm-row">
                <div className="iam-qm">
                  <span className="iam-gradient-text">60d</span>
                  <small>To Zero Privilege</small>
                </div>
                <div className="iam-qm">
                  <span className="iam-gradient-text">1 wk</span>
                  <small>Audit Readiness</small>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. FAQ
          ══════════════════════════════════════ */}
      <section className="iam-faq-section">
        <div className="iam-container">
          <div className="iam-faq-layout">
            <motion.div
              className="iam-faq-left"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="iam-label iam-gradient-text">FAQ</p>
              <h2 className="iam-faq-title">
                IAM Questions,
                <br />
                <span className="iam-gradient-text">Clearly Answered</span>
              </h2>
              <p className="iam-faq-sub">
                Everything you need to know about securing identity at scale.
              </p>
              <button
                className="iam-primary-btn"
                onClick={() => navigate("/contact")}
              >
                Talk to an IAM Expert <FiArrowRight />
              </button>
            </motion.div>
            <div className="iam-faq-right">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className={`iam-faq-item ${openFaq === i ? "iam-faq-open" : ""}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <button
                    className="iam-faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <FiChevronDown />
                  </button>
                  <div className="iam-faq-a">
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

export default IAM;
