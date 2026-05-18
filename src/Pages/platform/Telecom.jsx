import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiArrowRight, FiCheckCircle, FiChevronDown, FiPlus, FiMinus,
    FiTv, FiVideo, FiUsers, FiHardDrive, FiBarChart2, FiCloud,
    FiShield, FiSearch, FiLayers, FiX, FiChevronLeft, FiChevronRight,
    FiSmartphone, FiCpu, FiSettings, FiGlobe, FiDatabase
} from 'react-icons/fi';
import '../../Style/platform/Telecom.css';

// images
import telecom_hero from "../../assets/images/thangalakshmi_dev.png";
import telecom_case from "../../assets/images/telecom_case.png";

// Components
import TrustedSection from '../../components/TrustedSection/TrustedSection';
import TechStack from '../../components/TechStack/TechStack';
import AIConsultationForm from '../../components/AIConsultationForm/AIConsultationForm';

const Telecom = () => {
    const navigate = useNavigate();
    const [currCase, setCurrCase] = useState(0);
    const [activeScopeTab, setActiveScopeTab] = useState(0);

    const metrics = [
        { val: "75+", lbl: "telecom projects", desc: "As a telecom software development company, we make it possible for customers to enhance revenue streams.", icon: <FiUsers /> },
        { val: "100+", lbl: "telecom specialists", desc: "To provide telecom software development services, we employ expert architects and analysts aligned with TM Forum standards.", icon: <FiCheckCircle /> },
        { val: "2", lbl: "weeks to start", desc: "As a vendor of custom telecommunications software solutions, we are fully equipped to address your requirements quickly.", icon: <FiSettings /> }
    ];

    const scopeTabs = [
        {
            tabLabel: "OSS/BSS Transformation",
            title: "OSS/BSS Transformation",
            desc: "The highly skilled and experienced domain specialists employed by our telecom app development company can modernize your OSS/BSS landscape and build telecom solutions aligned with your operational workflows and strategic goals.",
            boxTitle: "Rely on our scope:",
            benefits: [
                "OSS/BSS advisory",
                "Custom software engineering for telcos",
                "Ongoing support and system upkeep"
            ],
            image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop"
        },
        {
            tabLabel: "Channel Development",
            title: "Channel Development",
            desc: "Within our telecom services, we create high-performance client channels that seamlessly complement your digital ecosystem. Devopstrio's team can enhance your existing channels or work on new ones from the ground up:",
            boxTitle: "Devopstrio's expertise in the telecom business covers:",
            benefits: [
                "Online eShops",
                "Self-service client portals",
                "Mobile app development for telecom"
            ],
            image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop"
        },
        {
            tabLabel: "Audits of telecom software solutions",
            title: "Audits of telecom software solutions",
            desc: "Devopstrio's telecommunications-focused experts will review your current landscape, identify existing and potential gaps, and outline a clearly phased and cost-effective improvement roadmap.",
            boxTitle: "Devopstrio is a matching service provider for:",
            benefits: [
                "Telcos' architecture audits",
                "DWH and security assessments",
                "Software evaluations"
            ],
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop"
        },
        {
            tabLabel: "Cloud for the telecom industry",
            title: "Cloud for the telecom industry",
            desc: "Telecommunication software development that leverages the full potential of the cloud is a growing trend, thanks to the enormous opportunities it offers for scaling and adaptation.",
            boxTitle: "Devopstrio's cloud expertise encompasses:",
            benefits: [
                "Native and hybrid cloud engineering",
                "Telecom cloud consulting and migration",
                "SaaS/PaaS/IaaS"
            ],
            image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const caseStudies = [
        {
            brand: "European Telecoms",
            title: "Modernize infrastructure for the cloud-native era",
            tag: "Europe",
            img: telecom_case
        }
    ];

    const nextCase = () => setCurrCase((prev) => (prev + 1) % caseStudies.length);
    const prevCase = () => setCurrCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

    return (
        <div className="plt-tel-page">
            {/* 1. HERO */}
            <section className="plt-tel-hero">
                <div className="plt-tel-container">
                    <div className="plt-tel-hero-layout">
                        <div className="plt-tel-hero-text">
                            <h1 className="plt-tel-hero-h1">
                                Telecom Software <br />
                                <span className="plt-tel-accent-text">Development Services</span>
                            </h1>
                            <p className="plt-tel-hero-p">
                                Flawless connectivity with Andersen. Empowering the telecommunications industry with robust, scalable, and future-ready software solutions.
                            </p>
                            <div className="plt-tel-hero-cta">
                                <button className="plt-tel-btn-primary" onClick={() => navigate('/contact')}>
                                    Get a free IT consultation <FiArrowRight />
                                </button>
                            </div>
                        </div>

                        <div className="plt-tel-hero-visual">
                            <img src={telecom_hero} alt="Telecom Expert" className="plt-tel-hero-img" />
                        </div>
                    </div>

                    <div className="plt-tel-metrics-section">
                        <div className="plt-tel-metrics-left">
                            <h2 className="plt-tel-metrics-title">
                                Proven Results <br />
                                <span className="plt-tel-metrics-subtitle">made for you</span>
                            </h2>
                            <button className="plt-tel-metrics-arrow" onClick={() => navigate('/contact')}>
                                <FiArrowRight />
                            </button>
                        </div>

                        <div className="plt-tel-metrics-divider"></div>

                        <div className="plt-tel-metrics-right">
                            {metrics.map((m, i) => (
                                <div key={i} className="plt-tel-metric-card-new">
                                    <div className="plt-tel-metric-icon-new">
                                        {m.icon}
                                    </div>
                                    <h3 className="plt-tel-metric-title-new">
                                        {m.val} {m.lbl}
                                    </h3>
                                    <p className="plt-tel-metric-desc-new">
                                        {m.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SERVICE SCOPE TABBED DESIGN */}
            <section className="plt-tel-scope">
                <div className="plt-tel-container">
                    <div className="plt-tel-scope-header-new">
                        <h2>Telecom <span className="plt-tel-accent">↗</span> Evolution with Devopstrio</h2>
                        <p>Our offerings are tailored to meet the unique challenges of telecom businesses, and are designed to provide them missing operational pieces to help achieve strategic goals.</p>
                    </div>

                    <div className="plt-tel-scope-tabs">
                        {scopeTabs.map((tab, idx) => (
                            <button
                                key={idx}
                                className={`plt-tel-tab-btn ${activeScopeTab === idx ? 'active' : ''}`}
                                onClick={() => setActiveScopeTab(idx)}
                            >
                                {tab.tabLabel}
                            </button>
                        ))}
                    </div>

                    <div className="plt-tel-scope-content-card">
                        <div className="plt-tel-sc-left">
                            <h3>{scopeTabs[activeScopeTab].title}</h3>
                            <p className="plt-tel-sc-desc">{scopeTabs[activeScopeTab].desc}</p>

                            <h4>{scopeTabs[activeScopeTab].boxTitle}</h4>
                            <ul className="plt-tel-sc-benefits">
                                {scopeTabs[activeScopeTab].benefits.map((ben, i) => (
                                    <li key={i}><FiCheckCircle /> {ben}</li>
                                ))}
                            </ul>

                            <button className="plt-tel-sc-btn" onClick={() => navigate('/contact')}>
                                Apply now <FiArrowRight />
                            </button>
                        </div>
                        <div className="plt-tel-sc-right">
                            <img src={scopeTabs[activeScopeTab].image} alt={scopeTabs[activeScopeTab].title} className="plt-tel-sc-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. OFFERINGS */}
            <section className="plt-tel-offerings">
                <div className="plt-tel-container">
                    <h2 className="plt-tel-sec-h2">Offerings for the telecom industry</h2>
                    <div className="plt-tel-offerings-grid">
                        <div className="plt-tel-offer-card">
                            <div className="plt-tel-offer-icon"><FiCpu /></div>
                            <h3>Bespoke telecom engineering</h3>
                            <ul>
                                <li><FiCheckCircle /> Crucial BSS/OSS components</li>
                                <li><FiCheckCircle /> Digital media and web app development</li>
                                <li><FiCheckCircle /> Big data and AI/ML</li>
                                <li><FiCheckCircle /> Integration and data processing layers</li>
                                <li><FiCheckCircle /> Telecom app development services</li>
                            </ul>
                            <button className="plt-tel-btn-link">See more <FiArrowRight /></button>
                        </div>

                        <div className="plt-tel-offer-card">
                            <div className="plt-tel-offer-icon"><FiLayers /></div>
                            <h3>Architecture for telcos</h3>
                            <ul>
                                <li><FiCheckCircle /> Analysis of your current systems</li>
                                <li><FiCheckCircle /> BSS/OSS blueprints</li>
                                <li><FiCheckCircle /> Strategies and roadmaps</li>
                                <li><FiCheckCircle /> Architecture design</li>
                            </ul>
                            <button className="plt-tel-btn-link">See more <FiArrowRight /></button>
                        </div>

                        <div className="plt-tel-offer-card">
                            <div className="plt-tel-offer-icon"><FiUsers /></div>
                            <h3>Tech staff augmentation</h3>
                            <ul>
                                <li><FiCheckCircle /> Enterprise-grade and solution architecture</li>
                                <li><FiCheckCircle /> Software development and DevOps</li>
                                <li><FiCheckCircle /> Data architecture and DataOps</li>
                                <li><FiCheckCircle /> PM services</li>
                                <li><FiCheckCircle /> QA</li>
                            </ul>
                            <button className="plt-tel-btn-link">See more <FiArrowRight /></button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CASE STUDIES (BENTO GRID DESIGN) */}
            <section className="plt-tel-cases">
                <div className="plt-tel-container">
                    <div className="plt-tel-cases-header">
                        <h2 className="plt-tel-sec-h2">Gallery of our projects</h2>
                        <p className="plt-tel-sec-p">Over the years, our telecom software development company has delivered multiple complex and challenging projects for organizations all around the world.</p>
                    </div>

                    <div className="plt-tel-bento-grid">
                        {/* 1. TOP LEFT CARD: Main Branding case study */}
                        <div className="plt-tel-bento-main">
                            <div className="plt-tel-bento-main-text">
                                <h3 className="plt-tel-bento-h3">
                                    Fueling Brands <br />
                                    for the <span className="plt-tel-bento-accent">Digital Age.</span>
                                </h3>
                                <p className="plt-tel-bento-p">
                                    We craft impactful digital experiences through strategy, design, and technology to help your telecom business grow, engage, and lead.
                                </p>
                                <div className="plt-tel-bento-cta-row">
                                    <button className="plt-tel-bento-btn-primary" onClick={() => navigate('/contact')}>
                                        Get Started
                                    </button>
                                    <button className="plt-tel-bento-btn-secondary" onClick={() => navigate('/clients')}>
                                        Watch Video
                                    </button>
                                </div>
                            </div>
                            <div className="plt-tel-bento-spark-wrapper">
                                <svg viewBox="0 0 100 100" className="plt-tel-bento-spark">
                                    <circle cx="50" cy="50" r="1.5" fill="#ce2453" />
                                    {Array.from({ length: 16 }).map((_, i) => {
                                        const angle = (i * 360) / 16;
                                        const rad = (angle * Math.PI) / 180;
                                        const x2 = 50 + 40 * Math.cos(rad);
                                        const y2 = 50 + 40 * Math.sin(rad);
                                        return (
                                            <line
                                                key={i}
                                                x1="50"
                                                y1="50"
                                                x2={x2}
                                                y2={y2}
                                                stroke="rgba(206, 36, 83, 0.25)"
                                                strokeWidth="0.5"
                                            />
                                        );
                                    })}
                                </svg>
                            </div>
                        </div>

                        {/* 2. TOP RIGHT CARD: Image card with floating statistics */}
                        <div className="plt-tel-bento-image-card">
                            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop" alt="Telecom Specialist" className="plt-tel-bento-img" />
                            <div className="plt-tel-bento-widget">
                                <div className="plt-tel-widget-header">
                                    <span>Active Balance</span>
                                    <span className="plt-tel-widget-range">Oct - Feb</span>
                                </div>
                                <div className="plt-tel-widget-value">$15,560.00</div>
                                <div className="plt-tel-widget-chart">
                                    <div className="plt-tel-chart-pin">1500</div>
                                    <svg viewBox="0 0 200 60" className="plt-tel-wave-svg">
                                        <path d="M 0,40 Q 30,20 60,35 T 120,15 T 180,45" fill="none" stroke="#ce2453" strokeWidth="2.5" />
                                        <circle cx="120" cy="15" r="4.5" fill="#ce2453" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* 3. BOTTOM ROW: LEFT - 305K+ stat */}
                        <div className="plt-tel-bento-stat-main">
                            <div className="plt-tel-bento-avatars">
                                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop" alt="User Avatar" className="plt-tel-bento-avatar" />
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop" alt="User Avatar" className="plt-tel-bento-avatar" />
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop" alt="User Avatar" className="plt-tel-bento-avatar" />
                                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop" alt="User Avatar" className="plt-tel-bento-avatar" />
                            </div>
                            <div className="plt-tel-bento-stat-info">
                                <h4>305K+</h4>
                                <p>Happy clients and successful transactions</p>
                            </div>
                        </div>

                        {/* 4. BOTTOM ROW: MIDDLE - 600K+ stat */}
                        <div className="plt-tel-bento-stat-sub">
                            <div className="plt-tel-stat-sub-val">600K+</div>
                            <div className="plt-tel-stat-sub-lbl">Clients</div>
                        </div>

                        {/* 5. BOTTOM ROW: RIGHT - 50K contributions */}
                        <div className="plt-tel-bento-stat-accent">
                            <div className="plt-tel-bento-accent-top">
                                <svg viewBox="0 0 50 50" className="plt-tel-accent-nodes">
                                    <circle cx="25" cy="25" r="10" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                                    <circle cx="20" cy="25" r="8" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                    <circle cx="30" cy="25" r="8" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                                </svg>
                                <span className="plt-tel-accent-arrow">↗</span>
                            </div>
                            <div className="plt-tel-bento-accent-bottom">
                                <h4>50K</h4>
                                <p>Contributions in the last year</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TECH STACK */}
            <TechStack
                title="Tech stack we employ"
                subtitle="In the capacity of a telecom app development company, we draw on contemporary frameworks, cloud-native infrastructures, and advanced big data platforms to build custom telecom software solutions."
            />

            {/* 6. TESTIMONIALS */}
            <section className="plt-tel-testimonials">
                <div className="plt-tel-container">
                    <h2 className="plt-tel-sec-h2">Testimonials</h2>
                    
                    <div className="plt-tel-testi-card-new">
                        {/* Left Column: Image wrapper with overlapping capsule */}
                        <div className="plt-tel-testi-left">
                            <div className="plt-tel-testi-img-wrapper">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" alt="James Carter" className="plt-tel-testi-main-img" />
                                <div className="plt-tel-testi-joined-capsule">
                                    <div className="plt-tel-testi-joined-avatars">
                                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Avatar" />
                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Avatar" />
                                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" alt="Avatar" />
                                    </div>
                                    <span className="plt-tel-testi-joined-text">500+ Telcos joined!</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Quote and details */}
                        <div className="plt-tel-testi-right">
                            <div className="plt-tel-testi-stars">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            
                            <blockquote className="plt-tel-testi-quote-large">
                                "Working with Devopstrio was a complete game-changer for our business. Their attention to detail, creative thinking, and innovative approach truly stand out."
                            </blockquote>

                            <p className="plt-tel-testi-sub-quote">
                                "The best thing about their services is the full transparency of processes. We always knew what’s going on with our business app and didn’t need to worry much about this project status."
                            </p>

                            <div className="plt-tel-testi-author-meta">
                                <span className="plt-tel-author-name">— Roxana Porada</span>
                                <span className="plt-tel-author-role">Founder & VP Products at PXL Vision</span>
                            </div>

                            <div className="plt-tel-testi-tags">
                                <span className="plt-tel-testi-tag-pill">OSS/BSS Migration</span>
                                <span className="plt-tel-testi-tag-pill">Cloud-Native</span>
                                <span className="plt-tel-testi-tag-pill">5G Architecture</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CTA */}
            <div style={{ margin: "auto", maxWidth: "1250px"}}>
                <AIConsultationForm />
            </div>

        </div>
    );
};

export default Telecom;
