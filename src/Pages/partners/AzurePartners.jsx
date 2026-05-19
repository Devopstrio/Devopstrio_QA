import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

import {
  FiArrowRight,
  FiCheck,
  FiExternalLink,
  FiStar,
  FiShield,
  FiZap,
  FiGlobe,
  FiServer,
  FiCloud,
  FiBarChart2,
  FiLock,
  FiCpu,
  FiChevronRight,
  FiChevronLeft,
  FiPlay,
  FiTrendingUp,
  FiPackage,
  FiDatabase,
  FiCode,
  FiMonitor,
  FiUsers,
  FiActivity,
} from "react-icons/fi";

import "../../Style/partners/AzurePartners.css";
import azureVideo from "../../assets/images/Partner/Azure_original.mp4";

/* ── Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -52 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 52 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const INSIGHTS = [
  {
    tag: "Azure Strategy",
    icon: <FiCloud />,
    title: "Azure Landing Zones at Enterprise Scale",
    desc: "How we accelerated Azure adoption for a 10,000-seat enterprise using Microsoft Cloud Adoption Framework and automated policy guardrails.",
    img: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=700&q=80",
    color: "#ce2453",
  },
  {
    tag: "AI & Copilot",
    icon: <FiCpu />,
    title: "Building with Azure OpenAI & Copilot Studio",
    desc: "A practical guide to deploying enterprise GPT-4 on Azure OpenAI Service — with RAG pipelines, content filtering, and cost governance baked in.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&q=80",
    color: "#d61c7fff",
  },
  {
    tag: "Security",
    icon: <FiShield />,
    title: "Microsoft Sentinel: Real-World SIEM Deployment",
    desc: "How we deployed Sentinel across 14 Azure subscriptions, connected 80+ data connectors, and reduced MTTD from 72h to under 4 minutes.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",
    color: "#e79e57",
  },
];

const WHATS_NEW = [
  {
    type: "Press Release",
    date: "Feb 2025",
    title: "Devopstrio Earns Azure Expert MSP Designation",
    color: "#7e14d4ff",
  },
  {
    type: "Partnership",
    date: "Jan 2025",
    title: "Named Microsoft AI Cloud Partner of the Year — UK",
    color: "#962964",
  },
  {
    type: "Product Launch",
    date: "Dec 2024",
    title: "Launching AzureGuard: Automated Policy & Compliance Engine",
    color: "#ce2453",
  },
  {
    type: "Azure Summit",
    date: "Nov 2024",
    title: "Devopstrio Keynote: AI-Driven Cloud Operations on Azure",
    color: "#e79e57",
  },
];

const STATS = [
  {
    val: "8+",
    lbl: "Microsoft Gold & Solutions Partner Areas",
    icon: <FiStar />,
  },
  { val: "400+", lbl: "Azure-Certified Engineers Globally", icon: <FiUsers /> },
  { val: "1800+", lbl: "Azure Production Deployments", icon: <FiZap /> },
  { val: "1200+", lbl: "Microsoft Certifications Held", icon: <FiShield /> },
];

const COMPETENCIES = [
  {
    icon: <FiCloud />,
    label: "Azure Infrastructure",
    tier: "Solutions Partner",
    color: "#831ed6ff",
  },
  {
    icon: <FiCpu />,
    label: "Data & AI",
    tier: "Solutions Partner",
    color: "#962964",
  },
  {
    icon: <FiCode />,
    label: "Digital & App Innovation",
    tier: "Solutions Partner",
    color: "#ce2453",
  },
  {
    icon: <FiShield />,
    label: "Security",
    tier: "Solutions Partner",
    color: "#dd5c54",
  },
  {
    icon: <FiActivity />,
    label: "Business Applications",
    tier: "Solutions Partner",
    color: "#e79e57",
  },
  {
    icon: <FiMonitor />,
    label: "Modern Work",
    tier: "Solutions Partner",
    color: "#8016d7ff",
  },
  {
    icon: <FiDatabase />,
    label: "Azure Database",
    tier: "Specialisation",
    color: "#962964",
  },
  {
    icon: <FiGlobe />,
    label: "Networking",
    tier: "Specialisation",
    color: "#ce2453",
  },
  {
    icon: <FiTrendingUp />,
    label: "Analytics on Azure",
    tier: "Specialisation",
    color: "#e79e57",
  },
];

const PROGRAMS = [
  {
    icon: <FiTrendingUp />,
    title: "Azure Migrate & Modernize",
    desc: "Microsoft-funded program providing migration credits, architecture reviews, and dedicated FastTrack engineers.",
    color: "#7d17d1ff",
  },
  {
    icon: <FiCpu />,
    title: "AI Inner Circle Partner",
    desc: "Early access to Azure OpenAI, Copilot Studio, and Phi-3 models — with Microsoft co-sell and joint GTM motions.",
    color: "#962964",
  },
  {
    icon: <FiShield />,
    title: "Microsoft MISA",
    desc: "Member of the Microsoft Intelligent Security Association — recognised for Azure-native SIEM and XDR delivery.",
    color: "#ce2453",
  },
  {
    icon: <FiPackage />,
    title: "ISV Success Program",
    desc: "Co-build and co-sell SaaS solutions on Azure Marketplace with Microsoft engineering and sales support.",
    color: "#e79e57",
  },
];

const SOLUTIONS = [
  {
    icon: <FiCloud />,
    title: "Azure Landing Zone",
    desc: "Hub-spoke networks, Management Groups, Policy-as-Code using AzureRM Terraform and Bicep.",
    color: "#7c1fc7ff",
    moreDetails: [
      "Hub-Spoke Network design",
      "Azure Policy-as-Code",
      "Management Group hierarchy",
      "Bicep & Terraform templates",
    ],
  },
  {
    icon: <FiZap />,
    title: "Azure DevOps & GitHub CI/CD",
    desc: "End-to-end pipelines with Azure DevOps, GitHub Actions, AKS GitOps, and Helm automation.",
    color: "#962964",
    moreDetails: [
      "Azure DevOps Pipelines",
      "GitHub Actions workflows",
      "AKS GitOps (Flux/Argo)",
      "Helm Chart management",
    ],
  },
  {
    icon: <FiShield />,
    title: "Microsoft Sentinel & Defender",
    desc: "Unified SIEM/XDR — Sentinel, Defender for Cloud, MDI, and MDE with automated playbooks.",
    color: "#ce2453",
    moreDetails: [
      "Microsoft Sentinel SIEM",
      "Defender for Cloud XDR",
      "SOAR Automated Playbooks",
      "Identity protection (MDI)",
    ],
  },
  {
    icon: <FiDatabase />,
    title: "Azure Data Platform",
    desc: "Synapse Analytics, Azure Data Factory, Data Lake Gen2, and Purview for governed data estates.",
    color: "#dd5c54",
    moreDetails: [
      "Synapse Analytics workspace",
      "Data Factory ETL flows",
      "Data Lake Gen2 storage",
      "Azure Purview governance",
    ],
  },
  {
    icon: <FiCpu />,
    title: "Azure OpenAI & Copilot",
    desc: "Enterprise AI deployments — RAG pipelines, fine-tuning, Copilot Studio, and LLM governance.",
    color: "#0078D4",
    moreDetails: [
      "Azure OpenAI RAG flows",
      "LLM Guardrails & Safety",
      "Copilot Studio builders",
      "Semantic Kernel integration",
    ],
  },
  {
    icon: <FiServer />,
    title: "AKS & Container Strategy",
    desc: "Production-grade Kubernetes on AKS with KEDA, Flux, Linkerd, and GitOps delivery.",
    color: "#50e6ff",
    moreDetails: [
      "AKS cluster management",
      "KEDA event-driven scaling",
      "Linkerd Service Mesh",
      "Azure Container Registry",
    ],
  },
  {
    icon: <FiMonitor />,
    title: "Azure Monitor & Observability",
    desc: "Full-stack visibility with Azure Monitor, Log Analytics, Application Insights, and Grafana.",
    color: "#ce2453",
    moreDetails: [
      "Log Analytics workspaces",
      "Application Insights SDK",
      "Azure Managed Grafana",
      "Metrics Advisor & Alerts",
    ],
  },
  {
    icon: <FiGlobe />,
    title: "Multi-Region & DR",
    desc: "Active-active and pilot-light DR patterns across Azure regions with Traffic Manager.",
    color: "#dd5c54",
    moreDetails: [
      "Cross-region replication",
      "Azure Traffic Manager",
      "Site Recovery (ASR) setup",
      "Front Door global CDN",
    ],
  },
  {
    icon: <FiCode />,
    title: "Serverless & Event-Driven",
    desc: "Azure Functions, Logic Apps, Event Grid, and Service Bus for cloud-native workflows.",
    color: "#0078D4",
    moreDetails: [
      "Azure Functions (Serverless)",
      "Logic Apps integrations",
      "Event Grid pub/sub",
      "Service Bus messaging",
    ],
  },
];

const CASE_STUDIES = [
  {
    logo: "Global Bank",
    tag: "Cloud Migration",
    title:
      "Migrated 600TB of core banking data to Azure in 8 weeks with zero-downtime cutover",
    metric: "68% infrastructure cost reduction post-migration",
    color: "#7c1dcaff",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700&q=80",
  },
  {
    logo: "TeleCo UK",
    tag: "DevOps on Azure",
    title:
      "From quarterly releases to 40+ deploys per week on Azure DevOps & AKS",
    metric: "19× increase in deployment frequency",
    color: "#ce2453",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=80",
  },
  {
    logo: "HealthNet",
    tag: "AI & Security",
    title:
      "NHS-compliant Azure OpenAI deployment with Sentinel SIEM in 60 days",
    metric: "Zero critical findings across 4 NHS IG audits",
    color: "#e79e57",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80",
  },
];

const NEWS = [
  {
    tag: "Blog",
    date: "Feb 20, 2025",
    title: "Azure OpenAI in NHS: Our Architecture Lessons from 3 Deployments",
    readTime: "7 min read",
    color: "#7d16d2ff",
  },
  {
    tag: "Case Study",
    date: "Feb 8, 2025",
    title: "How We Cut Azure Spend by 52% with Reservation Automation",
    readTime: "9 min read",
    color: "#ce2453",
  },
  {
    tag: "Technical Deep-Dive",
    date: "Jan 25, 2025",
    title: "AKS Production Hardening: 12 Checks We Run on Every Cluster",
    readTime: "11 min read",
    color: "#e79e57",
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
const AzurePartners = () => {
  const navigate = useNavigate();
  const [caseIdx, setCaseIdx] = useState(0);
  const [newsIdx, setNewsIdx] = useState(0);
  const [expandedSol, setExpandedSol] = useState(null); // Track expanded card index
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const prevCase = () =>
    setCaseIdx((i) => (i - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  const nextCase = () => setCaseIdx((i) => (i + 1) % CASE_STUDIES.length);
  const prevNews = () => setNewsIdx((i) => (i - 1 + NEWS.length) % NEWS.length);
  const nextNews = () => setNewsIdx((i) => (i + 1) % NEWS.length);

  const c = CASE_STUDIES[caseIdx];
  const n = NEWS[newsIdx];

  return (
    <div className="az-page">
      {/* ── Background ── */}

      {/* ════════ 1. HERO SPLIT ════════ */}
      <section className="az-hero">
        <div className="az-container az-hero-layout">
          <motion.div
            className="az-hero-left"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            <div className="az-partner-badge">
              <div className="az-badge-logo">
                <div className="az-azure-icon">
                  <span className="az-icon-tri">AZURE</span>
                </div>
              </div>
              <div className="az-badge-text">
                <strong>Microsoft Azure Expert MSP</strong>
                <span>Solutions Partner · 9 Specialisations · Since 2018</span>
              </div>
              <div className="az-badge-dot">
                <FiCheck />
              </div>
            </div>

            <h1 className="az-hero-h1">
              <span className="az-brand-grad">Devopstrio</span> &amp;
              <br />
              <span className="az-grad">Microsoft Azure</span>
            </h1>
            <p className="az-hero-sub">
              Accelerating digital transformation with Azure AI, cloud
              modernisation, and enterprise-grade Microsoft solutions —
              delivered by 400+ Azure-certified engineers across 4 global
              offices.
            </p>
            <div className="az-hero-actions">
              <button
                className="az-btn-primary az-btn-lg"
                onClick={() => navigate("/contact")}
              >
                Talk to Azure Experts <FiArrowRight />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="az-hero-right"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
          >
            <div className="az-video-card" onClick={() => !videoPlaying && setVideoPlaying(true)}>
              {videoPlaying ? (
                <video
                  ref={videoRef}
                  src={azureVideo}
                  className="az-video-player"
                  controls
                  autoPlay
                  playsInline
                  onTimeUpdate={() => {
                    if (videoRef.current) {
                      localStorage.setItem("az_video_progress", videoRef.current.currentTime);
                    }
                  }}
                  onLoadedMetadata={() => {
                    if (videoRef.current) {
                      const savedTime = localStorage.getItem("az_video_progress");
                      if (savedTime) {
                        videoRef.current.currentTime = parseFloat(savedTime);
                      }
                    }
                  }}
                  onEnded={() => {
                    setVideoPlaying(false);
                    localStorage.removeItem("az_video_progress");
                  }}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900&q=80"
                    alt="Azure Cloud infrastructure"
                    className="az-video-thumb"
                  />
                  <div className="az-video-overlay" />
                  <button className="az-play-btn" aria-label="Play video">
                    <FiPlay />
                  </button>
                  <div className="az-video-label">
                    <span className="az-live-dot" />
                    Azure Partnership Overview · 3:12
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════ 2. PARTNERSHIP BANNER ════════ */}
      <section className="az-partnership-banner">
        <div className="az-banner-inner-content">
          <motion.div
            className="az-container az-banner-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="az-eyebrow az-grad">Verified Excellence</p>
            <h2 className="az-banner-h2">
              Powering Your Digital Future
              <br />
              <span className="az-grad">with Microsoft Azure</span>
            </h2>
            <p className="az-banner-sub">
              As a Microsoft Azure Expert MSP, we combine the deepest technical
              certifications with proven delivery track records — not slide
              decks.
            </p>

            {/* Feature Content & Image Grid */}
            <motion.div className="az-banner-feature-grid" variants={fadeUp}>
              <div className="az-banner-feat-content">
                <h3 className="az-banner-feat-h3">Cloud Native Acceleration</h3>
                <p className="az-banner-feat-p">
                  We don&rsquo;t just migrate; we accelerate your business logic
                  using Azure-native services. From App Services and AKS to
                  CosmosDB, we ensure your architecture is scalable, resilient,
                  and cost-optimized from day one.
                </p>
                <div className="az-banner-feat-list">
                  <div className="az-banner-feat-item">
                    <FiCheck className="az-feat-icon" />
                    <span>Azure Expert MSP Certified Delivery Partner</span>
                  </div>
                  <div className="az-banner-feat-item">
                    <FiCheck className="az-feat-icon" />
                    <span>Enterprise-Scale Landing Zone Deployment</span>
                  </div>
                  <div className="az-banner-feat-item">
                    <FiCheck className="az-feat-icon" />
                    <span>Native AI Implementation with Azure OpenAI</span>
                  </div>
                </div>
              </div>

              <div className="az-banner-feat-image">
                <div className="az-feat-img-card">
                  <img
                    src="/images/Cloud_Native_Acceleration.png"
                    alt="Azure Cloud Architecture"
                  />
                  <div className="az-feat-img-overlay" />
                  <div className="az-feat-img-glow" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════ 3. INSIGHTS — 3 Cards ════════ */}
      <section className="az-insights-section">
        <div className="az-container">
          <motion.div
            className="az-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="az-eyebrow az-grad">Knowledge Hub</p>
            <h2 className="az-sec-h2">
              Unlock Cloud Transformation
              <br />
              <span className="az-grad">Insights</span>
            </h2>
            <p className="az-sec-sub">
              Practical Azure engineering content from our Microsoft practice
              teams — no fluff, all signal.
            </p>
          </motion.div>

          <motion.div
            className="az-insight-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {INSIGHTS.map((ins, i) => (
              <motion.div
                key={i}
                className="az-insight-card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                style={{ "--ic": ins.color }}
              >
                <div className="az-insight-img-wrap">
                  <img src={ins.img} alt={ins.title} />
                  <div className="az-insight-tint" />
                </div>
                <div className="az-insight-body">
                  <div className="az-insight-tag">
                    <span className="az-tag-icon">{ins.icon}</span>
                    {ins.tag}
                  </div>
                  <h3 className="az-insight-title">{ins.title}</h3>
                  <p className="az-insight-desc">{ins.desc}</p>

                </div>
                <div className="az-insight-bar" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ 4. WHAT'S NEW — 4 Cards ════════ */}
      <section className="az-whatsnew-section">
        <div className="az-container">
          <motion.div
            className="az-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="az-eyebrow az-grad">Latest Updates</p>
            <h2 className="az-sec-h2">
              What&rsquo;s <span className="az-grad">New</span>
            </h2>
          </motion.div>

          <motion.div
            className="az-whatsnew-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {WHATS_NEW.map((item, i) => (
              <motion.div
                key={i}
                className="az-new-card"
                variants={fadeUp}
                whileHover={{ y: -5 }}
                style={{ "--nc": item.color }}
              >
                <div
                  className="az-new-tag"
                  style={{
                    color: item.color,
                    background: `${item.color}12`,
                    borderColor: `${item.color}28`,
                  }}
                >
                  {item.type}
                </div>
                <p className="az-new-date">{item.date}</p>
                <h3 className="az-new-title">{item.title}</h3>

                <div className="az-new-bar" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ 5. STATS STRIP ════════ */}
      <section className="az-stats-section">
        <div className="az-container">
          <motion.div
            className="az-stats-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STATS.map((s, i) => (
              <motion.div key={i} className="az-stat-card" variants={fadeUp}>
                <div className="az-stat-icon">{s.icon}</div>
                <div className="az-stat-val">{s.val}</div>
                <div className="az-stat-lbl">{s.lbl}</div>
                <div className="az-stat-underline" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ 6. COMPETENCIES — Dark Grid ════════ */}
      <section className="az-comp-section">
        <div className="az-container">
          <motion.div
            className="az-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="az-eyebrow az-grad">Recognised Excellence</p>
            <h2 className="az-sec-h2">
              Microsoft Solutions Partner
              <br />
              <span className="az-grad">Designations</span>
            </h2>
            <p className="az-sec-sub">
              Solutions Partner designations are earned through verified
              customer deployments, skilling, and performance — not spend alone.
            </p>
          </motion.div>

          <motion.div
            className="az-comp-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {COMPETENCIES.map((c, i) => (
              <motion.div
                key={i}
                className="az-comp-card"
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{ "--cc": c.color }}
              >
                <div className="az-comp-icon-wrap">{c.icon}</div>
                <h3 className="az-comp-label">{c.label}</h3>
                <span className="az-comp-tier">{c.tier}</span>
                <div className="az-comp-stars">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <FiStar key={s} />
                  ))}
                </div>
                <div className="az-comp-glow" />
                <div className="az-comp-bar" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ 7. PROGRAMS — 4 col ════════ */}
      <section className="az-programs-section">
        <div className="az-container">
          <motion.div
            className="az-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="az-eyebrow az-grad">Access &amp; Opportunity</p>
            <h2 className="az-sec-h2">
              Microsoft Partner
              <br />
              <span className="az-grad">Programs</span>
            </h2>
          </motion.div>

          <motion.div
            className="az-programs-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PROGRAMS.map((p, i) => (
              <motion.div
                key={i}
                className="az-program-card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                style={{ "--pc": p.color }}
              >
                <div
                  className="az-program-icon"
                  style={{
                    color: p.color,
                    background: `${p.color}12`,
                    borderColor: `${p.color}22`,
                  }}
                >
                  {p.icon}
                </div>
                <h3 className="az-program-title">{p.title}</h3>
                <p className="az-program-desc">{p.desc}</p>

                <div className="az-program-bar" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ 8. SOLUTIONS MEGA GRID — 3×3 ════════ */}
      <section className="az-solutions-section">
        <div className="az-container">
          <motion.div
            className="az-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="az-eyebrow az-grad">What We Build</p>
            <h2 className="az-sec-h2">
              Offerings &amp;
              <br />
              <span className="az-grad">Solutions</span>
            </h2>
            <p className="az-sec-sub">
              Nine proven Azure solution areas — each backed by reference
              architectures, certified teams, and real client results.
            </p>
          </motion.div>

          <motion.div
            className="az-solutions-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {SOLUTIONS.map((s, i) => {
              const isExpanded = expandedSol === i;
              return (
                <motion.div
                  key={i}
                  layout
                  className={`az-solution-card ${isExpanded ? "expanded" : ""}`}
                  variants={fadeUp}
                  whileHover={!isExpanded ? { y: -5 } : {}}
                  style={{ "--sc": s.color }}
                  onClick={() => setExpandedSol(isExpanded ? null : i)}
                >
                  <div
                    className="az-solution-icon"
                    style={{
                      color: s.color,
                      background: `${s.color}10`,
                      borderColor: `${s.color}20`,
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="az-solution-title">{s.title}</h3>
                  <p className="az-solution-desc">{s.desc}</p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        className="az-solution-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <ul className="az-solution-list">
                          {s.moreDetails.map((detail, idx) => (
                            <li key={idx}>
                              <FiCheck style={{ color: s.color }} />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <button
                          className="az-solution-btn"
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

                  <div className="az-solution-arrow">
                    <FiChevronRight
                      style={{
                        transform: isExpanded ? "rotate(90deg)" : "none",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  <div className="az-solution-bar" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════ 9. CASE STUDIES CAROUSEL ════════ */}
      <section className="az-carousel-section">
        <div className="az-container">
          <motion.div
            className="az-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="az-eyebrow az-grad">Proven Results</p>
            <h2 className="az-sec-h2">
              Client <span className="az-grad">Success Stories</span>
            </h2>
          </motion.div>

          <div className="az-carousel-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={caseIdx}
                className="az-case-card"
                initial={{ opacity: 0, x: 60 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={{ opacity: 0, x: -40, transition: { duration: 0.3 } }}
                style={{ "--cc": c.color }}
              >
                <div className="az-case-img-wrap">
                  <img src={c.img} alt={c.title} />
                  <div
                    className="az-case-img-overlay"
                    style={{ "--cc": c.color }}
                  />
                </div>
                <div className="az-case-body">
                  <div
                    className="az-case-tag"
                    style={{
                      color: c.color,
                      background: `${c.color}10`,
                      borderColor: `${c.color}25`,
                    }}
                  >
                    {c.tag}
                  </div>
                  <div className="az-case-logo">{c.logo}</div>
                  <h3 className="az-case-title">{c.title}</h3>
                  <div
                    className="az-case-metric"
                    style={{
                      borderColor: `${c.color}35`,
                      background: `${c.color}06`,
                    }}
                  >
                    <FiTrendingUp style={{ color: c.color }} />
                    {c.metric}
                  </div>
                  <button
                    className="az-btn-primary"
                    onClick={() => navigate("/clients")}
                  >
                    Read Full Case Study <FiArrowRight />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="az-carousel-controls">
              <button className="az-carousel-btn" onClick={prevCase}>
                <FiChevronLeft />
              </button>
              <div className="az-carousel-dots">
                {CASE_STUDIES.map((_, i) => (
                  <button
                    key={i}
                    className={`az-cdot ${caseIdx === i ? "on" : ""}`}
                    onClick={() => setCaseIdx(i)}
                  />
                ))}
              </div>
              <button className="az-carousel-btn" onClick={nextCase}>
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ 10. NEWS & INSIGHTS CAROUSEL ════════ */}
      <section className="az-news-section">
        <div className="az-container">
          <motion.div
            className="az-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="az-eyebrow az-grad">From the Lab</p>
            <h2 className="az-sec-h2">
              News &amp; <span className="az-grad">Insights</span>
            </h2>
          </motion.div>

          <div className="az-news-layout">
            <AnimatePresence mode="wait">
              <motion.div
                key={newsIdx}
                className="az-news-featured"
                initial={{ opacity: 0, y: 28 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.28 } }}
                style={{ "--nc": n.color }}
              >
                <div
                  className="az-news-tag"
                  style={{
                    color: n.color,
                    background: `${n.color}10`,
                    borderColor: `${n.color}25`,
                  }}
                >
                  {n.tag}
                </div>
                <p className="az-news-date">{n.date}</p>
                <h3 className="az-news-title">{n.title}</h3>
                <p className="az-news-read">{n.readTime}</p>

              </motion.div>
            </AnimatePresence>

            <div className="az-news-list">
              {NEWS.map((item, i) => (
                <button
                  key={i}
                  className={`az-news-item ${newsIdx === i ? "on" : ""}`}
                  style={{ "--nc": item.color }}
                  onClick={() => setNewsIdx(i)}
                >
                  <div
                    className="az-news-item-tag"
                    style={{ color: item.color }}
                  >
                    {item.tag}
                  </div>
                  <p className="az-news-item-title">{item.title}</p>
                  <span className="az-news-item-read">{item.readTime}</span>
                  <div className="az-news-item-bar" />
                </button>
              ))}
              <div className="az-news-carousel-ctrl">
                <button className="az-carousel-btn sm" onClick={prevNews}>
                  <FiChevronLeft />
                </button>
                <div className="az-carousel-dots">
                  {NEWS.map((_, i) => (
                    <button
                      key={i}
                      className={`az-cdot ${newsIdx === i ? "on" : ""}`}
                      onClick={() => setNewsIdx(i)}
                    />
                  ))}
                </div>
                <button className="az-carousel-btn sm" onClick={nextNews}>
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
          <Newsletter />
        </div>
      </section>

      {/* ════════ 11. FINAL CTA BANNER ════════ */}
      {/* <section className="az-final-section">
        <div className="az-final-bg">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=80"
            alt="Devopstrio  Azure Team"
          />
          <div className="az-final-overlay" />
        </div>
        <motion.div
          className="az-container az-final-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="az-eyebrow az-grad">Start Today</p>
          <h2 className="az-final-h2">
            Unleash Business Value
            <br />
            <span className="az-grad">on Microsoft Azure.</span>
          </h2>
          <p className="az-final-sub">
            Whether you&rsquo;re migrating workloads, modernising with Azure AI,
            or building cloud-native from scratch — our Microsoft practice
            delivers results you can measure, in timelines you can trust.
          </p>
          <div className="az-final-btns">
            <button
              className="az-btn-primary az-btn-lg"
              onClick={() => navigate("/contact")}
            >
              Get a Free Azure Assessment <FiArrowRight />
            </button>
            <button
              className="az-btn-ghost az-btn-lg"
              onClick={() => navigate("/ecosystem")}
            >
              Explore All Partners
            </button>
          </div>
        </motion.div>
      </section> */}

      <Cta />
    </div>
  );
};

export default AzurePartners;
