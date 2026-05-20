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
  FiRefreshCw,
} from "react-icons/fi";

import "../../Style/partners/AWSPartners.css";

import awsTabAI from "../../assets/images/Site_img/GenerativeAI_on_AWS.png";
import awsTabMigration from "../../assets/images/Site_img/migration.png";
import awsTabData from "../../assets/images/Site_img/data_&_Ml.png";
import awsTabSecurity from "../../assets/images/Site_img/Security.png";
import awsTabDevOps from "../../assets/images/Site_img/devsecops.png";
import awsTabEdge from "../../assets/images/Site_img/iot_and_edge.png";

import awsInsightCloud from "../../assets/partners/aws/aws-insight-cloud.svg";
import awsInsightAI from "../../assets/partners/aws/aws-insight-ai.svg";
import awsInsightSecurity from "../../assets/partners/aws/aws-insight-security.svg";

import awsHeroThumb from "../../assets/partners/aws/aws-hero-thumb.svg";
import awsBannerModernization from "../../assets/partners/aws/aws-banner-modernization.svg";

import aws_dashboard from "../../assets/images/Site_img/aws_dashboard.png"

//videos 
import awsVideo from "../../assets/images/Partner/AWS_Original.mp4";

const TABS = [
  { id: "ai", label: "AI & GenAI", icon: <FiCpu /> },
  { id: "migration", label: "Migration", icon: <FiRefreshCw /> },
  { id: "data", label: "Data & ML", icon: <FiBarChart2 /> },
  { id: "security", label: "Security", icon: <FiShield /> },
  { id: "devops", label: "DevSecOps", icon: <FiLock /> },
  { id: "edge", label: "IoT & Edge", icon: <FiGlobe /> },
];

const TAB_CONTENT = {
  ai: {
    color: "#FF9900",
    headline: "Generative AI on AWS",
    body: "Build and scale generative AI applications with Amazon Bedrock. We help you experiment with multiple foundation models while ensuring enterprise-grade governance and security.",
    img: awsTabAI,
    points: [
      "FMOps & Model Governance",
      "RAG Architecture Design",
      "SageMaker Training Clusters",
      "Cost-Optimized Inference",
    ],
  },
  migration: {
    color: "#962964",
    headline: "Migration & Modernization",
    body: "Move to AWS with confidence using our Migration Acceleration Program (MAP) expertise. We don't just lift and shift; we replatform and refactor for cloud-native agility.",
    img: awsTabMigration,
    points: [
      "Large-scale MAP 2.0 Projects",
      "Mainframe Modernization",
      "Database Freedom (Aurora/DynamoDB)",
      "App Containerization (EKS)",
    ],
  },
  data: {
    color: "#ce2453",
    headline: "Data Analytics & ML",
    body: "Turn your data into differentiation. From Data Lakes on S3 to real-time streaming with Kinesis, we build scalable architectures that fuel intelligent decision-making.",
    img: awsTabData,
    points: [
      "Modern Data Architecture",
      "Real-time Analytics ETL",
      "SageMaker MLOps Pipelines",
      "QuickSight Visualisation",
    ],
  },
  security: {
    color: "#dd5c54",
    headline: "Enterprise Security",
    body: "Implementing Zero-Trust on AWS. We automate security controls and compliance monitoring, ensuring your AWS environment is secure by design from day one.",
    img: awsTabSecurity,
    points: [
      "IAM Identity Center Setup",
      "AWS GuardDuty & Security Hub",
      "Compliance Automation (PCI/HIPAA)",
      "Network Security (VPC Lattice)",
    ],
  },
  devops: {
    color: "#e79e57",
    headline: "DevSecOps & Platform",
    body: "Accelerate delivery with AWS-native DevOps. We build Internal Developer Platforms (IDP) that empower engineers while maintaining strict operational guardrails.",
    img: awsTabDevOps,
    points: [
      "AWS Control Tower Governance",
      "IaC with CDK & Terraform",
      "Blue/Green Deployment Pipes",
      "Observability with CloudWatch",
    ],
  },
  edge: {
    color: "#522c72",
    headline: "IoT & Edge Computing",
    body: "Processing data closer to where it's created. We leverage AWS Greengrass and Snowball to build resilient edge solutions for manufacturing, retail, and logistics.",
    img: awsTabEdge,
    points: [
      "IoT Greengrass Deployment",
      "FreeRTOS Embedded Logic",
      "Edge Computer Vision",
      "Hybrid-Cloud Connectivity",
    ],
  },
};

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
    tag: "Cloud Strategy",
    icon: <FiCloud />,
    title: "Cloud Migration at Scale",
    desc: "How we reduced time-to-cloud by 60% for a 500-node enterprise using AWS Migration Hub and automated dependency mapping.",
    img: awsInsightCloud,
    color: "#FF9900",
  },
  {
    tag: "AI & Data",
    icon: <FiCpu />,
    title: "AI Modernization with AWS Bedrock",
    desc: "Deploying foundation models in production — a practical guide to governance, cost control, and latency optimisation on Bedrock.",
    img: awsInsightAI,
    color: "#962964",
  },
  {
    tag: "Security",
    icon: <FiShield />,
    title: "Zero-Trust on AWS: A Blueprint",
    desc: "Building a zero-trust architecture using IAM Identity Center, VPC Lattice, and AWS Security Hub — step by step.",
    img: awsInsightSecurity,
    color: "#ce2453",
  },
];

const WHATS_NEW = [
  {
    type: "Press Release",
    date: "Feb 2025",
    title: "Devopstrio Achieves AWS DevOps Competency",
    color: "#FF9900",
  },
  {
    type: "Partnership",
    date: "Jan 2025",
    title: "New AWS GenAI Innovation Centre Partnership",
    color: "#962964",
  },
  {
    type: "Product Launch",
    date: "Dec 2024",
    title: "Launching FinOps-as-a-Service Powered by AWS CUR",
    color: "#ce2453",
  },
  {
    type: "AWS Summit",
    date: "Nov 2024",
    title: "Devopstrio Keynote: Cloud-Native at Scale",
    color: "#dd5c54",
  },
];

const STATS = [
  { val: "12+", lbl: "AWS Awards & Recognitions", icon: <FiStar /> },
  { val: "500+", lbl: "Certified Cloud Engineers", icon: <FiUsers /> },
  { val: "2500+", lbl: "Production Deployments", icon: <FiZap /> },
  { val: "1700+", lbl: "AWS Certifications Held", icon: <FiShield /> },
];

const COMPETENCIES = [
  { icon: <FiCpu />, label: "DevOps", tier: "Competency", color: "#FF9900" },
  {
    icon: <FiCloud />,
    label: "Migration",
    tier: "Competency",
    color: "#FF9900",
  },
  {
    icon: <FiShield />,
    label: "Security",
    tier: "Competency",
    color: "#FF9900",
  },
  {
    icon: <FiServer />,
    label: "Infrastructure",
    tier: "Service Path",
    color: "#7d18d1",
  },
  {
    icon: <FiBarChart2 />,
    label: "Data & Analytics",
    tier: "Competency",
    color: "#FF9900",
  },
  {
    icon: <FiGlobe />,
    label: "Government",
    tier: "Service Path",
    color: "#962964",
  },
  {
    icon: <FiDatabase />,
    label: "Database",
    tier: "Competency",
    color: "#FF9900",
  },
  {
    icon: <FiTrendingUp />,
    label: "Machine Learning",
    tier: "Competency",
    color: "#ce2453",
  },
  { icon: <FiCode />, label: "SaaS", tier: "Competency", color: "#dd5c54" },
];

const PROGRAMS = [
  {
    icon: <FiTrendingUp />,
    title: "AWS MAP",
    desc: "Migration Acceleration Program — co-funded migrations with AWS investment credits.",
    color: "#FF9900",
  },
  {
    icon: <FiCpu />,
    title: "AWS GenAI Program",
    desc: "Early access to AWS Bedrock, SageMaker, and foundation model tooling for rapid innovation.",
    color: "#962964",
  },
  {
    icon: <FiShield />,
    title: "AWS Security Hub",
    desc: "Centralized security findings across multi-account environments, automated remediation included.",
    color: "#ce2453",
  },
  {
    icon: <FiPackage />,
    title: "AWS ISV Accelerate",
    desc: "Co-sell motion with AWS sales teams to bring partner solutions to enterprise AWS customers faster.",
    color: "#dd5c54",
  },
];

const SOLUTIONS = [
  {
    icon: <FiCloud />,
    title: "Cloud Landing Zone",
    desc: "Secure, scalable AWS foundations via Control Tower and Account Factory.",
    color: "#FF9900",
    moreDetails: [
      "Control Tower & Guardrails",
      "Account Factory automation",
      "VPC / Subnet networking",
      "AWS Organizations setup",
    ],
  },
  {
    icon: <FiZap />,
    title: "CI/CD Automation",
    desc: "Full pipeline automation — CodePipeline, GitHub Actions, and EKS deployments.",
    color: "#962964",
    moreDetails: [
      "AWS CodePipeline setup",
      "GitHub Actions integration",
      "Blue/Green deployments",
      "Containerisation (EKS/ECS)",
    ],
  },
  {
    icon: <FiShield />,
    title: "Compliance as Code",
    desc: "AWS Config rules, GuardDuty, and Security Hub for SOC 2 & PCI-DSS.",
    color: "#ce2453",
    moreDetails: [
      "Automated Config rules",
      "GuardDuty threat detection",
      "Security Hub integration",
      "SOC 2 / PCI-DSS compliance",
    ],
  },
  {
    icon: <FiDatabase />,
    title: "Data Lake & Analytics",
    desc: "S3-based data lakes, Glue pipelines, and Athena for self-serve analytics.",
    color: "#dd5c54",
    moreDetails: [
      "S3 Data Lake architecture",
      "AWS Glue ETL pipelines",
      "Athena SQL querying",
      "QuickSight visualisation",
    ],
  },
  {
    icon: <FiCpu />,
    title: "ML Platforms on SageMaker",
    desc: "End-to-end ML workflows — training, deployment, and monitoring on SageMaker.",
    color: "#7d18d1",
    moreDetails: [
      "SageMaker model training",
      "Automated MLOps pipelines",
      "Model monitoring & drift",
      "Inference endpoint setup",
    ],
  },
  {
    icon: <FiServer />,
    title: "FinOps & Cost Control",
    desc: "AWS Cost Explorer, savings plans, and reserved instance optimisation programs.",
    color: "#FF9900",
    moreDetails: [
      "Cost Explorer dashboards",
      "Savings Plans strategy",
      "Reserved Instance mgmt",
      "Budget alerts & governance",
    ],
  },
  {
    icon: <FiMonitor />,
    title: "Observability Stack",
    desc: "CloudWatch, X-Ray, and third-party SIEM integrations for full-stack visibility.",
    color: "#962964",
    moreDetails: [
      "CloudWatch logs & metrics",
      "X-Ray distributed tracing",
      "Application Insights",
      "Managed Grafana/Prometheus",
    ],
  },
  {
    icon: <FiGlobe />,
    title: "Multi-Region DR",
    desc: "Pilot light and warm standby disaster recovery architectures across AWS regions.",
    color: "#ce2453",
    moreDetails: [
      "Multi-region replication",
      "Route 53 failover design",
      "Pilot Light / Warm Standby",
      "Backup & Recovery testing",
    ],
  },
  {
    icon: <FiCode />,
    title: "Serverless Applications",
    desc: "Lambda, API Gateway, and EventBridge for event-driven cloud-native workloads.",
    color: "#dd5c54",
    moreDetails: [
      "AWS Lambda development",
      "API Gateway management",
      "EventBridge architecture",
      "Step Functions workflows",
    ],
  },
];

const CASE_STUDIES = [
  {
    logo: "Fintech Co.",
    tag: "Cloud Migration",
    title:
      "Moved 400TB of banking data to AWS in 72 hours zero-downtime cutover",
    metric: "73% cost reduction post-migration",
    color: "#FF9900",
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700&q=80",
  },
  {
    logo: "RetailChain",
    tag: "DevOps",
    title:
      "From 2 deploys/week to 47 deploys/day using AWS CodePipeline and EKS",
    metric: "23× deployment frequency improvement",
    color: "#962964",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=700&q=80",
  },
  {
    logo: "HealthTech",
    tag: "Security",
    title: "Achieved HIPAA + SOC 2 Type II compliance in 90 days on AWS",
    metric: "Zero audit findings across 3 assessments",
    color: "#ce2453",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80",
  },
];

const NEWS = [
  {
    tag: "Blog",
    date: "Feb 18, 2025",
    title: "Why AWS Bedrock Changes the GenAI Deployment Model",
    readTime: "6 min read",
    color: "#FF9900",
  },
  {
    tag: "Case Study",
    date: "Feb 5, 2025",
    title: "How We Cut S3 Costs by 68% for a Media Streaming Platform",
    readTime: "8 min read",
    color: "#962964",
  },
  {
    tag: "Technical Deep-Dive",
    date: "Jan 22, 2025",
    title: "EKS Upgrade Strategies: Blue-Green vs Rolling vs Canary",
    readTime: "12 min read",
    color: "#ce2453",
  },
];

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
const AWSPartners = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("ai");
  const [caseIdx, setCaseIdx] = useState(0);
  const [newsIdx, setNewsIdx] = useState(0);
  const [expandedSol, setExpandedSol] = useState(null);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const prevCase = () =>
    setCaseIdx((i) => (i - 1 + CASE_STUDIES.length) % CASE_STUDIES.length);
  const nextCase = () => setCaseIdx((i) => (i + 1) % CASE_STUDIES.length);
  const prevNews = () => setNewsIdx((i) => (i - 1 + NEWS.length) % NEWS.length);
  const nextNews = () => setNewsIdx((i) => (i + 1) % NEWS.length);

  const c = CASE_STUDIES[caseIdx];
  const n = NEWS[newsIdx];
  const tab = TAB_CONTENT[activeTab];

  return (
    <div className="aws-page">
      {/* ════════ 1. HERO SPLIT ════════ */}
      <section className="aws-hero">
        <div className="aws-container aws-hero-layout">
          <motion.div
            className="aws-hero-left"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
          >
            <div className="aws-partner-badge">
              <div className="aws-badge-logo">
                <span>AWS</span>
              </div>
              <div className="aws-badge-text">
                <strong>Advanced Tier Services Partner</strong>
                <span>Partner since 2019 · 9 Competencies</span>
              </div>
              <div className="aws-badge-dot">
                <FiCheck />
              </div>
            </div>
            <h1 className="aws-hero-h1">
              Devopstrio&amp;
              <br />
              <span className="aws-grad">Amazon Web Services</span>
            </h1>
            <p className="aws-hero-sub">
              Accelerating digital transformation with GenAI, cloud
              modernisation, and enterprise-grade AWS solutions — backed by 500+
              AWS-certified engineers across 4 global offices.
            </p>
            <div className="aws-hero-actions">
              <button
                className="aws-btn-primary aws-btn-lg"
                onClick={() => navigate("/contact")}
              >
                Talk to AWS Experts <FiArrowRight />
              </button>
            </div>
          </motion.div>

          <motion.div
            className="aws-hero-right"
            variants={fadeRight}
            initial="hidden"
            animate="visible"
          >
            <div className="aws-video-card" onClick={() => !videoPlaying && setVideoPlaying(true)}>
              {videoPlaying ? (
                <video
                  ref={videoRef}
                  src={awsVideo}
                  className="aws-video-player"
                  controls
                  autoPlay
                  playsInline
                  onTimeUpdate={() => {
                    if (videoRef.current) {
                      localStorage.setItem("aws_video_progress", videoRef.current.currentTime);
                    }
                  }}
                  onLoadedMetadata={() => {
                    if (videoRef.current) {
                      const savedTime = localStorage.getItem("aws_video_progress");
                      if (savedTime) {
                        videoRef.current.currentTime = parseFloat(savedTime);
                      }
                    }
                  }}
                  onEnded={() => {
                    setVideoPlaying(false);
                    localStorage.removeItem("aws_video_progress");
                  }}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=900&q=80"
                    alt="AWS Cloud infrastructure"
                    className="aws-video-thumb"
                  />
                  <div className="aws-video-overlay" />
                  <button className="aws-play-btn" aria-label="Play video">
                    <FiPlay />
                  </button>
                  <div className="aws-video-label">
                    <span className="aws-live-dot" />
                    AWS Partnership Overview · 3:24
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════ 2. PARTNERSHIP BANNER ════════ */}
      <section className="aws-partnership-banner">
        <div className="aws-banner-inner-content">
          <motion.div
            className="aws-container aws-banner-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="aws-eyebrow aws-grad">Verified Excellence</p>
            <h2 className="aws-banner-h2">
              Powering Your Digital Future
              <br />
              <span className="aws-grad">with Amazon Web Services</span>
            </h2>
            <p className="aws-banner-sub">
              As an AWS Advanced Tier Partner, we combine deep technical
              certifications with real delivery track records — not slide decks.
            </p>

            {/* Feature Content & Image Grid */}
            <motion.div className="aws-banner-feature-grid" variants={fadeUp}>
              <div className="aws-banner-feat-content">
                <h3 className="aws-banner-feat-h3">Advanced Modernization</h3>
                <p className="aws-banner-feat-p">
                  We don&rsquo;t just migrate; we modernize. Our partnership
                  grants you exclusive access to AWS internal acceleration
                  programs and funding opportunities to reduce your TCO by up to
                  40%.
                </p>
                <div className="aws-banner-feat-list">
                  <div className="aws-banner-feat-item">
                    <FiCheck className="aws-feat-icon" />
                    <span>AWS MAP 2.0 Certified Delivery Partner</span>
                  </div>
                  <div className="aws-banner-feat-item">
                    <FiCheck className="aws-feat-icon" />
                    <span>Well-Architected Review & Remediation</span>
                  </div>
                  <div className="aws-banner-feat-item">
                    <FiCheck className="aws-feat-icon" />
                    <span>Native GenAI Implementation with Bedrock</span>
                  </div>
                </div>
              </div>

              <div className="aws-banner-feat-image">
                <div className="aws-feat-img-card">
                  <img
                    src={aws_dashboard}
                    alt="AWS Infrastructure"
                  />
                  <div className="aws-feat-img-overlay" />
                  <div className="aws-feat-img-glow" />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ════════ 3. SIDEBAR TABS — PRACTICE AREAS ════════ */}
      <section className="aws-tab-section">
        <div className="aws-container">
          <motion.div
            className="aws-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="aws-eyebrow aws-grad">Deep Expertise</p>
            <h2 className="aws-sec-h2">
              Our AWS Platform
              <br />
              <span className="aws-grad">Practice Areas</span>
            </h2>
            <p className="aws-sec-sub">
              Six production-grade AWS practice areas — each with dedicated
              delivery teams, reference architectures, and AWS-certified
              professionals.
            </p>
          </motion.div>

          <div className="aws-tab-layout">
            {/* Sidebar */}
            <motion.div
              className="aws-tab-sidebar"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {TABS.map((t) => (
                <button
                  key={t.id}
                  className={`aws-tab-btn ${activeTab === t.id ? "on" : ""}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  <span className="aws-tab-icon">{t.icon}</span>
                  <span className="aws-tab-label">{t.label}</span>
                  <FiChevronRight className="aws-tab-arrow" />
                  <div
                    className="aws-tab-bar"
                    style={{ "--tc": TAB_CONTENT[t.id].color }}
                  />
                </button>
              ))}
            </motion.div>

            {/* Panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="aws-tab-panel"
                style={{ "--tc": tab.color }}
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.28 } }}
              >
                <div className="aws-tab-img-wrap">
                  <img src={tab.img} alt={tab.headline} />
                  <div
                    className="aws-tab-img-overlay"
                    style={{ "--tc": tab.color }}
                  />
                  <div
                    className="aws-tab-img-label"
                    style={{ borderColor: tab.color, color: tab.color }}
                  >
                    {TABS.find((t) => t.id === activeTab)?.icon}
                    {TABS.find((t) => t.id === activeTab)?.label}
                  </div>
                </div>
                <div className="aws-tab-body">
                  <h3 className="aws-tab-h3" style={{ color: tab.color }}>
                    {tab.headline}
                  </h3>
                  <p className="aws-tab-p">{tab.body}</p>
                  <ul className="aws-tab-points">
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
                          className="aws-tab-check"
                          style={{ background: tab.color }}
                        >
                          <FiCheck />
                        </span>
                        {pt}
                      </motion.li>
                    ))}
                  </ul>
                  <button
                    className="aws-btn-primary"
                    style={{ "--bc": tab.color, marginTop: "10px" }}
                    onClick={() => navigate("/contact")}
                  >
                    Discuss Your {TABS.find((t) => t.id === activeTab)?.label}{" "}
                    Project <FiArrowRight />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ════════ 4. INSIGHTS — 3 Cards ════════ */}
      <section className="aws-insights-section">
        <div className="aws-container">
          <motion.div
            className="aws-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="aws-eyebrow aws-grad">Knowledge Hub</p>
            <h2 className="aws-sec-h2">
              Unlock Cloud Transformation
              <br />
              <span className="aws-grad">Insights</span>
            </h2>
            <p className="aws-sec-sub">
              Practical engineering content from our AWS practice teams — no
              fluff, all signal.
            </p>
          </motion.div>

          <motion.div
            className="aws-insight-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {INSIGHTS.map((ins, i) => (
              <motion.div
                key={i}
                className="aws-insight-card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                style={{ "--ic": ins.color }}
              >
                <div className="aws-insight-img-wrap">
                  <img src={ins.img} alt={ins.title} />
                  <div className="aws-insight-tint" />
                </div>
                <div className="aws-insight-body">
                  <div className="aws-insight-tag">
                    <span className="aws-tag-icon">{ins.icon}</span>
                    {ins.tag}
                  </div>
                  <h3 className="aws-insight-title">{ins.title}</h3>
                  <p className="aws-insight-desc">{ins.desc}</p>

                </div>
                <div className="aws-insight-bar" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ 4. WHAT'S NEW — 4 Cards ════════ */}
      <section className="aws-whatsnew-section">
        <div className="aws-container">
          <motion.div
            className="aws-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="aws-eyebrow aws-grad">Latest Updates</p>
            <h2 className="aws-sec-h2">
              What&rsquo;s <span className="aws-grad">New</span>
            </h2>
          </motion.div>

          <motion.div
            className="aws-whatsnew-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {WHATS_NEW.map((item, i) => (
              <motion.div
                key={i}
                className="aws-new-card"
                variants={fadeUp}
                whileHover={{ y: -5 }}
                style={{ "--nc": item.color }}
              >
                <div
                  className="aws-new-tag"
                  style={{
                    color: item.color,
                    background: `${item.color}10`,
                    borderColor: `${item.color}25`,
                  }}
                >
                  {item.type}
                </div>
                <p className="aws-new-date">{item.date}</p>
                <h3 className="aws-new-title">{item.title}</h3>

                <div className="aws-new-bar" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ 5. STATS STRIP ════════ */}
      <section className="aws-stats-section">
        <div className="aws-container">
          <motion.div
            className="aws-stats-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STATS.map((s, i) => (
              <motion.div key={i} className="aws-stat-card" variants={fadeUp}>
                <div className="aws-stat-icon">{s.icon}</div>
                <div className="aws-stat-val">{s.val}</div>
                <div className="aws-stat-lbl">{s.lbl}</div>
                <div className="aws-stat-underline" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ 6. COMPETENCIES — Dark Grid ════════ */}
      <section className="aws-comp-section">
        <div className="aws-container">
          <motion.div
            className="aws-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="aws-eyebrow aws-grad">Recognised Excellence</p>
            <h2 className="aws-sec-h2">
              AWS Competencies
              <br />
              <span className="aws-grad">&amp; Designations</span>
            </h2>
            <p className="aws-sec-sub">
              Each competency represents hundreds of hours of validated customer
              success — earned, never bought.
            </p>
          </motion.div>

          <motion.div
            className="aws-comp-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {COMPETENCIES.map((c, i) => (
              <motion.div
                key={i}
                className="aws-comp-card"
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{ "--cc": c.color }}
              >
                <div className="aws-comp-icon-wrap">{c.icon}</div>
                <h3 className="aws-comp-label">{c.label}</h3>
                <span className="aws-comp-tier">{c.tier}</span>
                <div className="aws-comp-stars">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <FiStar key={s} />
                  ))}
                </div>
                <div className="aws-comp-glow" />
                <div className="aws-comp-bar" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ 7. PROGRAMS — Future Grid ════════ */}
      <section className="aws-programs-section">
        <div className="aws-container">
          <motion.div
            className="aws-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="aws-eyebrow aws-grad">Access &amp; Opportunity</p>
            <h2 className="aws-sec-h2">
              AWS Partner
              <br />
              <span className="aws-grad">Programs</span>
            </h2>
          </motion.div>

          <motion.div
            className="aws-programs-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {PROGRAMS.map((p, i) => (
              <motion.div
                key={i}
                className="aws-program-card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
                style={{ "--pc": p.color }}
              >
                <div
                  className="aws-program-icon"
                  style={{
                    color: p.color,
                    background: `${p.color}12`,
                    borderColor: `${p.color}22`,
                  }}
                >
                  {p.icon}
                </div>
                <h3 className="aws-program-title">{p.title}</h3>
                <p className="aws-program-desc">{p.desc}</p>

                <div className="aws-program-bar" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════ 8. SOLUTIONS MEGA GRID ════════ */}
      <section className="aws-solutions-section">
        <div className="aws-container">
          <motion.div
            className="aws-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="aws-eyebrow aws-grad">What We Build</p>
            <h2 className="aws-sec-h2">
              Offerings &amp;
              <br />
              <span className="aws-grad">Solutions</span>
            </h2>
            <p className="aws-sec-sub">
              Nine proven solution areas — each with reference architectures,
              certified delivery teams, and real client results.
            </p>
          </motion.div>

          <motion.div
            className="aws-solutions-grid"
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
                  className={`aws-solution-card ${isExpanded ? "expanded" : ""}`}
                  variants={fadeUp}
                  whileHover={!isExpanded ? { y: -5 } : {}}
                  style={{ "--sc": s.color }}
                  onClick={() => setExpandedSol(isExpanded ? null : i)}
                >
                  <div
                    className="aws-solution-icon"
                    style={{
                      color: s.color,
                      background: `${s.color}10`,
                      borderColor: `${s.color}20`,
                    }}
                  >
                    {s.icon}
                  </div>
                  <h3 className="aws-solution-title">{s.title}</h3>
                  <p className="aws-solution-desc">{s.desc}</p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        className="aws-solution-details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <ul className="aws-solution-list">
                          {s.moreDetails.map((detail, idx) => (
                            <li key={idx}>
                              <FiCheck style={{ color: s.color }} />
                              {detail}
                            </li>
                          ))}
                        </ul>
                        <button
                          className="aws-solution-btn"
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

                  <div className="aws-solution-arrow">
                    <FiChevronRight
                      style={{
                        transform: isExpanded ? "rotate(90deg)" : "none",
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </div>
                  <div className="aws-solution-bar" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ════════ 9. CASE STUDIES CAROUSEL ════════ */}
      <section className="aws-carousel-section">
        <div className="aws-container">
          <motion.div
            className="aws-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="aws-eyebrow aws-grad">Proven Results</p>
            <h2 className="aws-sec-h2">
              Client <span className="aws-grad">Success Stories</span>
            </h2>
          </motion.div>

          <div className="aws-carousel-wrap">
            <AnimatePresence mode="wait">
              <motion.div
                key={caseIdx}
                className="aws-case-card"
                initial={{ opacity: 0, x: 60 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                }}
                exit={{ opacity: 0, x: -40, transition: { duration: 0.3 } }}
                style={{ "--cc": c.color }}
              >
                <div className="aws-case-img-wrap">
                  <img src={c.img} alt={c.title} />
                  <div
                    className="aws-case-img-overlay"
                    style={{ "--cc": c.color }}
                  />
                </div>
                <div className="aws-case-body">
                  <div
                    className="aws-case-tag"
                    style={{
                      color: c.color,
                      background: `${c.color}10`,
                      borderColor: `${c.color}25`,
                    }}
                  >
                    {c.tag}
                  </div>
                  <div className="aws-case-logo">{c.logo}</div>
                  <h3 className="aws-case-title">{c.title}</h3>
                  <div
                    className="aws-case-metric"
                    style={{
                      borderColor: `${c.color}35`,
                      background: `${c.color}06`,
                    }}
                  >
                    <FiTrendingUp style={{ color: c.color }} />
                    {c.metric}
                  </div>
                  <button
                    className="aws-btn-primary"
                    onClick={() => navigate("/clients")}
                  >
                    Read Full Case Study <FiArrowRight />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="aws-carousel-controls">
              <button className="aws-carousel-btn" onClick={prevCase}>
                <FiChevronLeft />
              </button>
              <div className="aws-carousel-dots">
                {CASE_STUDIES.map((_, i) => (
                  <button
                    key={i}
                    className={`aws-cdot ${caseIdx === i ? "on" : ""}`}
                    onClick={() => setCaseIdx(i)}
                  />
                ))}
              </div>
              <button className="aws-carousel-btn" onClick={nextCase}>
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ 10. NEWS & INSIGHTS CAROUSEL ════════ */}
      <section className="aws-news-section">
        <div className="aws-container">
          <motion.div
            className="aws-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="aws-eyebrow aws-grad">From the Lab</p>
            <h2 className="aws-sec-h2">
              News &amp; <span className="aws-grad">Insights</span>
            </h2>
          </motion.div>

          <div className="aws-news-layout">
            {/* Featured article (active) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={newsIdx}
                className="aws-news-featured"
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
                  className="aws-news-tag"
                  style={{
                    color: n.color,
                    background: `${n.color}10`,
                    borderColor: `${n.color}25`,
                  }}
                >
                  {n.tag}
                </div>
                <p className="aws-news-date">{n.date}</p>
                <h3 className="aws-news-title">{n.title}</h3>
                <p className="aws-news-read">{n.readTime}</p>

              </motion.div>
            </AnimatePresence>

            {/* Sidebar list */}
            <div className="aws-news-list">
              {NEWS.map((item, i) => (
                <button
                  key={i}
                  className={`aws-news-item ${newsIdx === i ? "on" : ""}`}
                  style={{ "--nc": item.color }}
                  onClick={() => setNewsIdx(i)}
                >
                  <div
                    className="aws-news-item-tag"
                    style={{ color: item.color }}
                  >
                    {item.tag}
                  </div>
                  <p className="aws-news-item-title">{item.title}</p>
                  <span className="aws-news-item-read">{item.readTime}</span>
                  <div className="aws-news-item-bar" />
                </button>
              ))}
              <div className="aws-news-carousel-ctrl">
                <button className="aws-carousel-btn sm" onClick={prevNews}>
                  <FiChevronLeft />
                </button>
                <div className="aws-carousel-dots">
                  {NEWS.map((_, i) => (
                    <button
                      key={i}
                      className={`aws-cdot ${newsIdx === i ? "on" : ""}`}
                      onClick={() => setNewsIdx(i)}
                    />
                  ))}
                </div>
                <button className="aws-carousel-btn sm" onClick={nextNews}>
                  <FiChevronRight />
                </button>
              </div>
            </div>
          </div>
          <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
            <Newsletter />
          </div>        </div>
      </section>

      {/* ════════ 11. FINAL CTA BANNER ════════ */}
      {/* <section className="aws-final-section">
        <div className="aws-final-bg">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=80"
            alt="Devopstrio  AWS Team"
          />
          <div className="aws-final-overlay" />
        </div>
        <motion.div
          className="aws-container aws-final-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="aws-eyebrow aws-grad">Start Today</p>
          <h2 className="aws-final-h2">
            Unleash Business Value
            <br />
            <span className="aws-grad">on Amazon Web Services.</span>
          </h2>
          <p className="aws-final-sub">
            Whether you&rsquo;re migrating, modernising, or building
            cloud-native from scratch — our AWS practice delivers results you
            can measure, in timelines you can trust.
          </p>
          <div className="aws-final-btns">
            <button
              className="aws-btn-primary aws-btn-lg"
              onClick={() => navigate("/contact")}
            >
              Get a Free AWS Assessment <FiArrowRight />
            </button>
            <button
              className="aws-btn-ghost aws-btn-lg"
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

export default AWSPartners;
