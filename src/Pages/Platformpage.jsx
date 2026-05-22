import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cta from "../components/Cta/Cta";
import { 
  Shield, 
  Zap, 
  Globe, 
  Sparkles, 
  Database, 
  Users, 
  CheckCircle, 
  Play, 
  Upload, 
  ArrowRight, 
  ArrowLeft,
  ChevronRight,
  TrendingUp,
  Cpu,
  Lock,
  Layers,
  Activity,
  Heart,
  Film
} from "lucide-react";
import Swal from "sweetalert2";
import "../Style/PlatformPage.css";
import useSEO from "../hooks/useSEO";
import PlatformSectionhero from "../components/Hero/PlatformSectionhero";
import AIConsultationForm from "../components/AIConsultationForm/AIConsultationForm";

export default function PlatformPage() {
  useSEO({
    title: "Tailored DevOps, Cloud & AI Expertise | Devopstrio",
    description: "Devopstrio delivers industry-leading DevOps platforms, high-performance cloud architecture, and AI-driven solutions tailored for Finance, Healthcare, and Media.",
    keywords: "DevOps platform, cloud-native architecture, finance software, healthcare tech, media streaming, e-commerce scale, Devopstrio expertise, IT consulting, remote engineering",
    ogTitle: "Bespoke DevOps, Cloud & AI Solutions | Devopstrio",
    ogDescription: "Empower your business to scale with our tailored cloud architecture, high-security configurations, and automation pipelines designed for modern enterprises.",
    ogImage: "https://devopstrio.com/assets/images/devopstrio-og-platform.jpg",
    ogUrl: "https://devopstrio.com/platform",
    canonicalUrl: "https://devopstrio.com/platform"
  });

  const navigate = useNavigate();

  // State Management for Interactive Tabs & Sliders
  const [activeExpertise, setActiveExpertise] = useState(0);
  const [caseStudyIndex, setCaseStudyIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    description: "",
    termsAccepted: false
  });
  const [fileAttached, setFileAttached] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("aos-animate");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll("[data-aos]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Data Sets
  const industriesExpertise = [
    {
      title: "Finance Software",
      icon: <Lock className="pl-exp-icon" />,
      tag: "FINTECH & BANKING",
      desc: "Architecting zero-trust, high-throughput financial frameworks that secure transaction pipelines and simplify compliance.",
      features: [
        "Banking software frameworks",
        "InsureTech and InvestTech pipelines",
        "FinTech products security integration"
      ],
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=450&fit=crop",
      path: "/platform/financial-services"
    },
    {
      title: "Healthcare",
      icon: <Heart className="pl-exp-icon" />,
      tag: "DIGITAL HEALTH",
      desc: "HIPAA-compliant cloud platforms designed to securely orchestrate medical records, APIs, and clinical pipelines.",
      features: [
        "Electronic health record silos",
        "Telemedicine infrastructure integrations",
        "GDPR & HIPAA compliance guardrails"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=450&fit=crop",
      path: "/platform/healthcare"
    },
    {
      title: "Media & Entertainment",
      icon: <Film className="pl-exp-icon" />,
      tag: "STREAMING & MEDIA",
      desc: "Delivering massive-scale streaming solutions with advanced CDN edge distribution and low encoding overhead.",
      features: [
        "High-bitrate video encoding layers",
        "Edge-powered content caching structures",
        "Digital rights security layers"
      ],
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=450&fit=crop",
      path: "/platform/media-entertainment"
    },
    {
      title: "Telecom",
      icon: <Zap className="pl-exp-icon" />,
      tag: "TELECOMMUNICATIONS",
      desc: "Building highly resilient network backbones, cellular routing engines, and high-frequency communication pipelines.",
      features: [
        "Cellular traffic distribution architectures",
        "Automated billing backend microservices",
        "Ultra-low latency edge signal processing"
      ],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=450&fit=crop",
      path: "/platform/telecom"
    },
    {
      title: "Logistics Software",
      icon: <TrendingUp className="pl-exp-icon" />,
      tag: "SUPPLY CHAIN",
      desc: "Streamlining inventory management, route optimizations, and real-time fleet delivery trackers.",
      features: [
        "Fleet routing automated optimization engines",
        "Real-time warehouse tracking microservices",
        "Predictive cargo scheduling machine learning models"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop",
      path: "/platform/logistics"
    },
    {
      title: "Automotive Solutions",
      icon: <Cpu className="pl-exp-icon" />,
      tag: "CONNECTED VEHICLES",
      desc: "Orchestrating OTA software update gateways, vehicular diagnostics interfaces, and smart telematics streams.",
      features: [
        "Secure over-the-air firmware update gateways",
        "Connected dashboard telematics analytics",
        "ADAS automation simulation testing nodes"
      ],
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=450&fit=crop",
      path: "/platform/automotive"
    },
    {
      title: "Life Sciences Software",
      icon: <Activity className="pl-exp-icon" />,
      tag: "BIO-TECH & CLINICAL",
      desc: "Powering clinical trial execution systems, DNA sequence mapping storage, and medical research databases.",
      features: [
        "Clinical trials data pipeline tracking",
        "Automated DNA sequencing processing nodes",
        "High-performance medical research database indexing"
      ],
      image: "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=800&h=450&fit=crop"
    },
    {
      title: "eCommerce Solutions",
      icon: <Database className="pl-exp-icon" />,
      tag: "ELECTRONIC COMMERCE",
      desc: "Scaling merchant multi-tenant architectures, payment systems, and custom conversion funnels.",
      features: [
        "Multi-vendor digital storefront frameworks",
        "Optimized check-out processing middleware",
        "Dynamic high-load payment API processors"
      ],
      image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&h=450&fit=crop"
    },
    {
      title: "Retail Solutions",
      icon: <Users className="pl-exp-icon" />,
      tag: "RETAILTECH",
      desc: "Delivering real-time point-of-sale systems, dynamic omni-channel synchronization, and checkout solutions.",
      features: [
        "Omni-channel stock control systems",
        "Real-time point-of-sale data streams",
        "Intelligent customer loyalty program platforms"
      ],
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=450&fit=crop",
      path: "/platform/retail"
    },
    {
      title: "Manufacturing Software",
      icon: <Layers className="pl-exp-icon" />,
      tag: "INDUSTRY 4.0",
      desc: "Orchestrating factory equipment automation, real-time telemetry pipelines, and predictive machinery maintenance.",
      features: [
        "Real-time IoT equipment telemetry ingestion",
        "Predictive manufacturing downtime dashboards",
        "Supply chain material allocation software"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=450&fit=crop"
    },
    {
      title: "Travel & Hospitality",
      icon: <Globe className="pl-exp-icon" />,
      tag: "TRAVELTECH",
      desc: "Modernizing legacy booking GDS databases, ticketing APIs, and customer reservation channels.",
      features: [
        "Distributed multi-airline booking aggregators",
        "Real-time hotel room availability synchronization",
        "Custom travel itinerary generator systems"
      ],
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=450&fit=crop"
    },
    {
      title: "iGaming",
      icon: <Sparkles className="pl-exp-icon" />,
      tag: "GAMING & CASINO",
      desc: "Architecting high-frequency transaction ledger backends, real-time score pipelines, and secure user balance ledgers.",
      features: [
        "Provably fair slot engine calculations",
        "Zero-latency real-time multiplayer lobbies",
        "High-speed deposit and payout channels"
      ],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=450&fit=crop"
    },
    {
      title: "eLearning",
      icon: <Sparkles className="pl-exp-icon" />,
      tag: "EDTECH",
      desc: "Delivering educational learning management dashboards, streaming course nodes, and real-time remote assessment checkers.",
      features: [
        "SCORM compliant content delivery networks",
        "Interactive remote student assessment tools",
        "Automated grading and evaluation middleware"
      ],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=450&fit=crop"
    },
    {
      title: "Real Estate Software",
      icon: <Layers className="pl-exp-icon" />,
      tag: "PROPTECH",
      desc: "Powering modern MLS listings processing, virtual property tour pipelines, and digital leasing agreement engines.",
      features: [
        "High-performance MLS multi-listing indexing",
        "Automated lease generation and e-signing integrations",
        "Geo-spatial listing map visualization layers"
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=450&fit=crop"
    },
    {
      title: "Aviation Solutions",
      icon: <Cpu className="pl-exp-icon" />,
      tag: "AEROSPACE IT",
      desc: "Securing flight plan coordination engines, baggage routing channels, and flight simulation data analysis.",
      features: [
        "High-precision flight navigation metadata systems",
        "Airport automated baggage distribution middleware",
        "Aircraft predictive turbine analytics engines"
      ],
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=450&fit=crop"
    },
    {
      title: "Oil & Gas IT Solutions",
      icon: <Database className="pl-exp-icon" />,
      tag: "RESOURCES IT",
      desc: "Monitoring drilling sensor telemetry, pipe flow diagnostic trackers, and extraction loggers.",
      features: [
        "Sub-second sensor array telemetry recorders",
        "Pipe network diagnostic modeling pipelines",
        "Drilling platform operations center dashboards"
      ],
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&h=450&fit=crop"
    },
    {
      title: "Legal Industry Software",
      icon: <Lock className="pl-exp-icon" />,
      tag: "LEGALTECH",
      desc: "Encrypting multi-tenant case folder vaults, automated legal document drafts, and billing trackers.",
      features: [
        "Military-grade secure case documentation vaults",
        "AI-driven automated legal document drafting",
        "Billable attorney hour auditing platforms"
      ],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=450&fit=crop"
    },
    {
      title: "Agriculture Software",
      icon: <Heart className="pl-exp-icon" />,
      tag: "AGRITECH",
      desc: "Optimizing automated field watering triggers, crop yield prediction AI models, and satellite soil scanners.",
      features: [
        "Automated sensor-based soil moisture recorders",
        "Crop yield prediction machine learning models",
        "Drone-based field diagnostic mapping layers"
      ],
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?w=800&h=450&fit=crop"
    },
    {
      title: "Energy Software",
      icon: <Zap className="pl-exp-icon" />,
      tag: "SMART GRID",
      desc: "Balancing electrical power grids, renewable power generators, and sub-station telemetry streams.",
      features: [
        "Distributed grid load balance controllers",
        "Solar & wind turbine power metrics analyzers",
        "Smart utility meter billing message relays"
      ],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=450&fit=crop"
    },
    {
      title: "GIS development",
      icon: <Globe className="pl-exp-icon" />,
      tag: "GEO-SPATIAL",
      desc: "Compiling topological map layers, custom coordinate math modules, and real-time geographic trackers.",
      features: [
        "Topological data conversion pipelines",
        "Coordinate reference transformation engines",
        "Real-time GPS vehicle location stream aggregators"
      ],
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=450&fit=crop"
    },
    {
      title: "Public Sector",
      icon: <Shield className="pl-exp-icon" />,
      tag: "GOVTECH",
      desc: "Hardening government services web portals, citizen database backups, and strict security controls.",
      features: [
        "FIPS-140 compliance identity authenticators",
        "Resilient redundant database failovers",
        "Citizen registry automated service gateways"
      ],
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=800&h=450&fit=crop"
    }
  ];

  const caseStudies = [
      {
      title: "Isolated cloud framework for next-gen banking",
      client: "Apex Trust",
      industry: "Fintech",
      image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=800&h=450&fit=crop",
      desc: "Engineered a zero-trust multi-tenant cloud framework utilizing automated compliance guardrails, isolated networks, and secure cryptographic key vaults.",
      results: [
        "Full SOC2 & PCI-DSS certification ready",
        "Real-time penetration attempt blocking",
        "Microservice level traffic monitoring"
      ]
    },
    {
      title: "Internal tools for a global travel company",
      client: "TUI Travel",
      industry: "Travel & Hospitality",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=450&fit=crop",
      desc: "We modernized the legacy travel orchestration core into a highly automated Kubernetes environment. This slashed deployment latency by 85% and significantly optimized cloud-resource utilization.",
      results: [
        "30% operational cost reduction",
        "99.99% system uptime achieved",
        "Instant auto-scaling during high booking spikes"
      ]
    },
    {
      title: "AI-driven inventory forecasting engine",
      client: "Global Retail",
      industry: "E-Commerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=450&fit=crop",
      desc: "Developed a distributed real-time demand prediction architecture utilizing cutting-edge machine learning pipelines, seamlessly managing extreme Black Friday spikes.",
      results: [
        "98.4% predictive forecast accuracy",
        "0% transaction downtime during sales",
        "Seamless integration with third-party logistics APIs"
      ]
    }
  ];

  const advantages = [
    {
      title: "Multi-industry track record",
      desc: "Proven execution across Banking, Digital Health, Retail, and Logistics with dozens of active deployments worldwide.",
      icon: <Layers className="pl-adv-icon" />
    },
    {
      title: "Worldwide reach",
      desc: "Supporting complex active multi-cloud environments in 25+ global edge regions with 24/7 proactive SRE support.",
      icon: <Globe className="pl-adv-icon" />
    },
    {
      title: "Extensive IT talent pool",
      desc: "Direct access to 150+ fully certified DevOps specialists, Kubernetes architects, and machine learning experts.",
      icon: <Users className="pl-adv-icon" />
    },
    {
      title: "High customer satisfaction",
      desc: "Maintaining a 99.8% customer satisfaction score supported by robust SLA agreements and transparent progress tracking.",
      icon: <CheckCircle className="pl-adv-icon" />
    }
  ];

  const clientLogos = ["TECHVISION", "CLOUDNOVA", "DATACORE", "STACKFLOW", "DEVBRIDGE", "APEXTRUST"];

  // Carousel Navigation Helpers
  const handlePrevSlide = () => {
    setCaseStudyIndex((p) => (p === 0 ? caseStudies.length - 1 : p - 1));
  };

  const handleNextSlide = () => {
    setCaseStudyIndex((p) => (p === caseStudies.length - 1 ? 0 : p + 1));
  };

  // Expertise Carousel Navigation Helpers
  const changeActiveExpertise = (newIdx) => {
    if (newIdx === activeExpertise) return;
    setActiveExpertise(newIdx);
  };

  const handlePrevExpertise = () => {
    const newIdx = activeExpertise === 0 ? industriesExpertise.length - 1 : activeExpertise - 1;
    setActiveExpertise(newIdx);
  };

  const handleNextExpertise = () => {
    const newIdx = (activeExpertise + 1) % industriesExpertise.length;
    setActiveExpertise(newIdx);
  };

  const selectExpertiseDot = (idx) => {
    setActiveExpertise(idx);
  };

  // Form Handling
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((p) => ({
      ...p,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileAttached(e.target.files[0]);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.description) {
      Swal.fire({
        icon: "error",
        title: "Missing Fields",
        text: "Please fill out all the required information so our architects can best prepare for your consultation.",
        background: "#0d0d0d",
        color: "#fff",
        confirmButtonColor: "#ce2453"
      });
      return;
    }

    if (!formData.termsAccepted) {
      Swal.fire({
        icon: "warning",
        title: "Consent Required",
        text: "Please accept the privacy policy terms to submit your request.",
        background: "#0d0d0d",
        color: "#fff",
        confirmButtonColor: "#ce2453"
      });
      return;
    }

    setIsSubmitting(true);
    // Mock network delay
    setTimeout(() => {
      setIsSubmitting(false);
      Swal.fire({
        icon: "success",
        title: "Consultation Scheduled!",
        text: `Thank you, ${formData.name}. One of our senior cloud architects will review your project and contact you via ${formData.email} within 24 hours.`,
        background: "#0d0d0d",
        color: "#fff",
        confirmButtonColor: "#ce2453"
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        description: "",
        termsAccepted: false
      });
      setFileAttached(null);
    }, 1500);
  };

  return (
    <div className="pl-root">
      {/* ── 1. CUSTOM HERO SECTION ── */}
    <PlatformSectionhero />

      {/* ── 2. AREAS OF EXPERTISE SECTION (ACCORDION SLIDER) ── */}
      <section className="pl-expertise-sec">
        <div className="pl-container">
          <div className="pl-sec-header-left" data-aos="fade-up">
            <h2 className="pl-sec-heading-left">Areas of expertise</h2>
          </div>

          <div className="pl-exp-slider-container" data-aos="fade-up" data-aos-delay="100">
            {/* Left arrow on the container bounds */}
            <button className="pl-exp-carousel-arrow left" onClick={handlePrevExpertise} aria-label="Previous Expertise">
              <ArrowLeft className="pl-arrow-icon" />
            </button>

            {/* Columns Grid Container and Track */}
            <div className="pl-exp-columns-grid-wrapper">
              <div 
                className="pl-exp-columns-grid"
                style={{ transform: `translateX(calc(-1 * ${activeExpertise} * (var(--pl-exp-inactive-width) + var(--pl-exp-gap))))` }}
              >
                {[...industriesExpertise, ...industriesExpertise.slice(0, 3)].map((item, idx) => {
                  const actualIdx = idx % industriesExpertise.length;
                  const isActive = actualIdx === activeExpertise;
                  return (
                    <div 
                      key={idx} 
                      className={`pl-exp-col ${isActive ? "active-col" : "inactive-col"}`}
                      onClick={() => !isActive && changeActiveExpertise(actualIdx)}
                    >
                      <div className="pl-exp-card-inner">
                        {/* Inactive Title (visible only when inactive) */}
                        <h4 className="pl-exp-inactive-title">{item.title}</h4>

                        <div className="pl-exp-card-body">
                          {/* Image Block */}
                          <div className="pl-exp-img-wrap">
                            <img 
                              src={item.image} 
                              alt={item.title} 
                              className="pl-exp-img" 
                            />
                          </div>

                          {/* Info Block (visible only when active) */}
                          <div className="pl-exp-info-wrap">
                            <h3 className="pl-exp-active-title">{item.title}</h3>
                            <ul className="pl-exp-active-bullets">
                              {item.features.map((feat, fidx) => (
                                <li key={fidx}>
                                  <span className="pl-exp-bullet-tick">✓</span>
                                  <span>{feat}</span>
                                </li>
                              ))}
                            </ul>
                            <button 
                              className="pl-exp-active-cta"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (item.path) {
                                  navigate(item.path);
                                } else {
                                  document.getElementById("consultation-section")?.scrollIntoView({ behavior: "smooth" });
                                }
                              }}
                            >
                              See more <span className="pl-cta-arrow">&rarr;</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right arrow on the container bounds */}
            <button className="pl-exp-carousel-arrow right" onClick={handleNextExpertise} aria-label="Next Expertise">
              <ArrowRight className="pl-arrow-icon" />
            </button>
          </div>

          {/* Dots Indicator at the bottom */}
          <div className="pl-exp-dots-wrap">
            {industriesExpertise.map((_, idx) => (
              <button
                key={idx}
                className={`pl-exp-carousel-dot ${activeExpertise === idx ? "active" : ""}`}
                onClick={() => selectExpertiseDot(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CASE STUDIES SHOWCASE (CAROUSEL) ── */}
      <section className="pl-case-sec" id="case-studies-section">
        <div className="pl-container">
          <div className="pl-sec-header" data-aos="fade-up">
            <span className="pl-sec-mini">Proven Results</span>
            <h2 className="pl-sec-heading">Case Studies</h2>
            <p className="pl-sec-desc">
              Real world platforms built, secured, and scaled to enterprise standards.
            </p>
          </div>

          {/* Interactive Slide Panel */}
          <div className="pl-case-slider" data-aos="fade-up">
            <div className="pl-case-slide-grid">
              <div className="pl-case-img-pane">
                <img 
                  src={caseStudies[caseStudyIndex].image} 
                  alt={caseStudies[caseStudyIndex].title} 
                  className="pl-case-main-img"
                />
                <span className="pl-case-img-badge">{caseStudies[caseStudyIndex].client}</span>
              </div>

              <div className="pl-case-info-pane">
                <span className="pl-case-ind-tag">{caseStudies[caseStudyIndex].industry}</span>
                <h3 className="pl-case-title">{caseStudies[caseStudyIndex].title}</h3>
                <p className="pl-case-desc">{caseStudies[caseStudyIndex].desc}</p>

                <div className="pl-case-metrics">
                  <h4 className="pl-metrics-title">Business Outcomes:</h4>
                  <ul className="pl-metrics-list">
                    {caseStudies[caseStudyIndex].results.map((res, ridx) => (
                      <li key={ridx}>
                        <TrendingUp className="pl-metric-trend" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="pl-case-controls">
              <div className="pl-case-dots">
                {caseStudies.map((_, idx) => (
                  <button
                    key={idx}
                    className={`pl-case-dot ${caseStudyIndex === idx ? "active" : ""}`}
                    onClick={() => setCaseStudyIndex(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
              <div className="pl-case-arrows">
                <button className="pl-arrow-btn" onClick={handlePrevSlide} aria-label="Previous Case Study">
                  <ArrowLeft className="pl-arrow-icon" />
                </button>
                <button className="pl-arrow-btn" onClick={handleNextSlide} aria-label="Next Case Study">
                  <ArrowRight className="pl-arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. DEVOPS TRIO ADVANTAGES ── */}
      <section className="pl-adv-sec">
        <div className="pl-container">
          <div className="pl-sec-header" data-aos="fade-up">
            <span className="pl-sec-mini">Our Core Competence</span>
            <h2 className="pl-sec-heading">Devopstrio's Advantages</h2>
            <p className="pl-sec-desc">
              Why leading enterprises partner with our engineering teams to accelerate digital operations.
            </p>
          </div>

          <div className="pl-adv-grid">
            {advantages.map((item, idx) => (
              <div 
                className="pl-adv-card" 
                key={idx}
                data-aos="zoom-in"
                data-aos-delay={idx * 50 + 100}
              >
                <div className="pl-adv-card-header">
                  <div className="pl-adv-icon-wrap">{item.icon}</div>
                  <h3 className="pl-adv-title">{item.title}</h3>
                </div>
                <p className="pl-adv-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TESTIMONIAL PANEL ── */}
      <section className="pl-test-sec">
        <div className="pl-container">
          {/* Brand logos row */}
          <div className="pl-logos-strip" data-aos="fade-up">
            {clientLogos.map((logo, idx) => (
              <span className="pl-client-logo" key={idx}>{logo}</span>
            ))}
          </div>

          <div className="pl-test-layout" data-aos="fade-up" data-aos-delay="100">
            <div className="pl-quote-panel">
              <span className="pl-quote-mark">&ldquo;</span>
              <blockquote className="pl-main-quote">
                Several things impressed us about Devopstrio &mdash; their speed, 
                deep systems understanding, and absolute care for architectural consistency.
              </blockquote>
              <div className="pl-quote-author">
                <strong>Marcus Vance</strong>
                <span>VP of Operations at TechFlow</span>
              </div>
            </div>

            <div className="pl-video-panel">
              <div className="pl-video-container">
                <img 
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=450&fit=crop" 
                  alt="Customer success case study video preview" 
                  className="pl-video-preview"
                />
                <div className="pl-video-overlay">
                  <div className="pl-play-btn">
                    <Play className="pl-play-icon" />
                  </div>
                  <span className="pl-video-play-text">Watch Case Study Summary</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div style={{maxWidth:"1230px",margin:"0 auto"}} id="consultation-section">
      <AIConsultationForm />
      </div>
      <Cta />
    </div>
  );
}
