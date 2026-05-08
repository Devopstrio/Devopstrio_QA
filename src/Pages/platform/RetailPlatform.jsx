import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useNavigate } from "react-router-dom";

import PlatformSectionhero from "../../components/Hero/PlatformSectionhero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

import {
  FiArrowRight,
  FiChevronRight,
  FiChevronLeft,
  FiCheckCircle,
  FiZap,
  FiShield,
  FiGlobe,
  FiTrendingUp,
  FiShoppingCart,
  FiPackage,
  FiBarChart2,
  FiUsers,
  FiRefreshCw,
  FiStar,
  FiCpu,
  FiSearch,
  FiTag,
  FiBox,
  FiLayers,
  FiPlay,
  FiArrowUpRight,
} from "react-icons/fi";

import "../../Style/platform/RetailPlatform.css";

/* ── Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};
const fadeRight = {
  hidden: { opacity: 0, x: 56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ── Data ── */
const CAPABILITIES = [
  {
    num: "01",
    icon: <FiShoppingCart />,
    title: "Unified Commerce Engine",
    headline: "One engine. Every channel.",
    color: "#7d18d1",
    desc: "Sell everywhere — web, mobile, in-store, marketplace — from a single backend. Real-time inventory sync, unified cart, and one order management system across all touchpoints.",
    bullets: [
      "Cross-channel inventory sync in real time",
      "Headless storefront — React / Next.js / mobile",
      "Multi-currency, multi-region, multi-language",
      "Single OMS across all sales channels",
    ],
    stat: "99.9%",
    statLabel: "Inventory Accuracy",
    img: "/images/New/notewoman.png",
    floatCards: {
      c1: { kicker: "Live", value: "128", label: "Stores connected" },
      c2: { kicker: "OMS", title: "Unified cart", sub: "Web · POS · Marketplace" },
      c3: { badge: "99.9%", mini: "Sync accuracy" },
    },
  },
  {
    num: "02",
    icon: <FiCpu />,
    title: "AI Personalisation",
    headline: "Show them what they want before they search.",
    color: "#cd1979",
    desc: "Real-time ML models analyse every click, scroll, and add-to-cart to surface personalised recommendations, dynamic pricing, and intelligent search results — driving 3–5× conversion uplift.",
    bullets: [
      "Vector-search product discovery engine",
      "Collaborative-filtering recommendation models",
      "Demand-aware dynamic pricing AI",
      "NLP intent recognition in search",
    ],
    stat: "3–5×",
    statLabel: "Conversion Uplift",
    img: "/images/New/mobile_woman.png",
    floatCards: {
      c1: { kicker: "Model", value: "8.4%", label: "CTR lift" },
      c2: { kicker: "AI", title: "Next-best offer", sub: "Recommendations in real time" },
      c3: { badge: "3–5×", mini: "Conversion" },
    },
  },
  {
    num: "03",
    icon: <FiPackage />,
    title: "Intelligent Logistics",
    headline: "Order placed. Door delivered. Automated.",
    color: "#ce2453",
    desc: "Smart order routing picks the closest warehouse, cheapest carrier, and fastest route — entirely automated. From fulfilment to returns, zero manual touchpoints.",
    bullets: [
      "Multi-warehouse split-order fulfilment",
      "Carrier rate-shopping & automated labelling",
      "Returns & reverse-logistics automation",
      "Embedded live parcel tracking",
    ],
    stat: "< 2h",
    statLabel: "Order Processing SLA",
    img: "/images/New/yellow_man.png",
    floatCards: {
      c1: { kicker: "Routing", value: "< 30s", label: "Carrier selection" },
      c2: { kicker: "Ops", title: "Auto-fulfilment", sub: "Label · pick · pack · ship" },
      c3: { badge: "< 2h", mini: "Processing" },
    },
  },
  {
    num: "04",
    icon: <FiBarChart2 />,
    title: "Retail Intelligence",
    headline: "Your entire retail operation. One screen.",
    color: "#dd5c54",
    desc: "Live GMV, sell-through, replenishment alerts, customer LTV cohorts, and marketing attribution — all in one real-time command centre built for retail operators.",
    bullets: [
      "Real-time GMV, AOV, and conversion funnels",
      "Customer LTV, churn, and repeat-purchase models",
      "AI-powered replenishment & stockout prediction",
      "Marketing attribution across all paid channels",
    ],
    stat: "360°",
    statLabel: "Retail Visibility",
    img: "/images/New/sofaman.png",
    floatCards: {
      c1: { kicker: "Dash", value: "24", label: "Live KPIs" },
      c2: { kicker: "BI", title: "Ops command center", sub: "GMV · AOV · LTV · Cohorts" },
      c3: { badge: "360°", mini: "Visibility" },
    },
  },
];

const METRICS = [
  { val: "£4.2B", lbl: "Annual GMV", icon: <FiTrendingUp /> },
  { val: "220+", lbl: "Retail Brands", icon: <FiShoppingCart /> },
  { val: "99.99%", lbl: "Uptime SLA", icon: <FiShield /> },
  { val: "< 80ms", lbl: "Page Load", icon: <FiZap /> },
  { val: "40M+", lbl: "Shoppers", icon: <FiUsers /> },
  { val: "3–5×", lbl: "Conv. Lift", icon: <FiBarChart2 /> },
];

const PILLARS = [
  {
    icon: <FiSearch />,
    title: "AI Search",
    desc: "Vector-powered intent-aware search with typo tolerance and semantic ranking.",
  },
  {
    icon: <FiTag />,
    title: "Dynamic Pricing",
    desc: "Demand-sensing pricing that adjusts in real time based on inventory and competition.",
  },
  {
    icon: <FiRefreshCw />,
    title: "Omnichannel Sync",
    desc: "Stock, pricing, and orders unified across web, app, POS, and marketplaces instantly.",
  },
  {
    icon: <FiGlobe />,
    title: "Global Commerce",
    desc: "Multi-currency storefronts with localised tax, duty, and payment methods built in.",
  },
  {
    icon: <FiBox />,
    title: "Smart Fulfilment",
    desc: "AI routes orders to the nearest facility and generates labels automatically.",
  },
  {
    icon: <FiLayers />,
    title: "Headless Store",
    desc: "API-first engine delivering blazing storefronts via React or any frontend framework.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Devopstrio rebuilt our entire e-commerce stack in 5 months. Page load dropped from 4.8 s to 650 ms, conversion jumped 38 %, and we processed £280 M in our first peak season without a single outage.",
    name: "Sarah Thompson",
    role: "CTO, Luxora Retail Group",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&q=80",
    tag: "£280M Peak GMV",
  },
  {
    quote:
      "Our AI recommendation engine went from concept to production in 8 weeks. Within 3 months it was driving 22 % of total revenue. The team shipped what our engineers said would take 18 months.",
    name: "Raj Patel",
    role: "VP Engineering, Shopnest",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80",
    tag: "22% Revenue from AI",
  },
];

const FAQS = [
  {
    q: "Do you work with Shopify Plus, Magento or SAP Commerce?",
    a: "Yes. We extend existing platforms or replace them entirely. We have deep experience with Shopify Plus, Magento 2, WooCommerce, and SAP Commerce — and we build bespoke headless stacks for high-volume retailers.",
  },
  {
    q: "How do you handle Black Friday / peak traffic surges?",
    a: "We architect for 10–20× average load from day one — Kubernetes auto-scaling, CDN edge caching, read-replica databases, and queue-based order processing. We run load tests before every major sale event.",
  },
  {
    q: "Can you integrate with our ERP, WMS, and payment providers?",
    a: "Yes. Pre-built connectors for SAP, Oracle NetSuite, Manhattan WMS, Stripe, Adyen, and Braintree. Custom integrations via REST / GraphQL and event streaming where needed.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "Discovery (3 wk) → Architecture (2 wk) → Foundation sprint (2 wk) → Build phase (10–20 × 2-wk sprints) → Load testing → Phased migration → Launch → SRE retainer. Named tech lead, product lead, and engineers from day one.",
  },
  {
    q: "How do you migrate data from legacy platforms?",
    a: "Parallel migration with zero-downtime cutover. Customer data, order history, catalogues, and loyalty balances are migrated and validated before cutover. We shadow-run traffic to the new platform 2–4 weeks before full switch-over.",
  },
];

/* ── COMPONENT ── */
const RetailPlatform = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTmn, setActiveTmn] = useState(0);
  const [tickerPaused, setTickerPaused] = useState(false);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  useEffect(() => {
    const t = setInterval(
      () => setActiveTmn((p) => (p + 1) % TESTIMONIALS.length),
      5500,
    );
    return () => clearInterval(t);
  }, []);


  return (
    <div className="rp-page">
      <PlatformSectionhero />

      {/* ══ TICKER ══ */}
      <div
        className="rp-ticker"
        onMouseEnter={() => setTickerPaused(true)}
        onMouseLeave={() => setTickerPaused(false)}
      >
        <div className="rp-ticker-badge">
          <span className="rp-live-dot" />
          LIVE METRICS
        </div>
        <div className="rp-ticker-wrap">
          <div className={`rp-ticker-track ${tickerPaused ? "paused" : ""}`}>
            {[0, 1].map((ci) => (
              <div key={ci} className="rp-ticker-row" aria-hidden={ci === 1}>
                {METRICS.map((m, i) => (
                  <span key={i} className="rp-tick-chip">
                    <span className="rp-tick-icon">{m.icon}</span>
                    <strong>{m.val}</strong>
                    <span className="rp-tick-lbl">{m.lbl}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ 1. CINEMATIC HERO ══ */}
      {/* <section className="rp-hero" ref={heroRef}>
        <motion.div className="rp-hero-img-layer" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800&q=80"
            alt=""
          />
          <div className="rp-hero-overlay" />
        </motion.div>

        <motion.div
          className="rp-hero-inner rp-container"
          style={{ opacity: heroOpacity }}
        >
          
          <div className="rp-hero-left">
            <motion.span
              className="rp-eyebrow"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              Enterprise Retail &amp; E-Commerce Platform
            </motion.span>
            <motion.h1
              className="rp-hero-h1"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
            >
              Retail Built to
              <br />
              <span className="rp-grad">Win at Scale.</span>
            </motion.h1>
            <motion.p
              className="rp-hero-p"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
            >
              Omnichannel commerce engines, AI personalisation, and intelligent
              logistics — powering £4.2B+ GMV annually.
            </motion.p>
            <motion.div
              className="rp-hero-ctas"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3 }}
            >
              <button
                className="rp-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Start Building <FiArrowRight />
              </button>
              <button
                className="rp-btn-ghost"
                onClick={() => navigate("/contact")}
              >
                <FiPlay /> Watch Demo
              </button>
            </motion.div>
          </div>

          
          <motion.div
            className="rp-hero-right"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {METRICS.map((m, i) => (
              <motion.div
                key={i}
                className="rp-hero-card"
                variants={fadeUp}
                style={{ animationDelay: `${i * 0.1}s` }}
                whileHover={{ y: -4, scale: 1.03 }}
              >
                <div className="rp-hero-card-icon">{m.icon}</div>
                <div className="rp-hero-card-val rp-grad">{m.val}</div>
                <div className="rp-hero-card-lbl">{m.lbl}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section> */}

      {/* ══ 2. TABBED CAPABILITIES ══ */}
      <section className="rp-caps-section">
        <div className="rp-container">
          <motion.div
            className="rp-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="rp-eyebrow rp-grad">Platform Capabilities</p>
            <h2 className="rp-sec-h2">
              Everything you need.
              <br />
              {/* <span className="rp-grad">Nothing you don&rsquo;t.</span> */}
            </h2>
          </motion.div>

        </div> {/* End of header rp-container */}

        {/* Sticky Tab bar - Moved outside header container to persist through entire section */}
        <div className="rp-sticky-tabs-container">
          <div className="rp-container">
            <motion.div
              className="rp-tab-bar sticky"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {CAPABILITIES.map((cap, i) => (
                <button
                  key={i}
                  className={`rp-tab ${activeTab === i ? "active" : ""}`}
                  style={{ "--tc": cap.color }}
                  onClick={() => {
                    const el = document.getElementById(`cap-${cap.num}`);
                    if (el) {
                      const offset = 160; // adjusted offset for better alignment
                      const top = el.getBoundingClientRect().top + window.scrollY - offset;
                      window.scrollTo({ top, behavior: "smooth" });
                    }
                  }}
                >
                  <span className="rp-tab-icon">{cap.icon}</span>
                  <span>{cap.title}</span>
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        {/* ══ 3. SPLIT-ROW DEEP DIVES (Embedded in same section for sticky flow) ══ */}
        <div className="rp-deep-container rp-container">
          {CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.num}
              id={`cap-${cap.num}`}
              className={`rp-deep-row ${i % 2 === 1 ? "rp-deep-rev" : ""}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              onViewportEnter={() => setActiveTab(i)}
            >
              <motion.div
                className="rp-deep-media"
                variants={i % 2 === 0 ? fadeLeft : fadeRight}
              >
                <div className="rp-deep-img-wrap">
                  <img src={cap.img} alt={cap.title} />
                  {/* <div
                    className="rp-deep-tint"
                    style={{ "--tc": cap.color }}
                  ></div> */}
                  <div className="rp-float-cards" aria-hidden="true">
                    <div className="rp-float-card rp-float-card--1">
                      <div className="rp-float-top">
                        <span className="rp-float-dot" style={{ "--tc": cap.color }} />
                        <span className="rp-float-kicker">
                          {cap.floatCards?.c1?.kicker ?? "Live"}
                        </span>
                      </div>
                      <div className="rp-float-value rp-grad">
                        {cap.floatCards?.c1?.value ?? "2k+"}
                      </div>
                      <div className="rp-float-label">
                        {cap.floatCards?.c1?.label ?? "Active sessions"}
                      </div>
                    </div>

                    <div className="rp-float-card rp-float-card--2">
                      <div className="rp-float-row">
                        <span className="rp-float-pill" style={{ "--tc": cap.color }}>
                          {cap.floatCards?.c2?.kicker ?? cap.num}
                        </span>
                        <span className="rp-float-title">
                          {cap.floatCards?.c2?.title ?? cap.title}
                        </span>
                      </div>
                      <div className="rp-float-sub">
                        {cap.floatCards?.c2?.sub ?? "Realtime insights & automation"}
                      </div>
                    </div>

                    <div className="rp-float-card rp-float-card--3">
                      <div className="rp-float-row">
                        <span className="rp-float-badge" style={{ "--tc": cap.color }}>
                          {cap.floatCards?.c3?.badge ?? `+${cap.stat}`}
                        </span>
                        <span className="rp-float-mini">
                          {cap.floatCards?.c3?.mini ?? "Performance"}
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className="rp-deep-num-overlay"
                    style={{ color: cap.color }}
                  >
                    {cap.num}
                  </div> */}
                </div>
              </motion.div>

              <motion.div
                className="rp-deep-body"
                variants={i % 2 === 0 ? fadeRight : fadeLeft}
              >
                <span className="rp-eyebrow" style={{ color: cap.color }}>
                  {cap.num} — {cap.title}
                </span>
                <h3 className="rp-deep-h3">{cap.headline}</h3>
                <p className="rp-deep-p">{cap.desc}</p>
                <ul className="rp-deep-bullets">
                  {cap.bullets.map((b, j) => (
                    <li key={j}>
                      <FiArrowUpRight style={{ color: cap.color }} />
                      {b}
                    </li>
                  ))}
                </ul>
                <div
                  className="rp-deep-metric"
                  style={{
                    background: `${cap.color}10`,
                    borderColor: `${cap.color}28`,
                  }}
                >
                  <span className="rp-deep-val" style={{ color: cap.color }}>
                    {cap.stat}
                  </span>
                  <span className="rp-deep-lbl">{cap.statLabel}</span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══ 4. PILLARS GRID ══ */}
      <section className="rp-pillars-section">
        <div className="rp-container">
          <motion.div
            className="rp-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="rp-eyebrow rp-grad">Core Features</p>
            <h2 className="rp-sec-h2">
              Six pillars.
              <br />
              <span className="rp-grad">Built into every project.</span>
            </h2>
          </motion.div>
          <motion.div
            className="rp-pillars-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {PILLARS.map((p, i) => (
              <motion.div
                key={i}
                className="rp-pillar-card"
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div className="rp-pillar-icon">{p.icon}</div>
                <h4 className="rp-pillar-title">{p.title}</h4>
                <p className="rp-pillar-desc">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ 5. FULL-WIDTH BANNER ══ */}
      <section className="rp-banner-section">
        <div
          className="rp-banner-bg"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1800&q=80')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="rp-banner-overlay" />
        </div>
        <motion.div
          className="rp-container rp-banner-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="rp-eyebrow rp-grad">Peak-Ready By Design</p>
          <h2 className="rp-banner-h2">
            Built for Black Friday
            <br />
            <span className="rp-grad">Every Single Day</span>
          </h2>
          <p className="rp-banner-p">
            Auto-scaling infrastructure that absorbs 20× traffic spikes. Our
            platforms don&rsquo;t go down when you need them most.
          </p>
          <button
            className="rp-btn-primary rp-btn-lg"
            onClick={() => navigate("/contact")}
          >
            Stress-Test Your Platform <FiArrowRight />
          </button>
        </motion.div>
      </section>

      {/* ══ 6. HORIZONTAL MARQUEE ══ */}
      <div className="rp-marquee-band">
        <p className="rp-marquee-label">Integrated with your existing stack</p>
        <div className="rp-marquee-outer">
          <div className="rp-marquee-inner">
            {[
              "Shopify Plus",
              "Magento 2",
              "SAP Commerce",
              "Stripe",
              "Adyen",
              "Klaviyo",
              "Google Cloud",
              "AWS",
              "Snowflake",
              "Elasticsearch",
              "Contentful",
              "Salesforce",
              "Oracle NetSuite",
              "Manhattan WMS",
              "Shopify Plus",
              "Magento 2",
              "SAP Commerce",
              "Stripe",
              "Adyen",
              "Klaviyo",
              "Google Cloud",
              "AWS",
              "Snowflake",
              "Elasticsearch",
              "Contentful",
              "Salesforce",
              "Oracle NetSuite",
              "Manhattan WMS",
            ].map((n, i) => (
              <span key={i} className="rp-mq-item">
                {n}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ══ 7. TESTIMONIALS ══ */}
      <section className="rp-tmn-section">
        <div className="rp-container">
          <motion.div
            className="rp-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="rp-eyebrow rp-grad">Client Outcomes</p>
            <h2 className="rp-sec-h2">
              Real results.
              <br />
              <span className="rp-grad">Real revenue.</span>
            </h2>
          </motion.div>
          <div className="rp-tmn-layout">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTmn}
                className="rp-tmn-card"
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.55 } }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              >
                <div className="rp-tmn-tag">{TESTIMONIALS[activeTmn].tag}</div>
                <blockquote className="rp-tmn-quote">
                  &ldquo;{TESTIMONIALS[activeTmn].quote}&rdquo;
                </blockquote>
                <div className="rp-tmn-author">
                  <img src={TESTIMONIALS[activeTmn].img} alt="" />
                  <div>
                    <strong>{TESTIMONIALS[activeTmn].name}</strong>
                    <p>{TESTIMONIALS[activeTmn].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="rp-tmn-nav">
              <button
                className="rp-tmn-arrow"
                onClick={() =>
                  setActiveTmn(
                    (p) => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
                  )
                }
              >
                <FiChevronLeft />
              </button>
              <div className="rp-tmn-dots">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    className={`rp-tmn-dot ${activeTmn === i ? "on" : ""}`}
                    onClick={() => setActiveTmn(i)}
                  />
                ))}
              </div>
              <button
                className="rp-tmn-arrow"
                onClick={() =>
                  setActiveTmn((p) => (p + 1) % TESTIMONIALS.length)
                }
              >
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 8. FAQ ══ */}
      <section className="rp-faq-section">
        <div className="rp-container">
          <motion.div
            className="rp-faq-layout"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div className="rp-faq-left" variants={fadeLeft}>
              <p className="rp-eyebrow rp-grad">FAQ</p>
              <h2 className="rp-faq-h2">
                Retail Platform Questions—
                <span className="rp-grad">Answered.</span>
              </h2>
              <p className="rp-faq-sub">
                Everything you need to know about how we design, build, and
                scale your commerce platform.
              </p>
              <button
                className="rp-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Talk to a Commerce Architect <FiArrowRight />
              </button>
            </motion.div>
            <motion.div className="rp-faq-right" variants={stagger}>
              {FAQS.map((faq, i) => (
                <motion.div
                  key={i}
                  className={`rp-faq-item ${openFaq === i ? "open" : ""}`}
                  variants={fadeUp}
                >
                  <button
                    className="rp-faq-q"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span>{faq.q}</span>
                    <span className="rp-faq-ico">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  <div className="rp-faq-body">
                    <p>{faq.a}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Cta />
      <Newsletter />
    </div>
  );
};

export default RetailPlatform;
