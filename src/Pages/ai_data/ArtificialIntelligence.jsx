import React, { useState, useEffect, useRef } from "react";
import "../../Style/ai_data/ArtificialIntelligence.css";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiCpu,
    FiDatabase,
    FiZap,
    FiShield,
    FiLayers,
    FiUsers,
    FiCheckCircle,
    FiArrowRight,
    FiPlay,
    FiTrendingUp,
    FiActivity,
    FiCode,
    FiSearch,
    FiStar,
    FiChevronLeft,
    FiChevronRight,
} from "react-icons/fi";
import useSEO from "../../hooks/useSEO";

// Components
import Cta from "../../components/Cta/Cta";
import Serviceshero from "../../components/Hero/Serviceshero";

// images
import trandes_5 from "../../assets/images/trandes_5.jpg";
import service_1 from "../../assets/images/Ai_build_case/service_1.png"
import service_2 from "../../assets/images/Ai_build_case/service_2.png"
import service_3 from "../../assets/images/Ai_build_case/service_3.png"
import service_4 from "../../assets/images/Ai_build_case/service_4.png"
import service_5 from "../../assets/images/Ai_build_case/service_5.png"
import service_6 from "../../assets/images/Ai_build_case/service_6.png"
import service_7 from "../../assets/images/Ai_build_case/service_7.png"
import service_8 from "../../assets/images/Ai_build_case/service_8.png"
import service_9 from "../../assets/images/Ai_build_case/service_9.png"
import service_10 from "../../assets/images/Ai_build_case/service_10.png"
import Vision_1 from "../../assets/images/Ai_build_case/Vision_1.jpg"


const ArtificialIntelligence = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeBenefitSet, setActiveBenefitSet] = useState(0);
    const scrollRef = useRef(null);

    useSEO({
        title: "AI Software Development Services & Custom Solutions | Devopstrio",
        description: "Empower your business with custom AI solutions. From Generative AI to Predictive Analytics, Devopstrio delivers enterprise-grade AI software development, NLP, and computer vision services.",
        keywords: "AI software development services, custom AI solutions, Generative AI development, predictive analytics enterprise, AI transformation consulting, AI chatbot NLP, legacy system modernization, AI document management, Devopstrio AI",
        ogTitle: "Enterprise AI Software Development Services | Devopstrio",
        ogDescription: "Scale operations with AI copilots, anticipate market shifts with predictive intelligence, and automate complex logic with agentic workflows.",
        ogImage: "https://devopstrio.com/assets/images/devopstrio-og-ai.jpg",
        ogUrl: "https://devopstrio.com/services/artificial-intelligence",
        canonicalUrl: "https://devopstrio.com/services/artificial-intelligence"
    });

    const useCases = [
        {
            title: "AI transformation consulting",
            desc: "Artificial intelligence is evolving, with major breakthroughs occurring ceaselessly. In such an environment, relying on a coherent strategic vision is a cardinal factor. Contact our AI app development company to shape this vision and pin down priorities, routes, and steps – from purely practical tech stack issues to an all-inclusive roadmap.",
            subTitle: "Devopstrio is fully equipped to help with:",
            features: ["AI strategy and roadmap", "AI maturity assessment", "Risk and compliance management"],
        },
        {
            title: "AI solution implementation",
            desc: "In the rapidly evolving landscape of artificial intelligence, organizations need robust solutions that not only address their current challenges but also scale with future advancements. Devopstrio specializes in AI software development, delivering tailored applications and systems that employ the potential of AI to drive innovation and effectiveness.",
            subTitle: "Reach out to us for:",
            features: ["Custom AI solutions", "End-to-end AI solution development", "AI software maintenance and support"],
        },
        {
            title: "Gen AI solution development",
            desc: "Harness the transformative power of generative AI with our expert-level services. Move beyond isolated use cases to develop a production-ready, comprehensive, value-led approach that enhances every aspect of your organization’s value chain.",
            subTitle: "What our AI developers do:",
            features: [
                "Deliver unique AI solutions tailored to your specific needs",
                "Carry out Gen AI solution development for content generation, multimedia and voice processing",
                "Integrate Gen AI solutions into your existing ecosystems",
            ],
        },
        {
            title: "AI-fueled legacy modernization",
            desc: "Upgrade outdated and hard-to-maintain systems by employing AI technologies that can enhance efficiency, automate manual workflows, improve scalability, and reduce technical debt. Devopstrio helps revitalize even 8–15-year-old solutions so they become faster, safer, easier to support, and ready for growth.",
            subTitle: "Our AI experts assist with the following:",
            features: [
                "Modernizing legacy architectures with AI-enhanced solutions",
                "Automating manual and spreadsheet-based workflows with AI",
                "AI-assisted legacy system migration, including code, data, and infrastructure",
            ],
        },
        {
            title: "Data platform implementation",
            desc: "Unlock the full potential of your data with our comprehensive data services. Devopstrio’s expertise helps organizations leverage data as a strategic asset, enabling purposeful decision-making and nurturing innovation across business processes.",
            subTitle: "Devopstrio provides assistance with:",
            features: ["AI data readiness and assessment", "AI data platform implementation", "AI data platform optimization"],
        },
        {
            title: "AI chatbots",
            desc: "Enhance your customer experience with intelligent chatbots that understand intent and context. We build conversational agents that automate support, guide users through complex processes, and provide 24/7 engagement without compromising quality.",
            subTitle: "Our chatbot capabilities include:",
            features: ["Advanced NLP/NLU integration", "Multi-platform deployment", "Seamless human-agent handoff"],
        },
        {
            title: "AI customer support",
            desc: "Revolutionize your support desk with AI-driven automation. From sentiment analysis to automated ticket routing, we implement systems that learn from every interaction to provide faster, more accurate responses to your customers.",
            subTitle: "Optimizing support with:",
            features: ["Voice and text sentiment analysis", "Predictive support automation", "Automated knowledge base generation"],
        },
        {
            title: "AI document management",
            desc: "Automate the lifecycle of your corporate knowledge. Our AI solutions classify, index, and extract data from millions of documents, turning your digital archives into a searchable, actionable intelligence base.",
            subTitle: "Transform documents with:",
            features: ["Intelligent OCR and data capture", "Automated compliance monitoring", "Smart archiving and classification"],
        },
        {
            title: "AI recommendations",
            desc: "Increase conversion rates and user loyalty with sophisticated recommendation engines. We deploy deep learning models that predict user needs and surface the right content or product at the exact moment of intent.",
            subTitle: "Driving growth through:",
            features: ["Personalized search results", "Content affinity mapping", "Real-time user behavior modeling"],
        },
        {
            title: "AI inventory management",
            desc: "Eliminate supply chain uncertainty with predictive inventory modeling. Our AI systems analyze seasonal trends, market fluctuations, and logistics data to ensure optimal stock levels and reduce overhead costs.",
            subTitle: "Inventory precision with:",
            features: ["Demand forecasting and planning", "Automated replenishment workflows", "Warehouse layout optimization"],
        },
    ];

    const aiBuildCases = [
        {
            image: service_7,
            category: 'Customer Experience',
            title: 'Scale Service Operations with AI Copilots',
            desc: 'Deploy intent-aware assistants that handle complex customer queries, reducing response times while maintaining a personal touch at scale.',
            footer: 'Case Study'
        },
        {
            image: service_2,
            category: 'Operations',
            title: 'Anticipate Market Shifts with Predictive Intel',
            desc: 'Transform historical data into future certainty with high-precision ML models that forecast demand and mitigate operational risks in real-time.',
            footer: 'Technical Paper'
        },
        {
            image: service_8,
            category: 'Growth & Marketing',
            title: 'Personalize at Scale with Real-Time Adaptivity',
            desc: 'Drive massive user retention with deep learning algorithms that deliver hyper-relevant experiences tailored to individual behavior in milliseconds.',
            footer: 'Article'
        },
        {
            image: service_4,
            category: 'Process Automation',
            title: 'Automate Complex Logic with Agentic Workflows',
            desc: 'Orchestrate multi-step business processes using autonomous agents that reason, plan, and execute across your entire enterprise software stack.',
            footer: 'Video Overview'
        },
        {
            image: service_9,
            category: 'Healthcare',
            title: 'Precision Diagnostics with Computer Vision',
            desc: 'Assist medical professionals with AI models that detect anomalies in imaging with superhuman accuracy, accelerating treatment decisions.',
            footer: 'Research Report'
        },
        {
            image: service_3,
            category: 'Finance',
            title: 'Autonomous Fraud Detection Networks',
            desc: 'Secure trillions in transactions with real-time neural networks that identify fraudulent patterns before they impact your bottom line.',
            footer: 'White Paper'
        },
        {
            image: service_5,
            category: 'Manufacturing',
            title: 'Predictive Maintenance for Smart Factories',
            desc: 'Eliminate downtime with IoT-integrated AI that predicts equipment failure weeks in advance, optimizing global supply chain logistics.',
            footer: 'Success Story'
        },
        {
            image: service_10,
            category: 'Cybersecurity',
            title: 'Self-Healing Security Infrastructures',
            desc: 'Deploy AI-driven defense systems that autonomously patch vulnerabilities and neutralize zero-day threats in milliseconds.',
            footer: 'Security Audit'
        },
        {
            image: service_1,
            category: 'Supply Chain',
            title: 'Real-Time Logistics Orchestration',
            desc: 'Optimize global delivery networks with AI that reroutes shipments dynamically based on weather, port congestion, and fuel costs.',
            footer: 'Case Study'
        },
        {
            image: service_6,
            category: 'Retail',
            title: 'Hyper-Personalized Retail Experiences',
            desc: 'Drive unprecedented customer loyalty with AI recommendation engines that adapt to individual preferences in real-time, increasing conversion rates exponentially.',
            footer: 'Success Story'
        }
    ];

    const totalOriginalCards = aiBuildCases.length;
    const [currentSlide, setCurrentSlide] = useState(totalOriginalCards);
    const [isReseting, setIsReseting] = useState(false);
    const extendedCases = [...aiBuildCases, ...aiBuildCases, ...aiBuildCases];

    const nextSlide = () => { if (!isReseting) setCurrentSlide((prev) => prev + 1); };
    const prevSlide = () => { if (!isReseting) setCurrentSlide((prev) => prev - 1); };

    const handleAnimationComplete = () => {
        if (currentSlide >= totalOriginalCards * 2 || currentSlide <= totalOriginalCards - 3) {
            setIsReseting(true);
            const normalized = (currentSlide % totalOriginalCards) + totalOriginalCards;
            setCurrentSlide(normalized);
        }
    };

    useEffect(() => {
        if (isReseting) {
            const timer = setTimeout(() => setIsReseting(false), 50);
            return () => clearTimeout(timer);
        }
    }, [isReseting]);

    useEffect(() => {
        const autoSlideTimer = setInterval(() => { nextSlide(); }, 3000);
        return () => clearInterval(autoSlideTimer);
    }, [currentSlide, isReseting]);

    const benefits = [
        { icon: <FiTrendingUp />, title: "Process automation", desc: "AI implementation can cut costs, minimize the impact of human errors, and speed up the execution of repetitive tasks." },
        { icon: <FiDatabase />, title: "Increased revenue", desc: "Nurture your revenue streams with AI for product discovery, advanced micro-segmentation, personalization, and more." },
        { icon: <FiLayers />, title: "Strategic data insights", desc: "AI systems effortlessly and precisely navigate vast datasets, highlighting major patterns to guide strategic decisions." },
        { icon: <FiZap />, title: "Real-time Analytics", desc: "Monitor your business performance in real-time with AI-driven dashboards that provide instant actionable intelligence." },
        { icon: <FiShield />, title: "Predictive Security", desc: "Protect your enterprise with AI models that predict and mitigate security threats before they impact your operations." },
        { icon: <FiCpu />, title: "Cognitive Computing", desc: "Leverage human-like reasoning to solve complex business problems through advanced natural language processing." },
    ];

    useEffect(() => {
        const observerOptions = { root: null, rootMargin: "-20% 0px -60% 0px", threshold: 0 };
        const handleIntersect = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute("data-index"));
                    setActiveTab(index);
                }
            });
        };
        const scrollObserver = new IntersectionObserver(handleIntersect, observerOptions);
        const serviceItems = document.querySelectorAll(".dt-pane-content");
        serviceItems.forEach((item) => scrollObserver.observe(item));

        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) entry.target.classList.add("dt-reveal-active");
            });
        }, { threshold: 0.1 });

        document.querySelectorAll(".dt-main-section").forEach((section) => revealObserver.observe(section));
        return () => { scrollObserver.disconnect(); revealObserver.disconnect(); };
    }, []);

    return (
        <div className="dt-intelligence-portal">
            <Serviceshero />

            {/* TRUST SECTION */}
            <section className="dt-main-section dt-trust-overview">
                <div className="dt-content-boundary">
                    <div className="dt-metric-grid">
                        <div className=".dt-metric-cardss">
                            <h3>TOP 1000</h3>
                            <p>Global Outsourcing Companies</p>
                        </div>
                        <div className="dt-vertical-separator"></div>
                        <div className="dt-metric-cardss">
                            <div className="dt-platform-rating">
                                <div className="dt-stars-group">
                                    <FiStar className="dt-star-shape filled" />
                                    <FiStar className="dt-star-shape filled" />
                                    <FiStar className="dt-star-shape filled" />
                                    <FiStar className="dt-star-shape filled" />
                                    <FiStar className="dt-star-shape" />
                                </div>
                                <span className="dt-numeric-value">4.1 / 5</span>
                            </div>
                            <p>Review Score on Clutch</p>
                        </div>
                        <div className="dt-vertical-separator"></div>
                        <div className="dt-metric-cardss">
                            <h3>80+</h3>
                            <p>AI Projects Delivered</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* AI SERVICES SECTION */}     
            <section className="dt-main-section dt-solutions-explorer">
                <div className="dt-content-boundary">
                    <div className="dt-explorer-layout">
                        <div className="dt-explorer-nav">
                            <h2 className="dt-explorer-heading">AI services</h2>
                            <div className="dt-nav-list">
                                {useCases.map((useCase, index) => (
                                    <button
                                        key={index}
                                        className={`dt-nav-link ${activeTab === index ? "active" : ""}`}
                                        onClick={() => {
                                            setActiveTab(index);
                                            document.getElementById(`dt-pane-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                                        }}
                                    >
                                        {useCase.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="dt-content-viewport">
                            {useCases.map((useCase, index) => (
                                <div
                                    key={index}
                                    id={`dt-pane-${index}`}
                                    className={`dt-pane-content ${activeTab === index ? "pane-active" : ""}`}
                                    data-index={index}
                                >
                                    <div className="dt-pane-header">
                                        <span className="dt-pane-id">0{index + 1}</span>
                                        <h3 className="dt-pane-title">{useCase.title}</h3>
                                    </div>
                                    <p className="dt-pane-description">{useCase.desc}</p>

                                    <div className="dt-pane-specs">
                                        <h4>{useCase.subTitle}</h4>
                                        <div className="dt-specs-list">
                                            {useCase.features.map((feature, i) => (
                                                <div key={i} className="dt-spec-item">
                                                    <FiCheckCircle className="dt-feature-icon" />
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
       

            {/* WHAT YOU CAN BUILD SECTION */}
            <section className="dt-main-section dt-showcase-slider">
                <div className="dt-content-boundary">
                    <div className="dt-section-intro dt-cinematic-style">
                        <h2 className="dt-section-heading">What You Can <span className="dt-brand-gradient">Build</span> with AI</h2>
                        <div className="dt-heading-accent"></div>
                    </div>

                    <div className="dt-slider-window">
                        <button className="dt-slider-control left" onClick={prevSlide}><FiArrowRight style={{ transform: 'rotate(180deg)' }} /></button>
                        <div className="dt-slider-mask">
                            <motion.div 
                                className="dt-slider-track"
                                animate={{ x: `-${currentSlide * (100 / 3)}%` }}
                                transition={isReseting ? { duration: 0 } : { type: "tween", ease: "circOut", duration: 0.8 }}
                                onAnimationComplete={handleAnimationComplete}
                            >
                                {extendedCases.map((item, i) => (
                                    <div key={i} className="dt-card-anchor">
                                        <div className="dt-showcase-card">
                                            <div className="dt-card-media">
                                                <img src={item.image} alt={item.title} />
                                            </div>
                                            <div className="dt-card-info">
                                                <span className="dt-card-tag">{item.category}</span>
                                                <h4 className="dt-card-name">{item.title}</h4>
                                                <p className="dt-card-description">{item.desc}</p>
                                                <div className="dt-card-action">{item.footer}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                        <button className="dt-slider-control right" onClick={nextSlide}><FiArrowRight /></button>
                    </div>

                    <div className="dt-slider-dots">
                        {aiBuildCases.map((_, index) => (
                            <div
                                key={index}
                                className={`dt-dot-indicator ${(currentSlide % totalOriginalCards) === index ? 'active' : ''}`}
                                onClick={() => {
                                    setIsReseting(false);
                                    setCurrentSlide(index + totalOriginalCards);
                                }}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* VISION & MISSION SECTION */}
            <section className="dt-main-section dt-brand-philosophy">
                <div className="dt-content-boundary">
                    <div className="dt-section-intro dt-cinematic-style">
                        <span className="dt-sub-label">Vision & Mission</span>
                        <h2 className="dt-section-heading">Unveiling Our <span className="dt-brand-gradient">Future</span> and Focus</h2>
                        <p className="dt-section-lead">Exploring our vision and mission, as we aim to revolutionize enterprise AI by providing innovative and intuitive solutions.</p>
                    </div>

                    <div className="dt-bento-layout">
                        <div className="dt-bento-cell dt-cell-hero">
                            <img src={Vision_1} alt="Team" />
                        </div>
                        <div className="dt-bento-cell dt-cell-dark dt-cell-narrative">
                            <span className="dt-cell-index">01</span>
                            <h3>Mission</h3>
                            <p className="dt-cell-copy">We are united by one mission: to empower enterprises and revolutionize software through intelligent AI orchestration.</p>
                        </div>
                        <div className="dt-bento-cell dt-cell-dark dt-cell-stat">
                            <span className="dt-cell-figure">100%</span>
                            <h3>Dedication</h3>
                            <p className="dt-cell-copy">We are committed to providing you with 100% dedication and excellence in every AI model we build.</p>
                        </div>
                        <div className="dt-bento-cell dt-cell-accent dt-cell-portfolio">
                            <span className="dt-cell-figure">80+</span>
                            <h3>AI Projects</h3>
                            <p className="dt-cell-copy">Meet our talented team of 50+ experts driving AI innovation at Devopstrio.</p>
                        </div>
                        <div className="dt-bento-cell dt-cell-socials">
                            <div className="dt-social-node brand"><FiDatabase /></div>
                            <div className="dt-social-node white"><FiCpu /></div>
                            <div className="dt-social-node dark"><FiShield /></div>
                            <div className="dt-social-node white"><FiActivity /></div>
                        </div>
                        <div className="dt-bento-cell dt-cell-dark dt-cell-innovation">
                            <span className="dt-cell-figure">100%</span>
                            <h3>Innovation</h3>
                            <p className="dt-cell-copy">We believe in nurturing 100% innovation to fuel your business growth.</p>
                        </div>
                        <div className="dt-bento-cell dt-cell-portrait">
                            <img src={trandes_5} alt="Collaboration" />
                        </div>
                    </div>
                </div>
            </section>

            {/* PARTNERS SECTION */}
            <section className="dt-main-section dt-client-reel">
                <div className="dt-content-boundary">
                    <div className="dt-reel-wrapper">
                        <span className="dt-reel-label">TRUSTED BY INDUSTRY LEADERS:</span>
                        <div className="dt-logo-track">
                            <div className="dt-logo-item">MICROSOFT</div>
                            <div className="dt-logo-item">AWS</div>
                            <div className="dt-logo-item">GOOGLE</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BENEFITS RUNNING SLIDER */}
            <section className="dt-main-section dt-marquee-benefits">
                <div className="dt-content-boundary">
                    <div className="dt-section-intro">
                        <h2 className="dt-section-heading">Use AI to Drive <span className="dt-brand-gradient">Innovation</span> and Growth</h2>
                    </div>

                    <div className="dt-marquee-window">            
                        <div className="dt-marquee-rail">
                          {benefits.map((benefit, index) => (
                            <div key={`bm1-${index}`} className="dt-marquee-card">
                              <div className="dt-marquee-icon">{benefit.icon}</div>
                              <h3>{benefit.title}</h3>
                              <p>{benefit.desc}</p>
                            </div>
                          ))}
                          {benefits.map((benefit, index) => (
                            <div key={`bm2-${index}`} className="dt-marquee-card">
                              <div className="dt-marquee-icon">{benefit.icon}</div>
                              <h3>{benefit.title}</h3>
                              <p>{benefit.desc}</p>
                            </div>
                          ))}
                        </div>
                    </div>

                    <div className="dt-floating-metrics">
                        <div className="dt-metric-unit">
                            <span className="dt-metric-number">20%</span>
                            <span className="dt-metric-text">gains in productivity<br />and speed to market</span>
                        </div>
                        <div className="dt-metric-unit">
                            <span className="dt-metric-number">30%</span>
                            <span className="dt-metric-text">revenue growth via<br />AI-enabled products</span>
                        </div>
                        <div className="dt-metric-unit">
                            <span className="dt-metric-number">24/7</span>
                            <span className="dt-metric-text">support with AI<br />virtual assistants</span>
                        </div>
                    </div>
                </div>
            </section>
            <Cta />
        </div>
    );
};

export default ArtificialIntelligence;
