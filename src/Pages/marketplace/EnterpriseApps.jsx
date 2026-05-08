import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";
import {
  FiArrowRight,
  FiTerminal,
  FiShield,
  FiLayers,
  FiCode,
  FiMonitor,
  FiCpu,
  FiChevronLeft,
  FiChevronRight,
  FiStar,
  FiDatabase,
  FiCloud,
  FiLock,
  FiServer,
} from "react-icons/fi";
import "../../Style/marketplace/EnterpriseApps.css";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const testimonials = [
  {
    quote:
      "Replacing our legacy monolith with their microservices architecture resulted in a 400% increase in deployment speed and absolute zero downtime during peak loads.",
    author: "Elena Rodriguez",
    role: "CTO, Global FinTech Solutions",
  },
  {
    quote:
      "The zero-trust security model they implemented completely transformed our compliance posture. We passed our SOC2 audits effortlessly.",
    author: "Marcus Chen",
    role: "VP Engineering, HealthData Corp",
  },
  {
    quote:
      "Stunning frontend design backed by an incredibly powerful orchestration layer. Our enterprise app is now the gold standard in our industry.",
    author: "Sarah Jenkins",
    role: "Director of Digital Strategy, LogisticsPro",
  },
];

export default function EnterpriseApps() {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-play testimonial slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () =>
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () =>
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  // Tech stack marquee items (duplicated for infinite scroll effect)
  const techStack = [
    { name: "Kubernetes", icon: <FiServer /> },
    { name: "Docker", icon: <FiLayers /> },
    { name: "AWS", icon: <FiCloud /> },
    { name: "PostgreSQL", icon: <FiDatabase /> },
    { name: "React Flow", icon: <FiMonitor /> },
    { name: "Zero Trust", icon: <FiLock /> },
    { name: "GraphQL", icon: <FiCode /> },
    { name: "Node.js", icon: <FiTerminal /> },
  ];
  const marqueeItems = [...techStack, ...techStack];

  return (
    <div className="elite-eapp-page">
      {/* Hero Section */}
      <section className="elite-eapp-hero">
        <div className="elite-container">
          <motion.div
            className="elite-hero-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <div className="elite-hero-text">
              <motion.div className="elite-badge" variants={fadeUp}>
                Enterprise Grade Solutions
              </motion.div>
              <motion.h1 className="elite-title" variants={fadeUp}>
                Scale Beyond <br />
                <span className="elite-gradient-text">Limits.</span>
              </motion.h1>
              <motion.p className="elite-subtitle" variants={fadeUp}>
                We develop robust, pure-black-themed enterprise applications
                blending bleeding-edge architecture with stunning aesthetic
                superiority.
              </motion.p>
              <motion.div className="elite-actions" variants={fadeUp}>
                <button
                  className="elite-btn primary"
                  onClick={() => navigate("/contact")}
                >
                  Initiate Build <FiArrowRight />
                </button>
              </motion.div>
            </div>

            <motion.div className="elite-hero-visual" variants={fadeScale}>
              <div className="elite-image-wrapper glow-border">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1000&q=80"
                  alt="Cyber Security"
                  className="elite-main-img"
                />
                <div className="elite-floating-tag top-right">
                  <FiMonitor /> System Optimal
                </div>
                <div className="elite-floating-tag bottom-left">
                  <FiCpu /> Zero Latency
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Infinite Tech Stack Slider Marquee */}
      <section className="elite-marquee-section">
        <div className="elite-marquee-container">
          <div className="elite-marquee-track">
            {marqueeItems.map((item, index) => (
              <div key={index} className="elite-marquee-item">
                <span className="marquee-icon">{item.icon}</span>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Map / Visual Section (New) */}
      <section className="elite-analytics-section">
        <div className="elite-container">
          <motion.div
            className="elite-section-header"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <h2>
              Data <span className="elite-gradient-text">Visualization</span>
            </h2>
            <p>
              Empower decision making with real-time enterprise telemetry
              displays.
            </p>
          </motion.div>

          <motion.div
            className="analytics-display"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="analytics-glass">
              <div className="analytics-header">
                <div className="dot red"></div>
                <div className="dot yellow"></div>
                <div className="dot green"></div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
                alt="Analytics Dashboard"
              />
              <div className="analytics-overlay-hud">
                <div className="hud-line">
                  <strong>TPS:</strong> 42,000/s
                </div>
                <div className="hud-line">
                  <strong>CPU:</strong> 12%{" "}
                  <span className="status-ok">Optimal</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="elite-showcase">
        <div className="elite-container">
          <motion.div
            className="elite-section-header"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <h2>
              Visualizing{" "}
              <span className="elite-gradient-text">Architecture</span>
            </h2>
            <p>
              From complex data lakes to ultra-fast FinTech portals, we bring
              raw engineering power to the frontend.
            </p>
          </motion.div>

          <div className="elite-gallery-grid">
            <motion.div
              className="gallery-item large"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeScale}
            >
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
                alt="Circuit"
              />
              <div className="gallery-overlay">
                <h3>Hardware Integration</h3>
              </div>
            </motion.div>

            <motion.div
              className="gallery-item"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeScale}
            >
              <img
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80"
                alt="Code"
              />
              <div className="gallery-overlay">
                <h3>Global Routing</h3>
              </div>
            </motion.div>

            <motion.div
              className="gallery-item"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeScale}
            >
              <img
                src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80"
                alt="Matrix"
              />
              <div className="gallery-overlay">
                <h3>Cyber Security</h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="elite-features">
        <div className="elite-container">
          <motion.div
            className="elite-section-header"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
          >
            <h2>
              Core <span className="elite-gradient-text">Capabilities</span>
            </h2>
          </motion.div>

          <div className="elite-feature-grid">
            <motion.div
              className="feature-card"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="feature-icon">
                <FiTerminal />
              </div>
              <h3>API Orchestration</h3>
              <p>
                Seamlessly connect global vendor ecosystems with ultra-low
                latency REST architectures.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="feature-icon">
                <FiShield />
              </div>
              <h3>Zero-Trust Security</h3>
              <p>
                Military-grade encryption, role-based access, and continuous
                compliance monitoring.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="feature-icon">
                <FiLayers />
              </div>
              <h3>Microservices</h3>
              <p>
                Decouple monolithic legacies into independent, rapidly scalable
                cloud-native microservices.
              </p>
            </motion.div>

            <motion.div
              className="feature-card"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div className="feature-icon">
                <FiCode />
              </div>
              <h3>Continuous Delivery</h3>
              <p>
                Automated sprint pipelines ensuring your enterprise never halts
                its forward momentum.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Animation Slider (New) */}
      <section className="elite-testimonials">
        <div className="elite-container">
          <motion.div
            className="elite-section-header"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2>
              Proven <span className="elite-gradient-text">Success</span>
            </h2>
          </motion.div>

          <div className="slider-wrapper">
            <button className="slider-btn prev" onClick={prevSlide}>
              <FiChevronLeft />
            </button>

            <div className="slider-viewport">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  className="testimonial-card"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="stars">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                  </div>
                  <p className="quote">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  <h4 className="author">
                    {testimonials[currentTestimonial].author}
                  </h4>
                  <span className="role">
                    {testimonials[currentTestimonial].role}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>

            <button className="slider-btn next" onClick={nextSlide}>
              <FiChevronRight />
            </button>
          </div>
          <div className="slider-dots">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={`dot-indicator ${idx === currentTestimonial ? "active" : ""}`}
                onClick={() => setCurrentTestimonial(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modern Banner */}
      {/* <section className="elite-banner">
        <div className="elite-container">
          <motion.div
            className="banner-content"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeScale}
          >
            <h2>Ready to Dominate the Digital Space?</h2>
            <p>Deploy systems that never sleep.</p>
            <button
              className="elite-btn outline"
              onClick={() => navigate("/contact")}
            >
              Start Project
            </button>
          </motion.div>
        </div>
      </section> */}

      <Newsletter />
      <Cta />
    </div>
  );
}
