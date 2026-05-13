import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    FiShield, FiLock, FiGlobe, FiBriefcase, FiArrowRight,
    FiPlus, FiMinus, FiFileText, FiAward, FiUsers, FiCpu, FiCheck

} from 'react-icons/fi';
import '../../Style/digital/DigitalSovereignty.css';
import Serviceshero from '../../components/Hero/Serviceshero';

import Cta from '../../components/Cta/Cta';
import AIConsultationForm from '../../components/AIConsultationForm/AIConsultationForm';


// Assets
import sovereigntyHero from '../../assets/images/Site_img/Devops_1.png';
import whitePaperImg from '../../assets/images/Site_img/devop15.png';

const DigitalSovereignty = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activePaperTab, setActivePaperTab] = useState(1);



    const focusAreas = [
        {
            title: "Vendor independence",
            desc: "We reduce vendor lock-in by designing systems that preserve portability, ownership, and long-term freedom of choice. Our approach focuses on architectures that evolve over time without constraints from proprietary platforms or single-provider dependencies.",
            points: [
                "Modular and portable system architecture created via tailored custom development;",
                "Multi-vendor, hybrid stack design that eliminates single points of dependency;",
                "Exit-readiness planning supported by documented migration paths and fallback scenarios;",
                "Clear ownership established for code, data models, and all operational artifacts."
            ]
        },
        {
            title: "Operational clarity",
            desc: "We bring structure and visibility to how work is delivered and governed, helping organizations maintain control across teams, projects, and partners. This is supported by Adel, Devopstrio's delivery system, providing a consistent operational view overall.",
            points: [
                "Centralized oversight of delivery processes enabled through the Adel platform;",
                "Clear definition of roles, responsibilities, and transparent decision paths;",
                "Continuous visibility into progress, risks, and cross-team dependencies;",
                "A shared control layer supporting informed and timely management decisions."
            ]
        },
        {
            title: "AI Evaluation",
            desc: "We support AI initiatives with structures that ensure accountability, transparency, and regulatory alignment. This makes AI systems easier to explain, assess, and operate responsibly at scale across complex environments and use cases globally today.",
            points: [
                "Evaluation of AI systems across risk, compliance, and governance dimensions;",
                "Security controls applied across data pipelines, models, and system integrations;",
                "Comprehensive documentation and traceability of AI behavior and decision logic;",
                "Technical evaluation of AI pilots with guidance on scaling to production and ROI."
            ]
        },
        {
            title: "Cloud & Infrastructure",
            desc: "We design infrastructure strategies that give organizations real control over where workloads run and how they are operated. The focus is on resilient, portable environments supporting secure collaboration, sovereign deployment, and operational stability.",
            points: [
                "Hybrid and multi-cloud architectures combining flexibility with strong workload isolation;",
                "Secure, privacy-first communication and collaboration layers for regulated environments;",
                "Sovereign-ready infrastructure based on enterprise Linux and containers for lifecycle control;",
                "EU-hosted deployment options with clear data residency rules and operational boundaries."
            ]
        }
    ];




    const whitePapers = [
        {
            title: "EU AI ACT",
            subtitle: "Measure your structural autonomy in the EU IT sector:",
            points: [
                "Comprehensive guide to compliance with the upcoming EU AI regulations;",
                "Risk-based classification system for AI applications and deployments;",
                "Implementation roadmap for governance and transparency requirements."
            ],
            image: whitePaperImg
        },
        {
            title: "DIGITAL SOVEREIGNTY INDEX",
            subtitle: "Measure your structural autonomy in the EU IT sector:",
            points: [
                "0–63 point maturity scale: five levels from Beginner to Expert;",
                "10-question risk matrix: assessment of code and vendor layers;",
                "Recommended actions: next steps for every question."
            ],
            image: whitePaperImg
        },
        {
            title: "GEOTECH INDEX 2026",
            subtitle: "Measure your structural autonomy in the EU IT sector:",
            points: [
                "Analysis of emerging geopolitical trends affecting technology supply chains;",
                "Evaluation of critical tech sectors and strategic autonomy risks;",
                "Strategic recommendations for 2026 and beyond."
            ],
            image: whitePaperImg
        }
    ];

    return (
        <div className="dt-sovereignty-page">
            <Helmet>
                <title>Digital Sovereignty Consulting | Devopstrio</title>
                <meta name="description" content="Take control of your digital future with Devopstrio's sovereignty services. Avoid vendor lock-in and ensure data compliance." />
            </Helmet>

            {/* Hero Section */}
            <Serviceshero />

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



            {/* Gaps in IT Strategies Section */}
            <section className="dt-gaps-section">
                <div className="dt-container">
                    <div className="dt-gaps-header">
                        <h2 className="dt-gaps-title">The hidden gaps in modern IT strategies</h2>
                        <p className="dt-gaps-subtitle">Most organizations do not lack technology — they lack visibility and control. We structure the conversation before jumping to solutions.</p>
                    </div>
                    <div className="dt-gaps-grid">
                        <div className="dt-gap-card">
                            <h3>Vendor lock-in accepted as normal</h3>
                            <p>Deep integration with a single vendor's ecosystem creates switching costs so high that dependency becomes a default — not a deliberate strategic choice.</p>
                        </div>
                        <div className="dt-gap-card">
                            <h3>AI adoption without clarity</h3>
                            <p>Organizations deploy AI-driven tools without a coherent architectural model for ownership, risk separation, and lifecycle control. AI components are often added in isolation, with limited visibility into data flows and dependencies. As these systems scale, architectural gaps increase operational complexity and reduce observability and maintainability.</p>
                        </div>
                        <div className="dt-gap-card">
                            <h3>No exit-readiness strategy</h3>
                            <p>Few organizations have a tested plan for migrating away from their primary cloud provider or critical SaaS platforms — leaving them exposed to disruptions and price escalations.</p>
                        </div>
                        <div className="dt-gap-card">
                            <h3>Overreliance on single hyperscalers</h3>
                            <p>Concentrating workloads within one cloud ecosystem amplifies risk: service outages, policy changes, or geopolitical events can impact operations with no viable short-term alternatives.</p>
                        </div>
                        <div className="dt-gap-card">
                            <h3>Unclear accountability models</h3>
                            <p>When data, infrastructure, and AI models span multiple providers and jurisdictions, it becomes difficult to determine who is accountable for compliance, security, and operational decisions.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Focus Tabs Section */}
            <section className="dt-focus-tabs-section">
                <div className="dt-container">
                    <div className="dt-tabs-header">
                        <h2 className="dt-tabs-title">Our service focus areas</h2>
                        <p className="dt-tabs-subtitle">We support organizations across key technical domains - from system architecture and delivery oversight to AI evaluation and cloud infrastructure design.</p>
                    </div>

                    <div className="dt-tabs-container">
                        <div className="dt-tabs-sidebar">
                            {focusAreas.map((area, i) => (
                                <div
                                    key={i}
                                    className={`dt-tab-item ${activeTab === i ? 'active' : ''}`}
                                    onClick={() => setActiveTab(i)}
                                >
                                    <span>{area.title}</span>
                                </div>
                            ))}
                        </div>

                        <div className="dt-tabs-content">
                            <div className="dt-content-main">
                                <p className="dt-content-desc">{focusAreas[activeTab].desc}</p>
                                <div className="dt-includes-box">
                                    <h4>What this includes:</h4>
                                    <ul className="dt-includes-list">
                                        {focusAreas[activeTab].points.map((point, j) => (
                                            <li key={j}>
                                                <FiCheck /> {point}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* White Papers Tabs Section */}
            <section className="dt-papers-tabs-section">
                <div className="dt-container">
                    <div className="dt-papers-header">
                        <h2 className="dt-papers-title">Digital sovereignty: white papers</h2>
                        <p className="dt-papers-subtitle">Devopstrio continuously deepens and broadens its expertise and regularly shares it through its white papers.</p>
                    </div>

                    <div className="dt-papers-tabs-nav">
                        {whitePapers.map((paper, i) => (
                            <button
                                key={i}
                                className={`dt-paper-tab-btn ${activePaperTab === i ? 'active' : ''}`}
                                onClick={() => setActivePaperTab(i)}
                            >
                                {paper.title}
                            </button>
                        ))}
                    </div>

                    <div className="dt-paper-content">
                        <div className="dt-paper-grid">
                            <div className="dt-paper-image-box">
                                <div className="dt-image-overlay"></div>
                                <img src={whitePapers[activePaperTab].image} alt={whitePapers[activePaperTab].title} />
                            </div>
                            <div className="dt-paper-info-box">
                                <h3>{whitePapers[activePaperTab].subtitle}</h3>
                                <ul className="dt-paper-points">
                                    {whitePapers[activePaperTab].points.map((point, j) => (
                                        <li key={j}><FiCheck /> {point}</li>
                                    ))}
                                </ul>
                                <button className="dt-discover-btn">Discover more <FiArrowRight /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Devopstrio Section */}
            <section className="dt-why-us-section">
                <div className="dt-container">
                    <div className="dt-why-us-header">
                        <h2 className="dt-why-us-title">Why Devopstrio</h2>
                        <p className="dt-why-us-subtitle">Digital sovereignty is not solved by a single product or a regional data center. It requires architectural thinking, governance maturity, and delivery transparency.</p>
                    </div>
                    <div className="dt-why-us-grid">
                        <div className="dt-why-us-item">
                            <div className="dt-why-us-icon"><FiCpu /></div>
                            <h3>Ecosystem Thinking</h3>
                            <p>We focus on sovereign ecosystems, not sovereign products. Multi-vendor architecture, cloud-agnostic strategies, and AI governance embedded from day one — we design independence, not dependency.</p>
                        </div>
                        <div className="dt-why-us-item">
                            <div className="dt-why-us-icon"><FiFileText /></div>
                            <h3>Transparency by Design</h3>
                            <p>Full lifecycle visibility, clear ownership models, structured documentation, and decision-tracking at every phase. You always know who controls what, where, and how.</p>
                        </div>
                        <div className="dt-why-us-item">
                            <div className="dt-why-us-icon"><FiShield /></div>
                            <h3>AI & Regulatory Readiness</h3>
                            <p>AI risk classification, governance frameworks, documentation standards, and continuous compliance monitoring — all aligned with the EU AI Act and evolving regulatory requirements.</p>
                        </div>
                        <div className="dt-why-us-item">
                            <div className="dt-why-us-icon"><FiBriefcase /></div>
                            <h3>Proven Enterprise Delivery</h3>
                            <p>Critical infrastructure projects, complex cloud transformations, vendor diversification programs, and cross-border delivery models with EU governance and oversight.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Insights Section */}
            <section className="dt-insights-section">
                <div className="dt-container">
                    <div className="dt-insights-header">
                        <h2 className="dt-insights-title">Insights from Devopstrio</h2>
                        <p className="dt-insights-subtitle">Our tech landscape is undergoing rapid change, from generative AI to mobile-first, screenless interactions and cloud migration. Devopstrio carefully tracks each trend and highlights what is most relevant for digital sovereignty.</p>
                    </div>

                    <div className="dt-insights-grid">
                        <div className="dt-insight-card">
                            <span className="dt-insight-tag">Article</span>
                            <h3>Devopstrio & AWS European Sovereign Cloud</h3>
                            <p>Devopstrio expands its cloud portfolio with services on the AWS European Sovereign Cloud. This enables European organizations to modernize IT while ensuring sensitive data remains secure and fully under EU control.</p>
                            <div className="dt-insight-footer">
                                <span>Reading time: 2 mins</span>
                            </div>
                        </div>
                        <div className="dt-insight-card">
                            <span className="dt-insight-tag">Article</span>
                            <h3>EU AI Act: Beyond the Compliance Hurdle</h3>
                            <p>The era of unregulated AI growth is over. Explore the mechanics of the EU AI Act and Devopstrio's strategic framework. Use our roadmap to turn compliance into a high-integrity technical foundation for your enterprise.</p>
                            <div className="dt-insight-footer">
                                <span>Reading time: 5 mins</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <AIConsultationForm
                title="Need guidance on AI and its implications for your business?"
                description="Our team of AI experts can help you navigate the complexities of AI and provide tailored solutions that meet your specific needs. Schedule a consultation to learn more."
                formId="DigitalSovereigntyForm"
            />

            <Cta />
        </div>
    );
};

export default DigitalSovereignty;
