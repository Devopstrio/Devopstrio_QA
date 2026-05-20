import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Serviceshero from "../../components/Hero/Serviceshero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

import {
  FiArrowRight,
  FiChevronDown,
  FiCheck,
  FiCheckCircle,
  FiGitCommit,
  FiGitBranch,
  FiGitMerge,
  FiGitPullRequest,
  FiBox,
  FiTerminal,
  FiRefreshCw,
  FiEye,
  FiLock,
  FiLayers,
  FiActivity,
  FiZap,
  FiClock,
  FiCpu,
  FiTrendingUp,
  FiShield,
  FiCode,
  FiPackage,
  FiServer,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import "../../Style/serve/GitOps.css";

/* ─── Motion variants ─── */
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

/* ─── DATA: sticky scroll sections ─── */
const stickyPanels = [
  {
    id: "iac",
    num: "01",
    icon: <FiCode />,
    eyebrow: "Infrastructure As Code",
    title: "Git is Your Dashboard",
    desc: "Every cloud resource — VPCs, clusters, load balancers, databases — lives as code in a Git repository. No console clicks, no snowflake servers. Press merge and watch infrastructure materialise.",
    bullets: [
      "Terraform & Pulumi support",
      "Immutable, versioned infrastructure",
      "Review infra changes like code",
      "Destroy & recreate in minutes",
    ],
    stat: { val: "100%", label: "Audit Trail" },
    color: "#7d18d1",
    image:
      "/images/NewFolder/Group_12.png",
    imgAlt: "Code on dark monitor",
  },
  {
    id: "pipeline",
    num: "02",
    icon: <FiTerminal />,
    eyebrow: "CI Automation",
    title: "Ship in Minutes",
    desc: "Every commit flows through an automated pipeline — compile, test, security scan, build image, push to registry. No manual steps, no surprises. Engineering teams deploy with total confidence.",
    bullets: [
      "GitHub Actions / GitLab CI",
      "Automated unit & integration tests",
      "Container vulnerability scanning",
      "Immutable image tagging",
    ],
    stat: { val: "< 5 min", label: "Build to Image" },
    color: "#ba1d1dff",
    image:
      "/images/NewFolder/Group_23.png",
    imgAlt: "CI pipeline terminal",
  },
  {
    id: "gitops-sync",
    num: "03",
    icon: <FiBox />,
    eyebrow: "GitOps Delivery",
    title: "Merge → Deploy",
    desc: "ArgoCD and Flux continuously watch your Git repo. When a manifest changes, the cluster state is updated — automatically. No deployment scripts, no SSH access, no human error.",
    bullets: [
      "ArgoCD & Flux CD support",
      "Pull-based deployments (secure)",
      "Canary & Blue-Green rollouts",
      "Multi-cluster orchestration",
    ],
    stat: { val: "Zero", label: "Manual Toil" },
    color: "#ce2453",
    image:
      "/images/NewFolder/Group_24.png",
    imgAlt: "Kubernetes deployment",
  },
  {
    id: "drift",
    num: "04",
    icon: <FiShield />,
    eyebrow: "Drift Reconciliation",
    title: "Self-Healing Infra",
    desc: "Someone ran kubectl manually? The GitOps agent detects the drift and reverts it within seconds. Your cluster always matches what's in Git — no exceptions.",
    bullets: [
      "Real-time drift detection",
      "Automatic reconciliation",
      "Policy enforcement",
      "Immutable environment guarantee",
    ],
    stat: { val: "< 30s", label: "Drift Reverted" },
    color: "#dd5c54",
    image:
      "/images/NewFolder/Group_25.png",
    imgAlt: "Server infrastructure",
  },
  {
    id: "observe",
    num: "05",
    icon: <FiActivity />,
    eyebrow: "Observability Loop",
    title: "Instant Rollback",
    desc: "Prometheus metrics feed directly into the GitOps pipeline. A deployment that degrades SLOs is automatically rolled back — before your users feel a thing.",
    bullets: [
      "Prometheus & Grafana integration",
      "Metrics-gated promotions",
      "Automated rollback triggers",
      "Full deployment audit log",
    ],
    stat: { val: "< 1min", label: "Rollback Time" },
    color: "#e79e57",
    image:
      "/images/NewFolder/Group_26.png",
    imgAlt: "Monitoring dashboard",
  },
];

/* ─── DORA metrics ─── */
const doraMetrics = [
  {
    val: "100x",
    label: "Deploy Frequency",
    sub: "Per day",
    icon: <FiZap />,
    color: "#7d18d1",
  },
  {
    val: "< 1hr",
    label: "Lead Time",
    sub: "Commit → Prod",
    icon: <FiClock />,
    color: "#ce2453",
  },
  {
    val: "< 10m",
    label: "Recovery (MTTR)",
    sub: "Auto-rollback",
    icon: <FiRefreshCw />,
    color: "#dd5c54",
  },
  {
    val: "< 1%",
    label: "Change Failure",
    sub: "Rate",
    icon: <FiShield />,
    color: "#e79e57",
  },
];

/* ─── FAQ ─── */
const faqs = [
  {
    q: "How does GitOps differ from traditional CI/CD?",
    a: "Traditional CI/CD uses 'push' deployments — your CI server holds cluster credentials and deploys directly. GitOps uses 'pull' — an agent inside your cluster watches Git and pulls changes in. Your CI pipeline never touches the cluster directly.",
  },
  {
    q: "What happens if someone manually changes the cluster?",
    a: "The GitOps operator detects the configuration drift within seconds and automatically reverts the live state to match Git. Git is always the source of truth.",
  },
  {
    q: "Can GitOps handle secrets securely?",
    a: "Yes. Secrets are encrypted before being committed using Sealed Secrets or SOPS. The GitOps agent decrypts them at runtime inside the cluster — no plaintext secrets in Git.",
  },
  {
    q: "Does GitOps only work with Kubernetes?",
    a: "While GitOps originated for Kubernetes (ArgoCD, Flux), the declarative principles apply broadly. Terraform + Atlantis brings GitOps to infrastructure, and Ansible can be driven the same way.",
  },
  {
    q: "How does this improve developer experience?",
    a: "Developers only need Git. Commit code, open a PR, get it reviewed, merge. The deployment pipeline runs automatically. No kubectl, no deployment playbooks, no on-call for releases.",
  },
];

/* ── COMPONENT ── */
const GitOps = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);
  const [activePanel, setActivePanel] = useState(0);

  /* sticky-scroll observer */
  const panelRefs = useRef([]);

  /* Scroll-spy for sidebar */
  useEffect(() => {
    const obs = panelRefs.current.map((el, idx) => {
      if (!el) return null;
      const o = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setActivePanel(idx);
        },
        { rootMargin: "-30% 0px -60% 0px" },
      );
      o.observe(el);
      return o;
    });
    return () => obs.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <div className="go-page">
      <Serviceshero />

      {/* ════ 1. HERO ════ */}
      <section className="go-hero">
        <div className="go-hero-bg">
          <div className="go-hero-orb go-orb-purple"></div>
          <div className="go-hero-orb go-orb-red"></div>
          <div className="go-grid-pattern"></div>
        </div>
        <div className="go-container">
          <div className="go-hero-inner">
            <motion.div
              className="go-hero-text"
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
            >
              <span className="go-eyebrow-tag">
                <FiGitBranch /> GitOps &amp; CI/CD Automation
              </span>
              <h1 className="go-hero-h1">
                Deploy Fearlessly
                <br />
                <span className="go-gtext">Scale Infinitely</span>
              </h1>
              <p className="go-hero-p">
                Production-grade GitOps pipelines implemented in days. Your
                entire infrastructure as code — declarative, versioned,
                self-healing. Merge a PR and watch it deploy automatically.
              </p>
              {/* <div className="go-hero-ctas">
                <button
                  className="go-cta-solid"
                  onClick={() => navigate("/contact")}
                >
                  Start GitOps Migration <FiArrowRight />
                </button>
                <button
                  className="go-cta-ghost"
                  onClick={() => navigate("/contact")}
                >
                  Book Architecture Call
                </button>
              </div> */}
            </motion.div>

            <motion.div
              className="go-hero-visual"
              variants={fadeRight}
              initial="hidden"
              animate="visible"
            >
              <div className="go-terminal">
                <div className="go-term-bar">
                  <span className="go-tb-dot go-tb-r"></span>
                  <span className="go-tb-dot go-tb-y"></span>
                  <span className="go-tb-dot go-tb-g"></span>
                  <span className="go-term-title">pipeline.yaml — ArgoCD</span>
                </div>
                <div className="go-term-body">
                  <p>
                    <span className="go-t-grey">1</span>{" "}
                    <span className="go-t-purple">on:</span>{" "}
                    <span className="go-t-green">[push, pull_request]</span>
                  </p>
                  <p>
                    <span className="go-t-grey">2</span>
                  </p>
                  <p>
                    <span className="go-t-grey">3</span>{" "}
                    <span className="go-t-purple">jobs:</span>
                  </p>
                  <p>
                    <span className="go-t-grey">4</span>{" "}
                    <span className="go-t-blue">build-and-deploy:</span>
                  </p>
                  <p>
                    <span className="go-t-grey">5</span>{" "}
                    <span className="go-t-purple">steps:</span>
                  </p>
                  <p>
                    <span className="go-t-grey">6</span>{" "}
                    <span className="go-t-dim">- uses:</span>{" "}
                    <span className="go-t-green">actions/checkout@v4</span>
                  </p>
                  <p>
                    <span className="go-t-grey">7</span>{" "}
                    <span className="go-t-dim">- run:</span>{" "}
                    <span className="go-t-yellow">docker build &amp; scan</span>
                  </p>
                  <p>
                    <span className="go-t-grey">8</span>{" "}
                    <span className="go-t-dim">- run:</span>{" "}
                    <span className="go-t-yellow">docker push registry</span>
                  </p>
                  <p>
                    <span className="go-t-grey">9</span>{" "}
                    <span className="go-t-dim">- name:</span>{" "}
                    <span className="go-t-green">ArgoCD Sync</span>
                  </p>
                  <p className="go-t-blink">
                    <span className="go-t-grey">10</span>{" "}
                    <span className="go-t-green">✓ Deployed to production</span>{" "}
                    <span className="go-cursor">|</span>
                  </p>
                </div>
              </div>
              {/* Floating metric pills */}
              <div className="go-float-pill go-pill-1">
                <FiZap /> <strong className="go-gtext">973x</strong> faster
                deploys
              </div>
              <div className="go-float-pill go-pill-2">
                <FiShield /> Zero config drift
              </div>
              <div className="go-float-pill go-pill-3">
                <FiRefreshCw /> Auto-rollback in{" "}
                <strong className="go-gtext">&lt; 60s</strong>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════ 2. DORA TICKER STRIP ════ */}
      <div className="go-dora-strip">
        {doraMetrics.map((m, i) => (
          <div key={i} className="go-dora-item">
            <div className="go-dora-icon" style={{ "--dc": m.color }}>
              {m.icon}
            </div>
            <div className="go-dora-text">
              <span className="go-gtext">{m.val}</span>
              <span>{m.label}</span>
              <span className="go-dora-sub">{m.sub}</span>
            </div>
            {i < doraMetrics.length - 1 && <div className="go-dora-sep"></div>}
          </div>
        ))}
      </div>

      {/* ════ 3. LAYERS SECTION — Sidebar + Panels ════ */}
      <section className="go-layers-section">
        <div className="go-container go-layers-grid">
          {/* Sticky left sidebar */}
          <div className="go-sidebar">
            <div className="go-sidebar-label">
              GitOps
              <br />
              Phases
            </div>
            <div className="go-sidebar-track">
              <div className="go-sidebar-vline"></div>
              {stickyPanels.map((s, i) => (
                <button
                  key={s.id}
                  className={`go-sidebar-node ${activePanel === i ? "go-node-active" : ""}`}
                  style={{ "--nc": s.color }}
                  onClick={() =>
                    panelRefs.current[i]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    })
                  }
                >
                  <div className="go-node-ring">
                    <span className="go-node-num">{s.num}</span>
                  </div>
                  <div className="go-node-info">
                    <span className="go-node-title">{s.title}</span>
                    <span className="go-node-sub">{s.eyebrow}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right content panels */}
          <div className="go-panels">
            {stickyPanels.map((s, i) => (
              <div
                key={s.id}
                className="go-panel"
                ref={(el) => (panelRefs.current[i] = el)}
              >
                <motion.div
                  className="go-panel-text"
                  initial={{ opacity: 0, x: -55 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.65 }}
                >
                  <div className="go-panel-num" style={{ color: s.color }}>
                    {s.num}
                  </div>
                  <p className="go-panel-eyebrow-tag" style={{ color: s.color }}>
                    {s.eyebrow}
                  </p>
                  <h2 className="go-panel-title">{s.title}</h2>
                  <p className="go-panel-desc">{s.desc}</p>
                  <ul className="go-panel-bullets">
                    {s.bullets.map((b, j) => (
                      <li key={j}>
                        <FiCheckCircle style={{ color: s.color }} />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div
                    className="go-stat-chip"
                    style={{
                      borderColor: `${s.color}40`,
                      background: `${s.color}0c`,
                    }}
                  >
                    <span className="go-stat-big" style={{ color: s.color }}>
                      {s.stat.val}
                    </span>
                    <span className="go-stat-sub">{s.stat.label}</span>
                  </div>
                </motion.div>

                <motion.div
                  className="go-panel-img"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55 }}
                >
                  <img src={s.image} alt={s.title} />
                  <div
                    className="go-panel-tint"
                    style={{ "--nc": s.color }}
                  ></div>
                  <div
                    className="go-panel-corner-badge"
                    style={{
                      background: `${s.color}22`,
                      borderColor: `${s.color}50`,
                      color: s.color,
                    }}
                  >
                    {s.icon} Phase {s.num}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ 4. SPLIT FEATURE — IMAGE LEFT / TEXT RIGHT ════ */}
      <section className="go-split-section">
        <div className="go-container">
          <motion.div
            className="go-split-grid"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="go-split-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=900&q=80"
                alt="DevOps infrastructure"
                className="go-split-img"
              />
              <div className="go-split-img-overlay"></div>
              <div className="go-split-metric-card">
                <FiTrendingUp className="go-smc-icon" />
                <p className="go-smc-val go-gtext">973x</p>
                <p className="go-smc-label">Faster Than Legacy Pipelines</p>
              </div>
            </div>
            <div className="go-split-content">
              <span className="go-eyebrow-tag">
                <FiActivity /> Why Elite Teams Choose GitOps
              </span>
              <h2 className="go-split-h2">
                The Fastest Dev Teams
                <br />
                <span className="go-gtext">All Share One Secret.</span>
              </h2>
              <p className="go-split-p">
                Google, Netflix, Amazon deploy thousands of times per day. Their
                secret? GitOps — everything is code, everything is automated,
                everything is auditable. We bring this exact methodology to your
                team — tailored to your stack.
              </p>
              <div className="go-split-features">
                {[
                  {
                    icon: <FiCheckCircle />,
                    title: "Full Audit Trail",
                    desc: "Every change trackable to a Git commit",
                  },
                  {
                    icon: <FiCheckCircle />,
                    title: "One-Click Rollback",
                    desc: "Revert any release in under 60 seconds",
                  },
                  {
                    icon: <FiCheckCircle />,
                    title: "No Snowflakes",
                    desc: "Environments are identical and reproducible",
                  },
                  {
                    icon: <FiCheckCircle />,
                    title: "Developer Autonomy",
                    desc: "Ship without waiting for ops approval",
                  },
                ].map((f, i) => (
                  <div key={i} className="go-split-feat">
                    <span className="go-sf-icon">{f.icon}</span>
                    <div>
                      <strong>{f.title}</strong>
                      <p>{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* <button
                className="go-cta-solid"
                onClick={() => navigate("/contact")}
              >
                Get Your Free Assessment <FiArrowRight />
              </button> */}
            </div>
          </motion.div>
        </div>
      </section>
      {/* ════ 5. FULL-BLEED IMAGE BREAK ════ */}
      <section className="go-image-break">
        <img
          src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=1600&q=80"
          alt="Cloud infrastructure"
          className="go-ib-img"
        />
        <div className="go-ib-overlay"></div>
        <div className="go-ib-content">
          <p className="go-ib-label">The Numbers Don&apos;t Lie</p>
          <h2 className="go-ib-h2">
            Elite teams deploy <span className="go-gtext">973x faster</span>
            <br />
            than low performers.
          </h2>
          <button
            className="go-cta-solid go-cta-lg"
            onClick={() => navigate("/contact")}
          >
            Become an Elite Team <FiArrowRight />
          </button>
        </div>
      </section>

      {/* ════ 6. BEFORE / AFTER FULL-WIDTH ════ */}
      <section className="go-compare-section">
        <div className="go-container">
          <motion.div
            className="go-section-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="go-eyebrow-tag">
              <FiRefreshCw /> Transformation
            </span>
            <h2 className="go-stitle">
              Before vs After
              <br />
              <span className="go-gtext">GitOps Adoption</span>
            </h2>
          </motion.div>
          <div className="go-compare-cols">
            <div className="go-compare-panel go-compare-before-panel">
              <h3 className="go-compare-h3 go-ch3-before">❌ Before GitOps</h3>
              {[
                "Manual SSH deployments",
                "Hours-long rollback process",
                "No audit trail for infra",
                "Config drift goes undetected for weeks",
                "Snowflake servers that can&apos;t be reproduced",
                "Security baked on at the end",
                "Deployments cause weekend anxiety",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="go-compare-item go-ci-before"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <span className="go-xi">✕</span> {item}
                </motion.div>
              ))}
            </div>
            <div className="go-compare-divider">
              <div className="go-compare-divider-line"></div>
              <div className="go-compare-divider-badge">VS</div>
              <div className="go-compare-divider-line"></div>
            </div>
            <div className="go-compare-panel go-compare-after-panel">
              <h3 className="go-compare-h3 go-ch3-after">✓ After GitOps</h3>
              {[
                "Git merge triggers automated deploy",
                "git revert — done in 60 seconds",
                "Full Git history for every change",
                "Drift detected and reverted in real-time",
                "Identical, reproducible environments",
                "Shift-left security baked into pipeline",
                "Teams deploy 10x a day with confidence",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="go-compare-item go-ci-after"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <FiCheck className="go-check-ico" /> {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ════ 7. CINEMATIC FIXED BANNER ════ */}
      <section className="go-fixed-banner">
        <div className="go-banner-overlay"></div>
        <motion.div
          className="go-banner-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="go-eyebrow-tag">
            <FiCpu /> GitOps Engine
          </span>
          <h2>
            The Future of Operations
            <br />
            <span className="go-gtext">is Programmable.</span>
          </h2>
          <p>
            Stop managing infrastructure manually. Start engineering it. With
            GitOps, every operational concern is a versioned, testable, and
            automated software artifact.
          </p>
          <div className="go-banner-cta">
            <button
              className="go-cta-solid"
              onClick={() => navigate("/services/cicd")}
            >
              Start Your Transformation <FiArrowRight />
            </button>
          </div>
        </motion.div>
      </section>

      {/* ════ 8. FAQ ════ */}
      <section className="go-faq-section">
        <div className="go-container">
          <div className="go-faq-layout">
            <motion.div
              className="go-faq-left"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="go-eyebrow-tag">
                <FiGitBranch /> FAQ
              </span>
              <h2 className="go-faq-h2">
                GitOps &amp; CI/CD
                <br />
                <span className="go-gtext">— Answered.</span>
              </h2>
              <p className="go-faq-sub">
                Everything you need to know about our GitOps implementation,
                workflows, and benefits.
              </p>
              <button
                className="go-cta-solid"
                onClick={() => navigate("/contact")}
              >
                Talk to a Cloud Architect <FiArrowRight />
              </button>
            </motion.div>
            <div className="go-faq-right">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className={`go-faq-item ${openFaq === i ? "go-faq-open" : ""}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <button
                    className="go-faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <FiChevronDown />
                  </button>
                  <div className="go-faq-ans">
                    <p>{faq.a}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
        <Newsletter />
      </div>    </div>
  );
};

export default GitOps;
