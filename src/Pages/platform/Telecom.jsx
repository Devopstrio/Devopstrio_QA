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
import telecom_hero from "../../assets/images/Sermaraj_dev.png";
import telecom_case from "../../assets/images/telecom_case.png";

// Components
import TrustedSection from '../../components/TrustedSection/TrustedSection';
import TechStack from '../../components/TechStack/TechStack';

const Telecom = () => {
    const navigate = useNavigate();
    const [currCase, setCurrCase] = useState(0);

    const metrics = [
        { val: "75+", lbl: "telecom projects", desc: "As a telecom software development company, we make it possible for customers to enhance revenue streams." },
        { val: "100+", lbl: "telecom specialists", desc: "To provide telecom software development services, we employ expert architects and analysts aligned with TM Forum standards." },
        { val: "2", lbl: "weeks to start", desc: "As a vendor of custom telecommunications software solutions, we are fully equipped to address your requirements quickly." }
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
                                Telecom Software <br/>
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
                        <div className="plt-tel-metrics-grid">
                            {metrics.map((m, i) => (
                                <div key={i} className="plt-tel-metric-card">
                                    <div className="plt-tel-metric-bg"></div>
                                    <div className="plt-tel-metric-content">
                                        <h3>{m.val}</h3>
                                        <p className="plt-tel-metric-lbl">{m.lbl}</p>
                                        <p className="plt-tel-metric-desc">{m.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. SERVICE SCOPE */}
            <section className="plt-tel-scope">
                <div className="plt-tel-container">
                    <div className="plt-tel-scope-layout">
                        <div className="plt-tel-scope-info">
                            <h2 className="plt-tel-sec-h2">Service scope</h2>
                            <p className="plt-tel-sec-p">
                                The highly skilled and experienced domain specialists employed by our telecom app development company can modernize your OSS/BSS landscape and build telecom solutions aligned with your operational workflows and strategic goals.
                            </p>
                            <div className="plt-tel-scope-list">
                                <div className="plt-tel-scope-item">
                                    <FiSettings /> <span>OSS/BSS advisory</span>
                                </div>
                                <div className="plt-tel-scope-item">
                                    <FiSmartphone /> <span>Custom software engineering for telcos</span>
                                </div>
                                <div className="plt-tel-scope-item">
                                    <FiDatabase /> <span>Ongoing support and system upkeep</span>
                                </div>
                            </div>
                        </div>
                        <div className="plt-tel-scope-visual">
                             <div className="plt-tel-glass-card">
                                 <h3>Rely on our scope</h3>
                                 <button className="plt-tel-btn-link">See more <FiArrowRight /></button>
                             </div>
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

            {/* 4. CASE STUDIES */}
            <section className="plt-tel-cases">
                <div className="plt-tel-container">
                    <div className="plt-tel-cases-header">
                        <h2 className="plt-tel-sec-h2">Gallery of our projects</h2>
                        <p className="plt-tel-sec-p">Over the years, our telecom software development company has delivered multiple complex and challenging projects for organizations all around the world.</p>
                    </div>

                    <div className="plt-tel-case-slider">
                        <AnimatePresence mode="wait">
                            <motion.div 
                                key={currCase}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                className="plt-tel-case-card"
                            >
                                <div className="plt-tel-case-content">
                                    <div className="plt-tel-case-tag">{caseStudies[currCase].tag}</div>
                                    <h3>{caseStudies[currCase].brand}</h3>
                                    <p>{caseStudies[currCase].title}</p>
                                    <button className="plt-tel-btn-primary" onClick={() => navigate('/clients')}>Discover more</button>
                                </div>
                                <div className="plt-tel-case-img">
                                    <img src={caseStudies[currCase].img} alt={caseStudies[currCase].brand} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
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
                    <div className="plt-tel-testi-card">
                        <div className="plt-tel-testi-quote">
                            <p>"The best thing about Andersen's services is the full transparency of processes. We always knew what’s going on with our business app and didn’t need to worry much about this project status."</p>
                        </div>
                        <div className="plt-tel-testi-author">
                            <div className="plt-tel-author-img">
                                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Roxana Porada" />
                            </div>
                            <div className="plt-tel-author-info">
                                <h4>Roxana Porada</h4>
                                <p>Founder & VP Products at PXL Vision</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. CTA */}
            <section className="plt-tel-cta">
                <div className="plt-tel-container">
                    <div className="plt-tel-cta-card">
                        <h2>Build your custom development team</h2>
                        <p>Get an expert consultation on your IT initiative</p>
                        <button className="plt-tel-btn-primary" onClick={() => navigate('/contact')}>Get a Consultation <FiArrowRight /></button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Telecom;
