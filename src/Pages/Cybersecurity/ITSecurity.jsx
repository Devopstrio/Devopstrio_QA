import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    FiShield,
    FiLock,
    FiCheckCircle,
    FiSearch,
    FiActivity,
    FiUsers,
    FiZap,
    FiGlobe,
    FiAlertTriangle,
    FiPlus,
    FiMinus,
    FiChevronLeft,
    FiChevronRight,
    FiAward,
    FiClock,
    FiTrendingUp,
    FiBookOpen,
    FiCloud,
    FiDatabase,
    FiCode,
    FiArrowRight,
    FiArrowDown,
    FiArrowUpRight,
    FiArrowLeft,
    FiFileText,
    FiServer,
    FiCpu,
    FiBarChart2
} from 'react-icons/fi';
import ServicesHero from '../../components/Hero/Serviceshero';
import AITeam from '../../components/AITeam/AITeam';
import Cta from '../../components/Cta/Cta';
import AIConsultationForm from '../../components/AIConsultationForm/AIConsultationForm';
import '../../Style/Cybersecurity/ITSecurity.css';

import iso27001 from '../../assets/images/ISO27001.png';
import gdpr from '../../assets/images/GDPR_certification.png';
import cyberEssentials from '../../assets/images/Cyber_essentials.png';
import owasp from '../../assets/images/OWASP.png';
import hipaa from '../../assets/images/HIPAA.png';
import securityImg from '../../assets/images/datascience/Security_cuber_ddj.png';
import cloudImg from '../../assets/images/cloud.png';
import aiHeroImg from '../../assets/images/ai_hero_bg.png';

const ITSecurity = () => {
    const navigate = useNavigate();
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [activeStory, setActiveStory] = useState(0);
    const [activeTab, setActiveTab] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stats = [
        { value: "50+", label: "successful IT initiatives" },
        { value: "20+", label: "security specialists" },
        { value: "24/7", label: "availability" }
    ];

    const certificates = [
        { name: "SSCP", bgColor: "#1a1a2e" },
        { name: "GDPR\nDPR", bgColor: "#16213e" },
        { name: "OSCP", bgColor: "#1a1a2e" },
        { name: "OSWE", bgColor: "#16213e" }
    ];

    const services = [
        {
            title: "Standard SSD projects",
            icon: <FiCode />,
            desc: "Devopstrio will apply code analysis tools to standard development operations to ensure your product source code is checked against best industry practices and the OWASP guidelines. Also, within continuous CI/CD routines, we will systematically tackle all risks stemming from open source libraries for transparent risk management."
        },
        {
            title: "Advanced SSD initiatives",
            icon: <FiActivity />,
            desc: "This approach is applied to projects that are extremely sensitive, including those potentially threatened by ill-intended team members. When such risks are possible, our constantly growing body of knowledge is used, encompassing isolated environments without any or with very limited Internet access, strict access control, and logging safeguards."
        },
        {
            title: "Standard QA projects",
            icon: <FiCheckCircle />,
            desc: "Devopstrio's software QA package includes a default test strategy covering the OWASP Top 10 recommendations as standard."
        },
        {
            title: "Security audit and hardening",
            icon: <FiShield />,
            desc: "An independent security audit of the production environment is an important milestone for a successful product that draws much attention. Devopstrio's development team provides full support for external penetration and hardening audit activities (PEN-tests)."
        }
    ];

    const sliderRef = React.useRef(null);

    const scrollSlider = (direction) => {
        if (sliderRef.current) {
            const scrollAmount = 430; // Card width + gap
            sliderRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const whatWeDoItems = [
        {
            title: "Software Analysis with Automatic Means",
            desc: "Scanning your solution for vulnerabilities and providing you with a detailed report on any issues found and advice on how to address them.",
            image: securityImg
        },
        {
            title: "Security Culture Establishment",
            desc: "Checking your software project for compliance with governmental requirements, the violation of which may cause penalties or problems.",
            image: cloudImg
        },
        {
            title: "IT Security Audit Services for Your Projects",
            desc: "Rigorously assessing your project for vulnerabilities and potential problems, ranging from architecture to software and infrastructure.",
            image: aiHeroImg
        },
        {
            title: "Security Incident Solution",
            desc: "Assessing the situation and identifying what caused the hack, helping with the recovery, and protecting the software against such problems in the future.",
            image: securityImg
        },
        {
            title: "Security Maintenance",
            desc: "Making security an integral part of development processes so that you feel confident about your product and know that all decisions made and code written are safe.",
            image: cloudImg
        },
        {
            title: "Industrial Cybersecurity",
            desc: "Drawing up the basic requirements for security, presenting them to your employees, and conducting their training on this matter.",
            image: aiHeroImg
        }
    ];

    const insights = [
        {
            title: "Cyber Security Essentials for SMEs In a Nutshell",
            time: "7 mins",
            link: "#"
        },
        {
            title: "Cookies and GDPR",
            time: "4 mins",
            link: "#"
        },
        {
            title: "Security in the Cloud",
            time: "4 mins",
            link: "#"
        }
    ];

    const featuredInsight = {
        title: "Why SD-WAN Security Matters?",
        desc: "Learn all you need to know about SD-WAN technology",
        time: "9 mins",
        image: securityImg, // Using securityImg as a placeholder for the SD-WAN graphic
        link: "#"
    };

    const financeItems = [
        "Banking software",
        "InsureTech and InvestTech",
        "FinTech products"
    ];

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div className="dt-sec-page-wrapper">
            {/* Hero Section */}
            <ServicesHero />

            {/* Trust Stats Bar */}
            <section className="dt-sec-trust-bar">
                <div className="dt-sec-container">
                    <div className="dt-sec-trust-layout">
                        <div className="dt-sec-trust-left">
                            <h2>Data safety and integrity with our <span className="dt-sec-accent-text">IT Security Management</span> Services</h2>
                        </div>
                        <div className="dt-sec-trust-right">
                            {stats.map((s, i) => (
                                <div key={i} className="dt-sec-trust-card">
                                    <span className="dt-trust-value">{s.value}</span>
                                    <span className="dt-trust-label">{s.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Qualified Team Section with Certificates */}
            <section className="dt-sec-team">
                <div className="dt-sec-container">
                    <div className="dt-sec-team-content">
                        <h2 className="dt-sec-section-title">Qualified IT security <span className="dt-sec-accent-text">services team</span></h2>
                        <p className="dt-sec-section-desc">
                            To advance their knowledge, confirm their expertise, and gain further practical skills, our employees obtain the following certificates in the field of information systems security.
                        </p>

                        <div className="dt-sec-certificates">
                            {[iso27001, gdpr, cyberEssentials, owasp, hipaa].map((img, i) => (
                                <div key={i} className="dt-cert-img-wrapper">
                                    <img src={img} alt="Security Certification" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Scope of Services Section */}
            <section className="dt-sec-scope">
                <div className="dt-sec-container">
                    <h2 className="dt-sec-section-title">Scope of our <span className="dt-sec-accent-text">IT Security Services</span></h2>
                    <p className="dt-sec-section-desc">
                        Devopstrio's secure software development practices (SSD) and QA are an important baseline for your digital product's cyber security.
                    </p>

                    <div className="dt-sec-scope-grid">
                        {services.map((service, idx) => (
                            <div key={idx} className="dt-sec-scope-card">
                                <div className="dt-scope-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What We Do Section */}
            <section className="dt-sec-what-we-do">
                <div className="dt-sec-container">
                    <div className="dt-wwd-header">
                        <div className="dt-wwd-title-group">
                            <h2 className="dt-sec-section-title">What We Do </h2>
                        </div>
                        <div className="dt-wwd-subtitle-row">
                            <p className="dt-wwd-subtitle">Design, Develop, and Run robust, secure-by-design business software solutions tailored to your unique enterprise requirements and industry compliance standards.</p>
                            <div className="dt-wwd-controls">
                                <button className="dt-wwd-ctrl-btn" onClick={() => scrollSlider('left')}><FiArrowLeft /></button>
                                <button className="dt-wwd-ctrl-btn active" onClick={() => scrollSlider('right')}><FiArrowRight /></button>
                            </div>
                        </div>

                        <div className="dt-wwd-slider-container">
                            <div className="dt-wwd-slider" ref={sliderRef}>
                                {whatWeDoItems.map((item, idx) => (
                                    <div key={idx} className="dt-wwd-card">
                                        <div className="dt-wwd-card-image">
                                            <img src={item.image} alt={item.title} />
                                            <div className="dt-wwd-card-overlay">
                                                <h4>{item.title}</h4>
                                            </div>
                                        </div>
                                        <div className="dt-wwd-card-content">
                                            <div className="dt-wwd-card-meta">
                                                <div className="dt-wwd-line"></div>
                                            </div>
                                            <p>{item.desc}</p>
                                            <div className="dt-wwd-card-footer">
                                                <div className="dt-wwd-footer-icon">
                                                    <FiActivity />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Something to Think About + Areas of Expertise Combined Section */}
            {/* Book a Call Banner Section */}
            <section className="dt-sec-book-call">
                <div className="dt-sec-container">
                    <div className="dt-book-call-content">
                        <h2>Book a call to analyze and discuss your needs concerning IT Security Services.</h2>
                        <button onClick={() => navigate('/contact')} className="dt-sec-btn-solid">
                            Request consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* Our Projects Section */}
            {/* Insights Section - Something to think about */}
            <section className="dt-sec-insights">
                <div className="dt-sec-container">
                    <h2 className="dt-sec-section-title">Something to think about</h2>
                    <p className="dt-sec-insights-intro">
                        The world is changing quickly, but we, as an IT security consulting company, are closely monitoring the situation. Let us bring to your attention our research in the field of information security.
                    </p>

                    <div className="dt-sec-insights-layout">
                        {/* Featured Insight */}
                        <div className="dt-insights-featured">
                            <div className="dt-featured-image">
                                <img src={featuredInsight.image} alt={featuredInsight.title} />
                            </div>
                            <span className="dt-insight-meta">Reading time: {featuredInsight.time}</span>
                            <h3>{featuredInsight.title}</h3>
                            <p>{featuredInsight.desc}</p>
                            <a href={featuredInsight.link} className="dt-sec-link">See more →</a>
                        </div>

                        {/* Insights List */}
                        <div className="dt-insights-list-column">
                            {insights.map((insight, idx) => (
                                <div key={idx} className="dt-insight-card">
                                    <h4>{insight.title}</h4>
                                    <div className="dt-insight-card-footer">
                                        <span className="dt-insight-meta">Reading time: {insight.time}</span>
                                        <a href={insight.link} className="dt-sec-link">See more →</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Marquee Section */}
            <section className="dt-sec-marquee">
                <div className="dt-marquee-container">
                    <div className="dt-marquee-track">
                        {[...Array(2)].map((_, i) => (
                            <div key={i} className="dt-marquee-group">
                                <span>FINANCE</span>
                                <div className="dt-dot"></div>
                                <span>BLOCKCHAIN</span>
                                <div className="dt-dot"></div>
                                <span>SD-WAN</span>
                                <div className="dt-dot"></div>
                                <span>CLOUD SECURITY</span>
                                <div className="dt-dot"></div>
                                <span>PEN-TESTING</span>
                                <div className="dt-dot"></div>
                                <span>ISO 27001</span>
                                <div className="dt-dot"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <AITeam />

            <div className="dt-sec-container">
                <AIConsultationForm
                    title="Let's secure your <span className='dt-sec-accent-text'>IT Infrastructure</span>"
                    description="Our cybersecurity experts are ready to audit your systems and build a robust defense strategy."
                />
            </div>

            <Cta />
        </div>
    );
};

export default ITSecurity;