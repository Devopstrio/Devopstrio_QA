import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
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
  FiChevronRight,
  FiShield,
  FiZap,
  FiTrendingUp,
  FiBox,
  FiGrid,
  FiBarChart2,
  FiSearch,
  FiLock,
  FiGlobe,
  FiTool,
  FiTarget,
  FiClock,
  FiAward,
  FiRefreshCw,
  FiUploadCloud,
  FiGitMerge,
  FiCheck,
  FiEye,
  FiHardDrive,
  FiCopy,
  FiAlertCircle,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

import "../../Style/serve/IaC.css";

/* ---------- animation variants ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

/* ---------- Typewriter hook ---------- */
function useTypewriter(lines, speed = 38) {
  const [displayed, setDisplayed] = useState([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= lines.length) return;
    if (charIdx <= lines[lineIdx].length) {
      const t = setTimeout(() => {
        setDisplayed((prev) => {
          const next = [...prev];
          next[lineIdx] = lines[lineIdx].slice(0, charIdx);
          return next;
        });
        setCharIdx((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setLineIdx((l) => l + 1);
        setCharIdx(0);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [charIdx, lineIdx, lines, speed]);

  return displayed;
}

/* ============================================================
   DATA
   ============================================================ */
const manifestoWords = [
  "Software",
  "is",
  "no",
  "longer",
  "just",
  "code.",
  "It",
  "is",
  "infrastructure.",
  "It",
  "is",
  "policy.",
  "It",
  "is",
  "compliance.",
  "It",
  "is",
  "everything.",
];

const pillars = [
  {
    icon: <FiCode />,
    label: "Codify Everything",
    title: "Everything Defined in Code",
    desc: "From cloud infrastructure to security policies, network topology to compliance rules — every configuration is a versioned, reviewable, testable artifact living in Git.",
    points: [
      "Infrastructure as Code (Terraform, Pulumi)",
      "Policy as Code (OPA, Sentinel)",
      "Security as Code (Falco, Trivy)",
      "Compliance as Code (Open Policy Agent)",
    ],
    image: "/images/New/Everything_Defined_in_Code.png",
  },
  {
    icon: <FiGitBranch />,
    label: "Version Everything",
    title: "Git as the Single Source of Truth",
    desc: "Every change has an author, a review, and an audit trail. GitOps workflows ensure the desired state in Git always matches the live state in production — automatically.",
    points: [
      "Pull request-based change management",
      "Automated drift detection & reconciliation",
      "Immutable infrastructure patterns",
      "Full audit trail for every change",
    ],
    image: "/images/New/Git_as_the_Single_Source_of_Truth.png",
  },
  {
    icon: <FiShield />,
    label: "Test Everything",
    title: "Infrastructure Testing Pipelines",
    desc: "Apply software engineering discipline to infrastructure — unit tests, integration tests, and end-to-end validation before any change reaches production.",
    points: [
      "Terratest & Checkov for IaC validation",
      "Policy compliance pre-flight checks",
      "Ephemeral environment testing",
      "Automated rollback on failure",
    ],
    image: "/images/New/Infrastructure_Testing_Pipelines.png",
  },
  {
    icon: <FiRepeat />,
    label: "Automate Everything",
    title: "Self-Healing Automated Systems",
    desc: "Systems that detect drift, enforce desired state, and recover automatically — without human intervention. Continuous reconciliation at every layer of the stack.",
    points: [
      "ArgoCD / Flux GitOps reconciliation",
      "Self-healing Kubernetes operators",
      "Automated certificate & secret rotation",
      "Event-driven remediation workflows",
    ],
    image: "/images/New/Self_Healing_Automated_Systems.png",
  },
  {
    icon: <FiEye />,
    label: "Observe Everything",
    title: "Observability as Code",
    desc: "Dashboards, alerts, runbooks, and SLOs defined in code. Observability configurations are version-controlled, deployed programmatically, and reviewed like any other change.",
    points: [
      "Grafana dashboards as code (Grafonnet)",
      "Alert rules in YAML / Jsonnet",
      "SLO definitions in code (OpenSLO)",
      "Automated runbook generation",
    ],
    image: "/images/New/Observability_as_Code.png",
  },
];

const terminalLines = [
  "$ sac init --project Devopstrio --cloud aws",
  "  ✓ Initializing Software as Code workspace...",
  "  ✓ Configuring policy engine (OPA)...",
  "  ✓ Linking Git repository...",
  "",
  "$ sac deploy --env production --approve",
  "  ✓ Running policy compliance checks... PASSED",
  "  ✓ Validating infrastructure plan...",
  "  ✓ Applying Terraform modules (12/12)...",
  "  ✓ Reconciling Kubernetes manifests...",
  "  ✓ Rotating secrets & certificates...",
  "  ✓ Deploying observability stack...",
  "",
  "  🚀 Deployment complete. Zero downtime.",
  "  📊 View dashboard → https://devopstrio.co.uk",
];

const outcomes = [
  {
    icon: <FiZap />,
    metric: "10x",
    label: "Faster Provisioning",
    color: "#522c72",
  },
  {
    icon: <FiShield />,
    metric: "100%",
    label: "Policy Compliance",
    color: "#962964",
  },
  {
    icon: <FiRefreshCw />,
    metric: "Zero",
    label: "Config Drift",
    color: "#ce2453",
  },
  {
    icon: <FiTrendingUp />,
    metric: "65%",
    label: "Ops Cost Reduction",
    color: "#dd5c54",
  },
  {
    icon: <FiClock />,
    metric: "< 5 min",
    label: "Full Env Spin-up",
    color: "#e79e57",
  },
  { icon: <FiAward />, metric: "Full", label: "Audit Trail", color: "#e79e57" },
];

const codeCards = [
  {
    title: "Terraform Module",
    language: "HCL",
    icon: <FiGrid />,
    snippet: `module "vpc" {\n  source = "./modules/vpc"\n  cidr   = "10.0.0.0/16"\n  tags   = var.tags\n}`,
  },
  {
    title: "OPA Policy",
    language: "Rego",
    icon: <FiShield />,
    snippet: `deny[msg] {\n  input.resource == "sg"\n  input.ingress.port == 22\n  msg := "SSH open to world"\n}`,
  },
  {
    title: "Kubernetes Manifest",
    language: "YAML",
    icon: <FiBox />,
    snippet: `apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: api-server\nspec:\n  replicas: 3`,
  },
  {
    title: "Alert Rule",
    language: "YAML",
    icon: <FiAlertCircle />,
    snippet: `groups:\n- name: slo\n  rules:\n  - alert: HighErrorRate\n    expr: rate(errors[5m]) > 0.01\n    for: 5m`,
  },
];

const faqs = [
  {
    q: "What is Software as Code (SaC) and how is it different from IaC?",
    a: "IaC (Infrastructure as Code) focuses on defining cloud infrastructure declaratively. SaC goes further — applying software engineering practices (versioning, testing, CI/CD, code review) to ALL operational concerns: infrastructure, security policies, compliance rules, observability configs, and network topology.",
  },
  {
    q: "Which tools do you use for Software as Code implementations?",
    a: "We work with Terraform, Pulumi, CloudFormation for IaC; OPA and Sentinel for policy-as-code; Falco and Trivy for security-as-code; ArgoCD and Flux for GitOps; and Grafonnet/Jsonnet for observability-as-code. We recommend the right stack for your cloud and team maturity.",
  },
  {
    q: "How do you handle secrets and sensitive configuration?",
    a: "Secrets are never stored in code. We implement secrets-as-code workflows using HashiCorp Vault, AWS Secrets Manager, or Azure Key Vault — with automated rotation, dynamic secrets, and injection at runtime. Secret references are in code; values never are.",
  },
  {
    q: "What does a SaC transformation timeline look like?",
    a: "Phase 1 (4-6 weeks): IaC migration and Git-based workflows. Phase 2 (4-8 weeks): Policy-as-code and security scanning. Phase 3 (ongoing): Full SaC maturity with observability, compliance, and self-healing automation.",
  },
  {
    q: "Can you migrate existing manual infrastructure to SaC?",
    a: "Yes. We use tools like Terraformer to reverse-engineer existing cloud resources into Terraform, then gradually bring them under code control. We do this incrementally to minimize risk while maximizing value.",
  },
];

/* ============================================================
   COMPONENT
   ============================================================ */
const IaC = () => {
  const navigate = useNavigate();
  const [activePillar, setActivePillar] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  // Typewriter for terminal
  const typedLines = useTypewriter(terminalLines, 30);

  // Parallax hero scroll
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <div className="sac-page">
      <Serviceshero />

      {/* ════════════════════════════════════
          1. CINEMATIC PARALLAX HERO
          ════════════════════════════════════ */}
      <section className="sac-hero" ref={heroRef}>
        <motion.div className="sac-hero-bg" style={{ y: heroY }}>
          <img
            src="/images/New/Iac_slider.png"
            alt="Software as Code"
            className="sac-hero-img"
          />
          <div className="sac-hero-overlay"></div>
        </motion.div>

        <motion.div
          className="sac-hero-content"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="sac-label sac-gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            SOFTWARE AS CODE
          </motion.p>

          <motion.h1
            className="sac-hero-title"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
          >
            Your Entire Stack
            <br />
            <span className="sac-gradient-text">Defined in Code</span>
          </motion.h1>

          <motion.p
            className="sac-hero-sub"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            Infrastructure, security policies, compliance rules, observability
            configs — everything version-controlled, peer-reviewed, tested, and
            deployed like software. Because it is software.
          </motion.p>

          <motion.div
            className="sac-hero-btns"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85 }}
          >
            <button
              className="sac-primary-btn"
              onClick={() => navigate("/services/devops-enablement")}
            >
              Explore DevOps <FiArrowRight className="sac-btn-icon" />
            </button>
          </motion.div>
        </motion.div>

        {/* scroll cue */}
        <motion.div
          className="sac-scroll-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <FiChevronDown />
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          2. MANIFESTO WORD REVEAL
          ════════════════════════════════════ */}
      <section className="sac-manifesto-section">
        <div className="sac-container">
          <motion.p
            className="sac-label sac-gradient-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            THE MANIFESTO
          </motion.p>
          <div className="sac-manifesto-words">
            {manifestoWords.map((word, i) => (
              <motion.span
                key={i}
                className="sac-manifesto-word"
                initial={{ opacity: 0.08, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
              >
                {word}
              </motion.span>
            ))}
          </div>
          <motion.p
            className="sac-manifesto-sub"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Treat every operational concern as a software artifact — version
            controlled, tested, reviewed, and deployed automatically.
          </motion.p>
        </div>
      </section>

      {/* ════════════════════════════════════
          3. OUTCOME METRICS STRIP
          ════════════════════════════════════ */}
      <section className="sac-outcomes-strip">
        <motion.div
          className="sac-outcomes-track"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {outcomes.map((o, i) => (
            <motion.div key={i} className="sac-outcome-item" variants={fadeUp}>
              <div className="sac-outcome-icon" style={{ color: o.color }}>
                {o.icon}
              </div>
              <span className="sac-outcome-metric sac-gradient-text">
                {o.metric}
              </span>
              <span className="sac-outcome-label">{o.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          4. SIDEBAR PILLAR SECTION
          ════════════════════════════════════ */}
      <section className="sac-pillars-section">
        <div className="sac-container">
          <motion.div
            className="sac-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="sac-label sac-gradient-text">THE FIVE PILLARS</p>
            <h2 className="sac-section-title">Software as Code in Practice</h2>
            <p className="sac-section-desc">
              Five interconnected disciplines that together make your entire
              operational stack programmable, auditable, and automated.
            </p>
          </motion.div>

          <div className="sac-pillars-layout">
            {/* sidebar */}
            <div className="sac-pillars-nav">
              {pillars.map((p, i) => (
                <button
                  key={i}
                  className={`sac-pillar-tab ${activePillar === i ? "sac-tab-active" : ""}`}
                  onClick={() => setActivePillar(i)}
                >
                  <span className="sac-pillar-num sac-gradient-text">
                    0{i + 1}
                  </span>
                  <span className="sac-pillar-tab-icon">{p.icon}</span>
                  <span className="sac-pillar-label">{p.label}</span>
                </button>
              ))}
            </div>

            {/* content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePillar}
                className="sac-pillar-content"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.45 }}
              >
                <div className="sac-pillar-text">
                  <div className="sac-pillar-icon-wrap">
                    {pillars[activePillar].icon}
                  </div>
                  <h3>{pillars[activePillar].title}</h3>
                  <p>{pillars[activePillar].desc}</p>
                  <ul className="sac-pillar-points">
                    {pillars[activePillar].points.map((pt, j) => (
                      <li key={j}>
                        <FiCheckCircle className="sac-check" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                  <button
                    className="sac-primary-btn"
                    onClick={() => navigate("/services/cicd")}
                  >
                    Learn More <FiArrowRight className="sac-btn-icon" />
                  </button>
                </div>
                <div className="sac-pillar-image">
                  <img
                    src={pillars[activePillar].image}
                    alt={pillars[activePillar].title}
                  />
                  <div className="sac-pillar-img-overlay"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          5. TERMINAL TYPEWRITER
          ════════════════════════════════════ */}
      <section className="sac-terminal-section">
        <div className="sac-container">
          <div className="sac-terminal-layout">
            <motion.div
              className="sac-terminal-left"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="sac-label sac-gradient-text">SAC IN ACTION</p>
              <h2 className="sac-terminal-title">
                Deploy Your Entire
                <br />
                <span className="sac-gradient-text">Stack in Minutes</span>
              </h2>
              <p className="sac-terminal-desc">
                A single command provisions infrastructure, applies policies,
                rotates secrets, deploys workloads, and configures observability
                — fully automated, fully audited.
              </p>
              <div className="sac-terminal-features">
                <div className="sac-tf-item">
                  <FiCheck className="sac-tf-icon" /> Policy-gated deployments
                </div>
                <div className="sac-tf-item">
                  <FiCheck className="sac-tf-icon" /> Zero-touch secret rotation
                </div>
                <div className="sac-tf-item">
                  <FiCheck className="sac-tf-icon" /> Full audit trail generated
                </div>
                <div className="sac-tf-item">
                  <FiCheck className="sac-tf-icon" /> Automatic rollback on
                  failure
                </div>
              </div>
            </motion.div>

            <motion.div
              className="sac-terminal-window"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="sac-terminal-bar">
                <span className="sac-tb-dot sac-red"></span>
                <span className="sac-tb-dot sac-yellow"></span>
                <span className="sac-tb-dot sac-green"></span>
                <span className="sac-tb-title">sac-cli — zsh</span>
              </div>
              <div className="sac-terminal-body">
                {typedLines.map((line, i) => (
                  <div
                    key={i}
                    className={`sac-term-line ${line.startsWith("$") ? "sac-term-cmd" : line.startsWith("  ✓") ? "sac-term-ok" : line.startsWith("  🚀") || line.startsWith("  📊") ? "sac-term-success" : ""}`}
                  >
                    {line || "\u00A0"}
                  </div>
                ))}
                <span className="sac-cursor">▋</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          6. CODE CARD GRID
          ════════════════════════════════════ */}
      <section className="sac-code-section">
        <div className="sac-container">
          <motion.div
            className="sac-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="sac-label sac-gradient-text">CODE-FIRST</p>
            <h2 className="sac-section-title">Everything is Code</h2>
            <p className="sac-section-desc">
              Infrastructure, policies, alerts — all defined as versioned,
              reviewable artifacts.
            </p>
          </motion.div>

          <motion.div
            className="sac-code-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {codeCards.map((card, i) => (
              <motion.div key={i} className="sac-code-card" variants={scaleIn}>
                <div className="sac-code-card-header">
                  <div className="sac-code-card-icon">{card.icon}</div>
                  <div>
                    <h4>{card.title}</h4>
                    <span className="sac-code-lang">{card.language}</span>
                  </div>
                  <FiCopy className="sac-code-copy" />
                </div>
                <pre className="sac-code-snippet">
                  <code>{card.snippet}</code>
                </pre>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════
          7. FULL-WIDTH VIDEO BANNER
          ════════════════════════════════════ */}
      <section className="sac-video-section">
        <div className="sac-video-overlay"></div>
        <motion.div
          className="sac-video-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2>
            Stop Managing Infrastructure.
            <br />
            <span className="sac-gradient-text">Start Engineering It.</span>
          </h2>
          <p>
            Eliminate configuration drift, manual toil, and audit risk. Let code
            govern your stack — automatically and continuously.
          </p>
          <button
            className="sac-primary-btn"
            onClick={() => navigate("/contact")}
          >
            Book a SAC Assessment <FiArrowRight className="sac-btn-icon" />
          </button>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          8. TESTIMONIAL
          ════════════════════════════════════ */}
      <section className="sac-quote-section">
        <div className="sac-container">
          <motion.div
            className="sac-quote-card"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <FaQuoteLeft className="sac-q-icon" />
            <blockquote>
              &quot;Adopting Software as Code practices with Devopstrio
              eliminated our configuration drift overnight. Our entire stack —
              200+ services — is now defined in Git, policy-tested on every PR,
              and deployed automatically. We cut ops overhead by 60%.&quot;
            </blockquote>
            <div className="sac-quote-author">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                alt="Ananya Krishnan"
              />
              <div>
                <h4>Ananya Krishnan</h4>
                <p>Platform Engineering Lead, Finserv Corp</p>
              </div>
              <div className="sac-quote-metric">
                <span className="sac-gradient-text">60%</span>
                <small>Ops Cost Reduction</small>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════
          9. FAQ
          ════════════════════════════════════ */}
      <section className="sac-faq-section">
        <div className="sac-container">
          <div className="sac-faq-layout">
            <motion.div
              className="sac-faq-left"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="sac-label sac-gradient-text">FAQ</p>
              <h2 className="sac-faq-title">
                Questions About
                <br />
                <span className="sac-gradient-text">Software as Code?</span>
              </h2>
              <p className="sac-faq-sub">
                We answer the most common questions about adopting SaC
                practices.
              </p>
              <button
                className="sac-primary-btn"
                onClick={() => navigate("/contact")}
              >
                Talk to an Expert <FiArrowRight className="sac-btn-icon" />
              </button>
            </motion.div>

            <div className="sac-faq-right">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className={`sac-faq-item ${openFaq === i ? "sac-faq-open" : ""}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <button className="sac-faq-q" onClick={() => toggleFaq(i)}>
                    <span>{faq.q}</span>
                    <FiChevronDown />
                  </button>
                  <div className="sac-faq-a">
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

export default IaC;
