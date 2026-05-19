import React, { useState, useEffect } from 'react';
import { 
    FiShield, 
    FiTarget, 
    FiLock, 
    FiZap, 
    FiCheck, 
    FiPlus, 
    FiMinus, 
    FiArrowRight,
    FiActivity,
    FiSearch,
    FiCpu,
    FiChevronLeft,
    FiChevronRight
} from 'react-icons/fi';
import ServicesHero from '../../components/Hero/Serviceshero';
import AIConsultationForm from '../../components/AIConsultationForm/AIConsultationForm';
import Cta from '../../components/Cta/Cta';
import '../../Style/Cybersecurity/Penetrationtesting.css';

// Assets (reusing available ones)
import caseStudyImg from '../../assets/images/security.png';
import devsecopsImg from '../../assets/images/datascience/devsecopsImg.jpg';
import healthcareImg from '../../assets/images/datascience/healthcareImg.jpg';
import blockchainImg from '../../assets/images/blockchain_banking_security_1778190085792.png';
import iso27001 from '../../assets/images/ISO27001.png';
import gdpr from '../../assets/images/GDPR_certification.png';
import cyberEssentials from '../../assets/images/Cyber_essentials.png';
import owasp from '../../assets/images/OWASP.png';
import hipaa from '../../assets/images/HIPAA.png';
import iso42001 from '../../assets/images/ISO42001.png';
import iso9001 from '../../assets/images/ISO9001.png';
import microsoftSecurity from '../../assets/images/Microsoft-Solutions-Partner-Colour-Security.png';


const PenetrationTesting = () => {
    const [activeProcess, setActiveProcess] = useState(0);
    const [activeFaq, setActiveFaq] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stats = [
        { value: "100+", label: "Projects Completed" },
        { value: "150+", label: "Security Experts" },
        { value: "0", label: "Breaches Post-Test" }
    ];

    const values = [
        { title: "Risk Mitigation", desc: "Identify and neutralize vulnerabilities before attackers can exploit them." },
        { title: "Compliance Ready", desc: "Ensure your infrastructure meets ISO 27001, SOC2, and GDPR standards." },
        { title: "Expert Insights", desc: "Detailed reports with actionable remediation steps from world-class hackers." }
    ];

    const [activeService, setActiveService] = useState(0);

    const pentestServices = [
        {
            title: "Web applications",
            desc: "Our penetration testing services simulate attacks against web applications to identify vulnerabilities, e.g., injection flaws, authentication weaknesses, and insecure configurations. Organizations receive prioritized remediation guidance that helps eliminate exploitable weaknesses and reduce risks.",
            listTitle: "Deliverables:",
            points: [
                "Detailed vulnerability report with severity classification",
                "Proof-of-concept exploit demonstrations",
                "Remediation recommendations for identified vulnerabilities",
                "Executive summary for stakeholders"
            ]
        },
        {
            title: "Red teaming",
            desc: "Red team engagements that simulate realistic attack scenarios using techniques such as penetration testing, phishing campaigns, and social engineering. These controlled exercises help organizations identify security weaknesses in technical, physical, and human security defenses and improve their readiness.",
            listTitle: "Results:",
            points: [
                "Report on attack paths and identified vulnerabilities",
                "Assessment of tech, physical, and social security controls",
                "Proof-of-concept demonstrations of successful attack scenarios",
                "Prioritized recommendations for strengthening defenses"
            ]
        },
        {
            title: "GDPR/PII-specific testing",
            desc: "With Devopstrio, these comprehensive and focused assessments evaluate how personal data is handled across your systems, helping validate existing security controls, strengthen your security programs, and ensure compliance with GDPR requirements while identifying potential risks faced by client organizations.",
            listTitle: "Scope:",
            points: [
                "Analysis of personally identifiable information (PII) touchpoints across systems and workflows",
                "Identification and reporting of security threats and vulnerabilities affecting personal data",
                "Re-testing after remediation to verify that the implemented fixes effectively mitigate risks"
            ]
        },
        {
            title: "Mobile applications",
            desc: "Mobile application penetration testing evaluates the full attack surface of the app, encompassing its components, back-end services, and supporting infrastructure used during release and operation. This helps pin down vulnerabilities that could compromise application security and user data.",
            listTitle: "Our capabilities:",
            points: [
                "Static analysis of code without executing the app",
                "Dynamic testing of the application during runtime to detect security flaws",
                "Server-side testing of back-end services, APIs, and application-server interactions"
            ]
        },
        {
            title: "API security testing",
            desc: "API security testing identifies vulnerabilities that attackers could exploit in application programming interfaces. Devopstrio combines automated tools with manual analysis from both external and internal perspectives to evaluate how APIs handle authentication, data processing, and access control.",
            listTitle: "You obtain:",
            points: [
                "Authorization and authentication mechanisms",
                "Input validation and data processing logic",
                "Rate limiting and throttling controls",
                "Protection of data during transmission",
                "Error handling and logging practices",
                "Endpoint and HTTP method security"
            ]
        },
        {
            title: "IoT devices",
            desc: "IoT hardware testing identifies security vulnerabilities in connected devices by combining automated tools, code review, and attack simulation techniques. These assessments evaluate device architecture, communications, and operating environments to strengthen overall IoT security.",
            listTitle: "We take care of:",
            points: [
                "Middleware and framework security",
                "Physical device security",
                "Back-end communication protection",
                "Peripheral interface security",
                "Operating system security",
                "Application-level security"
            ]
        },
        {
            title: "Network testing",
            desc: "Network penetration testing identifies vulnerabilities and misconfigurations across internal and external infrastructure. Devopstrio simulates realistic attack scenarios to evaluate how internal and external networks, systems, and access controls withstand exploitation attempts.",
            listTitle: "What we do:",
            points: [
                "Network mapping and asset discovery",
                "Corporate network infrastructure and segmentation controls",
                "On-premises Active Directory environments",
                "Wireless network security"
            ]
        }
    ];

    const packages = [
        { name: "Standard", price: "€2,500+", features: ["OWASP Top 10", "Network Scan", "Executive Report"] },
        { name: "Professional", price: "€5,000+", features: ["Deep Manual Testing", "API Security", "Remediation Guidance"] },
        { name: "Enterprise", price: "Custom", features: ["Full Red Teaming", "Continuous Monitoring", "Staff Training"] }
    ];

    const frameworks = [
        { 
            name: "OWASP Testing Guide", 
            desc: "The Open Web Application Security Project Guide provides a methodology for identifying and mitigating vulnerabilities in web applications." 
        },
        { 
            name: "CIS Cloud Foundations Benchmark Standard", 
            desc: "The CIS Cloud Foundations Benchmark gives guidelines for cloud security by establishing foundational best practices for information and system protection." 
        },
        { 
            name: "OWASP Mobile Security Testing Guide", 
            desc: "The OWASP Mobile Security Testing Guide offers a methodology for testing the soundness of mobile apps, promoting secure development and assessment." 
        },
        { 
            name: "Penetration Testing Execution Standard", 
            desc: "The PTES establishes a standardized framework for undertaking penetration tests, guaranteeing consistent, productive, and repeatable security assessments." 
        },
        { 
            name: "NIST", 
            desc: "The National Institute of Standards and Technology promotes innovation and competitiveness by advancing accuracy and improving guidelines." 
        },
        { 
            name: "PCI DSS Penetration Testing Guidance", 
            desc: "The PCI DSS defines the guidelines for performing penetration tests to establish the security of cardholder information within payment systems." 
        }
    ];

    const processSteps = [
        { 
            title: "Discovery call", 
            desc: "We start with a detailed discussion to understand your business objectives, technical landscape, and specific security concerns. This ensures our assessment is perfectly aligned with your risk profile." 
        },
        { 
            title: "Custom solution overview", 
            desc: "Based on our discovery, we design a tailored penetration testing strategy, selecting the most effective methodologies and tools for your unique infrastructure and applications." 
        },
        { 
            title: "Scoping", 
            desc: "We define the exact boundaries of the test, including target systems, IP ranges, and excluded assets, ensuring a focused and non-disruptive security evaluation." 
        },
        { 
            title: "Agreement and commitment", 
            desc: "Formalizing the engagement with clear timelines, rules of engagement, and confidentiality agreements to protect your data and ensure professional execution." 
        },
        { 
            title: "Team allocation and kickoff", 
            desc: "We assign a specialized team of certified security experts and hold a kickoff meeting to synchronize expectations and verify access protocols." 
        },
        { 
            title: "Security assessment report", 
            desc: "After thorough testing, we deliver a comprehensive report documenting every finding with risk classifications, proof-of-concept evidence, and prioritized remediation guidance." 
        }
    ];

    const [activeSlide, setActiveSlide] = useState(0);

    const successStories = [
        {
            company: "ING",
            title: "Securing a blockchain-based banking platform",
            desc: "Devopstrio performed penetration testing of a blockchain-based banking platform, including its web applications, infrastructure, and APIs. Testing was conducted in production during agreed low-load periods due to the absence of a test environment. The engagement uncovered critical vulnerabilities such as unauthorized API calls, insecure password changes, and security weaknesses in the Docker infrastructure.",
            tag: "Netherlands",
            image: blockchainImg
        },
        {
            company: "RETAIL-X",
            title: "Zero-Downtime Security for Global E-commerce",
            desc: "Conducted a full-scale offensive security exercise for a top-tier retail giant ahead of Black Friday. Our team identified critical session hijacking vulnerabilities in the checkout flow and worked overnight with their dev team to patch them, ensuring a secure and profitable holiday season.",
            tag: "USA",
            image: devsecopsImg
        },
        {
            company: "MED-SHIELD",
            title: "Fortifying Patient Data for Healthcare Systems",
            desc: "Executed a deep-dive penetration test on a multi-state hospital network's EMR system. We discovered insecure legacy protocols exposing patient records and implemented a modern IAM solution coupled with network segmentation, achieving 100% HIPAA compliance readiness.",
            tag: "UK",
            image: healthcareImg
        }
    ];

    const nextSlide = () => setActiveSlide((prev) => (prev + 1) % successStories.length);
    const prevSlide = () => setActiveSlide((prev) => (prev - 1 + successStories.length) % successStories.length);

    const faqs = [
        { q: "How often should I conduct a pentest?", a: "We recommend at least once a year or after any significant infrastructure change." },
        { q: "Will a pentest disrupt my business?", a: "No. We perform tests in a controlled manner, often using staging environments to ensure zero downtime." },
        { q: "What is the difference between a scan and a pentest?", a: "A scan is automated; a pentest involves manual exploitation by an expert to find logic flaws." },
        { q: "What happens after the pentest is completed?", a: "You receive a detailed report with prioritized remediation steps. We also offer a complimentary re-test to verify that your fixes are effective." },
        { q: "Are your testers certified?", a: "Yes, our team holds world-class certifications including OSCP, CEH, CISSP, and CREST, ensuring the highest level of technical expertise." }
    ];

    return (
        <div className="dt-pentest-page">
            <ServicesHero />

            {/* Stats Bar */}
            <section className="dt-pentest-stats">
                <div className="dt-pentest-container">
                    <div className="dt-pentest-stats-grid">
                        <div className="dt-pentest-stats-left">
                            <h2>Enhance your security with our <span className="dt-pentest-accent">penetration testing</span> company</h2>
                        </div>
                        <div className="dt-pentest-stats-right">
                            {stats.map((s, i) => (
                                <div key={i} className="dt-stat-info-card">
                                    <div className="dt-stat-main">
                                        <span className="dt-stat-num">{s.value}</span>
                                        <span className="dt-stat-txt">{s.label}</span>
                                    </div>
                                    <p className="dt-stat-desc">{s.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="dt-pentest-values">
                <div className="dt-pentest-container">
                    <h2 className="dt-pentest-title">Penetration testing value proposition</h2>
                    <div className="dt-pentest-grid">
                        {values.map((v, i) => (
                            <div key={i} className="dt-value-card">
                                <FiShield className="dt-card-icon" />
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Vertical List */}
            <section className="dt-pentest-services-list">
                <div className="dt-pentest-container">
                    <h2 className="dt-pentest-title">Penetration testing services provided by Devopstrio</h2>
                    <div className="dt-services-tabs-layout">
                        <div className="dt-services-side-nav">
                            {pentestServices.map((service, i) => (
                                <div 
                                    key={i} 
                                    className={`dt-service-tab-item ${activeService === i ? 'active' : ''}`}
                                    onClick={() => setActiveService(i)}
                                >
                                    <span>{service.title}</span>
                                </div>
                            ))}
                        </div>
                        <div className="dt-services-tab-content">
                            <p className="dt-service-main-desc">{pentestServices[activeService].desc}</p>
                            <div className="dt-deliverables-box">
                                <h5>{pentestServices[activeService].listTitle}</h5>
                                <ul className="dt-deliverables-list">
                                    {pentestServices[activeService].points.map((point, j) => (
                                        <li key={j}><FiCheck /> {point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proven Expertise Section */}
            <section className="dt-pentest-expertise">
                <div className="dt-pentest-container">
                    <div className="dt-expertise-header">
                        <h2 className="dt-pentest-title">Proven expertise in Devopstrio's penetration test services</h2>
                        <p className="dt-expertise-desc">Devopstrio is a certified cybersecurity provider that identifies hidden vulnerabilities via structured penetration testing. We deliver actionable remediation plans that help organizations reduce risk and protect critical assets.</p>
                    </div>
                    <div className="dt-expertise-grid">
                        <div className="dt-cert-logo"><img src={iso27001} alt="OSCP" /></div>
                        <div className="dt-cert-logo"><img src={owasp} alt="CEH" /></div>
                        <div className="dt-cert-logo"><img src={gdpr} alt="CISM" /></div>
                        <div className="dt-cert-logo"><img src={cyberEssentials} alt="GIAC" /></div>
                        <div className="dt-cert-logo"><img src={hipaa} alt="GWAPT" /></div>
                        <div className="dt-cert-logo"><img src={iso42001} alt="GXPN" /></div>
                        <div className="dt-cert-logo"><img src={iso9001} alt="CREST" /></div>
                        <div className="dt-cert-logo"><img src={microsoftSecurity} alt="Microsoft Security Partner" /></div>
                    </div>
                </div>
            </section>

            {/* Packages */}
            {/* Frameworks */}
            <section className="dt-pentest-frameworks">
                <div className="dt-pentest-container">
                    <div className="dt-expertise-header">
                        <h2 className="dt-pentest-title">Trusted and reliable frameworks for secure assessments</h2>
                        <p className="dt-expertise-desc">Devopstrio follows well-established cybersecurity frameworks and penetration testing standards for reliable assessments. By applying dependable methodologies, we identify vulnerabilities accurately and provide guidance.</p>
                    </div>
                    <div className="dt-framework-grid">
                        {frameworks.map((f, i) => (
                            <div key={i} className="dt-framework-card">
                                <h4>{f.name}</h4>
                                <p>{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="dt-pentest-process">
                <div className="dt-pentest-container">
                    <div className="dt-expertise-header">
                        <h2 className="dt-pentest-title">Penetration testing process</h2>
                        <p className="dt-expertise-desc">Finding a reliable partner in cybersecurity is critical. Devopstrio follows a structured process while providing penetration testing services. It combines expertise, proven tools, and properly simulated cyberattacks.</p>
                    </div>
                    <div className="dt-process-list">
                        {processSteps.map((step, i) => (
                            <div key={i} className={`dt-process-item ${activeProcess === i ? 'active' : ''}`} onClick={() => setActiveProcess(activeProcess === i ? null : i)}>
                                <div className="dt-process-header">
                                    <span className="dt-process-num">0{i + 1}</span>
                                    <h4>{step.title}</h4>
                                    <div className="dt-process-icon">
                                        {activeProcess === i ? <FiMinus /> : <FiPlus />}
                                    </div>
                                </div>
                                <div className={`dt-process-body ${activeProcess === i ? 'show' : ''}`}>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Story Slider */}
            <section className="dt-pentest-success">
                <div className="dt-pentest-container">
                    <div className="dt-expertise-header">
                        <h2 className="dt-pentest-title">Pen testing success stories</h2>
                        <p className="dt-expertise-desc">Examples of our fruitful collaboration with customers worldwide</p>
                    </div>

                    <div className="dt-success-slider-container">
                        <button className="dt-slider-nav prev" onClick={prevSlide}><FiChevronLeft /></button>
                        
                        <div className="dt-success-slide">
                            <div className="dt-success-text">
                                <div className="dt-success-logo">{successStories[activeSlide].company}</div>
                                <h3>{successStories[activeSlide].title}</h3>
                                <p>{successStories[activeSlide].desc}</p>
                            </div>
                            <div className="dt-success-visual">
                                <img src={successStories[activeSlide].image} alt="Success" />
                                <span className="dt-location-tag">{successStories[activeSlide].tag}</span>
                            </div>
                        </div>

                        <button className="dt-slider-nav next" onClick={nextSlide}><FiChevronRight /></button>
                    </div>

                    <div className="dt-slider-dots">
                        {successStories.map((_, i) => (
                            <span 
                                key={i} 
                                className={`dt-dot ${activeSlide === i ? 'active' : ''}`}
                                onClick={() => setActiveSlide(i)}
                            ></span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            {/* FAQ */}
            <section className="dt-pentest-faq">
                <div className="dt-pentest-container">
                    <div className="dt-expertise-header">
                        <h2 className="dt-pentest-title">Frequently Asked Questions</h2>
                        <p className="dt-expertise-desc">Get answers to the most common questions about our penetration testing services and how we help secure your infrastructure.</p>
                    </div>
                    <div className="dt-faq-list">
                        {faqs.map((f, i) => (
                            <div key={i} className={`dt-faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                                <div className="dt-faq-header">
                                    <span className="dt-faq-num">0{i + 1}</span>
                                    <h4>{f.q}</h4>
                                    <div className="dt-faq-icon">
                                        {activeFaq === i ? <FiMinus /> : <FiPlus />}
                                    </div>
                                </div>
                                <div className={`dt-faq-body ${activeFaq === i ? 'show' : ''}`}>
                                    <p>{f.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="dt-pentest-container">
                <AIConsultationForm 
                    title="Start your <span className='dt-pentest-accent'>Security Audit</span> today"
                    description="Our experts are ready to identify and help you fix vulnerabilities in your infrastructure."
                />
            </div>

            <Cta />
        </div>
    );
};

export default PenetrationTesting;
