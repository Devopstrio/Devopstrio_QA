// MarketplacePage.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiServer,
  FiBarChart2,
  FiGrid,
  FiUsers,
  FiCpu,
  FiArrowRight,
  FiCheckCircle,
  FiZap,
  FiShield,
  FiGlobe,
  FiAward,
  FiTrendingUp,
  FiActivity,
  FiLayers,
  FiCode,
  FiDatabase,
} from "react-icons/fi";
import Newsletter from "../components/Newsletter/Newsletter";
import "../Style/marketplace/MarketplacePage.css";

/* ─── Data ─────────────────────────────────────────────── */

const stats = [
  { value: "500+", label: "Enterprise Clients", icon: <FiUsers /> },
  { value: "99.9%", label: "Platform Uptime", icon: <FiActivity /> },
  { value: "45%+", label: "Avg. Cost Savings", icon: <FiTrendingUp /> },
  { value: "150+", label: "Solutions Deployed", icon: <FiLayers /> },
];

const offerings = [
  {
    id: "cloud-infrastructure",
    path: "/marketplace/cloud-infrastructure",
    icon: <FiServer />,
    badge: "Most Popular",
    title: "Cloud Infrastructure",
    subtitle: "Resilient. Scalable. Global.",
    description:
      "Enterprise-grade infrastructure management across AWS, Azure, and GCP. Deploy, scale, and optimize your cloud workloads with intelligent automation and full observability.",
    highlights: [
      "Multi-cloud orchestration",
      "99.9% Uptime SLA",
      "Elastic auto-scaling",
      "Cost optimisation engine",
    ],
    gradient: "mp-gradient-purple",
    accentColor: "#ce2453",
    tag: "Infrastructure",
  },
  {
    id: "data-analytics",
    path: "/marketplace/data-analytics",
    icon: <FiBarChart2 />,
    badge: "High Demand",
    title: "Data & Analytics",
    subtitle: "Insights that Drive Decisions.",
    description:
      "Transform raw data into actionable intelligence. Our data engineering, warehousing, and real-time analytics pipelines give your business a competitive edge.",
    highlights: [
      "Real-time streaming pipelines",
      "AI-powered dashboards",
      "Data lake architecture",
      "BI & reporting at scale",
    ],
    gradient: "mp-gradient-pink",
    accentColor: "#962964",
    tag: "Analytics",
  },
  // {
  //   id: "enterprise-apps",
  //   path: "/marketplace/enterprise-apps",
  //   icon: <FiGrid />,
  //   badge: "Enterprise Ready",
  //   title: "Enterprise Applications",
  //   subtitle: "Modernise. Integrate. Accelerate.",
  //   description:
  //     "End-to-end application lifecycle management — from legacy modernisation to cloud-native development, backed by DevOps best practices and SRE principles.",
  //   highlights: [
  //     "Legacy app modernisation",
  //     "Microservices architecture",
  //     "API gateway & integration",
  //     "Zero-downtime deployment",
  //   ],
  //   gradient: "mp-gradient-coral",
  //   accentColor: "#dd5c54",
  //   tag: "Applications",
  // },
  {
    id: "cx",
    path: "/marketplace/cx",
    icon: <FiUsers />,
    badge: "New",
    title: "Customer Experience (CX)",
    subtitle: "Deliver Experiences That Delight.",
    description:
      "Modernise customer touchpoints with AI-driven personalisation, omnichannel platforms, and scalable digital experience infrastructure that grows with your users.",
    highlights: [
      "Omnichannel orchestration",
      "AI personalisation engine",
      "Contact centre technology",
      "Customer data platforms",
    ],
    gradient: "mp-gradient-orange",
    accentColor: "#e79e57",
    tag: "CX",
  },
  // {
  //   id: "ai-ml",
  //   path: "/marketplace/ai-ml",
  //   icon: <FiCpu />,
  //   badge: "Cutting Edge",
  //   title: "AI / ML Solutions",
  //   subtitle: "Intelligence Built Into Everything.",
  //   description:
  //     "From model training to production inference, we provide the MLOps infrastructure, tooling, and expert services to operationalise AI at enterprise scale.",
  //   highlights: [
  //     "MLOps pipeline automation",
  //     "GPU cluster management",
  //     "Model monitoring & drift",
  //     "LLM & generative AI ops",
  //   ],
  //   gradient: "mp-gradient-rose",
  //   accentColor: "#522c72",
  //   tag: "AI / ML",
  // },
];

const benefits = [
  {
    icon: <FiShield />,
    title: "Enterprise-Grade Security",
    desc: "SOC 2 Type II, ISO 27001, and GDPR-compliant infrastructure with zero-trust architecture and continuous compliance monitoring.",
  },
  {
    icon: <FiZap />,
    title: "Faster Time to Market",
    desc: "Pre-built automation blueprints, reference architectures, and CI/CD templates cut delivery time by up to 60%.",
  },
  {
    icon: <FiGlobe />,
    title: "Global Reach, Local Expertise",
    desc: "Offices across UK, US, India, and APAC with support teams available 24/7 in your timezone.",
  },
  {
    icon: <FiAward />,
    title: "Certified Partner Ecosystem",
    desc: "AWS Advanced, Azure Gold, and GCP Premier partner status ensures you get the best pricing and direct support escalation.",
  },
  {
    icon: <FiCode />,
    title: "Everything as Code",
    desc: "Infrastructure, security policies, and compliance rules are all codified — version-controlled, peer-reviewed, and auditable.",
  },
  {
    icon: <FiDatabase />,
    title: "Proven Migration Engine",
    desc: "Our Zero-Touch Migration methodology has successfully migrated 500+ workloads with guaranteed data integrity and minimal downtime.",
  },
];

const industries = [
  "FinTech",
  "Healthcare",
  "E-Commerce",
  "SaaS",
  "Gaming",
  "Telecom",
  "Retail",
  "Education",
  "Media",
  "Manufacturing",
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

/* ─── Component ─────────────────────────────────────────── */
const MarketplacePage = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="mp-page">
      {/* Ambient background */}
      <div className="mp-bg-grid" />
      <div className="mp-orb mp-orb-1" />
      <div className="mp-orb mp-orb-2" />
      <div className="mp-orb mp-orb-3" />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="mp-hero">
        <div className="mp-container">
          <motion.div
            className="mp-hero-inner"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div className="mp-hero-badge" variants={fadeUp}>
              <span className="mp-badge-pulse" />
              Devopstrio Marketplace — Enterprise Solutions Hub
            </motion.div>

            <motion.h1 className="mp-hero-title" variants={fadeUp}>
              One Platform. <span className="mp-gradient-text">Infinite</span>{" "}
              Possibilities.
            </motion.h1>

            <motion.p className="mp-hero-subtitle" variants={fadeUp}>
              Explore our curated marketplace of enterprise-grade cloud, data,
              AI, and application solutions — engineered for scale, designed for
              speed, and built to last.
            </motion.p>

            <motion.div className="mp-hero-actions" variants={fadeUp}>
              <button
                className="mp-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Get Started <FiArrowRight />
              </button>
              <button
                className="mp-btn-secondary"
                onClick={() => navigate("/services")}
              >
                View All Services
              </button>
            </motion.div>
          </motion.div>

          {/* Floating category chips */}
          <motion.div
            className="mp-hero-chips"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {offerings.map((o) => (
              <Link key={o.id} to={o.path} className="mp-hero-chip">
                <span className="mp-chip-icon">{o.icon}</span>
                {o.title}
                <FiArrowRight className="mp-chip-arrow" />
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <section className="mp-stats">
        <div className="mp-container">
          <div className="mp-stats-grid">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="mp-stat-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="mp-stat-icon">{s.icon}</div>
                <div className="mp-stat-value">{s.value}</div>
                <div className="mp-stat-label">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE PROVIDE ──────────────────────────────── */}
      <section className="mp-offerings" id="what-we-provide">
        <div className="mp-container">
          <motion.div
            className="mp-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span className="mp-section-label" variants={fadeUp}>
              What We Provide
            </motion.span>
            <motion.h2 className="mp-section-title" variants={fadeUp}>
              Marketplace Solutions,{" "}
              <span className="mp-gradient-text">Tailored for You</span>
            </motion.h2>
            <motion.p className="mp-section-desc" variants={fadeUp}>
              From cloud infrastructure to AI/ML, every solution in our
              marketplace is built around enterprise reliability and modern
              DevOps best practices.
            </motion.p>
          </motion.div>

          {/* Offering Cards */}
          <div className="mp-offerings-grid">
            {offerings.map((item, i) => (
              <motion.div
                key={item.id}
                className={`mp-offer-card ${item.gradient}`}
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Badge */}
                <div className="mp-offer-badge">{item.badge}</div>

                {/* Tag */}
                <div className="mp-offer-tag">{item.tag}</div>

                {/* Icon */}
                <div className="mp-offer-icon">{item.icon}</div>

                {/* Content */}
                <h3 className="mp-offer-title">{item.title}</h3>
                <p className="mp-offer-subtitle">{item.subtitle}</p>
                <p className="mp-offer-desc">{item.description}</p>

                {/* Highlights */}
                <ul className="mp-offer-highlights">
                  {item.highlights.map((h, hi) => (
                    <li key={hi} className="mp-highlight-item">
                      <FiCheckCircle className="mp-check-icon" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to={item.path} className="mp-offer-cta">
                  Explore {item.title}
                  <FiArrowRight className="mp-cta-arrow" />
                </Link>

                {/* Decorative corner glow */}
                <div className="mp-card-glow" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY Devopstrio  ───────────────────────────────── */}
      <section className="mp-why">
        <div className="mp-container">
          <motion.div
            className="mp-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span className="mp-section-label" variants={fadeUp}>
              Why Choose Us
            </motion.span>
            <motion.h2 className="mp-section-title" variants={fadeUp}>
              Built for Engineers,{" "}
              <span className="mp-gradient-text">Trusted by Leaders</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="mp-benefits-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                className="mp-benefit-card"
                variants={fadeUp}
                custom={i}
              >
                <div className="mp-benefit-icon">{b.icon}</div>
                <h4 className="mp-benefit-title">{b.title}</h4>
                <p className="mp-benefit-desc">{b.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── INDUSTRIES WE SERVE ──────────────────────────── */}
      <section className="mp-industries">
        <div className="mp-container">
          <motion.div
            className="mp-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span className="mp-section-label" variants={fadeUp}>
              Industries
            </motion.span>
            <motion.h2 className="mp-section-title" variants={fadeUp}>
              Across Every{" "}
              <span className="mp-gradient-text">Industry Vertical</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="mp-industry-strip"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {industries.map((ind, i) => (
              <div key={i} className="mp-industry-chip">
                {ind}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── PROCESS / HOW IT WORKS ───────────────────────── */}
      <section className="mp-process">
        <div className="mp-container">
          <motion.div
            className="mp-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span className="mp-section-label" variants={fadeUp}>
              How It Works
            </motion.span>
            <motion.h2 className="mp-section-title" variants={fadeUp}>
              From Discovery to{" "}
              <span className="mp-gradient-text">Deployment</span>
            </motion.h2>
          </motion.div>

          <div className="mp-steps-row">
            {[
              {
                num: "01",
                title: "Discovery Call",
                desc: "We understand your business goals, current infrastructure, and pain points in a structured discovery session.",
              },
              {
                num: "02",
                title: "Solution Design",
                desc: "Our architects craft a tailored marketplace solution blueprint — with timelines, cost projections, and tech stack.",
              },
              {
                num: "03",
                title: "Rapid Delivery",
                desc: "Using our proven DevOps frameworks, we deploy quickly with automated pipelines and zero disruption.",
              },
              {
                num: "04",
                title: "Ongoing Support",
                desc: "24/7 monitoring, proactive incident response, and regular optimisation reviews keep you at peak performance.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                className="mp-step-card"
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="mp-step-num">{step.num}</div>
                <div className="mp-step-line" />
                <h4 className="mp-step-title">{step.title}</h4>
                <p className="mp-step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────────── */}
      <section className="mp-cta-section">
        <div className="mp-container">
          <motion.div
            className="mp-cta-banner"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mp-cta-glow" />
            <span className="mp-section-label">Ready to Get Started?</span>
            <h2 className="mp-cta-title">
              Let's Build Your{" "}
              <span className="mp-gradient-text">Next-Gen Infrastructure</span>
            </h2>
            <p className="mp-cta-desc">
              Talk to a Devopstrio solutions architect today. No obligation, no
              fluff — just a focused conversation about your goals.
            </p>
            <div className="mp-cta-actions">
              <button
                className="mp-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Book a Free Consultation <FiArrowRight />
              </button>
              <button
                className="mp-btn-secondary"
                onClick={() => navigate("/case-studies")}
              >
                View Case Studies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
        <Newsletter />
      </div>    </div>
  );
};

export default MarketplacePage;
