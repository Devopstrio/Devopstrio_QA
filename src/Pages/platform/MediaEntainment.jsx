import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiArrowRight, FiCheckCircle, FiChevronDown, FiPlus, FiMinus,
    FiTv, FiVideo, FiUsers, FiHardDrive, FiBarChart2, FiCloud,
    FiShield, FiSearch, FiLayers, FiX, FiChevronLeft, FiChevronRight
} from 'react-icons/fi';
import '../../Style/platform/MediaEntainment.css';


//images
import Servicesnav from "../../assets/images/Servicesnav.png";
import case_samsung from "../../assets/images/case_samsung.png";
import case_mercedes from "../../assets/images/case_mercedes.png";
import case_screach from "../../assets/images/case_screach.png";
import case_grandery from "../../assets/images/case_grandery.png";
import case_synchtank from "../../assets/images/case_synchtank.png";
import oviya_dev from "../../assets/images/oviya_dev.png"

// Components
import Cta from '../../components/Cta/Cta';
import TrustedSection from '../../components/TrustedSection/TrustedSection';
import TechStack from '../../components/TechStack/TechStack';
import AIConsultationForm from '../../components/AIConsultationForm/AIConsultationForm';

const MediaEntainment = () => {
    const navigate = useNavigate();
    const [selectedInsight, setSelectedInsight] = useState(null);
    const [activeService, setActiveService] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const metrics = [
        { val: "70+", lbl: "Successful IT projects" },
        { val: "110+", lbl: "Multimedia software developers" },
        { val: "4.9/5", lbl: "On Clutch" }
    ];

    const services = [
        {
            title: "Live Streaming App Development",
            desc: "Devopstrio builds the best Live Video Streaming software to enable you to create, extend, and manage your streaming channels or apps effectively and with the highest quality.",
            icon: <FiVideo />
        },
        {
            title: "Video on Demand App Development",
            desc: "Specializing in Video-on-Demand app development, we build top-class VOD solutions and enhance existing products via advanced OTT technologies.",
            icon: <FiTv />
        },
        {
            title: "Social Media Software Development",
            desc: "Devopstrio's experts will assume responsibility for any aspect of your social media platform software development, including dating and social networking apps.",
            icon: <FiUsers />
        },
        {
            title: "Digital Asset Management Solutions",
            desc: "Implementing a Digital Asset Management system is not a problem with Devopstrio, as we help enterprises automate media lifecycle processes.",
            icon: <FiHardDrive />
        }
    ];

    const whyUs = [
        {
            title: "Expertise in Media & Entertainment",
            desc: "Since 2007, we have been creating Media & Entertainment solutions, including live video streaming software, VOD software, etc."
        },
        {
            title: "Integrations with External Tools",
            desc: "Andersen offers different ways to interact with versatile video solutions, including Zoom and Twitch content streaming."
        },
        {
            title: "Content Digitalization",
            desc: "Digitizing your processes allows you to structure, update, and distribute your content more quickly."
        },
        {
            title: "Cost-effectiveness",
            desc: "Live streaming delivered via professional video streaming software is more cost-effective. We ensure high-quality returns."
        },
        {
            title: "Customer Support",
            desc: "You will have access to knowledgeable 24/7 customer support whenever any issues arise with your entertainment software."
        },
        {
            title: "Focus on Usability",
            desc: "Our design envisioned and created by experts will boost the demand for your products and increase revenue."
        }
    ];

    const insights = [
        {
            title: "The Growth of Connected TV",
            desc: "Important advantages and current challenges of connected TV technologies explained by Devopstrio’s expert IT team.",
            time: "8 mins",
            img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=1200",
            featured: true,
            fullContent: "Connected TV (CTV) is rapidly reshaping the media landscape. As viewers migrate away from traditional cable, the opportunities for targeted advertising and personalized content delivery are exploding. However, this growth comes with challenges in data privacy and cross-platform measurement that require sophisticated technical solutions."
        },
        {
            title: "The Rise of FAST Services",
            time: "5 mins",
            featured: false,
            fullContent: "Free Ad-supported Streaming TV (FAST) services are gaining momentum as consumers experience 'subscription fatigue'. These services offer a linear TV-like experience without the monthly cost, creating new revenue streams for content owners through dynamic ad insertion."
        },
        {
            title: "Building a Top Live Streaming App",
            time: "8 mins",
            featured: false,
            fullContent: "Success in live streaming hinges on low latency and high reliability. We leverage advanced protocols like WebRTC and SRT, combined with global CDN strategies, to ensure that viewers experience seamless, real-time engagement regardless of their location."
        },
        {
            title: "How to Redesign a Website?",
            time: "9 mins",
            featured: false,
            fullContent: "In the media world, content is king, but the interface is the gatekeeper. A successful redesign focuses on content discoverability, ensuring that users can find what they want to watch with minimal friction while maintaining a strong brand identity."
        },
        {
            title: "UI/UX in Multimedia App Development",
            time: "4 mins",
            featured: false,
            fullContent: "Designing for multimedia requires a deep understanding of lean-back vs. lean-forward experiences. Whether it's a mobile app for on-the-go viewing or a Smart TV interface for a cinematic experience, usability must be at the core of every design decision."
        }
    ];

    const techData = {
        'Players': [
            { name: 'JW Player', icon: 'https://cdn.simpleicons.org/jwplayer/white' },
            { name: 'Brightcove', icon: 'https://cdn.simpleicons.org/brightcove/white' },
            { name: 'Kaltura', icon: 'https://cdn.simpleicons.org/kaltura/white' },
            { name: 'Dacast', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playcanvas/playcanvas-original.svg' }
        ],
        'Media Processing': [
            { name: 'AWS Elemental', icon: 'https://cdn.simpleicons.org/amazonwebservices/white' },
            { name: 'Zencoder', icon: 'https://cdn.simpleicons.org/vlc/white' },
            { name: 'MediaKind', icon: 'https://cdn.simpleicons.org/sony/white' }
        ],
        'Analytics': [
            { name: 'Google Analytics', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg' },
            { name: 'Microsoft Clarity', icon: 'https://cdn.simpleicons.org/microsoft/white' },
            { name: 'Hotjar', icon: 'https://cdn.simpleicons.org/hotjar/white' }
        ],
        'Cloud': [
            { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
            { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' },
            { name: 'Oracle', icon: 'https://cdn.simpleicons.org/oracle/white' }
        ]
    };

    const caseStudies = [
        {
            brand: "SAMSUNG",
            title: "Application for smart TVs",
            tag: "USA",
            img: case_samsung
        },
        {
            brand: "Mercedes-Benz",
            title: "Entertainment E-Space",
            tag: "Germany",
            img: case_mercedes
        },
        {
            brand: "SCREACH",
            title: "Live Sports Streaming Platform",
            tag: "UK",
            img: case_screach
        },
        {
            brand: "GRANDERY",
            title: "An advertising data lake",
            tag: "France",
            img: case_grandery
        },
        {
            brand: "SYNCHTANK",
            title: "Royalty Calculator Platform",
            tag: "UK",
            img: case_synchtank
        }
    ];

    const [currCase, setCurrCase] = useState(0);
    const nextCase = () => setCurrCase((prev) => (prev + 1) % caseStudies.length);
    const prevCase = () => setCurrCase((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);

    return (
        <div className="plt-me-page">
            {/* 1. HERO */}
            <section className="plt-me-hero">
                <div className="plt-me-container">
                    <div className="plt-me-hero-layout">
                        <div className="plt-me-hero-text">
                            <h1 className="plt-me-hero-h1">
                                Media & Entertainment <br />
                                <span className="plt-me-accent-text">Software Development</span>
                            </h1>
                            <p className="plt-me-hero-p">
                                Since 2007, we have been delivering Media & Entertainment Software solutions for world-leading companies like Samsung, Mercedes, Marvel, Bitmovin, and more.
                            </p>
                            <div className="plt-me-hero-cta">
                                <button className="plt-me-btn-primary" onClick={() => navigate('/contact')}>
                                    Book a free IT consultation <FiArrowRight />
                                </button>
                            </div>
                        </div>

                        <div className="plt-me-hero-visual">
                            <img src={oviya_dev} alt="Logistics Expert" className="plt-me-hero-person" />
                        </div>
                    </div>

                    <div className="plt-me-metrics-section">
                        <div className="plt-me-metrics-title">
                            <h2>Work with an expert <br /> Media & Entertainment IT company</h2>
                        </div>
                        <div className="plt-me-metrics-grid">
                            {metrics.map((m, i) => (
                                <div key={i} className="plt-me-metric-card">
                                    <h3>{m.val}</h3>
                                    <p>{m.lbl}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SERVICES & AUDIENCE */}
            <section className="plt-me-services">
                <div className="plt-me-container">
                    {/* Audience Intro */}
                    <div className="plt-me-audience-intro">
                        <div className="plt-me-audience-badge">TARGET AUDIENCE</div>
                        <div className="plt-me-audience-content">
                            <div className="plt-me-audience-expert">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" alt="M&E Expert" />
                            </div>
                            <div className="plt-me-audience-text">
                                <p>Our key clients are major media outlets and production houses. <br />
                                    We address their primary needs – low latency streaming, content security, and seamless asset management.</p>
                            </div>
                        </div>
                    </div>

                    {/* Needs Grid */}
                    <div className="plt-me-needs-layout">
                        <div className="plt-me-needs-sidebar">
                            <h2 className="plt-me-needs-h2">Key clients <br /> <span className="plt-me-highlight">needs</span></h2>
                        </div>
                        <div className="plt-me-needs-grid">
                            <div className="plt-me-need-card plt-me-need-streaming">
                                <div className="plt-me-need-header">
                                    <h3>Live Streaming</h3>
                                    <button className="plt-me-need-arrow"><FiArrowRight /></button>
                                </div>
                                <ul className="plt-me-need-list">
                                    <li>Real-time low latency</li>
                                    <li>Global CDN integration</li>
                                    <li>Multi-bitrate adaptive streaming</li>
                                    <li>Interactive viewer features</li>
                                </ul>
                            </div>

                            <div className="plt-me-need-card plt-me-need-vod">
                                <div className="plt-me-need-header">
                                    <h3>Video on Demand</h3>
                                    <button className="plt-me-need-arrow"><FiArrowRight /></button>
                                </div>
                                <ul className="plt-me-need-list">
                                    <li>Cloud-based transcoding</li>
                                    <li>Advanced DRM protection</li>
                                    <li>Content recommendation engines</li>
                                    <li>Seamless cross-device playback</li>
                                </ul>
                            </div>

                            <div className="plt-me-need-card plt-me-need-dam">
                                <div className="plt-me-need-header">
                                    <h3>Asset Management</h3>
                                    <button className="plt-me-need-arrow"><FiArrowRight /></button>
                                </div>
                                <ul className="plt-me-need-list">
                                    <li>Automated metadata tagging</li>
                                    <li>AI-driven content search</li>
                                    <li>Lifecycle workflow automation</li>
                                    <li>Secure cloud storage</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <TrustedSection title="Customers who trust us" />

            {/* 3. CASE STUDIES SLIDER */}
            <section className="plt-me-cases">
                <div className="plt-me-container">
                    <div className="plt-me-cases-header">
                        <h2 className="plt-me-sec-h2">Our M&E software case studies</h2>
                        <p className="plt-me-sec-p">
                            As a media and entertainment app development company, we create best-in-class software tools for your business to fit your needs perfectly. See our best results reflected in our delivered projects.
                        </p>
                    </div>

                    <div className="plt-me-case-slider">
                        <button className="plt-me-slider-nav plt-me-prev" onClick={prevCase}><FiChevronLeft /></button>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currCase}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="plt-me-case-main"
                            >
                                <div className="plt-me-case-info">
                                    <div className="plt-me-case-brand">{caseStudies[currCase].brand}</div>
                                    <h3 className="plt-me-case-title">{caseStudies[currCase].title}</h3>
                                    <div className="plt-me-case-meta">
                                        <span className="plt-me-case-tag">{caseStudies[currCase].tag}</span>
                                    </div>
                                </div>
                                <div className="plt-me-case-visual">
                                    <img src={caseStudies[currCase].img} alt={caseStudies[currCase].title} />
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <button className="plt-me-slider-nav plt-me-next" onClick={nextCase}><FiChevronRight /></button>
                    </div>

                    <div className="plt-me-slider-dots">
                        {caseStudies.map((_, i) => (
                            <span
                                key={i}
                                className={`plt-me-dot ${i === currCase ? 'active' : ''}`}
                                onClick={() => setCurrCase(i)}
                            ></span>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3.5 TECH STACK */}
            <section className="plt-me-tech-stack">
                <div className="plt-me-container">
                    <h2 className="plt-me-sec-h2">Tech stack for media and <br /> entertainment software development</h2>

                    <div className="plt-me-tech-grid">
                        <div className="plt-me-tech-col">
                            <h3>PLAYERS</h3>
                            <ul>
                                <li><FiCheckCircle /> Brightcove</li>
                                <li><FiCheckCircle /> Dacast</li>
                                <li><FiCheckCircle /> Kaltura</li>
                                <li><FiCheckCircle /> Vplayed</li>
                                <li><FiCheckCircle /> Vimond</li>
                                <li><FiCheckCircle /> JW Player</li>
                            </ul>
                        </div>
                        <div className="plt-me-tech-col">
                            <h3>MEDIA PROCESSING</h3>
                            <ul>
                                <li><FiCheckCircle /> AWS Elemental</li>
                                <li><FiCheckCircle /> Harmonic</li>
                                <li><FiCheckCircle /> Zencoder</li>
                                <li><FiCheckCircle /> MediaKind</li>
                                <li><FiCheckCircle /> Vantage</li>
                                <li><FiCheckCircle /> Envivio</li>
                            </ul>
                        </div>
                        <div className="plt-me-tech-col">
                            <h3>ANALYTICS</h3>
                            <ul>
                                <li><FiCheckCircle /> NPAW</li>
                                <li><FiCheckCircle /> Microsoft Clarity</li>
                                <li><FiCheckCircle /> Hotjar</li>
                                <li><FiCheckCircle /> comScore Google Analytics</li>
                                <li><FiCheckCircle /> Broadpeak</li>
                            </ul>
                        </div>
                        <div className="plt-me-tech-col">
                            <h3>CLOUD INFRASTRUCTURE</h3>
                            <ul>
                                <li><FiCheckCircle /> AWS</li>
                                <li><FiCheckCircle /> Azure</li>
                                <li><FiCheckCircle /> Google Cloud</li>
                                <li><FiCheckCircle /> Oracle</li>
                                <li><FiCheckCircle /> Salesforce</li>
                                <li><FiCheckCircle /> Digital Ocean</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. WHY US */}
            <section className="plt-me-why">
                <div className="plt-me-container">
                    <h2 className="plt-me-sec-h2">Why us for M&E software development</h2>
                    <div className="plt-me-why-grid">
                        {whyUs.map((w, i) => (
                            <div key={i} className="plt-me-why-card">
                                <h3>{w.title}</h3>
                                <p>{w.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. TECH STACK (REUSABLE) */}
            <TechStack
                title="Tech stack for media and entertainment software development"
                subtitle="Benefit from highly experienced web and mobile development specialists with a trusted media and entertainment software development company."
            />

            {/* 6. INSIGHTS */}
            <section className="plt-me-insights">
                <div className="plt-me-container">
                    <h2 className="plt-me-sec-h2">Something to think about</h2>
                    <div className="plt-me-insights-grid">
                        <div className="plt-me-insight-feat">
                            {insights.filter(i => i.featured).map((i, idx) => (
                                <div key={idx} className="plt-me-feat-card">
                                    <div className="plt-me-feat-img"><img src={i.img} alt={i.title} /></div>
                                    <div className="plt-me-feat-body">
                                        <span className="plt-me-time">Reading time: {i.time}</span>
                                        <h3>{i.title}</h3>
                                        <p>{i.desc}</p>
                                        <button className="plt-me-link" onClick={() => setSelectedInsight(i)}>See more <FiArrowRight /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="plt-me-insight-list">
                            {insights.filter(i => !i.featured).map((i, idx) => (
                                <div key={idx} className="plt-me-side-card">
                                    <h3>{i.title}</h3>
                                    <div className="plt-me-side-foot">
                                        <span>{i.time}</span>
                                        <button className="plt-me-link" onClick={() => setSelectedInsight(i)}>See more <FiArrowRight /></button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. SOLUTIONS */}
            <section className="plt-me-solutions">
                <div className="plt-me-container">
                    <AIConsultationForm />
                </div>
            </section>

            <Cta />

            {/* Modal */}
            <AnimatePresence>
                {selectedInsight && (
                    <motion.div
                        className="plt-me-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedInsight(null)}
                    >
                        <motion.div
                            className="plt-me-modal-card"
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={e => e.stopPropagation()}
                        >
                            <button className="plt-me-modal-close" onClick={() => setSelectedInsight(null)}><FiX /></button>
                            {selectedInsight.img && <img src={selectedInsight.img} alt={selectedInsight.title} className="plt-me-modal-img" />}
                            <div className="plt-me-modal-body">
                                <h2>{selectedInsight.title}</h2>
                                <p>{selectedInsight.fullContent}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

};


export default MediaEntainment;
