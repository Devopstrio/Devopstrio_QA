import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useNavigate } from "react-router-dom";

import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

import {
  FiArrowRight,
  FiChevronDown,
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
  FiTrendingUp,
  FiServer,
  FiBox,
  FiActivity,
  FiEye,
  FiMessageSquare,
  FiDatabase,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

import "../../Style/marketplace/AIML.css";

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ── DATA ── */

const capabilities = [
  {
    id: "predictive",
    num: "01",
    icon: <FiActivity />,
    title: "Predictive Analytics",
    sub: "Data & Modeling",
    color: "#7d18d1",
    desc: "Leverage historical data to predict future trends. We build custom machine learning pipelines that forecast demand, optimize pricing models, and identify risks before they occur.",
    bullets: [
      "Time-series forecasting models",
      "Dynamic pricing algorithms",
      "Customer churn prediction",
      "Supply chain optimization AI",
    ],
    stat: { val: "40%", sub: "Increase in Forecast Accuracy" },
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
  },
  {
    id: "vision",
    num: "02",
    icon: <FiEye />,
    title: "Computer Vision Systems",
    sub: "Visual Intelligence",
    color: "#cd1979",
    desc: "Transform visual data into actionable insights. We deploy deep learning models capable of object detection, image classification, and real-time video analytics for enterprise environments.",
    bullets: [
      "Automated defect detection in manufacturing",
      "Real-time video surveillance & tracking",
      "Medical imaging analysis",
      "Facial recognition integration",
    ],
    stat: { val: "99%", sub: "Defect Detection Rate" },
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=80",
  },
  {
    id: "nlp",
    num: "03",
    icon: <FiMessageSquare />,
    title: "Natural Language Processing",
    sub: "Conversational AI",
    color: "#d7134b",
    desc: "Give your software the ability to understand human language. We build contextual chatbots, sentiment analysis engines, and semantic search tools tailored to your domain.",
    bullets: [
      "Context-aware AI customer support agents",
      "Enterprise document search & extraction",
      "Real-time sentiment and intent analysis",
      "Automated compliance document reviews",
    ],
    stat: { val: "24/7", sub: "Automated Support Resolution" },
    image:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?w=900&q=80",
  },
  {
    id: "genai",
    num: "04",
    icon: <FiCpu />,
    title: "Generative AI Integration",
    sub: "LLM & Foundation Models",
    color: "#ca2317",
    desc: "Seamlessly integrate Large Language Models (LLMs) into your ecosystem. We fine-tune models like GPT-4 and Llama to generate code, draft communications, and summarize vast proprietary datasets securely.",
    bullets: [
      "Secure API integration with foundational models",
      "Custom LoRA fine-tuning for proprietary data",
      "Automated content drafting pipelines",
      "Multi-modal generative capabilities",
    ],
    stat: { val: "10x", sub: "Content Production Speed" },
    image:
      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80",
  },
  {
    id: "mlops",
    num: "05",
    icon: <FiDatabase />,
    title: "Enterprise MLOps",
    sub: "Deployment & Scale",
    color: "#c46d16",
    desc: "Moving from notebook to production is hard. We implement end-to-end MLOps architectures to automate CI/CD for machine learning, model registry management, and drift monitoring.",
    bullets: [
      "Automated model retraining pipelines",
      "Real-time data drift and latency monitoring",
      "Kubernetes-based scalable inference APIs",
      "Centralized model versioning and registry",
    ],
    stat: { val: "Zero", sub: "Downtime Deployments" },
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
  },
];

const stats = [
  { val: "50+", lbl: "AI Models Deployed", icon: <FiBox /> },
  { val: "2.4B", lbl: "Inferences Monthly", icon: <FiTrendingUp /> },
  { val: "99.8%", lbl: "Model Accuracy", icon: <FiShield /> },
  { val: "< 20ms", lbl: "Inference Latency", icon: <FiZap /> },
  { val: "40%", lbl: "TCO Reduction", icon: <FiBarChart2 /> },
  { val: "Tier 1", lbl: "Enterprise Security", icon: <FiShield /> },
];

const testimonials = [
  {
    quote:
      "Devopstrio didn't just give us a chatbot. They fine-tuned an LLM on our 10 years of proprietary legal contracts. It now drafts initial agreements in 3 seconds instead of 3 hours.",
    name: "Sarah Jenkins",
    role: "Head of Innovation, LegalTech Solutions",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80",
    metrics: [
      { val: "3 sec", lbl: "Drafting Time" },
      { val: "-80%", lbl: "Manual Reviews" },
    ],
  },
  {
    quote:
      "Their computer vision deployment on our manufacturing line identified microscopic defects our human QA was missing. The MLOps pipeline they built ensures the model keeps learning automatically.",
    name: "David Ross",
    role: "VP Operations, AutoCorp",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    metrics: [
      { val: "99.9%", lbl: "Defect Catch Rate" },
      { val: "0", lbl: "Maintenance Windows" },
    ],
  },
];

const faqs = [
  {
    q: "How do you ensure our sensitive data remains private when using LLMs?",
    a: "We never send sensitive proprietary data to public foundation models without secure perimeters. We implement private VPC deployments, utilize Azure OpenAI for enterprise SLAs, or fine-tune open-source models (like Llama) that run entirely within your secure cloud infrastructure.",
  },
  {
    q: "Do we need an in-house data science team to maintain these solutions?",
    a: "No. Our Enterprise MLOps framework includes automated retraining pipelines and drift monitoring. If a model's accuracy drops below a threshold, the system automatically alerts and begins retraining. We offer ongoing managed services to handle the infrastructure entirely.",
  },
  {
    q: "What is the typical timeframe for deploying an AI solution?",
    a: "Depending on data readiness, a proof-of-concept (PoC) typically takes 4–6 weeks. Full production deployment, including building the inference APIs and integrating with your existing software suite, generally takes 12–16 weeks.",
  },
  {
    q: "Can you help organize our data before implementing machine learning?",
    a: "Absolutely. Data engineering is a prerequisite to AI. If your data is siloed or unstructured, our first sprint focuses on building a centralized data lake/warehouse (Snowflake, BigQuery, AWS S3) and establishing ETL pipelines to ensure clean data feeds into the models.",
  },
];

const TICKER_ITEMS = [
  { icon: <FiCpu />, val: "10B+", lbl: "Parameters Tuned", color: "#7d18d1" },
  {
    icon: <FiTrendingUp />,
    val: "3.5x",
    lbl: "Productivity Lift",
    color: "#cd1979",
  },
  {
    icon: <FiShield />,
    val: "GDPR/SOC2",
    lbl: "Compliant AI",
    color: "#ce2453",
  },
  { icon: <FiZap />, val: "< 20ms", lbl: "Edge Inference", color: "#dd5c54" },
  { icon: <FiUsers />, val: "1M+", lbl: "Users Interacting", color: "#e79e57" },
  {
    icon: <FiLayers />,
    val: "Automated",
    lbl: "MLOps CI/CD",
    color: "#7d18d1",
  },
];

const OUR_PRODUCTS = [
  {
    name: "Forecast AI",
    category: "Retail · Analytics",
    color: "#7d18d1",
    desc: "Advanced time-series forecasting model that ingestion weather data, historical sales, and macro-economics to predict inventory needs globally.",
    pills: ["Predictive", "Inventory", "Retail"],
  },
  {
    name: "VisionInspect",
    category: "Manufacturing",
    color: "#cd1979",
    desc: "Real-time edge computer vision inference platform processing 120fps video to spot micro-defects on automotive assembly lines.",
    pills: ["Computer Vision", "Edge AI", "QA"],
  },
  {
    name: "DocuParse LLM",
    category: "Legal · GenAI",
    color: "#ce2453",
    desc: "A secure, VPC-hosted foundational model fine-tuned entirely on a massive corpus of legal contracts for risk-flagging and automated redaction.",
    pills: ["GenAI", "NLP", "Security"],
  },
  {
    name: "ChurnPredictor",
    category: "SaaS · ML",
    color: "#dd5c54",
    desc: "Classification algorithms plugged directly into CRM event streams to predict user churn probability 40 days before account cancellation.",
    pills: ["XGBoost", "Data Science", "CRM"],
  },
];

/* ── COMPONENT ── */
const AIML = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [tickerPaused, setTickerPaused] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const panelRefs = useRef([]);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
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
      6000,
    );
    return () => clearInterval(t);
  }, []);

  return (
    <div className="aiml-page">
      {/* ════════════════════════════════════
          1. HERO STATEMENT — Cinematic parallax
          ════════════════════════════════════ */}
      <section className="aiml-hero-statement" ref={heroRef}>
        {/* 3D Space Background */}
        <div className="aiml-space-warp">
          <div className="aiml-warp-stars aiml-warp-stars1"></div>
          <div className="aiml-warp-stars aiml-warp-stars2"></div>
          <div className="aiml-warp-stars aiml-warp-stars3"></div>
          <div className="aiml-warp-stars aiml-warp-stars4"></div>
        </div>

        <motion.div
          className="aiml-container aiml-hero-content"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="aiml-eyebrow aiml-grad-text"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            ENTERPRISE AI & MACHINE LEARNING
          </motion.p>
          <motion.h1
            className="aiml-hero-title"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            Embed True Intelligence
            <br />
            <span className="aiml-grad-text">Into Your Ecosystem</span>
          </motion.h1>
          <motion.p
            className="aiml-hero-sub"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            From custom predictive models and computer vision pipelines to
            end-to-end LLM deployments. We build, fine-tune, and scale AI
            architectures that actually drive business value.
          </motion.p>
          <motion.div
            className="aiml-hero-btns"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            <button
              className="aiml-primary-btn aiml-btn-lg"
              onClick={() => navigate("/contact")}
            >
              Consult an AI Architect <FiArrowRight />
            </button>
            <button
              className="aiml-ghost-btn aiml-btn-lg"
              onClick={() => navigate("/contact")}
            >
              <FiPlay /> View MLOps Demo
            </button>
          </motion.div>

          <motion.div
            className="aiml-hero-chips"
            variants={stagger}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          >
            {[
              { v: "GPU", l: "Accelerated Inference" },
              { v: "Zero", l: "Data Leakage" },
              { v: "100%", l: "Automated MLOps" },
            ].map((c, i) => (
              <motion.div key={i} className="aiml-chip" variants={fadeUp}>
                <strong className="aiml-grad-text">{c.v}</strong>
                <span>{c.l}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      {/* ════════════════════════════════════
          TICKER
          ════════════════════════════════════ */}
      <div
        className="aiml-ticker"
        onMouseEnter={() => setTickerPaused(true)}
        onMouseLeave={() => setTickerPaused(false)}
      >
        <div className="aiml-ticker-badge">
          <span className="aiml-pulse-dot"></span>LIVE INTELLIGENCE
        </div>
        <div className="aiml-ticker-wrap">
          <div
            className={`aiml-ticker-slider ${tickerPaused ? "aiml-ticker-paused" : ""}`}
          >
            {[0, 1].map((c) => (
              <div key={c} className="aiml-ticker-row" aria-hidden={c === 1}>
                {TICKER_ITEMS.map((s, i) => (
                  <div key={i} className="aiml-tick-item">
                    <span style={{ color: s.color }}>{s.icon}</span>
                    <strong className="aiml-grad-text">{s.val}</strong>
                    <span>{s.lbl}</span>
                    <span className="aiml-tick-dot">·</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          2. STATS ROW
          ════════════════════════════════════ */}
      <section className="aiml-stats-section">
        <div className="aiml-container">
          <motion.div
            className="aiml-stats-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((s, i) => (
              <motion.div key={i} className="aiml-stat-card" variants={fadeUp}>
                <div className="aiml-stat-icon">{s.icon}</div>
                <div className="aiml-stat-val aiml-grad-text">{s.val}</div>
                <div className="aiml-stat-lbl">{s.lbl}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════
          3. SIDEBAR NAV + CAPABILITY PANELS
          ════════════════════════════════════ */}
      <section className="aiml-caps-section">
        <div className="aiml-container aiml-caps-grid">
          {/* Sticky sidebar */}
          <div className="aiml-sidebar">
            <div className="aiml-sidebar-label">AI Capabilites</div>
            <div className="aiml-sidebar-track">
              <div className="aiml-sidebar-vline"></div>
              {capabilities.map((c, i) => (
                <button
                  key={c.id}
                  className={`aiml-sidebar-node ${activeSection === i ? "aiml-node-active" : ""}`}
                  style={{ "--nc": c.color }}
                  onClick={() =>
                    panelRefs.current[i]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                >
                  <div className="aiml-node-ring">
                    <span className="aiml-node-num">{c.num}</span>
                  </div>
                  <div className="aiml-node-info">
                    <span className="aiml-node-title">{c.title}</span>
                    <span className="aiml-node-sub">{c.sub}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable panels */}
          <div className="aiml-panels">
            {capabilities.map((c, i) => (
              <div
                key={c.id}
                className="aiml-panel"
                ref={(el) => (panelRefs.current[i] = el)}
              >
                <motion.div
                  className="aiml-panel-text"
                  variants={fadeLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <div className="aiml-panel-num" style={{ color: c.color }}>
                    {c.num}
                  </div>
                  <p className="aiml-eyebrow" style={{ color: c.color }}>
                    {c.sub}
                  </p>
                  <h2 className="aiml-panel-title">{c.title}</h2>
                  <p className="aiml-panel-desc">{c.desc}</p>
                  <ul className="aiml-panel-bullets">
                    {c.bullets.map((b, j) => (
                      <li key={j}>
                        <FiCheckCircle style={{ color: c.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="aiml-stat-chip"
                    style={{
                      borderColor: `${c.color}40`,
                      background: `${c.color}0d`,
                    }}
                  >
                    <span
                      className="aiml-stat-chip-val"
                      style={{ color: c.color }}
                    >
                      {c.stat.val}
                    </span>
                    <span className="aiml-stat-chip-sub">{c.stat.sub}</span>
                  </div>
                </motion.div>

                <motion.div
                  className="aiml-panel-img"
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <img src={c.image} alt={c.title} />
                  <div
                    className="aiml-panel-tint"
                    style={{ "--nc": c.color }}
                  ></div>
                  <div
                    className="aiml-panel-badge"
                    style={{
                      background: `${c.color}22`,
                      borderColor: `${c.color}50`,
                      color: c.color,
                    }}
                  >
                    {c.icon} Layer {c.num}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          4. AI SHOWCASE / PRODUCTS
          ════════════════════════════════════ */}
      <section className="aiml-products-section">
        <div className="aiml-container">
          <motion.div
            className="aiml-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="aiml-eyebrow aiml-grad-text">OUR ML PORTFOLIO</p>
            <h2 className="aiml-section-title">
              Intelligence We&apos;ve
              <br />
              <span className="aiml-grad-text">Deployed In Production</span>
            </h2>
            <p className="aiml-section-desc">
              We don&apos;t just write algorithms in notebooks; we build
              scalable engineering products powered by data.
            </p>
          </motion.div>

          <motion.div
            className="aiml-products-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {OUR_PRODUCTS.map((p, i) => (
              <motion.div
                key={i}
                className="aiml-product-card"
                style={{ "--pc": p.color }}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <div className="aiml-product-glow"></div>
                <div
                  className="aiml-product-top-line"
                  style={{ background: p.color }}
                ></div>
                <div
                  className="aiml-product-logo-text"
                  style={{ color: p.color }}
                >
                  {p.name.slice(0, 2).toUpperCase()}
                </div>
                <div
                  className="aiml-product-tag"
                  style={{
                    color: p.color,
                    borderColor: `${p.color}30`,
                    background: `${p.color}10`,
                  }}
                >
                  {p.category}
                </div>
                <h3 className="aiml-product-name">{p.name}</h3>
                <p className="aiml-product-desc">{p.desc}</p>
                <div className="aiml-product-footer">
                  {p.pills.map((pill, j) => (
                    <span key={j} className="aiml-product-pill">
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
      <section className="aiml-cinematic-banner">
        <div
          className="aiml-cinematic-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1800&q=80')`,
          }}
        >
          <div className="aiml-cinematic-overlay"></div>
        </div>
        <div className="aiml-container aiml-cinematic-content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="aiml-eyebrow aiml-grad-text">FUTURE PROOF MLOPS</p>
            <h2 className="aiml-cinematic-title">
              Data is the fuel
              <br />
              <span className="aiml-grad-text">Ops is the Engine</span>
            </h2>
            <p className="aiml-cinematic-sub">
              Your models should not slowly degrade in the dark. Our
              architectures automatically monitor, retrain, and log predictions,
              maintaining peak accuracy eternally.
            </p>
            <button
              className="aiml-primary-btn aiml-btn-lg"
              onClick={() => navigate("/contact")}
            >
              Architect Your Pipeline <FiArrowRight />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════
          6. TESTIMONIAL SLIDER & FAQS
          ════════════════════════════════════ */}
      <section className="aiml-faq-section">
        <div className="aiml-container">
          <div className="aiml-faq-layout">
            <div className="aiml-faq-left">
              <h2 className="aiml-faq-title">
                Enterprise AI
                <br />
                Questions Answered.
              </h2>
              <p className="aiml-faq-sub">
                Common inquiries about our ML deployments, strict data security
                boundaries, and MLOps strategies.
              </p>

              {/* SLIDER ENCLOSED IN LEFT COLUMN */}
              <div
                className="aiml-testimonial-slider"
                style={{ marginTop: "50px" }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="aiml-testimonial-card"
                  >
                    <div className="aiml-t-glow"></div>
                    <FaQuoteLeft className="aiml-q-icon" />
                    <blockquote>
                      {testimonials[activeTestimonial].quote}
                    </blockquote>
                    <div className="aiml-t-author">
                      <img
                        src={testimonials[activeTestimonial].img}
                        alt="User"
                      />
                      <div>
                        <h4>{testimonials[activeTestimonial].name}</h4>
                        <p>{testimonials[activeTestimonial].role}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
                <div className="aiml-slider-dots">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      className={`aiml-dot ${activeTestimonial === i ? "aiml-dot-active" : ""}`}
                      onClick={() => setActiveTestimonial(i)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="aiml-faq-right">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`aiml-faq-item ${openFaq === i ? "aiml-faq-open" : ""}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <button className="aiml-faq-q">
                    <span>{faq.q}</span>
                    <FiChevronDown />
                  </button>
                  <div className="aiml-faq-a">
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Cta />
    </div>
  );
};

export default AIML;
