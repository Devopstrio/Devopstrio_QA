import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { sendEmail } from "../../Services/sendmail";
import "../../Style/ai_data/AIConsulting.css";
import "../../Style/ai_data/ArtificialIntelligence.css";
import AIConsultationForm from "../../components/AIConsultationForm/AIConsultationForm";
import AITeam from "../../components/AITeam/AITeam";
import { FiBarChart2, FiMap, FiTarget, FiLayers, FiCpu, FiDatabase, FiZap, FiMessageSquare, FiCheckCircle, FiChevronLeft, FiChevronRight, FiCheck, FiPlus, FiMinus, FiStar, FiArrowRight, FiUsers, FiTrendingUp, FiSearch, FiCloud, FiActivity, FiCalendar, FiGlobe, FiShield, FiAnchor, FiTrendingDown, FiMessageCircle } from "react-icons/fi";


import Servicehero from "../../components/Hero/Serviceshero";

//IMAGES
import AiConsulting_10 from '../../assets/images/Aiconsulting/AiConsulting_1.png';
import AiConsulting_2 from "../../assets/images/Aiconsulting/AiConsulting_2.png";
import AiConsulting_3 from "../../assets/images/Aiconsulting/AiConsulting_3.png";
import AiConsulting_4 from "../../assets/images/Aiconsulting/AiConsulting_4.png";
import AiConsulting_5 from "../../assets/images/Aiconsulting/AiConsulting_5.png";
import AiConsulting_6 from "../../assets/images/Aiconsulting/AiConsulting_6.png";
import AiConsulting_7 from "../../assets/images/Aiconsulting/AiConsulting_7.png";
import AiConsulting_8 from "../../assets/images/Aiconsulting/AiConsulting_8.png";

const AIConsulting = () => {
  const navigate = useNavigate();
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [activeExpertiseTab, setActiveExpertiseTab] = useState(0);
  const observerRef = useRef(null);
  const expertiseTabsRef = useRef(null);

  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 120;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      const duration = 1500; // Slower, premium duration
      let start = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        
        // EaseInOutCubic function for cinematic feel
        const easing = percentage < 0.5 
          ? 4 * percentage * percentage * percentage 
          : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

        window.scrollTo(0, startPosition + distance * easing);
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  };

  const scrollExpertiseTabs = (direction) => {
    if (expertiseTabsRef.current) {
      const scrollAmount = 300;
      if (direction === "left") {
        expertiseTabsRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        expertiseTabsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute("data-index"), 10);
          if (!isNaN(index)) {
            setActiveTab(index);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, observerOptions);

    const panes = document.querySelectorAll(".dt-aic-pane-content");
    panes.forEach((pane) => {
      if (pane) observerRef.current.observe(pane);
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const faqs = [
    { q: "How long does a typical AI project take?", a: "Strategy: 1-2 weeks, PoC: ~6 weeks, MVP: up to 3 months, full-scale implementation: 2-3 months depending on data and complexity." },
    { q: "Can I purchase consultancy services only?", a: "Yes, we offer pure strategy consultancy, architecture design, and advisory services without full implementation." },
    { q: "Should I go cloud-based or cloud-agnostic?", a: "We provide both options — based on your data governance, latency, and long-term flexibility needs." },
    { q: "How do you address data privacy?", a: "Strict compliance with GDPR, SOC2, and enterprise-grade encryption, NDA protection always available." },
  ];

  const features = [
    { icon: <FiTrendingUp />, title: "Gain a competitive edge", desc: "AI implementation empowers businesses to stay ahead by reducing operational costs and enabling more competitive pricing. Smarter expense management boosts profitability." },
    { icon: <FiCpu />, title: "Enhance operational efficiency", desc: "Automating workflows with generative AI leads to faster, agile operations, improves market responsiveness, increases revenue, and supports sustainable growth." },
    { icon: <FiLayers />, title: "Accelerate digitalization", desc: "AI and ML unlock innovation across use cases with strategic approach to capitalize on potential while mitigating risks, ensuring continuity and trust." },
    { icon: <FiBarChart2 />, title: "Continuous adaptation", desc: "The rapid evolution of AI demands adaptation. Integrating new tech without disruption helps businesses improve services and maintain long-term relevance." }
  ];

  const services = [
    {
      icon: <FiBarChart2 />,
      title: "AI strategic consultancy",
      desc: "Devopstrio’s AI business consulting scope includes strategic evaluation that helps customers map out their AI transformation route. Our expert assessment scrutinizes your existing landscape in terms of AI preparedness, identifies high-impact opportunities and delivers a clear, prioritized roadmap for implementation.",
      subTitle: "AI evaluation deliverables:",
      features: ["Comprehensive preparedness report", "Insights into opportunities", "Overview of compliance issues"]
    },
    {
      icon: <FiMap />,
      title: "AI strategy and roadmap development",
      desc: "With us, you get artificial intelligence consulting services that provide a structured approach to AI adoption, ensuring alignment with your objectives. The service covers opportunity assessment, identification of high-impact use cases, and the development of a clear implementation plan to drive maximum value.",
      subTitle: "Assets you will obtain:",
      features: ["Adoption roadmap and purposeful strategy", "Risk and ROI assessment", "Tech stack recommendations"]
    },
    {
      icon: <FiTarget />,
      title: "AI feasibility assessment",
      desc: "Devopstrio will assess the eventual practicality and resource-efficiency of your transformative idea – in both tech and strategic business terms – to ensure it aligns with your corporate goals. This will enable you to make well-grounded decisions and avoid costly missteps before investing in full-scale engineering.",
      subTitle: "AI consultants will provide you with:",
      features: ["Feasibility insights grounded in data", "Clear identification of potential risks", "Actionable advice to guide implementation"]
    },
    {
      icon: <FiLayers />,
      title: "AI architecture and design consultancy",
      desc: "The skilled architects from our team translate business intent into resilient, future-proof AI systems. By balancing performance, cost, and vendor specifics, we design hybrid stacks that combine commercial APIs with open-source models, minimize vendor lock-in, and support sustainability goals.",
      subTitle: "Devopstrio’s artificial intelligence consulting services:",
      features: ["Flexible integration plans with open-source fallback options", "End-to-end architecture blueprints", "Cost, energy, and risk modeling offerings"]
    },
    {
      icon: <FiCpu />,
      title: "AI engineering consultancy",
      desc: "Devopstrio's team excels in defining the right tech stack and architectural approach to your initiative. The consultants advise on choosing from proven AI tools and platforms, estimating ownership costs, and shaping a vision that supports long-term scalability.",
      subTitle: "Our AI consulting company will take care of:",
      features: ["Customized selection of AI technologies", "Informed guidance on tools and platforms", "Well-defined development plan"]
    },
    {
      icon: <FiDatabase />,
      title: "Data management consulting",
      desc: "Modern artificial intelligence consulting services make it possible to unlock data-driven opportunities by establishing strong data governance aligned with industry standards. Devopstrio’s AI experts will create properly structured datasets for model training and support the creation of future-ready architectures.",
      subTitle: "Your future outputs:",
      features: ["High-impact data opportunities", "Tailored governance models", "Scalable architecture designs"]
    },
    {
      icon: <FiZap />,
      title: "AI automation and ops consultation",
      desc: "Devopstrio is fully equipped to operationalize AI at scale, building automated pipelines to move models from theory to production. Our AI consultants also implement MLOps practices for continuous delivery, drift detection, and compliance to ensure your data science efforts drive business value.",
      subTitle: "Our AI consulting services include:",
      features: ["Monitoring and observability dashboards", "CI/CD pipeline templates for ML and LLMs", "Governance, security, and audit‑ready guidelines"]
    },
    {
      icon: <FiMessageSquare />,
      title: "Prompt and context engineering",
      desc: "With our AI consulting company, effective prompts will become your competitive leverage. Devopstrio will design prompt libraries, retrieval‑augmented context pipelines, and evaluation frameworks. This will turn large language models into both dependable and domain‑specific tools.",
      subTitle: "Devopstrio is a reliable partner for:",
      features: ["Role‑based and reusable prompt templates", "Retrieval‑augmented context schemas", "CI/CD‑integrated prompt testing"]
    },
  ];


  const partnerships = [
    { icon: <FiTarget />, title: "AI-driven strategy", desc: "Devopstrio's team will design value-adding roadmaps tailored to your corporate priorities, helping you turn investment into tangible impact while accounting for such key factors as technological trends, available resources, and evolving legal guidelines." },
    { icon: <FiAnchor />, title: "Tangible business value", desc: "AI strategies guarantee quick, measurable impact, whether that means increased revenue, reduced costs, or both. While security, compliance, and ethics remain a constant priority, we will focus on making responsible AI deliver real value to your business." },
    { icon: <FiGlobe />, title: "End-to-end delivery experience", desc: "Full AI lifecycle, from initial assessment and design to development, deployment, and optimization. Whether you are starting from scratch or scaling an existing solution, we are equipped to advise at every stage of the AI delivery lifecycle." }
  ];

  const successStories = [
    { icon: <FiTrendingUp />, title: "Optimizing operations and funding with an AI forecasting tool", desc: "Austria-based fintech: reduced operational costs by 18% and improved cash flow forecast accuracy by 27%.", location: "Austria" },
    { icon: <FiBarChart2 />, title: "Transform operations with expert-level AI management consulting", desc: "Global logistics enterprise: increased efficiency by 30% and reduced costs by 25%.", location: "France" }
  ];

  const expertiseData = [
    {
      category: "COMMON AI FEATURES",
      image: AiConsulting_10,
      title: "Core AI capabilities to power growth:",
      points: [
        "Natural language processing and intelligent chatbots;",
        "Computer vision and advanced image recognition;",
        "Predictive modeling and deep learning algorithms;",
        "Agentic AI systems for autonomous task resolution."
      ]
    },
    {
      category: "FINTECH AND BANKING",
      image: AiConsulting_2,
      title: "Transforming financial services through:",
      points: [
        "Automated fraud detection and dynamic risk assessment;",
        "Algorithmic trading and predictive market analysis;",
        "Personalized banking experiences and virtual assistants;",
        "Streamlined regulatory compliance monitoring."
      ]
    },
    {
      category: "HEALTHCARE",
      image: AiConsulting_3,
      title: "AI drives breakthroughs by:",
      points: [
        "Accelerating research and improving patient outcomes;",
        "Facilitating discovery via scientific and clinical research;",
        "Elevating diagnostics via anomaly detection and early symptom analysis;",
        "Enhancing patient care powered by AI-driven insights and personalization."
      ]
    },
    {
      category: "SALES AND MARKETING",
      image: AiConsulting_4,
      title: "Transforming marketing via:",
      points: [
        "Hyper-personalized customer journeys and content delivery;",
        "Predictive churn analysis and proactive retention strategies;",
        "AI-driven sentiment analysis and trend forecasting;",
        "Dynamic pricing models for optimized revenue growth."
      ]
    },
    {
      category: "ENTERPRISE",
      image: AiConsulting_5,
      title: "Empowering enterprises via:",
      points: [
        "End-to-end process automation and operational efficiency;",
        "Data-driven strategic decision making and forecasting;",
        "Supply chain optimization and predictive maintenance;",
        "Enhanced employee productivity and advanced HR analytics."
      ]
    },
    {
      category: "MANUFACTURING",
      image: AiConsulting_6,
      title: "Revolutionizing manufacturing with:",
      points: [
        "Predictive maintenance for reduced operational downtime;",
        "Automated quality control using advanced computer vision;",
        "Supply chain management and precise inventory optimization;",
        "Robotics integration and autonomous factory systems."
      ]
    },
    {
      category: "RETAIL AND ECOMMERCE",
      image: AiConsulting_7,
      title: "Elevating retail experiences by:",
      points: [
        "Visual search capabilities and smart product recommendations;",
        "Demand forecasting and automated inventory management;",
        "Cashierless checkout and autonomous store operations;",
        "Hyper-targeted dynamic promotions and customer segmentation."
      ]
    },
    {
      category: "EGOVERNMENT",
      image: AiConsulting_8,
      title: "Modernizing public services via:",
      points: [
        "Automated document processing and digital citizen portals;",
        "Smart city infrastructure management and predictive planning;",
        "Enhanced cybersecurity and fraud detection for public records;",
        "AI-driven policy analysis and efficient resource allocation."
      ]
    }
  ];

  const missionItems = [
    "Securing tangible cost-savings and increased revenue generation",
    "Deeper insights & foresight through AI chatbots with data enrichment",
    "End-to-end task automation with agentic AI and process optimization",
    "Advanced engagement and competitive advantage via conversational AI"
  ];

  const insights = [
    { icon: <FiTrendingUp />, title: "Predictive Analytics in Healthcare", desc: "Predictive analytics can transform healthcare by identifying patterns and anomalies, enabling early intervention and personalized treatment plans." },
    { icon: <FiSearch />, title: "Overview of Healthcare AI Solutions", desc: "Overview of the latest AI solutions tailored to the healthcare industry, including natural language processing, computer vision, and predictive analytics." },
    { icon: <FiActivity />, title: "Generative AI", desc: "Generative AI is revolutionizing healthcare by creating synthetic data and models that can augment clinical decision-making and accelerate drug discovery." },
    { icon: <FiDatabase />, title: "RAG Systems", desc: "RAG systems are a key component of generative AI, providing context and relevance to LLM outputs." },
    { icon: <FiCloud />, title: "Advanced AI Platforms", desc: "Advanced AI platforms offer comprehensive solutions for building, deploying, and managing AI applications in healthcare." },
    { icon: <FiTarget />, title: "AI in Software Testing", desc: "AI in software testing is enhancing quality assurance processes by automating repetitive tasks and improving test coverage." },
    { icon: <FiGlobe />, title: "Global Logistics Optimization", desc: "Global logistics enterprises are leveraging AI to optimize their supply chains, reduce costs, and enhance customer satisfaction." },
    { icon: <FiTrendingUp />, title: "Future Insights & Forecasting", desc: "Future insights and forecasting capabilities will enable organizations to anticipate patient needs, optimize resource allocation, and improve overall performance." }
  ];

  return (
    <div className="dt-aic-wrapper">
      {/* Hero Section */}
      <Servicehero />


      <div className="dt-aic-container">
        {/* Empower with AI Section */}
        <section className="dt-aic-section-spacing">
          <h2 className="dt-aic-section-title">Empower your business with <span className="dt-aic-gradient-text">AI</span></h2>
          <div className="dt-aic-grid-2">
            {features.map((feature, idx) => (
              <div key={idx} className="dt-aic-feature-card">
                {feature.icon}
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
                <a href="#" className="dt-aic-card-link">Learn more →</a>
              </div>
            ))}
          </div>
        </section>

        {/* AI Services Section (Solutions Explorer Style) */}
        <section className="dt-aic-solutions-explorer">
          <div className="dt-aic-container">
            <div className="dt-aic-explorer-layout">
              <div className="dt-aic-explorer-nav">
                <h2 className="dt-aic-explorer-heading">AI services</h2>
                <div className="dt-aic-nav-list">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      className={`dt-aic-nav-link ${activeTab === index ? "active" : ""}`}
                      onClick={() => {
                        setActiveTab(index);
                        scrollToElement(`dt-pane-${index}`);
                      }}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="dt-aic-content-viewport">
                {services.map((service, index) => (
                  <div
                    key={index}
                    id={`dt-pane-${index}`}
                    className={`dt-aic-pane-content ${activeTab === index ? "pane-active" : ""}`}
                    data-index={index}
                  >
                    <div className="dt-aic-pane-header">
                      <span className="dt-aic-pane-id">0{index + 1}</span>
                      <h3 className="dt-aic-pane-title">{service.title}</h3>
                    </div>
                    <p className="dt-aic-pane-description">{service.desc}</p>

                    <div className="dt-aic-pane-specs">
                      <h4>{service.subTitle}</h4>
                      <div className="dt-aic-specs-list">
                        {service.features.map((feature, i) => (
                          <div key={i} className="dt-aic-spec-item">
                            <FiCheckCircle className="dt-aic-feature-icon" />
                            <span>{feature};</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Strategic AI Partnership */}
        <section className="dt-aic-section-spacing dt-aic-black-bg">
          <div className="dt-aic-container">
            <h2 className="dt-aic-section-title">Strategic AI partnership starts here</h2>
            <div className="dt-aic-grid-3">
              {partnerships.map((item, idx) => (
                <div key={idx} className="dt-aic-feature-card dt-aic-dark-card-custom">
                  <div className="dt-aic-icon-wrapper-dark">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="dt-aic-stats-banner">
              <div className="dt-aic-stat-item-banner">
                <div className="dt-aic-stat-number-banner">150+</div>
                <div className="dt-aic-stat-text-banner">AI and data<br />analytics experts</div>
              </div>
              <div className="dt-aic-stat-item-banner">
                <div className="dt-aic-stat-number-banner">5+</div>
                <div className="dt-aic-stat-text-banner">years of AI and ML<br />consulting experience</div>
              </div>
              <div className="dt-aic-stat-item-banner">
                <div className="dt-aic-stat-number-banner">10</div>
                <div className="dt-aic-stat-text-banner">AI products launched</div>
              </div>
            </div>
          </div>
        </section>
        <AITeam type="consulting" onScheduleClick={() => scrollToElement("Scroll")} />

        {/* Success Stories */}
        <section className="dt-aic-section-spacing">
          <h2 className="dt-aic-section-title">Success stories</h2>
          <div className="dt-aic-success-grid">
            {successStories.map((story, idx) => (
              <div key={idx} className="dt-aic-success-card">
                {story.icon}
                <h3>{story.title}</h3>
                <p>{story.desc}</p>
                <a href="#" className="dt-aic-card-link">Read more →</a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="dt-aic-testimonial-section">
          <div className="dt-aic-testimonial-card">
            <FiMessageSquare className="dt-aic-quote-icon" />
            <p className="dt-aic-testimonial-quote">"Devopstrio customers can expect a successful partnership"</p>
            <p className="dt-aic-testimonial-text">
              Presently, the app Devopstrio built boasts 60,000 users, 10,000 of whom are doctors and the remaining customers, with plans to expand.
              Along the way, dedication to success, technical skill, and collaborative team set them apart.
            </p>
            <div className="dt-aic-testimonial-author">
              <strong>CTO at Universkin</strong> <span>| France</span>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="dt-aic-section-spacing">
          <div className="dt-aic-container">
            <h2 className="dt-aic-section-title">Our AI expertise</h2>
            <div className="dt-aic-expertise-wrapper">
              <div className="dt-aic-expertise-nav-container">
                <button
                  className="dt-aic-expertise-nav-btn"
                  onClick={() => scrollExpertiseTabs('left')}
                >
                  <FiChevronLeft />
                </button>
                <div className="dt-aic-expertise-tabs" ref={expertiseTabsRef}>
                  {expertiseData.map((tab, idx) => (
                    <button
                      key={idx}
                      className={`dt-aic-expertise-tab ${activeExpertiseTab === idx ? "active" : ""}`}
                      onClick={() => setActiveExpertiseTab(idx)}
                    >
                      {tab.category}
                    </button>
                  ))}
                </div>
                <button
                  className="dt-aic-expertise-nav-btn"
                  onClick={() => scrollExpertiseTabs('right')}
                >
                  <FiChevronRight />
                </button>
              </div>

              <div className="dt-aic-expertise-content" key={activeExpertiseTab}>
                <div className="dt-aic-expertise-image">
                  <img src={expertiseData[activeExpertiseTab].image} alt={expertiseData[activeExpertiseTab].category} />
                </div>
                <div className="dt-aic-expertise-details dt-aic-dark-card-custom">
                  <h3>{expertiseData[activeExpertiseTab].title}</h3>
                  <ul className="dt-aic-expertise-points">
                    {expertiseData[activeExpertiseTab].points.map((point, idx) => (
                      <li key={idx}>
                        <FiCheck className="dt-aic-expertise-check" /> <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="dt-aic-section-spacing dt-aic-faq-section-bg">
          <div className="dt-aic-container">
            <h2 className="dt-aic-section-title">Frequently Asked Questions</h2>
            <div className="dt-aic-faq-container">
              {faqs.map((faq, idx) => (
                <div key={idx} className={`dt-aic-faq-item ${activeFaq === idx ? "active" : ""}`}>
                  <div className="dt-aic-faq-question" onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}>
                    <span>{faq.q}</span>
                    <span className="dt-aic-faq-icon">
                      {activeFaq === idx ? <FiMinus /> : <FiPlus />}
                    </span>
                  </div>
                  <div className={`dt-aic-faq-answer ${activeFaq === idx ? "open" : ""}`}>
                    <p>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Consultation Form Component */}
        <AIConsultationForm 
          id="Scroll"
          title="Let's build your <span class='dt-aic-gradient-text'>AI Strategy</span>"
          subjectPrefix="AI Strategy Consultation"
        />
      </div>
    </div>
  );
};

export default AIConsulting;