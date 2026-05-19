import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiArrowRight, FiCheckCircle, FiChevronDown, FiPlus, FiMinus,
    FiTv, FiVideo, FiUsers, FiHardDrive, FiBarChart2, FiCloud,
    FiShield, FiSearch, FiLayers, FiX, FiChevronLeft, FiChevronRight,
    FiSmartphone, FiCpu, FiSettings, FiGlobe, FiDatabase, FiZap
} from 'react-icons/fi';
import '../../Style/platform/Automotive.css';


//image 
import Sermaraj_dev from "../../assets/images/Sermaraj_dev.png";

// Components
import TrustedSection from '../../components/TrustedSection/TrustedSection';
import TechStack from '../../components/TechStack/TechStack';
import AIConsultationForm from '../../components/AIConsultationForm/AIConsultationForm';

const Automotive = () => {
    const navigate = useNavigate();
    const [activeScopeTab, setActiveScopeTab] = useState(0);
    const [faqOpen, setFaqOpen] = useState([true, false, false, false]);

    const metrics = [
        { val: "6+", lbl: "years in automotive", desc: "Providing premium custom automotive software engineering services globally.", icon: <FiUsers /> },
        { val: "150+", lbl: "automotive engineers", desc: "Niche experts specializing in AUTOSAR, ASPICE, and functional safety standards.", icon: <FiCheckCircle /> },
        { val: "35+", lbl: "smart mobility projects", desc: "Delivered next-generation IVI, ADAS, V2X, and electric vehicle platforms.", icon: <FiCpu /> }
    ];

    const scopeTabs = [
        {
            tabLabel: "In-Vehicle Infotainment (IVI)",
            title: "In-Vehicle Infotainment (IVI)",
            desc: "Modernize cockpit experiences with highly intuitive touchscreen dashboards, digital instrument clusters, voice command integration, and custom media center apps tailored for modern EVs and connected fleets.",
            boxTitle: "Our premium IVI scope:",
            benefits: [
                "HMI Design & Custom Android Automotive OS integration",
                "Digital instrument cluster development (Qt / QML)",
                "Custom media players, navigation, and telematics apps",
                "Advanced voice assistant & cabin AI feature integration"
            ],
            image: "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=800&auto=format&fit=crop"
        },
        {
            tabLabel: "ADAS & Active Safety",
            title: "ADAS & Active Safety Development",
            desc: "Empower vehicles with state-of-the-art perception systems. We build computer vision algorithms, real-time object detection, sensor fusion pipelines (Radar, LiDAR, Ultrasonic), and ISO 26262 compliant control logic.",
            boxTitle: "Our premium ADAS scope:",
            benefits: [
                "Multi-sensor fusion architectures",
                "Driver Monitoring Systems (DMS) & Cabin sensing",
                "Lane departure & collision warning algorithms",
                "ISO 26262 functional safety and ASPICE compliance"
            ],
            image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop"
        },
        {
            tabLabel: "Connected Car Ecosystem",
            title: "Connected Vehicle & V2X",
            desc: "Build highly reliable vehicle-to-everything (V2X) cloud architectures, over-the-air (OTA) secure software update pipelines, remote vehicle diagnostic hubs, and high-performance telematics gateways.",
            boxTitle: "Our premium V2X scope:",
            benefits: [
                "OTA software delivery pipelines (Uptane standard)",
                "V2X communication frameworks (V2V, V2I, V2G)",
                "Robust AWS/Azure IoT telematics backends",
                "Remote diagnostics and fleet telemetry engines"
            ],
            image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop"
        },
        {
            tabLabel: "Autonomous Driving",
            title: "Autonomous Driving Services",
            desc: "Accelerate autonomous mobility. We develop deep learning perception models, high-definition mapping, vehicle localization, and fully simulated testing frameworks.",
            boxTitle: "Our premium AD scope:",
            benefits: [
                "Path planning & decision-making logic",
                "High-definition mapping & localization pipelines",
                "GenAI simulation testing & virtual validation",
                "ROS / ROS2 embedded software engineering"
            ],
            image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=800&auto=format&fit=crop"
        }
    ];

    const chooseUs = [
        {
            title: "Niche Domain Expertise",
            desc: "Our automotive engineering teams have a 7+ year track record developing safety-critical software for major global tier-1 suppliers and OEMs."
        },
        {
            title: "Regulatory Standards compliance",
            desc: "Strict compliance with ISO 26262 (ASIL-A to D), ASPICE Level 3, AUTOSAR, and MISRA standards is embedded directly in our workflows."
        },
        {
            title: "Fast Time-to-Market",
            desc: "We leverage pre-built automotive accelerators, V2X cloud hubs, and custom simulators to reduce initial delivery times by up to 35%."
        },
        {
            title: "Flexible Cooperation Models",
            desc: "Tailored cooperation models including dedicated research teams, outstaffing, and fixed-scope project development."
        },
        {
            title: "Uncompromising Software Quality",
            desc: "Every line of embedded code undergoes exhaustive automated loop testing (HIL/SIL/MIL) before target deployment."
        },
        {
            title: "Future-Ready R&D Labs",
            desc: "Active R&D in AI-powered voice interfaces, automated driving models, and software-defined vehicle (SDV) architectures."
        }
    ];

    const advisory = [
        {
            name: "Dr. Marcus Vance",
            role: "Chief Automotive Architect (ex-BMW)",
            bio: "Marcus has over 18 years of experience designing embedded platforms and digital cockpits for top-tier German automotive brands.",
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop"
        },
        {
            name: "Dr. Elena Rostova",
            role: "Connected Vehicle Strategist (ex-Tesla)",
            bio: "Elena specializes in V2X cloud architectures, secure OTA infrastructure, and telemetry platforms for autonomous electric fleets.",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
        }
    ];

    const cooperationModels = [
        {
            title: "Dedicated Engineering Team",
            desc: "Scale your research initiative with a fully dedicated team of automotive developers, QA engineers, and project leads working as a seamless extension of your in-house departments."
        },
        {
            title: "Staff Augmentation",
            desc: "Quickly scale your active project with specific, specialized skill sets in Qt/QML, C++, AUTOSAR, or sensor fusion without recruitment delay."
        },
        {
            title: "End-to-End Delivery",
            desc: "We assume complete project responsibility. From roadmap definition to architecture design, validation, and ASPICE certification."
        }
    ];

    const faqQuestions = [
        {
            q: "What industry standards do your automotive developers follow?",
            a: "Our processes align strictly with major international automotive frameworks. We operate under ASPICE Level 3 workflows, utilize AUTOSAR architectures, ensure ISO 26262 compliance for safety-critical components (ASIL A-D), and write clean code adhering to MISRA C/C++ guidelines."
        },
        {
            q: "Can you build companion applications for modern electric cars?",
            a: "Absolutely. We build high-fidelity mobile companion apps for iOS and Android featuring remote door locking, climate scheduling, real-time battery status, trip route planning, and over-the-air vehicle diagnostics built on top of secure vehicle APIs."
        },
        {
            q: "What embedded hardware platforms do you have experience with?",
            a: "We support development and validation on all industry-standard SoC platforms, including NXP S32G, Renesas R-Car, TI Jacinto, and high-performance computing platforms like NVIDIA DRIVE AGX and Qualcomm Snapdragon Automotive."
        },
        {
            q: "How fast can we scale an automotive engineering team?",
            a: "Our extensive talent pool of vetted automotive software engineers allows us to spin up dedicated development groups or augment your existing teams in as little as 2 to 3 weeks."
        }
    ];

    const toggleFaq = (index) => {
        setFaqOpen(faqOpen.map((val, i) => i === index ? !val : val));
    };

    return (
        <div className="plt-auto-page">
            {/* 1. HERO SECTION */}
            <section className="plt-auto-hero">
                <div className="plt-auto-container">
                    <div className="plt-auto-hero-layout">
                        <div className="plt-auto-hero-left">
                            <h1 className="plt-auto-hero-h1">
                                Automotive Software <br />
                                <span className="plt-auto-gradient-text">Development Services</span>
                            </h1>
                            <p className="plt-auto-hero-p">
                                Drive the future of mobility. Empowering OEMs, tier-1 suppliers, and innovative mobility startups with connected vehicle software, robust ADAS platforms, and next-generation smart companion apps.
                            </p>
                            <div className="plt-auto-hero-btn-row">
                                <button className="plt-auto-btn-primary" onClick={() => navigate('/contact')}>Get a Free Consultation <FiArrowRight /></button>
                            </div>
                        </div>

                        <div className="plt-auto-hero-right">
                            <div className="plt-auto-hero-visual">
                                <img
                                    src={Sermaraj_dev}
                                    alt="Automotive Tech Expert"
                                    className="plt-auto-hero-img"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Metrics Section */}
                    <div className="plt-auto-metrics-section">
                        <div className="plt-auto-metrics-left">
                            <h2 className="plt-auto-metrics-title">
                                Proven Results <br />
                                <span className="plt-auto-metrics-subtitle">made for you</span>
                            </h2>
                            <button className="plt-auto-metrics-arrow" onClick={() => navigate('/contact')}>
                                <FiArrowRight />
                            </button>
                        </div>

                        <div className="plt-auto-metrics-divider"></div>

                        <div className="plt-auto-metrics-right">
                            {metrics.map((item, idx) => (
                                <div className="plt-auto-metric-card" key={idx}>
                                    <div className="plt-auto-metric-icon-wrap">
                                        {item.icon}
                                    </div>
                                    <div className="plt-auto-metric-info">
                                        <h3 className="plt-auto-metric-val">{item.val} {item.lbl}</h3>
                                        <p className="plt-auto-metric-desc">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. TRUSTED BY SECTION */}
            <TrustedSection />

            {/* Experts Header Section */}
            <div className="plt-auto-container">
                <div className="plt-auto-experts-header">
                    <h2>Car Software Development Experts</h2>
                    <p>Engaging high-performance engineering groups to build customer-centric automotive systems.</p>
                </div>
            </div>

            {/* 3. SERVICE SCOPE SECTION */}
            <section className="plt-auto-scope">
                <div className="plt-auto-container">
                    <div className="plt-auto-scope-header-new">
                        <h2 className="plt-auto-sec-h2">Automotive IT Services</h2>
                        <p>We provide full-lifecycle software engineering to build software-defined vehicles.</p>
                    </div>

                    <div className="plt-auto-scope-layout">
                        {/* Scope Tabs Navigation */}
                        <div className="plt-auto-scope-tabs">
                            {scopeTabs.map((tab, idx) => (
                                <button
                                    key={idx}
                                    className={`plt-auto-scope-tab-btn ${activeScopeTab === idx ? 'active' : ''}`}
                                    onClick={() => setActiveScopeTab(idx)}
                                >
                                    {tab.tabLabel}
                                    <FiChevronRight className="plt-auto-tab-arrow" />
                                </button>
                            ))}
                        </div>

                        {/* Scope Tab Content */}
                        <div className="plt-auto-scope-content">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeScopeTab}
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -15 }}
                                    transition={{ duration: 0.35 }}
                                    className="plt-auto-scope-content-card"
                                >
                                    <div className="plt-auto-scope-info-col">
                                        <h3 className="plt-auto-scope-title">{scopeTabs[activeScopeTab].title}</h3>
                                        <p className="plt-auto-scope-desc">{scopeTabs[activeScopeTab].desc}</p>
                                        
                                        <div className="plt-auto-scope-box">
                                            <h4>{scopeTabs[activeScopeTab].boxTitle}</h4>
                                            <ul className="plt-auto-scope-checklist">
                                                {scopeTabs[activeScopeTab].benefits.map((benefit, i) => (
                                                    <li key={i}>
                                                        <FiCheckCircle className="plt-auto-check-icon" />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="plt-auto-scope-image-col">
                                        <div className="plt-auto-scope-img-wrapper">
                                            <img
                                                src={scopeTabs[activeScopeTab].image}
                                                alt={scopeTabs[activeScopeTab].title}
                                                className="plt-auto-scope-img"
                                            />
                                            <div className="plt-auto-scope-badge">
                                                <FiCpu className="plt-auto-badge-icon" />
                                                <span>Tech Certified</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CALLOUT BANNER SECTION */}
            <section className="plt-auto-callout">
                <div className="plt-auto-container">
                    <div className="plt-auto-callout-card">
                        <h2>Build your high-performance custom development team in less than two weeks.</h2>
                        <button className="plt-auto-btn-primary" onClick={() => navigate('/contact')}>Get a Consultation <FiArrowRight /></button>
                    </div>
                </div>
            </section>

            {/* 5. ADVISORY BOARD SECTION */}
            <section className="plt-auto-advisory">
                <div className="plt-auto-container">
                    <h2 className="plt-auto-sec-h2 text-center">Automotive Advisory Board</h2>
                    <p className="plt-auto-sec-p text-center">Guided by elite engineers who have led automotive software transformations at premium global brands.</p>
                    
                    <div className="plt-auto-advisory-grid">
                        {advisory.map((item, idx) => (
                            <div className="plt-auto-advisory-card" key={idx}>
                                <div className="plt-auto-advisory-inner">
                                    <div className="plt-auto-advisory-img-wrap">
                                        <img src={item.img} alt={item.name} />
                                    </div>
                                    <div className="plt-auto-advisory-details">
                                        <h4>{item.name}</h4>
                                        <span className="plt-auto-advisory-role">{item.role}</span>
                                        <p>{item.bio}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. WHY AUTOMOTIVE CUSTOMERS CHOOSE US */}
            <section className="plt-auto-choose">
                <div className="plt-auto-container">
                    <h2 className="plt-auto-sec-h2 text-center">Why Automotive Customers Choose Us</h2>
                    
                    <div className="plt-auto-choose-grid">
                        {chooseUs.map((item, idx) => (
                            <div className="plt-auto-choose-card" key={idx}>
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. MODELS OF COOPERATION */}
            <section className="plt-auto-models">
                <div className="plt-auto-container">
                    <h2 className="plt-auto-sec-h2 text-center">Models of Cooperation for Automotive</h2>
                    
                    <div className="plt-auto-models-grid">
                        {cooperationModels.map((item, idx) => (
                            <div className="plt-auto-model-card" key={idx}>
                                <div className="plt-auto-model-card-inner">
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="plt-auto-models-footer">
                        <h3>Talk with our executive experts to discover which cooperation model fits your scope.</h3>
                        <button className="plt-auto-btn-primary" onClick={() => navigate('/contact')}>Get Started <FiArrowRight /></button>
                    </div>
                </div>
            </section>

            {/* 8. CONNECTED COMPANION APP SPLIT MOCKUP */}
            <section className="plt-auto-mockup">
                <div className="plt-auto-container">
                    <div className="plt-auto-mockup-layout">
                        <div className="plt-auto-mockup-left">
                            <h2 className="plt-auto-sec-h2">Connected Vehicle Companion Apps</h2>
                            <p className="plt-auto-mockup-p">
                                We design and develop gorgeous companion applications featuring low-latency vehicle APIs. Enable keyless remote entries, real-time cabin heating/cooling schedules, EV charge progress, and detailed tire diagnostic reports.
                            </p>
                            <ul className="plt-auto-mockup-checklist">
                                <li><FiCheckCircle /> Remote Locking & Smart Cabin Control</li>
                                <li><FiCheckCircle /> Battery charge rate tracking & cycle charts</li>
                                <li><FiCheckCircle /> Cloud-connected route pre-loading</li>
                            </ul>
                        
                        </div>

                        <div className="plt-auto-mockup-right">
                            {/* Smartphone Hifi Widget */}
                            <div className="plt-auto-phone-emulator">
                                <div className="plt-auto-emulator-screen">
                                    <div className="plt-auto-emu-header">
                                        <span>Model S Companion</span>
                                        <span className="plt-auto-emu-battery">⚡ 88%</span>
                                    </div>
                                    
                                    <div className="plt-auto-emu-stat-box">
                                        <div className="plt-auto-emu-stat-row">
                                            <span>Remaining Range</span>
                                            <span>320 mi</span>
                                        </div>
                                        <div className="plt-auto-emu-stat-row">
                                            <span>Sentry Mode</span>
                                            <span style={{ color: '#ce2453' }}>Active</span>
                                        </div>
                                    </div>

                                    {/* Smart Custom Wave Line graph */}
                                    <div className="plt-auto-emu-chart">
                                        <div className="plt-auto-chart-header">
                                            <span>Charging Velocity</span>
                                            <span>120 kW</span>
                                        </div>
                                        <svg viewBox="0 0 200 65" className="plt-auto-emu-svg">
                                            <path d="M 0,50 Q 35,25 70,40 T 140,15 T 200,45" fill="none" stroke="#ce2453" strokeWidth="2.5" />
                                            <circle cx="140" cy="15" r="4.5" fill="#ce2453" />
                                        </svg>
                                    </div>

                                    <div className="plt-auto-emu-actions">
                                        <button className="plt-auto-emu-btn">Unlock Doors</button>
                                        <button className="plt-auto-emu-btn active">Pre-Heat Cabin</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 9. CASE STUDIES SECTION */}
            <section className="plt-auto-cases">
                <div className="plt-auto-container">
                    <h2 className="plt-auto-sec-h2">Case Studies</h2>
                    <p className="plt-auto-sec-p">Explore real engineering case studies that empower global automotive leaders.</p>

                    <div className="plt-auto-case-spotlight">
                        <div className="plt-auto-case-left">
                            <div className="plt-auto-case-tag">Case Spotlight</div>
                            <h3>Next-Gen In-Vehicle Infotainment Platform for European EV</h3>
                            <p>
                                Rebuilt the entire human-machine interface (HMI) and custom middleware integration for a premium European EV brand, achieving exceptional graphics rendering and less than 1.2s cold start latency.
                            </p>
                            <div className="plt-auto-case-stats">
                                <div className="plt-auto-case-stat-item">
                                    <h4>-40%</h4>
                                    <p>System Startup Time</p>
                                </div>
                                <div className="plt-auto-case-stat-item">
                                    <h4>99.9%</h4>
                                    <p>HMI System Uptime</p>
                                </div>
                            </div>
                            <button className="plt-auto-btn-secondary" onClick={() => navigate('/case-studies')}>Read Case Study <FiArrowRight /></button>
                        </div>
                        <div className="plt-auto-case-right">
                            <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800&auto=format&fit=crop" alt="Smart EV IVI mockup" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. TECH STACK WE EMPLOY */}
            <TechStack
                title="Tech stack we employ"
                subtitle="We draw on contemporary embedded programming models, secure cloud pipelines, and robust graphics runtimes to build software-defined vehicle components."
            />

            {/* 11. PREMIUM TESTIMONIAL SPLIT CARD */}
            <section className="plt-auto-testimonials">
                <div className="plt-auto-container">
                    <h2 className="plt-auto-sec-h2 text-center">Testimonials</h2>
                    
                    <div className="plt-auto-testi-card-new">
                        {/* Left Column: Image wrapper with overlapping capsule */}
                        <div className="plt-auto-testi-left">
                            <div className="plt-auto-testi-img-wrapper">
                                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" alt="James Carter" className="plt-auto-testi-main-img" />
                                <div className="plt-auto-testi-joined-capsule">
                                    <div className="plt-auto-testi-joined-avatars">
                                        <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="Avatar" />
                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop" alt="Avatar" />
                                        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop" alt="Avatar" />
                                    </div>
                                    <span className="plt-auto-testi-joined-text">500+ Automotive partners joined!</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Quote and details */}
                        <div className="plt-auto-testi-right">
                            <div className="plt-auto-testi-stars">
                                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                            </div>
                            
                            <blockquote className="plt-auto-testi-quote-large">
                                "The deep domain expertise of Devopstrio in ASPICE workflows and AUTOSAR integrations helped us deliver our electric SUV cockpit module right on schedule."
                            </blockquote>

                            <p className="plt-auto-testi-sub-quote">
                                "Their absolute transparency in build management, rapid response loop testing, and highly specialized embedded developers made them an indispensable part of our engineering team."
                            </p>

                            <div className="plt-auto-testi-author-meta">
                                <span className="plt-auto-author-name">— James Carter</span>
                                <span className="plt-auto-author-role">Director of Software Systems, Next-Gen EV Mobility</span>
                            </div>

                            <div className="plt-auto-testi-tags">
                                <span className="plt-auto-testi-tag-pill">ASPICE Level 3</span>
                                <span className="plt-auto-testi-tag-pill">HMI Engineering</span>
                                <span className="plt-auto-testi-tag-pill">Embedded C++</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 12. FAQ ACCORDION SECTION */}
            <section className="plt-auto-faq">
                <div className="plt-auto-container">
                    <h2 className="plt-auto-sec-h2 text-center">Frequently Asked Questions</h2>
                    
                    <div className="plt-auto-faq-list">
                        {faqQuestions.map((item, idx) => (
                            <div className={`plt-auto-faq-item ${faqOpen[idx] ? 'active' : ''}`} key={idx}>
                                <button className="plt-auto-faq-q" onClick={() => toggleFaq(idx)}>
                                    <span>{item.q}</span>
                                    <FiChevronDown className="plt-auto-faq-arrow" />
                                </button>
                                <AnimatePresence initial={false}>
                                    {faqOpen[idx] && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="plt-auto-faq-a"
                                        >
                                            <p>{item.a}</p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 13. CONSULTATION FORM CONTAINER */}
            <div style={{ margin: "0 auto", maxWidth: "1200px" }}>
                <AIConsultationForm />
            </div>
        </div>
    );
};

export default Automotive;
