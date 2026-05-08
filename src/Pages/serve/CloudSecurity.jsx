import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Components
import Serviceshero from "../../components/Hero/Serviceshero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

// Icons
import {
  FiShield,
  FiLock,
  FiEye,
  FiAlertTriangle,
  FiActivity,
  FiCode,
  FiServer,
  FiGlobe,
  FiZap,
  FiCheckCircle,
  FiArrowRight,
  FiChevronDown,
  FiLayers,
  FiSearch,
  FiCpu,
  FiDatabase,
  FiBarChart2,
  FiTrendingUp,
  FiRefreshCw,
  FiTarget,
  FiAward,
  FiClock,
  FiCheck,
  FiX,
  FiMonitor,
  FiWifi,
  FiKey,
} from "react-icons/fi";
import { FaQuoteLeft, FaAws, FaGoogle } from "react-icons/fa";

import "../../Style/serve/CloudSecurity.css";

/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65 } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55 } },
};

/* ============================================================
   DATA
   ============================================================ */

/* slider hero data */
const heroSlides = [
  {
    tag: "ZERO-TRUST ARCHITECTURE",
    title: "Never Trust,\nAlways Verify.",
    sub: "End-to-end zero-trust security that assumes breach, verifies every request, and limits blast radius across your entire cloud estate.",
    img: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1600&q=80",
    cta: "Explore Zero Trust",
  },
  {
    tag: "THREAT DETECTION",
    title: "Detect Threats\nBefore They Strike.",
    sub: "AI-powered anomaly detection, behavioral analytics, and real-time alerting — find threats in your cloud environment in seconds, not days.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&q=80",
    cta: "See Threat Intel",
  },
  {
    tag: "COMPLIANCE AS CODE",
    title: "Compliance on\nAutopilot.",
    sub: "SOC 2, ISO 27001, PCI DSS, HIPAA, and GDPR — automated compliance posture management with continuous audit evidence collection.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1600&q=80",
    cta: "View Compliance",
  },
];

/* sidebar service panels */
const services = [
  {
    icon: <FiShield />,
    label: "Cloud Security Posture",
    title: "Cloud Security Posture Management",
    desc: "Continuously assess, monitor, and remediate misconfigurations across AWS, Azure, and GCP. Get a real-time security score and auto-remediation for critical risks.",
    features: [
      "Multi-cloud misconfiguration detection",
      "CIS Benchmark & NIST assessments",
      "Auto-remediation workflows",
      "Risk-prioritized alert dashboard",
    ],
    image: "/images/New/Cloud_Security_Posture.png",
    stat: { value: "98%", label: "Misconfiguration Detection" },
  },
  {
    icon: <FiEye />,
    label: "Threat Detection",
    title: "AI-Powered Threat Detection & Response",
    desc: "Machine learning models trained on cloud-native threat intelligence identify anomalous behavior, lateral movement, and credential abuse — automatically.",
    features: [
      "Behavioral analytics & anomaly detection",
      "Cloud-native threat intelligence feeds",
      "Automated SOAR playbooks",
      "MTTD < 2 minutes",
    ],
    image: "/images/New/Threat_Detection.png",
    stat: { value: "< 2 min", label: "Mean Time to Detect" },
  },
  {
    icon: <FiLock />,
    label: "Identity & Access",
    title: "Identity & Access Management",
    desc: "Zero-trust identity architecture — least privilege enforcement, just-in-time access, privileged access management, and continuous authorization across every workload.",
    features: [
      "Just-in-time privileged access",
      "Least privilege IAM policies",
      "MFA & SSO enforcement",
      "Service account lifecycle management",
    ],
    image: "/images/New/Identity_Access.png",
    stat: { value: "Zero", label: "Standing Privileges" },
  },
  {
    icon: <FiCode />,
    label: "Shift-Left Security",
    title: "Shift-Left DevSecOps",
    desc: "Security baked into every stage of your CI/CD pipeline — SAST, DAST, container scanning, secrets detection, and IaC security testing before code ships.",
    features: [
      "SAST & DAST pipeline integration",
      "Container & image vulnerability scanning",
      "Secrets detection & rotation",
      "IaC security policy enforcement",
    ],
    image: "/images/New/Shift_Left_Security.png",
    stat: { value: "100%", label: "Pipeline Coverage" },
  },
  {
    icon: <FiBarChart2 />,
    label: "Compliance",
    title: "Continuous Compliance Management",
    desc: "Automated compliance posture management for SOC 2, ISO 27001, PCI DSS, HIPAA, and GDPR — with continuous evidence collection, policy-as-code, and audit-ready reports.",
    features: [
      "SOC 2 / ISO 27001 / PCI DSS / HIPAA",
      "Automated evidence collection",
      "Policy-as-code enforcement",
      "On-demand audit reports",
    ],
    image: "/images/New/Compliance_code.png",
    stat: { value: "Full", label: "Audit Trail" },
  },
];

/* threat stats ticker */
const threatStats = [
  { icon: <FiZap />, value: "2min", label: "MTTD" },
  { icon: <FiShield />, value: "99.9%", label: "Uptime SLA" },
  { icon: <FiAlertTriangle />, value: "0", label: "False Negatives" },
  { icon: <FiRefreshCw />, value: "24/7", label: "SOC Coverage" },
  { icon: <FiAward />, value: "100%", label: "Compliance" },
  { icon: <FiTrendingUp />, value: "80%", label: "Risk Reduction" },
];

/* threat timeline feed */
const threats = [
  {
    time: "00:00:03",
    type: "Blocked",
    label: "Credential Stuffing Attack",
    region: "us-east-1",
    severity: "critical",
  },
  {
    time: "00:01:14",
    type: "Detected",
    label: "Unusual IAM Role Assumption",
    region: "eu-west-2",
    severity: "high",
  },
  {
    time: "00:02:50",
    type: "Remediated",
    label: "S3 Bucket Public Exposure",
    region: "ap-south-1",
    severity: "high",
  },
  {
    time: "00:04:11",
    type: "Blocked",
    label: "Crypto-mining Workload Injection",
    region: "us-west-2",
    severity: "critical",
  },
  {
    time: "00:05:33",
    type: "Alerted",
    label: "Privilege Escalation Attempt",
    region: "eu-central-1",
    severity: "medium",
  },
  {
    time: "00:06:47",
    type: "Blocked",
    label: "SQL Injection in API Gateway",
    region: "us-east-2",
    severity: "critical",
  },
];

/* comparison */
const comparisonRows = [
  {
    label: "Threat Detection Time",
    before: "Days to Weeks",
    after: "< 2 Minutes",
  },
  {
    label: "Compliance Posture",
    before: "Point-in-time Audits",
    after: "Continuous Monitoring",
  },
  {
    label: "IAM Privilege Exposure",
    before: "Standing Access Forever",
    after: "Just-in-Time Access",
  },
  {
    label: "Security Coverage",
    before: "Perimeter Only",
    after: "Every Layer, Zero Trust",
  },
  {
    label: "Incident Response",
    before: "Manual Playbooks",
    after: "Automated SOAR",
  },
  {
    label: "Audit Readiness",
    before: "Months to Prepare",
    after: "On-Demand Reports",
  },
];

/* faqs */
const faqs = [
  {
    q: "What cloud platforms do you secure?",
    a: "We provide comprehensive security across AWS, Microsoft Azure, and Google Cloud Platform — as well as hybrid and multi-cloud environments. Our platform provides a unified security posture view across all three.",
  },
  {
    q: "How does zero-trust security differ from traditional perimeter security?",
    a: "Traditional perimeter security assumes everything inside the network is trusted. Zero-trust assumes breach — every access request, regardless of source, must be continuously verified, authorized, and encrypted. This dramatically reduces lateral movement and blast radius.",
  },
  {
    q: "How quickly can you detect a cloud threat?",
    a: "Our AI-powered threat detection achieves a mean time to detect (MTTD) under 2 minutes for most threat categories. Automated SOAR playbooks then trigger response actions within seconds, not hours.",
  },
  {
    q: "Can you help achieve SOC 2 or ISO 27001 certification?",
    a: "Yes. Our compliance-as-code approach automates control mapping, evidence collection, and policy enforcement for SOC 2 Type II, ISO 27001, PCI DSS, HIPAA, and GDPR. Most clients achieve audit readiness within 8-12 weeks.",
  },
  {
    q: "Do you offer managed security services (MSSP)?",
    a: "Yes — we offer both platform implementations and 24/7 managed cloud security operations (Cloud SOC). This includes monitoring, incident response, threat hunting, and monthly executive reporting.",
  },
];

/* ============================================================
   COMPONENT
   ============================================================ */
const CloudSecurity = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  /* auto-advance hero slider */
  useEffect(() => {
    const t = setInterval(
      () => setActiveSlide((s) => (s + 1) % heroSlides.length),
      5500,
    );
    return () => clearInterval(t);
  }, []);

  /* counter animation hook */
  const useCounter = (target, duration = 1800) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const observed = useRef(false);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
      observer.observe(el);
      return () => observer.disconnect();
    }, [target, duration]);
    return [count, ref];
  };

  const [threats_blocked, ref1] = useCounter(84700);
  const [misconfigs, ref2] = useCounter(12400);
  const [incidents, ref3] = useCounter(340);

  return (
    <div className="CloudSecurity-page">
      {/* ════════════════════════════════════
          1. HERO SLIDER  (SaaS cinematic)
          ════════════════════════════════════ */}
        <Serviceshero />  {/* End of Serviceshero */}
      {/* ════════════════════════════════════
          2. LIVE THREAT TICKER (marquee)
          ════════════════════════════════════ */}
      <div className="CloudSecurity-threat-ticker">
        <div className="CloudSecurity-ticker-label">
          <span className="CloudSecurity-pulse-dot"></span>
          LIVE THREATS BLOCKED
        </div>
        <div className="CloudSecurity-ticker-track-wrapper">
          <div className="CloudSecurity-ticker-slider">
            {[0, 1].map((clone) => (
              <div
                key={clone}
                className="CloudSecurity-ticker-track"
                aria-hidden={clone === 1}
              >
                {threatStats.map((s, i) => (
                  <div key={i} className="CloudSecurity-ticker-item">
                    <span className="CloudSecurity-ticker-icon">{s.icon}</span>
                    <span className="CloudSecurity-ticker-value CloudSecurity-gradient-text">
                      {s.value}
                    </span>
                    <span className="CloudSecurity-ticker-label-text">
                      {s.label}
                    </span>
                    <span className="CloudSecurity-ticker-sep">·</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          3. COUNTER IMPACT SECTION
          ════════════════════════════════════ */}
      <section className="CloudSecurity-impact-section">
        <div className="CloudSecurity-container">
          <motion.div
            className="CloudSecurity-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="CloudSecurity-label CloudSecurity-gradient-text">
              REAL-WORLD IMPACT
            </p>
            <h2 className="CloudSecurity-section-title">Security at Scale</h2>
            <p className="CloudSecurity-section-desc">
              Live numbers from our cloud security platform — continuously
              updated.
            </p>
          </motion.div>

          <div className="CloudSecurity-impact-grid">
            <motion.div
              className="CloudSecurity-impact-card CloudSecurity-impact-lg"
              ref={ref1}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="CloudSecurity-impact-glow"></div>
              <span className="CloudSecurity-impact-num CloudSecurity-gradient-text">
                {threats_blocked.toLocaleString()}+
              </span>
              <span className="CloudSecurity-impact-label">
                Threats Blocked This Year
              </span>
              <p className="CloudSecurity-impact-desc">
                Across all monitored cloud environments
              </p>
            </motion.div>
            <motion.div
              className="CloudSecurity-impact-card"
              ref={ref2}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="CloudSecurity-impact-glow"></div>
              <span className="CloudSecurity-impact-num CloudSecurity-gradient-text">
                {misconfigs.toLocaleString()}+
              </span>
              <span className="CloudSecurity-impact-label">
                Misconfigs Remediated
              </span>
            </motion.div>
            <motion.div
              className="CloudSecurity-impact-card"
              ref={ref3}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="CloudSecurity-impact-glow"></div>
              <span className="CloudSecurity-impact-num CloudSecurity-gradient-text">
                {incidents}+
              </span>
              <span className="CloudSecurity-impact-label">
                Incidents Contained
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          4. SIDEBAR SERVICES
          ════════════════════════════════════ */}
      <section className="CloudSecurity-services-section">
        <div className="CloudSecurity-container">
          <motion.div
            className="CloudSecurity-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="CloudSecurity-label CloudSecurity-gradient-text">
              SECURITY SERVICES
            </p>
            <h2 className="CloudSecurity-section-title">
              Comprehensive Cloud Defense
            </h2>
            <p className="CloudSecurity-section-desc">
              Five layers of cloud security, unified into one platform and
              driven by our expert team.
            </p>
          </motion.div>

          <div className="CloudSecurity-services-layout">
            {/* sidebar nav */}
            <div className="CloudSecurity-services-nav">
              {services.map((s, i) => (
                <button
                  key={i}
                  className={`CloudSecurity-service-tab ${activeService === i ? "CloudSecurity-tab-active" : ""}`}
                  onClick={() => setActiveService(i)}
                >
                  <span className="CloudSecurity-tab-icon">{s.icon}</span>
                  <span className="CloudSecurity-tab-label">{s.label}</span>
                  <FiChevronDown className="CloudSecurity-tab-arrow" />
                </button>
              ))}
            </div>

            {/* content panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                className="CloudSecurity-service-panel"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="CloudSecurity-panel-text">
                  <div className="CloudSecurity-panel-icon">
                    {services[activeService].icon}
                  </div>
                  <h3>{services[activeService].title}</h3>
                  <p>{services[activeService].desc}</p>
                  <ul className="CloudSecurity-panel-features">
                    {services[activeService].features.map((f, j) => (
                      <li key={j}>
                        <FiCheckCircle className="CloudSecurity-feat-check" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="CloudSecurity-panel-stat">
                    <span className="CloudSecurity-stat-value CloudSecurity-gradient-text">
                      {services[activeService].stat.value}
                    </span>
                    <span className="CloudSecurity-stat-label">
                      {services[activeService].stat.label}
                    </span>
                  </div>
                  <button
                    className="CloudSecurity-primary-btn"
                    onClick={() => navigate("/services/Threat-Detection")}
                  >
                    Learn More <FiArrowRight />
                  </button>
                </div>
                <div className="CloudSecurity-panel-image">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                  />
                  <div className="CloudSecurity-panel-img-overlay"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          5. LIVE THREAT FEED (SaaS Dashboard)
          ════════════════════════════════════ */}
      <section className="CloudSecurity-feed-section">
        <div className="CloudSecurity-container">
          <div className="CloudSecurity-feed-layout">
            <motion.div
              className="CloudSecurity-feed-left"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="CloudSecurity-label CloudSecurity-gradient-text">
                THREAT INTELLIGENCE
              </p>
              <h2 className="CloudSecurity-feed-title">
                Real-Time Threat
                <br />
                <span className="CloudSecurity-gradient-text">
                  Detection Feed
                </span>
              </h2>
              <p className="CloudSecurity-feed-desc">
                Every threat event detected, blocked, and remediated in your
                cloud environments — visible in a single pane of glass. No blind
                spots.
              </p>
              <div className="CloudSecurity-feed-stats">
                <div className="CloudSecurity-fstat">
                  <span className="CloudSecurity-gradient-text">99.9%</span>
                  <small>Detection Rate</small>
                </div>
                <div className="CloudSecurity-fstat">
                  <span className="CloudSecurity-gradient-text">2 min</span>
                  <small>Avg. MTTD</small>
                </div>
                <div className="CloudSecurity-fstat">
                  <span className="CloudSecurity-gradient-text">24/7</span>
                  <small>SOC Coverage</small>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="CloudSecurity-feed-panel"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="CloudSecurity-feed-header">
                <span className="CloudSecurity-pulse-dot"></span>
                <span>Live Threat Feed — All Environments</span>
                <span className="CloudSecurity-feed-badge">PROTECTED</span>
              </div>
              <div className="CloudSecurity-feed-list">
                {threats.map((t, i) => (
                  <motion.div
                    key={i}
                    className={`CloudSecurity-feed-row CloudSecurity-sev-${t.severity}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="CloudSecurity-feed-time">{t.time}</span>
                    <span
                      className={`CloudSecurity-feed-type CloudSecurity-type-${t.type.toLowerCase()}`}
                    >
                      {t.type}
                    </span>
                    <span className="CloudSecurity-feed-event">{t.label}</span>
                    <span className="CloudSecurity-feed-region">
                      {t.region}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          6. VIDEO / FREEZE BANNER
          ════════════════════════════════════ */}
      <section className="CloudSecurity-banner-section">
        <div className="CloudSecurity-banner-overlay"></div>
        <motion.div
          className="CloudSecurity-banner-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="CloudSecurity-label CloudSecurity-gradient-text">
            YOUR SHIELD IN THE CLOUD
          </span>
          <h2>
            Security Isn&apos;t an Add-on.
            <br />
            <span className="CloudSecurity-gradient-text">
              It&apos;s the Foundation.
            </span>
          </h2>
          <p>
            Stop reacting to breaches. Start engineering a cloud that can&apos;t
            be breached.
          </p>
          <button
            className="CloudSecurity-primary-btn CloudSecurity-btn-lg"
            onClick={() => navigate("/contact")}
          >
            Get a Free Security Assessment <FiArrowRight />
          </button>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          7. BEFORE / AFTER TABLE
          ════════════════════════════════════ */}
      <section className="CloudSecurity-comparison-section">
        <div className="CloudSecurity-container">
          <motion.div
            className="CloudSecurity-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="CloudSecurity-label CloudSecurity-gradient-text">
              THE TRANSFORMATION
            </p>
            <h2 className="CloudSecurity-section-title">
              Before vs. After Devopstrio Cloud Security
            </h2>
          </motion.div>

          <motion.div
            className="CloudSecurity-comparison-table"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="CloudSecurity-comp-header">
              <div className="CloudSecurity-comp-col-label">
                Security Aspect
              </div>
              <div className="CloudSecurity-comp-col CloudSecurity-comp-before">
                <FiX className="CloudSecurity-comp-x" /> Before
              </div>
              <div className="CloudSecurity-comp-col CloudSecurity-comp-after">
                <FiCheck className="CloudSecurity-comp-chk" /> After
              </div>
            </div>
            {comparisonRows.map((row, i) => (
              <motion.div
                key={i}
                className="CloudSecurity-comp-row"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="CloudSecurity-comp-col-label">{row.label}</div>
                <div className="CloudSecurity-comp-col CloudSecurity-comp-before-val">
                  {row.before}
                </div>
                <div className="CloudSecurity-comp-col CloudSecurity-comp-after-val CloudSecurity-gradient-text">
                  {row.after}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════
          8. TESTIMONIAL
          ════════════════════════════════════ */}
      <section className="CloudSecurity-quote-section">
        <div className="CloudSecurity-container">
          <motion.div
            className="CloudSecurity-quote-card"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="CloudSecurity-quote-glow"></div>
            <FaQuoteLeft className="CloudSecurity-q-icon" />
            <blockquote>
              &quot;Devopstrio&apos;s cloud security platform completely
              transformed our risk posture. We went from a reactive security
              model to proactive, automated defense. Within 30 days, they
              detected and contained 14 critical threats our previous tools had
              completely missed. Our auditors were impressed.&quot;
            </blockquote>
            <div className="CloudSecurity-quote-author">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&q=80"
                alt="Rahul Menon"
              />
              <div>
                <h4>Rahul Menon</h4>
                <p>CISO, FinanceCore Technologies</p>
              </div>
              <div className="CloudSecurity-quote-metrics">
                <div className="CloudSecurity-qm">
                  <span className="CloudSecurity-gradient-text">14</span>
                  <small>Threats Found</small>
                </div>
                <div className="CloudSecurity-qm">
                  <span className="CloudSecurity-gradient-text">30d</span>
                  <small>Time to Value</small>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════
          9. FAQ — SPLIT LAYOUT
          ════════════════════════════════════ */}
      <section className="CloudSecurity-faq-section">
        <div className="CloudSecurity-container">
          <div className="CloudSecurity-faq-layout">
            <motion.div
              className="CloudSecurity-faq-left"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="CloudSecurity-label CloudSecurity-gradient-text">
                FAQ
              </p>
              <h2 className="CloudSecurity-faq-title">
                Cloud Security
                <br />
                <span className="CloudSecurity-gradient-text">
                  Questions Answered
                </span>
              </h2>
              <p className="CloudSecurity-faq-sub">
                Everything you need to know about securing your cloud with
                Devopstrio.
              </p>
              <button
                className="CloudSecurity-primary-btn"
                onClick={() => navigate("/contact")}
              >
                Talk to a Security Expert <FiArrowRight />
              </button>
            </motion.div>
            <div className="CloudSecurity-faq-right">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className={`CloudSecurity-faq-item ${openFaq === i ? "CloudSecurity-faq-open" : ""}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <button
                    className="CloudSecurity-faq-q"
                    onClick={() => toggleFaq(i)}
                  >
                    <span>{faq.q}</span>
                    <FiChevronDown />
                  </button>
                  <div className="CloudSecurity-faq-a">
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

export default CloudSecurity;
