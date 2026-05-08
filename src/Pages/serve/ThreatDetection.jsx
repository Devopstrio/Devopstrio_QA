import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Serviceshero from "../../components/Hero/Serviceshero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

import {
  FiShield,
  FiAlertTriangle,
  FiActivity,
  FiEye,
  FiZap,
  FiArrowRight,
  FiChevronDown,
  FiCheck,
  FiX,
  FiClock,
  FiGlobe,
  FiServer,
  FiLock,
  FiCode,
  FiCheckCircle,
  FiTarget,
  FiCpu,
  FiLayers,
  FiAward,
  FiSearch,
  FiBell,
  FiDatabase,
  FiWifi,
  FiTrendingUp,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

import "../../Style/serve/ThreatDetection.css";

/* ── Motion variants ── */
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

/* Live feed events */
const FEED_EVENTS = [
  {
    id: 1,
    sev: "CRITICAL",
    type: "Brute Force SSH",
    src: "45.33.32.156 (RU)",
    target: "prod-api-01",
    ts: "00:03",
    action: "BLOCKED",
  },
  {
    id: 2,
    sev: "HIGH",
    type: "C2 Beacon Detected",
    src: "104.21.15.22 (CN)",
    target: "worker-node-07",
    ts: "00:08",
    action: "ISOLATED",
  },
  {
    id: 3,
    sev: "HIGH",
    type: "Privilege Escalation",
    src: "internal",
    target: "db-cluster-1",
    ts: "00:12",
    action: "ALERTED",
  },
  {
    id: 4,
    sev: "MEDIUM",
    type: "Anomalous S3 Exfiltration",
    src: "ci-runner-09",
    target: "s3://data-lake",
    ts: "00:19",
    action: "FLAGGED",
  },
  {
    id: 5,
    sev: "HIGH",
    type: "Port Scan (NMAP)",
    src: "103.29.68.10 (IN)",
    target: "edge-lb-02",
    ts: "00:21",
    action: "BLOCKED",
  },
  {
    id: 6,
    sev: "LOW",
    type: "Failed Login (5x)",
    src: "82.10.14.77 (DE)",
    target: "console.acme.io",
    ts: "00:29",
    action: "MONITORED",
  },
  {
    id: 7,
    sev: "CRITICAL",
    type: "Ransomware Signature",
    src: "internal",
    target: "fs-mount-03",
    ts: "00:33",
    action: "CONTAINED",
  },
  {
    id: 8,
    sev: "MEDIUM",
    type: "Lateral Movement",
    src: "ws-dev-04",
    target: "k8s-control-plane",
    ts: "00:39",
    action: "ALERTED",
  },
  {
    id: 9,
    sev: "HIGH",
    type: "DNS Tunnelling",
    src: "10.10.0.55",
    target: "resolver-01",
    ts: "00:44",
    action: "BLOCKED",
  },
  {
    id: 10,
    sev: "LOW",
    type: "Config Drift Detected",
    src: "terraform",
    target: "prod-vpc",
    ts: "00:51",
    action: "FLAGGED",
  },
];

/* Ticker stats */
const tickerStats = [
  { icon: <FiSearch />, val: "< 4 min", lbl: "MTTD", color: "#522c72" },
  { icon: <FiBell />, val: "< 1 min", lbl: "MTTA", color: "#962964" },
  { icon: <FiZap />, val: "< 15 min", lbl: "MTTR", color: "#ce2453" },
  { icon: <FiShield />, val: "99.99%", lbl: "Coverage", color: "#dd5c54" },
  { icon: <FiAward />, val: "< 2%", lbl: "False Positives", color: "#e79e57" },
  { icon: <FiEye />, val: "50M+", lbl: "IOCs Tracked", color: "#522c72" },
];

/* Sidebar sections — 5 detection layers */
const sidebarSections = [
  {
    id: "network",
    num: "01",
    icon: <FiGlobe />,
    title: "Network Intelligence",
    sub: "Perimeter Detection",
    color: "#7d18d1ff",
    desc: "Every packet, flow, and DNS query is evaluated against 50M+ global threat intelligence feeds in real-time. Malicious IPs, domains, and hashes are blocked at ingress — before they touch a single workload.",
    bullets: [
      "IDS/IPS Deep Packet Inspection",
      "DNS Sinkholing & Tunnelling Detection",
      "NetFlow Behavioural Analysis",
      "50M+ IOC Feed Integration",
    ],
    stat: { val: "50M+", sub: "IOCs Monitored" },
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=900&q=80",
  },
  {
    id: "endpoint",
    num: "02",
    icon: <FiServer />,
    title: "Endpoint & Workload EDR",
    sub: "Runtime Protection",
    color: "#cd1979ff",
    desc: "Kernel-level telemetry on every VM, container, and serverless function. Behavioural AI detects zero-day malware, memory injection, and ransomware — catching what signatures miss entirely.",
    bullets: [
      "Kernel-level Process Telemetry",
      "Memory Injection Detection",
      "Container Runtime Security",
      "In-memory Threat Analysis",
    ],
    stat: { val: "0-day", sub: "Malware Caught" },
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80",
  },
  {
    id: "siem",
    num: "03",
    icon: <FiLayers />,
    title: "SIEM & UEBA Correlation",
    sub: "Behavioural Intelligence",
    color: "#d7134bff",
    desc: "Logs, events, and telemetry from every source are centralised, enriched with threat context, and correlated. ML-powered UEBA builds behavioural baselines — deviations trigger instant investigation workflows.",
    bullets: [
      "Multi-source Log Aggregation",
      "ML Behavioural Baseline Models",
      "Cross-system Alert Correlation",
      "92% Alert Noise Reduction",
    ],
    stat: { val: "92%", sub: "Noise Reduction" },
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
  },
  {
    id: "cspm",
    num: "04",
    icon: <FiCode />,
    title: "Cloud Posture (CSPM)",
    sub: "Drift Detection",
    color: "#ca2317ff",
    desc: "Continuous validation of every cloud resource against CIS benchmarks and your own policies. Exposed S3 buckets, open security groups, misconfigured IAM — flagged within 5 minutes of drifting out of compliance.",
    bullets: [
      "CIS Benchmark Continuous Scanning",
      "Config Drift Detection (<5 min)",
      "Exposed Resource Auto-Alerting",
      "One-click Remediation Playbooks",
    ],
    stat: { val: "<5min", sub: "Drift Detected" },
    image:
      "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=900&q=80",
  },
  {
    id: "hunt",
    num: "05",
    icon: <FiCpu />,
    title: "AI Threat Hunting",
    sub: "Proactive Adversary Search",
    color: "#c46d16ff",
    desc: "Our SOC analysts run proactive threat hunts daily using AI-generated hypotheses mapped to MITRE ATT&CK. We search for dwell-time adversaries who have bypassed automated layers — catching breaches before exfiltration.",
    bullets: [
      "Hypothesis-driven Hunt Operations",
      "MITRE ATT&CK TTP Mapping",
      "Dark Web Monitoring",
      "Zero-day Research & Advisories",
    ],
    stat: { val: "24/7", sub: "SOC Operations" },
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=900&q=80",
  },
];

/* MITRE kill chain */
const killChain = [
  {
    phase: "Reconnaissance",
    ttp: "T1595, T1598",
    blocked: true,
    desc: "Scanning & phishing prep blocked at threat intel layer.",
  },
  {
    phase: "Initial Access",
    ttp: "T1566, T1190",
    blocked: true,
    desc: "Phishing & public exploits blocked at edge.",
  },
  {
    phase: "Execution",
    ttp: "T1059, T1203",
    blocked: true,
    desc: "Malicious script execution halted by EDR.",
  },
  {
    phase: "Persistence",
    ttp: "T1053, T1547",
    blocked: true,
    desc: "Scheduled tasks & registry run-keys detected.",
  },
  {
    phase: "Priv. Escalation",
    ttp: "T1068, T1078",
    blocked: true,
    desc: "Kernel exploit & account misuse flagged.",
  },
  {
    phase: "Lateral Movement",
    ttp: "T1021, T1550",
    blocked: false,
    desc: "Network segmentation limits blast radius.",
  },
  {
    phase: "Exfiltration",
    ttp: "T1041, T1567",
    blocked: true,
    desc: "DLP + CASB intercepts data movement.",
  },
  {
    phase: "Impact",
    ttp: "T1486, T1489",
    blocked: true,
    desc: "Ransomware commands contained.",
  },
];

/* SLA metrics */
const slaMetrics = [
  {
    icon: <FiSearch />,
    label: "Mean Time to Detect",
    value: "< 4 min",
    sub: "Industry avg: 197 days",
    color: "#522c72",
  },
  {
    icon: <FiBell />,
    label: "Mean Time to Alert",
    value: "< 1 min",
    sub: "Instant SOC paging",
    color: "#962964",
  },
  {
    icon: <FiZap />,
    label: "Mean Time to Respond",
    value: "< 15 min",
    sub: "Automated playbooks",
    color: "#ce2453",
  },
  {
    icon: <FiShield />,
    label: "Threat Containment",
    value: "< 30 min",
    sub: "Full environment",
    color: "#dd5c54",
  },
  {
    icon: <FiAward />,
    label: "False Positive Rate",
    value: "< 2%",
    sub: "AI-filtered alerts",
    color: "#e79e57",
  },
  {
    icon: <FiActivity />,
    label: "SOC Coverage",
    value: "24/7",
    sub: "365 days",
    color: "#522c72",
  },
];

/* FAQ */
const faqs = [
  {
    q: "How is your detection different from a traditional SIEM?",
    a: "A SIEM only correlates rules against known patterns — producing enormous noise. Our platform layers ML-powered UEBA behavioural baselines, real-time threat intelligence enrichment, and automated playbooks. The result: 92% fewer alerts with 10x more context per alert.",
  },
  {
    q: "What is your Mean Time to Detect (MTTD)?",
    a: "Our automated MTTD for known threats is under 4 minutes from the first telemetry event. For novel zero-day adversaries identified through proactive threat hunting, we target detection within 24–48 hours of dwell time — vs the industry average of 197 days.",
  },
  {
    q: "Do you cover both cloud and on-prem environments?",
    a: "Yes — our platform is hybrid-native. We deploy lightweight agents for on-prem and VM workloads, native cloud integrations (AWS GuardDuty, Azure Defender, GCP SCC) for cloud telemetry, and agentless CSPM scanning for posture. All correlated in one unified platform.",
  },
  {
    q: "What happens when a threat is confirmed?",
    a: "A confirmed threat triggers an automated playbook: the asset is isolated, our SOC is paged within 60 seconds, the asset owner is notified, forensic evidence is automatically preserved (process tree, memory dump, network flows), and a P1 remediation ticket is created in your ITSM. Full containment in under 30 minutes.",
  },
  {
    q: "How do you handle alert fatigue?",
    a: "We de-duplicate, correlate, and ML-suppress low-fidelity signals trained on your environment's baseline behaviour. New deployments typically see a 70–92% reduction in raw alert volume within the first 30 days, with quality continuously improving.",
  },
];

/* ── COMPONENT ── */
const ThreatDetection = () => {
  const navigate = useNavigate();

  /* Live feed */
  const [activeFeed, setActiveFeed] = useState(FEED_EVENTS.slice(0, 4));
  const [feedIdx, setFeedIdx] = useState(0);
  const feedRef = useRef(null);

  /* Sidebar scroll-spy */
  const [activeSection, setActiveSection] = useState(0);
  const panelRefs = useRef([]);

  /* FAQ */
  const [openFaq, setOpenFaq] = useState(null);

  /* Ticker pause on hover */
  const [tickerPaused, setTickerPaused] = useState(false);

  /* Stream live feed */
  useEffect(() => {
    const t = setInterval(() => {
      setFeedIdx((prev) => {
        const next = (prev + 1) % FEED_EVENTS.length;
        setActiveFeed((cur) => [FEED_EVENTS[next], ...cur].slice(0, 5));
        return next;
      });
    }, 2600);
    return () => clearInterval(t);
  }, []);

  /* Scroll-spy for sidebar */
  useEffect(() => {
    const obs = panelRefs.current.map((el, idx) => {
      if (!el) return null;
      const o = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setActiveSection(idx);
        },
        { rootMargin: "-30% 0px -60% 0px" },
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <div className="td-page">
      {/* ── ANIMATED BACKGROUND ── */}
      {/* <div className="td-bg" aria-hidden="true">
        <div className="td-orb td-orb-1"></div>
        <div className="td-orb td-orb-2"></div>
        <div className="td-orb td-orb-3"></div>
        <div className="td-dotgrid"></div>
      </div> */}

      <Serviceshero />

      {/* ════════════════════════════════════
            1. METRICS TICKER
            ════════════════════════════════════ */}
      <div
        className="td-ticker"
        onMouseEnter={() => setTickerPaused(true)}
        onMouseLeave={() => setTickerPaused(false)}
      >
        <div className="td-ticker-badge">
          <span className="td-pulse-dot"></span>SOC METRICS
        </div>
        <div className="td-ticker-track-wrap">
          <div
            className={`td-ticker-slider ${tickerPaused ? "td-ticker-paused" : ""}`}
          >
            {[0, 1].map((c) => (
              <div key={c} className="td-ticker-row" aria-hidden={c === 1}>
                {tickerStats.map((s, i) => (
                  <div key={i} className="td-tick-item">
                    <span style={{ color: s.color }}>{s.icon}</span>
                    <strong className="td-gradient-text">{s.val}</strong>
                    <span>{s.lbl}</span>
                    <span className="td-tick-dot">·</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
            2. HERO — Left copy + Right live feed
            ════════════════════════════════════ */}
      <section className="td-hero">
        <div className="td-container">
          <div className="td-hero-grid">
            {/* copy */}
            <motion.div
              className="td-hero-copy"
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
            >
              <p className="td-eyebrow td-gradient-text">
                AI THREAT DETECTION & RESPONSE
              </p>
              <h1 className="td-hero-title">
                See Every Threat.
                <br />
                Stop It
                <br />
                <span className="td-gradient-text">Before It Spreads.</span>
              </h1>
              <p className="td-hero-sub">
                Industry average dwell time is <strong>197 days</strong>. Ours
                is <strong className="td-gradient-text">under 4 minutes</strong>
                . AI-powered, 24/7 SOC — network, endpoint, identity and cloud
                all correlated in one unified platform.
              </p>
              <div className="td-hero-btns">
                <button
                  className="td-primary-btn"
                  onClick={() => navigate("/contact")}
                >
                  Start Free Threat Hunt <FiArrowRight />
                </button>
                <button
                  className="td-ghost-btn"
                  onClick={() => navigate("/contact")}
                >
                  View SOC Demo
                </button>
              </div>
              <div className="td-hero-pills">
                {[
                  { v: "< 4min", l: "MTTD" },
                  { v: "24/7", l: "SOC" },
                  { v: "< 2%", l: "False+ve" },
                ].map((s, i) => (
                  <div key={i} className="td-pill">
                    <span className="td-gradient-text">{s.v}</span>
                    <span>{s.l}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* live feed panel */}
            <motion.div
              className="td-feed-panel"
              variants={fadeRight}
              initial="hidden"
              animate="visible"
            >
              <div className="td-feed-header">
                <span className="td-pulse-dot"></span>
                <span>Live SOC Threat Feed</span>
                <span className="td-feed-badge">ACTIVE</span>
                <span className="td-feed-count">
                  {FEED_EVENTS.length} events/hr
                </span>
              </div>
              <div className="td-feed-body" ref={feedRef}>
                <AnimatePresence initial={false}>
                  {activeFeed.map((evt, i) => (
                    <motion.div
                      key={`${evt.id}-${feedIdx}-${i}`}
                      className="td-feed-row"
                      initial={{ opacity: 0, y: -14, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="td-feed-top">
                        <span
                          className={`td-sev-dot td-sev-${evt.sev.toLowerCase()}`}
                        ></span>
                        <span
                          className={`td-sev-label td-sev-${evt.sev.toLowerCase()}`}
                        >
                          {evt.sev}
                        </span>
                        <span className="td-feed-type">{evt.type}</span>
                        <span
                          className={`td-act-chip td-act-${evt.action.toLowerCase()}`}
                        >
                          {evt.action}
                        </span>
                      </div>
                      <div className="td-feed-bot">
                        <span>
                          <FiGlobe /> {evt.src}
                        </span>
                        <span className="td-feed-arrow">→</span>
                        <span>
                          <FiTarget /> {evt.target}
                        </span>
                        <span className="td-feed-ts">
                          <FiClock /> {evt.ts}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* ════════════════════════════════════
            3. SIDEBAR NAV + 5 DETECTION LAYERS
              The "how we handle threats" section
            ════════════════════════════════════ */}
      <section className="td-layers-section">
        <div className="td-container td-layers-grid">
          {/* Sticky left sidebar — vertical line nav */}
          <div className="td-sidebar">
            <div className="td-sidebar-label">
              Detection
              <br />
              Layers
            </div>
            <div className="td-sidebar-track">
              {/* the vertical line */}
              <div className="td-sidebar-vline"></div>
              {sidebarSections.map((s, i) => (
                <button
                  key={s.id}
                  className={`td-sidebar-node ${activeSection === i ? "td-node-active" : ""}`}
                  style={{ "--nc": s.color }}
                  onClick={() =>
                    panelRefs.current[i]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                >
                  <div className="td-node-ring">
                    <span className="td-node-num">{s.num}</span>
                  </div>
                  <div className="td-node-info">
                    <span className="td-node-title">{s.title}</span>
                    <span className="td-node-sub">{s.sub}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right: scrollable content panels */}
          <div className="td-panels">
            {sidebarSections.map((s, i) => (
              <div
                key={s.id}
                className="td-panel"
                ref={(el) => (panelRefs.current[i] = el)}
              >
                <motion.div
                  className="td-panel-text"
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <div className="td-panel-num" style={{ color: s.color }}>
                    {s.num}
                  </div>
                  <p className="td-eyebrow" style={{ color: s.color }}>
                    {s.sub}
                  </p>
                  <h2 className="td-panel-title">{s.title}</h2>
                  <p className="td-panel-desc">{s.desc}</p>
                  <ul className="td-panel-bullets">
                    {s.bullets.map((b, j) => (
                      <li key={j}>
                        <FiCheckCircle style={{ color: s.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="td-stat-chip"
                    style={{
                      borderColor: `${s.color}40`,
                      background: `${s.color}0c`,
                    }}
                  >
                    <span className="td-stat-big" style={{ color: s.color }}>
                      {s.stat.val}
                    </span>
                    <span className="td-stat-sub">{s.stat.sub}</span>
                  </div>
                </motion.div>

                <motion.div
                  className="td-panel-img"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <img src={s.image} alt={s.title} />
                  <div
                    className="td-panel-tint"
                    style={{ "--nc": s.color }}
                  ></div>
                  {/* Animated scan line over image */}
         
                  {/* Corner badge */}
                  <div
                    className="td-panel-corner-badge"
                    style={{
                      background: `${s.color}22`,
                      borderColor: `${s.color}50`,
                      color: s.color,
                    }}
                  >
                    {s.icon} Layer {s.num}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
            4. MITRE ATT&CK KILL CHAIN
            ════════════════════════════════════ */}
      <section className="td-kc-section">
        <div className="td-container">
          <motion.div
            className="td-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="td-eyebrow td-gradient-text">MITRE ATT&CK COVERAGE</p>
            <h2 className="td-section-title">
              We Block at Every Stage
              <br />
              of the Kill Chain
            </h2>
            <p className="td-section-desc">
              Coverage across all 14 MITRE ATT&CK tactics — from initial
              reconnaissance all the way through to ransomware impact.
            </p>
          </motion.div>
          <div className="td-kc-grid">
            {killChain.map((k, i) => (
              <motion.div
                key={i}
                className={`td-kc-card ${k.blocked ? "td-kc-blocked" : "td-kc-limited"}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="td-kc-phase-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="td-kc-phase-name">{k.phase}</div>
                <div className="td-kc-ttp">{k.ttp}</div>
                <p className="td-kc-desc">{k.desc}</p>
                <div
                  className={`td-kc-verdict ${k.blocked ? "" : "td-kc-verdict-lim"}`}
                >
                  {k.blocked ? (
                    <>
                      <FiCheck /> BLOCKED
                    </>
                  ) : (
                    <>
                      <FiShield /> LIMITED
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
            5. RESPONSE SLA GRID
            ════════════════════════════════════ */}
      <section className="td-sla-section">
        <div className="td-container">
          <motion.div
            className="td-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="td-eyebrow td-gradient-text">RESPONSE SLAs</p>
            <h2 className="td-section-title">
              Detection to Containment
              <br />
              in Under 30 Minutes
            </h2>
          </motion.div>
          <div className="td-sla-grid">
            {slaMetrics.map((m, i) => (
              <motion.div
                key={i}
                className="td-sla-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.09 }}
              >
                <div
                  className="td-sla-icon"
                  style={{
                    background: `${m.color}14`,
                    borderColor: `${m.color}30`,
                    color: m.color,
                  }}
                >
                  {m.icon}
                </div>
                <div className="td-sla-value td-gradient-text">{m.value}</div>
                <div className="td-sla-label">{m.label}</div>
                <div className="td-sla-sub">{m.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
            6. FREEZE BANNER
            ════════════════════════════════════ */}
      <section className="td-banner">
        <div className="td-banner-overlay"></div>
        <motion.div
          className="td-banner-card"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="td-eyebrow td-gradient-text">
            THE NUMBERS DON&apos;T LIE
          </p>
          <h2>
            Attackers Dwell an Average
            <br />
            <span className="td-gradient-text">197 Days Before Detection.</span>
          </h2>
          <p>
            We find them in under 4 minutes. Start your free threat hunt today.
          </p>
          <button
            className="td-primary-btn td-btn-lg"
            onClick={() => navigate("/contact")}
          >
            Get Free Threat Assessment <FiArrowRight />
          </button>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
            7. TESTIMONIAL
            ════════════════════════════════════ */}
      <section className="td-quote-section">
        <div className="td-container">
          <motion.div
            className="td-quote-card"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="td-quote-glow"></div>
            <FaQuoteLeft className="td-q-icon" />
            <blockquote>
              &quot;Devopstrio&apos;s threat detection caught a C2 beacon on our
              Kubernetes cluster in 8 minutes — a threat dormant for 11 days.
              Without their behavioural detection engine, we would have had a
              full ransomware incident. Their MTTD is genuinely unlike anything
              we&apos;ve seen from any other vendor.&quot;
            </blockquote>
            <div className="td-quote-author">
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80"
                alt="Arjun Mehta"
              />
              <div>
                <h4>Arjun Mehta</h4>
                <p>VP Infrastructure, FinCloud Technologies</p>
              </div>
              <div className="td-quote-metrics">
                <div className="td-qm">
                  <span className="td-gradient-text">8min</span>
                  <small>MTTD</small>
                </div>
                <div className="td-qm">
                  <span className="td-gradient-text">11d</span>
                  <small>Dwell Caught</small>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════
            8. FAQ — STICKY SPLIT
            ════════════════════════════════════ */}
      <section className="td-faq-section">
        <div className="td-container">
          <div className="td-faq-layout">
            <motion.div
              className="td-faq-left"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="td-eyebrow td-gradient-text">FAQ</p>
              <h2 className="td-faq-title">
                Threat Detection
                <br />
                <span className="td-gradient-text">— Answered.</span>
              </h2>
              <p className="td-faq-sub">
                Everything you need to know about our detection methodology,
                response speed, and coverage.
              </p>
              <button
                className="td-primary-btn"
                onClick={() => navigate("/contact")}
              >
                Talk to a Threat Analyst <FiArrowRight />
              </button>
            </motion.div>
            <div className="td-faq-right">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className={`td-faq-item ${openFaq === i ? "td-faq-open" : ""}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <button
                    className="td-faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <FiChevronDown />
                  </button>
                  <div className="td-faq-a">
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

export default ThreatDetection;
