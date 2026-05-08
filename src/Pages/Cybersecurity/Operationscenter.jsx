import React, { useState, useEffect } from 'react';
import {
    FiShield,
    FiActivity,
    FiCheckCircle,
    FiSearch,
    FiZap,
    FiClock,
    FiFileText,
    FiTarget,
    FiPlus,
    FiMinus,
    FiArrowRight,
    FiCheck
} from 'react-icons/fi';
import ServicesHero from '../../components/Hero/Serviceshero';
import AIConsultationForm from '../../components/AIConsultationForm/AIConsultationForm';
import Cta from '../../components/Cta/Cta';
import '../../Style/Cybersecurity/Operationscenter.css';
import iso27001 from '../../assets/images/ISO27001.png';
import gdpr from '../../assets/images/GDPR_certification.png';
import cyberEssentials from '../../assets/images/Cyber_essentials.png';
import owasp from '../../assets/images/OWASP.png';
import hipaa from '../../assets/images/HIPAA.png';
import caseStudyImg from '../../assets/images/security.png';


const OperationsCenter = () => {
    const [activePhase, setActivePhase] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stats = [
        { value: "24/7", label: "Monitoring" },
        { value: "100%", label: "Accuracy" },
        { value: "€3-49", label: "Per Endpoint" }
    ];

    const valueItems = [
        {
            title: "Reduced costs",
            desc: "Devopstrio provides cost-efficient solutions via our shared SOC team, process excellence, and centralized log management."
        },
        {
            title: "Rapid scaling possibilities",
            desc: "With a highly efficient knowledge management framework, we are in the right position to scale up teams in no time at all."
        },
        {
            title: "Certified staff",
            desc: "Devopstrio's SOC-as-a-Service team comprises highly professional and certified employees. We constantly train and develop our staff."
        },
        {
            title: "Process excellence",
            desc: "In addition to our SOC Services, we ensure harmony and control of security processes. Devopstrio's flows are mature and comprehensive."
        },
        {
            title: "Devopstrio's SIEM or integration with customer's SIEM",
            desc: "Devopstrio's team is able to provide affordable SIEM solutions, so you don't need to purchase expensive SIEM software. Also, we can integrate with your SIEM if you have one."
        },
        {
            title: "24/7 monitoring",
            desc: "Devopstrio provides 24/7 IT Security Monitoring with no extra cost for night shifts."
        }
    ];

    const processPhases = [
        {
            title: "Incident response plan",
            desc: "Prioritizing alerts by severity, thoroughly investigating each alert to identify whether it is a false positive or a genuine incident, as well as devising and implementing appropriate responses.",
            points: ["Team structures, classification, and protocols", "Detection and analysis measures", "Containment and recovery steps"]
        },
        {
            title: "SLAs",
            desc: "A Service Level Agreement (SLA) works as a formalized understanding between the service vendor and the customer. It outlines every aspect of the SOC process.",
            points: ["Response times to alerts", "Escalation procedures", "Remediation steps"]
        },
        {
            title: "Threat hunting",
            desc: "This implies actively searching for network threats. Given that Advanced Persistent Threats (APTs) possess capabilities to evade conventional defensive solutions, a proactive strategy becomes imperative.",
            points: ["Hypotheses formulation", "Hypotheses testing", "Iterations"]
        },
        {
            title: "Playbooks",
            desc: "Devopstrio develops playbooks for a range of the most critical threat scenarios. These playbooks provide detailed guidelines on how to react in the event of an incident.",
            points: ["Detection criteria", "Initial response actions", "Containment protocols"]
        },
        {
            title: "Runbooks",
            desc: "We craft comprehensive runbooks for every possible alert. These runbooks include procedures for analyzing alerts and reacting to confirmed incidents effectively.",
            points: ["Checks and audits", "Escalation and notification", "Backup, restoration, and continuity"]
        },
        {
            title: "Comprehensive support",
            desc: "Devopstrio's team offers complete support throughout an entire incident – starting from initial reporting, through mitigating impacts and conducting investigations.",
            points: ["Coordination", "Communication", "Analysis"]
        },
        {
            title: "Reporting",
            desc: "Devopstrio's team of Security specialists prepares regular reports summarizing all the investigated alerts and offering insights into SOC-related efforts.",
            points: ["Overview", "Root cause analysis", "Tech recommendations"]
        }
    ];

    return (
        <div className="dt-soc-page-wrapper">
            <ServicesHero />

            {/* Monitoring Stats */}
            <section className="dt-soc-trust-bar">
                <div className="dt-soc-container">
                    <div className="dt-soc-trust-layout">
                        <div className="dt-soc-trust-left">
                            <h2>Cost-effective 24/7 Security Monitoring by a shared team in <span className="dt-sec-accent-text">real-time</span></h2>
                        </div>
                        <div className="dt-soc-trust-right">
                            {stats.map((s, i) => (
                                <div key={i} className="dt-soc-trust-card">
                                    <span className="dt-trust-value">{s.value}</span>
                                    <span className="dt-trust-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Section */}
            <section className="dt-soc-value">
                <div className="dt-soc-container">
                    <h2 className="dt-sec-section-title">Value we bring</h2>
                    <div className="dt-soc-value-grid">
                        {valueItems.map((item, i) => (
                            <div key={i} className="dt-soc-value-card">
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Phases */}
            <section className="dt-soc-process">
                <div className="dt-soc-container">
                    <h2 className="dt-sec-section-title">Process phases</h2>
                    <div className="dt-soc-process-layout">
                        <div className="dt-soc-process-list">
                            {processPhases.map((phase, i) => (
                                <div key={i} className={`dt-soc-phase-item ${activePhase === i ? 'active' : ''}`} onClick={() => setActivePhase(i)}>
                                    <div className="dt-phase-header">
                                        <span className="dt-phase-num">{String(i + 1).padStart(2, '0')}</span>
                                        <h4>{phase.title}</h4>
                                        {activePhase === i ? <FiMinus /> : <FiPlus />}
                                    </div>
                                    {activePhase === i && (
                                        <div className="dt-phase-body">
                                            <p>{phase.desc}</p>
                                            {phase.points && (
                                                <ul className="dt-phase-points">
                                                    {phase.points.map((point, pIdx) => (
                                                        <li key={pIdx}>
                                                            <div className="dt-point-icon-wrapper">
                                                                <FiCheck className="dt-point-icon" />
                                                            </div>
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Bento Grid Showcase Section */}
            <section className="dt-soc-bento">
                <div className="dt-soc-container">
                    <div className="dt-bento-header">
                        <h2 className="dt-sec-section-title">Ensuring Continuous Security</h2>
                        <p className="dt-sec-section-desc">We monitor every byte so you can focus on growth, knowing your infrastructure is fully protected by Devopstrio experts.</p>
                    </div>

                    <div className="dt-bento-grid">
                        {/* Tall Card - Left */}
                        <div className="dt-bento-card dt-bento-tall">
                            <div className="dt-bento-img">
                                <img src={caseStudyImg} alt="Security Ops" />
                            </div>
                            <div className="dt-bento-content">
                                <h3>10,000+ Threats Neutralized</h3>
                                <p>Continuous monitoring across 50+ global infrastructures with automated response routines.</p>
                            </div>
                        </div>

                        {/* Top Row Middle/Right */}
                        <div className="dt-bento-row-top">
                            <div className="dt-bento-card dt-bento-square-blue">
                                <div className="dt-bento-stat">99.9%</div>
                                <p>Uptime Guaranteed across all managed environments.</p>
                            </div>
                            <div className="dt-bento-card dt-bento-wide-light">
                                <div className="dt-bento-flex">
                                    <div className="dt-bento-icon-box">
                                        <FiShield />
                                        <div className="dt-bento-val">$500M</div>
                                        <span>Assets Protected</span>
                                    </div>
                                    <div className="dt-bento-text">
                                        <h4>Safe and Secure</h4>
                                        <p>Your data and infrastructure are always encrypted and secured with latest protection.</p>
                                        <a href="#" className="dt-bento-link">Read more →</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Row Middle/Right */}
                        <div className="dt-bento-row-bottom">
                            <div className="dt-bento-card dt-bento-wide-gradient">
                                <h3>Real-time Threat Intelligence</h3>
                                <p>Maintaining your infrastructure health and keeping you hassle-free with our personalized guidelines.</p>
                                <div className="dt-bento-features">
                                    <div className="dt-bento-feat">
                                        <FiActivity />
                                        <span>Global Insights</span>
                                    </div>
                                   
                                </div>
                            </div>
                            <div className="dt-bento-card dt-bento-square-green">
                                <div className="dt-bento-icon-main"><FiZap /></div>
                                <div className="dt-bento-stat">60%</div>
                                <p>Faster Incident Response through automated playbooks.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="dt-soc-container">
                <AIConsultationForm
                    title="Let's build your <span className='dt-sec-accent-text'>Security Operations Center</span>"
                    description="Our SOC experts are ready to design and implement a 24/7 monitoring strategy for your organization."
                />
            </div>

            <Cta />
        </div>
    );
};

export default OperationsCenter;
