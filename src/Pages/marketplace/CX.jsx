import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Components
// import Serviceshero from "../../components/Hero/Serviceshero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";
// Icons
import {
  FiUsers,
  FiHeart,
  FiEye,
  FiActivity,
  FiSmartphone,
  FiLayout,
  FiMessageSquare,
  FiZap,
  FiCheckCircle,
  FiArrowRight,
  FiChevronDown,
  FiLayers,
  FiTrendingUp,
  FiRefreshCw,
  FiTarget,
  FiAward,
  FiCheck,
  FiX,
  FiPieChart,
  FiCompass,
  FiStar,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";


import "../../Style/marketplace/CX.css";

/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65 } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.65 } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55 } },
};

/* ============================================================
   DATA
   ============================================================ */

/* slider hero data */
const heroSlides = [
  {
    tag: "HYPER-PERSONALIZATION",
    title: "Experiences That\nFeel Custom Built",
    sub: "Leverage AI-driven insights to deliver tailored journeys that anticipate customer intent before they even realize it.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    cta: "Explore Personalization",
  },
  {
    tag: "OMNICHANNEL MASTERY",
    title: "One Voice\nEvery Platform",
    sub: "Unify your brand experience across web, mobile, voice, and in-store. Seamless transitions, zero friction.",
    img: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=1600&q=80",
    cta: "See Omnichannel",
  },
  {
    tag: "UX ENGINEERING",
    title: "Design Meets\nDeep Psychology",
    sub: "We don't just push pixels. We orchestrate cognitive flows that maximize conversion and forge unbreakable brand loyalty.",
    img: "https://images.unsplash.com/photo-1620286895316-ebcc25fdb337?auto=format&fit=crop&w=1600&q=80",
    cta: "View UX Portfolio",
  },
];

/* sidebar service panels */
const services = [
  {
    icon: <FiCompass />,
    label: "Customer Journey Mapping",
    title: "Deep Journey Analytics & Mapping",
    desc: "Visualize exactly how customers interact with your brand. We identify drop-off points, friction zones, and moments of delight to optimize the entire lifecycle.",
    features: [
      "Cross-platform touchpoint tracking",
      "Friction point heatmapping",
      "Predictive behavioral modeling",
      "Emotional sentiment analysis",
    ],
    image: "/images/Ecosystem/Deep_Journey_Analytics.png",
    stat: { value: "3x", label: "Faster Conversion" },
  },
  {
    icon: <FiLayout />,
    label: "UI/UX Engineering",
    title: "High-Performance UI/UX Design",
    desc: "Breathtaking interfaces built on solid usability principles. We engineer frontends that don't just look spectacular, but feel intuitive instantly.",
    features: [
      "Component-driven design systems",
      "A/B & multivariant testing",
      "Accessibility (WCAG) compliance",
      "Micro-interaction choreography",
    ],
    image:
      "/images/Ecosystem/Infrastructure_printing.png",
    stat: { value: "40%", label: "Bounce Rate Reduction" },
  },
  {
    icon: <FiPieChart />,
    label: "AI Personalization",
    title: "AI-Driven Personalization Engines",
    desc: "Serve the right content to the right user at the exact perfect moment. Our recommendation engines learn continuously from user behavior.",
    features: [
      "Real-time intent prediction",
      "Dynamic content rendering",
      "Automated cohort segmentation",
      "Algorithmic product recommendations",
    ],
    image: "/images/Ecosystem/AI-Driven_Personalization.png",
    stat: { value: "+25%", label: "Average Order Value" },
  },
  {
    icon: <FiSmartphone />,
    label: "Omnichannel Integrations",
    title: "Seamless Omnichannel Architecture",
    desc: "Break down data silos. We integrate your CRM, marketing automation, and frontend apps to create a singular, Devopstrio user identity across all platforms.",
    features: [
      "Unified customer profiles (CDP)",
      "Cross-device session memory",
      "Real-time data synchronization",
      "Frictionless platform handoffs",
    ],
    image:
      "/images/Ecosystem/Seamless_Omnichannel.png",
    stat: { value: "360°", label: "Customer View" },
  },
];

/* stats ticker */
const cxStats = [
  { icon: <FiHeart />, value: "98%", label: "CSAT Score" },
  { icon: <FiTrendingUp />, value: "3.2x", label: "ROI on UX" },
  { icon: <FiUsers />, value: "+45%", label: "Retention Rate" },
  { icon: <FiRefreshCw />, value: "Zero", label: "Friction" },
  { icon: <FiAward />, value: "No. 1", label: "Brand Loyalty" },
  { icon: <FiZap />, value: "<1s", label: "Interaction Latency" },
];

/* cx event timeline feed */
const feedEvents = [
  {
    time: "00:00:04",
    type: "Converted",
    label: "User checked out from predictive cart",
    channel: "Mobile App",
    sentiment: "positive",
  },
  {
    time: "00:01:21",
    type: "Engaged",
    label: "AI personalized homepage loaded",
    channel: "Web Portal",
    sentiment: "positive",
  },
  {
    time: "00:03:15",
    type: "Segmented",
    label: "Anonymous user mapped to VIP cohort",
    channel: "Data Engine",
    sentiment: "neutral",
  },
  {
    time: "00:04:42",
    type: "Resolved",
    label: "Bot escalated ticket with full context",
    channel: "Live Chat",
    sentiment: "positive",
  },
  {
    time: "00:05:50",
    type: "Navigated",
    label: "Smooth transition from cart to checkout",
    channel: "Web Portal",
    sentiment: "positive",
  },
  {
    time: "00:07:05",
    type: "Personalized",
    label: "Email product recommendations generated",
    channel: "CRM System",
    sentiment: "neutral",
  },
];

/* comparison */
const comparisonRows = [
  {
    label: "Customer View",
    before: "Siloed in Different Tools",
    after: "Unified 360° Profile",
  },
  {
    label: "Content Delivery",
    before: "Static & Generic",
    after: "Dynamic & Personalized",
  },
  {
    label: "Cross-Channel Handoff",
    before: "Restart the Journey",
    after: "Seamless Continuation",
  },
  {
    label: "Analytics Focus",
    before: "Page Views & Clicks",
    after: "Intent & Sentiment",
  },
  {
    label: "Design Approach",
    before: "Feature-Driven",
    after: "Human-Centric UX",
  },
];

/* faqs */
const faqs = [
  {
    q: "How do you measure Customer Experience ROI?",
    a: "We deploy advanced telemetry to track metrics like Customer Lifetime Value (CLV), Customer Acquisition Cost (CAC) reduction, Net Promoter Score (NPS), and direct conversion lifts resulting strictly from UX/UI enhancements.",
  },
  {
    q: "Do you integrate with our existing CRM?",
    a: "Absolutely. We build headless frontend architectures that integrate smoothly into Salesforce, HubSpot, Segment, and bespoke data lakes via robust APIs to ensure your data never remains siloed.",
  },
  {
    q: "What does an omni-channel journey actually look like?",
    a: "It means a customer can browse products on your mobile app, leave it in their cart, later open their desktop browser, and find a personalized landing page waiting for them exactly where they left off without friction.",
  },
  {
    q: "How does AI fit into your CX design?",
    a: "We use machine learning to segment audiences in real time. Instead of A/B testing two static designs, our engines can dynamically assemble page layouts, product suggestions, and copy based on the specific behavior of the current user.",
  },
];

/* ============================================================
   COMPONENT
   ============================================================ */
const CX = () => {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const toggleFaq = (i) => setOpenFaq(openFaq === i ? null : i);

  /* auto-advance hero slider */
  useEffect(() => {
    const t = setInterval(
      () => setActiveSlide((s) => (s + 1) % heroSlides.length),
      6000,
    );
    return () => clearInterval(t);
  }, []);

  /* counter animation hook */
  const useCounter = (target, duration = 1800) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const observed = useRef(false);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting && !observed.current) {
          observed.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
      observer.observe(el);
      return () => observer.disconnect();
    }, [target, duration]);
    return [count, ref];
  };

  const [users_engaged, ref1] = useCounter(14500000);
  const [conversions, ref2] = useCounter(325000);
  const [retention_lift, ref3] = useCounter(68);

  return (
    <div className="cx-page">
      {/* ════════════════════════════════════
          1. HERO SLIDER  
          ════════════════════════════════════ */}
      <section className="cx-hero-slider">
        {/* 3D Space Background */}
        <div className="cx-space-warp">
          <div className="cx-warp-stars cx-warp-stars1"></div>
          <div className="cx-warp-stars cx-warp-stars2"></div>
          <div className="cx-warp-stars cx-warp-stars3"></div>
          <div className="cx-warp-stars cx-warp-stars4"></div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            className="cx-slide"
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.97 }}
            transition={{ duration: 0.8 }}
          >
            <div className="cx-slide-overlay"></div>
          </motion.div>
        </AnimatePresence>

        <div className="cx-slide-content">
          <motion.p
            className="cx-label cx-gradient-text"
            key={`tag-${activeSlide}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            {heroSlides[activeSlide].tag}
          </motion.p>
          <motion.h1
            className="cx-slide-title"
            key={`title-${activeSlide}`}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {heroSlides[activeSlide].title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </motion.h1>
          <motion.p
            className="cx-slide-sub"
            key={`sub-${activeSlide}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            {heroSlides[activeSlide].sub}
          </motion.p>
          <motion.div
            className="cx-slide-btns"
            key={`btns-${activeSlide}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button
              className="cx-primary-btn"
              onClick={() => navigate("/contact")}
            >
              {heroSlides[activeSlide].cta} <FiArrowRight />
            </button>
            <button
              className="cx-ghost-btn"
              onClick={() => navigate("/contact")}
            >
              Audit My Platform
            </button>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════
          2. LIVE TICKER
          ════════════════════════════════════ */}
      <div className="cx-ticker">
        <div className="cx-ticker-label">
          <span className="cx-pulse-dot"></span>
          REAL-TIME IMPACT
        </div>
        <div className="cx-ticker-track-wrapper">
          <div className="cx-ticker-slider">
            {[0, 1].map((clone) => (
              <div
                key={clone}
                className="cx-ticker-track"
                aria-hidden={clone === 1}
              >
                {cxStats.map((s, i) => (
                  <div key={i} className="cx-ticker-item">
                    <span className="cx-ticker-icon">{s.icon}</span>
                    <span className="cx-ticker-value cx-gradient-text">
                      {s.value}
                    </span>
                    <span className="cx-ticker-label-text">{s.label}</span>
                    <span className="cx-ticker-sep">·</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════
          3. COUNTER IMPACT 
          ════════════════════════════════════ */}
      <section className="cx-impact-section">
        <div className="cx-container">
          <motion.div
            className="cx-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="cx-label cx-gradient-text">SCALE OF EXPERIENCE</p>
            <h2 className="cx-section-title">Global Digital Reach</h2>
            <p className="cx-section-desc">
              Metric improvements driven entirely by eliminating friction and
              injecting tailored experiences into core journeys
            </p>
          </motion.div>

          <div className="cx-impact-grid">
            <motion.div
              className="cx-impact-card cx-impact-lg"
              ref={ref1}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="cx-impact-glow"></div>
              <span className="cx-impact-num cx-gradient-text">
                {users_engaged.toLocaleString()}+
              </span>
              <span className="cx-impact-label">Users engaged monthly</span>
              <p className="cx-impact-desc">
                Serving highly customized touchpoints natively
              </p>
            </motion.div>
            <motion.div
              className="cx-impact-card"
              ref={ref2}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="cx-impact-glow"></div>
              <span className="cx-impact-num cx-gradient-text">
                {conversions.toLocaleString()}+
              </span>
              <span className="cx-impact-label">Conversions Accelerated</span>
            </motion.div>
            <motion.div
              className="cx-impact-card"
              ref={ref3}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="cx-impact-glow"></div>
              <span className="cx-impact-num cx-gradient-text">
                {retention_lift}%
              </span>
              <span className="cx-impact-label">Increase in Retention</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          4. SIDEBAR SERVICES
          ════════════════════════════════════ */}
      <section className="cx-services-section">
        <div className="cx-container">
          <motion.div
            className="cx-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="cx-label cx-gradient-text">TRANSFORMATION ARSENAL</p>
            <h2 className="cx-section-title">Mastering the Experience</h2>
            <p className="cx-section-desc">
              A comprehensive suite of capabilities designed to map, design, and
              automate legendary customer interactions.
            </p>
          </motion.div>

          <div className="cx-services-layout">
            <div className="cx-services-nav">
              {services.map((s, i) => (
                <button
                  key={i}
                  className={`cx-service-tab ${activeService === i ? "cx-tab-active" : ""}`}
                  onClick={() => setActiveService(i)}
                >
                  <span className="cx-tab-icon">{s.icon}</span>
                  <span className="cx-tab-label">{s.label}</span>
                  <FiChevronDown className="cx-tab-arrow" />
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                className="cx-service-panel"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="cx-panel-text">
                  <div className="cx-panel-icon">
                    {services[activeService].icon}
                  </div>
                  <h3>{services[activeService].title}</h3>
                  <p>{services[activeService].desc}</p>
                  <ul className="cx-panel-features">
                    {services[activeService].features.map((f, j) => (
                      <li key={j}>
                        <FiCheckCircle className="cx-feat-check" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="cx-panel-stat">
                    <span className="cx-stat-value cx-gradient-text">
                      {services[activeService].stat.value}
                    </span>
                    <span className="cx-stat-label">
                      {services[activeService].stat.label}
                    </span>
                  </div>
                  <button
                    className="cx-primary-btn"
                    onClick={() => navigate("/contact")}
                  >
                    Deploy This Strategy <FiArrowRight />
                  </button>
                </div>
                <div className="cx-panel-image">
                  <img
                    src={services[activeService].image}
                    alt={services[activeService].title}
                  />
                  <div className="cx-panel-img-overlay"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          5. LIVE BEHAVIOR FEED 
          ════════════════════════════════════ */}
      <section className="cx-feed-section">
        <div className="cx-container">
          <div className="cx-feed-layout">
            <motion.div
              className="cx-feed-left"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="cx-label cx-gradient-text">JOURNEY OBSERVABILITY</p>
              <h2 className="cx-feed-title">
                Real-Time Experience
                <br />
                <span className="cx-gradient-text">Event Stream</span>
              </h2>
              <p className="cx-feed-desc">
                Stop guessing what your users are doing. We pipe raw interaction
                telemetry into a central intelligence hub, illuminating paths to
                conversion instantly.
              </p>
              <div className="cx-feed-stats">
                <div className="cx-fstat">
                  <span className="cx-gradient-text">360°</span>
                  <small>Identity Resolution</small>
                </div>
                <div className="cx-fstat">
                  <span className="cx-gradient-text">50ms</span>
                  <small>Event Processing</small>
                </div>
                <div className="cx-fstat">
                  <span className="cx-gradient-text">AI</span>
                  <small>Intent Prediction</small>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="cx-feed-panel"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="cx-feed-header">
                <span className="cx-pulse-dot"></span>
                <span>Live Telemetry — Global Omnichannel Matrix</span>
                <span className="cx-feed-badge">SYNCHRONIZED</span>
              </div>
              <div className="cx-feed-list">
                {feedEvents.map((t, i) => (
                  <motion.div
                    key={i}
                    className={`cx-feed-row cx-sev-${t.sentiment}`}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="cx-feed-time">{t.time}</span>
                    <span
                      className={`cx-feed-type cx-type-${t.sentiment.toLowerCase()}`}
                    >
                      {t.type}
                    </span>
                    <span className="cx-feed-event">{t.label}</span>
                    <span className="cx-feed-channel">{t.channel}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════
          6. VIDEO / FREEZE BANNER
          ════════════════════════════════════ */}
      <section className="cx-banner-section">
        <div className="cx-banner-overlay"></div>
        <motion.div
          className="cx-banner-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="cx-label cx-gradient-text">MIND THE GAP</span>
          <h2>
            Good design is obvious.
            <br />
            <span className="cx-gradient-text">Great CX is invisible.</span>
          </h2>
          <p>
            When technology gets out of the way, connection happens. Let us
            build the invisible bridge to your customers.
          </p>
          <button
            className="cx-primary-btn cx-btn-lg"
            onClick={() => navigate("/contact")}
          >
            Start Your Transformation <FiArrowRight />
          </button>
        </motion.div>
      </section>

      {/* ════════════════════════════════════
          7. BEFORE / AFTER TABLE
          ════════════════════════════════════ */}
      <section className="cx-comparison-section">
        <div className="cx-container">
          <motion.div
            className="cx-section-header"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="cx-label cx-gradient-text">THE EVOLUTION</p>
            <h2 className="cx-section-title">Before vs. After Devopstrio</h2>
          </motion.div>

          <motion.div
            className="cx-comparison-table"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="cx-comp-header">
              <div className="cx-comp-col-label">CX Metric</div>
              <div className="cx-comp-col cx-comp-before">
                <FiX className="cx-comp-x" /> Before
              </div>
              <div className="cx-comp-col cx-comp-after">
                <FiCheck className="cx-comp-chk" /> After
              </div>
            </div>
            {comparisonRows.map((row, i) => (
              <motion.div
                key={i}
                className="cx-comp-row"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
              >
                <div className="cx-comp-col-label">{row.label}</div>
                <div className="cx-comp-col cx-comp-before-val">
                  {row.before}
                </div>
                <div className="cx-comp-col cx-comp-after-val cx-gradient-text">
                  {row.after}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════
          8. TESTIMONIAL & FAQS
          ════════════════════════════════════ */}
      <section className="cx-faqs-section">
        <div className="cx-container">
          <div className="cx-faqs-layout">
            <motion.div
              className="cx-faqs-left"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="cx-quote-card">
                <div className="cx-quote-glow"></div>
                <FaQuoteLeft className="cx-q-icon" />
                <blockquote>
                  "They didn't just redesign our UI. They completely
                  restructured our customer journeys. Our conversion rates
                  spiked 40% in week one because the platform finally
                  anticipated what users actually wanted."
                </blockquote>
                <div className="cx-q-author">
                  <h4>Michael V.</h4>
                  <p>Chief Experience Officer, OmniRetail</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="cx-faqs-accordion"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="cx-label cx-gradient-text">CX INSIGHTS</p>
              <h2>Frequently Asked Questions</h2>
              <div className="cx-faq-list">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className={`cx-faq-item ${openFaq === i ? "cx-faq-open" : ""}`}
                    onClick={() => toggleFaq(i)}
                  >
                    <div className="cx-faq-q">
                      <span>{faq.q}</span>
                      <FiChevronDown className="cx-faq-icon" />
                    </div>
                    <AnimatePresence>
                      {openFaq === i && (
                        <motion.div
                          className="cx-faq-a"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          <p>{faq.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div style={{ margin:"0 auto",maxWidth:"1240px" }}>
      <Newsletter />
      </div>
      <Cta />
    </div>
  );
};

export default CX;
