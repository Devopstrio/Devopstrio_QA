import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiShield, 
  FiCpu, 
  FiSettings, 
  FiActivity, 
  FiLayers, 
  FiChevronDown, 
  FiChevronLeft, 
  FiChevronRight, 
  FiUser, 
  FiPlay, 
  FiCalendar, 
  FiFileText, 
  FiDatabase, 
  FiSliders, 
  FiPlus, 
  FiTarget,
  FiServer
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";
import api from "../../Services/api";
import ClientSuccess from "../../components/Hero/ClientSuccess";
import helenImg from "../../assets/images/helen.jpg";
import rahmanImg from "../../assets/images/rahman.png";
import AIConsultationForm from "../../components/AIConsultationForm/AIConsultationForm";
import "../../Style/platform/Manufacturing.css";

export default function Manufacturing() {
  const navigate = useNavigate();
  
  // Interactive Component States
  const [activeProcess, setActiveProcess] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  
  // Dynamic Case Studies state
  const [caseStudies, setCaseStudies] = useState([]);
  const [loadingCases, setLoadingCases] = useState(true);

  // Fetch Dynamic Case Studies
  useEffect(() => {
    const fetchCases = async () => {
      try {
        setLoadingCases(true);
        const rawPosts = await api.getAllContentByCategory("insights-knowledge", "case-studies", 3);
        if (rawPosts && rawPosts.length > 0) {
          const transformed = rawPosts.map((post) => 
            api.transformContent(post, 
              { name: "Insights & Knowledge", slug: "insights-knowledge" }, 
              { name: "Case Studies", slug: "case-studies" }
            )
          );
          setCaseStudies(transformed);
        }
      } catch (err) {
        console.error("Error loading case studies for Manufacturing:", err);
      } finally {
        setLoadingCases(false);
      }
    };
    fetchCases();
  }, []);

  // 1. Metrics Definitions
  const metrics = [
    { 
      val: "35% Reduction", 
      lbl: "Downtime Prevented", 
      desc: "Predictive maintenance scheduling using advanced continuous vibration anomaly detection.", 
      icon: <FiSettings /> 
    },
    { 
      val: "99.8% Accuracy", 
      lbl: "Defect Sorting", 
      desc: "Automated real-time edge computer vision pipelines running in milliseconds on physical gateways.", 
      icon: <FiCheckCircle /> 
    },
    { 
      val: "<12ms Latency", 
      lbl: "SCADA Ingestion", 
      desc: "Architected high-throughput message brokers mapping 100k+ sensor telemetry events per second.", 
      icon: <FiCpu /> 
    }
  ];

  // 2. Processes Tabs Data
  const processesData = [
    {
      title: "Production planning",
      desc: "Leverage AI-fueled analytics to optimize resource allocation and production coordination. Integrate with ERP platforms for a unified view of demand, capacity, and resources, making dynamic planning possible.",
      boxTitle: "Our custom manufacturing software development scope includes:",
      outcomes: [
        "AI-fueled forecasting;",
        "Dynamic scheduling;",
        "ERP synchronization."
      ]
    },
    {
      title: "Operations and production management",
      desc: "Optimize daily operations and streamline plant-floor workflows. Collect real-time data from machines and operators to identify bottlenecks, coordinate active tasks, and improve overall equipment effectiveness (OEE).",
      boxTitle: "Our operations management software development includes:",
      outcomes: [
        "Real-time OEE dashboards;",
        "Automated operator instructions;",
        "Dynamic bottleneck analysis."
      ]
    },
    {
      title: "Quality and process control",
      desc: "Ensure high-quality standards and eliminate manufacturing defects. Deploy automated optical inspections, live sensor feedback telemetry, and robust batch record verifications.",
      boxTitle: "Our quality control systems feature:",
      outcomes: [
        "Computer-vision anomaly gates;",
        "SPC charting & data export;",
        "Automated sorting signals."
      ]
    },
    {
      title: "Production execution",
      desc: "Coordinate direct machine operations and low-latency SCADA triggers. Connect physical PLCs directly to secure logging systems for real-time visibility over manufacturing cycles.",
      boxTitle: "Our production execution scope delivers:",
      outcomes: [
        "Direct PLC/SCADA connectivity;",
        "Micro-second alarm dispatch rules;",
        "Optimized batch trigger gates."
      ]
    },
    {
      title: "Product lifecycle management (PLM)",
      desc: "Streamline product designs and engineering shifts seamlessly. Manage CAD files, bills of materials (BOM), and revision histories securely across global sites to reduce time-to-market.",
      boxTitle: "Our custom PLM platform integrates:",
      outcomes: [
        "Multi-site BOM synchronization;",
        "Digital design version control;",
        "Engineering change order automation."
      ]
    },
    {
      title: "Maintenance and asset management",
      desc: "Predict hardware wear and prevent unplanned factory downtime. Leverage continuous vibration, thermal, and electrical diagnostics to schedule service sessions exactly when needed.",
      boxTitle: "Our maintenance solutions provide:",
      outcomes: [
        "Predictive wear algorithms;",
        "Automatic parts inventory alerts;",
        "Vibration & temperature heatmaps."
      ]
    },
    {
      title: "Workforce management",
      desc: "Optimize shift allocations and coordinate physical labor logs. Provide mobile portal apps for operators to manage schedule changes, safety compliance sign-offs, and shifts.",
      boxTitle: "Our workforce management integrations support:",
      outcomes: [
        "Intelligent shift scheduling rules;",
        "Digital safety training checklists;",
        "Mobile-responsive shift portal."
      ]
    },
    {
      title: "Supply chain and vendor management",
      desc: "Maximize freight cargo visibility and manage raw material queues. Integrate vendor logistics databases with your MES system to schedule raw material arrivals matching production runs.",
      boxTitle: "Our supply chain systems offer:",
      outcomes: [
        "Real-time container geo-tracking;",
        "Vendor performance scoring grids;",
        "Dynamic warehouse buffer policies."
      ]
    }
  ];

  // 3. Core Capabilities
  const capabilities = [
    {
      title: "Custom MES Platforms",
      desc: "Build next-generation Manufacturing Execution Systems that monitor, coordinate, and optimize plant floor operations. Implement sample stability tracking, GxP validation tools, and live machine throughput maps.",
      icon: <FiLayers />
    },
    {
      title: "Industrial Telemetry Systems",
      desc: "Deploy time-series database nodes and scalable message broker pipelines (Kafka, MQTT, OPC-UA) that ingest continuous streams of multi-sensor data with sub-millisecond network latency.",
      icon: <FiDatabase />
    },
    {
      title: "Predictive Quality Gates",
      desc: "Implement edge-deployed computer vision models that capture physical manufacturing defects under high-speed assembly. Drastically reduce product recall rates and manual inspector overhead.",
      icon: <FiTarget />
    }
  ];

  // 4. Why Rely Grid
  const relyData = [
    {
      title: "Reduced Downtime",
      desc: "Harness continuous machinery sensor analysis to anticipate wear and tear, reducing unplanned factory outages by up to 35%."
    },
    {
      title: "Zero Telemetry Loss",
      desc: "We engineer secure local buffers and time-series data warehouses, ensuring zero packet loss on high-throughput sensor telemetry."
    },
    {
      title: "Comprehensive SLA",
      desc: "Receive dedicated round-the-clock hardware connectivity surveillance, pipeline monitoring, and fast incident response teams."
    },
    {
      title: "Enterprise Compliance",
      desc: "All software assets comply perfectly with GxP regulations, ISO 9001 quality frameworks, and Title 21 CFR batch documentation."
    }
  ];

  // 5. Accordion Services Data
  const servicesAccordion = [
    {
      title: "Inventory Optimization",
      desc: "Automate raw material allocation and inventory scheduling. Our systems leverage advanced deep learning predictions to match real-time production throughput with cargo delivery pipelines, preventing material bottlenecks.",
      bullets: ["Automated safety stock triggers", "Warehouse capacity mapping", "Intelligent material route scheduling"]
    },
    {
      title: "Predictive Maintenance",
      desc: "Scale machinery lifetime through intelligent telemetry surveillance. We process continuous operational diagnostics like temperature, acoustic feedback, and electrical metrics to schedule repair sessions before failures occur.",
      bullets: ["Acoustic wear detection models", "Remaining Useful Life (RUL) maps", "Automatic alert dispatch gates"]
    },
    {
      title: "Real-Time Fleet Logistics",
      desc: "Connect factory outcomes directly to supply logistics. Streamline delivery networks with automated carrier scheduling, real-time cargo temperature monitoring, and low-latency route updates.",
      bullets: ["Dynamic shipping carrier selection", "Sensor-based load balancing", "Live tracking dashboard portals"]
    },
    {
      title: "Edge Gateway Processing",
      desc: "Run machine learning classifiers locally on factory floors. We deploy compact edge models onto physical gateway hardware to execute defect sorting and alarm checks with minimal web latency.",
      bullets: ["Sub-millisecond local sorting lag", "SCADA telemetry protocol translations", "Local network offline buffering"]
    }
  ];

  // 6. Case Studies definitions
  const slidesData = [
    {
      tag: "Case Study 1",
      title: "Edge Compute Platform for Automated Defect Sorting",
      desc: "Deployed containerized computer-vision models on local manufacturing edge gateways, reducing industrial sorting latency down to single-digit milliseconds.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
    },
    {
      tag: "Case Study 2",
      title: "Predictive Routing Platform for Global Logistics Hubs",
      desc: "Scaled an ultra-low latency real-time routing engine handling 25M+ active daily queries on GCP, optimizing fleet resource allocation and scheduling pipelines.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
    },
    {
      tag: "Case Study 3",
      title: "Zero-Downtime Multi-Region Financial Cloud Migration",
      desc: "Architected a zero-trust multi-region financial platform on AWS, cutting infrastructure costs by 42% while automating compliance mappings for SOC2 & PCI-DSS.",
      img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
    }
  ];

  // Dynamic Case Studies mapping
  const activeSlides = caseStudies.length > 0
    ? caseStudies.map((cs, idx) => ({
        tag: `Case Study ${idx + 1}`,
        title: cs.title,
        desc: cs.excerpt || cs.title,
        img: cs.image || [
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
          "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
          "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80"
        ][idx % 3],
        link: `/${cs.section?.slug || "insights-knowledge"}/${cs.category?.slug || "case-studies"}/${cs.id}`
      }))
    : slidesData.map(slide => ({ ...slide, link: "/insights-knowledge/case-studies" }));

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % activeSlides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  // 10. Testimonials
  const testimonials = [
    {
      quote: "Devopstrio completely revolutionized our telemetry gathering processes. By implementing their Kafka-based pipeline and predictive classifiers, our machinery downtime dropped by 35% in the first quarter alone.",
      author: "Marcus Vance",
      role: "VP of Smart Operations, Krupp Heavy Industry"
    },
    {
      quote: "The computer vision quality gates built by their engineering team sorted physical defects with sub-millisecond delay. The GxP logs and FDA batch documentation setups saved us countless auditing hours.",
      author: "Samantha Thorne",
      role: "Director of Quality Control, HexaCare Manufacturing"
    }
  ];

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // 11. FAQs
  const faqs = [
    {
      q: "Which messaging protocols do your telemetry systems support?",
      a: "Our telemetry integration platforms support OPC-UA, MQTT, Apache Kafka, AMQP (RabbitMQ), Modbus, and standard REST interfaces to connect seamlessly with physical SCADA nodes."
    },
    {
      q: "How do your edge gateways maintain continuous buffering offline?",
      a: "We architect resilient local SQLite or time-series caching layers on edge gateway computers. If connection to the cloud fails, telemetry data buffers locally and syncs automatically when the link is restored."
    },
    {
      q: "Are your quality gates and MES integrations compliant with ISO 9001?",
      a: "Yes. All custom systems built by our engineers strictly adhere to ISO 9001 Quality Management standards, GxP guidelines, and FDA Title 21 CFR Part 11 electronic batch record rules."
    }
  ];

  return (
    <div className="plt-mfg-page">
      {/* 1. Hero Section */}
      <ClientSuccess />
      
      <section className="plt-mfg-hero">
        <div className="plt-mfg-container">
          <div className="plt-mfg-hero-layout">
            <div className="plt-mfg-hero-left">
              <h1 className="plt-mfg-hero-h1">
                Manufacturing Software <br />
                <span className="plt-mfg-gradient-text">& Smart Factory Solutions</span>
              </h1>
              <p className="plt-mfg-hero-p">
                Optimize operational performance, streamline supply lines, and scale IoT edge networks. We design high-availability SCADA integrations, computer vision quality gates, and smart predictive diagnostics.
              </p>
            </div>
          </div>

          {/* Metrics Live Row */}
          <div className="plt-mfg-metrics-section">
            {metrics.map((item, idx) => (
              <div className="plt-mfg-metric-card" key={idx}>
                <div className="plt-mfg-metric-icon-wrap">{item.icon}</div>
                <div className="plt-mfg-metric-info">
                  <h3>{item.val}</h3>
                  <div style={{ color: "#ce2453", fontWeight: "700", fontSize: "0.9rem", marginBottom: "4px" }}>
                    {item.lbl}
                  </div>
                  <p className="plt-mfg-metric-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Processes Tab Section */}
      <section className="plt-mfg-processes-section">
        <div className="plt-mfg-container">
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span className="plt-mfg-gradient-text" style={{ fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem" }}>
              Operational Assistance
            </span>
            <h2 className="plt-mfg-sec-h2" style={{ marginTop: "8px" }}>
              Get high-quality assistance with any of these processes
            </h2>
          </div>

          <div className="plt-mfg-processes-layout">
            <div className="plt-mfg-processes-sidebar">
              {processesData.map((p, idx) => (
                <button 
                  key={idx}
                  className={`plt-mfg-process-btn ${activeProcess === idx ? "active" : ""}`}
                  onClick={() => setActiveProcess(idx)}
                >
                  {p.title}
                  <FiChevronRight className="plt-mfg-process-btn-icon" />
                </button>
              ))}
            </div>

            <div className="plt-mfg-process-display">
              <p className="plt-mfg-process-display-desc">
                {processesData[activeProcess].desc}
              </p>
              
              <div className="plt-mfg-process-scope-box">
                <h4>{processesData[activeProcess].boxTitle}</h4>
                <div className="plt-mfg-process-outcomes">
                  {processesData[activeProcess].outcomes.map((outcome, idx) => (
                    <div className="plt-mfg-outcome-item" key={idx}>
                      <span className="plt-mfg-outcome-checkmark">✓</span>
                      <span>{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities Section */}
      <section className="plt-mfg-choose">
        <div className="plt-mfg-container">
          <span className="plt-mfg-gradient-text" style={{ fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem" }}>
            Tailored Integrations
          </span>
          <h2 className="plt-mfg-sec-h2" style={{ marginTop: "8px" }}>Custom development and integrations</h2>
          <p className="plt-mfg-sec-subtitle">
            Leverage robust custom platforms built by engineering teams to automate warehouse routing, coordinate plant SCADA outputs, and track telemetry variables live.
          </p>
          <div className="plt-mfg-choose-grid">
            {capabilities.map((item, idx) => (
              <div className="plt-mfg-choose-card" key={idx}>
                <div className="plt-mfg-card-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Rely Section */}
      <section className="plt-mfg-rely-section">
        <div className="plt-mfg-container">
          <div style={{ textAlign: "center" }}>
            <span className="plt-mfg-gradient-text" style={{ fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem" }}>
              Operational Reliability
            </span>
            <h2 className="plt-mfg-sec-h2" style={{ marginTop: "8px" }}>Why customers rely on us</h2>
          </div>

          <div className="plt-mfg-rely-grid">
            {relyData.map((item, idx) => (
              <div className="plt-mfg-rely-card" key={idx}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="plt-mfg-rely-cta-row">
            <span className="plt-mfg-rely-cta-text">
              Looking for a robust partner to engineer your Smart Factory pipeline?
            </span>
            <button className="plt-mfg-btn-primary" onClick={() => navigate('/contact')}>
              Let's Talk <FiArrowRight />
            </button>
          </div>
        </div>
      </section>
      {/* 5. Accordion Services Section */}
      <section className="plt-mfg-services-section">
        <div className="plt-mfg-container">
          <span className="plt-mfg-gradient-text" style={{ fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem" }}>
            Platform Capabilities
          </span>
          <h2 className="plt-mfg-sec-h2" style={{ marginTop: "8px" }}>Manufacturing software development services</h2>
          
          <div className="plt-mfg-services-list">
            {servicesAccordion.map((item, idx) => {
              const isOpen = activeService === idx;
              return (
                <div className={`plt-mfg-services-item ${isOpen ? "open" : ""}`} key={idx}>
                  <div className="plt-mfg-services-header" onClick={() => setActiveService(isOpen ? -1 : idx)}>
                    <h3>{item.title}</h3>
                    <FiChevronDown className="plt-mfg-services-toggle-icon" />
                  </div>
                  {isOpen && (
                    <div className="plt-mfg-services-content">
                      <p>{item.desc}</p>
                      <div className="plt-mfg-services-features-grid">
                        {item.bullets.map((bullet, bIdx) => (
                          <div className="plt-mfg-outcome-item" key={bIdx}>
                            <FiCheckCircle className="plt-mfg-outcome-icon" size={16} />
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Case Studies Slider Section */}
      <section className="plt-mfg-case-section">
        <div className="plt-mfg-container">
          <div className="plt-mfg-case-header-row">
            <div>
              <span className="plt-mfg-gradient-text" style={{ fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem" }}>
                Success Stories
              </span>
              <h2 className="plt-mfg-sec-h2" style={{ marginTop: "8px" }}>Projects performed for manufacturers</h2>
            </div>
            <div className="plt-mfg-case-arrows">
              <button className="plt-mfg-arrow-btn" onClick={handlePrevSlide} aria-label="Previous slide">
                <FiChevronLeft size={20} />
              </button>
              <button className="plt-mfg-arrow-btn" onClick={handleNextSlide} aria-label="Next slide">
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="plt-mfg-case-slider-wrap">
            <div className="plt-mfg-case-slide">
              <div className="plt-mfg-case-content-col">
                <span className="case-tag">{activeSlides[activeSlide]?.tag}</span>
                <h3>{activeSlides[activeSlide]?.title}</h3>
                <p>{activeSlides[activeSlide]?.desc}</p>
                <button className="plt-mfg-btn-primary" onClick={() => navigate(activeSlides[activeSlide]?.link)}>
                  Read case study <FiArrowRight />
                </button>
              </div>

              <div className="plt-mfg-case-img-col">
                <img src={activeSlides[activeSlide]?.img} alt={activeSlides[activeSlide]?.title} />
              </div>
            </div>
          </div>

          <div className="plt-mfg-dots-indicator">
            {activeSlides.map((_, idx) => (
              <div 
                key={idx} 
                className={`plt-mfg-dot ${activeSlide === idx ? "active" : ""}`}
                onClick={() => setActiveSlide(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Expert Banner */}
      <section className="plt-mfg-cta-banner-wrapper">
        <div className="plt-mfg-container">
          <div className="plt-mfg-expert-cta-banner">
            <div className="plt-mfg-expert-cta-left">
              <h3>Get high-throughput telemetry pipelines built specifically for your factory.</h3>
              <p>Schedule a continuous architecture consultation call with our hardware and telemetry compliance engineers.</p>
            </div>
            <button className="plt-mfg-btn-primary" onClick={() => navigate('/contact')} style={{ flexShrink: 0 }}>
              Schedule a Call <FiCalendar />
            </button>
          </div>
        </div>
      </section>

      {/* 8. Key Tech Grid Section */}
      <section className="plt-mfg-tech-section">
        <div className="plt-mfg-container">
          <div style={{ textAlign: "center" }}>
            <span className="plt-mfg-gradient-text" style={{ fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem" }}>
              Our Stack
            </span>
            <h2 className="plt-mfg-sec-h2" style={{ marginTop: "8px" }}>Key technologies we leverage</h2>
          </div>

          <div className="plt-mfg-tech-grid">
            <div className="plt-mfg-tech-card">
              <h4>Industrial IoT & Protocols</h4>
              <p>Configure OPC-UA client servers, secure MQTT brokers, Modbus hardware registries, and high-capacity Apache Kafka messaging clusters.</p>
            </div>
            <div className="plt-mfg-tech-card">
              <h4>Edge Gateways</h4>
              <p>Build resilient C++ or Rust message buffering brokers running on factory floor hardware nodes (Adlink, Advantech, Raspberry Pi panels).</p>
            </div>
            <div className="plt-mfg-tech-card">
              <h4>Computer Vision Diagnostics</h4>
              <p>Train deep convolutional neural networks (CNNs) in PyTorch to recognize microdefects and sort items in single-digit milliseconds.</p>
            </div>
            <div className="plt-mfg-tech-card">
              <h4>Regulatory Compliant Logs</h4>
              <p>Structure GxP compliance architectures, ISO 9001 quality validations, and cryptographic electronic signature batch files.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Expert Profile Section (Flush height expert card layout) */}
      <section className="plt-mfg-expert-section">
        <div className="plt-mfg-container">
          <div className="plt-mfg-expert-grid">
            <div className="plt-mfg-expert-img-part">
              <img src={helenImg} alt="Helen Vance - Head of Manufacturing Software" />
            </div>
            <div className="plt-mfg-expert-info-part">
              <span className="plt-mfg-expert-role">Manufacturing Systems Lead</span>
              <h3>Meet Helen Vance</h3>
              <p className="plt-mfg-expert-bio">
                Head of Manufacturing Software Development. Helen specializes in orchestrating industrial software architectures, automated warehouse control networks, and smart factory execution systems (MES). She helps manufacturing plants integrate robust time-series databases and secure edge gateway networks to streamline real-time telemetry ingestion and compliance.
              </p>
              <button className="plt-mfg-expert-schedule-btn" onClick={() => navigate('/contact')}>
                Consult with Helen <FiArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Testimonials Slider Section */}
      <section className="plt-mfg-testimonial-section">
        <div className="plt-mfg-container">
          <div style={{ textAlign: "center" }}>
            <span className="plt-mfg-gradient-text" style={{ fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem" }}>
              Client Testimonials
            </span>
            <h2 className="plt-mfg-sec-h2" style={{ marginTop: "8px" }}>Testimonials</h2>
          </div>

          <div className="plt-mfg-testimonial-card">
            <FaQuoteLeft className="plt-mfg-quote-icon" />
            <p className="plt-mfg-testimonial-text">
              "{testimonials[activeTestimonial].quote}"
            </p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
              <div className="plt-mfg-testimonial-author">
                <div className="plt-mfg-author-avatar">
                  {testimonials[activeTestimonial].author[0]}
                </div>
                <div className="plt-mfg-author-info">
                  <h4>{testimonials[activeTestimonial].author}</h4>
                  <p>{testimonials[activeTestimonial].role}</p>
                </div>
              </div>
              <div className="plt-mfg-case-arrows">
                <button className="plt-mfg-arrow-btn" onClick={handlePrevTestimonial} aria-label="Previous testimonial">
                  <FiChevronLeft size={16} />
                </button>
                <button className="plt-mfg-arrow-btn" onClick={handleNextTestimonial} aria-label="Next testimonial">
                  <FiChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ Accordion Section */}
      <section className="plt-mfg-faq-section">
        <div className="plt-mfg-container">
          <div style={{ textAlign: "center" }}>
            <span className="plt-mfg-gradient-text" style={{ fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", fontSize: "0.85rem" }}>
              Troubleshooting & Support
            </span>
            <h2 className="plt-mfg-sec-h2" style={{ marginTop: "8px" }}>FAQ</h2>
          </div>

          <div className="plt-mfg-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div className={`plt-mfg-faq-item ${isOpen ? "open" : ""}`} key={idx}>
                  <div className="plt-mfg-faq-q" onClick={() => setOpenFaq(isOpen ? null : idx)}>
                    <span>{faq.q}</span>
                    <FiPlus className="plt-mfg-faq-icon" />
                  </div>
                  {isOpen && (
                    <div className="plt-mfg-faq-a">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. Consult Consultation Form Component */}
      <div style={{ margin: "0px auto", maxWidth: "1250px" }}>
        <AIConsultationForm />
      </div>
    </div>
  );
}
