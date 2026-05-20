import React, { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useNavigate } from "react-router-dom";

import AboutHero from "../../components/Hero/Abouthero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

import {
  FiHeart,
  FiZap,
  FiShield,
  FiUsers,
  FiGlobe,
  FiStar,
  FiArrowRight,
  FiCheck,
  FiTarget,
  FiTrendingUp,
  FiCpu,
  FiAward,
  FiCode,
  FiChevronRight,
  FiPlay,
} from "react-icons/fi";

import "../../Style/about/Values.css";

/* ── Motion Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ── Core Values ── */
const CORE_VALUES = [
  {
    id: "integrity",
    num: "01",
    icon: <FiShield />,
    title: "Radical Honesty",
    tagline: "We say what we mean. Always.",
    desc: "We believe the most respectful thing we can do is tell the truth — to clients, to each other, and to ourselves. No spin, no sugar-coating, no hiding behind jargon.",
    color: "#7d18d1",
    img: "/images/NewFolder/Groups_90.png",
    proofs: [
      "Zero NDA violations since founding",
      "100% transparent billing model",
      "Client audits welcomed any time",
    ],
  },
  {
    id: "ownership",
    num: "02",
    icon: <FiTarget />,
    title: "Extreme Ownership",
    tagline: "No excuses. No finger-pointing.",
    desc: "Every engineer owns their code end-to-end — from design to deploy to 3am incident. We don't hand off problems. We solve them.",
    color: "#962964",
    img: "/images/NewFolder/Groups_91.png",
    proofs: [
      "<2 min P1 acknowledgement SLA",
      "On-call rotations, no exceptions",
      "Post-mortems, not blame sessions",
    ],
  },
  {
    id: "craft",
    num: "03",
    icon: <FiCode />,
    title: "Engineering Craft",
    tagline: "Good enough, isn't.",
    desc: "We obsess over elegance. Over the clean abstraction, the efficient query, the CI pipeline that runs in 90 seconds. Great engineering is a craft, not a commodity.",
    color: "#ce2453",
    img: "/images/NewFolder/Groups_92.png",
    proofs: [
      "95% test coverage baseline",
      "Peer code review — no exceptions",
      "Internal RFC process for all major changes",
    ],
  },
  {
    id: "velocity",
    num: "04",
    icon: <FiZap />,
    title: "Relentless Velocity",
    tagline: "Ship. Learn. Repeat.",
    desc: "We deploy to production dozens of times a week. Speed isn't recklessness — it's our most powerful quality signal. Fast feedback loops make better software.",
    color: "#dd5c54",
    img: "/images/NewFolder/Groups_93.png",
    proofs: [
      "44 avg deploys per week per team",
      "Feature flags for zero-downtime rollout",
      "DORA Elite performer across all metrics",
    ],
  },
  {
    id: "empathy",
    num: "05",
    icon: <FiHeart />,
    title: "Human Empathy",
    tagline: "Technology is made for people.",
    desc: "Every API we design, every alert we tune, every dashboard we build — someone will use this. We keep that person in focus at every step.",
    color: "#e79e57",
    img: "/images/NewFolder/Groups_94.png",
    proofs: [
      "User research baked into every sprint",
      "Annual client empathy interviews",
      "Internal mental health first aiders",
    ],
  },
];

/* ── How We Work: Principles ── */
const PRINCIPLES = [
  {
    icon: <FiCheck />,
    title: "Default to Async",
    desc: "Meetings are a last resort. We write clearly, document deeply, and respect deep work.",
  },
  {
    icon: <FiGlobe />,
    title: "Remote-First",
    desc: "Every decision, process, and tool is designed for distributed teams — always.",
  },
  {
    icon: <FiUsers />,
    title: "No-Ego Collaboration",
    desc: "The best idea wins — regardless of who or what level it came from.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Compound Learning",
    desc: "1% better every day. We invest 10% of work time in structured learning.",
  },
  {
    icon: <FiStar />,
    title: "Celebrate Failure",
    desc: "If you're not failing, you're not shipping fast enough. Blameless retros only.",
  },
  {
    icon: <FiShield />,
    title: "Security by Default",
    desc: "Security isn't a phase. It's in every PR, every commit, every architecture decision.",
  },
  {
    icon: <FiCpu />,
    title: "Automate Everything",
    desc: "If a human did it twice, we automate it. Toil is the enemy of scale.",
  },
  {
    icon: <FiAward />,
    title: "Raise the Bar",
    desc: "We hire people who make us better. Then we help them outgrow us.",
  },
];

/* ── Culture Numbers ── */
const STATS = [
  { val: "94%", lbl: "Employee Retention Rate", color: "#7d18d1" },
  { val: "4.8★", lbl: "Glassdoor Rating", color: "#ce2453" },
  { val: "10%", lbl: "Time Allocated to Learning", color: "#dd5c54" },
  { val: "100%", lbl: "Remote Work Flexibility", color: "#e79e57" },
];

/* ── Manifesto lines ── */
const MANIFESTO = [
  "We believe software should be boring in production.",
  "We believe the best architecture is the one that disappears.",
  "We believe a slow deploy is a security risk.",
  "We believe in writing code your future self will thank you for.",
  "We believe the cloud should serve humans — not the other way around.",
  "We believe great DevOps is 10% tools and 90% culture.",
];

/* ── Marquee items ── */
const MARQUEE_ITEMS = [
  "Radical Honesty",
  "Extreme Ownership",
  "Engineering Craft",
  "Relentless Velocity",
  "Human Empathy",
  "Remote-First",
  "Automate Everything",
  "Raise the Bar",
  "Compound Learning",
  "No-Ego Collaboration",
  "Celebrate Failure",
  "Security by Default",
];

/* ── COMPONENT ── */
const Values = () => {
  const navigate = useNavigate();
  const [activeValue, setActiveValue] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [marquePaused, setMarquePaused] = useState(false);
  const manifestoRef = useRef(null);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const manifestoY = useTransform(
    useScroll({ target: manifestoRef, offset: ["start end", "end start"] })
      .scrollYProgress,
    [0, 1],
    ["0%", "25%"],
  );

  /* auto-advance value cards */
  useEffect(() => {
    const t = setInterval(() => {
      setActiveValue((p) => (p + 1) % CORE_VALUES.length);
    }, 5200);
    return () => clearInterval(t);
  }, []);

  const val = CORE_VALUES[activeValue];

  return (
    <div className="vl-page">


      {/* ── HERO ── */}
      <AboutHero />

      {/* ════════════════════════════════
          MARQUEE — scrolling values strip
          ════════════════════════════════ */}
      <div
        className="vl-marquee-band"
        onMouseEnter={() => setMarquePaused(true)}
        onMouseLeave={() => setMarquePaused(false)}
      >
        <div className="vl-marquee-outer">
          <div className={`vl-marquee-inner ${marquePaused ? "paused" : ""}`}>
            {[0, 1].map((ri) => (
              <div key={ri} className="vl-marquee-row" aria-hidden={ri === 1}>
                {MARQUEE_ITEMS.map((item, i) => (
                  <span key={i} className="vl-mq-item">
                    <span className="vl-mq-dot" />
                    {item}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          1. CORE VALUES — Sidebar + Showcase
          ════════════════════════════════ */}
      <section className="vl-values-section">
        <div className="vl-container">
          <motion.div
            className="vl-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="vl-eyebrow vl-grad">What We Stand For</p>
            <h2 className="vl-sec-h2">
              Five Values
              <br />
              <span className="vl-grad">One Culture</span>
            </h2>
            <p className="vl-sec-sub">
              These aren't posters on a wall. They're the operating principles
              that determine every hire we make, every client we take, every
              decision we face.
            </p>
          </motion.div>

          <div className="vl-values-layout">
            {/* ── SIDEBAR NAV ── */}
            <div className="vl-val-sidebar">
              <p className="vl-vsb-label">Navigate Values</p>
              <div className="vl-vsb-track">
                <div className="vl-vsb-vline" />
                {CORE_VALUES.map((v, i) => (
                  <button
                    key={v.id}
                    className={`vl-vsb-btn ${activeValue === i ? "on" : ""}`}
                    style={{ "--vc": v.color }}
                    onClick={() => setActiveValue(i)}
                  >
                    <span className="vl-vsb-dot" />
                    <div className="vl-vsb-info">
                      <span className="vl-vsb-num">{v.num}</span>
                      <span className="vl-vsb-title">{v.title}</span>
                    </div>
                    <FiChevronRight className="vl-vsb-arrow" />
                  </button>
                ))}
              </div>

              {/* Active value quick stat */}
              <div
                className="vl-vsb-card"
                style={{ borderColor: `${val.color}28` }}
              >
                <div
                  className="vl-vsb-card-icon"
                  style={{
                    color: val.color,
                    background: `${val.color}12`,
                    borderColor: `${val.color}22`,
                  }}
                >
                  {val.icon}
                </div>
                <p className="vl-vsb-card-num">{val.num}</p>
                <h4 className="vl-vsb-card-title">{val.title}</h4>
                <p className="vl-vsb-card-tag">{val.tagline}</p>
              </div>
            </div>

            {/* ── MAIN SHOWCASE ── */}
            <div className="vl-val-main">
              {/* Dot progress bar */}
              <div className="vl-val-progress">
                {CORE_VALUES.map((v, i) => (
                  <button
                    key={i}
                    className={`vl-val-dot ${activeValue === i ? "on" : ""}`}
                    style={{ "--vc": v.color }}
                    onClick={() => setActiveValue(i)}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={val.id}
                  className="vl-val-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  }}
                  exit={{ opacity: 0, y: -22, transition: { duration: 0.3 } }}
                >
                  {/* Image strip */}
                  <div className="vl-val-img-wrap">
                    <img src={val.img} alt={val.title} className="vl-val-img" />
                    <div
                      className="vl-val-img-tint"
                      style={{ "--vc": val.color }}
                    />

                    {/* Big number overlay */}
                    <div className="vl-val-bignum" style={{ color: val.color }}>
                      {val.num}
                    </div>
                    {/* Icon badge */}
                    <div
                      className="vl-val-icon-badge"
                      style={{
                        color: val.color,
                        borderColor: `${val.color}40`,
                        background: `${val.color}10`,
                      }}
                    >
                      {val.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="vl-val-body">
                    <p className="vl-val-tagline">
                      &ldquo;{val.tagline}&rdquo;
                    </p>
                    <h3 className="vl-val-title" style={{ color: val.color }}>
                      {val.title}
                    </h3>
                    <p className="vl-val-desc">{val.desc}</p>

                    <div className="vl-val-proofs">
                      <p className="vl-val-proofs-label">How we live this</p>
                      {val.proofs.map((proof, i) => (
                        <div key={i} className="vl-val-proof-item">
                          <FiCheck style={{ color: val.color }} />
                          <span>{proof}</span>
                        </div>
                      ))}
                    </div>

                    <div className="vl-val-footer">
                      <div className="vl-val-tabs">
                        {CORE_VALUES.map((v, i) => (
                          <button
                            key={i}
                            className={`vl-val-tab ${activeValue === i ? "on" : ""}`}
                            style={{ "--vc": v.color }}
                            onClick={() => setActiveValue(i)}
                          >
                            {v.num}
                          </button>
                        ))}
                      </div>
                      <button
                        className="vl-val-next"
                        style={{
                          color: val.color,
                          borderColor: `${val.color}35`,
                          background: `${val.color}08`,
                        }}
                        onClick={() =>
                          setActiveValue((activeValue + 1) % CORE_VALUES.length)
                        }
                      >
                        Next Value <FiArrowRight />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          2. CULTURE STATS — horizontal strip
          ════════════════════════════════ */}
      <section className="vl-stats-section">
        <div className="vl-container">
          <motion.div
            className="vl-stats-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                className="vl-stat-card"
                variants={fadeUp}
                style={{ "--sc": s.color }}
              >
                <div className="vl-stat-val">{s.val}</div>
                <div className="vl-stat-lbl">{s.lbl}</div>
                <div className="vl-stat-line" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          3. MANIFESTO — cinematic parallax
          ════════════════════════════════ */}
      <section className="vl-manifesto-section" ref={manifestoRef}>
        <motion.div className="vl-manifesto-bg-img" style={{ y: manifestoY }}>
          <video src="/images/Values_mog.mp4" autoPlay loop muted playsInline />
          <div className="vl-manifesto-overlay" />
        </motion.div>

        <div className="vl-container vl-manifesto-inner">
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="vl-eyebrow vl-grad">Our Engineering Manifesto</p>
            <h2 className="vl-manifesto-h2">
              Things We
              <br />
              <span className="vl-grad">Deeply Believe.</span>
            </h2>
          </motion.div>

          <motion.div
            className="vl-manifesto-lines"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {MANIFESTO.map((line, i) => (
              <motion.div
                key={i}
                className="vl-manifesto-line"
                variants={fadeUp}
              >
                <span className="vl-manifesto-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p>{line}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          4. HOW WE WORK — Principles grid
          ════════════════════════════════ */}
      <section className="vl-principles-section">
        <div className="vl-container">
          <motion.div
            className="vl-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="vl-eyebrow vl-grad">How We Work</p>
            <h2 className="vl-sec-h2">
              8 Principles That
              <br />
              <span className="vl-grad">Run Our Teams.</span>
            </h2>
          </motion.div>

          <motion.div
            className="vl-principles-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {PRINCIPLES.map((p, i) => (
              <motion.div
                key={i}
                className="vl-principle-card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div className="vl-principle-num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="vl-principle-icon">{p.icon}</div>
                <h3 className="vl-principle-title">{p.title}</h3>
                <p className="vl-principle-desc">{p.desc}</p>
                <div className="vl-principle-bar" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          5. VIDEO / CULTURE MOMENT
          ════════════════════════════════ */}
      <section className="vl-culture-section">
        <div className="vl-container">
          <div className="vl-culture-layout">
            <motion.div
              className="vl-culture-text"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="vl-eyebrow vl-grad">Life at Devopstrio</p>
              <h2 className="vl-culture-h2">
                Culture Isn&rsquo;t a Benefit.
                <br />
                <span className="vl-grad">It&rsquo;s the Product.</span>
              </h2>
              <p className="vl-culture-p">
                We hire humans first, engineers second. Our culture is the
                reason our best people stay — not our perks, not our ping-pong
                tables (we don&rsquo;t have any).
              </p>
              <ul className="vl-culture-list">
                {[
                  "4-day work week experiment ongoing",
                  "No-meeting Wednesdays enforced globally",
                  "Open salary bands visible to all staff",
                  "Personal learning budget: £3,000/year",
                ].map((item, i) => (
                  <li key={i}>
                    <FiCheck className="vl-culture-check" />
                    {item}
                  </li>
                ))}
              </ul>
              <button
                className="vl-btn-primary"
                onClick={() => navigate("/careers")}
              >
                View Open Roles <FiArrowRight />
              </button>
            </motion.div>

            {/* Video placeholder card */}
            <motion.div
              className={`vl-video-wrap ${videoPlaying ? "playing" : ""}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              onClick={() => !videoPlaying && setVideoPlaying(true)}
            >
              {videoPlaying ? (
                <iframe
                  className="vl-video-frame"
                  src="https://www.youtube.com/embed/-EVRIFmJzBM?autoplay=1&modestbranding=1&rel=0&showinfo=0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&q=80"
                    alt="Team at Devopstrio"
                    className="vl-video-thumb"
                  />
                  <div className="vl-video-overlay" />
                  <button className="vl-play-btn" aria-label="Play culture video">
                    <FiPlay />
                  </button>
                  <div className="vl-video-badge">
                    <span className="vl-live-dot" /> Company Culture Reel · 2:47
                  </div>
                </>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          6. CINEMATIC BANNER
          ════════════════════════════════ */}
      {/* <section className="vl-banner-section">
        <div className="vl-banner-bg">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=80"
            alt="Team collaboration"
          />
          <div className="vl-banner-overlay" />

        </div>
        <motion.div
          className="vl-container vl-banner-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="vl-eyebrow vl-grad">Join the Mission</p>
          <h2 className="vl-banner-h2">
            We&rsquo;re Building the Future.
            <br />
            <span className="vl-grad">Come Build it With Us.</span>
          </h2>
          <p className="vl-banner-p">
            If these values resonate — if you believe in radical honesty,
            extreme ownership, and the obsessive craft of engineering — we want
            to meet you.
          </p>
          <div className="vl-banner-btns">
            <button
              className="vl-btn-primary vl-btn-lg"
              onClick={() => navigate("/careers")}
            >
              See Open Positions <FiArrowRight />
            </button>
            <button
              className="vl-btn-ghost vl-btn-lg"
              onClick={() => navigate("/about")}
            >
              Meet the Team
            </button>
          </div>
        </motion.div>
      </section> */}

      <Cta />
      <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
        <Newsletter />
      </div>    </div>
  );
};

export default Values;
