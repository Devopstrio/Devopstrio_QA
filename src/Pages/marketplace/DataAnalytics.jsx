// DataAnalytics.jsx – Full redesign: Black + Sunset Gradient theme
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Newsletter from "../../components/Newsletter/Newsletter";
import {
  FiBarChart2,
  FiTrendingUp,
  FiDatabase,
  FiZap,
  FiShield,
  FiCpu,
  FiLayers,
  FiArrowRight,
  FiCheckCircle,
  FiActivity,
  FiPieChart,
  FiFilter,
  FiRefreshCw,
  FiGlobe,
  FiCode,
  FiServer,
  FiCloud,
  FiLock,
  FiMessageSquare,
  FiPlay,
  FiPlus,
  FiMinus,
  FiBox,
  FiAperture,
} from "react-icons/fi";
import "../../Style/marketplace/DataAnalytics.css";

/* ─── Animated Counter Hook ──────────────────────────────── */
function useCountUp(end, duration = 2000, start = 0) {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const isFloat = String(end).includes(".");
    const numericEnd = parseFloat(end);
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (numericEnd - start) * eased;
      setCount(isFloat ? current.toFixed(1) : Math.round(current));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration, start]);

  return { count, ref };
}

/* ─── Data ───────────────────────────────────────────────── */
const stats = [
  { end: 10, suffix: "PB+", label: "Data Processed Daily", prefix: "" },
  { end: 99.9, suffix: "%", label: "Pipeline Uptime", prefix: "" },
  { end: 50, suffix: "ms", label: "Avg. Query Latency", prefix: "<" },
  { end: 3, suffix: "x", label: "Faster Time to Insight", prefix: "" },
  { end: 500, suffix: "+", label: "Enterprise Pipelines", prefix: "" },
];

const capabilities = [
  {
    icon: <FiZap />,
    title: "Real-Time Streaming",
    desc: "Ingest, process, and react to millions of events per second with Kafka, Flink, and our managed streaming fabric.",
    tags: ["Kafka", "Flink", "Spark Streaming"],
    accent: 0,
  },
  {
    icon: <FiDatabase />,
    title: "Data Lake & Lakehouse",
    desc: "Scalable, cost-optimised storage in open table formats (Iceberg/Delta) with time-travel queries and zero-copy sharing.",
    tags: ["Delta Lake", "Apache Iceberg", "Hudi"],
    accent: 1,
  },
  {
    icon: <FiLayers />,
    title: "Cloud Data Warehouse",
    desc: "Zero-copy querying against your data lake with Snowflake, BigQuery, or Redshift — integrated and optimised.",
    tags: ["Snowflake", "BigQuery", "Redshift"],
    accent: 2,
  },
  {
    icon: <FiPieChart />,
    title: "BI & Self-Service Analytics",
    desc: "Self-service dashboards and executive reporting updated in real time, directly connected to your warehouse.",
    tags: ["Looker", "Metabase", "Apache Superset"],
    accent: 3,
  },
  {
    icon: <FiCpu />,
    title: "ML Feature Store",
    desc: "Centralised, versioned feature pipelines powering both model training and sub-millisecond online serving.",
    tags: ["Feast", "Tecton", "Vertex AI"],
    accent: 4,
  },
  {
    icon: <FiShield />,
    title: "Data Governance & Quality",
    desc: "Automated lineage tracking, PII detection, schema enforcement, and data quality contracts across every pipeline.",
    tags: ["Great Expectations", "dbt", "Unity Catalog"],
    accent: 0,
  },
];

const techStack = [
  {
    category: "Ingestion",
    tools: ["Apache Kafka", "Fivetran", "Airbyte", "AWS Kinesis"],
  },
  {
    category: "Transform",
    tools: ["dbt", "Apache Spark", "Flink", "Dataform"],
  },
  { category: "Storage", tools: ["Delta Lake", "Apache Iceberg", "S3", "GCS"] },
  {
    category: "Warehouse",
    tools: ["Snowflake", "BigQuery", "Redshift", "ClickHouse"],
  },
  {
    category: "Orchestrate",
    tools: ["Apache Airflow", "Dagster", "Prefect", "Mage"],
  },
  {
    category: "Serve & BI",
    tools: ["Looker", "Metabase", "Superset", "Tableau"],
  },
];

const pipeline = [
  {
    phase: "01",
    icon: <FiRefreshCw />,
    title: "Collect & Ingest",
    desc: "Unify 200+ source connectors — databases, APIs, events, files, IoT streams — into a single reliable ingestion layer.",
  },
  {
    phase: "02",
    icon: <FiFilter />,
    title: "Transform & Model",
    desc: "SQL-first ELT with dbt, tested with Great Expectations, orchestrated by Airflow — full lineage and reproducibility.",
  },
  {
    phase: "03",
    icon: <FiDatabase />,
    title: "Store & Optimise",
    desc: "Tiered hot/warm/cold storage with open table formats, automatic compaction, and partition pruning for extreme performance.",
  },
  {
    phase: "04",
    icon: <FiActivity />,
    title: "Analyse & Govern",
    desc: "Role-level security, PII masking, automated data contracts, and lineage graphs for every query and transformation.",
  },
  {
    phase: "05",
    icon: <FiGlobe />,
    title: "Serve at Scale",
    desc: "Expose insights via SQL, embedded dashboards, REST APIs, or ML feature vectors — multi-tenant and globally distributed.",
  },
];

const useCases = [
  {
    id: "fintech",
    label: "FinTech",
    headline: "Real-Time Fraud Detection — 80ms Latency",
    body: "A European neobank processes 4M+ daily transactions through our streaming stack, reducing fraud latency from 3 seconds to under 80ms, with zero false-positive spike and £2.4M annual savings.",
    metrics: [
      { v: "80ms", l: "Detection" },
      { v: "94%", l: "Accuracy" },
      { v: "£2.4M", l: "Saved/yr" },
    ],
    color: "#ce2453",
  },
  {
    id: "ecommerce",
    label: "E-Commerce",
    headline: "Personalisation Engine — 38% Revenue Lift",
    body: "Our ML feature store and real-time recommendation pipeline powers personalised feeds for a global retailer (60M users), delivering a consistent 38% lift in average order value.",
    metrics: [
      { v: "38%", l: "Rev. Lift" },
      { v: "60M", l: "Users" },
      { v: "12ms", l: "Rec. Latency" },
    ],
    color: "#dd5c54",
  },
  {
    id: "healthcare",
    label: "Healthcare",
    headline: "Clinical Data Platform — 200 Hospitals",
    body: "A FHIR-compliant lakehouse ingesting EHR data from 200+ hospital systems. Population-health queries that previously took weeks now complete in seconds.",
    metrics: [
      { v: "200+", l: "Hospitals" },
      { v: "HIPAA", l: "Compliant" },
      { v: "10x", l: "Query Speed" },
    ],
    color: "#962964",
  },
  {
    id: "saas",
    label: "SaaS",
    headline: "Multi-Tenant Analytics — 500+ Clients",
    body: "Per-customer data isolation, instant custom dashboards, and usage-based billing signals — built on ClickHouse and dbt for a SaaS platform serving 500+ enterprise tenants.",
    metrics: [
      { v: "500+", l: "Tenants" },
      { v: "<1s", l: "Load Time" },
      { v: "100%", l: "Isolated" },
    ],
    color: "#e79e57",
  },
];

const faqs = [
  {
    q: "Can you work with our existing data warehouse?",
    a: "Absolutely. We optimise existing Snowflake, BigQuery, Redshift, and Databricks environments — no rip-and-replace required.",
  },
  {
    q: "How do you handle GDPR / HIPAA compliance?",
    a: "We implement automated PII tagging, lineage tracking, schema enforcement, and row-level security to satisfy GDPR, HIPAA, and SOC 2.",
  },
  {
    q: "What's a typical delivery timeline?",
    a: "A production data lakehouse takes 6–10 weeks. Real-time streaming pipelines can be live in 3 weeks.",
  },
  {
    q: "Do you offer managed DataOps services?",
    a: "Yes — pipeline monitoring, incident response, SLA reporting, performance tuning, and monthly architecture reviews are all included.",
  },
];

/* ─── Motion Variants ────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Stat Card with counter ────────────────────────────── */
function StatCard({ stat }) {
  const { count, ref } = useCountUp(parseFloat(stat.end), 2000);
  const isFloat = String(stat.end).includes(".");
  return (
    <div className="da2-stat-card" ref={ref}>
      <div className="da2-stat-value">
        {stat.prefix}
        {isFloat ? parseFloat(count).toFixed(1) : count}
        {stat.suffix}
      </div>
      <div className="da2-stat-label">{stat.label}</div>
    </div>
  );
}

/* ─── Component ──────────────────────────────────────────── */
export default function DataAnalytics() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("fintech");
  const [openFaq, setOpenFaq] = useState(0);
  const activeCase = useCases.find((u) => u.id === activeTab);

  return (
    <div className="da2-page">
      {/* ══════════════════════════════════════════
          HERO — Split layout
      ══════════════════════════════════════════ */}
      <section className="da2-hero">
        <div className="da2-container">
          {/* Left: text */}
          <motion.div
            className="da2-hero-text"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div className="da2-pill" variants={fadeUp}>
              <span className="da2-pill-dot" />
              Data &amp; Analytics — Enterprise Platform
            </motion.div>

            <motion.h1 className="da2-hero-title" variants={fadeUp}>
              Raw Data Into
              <br />
              <span className="da2-grad">Competitive Edge</span>
            </motion.h1>

            <motion.p className="da2-hero-sub" variants={fadeUp}>
              End-to-end data engineering, real-time analytics pipelines, and
              ML-ready infrastructure — so your teams move from raw data to
              decisions in seconds, not days.
            </motion.p>

            <motion.ul className="da2-hero-checks" variants={fadeUp}>
              {[
                "Real-time streaming at millions of events/sec",
                "Production ML pipelines in weeks",
                "GDPR, HIPAA & SOC 2 compliant by design",
              ].map((c) => (
                <li key={c}>
                  <FiCheckCircle className="da2-check-icon" />
                  {c}
                </li>
              ))}
            </motion.ul>

            <motion.div className="da2-hero-ctas" variants={fadeUp}>
              <button
                className="da2-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Start Your Data Journey <FiArrowRight />
              </button>
              <button
                className="da2-btn-ghost"
                onClick={() => navigate("/case-studies")}
              >
                <FiPlay /> View Case Studies
              </button>
            </motion.div>
          </motion.div>

          {/* Right: visual data card stack */}
          <motion.div
            className="da2-hero-visual"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Main metric card */}
            <div className="da2-vis-main">
              <div className="da2-vis-header">
                <span className="da2-vis-title">Pipeline Overview</span>
                <span className="da2-live-badge">
                  <span className="da2-live-dot" />
                  Live
                </span>
              </div>
              <div className="da2-vis-kpis">
                {[
                  { l: "Events/sec", v: "142,800" },
                  { l: "Active Pipelines", v: "284" },
                  { l: "Data Quality", v: "99.2%" },
                  { l: "SLA Met", v: "100%" },
                ].map((k) => (
                  <div className="da2-vis-kpi" key={k.l}>
                    <span className="da2-kpi-val">{k.v}</span>
                    <span className="da2-kpi-lbl">{k.l}</span>
                  </div>
                ))}
              </div>
              {/* Sparkline bars */}
              <div className="da2-sparkline">
                {[38, 55, 42, 70, 60, 85, 65, 92, 75, 88, 72, 96].map(
                  (h, i) => (
                    <motion.div
                      key={i}
                      className="da2-spark-bar"
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{
                        duration: 0.8,
                        delay: 0.6 + i * 0.05,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />
                  ),
                )}
              </div>
              <div className="da2-spark-labels">
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>

            {/* Floating mini cards */}
            <motion.div
              className="da2-float-card da2-float-1"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <FiTrendingUp className="da2-float-icon" />
              <div>
                <span className="da2-float-val">+38%</span>
                <span className="da2-float-lbl">Revenue Lift</span>
              </div>
            </motion.div>
            <motion.div
              className="da2-float-card da2-float-2"
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              <FiZap className="da2-float-icon da2-icon-amber" />
              <div>
                <span className="da2-float-val">80ms</span>
                <span className="da2-float-lbl">Detection</span>
              </div>
            </motion.div>
            <motion.div
              className="da2-float-card da2-float-3"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            >
              <FiShield className="da2-float-icon da2-icon-purple" />
              <div>
                <span className="da2-float-val">SOC 2</span>
                <span className="da2-float-lbl">Certified</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          STATS COUNTERS
      ══════════════════════════════════════════ */}
      <section className="da2-stats-strip">
        <div className="da2-container">
          <div className="da2-stats-grid">
            {stats.map((s, i) => (
              <StatCard key={i} stat={s} />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CAPABILITIES — Feature Cards
      ══════════════════════════════════════════ */}
      <section className="da2-caps">
        <div className="da2-container">
          <motion.div
            className="da2-section-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span className="da2-section-label" variants={fadeUp}>
              Platform Capabilities
            </motion.span>
            <motion.h2 className="da2-section-title" variants={fadeUp}>
              Every Layer of the{" "}
              <span className="da2-grad">Modern Data Stack</span>
            </motion.h2>
            <motion.p className="da2-section-desc" variants={fadeUp}>
              From raw ingestion to ML-ready serving — no vendor lock-in, built
              on open standards, delivered in production.
            </motion.p>
          </motion.div>

          <div className="da2-caps-grid">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                className={`da2-cap-card da2-accent-${cap.accent}`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div className="da2-cap-top">
                  <div className="da2-cap-icon">{cap.icon}</div>
                  <div className="da2-cap-tags">
                    {cap.tags.map((t) => (
                      <span key={t} className="da2-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="da2-cap-title">{cap.title}</h3>
                <p className="da2-cap-desc">{cap.desc}</p>
                <div className="da2-cap-arrow">
                  <FiArrowRight />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TECHNOLOGY STACK STRIP
      ══════════════════════════════════════════ */}
      <section className="da2-tech">
        <div className="da2-container">
          <motion.div
            className="da2-section-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span className="da2-section-label" variants={fadeUp}>
              Technology Stack
            </motion.span>
            <motion.h2 className="da2-section-title" variants={fadeUp}>
              Best-in-Class Tools,{" "}
              <span className="da2-grad">Expertly Integrated</span>
            </motion.h2>
          </motion.div>
          <div className="da2-tech-grid">
            {techStack.map((col, i) => (
              <motion.div
                key={i}
                className="da2-tech-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="da2-tech-category">{col.category}</div>
                {col.tools.map((t) => (
                  <div className="da2-tech-chip" key={t}>
                    {t}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          PIPELINE — Horizontal steps
      ══════════════════════════════════════════ */}
      <section className="da2-pipeline">
        <div className="da2-container">
          <motion.div
            className="da2-section-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span className="da2-section-label" variants={fadeUp}>
              How It Works
            </motion.span>
            <motion.h2 className="da2-section-title" variants={fadeUp}>
              A Pipeline Built for{" "}
              <span className="da2-grad">Production Reality</span>
            </motion.h2>
          </motion.div>

          <div className="da2-pipeline-track">
            {pipeline.map((step, i) => (
              <motion.div
                key={i}
                className="da2-pipe-step"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
              >
                <div className="da2-pipe-num">{step.phase}</div>
                <div className="da2-pipe-icon">{step.icon}</div>
                <h3 className="da2-pipe-title">{step.title}</h3>
                <p className="da2-pipe-desc">{step.desc}</p>
                {i < pipeline.length - 1 && (
                  <div className="da2-pipe-connector" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          USE CASES — Tabs
      ══════════════════════════════════════════ */}
      <section className="da2-cases">
        <div className="da2-container">
          <motion.div
            className="da2-section-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span className="da2-section-label" variants={fadeUp}>
              Industry Use Cases
            </motion.span>
            <motion.h2 className="da2-section-title" variants={fadeUp}>
              Data Solutions{" "}
              <span className="da2-grad">Across Every Sector</span>
            </motion.h2>
          </motion.div>

          <div className="da2-tabs">
            {useCases.map((u) => (
              <button
                key={u.id}
                className={`da2-tab ${activeTab === u.id ? "da2-tab-active" : ""}`}
                onClick={() => setActiveTab(u.id)}
                style={activeTab === u.id ? { "--tab-color": u.color } : {}}
              >
                {u.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {activeCase && (
              <motion.div
                key={activeCase.id}
                className="da2-case-panel"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                style={{ "--case-color": activeCase.color }}
              >
                <div className="da2-case-left">
                  <div
                    className="da2-case-tag"
                    style={{ color: activeCase.color }}
                  >
                    {activeCase.label}
                  </div>
                  <h3 className="da2-case-headline">{activeCase.headline}</h3>
                  <p className="da2-case-body">{activeCase.body}</p>
                  <div className="da2-case-metrics">
                    {activeCase.metrics.map((m) => (
                      <div
                        className="da2-metric"
                        key={m.l}
                        style={{ "--m-color": activeCase.color }}
                      >
                        <span className="da2-metric-val">{m.v}</span>
                        <span className="da2-metric-lbl">{m.l}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    className="da2-btn-primary"
                    onClick={() => navigate("/contact")}
                  >
                    Discuss Your Use Case <FiArrowRight />
                  </button>
                </div>
                <div className="da2-case-right">
                  {/* Abstract data visual */}
                  <div className="da2-case-visual">
                    <div className="da2-case-bg-ring da2-ring-1" />
                    <div className="da2-case-bg-ring da2-ring-2" />
                    <div className="da2-case-center-icon">
                      <FiBarChart2 />
                    </div>
                    {activeCase.metrics.map((m, i) => (
                      <div key={i} className={`da2-orbit-pill da2-orbit-${i}`}>
                        <span className="da2-orbit-val">{m.v}</span>
                        <span className="da2-orbit-lbl">{m.l}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          WHY Devopstrio  — Feature list
      ══════════════════════════════════════════ */}
      <section className="da2-why">
        <div className="da2-container">
          <div className="da2-why-inner">
            <motion.div
              className="da2-why-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.span className="da2-section-label" variants={fadeUp}>
                Why Devopstrio
              </motion.span>
              <motion.h2 className="da2-section-title" variants={fadeUp}>
                Not Just Another{" "}
                <span className="da2-grad">Data Consultancy</span>
              </motion.h2>
              <motion.p
                className="da2-section-desc"
                style={{ textAlign: "left", maxWidth: "100%" }}
                variants={fadeUp}
              >
                We're a data engineering team that has built production
                pipelines processing petabytes daily — for banks, retailers,
                hospitals, and SaaS companies. We don't just advise; we deliver.
              </motion.p>
              <motion.button
                className="da2-btn-primary"
                style={{ marginTop: "32px" }}
                variants={fadeUp}
                onClick={() => navigate("/contact")}
              >
                Book a Free Architecture Review <FiArrowRight />
              </motion.button>
            </motion.div>
            <div className="da2-why-right">
              {[
                {
                  icon: <FiCode />,
                  title: "Open Standards First",
                  desc: "We build on Apache Iceberg, dbt, Airflow — not proprietary black boxes that lock you in.",
                },
                {
                  icon: <FiLock />,
                  title: "Security & Compliance",
                  desc: "GDPR, HIPAA, SOC 2 — built in from day one, not bolted on as an afterthought.",
                },
                {
                  icon: <FiActivity />,
                  title: "DataOps Culture",
                  desc: "CI/CD for data pipelines, automated quality gates, and incident playbooks baked into every engagement.",
                },
                {
                  icon: <FiServer />,
                  title: "Cloud Agnostic",
                  desc: "AWS, Azure, GCP, or hybrid — we architect for your existing cloud estate.",
                },
                {
                  icon: <FiTrendingUp />,
                  title: "ML-Ready by Default",
                  desc: "Every pipeline we build is feature-store compatible and ready to power your ML workloads.",
                },
                {
                  icon: <FiGlobe />,
                  title: "Global Delivery",
                  desc: "Distributed teams across EMEA, US, and APAC. Production-ready pipelines in every region.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="da2-why-card"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="da2-why-icon">{item.icon}</div>
                  <div>
                    <h4 className="da2-why-title">{item.title}</h4>
                    <p className="da2-why-desc">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════ */}
      <section className="da2-faq">
        <div className="da2-container">
          <motion.div
            className="da2-section-head"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span className="da2-section-label" variants={fadeUp}>
              FAQs
            </motion.span>
            <motion.h2 className="da2-section-title" variants={fadeUp}>
              Common Questions
            </motion.h2>
          </motion.div>
          <div className="da2-faq-list">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className={`da2-accordion ${openFaq === i ? "da2-open" : ""}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <button
                  className="da2-acc-trigger"
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                >
                  <span>{faq.q}</span>
                  <span className="da2-acc-icon">
                    {openFaq === i ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                <div className="da2-acc-body">
                  <div className="da2-acc-inner">{faq.a}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════════ */}
      {/* <section className="da2-cta">
        <div className="da2-container">
          <motion.div
            className="da2-cta-inner"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="da2-cta-glow" />
            <motion.span
              className="da2-section-label"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Ready to Get Started?
            </motion.span>
            <h2 className="da2-cta-title">
              Your Data Platform, <span className="da2-grad">Built Right.</span>
            </h2>
            <p className="da2-cta-desc">
              Talk to a Devopstrio data architect today — no obligation, just a
              focused conversation about your data challenges.
            </p>
            <div className="da2-cta-btns">
              <button
                className="da2-btn-primary da2-btn-lg"
                onClick={() => navigate("/contact")}
              >
                Book Architecture Review <FiArrowRight />
              </button>
              <button
                className="da2-btn-outline"
                onClick={() => navigate("/case-studies")}
              >
                Explore Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}

      <Newsletter />
    </div>
  );
}
