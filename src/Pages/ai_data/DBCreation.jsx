import React, { useEffect } from 'react';
import { 
    FiDatabase, FiServer, FiCpu, FiShield, FiActivity, 
    FiArrowRight, FiCheckCircle, FiCheck, FiLayers, FiZap, FiExternalLink, FiClock, FiSearch, FiStar 
} from 'react-icons/fi';
import { 
    SiOracle, SiMysql, SiPostgresql, SiMongodb, SiRedis, 
    SiElasticsearch, SiGooglecloud, SiSnowflake, SiNvidia, SiIntel, SiAmd, SiLinux 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import { VscAzure } from 'react-icons/vsc';
import '../../Style/ai_data/DBCreation.css';

// Components
import AIConsultationForm from '../../components/AIConsultationForm/AIConsultationForm';
import CTA from '../../components/Cta/Cta';
import Hero from '../../components/Hero/Serviceshero';

// Assets (Using existing high-quality assets where applicable)
import Finance_Software from "../../assets/images/New/Finance_Software.png";
import Healthcare from "../../assets/images/New/Healthcare.png";
import Retail_Ecommerce from "../../assets/images/New/Retail_E_commerce.png";
import The_architecture_behind from "../../assets/images/New/The_architecture_behind.png";
import Your_Trusted_Database from "../../assets/images/New/Your_Trusted_Database.png";


const DBCreation = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const techGrid = [
        { name: "Oracle", icon: <SiOracle />, cat: "RDBMS" },
        { name: "MySQL", icon: <SiMysql />, cat: "RDBMS" },
        { name: "PostgreSQL", icon: <SiPostgresql />, cat: "RDBMS" },
        { name: "MongoDB", icon: <SiMongodb />, cat: "NoSQL" },
        { name: "Redis", icon: <SiRedis />, cat: "In-Memory" },
        { name: "Elasticsearch", icon: <SiElasticsearch />, cat: "Search" },
        { name: "AWS Aurora", icon: <FaAws />, cat: "Cloud Native" },
        { name: "Azure SQL", icon: <VscAzure />, cat: "Cloud Native" },
        { name: "Snowflake", icon: <SiSnowflake />, cat: "Data Warehouse" }
    ];

    const expertiseItems = [
        {
            title: "Finance Software",
            items: ["Banking Platforms", "Asset Management", "Payment Gateways"],
            image: Finance_Software
        },
        {
            title: "Healthcare",
            items: ["Patient Records", "Clinical Data", "Health Analytics"],
            image: Healthcare
        },
        {
            title: "Retail & E-commerce",
            items: ["Inventory Systems", "Order Tracking", "Customer Profiling"],
            image: Retail_Ecommerce
        }
    ];

    const row1 = [
        { name: "Oracle", icon: <SiOracle /> },
        { name: "NVIDIA", icon: <SiNvidia /> },
        { name: "Intel", icon: <SiIntel /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "Google", icon: <SiGooglecloud /> },
        { name: "Azure", icon: <VscAzure /> }
    ];

    const row2 = [
        { name: "AMD", icon: <SiAmd /> },
        { name: "Linux", icon: <SiLinux /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Snowflake", icon: <SiSnowflake /> },
        { name: "MySQL", icon: <SiMysql /> }
    ];

    return (
        <div className="dt-db-page">
            {/* Hero Section */}
            {/* <section className="dt-db-hero">
                <div className="dt-db-container">
                    <div className="dt-db-hero-dual">
                        <div className="dt-db-hero-content">
                            <div className="dt-db-hero-badge">
                                <FiActivity /> <span>Premium Database Engineering</span>
                            </div>
                            <h1>Database <span className="dt-db-gradient-text">Creation & Development</span> Services</h1>
                            <p>We architect high-performance, scalable database solutions tailored to your unique business needs. From complex RDBMS clusters to high-throughput NoSQL architectures, we ensure your data is secure, accessible, and optimized.</p>
                            <div className="dt-db-hero-actions">
                                <a href="#consultation" className="dt-db-btn-primary">
                                    Get Started <FiArrowRight />
                                </a>
                            </div>
                        </div>
                        <div className="dt-db-hero-image">
                            <img src={thagalakshmi} alt="Database Expert" />
                        </div>
                    </div>
                </div>
            </section> */}
            <Hero />

            {/* Redesigned Dual Row Marquee Section */}
            <section className="dt-db-brands-marquee">
                <div className="dt-db-container">
                    <h2 className="dt-db-marquee-title">Trusted by Industry <span className="dt-db-gradient-text">Leaders</span></h2>
                </div>
                
                <div className="dt-db-marquee-container">
                    {/* Row 1 - Left to Right */}
                    <div className="dt-db-marquee-row">
                        <div className="dt-db-marquee-track-ltr">
                            {[...row1, ...row1, ...row1].map((item, i) => (
                                <div key={i} className="dt-db-brand-item">
                                    <div className="dt-db-brand-icon">{item.icon}</div>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Row 2 - Right to Left */}
                    <div className="dt-db-marquee-row">
                        <div className="dt-db-marquee-track-rtl">
                            {[...row2, ...row2, ...row2].map((item, i) => (
                                <div key={i} className="dt-db-brand-item">
                                    <div className="dt-db-brand-icon">{item.icon}</div>
                                    <span>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Redesigned Stats & Trust Section */}
            <section className="dt-db-stats-modern">
                <div className="dt-db-container">
                    <div className="dt-db-stats-grid-main">
                        <div className="dt-db-stats-left">
                            <div className="dt-db-stats-intro">
                                <h2 className="dt-db-modern-title">Your Trusted <br/><span className="dt-db-gradient-text">Database Partners</span></h2>
                            </div>
                            <div className="dt-db-stats-2x2">
                                <div className="dt-db-stat-item-modern">
                                    <h3>80+</h3>
                                    <p>Company Partners</p>
                                </div>
                                <div className="dt-db-stat-item-modern featured">
                                    <h3>120+</h3>
                                    <p>Database Projects</p>
                                </div>
                                <div className="dt-db-stat-item-modern">
                                    <h3>450+</h3>
                                    <p>Models Deployed</p>
                                </div>
                                <div className="dt-db-stat-item-modern">
                                    <h3>10+</h3>
                                    <p>Years of Excellence</p>
                                </div>
                            </div>
                        </div>
                        <div className="dt-db-stats-right">
                            <div className="dt-db-stats-desc">
                                <p>We've architected more than 120+ mission-critical database environments for global enterprises, ensuring 99.99% availability and peak query performance across diverse tech stacks.</p>
                            </div>
                            <div className="dt-db-bento-images">
                                <div className="dt-db-bento-main">
                                    <img src={Your_Trusted_Database} alt="Database Infrastructure" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="dt-db-section-spacing">
                <div className="dt-db-container">
                    <h2 className="dt-db-section-title">Tech stack for <br/><span className="dt-db-gradient-text">Database projects</span></h2>
                    
                    <div className="dt-db-tech-layout">
                        <div className="dt-db-tech-info">
                            <h3>RDBMS & Beyond</h3>
                            <p>We help modernize your data infrastructure, migratory or implement new data management systems. We ensure flawless days of support. We exhaustively test all workloads before delivery, ensuring your data is always ready for future potential. Professional systems for your business.</p>
                            <ul className="dt-db-tech-list">
                                <li><FiCheckCircle /> New-built Databases</li>
                                <li><FiCheckCircle /> Client-Server Databases</li>
                                <li><FiCheckCircle /> Cloud & Data Warehouse Solutions</li>
                                <li><FiCheckCircle /> ERP Databases</li>
                                <li><FiCheckCircle /> Migration Services</li>
                            </ul>
                            <a href="#consultation" className="dt-db-btn-primary" style={{marginTop: '30px'}}>
                                Request Solutions
                            </a>
                        </div>
                        <div className="dt-db-tech-grid">
                            {techGrid.map((tech, idx) => (
                                <div key={idx} className="dt-db-tech-item">
                                    <div className="dt-db-tech-icon">{tech.icon}</div>
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Redesigned Case Studies Section */}
            <section className="dt-db-modern-case">
                <div className="dt-db-container">
                    <div className="dt-db-case-split">
                        <div className="dt-db-case-visual">
                            <div className="dt-db-case-img-wrap">
                                <img src={The_architecture_behind} alt="Database Success" />
                                <div className="dt-db-floating-badge">
                                    <div className="dt-db-badge-circle">
                                        <h4>15+</h4>
                                        <span>Years of Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dt-db-case-info-modern">
                            <span className="dt-db-info-tag">WHO WE ARE</span>
                            <h2 className="dt-db-info-title">The architecture behind the company's <span className="dt-db-gradient-text">best days.</span></h2>
                            
                            <div className="dt-db-info-quote">
                                <p>Helping enterprises manage petabytes of data with sub-second latency across global infrastructures.</p>
                            </div>

                            <p className="dt-db-info-body">
                                Our team of database engineers specializes in optimizing high-throughput environments and ensuring seamless data consistency across distributed systems, turning complex data challenges into strategic advantages.
                            </p>

                            <div className="dt-db-info-footer">
                                <div className="dt-db-rating-box">
                                    <div className="dt-db-stars">
                                        <FiStar /> <FiStar /> <FiStar /> <FiStar /> <FiStar />
                                    </div>
                                    <div className="dt-db-rating-val">
                                        <strong>4.9</strong> <span>Client Rating</span>
                                    </div>
                                </div>
                                <div className="dt-db-client-avatars">
                                    <div className="dt-db-avatar">A</div>
                                    <div className="dt-db-avatar">B</div>
                                    <div className="dt-db-avatar">C</div>
                                    <div className="dt-db-avatar-plus">+100</div>
                                </div>
                            </div>

                            <a href="#consultation" className="dt-db-btn-primary">
                                Discover More <FiArrowRight />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="dt-db-section-spacing">
                <div className="dt-db-container">
                    <h2 className="dt-db-section-title">Areas of <span className="dt-db-gradient-text">Expertise</span></h2>
                    <div className="dt-db-expertise-grid">
                        {expertiseItems.map((exp, idx) => (
                            <div key={idx} className="dt-db-exp-card">
                                <div className="dt-db-exp-img">
                                    <img src={exp.image} alt={exp.title} />
                                </div>
                                <div className="dt-db-exp-info">
                                    <h3>{exp.title}</h3>
                                    <ul>
                                        {exp.items.map((item, i) => (
                                            <li key={i}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Consultation Section */}
            <section id="consultation">
                <div className="dt-db-container">
                    <AIConsultationForm />
                </div>
            </section>

            {/* Final CTA */}
            <CTA />
        </div>
    );
};

export default DBCreation;
