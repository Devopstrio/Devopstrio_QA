import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Aboutpage from "../../components/Hero/Abouthero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";

import MapImg from "../../assets/images/Map.png";

import {
  FiMapPin,
  FiGlobe,
  FiArrowRight,
  FiUsers,
  FiClock,
  FiPhone,
  FiMail,
  FiExternalLink,
  FiChevronRight,
  FiZap,
} from "react-icons/fi";

import "../../Style/about/Locations.css";

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
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

/* ── Data ── */
const REGIONS = [
  { id: "europe", label: "Europe", short: "EU", color: "#7d18d1" },
  { id: "asia", label: "Asia Pacific", short: "APAC", color: "#ce2453" },
  { id: "mena", label: "Middle East", short: "MENA", color: "#dd5c54" },
  { id: "americas", label: "Americas", short: "AMER", color: "#e79e57" },
];

const OFFICES = [
  {
    region: "europe",
    city: "London",
    country: "United Kingdom",
    flag: "🇬🇧",
    type: "Global HQ",
    address: "22 Bishopsgate, London EC2N 4BQ",
    timezone: "GMT / BST",
    team: "45+",
    email: "info@devopstrioglobal.com",
    phone: "+44 20 7946 0958",
    color: "#7d18d1",
    img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80",
    tagline: "Our home. Our heartbeat.",
    highlights: [
      "Sales & Business Development",
      "Product Leadership",
      "Cloud Architecture Practice",
    ],
  },
  {
    region: "asia",
    city: "Bangalore",
    country: "India",
    flag: "🇮🇳",
    type: "Engineering Hub",
    address: "Prestige Tech Park, Outer Ring Road, Bangalore 560103",
    timezone: "IST (UTC+5:30)",
    team: "80+",
    email: "info@devopstrioglobal.com",
    phone: "+91 80 6818 1200",
    color: "#ce2453",
    img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&q=80",
    tagline: "Where the code never stops.",
    highlights: [
      "Full-Stack Engineering",
      "DevOps & SRE",
      "AI & Machine Learning",
    ],
  },
  {
    region: "asia",
    city: "Chennai",
    country: "India",
    flag: "🇮🇳",
    type: "Product & Design",
    address: "Tidel Park, CSIR Road, Chennai 600113",
    timezone: "IST (UTC+5:30)",
    team: "35+",
    email: "info@devopstrioglobal.com",
    phone: "+91 44 4343 1100",
    color: "#962964",
    img: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=900&q=80",
    tagline: "Product thinking. Pixel perfection.",
    highlights: ["Product Management", "UX & Design", "Quality Engineering"],
  },
  {
    region: "americas",
    city: "Tennessee",
    country: "United States",
    flag: "🇺🇸",
    type: "Americas Hub",
    address: "One World Trade Center, Suite 8500, New York, NY 10007",
    timezone: "EST / EDT (UTC-5)",
    team: "10+",
    email: "info@devopstrioglobal.com",
    phone: "+1 212 946 0100",
    color: "#e79e57",
    img: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=900&q=80",
    tagline: "East Coast presence. Global delivery.",
    highlights: ["Enterprise Sales", "Partner Development", "US Market Growth"],
  },
];

const GLOBAL_STATS = [
  { val: "40+", lbl: "Countries Served", icon: <FiGlobe /> },
  { val: "5", lbl: "Global Offices", icon: <FiMapPin /> },
  { val: "185+", lbl: "Engineers Worldwide", icon: <FiUsers /> },
  { val: "24/7", lbl: "Global Coverage", icon: <FiClock /> },
];

/* ── COMPONENT ── */
const Locations = () => {
  const navigate = useNavigate();
  const [activeRegion, setActiveRegion] = useState("all");
  const [activeOffice, setActiveOffice] = useState(0);
  const [tickerPaused, setTickerPaused] = useState(false);
  // const heroRef = useRef(null);

  // const { scrollYProgress } = useScroll({
  //   target: heroRef,
  //   offset: ["start start", "end start"],
  // });
  // const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  // const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  const filtered =
    activeRegion === "all"
      ? OFFICES
      : OFFICES.filter((o) => o.region === activeRegion);

  /* auto-advance showcase */
  useEffect(() => {
    const t = setInterval(
      () => setActiveOffice((p) => (p + 1) % filtered.length),
      5000,
    );
    return () => clearInterval(t);
  }, [filtered.length]);

  /* clamp active when filter changes */

  const office = filtered[activeOffice] || OFFICES[0];

  return (
    <div className="lc-page">
      {/* ── ANIMATED BACKGROUND ── */}
      {/* <div className="lc-bg" aria-hidden="true">
        <div className="lc-orb lc-orb-1" />
        <div className="lc-orb lc-orb-2" />
        <div className="lc-orb lc-orb-3" />
        <div className="lc-grid" />
      </div> */}

      <Aboutpage />

      {/* ════════════════════════════════
          TICKER
          ════════════════════════════════ */}
      <div
        className="lc-ticker"
        onMouseEnter={() => setTickerPaused(true)}
        onMouseLeave={() => setTickerPaused(false)}
      >
        <div className="lc-ticker-badge">
          <span className="lc-live-dot" /> GLOBAL REACH
        </div>
        <div className="lc-ticker-wrap">
          <div className={`lc-ticker-track ${tickerPaused ? "paused" : ""}`}>
            {[0, 1].map((ri) => (
              <div key={ri} className="lc-ticker-row" aria-hidden={ri === 1}>
                {OFFICES.map((o, i) => (
                  <span key={i} className="lc-tick-item">
                    <span>{o.flag}</span>
                    <strong>{o.city}</strong>
                    <span className="lc-tick-sep">{o.type}</span>
                    <span className="lc-tick-dot">·</span>
                    <FiUsers /> <span>{o.team} Engineers</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════
          1. CINEMATIC HERO
          ════════════════════════════════ */}
      {/* <section className="lc-hero" ref={heroRef}>
        <motion.div className="lc-hero-bg" style={{ y: heroY }}>
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80"
            alt="Global network"
          />
          <div className="lc-hero-overlay" />
        </motion.div>

        <motion.div
          className="lc-container lc-hero-inner"
          style={{ opacity: heroOpacity }}
        >
          <motion.p
            className="lc-eyebrow lc-grad"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Global Presence
          </motion.p>
          <motion.h1
            className="lc-hero-h1"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
          >
            Engineering Everywhere.
            <br />
            <span className="lc-grad">Delivering Everywhere.</span>
          </motion.h1>
          <motion.p
            className="lc-hero-sub"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
          >
            5 offices. 40+ countries. 185+ engineers. When you work with us,
            someone on your team is always on — always ahead of your next
            release, whatever your timezone.
          </motion.p>
          <motion.div
            className="lc-hero-pills"
            variants={stagger}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            {GLOBAL_STATS.map((s, i) => (
              <motion.div key={i} className="lc-stat-pill" variants={fadeUp}>
                <span className="lc-pill-icon">{s.icon}</span>
                <span className="lc-pill-val">{s.val}</span>
                <span className="lc-pill-lbl">{s.lbl}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section> */}

      {/* ════════════════════════════════
          2. INTERACTIVE MAP SECTION
          ════════════════════════════════ */}
      <section className="lc-map-section">
        <div className="lc-container">
          <motion.div
            className="lc-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="lc-eyebrow lc-grad">Where To Find Us</p>
            <h2 className="lc-sec-h2">
              Five Offices.
              <br />
              <span className="lc-grad">One Unified Team.</span>
            </h2>
          </motion.div>

          <div className="lc-map-layout">
            <motion.div
              className="lc-map-wrap"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <img
                src={MapImg}
                alt="World map showing office locations"
                className="lc-map-img"
              />
              {/* Map pins */}
              {OFFICES.map((o, i) => (
                <button
                  key={i}
                  className={`lc-map-pin ${activeOffice === i && activeRegion === (o.region || "all") ? "active" : ""}`}
                  style={{
                    "--pc": o.color,
                    left:
                      o.city === "London"
                        ? "51%"
                        : o.city === "Bangalore"
                          ? "67%"
                          : o.city === "Chennai"
                            ? "67.8%"
                            : o.city === "Tennessee"
                              ? "27%"
                              : "50%",
                    top:
                      o.city === "London"
                        ? "42%"
                        : o.city === "Bangalore"
                          ? "66%"
                          : o.city === "Chennai"
                            ? "67%"
                            : o.city === "Tennessee"
                              ? "53%"
                              : "50%",
                  }}
                  onClick={() => {
                    setActiveRegion(o.region);
                    setActiveOffice(
                      OFFICES.filter((x) => x.region === o.region).indexOf(o),
                    );
                  }}
                  title={o.city}
                >
                  <span className="lc-pin-dot" />
                  {/* <span className="lc-pin-ring" /> */}
                  <span className="lc-pin-label">{o.city}</span>
                </button>
              ))}

            </motion.div>

            {/* Right: quick office list */}
            <motion.div
              className="lc-map-list"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="lc-map-list-label">Quick Access</p>
              {OFFICES.map((o, i) => (
                <motion.button
                  key={i}
                  variants={fadeUp}
                  className={`lc-map-list-item ${activeOffice === i ? "active" : ""}`}
                  style={{ "--pc": o.color }}
                  onClick={() => {
                    setActiveRegion("all");
                    setActiveOffice(i);
                  }}
                >
                  <span className="lc-list-flag">{o.flag}</span>
                  <div className="lc-list-info">
                    <strong>{o.city}</strong>
                    <span>{o.type}</span>
                  </div>
                  <FiChevronRight className="lc-list-arrow" />
                </motion.button>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════
          3. REGION SIDEBAR + OFFICE SHOWCASE
          ════════════════════════════════ */}
      {/* <section className="lc-offices-section">
        <div className="lc-container">
          <motion.div
            className="lc-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="lc-eyebrow lc-grad">Our Offices</p>
            <h2 className="lc-sec-h2">
              Pick a Region.
              <br />
              <span className="lc-grad">Meet Your Team.</span>
            </h2>
          </motion.div>

          <div className="lc-offices-layout">
  
            <div className="lc-sidebar">
              <p className="lc-sidebar-label">Filter by Region</p>
              <div className="lc-sidebar-track">
                <div className="lc-sidebar-vline" />
                <button
                  className={`lc-region-btn ${activeRegion === "all" ? "on" : ""}`}
                  style={{ "--rc": "#962964" }}
                  onClick={() => setActiveRegion("all")}
                >
                  <span className="lc-region-dot" />
                  <span className="lc-region-label">All Offices</span>
                  <span className="lc-region-count">{OFFICES.length}</span>
                </button>
                {REGIONS.map((r) => (
                  <button
                    key={r.id}
                    className={`lc-region-btn ${activeRegion === r.id ? "on" : ""}`}
                    style={{ "--rc": r.color }}
                    onClick={() => setActiveRegion(r.id)}
                  >
                    <span className="lc-region-dot" />
                    <div className="lc-region-info">
                      <span className="lc-region-label">{r.label}</span>
                      <span className="lc-region-short">{r.short}</span>
                    </div>
                    <span className="lc-region-count">
                      {OFFICES.filter((o) => o.region === r.id).length}
                    </span>
                  </button>
                ))}
              </div>
              <div
                className="lc-sidebar-card"
                style={{ borderColor: `${office.color}30` }}
              >
                <p className="lc-sc-label">Selected Office</p>
                <h4 className="lc-sc-city" style={{ color: office.color }}>
                  {office.city}
                </h4>
                <p className="lc-sc-type">{office.type}</p>
                <div className="lc-sc-row">
                  <FiUsers />
                  <span>{office.team} Engineers</span>
                </div>
                <div className="lc-sc-row">
                  <FiClock />
                  <span>{office.timezone}</span>
                </div>
                <div className="lc-sc-row">
                  <FiMail />
                  <span>{office.email}</span>
                </div>
              </div>
            </div>
            <div className="lc-offices-main">
              <div className="lc-office-tabs">
                {filtered.map((o, i) => (
                  <button
                    key={i}
                    className={`lc-office-tab ${activeOffice === i ? "on" : ""}`}
                    style={{ "--oc": o.color }}
                    onClick={() => setActiveOffice(i)}
                  >
                    {o.flag} {o.city}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={office.city + activeOffice}
                  className="lc-office-card"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
                  }}
                  exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                >
                  <div className="lc-card-img-wrap">
                    <img
                      src={office.img}
                      alt={office.city}
                      className="lc-card-img"
                    />
                    <div
                      className="lc-card-tint"
                      style={{ "--oc": office.color }}
                    />

                    <div
                      className="lc-card-badge"
                      style={{
                        color: office.color,
                        borderColor: `${office.color}40`,
                        background: `${office.color}0e`,
                      }}
                    >
                      <FiMapPin /> {office.type}
                    </div>
                    <div className="lc-card-flag">{office.flag}</div>
                  </div>
                  <div className="lc-card-body">
                    <div className="lc-card-head">
                      <div>
                        <h3 className="lc-card-city">{office.city}</h3>
                        <p className="lc-card-country">{office.country}</p>
                      </div>
                      <span
                        className="lc-card-type-tag"
                        style={{
                          color: office.color,
                          borderColor: `${office.color}35`,
                          background: `${office.color}0c`,
                        }}
                      >
                        {office.type}
                      </span>
                    </div>

                    <p className="lc-card-tagline">
                      &ldquo;{office.tagline}&rdquo;
                    </p>

                    <div className="lc-card-meta">
                      <div className="lc-meta-item">
                        <FiMapPin style={{ color: office.color }} />
                        <span>{office.address}</span>
                      </div>
                      <div className="lc-meta-item">
                        <FiClock style={{ color: office.color }} />
                        <span>{office.timezone}</span>
                      </div>
                      <div className="lc-meta-item">
                        <FiUsers style={{ color: office.color }} />
                        <span>{office.team} Engineers on-site</span>
                      </div>
                    </div>

                    <div className="lc-card-highlights">
                      {office.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="lc-highlight-tag"
                          style={{
                            borderColor: `${office.color}28`,
                            background: `${office.color}08`,
                          }}
                        >
                          <FiZap style={{ color: office.color }} /> {h}
                        </span>
                      ))}
                    </div>

                    <div className="lc-card-contacts">
                      <a
                        className="lc-contact-link"
                        href={`mailto:${office.email}`}
                      >
                        <FiMail /> {office.email}
                      </a>
                      <a
                        className="lc-contact-link"
                        href={`tel:${office.phone}`}
                      >
                        <FiPhone /> {office.phone}
                      </a>
                    </div>

                    <button
                      className="lc-card-cta"
                      style={{
                        background: `linear-gradient(90deg, ${office.color}, #e79e57)`,
                      }}
                      onClick={() => navigate("/contact")}
                    >
                      Get in Touch — {office.city} <FiArrowRight />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
              <div className="lc-progress-dots">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    className={`lc-prog-dot ${activeOffice === i ? "on" : ""}`}
                    style={{ "--oc": (filtered[i] || office).color }}
                    onClick={() => setActiveOffice(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ════════════════════════════════
          4. OFFICE GRID — All cards
          ════════════════════════════════ */}
      <section className="lc-grid-section">
        <div className="lc-container">
          <motion.div
            className="lc-sec-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="lc-eyebrow lc-grad">All Locations</p>
            <h2 className="lc-sec-h2">
              Every Office At
              <br />
              <span className="lc-grad">A Glance.</span>
            </h2>
          </motion.div>

          <motion.div
            className="lc-card-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {OFFICES.map((o, i) => (
              <motion.div
                key={i}
                className="lc-mini-card"
                style={{ "--oc": o.color }}
                variants={fadeUp}
                whileHover={{ y: -6 }}
              >
                <div className="lc-mini-img-wrap">
                  <img src={o.img} alt={o.city} />
                  <div className="lc-mini-tint" />

                </div>
                <div className="lc-mini-body">
                  <div className="lc-mini-head">
                    <span className="lc-mini-flag">{o.flag}</span>
                    <span
                      className="lc-mini-type"
                      style={{
                        color: o.color,
                        borderColor: `${o.color}30`,
                        background: `${o.color}0a`,
                      }}
                    >
                      {o.type}
                    </span>
                  </div>
                  <h3 className="lc-mini-city">{o.city}</h3>
                  <p className="lc-mini-country">{o.country}</p>
                  <div className="lc-mini-stats">
                    <span>
                      <FiUsers /> {o.team}
                    </span>
                    <span>
                      <FiClock /> {o.timezone.split(" ")[0]}
                    </span>
                  </div>
                  <div className="lc-mini-footer">
                    <span>{o.highlights[0]}</span>
                    <FiExternalLink className="lc-mini-ext" />
                  </div>
                </div>
                <div
                  className="lc-mini-bottom-bar"
                  style={{
                    background: `linear-gradient(90deg, ${o.color}, #e79e57)`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════
          5. CINEMATIC BANNER
          ════════════════════════════════ */}
      {/* <section className="lc-banner-section">
        <div className="lc-banner-bg">
          <img
            src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1800&q=80"
            alt="Global city skyline"
          />
          <div className="lc-banner-overlay" />
        </div>
        <motion.div
          className="lc-container lc-banner-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <p className="lc-eyebrow lc-grad">Come Work With Us</p>
          <h2 className="lc-banner-h2">
            No Matter Where
            <br />
            <span className="lc-grad">You Are, We&rsquo;re Close.</span>
          </h2>
          <p className="lc-banner-p">
            5 time zones. Round-the-clock engineering. When you need us,
            we&rsquo;re already there.
          </p>
          <div className="lc-banner-btns">
            <button
              className="lc-btn-primary lc-btn-lg"
              onClick={() => navigate("/contact")}
            >
              Contact a Local Team <FiArrowRight />
            </button>
            <button
              className="lc-btn-ghost lc-btn-lg"
              onClick={() => navigate("/careers")}
            >
              Join Our Team <FiExternalLink />
            </button>
          </div>
        </motion.div>
      </section> */}

      <Cta />
      <Newsletter />
    </div>
  );
};

export default Locations;
