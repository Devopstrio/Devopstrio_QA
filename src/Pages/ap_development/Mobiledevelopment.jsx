import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    FiSmartphone, FiTablet, FiCpu, FiLayers, FiCheckCircle,
    FiPlus, FiMinus, FiChevronRight, FiChevronLeft, FiUsers, FiClock,
    FiActivity, FiZap, FiLayout, FiShield, FiTrendingUp,
    FiThumbsUp, FiAlertCircle
} from 'react-icons/fi';
import {
    SiSwift, SiKotlin, SiAndroid, SiIos, SiFlutter, SiReact,
    SiJavascript, SiFirebase, SiGradle, SiDart, SiIonic,
    SiApplepay, SiGooglepay, SiReactivex, SiOpenaccess, SiCplusplus
} from 'react-icons/si';


import '../../Style/ap_development/Mobiledevelopment.css';


//images
import OleksandrK from '../../assets/images/mobile_senior.jpg';
import AyanaT from '../../assets/images/seeedsxwoiw.jpg';
import RichG from '../../assets/images/uieuue.jpg';
import cross_paltform from '../../assets/images/datascience/eyuwtr.png'
import  Cross_Platform_car from "../../assets/images/New/Cross_Platform_car.png";
import Fintech_Mobile_Banking from "../../assets/images/New/Fintech_Mobile_Banking.png";
import Group_99 from "../../assets/images/New/Group_99.png";


// Components
import ServiceHero from '../../components/Hero/Serviceshero';
import AIConsultationForm from '../../components/AIConsultationForm/AIConsultationForm';
import CTA from '../../components/Cta/Cta';

const Mobiledevelopment = () => {
    const [activePlatform, setActivePlatform] = useState(0);
    const [activeScope, setActiveScope] = useState(0);
    const [activeProcess, setActiveProcess] = useState(0);
    const [activeProject, setActiveProject] = useState(0);
    const [activeTech, setActiveTech] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);

    const advancedTechCards = [
        {
            title: "AI",
            desc: "As a company specializing in custom mobile app development, our engineering team embeds machine learning, predictive analytics, and recommendation engines to deliver valuable insights, automate decisions, and improve customer engagement.",
            icon: <FiCpu />
        },
        {
            title: "IoT",
            desc: "Devopstrio engineers build custom mobile application development accelerators for connected mobile devices, enabling enterprise mobile apps to capture sensor data and simplify complex processes in real time.",
            icon: <FiZap />
        },
        {
            title: "Cloud",
            desc: "We deliver cloud-native mobile solutions, scalable APIs, and DevOps pipelines. Our custom mobile app development services keep delivery reliable, cost-efficient, and ready for ongoing support.",
            icon: <FiLayers />
        },
        {
            title: "Cybersecurity",
            desc: "Our experts apply secure architecture, data encryption, and compliance controls to protect custom mobile applications, app store releases, and business-critical integrations.",
            icon: <FiShield />
        },
        {
            title: "Blockchain",
            desc: "We develop mobile applications with blockchain-backed identity, payments, and traceability capabilities when business models require transparent and tamper-resistant transactions.",
            icon: <FiTrendingUp />
        }
    ];

    const portfolioProjects = [
        {
            company: "Europcar",
            title: "Cross-Platform Car Rental",
            desc: "Devopstrio built a car rental ecosystem featuring keyless access and a management panel. Covering 190,000 vehicles and 13,000 stations, the platform holds a 4.9 rating. This high-quality product reduced operational errors and was acquired as a white-label tool.",
            img: Cross_Platform_car,
            location: "France"
        },
        {
            company: "GlobeBank",
            title: "Fintech Mobile Banking",
            desc: "A secure, scalable banking application with real-time transaction monitoring, AI-driven expense tracking, and seamless biometric authentication for millions of global users.",
            img: Fintech_Mobile_Banking,
            location: "United Kingdom"
        },
        {
            company: "Vivid Health",
            title: "Telehealth & Wellness",
            desc: "A comprehensive health platform connecting patients with doctors through high-definition video calls, integrated health records, and real-time wearable data synchronization.",
            img:Group_99,
            location: "Germany"
        }
    ];

    const scopeOverview = [
        {
            title: "IOS APP DEVELOPMENT",
            name: "iOS App Development",
            desc: "As a mobile application development company, Devopstrio delivers iOS-focused custom mobile application development capabilities for secure and scalable mobile products across ios devices:",
            highlights: ["90+ high-load iOS apps delivered;", "130+ skilled iOS engineers in our pool;", "48% of staff are senior specialists and team leaders;", "10+ years of cumulative iOS experience."],
            techs: [
                { name: "Swift", icon: <SiSwift /> },
                { name: "Objective-C", icon: "OBJ-C" },
                { name: "RxSwift", icon: <SiReactivex /> },
                { name: "Combine", icon: "CB" },
                { name: "SwiftUI", icon: <SiSwift /> },
                { name: "ARKit", icon: "AR" },
                { name: "HealthKit", icon: "HK" },
                { name: "Apple Pay", icon: <SiApplepay /> },
                { name: "Widgets", icon: "WG" }
            ]
        },
        {
            title: "ANDROID APP DEVELOPMENT",
            name: "Android App Development",
            desc: "Our android app development teams build robust custom mobile applications and enterprise mobile apps tailored to your target users and business needs:",
            highlights: ["110+ modern Android apps delivered;", "120+ skilled Android engineers aboard;", "52% of whom are senior specialists and team leaders;", "10+ year track record with Android."],
            techs: [
                { name: "Android Jetpack", icon: <SiAndroid /> },
                { name: "Firebase", icon: <SiFirebase /> },
                { name: "Gradle", icon: <SiGradle /> },
                { name: "Java", icon: "JAVA" },
                { name: "Kotlin", icon: <SiKotlin /> },
                { name: "Google Pay", icon: <SiGooglepay /> },
                { name: "Realm", icon: "RLM" },
                { name: "RxJava", icon: <SiReactivex /> },
                { name: "C", icon: "C" }
            ]
        },
        {
            title: "CROSS-PLATFORM APP DEVELOPMENT",
            name: "Cross-Platform App Development",
            desc: "Devopstrio provides cross platform development and delivery solutions that shorten release timelines while preserving quality assurance standards:",
            highlights: ["100+ Cross-platform experts employed;", "45% of whom are senior specialists and team leads;", "80+ Cross-platform collaborations completed."],
            techs: [
                { name: "Flutter", icon: <SiFlutter /> },
                { name: "Dart", icon: <SiDart /> },
                { name: "Xamarin", icon: "XM" },
                { name: "C", icon: "C" },
                { name: "Ionic", icon: <SiIonic /> },
                { name: "React Native", icon: <SiReact /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "KMP", icon: "KMP" },
                { name: "Chopper", icon: "CP" }
            ]
        }
    ];

    const platforms = [
        {
            title: "NATIVE APPS",
            name: "Native Mobile App Development",
            desc: "Devopstrio provides full-cycle engineering for native apps on Android and iOS, helping businesses develop mobile applications with top performance, deep device access, and secure mobile solutions.",
            advantages: ["High app performance and speed;", "Convenient UI/UX;", "Top security."],
            limitations: ["High upfront and maintenance costs;", "Slow time-to-market;", "No code reusability."],
            bestFor: ["Complex mobile applications;", "High performance and a smooth UI;", "Apps with heavy data processing."]
        },
        {
            title: "CROSS-PLATFORM APPS",
            name: "Cross-Platform App Development",
            desc: "Custom mobile application development expertise for cross platform app development uses React Native and web technologies to build mobile app solutions for iOS & Android with cost efficiency and mobile app idea validation.",
            showSeeMore: true,
            advantages: ["Cost-effective app development;", "Quick time-to-market;", "Sharable and reusable code."],
            limitations: ["Lower performance;", "Limited access to features;", "Design consistency challenges."],
            bestFor: ["Straightforward functionalities;", "MVP prototypes;", "Budget-conscious app projects."]
        },
        {
            title: "HYBRID APPS",
            name: "Hybrid App Development",
            desc: "As a digital engineering partner, we build hybrid mobile products that combine web app flexibility with native wrappers, helping target users engage users faster while teams optimize development costs.",
            advantages: ["Accelerated updates;", "Consistent UX;", "Analytics and scalability."],
            limitations: ["Platform-pertinent limitations;", "Some security concerns;", "Dependency on plugins."],
            bestFor: ["Basic functionality requirements;", "Rapid app development timelines;", "Integration needs."]
        },
        {
            title: "PROGRESSIVE WEB APPS",
            name: "Progressive Web App Development",
            desc: "Our application engineering services include progressive web app delivery for businesses that need installable mobile app solutions across web platforms, simplified updates, and reliable app support after launch.",
            showSeeMore: true,
            advantages: ["Enhanced discoverability;", "Simplified installation;", "Offline functionality support."],
            limitations: ["Limited app store exposure;", "Restricted access to hardware;", "Performance constraints."],
            bestFor: ["Improved SEO;", "Lower data usage;", "Ease of maintenance."]
        }
    ];

    const scopeData = [
        {
            title: "IOS APP DEVELOPMENT",
            name: "iOS App Development",
            desc: "As a mobile application development company, Devopstrio delivers iOS-focused custom mobile application development capabilities for secure and scalable mobile products across ios devices:",
            bullets: ["90+ high-load iOS apps delivered;", "130+ skilled iOS engineers in our pool;", "48% of staff are senior specialists and team leaders;", "10+ years of cumulative iOS experience."],
            tech: ["Swift", "Objective-C", "RxSwift", "Combine", "SwiftUI", "ARKit", "HealthKit", "Apple Pay", "Widgets"]
        },
        {
            title: "ANDROID APP DEVELOPMENT",
            name: "Android App Development",
            desc: "Our android app development teams build robust custom mobile applications and enterprise mobile apps tailored to your target users and business needs:",
            bullets: ["110+ modern Android apps delivered;", "120+ skilled Android engineers aboard;", "52% of whom are senior specialists and team leaders;", "10+ year track record with Android."],
            tech: ["Android Jetpack", "Firebase", "Gradle", "Java", "Kotlin", "Google Pay", "Realm", "RxJava", "C"]
        },
        {
            title: "CROSS-PLATFORM APP DEVELOPMENT",
            name: "Cross-Platform App Development",
            desc: "Devopstrio provides cross platform development and delivery solutions that shorten release timelines while preserving quality assurance standards:",
            bullets: ["100+ Cross-platform experts employed;", "45% of whom are senior specialists and team leaders;", "80+ Cross-platform collaborations completed."],
            tech: ["Flutter", "Dart", "Xamarin", "C#", "Ionic", "React Native", "JavaScript", "KMP", "Chopper"]
        }
    ];

    const processSteps = [
        {
            num: "01",
            title: "Discovery phase",
            desc: "Devopstrio  starts each mobile app development project by defining business goals, target audience needs, app complexity, and the right mobile app design strategy for measurable outcomes.",
            features: ["User research", "Competitor analysis", "Conceptualization and ideation"]
        },
        {
            num: "02",
            title: "Requirements specification",
            desc: "Detailed documentation of functional and non-functional requirements to ensure alignment between stakeholders and the development team.",
            features: ["Requirements gathering", "Defining functional requirements", "Defining non-functional requirements", "Requirements validation"]
        },
        {
            num: "03",
            title: "UX/UI design",
            desc: "Our designers create intuitive, high-fidelity prototypes focusing on user psychology and modern design patterns to ensure maximum engagement.",
            features: ["User research", "Competitor analysis", "WireFraming and Prototyping", "Conceptualization and ideation"]
        },
        {
            num: "04",
            title: "Architecture",
            desc: "Defining the technical structure, choosing the right tech stack, and ensuring scalability and security from the ground up.",
            features: ["Architectural design", "Data modeling", "Security measures."]

        },
        {
            num: "05",
            title: "Front-end development and back-end development",
            desc: "Building the core functionality of your app using iterative sprints, with regular updates and feedback loops."
        },
        {
            num: "06",
            title: "Integration and API Development",
            desc: "Seamlessly connecting your mobile app with third-party services and internal systems for a unified experience.",
            features: ["Integration strategy", "API implementation", "Compliance procedures."]
        },
        {
            num: "07",
            title: "Quality Assurance",
            desc: "Rigorous manual and automated testing across multiple devices and OS versions to ensure a bug-free, smooth experience.",
            features: ["QA planning", "Manual testing", "Automated testing."]
        },
        {
            num: "08",
            title: "Launch and Support",
            desc: "Handling the entire submission process to app stores and providing proactive maintenance and support post-launch.",
            features: ["App store submission", "Maintenance and support", "Performance monitoring."]
        },
        {
            num: "09",
            title: "Scale",
            desc: "We enhance released apps with ongoing support, performance tuning, and roadmap iterations so mobile projects keep a competitive advantage as demand grows.",
            features: ["Continuous improvement;", "Scalability enhancement;", "Cyber security advancements."]
        }
    ];

    const techStack = [
        { cat: "Languages", items: ["Swift", "Kotlin", "Dart", "JavaScript", "TypeScript"] },
        { cat: "Frameworks", items: ["SwiftUI", "Jetpack Compose", "Flutter", "React Native", "Ionic"] },
        { cat: "Backend", items: ["Node.js", "Python", "Go", "Firebase", "AWS Amplify"] },
        { cat: "Databases", items: ["SQLite", "Realm", "PostgreSQL", "MongoDB", "Redis"] }
    ];

    const faqs = [
        { q: "Which platform should I choose: iOS or Android?", a: "This depends on your target audience and budget. Many startups start with Cross-Platform (Flutter/React Native) to reach both markets simultaneously with less cost." },
        { q: "How long does it take to develop a mobile app?", a: "A typical MVP takes 3-4 months. More complex enterprise solutions can take 6-12 months depending on the feature set." },
        { q: "Do you handle App Store and Google Play submissions?", a: "Yes, we handle the entire submission process, including metadata optimization and ensuring compliance with platform guidelines." },
        { q: "Can you update an existing mobile app?", a: "Absolutely. We can take over existing codebases, perform audits, fix bugs, and implement new features." }
    ];

    return (
        <div className="dt-mobile-page">
            <Helmet>
                <title>Mobile App Development Services | Devopstrio</title>
                <meta name="description" content="Custom iOS, Android, and cross-platform mobile application development services tailored to your business needs." />
            </Helmet>

            {/* Hero Section */}
            <ServiceHero />

            {/* Platform Choice */}
            <section className="dt-mobile-platforms">
                <div className="dt-mobile-container">
                    <div className="dt-mobile-section-header">
                        <h2 className="dt-mobile-section-title">Custom mobile application <span className="dt-mobile-gradient-text">development services we offer</span></h2>
                    </div>

                    <div className="dt-mobile-tabs">
                        {platforms.map((p, i) => (
                            <button
                                key={i}
                                className={`dt-mobile-tab-btn ${activePlatform === i ? 'active' : ''}`}
                                onClick={() => setActivePlatform(i)}
                            >
                                {p.title}
                            </button>
                        ))}
                    </div>

                    <div className="dt-mobile-tab-content">
                        <div className="dt-mobile-tab-top">
                            <div className="dt-mobile-tab-visual">
                                <div className="dt-mobile-tab-icon-wrap">
                                    <FiSmartphone className="dt-mobile-phone-icon" />
                                    <div className="dt-mobile-code-snippet">{"</>"}</div>
                                </div>
                            </div>
                            <div className="dt-mobile-tab-info">
                                <h3>{platforms[activePlatform].name}</h3>
                                <p>{platforms[activePlatform].desc}</p>
                            </div>
                        </div>

                        <div className="dt-mobile-tab-bottom">
                            <div className="dt-mobile-feature-col">
                                <h4><FiThumbsUp /> Advantages</h4>
                                <ul>
                                    {platforms[activePlatform].advantages.map((adv, i) => (
                                        <li key={i}><FiCheckCircle /> {adv}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="dt-mobile-feature-col">
                                <h4><FiAlertCircle /> Limitations</h4>
                                <ul>
                                    {platforms[activePlatform].limitations.map((lim, i) => (
                                        <li key={i}><FiCheckCircle /> {lim}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="dt-mobile-feature-col">
                                <h4><FiCheckCircle /> Best for</h4>
                                <ul>
                                    {platforms[activePlatform].bestFor.map((best, i) => (
                                        <li key={i}><FiCheckCircle /> {best}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="dt-mobile-process">
                <div className="dt-mobile-container">
                    <div className="dt-mobile-process-header">
                        <h2 className="dt-mobile-section-title">Our mobile app  <span className="dt-mobile-gradient-text">development process</span></h2>
                        <p className="dt-mobile-process-subtext">Our delivery approach aligns strategy, engineering, and quality assurance to deliver high quality apps across every development cycle through tailored app development services.</p>
                    </div>
                    <div className="dt-mobile-accordion">
                        {processSteps.map((step, i) => (
                            <div key={i} className={`dt-mobile-accordion-item ${activeProcess === i ? 'active' : ''}`}>
                                <div className="dt-mobile-accordion-head" onClick={() => setActiveProcess(activeProcess === i ? null : i)}>
                                    <div className="dt-mobile-step-info">
                                        <span className="dt-mobile-step-num">{step.num}</span>
                                        <h4>{step.title}</h4>
                                    </div>
                                    <div className="dt-mobile-step-icon">
                                        {activeProcess === i ? <FiMinus /> : <FiPlus />}
                                    </div>
                                </div>
                                <div className="dt-mobile-accordion-body">
                                    <div className="dt-mobile-accordion-inner">
                                        <p>{step.desc}</p>
                                        {step.features && (
                                            <ul className="dt-mobile-step-features">
                                                {step.features.map((f, j) => (
                                                    <li key={j}><FiCheckCircle /> {f}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Scope Overview Section */}
            <section className="dt-mobile-scope">
                <div className="dt-mobile-container">
                    <div className="dt-mobile-scope-header">
                        <h2 className="dt-mobile-section-title">Devopstrio's mobile app <span className="dt-mobile-gradient-text">development scope overview</span></h2>
                    </div>

                    <div className="dt-mobile-scope-tabs">
                        {scopeOverview.map((scope, i) => (
                            <button
                                key={i}
                                className={`dt-mobile-scope-tab-btn ${activeScope === i ? 'active' : ''}`}
                                onClick={() => setActiveScope(i)}
                            >
                                {scope.title}
                            </button>
                        ))}
                    </div>

                    <div className="dt-mobile-scope-content">
                        <div className="dt-mobile-scope-info">
                            <h3>{scopeOverview[activeScope].name}</h3>
                            <p>{scopeOverview[activeScope].desc}</p>
                            <ul className="dt-mobile-scope-highlights">
                                {scopeOverview[activeScope].highlights.map((item, i) => (
                                    <li key={i}><FiCheckCircle /> {item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="dt-mobile-scope-tech-grid">
                            {scopeOverview[activeScope].techs.map((tech, i) => (
                                <div key={i} className="dt-mobile-scope-tech-card">
                                    <div className="dt-mobile-tech-icon-wrap">
                                        {typeof tech.icon === 'string' ? <span className="dt-mobile-tech-label">{tech.icon}</span> : tech.icon}
                                    </div>
                                    <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="dt-mobile-team">
                <div className="dt-mobile-container">
                    <div className="dt-mobile-team-header">
                        <h2 className="dt-mobile-section-title">Your efficient mobile app  <span className="dt-mobile-gradient-text">development team structure</span></h2>
                    </div>
                    <div className="dt-mobile-team-grid">
                        {[
                            {
                                name: "Oleksandr K.",
                                role: "Senior Mobile App Developer",
                                // rate: "$65/hour",
                                img:OleksandrK,
                                skills: ["Java", "Android Jetpack", "Kotlin", "Firebase", "Gradle"],
                                prev: "vivid",
                                prevColor: "#a855f7"
                            },
                            {
                                name: "Ayana T.",
                                role: "Mobile App Developer",
                                // rate: "$50/hour",
                                img:AyanaT,
                                skills: ["Swift", "Objective-C", "RxSwift", "Combine", "SwiftUI", "HealthKit"],
                                prev: "UPWork",
                                prevColor: "#ef4444"
                            },
                            {
                                name: "Rich G.",
                                role: "Mobile App Developer",
                                // rate: "$40/hour",
                                img: RichG,
                                skills: ["Flutter", "Dart", "Xamarin", "React Native", "JavaScript"],
                                prev: "Europcar",
                                prevColor: "#22c55e"
                            }
                        ].map((member, i) => (
                            <div key={i} className="dt-mobile-expert-card">
                                <div className="dt-mobile-expert-visual">
                                    <img src={member.img} alt={member.name} />
                                    {/* <div className="dt-mobile-expert-rate">{member.rate}</div> */}
                                </div>
                                <div className="dt-mobile-expert-info">
                                    <h4>{member.name}</h4>
                                    <p className="dt-mobile-expert-role">{member.role}</p>
                                    <div className="dt-mobile-expert-skills">
                                        {member.skills.map((skill, j) => (
                                            <span key={j} className="dt-mobile-skill-tag">{skill}</span>
                                        ))}
                                    </div>
                                    <div className="dt-mobile-expert-prev">
                                        <span>Previously at:</span>
                                        <div className="dt-mobile-prev-company" style={{ color: member.prevColor }}>
                                            {member.prev}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="dt-mobile-portfolio">
                <div className="dt-mobile-container">
                    <div className="dt-mobile-portfolio-header">
                        <h2 className="dt-mobile-section-title">Examples of successful mobile app  <span className="dt-mobile-gradient-text">projects delivered</span></h2>
                        <p className="dt-mobile-portfolio-subtitle">Case studies that show measurable outcomes across fintech, telecom, wellness, crypto, and mobility products through custom mobile app development.</p>
                    </div>

                    <div className="dt-mobile-project-slider">
                        <div className="dt-mobile-slider-main">
                            <button className="dt-mobile-slider-nav prev" onClick={() => setActiveProject((activeProject - 1 + portfolioProjects.length) % portfolioProjects.length)}>
                                <FiChevronLeft />
                            </button>

                            <div className="dt-mobile-project-card">
                                <div className="dt-mobile-project-info">
                                    <div className="dt-mobile-project-company">{portfolioProjects[activeProject].company}</div>
                                    <h3>{portfolioProjects[activeProject].title}</h3>
                                    <p>{portfolioProjects[activeProject].desc}</p>
                                </div>
                                <div className="dt-mobile-project-visual">
                                    <img src={portfolioProjects[activeProject].img} alt={portfolioProjects[activeProject].title} />
                                    <div className="dt-mobile-project-location">
                                        {portfolioProjects[activeProject].location}
                                    </div>
                                </div>
                            </div>

                            <button className="dt-mobile-slider-nav next" onClick={() => setActiveProject((activeProject + 1) % portfolioProjects.length)}>
                                <FiChevronRight />
                            </button>
                        </div>

                        <div className="dt-mobile-slider-progress">
                            {portfolioProjects.map((_, i) => (
                                <div
                                    key={i}
                                    className={`dt-mobile-progress-bar ${activeProject === i ? 'active' : ''}`}
                                    onClick={() => setActiveProject(i)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Technologies Section */}
            <section className="dt-mobile-advanced-tech">
                <div className="dt-mobile-container">
                    <div className="dt-mobile-advanced-tech-header">
                        <h2 className="dt-mobile-section-title">Supporting your custom mobile app  <span className="dt-mobile-gradient-text">journey with advanced technologies</span></h2>
                        <p className="dt-mobile-advanced-tech-subtitle">We combine strategic consulting and advanced technologies to deliver mobile app development solutions for complex apps across various industries.</p>
                    </div>

                    <div className="dt-mobile-advanced-tech-carousel">
                        <button className="dt-mobile-slider-nav prev" onClick={() => setActiveTech(Math.max(0, activeTech - 1))}>
                            <FiChevronLeft />
                        </button>

                        <div className="dt-mobile-tech-viewport">
                            <div
                                className="dt-mobile-tech-track"
                                style={{ transform: `translateX(-${activeTech * (100 / 3)}%)` }}
                            >
                                {advancedTechCards.map((tech, i) => (
                                    <div key={i} className="dt-mobile-tech-slide">
                                        <div className={`dt-mobile-advanced-card ${activeTech === i ? 'active' : ''}`}>
                                            <div className="dt-mobile-advanced-icon-wrap">
                                                <div className="dt-mobile-advanced-icon-inner">
                                                    {tech.icon}
                                                </div>
                                            </div>
                                            <h3>{tech.title}</h3>
                                            <p>{tech.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="dt-mobile-slider-nav next" onClick={() => setActiveTech(Math.min(advancedTechCards.length - 3, activeTech + 1))}>
                            <FiChevronRight />
                        </button>
                    </div>

                    <div className="dt-mobile-slider-dots">
                        {[...Array(advancedTechCards.length - 2)].map((_, i) => (
                            <div
                                key={i}
                                className={`dt-mobile-dot ${activeTech === i ? 'active' : ''}`}
                                onClick={() => setActiveTech(i)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Insights Section */}
            <section className="dt-mobile-insights">
                <div className="dt-mobile-container">
                    <div className="dt-mobile-insights-header">
                        <h2 className="dt-mobile-section-title">Mobile app development insights and  <span className="dt-mobile-gradient-text">best practices</span></h2>
                        <p className="dt-mobile-insights-subtitle">Explore practical guidance on mobile app development process decisions, cross platform development, app support, and product scaling.</p>
                    </div>

                    <div className="dt-mobile-insights-layout">
                        {/* Featured Article */}
                        <div className="dt-mobile-insights-featured">
                            <div className="dt-mobile-featured-img">
                                <img src={cross_paltform} alt="Development Timeline" />
                            </div>
                            <div className="dt-mobile-featured-content">
                                <span className="dt-mobile-read-time">Reading time: 13 mins</span>
                                <h3>Mobile App Development Timeline Explained</h3>
                                <p>How long does it take to build a mobile app? In this article, we break down the key development stages, share realistic timelines, and explain how expert teams help companies launch effective solutions without delays.</p>
                                <a href="#" className="dt-mobile-see-more">See more →</a>
                            </div>
                        </div>

                        {/* Article List */}
                        <div className="dt-mobile-insights-list">
                            {[
                                { title: "Fintech App Development Cost as of 2026", time: "15 mins" },
                                { title: "A Guide to Modern eWallet App Development", time: "10 mins" },
                                { title: "Custom App Development Explained", time: "12 mins" },
                                { title: "How to Hire a Mobile App Development Team", time: "8 mins" }
                            ].map((article, i) => (
                                <div key={i} className="dt-mobile-insight-item">
                                    <div className="dt-mobile-insight-info">
                                        <h4>{article.title}</h4>
                                        <div className="dt-mobile-insight-meta">
                                            <span className="dt-mobile-read-time">Reading time: {article.time}</span>
                                            <a href="#" className="dt-mobile-see-more">See more →</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="dt-mobile-faq">
                <div className="dt-mobile-container">
                    <div className="dt-mobile-section-header-center">
                        <h2 className="dt-mobile-section-title">Frequently Asked <span className="dt-mobile-gradient-text">Questions</span></h2>
                    </div>
                    <div className="dt-mobile-faq-list">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`dt-mobile-faq-item ${openFaq === i ? 'active' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                <div className="dt-mobile-faq-question">
                                    <span>{faq.q}</span>
                                    {openFaq === i ? <FiMinus className="dt-faq-icon active" /> : <FiPlus className="dt-faq-icon" />}
                                </div>
                                <div className={`dt-mobile-faq-answer ${openFaq === i ? 'show' : ''}`}>
                                    <p>{faq.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="dt-mobile-contact-section">
                <div className="dt-mobile-container">
                    <AIConsultationForm />
                </div>
            </section>

            <CTA />
        </div>
    );
};

export default Mobiledevelopment;
