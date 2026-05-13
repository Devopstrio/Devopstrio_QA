import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiArrowRight, FiShield, FiCpu, FiUserCheck, FiActivity, FiChevronLeft, FiChevronRight, FiLock, FiFileText, FiGlobe, FiCheckCircle, FiStar, FiChevronDown } from 'react-icons/fi';
import { FaQuoteLeft, FaStar as FaStarSolid } from 'react-icons/fa';
import '../../Style/platform/Healthcare.css';

// Components
import AuthorityInfoBar from '../../components/Navbar/AuthorityInfoBar';
import Newsletter from '../../components/Newsletter/Newsletter';
import Cta from '../../components/Cta/Cta';


//========== Images ======== 
import mareesh from "../../assets/images/marees_dev.png"

const Healthcare = () => {
    const navigate = useNavigate();
    const [activeService, setActiveService] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);
    const [activeAdvisor, setActiveAdvisor] = useState(0);
    const [trustIndex, setTrustIndex] = useState(0);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const trustLogos = [
        { id: 1, title: "ISO/IEC 27001", img: "/images/Logos/ISO.png", lbl: "Information Security" },
        { id: 2, title: "ISO 9001", img: "/images/Logos/ISO.png", lbl: "Quality Management" },
        { id: 3, title: "ISO 13485", img: "/images/Logos/ISO.png", lbl: "Medical Devices" },
        { id: 4, title: "HIPAA", img: "/images/Logos/HIPAA.png", lbl: "Health Data Privacy" },
        { id: 5, title: "GDPR", img: "/images/Logos/GDPR.png", lbl: "Data Protection" },
        { id: 6, title: "FDA", img: "/images/Logos/FDA.png", lbl: "Food & Drug Admin" },
        { id: 7, title: "NIST", img: "/images/Logos/NIST.png", lbl: "Cybersecurity Framework" }
    ];

    const metrics = [
        { 
            val: "250+", 
            lbl: "healthcare domain experts",
            desc: "Devopstrio provides healthcare domain expertise to design and build compliant digital health systems, ensuring regulatory alignment and high-quality software outcomes."
        },
        { 
            val: "230+", 
            lbl: "healthcare clients around the world",
            desc: "Devopstrio delivers healthcare software solutions across global markets, enabling scalable system performance and consistent long-term client outcomes."
        },
        { 
            val: "30", 
            lbl: "clinicians, researchers and experts",
            desc: "Devopstrio integrates clinical and research expertise into software development, improving solution accuracy, usability, and real-world effectiveness."
        }
    ];

    const capabilities = [
        {
            icon: <FiActivity />,
            title: "Healthcare analytics",
            p: "Advanced data processing to extract actionable insights from clinical and operational data, enabling predictive care and optimization."
        },
        {
            icon: <FiCpu />,
            title: "Internet of Medical Things",
            p: "Secure connectivity for medical devices and wearable sensors to facilitate real-time monitoring and remote diagnostics."
        },
        {
            icon: <FiShield />,
            title: "Medical image analysis",
            p: "AI-driven solutions for precise processing and interpretation of radiological images, pathology slides, and diagnostic scans."
        },
        {
            icon: <FiUserCheck />,
            title: "Patient engagement",
            p: "Interactive platforms that empower patients through personalized education, appointment scheduling, and treatment adherence."
        }
    ];

    const services = [
        {
            title: "Healthcare IT support and maintenance",
            p: "On top of healthcare product development, we ensure that your existing healthcare software solutions and entire systems run smoothly and efficiently around the clock.",
            list: ["Launch and go-live support", "Post-production updates", "Ongoing monitoring", "Clinical environment support"]
        },
        {
            title: "Legacy software modernization",
            p: "We modernize legacy healthcare systems to reduce technical debt, improve performance, and ensure compliance without disrupting clinical operations.",
            list: ["Legacy system audit", "Refactoring EHRs", "Cloud migration", "API integration", "Compliance alignment"]
        },
        {
            title: "Healthcare IT security services",
            p: "We secure healthcare IT infrastructures to protect sensitive patient data, ensure regulatory compliance, and maintain operational resilience across clinical and digital systems.",
            list: ["Security risk assessment", "Cybersecurity controls", "Continuous monitoring"]
        },
        {
            title: "Healthcare compliance services",
            p: "We provide healthcare compliance consulting to ensure HIPAA and regulatory alignment, risk mitigation, and documented processes for medical software.",
            list: ["Navigating regulations", "Compliance audits", "Strategic advice"]
        },
        {
            title: "Cloud hosting and migration",
            p: "We provide cloud hosting and migration to preserve scalability, cost-efficiency, and security while supporting clinical and administrative healthcare operations.",
            list: ["Infrastructure assessment", "Application migration", "Cloud management"]
        },
        {
            title: "Healthcare-specific UX/UI design",
            p: "We design healthcare UX/UI focused on patient engagement, clinician efficiency, and regulatory compliance to deliver intuitive experiences.",
            list: ["User research", "Compliant UI design", "Accessibility validation"]
        },
        {
            title: "Custom software engineering",
            p: "We provide custom healthcare software development services to build scalable, tested clinical applications that securely integrate with EHRs.",
            list: ["End-to-end development", "Thorough QA rounds", "Bespoke integration"]
        },
        {
            title: "Health IT team extension",
            p: "We provide health IT team extension services that embed healthcare software developers and specialists into client teams to accelerate delivery.",
            list: ["Healthcare engineers", "Compliance-ready QA", "Clinical PMs & BAs"]
        }
    ];

    const scopeItems = [
        "Diagnosis & Treatment",
        "Patient Monitoring",
        "Disease Prevention",
        "Clinical Trials",
        "Medical Research",
        "Medical Imaging",
        "Lab Management",
        "Pharmacy Management",
        "Billing & Claims",
        "Staff Management"
    ];

    const faqs = [
        {
            q: "Does your medical software meet compliance requirements?",
            a: "Yes, all our healthcare solutions are built with strict adherence to regional and international standards including HIPAA, GDPR, and ISO 13485."
        },
        {
            q: "How do you ensure data security in medical software?",
            a: "We implement multi-layered security protocols including end-to-end encryption, multi-factor authentication, and regular vulnerability assessments."
        },
        {
            q: "What is your approach to interoperability?",
            a: "We utilize standard protocols like HL7 and FHIR to ensure your systems communicate seamlessly with other clinical and laboratory environments."
        }
    ];

    const advisors = [
        {
            name: "Dr. Sarah Mitchell",
            role: "Chief Medical Information Officer",
            img: "https://i.pravatar.cc/150?u=1",
            quote: "Our clinical platforms finally bridge the gap between complex data and intuitive patient care with absolute precision.",
            desc: "Trust her leadership in clinical informatics and health systems optimization to transform your digital medical strategy."
        },
        {
            name: "Michael Sterling",
            role: "Healthcare Compliance Lead",
            img: "https://i.pravatar.cc/150?u=2",
            quote: "Security in healthcare isn't just about code; it's about building a fortress around patient trust and regulatory integrity.",
            desc: "Specialist in HIPAA, GDPR, and international medical regulations, ensuring every solution meets the highest global standards."
        },
        {
            name: "Dr. James Aris",
            role: "AI Research Director",
            img: "https://i.pravatar.cc/150?u=3",
            quote: "The future of diagnosis lies in the synergy between human expertise and machine intelligence, delivering ROI in patient outcomes.",
            desc: "Expert in deep learning applications for radiology and predictive diagnostics, driving the next wave of healthcare innovation."
        }
    ];

    return (
        <div className="hc-pl-page">
            {/* <AuthorityInfoBar /> */}

            {/* 1. HERO */}
            <section className="hc-pl-hero">
                <div className="hc-pl-container">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="hc-pl-hero-content"
                    >
                        <h1 className="hc-pl-hero-h1">
                            Healthcare<span className="hc-pl-gradient-text">Software Development </span> Services
                        </h1>
                        <span className="hc-pl-gradient-underline"></span>
                        <p className="hc-pl-hero-desc">
                            Devopstrio empowers healthcare organizations with secure, compliant, and innovative digital solutions that enhance patient care and streamline clinical operations.
                        </p>
                        <div className="hc-pl-hero-cta-group">
                            <button className="hc-pl-hero-cta-btn" onClick={() => navigate('/contact')}>
                                Get in Touch
                            </button>
                        </div>
                    </motion.div>

                    <div className="hc-pl-hero-media">
                        <img src={mareesh} alt="mareesh" />
                    </div>
                </div>
            </section>

            {/* 2. METRICS */}
            <section className="hc-pl-metrics">
                <div className="hc-pl-container">
                    <div className="hc-pl-metrics-layout">
                        <div className="hc-pl-metrics-info">
                            <h2 className="hc-pl-metrics-title">
                                Reliable partner for <br />
                                healthcare software <br />
                                development services
                            </h2>
                        </div>
                        <div className="hc-pl-metrics-cards">
                            {metrics.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                    className="hc-pl-metric-card"
                                >
                                    <div className="hc-pl-metric-front">
                                        <span className="hc-pl-metric-val">{m.val}</span>
                                        <p className="hc-pl-metric-lbl">{m.lbl}</p>
                                    </div>
                                    <div className="hc-pl-metric-back">
                                        <p className="hc-pl-metric-desc">{m.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. COMPLIANCE SLIDER */}
            {/* <section className="hc-pl-trust">
                <div className="hc-pl-container">
                    <div className="hc-pl-trust-header">
                        <h2 className="hc-pl-trust-h2">Certified, secure, and compliant</h2>
                        <p className="hc-pl-trust-p">
                            We adhere to internationally recognized standards and regulations to ensure secure, reliable, and compliant digital solutions for healthcare providers and medical professionals' workflows.
                        </p>
                    </div>

                    <div className="hc-pl-trust-slider-wrapper">
                        <button 
                            className="hc-pl-slider-nav prev"
                            onClick={() => setTrustIndex(prev => (prev === 0 ? trustLogos.length - 3 : prev - 1))}
                        >
                            <FiChevronLeft />
                        </button>

                        <div className="hc-pl-trust-slider">
                            <motion.div 
                                className="hc-pl-trust-track"
                                animate={{ x: `-${trustIndex * (100 / 3)}%` }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {trustLogos.map((logo) => (
                                    <div key={logo.id} className="hc-pl-trust-card">
                                        <div className="hc-pl-trust-icon-box">
                                            <img src={logo.img} alt={logo.title} className="hc-pl-trust-img" />
                                        </div>
                                        <h4 className="hc-pl-trust-card-title">{logo.title}</h4>
                                        <p className="hc-pl-trust-card-lbl">{logo.lbl}</p>
                                    </div>
                                ))}
                            </motion.div>
                        </div>

                        <button 
                            className="hc-pl-slider-nav next"
                            onClick={() => setTrustIndex(prev => (prev >= trustLogos.length - 3 ? 0 : prev + 1))}
                        >
                            <FiChevronRight />
                        </button>
                    </div>

                    <div className="hc-pl-slider-dots">
                        {Array.from({ length: trustLogos.length - 2 }).map((_, i) => (
                            <span 
                                key={i} 
                                className={`hc-pl-slider-dot ${trustIndex === i ? 'active' : ''}`}
                                onClick={() => setTrustIndex(i)}
                            ></span>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* 4. CAPABILITIES */}
            {/* 4. CAPABILITIES (HIGHNOTE STYLE) */}
            <section className="hc-pl-cap-section">
                <div className="hc-pl-container">
                    <div className="hc-pl-cap-header">
                        <h2 className="hc-pl-cap-h2">Reinventing healthcare via <br/> custom software development</h2>
                    </div>
                    
                    <div className="hc-pl-cap-modern-grid">
                        {capabilities.map((c, i) => (
                            <motion.div
                                key={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="hc-pl-cap-modern-card"
                            >
                                <div className="hc-pl-cap-icon-wrapper">
                                    {c.icon}
                                </div>
                                <h3 className="hc-pl-cap-h3-modern">{c.title}</h3>
                                <p className="hc-pl-cap-p-modern">{c.p}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. SERVICES TABS (EXACT MATCH STYLE) */}
            <section className="hc-pl-serv-exact-section">
                <div className="hc-pl-container">
                    <div className="hc-pl-exact-header">
                        <h2 className="hc-pl-exact-h2">Healthcare software development services we provide</h2>
                    </div>
                    
                    <div className="hc-pl-exact-layout">
                        <div className="hc-pl-exact-sidebar">
                            <div className="hc-pl-exact-nav">
                                {services.map((s, i) => (
                                    <button
                                        key={i}
                                        className={`hc-pl-exact-btn ${activeService === i ? 'active' : ''}`}
                                        onClick={() => setActiveService(i)}
                                    >
                                        {s.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="hc-pl-exact-content">
                            <motion.div
                                key={activeService}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="hc-pl-exact-content-inner"
                            >
                                <p className="hc-pl-exact-desc">
                                    {services[activeService].p}
                                </p>

                                <div className="hc-pl-exact-feature-card">
                                    <h3 className="hc-pl-exact-feature-h3">
                                        With our healthcare software development services you can obtain:
                                    </h3>
                                    <div className="hc-pl-exact-list">
                                        {services[activeService].list.map((item, idx) => (
                                            <div key={idx} className="hc-pl-exact-item">
                                                <FiCheckCircle className="hc-pl-exact-check" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. WHY CHOOSE US */}
            {/* 6. WHY CHOOSE US (BENTO STYLE) */}
            <section className="hc-pl-why-section">
                <div className="hc-pl-container">
                    <div className="hc-pl-why-grid">
                        
                        {/* Column 1: Overview */}
                        <div className="hc-pl-why-col-info">
                            <div className="hc-pl-why-tag">
                                <span className="hc-pl-dot-pulse"></span> OVERVIEW
                            </div>
                            <h2 className="hc-pl-why-h2">The trusted partner for medical <br/> innovation — Devopstrio</h2>
                            
                            <div className="hc-pl-why-feature-pills">
                                <span><FiCheckCircle/> HIPAA Ready</span>
                                <span><FiCheckCircle/> ISO Certified</span>
                                <span><FiCheckCircle/> 24/7 Support</span>
                            </div>

                            <p className="hc-pl-why-desc">
                                Devopstrio has been at the forefront of healthcare technology since inception. We build mission-critical systems for hospitals, clinics, and research labs worldwide. This is the kind of partnership that scales with you long after deployment.
                            </p>

                            <button className="hc-pl-why-cta" onClick={() => navigate('/careers')}>
                                Join The Innovation <div className="hc-pl-arrow-circle"><FiArrowRight /></div>
                            </button>
                        </div>

                        {/* Column 2: Image Card */}
                        <div className="hc-pl-why-col-media">
                            <div className="hc-pl-why-image-card">
                                <img src="/images/healthcare_lab.png" alt="Modern Lab" />
                                <div className="hc-pl-why-image-overlay">
                                    <h3 className="hc-pl-why-image-h3">Secure Clinical <br/> Ecosystems</h3>
                                    <p className="hc-pl-why-image-p">Predictive analytics, telemedicine, and more</p>
                                </div>
                                <div className="hc-pl-why-image-nav">
                                    <div className="hc-pl-nav-circle"><FiChevronLeft /></div>
                                    <div className="hc-pl-nav-circle"><FiChevronRight /></div>
                                </div>
                            </div>
                        </div>

                        {/* Column 3: Stats & Expert */}
                        <div className="hc-pl-why-col-stats">
                            <div className="hc-pl-why-stats-table">
                                <div className="hc-pl-stat-row">
                                    <span className="hc-pl-stat-lbl">Compliance</span>
                                    <span className="hc-pl-stat-val">Full HIPAA/GDPR</span>
                                </div>
                                <div className="hc-pl-stat-row">
                                    <span className="hc-pl-stat-lbl">Expertise</span>
                                    <span className="hc-pl-stat-val">250+ Engineers</span>
                                </div>
                                <div className="hc-pl-stat-row">
                                    <span className="hc-pl-stat-lbl">Reliability</span>
                                    <span className="hc-pl-stat-val">99.9% Uptime</span>
                                </div>
                            </div>

                            <div className="hc-pl-why-expert-card">
                                <div className="hc-pl-expert-head">
                                    <img src="https://i.pravatar.cc/150?u=mareesh" alt="Expert" />
                                    <div className="hc-pl-expert-info">
                                        <strong>Dr. Alan Grant</strong>
                                        <span>Clinical Advisor</span>
                                    </div>
                                </div>
                                <p className="hc-pl-expert-quote">
                                    "Devopstrio doesn't just write code; they understand clinical workflows better than any other partner we've worked with."
                                </p>
                                <div className="hc-pl-expert-footer" onClick={() => navigate('/success-stories/client-transformations')}>
                                    <span>Read Success Story</span>
                                    <div className="hc-pl-expert-arrow"><FiArrowRight /></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 7. SCOPE GRID */}
            <section className="hc-pl-section">
                <div className="hc-pl-container">
                    <div className="hc-pl-scope-grid">
                        <div className="hc-pl-scope-info">
                            <h2 className="hc-pl-sec-h2">Scope of our healthcare software development solutions</h2>
                            <p className="hc-pl-sec-p">Our solutions span across the entire healthcare ecosystem, from research and diagnosis to patient management and billing.</p>
                        </div>
                        <div className="hc-pl-scope-list">
                            {scopeItems.map((item, i) => (
                                <div key={i} className="hc-pl-scope-item">{item}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. WHAT'S TRENDING (SLIDE-UP INTERACTION) */}
            <section className="hc-pl-section">
                <div className="hc-pl-container">
                    <div className="hc-pl-sec-head">
                        <h2 className="hc-pl-sec-h2">What's trending in healthcare industry</h2>
                    </div>
                    <div className="hc-pl-trending-grid">
                        <div className="hc-pl-trending-card-slide">
                            <div className="hc-pl-trending-media">
                                <img src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=800" alt="Trend" />
                            </div>
                            <div className="hc-pl-trending-overlay">
                                <div className="hc-pl-trending-content">
                                    <h4>The Rise of AI in Diagnostics</h4>
                                    <p className="hc-pl-trend-short">How machine learning is transforming early disease detection.</p>
                                    <div className="hc-pl-trend-details">
                                        <p>Machine learning models are now outperforming radiologists in specific diagnostic tasks, reducing error rates by up to 30% in early-stage oncology detection.</p>
                                        <button className="hc-pl-trend-more-btn">Read Full Report <FiArrowRight /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hc-pl-trending-card-slide">
                            <div className="hc-pl-trending-media">
                                <img src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800" alt="Trend" />
                            </div>
                            <div className="hc-pl-trending-overlay">
                                <div className="hc-pl-trending-content">
                                    <h4>Telemedicine 2.0</h4>
                                    <p className="hc-pl-trend-short">Beyond video calls: the future of remote surgery.</p>
                                    <div className="hc-pl-trend-details">
                                        <p>Integration of low-latency 5G networks and haptic feedback is allowing surgeons to perform complex procedures across continents with millisecond precision.</p>
                                        <button className="hc-pl-trend-more-btn">Read Full Report <FiArrowRight /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hc-pl-trending-card-slide">
                            <div className="hc-pl-trending-media">
                                <img src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=800" alt="Trend" />
                            </div>
                            <div className="hc-pl-trending-overlay">
                                <div className="hc-pl-trending-content">
                                    <h4>Blockchain for Patient Data</h4>
                                    <p className="hc-pl-trend-short">Securing medical records with decentralized ledger tech.</p>
                                    <div className="hc-pl-trend-details">
                                        <p>Decentralized identity management ensures patients have absolute ownership over their data while allowing seamless interoperability between global health providers.</p>
                                        <button className="hc-pl-trend-more-btn">Read Full Report <FiArrowRight /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. CTA BANNER (MODERN LANDSCAPE) */}
            <section className="hc-pl-cta-modern-section">
                <div className="hc-pl-container">
                    <div className="hc-pl-cta-modern-banner">
                        <div className="hc-pl-cta-modern-info">
                            <h2 className="hc-pl-cta-modern-h2">Emerging solutions to solve your healthcare software development needs</h2>
                            <p className="hc-pl-cta-modern-p">
                                Experience the future of health-tech with our cutting-edge software solutions. 
                                Start optimizing your clinical operations and patient care today.
                            </p>
                            <button className="hc-pl-cta-modern-btn">
                                Get a Free Consultation <FiArrowRight />
                            </button>
                        </div>
                        <div className="hc-pl-cta-modern-media">
                            <img src="/images/healthcare_cta.png" alt="Healthcare App Mockup" className="hc-pl-cta-mockup" />
                            <div className="hc-pl-cta-glass-badge">
                                <FiActivity className="hc-pl-badge-icon" />
                                <span>Real-time Health Monitoring</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. ADVISORY BOARD (INTERACTIVE MODERN) */}
            <section className="hc-pl-board-modern-section">
                <div className="hc-pl-container">
                    <div className="hc-pl-board-modern-head">
                        <div className="hc-pl-board-modern-tag">
                            <span className="hc-pl-red-slash">/</span> WHAT EXPERTS SAY
                        </div>
                        <h2 className="hc-pl-board-modern-h2">Expert Insights From <br/> Our Advisory Board</h2>
                        <p className="hc-pl-board-modern-p-top">
                            Strategic guidance from industry leaders who have spent decades at the intersection of medicine and technology.
                        </p>
                    </div>

                    <div className="hc-pl-board-modern-layout">
                        {/* Left: Profile Stack */}
                        <div className="hc-pl-board-modern-profiles">
                            {advisors.map((adv, i) => (
                                <div 
                                    key={i}
                                    className={`hc-pl-board-modern-thumb ${activeAdvisor === i ? 'active' : ''}`}
                                    onClick={() => setActiveAdvisor(i)}
                                >
                                    <img src={adv.img} alt={adv.name} />
                                </div>
                            ))}
                        </div>

                        {/* Right: Active Card */}
                        <motion.div 
                            key={activeAdvisor}
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="hc-pl-board-modern-card"
                        >
                            <div className="hc-pl-board-quote-icon">
                                <FaQuoteLeft />
                            </div>
                            
                            <div className="hc-pl-board-card-content">
                                <h3 className="hc-pl-board-card-quote">
                                    "{advisors[activeAdvisor].quote}"
                                </h3>
                                <p className="hc-pl-board-card-subquote">
                                    {advisors[activeAdvisor].desc}
                                </p>
                                
                                <div className="hc-pl-board-card-footer">
                                    <div className="hc-pl-board-card-info">
                                        <h4>{advisors[activeAdvisor].name}</h4>
                                        <span>{advisors[activeAdvisor].role}</span>
                                    </div>
                                    <div className="hc-pl-board-card-sep"></div>
                                    <div className="hc-pl-board-card-rating">
                                        <FaStarSolid/><FaStarSolid/><FaStarSolid/><FaStarSolid/><FaStarSolid/>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 11. FAQ (MODERN INTERACTIVE) */}
            <section className="hc-pl-faq-modern-section">
                <div className="hc-pl-container">
                    <div className="hc-pl-faq-modern-layout">
                        {/* Left: Info */}
                        <div className="hc-pl-faq-modern-info">
                            <div className="hc-pl-faq-tag">
                                <FiFileText /> <span>Frequently asked questions</span>
                            </div>
                            <h2 className="hc-pl-faq-modern-h2">Frequently asked <br/> questions</h2>
                            <p className="hc-pl-faq-modern-desc">
                                Find answers to common questions about our healthcare software development process, 
                                compliance standards, and strategic approach.
                            </p>
                        </div>

                        {/* Right: Accordion */}
                        <div className="hc-pl-faq-modern-list">
                            {faqs.map((faq, i) => (
                                <div key={i} className={`hc-pl-faq-modern-item ${openFaq === i ? 'open' : ''}`}>
                                    <div
                                        className="hc-pl-faq-modern-q"
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                    >
                                        <span>{faq.q}</span>
                                        <div className="hc-pl-faq-icon-circle">
                                            <FiChevronDown />
                                        </div>
                                    </div>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="hc-pl-faq-modern-a"
                                            >
                                                <div className="hc-pl-faq-a-inner">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <Cta />
        </div>
    );
};

export default Healthcare;
