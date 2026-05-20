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
  FiCloud,
  FiServer,
  FiDatabase,
  FiCode,
  FiShield,
  FiCpu,
  FiGlobe,
  FiActivity,
  FiTrendingUp,
  FiMonitor,
  FiChevronRight,
  FiChevronLeft,
  FiPlay,
  FiUsers,
  FiPackage,
  FiBarChart2,
  FiLayers,
  FiExternalLink,
  FiCommand,
} from "react-icons/fi";
import "../../Style/partners/GCPPartners.css";
import gcpVideo from "../../assets/images/Partner/GCP_Original.mp4";

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
  "Google Cloud Premier Partner",
  "Vertex AI",
  "BigQuery",
  "Cloud Run",
  "GKE",
  "Firebase",
  "Cloud Armor",
  "Apigee",
  "Anthos",
  "AlloyDB",
  "Pub/Sub",
  "Cloud Spanner",
  "Looker Studio",
  "Cloud Build",
  "Dataflow",
  "Eventarc",
];

const TABS = [
  { id: "infra", label: "Infrastructure", icon: <FiServer /> },
  { id: "data", label: "Data & Analytics", icon: <FiDatabase /> },
  { id: "ai", label: "AI & Machine Learning", icon: <FiCpu /> },
  { id: "security", label: "Security", icon: <FiShield /> },
  { id: "devops", label: "DevOps & CI/CD", icon: <FiCode /> },
  { id: "app", label: "App Modernisation", icon: <FiLayers /> },
];

const TAB_CONTENT = {
  infra: {
    headline: "Cloud Infrastructure at Enterprise Scale",
    body: "We design, migrate, and manage hyper-scale infrastructure on GCP — using Terraform, Config Connector, and Anthos to deliver consistent environments across cloud and on-prem.",
    points: [
      "Google Cloud Landing Zones",
      "Hub-spoke VPC with Shared VPC",
      "GKE Autopilot clusters",
      "Cloud NAT & Identity-Aware Proxy",
      "95% migration success rate",
    ],
    img: "/images/Ecosystem/infrastructure.png",
    color: "#ce2453",
  },
  data: {
    headline: "Data Platform & Analytics",
    body: "From raw ingestion to boardroom dashboards — BigQuery, Dataflow, Pub/Sub and Looker form the backbone of our cloud-native data estates.",
    points: [
      "BigQuery multi-region data warehouses",
      "Dataflow streaming pipelines",
      "Pub/Sub event-driven architectures",
      "Looker embedded analytics",
      "Data Catalog & data quality",
    ],
    img: "/images/Ecosystem/Data_&_analytics.png",
    color: "#e79e57",
  },
  ai: {
    headline: "Vertex AI & Generative AI",
    body: "We build production LLM applications on Vertex AI — RAG pipelines, fine-tuning Gemini, model gardens, and AI safety guardrails for regulated industries.",
    points: [
      "Vertex AI Agent Builder",
      "Gemini on Google Cloud",
      "RAG pipelines with AlloyDB",
      "Model monitoring & drift detection",
      "Responsible AI frameworks",
    ],
    img: "/images/Ecosystem/AI_&_Machine_Learning.png",
    color: "#962964",
  },
  security: {
    headline: "Chronicle SIEM & Cloud Security",
    body: "We protect GCP environments end-to-end — from Identity and BeyondCorp Zero Trust to Chronicle SIEM and Security Command Center at enterprise scale.",
    points: [
      "Security Command Center Premium",
      "Chronicle SIEM & SOAR",
      "BeyondCorp Enterprise (Zero Trust)",
      "VPC Service Controls",
      "Cloud Armor WAF & DDoS",
    ],
    img: "/images/Ecosystem/Security_2.png",
    color: "#522c72",
  },
  devops: {
    headline: "Google Cloud DevOps & Platform Engineering",
    body: "Accelerate delivery with Cloud Build, Cloud Deploy, and Artifact Registry — tightly integrated with GitHub Actions and modern platform engineering practices.",
    points: [
      "Cloud Build + Cloud Deploy pipelines",
      "GKE GitOps with Config Sync",
      "Artifact Registry & Binary Auth",
      "DORA metrics dashboards",
      "SRE tooling & error budgets",
    ],
    img: "/images/Ecosystem/DevOps_&_CI_CD.png",
    color: "#dd5c54",
  },
  app: {
    headline: "App Modernisation & Serverless",
    body: "Break the monolith — Cloud Run, App Engine, and Firebase give your teams deployment speed without infra toil, matched with Apigee for API governance.",
    points: [
      "Cloud Run containerised workloads",
      "Firebase Realtime + Firestore",
      "Apigee API Management",
      "Microservices with Eventarc",
      "Anthos multi-cloud portability",
    ],
    img: "/images/Ecosystem/App_mordanization.png",
    color: "#ce2453",
  },
};

const SOLUTIONS = [
  {
    icon: <FiCloud />,
    title: "GCP Landing Zone",
    desc: "Foundation blueprint — org structure, VPC design, IAM, budgets and policy guardrails with Terraform.",
    color: "#522c72",
    moreDetails: [
      "Org & Folder hierarchy",
      "Shared VPC networking",
      "IAM Policy Guardrails",
      "Cloud Billing & Budgets",
    ],
  },
  {
    icon: <FiCpu />,
    title: "Vertex AI Platform",
    desc: "End-to-end ML lifecycle — training, serving, monitoring, Gemini fine-tuning, and responsible AI.",
    color: "#962964",
    moreDetails: [
      "Gemini Model fine-tuning",
      "MLOps on Vertex AI Pipelines",
      "Model Monitoring & drift",
      "Vector Search & RAG setup",
    ],
  },
  {
    icon: <FiDatabase />,
    title: "BigQuery Data Warehouse",
    desc: "Petabyte-scale analytics with streaming ingestion, ML-in-database, and Looker for self-serve BI.",
    color: "#ce2453",
    moreDetails: [
      "Streaming Ingestion setup",
      "BigQuery ML modeling",
      "Looker BI dashboards",
      "Data Governance (Dataplex)",
    ],
  },
  {
    icon: <FiShield />,
    title: "Chronicle SecOps",
    desc: "Google-scale threat intelligence, SIEM/SOAR, and Security Command Centre for GCP estates.",
    color: "#dd5c54",
    moreDetails: [
      "SIEM / SOAR automation",
      "Threat Intel integration",
      "SCC Enterprise setup",
      "VPC Service Controls",
    ],
  },
  {
    icon: <FiCode />,
    title: "Cloud Native CI/CD",
    desc: "Cloud Build, Cloud Deploy, Artifact Registry, and Binary Authorisation for secure supply chain.",
    color: "#e79e57",
    moreDetails: [
      "Cloud Build pipelines",
      "Canary / Blue-Green deploys",
      "Binary Authorization",
      "Artifact Registry setup",
    ],
  },
  {
    icon: <FiServer />,
    title: "GKE Enterprise",
    desc: "Production-grade Kubernetes — Autopilot, multi-cluster fleet, Anthos Service Mesh, and KEDA.",
    color: "#522c72",
    moreDetails: [
      "GKE Autopilot setup",
      "Anthos Multi-cluster fleet",
      "Service Mesh (Istio)",
      "Autoscaling with KEDA",
    ],
  },
  {
    icon: <FiGlobe />,
    title: "Multi-Region & HA",
    desc: "Global load balancing, Cloud CDN, Anycast, and disaster recovery across GCP regions.",
    color: "#962964",
    moreDetails: [
      "Global Load Balancing",
      "Cloud CDN integration",
      "Cross-region DR patterns",
      "Cloud DNS & Anycast",
    ],
  },
  {
    icon: <FiActivity />,
    title: "Observability Stack",
    desc: "Cloud Monitoring, Cloud Trace, Error Reporting, and Grafana Cloud integration for full-stack ops.",
    color: "#ce2453",
    moreDetails: [
      "Cloud Monitoring alerts",
      "Cloud Trace & Profiler",
      "Error Reporting setup",
      "Grafana/Prometheus link",
    ],
  },
  {
    icon: <FiPackage />,
    title: "Serverless & Event-Driven",
    desc: "Cloud Run, Cloud Functions Gen2, Pub/Sub, Eventarc — build event-driven systems without managing servers.",
    color: "#dd5c54",
    moreDetails: [
      "Cloud Run deployments",
      "Cloud Functions Gen 2",
      "Pub/Sub messaging",
      "Eventarc architectures",
    ],
  },
];

const CASE_STUDIES = [
  {
    tag: "Cloud Migration",
    company: "RetailCo",
    metric: "72% infra cost reduction",
    title:
      "Migrated 3 legacy data centres to GCP in 14 weeks — zero downtime during peak sale season",
    color: "#ce2453",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80",
  },
  {
    tag: "Vertex AI",
    company: "FinServ UK",
    metric: "9X faster model training",
    title:
      "Replaced on-prem ML infra with Vertex AI — Gemini-powered risk scoring live in production in 30 days",
    color: "#962964",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=900&q=80",
  },
  {
    tag: "Data Platform",
    company: "HealthTech",
    metric: "14TB → 1.2PB data estate",
    title:
      "Built an NHS-compliant BigQuery data lake serving 28 analytics teams across 4 hospital trusts",
    color: "#e79e57",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80",
  },
];

const NEWS = [
  {
    tag: "Blog",
    date: "Feb 18, 2025",
    title:
      "Gemini on Vertex AI in Production: 6 Things We Learned the Hard Way",
    read: "8 min",
    color: "#ce2453",
  },
  {
    tag: "Case Study",
    date: "Feb 5, 2025",
    title: "How We Cut BigQuery Costs by 61% Without Losing Query Speed",
    read: "6 min",
    color: "#962964",
  },
  {
    tag: "Deep Dive",
    date: "Jan 22, 2025",
    title:
      "GKE Autopilot vs Standard: When to Choose Each (Benchmark Data Inside)",
    read: "10 min",
    color: "#e79e57",
  },
];

const STATS = [
  { val: "6+", lbl: "GCP Specialisations", icon: <FiStar /> },
  { val: "300+", lbl: "GCP-Certified Engineers", icon: <FiUsers /> },
  { val: "1400+", lbl: "Cloud Deployments", icon: <FiZap /> },
  { val: "99.9%", lbl: "Uptime SLA Delivered", icon: <FiActivity /> },
];

/* ─── Particle hook ─── */
function useParticles(count = 42) {
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
function Counter({ to, suffix = "" }) {
  const [val, setVal] = useState(0);
  const ref = useRef();
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(to.replace(/[^0-9.]/g, ""));
    const isFloat = to.includes(".");
    let frame;
    const start = Date.now();
    const dur = 1800;
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / dur, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = isFloat
        ? (num * ease).toFixed(1)
        : Math.floor(num * ease);
      setVal(current + to.replace(/[0-9.]/g, ""));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to]);
  return (
    <span ref={ref}>{inView ? val : "0" + to.replace(/[0-9.]/g, "")}</span>
  );
}

/* ════════════════════════════════════════
   COMPONENT
════════════════════════════════════════ */
const GCPPartners = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ai");
  const [caseIdx, setCaseIdx] = useState(0);
  const [expandedSol, setExpandedSol] = useState(null); // Track expanded card index
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [newsIdx, setNewsIdx] = useState(0);

  /* Scroll-driven hero parallax */
  const heroRef = useRef();
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);
  const heroOp = useTransform(heroScroll, [0, 0.7], [1, 0]);

  /* Scroll-driven section reveal */
  const marqueeRef = useRef();

  const prevCase = () =>
    setCaseIdx((i) => (i - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  const nextCase = () => setCaseIdx((i) => (i + 1) % CASE_STUDIES.length);

  const c = CASE_STUDIES[caseIdx];
  const n = NEWS[newsIdx];
  const tab = TAB_CONTENT[activeTab];

  return (
    <div className="gcp-page">
      {/* ════════ 1. HERO ════════ */}
      <section className="gcp-hero" ref={heroRef}>
        {/* parallax BG image */}
        <motion.div className="gcp-hero-bg" style={{ y: heroY }}>
          <div className="gcp-hero-bg-overlay" />
        </motion.div>

        <motion.div
          className="gcp-container gcp-hero-inner"
          style={{ opacity: heroOp }}
        >
          <motion.div
            className="gcp-hero-content"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {/* Badge — Google Cloud colours */}
            <motion.div
              className="gcp-badge"
              variants={scaleIn}
              style={{
                background: "rgba(66,133,244,.07)",
                borderColor: "rgba(66,133,244,.24)",
              }}
            >
              {/* Google 'G' logo SVG */}
              <div
                className="gcp-badge-logo"
                style={{
                  background: "rgba(13, 99, 236, 1)",
                  padding: "6px",
                  color: "#000",
                  fontWeight: "bold",
                  fontSize: "12px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <h4 className="text-black">GCB</h4>
              </div>
              <div className="gcp-badge-text">
                <strong style={{ color: "#fff" }}>
                  Google Cloud Premier Partner
                </strong>
                <span>6 Specialisations · 300+ Engineers · Since 2017</span>
              </div>
              <div
                className="gcp-badge-verified"
                style={{ background: "rgba(66,133,244,.14)", color: "#4285F4" }}
              >
                <FiCheck />
              </div>
            </motion.div>

            <motion.h1 className="gcp-hero-h1" variants={fadeUp}>
              <span className="gcp-brand">Devopstrio& </span>
              <span className="gcp-grad">Google Cloud</span>
            </motion.h1>

            <motion.p className="gcp-hero-sub" variants={fadeUp}>
              Transforming enterprises with Google Cloud AI, data analytics, and
              cloud-native infrastructure — backed by Premier Partnership status
              and 1,400+ successful deployments.
            </motion.p>

            <motion.div className="gcp-hero-cta" variants={fadeUp}>
              <button
                className="gcp-btn-primary gcp-btn-lg"
                onClick={() => navigate("/contact")}
              >
                Talk to GCP Experts <FiArrowRight />
              </button>
            </motion.div>

            {/* floating stat chips */}
            <motion.div className="gcp-hero-chips" variants={stagger}>
              {STATS.slice(0, 3).map((s, i) => (
                <motion.div key={i} className="gcp-chip" variants={scaleIn}>
                  <span className="gcp-chip-icon">{s.icon}</span>
                  <span className="gcp-chip-val">{s.val}</span>
                  <span className="gcp-chip-lbl">{s.lbl}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — video card */}
          <motion.div
            className="gcp-hero-media"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
          >
            <div className="gcp-video-card" onClick={() => !videoPlaying && setVideoPlaying(true)}>
              {videoPlaying ? (
                <video
                  src={gcpVideo}
                  className="gcp-video-player"
                  controls
                  autoPlay
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80"
                    alt="Google Cloud Platform"
                    className="gcp-video-img"
                  />
                  <div className="gcp-video-tint" />
                  <button className="gcp-play" aria-label="Play overview">
                    <FiPlay />
                    <div className="gcp-play-ring" />
                  </button>
                  <div className="gcp-video-pill">
                    <span className="gcp-dot" />
                    GCP Partnership Overview · 4:28
                  </div>
                </>
              )}
              {/* floating metric card */}
              <motion.div
                className="gcp-float-card"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: "easeInOut",
                }}
              >
                <FiTrendingUp />
                <div>
                  <strong>1,400+</strong>
                  <span>GCP Deployments</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ════════ 2. MARQUEE TICKER ════════ */}
      <div className="gcp-marquee-band" ref={marqueeRef}>
        <div className="gcp-marquee-track">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className="gcp-marquee-item">
              <span className="gcp-marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ════════ 3. PARTNERSHIP BANNER ════════ */}
      <section className="gcp-banner-section">
        <div className="gcp-container">
          <motion.div
            className="gcp-banner-box"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="gcp-banner-glow" />
            <motion.p className="gcp-eyebrow gcp-grad" variants={fadeUp}>
              Premier Status
            </motion.p>
            <motion.h2 className="gcp-banner-h2" variants={fadeUp}>
              Powering the Next Wave of
              <br />
              <span className="gcp-grad">Cloud Innovation</span>
            </motion.h2>
            <motion.p className="gcp-banner-sub" variants={fadeUp}>
              As a Google Cloud Premier Partner, we combine the deepest
              technical certifications — Vertex AI, Security, Data Analytics,
              Infrastructure — with proven delivery across 28 countries.
            </motion.p>
            <motion.div className="gcp-banner-badges" variants={stagger}>
              {[
                "Premier Partner",
                "Vertex AI Specialist",
                "Chronicle SecOps",
                "Data Analytics",
              ].map((b, i) => (
                <motion.span
                  key={i}
                  className="gcp-banner-badge"
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
      <section className="gcp-stats-section">
        <div className="gcp-container">
          <motion.div
            className="gcp-stats-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STATS.map((s, i) => (
              <motion.div key={i} className="gcp-stat-card" variants={fadeUp}>
                <div className="gcp-stat-icon">{s.icon}</div>
                <div className="gcp-stat-val">
                  <Counter to={s.val} />
                </div>
                <div className="gcp-stat-lbl">{s.lbl}</div>
                <div className="gcp-stat-line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ 5. SIDEBAR TAB SECTION ════════ */}
      <section className="gcp-tab-section">
        <div className="gcp-container">
          <motion.div
            className="gcp-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="gcp-eyebrow gcp-grad">Deep Expertise</p>
            <h2 className="gcp-sec-h2">
              Our Google Cloud
              <br />
              <span className="gcp-grad">Practice Areas</span>
            </h2>
            <p className="gcp-sec-sub">
              Six specialist GCP practice areas — each with dedicated
              engineering teams, reference architectures, and certified delivery
              leads.
            </p>
          </motion.div>

          <div className="gcp-tab-layout">
            {/* Sidebar */}
            <motion.div
              className="gcp-tab-sidebar"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {TABS.map((t) => (
                <button
                  key={t.id}
                  className={`gcp-tab-btn ${activeTab === t.id ? "on" : ""}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  <span className="gcp-tab-btn-icon">{t.icon}</span>
                  <span className="gcp-tab-btn-label">{t.label}</span>
                  <FiChevronRight className="gcp-tab-arrow" />
                  <div
                    className="gcp-tab-bar"
                    style={{ "--tc": TAB_CONTENT[t.id].color }}
                  />
                </button>
              ))}
            </motion.div>

            {/* Content panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="gcp-tab-panel"
                initial={{ opacity: 0, x: 40 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={{ opacity: 0, x: -30, transition: { duration: 0.28 } }}
                style={{ "--tc": tab.color }}
              >
                <div className="gcp-tab-img-wrap">
                  <img src={tab.img} alt={tab.headline} />
                  <div
                    className="gcp-tab-img-overlay"
                    style={{ "--tc": tab.color }}
                  />
                  <div
                    className="gcp-tab-img-label"
                    style={{ borderColor: tab.color, color: tab.color }}
                  >
                    {TABS.find((t) => t.id === activeTab)?.icon}
                    {TABS.find((t) => t.id === activeTab)?.label}
                  </div>
                </div>
                <div className="gcp-tab-body">
                  <h3 className="gcp-tab-h3" style={{ color: tab.color }}>
                    {tab.headline}
                  </h3>
                  <p className="gcp-tab-p">{tab.body}</p>
                  <ul className="gcp-tab-points">
                    {tab.points.map((pt, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: 18 }}
                        animate={{
                          opacity: 1,
                          x: 0,
                          transition: { delay: i * 0.08, duration: 0.4 },
                        }}
                      >
                        <span
                          className="gcp-tab-check"
                          style={{ background: tab.color }}
                        >
                          <FiCheck />
                        </span>
                        {pt}
                      </motion.li>
                    ))}
                  </ul>
                  <button
                    className="gcp-btn-primary"
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

      {/* ════════ 6. SOLUTIONS MEGA GRID ════════ */}
      <section className="gcp-solutions-section">
        <div className="gcp-container">
          <motion.div
            className="gcp-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="gcp-eyebrow gcp-grad">What We Build</p>
            <h2 className="gcp-sec-h2">
              Offerings &amp;
              <br />
              <span className="gcp-grad">Solutions</span>
            </h2>
            <p className="gcp-sec-sub">
              Nine production-proven GCP solution areas — each backed by
              reference architectures, certified teams, and measurable client
              outcomes.
            </p>
          </motion.div>
          <motion.div
            className="gcp-solutions-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {SOLUTIONS.map((s, i) => {
              const isExpanded = expandedSol === i;
              return (
                <motion.div
                  key={i}
                  layout
                  className={`gcp-solution-card ${isExpanded ? "expanded" : ""}`}
                  variants={fadeUp}
                  whileHover={!isExpanded ? { y: -7 } : {}}
                  style={{ "--sc": s.color }}
                  onClick={() => setExpandedSol(isExpanded ? null : i)}
                >
                  <div
                    className="gcp-solution-icon"
                    style={{
                      color: s.color,
                      background: `${s.color}10`,
                      borderColor: `${s.color}20`,
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="gcp-solution-title">{s.title}</h3>
                  <p className="gcp-solution-desc">{s.desc}</p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        className="gcp-solution-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <ul className="gcp-solution-list">
                          {s.moreDetails.map((detail, idx) => (
                            <li key={idx}>
                              <FiCheck style={{ color: s.color }} />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <button
                          className="gcp-solution-btn"
                          style={{ backgroundColor: s.color }}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate("/contact");
                          }}
                        >
                          Enquire Now
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="gcp-solution-arrow">
                    <FiChevronRight
                      style={{
                        transform: isExpanded ? "rotate(90deg)" : "none",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  <div className="gcp-solution-bar" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════ 7. CASE STUDIES SLIDER ════════ */}
      <section className="gcp-cases-section">
        <div className="gcp-container">
          <motion.div
            className="gcp-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="gcp-eyebrow gcp-grad">Client Success</p>
            <h2 className="gcp-sec-h2">
              Impact <span className="gcp-grad">Stories</span>
            </h2>
          </motion.div>

          <div className="gcp-case-slider">
            <AnimatePresence mode="wait">
              <motion.div
                key={caseIdx}
                className="gcp-case-card"
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
                style={{ "--cc": c.color }}
              >
                <div className="gcp-case-img-wrap">
                  <img src={c.img} alt={c.title} />
                  <div
                    className="gcp-case-overlay"
                    style={{ "--cc": c.color }}
                  />
                  <div
                    className="gcp-case-tag"
                    style={{
                      color: c.color,
                      borderColor: `${c.color}30`,
                      background: `${c.color}10`,
                    }}
                  >
                    {c.tag}
                  </div>
                </div>
                <div className="gcp-case-body">
                  <div className="gcp-case-company">{c.company}</div>
                  <h3 className="gcp-case-title">{c.title}</h3>
                  <div
                    className="gcp-case-metric"
                    style={{
                      borderColor: `${c.color}30`,
                      background: `${c.color}08`,
                    }}
                  >
                    <FiTrendingUp style={{ color: c.color }} />
                    {c.metric}
                  </div>
                  <button
                    className="gcp-btn-primary"
                    style={{ "--bc": c.color }} onClick={() => navigate("/clients")}
                  >
                    Read Full Story <FiArrowRight />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="gcp-slider-controls">
              <button className="gcp-ctrl-btn" onClick={prevCase}>
                <FiChevronLeft />
              </button>
              <div className="gcp-ctrl-dots">
                {CASE_STUDIES.map((_, i) => (
                  <button
                    key={i}
                    className={`gcp-dot-btn ${caseIdx === i ? "on" : ""}`}
                    style={
                      caseIdx === i ? { background: CASE_STUDIES[i].color } : {}
                    }
                    onClick={() => setCaseIdx(i)}
                  />
                ))}
              </div>
              <button className="gcp-ctrl-btn" onClick={nextCase}>
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ 8. NEWS & INSIGHTS ════════ */}
      <section className="gcp-news-section">
        <div className="gcp-container">
          <motion.div
            className="gcp-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="gcp-eyebrow gcp-grad">From the Field</p>
            <h2 className="gcp-sec-h2">
              News &amp; <span className="gcp-grad">Insights</span>
            </h2>
          </motion.div>
          <div className="gcp-news-layout">
            <AnimatePresence mode="wait">
              <motion.div
                key={newsIdx}
                className="gcp-news-featured"
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.28 } }}
                style={{ "--nc": n.color }}
              >
                <div
                  className="gcp-news-tag"
                  style={{
                    color: n.color,
                    background: `${n.color}10`,
                    borderColor: `${n.color}25`,
                  }}
                >
                  {n.tag}
                </div>
                <p className="gcp-news-date">{n.date}</p>
                <h3 className="gcp-news-title">{n.title}</h3>
                <p className="gcp-news-read">{n.read} read</p>

              </motion.div>
            </AnimatePresence>

            <div className="gcp-news-list">
              {NEWS.map((item, i) => (
                <button
                  key={i}
                  className={`gcp-news-item ${newsIdx === i ? "on" : ""}`}
                  style={{ "--nc": item.color }}
                  onClick={() => setNewsIdx(i)}
                >
                  <div
                    className="gcp-news-item-tag"
                    style={{ color: item.color }}
                  >
                    {item.tag}
                  </div>
                  <p className="gcp-news-item-title">{item.title}</p>
                  <span className="gcp-news-item-read">{item.read}</span>
                  <div className="gcp-news-item-bar" />
                </button>
              ))}
              <div className="gcp-news-ctrl">
                <button
                  className="gcp-ctrl-btn sm"
                  onClick={() =>
                    setNewsIdx((i) => (i - 1 + NEWS.length) % NEWS.length)
                  }
                >
                  <FiChevronLeft />
                </button>
                <div className="gcp-ctrl-dots">
                  {NEWS.map((_, i) => (
                    <button
                      key={i}
                      className={`gcp-dot-btn ${newsIdx === i ? "on" : ""}`}
                      style={newsIdx === i ? { background: NEWS[i].color } : {}}
                      onClick={() => setNewsIdx(i)}
                    />
                  ))}
                </div>
                <button
                  className="gcp-ctrl-btn sm"
                  onClick={() => setNewsIdx((i) => (i + 1) % NEWS.length)}
                >
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
            <Newsletter />
          </div>        </div>
      </section>

      <Cta />

    </div>
  );
};

export default GCPPartners;
