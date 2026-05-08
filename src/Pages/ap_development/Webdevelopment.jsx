import React, { useState } from 'react';
import { 
    FiChevronLeft, FiChevronRight, FiPlus, FiMinus, FiCheckCircle, 
    FiCpu, FiZap, FiLayers, FiShield, FiTrendingUp, FiActivity,
    FiLayout, FiDatabase, FiCloud, FiGlobe, FiCode, FiSmartphone, FiUsers, FiArrowRight
} from 'react-icons/fi';
import {
    SiReact, SiNodedotjs, SiPython, SiPostgresql,
    SiDocker, SiTypescript, SiJavascript, SiMongodb, SiRedis,
    SiVuedotjs, SiAngular, SiNextdotjs, SiTailwindcss, SiKubernetes
} from 'react-icons/si';

// =================== STYLE IMPORT =====================
import '../../Style/ap_development/Webdevelopment.css';

// =================== COMPONENT IMPORT =====================
import AIConsultationForm from '../../components/AIConsultationForm/AIConsultationForm';
import CTA from '../../components/Cta/Cta';
import ServiceHero from '../../components/Hero/Serviceshero';

const Webdevelopment = () => {
    const [activeProcess, setActiveProcess] = useState(0);
    const [activeProject, setActiveProject] = useState(0);
    const [activeTech, setActiveTech] = useState(0);
    const [activeOffering, setActiveOffering] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);
    const [activeTechTab, setActiveTechTab] = useState('Popular');

    const technologyData = {
        'Popular': [
            { name: 'iOS', icon: 'https://cdn.simpleicons.org/apple/white' },
            { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
            { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' }
        ],
        'Mobile': [
            { name: 'iOS', icon: 'https://cdn.simpleicons.org/apple/white' },
            { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg' },
            { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
            { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Xamarin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg' }
        ],
        'Front-end': [
            { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
            { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' }
        ],
        'Back-end': [
            { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
            { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
            { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'Golang', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' }
        ],
        'Database': [
            { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
            { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
            { name: 'MS Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
            { name: 'MS SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' }
        ],
        'Cloud': [
            { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
            { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
            { name: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg' }
        ],
        'CMS': [
            { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
            { name: 'Drupal', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/drupal/drupal-original.svg' },

        ]
    };

    React.useEffect(() => {
        const sections = document.querySelectorAll(".dt-pane-content");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveOffering(Number(entry.target.dataset.index));
                    }
                });
            },
            {
                threshold: 0.5
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const webOfferings = [
        {
            num: "01",
            title: "Web Application Development",
            desc: "Devopstrio's Web app engineering experts design and develop optimized Web browsing solutions to ensure your end-users can quickly and conveniently accomplish their tasks.",
            weBuild: ["Custom web apps", "SaaS digital products", "PWAs", "Single-page solutions"]
        },
        {
            num: "02",
            title: "Custom Web Development",
            desc: "Devopstrio has all the resources and developers to assist with any project you outsource in the Custom Web Development domain. Whether you're addressing UI/UX challenges, responsiveness, performance optimization, or any other issues, we can unleash the full power of Web Tech for you.",
            weBuild: ["Sites and custom Web solutions", "CMS, CRM, and API development", "Web integration and optimization projects"]
        },
        {
            num: "03",
            title: "Staff Augmentation",
            desc: "When additional Web development experts are needed, we quickly assign the required talent within the agreed budget. Having implemented multiple custom projects, we know how effective Staff Augmentation works.",
            weBuild: ["Qualified tech experts", "Timely delivery under your guidance", "Scalable and cost-effective talent"]
        },
        {
            num: "04",
            title: "Technological Partnership",
            desc: "We can do more than a single service provider. Devopstrio takes on the role of a collaborator, contributing to your growth and innovation. Surpassing regular vendor-customer interactions, we help to shape corporate strategies and establish a competitive IT landscape.",
            weBuild: ["Web development consulting", "Integration planning", "Security and maintenance"]
        },
        {
            num: "05",
            title: "Web Design Services",
            desc: "Outsource IT plans to our in-house UI/UX experts to secure the translation of your ideas into impactful interfaces. Craft a look and feel that resonates with end-users and reflects your image, brand, advantages, and values.",
            weBuild: ["Product and Web design", "Redesign services", "UX/UI audits", "Branding and graphic design"]
        },
        {
            num: "06",
            title: "QA for Web Projects",
            desc: "Devopstrio's QA scope for Web projects encompasses all facets mandated by user expectations. With our Web Testing Services, your product will meet all modern requirements and deliver convenient, productive, and seamless experiences.",
            weBuild: ["Functional and performance testing", "Usability and accessibility", "Security and recovery testing"]
        },
        {
            num: "07",
            title: "Marketing services",
            desc: "Maximize the impact of your websites and platforms with marketing experts who understand both code and conversion. From SEO and analytics to site promotion and content strategy, we align each touchpoint with your business goals.",
            weBuild: ["SEO (Tech, On-page, Off-page)", "AEO strategy development", "Conversion rate optimization", "Comprehensive analytics"]
        },
        {
            num: "08",
            title: "Architecture Development",
            desc: "As a web development company, we employ a talent pool of Software Architects prepared to take care of performance, scalability, and reliability end-to-end. Working with us is the best way to secure a robust and flexible basis for your digital solutions.",
            weBuild: ["Architectural drivers definition", "Quality attributes technique", "C4 best practices design", "Infrastructure requirements"]
        },
        {
            num: "09",
            title: "Infrastructure Support",
            desc: "Devopstrio's proficient team of Web infrastructure experts ensures that your digital ecosystems meet high performance, agility, and dependability standards. The resulting infrastructure will facilitate seamless operations and an exceptional UX for the end-users.",
            weBuild: ["Infrastructure monitoring", "Cloud migration", "Disaster recovery"]
        },
        {
            num: "10",
            title: "MVP Development",
            desc: "Devopstrio's dedicated team of MVP engineering experts is committed to helping customers bring their vision to life quickly and efficiently. We focus on building lean, scalable Web solutions that address core user needs.",
            weBuild: ["MVP ideation", "Web prototyping", "Launch strategies"]
        },
        {
            num: "11",
            title: "Web 3.0 Development",
            desc: "Ensure greater decentralization, openness, and usefulness of your next-gen products with our Web 3.0 Software Development resources and competencies. Collaborate with our Web 3.0 developers to leverage the new era of the web.",
            weBuild: ["Data ownership control", "Better privacy and security", "Traceability and universal access"]
        },
        {
            num: "12",
            title: "AI Web Development",
            desc: "Leverage our AI Web Development to transform your business processes. Devopstrio chooses the right AI tools and creates industry-specific applications designed to accelerate AI integration, boosting your operational efficiency.",
            weBuild: ["AI recommendation systems", "NLP, CV, ML, analytics", "AI-powered chatbots"]
        }
    ];

    const advancedTechCards = [
        {
            title: "AI Integration",
            desc: "Empower your web applications with machine learning, natural language processing, and predictive analytics to automate complex workflows and enhance user decision-making.",
            icon: <FiCpu />
        },
        {
            title: "Cloud Native",
            desc: "Building highly scalable, resilient web platforms using microservices architecture, serverless functions, and container orchestration with AWS, Azure, and GCP.",
            icon: <FiCloud />
        },
        {
            title: "Real-time Systems",
            desc: "Implementing high-performance web solutions with WebSocket, WebRTC, and real-time data streaming for collaborative tools, fintech, and interactive dashboards.",
            icon: <FiZap />
        },
        {
            title: "Web Security",
            desc: "Advanced protection against OWASP Top 10 threats, implementing zero-trust architecture, robust encryption, and automated security auditing for web platforms.",
            icon: <FiShield />
        },
        {
            title: "Blockchain Web3",
            desc: "Integrating decentralized identity, smart contracts, and blockchain traceability into modern web applications for transparent and secure digital ecosystems.",
            icon: <FiTrendingUp />
        }
    ];

    const portfolioProjects = [
        {
            tab: "CUSTOMER WEB PORTALS",
            company: "Verivox",
            title: "A FinTech Portal to Compare Utility Payment Rates",
            desc: "These web solutions are centralized platforms for interactions with clients:",
            features: [
                "Provision of customer service",
                "Dissemination of information",
                "Communication",
                "Transaction management"
            ],
            img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200&h=800",
            logo: "https://www.verivox.de/static/img/verivox-logo.svg"
        },
        {
            tab: "EMPLOYEE WEB PORTALS",
            company: "4JET",
            title: "A Worktime-Tracking Tool for a Manufacturing Enterprise",
            desc: "Employee web portals enable staff management and collaboration:",
            features: [
                "Document circulation",
                "Access to job-specific resources",
                "Work tracking and training",
                "HR flows, remote work support, etc."
            ],
            img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200&h=800",
            logo: "https://4jet.de/templates/4jet/img/logo.png"
        },
        {
            tab: "WEB APPS FOR FRONT OFFICE",
            company: "FTI GROUP",
            title: "An Internal Tool for a Travel Company to Manage Vouchers",
            desc: "This application class serves client-facing departments:",
            features: [
                "Scheduling",
                "Management of client relations, sales, tasks, and contacts",
                "Help desks",
                "Analytical reporting"
            ],
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200&h=800",
            logo: "https://www.fti-group.com/fileadmin/user_upload/FTI_Group_Logo.png"
        },
        {
            tab: "ENTERPRISE WEB PRESENCE DEVELOPMENT",
            company: "SIEMENS",
            title: "A Web App for Motor Engineering",
            desc: "Enterprise-grade sites unite presentation and manufacturing:",
            features: [
                "Integration with ERP platforms",
                "Multi-device support",
                "Advanced CMS",
                "Single sign-on functionalities"
            ],
            img: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&q=80&w=1200&h=800",
            logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Siemens-logo.svg/1024px-Siemens-logo.svg.png"
        },
        {
            tab: "CORPORATE WEB PRESENCE DEVELOPMENT",
            company: "SWISS RED CROSS",
            title: "A Website for a Humanitarian Organization",
            desc: "Corporate presences represent companies on the Internet:",
            features: [
                "Product galleries",
                "Social media integration",
                "Integration with dedicated platforms",
                "Contact channels"
            ],
            img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1200&h=800",
            logo: "https://www.redcross.ch/themes/custom/src_theme/logo.svg"
        }
    ];

    const processSteps = [
        {
            num: "01",
            title: "Discovery Phase",
            desc: "Devopstrio's experts envision the future solution with all must-haves taken into consideration and scrutinized:",
            features: ["Customer research", "Competitor benchmarking", "Conceptualization and ideation"]
        },
        {
            num: "02",
            title: "Requirements Specification",
            desc: "At this stage, the mission and vision of the web product transform into a clear, actionable engineering plan:",
            features: ["Elicitation", "Documentation", "Research-based validation"]
        },
        {
            num: "03",
            title: "UX/UI Design",
            desc: "The planned Web solution takes shape, and its future look and feel is defined:",
            features: ["User research", "Wireframing", "Prototyping"]
        },
        {
            num: "04",
            title: "Architecture",
            desc: "Devopstrio's team lays the technology basis of your future feature-packed and intuitive solution to ensure proper data flows:",
            features: ["Architecture design", "Data modeling", "Storage safeguards"]
        },
        {
            num: "05",
            title: "Front-end development",
            desc: "The team takes care of the elements of your Web development project that end-users interact with to create a highly usable solution:",
            features: ["UI/UX refinement", "Component development", "Performance optimization"]
        },
        {
            num: "06",
            title: "Back-end Development",
            desc: "The behind-the-scenes aspects of your Web development project we create will ensure a robust and efficient solution:",
            features: ["Databases", "API creation", "Compliance and security"]
        },
        {
            num: "07",
            title: "Integrations",
            desc: "No digital product works in a vacuum. Any solution must be integrated with its current neighbors and suitable for future ones:",
            features: ["Integration strategy", "API implementation", "Compliance procedures"]
        },
        {
            num: "08",
            title: "Quality Assurance",
            desc: "All intricacies are subject to end-to-end testing to reveal any shortcomings before entering the market:",
            features: ["QA planning", "Manual testing", "Automated testing"]
        },
        {
            num: "09",
            title: "Launch",
            desc: "Going live is crucial. This is when users start operating the solution and giving feedback:",
            features: ["Deployment", "Initial monitoring", "Feedback collection rounds"]
        },
        {
            num: "10",
            title: "Support",
            desc: "Once the web solution goes live, our experts assume responsibility for its smooth and trouble-free functioning:",
            features: ["Ongoing maintenance", "Performance optimization", "Customer support"]
        },
        {
            num: "11",
            title: "Scale",
            desc: "In dynamic and ever-more sophisticated landscapes, Web solutions require regular updates and upgrades through:",
            features: ["Continuous improvement", "Scalability enhancement", "Cyber security advancements"]
        }
    ];

    const faqs = [
        {
            q: "Which web framework should I choose: React, Vue, or Angular?",
            a: "The choice depends on your project's complexity and team expertise. React is excellent for flexible, high-performance apps; Angular is great for large-scale enterprise solutions; and Vue offers a balanced, lightweight approach."
        },
        {
            q: "How do you ensure web application security?",
            a: "We implement multi-layered security, including data encryption, secure authentication (OAuth/JWT), regular security patches, and rigorous penetration testing to protect against all major web vulnerabilities."
        },
        {
            q: "Do you provide post-launch maintenance?",
            a: "Yes, we offer comprehensive support packages that include performance monitoring, security updates, feature enhancements, and server management to keep your web platform running smoothly."
        }
    ];

    return (
        <div className="dt-web-page">
            {/* Hero Section */}
            <ServiceHero />

            {/* Web Services Explorer Section */}
            <section className="dt-web-offerings dt-solutions-explorer">
                <div className="dt-web-container">
                    <div className="dt-explorer-layout">
                        {/* Sidebar Navigation */}
                        <div className="dt-explorer-nav">
                            <h2 className="dt-explorer-heading">Web <span className="dt-web-gradient-text">services</span></h2>
                            <div className="dt-nav-list">
                                {webOfferings.map((offering, index) => (
                                    <button
                                        key={index}
                                        className={`dt-nav-link ${activeOffering === index ? "active" : ""}`}
                                        onClick={() => {
                                            setActiveOffering(index);
                                            document.getElementById(`offering-pane-${index}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }}
                                    >
                                        {offering.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Scrolling Content Viewport */}
                        <div className="dt-content-viewport">
                            {webOfferings.map((offering, index) => (
                                <div
                                    key={index}
                                    id={`offering-pane-${index}`}
                                    className={`dt-pane-content ${activeOffering === index ? "pane-active" : ""}`}
                                    data-index={index}
                                >
                                    <div className="dt-pane-header">
                                        <span className="dt-pane-id">{offering.num}</span>
                                        <h3 className="dt-pane-title">{offering.title}</h3>
                                    </div>
                                    <p className="dt-pane-description">{offering.desc}</p>

                                    <div className="dt-pane-specs">
                                        <h4>We build:</h4>
                                        <div className="dt-specs-list">
                                            {offering.weBuild.map((feature, i) => (
                                                <div key={i} className="dt-spec-item">
                                                    <FiCheckCircle className="dt-feature-icon" />
                                                    <span>{feature};</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio / Web Solutions Section */}
            <section className="dt-web-portfolio">
                <div className="dt-web-container">
                    <div className="dt-web-portfolio-header">
                        <h2 className="dt-web-section-title">Web development solutions</h2>
                    </div>

                    {/* Solutions Navigation Tabs */}
                    <div className="dt-solutions-nav-wrap">
                        <button className="dt-nav-arrow prev" onClick={() => setActiveProject((activeProject - 1 + portfolioProjects.length) % portfolioProjects.length)}>
                            <FiChevronLeft />
                        </button>
                        <div className="dt-solutions-tabs">
                            {portfolioProjects.map((proj, i) => (
                                <button 
                                    key={i} 
                                    className={`dt-solution-tab ${activeProject === i ? 'active' : ''}`}
                                    onClick={() => setActiveProject(i)}
                                >
                                    {proj.tab}
                                </button>
                            ))}
                        </div>
                        <button className="dt-nav-arrow next" onClick={() => setActiveProject((activeProject + 1) % portfolioProjects.length)}>
                            <FiChevronRight />
                        </button>
                    </div>

                    {/* Solutions Content Grid */}
                    <div className="dt-solutions-content">
                        {/* Left: Project Visual & Brand */}
                        <div className="dt-solution-visual-box">
                            <div className="dt-solution-img-wrap">
                                <img 
                                    src={portfolioProjects[activeProject].img} 
                                    alt={portfolioProjects[activeProject].title} 
                                    className="dt-solution-img" 
                                />
                            </div>
                            <div className="dt-solution-brand-footer">
                                <img 
                                    src={portfolioProjects[activeProject].logo} 
                                    alt={portfolioProjects[activeProject].company} 
                                    className="dt-solution-brand-logo" 
                                />
                            </div>
                        </div>

                        {/* Right: Project Details */}
                        <div className="dt-solution-details-box">
                            <h3 className="dt-solution-project-title">{portfolioProjects[activeProject].title}</h3>
                            <p className="dt-solution-project-desc">{portfolioProjects[activeProject].desc}</p>
                            
                            <ul className="dt-solution-features">
                                {portfolioProjects[activeProject].features.map((feature, i) => (
                                    <li key={i}>
                                        <FiCheckCircle className="dt-solution-check" />
                                        {feature};
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="dt-web-process">
                <div className="dt-web-container">
                    <div className="dt-web-process-header">
                        <h2 className="dt-web-section-title">Our web development  <span className="dt-web-gradient-text">delivery process</span></h2>
                        <p className="dt-web-hero-subtext">A systematic approach to building robust web platforms, from initial concept to deployment and beyond.</p>
                    </div>
                    <div className="dt-web-accordion">
                        {processSteps.map((step, i) => (
                            <div key={i} className={`dt-web-accordion-item ${activeProcess === i ? 'active' : ''}`}>
                                <div className="dt-web-accordion-head" onClick={() => setActiveProcess(activeProcess === i ? null : i)}>
                                    <div className="dt-web-step-info">
                                        <span className="dt-web-step-num">{step.num}</span>
                                        <h4>{step.title}</h4>
                                    </div>
                                    <div className="dt-web-step-icon">
                                        {activeProcess === i ? <FiMinus /> : <FiPlus />}
                                    </div>
                                </div>
                                <div className="dt-web-accordion-body">
                                    <div className="dt-web-accordion-inner">
                                        <p>{step.desc}</p>
                                        <ul className="dt-web-step-features">
                                            {step.features.map((f, j) => (
                                                <li key={j}><FiCheckCircle /> {f}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expert-level Web developers / Certifications Section */}
            <section className="dt-web-certifications">
                <div className="dt-web-container">
                    <div className="dt-web-certs-header">
                        <h2 className="dt-web-section-title">Expert-level <span className="dt-web-gradient-text">Web developers</span></h2>
                        <p className="dt-web-certs-subtitle">Multiple certificates confirm our multifaceted and regularly expanded Web Development expertise.</p>
                    </div>

                    <div className="dt-web-certs-grid">
                        <div className="dt-cert-card">
                            <div className="dt-cert-icon-wrap">
                                <img src="/images/Certification/gdpr-white-new.svg" alt="GDPR" />
                            </div>
                            <span className="dt-cert-label">GDPR</span>
                        </div>
                        <div className="dt-cert-card">
                            <div className="dt-cert-icon-wrap">
                                <img src="/images/Certification/iso.svg" alt="ISO" />
                            </div>
                            <span className="dt-cert-label">ISO/IEC 27001</span>
                        </div>
                        <div className="dt-cert-card">
                            <div className="dt-cert-icon-wrap">
                                <img src="/images/Certification/Aws_1.svg" alt="AWS Developer" />
                            </div>
                        </div>
                        <div className="dt-cert-card">
                            <div className="dt-cert-icon-wrap">
                                <img src="/images/Certification/Aws_2.svg" alt="AWS Architect" />
                            </div>
                        </div>
                        <div className="dt-cert-card">
                            <div className="dt-cert-icon-wrap">
                                <img src="/images/Certification/Aws_3.svg" alt="AWS Practitioner" />
                            </div>
                        </div>
                        
                        <div className="dt-cert-card">
                            <div className="dt-cert-icon-wrap">
                                <img src="/images/Certification/AZURE-icon.svg" alt="Azure" />
                            </div>
                            <span className="dt-cert-label">AZURE</span>
                        </div>
                        <div className="dt-cert-card">
                            <div className="dt-cert-icon-wrap">
                                <img src="/images/Certification/pmp-logo_v2.svg" alt="PMP" />
                            </div>
                            <span className="dt-cert-label">PMP®</span>
                        </div>
                        <div className="dt-cert-card">
                            <div className="dt-cert-icon-wrap">
                                <img src="/images/Certification/cissp.svg" alt="CISSP" />
                            </div>
                            <span className="dt-cert-label">CISSP</span>
                        </div>
                        <div className="dt-cert-card">
                            <div className="dt-cert-icon-wrap">
                                <img src="/images/Certification/istqb-mobile-app-tester.svg" alt="ISTQB" />
                            </div>
                        </div>
                        <div className="dt-cert-card">
                            <div className="dt-cert-icon-wrap">
                                <img src="/images/Certification/itil-foundation.svg" alt="ITIL" />
                            </div>
                            <span className="dt-cert-label">ITIL® FOUNDATION</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies for Web Development Section */}
            <section className="dt-web-technologies">
                <div className="dt-web-container">
                    <div className="dt-web-tech-header">
                        <h2 className="dt-tech-section-title">Technologies for Web Development</h2>
                        <p className="dt-tech-section-subtitle">Here is what we can apply to realize your plans for Custom Web Development.</p>
                    </div>

                    {/* Category Tabs */}
                    <div className="dt-tech-categories">
                        {Object.keys(technologyData).map((cat) => (
                            <button 
                                key={cat}
                                className={`dt-tech-cat-btn ${activeTechTab === cat ? 'active' : ''}`}
                                onClick={() => setActiveTechTab(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Technology Carousel/Grid */}
                    <div className="dt-tech-display-wrap">
                        <button className="dt-tech-nav prev"><FiChevronLeft /></button>
                        <div className="dt-tech-grid">
                            {technologyData[activeTechTab].map((tech, i) => (
                                <div key={i} className="dt-tech-item-card">
                                    <div className="dt-tech-icon-box">
                                        <img src={tech.icon} alt={tech.name} />
                                    </div>
                                    <span className="dt-tech-name">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                        <button className="dt-tech-nav next"><FiChevronRight /></button>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="dt-web-faq">
                <div className="dt-web-container">
                    <div className="dt-web-section-title">Frequently Asked <span className="dt-web-gradient-text">Questions</span></div>
                    <div className="dt-web-faq-list">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`dt-web-faq-item ${openFaq === i ? 'active' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                <div className="dt-web-faq-question">
                                    <span>{faq.q}</span>
                                    {openFaq === i ? <FiMinus /> : <FiPlus />}
                                </div>
                                <div className={`dt-web-faq-answer ${openFaq === i ? 'show' : ''}`}>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="dt-web-contact-section">
                <div className="dt-web-container">
                    <AIConsultationForm />
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default Webdevelopment;
