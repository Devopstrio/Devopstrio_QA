import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    FiShield, FiLock, FiGlobe, FiBriefcase, FiArrowRight,
    FiPlus, FiMinus, FiFileText, FiAward, FiUsers, FiCpu
} from 'react-icons/fi';
import '../../Style/digital/DigitalSovereignty.css';
import Serviceshero from '../../components/Hero/Serviceshero';


// Assets
import sovereigntyHero from '../../assets/images/Site_img/Devops_1.png';
import whitePaperImg from '../../assets/images/Site_img/devop15.png';

const DigitalSovereignty = () => {
    const [activeTab, setActiveTab] = useState(0);

    const focusAreas = [
        { 
            title: "Vendor Independence", 
            desc: "Strategies to migrate away from proprietary tech stacks and avoid long-term vendor lock-in.",
            points: ["Open-source alternative audits", "Multicloud orchestration", "Data portability frameworks"]
        },
        { 
            title: "Cloud Security & Sovereignty", 
            desc: "Ensuring your cloud environment complies with local data laws and internal security protocols.",
            points: ["Local data residency", "Encryption key management", "Secure cloud exit strategies"]
        },
        { 
            title: "Data Privacy & Governance", 
            desc: "Implementing robust frameworks to protect citizen and customer data across borders.",
            points: ["GDPR/CCPA technical audits", "Privacy-by-design architecture", "Automated compliance monitoring"]
        }
    ];



    return (
        <div className="dt-sovereignty-page">
            <Helmet>
                <title>Digital Sovereignty Consulting | Devopstrio</title>
                <meta name="description" content="Take control of your digital future with Devopstrio's sovereignty services. Avoid vendor lock-in and ensure data compliance." />
            </Helmet>

             {/* Hero Section */}
              <Serviceshero/>

            {/* Overview Section */}
            <section className="dt-overview-section">
                <div className="dt-container">
                    <div className="dt-overview-header">
                        <h2 className="dt-overview-title">Overview</h2>
                        <div className="dt-overview-content">
                            <div className="dt-overview-column">
                                <p>Digital sovereignty has become a recurring topic in executive agendas as regulatory and supplier landscapes grow more complex. Organizations increasingly rely on digital platforms to run critical operations. At the same time, dependency risks and compliance requirements are becoming harder to ignore. This creates a need for greater clarity and long-term control over core systems.</p>
                            </div>
                            <div className="dt-overview-column">
                                <p>Despite growing interest, most organizations still lack a practical way to act. Digital sovereignty is not a product or a standalone service that can simply be purchased or deployed. It is often reduced to isolated technology choices, rather than questions of governance, ownership, and control. What's missing is a clear, structured entry point to assess dependencies, understand trade-offs, and make informed, long-term decisions.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="dt-overview-banner">
                        <div className="dt-banner-text">
                            <h3>Gain clarity and define a clear, structured path toward digital sovereignty</h3>
                        </div>
                        <div className="dt-banner-action">
                            <button className="dt-banner-btn">Request consultation</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Focus Areas (Tabs) */}
            <section className="dt-focus-areas">
                <div className="dt-container">
                    <h2 className="dt-section-title">Our service focus areas</h2>
                    <div className="dt-tabs-layout">
                        <div className="dt-tabs-nav">
                            {focusAreas.map((area, i) => (
                                <button 
                                    key={i} 
                                    className={`dt-tab-btn ${activeTab === i ? 'active' : ''}`}
                                    onClick={() => setActiveTab(i)}
                                >
                                    {area.title}
                                    <FiArrowRight />
                                </button>
                            ))}
                        </div>
                        <div className="dt-tabs-content">
                            <div className="dt-content-card">
                                <h3>{focusAreas[activeTab].title}</h3>
                                <p>{focusAreas[activeTab].desc}</p>
                                <ul className="dt-points-list">
                                    {focusAreas[activeTab].points.map((p, j) => (
                                        <li key={j}><FiFileText /> {p}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* White Papers */}
            <section className="dt-white-papers">
                <div className="dt-container">
                    <h2 className="dt-section-title">Digital sovereignty: white papers</h2>
                    <div className="dt-papers-grid">
                        <div className="dt-paper-card">
                            <div className="dt-paper-image">
                                <img src={whitePaperImg} alt="White Paper" />
                            </div>
                            <div className="dt-paper-info">
                                <span className="dt-tag">Trending</span>
                                <h3>Multicloud & Data Sovereignty</h3>
                                <p>Learn how to architect for data residency across AWS, Azure, and GCP while maintaining a unified security posture.</p>
                                <button className="dt-link-btn">Download PDF <FiArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Devopstrio */}
            <section className="dt-why-section">
                <div className="dt-container">
                    <h2 className="dt-section-title">Why Devopstrio?</h2>
                    <div className="dt-why-grid">
                        <div className="dt-why-card">
                            <FiAward />
                            <h4>Regulatory Readiness</h4>
                            <p>We ensure your digital infrastructure is ready for GDPR, CCPA, and emerging local data protection laws.</p>
                        </div>
                        <div className="dt-why-card">
                            <FiUsers />
                            <h4>Expert Consultants</h4>
                            <p>Our team includes specialists in open-source migration and multicloud orchestration.</p>
                        </div>
                        <div className="dt-why-card">
                            <FiCpu />
                            <h4>Tech Autonomy</h4>
                            <p>We build systems that give you the power to migrate, scale, and evolve without being held hostage by a single provider.</p>
                        </div>
                        <div className="dt-why-card">
                            <FiShield />
                            <h4>Trust-First Design</h4>
                            <p>Sovereignty is built on trust. We implement zero-trust architectures to protect your most valuable assets.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="dt-sovereignty-cta">
                <div className="dt-container">
                    <div className="dt-cta-box">
                        <h2>Gain visibility into your digital dependencies</h2>
                        <p>Take the first step towards a sovereign digital future with our comprehensive dependency audit.</p>
                        <button className="dt-primary-btn">Request an Audit</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalSovereignty;
