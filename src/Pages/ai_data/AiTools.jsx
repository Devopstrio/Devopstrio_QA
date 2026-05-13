import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AIConsultationForm from "../../components/AIConsultationForm/AIConsultationForm";
import "../../Style/ai_data/AiTools.css";
import {
    FiArrowRight, FiZap, FiBarChart2, FiUser, FiGlobe, FiEdit3, FiImage, FiMessageSquare,
    FiPenTool, FiVideo, FiSearch, FiShield, FiFileText, FiStar, FiPlus, FiCpu, FiTrendingUp,
    FiMic, FiCode, FiActivity, FiLock, FiShare2, FiMail, FiPlay, FiGrid, FiLayout, FiCamera,
    FiMusic, FiSmartphone, FiServer, FiLayers, FiPieChart, FiMonitor, FiTerminal,
    FiTruck, FiShoppingBag, FiTool, FiBriefcase, FiPackage, FiUsers, FiCheckCircle, FiMessageCircle,
    FiHeart
} from "react-icons/fi";

// Local Assets
import thangalakshmi_dev from "../../assets/images/thangalakshmi_dev.png";
import securityImg from "../../assets/images/aitools/security.png";
import marketingImg from "../../assets/images/aitools/marketing.png";
import lawImg from "../../assets/images/aitools/law.png";
import medicineImg from "../../assets/images/aitools/medicine.png";
import retailImg from "../../assets/images/aitools/retail.png";
import logisticsImg from "../../assets/images/aitools/logistics.png";
import musicImg from "../../assets/images/aitools/music.png";
import realityImg from "../../assets/images/aitools/3d_reality.png";
import socialImg from "../../assets/images/aitools/social.png";
import supportAgentImg from "../../assets/images/aitools/support_agent.png";
import dataScienceImg from "../../assets/images/aitools/data_science.png";
import chatImg from "../../assets/images/aitools/chat.png";

// Specific Tool Assets
import grammarlyImg from "../../assets/images/aitools/grammarly.png";
import midjourneyImg from "../../assets/images/aitools/midjourney.png";
import notionImg from "../../assets/images/aitools/notion.png";
import firefliesImg from "../../assets/images/aitools/fireflies.png";
import copilotImg from "../../assets/images/aitools/copilot.png";
import elevenlabsImg from "../../assets/images/aitools/elevenlabs.png";
import heygenImg from "../../assets/images/aitools/heygen.png";
import surferseoImg from "../../assets/images/aitools/surferseo.png";
import uizardImg from "../../assets/images/aitools/uizard.png";
import tableauImg from "../../assets/images/aitools/tableau.png";


import Servicehero from "../../components/Hero/Serviceshero";

const metrics = [
    { label: "Platform Metrics", value: "", icon: <FiActivity /> },
    { label: "Uptime SLA", value: "99.99%", icon: <FiShield /> },
    { label: "API Latency", value: "< 50ms", icon: <FiZap /> },
    { label: "End Users", value: "10M+", icon: <FiUsers /> },
    { label: "Compliance", value: "SOC 2", icon: <FiLock /> },
    { label: "Products Shipped", value: "150+", icon: <FiPackage /> }
];

const benefits = [
    { icon: <FiZap />, title: "Enhanced efficiency", desc: "AI tools automate repetitive tasks, allowing your team to focus on high-value strategic initiatives." },
    { icon: <FiBarChart2 />, title: "Upgraded decision-making", desc: "Data-driven insights powered by AI enable faster and more accurate business decisions." },
    { icon: <FiUser />, title: "Personalized experiences", desc: "Tailor your customer interactions with AI that understands individual preferences and behaviors." },
    { icon: <FiGlobe />, title: "Innovative business solutions", desc: "Unlock new revenue streams and business models with cutting-edge AI technologies." }
];

const tools = [
    {
        id: 1,
        category: "Writing",
        title: "Grammarly",
        desc: "An advanced AI writing assistant that offers real-time professional grammar, punctuation, and tone checks across multiple platforms. It helps businesses maintain a consistent brand voice while ensuring all communications are clear, impactful, and error-free.",
        image: grammarlyImg,
        icon: <FiEdit3 />,
        link: "https://www.grammarly.com/"
    },
    {
        id: 2,
        category: "Design",
        title: "Midjourney",
        desc: "State-of-the-art generative AI that transforms complex text prompts into stunning, high-fidelity visual assets. Perfect for rapid prototyping of marketing materials, concept art, and high-quality digital illustrations that stand out.",
        image: midjourneyImg,
        icon: <FiImage />,
        link: "https://www.midjourney.com/"
    },
    {
        id: 3,
        category: "Support",
        title: "Custom Chatbot",
        desc: "24/7 intelligent multilingual chat solutions powered by private LLMs. These bots learn from your specific company data to provide accurate, human-like support to customers while reducing the workload on your human support teams.",
        image: chatImg,
        icon: <FiMessageSquare />,
        link: "https://openai.com/"
    },
    {
        id: 4,
        category: "Productivity",
        title: "Notion AI",
        desc: "A powerful integrated AI assistant that helps you write, plan, and analyze directly within your Notion workspace. It can summarize long documents, generate brainstorming ideas, and automate tedious database tasks with simple commands.",
        image: notionImg,
        icon: <FiFileText />,
        link: "https://www.notion.so/product/ai"
    },
    {
        id: 5,
        category: "Design",
        title: "Uizard",
        desc: "AI-powered rapid UI/UX prototyping tool that turns hand-drawn sketches into functional digital designs instantly. It streamlines the design workflow for product teams, allowing them to iterate on user interfaces with unprecedented speed.",
        image: uizardImg,
        icon: <FiPenTool />,
        link: "https://uizard.io/"
    },
    {
        id: 6,
        category: "Video",
        title: "HeyGen",
        desc: "Professional-grade AI video generation for business. Create studio-quality videos with photorealistic avatars and natural-sounding voices in minutes, perfect for training, corporate announcements, and personalized marketing campaigns.",
        image: heygenImg,
        icon: <FiVideo />,
        link: "https://www.heygen.com/"
    },
    {
        id: 7,
        category: "SEO",
        title: "Surfer SEO",
        desc: "Data-driven SEO strategy platform that uses AI to analyze top-ranking pages for any keyword. It provides actionable insights for content optimization, helping you climb search engine results and drive organic traffic consistently.",
        image: surferseoImg,
        icon: <FiTrendingUp />,
        link: "https://surferseo.com/"
    },
    {
        id: 8,
        category: "Voice",
        title: "ElevenLabs",
        desc: "The world's most realistic AI speech synthesis software. It offers emotionally-aware voices that can speak in dozens of languages, allowing you to create high-quality narrations for videos, games, and accessibility tools.",
        image: elevenlabsImg,
        icon: <FiMic />,
        link: "https://elevenlabs.io/"
    },
    {
        id: 9,
        category: "Meeting",
        title: "Fireflies.ai",
        desc: "Your AI meeting assistant that automatically records, transcribes, and summarizes voice conversations across all major video conferencing platforms. It ensures no action item is missed and knowledge is easily searchable.",
        image: firefliesImg,
        icon: <FiCpu />,
        link: "https://fireflies.ai/"
    },
    {
        id: 10,
        category: "Coding",
        title: "GitHub Copilot",
        desc: "An AI pair programmer that provides real-time code suggestions and entire functions directly in your editor. It accelerates the development lifecycle by handling boilerplate code and suggesting complex logic patterns.",
        image: copilotImg,
        icon: <FiCode />,
        link: "https://github.com/features/copilot"
    },
    {
        id: 11,
        category: "Analytics",
        title: "Tableau AI",
        desc: "Augmented analytics for data-driven teams. Tableau AI provides intelligent insights and automated data preparation, helping businesses visualize complex information and discover hidden trends in seconds.",
        image: tableauImg,
        icon: <FiBarChart2 />,
        link: "https://www.tableau.com/products/ai"
    },
    {
        id: 12,
        category: "Security",
        title: "Darktrace",
        desc: "An enterprise-grade cyber AI platform that learns your digital environment to detect and neutralize subtle threats in real-time. It provides autonomous response capabilities to protect critical infrastructure.",
        image: securityImg,
        icon: <FiShield />,
        link: "https://www.darktrace.com/"
    },
    {
        id: 13,
        category: "Marketing",
        title: "Jasper",
        desc: "An AI content platform that helps marketing teams create high-quality blog posts, social media content, and ad copy 10x faster. It maintains brand consistency across all channels using your unique voice.",
        image: marketingImg,
        icon: <FiShare2 />,
        link: "https://www.jasper.ai/"
    },
    {
        id: 14,
        category: "Legal",
        title: "Harvey AI",
        desc: "The next-generation AI platform for professional legal services. Harvey assists lawyers with research, drafting, and analysis across multiple jurisdictions, significantly increasing accuracy and efficiency.",
        image: lawImg,
        icon: <FiLock />,
        link: "https://www.harvey.ai/"
    },
    {
        id: 15,
        category: "Health",
        title: "Babylon AI",
        desc: "AI-driven digital health services that provide personalized health assessments and remote consultations. It uses advanced machine learning to help clinicians diagnose conditions more accurately and faster.",
        image: medicineImg,
        icon: <FiHeart />,
        link: "https://www.babylonhealth.com/"
    },
    {
        id: 16,
        category: "Retail",
        title: "Dynamic Yield",
        desc: "An AI-powered personalization platform that helps retailers deliver tailored customer experiences across web, mobile, and email. It optimizes the customer journey in real-time to drive conversions.",
        image: retailImg,
        icon: <FiShoppingBag />,
        link: "https://www.dynamicyield.com/"
    },
    {
        id: 17,
        category: "Logistics",
        title: "Project44",
        desc: "Advanced supply chain visibility powered by AI. It provides real-time tracking and predictive analytics for global shipments, helping logistics teams optimize routes and reduce operational delays.",
        image: logisticsImg,
        icon: <FiTruck />,
        link: "https://www.project44.com/"
    },
    {
        id: 18,
        category: "Music",
        title: "Suno AI",
        desc: "Generate full, professional-quality songs with vocals and instrumentation from simple text descriptions. Suno AI is revolutionizing creative workflows for content creators and musicians alike.",
        image: musicImg,
        icon: <FiMusic />,
        link: "https://suno.com/"
    },
    {
        id: 19,
        category: "3D Capture",
        title: "Luma AI",
        desc: "Capture reality in photorealistic 3D using just your smartphone. Luma AI uses neural radiance fields (NeRF) to create highly detailed 3D models and cinematic scenes for games, VFX, and e-commerce.",
        image: realityImg,
        icon: <FiCamera />,
        link: "https://lumalabs.ai/"
    }
];

const AiTools = () => {
    const [visibleCount, setVisibleCount] = useState(7); // Show 7 initially (1 banner + 6 grid)

    const scrollToElement = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 1500;
            let start = null;

            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);
                const easing = percentage < 0.5
                    ? 4 * percentage * percentage * percentage
                    : 1 - Math.pow(-2 * percentage + 2, 3) / 2;

                window.scrollTo(0, startPosition + distance * easing);
                if (progress < duration) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    };

    const handleLoadMore = () => {
        setVisibleCount(prev => Math.min(prev + 3, tools.length));
    };

    return (
        <div className="dt-aitools-page">
            {/* Hero Section */}
            <Servicehero/>

            <div className="dt-container">
                {/* Benefits Section */}
                <section className="dt-section-spacing">
                    <h2 className="dt-section-title">Benefits of AI tools for business</h2>
                    <div className="dt-benefits-grid">
                        {benefits.map((benefit, idx) => (
                            <div key={idx} className="dt-benefit-card">
                                <div className="dt-benefit-icon">{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Tools Section */}
                <section className="dt-section-spacing">
                    <h2 className="dt-section-title">Top AI tools for business yielding <span className="dt-gradient-text">exceptional efficiency</span></h2>

                    {/* Featured Banner Tool */}
                    {tools.length > 0 && (
                        <div className="dt-tool-banner">
                            <div className="dt-tool-banner-image">
                                <img src={tools[0].image} alt={tools[0].title} />
                            </div>
                            <div className="dt-tool-banner-content">
                                <span className="dt-tool-category">{tools[0].category}</span>
                                <h3>{tools[0].title}</h3>
                                <p>{tools[0].desc}</p>
                                <a href={tools[0].link} target="_blank" rel="noopener noreferrer" className="dt-tool-try-link">Try it out <FiArrowRight /></a>
                            </div>
                        </div>
                    )}

                    <div className="dt-tools-grid">
                        {tools.slice(1, visibleCount).map((tool) => (
                            <div key={tool.id} className="dt-tool-card">
                                <div className="dt-tool-image">
                                    <img src={tool.image} alt={tool.title} />
                                </div>
                                <div className="dt-tool-content">
                                    <span className="dt-tool-category">{tool.category}</span>
                                    <div className="dt-tool-header">
                                        <h3>{tool.title}</h3>
                                    </div>
                                    <p>{tool.desc}</p>
                                    <a href={tool.link} target="_blank" rel="noopener noreferrer" className="dt-tool-try-link">Try it out <FiArrowRight /></a>
                                </div>
                            </div>
                        ))}

                        {visibleCount < tools.length && (
                            <div className="dt-more-container">
                                <button className="dt-btn-more" onClick={handleLoadMore}>
                                    Load More Tools <FiPlus />
                                </button>
                            </div>
                        )}
                    </div>
                </section>

                {/* Reusable Consultation Form Component */}
                <AIConsultationForm
                    id="form-section"
                    title="Ready to implement <span class='dt-gradient-text'>AI Tools?</span>"
                    description="Our experts will help you select and integrate the best AI software for your specific business needs."
                    subjectPrefix="AI Tools Consultation"
                    steps={[
                        { number: "01", title: "Discovery", desc: "We analyze your workflows to identify high-impact AI opportunities." },
                        { number: "02", title: "Selection", desc: "We recommend the best-in-class AI tools or build custom solutions." },
                        { number: "03", title: "Integration", desc: "We handle the end-to-end setup, training, and deployment for your team." }
                    ]}
                />
            </div>
        </div>
    );
};

export default AiTools;
