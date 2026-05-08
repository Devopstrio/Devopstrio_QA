import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Components
import Serviceshero from "../../components/Hero/Serviceshero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

// Icons
import {
  FiArrowRight,
  FiCode,
  FiGitBranch,
  FiTerminal,
  FiRepeat,
  FiCheckCircle,
  FiServer,
  FiDatabase,
  FiLayers,
  FiCpu,
  FiActivity,
  FiMonitor,
  FiPackage,
  FiSettings,
  FiPlay,
  FiChevronDown,
  FiShield,
  FiZap,
  FiTrendingUp,
  FiBox,
  FiGrid,
  FiBarChart2,
  FiSearch,
  FiLock,
  FiGlobe,
  FiHardDrive,
  FiTool,
  FiTarget,
  FiClock,
  FiUsers,
  FiAward,
} from "react-icons/fi";

import {
  FaDocker,
  FaAws,
  FaGitAlt,
  FaJenkins,
  FaLinux,
  FaPython,
  FaQuoteLeft,
} from "react-icons/fa";

import "../../Style/serve/DevOpsEnablement.css";


//images
import first from "../../assets/images/Site_img/square_image_2.png";
import second from "../../assets/images/Site_img/square_image_2.png";
import third from "../../assets/images/Site_img/square_image_2.png"; 
import fourth from "../../assets/images/Site_img/square_image_2.png";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

// const fadeIn = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.8 } },
// };

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const DevOpsEnablement = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  /* ===================== DATA ===================== */

  const metrics = [
    { icon: <FiZap />, value: "10x", label: "Faster Releases" },
    { icon: <FiClock />, value: "< 15 min", label: "Deploy Time" },
    { icon: <FiShield />, value: "99.9%", label: "Pipeline Uptime" },
    { icon: <FiTrendingUp />, value: "70%", label: "Cost Reduction" },
    { icon: <FiUsers />, value: "200+", label: "Teams Enabled" },
    { icon: <FiAward />, value: "Zero", label: "Downtime Deploys" },
  ];

  const bentoItems = [
    {
      id: "cicd",
      icon: <FiRepeat />,
      title: "CI/CD Pipeline Engineering",
      desc: "Fully automated build, test, and deploy pipelines with zero-downtime releases, canary deployments, and instant rollbacks.",
      image: first,
      size: "large",
    },
    {
      id: "iac",
      icon: <FiCode />,
      title: "Infrastructure as Code",
      desc: "Terraform, Pulumi & CloudFormation — version-controlled, tested, reproducible infrastructure.",
      image: second,
      size: "small",
    },
    {
      id: "containers",
      icon: <FiBox />,
      title: "Container Orchestration",
      desc: "Docker & Kubernetes — auto-scaling, self-healing, portable workloads across any cloud.",
      image: third,
      size: "small",
    },
    {
      id: "observability",
      icon: <FiActivity />,
      title: "Observability & Monitoring",
      desc: "Full-stack visibility with real-time dashboards, distributed tracing, intelligent alerting, and anomaly detection.",
      image: fourth,
      size: "large",
    },
  ];

  const pipelineSteps = [
    { icon: <FiGitBranch />, title: "Code", desc: "Push to Git" },
    { icon: <FiCpu />, title: "Build", desc: "Compile & Package" },
    { icon: <FiCheckCircle />, title: "Test", desc: "Automated QA" },
    { icon: <FiShield />, title: "Scan", desc: "Security Checks" },
    { icon: <FiPackage />, title: "Stage", desc: "Pre-prod Deploy" },
    { icon: <FiGlobe />, title: "Release", desc: "Production Live" },
  ];

  const approaches = [
    {
      icon: <FiTarget />,
      title: "Assessment & Discovery",
      desc: "We analyze your current workflows, identify bottlenecks, and map a transformation roadmap tailored to your goals.",
      number: "01",
    },
    {
      icon: <FiSettings />,
      title: "Architecture & Design",
      desc: "Design cloud-native CI/CD architectures, IaC frameworks, and observability stacks that scale with your team.",
      number: "02",
    },
    {
      icon: <FiCode />,
      title: "Build & Automate",
      desc: "Implement pipelines, containerize workloads, establish GitOps workflows, and integrate security at every stage.",
      number: "03",
    },
    {
      icon: <FiTrendingUp />,
      title: "Optimize & Enable",
      desc: "Continuous performance tuning, cost optimization, knowledge transfer, and team enablement for long-term success.",
      number: "04",
    },
  ];

  const tools = [
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FiBox />, name: "Kubernetes" },
    { icon: <FiGrid />, name: "Terraform" },
    { icon: <FaJenkins />, name: "Jenkins" },
    { icon: <FiGitBranch />, name: "GitHub Actions" },
    { icon: <FiPackage />, name: "Helm" },
    { icon: <FiBarChart2 />, name: "Grafana" },
    { icon: <FiActivity />, name: "Prometheus" },
    { icon: <FiMonitor />, name: "Datadog" },
    { icon: <FiSearch />, name: "Elastic" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FiRepeat />, name: "CircleCI" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <FiLock />, name: "Vault" },
    { icon: <FiTool />, name: "Ansible" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <FiDatabase />, name: "Redis" },
    { icon: <FaPython />, name: "Python" },
  ];

  const results = [
    {
      metric: "95%",
      label: "Faster Release Cycles",
      detail: "From weekly to hourly deploys",
    },
    {
      metric: "Zero",
      label: "Security Incidents",
      detail: "With shift-left DevSecOps",
    },
    {
      metric: "40%",
      label: "Infrastructure Savings",
      detail: "Through right-sizing & automation",
    },
  ];

  const faqs = [
    {
      q: "What is DevOps Enablement and why does my organization need it?",
      a: "DevOps Enablement bridges development and operations through cultural, process, and tooling changes. It accelerates delivery, improves reliability, and reduces costs—enabling your team to ship with confidence.",
    },
    {
      q: "How long does a typical DevOps transformation take?",
      a: "Initial pipeline setup takes 4–8 weeks. Full transformation is 3–6 months with continuous improvement. We deliver quick wins from sprint one while building toward comprehensive change.",
    },
    {
      q: "Do you support hybrid and multi-cloud environments?",
      a: "Absolutely. We design cloud-agnostic pipelines using Terraform and Kubernetes that work seamlessly across AWS, Azure, GCP, and on-premises environments.",
    },
    {
      q: "How do you handle security in the CI/CD pipeline?",
      a: "We integrate DevSecOps at every stage—SAST/DAST scanning, container image scanning, secrets management with Vault, policy-as-code, and automated compliance checks.",
    },
    {
      q: "What ROI can we expect from DevOps adoption?",
      a: "Organizations typically see 60–90% reduction in lead time, 50–70% fewer change failures, and 3–6 month payback through automation and efficiency gains.",
    },
    {
      q: "Do you provide training and team enablement?",
      a: "Yes. Knowledge transfer is core to our approach. We run hands-on workshops, create runbooks, and embed with your team to ensure self-sufficiency after engagement.",
    },
  ];

  return (
    <div className="de-page">
      <Serviceshero />

      {/* ========== 1. CINEMATIC HERO ========== */}
      {/* <section className="de-cinematic-hero">
        <div className="de-cinematic-bg">
          <img
            src="https://images.unsplash.com/photo-1607799279861-4dd421887fc5?w=1600&q=80"
            alt="DevOps Infrastructure"
            className="de-cinematic-bg-img"
          />
          <div className="de-cinematic-overlay"></div>
        </div>
        <motion.div
          className="de-cinematic-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="de-label de-gradient-text">DEVOPS ENABLEMENT</p>
          <h1 className="de-cinematic-title">
            Ship Code at the <br />
            <span className="de-gradient-text">Speed of Business</span>
          </h1>
          <p className="de-cinematic-sub">
            End-to-end DevOps transformation — automated pipelines,
            infrastructure as code, container orchestration, and observability —
            so your team can deploy faster, fail less, and scale with
            confidence.
          </p>
          <div className="de-cinematic-btns">
            <button
              className="de-primary-btn"
              onClick={() => navigate("/services/cicd")}
            >
              Explore CI/CD <FiArrowRight className="de-btn-icon" />
            </button>
          </div>
        </motion.div>
      </section> */}

      {/* ========== 2. METRICS RIBBON — INFINITE SLIDER ========== */}
      <section className="de-metrics-ribbon">
        <div className="de-metrics-slider">
          {/* Track duplicated for seamless infinite loop */}
          {[0, 1].map((clone) => (
            <div
              key={clone}
              className="de-metrics-track"
              aria-hidden={clone === 1}
            >
              {metrics.map((m, i) => (
                <div key={i} className="de-metric-pill">
                  <span className="de-metric-icon">{m.icon}</span>
                  <span className="de-metric-value de-gradient-text">
                    {m.value}
                  </span>
                  <span className="de-metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ========== 3. BENTO GRID ========== */}
      <section className="de-bento-section">
        <div className="de-container">
          <motion.div
            className="de-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="de-label de-gradient-text">CORE CAPABILITIES</p>
            <h2 className="de-section-title">What We Engineer</h2>
            <p className="de-section-desc">
              From code commit to production — every stage automated, secured,
              and optimized.
            </p>
          </motion.div>

          <motion.div
            className="de-bento-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {bentoItems.map((item, i) => (
              <motion.div
                key={i}
                className={`de-bento-card de-bento-${item.size}`}
                variants={scaleIn}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="de-bento-img"
                />
                <div className="de-bento-overlay"></div>
                <div className="de-bento-content">
                  <div className="de-bento-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== 4. PIPELINE FLOW ========== */}
      <section className="de-pipeline-section">
        <div className="de-container">
          <motion.div
            className="de-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="de-label de-gradient-text">THE PIPELINE</p>
            <h2 className="de-section-title">From Commit to Production</h2>
          </motion.div>

          <motion.div
            className="de-pipeline-flow"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {pipelineSteps.map((step, i) => (
              <React.Fragment key={i}>
                <motion.div className="de-pipeline-step" variants={fadeUp}>
                  <div className="de-pipeline-icon-wrap">{step.icon}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </motion.div>
                {i < pipelineSteps.length - 1 && (
                  <div className="de-pipeline-connector">
                    <FiArrowRight />
                  </div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== 5. FULL-WIDTH PORTAL SHOWCASE ========== */}
      {/* <section className="de-showcase-section">
        <div className="de-container">
          <div className="de-showcase-grid">
            <motion.div
              className="de-showcase-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="de-showcase-card-bg">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1000&q=80"
                  alt="Security Infrastructure"
                />
                <div className="de-showcase-card-overlay"></div>
              </div>
              <div className="de-showcase-card-content">
                <div className="de-showcase-card-icon">
                  <FiShield />
                </div>
                <h3>DevSecOps</h3>
                <p>
                  Security baked into every stage — SAST, DAST, container
                  scanning, secrets management, and policy-as-code enforcement.
                </p>
                <button
                  className="de-link-btn"
                  onClick={() => navigate("/services/security")}
                >
                  Learn More <FiArrowRight />
                </button>
              </div>
            </motion.div>

            <motion.div
              className="de-showcase-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="de-showcase-card-bg">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&q=80"
                  alt="Monitoring Dashboards"
                />
                <div className="de-showcase-card-overlay"></div>
              </div>
              <div className="de-showcase-card-content">
                <div className="de-showcase-card-icon">
                  <FiBarChart2 />
                </div>
                <h3>Observability</h3>
                <p>
                  Metrics, logs, and traces unified — Grafana, Prometheus, and
                  distributed tracing for full-stack visibility.
                </p>
                <button
                  className="de-link-btn"
                  onClick={() => navigate("/services/cloud-architecture")}
                >
                  Learn More <FiArrowRight />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* ========== 6. APPROACH — NUMBERED CARDS ========== */}
      <section className="de-approach-section">
        <div className="de-container">
          <div className="de-approach-layout">
            <motion.div
              className="de-approach-left"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="de-label de-gradient-text">OUR APPROACH</p>
              <h2 className="de-approach-title">
                A Proven Path to <br />
                <span className="de-gradient-text">DevOps Maturity</span>
              </h2>
              <p className="de-approach-desc">
                We don&apos;t just set up tools — we transform how your teams
                build, deploy, and operate software. Our phased approach
                delivers quick wins while building toward lasting change.
              </p>
              <button
                className="de-primary-btn"
                onClick={() => navigate("/contact")}
              >
                Get Started <FiArrowRight className="de-btn-icon" />
              </button>
            </motion.div>

            <motion.div
              className="de-approach-right"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {approaches.map((a, i) => (
                <motion.div
                  key={i}
                  className="de-approach-card"
                  variants={fadeUp}
                >
                  <span className="de-approach-num de-gradient-text">
                    {a.number}
                  </span>
                  <div className="de-approach-card-icon">{a.icon}</div>
                  <div className="de-approach-card-body">
                    <h4>{a.title}</h4>
                    <p>{a.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== 7. TOOLS GRID ========== */}
        <section className="de-tools-section">
          <div className="de-container">
            <motion.div
              className="de-section-header"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="de-label de-gradient-text">TOOLCHAIN</p>
              <h2 className="de-section-title">Technology Ecosystem</h2>
              <p className="de-section-desc">
                We work with the best-in-class tools across the DevOps landscape.
              </p>
            </motion.div>

            <motion.div
              className="de-tools-grid"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {tools.map((t, i) => (
                <motion.div key={i} className="de-tool-item" variants={scaleIn}>
                  <span className="de-tool-icon">{t.icon}</span>
                  <span className="de-tool-name">{t.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      {/* ========== 8. RESULTS DASHBOARD ========== */}
      <section className="de-results-section">
        <div className="de-container">
          <motion.div
            className="de-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="de-label de-gradient-text">PROVEN RESULTS</p>
            <h2 className="de-section-title">Real Impact, Measured</h2>
          </motion.div>

          <motion.div
            className="de-results-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {results.map((r, i) => (
              <motion.div key={i} className="de-result-card" variants={fadeUp}>
                <div className="de-result-bar"></div>
                <h3 className="de-gradient-text">{r.metric}</h3>
                <h4>{r.label}</h4>
                <p>{r.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ========== 9. FEATURED TESTIMONIAL ========== */}
      <section className="de-testimonial-section">
        <div className="de-container">
          <motion.div
            className="de-testimonial-featured"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FaQuoteLeft className="de-featured-quote-icon" />
            <blockquote className="de-featured-quote">
              &quot;Their DevOps transformation completely changed how we
              deliver software. We went from monthly releases to deploying
              multiple times a day with full confidence. The observability stack
              gives us unprecedented visibility — we catch issues before our
              customers even notice them.&quot;
            </blockquote>
            <div className="de-featured-author">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                alt="Michael Torres"
              />
              <div>
                <h4>Michael Torres</h4>
                <p>VP of Engineering, ScaleUp Inc.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========== 10. FAQ — TWO COLUMN ========== */}
      <section className="de-faq-section">
        <div className="de-container">
          <div className="de-faq-layout">
            <motion.div
              className="de-faq-left"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="de-label de-gradient-text">FAQ</p>
              <h2 className="de-faq-title">
                Got Questions? <br />
                <span className="de-gradient-text">We&apos;ve Got Answers</span>
              </h2>
              <p className="de-faq-subtitle">
                Everything you need to know about our DevOps enablement
                services.
              </p>
              <button
                className="de-primary-btn"
                onClick={() => navigate("/contact")}
              >
                Talk to an Expert <FiArrowRight className="de-btn-icon" />
              </button>
            </motion.div>

            <div className="de-faq-right">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className={`de-faq-item ${openFaq === i ? "de-faq-open" : ""}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <button
                    className="de-faq-question"
                    onClick={() => toggleFaq(i)}
                  >
                    <span>{faq.q}</span>
                    <FiChevronDown />
                  </button>
                  <div className="de-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
    </div>
  );
};

export default DevOpsEnablement;
