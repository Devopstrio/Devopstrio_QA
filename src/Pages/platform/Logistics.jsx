import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiArrowRight, FiCheckCircle, FiChevronDown, FiPlus, FiMinus,
    FiTruck, FiBox, FiPackage, FiActivity, FiCpu, FiShield,
    FiSearch, FiLayers, FiMapPin, FiBarChart2, FiX
} from 'react-icons/fi';
import { FaQuoteLeft } from 'react-icons/fa';
import '../../Style/platform/Logistics.css';
import marees_dev from '../../assets/images/marees_dev.png'

// Components
import Cta from '../../components/Cta/Cta';
import Newsletter from '../../components/Newsletter/Newsletter';
import TrustedSection from '../../components/TrustedSection/TrustedSection';
import TechStack from '../../components/TechStack/TechStack';


const Logistics = () => {
    const navigate = useNavigate();
    const [activeService, setActiveService] = useState(0);
    const [activeProject, setActiveProject] = useState(0);
    const [activeProcess, setActiveProcess] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);
    const [selectedInsight, setSelectedInsight] = useState(null);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const metrics = [
        { val: "5+", lbl: "Years of experience" },
        { val: "100+", lbl: "Projects completed" },
        { val: "30+", lbl: "Logistics experts" },
        { val: "24/7", lbl: "Operational support" }
    ];

    const services = [
        {
            title: "Transportation management systems (TMS)",
            desc: "Devopstrio develops transportation management software that streamlines transportation operations and improves delivery efficiency. These systems support planning, execution, and cost control across logistics networks.",
            features: ["Load planning and carrier selection", "Freight cost optimization", "Shipment tracking and analytics"]
        },
        {
            title: "Warehouse management systems (WMS)",
            desc: "Devopstrio delivers warehouse management software that enhances warehouse operations and ensures accurate inventory management. Our solutions automate storage, picking, and fulfillment processes.",
            features: ["Inventory tracking and stock control", "Picking and packing optimization", "Warehouse layout and resource planning"]
        },
        {
            title: "Supply chain management (SCM)",
            desc: "We provide custom logistics software development for supply chain management, connecting processes across procurement, storage, and cost-effective distribution.",
            features: ["End-to-end supply chain coordination", "Demand forecasting and planning", "Real-time monitoring and alerts"]
        },
        {
            title: "Inventory management software",
            desc: "Devopstrio builds inventory management software that supports accurate stock control and efficient logistics processes. Our solutions help maintain optimal inventory levels across locations.",
            features: ["Real-time inventory visibility", "Replenishment and stock balancing", "Movement tracking and reporting"]
        },
        {
            title: "Custom order management systems",
            desc: "Devopstrio develops custom software solutions that streamline order management and connect systems across logistics workflows. These platforms ensure accurate and timely order execution.",
            features: ["Order lifecycle management", "ERP and CRM integration", "Automated routing and validation"]
        },
        {
            title: "Fleet management systems",
            desc: "We create fleet management software that improves fleet utilization and supports efficient transportation operations. These systems provide full visibility of vehicles and their performance.",
            features: ["Vehicle tracking and diagnostics", "Driver monitoring", "Maintenance planning"]
        },
        {
            title: "Freight forwarding optimization",
            desc: "Devopstrio crafts software solutions that optimize freight forwarding processes and improve coordination across transportation networks. Our tools reduce delays and improve reliability.",
            features: ["Shipment consolidation", "Documentation management", "Cost and performance analysis"]
        },
        {
            title: "Telematics software development",
            desc: "Devopstrio provides telematics software development that enables real-time monitoring across transportation operations. These solutions collect and analyze data from vehicles and assets.",
            features: ["GPS and sensor integration", "Asset and vehicle monitoring", "Predictive analytics and insights"]
        },
        {
            title: "Logistics tracking software",
            desc: "Devopstrio builds software solutions that support planning across logistics workflows and operations. These tools help align resources and forecast demand.",
            features: ["End-to-end shipment visibility", "Status updates and alerts", "Integration with external systems"]
        },
        {
            title: "Planning tools",
            desc: "Devopstrio builds digital solutions that support planning across logistics workflows and operations. These tools help align resources and forecast demand.",
            features: ["Capacity and resource planning", "Demand forecasting", "Performance monitoring"]
        },
        {
            title: "Route optimization",
            desc: "Devopstrio develops route optimization software that improves delivery routes and reduces operational costs. This supports efficient last-mile and multi-stop delivery planning.",
            features: ["Dynamic route calculation", "Constraint-based optimization", "Delivery performance tracking"]
        }
    ];

    const processes = [
        {
            title: "Discovery Phase",
            content: "We begin by deeply understanding your logistics challenges, workflows, and business goals to define the project scope and technical requirements."
        },
        {
            title: "Design & Architecture",
            content: "Our experts design a robust, scalable architecture and intuitive user interfaces focused on efficiency and ease of use in logistics environments."
        },
        {
            title: "Development & QA",
            content: "We use agile methodologies to build your solution, conducting rigorous testing and quality assurance at every stage of the development cycle."
        },
        {
            title: "Deployment & Support",
            content: "We ensure a smooth rollout of your software and provide ongoing maintenance and support to keep your operations running flawlessly."
        }
    ];

    const projects = [
        {
            title: "Global Supply Chain Visibility Platform",
            desc: "Real-time tracking and predictive analytics for a Fortune 500 logistics provider, ensuring end-to-end visibility across continents.",
            img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200"
        },
        {
            title: "Smart Fleet Telematics",
            desc: "Advanced vehicle tracking and diagnostics for optimized fleet operations, reducing fuel costs and improving driver safety.",
            img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200"
        },
        {
            title: "Automated Warehouse WMS",
            desc: "State-of-the-art warehouse management systems for high-speed fulfillment, utilizing AI for stock optimization.",
            img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1200"
        }
    ];

    const insights = [
        {
            title: "IT in Logistics: Latest Trends",
            desc: "Devopstrio overview of the current IT trends in logistics.",
            time: "4 mins",
            img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1200",
            featured: true,
            fullContent: "The logistics industry is undergoing a massive digital transformation. From AI-driven route optimization to blockchain-based supply chain transparency, technology is no longer just an auxiliary tool—it is the backbone of modern operations. This year, we are seeing a significant shift towards hyper-automation and the integration of digital twins to simulate complex logistics networks in real-time."
        },
        {
            title: "Digital Technologies in Logistics",
            time: "8 mins",
            featured: false,
            fullContent: "Digitalization in logistics involves the integration of technologies like cloud computing, IoT, and big data analytics. These tools allow companies to break down silos, ensuring that every stakeholder in the supply chain has access to a single source of truth. By leveraging real-time data, companies can reduce lead times by up to 20% and significantly lower operational overhead."
        },
        {
            title: "IoT for Fleet Management",
            time: "5 mins",
            featured: false,
            fullContent: "IoT devices are revolutionizing how fleets are managed. Sensors can now track everything from fuel consumption and engine health to driver behavior and tire pressure. This data is transmitted in real-time to centralized dashboards, allowing fleet managers to make informed decisions that improve safety and reduce maintenance costs."
        },
        {
            title: "Starting a Logistics Project",
            time: "4 mins",
            featured: false,
            fullContent: "Successful logistics software projects begin with a thorough discovery phase. It's critical to identify the specific pain points—whether it's warehouse congestion, inefficient routing, or lack of visibility. At Andersen, we follow an agile approach, starting with an MVP to validate core functionalities before scaling to a full enterprise solution."
        },
        {
            title: "Why Develop Logistics Software?",
            time: "6 mins",
            featured: false,
            fullContent: "Developing custom logistics software provides a competitive edge that off-the-shelf solutions cannot match. Custom systems are built to fit your unique workflows, allowing for better integration with existing tools and the ability to scale as your business grows. It's an investment in efficiency, reliability, and long-term profitability."
        }
    ];

    const faqs = [
        {
            q: "How long does it take to build a custom logistics solution?",
            a: "The timeline depends on the complexity of the project. A typical MVP can take 3-4 months, while more complex enterprise systems may take 6-12 months."
        },
        {
            q: "Do you integrate with existing ERP or WMS systems?",
            a: "Yes, we specialize in seamless integrations with popular systems like SAP, Oracle, and Microsoft Dynamics, as well as custom legacy solutions."
        },
        {
            q: "What technologies do you use for logistics software?",
            a: "We use a modern stack including React, Node.js, Python, AWS/Azure, and advanced tools for real-time tracking, IoT, and AI-driven analytics."
        }
    ];

    return (
        <div className="plt-lg-page">
            {/* 1. HERO */}
            <section className="plt-lg-hero">
                <div className="plt-lg-container">
                    <div className="plt-lg-hero-layout">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeUp}
                            className="plt-lg-hero-content"
                        >
                            <h1 className="plt-lg-hero-h1">
                                Logistics <span className="plt-lg-gradient-text">Software Development</span> Services
                            </h1>
                            <p className="plt-lg-hero-desc">
                                Devopstrio empowers logistics and supply chain companies with high-performance, custom software solutions that drive efficiency and global scale.
                            </p>
                            <div className="plt-lg-hero-cta">
                                <button className="plt-lg-btn-primary" onClick={() => navigate('/contact')}>
                                    Start Your Project <FiArrowRight />
                                </button>
                            </div>

                            <div className="plt-lg-hero-stats">
                                {metrics.map((m, i) => (
                                    <div key={i} className="plt-lg-hero-stat-item">
                                        <h3>{m.val}</h3>
                                        <p>{m.lbl}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="plt-lg-hero-media">
                            <img src={marees_dev} alt="Logistics Expert" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. INTRO */}
            <section className="plt-lg-intro-section">
                <div className="plt-lg-container">
                    <div className="plt-lg-intro-grid">
                        <h2 className="plt-lg-sec-h2">
                            Reliable partner for logistics software development services
                        </h2>
                        <div className="plt-lg-intro-box">
                            <p className="plt-lg-intro-p">
                                At Devopstrio, we combine deep domain expertise with cutting-edge technology to solve the most complex logistics challenges. From global supply chain visibility to last-mile delivery optimization, we build solutions that move the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3.5 WHY TRUSTED SECTION */}
            <TrustedSection title="Why Devopstrio is a trusted logistics software development company" />

            {/* 3. SERVICES */}
            <section className="plt-lg-services-section">
                <div className="plt-lg-container">
                    <h2 className="plt-lg-sec-h2">Digital logistics development services we offer</h2>

                    <div className="plt-lg-services-layout">
                        <div className="plt-lg-services-sidebar">
                            {services.map((s, i) => (
                                <button
                                    key={i}
                                    className={`plt-lg-service-nav-btn ${activeService === i ? 'active' : ''}`}
                                    onClick={() => setActiveService(i)}
                                >
                                    {s.title}
                                    <FiArrowRight style={{ opacity: activeService === i ? 1 : 0 }} />
                                </button>
                            ))}
                        </div>

                        <div className="plt-lg-service-content">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeService}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <p className="plt-lg-service-desc">{services[activeService].desc}</p>

                                    <div className="plt-lg-service-card">
                                        <h4 className="plt-lg-service-obtain-h4">
                                            With our logistics software development services you can obtain:
                                        </h4>
                                        <div className="plt-lg-service-features">
                                            {services[activeService].features.map((f, idx) => (
                                                <div key={idx} className="plt-lg-feature-item">
                                                    <FiCheckCircle className="plt-lg-feature-icon" />
                                                    <span>{f}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>


            {/* 4. CASE STUDIES (BENTO) */}
            <section className="plt-lg-projects-section">
                <div className="plt-lg-container">
                    <div className="plt-lg-projects-layout">
                        {/* LEFT: Main Media */}
                        <div className="plt-lg-projects-media">
                            <AnimatePresence mode='wait'>
                                <motion.img
                                    key={activeProject}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.5 }}
                                    src={projects[activeProject].img}
                                    alt={projects[activeProject].title}
                                    className="plt-lg-main-project-img"
                                />
                            </AnimatePresence>
                        </div>

                        {/* RIGHT: Content */}
                        <div className="plt-lg-projects-info">
                            <AnimatePresence mode='wait'>
                                <motion.div
                                    key={activeProject}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <h2 className="plt-lg-sec-h2">{projects[activeProject].title}</h2>
                                    <p className="plt-lg-projects-desc">
                                        {projects[activeProject].desc}
                                    </p>
                                </motion.div>
                            </AnimatePresence>

                            <button className="plt-lg-btn-primary" onClick={() => navigate('/case-studies')}>
                                Learn More <FiArrowRight />
                            </button>

                            <div className="plt-lg-projects-sub">
                                <div className="plt-lg-sub-images">
                                    {projects.map((p, i) => (
                                        <div
                                            key={i}
                                            className={`plt-lg-sub-pill ${activeProject === i ? 'active' : ''}`}
                                            onClick={() => setActiveProject(i)}
                                        >
                                            <img src={p.img} alt={p.title} />
                                        </div>
                                    ))}
                                </div>
                                <div className="plt-lg-client-badge">
                                    <div className="plt-lg-client-avatars">
                                        <div className="plt-lg-avatar-group">
                                            <span>20k+</span>
                                            <p>Happy Clients</p>
                                        </div>
                                    </div>
                                    <p className="plt-lg-client-text">Providing exceptional logistics solutions everywhere.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. PROCESS */}
            <section className="plt-lg-process-section">
                <div className="plt-lg-container">
                    <h2 className="plt-lg-sec-h2">How our experts build logistics software solutions</h2>

                    <div className="plt-lg-process-infographic">
                        {processes.map((p, i) => {
                            const icons = [<FiSearch />, <FiLayers />, <FiCpu />, <FiTruck />];
                            return (
                                <React.Fragment key={i}>
                                    <div className="plt-lg-info-card">
                                        <div className="plt-lg-info-icon">{icons[i]}</div>
                                        <h3 className="plt-lg-info-title">{p.title}</h3>
                                        <p className="plt-lg-info-desc">{p.content}</p>
                                        <span className="plt-lg-info-num">0{i + 1}</span>
                                    </div>
                                    {i < processes.length - 1 && (
                                        <div className="plt-lg-info-arrow">
                                            <div className="plt-lg-arrow-circle">
                                                <FiArrowRight />
                                            </div>
                                        </div>
                                    )}
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* Technologies for Logistics Software Development */}
            <TechStack 
                title="Our tech stack for logistics software development"
                subtitle="Andersen applies a diverse, modern tech stack for logistics software development to address complex business requirements and evolving logistics challenges. We select and combine technologies that enable seamless integration, improve system performance, and support scalable, future-ready logistics solutions."
            />

            {/* insights */}
            <section className="plt-lg-insights-section">
                <div className="plt-lg-container">
                    <h2 className="plt-lg-sec-h2 plt-lg-insights-main-h2">
                        Logistics software development insights and best practices
                    </h2>
                    
                    <div className="plt-lg-insights-grid">
                        {/* LEFT: Featured Insight */}
                        <div className="plt-lg-insight-featured">
                            {insights.filter(i => i.featured).map((i, index) => (
                                <div key={index} className="plt-lg-feat-card">
                                    <div className="plt-lg-feat-image">
                                        <img src={i.img} alt={i.title} />
                                    </div>
                                    <div className="plt-lg-feat-content">
                                        <span className="plt-lg-feat-time">Reading time: {i.time}</span>
                                        <h3 className="plt-lg-feat-title">{i.title}</h3>
                                        <p className="plt-lg-feat-desc">{i.desc}</p>
                                        <button className="plt-lg-see-more" onClick={() => setSelectedInsight(i)}>
                                            See more <FiArrowRight />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* RIGHT: Insights List */}
                        <div className="plt-lg-insights-sidebar">
                            {insights.filter(i => !i.featured).map((i, index) => (
                                <div key={index} className="plt-lg-side-card">
                                    <h3 className="plt-lg-side-title">{i.title}</h3>
                                    <div className="plt-lg-side-footer">
                                        <span className="plt-lg-side-time">Reading time: {i.time}</span>
                                        <button className="plt-lg-see-more" onClick={() => setSelectedInsight(i)}>
                                            See more <FiArrowRight />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>


            {/* 6. FAQ */}
            <section className="plt-lg-faq-section">
                <div className="plt-lg-container">
                    <h2 className="plt-lg-sec-h2 plt-lg-faq-h2">Frequently Asked Questions</h2>
                    <div className="plt-lg-faq-list">
                        {faqs.map((f, i) => (
                            <div key={i} className={`plt-lg-faq-item ${openFaq === i ? 'open' : ''}`}>
                                <div
                                    className="plt-lg-faq-q"
                                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                >
                                    <span>{f.q}</span>
                                    {openFaq === i ? <FiMinus /> : <FiPlus />}
                                </div>
                                {openFaq === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        className="plt-lg-faq-a"
                                    >
                                        <div className="plt-lg-faq-a-inner">
                                            {f.a}
                                        </div>
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CTA */}
            <section className="plt-lg-cta-section">
                <div className="plt-lg-container">
                    <Newsletter />
                </div>
            </section>

            <Cta />

            {/* Insight Modal */}
            <AnimatePresence>
                {selectedInsight && (
                    <motion.div 
                        className="plt-lg-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedInsight(null)}
                    >
                        <motion.div 
                            className="plt-lg-modal-container"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="plt-lg-modal-close" onClick={() => setSelectedInsight(null)}>
                                <FiX />
                            </button>
                            <div className="plt-lg-modal-content">
                                {selectedInsight.img && (
                                    <div className="plt-lg-modal-image">
                                        <img src={selectedInsight.img} alt={selectedInsight.title} />
                                    </div>
                                )}
                                <div className="plt-lg-modal-body">
                                    <span className="plt-lg-modal-time">Reading time: {selectedInsight.time}</span>
                                    <h2 className="plt-lg-modal-title">{selectedInsight.title}</h2>
                                    <div className="plt-lg-modal-text">
                                        <p>{selectedInsight.fullContent}</p>
                                    </div>
                                    <button className="plt-lg-btn-primary" onClick={() => setSelectedInsight(null)}>
                                        Close Article
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Logistics;
