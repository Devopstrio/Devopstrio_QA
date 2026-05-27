import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    FiZap, FiTarget, FiTrendingUp, FiCpu, FiShield, FiUsers, 
    FiPlus, FiMinus, FiChevronRight, FiChevronLeft, FiCheckCircle,
    FiMessageSquare, FiFileText, FiCalendar, FiActivity
} from 'react-icons/fi';
import '../../Style/digital/DigitalTransformation.css';
import Serviceshero from '../../components/Hero/Serviceshero';
import AIConsultingForm from '../../components/AIConsultationForm/AIConsultationForm';

// Assets
import Cta from '../../components/Cta/Cta';
import { Import } from 'lucide-react';


//image 
import Digital1 from '../../assets/images/Digital/Digital_1.jpg';
import Digital2 from '../../assets/images/Digital/Digital_2.png';
import Digital3 from '../../assets/images/Digital/Digital_3.jpg';
import Digital4 from '../../assets/images/Digital/Digital_4.jpg';
import Digital5 from '../../assets/images/Digital/Digital_5.jpg';
import Digital6 from '../../assets/images/Digital/Digital_6.jpg';
import Digital7 from '../../assets/images/Digital/Digital_7.jpg';
import Digital8 from '../../assets/images/Digital/Digital_8.png';
import Digital9 from '../../assets/images/Digital/Digital_9.jpg';
import healthcareImg from '../../assets/images/datascience/healthcareImg.jpg';


const DigitalTransformation = () => {
    const [activeServiceTab, setActiveServiceTab] = useState(0);
    const [activeOutcomeSlide, setActiveOutcomeSlide] = useState(0);
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeDeliveryStep, setActiveDeliveryStep] = useState(5);
    const [activeCaseSlide, setActiveCaseSlide] = useState(0);

    const navRef = useRef(null);

    const scrollTabs = (direction) => {
        if (navRef.current) {
            const scrollAmount = 300;
            navRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const outcomesData = [
        { 
            title: "Controlled transformation", 
            desc: "Manual workflows, disconnected tools, and duplicated effort slow operations and absorb capacity. Devopstrio's experts analyze processes and redesign them using digital tools to reduce friction, improve throughput, and free teams for higher-value work within a clearly defined roadmap.",
            icon: <FiZap /> 
        },
        { 
            title: "Measurable ROI from digital initiatives", 
            desc: "Operational overhead grows when legacy processes and systems persist without clear returns. Our digital transformation consultants assess cost drivers and align tech investments with outcomes to reduce recurring costs and make ROI transparent and measurable.",
            icon: <FiTrendingUp /> 
        },
        { 
            title: "Scalable and resilient systems", 
            desc: "Outdated platforms and tightly coupled systems limit growth across markets, volumes, and products. The Devopstrio digital transformation agency modernizes and re-architects core systems to enable flexible and stable expansion on a modern and maintainable foundation.",
            icon: <FiTarget /> 
        },
        { 
            title: "Scalable technology foundation", 
            desc: "Siloed teams and rigid delivery delay launches and weaken responsiveness. Via digital transformation consulting services, we redesign delivery flows, clarify ownership, and improve coordination to support faster releases while scaling teams, systems, and delivery.",
            icon: <FiCpu /> 
        },
        { 
            title: "Automated and connected workflows", 
            desc: "Disconnected systems bring about inconsistent client journeys and service gaps. Using digital transformation solutions, we align processes, data, and touchpoints and automate cross-system workflows to deliver clearer and consistent experiences across channels.",
            icon: <FiShield /> 
        },
        { 
            title: "Data-driven decision-making", 
            desc: "Scattered data and unclear metrics force business leaders to rely on assumptions that may be inaccurate. Our team structures data access and performance signals so decisions are based on timely, reliable business insights that teams trust and actively use.",
            icon: <FiActivity /> 
        }
    ];

    const servicesCovered = [
        {
            title: "Architecture and lifecycle advisory",
            desc: "Providing solution advisory practices that keep digital landscapes scalable, maintainable, and aligned with strategic business needs.",
            listTitle: "Devopstrio assists with:",
            points: ["Architecture design and technology selection", "Governance and roadmap planning", "Quality, security, and performance standards", "Architecture reviews and improvement"]
        },
        {
            title: "Legacy modernization",
            desc: "Delivering assessment and modernization programs that extend system value while reducing technical debt and operational risk.",
            listTitle: "What we offer:",
            points: ["Legacy system evaluation and risk assessment", "Strategy and target-state definition", "Refactoring, replatforming, or replacement", "Continuity maintenance during transformation"]
        },
        {
            title: "Digital platform engineering",
            desc: "Envisioning and building digital platforms that will support your scalable growth, cost-effective operations, and evolving business models.",
            listTitle: "Devopstrio is a trusted partner for:",
            points: ["Functional concept definition", "End-to-end engineering and integration", "UX, performance, and optimization", "Launch support"]
        },
        {
            title: "IT strategy and optimization",
            desc: "Aligning technology with your business goals to build, scale, and refine a resilient, high-performance digital core.",
            listTitle: "Our offerings include:",
            points: ["Analyzing your IT infrastructure", "Building scalable growth roadmaps", "Optimizing performance and costs", "Ensuring continuous improvement"]
        },
        {
            title: "Data and AI-fueled transformation",
            desc: "Using data and artificial intelligence to improve decision-making, automate analysis, and embed smart capabilities into core processes.",
            listTitle: "Our solutions enable:",
            points: ["Data audits, structuring, and quality improvement", "AI and ML adoption", "Advanced analytics and decision support", "AI embedded into business workflows"]
        },
        {
            title: "Marketing and SalesOps establishment",
            desc: "Aligning tools, data, and processes across marketing and sales to improve lead handling, pipeline transparency, and revenue predictability.",
            listTitle: "Our expertise covers:",
            points: ["CRM, CDP, and sales platform integration", "Marketing automation and lead lifecycle setup", "Analytics, reporting, and projections", "Process synchronization"]
        },
        {
            title: "Cloud and infrastructure potential",
            desc: "Modernizing cloud and infrastructure foundations for better scalability, reliability, cost control, and resilience across systems.",
            listTitle: "You can entrust us with:",
            points: ["Cloud strategy, assessment, and roadmaps", "Migration and modernization", "Cost optimization and governance", "Performance and resilience engineering"]
        },
        {
            title: "System and process digitalization",
            desc: "Digitalizing business processes and systems to enable automation, agile operations, and faster launch of new business models.",
            listTitle: "Devopstrio can take care of:",
            points: ["Workflow analysis and redesign", "Automation and system integration", "Digital support for new initiatives", "Scalability and process optimization"]
        },
        {
            title: "Security, risks, and compliance issues",
            desc: "Tackling security, risk, and compliance challenges that arise from digital transformation, cloud adoption, and increased system complexity.",
            listTitle: "Our team deals with:",
            points: ["Security assessment and risk identification", "Compliance framework implementation", "Secure system design and access governance", "Risk monitoring and incident readiness"]
        }
    ];

    const deliverySteps = [
        { title: "Business and digital assessment", desc: "Detailed analysis of your current business processes and technical infrastructure to identify gaps and opportunities." },
        { title: "Target architecture and roadmap", desc: "Designing a scalable future-state architecture and a phased implementation plan aligned with business goals." },
        { title: "Pilot and value validation", desc: "Testing core concepts through a pilot project to validate technical feasibility and business value." },
        { title: "Scaled implementation", desc: "Deploying the full digital transformation solution across the enterprise with a focus on stability." },
        { title: "Adoption and change enablement", desc: "Ensuring smooth transition through training and cultural alignment across all departments." },
        { title: "Optimization and improvement", desc: "At this subsequent stage, we continuously track performance, refine processes and systems, and adjust solutions based on data and business feedback to sustain results and support strategic impact." }
    ];

    const caseStudies = [
        {
            company: "elanders",
            title: "Assessment and Implementation of Digital Printing Platforms",
            location: "Germany",
            image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2073"
        },
        {
            company: "optima corp",
            title: "Intelligent Automation & Legacy Migration for Global Supply Chains",
            location: "United States",
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
        },
        {
            company: "helios health",
            title: "Cloud-Native EHR Platform Modernization and Custom Patient Portal",
            location: "United Kingdom",
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=800"
        },
        {
            company: "vanguard trust",
            title: "Secure Distributed Banking System and Real-Time AI Fraud Intelligence",
            location: "Switzerland",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
        },
        {
            company: "aerojet industries",
            title: "IoT Smart Manufacturing Ecosystem and AI Predictive Operations",
            location: "Japan",
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
        }
    ];

    const faqs = [
        { q: "What is digital transformation?", a: "Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers." },
        { q: "How long does the process take?", a: "Timelines vary by project complexity, but typical transformations range from 6 months to 2 years for full enterprise adoption." },
        { q: "What are the biggest challenges?", a: "Cultural resistance, legacy technology debt, and lack of specialized talent are common hurdles we help you overcome." }
    ];

    const nextOutcome = () => setActiveOutcomeSlide((prev) => (prev + 1) % 2);
    const prevOutcome = () => setActiveOutcomeSlide((prev) => (prev === 0 ? 1 : 0));

    const nextCaseSlide = () => setActiveCaseSlide((prev) => (prev + 1) % caseStudies.length);
    const prevCaseSlide = () => setActiveCaseSlide((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));

    return (
        <div className="sev-dt-transformation-page">
            <Helmet>
                <title>Digital Transformation Services | Devopstrio</title>
                <meta name="description" content="Accelerate your business growth with Devopstrio's expert digital transformation and consulting services." />
            </Helmet>

            <Serviceshero/>

            {/* Modernizing Section */}
            <section className="sev-dt-modernizing-section">
                <div className="sev-dt-container">
                    <div className="sev-dt-modernizing-grid">
                        <div className="sev-dt-modernizing-text">
                            <h2>Modernizing processes, systems, and teams to scale your business.</h2>
                        </div>
                        <div className="sev-dt-modernizing-stats">
                            <div className="sev-dt-mod-stat-box">
                                <span className="sev-dt-mod-num">2,000+</span>
                                <p>delivered projects</p>
                            </div>
                            <div className="sev-dt-mod-stat-box">
                                <span className="sev-dt-mod-num">19</span>
                                <p>years of engineering experience</p>
                            </div>
                            <div className="sev-dt-mod-stat-box">
                                <span className="sev-dt-mod-num">50+</span>
                                <p>industry certifications and awards</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Outcomes Carousel */}
            <section className="sev-dt-outcomes-carousel-section">
                <div className="sev-dt-container">
                    <h2 className="sev-dt-section-title">Business outcomes of digital transformation</h2>
                    <div className="sev-dt-carousel-wrapper">
                        <button className="sev-dt-carousel-arrow prev" onClick={prevOutcome}><FiChevronLeft /></button>
                        <div className="sev-dt-carousel-track-container">
                            <div className="sev-dt-carousel-track" style={{ transform: `translateX(-${activeOutcomeSlide * 100}%)` }}>
                                {/* Slide 1 */}
                                <div className="sev-dt-carousel-slide">
                                    <div className="sev-dt-slide-grid">
                                        {outcomesData.slice(0, 3).map((item, i) => (
                                            <div key={i} className="sev-dt-outcome-card">
                                                <div className="sev-dt-outcome-icon">{item.icon}</div>
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {/* Slide 2 */}
                                <div className="sev-dt-carousel-slide">
                                    <div className="sev-dt-slide-grid">
                                        {outcomesData.slice(3, 6).map((item, i) => (
                                            <div key={i} className="sev-dt-outcome-card">
                                                <div className="sev-dt-outcome-icon">{item.icon}</div>
                                                <h3>{item.title}</h3>
                                                <p>{item.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="sev-dt-carousel-arrow next" onClick={nextOutcome}><FiChevronRight /></button>
                    </div>
                    <div className="sev-dt-carousel-dots">
                        {[0, 1].map((dot) => (
                            <span 
                                key={dot} 
                                className={`sev-dt-dot ${activeOutcomeSlide === dot ? 'active' : ''}`}
                                onClick={() => setActiveOutcomeSlide(dot)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* What services cover (Refined Horizontal Tabs) */}
            <section className="sev-dt-services-cover-section">
                <div className="sev-dt-container">
                    <h2 className="sev-dt-section-title centered">What digital transformation services cover</h2>
                    
                    {/* Horizontal Pill Navigation with Arrows */}
                    <div className="sev-dt-pill-nav-wrapper">
                        <button className="sev-dt-nav-arrow left" onClick={() => scrollTabs('left')}>
                            <FiChevronLeft />
                        </button>
                        
                        <div className="sev-dt-pill-nav" ref={navRef}>
                            {servicesCovered.map((service, i) => (
                                <button 
                                    key={i} 
                                    className={`sev-dt-pill-item ${activeServiceTab === i ? 'active' : ''}`}
                                    onClick={() => setActiveServiceTab(i)}
                                >
                                    {service.title}
                                </button>
                            ))}
                        </div>

                        <button className="sev-dt-nav-arrow right" onClick={() => scrollTabs('right')}>
                            <FiChevronRight />
                        </button>
                    </div>

                    {/* Content Card (Black Theme) */}
                    <div className="sev-dt-service-display-card dark">
                        <div className="sev-dt-service-info-pane">
                            <h3 className="sev-dt-service-focus-title">{servicesCovered[activeServiceTab]?.title?.toUpperCase()}</h3>
                            <p className="sev-dt-service-main-desc">{servicesCovered[activeServiceTab]?.desc}</p>
                            
                            <div className="sev-dt-service-offer-box">
                                <h5>{servicesCovered[activeServiceTab]?.listTitle?.toUpperCase()}</h5>
                                <ul className="sev-dt-offer-checklist">
                                    {servicesCovered[activeServiceTab]?.points?.map((point, j) => (
                                        <li key={j}><FiCheckCircle /> {point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        
                        <div className="sev-dt-service-visual-pane">
                            <img 
                                src={[
                                    Digital1,
                                    Digital2,
                                    Digital3,
                                    Digital4,
                                    Digital5,
                                    Digital6,
                                    Digital7,
                                    Digital8,
                                    Digital9
                                ][activeServiceTab]} 
                                alt={servicesCovered[activeServiceTab]?.title} 
                                className="sev-dt-service-img"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Alliances and Partnerships */}
            <section className="sev-dt-alliances-section">
                <div className="sev-dt-container">
                    <h2 className="sev-dt-section-title">Alliances and partnerships</h2>
                    <div className="sev-dt-alliances-grid">
                        <div className="sev-dt-alliance-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" className="sev-dt-alliance-logo" />
                        </div>
                        <div className="sev-dt-alliance-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="sev-dt-alliance-logo " />
                        </div>
                        <div className="sev-dt-alliance-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" alt="Oracle" className="sev-dt-alliance-logo" />
                        </div>
                        <div className="sev-dt-alliance-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/SAP_2011_logo.svg" alt="SAP" className="sev-dt-alliance-logo" />
                        </div>
                        <div className="sev-dt-alliance-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" alt="Salesforce" className="sev-dt-alliance-logo" />
                        </div>
                        <div className="sev-dt-alliance-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg" alt="Google Cloud" className="sev-dt-alliance-logo" />
                        </div>
                        <div className="sev-dt-alliance-item">
                            <div className="sev-dt-alliance-text-logo">
                                <span className="sev-dt-dynamics">Dynamics 365</span>
                            </div>
                        </div>
                        <div className="sev-dt-alliance-item">
                            <div className="sev-dt-alliance-text-logo">
                                <span className="sev-dt-creatio">Creatio</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Digital transformation delivery */}
            <section className="sev-dt-delivery-process-section">
                <div className="sev-dt-container">
                    <h2 className="sev-dt-section-title">Digital transformation delivery</h2>
                    <p className="sev-dt-section-subtitle">Devopstrio delivers digital transformation through a structured, end-to-end process – from assessment to scalable implementation and continuous optimization.</p>
                    
                    <div className="sev-dt-delivery-accordion">
                        {deliverySteps.map((step, i) => (
                            <div 
                                key={i} 
                                className={`sev-dt-delivery-item ${activeDeliveryStep === i ? 'active' : ''}`}
                                onClick={() => setActiveDeliveryStep(i)}
                            >
                                <div className="sev-dt-delivery-header">
                                    <span className="sev-dt-delivery-num">0{i + 1}</span>
                                    <h4>{step.title}</h4>
                                    <div className="sev-dt-delivery-toggle">
                                        {activeDeliveryStep === i ? <FiMinus /> : <FiPlus />}
                                    </div>
                                </div>
                                <div className={`sev-dt-delivery-body ${activeDeliveryStep === i ? 'show' : ''}`}>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies Section */}
            <section className="sev-dt-case-studies-section">
                <div className="sev-dt-container">
                    <h2 className="sev-dt-section-title">Digital transformation case studies</h2>
                    <div className="sev-dt-case-slider">
                        <button className="sev-dt-case-arrow prev" onClick={prevCaseSlide}><FiChevronLeft /></button>
                        <div className="sev-dt-case-slide">
                            <div className="sev-dt-case-info">
                                <div className="sev-dt-case-client-logo">
                                    <span className="sev-dt-client-name">{caseStudies[activeCaseSlide].company}</span>
                                </div>
                                <h3>{caseStudies[activeCaseSlide].title}</h3>
                                <span className="sev-dt-case-location">{caseStudies[activeCaseSlide].location}</span>
                            </div>
                            <div className="sev-dt-case-visual">
                                <img src={caseStudies[activeCaseSlide].image} alt="Case Study" />
                            </div>
                        </div>
                        <button className="sev-dt-case-arrow next" onClick={nextCaseSlide}><FiChevronRight /></button>
                    </div>
                    <div className="sev-dt-case-dots">
                        {[0, 1, 2, 3, 4].map((dot) => (
                            <span 
                                key={dot} 
                                className={`sev-dt-dot ${activeCaseSlide === dot ? 'active' : ''}`}
                                onClick={() => setActiveCaseSlide(dot)}
                            />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Insights on digital transformation */}
            <section className="sev-dt-insights-section">
                <div className="sev-dt-container">
                    <h2 className="sev-dt-section-title">Insights on digital transformation</h2>
                    <p className="sev-dt-section-subtitle">Insights from Devopstrio's experts based on real-world delivery experience across complex transformation programs.</p>

                    <div className="sev-dt-insights-main-grid">
                        {/* Main Featured Video Card */}
                        <div className="sev-dt-insights-featured-card">
                            <div className="sev-dt-featured-visual">
                                <img src={healthcareImg} alt="Healthcare Transformation" />
                                <span className="sev-dt-duration-badge">0:37:48</span>
                            </div>
                            <div className="sev-dt-featured-info">
                                <span className="sev-dt-category-label">INTERVIEW</span>
                                <h3>Healthcare Transformation</h3>
                                <p>Claus Torp Jensen, C-Suite Transformation Leader and CIO, speaks about how digital transformation, AI, and RPM are revolutionizing patient care and trust in virtual services.</p>
                            </div>
                        </div>

                        {/* Sidebar Talks */}
                        <div className="sev-dt-insights-sidebar">
                            <div className="sev-dt-sidebar-talk">
                                <div className="sev-dt-talk-thumb">
                                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="Expert 1" />
                                    <span className="sev-dt-duration-mini">0:56</span>
                                </div>
                                <div className="sev-dt-talk-content">
                                    <span className="sev-dt-category-label">EXPERT TALKS</span>
                                    <h4>Why is digitalization not only for large companies?</h4>
                                </div>
                            </div>
                            <div className="sev-dt-sidebar-talk">
                                <div className="sev-dt-talk-thumb">
                                    <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" alt="Expert 2" />
                                    <span className="sev-dt-duration-mini">0:41</span>
                                </div>
                                <div className="sev-dt-talk-content">
                                    <span className="sev-dt-category-label">EXPERT TALKS</span>
                                    <h4>The future of contactless payments in retail</h4>
                                </div>
                            </div>
                            <div className="sev-dt-sidebar-talk">
                                <div className="sev-dt-talk-thumb">
                                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" alt="Expert 3" />
                                    <span className="sev-dt-duration-mini">1:12</span>
                                </div>
                                <div className="sev-dt-talk-content">
                                    <span className="sev-dt-category-label">EXPERT TALKS</span>
                                    <h4>Scalability challenges in cloud transformation</h4>
                                </div>
                            </div>
                            <div className="sev-dt-sidebar-talk">
                                <div className="sev-dt-talk-thumb">
                                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" alt="Expert 4" />
                                    <span className="sev-dt-duration-mini">0:28</span>
                                </div>
                                <div className="sev-dt-talk-content">
                                    <span className="sev-dt-category-label">EXPERT TALKS</span>
                                    <h4>AI-driven decision making for CEOs</h4>
                                </div>
                            </div>
                            <div className="sev-dt-sidebar-talk">
                                <div className="sev-dt-talk-thumb">
                                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" alt="Expert 5" />
                                    <span className="sev-dt-duration-mini">0:52</span>
                                </div>
                                <div className="sev-dt-talk-content">
                                    <span className="sev-dt-category-label">EXPERT TALKS</span>
                                    <h4>Building resilient engineering cultures</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sev-dt-insights-bottom-grid">
                        <div className="sev-dt-bottom-insight-card text-card">
                            <div className="sev-dt-bottom-info">
                                <span className="sev-dt-category-label">BANKING</span>
                                <h4>How Technology Is Driving Transformation in Banking</h4>
                            </div>
                        </div>
                        <div className="sev-dt-bottom-insight-card visual-card">
                            <div className="sev-dt-bottom-visual">
                                <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" alt="Logistics" />
                                <span className="sev-dt-reading-badge">Reading time: 8 mins</span>
                            </div>
                            <div className="sev-dt-bottom-info">
                                <span className="sev-dt-category-label">ARTICLE</span>
                                <h4>Digital Technologies in Logistics</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="sev-dt-faq-dig-section">
                <div className="sev-dt-container">
                    <h2 className="sev-dt-section-title">FAQ</h2>
                    <div className="sev-dt-faq-list">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`sev-dt-faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                                <div className="sev-dt-faq-header">
                                    <h4>{faq.q}</h4>
                                    <span>{activeFaq === i ? <FiMinus /> : <FiPlus />}</span>
                                </div>
                                <div className={`sev-dt-faq-body ${activeFaq === i ? 'show' : ''}`}>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="sev-dt-consultation-section">
                <div className="sev-dt-container">
                    <AIConsultingForm />
                </div>
            </section>



            {/* CTA Section */}
            <Cta />
            


        </div>
    );
};

export default DigitalTransformation;
