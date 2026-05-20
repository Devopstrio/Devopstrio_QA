import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    FiArrowRight,
    FiShield,
    FiZap,
    FiDatabase,
    FiCpu,
    FiLock,
    FiTrendingUp,
    FiCreditCard,
    FiPlus,
    FiMinus,
    FiCheck,
    FiActivity,
    FiSmartphone,
    FiGlobe,
    FiPieChart,
    FiDollarSign,
} from "react-icons/fi";
import {
    FaPython,
    FaNodeJs,
    FaReact,
    FaAws,
    FaDocker,
} from "react-icons/fa";
import {
    SiKubernetes,
    SiTensorflow,
    SiPostgresql,
    SiNextdotjs
} from "react-icons/si";
import { HiSparkles } from "react-icons/hi";
import { VscAzure } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";
import ClientSuccess from "../../components/Hero/ClientSuccess"
import "../../Style/platform/FinancialServices.css";

/* ── Variants ── */
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
};

/* ── Data ── */
const SERVICES = [
    {
        icon: <FiCreditCard />,
        title: "Banking software development",
        desc: "Devopstrio delivers banking software development services for banks and other financial institutions modernizing legacy systems, launching digital platforms, integrating core systems, and improving security.",
    },
    {
        icon: <FiZap />,
        title: "FinTech software development",
        desc: "In this domain, we provide custom financial software development services for FinTech companies building advanced digital financial services fully compliant with GDPR, PSD2, AML, KYC, and PCI DSS.",
    },
    {
        icon: <FiShield />,
        title: "Insurance software development",
        desc: "We offer custom financial software development for insurance companies automating operations, improving risk management, and building digital platforms for handling policies, claims, and customer services.",
    },
    {
        icon: <FiTrendingUp />,
        title: "Investment software development",
        desc: "Devopstrio covers the custom financial software development needs of investment firms by crafting platforms for portfolio management, trading integrations, financial analytics, and regulatory compliance.",
    },
    {
        icon: <FiLock />,
        title: "Cryptocurrency & Blockchain",
        desc: "Exchange development, secure wallets, and smart contract audits for the evolving Web3 financial ecosystem.",
    },
    {
        icon: <FiPieChart />,
        title: "Personal Finance Management",
        desc: "Budgeting apps, expense trackers, and financial wellness tools with bank aggregation capabilities.",
    },
];

const TECH_STACK = [
    { icon: <FaPython />, name: "Python / Django" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <FaReact />, name: "React.js" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <VscAzure />, name: "Azure Cloud" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiTensorflow />, name: "AI / TensorFlow" },
];

const AUDIENCE_DATA = [
    {
        num: "01",
        title: "Enterprises and global banks",
        desc: "We have supported ~200 IT initiatives for Fortune 500 companies, including large-scale financial software systems:",
        points: [
            "Transformation programs and digital banking initiatives;",
            "Legacy modernization for complex infrastructure;",
            "Consulting, team augmentation, and partnerships."
        ]
    },
    {
        num: "02",
        title: "Medium-sized finance entities",
        desc: "Devopstrio defines priorities and optimizes resource allocation across initiatives. Our cross-functional teams deliver:",
        points: [
            "Financial software product development services;",
            "Team augmentation to provide you with the necessary skills;",
            "Tech consulting focused on growth and workflow optimization."
        ],
        isFeatured: true
    },
    {
        num: "03",
        title: "Versatile dynamic startups and SMEs",
        desc: "Our talent helps customers build scalable financial software platforms, payment applications, and digital financial services:",
        points: [
            "Product development and product strategy;",
            "Flexible team augmentation opportunities;",
            "Managed services enabling innovative financial software solutions."
        ]
    }
];

const FAQS = [
    {
        q: "How do you ensure security in financial software?",
        a: "We implement multi-layered security including end-to-end encryption, multi-factor authentication, regular penetration testing, and compliance with standards like SOC2 and PCI-DSS.",
    },
    {
        q: "Do you provide maintenance and support after launch?",
        a: "Yes, we offer 24/7 technical support, security patching, and continuous performance optimization to ensure your platform stays resilient and up-to-date.",
    },
    {
        q: "Can you integrate with existing core banking systems?",
        a: "Absolutely. We have extensive experience building middleware and API layers to securely connect modern fintech solutions with legacy banking infrastructure.",
    },
];

const PROCESS_STEPS = [
    {
        title: "Discovery and regulatory assessment",
        desc: "The discovery phase defines the business and regulatory requirements of the financial solution. Our experts work with stakeholders to analyze financial operations, assess compliance obligations, and identify opportunities to streamline processes. Our teams conduct market and competitor research, gather technical requirements, and evaluate risk management factors, especially those related to sensitive financial information. The result is a validated project scope and a clear roadmap for building secure and compliant financial software systems.",
    },
    {
        title: "Architecture and technical planning",
        desc: "At this stage, Devopstrio translates business requirements into a scalable technical architecture. Our architects design system structures that support financial transactions, third-party integrations, and secure data processing. The team defines system architecture, data models, and integration strategies, all while selecting appropriate cloud solutions and infrastructure components. This important planning phase ensures that the platform can maintain regulatory compliance and support long-term, strategic scalability.",
    },
    {
        title: "UX/UI for financial users",
        desc: "Financial platforms should provide clear interfaces for both internal teams and end users. Devopstrio's team designs UX/UI solutions that improve usability while supporting secure access to financial and banking services. Our designers create wireframes, interactive prototypes, and user journeys tailored for financial workflows such as account management, payments, and reporting. The result is a platform that improves both customer acquisition and engagement while ensuring secure interaction with sensitive and important financial information.",
    },
    {
        title: "Software development",
        desc: "Throughout the development phase, our skilled and experienced engineers build the core components of the future financial platform. This encompasses front-end interfaces, back-end services, and third-party integrations. Our teams of tech experts implement secure APIs, business logic, and scalable features that will support financial transactions, third-party integrations, and custom solutions tailored to financial organizations. Your outcome is a reliable and highly usable system that helps streamline processes and significantly improve operational efficiency.",
    },
    {
        title: "Testing (Security, Performance, Penetration)",
        desc: "Rigorous and comprehensive testing ensures that the resulting financial software meets all the strict security and performance standards. Our teams apply comprehensive QA practices to validate system stability and support regulatory compliance. Testing activities encompass manual and automated QA, performance testing, and penetration testing to identify vulnerabilities. This process ensures that the platform protects sensitive financial information and can deliver accurate and easy-to-work-with data insights under real-world workloads.",
    },
    {
        title: "Deployment",
        desc: "Once our security, performance, and penetration testing checks are complete, Devopstrio's team prepares the custom solutions for production deployment. Our FinTech-focused specialists configure infrastructure, automate release pipelines, and provide for smooth integration with existing systems. Deployment strategies often include cloud solutions and scalable infrastructure designed to support high-volume financial transactions and modern banking services, so that your business can evolve and expand flexibly and cost-effectively in any situation.",
    },
    {
        title: "Support",
        desc: "Devopstrio provides ongoing technical support and maintenance to ensure the long-term stability and security of your financial platform. Our team monitors system performance, applies security updates, and implements feature enhancements to help your business stay competitive and compliant in the evolving FinTech landscape.",
    },
];

const CAPABILITIES = [
    {
        title: "Business process reconstruction",
        icon: <FiActivity />,
        details: "We analyze and redesign core financial workflows to improve efficiency, reduce operational costs, and eliminate legacy bottlenecks using modern automation."
    },
    {
        title: "Cyber and IT security",
        icon: <FiShield />,
        details: "Implementing multi-layered security protocols, including end-to-end encryption, real-time threat detection, and strict compliance with global financial regulations."
    },
    {
        title: "Implementation of CI/CD Flows",
        icon: <FiZap />,
        details: "Streamlining financial software delivery with automated pipelines that ensure rapid, reliable, and secure code deployment without service interruptions."
    },
    {
        title: "UX/UI",
        icon: <FiPieChart />,
        details: "Designing intuitive, high-performance interfaces for complex financial data visualization, ensuring seamless user journeys for both retail and institutional clients."
    },
    {
        title: "QA Automation",
        icon: <FiCpu />,
        details: "Leveraging AI-driven testing frameworks to validate complex financial transactions, API integrations, and system resilience under peak loads."
    },
    {
        title: "Big Data and Analytics",
        icon: <FiDatabase />,
        details: "Extracting actionable insights from high-volume financial datasets to drive predictive modeling, fraud detection, and personalized customer experiences."
    },
    {
        title: "Mobile Engineering",
        icon: <FiSmartphone />,
        details: "Building secure, high-fidelity mobile banking and investment applications with native performance and advanced biometric authentication."
    },
    {
        title: "Web Engineering",
        icon: <FiGlobe />,
        details: "Developing scalable, enterprise-grade web platforms for digital banking, insurance management, and decentralized financial services."
    },
];

const ARTICLES = [
    {
        title: "DeFi Development Overview",
        time: "6 mins",
        id: "defi-overview",
        desc: "Decentralized Finance (DeFi) is revolutionizing the financial landscape by removing traditional intermediaries. Our guide covers smart contract engineering, liquidity pools, and the integration of decentralized protocols into modern banking ecosystems. Learn how to leverage blockchain for transparent and permissionless financial services."
    },
    {
        title: "Effective dApp Development Trends",
        time: "9 mins",
        id: "dapp-trends",
        desc: "The next generation of decentralized applications (dApps) focuses on scalability and user experience. Explore the latest trends in Layer 2 solutions, zero-knowledge proofs, and cross-chain interoperability. We analyze how high-performance dApps are becoming the backbone of the digital economy."
    },
    {
        title: "Loan Lending App Development Process",
        time: "10 mins",
        id: "loan-process",
        desc: "Building a secure and compliant digital lending platform requires a deep understanding of risk management and regulatory frameworks. Our detailed process overview covers automated credit scoring, KYC/AML integration, and secure escrow mechanisms for peer-to-peer and institutional lending."
    },
    {
        title: "Personalized Banking",
        time: "13 mins",
        id: "personalized-banking",
        desc: "Modern consumers demand hyper-personalized financial experiences. Discover how AI and machine learning are being used to provide real-time financial advice, customized investment portfolios, and intuitive spending insights. Learn the technical architecture behind data-driven banking."
    }
];

const FEATURED_ARTICLE = {
    title: "What Is a Neobank and How to Start One?",
    time: "8 mins",
    desc: "Neobanks are digital-only financial institutions that offer a streamlined, mobile-first banking experience. This comprehensive guide explores the core components of neobank architecture, from core banking system integration to regulatory licensing and customer acquisition strategies. Discover why neobanks are the fastest-growing segment in FinTech."
};

const TECH_SCOPE_DATA = {
    mobileWeb: {
        id: "mobileWeb",
        label: "MOBILE AND WEB APPS",
        leftCol: {
            title: "FinTech features",
            groups: [
                {
                    name: "1. Core payment functionalities:",
                    items: [
                        "Payments and billing;",
                        "Money transfers;",
                        "Remittances between banks;",
                        "E-wallets;",
                        "Android Pay and Apple Pay."
                    ]
                },
                {
                    name: "2. Convenient user accounts:",
                    items: [
                        "Card management;",
                        "Customer support channels;",
                        "Functionality for finding the nearest ATMs and branches;",
                        "Management of card notifications;",
                        "Protected client support channels;",
                        "Ability to save contacts and beneficiaries."
                    ]
                },
                {
                    name: "3. Additional operations:",
                    items: [
                        "Lending;"
                    ]
                }
            ]
        },
        rightCol: {
            title: "Usability and production readiness",
            items: [
                "Performance optimization, including lazy loading, code splitting, and server-side rendering;",
                "Performance monitoring covering responsiveness, load time, potential crashes, etc.;",
                "User accessibility and device, browser, and OS compatibility;",
                "Alerts and notifications;",
                "Security, encompassing user input sanitizing, strong authentication, CSRF, device binding, etc.;",
                "Harmonious analytics integration to track performance and user behavior;",
                "User feedback, encompassing rating prompts, feedback forms, bug reports, etc.;",
                "Offline functionalities ensured through caching, data storage, access, etc.;",
                "Integration with social media, including features like sharing, etc.;",
                "Continuous maintenance, support, and updates, including A/B test-based improvements."
            ]
        }
    },
    digitalBanking: {
        id: "digitalBanking",
        label: "DIGITAL BANKING PLATFORM",
        leftCol: {
            sections: [
                {
                    title: "Middleware solutions",
                    items: [
                        "Creating custom software based on open-source options;",
                        "Building on top of solutions and integration platforms from other vendors;",
                        "Designing truly omnichannel experiences across digital apps and websites;",
                        "Providing real-time access to money and financial products via a digital interface for customers;",
                        "Crafting one-of-a-kind custom software components built from scratch to deliver tailored-fit functionalities."
                    ]
                },
                {
                    title: "Core solutions",
                    items: [
                        "Revamping core platforms and redesigning them based on open and modular architecture principles;",
                        "Core banking vendor assessment and selection based on specific sets of questionnaires;",
                        "Provision of faster time-to-market with new core platforms;",
                        "Integration with core systems."
                    ]
                }
            ]
        },
        partners: [
            { name: "Backbase", logo: "/images/Techtools/Backbase.svg" },
            { name: "Modulr", logo: "/images/Techtools/Modulr_1.png" },
            { name: "MuleSoft", logo: "/images/Techtools/mulesoft.svg" },
            { name: "Temenos", logo: "/images/Techtools/temenos.svg" },
            { name: "nCino", logo: "/images/Techtools/ncino.png" },
            { name: "Railsr", logo: "/images/Techtools/railsr.png" },
            { name: "Mambu", logo: "/images/Techtools/mambu.svg" },
            { name: "Thought Machine", logo: "/images/Techtools/thought-machine.png" },
            { name: "Tuum", logo: "/images/Techtools/tuum.png" },
            { name: "SDK.finance", logo: "/images/Techtools/sdk-finance.png" },
            { name: "Solaris", logo: "/images/Techtools/solaris.svg" },
            { name: "Bankable", logo: "/images/Techtools/bankable.png" }
        ]
    }
};

const SERVICES_PROVIDE = [
    {
        id: "blockchain",
        title: "Blockchain software development",
        desc: "Devopstrio creates blockchain-based financial platforms for banks, FinTech companies, and digital asset providers seeking secure and transparent transaction infrastructure. Our teams build distributed ledger systems for payment processing, asset marketplaces, and dApps.",
        assistTitle: "With our finance software development services you can obtain:",
        points: [
            "Blockchain marketplaces for digital assets and advanced financial services;",
            "Fraud-resistant payment systems supporting secure financial transactions;",
            "Decentralized applications (dApps) built on modern blockchain frameworks."
        ]
    },
    {
        id: "emoney",
        title: "eMoney institution software development",
        desc: "Devopstrio builds eMoney platforms and digital payment systems for FinTech companies and licensed electronic money institutions. Our teams build secure web and mobile applications that support digital payments, wallet management, and integration with financial services infrastructure.",
        assistTitle: "These solutions may include:",
        points: [
            "Modern FinTech web and mobile applications for digital financial services;",
            "QR-code payment systems enabling fast and secure contactless transactions;",
            "eWallet and digital wallet platforms supporting secure storage and transfer of electronic money."
        ]
    },
    {
        id: "openbanking",
        title: "Open banking software development",
        desc: "Devopstrio's team creates open banking platforms and API-based financial services that enable banks and FinTech companies to securely share financial data and integrate third-party services. Our teams design scalable systems that support secure data exchange and financial ecosystems.",
        assistTitle: "Here, we can assist you with:",
        points: [
            "Open banking APIs enabling secure financial data access;",
            "Personalized account management platforms for digital banking services;",
            "Payment service provider software supporting modern payment infrastructures;",
            "Advanced data analytics and security solutions for financial data processing."
        ]
    },
    {
        id: "tax",
        title: "Tax and accounting software development",
        desc: "Devopstrio can provide you with tax and accounting software that supports financial reporting, tax calculation, and financial data management for banks, FinTech companies, and corporate finance teams. We help organizations automate accounting workflows and maintain accurate financial records.",
        assistTitle: "We are fully equipped to provide you with:",
        points: [
            "Tax refund management solutions for effective automated tax processing;",
            "Custom accounting software for financial operations and detailed reporting;",
            "Fund accounting systems supporting asset tracking and financial oversight."
        ]
    },
    {
        id: "crypto",
        title: "Cryptocurrency software development",
        desc: "Devopstrio develops cryptocurrency platforms and digital asset infrastructure for FinTech companies, digital exchanges, and financial organizations working with blockchain-based assets. Our teams build secure systems that support crypto transactions, asset storage, and integration with financial services.",
        assistTitle: "These might encompass:",
        points: [
            "Cryptocurrency exchange platforms for modern digital asset trading;",
            "Digital wallet integrations connecting crypto services with financial applications;",
            "Cryptocurrency wallet development for secure storage and transfer of digital assets."
        ]
    },
    {
        id: "price-comparison",
        title: "Price comparison solutions and services",
        desc: "Devopstrio provides customers with price comparison platforms and financial product aggregators that allow businesses and consumers to evaluate financial services, tariffs, and offers across multiple providers. These systems collect and process pricing data from various sources to deliver comparisons.",
        assistTitle: "Such solutions normally include:",
        points: [
            "Comparison platforms for versatile business services and financial products;",
            "Utility comparison software for energy, telecom, and subscription services;",
            "Retail price comparison systems capable of supporting digital marketplaces."
        ]
    },
    {
        id: "compliance",
        title: "Custom compliance solution development",
        desc: "Devopstrio makes it possible to obtain custom compliance software solutions that help financial institutions monitor transactions, manage regulatory documentation, and maintain compliance with regulations. Our teams design platforms that automate compliance workflows and support risk monitoring.",
        assistTitle: "Our financial software development company builds:",
        points: [
            "AI-driven document management and workflow automation for regulatory reporting;",
            "Knowledge management systems for compliance documentation and policy tracking;",
            "Transaction monitoring platforms supporting AML and fraud detection."
        ]
    },
    {
        id: "loan",
        title: "Custom Loan Software Solutions",
        desc: "Devopstrio crafts custom loan software platforms that support digital lending operations for banks, FinTech companies, and financial institutions. Our teams build systems that manage the full lending lifecycle, including loan origination, underwriting, credit evaluation, and loan servicing.",
        assistTitle: "Depending on project needs, solutions may include:",
        points: [
            "Loan origination software for application processing and approval workflows;",
            "Loan management systems supporting repayment tracking and portfolio monitoring;",
            "Lending automation platforms integrating risk assessment, credit scoring, and decision support tools."
        ]
    },
    {
        id: "augmentation",
        title: "Staff augmentation for finance companies",
        desc: "Devopstrio provides staff augmentation for financial software development, helping banks, FinTech companies, and financial institutions expand their engineering capacity. We support the development and modernization of financial software systems, digital banking solutions, and FinTech applications.",
        assistTitle: "Typical solutions include:",
        points: [
            "Finance-focused development teams experienced in financial software systems;",
            "Position and skill requirement analysis for building specialized engineering teams;",
            "Compliant software development and delivery aligned with financial industry standards."
        ]
    },
    {
        id: "rpa",
        title: "Finance robotics process automation",
        desc: "Devopstrio engineers robotic process automation (RPA) solutions for financial operations, helping banks, FinTech companies, and financial institutions automate repetitive workflows and improve operational efficiency. We design tools that support data processing, transaction handling, and reporting.",
        assistTitle: "You can rely on us when you need:",
        points: [
            "Powerful and automated transaction processing for financial operations;",
            "Financial reporting and planning automation for data analysis and compliance;",
            "RPA frameworks and automation workflows implementing leading robotic process automation practices."
        ]
    },
    {
        id: "nft",
        title: "NFT Software Development",
        desc: "Devopstrio creates NFT platforms and digital asset marketplaces that enable organizations to create, manage, and trade tokenized digital assets. Our teams build blockchain-based systems supporting secure ownership records and integration with digital wallet infrastructure.",
        assistTitle: "These solutions may include:",
        points: [
            "NFT exchanges and marketplaces for trading tokenized digital assets;",
            "NFT web platforms and mobile applications supporting digital asset management;",
            "Digital wallets enabling secure storage and transfer of NFTs and SFTs."
        ]
    },
    {
        id: "dapps",
        title: "Decentralized app development",
        desc: "Devopstrio delivers decentralized applications (dApps) that run on blockchain networks and support peer-to-peer financial transactions and digital asset operations. Our teams design secure distributed applications integrated with smart contracts and decentralized financial infrastructures.",
        assistTitle: "Scope of our finance software development services:",
        points: [
            "dApp design and engineering for blockchain-based financial platforms;",
            "dApp testing, quality assurance, and consulting for performance and security validation;",
            "dApp support and maintenance ensuring stable operation across blockchain networks."
        ]
    },
    {
        id: "defi",
        title: "DeFi Software Development Offerings",
        desc: "Devopstrio offers decentralized finance (DeFi) platforms that enable blockchain-based financial services without centralized intermediaries. Our teams build secure DeFi applications integrated with smart contracts and advanced distributed ledger technologies.",
        assistTitle: "You can reach out to us for:",
        points: [
            "DeFi lending and staking platforms supporting digital asset lending and staking mechanisms;",
            "Yield farming systems enabling token rewards and liquidity participation;",
            "Decentralized exchanges (DEXs) supporting peer-to-peer digital asset trading."
        ]
    },
    {
        id: "smart-contracts",
        title: "Smart contract development services",
        desc: "Devopstrio develops smart contract solutions that automate financial transactions and business logic on blockchain networks. Our engineers design secure contract architectures used in decentralized finance platforms, digital asset systems, and other blockchain-based applications.",
        assistTitle: "Our finance software development services cover:",
        points: [
            "Smart contract design and development for blockchain-based financial systems;",
            "Smart contract auditing to identify vulnerabilities and security risks;",
            "Smart contract optimization to improve performance and transaction efficiency."
        ]
    }
];

const FinancialServices = () => {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);
    const [activeScope, setActiveScope] = useState("mobileWeb");
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [activeService, setActiveService] = useState(SERVICES_PROVIDE[0].id);

    // Initialize from localStorage to remember user's last selection
    const [activeSol, setActiveSol] = useState(() => {
        const saved = localStorage.getItem("fs_active_sol");
        return saved !== null ? parseInt(saved, 10) : 0;
    });

    // Persist selection to localStorage
    useEffect(() => {
        localStorage.setItem("fs_active_sol", activeSol);
    }, [activeSol]);

    const SOLUTION_IMAGES = [
        "/images/mobile_screen_f.mp4",
        "/images/mobile_screen_p.mp4",
        "/images/mobile_screen_L.mp4",
        "/images/mobile_screen_B.mp4",
    ];

    return (
        <div className="fs-page">
            {/* 1. HERO */}
            <ClientSuccess />

            {/* 2. HIGHLIGHTS & METRICS (Horizon Style) */}
            <section className="fs-horizon-section">
                <div className="fs-container">
                    {/* Top Row */}
                    <div className="fs-horizon-top">
                        <div className="fs-horizon-tag">Devopstrio Fintech</div>
                        <p className="fs-horizon-desc">
                            At Devopstrio, we don't just build software — we engineer financial
                            ecosystems. Since 2019, our expertise has been a home for fintech
                            innovators and global banks alike, from eager startups to seasoned
                            market leaders.
                        </p>
                    </div>

                    {/* Three Cards Grid */}
                    <div className="fs-horizon-cards">
                        {/* Card 1: Security Tech */}
                        <motion.div
                            className="fs-hcard fs-hcard-dark"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div>
                                <div className="fs-hcard-icon">
                                    <FiShield />
                                </div>
                                <h3 className="fs-hcard-h3">
                                    Enterprise-grade security with multi-layer encryption & climate
                                    control — build in perfect conditions.
                                </h3>
                            </div>
                            <div className="fs-hcard-toggle">
                                <div className="fs-toggle-btn">
                                    <div className="fs-toggle-circle"></div>
                                </div>
                                Compliance Mode
                            </div>
                        </motion.div>

                        {/* Card 2: Image Highlight */}
                        <motion.div
                            className="fs-hcard fs-hcard-img"
                            style={{
                                backgroundImage:
                                    'url("https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80")',
                            }}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="fs-hcard-badge">Expert Consultation</div>
                        </motion.div>

                        {/* Card 3: Metrics & Levels */}
                        <motion.div
                            className="fs-hcard fs-hcard-light"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <div className="fs-hcard-big">99.9%</div>
                            <div className="fs-hcard-sub">Platform Uptime</div>
                            <p className="fs-hcard-desc">
                                Certified infrastructure ready to boost your financial operations
                                from launch to global scale.
                            </p>
                            <div className="fs-chart">
                                {[
                                    { lbl: "Basic", dots: 10, active: 10, val: 99 },
                                    { lbl: "Advanced", dots: 10, active: 8, val: 95 },
                                    { lbl: "Enterprise", dots: 10, active: 6, val: 90 },
                                ].map((row, idx) => (
                                    <div key={idx} className="fs-chart-row">
                                        <span className="fs-chart-label">{row.lbl}</span>
                                        <div className="fs-chart-dots">
                                            {[...Array(row.dots)].map((_, di) => (
                                                <div
                                                    key={di}
                                                    className={`fs-dot ${di < row.active ? "active" : ""}`}
                                                ></div>
                                            ))}
                                        </div>
                                        <span className="fs-chart-val">{row.val}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Row: Facts in Numbers */}
                    <div className="fs-facts-head">A few more facts about us in numbers</div>
                    <div className="fs-facts-grid">
                        <div className="fs-fact-item">
                            <div className="fs-fact-val">4.9/5</div>
                            <div className="fs-fact-lbl">CLUTCH RATING</div>
                        </div>
                        <div className="fs-fact-item">
                            <div className="fs-fact-val">ISO 27001</div>
                            <div className="fs-fact-lbl">SECURITY CERTIFIED</div>
                        </div>
                        <div className="fs-fact-item">
                            <div className="fs-fact-val">1,200+</div>
                            <div className="fs-fact-lbl">PROJECTS COMPLETED</div>
                        </div>
                        <div className="fs-fact-item">
                            <div className="fs-fact-val">125+</div>
                            <div className="fs-fact-lbl">GLOBAL CLIENTS</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* 2.5 WHO WE BUILD FOR */}
            <section className="fs-audience">
                <div className="fs-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="fs-audience-head"
                    >
                        <h2 className="fs-audience-h2">Who we build financial software for</h2>
                        <p className="fs-audience-p">
                            Our tech team offers financial software development for organizations across the
                            financial services industry, regardless of size.
                        </p>
                    </motion.div>

                    <div className="fs-audience-grid">
                        {AUDIENCE_DATA.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`fs-audience-card ${item.isFeatured ? 'featured' : ''}`}
                            >
                                <div className="fs-audience-num">{item.num}</div>
                                <h3 className="fs-audience-h3">{item.title}</h3>
                                <p className="fs-audience-desc">{item.desc}</p>
                                <ul className="fs-audience-list">
                                    {item.points.map((point, idx) => (
                                        <li key={idx} className="fs-audience-item">
                                            <FiCheck className="fs-audience-icon" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="fs-audience-sparkle">
                                    <HiSparkles />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. SOLUTIONS (Interactive Dark Style) */}
            <section className="fs-solutions-section dark">
                <div className="fs-container">
                    <div className="fs-solutions-head">
                        <h2 className="fs-solutions-h2">
                            Financial software solutions <br /> Devopstrio teams develops
                        </h2>
                        <p className="fs-solutions-p">
                            Click on a solution to preview its interface and discover how we
                            power the next generation of financial platforms.
                        </p>
                    </div>

                    <div className="fs-solutions-layout">
                        <div className="fs-solutions-grid">
                            {SERVICES.slice(0, 4).map((s, i) => (
                                <motion.div
                                    key={i}
                                    className={`fs-sol-card ${activeSol === i ? "active" : ""}`}
                                    onClick={() => setActiveSol(i)}
                                    variants={fadeUp}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div className="fs-sol-num">{i + 1}</div>
                                    <h3 className="fs-sol-h3">{s.title}</h3>
                                    <p className="fs-sol-desc">{s.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            className="fs-sol-preview"
                            key={activeSol}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="fs-phone-mockup">
                                {/* Hardware Buttons */}
                                <div className="fs-phone-btn fs-btn-action"></div>
                                <div className="fs-phone-btn fs-btn-vol-up"></div>
                                <div className="fs-phone-btn fs-btn-vol-down"></div>
                                <div className="fs-phone-btn fs-btn-power"></div>
                                <div className="fs-phone-btn fs-btn-camera"></div>

                                <div className="fs-phone-inner">
                                    {/* Dynamic Island (Active) */}
                                    <div className="fs-dynamic-island">
                                        <div className="fs-island-dot"></div>
                                        <FiActivity size={10} color="#fff" />
                                    </div>

                                    {/* Status Bar */}
                                    <div className="fs-emu-status">
                                        <span>9:41</span>
                                        <div style={{ display: "flex", gap: "6px" }}>
                                            <FiActivity size={12} />
                                            <div
                                                style={{
                                                    width: "18px",
                                                    height: "9px",
                                                    border: "1px solid white",
                                                    borderRadius: "3px",
                                                    position: "relative",
                                                    padding: "1px",
                                                }}
                                            >
                                                <div
                                                    style={{
                                                        width: "100%",
                                                        height: "100%",
                                                        background: "white",
                                                    }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Main Display Area */}
                                    <div className="fs-emu-content">
                                        {SOLUTION_IMAGES[activeSol].endsWith(".mp4") ? (
                                            <video
                                                src={SOLUTION_IMAGES[activeSol]}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                }}
                                            />
                                        ) : (
                                            <img
                                                src={SOLUTION_IMAGES[activeSol]}
                                                alt="Fintech App View"
                                            />
                                        )}
                                        <div className="fs-phone-overlay"></div>
                                    </div>

                                    {/* Navigation Bar */}
                                    <div className="fs-emu-nav">
                                        <div
                                            style={{
                                                width: "120px",
                                                height: "5px",
                                                background: "#fff",
                                                borderRadius: "10px",
                                                opacity: 0.8,
                                            }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 4. TECH STACK */}
            <section className="fs-tech">
                <div className="fs-container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="fs-sec-head"
                    >
                        <p className="fs-eyebrow">Innovation</p>
                        <h2 className="fs-sec-h2">Our Fintech Technology Stack</h2>
                    </motion.div>

                    <div className="fs-tech-wrapper">
                        <div className="fs-tech-slider">
                            {[...TECH_STACK, ...TECH_STACK].map((t, i) => (
                                <div key={i} className="fs-tech-item">
                                    <div className="fs-tech-icon">{t.icon}</div>
                                    <div className="fs-tech-name">{t.name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Technology scope */}
            <section className="fs-tech-scope">
                <div className="fs-container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="fs-sec-head"
                    >
                        <p className="fs-eyebrow">Expertise</p>
                        <h2 className="fs-sec-h2">Financial technology scope</h2>
                    </motion.div>

                    {/* Tab Navigation */}
                    <div className="fs-scope-tabs-container">
                        <div className="fs-scope-tabs">
                            {Object.values(TECH_SCOPE_DATA).map((tab) => (
                                <button
                                    key={tab.id}
                                    className={`fs-scope-tab ${activeScope === tab.id ? "active" : ""}`}
                                    onClick={() => setActiveScope(tab.id)}
                                >
                                    {tab.label}
                                    {activeScope === tab.id && <motion.div layoutId="scopeUnderline" className="fs-scope-underline" />}
                                </button>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeScope}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="fs-scope-content"
                        >
                            {activeScope === "mobileWeb" ? (
                                <div className="fs-scope-grid">
                                    {/* Left Column */}
                                    <div className="fs-scope-col">
                                        <h3 className="fs-scope-h3">{TECH_SCOPE_DATA.mobileWeb.leftCol.title}</h3>
                                        {TECH_SCOPE_DATA.mobileWeb.leftCol.groups.map((group, idx) => (
                                            <div key={idx} className="fs-scope-group">
                                                <h4 className="fs-scope-h4">{group.name}</h4>
                                                <ul className="fs-scope-list">
                                                    {group.items.map((item, i) => (
                                                        <li key={i} className="fs-scope-item">
                                                            <FiCheck className="fs-scope-icon" /> {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Right Column */}
                                    <div className="fs-scope-col">
                                        <h3 className="fs-scope-h3">{TECH_SCOPE_DATA.mobileWeb.rightCol.title}</h3>
                                        <ul className="fs-scope-list">
                                            {TECH_SCOPE_DATA.mobileWeb.rightCol.items.map((item, i) => (
                                                <li key={i} className="fs-scope-item">
                                                    <FiCheck className="fs-scope-icon" /> {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ) : (
                                <div className="fs-scope-grid">
                                    {/* Left Column */}
                                    <div className="fs-scope-col">
                                        {TECH_SCOPE_DATA.digitalBanking.leftCol.sections.map((sec, idx) => (
                                            <div key={idx} className="fs-scope-group">
                                                <h3 className="fs-scope-h3">{sec.title}</h3>
                                                <ul className="fs-scope-list">
                                                    {sec.items.map((item, i) => (
                                                        <li key={i} className="fs-scope-item">
                                                            <FiCheck className="fs-scope-icon" /> {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Right Column: Partners Logo Grid */}
                                    <div className="fs-scope-col">
                                        <div className="fs-partners-grid">
                                            {TECH_SCOPE_DATA.digitalBanking.partners.map((p, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="fs-partner-card"
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    whileInView={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: i * 0.05 }}
                                                    viewport={{ once: true }}
                                                >
                                                    <div className="fs-partner-logo-box">
                                                        <img
                                                            src={p.logo}
                                                            alt={p.name}
                                                            className="fs-partner-logo"
                                                            onError={(e) => {
                                                                e.target.style.display = 'none';
                                                                e.target.parentNode.classList.add('fallback');
                                                            }}
                                                        />
                                                        <div className="fs-partner-logo-fallback">{p.name[0]}</div>
                                                    </div>
                                                    <span className="fs-partner-name">{p.name}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>
            {/* 5.5 Financial Software Service provide */}
            <section className="fs-services-provide">
                <div className="fs-container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="fs-sec-head left-aligned"
                    >
                        <h2 className="fs-sec-h2">Financial software development services we provide</h2>
                    </motion.div>

                    <div className="fs-services-provide-layout">
                        {/* Left side: Navigation links */}
                        <div className="fs-services-nav">
                            {SERVICES_PROVIDE.map((service) => (
                                <button
                                    key={service.id}
                                    className={`fs-service-nav-btn ${activeService === service.id ? "active" : ""}`}
                                    onClick={() => {
                                        setActiveService(service.id);
                                        // Smooth scroll to top of content area on mobile/small screens
                                        if (window.innerWidth < 1024) {
                                            const el = document.querySelector('.fs-service-detail');
                                            el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                        }
                                    }}
                                >
                                    {service.title}
                                </button>
                            ))}
                        </div>

                        {/* Right side: Detailed content */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.3 }}
                                className="fs-service-detail"
                            >
                                {(() => {
                                    const current = SERVICES_PROVIDE.find(s => s.id === activeService);
                                    return (
                                        <>
                                            <p className="fs-service-desc">{current.desc}</p>
                                            <div className="fs-service-assist-box">
                                                <h4 className="fs-service-assist-title">{current.assistTitle}</h4>
                                                <ul className="fs-service-points">
                                                    {current.points.map((p, idx) => (
                                                        <li key={idx} className="fs-service-point">
                                                            <FiCheck className="fs-service-point-icon" />
                                                            <span>{p}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </>
                                    );
                                })()}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>


            {/* 6 PROCESS SECTION (Redesigned) */}
            <section className="fs-process">
                <div className="fs-container">
                    <div className="fs-process-layout">
                        {/* Left Side: Sticky Intro */}
                        <div className="fs-process-left">
                            <p className="fs-process-eyebrow">Our methodology</p>
                            <h2 className="fs-process-h2">
                                Our financial software development <span>process</span>
                            </h2>
                            <p className="fs-process-sub">
                                We follow a structured financial software development process designed to deliver both secure and scalable solutions. Our approach combines industry expertise, regulatory awareness, and modern engineering practices.
                            </p>
                        </div>

                        {/* Right Side: Scrollable Steps */}
                        <div className="fs-process-steps">
                            {PROCESS_STEPS.map((s, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="fs-step-item"
                                >
                                    <div className="fs-step-num">
                                        {String(i + 1).padStart(2, "0")}.
                                    </div>
                                    <div className="fs-step-info">
                                        <h3 className="fs-step-h3">{s.title}</h3>
                                        <p className="fs-step-p">{s.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 8. KNOWLEDGE HUB */}
            <section className="fs-knowledge">
                <div className="fs-container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="fs-sec-head left-aligned"
                    >
                        <h2 className="fs-sec-h2">Financial software development knowledge hub</h2>
                        <p className="fs-sec-p-wide">
                            Devopstrio's professionals consistently engage in research of the financial services market, keeping track of trends and changes. Our company's team wants to share our vision of where the global market is heading in FinTech engineering, insurance software, development outsourcing, etc.
                        </p>
                    </motion.div>

                    <div className="fs-knowledge-layout">
                        {/* Left Side: Featured Article */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="fs-knowledge-featured"
                        >
                            <div className="fs-featured-img-wrap">
                                <img
                                    src="/images/NewFolder/Groups_94.png"
                                    alt="Neobank guide"
                                />
                            </div>
                            <div className="fs-featured-info">
                                <span className="fs-article-time">Reading time: {FEATURED_ARTICLE.time}</span>
                                <h3 className="fs-featured-h3">{FEATURED_ARTICLE.title}</h3>
                                <p className="fs-featured-p">Learn how to start a neobank with the Devopstrio guide.</p>
                                <button
                                    className="fs-cap-link-btn"
                                    onClick={() => setSelectedArticle(FEATURED_ARTICLE)}
                                >
                                    See more <span>→</span>
                                </button>
                            </div>
                        </motion.div>

                        {/* Right Side: Article List */}
                        <div className="fs-knowledge-list">
                            {ARTICLES.map((article, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="fs-article-item"
                                >
                                    <div className="fs-article-content">
                                        <h4 className="fs-article-h4">{article.title}</h4>
                                        <div className="fs-article-meta">
                                            <span className="fs-article-time">Reading time: {article.time}</span>
                                            <button
                                                className="fs-cap-link-btn"
                                                onClick={() => setSelectedArticle(article)}
                                            >
                                                See more <span>→</span>
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Knowledge Modal */}
            <AnimatePresence>
                {selectedArticle && (
                    <motion.div
                        className="fs-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedArticle(null)}
                    >
                        <motion.div
                            className="fs-modal-content"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button className="fs-modal-close" onClick={() => setSelectedArticle(null)}>
                                <FiPlus style={{ transform: "rotate(45deg)" }} />
                            </button>
                            <div className="fs-modal-body">
                                <span className="fs-article-time">{selectedArticle.time} read</span>
                                <h2 className="fs-modal-h2">{selectedArticle.title}</h2>
                                <p className="fs-modal-p">{selectedArticle.desc}</p>
                                <div className="fs-modal-footer">
                                    <button className="fs-modal-btn" onClick={() => setSelectedArticle(null)}>
                                        Back to Hub
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 7. ENGINEERING CAPABILITIES */}
            <section className="fs-capabilities">
                <div className="fs-container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="fs-sec-head left-aligned"
                    >
                        <h2 className="fs-sec-h2">Engineering capabilities for financial software development</h2>
                        <p className="fs-sec-p-wide">
                            Devopstrio combines deep engineering expertise with financial domain knowledge. This empowers us to envision and develop well-protected and scalable financial software platforms capable of supporting complex financial operations, regulatory compliance, and high-volume transactions.
                        </p>
                    </motion.div>

                    <div className="fs-capabilities-grid">
                        {CAPABILITIES.map((item, idx) => (
                            <div key={idx} className="fs-capability-flip-card">
                                <div className="fs-capability-card-inner">
                                    {/* Front Side */}
                                    <div className="fs-capability-card-front">
                                        <div className="fs-cap-icon">{item.icon}</div>
                                        <h3 className="fs-cap-h3">{item.title}</h3>
                                    </div>
                                    {/* Back Side */}
                                    <div className="fs-capability-card-back">
                                        <h3 className="fs-cap-h3-back">{item.title}</h3>
                                        <p className="fs-cap-details">{item.details}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FAQ */}
            <section className="fs-faq">
                <div className="fs-container">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="fs-sec-head"
                    >
                        <p className="fs-eyebrow">Questions</p>
                        <h2 className="fs-sec-h2">Frequently Asked Questions</h2>
                    </motion.div>

                    <div className="fs-faq-list">
                        {FAQS.map((f, i) => (
                            <div key={i} className="fs-faq-item">
                                <div className="fs-faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                    {f.q}
                                    {openFaq === i ? <FiMinus /> : <FiPlus />}
                                </div>
                                <AnimatePresence>
                                    {openFaq === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="fs-faq-a"
                                        >
                                            {f.a}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
            
                <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
                    <Newsletter />
                </div>            
            <Cta />
        </div>
    );
};

export default FinancialServices;
