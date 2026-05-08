import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useNavigate } from "react-router-dom";

import PlatformSectionhero from "../../components/Hero/PlatformSectionhero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

import {
  FiArrowRight,
  FiChevronDown,
  FiCheck,
  FiCheckCircle,
  FiZap,
  FiLayers,
  FiShield,
  FiGlobe,
  FiCpu,
  FiCode,
  FiBarChart2,
  FiUsers,
  FiPlay,
  FiStar,
  FiTrendingUp,
  FiServer,
  FiLock,
  FiCloud,
  FiBox,
  FiRefreshCw,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

{
  /* ----------------- Product Logo ----------------- */
}
import homela from "../../assets/images/homela.png";
import humanex from "../../assets/images/humanex.png";
import Campix from "../../assets/images/Campix.png";
import Caresuite from "../../assets/images/Caresuite.png";
import brio from "../../assets/images/brio.png";
import Justivon from "../../assets/images/Justivon.png";
import prestivo from "../../assets/images/Prestivo.png";
import safesign from "../../assets/images/safesign.png";

import "../../Style/platform/SaaSApplications.css";

/* ── Motion variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};


const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ── DATA ── */

const capabilities = [
  {
    id: "build",
    num: "01",
    icon: <FiCode />,
    title: "Custom SaaS Architecture",
    sub: "Design & Engineering",
    color: "#7d18d1",
    desc: "We architect multi-tenant SaaS platforms from the ground up — from data isolation strategies and schema-per-tenant models to shared-database approaches optimised for cost and performance at scale.",
    bullets: [
      "Multi-tenant data isolation (schema, row-level, DB-per-tenant)",
      "Event-driven microservices with Kafka / SQS",
      "API-first design with versioned REST & GraphQL endpoints",
      "Zero-downtime CI/CD pipeline with canary deployments",
    ],
    stat: { val: "10x", sub: "Faster Time to Market" },
    image:
      "/images/NewFolder/Groups_37.png",
  },
  {
    id: "scale",
    num: "02",
    icon: <FiCloud />,
    title: "Cloud-Native Scalability",
    sub: "Infrastructure at Scale",
    color: "#cd1979",
    desc: "Kubernetes-native deployments with auto-scaling, global CDN distribution, and edge-computed APIs. Your platform grows from 10 to 10 million users without architectural rewrites.",
    bullets: [
      "Kubernetes HPA / KEDA autoscaling",
      "Multi-region active-active deployments",
      "Global CDN with sub-50ms latency",
      "Cost-optimised spot/reserved instance strategy",
    ],
    stat: { val: "99.99%", sub: "Uptime SLA" },
    image:
      "/images/NewFolder/Groups_38.png",
  },
  {
    id: "secure",
    num: "03",
    icon: <FiLock />,
    title: "Enterprise Security Layer",
    sub: "Security & Compliance",
    color: "#d7134b",
    desc: "SOC 2 Type II ready from day one. Every platform we build includes RBAC, audit logging, SSO/SAML integration, encryption at rest and in transit, and continuous vulnerability scanning.",
    bullets: [
      "SOC 2 Type II & ISO 27001 readiness",
      "SAML 2.0 / OIDC SSO integration",
      "Field-level AES-256 encryption",
      "OWASP Top-10 hardening & pen testing",
    ],
    stat: { val: "SOC 2", sub: "Certified Ready" },
    image:
      "/images/NewFolder/Groups_42.png",
  },
  {
    id: "ai",
    num: "04",
    icon: <FiCpu />,
    title: "AI-Powered Features",
    sub: "Embedded Intelligence",
    color: "#ca2317",
    desc: "Embed LLMs, predictive analytics, and recommendation engines directly into your product. Our ML engineers integrate OpenAI, Anthropic, and custom fine-tuned models through clean, shippable APIs.",
    bullets: [
      "LLM integration (GPT-4, Claude, Gemini, custom)",
      "Real-time anomaly detection pipelines",
      "Recommendation & personalisation engines",
      "Natural language search across product data",
    ],
    stat: { val: "AI-first", sub: "Product Architecture" },
    image:
      "/images/NewFolder/Groups_32.png",
  },
  {
    id: "analytics",
    num: "05",
    icon: <FiBarChart2 />,
    title: "Product Analytics Suite",
    sub: "Data & Insights",
    color: "#c46d16",
    desc: "End-to-end event tracking, funnel analysis, cohort retention, and revenue dashboards embedded in your platform. Your customers get insights; you get the data to drive growth.",
    bullets: [
      "Mixpanel / Amplitude-style in-product analytics",
      "Custom metrics dashboards (revenue, churn, NRR)",
      "Real-time data warehouse (Snowflake / BigQuery)",
      "Automated weekly business review reports",
    ],
    stat: { val: "360°", sub: "Product Visibility" },
    image:
      "/images/NewFolder/Groups_33.png",
  },
];

const stats = [
  { val: "150+", lbl: "SaaS Products Shipped", icon: <FiBox /> },
  { val: "$2.8B", lbl: "Combined Platform ARR", icon: <FiTrendingUp /> },
  { val: "99.99%", lbl: "Avg Uptime SLA", icon: <FiShield /> },
  { val: "< 50ms", lbl: "Global API Latency", icon: <FiZap /> },
  { val: "10M+", lbl: "End Users Served", icon: <FiUsers /> },
  { val: "SOC 2", lbl: "Compliance Ready", icon: <FiLock /> },
];

// const tiers = [
//   {
//     name: "Startup",
//     price: "Custom",
//     tag: "MVP to $1M ARR",
//     color: "#7d18d1",
//     features: [
//       "Single-region deployment",
//       "Up to 10k MAU",
//       "Core SaaS architecture",
//       "CI/CD pipeline setup",
//       "Basic auth & RBAC",
//       "3-month dedicated squad",
//     ],
//     cta: "Get Started",
//   },
//   {
//     name: "Growth",
//     price: "Custom",
//     tag: "$1M–$20M ARR",
//     color: "#ce2453",
//     highlight: true,
//     features: [
//       "Multi-region failover",
//       "Up to 500k MAU",
//       "Full microservices platform",
//       "SAML SSO + MFA",
//       "In-product analytics",
//       "AI feature embedding",
//       "Dedicated SRE + 24/7 monitoring",
//     ],
//     cta: "Most Popular",
//   },
//   {
//     name: "Enterprise",
//     price: "Custom",
//     tag: "$20M+ ARR",
//     color: "#e79e57",
//     features: [
//       "Global active-active DC",
//       "Unlimited MAU",
//       "Custom compliance (SOC 2, HIPAA)",
//       "On-prem / VPC deployment",
//       "Dedicated ML engineering",
//       "White-glove onboarding",
//       "Named SRE team",
//     ],
//     cta: "Talk to Us",
//   },
// ];

const testimonials = [
  {
    quote:
      "Devopstrio built our entire multi-tenant billing engine from scratch in 4 months. We went from 0 to $4M ARR in the first year. Their architecture has scaled without a single rewrite.",
    name: "Priya Sharma",
    role: "CTO, Flowdesk SaaS",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
    metrics: [
      { val: "$4M", lbl: "ARR Y1" },
      { val: "0", lbl: "Rewrites" },
    ],
  },
  {
    quote:
      "We needed to embed AI search into our platform without a 12-month R&D project. Devopstrio shipped a production-grade LLM integration in 6 weeks. It's now our #1 retention driver.",
    name: "Marcus Chen",
    role: "VP Product, Lumenix",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    metrics: [
      { val: "6wk", lbl: "Shipped" },
      { val: "#1", lbl: "Retention Driver" },
    ],
  },
];

const faqs = [
  {
    q: "Do you build MVP SaaS products or only enterprise-scale platforms?",
    a: "Both. We've shipped lean MVPs in 8–12 weeks for early-stage startups, and we've rebuilt legacy monoliths into distributed SaaS platforms for Series C+ companies. The architecture scales with you — we don't over-engineer MVPs or under-engineer growth products.",
  },
  {
    q: "What cloud providers do you support?",
    a: "We are cloud-agnostic by design. We primarily build on AWS, Azure, and GCP — using managed services (EKS, AKS, GKE, RDS Aurora, Cloud SQL) where appropriate. Multi-cloud and hybrid architectures are standard in our enterprise engagements.",
  },
  {
    q: "How do you handle multi-tenancy and data isolation?",
    a: "We design for your data volume and compliance needs. Common models we implement: schema-per-tenant (PostgreSQL), row-level security (Postgres RLS), and database-per-tenant for enterprise accounts. The correct approach depends on your MAU count, compliance requirements, and query patterns.",
  },
  {
    q: "Can you integrate with our existing product?",
    a: "Yes. We frequently work as an extension of existing engineering teams via embedded squads. Our engineers have experience integrating with Stripe, HubSpot, Salesforce, Snowflake, Databricks, and most major SaaS API ecosystems.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Discovery (2 weeks) → Architecture Design (2 weeks) → Sprint 0 / Foundations (2 weeks) → Build Phase (8–16 sprints) → Hardening & Load Testing → Launch → Ongoing SRE. You get a named product lead, tech lead, and engineers from day one.",
  },
];

const TICKER_ITEMS = [
  { icon: <FiBox />, val: "150+", lbl: "Products Shipped", color: "#7d18d1" },
  {
    icon: <FiTrendingUp />,
    val: "$2.8B",
    lbl: "Combined ARR",
    color: "#cd1979",
  },
  { icon: <FiShield />, val: "99.99%", lbl: "Uptime SLA", color: "#ce2453" },
  { icon: <FiZap />, val: "< 50ms", lbl: "API Latency", color: "#dd5c54" },
  { icon: <FiUsers />, val: "10M+", lbl: "End Users", color: "#e79e57" },
  { icon: <FiRefreshCw />, val: "SOC 2", lbl: "Compliance", color: "#7d18d1" },
];

const OUR_PRODUCTS = [
  {
    name: "Homela",
    category: "PropTech · Real Estate",
    logo: homela,
    color: "#7d18d1",
    desc: "AI-powered property management SaaS that connects landlords, tenants, and agents on a unified platform with smart lease tracking and payment automation.",
    pills: ["AI-Powered", "Multi-tenant", "Real Estate"],
  },
  {
    name: "Humanex",
    category: "HRTech · People Ops",
    logo: humanex,
    color: "#cd1979",
    desc: "Enterprise HR platform for talent acquisition, onboarding, performance management, and workforce analytics built for modern distributed teams.",
    pills: ["HR Platform", "Workforce", "Analytics"],
  },
  {
    name: "Brio",
    category: "FinTech · Payments",
    logo: brio,
    color: "#ce2453",
    desc: "A next-generation payment orchestration platform enabling businesses to process, route, and reconcile transactions across multiple payment gateways seamlessly.",
    pills: ["Payments", "FinTech", "Multi-gateway"],
  },
  {
    name: "Prestivo",
    category: "EdTech · Learning",
    logo: prestivo,
    color: "#dd5c54",
    desc: "An adaptive learning management system delivering personalised education experiences powered by AI content recommendations and real-time progress tracking.",
    pills: ["EdTech", "AI Learning", "LMS"],
  },
  {
    name: "Campix",
    category: "MarTech · Campaigns",
    logo: Campix,
    color: "#e79e57",
    desc: "Unified campaign intelligence platform that empowers marketing teams to plan, execute, and analyse omnichannel campaigns with real-time attribution.",
    pills: ["MarTech", "Analytics", "Omnichannel"],
  },
  {
    name: "MediConnect",
    category: "HealthTech · Clinical",
    logo: Caresuite,
    color: "#7d18d1",
    desc: "HIPAA-compliant telehealth and clinical workflow SaaS connecting patients, clinicians, and labs with secure video, e-prescriptions, and EHR integration.",
    pills: ["HealthTech", "HIPAA", "Telehealth"],
  },
  {
    name: "SafeSign",
    category: "LegalTech · eSign",
    logo: safesign,
    color: "#cd1979",
    desc: "Enterprise e-signature and document lifecycle platform with advanced audit trails, multi-party workflows, and blockchain-anchored signature verification.",
    pills: ["LegalTech", "eSignature", "Blockchain"],
  },
  {
    name: "Justivon",
    category: "LegalTech · Case Mgmt",
    logo: Justivon,
    color: "#ce2453",
    desc: "End-to-end legal case management SaaS for law firms and corporate legal departments — from intake and discovery through billing and court filings.",
    pills: ["LegalTech", "Case Mgmt", "Law Firms"],
  },
];

/* ── COMPONENT ── */
const SaaSApplications = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [tickerPaused, setTickerPaused] = useState(false);
  // const [activeTier, setActiveTier] = useState(1);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const panelRefs = useRef([]);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  /* Scroll-spy */
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

  /* Auto-rotate testimonials */
  useEffect(() => {
    const t = setInterval(
      () => setActiveTestimonial((p) => (p + 1) % testimonials.length),
      5000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="sa-page">
      {/* ── FIXED BACKGROUND ── */}
      {/* <div className="sa-bg" aria-hidden="true">
        <div className="sa-orb sa-orb-1"></div>
        <div className="sa-orb sa-orb-2"></div>
        <div className="sa-orb sa-orb-3"></div>
        <div className="sa-dotgrid"></div>
        <div className="sa-noise"></div>
      </div> */}

      <PlatformSectionhero />

      {/* ════════════════════════════════════
          TICKER
          ════════════════════════════════════ */}
      <div
        className="sa-ticker"
        onMouseEnter={() => setTickerPaused(true)}
        onMouseLeave={() => setTickerPaused(false)}
      >
        <div className="sa-ticker-badge">
          <span className="sa-pulse-dot"></span>PLATFORM METRICS
        </div>
        <div className="sa-ticker-wrap">
          <div
            className={`sa-ticker-slider ${tickerPaused ? "sa-ticker-paused" : ""}`}
          >
            {[0, 1].map((c) => (
              <div key={c} className="sa-ticker-row" aria-hidden={c === 1}>
                {TICKER_ITEMS.map((s, i) => (
                  <div key={i} className="sa-tick-item">
                    <span style={{ color: s.color }}>{s.icon}</span>
                    <strong className="sa-grad-text">{s.val}</strong>
                    <span>{s.lbl}</span>
                    <span className="sa-tick-dot">·</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          1. HERO STATEMENT — Cinematic parallax
          ════════════════════════════════════ */}
      {/* <section className="sa-hero-statement" ref={heroRef}>
        <motion.div className="sa-hero-bg-img" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80"
            alt="SaaS Platform"
          />
          <div className="sa-hero-bg-tint"></div>
        </motion.div>
        <motion.div
          className="sa-container sa-hero-content"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="sa-eyebrow sa-grad-text"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            ENTERPRISE SAAS PLATFORM ENGINEERING
          </motion.p>
          <motion.h1
            className="sa-hero-title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            Build SaaS That
            <br />
            <span className="sa-grad-text">Scales Without Limits.</span>
          </motion.h1>
          <motion.p
            className="sa-hero-sub"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            From MVP to $100M ARR — we architect, build, and scale multi-tenant
            SaaS platforms for the worlds fastest-growing software companies.
          </motion.p>
          <motion.div
            className="sa-hero-btns"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <button
              className="sa-primary-btn sa-btn-lg"
              onClick={() => navigate("/contact")}
            >
              Start Your SaaS Build <FiArrowRight />
            </button>
            <button
              className="sa-ghost-btn sa-btn-lg"
              onClick={() => navigate("/contact")}
            >
              <FiPlay /> Watch Platform Demo
            </button>
          </motion.div>

          Floating metric chips
          <motion.div
            className="sa-hero-chips"
            variants={stagger}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            {[
              { v: "8–12 wks", l: "MVP to Production" },
              { v: "99.99%", l: "Uptime SLA" },
              { v: "SOC 2", l: "Certified" },
            ].map((c, i) => (
              <motion.div key={i} className="sa-chip" variants={fadeUp}>
                <strong className="sa-grad-text">{c.v}</strong>
                <span>{c.l}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section> */}

         {/* ════════════════════════════════════
          2. STATS ROW
          ════════════════════════════════════ */}
      <section className="sa-stats-section">
        <div className="sa-container">
          <motion.div
            className="sa-stats-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((s, i) => (
              <motion.div key={i} className="sa-stat-card" variants={fadeUp}>
                <div className="sa-stat-icon">{s.icon}</div>
                <div className="sa-stat-val sa-grad-text">{s.val}</div>
                <div className="sa-stat-lbl">{s.lbl}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════
          3. SIDEBAR NAV + 5 CAPABILITY PANELS
          ════════════════════════════════════ */}
      <section className="sa-caps-section">
        <div className="sa-container sa-caps-grid">
          {/* Sticky sidebar */}
          <div className="sa-sidebar">
            <div className="sa-sidebar-label">Capabilities</div>
            <div className="sa-sidebar-track">
              <div className="sa-sidebar-vline"></div>
              {capabilities.map((c, i) => (
                <button
                  key={c.id}
                  className={`sa-sidebar-node ${activeSection === i ? "sa-node-active" : ""}`}
                  style={{ "--nc": c.color }}
                  onClick={() =>
                    panelRefs.current[i]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                >
                  <div className="sa-node-ring">
                    <span className="sa-node-num">{c.num}</span>
                  </div>
                  <div className="sa-node-info">
                    <span className="sa-node-title">{c.title}</span>
                    <span className="sa-node-sub">{c.sub}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable panels */}
          <div className="sa-panels">
            {capabilities.map((c, i) => (
              <div
                key={c.id}
                className="sa-panel"
                ref={(el) => (panelRefs.current[i] = el)}
              >
                <motion.div
                  className="sa-panel-text"
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <div className="sa-panel-num" style={{ color: c.color }}>
                    {c.num}
                  </div>
                  <p className="sa-eyebrow" style={{ color: c.color }}>
                    {c.sub}
                  </p>
                  <h2 className="sa-panel-title">{c.title}</h2>
                  <p className="sa-panel-desc">{c.desc}</p>
                  <ul className="sa-panel-bullets">
                    {c.bullets.map((b, j) => (
                      <li key={j}>
                        <FiCheckCircle style={{ color: c.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="sa-stat-chip"
                    style={{
                      borderColor: `${c.color}40`,
                      background: `${c.color}0d`,
                    }}
                  >
                    <span
                      className="sa-stat-chip-val"
                      style={{ color: c.color }}
                    >
                      {c.stat.val}
                    </span>
                    <span className="sa-stat-chip-sub">{c.stat.sub}</span>
                  </div>
                </motion.div>

                <div className="sa-panel-img">
                  <img src={c.image} alt={c.title} />
                  <div
                    className="sa-panel-badge"
                    style={{
                      background: `${c.color}22`,
                      borderColor: `${c.color}50`,
                      color: c.color,
                    }}
                  >
                    {c.icon} Layer {c.num}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          4. OUR PRODUCTS
          ════════════════════════════════════ */}
      <section className="sa-products-section">
        <div className="sa-container">
          <motion.div
            className="sa-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="sa-eyebrow sa-grad-text">OUR SAAS PORTFOLIO</p>
            <h2 className="sa-section-title">
              Products We&rsquo;ve
              <br />
              <span className="sa-grad-text">Built & Powered.</span>
            </h2>
            <p className="sa-section-desc">
              From HR platforms to healthcare — our SaaS products are trusted by
              enterprises across industries.
            </p>
          </motion.div>

          <motion.div
            className="sa-products-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {OUR_PRODUCTS.map((p, i) => (
              <motion.div
                key={i}
                className="sa-product-card"
                style={{ "--pc": p.color }}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="sa-product-glow"></div>
                <div
                  className="sa-product-top-line"
                  style={{ background: p.color }}
                ></div>
                <div className="sa-product-logo-wrap">
                  {p.logo ? (
                    <img
                      src={p.logo}
                      alt={p.name}
                      className="sa-product-logo"
                    />
                  ) : (
                    <div
                      className="sa-product-logo-text"
                      style={{ color: p.color }}
                    >
                      {p.name.slice(0, 2).toUpperCase()}
                    </div>
                  )}
                </div>
                <div
                  className="sa-product-tag"
                  style={{
                    color: p.color,
                    borderColor: `${p.color}30`,
                    background: `${p.color}10`,
                  }}
                >
                  {p.category}
                </div>
                <h3 className="sa-product-name">{p.name}</h3>
                <p className="sa-product-desc">{p.desc}</p>
                <div className="sa-product-footer">
                  {p.pills.map((pill, j) => (
                    <span key={j} className="sa-product-pill">
                      {pill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════
          5. CINEMATIC FULL-WIDTH BANNER
          ════════════════════════════════════ */}
      <section
        className="sa-cinematic-banner"
        style={{
          "--sa-cinematic-img":
            'url("/images/New/BG_SaaS.jpg")',
        }}
        aria-label="Platform"
      >
        <div className="sa-cinematic-bg" aria-hidden="true">
          <div className="sa-cinematic-overlay"></div>
        </div>
        <div className="sa-container sa-cinematic-content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="sa-eyebrow sa-grad">FUTURE PROOF MLOPS</p>
            <h2 className="sa-cinematic-title">
              Data is the fuel
              <br />
              <span className="sa-grad-text">Ops is the Engine</span>
            </h2>
            <p className="sa-cinematic-sub">
              Your models should not slowly degrade in the dark. Our
              architectures automatically monitor, retrain, and log predictions,
              maintaining peak accuracy eternally.
            </p>
            <button
              className="sa-primary-btn sa-btn-lg"
              onClick={() => navigate("/contact")}
            >
              Architect Your Platform <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════
          5. PRICING TIERS
          ════════════════════════════════════ */}
      {/* <section className="sa-pricing-section">
        <div className="sa-container">
          <motion.div
            className="sa-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="sa-eyebrow sa-grad-text">ENGAGEMENT MODELS</p>
            <h2 className="sa-section-title">Choose Your Scale</h2>
            <p className="sa-section-desc">
              Every engagement is scoped to your stage. No bloated retainers —
              no under-resourced projects.
            </p>
          </motion.div>
          <div className="sa-tiers-grid">
            {tiers.map((t, i) => (
              <motion.div
                key={i}
                className={`sa-tier-card ${t.highlight ? "sa-tier-highlight" : ""} ${activeTier === i ? "sa-tier-active" : ""}`}
                style={{ "--tc": t.color }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                onClick={() => setActiveTier(i)}
              >
                {t.highlight && (
                  <div className="sa-tier-popular">MOST POPULAR</div>
                )}
                <div
                  className="sa-tier-top-line"
                  style={{ background: t.color }}
                ></div>
                <div className="sa-tier-name">{t.name}</div>
                <div className="sa-tier-price">{t.price}</div>
                <div className="sa-tier-tag">{t.tag}</div>
                <ul className="sa-tier-features">
                  {t.features.map((f, j) => (
                    <li key={j}>
                      <FiCheck style={{ color: t.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  className="sa-tier-btn"
                  style={{
                    background: t.highlight ? t.color : "transparent",
                    borderColor: t.color,
                    color: t.highlight ? "#fff" : t.color,
                  }}
                  onClick={() => navigate("/contact")}
                >
                  {t.cta} <FiArrowRight />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ════════════════════════════════════
          6. TESTIMONIAL SLIDER
          ════════════════════════════════════ */}
      <section className="sa-testimonial-section">
        <div className="sa-container">
          <motion.div
            className="sa-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="sa-eyebrow sa-grad-text">CLIENT OUTCOMES</p>
            <h2 className="sa-section-title">
              What Our Clients
              <br />
              <span className="sa-grad-text">Actually Say.</span>
            </h2>
          </motion.div>
          <div className="sa-testimonial-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                className="sa-testimonial-card"
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
              >
                <div className="sa-t-glow"></div>
                <FaQuoteLeft className="sa-q-icon" />
                <blockquote>{testimonials[activeTestimonial].quote}</blockquote>
                <div className="sa-t-author">
                  <img
                    src={testimonials[activeTestimonial].img}
                    alt={testimonials[activeTestimonial].name}
                  />
                  <div>
                    <h4>{testimonials[activeTestimonial].name}</h4>
                    <p>{testimonials[activeTestimonial].role}</p>
                  </div>
                  <div className="sa-t-metrics">
                    {testimonials[activeTestimonial].metrics.map((m, i) => (
                      <div key={i} className="sa-t-metric">
                        <span className="sa-grad-text">{m.val}</span>
                        <small>{m.lbl}</small>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            {/* Dots */}
            <div className="sa-slider-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`sa-dot ${activeTestimonial === i ? "sa-dot-active" : ""}`}
                  onClick={() => setActiveTestimonial(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          7. TRUSTED LOGOS STRIP
          ════════════════════════════════════ */}
      <section className="sa-logos-section">
        <div className="sa-container">
          <p className="sa-logos-label">TRUSTED BY ENGINEERING TEAMS FROM</p>
          <div className="sa-logos-track">
            {[
              "Microsoft Azure",
              "AWS",
              "Google Cloud",
              "Stripe",
              "Twilio",
              "Datadog",
              "Snowflake",
              "MongoDB",
            ].map((l, i) => (
              <div key={i} className="sa-logo-item">
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          8. FAQ
          ════════════════════════════════════ */}
      <section className="sa-faq-section">
        <div className="sa-container">
          <div className="sa-faq-layout">
            <motion.div
              className="sa-faq-left"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="sa-eyebrow sa-grad-text">FAQ</p>
              <h2 className="sa-faq-title">
                SaaS Platform
                <br />
                <span className="sa-grad-text">Questions — Answered.</span>
              </h2>
              <p className="sa-faq-sub">
                Everything you need to know about how we architect, build, and
                scale your SaaS product.
              </p>
              <button
                className="sa-primary-btn"
                onClick={() => navigate("/contact")}
              >
                Talk to an Architect <FiArrowRight />
              </button>
            </motion.div>
            <div className="sa-faq-right">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className={`sa-faq-item ${openFaq === i ? "sa-faq-open" : ""}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <button
                    className="sa-faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <FiChevronDown />
                  </button>
                  <div className="sa-faq-a">
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

export default SaaSApplications;
