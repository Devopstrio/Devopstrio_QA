import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FiCheck, FiLayers, FiShield, FiCpu, FiTrendingUp, FiActivity,
    FiPlus, FiMinus, FiChevronRight, FiChevronLeft, FiBarChart2,
    FiDatabase, FiMonitor, FiArrowRight, FiZap
} from 'react-icons/fi';
import { FaMicrosoft, FaAws, FaSalesforce, FaGoogle } from 'react-icons/fa';
import '../../Style/digital/ITConsulting.css';
import Serviceshero from '../../components/Hero/Serviceshero';
import AIConsultingForm from '../../components/AIConsultationForm/AIConsultationForm';

const ITConsulting = () => {
    const [activeFaq, setActiveFaq] = useState(null);

    const capabilities = [
        { title: "Software development advisory", icon: <FiLayers /> },
        { title: "Cybersecurity advisory and risk management", icon: <FiShield /> },
        { title: "Product-to-market consulting", icon: <FiCpu /> },
        { title: "Interim tech leadership consulting", icon: <FiActivity /> },
        { title: "AI strategy & roadmap consulting", icon: <FiDatabase /> },
        { title: "Digital transformation consulting", icon: <FiTrendingUp /> }
    ];

    const faqs = [
        { q: "How does strategic IT alignment help companies with optimizing my business operations?", a: "By aligning technology with your business objectives, we eliminate technical debt, automate repetitive tasks, and ensure your infrastructure scales efficiently with your growth." },
        { q: "What business results does IT consulting support?", a: "Key results include reduced operational costs, faster time-to-market for products, improved system reliability, and enhanced security posture." },
        { q: "How does your organization engage IT consulting projects?", a: "We follow a structured 4-phase approach: Assessment, Strategy Design, Implementation Support, and Continuous Optimization." },
        { q: "How does a consultancy platform work directly with a service company?", a: "We act as an extension of your team, providing expert guidance while ensuring your internal stakeholders are empowered to manage systems post-delivery." }
    ];

    return (
        <div className="dt-it-consulting-page">
            <Helmet>
                <title>IT Consulting Services | Devopstrio</title>
                <meta name="description" content="Strategic IT consulting to turn business strategy into technical execution." />
            </Helmet>

            {/* Hero Section */}
            <Serviceshero />

            {/* Sub-Hero Stats Card */}
            <section className="dt-hero-stats-section">
                <div className="dt-container">
                    <div className="dt-stats-banner">
                        <div className="dt-stats-text">
                            <h3>IT consulting services that turn business strategy into execution</h3>
                        </div>
                        <div className="dt-stats-grid">
                            <div className="dt-stat-item">
                                <strong>150+</strong>
                                <span>Technical experts</span>
                            </div>
                            <div className="dt-stat-item">
                                <strong>220+</strong>
                                <span>Successful projects</span>
                            </div>
                            <div className="dt-stat-item">
                                <strong>4,375</strong>
                                <span>Completed tasks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope Section (Redesigned 3-Column) */}
            <section className="dt-it-scope-section">
                <div className="dt-container">
                    <div className="dt-it-scope-card">
                        <h2 className="dt-it-section-title centered">Scope of our IT consulting company</h2>
                        
                        <div className="dt-it-scope-grid">
                            <div className="dt-it-scope-item">
                                <div className="dt-it-scope-icon"><FiTrendingUp /></div>
                                <h4>IT strategy development</h4>
                                <p>Devopstrio helps make decisions across platforms, apps, and infrastructure that shape cost structure, investment priorities, and resilience, improving predictability via digital transformation and PDS.</p>
                            </div>
                            <div className="dt-it-scope-item">
                                <div className="dt-it-scope-icon"><FiCpu /></div>
                                <h4>IT infrastructure advice</h4>
                                <p>Devopstrio's IT consultants assess if cloud environments, core platforms, security layers, and integrations support growth without added cost or risk, finding limits or dependencies that affect margins.</p>
                            </div>
                            <div className="dt-it-scope-item">
                                <div className="dt-it-scope-icon"><FiZap /></div>
                                <h4>Technology adoption</h4>
                                <p>As an IT consultancy firm, we guide adoption of new capabilities — from software and data initiatives to design and go-to-market tools — reducing disruption and improving time-to-value and efficiency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities Grid */}
            {/* IT Consulting Capabilities (Redesigned Grid) */}
            <section className="dt-it-capabilities-section">
                <div className="dt-container">
                    <h2 className="dt-it-section-title centered">IT consulting capabilities</h2>
                    <p className="dt-it-section-subtitle centered-max">
                        Devopstrio’s advisory identifies the right solutions for your goals – covering strategy, assessments, standards, and operating models – to improve efficiency, scalability, and impact.
                    </p>
                    
                    <div className="dt-it-capabilities-grid">
                        {[
                            "Software development advisory",
                            "Cyber security advisory and risk assessment",
                            "Project-to-product consulting",
                            "Talent and operating model consulting",
                            "Data and AI strategy consulting",
                            "Digital transformation consulting"
                        ].map((title, i) => (
                            <div key={i} className="dt-it-capability-card-simple">
                                <h4>{title}</h4>
                            </div>
                        ))}
                    </div>

                    <div className="dt-it-cap-cta">
                        <p>Explore how our IT consultancy helps you achieve your business goals.</p>
                        <button className="dt-it-primary-btn">Book a call</button>
                    </div>
                </div>
            </section>

            {/* Alliances Section */}
            <section className="dt-it-alliances-section">
                <div className="dt-container">
                    <h2 className="dt-it-section-title centered">Alliances and partnerships</h2>
                    <div className="dt-it-partners-grid">
                        <div className="dt-it-partner"><FaMicrosoft /> <span>Microsoft</span></div>
                        <div className="dt-it-partner"><FaAws /> <span>AWS</span></div>
                        <div className="dt-it-partner"><FaSalesforce /> <span>Salesforce</span></div>
                        <div className="dt-it-partner"><FiDatabase /> <span>SAP</span></div>
                        <div className="dt-it-partner"><FiActivity /> <span>Creatio</span></div>
                        <div className="dt-it-partner"><FaGoogle /> <span>Google Cloud</span></div>
                    </div>
                </div>
            </section>

            {/* Success Stories (Redesigned Cinematic Layout) */}
            <section className="dt-it-success-section">
                <div className="dt-container">
                    <h2 className="dt-it-section-title">Success stories</h2>
                    
                    <div className="dt-it-success-container">
                        <div className="dt-it-success-narrative">
                            <div className="dt-it-client-logo">
                                <span className="dt-logo-icon">▲</span>
                                <span className="dt-logo-text">CIRDAN CAPITAL</span>
                            </div>
                            <div className="dt-it-success-title-nav">
                                <button className="dt-success-nav-arrow left"><FiChevronLeft /></button>
                                <h3>An Investment Technology Solution</h3>
                                <button className="dt-success-nav-arrow right"><FiChevronRight /></button>
                            </div>
                            <div className="dt-it-success-meta">
                                <span className="dt-it-loc-badge">UK</span>
                            </div>
                        </div>

                        <div className="dt-it-success-visuals-stack">
                            <div className="dt-success-card-main">
                                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" alt="Success Mockup 1" />
                            </div>
                            <div className="dt-success-card-offset-1">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Success Mockup 2" />
                            </div>
                            <div className="dt-success-card-offset-2">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Success Mockup 3" />
                            </div>
                        </div>
                    </div>

                    <div className="dt-it-success-pagination">
                        <div className="dt-pag-bar active"></div>
                        <div className="dt-pag-bar"></div>
                        <div className="dt-pag-bar"></div>
                    </div>
                </div>
            </section>

            {/* Expert Profile */}
            <section className="dt-it-expert-section">
                <div className="dt-container">
                    <div className="dt-it-expert-card">
                        <div className="dt-it-expert-info">
                            <span className="dt-it-tag">OUR EXPERT</span>
                            <h3>Craig Mckay</h3>
                            <p className="dt-it-expert-role">Head of Technology Advisory, Devopstrio</p>
                            <p className="dt-it-expert-text">"Our goal is to provide more than just advice. We provide a partnership that ensures your technology is a competitive advantage, not a hurdle."</p>
                            <ul className="dt-it-expert-skills">
                                <li>Strategic Planning</li>
                                <li>Risk Management</li>
                                <li>Cloud Infrastructure</li>
                                <li>Enterprise Architecture</li>
                            </ul>
                        </div>
                        <div className="dt-it-expert-visual">
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" alt="Expert" />
                        </div>
                    </div>
                    
                </div>
            </section>

            {/* AI Promo Section */}
            <section className="dt-it-ai-promo-section">
                <div className="dt-container">
                    <div className="dt-it-ai-promo-card">
                        <div className="dt-it-ai-text">
                            <h3>See how AI has transformed procurement data into confident sourcing decisions</h3>
                            <button className="dt-it-primary-btn">Explore now</button>
                        </div>
                        <div className="dt-it-ai-visual">
                            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" alt="AI Promo" />
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="dt-it-faq-section">
                <div className="dt-container">
                    <h2 className="dt-it-section-title centered">FAQ</h2>
                    <div className="dt-it-faq-list">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`dt-it-faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                                <div className="dt-it-faq-header">
                                    <h4>{faq.q}</h4>
                                    <span className="dt-it-faq-icon">{activeFaq === i ? <FiMinus /> : <FiPlus />}</span>
                                </div>
                                <div className={`dt-it-faq-body ${activeFaq === i ? 'show' : ''}`}>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consultation Form Section */}
            <div className="dt-it-consultation-wrapper">
                <div className="dt-container">
                    <AIConsultingForm 
                        title="Request an IT consultation"
                        description="Devopstrio's experts are ready to analyze your infrastructure and strategy to propose the most impactful technical solutions."
                        subjectPrefix="IT Consultation Request"
                    />
                </div>
            </div>
        </div>
    );
};

export default ITConsulting;
