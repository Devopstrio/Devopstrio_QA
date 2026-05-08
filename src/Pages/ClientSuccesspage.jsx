import React, { useState, useEffect } from "react";
import "../Style/ClientSuccesspage.css";
import ClientSuccess from "../components/Hero/ClientSuccess";
import Cta from "../components/Cta/Cta";
import MoseySection from "../components/MoseySection/MoseySection";

import {
  RocketLaunchIcon,
  BuildingOfficeIcon,
  BoltIcon,
  GlobeAltIcon,
  HeartIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  CommandLineIcon,
  CircleStackIcon,
} from "@heroicons/react/24/solid";

// Import logos from assets
import awsLogo from "../assets/images/awslogo.jpg";
import gcpLogo from "../assets/images/gcpLogo.png";
import microsoftLogo from "../assets/images/Microsoft.png";
import kubernetesLogo from "../assets/images/kubernetesLogo.png";
import dockerLogo from "../assets/images/dockerLogo.png";
import datadogLogo from "../assets/images/Lenovologo.svg";
const ClientSuccesspage = () => {
  // const [activeFilter, setActiveFilter] = useState("all");
  const [animatedStats, setAnimatedStats] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.querySelector(".cs-impact-stats");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setAnimatedStats(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mouse handlers for slider pause
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);
  const achievements = [
    { value: "200+", label: "Projects Delivered", icon: RocketLaunchIcon },
    { value: "150+", label: "Enterprise Clients", icon: BuildingOfficeIcon },
    { value: "99.9%", label: "Uptime SLA", icon: BoltIcon },
    { value: "12+", label: "Countries", icon: GlobeAltIcon },
    { value: "98%", label: "Client Retention", icon: HeartIcon },
    { value: "24/7", label: "Expert Support", icon: ShieldCheckIcon },
    { value: "500+", label: "Engineers", icon: CommandLineIcon },
    { value: "1000+", label: "Containers", icon: CircleStackIcon },
  ];

  // Duplicate achievements for seamless infinite scroll
  const duplicatedAchievements = [
    ...achievements,
    ...achievements,
    ...achievements,
  ];

  const testimonials = [
    {
      quote:
        "Devopstrio didn't just improve our infrastructure—they transformed how we think about scaling. Their team brought enterprise-grade reliability to our platform while cutting costs by 40%. It's rare to find partners who truly understand both the technical and business sides of DevOps.",
      author: "Sarah Chen",
      position: "CTO",
      company: "Boviet Solar",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
    {
      quote:
        "The migration to a Kubernetes-native environment was seamless. We expected downtime, but Devopstrio delivered zero-interruption service. Our deployment frequency increased by 200%, and our engineering team can finally focus on product features instead of firefighting.",
      author: "Michael Ross",
      position: "VP of Engineering",
      company: "GXO Logistics",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
    {
      quote:
        "Security was our biggest concern moving to the cloud. Devopstrio implemented a DevSecOps pipeline that not only secured our data but also automated 90% of our compliance checks. We passed our SOC2 audit with flying colors thanks to their robust architecture.",
      author: "Elena Rodriguez",
      position: "CISO",
      company: "FinTech Secure",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
    {
      quote:
        "We needed to scale our user base from 100k to 5M in under six months. Devopstrio designed an auto-scaling architecture that handled the load effortlessly. Their expertise in event-driven microservices is unmatched in the industry.",
      author: "David Kim",
      position: "Head of Infrastructure",
      company: "BCLC",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      rating: 5,
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 500); // Wait for fade out
  };

  const handlePrevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonialIndex(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length,
      );
      setIsAnimating(false);
    }, 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentTestimonialIndex, isAnimating]);

  const handleDotClick = (index) => {
    if (isAnimating || index === currentTestimonialIndex) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentTestimonialIndex(index);
      setIsAnimating(false);
    }, 500);
  };

  const partners = [
    { name: "AWS", tier: "Advanced Partner", logo: awsLogo },
    { name: "Google Cloud", tier: "Premier Partner", logo: gcpLogo },
    { name: "Microsoft", tier: "Gold Partner", logo: microsoftLogo },
    {
      name: "Kubernetes",
      tier: "Certified Service Provider",
      logo: kubernetesLogo,
    },
    { name: "Docker", tier: "Official Partner", logo: dockerLogo },
    { name: "Lenovo", tier: "Technology Partner", logo: datadogLogo },
  ];

  return (
    <div className="cs-page">
      {/* ===================== HERO SECTION (UNCHANGED) ===================== */}
      <ClientSuccess />

      {/* ===================== ACHIEVEMENTS SLIDER SECTION ===================== */}
      <section className="cs-achievements-slider">
        <div className="cs-slider-container">
          <div
            className={`cs-slider-track ${isPaused ? "paused" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {duplicatedAchievements.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="cs-slider-item">
                  <div className="cs-slider-icon">
                    <IconComponent />
                  </div>
                  <div className="cs-slider-content">
                    <h3>{item.value}</h3>
                    <p>{item.label}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===================== FEATURED SUCCESS STORY ===================== */}
      <section className="cs-featured-story">
        <div className="cs-container">
          <div className="cs-featured-grid">
            <div className="cs-featured-content">
              <span className="cs-featured-badge">FEATURED SUCCESS STORY</span>
              <h2>How Boviet Solar Achieved 85% Faster Deployments</h2>
              <p className="cs-featured-description">
                When Boviet Solar needed to modernize their legacy
                infrastructure across 12 global locations, they turned to
                Devopstrio for a complete digital transformation. Within 6
                months, we delivered a Kubernetes-native platform that
                revolutionized their deployment process.
              </p>
              <div className="cs-featured-metrics">
                <div className="cs-metric-item">
                  <span className="cs-metric-value">85%</span>
                  <span className="cs-metric-label">Faster Deployments</span>
                </div>
                <div className="cs-metric-item">
                  <span className="cs-metric-value">$2M</span>
                  <span className="cs-metric-label">Annual Savings</span>
                </div>
                <div className="cs-metric-item">
                  <span className="cs-metric-value">99.99%</span>
                  <span className="cs-metric-label">Uptime Achieved</span>
                </div>
              </div>
              <a href="#" className="cs-featured-cta">
                Read Full Case Study
                <ArrowRightIcon className="cs-cta-icon" />
              </a>
            </div>
            <div className="cs-featured-image">
              <img
                src="./images/New/page-1.png"
                alt="Boviet Solar Success Story"
              />
              <div className="cs-image-stats-card">
                <div className="cs-stat-row stat-green">
                  <span className="cs-stat-dot"></span>
                  <span>12 Global Locations</span>
                </div>
                <div className="cs-stat-row stat-red">
                  <span className="cs-stat-dot"></span>
                  <span>85% Faster</span>
                </div>
                <div className="cs-stat-row stat-orange">
                  <span className="cs-stat-dot"></span>
                  <span>Zero Downtime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ===================== IMPACT STATS SECTION ===================== */}
      <section className="cs-impact-stats">
        <div className="cs-container">
          <div className="cs-impact-grid">
            <div className="cs-impact-card cs-impact-primary">
              <h3>Our Global Impact</h3>
              <p>
                Delivering enterprise-grade solutions across 4 continents with
                measurable results
              </p>
            </div>
            <div className="cs-impact-card">
              <span className="cs-impact-number">200+</span>
              <span className="cs-impact-label">Projects</span>
            </div>
            <div className="cs-impact-card">
              <span className="cs-impact-number">150+</span>
              <span className="cs-impact-label">Clients</span>
            </div>
            <div className="cs-impact-card">
              <span className="cs-impact-number">12</span>
              <span className="cs-impact-label">Countries</span>
            </div>
            <div className="cs-impact-card">
              <span className="cs-impact-number">98%</span>
              <span className="cs-impact-label">Retention</span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MOSEY SECTION ===================== */}
      <MoseySection />
      {/* ===================== PARTNER ECOSYSTEM ===================== */}
      <section className="cs-partner-ecosystem">
        <div className="cs-container">
          <div className="cs-ecosystem-header">
            <h2>Trusted by Industry Leaders</h2>
            <p>We partner with the best to deliver the best</p>
          </div>
          <div className="cs-ecosystem-grid">
            {partners.map((partner, index) => (
              <div key={index} className="cs-ecosystem-card">
                <div className="cs-partner-logo">
                  <img src={partner.logo} alt={partner.name} />
                </div>
                <div className="cs-partner-info">
                  <h4>{partner.name}</h4>
                  <p>{partner.tier}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIAL SPOTLIGHT ===================== */}
      <section className="cs-testimonial-spotlight">
        <div className="cs-container">
          <div className="cs-spotlight-card">
            <div
              className={`cs-spotlight-content ${isAnimating ? "fade-out" : "fade-in"}`}
            >
              <div className="cs-spotlight-rating">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="cs-star">
                    ★
                  </span>
                ))}
              </div>
              <p className="cs-spotlight-quote">
                &quot;{testimonials[currentTestimonialIndex].quote}&quot;
              </p>
              <div className="cs-spotlight-author">
                <img
                  src={testimonials[currentTestimonialIndex].image}
                  alt={testimonials[currentTestimonialIndex].author}
                />
                <div>
                  <h4>{testimonials[currentTestimonialIndex].author}</h4>
                  <p>
                    {testimonials[currentTestimonialIndex].position},{" "}
                    {testimonials[currentTestimonialIndex].company}
                  </p>
                </div>
              </div>
            </div>

            <div className="cs-testimonial-controls">
              <button
                className="cs-control-btn prev"
                onClick={handlePrevTestimonial}
                aria-label="Previous Testimonial"
              >
                <ArrowRightIcon className="cs-icon-rotate" />
              </button>
              <div className="cs-control-dots">
                {testimonials.map((_, index) => (
                  <span
                    key={index}
                    className={`cs-dot ${index === currentTestimonialIndex ? "active" : ""}`}
                    onClick={() => handleDotClick(index)}
                  ></span>
                ))}
              </div>
              <button
                className="cs-control-btn next"
                onClick={handleNextTestimonial}
                aria-label="Next Testimonial"
              >
                <ArrowRightIcon />
              </button>
            </div>

            <div className="cs-spotlight-pattern"></div>
          </div>
        </div>
      </section>

      {/* ===================== CTA SECTION (UNCHANGED) ===================== */}
      <Cta />
    </div>
  );
};

export default ClientSuccesspage;
