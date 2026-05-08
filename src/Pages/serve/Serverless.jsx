import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Components
import Serviceshero from "../../components/Hero/Serviceshero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

// Icons
import {
  FiArrowRight,
  FiZap,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGlobe,
  FiLayers,
  FiMinimize2,
  FiPlayCircle,
  FiShield,
  FiTerminal,
  FiTrendingUp,
  FiCloudLightning,
  FiCommand,
} from "react-icons/fi";

import {
  FaAws,
  FaGoogle,
  FaMicrosoft,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";

import { SiCloudflare, SiVercel } from "react-icons/si";

import "../../Style/serve/Serverless.css";

const Serverless = () => {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const benefits = [
    {
      icon: <FiMinimize2 />,
      title: "Zero Infrastructure",
      desc: "No servers to provision, maintain, or patch. Focus entirely on your application code.",
    },
    {
      icon: <FiTrendingUp />,
      title: "Infinite Auto-Scaling",
      desc: "Applications automatically scale from zero to tens of thousands of concurrent requests instantly.",
    },
    {
      icon: <FiZap />,
      title: "Pay-for-Value",
      desc: "Never pay for idle time. You are only billed for the exact milliseconds your code executes.",
    },
    {
      icon: <FiShield />,
      title: "Built-in High Availability",
      desc: "Fault tolerance and availability are inherently integrated into the serverless architecture.",
    },
  ];

  const technologies = [
    { icon: <FaAws />, name: "AWS Lambda" },
    { icon: <FaMicrosoft />, name: "Azure Functions" },
    { icon: <FaGoogle />, name: "Google Cloud Functions" },
    { icon: <SiCloudflare />, name: "Cloudflare Workers" },
    { icon: <SiVercel />, name: "Vercel Edge" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FiTerminal />, name: "Go" },
  ];

  const capabilities = [
    {
      title: "Event-Driven Microservices",
      desc: "Build highly decoupled, event-driven architectures that react to database changes, file uploads, and API requests in real-time.",
      icon: <FiLayers />,
      colSpan: 2,
    },
    {
      title: "Edge Computing",
      desc: "Run code globally at the edge, millimeters away from your users for near-zero latency.",
      icon: <FiGlobe />,
      colSpan: 1,
    },
    {
      title: "Serverless Databases",
      desc: "Scale storage dynamically with Aurora Serverless, DynamoDB, and CosmosDB.",
      icon: <FiDatabase />,
      colSpan: 1,
    },
    {
      title: "API Gateways",
      desc: "Secure, scalable entry points for your APIs with built-in throttling, caching, and auth.",
      icon: <FiCode />,
      colSpan: 2,
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Write Function",
      desc: "Develop isolated bits of logic handling specific events.",
    },
    {
      step: "02",
      title: "Define Triggers",
      desc: "Connect functions to HTTP requests, queues, or data streams.",
    },
    {
      step: "03",
      title: "Deploy & Scale",
      desc: "Push to the cloud. Provider handles the scaling and execution.",
    },
  ];

  const useCases = [
    {
      title: "Web Apps & APIs",
      desc: "Robust backends for SPAs and mobile apps. Automatically scale handling from zero to thousands of RPS without manual intervention.",
      icon: <FiGlobe />,
    },
    {
      title: "Data Processing",
      desc: "Trigger functions on file uploads or changes in your database to transform images, transcode videos, and process logs in parallel.",
      icon: <FiDatabase />,
    },
    {
      title: "Scheduled Tasks",
      desc: "Run CRON jobs, database cleanups, and batch processing securely on an exact schedule without leaving idle servers running.",
      icon: <FiCode />,
    },
  ];

  return (
    <div className="srv-page">
      <Serviceshero />

      {/* ========== HERO SECTION (DYNAMIC PARALLAX) ========== */}
      <section className="srv-hero" ref={heroRef}>
        <motion.div
          className="srv-hero-bg"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <div className="srv-hero-blobs">
            <div className="srv-blob srv-blob-1"></div>
            <div className="srv-blob srv-blob-2"></div>
            <div className="srv-blob srv-blob-3"></div>
          </div>
          <div className="srv-hero-grid-pattern"></div>
        </motion.div>

        <div className="srv-container srv-hero-content">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="srv-hero-text-wrap"
          >
            <div className="srv-hero-badge">
              <span className="srv-pulse-dot"></span>
              THE FUTURE OF COMPUTE
            </div>
            <h1 className="srv-hero-title">
              Code &gt; <span className="srv-hero-hollow">Servers</span>
            </h1>
            <p className="srv-hero-subtitle">
              Scale to millions of requests instantly. Pay only for what you
              use. Let us architect your serverless ecosystem so you can focus
              purely on innovation.
            </p>
            <div className="srv-hero-actions">
              <button
                className="srv-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Start Building <FiArrowRight className="srv-btn-icon" />
              </button>
              <button
                className="srv-btn-outline"
                onClick={() => navigate("/serve/multi-cloud")}
              >
                <FiZap className="srv-btn-icon" /> Explore Multi-Cloud
              </button>
            </div>
          </motion.div>

          {/* Hero Floating Stats */}
          <motion.div
            className="srv-hero-stats"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="srv-hero-stat-card">
              <h3>0</h3>
              <p>Servers to Manage</p>
            </div>
            <div className="srv-hero-stat-card">
              <h3>ms</h3>
              <p>Cold Start Times</p>
            </div>
            <div className="srv-hero-stat-card">
              <h3>∞</h3>
              <p>Auto-Scaling Capacity</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== BENEFITS SECTION ========== */}
      <section className="srv-benefits-section">
        <div className="srv-container">
          <motion.div
            className="srv-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="srv-section-title">
              Why Go <span className="srv-gradient-text">Serverless?</span>
            </h2>
            <p className="srv-section-desc">
              Shift operational responsibilities to the cloud provider,
              increasing your agility and lowering your total cost of ownership.
            </p>
          </motion.div>

          <motion.div
            className="srv-benefits-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                className="srv-benefit-card"
                variants={fadeUp}
              >
                <div className="srv-benefit-icon-wrapper">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
                <div className="srv-benefit-hover-effect"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== CAPABILITIES BENTO GRID ========== */}
      <section className="srv-bento-section">
        <div className="srv-container">
          <motion.div
            className="srv-section-header srv-text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="srv-section-title">
              Our Serverless <br />
              <span className="srv-gradient-text">Architectures</span>
            </h2>
          </motion.div>

          <div className="srv-bento-grid">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                className={`srv-bento-item srv-col-${cap.colSpan}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="srv-bento-content">
                  <div className="srv-bento-icon">{cap.icon}</div>
                  <h3>{cap.title}</h3>
                  <p>{cap.desc}</p>
                </div>
                <div className="srv-bento-watermark">{cap.icon}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== WORKFLOW & ARCHITECTURE ========== */}
      <section className="srv-workflow-section">
        <div className="srv-container">
          <div className="srv-workflow-split">
            <motion.div
              className="srv-workflow-info"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
            >
              <div className="srv-badge">THE PROCESS</div>
              <h2 className="srv-section-title">
                Simplicity at <span className="srv-gradient-text">Scale</span>
              </h2>
              <p className="srv-section-desc srv-text-left">
                We design streamlined developer experiences. Your team writes
                the business logic, our automated pipelines handle the complex
                deployments, and the cloud handles the rest.
              </p>

              <div className="srv-steps">
                {workflowSteps.map((step, i) => (
                  <div key={i} className="srv-step-item">
                    <div className="srv-step-num">{step.step}</div>
                    <div className="srv-step-content">
                      <h4>{step.title}</h4>
                      <p>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="srv-workflow-visual"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="srv-visual-card">
                <div className="srv-visual-placeholder">
                  <FiCloudLightning />
                </div>
                <div className="srv-visual-glow"></div>

                {/* Floating Elements on Image */}
                <div className="srv-float-badge srv-fb-1">
                  <FiCommand className="srv-fb-icon" /> Event Triggered
                </div>
                <div className="srv-float-badge srv-fb-2">
                  <FiCpu className="srv-fb-icon" /> Compute Layer
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== USE CASES ========== */}
      <section className="srv-usecases-section">
        <div className="srv-container">
          <motion.div
            className="srv-section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <h2 className="srv-section-title">
              Common <span className="srv-gradient-text">Use Cases</span>
            </h2>
            <p className="srv-section-desc">
              Discover how serverless technology empowers modern applications.
            </p>
          </motion.div>

          <div className="srv-usecases-grid">
            {useCases.map((uc, i) => (
              <motion.div
                key={i}
                className="srv-usecase-card"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="srv-usecase-icon-glass">{uc.icon}</div>
                <h3>{uc.title}</h3>
                <p>{uc.desc}</p>
                <div className="srv-usecase-shine"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== TECH STACK MARQUEE ========== */}
      <section className="srv-tech-section">
        <div className="srv-container">
          <h3 className="srv-tech-title">POWERED BY LEADING PLATFORMS</h3>

          <div className="srv-tech-marquee">
            <div className="srv-tech-track">
              {[...technologies, ...technologies, ...technologies].map(
                (tech, i) => (
                  <div key={i} className="srv-tech-item">
                    <span className="srv-tech-icon">{tech.icon}</span>
                    <span className="srv-tech-name">{tech.name}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ========== BOTTOM CTA ========== */}
      <section className="srv-bottom-cta">
        <div className="srv-container">
          <motion.div
            className="srv-cta-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <div className="srv-cta-glow"></div>
            <h2>Ready to eliminate server maintenance?</h2>
            <p>
              Let&apos;s architect your modern, highly-scalable, serverless
              future.
            </p>
            <button
              className="srv-btn-primary srv-btn-large"
              onClick={() => navigate("/contact")}
            >
              Consult with our Experts <FiArrowRight className="srv-btn-icon" />
            </button>
          </motion.div>
        </div>
      </section>

      <Newsletter />
      {/* <Cta /> */}
    </div>
  );
};

export default Serverless;
