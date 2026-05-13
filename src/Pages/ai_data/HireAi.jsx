import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    FiCpu, FiUsers, FiClock, FiCheckCircle,
    FiPlus, FiMinus, FiMail, FiMessageSquare, FiActivity,
    FiDatabase, FiSearch, FiLayers, FiCode, FiTrendingUp,
    FiChevronLeft, FiChevronRight, FiChevronUp
} from 'react-icons/fi';
import '../../Style/ai_data/HireAi.css';

// Components
import AIConsultationForm from '../../components/AIConsultationForm/AIConsultationForm';
import CTA from '../../components/Cta/Cta';
import ServiceHero from '../../components/Hero/Serviceshero';
import AITeam from '../../components/AITeam/AITeam';

// Assets



const HireAi = () => {
    const [activeRole, setActiveRole] = useState(0);
    const [openFaq, setOpenFaq] = useState(null);
    const [showAllTech, setShowAllTech] = useState(false);
    const [activeStep, setActiveStep] = useState(0);
    const [profileIndex, setProfileIndex] = useState(0);

    const nextProfile = () => {
        // We show 3 profiles at once, so we can slide profiles.length - 3 times
        setProfileIndex((prev) => (prev + 1) % (profiles.length - 2));
    };

    const prevProfile = () => {
        setProfileIndex((prev) => (prev - 1 + (profiles.length - 2)) % (profiles.length - 2));
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const stats = [
        { label: "High-end AI talent", value: "30+" },
        { label: "Successfully delivered", value: "120+" },
        { label: "Weeks to start", value: "2-4" }
    ];

    const roles = [
        {
            title: "AI Platform and Operations Engineer",
            content: "Ensures stable and scalable AI platforms by managing deployment, monitoring, and optimization of ML systems throughout the entire operational lifecycle.",
            resultTitle: "Contribution to AI project:",
            results: ["Flexible and dependable AI platform infrastructure;", "Automated model deployment and operational workflows;", "Monitoring of ML systems and efficiency optimization."]
        },
        {
            title: "AI Agent Solution Engineer",
            content: "Designs, implements, and optimizes AI agent-driven solutions by integrating reasoning, automation, and multi-step orchestration for the purpose of delivering reliable and intelligent task execution.",
            resultTitle: "Deliverables in AI projects:",
            results: ["Multi-agent autonomous systems with humans in the loop;", "Integration of agent workflows and AI reasoning;", "Safe agent execution and enhanced product features."]
        },
        {
            title: "Conversational AI Solution Engineer",
            content: "Envisions and delivers conversational AI experiences by crafting, integrating, and optimizing dialog systems that provide natural, accurate, and context-aware interactions.",
            resultTitle: "Tasks they resolve:",
            results: ["Advanced conversational AI and dialog flows;", "Integration of chat and voice systems into products;", "Highly functional NLP models and interactions."]
        },
        {
            title: "Applied AI Solution Engineer",
            content: "Transforms corporate needs into production-ready AI capabilities by designing, implementing, and optimizing practical ML and LLM solutions – all tailored to real workflows, operations, and scenarios.",
            resultTitle: "Software development results:",
            results: ["Training and fine-tuning multimodal models on client data;", "Integrated and well-maintained ML/LLM components;", "Scalable inference pipelines and precise outputs."]
        },
        {
            title: "AI Image and Video Intelligence Engineer",
            content: "Designs, trains, and integrates AI systems that interpret, analyze, and transform visual data to deliver accurate and production-ready computer vision capabilities.",
            resultTitle: "Development process results:",
            results: ["Detection, segmentation, and vision features;", "Properly integrated vision models and pipelines;", "End-to-end vision model training and fine-tuning using client-specific data."]
        }
    ];

    const profiles = [
        {
            name: "Ethan C.",
            role: "AI Platform and Operation Engineer",
            img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200&h=200",
            summary: "Specializes in designing, automating, and maintaining scalable and custom AI/ML platforms, ensuring reliable model deployment, monitoring, and lifecycle management across enterprise environments.",
            tags: ["Kubernetes", "Kubeflow", "MLflow", "Docker", "+3"]
        },
        {
            name: "Maya L.",
            role: "AI Agent Solution Engineer",
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
            summary: "Builds autonomous and multi-step custom AI agents and orchestrated workflows that automate complex business processes using reasoning, tool-use, and dynamic decision-making.",
            tags: ["LangChain", "CrewAI", "Amazon Bedrock Agents", "+5"]
        },
        {
            name: "Lucas V.",
            role: "Conversational AI Solution Engineer",
            img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200",
            summary: "Designs advanced conversational systems – including chatbots, voicebots, and RAG assistants – delivering natural, context-aware interactions powered by enterprise LLMs.",
            tags: ["ElevenLabs", "RAG frameworks", "Vector databases", "+3"]
        },
        {
            name: "Sophia R.",
            role: "Deep Learning Specialist",
            img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
            summary: "Expert in neural network architectures and deep learning frameworks, focusing on complex pattern recognition and predictive modeling for large-scale data.",
            tags: ["PyTorch", "TensorFlow", "CNNs", "GANs", "+4"]
        },
        {
            name: "Marcus K.",
            role: "MLOps Engineer",
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
            summary: "Bridges the gap between data science and operations by implementing robust CI/CD pipelines for machine learning models and ensuring high availability.",
            tags: ["Docker", "Kubernetes", "DVC", "Airflow", "+5"]
        },
        {
            name: "Elena G.",
            role: "Natural Language Processing Researcher",
            img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
            summary: "Pioneering new techniques in semantic understanding and multilingual translation systems using advanced transformer-based architectures.",
            tags: ["BERT", "GPT-4", "Hugging Face", "Tokenization", "+3"]
        }
    ];

    const technologies = [
        {
            cat: "INFRASTRUCTURE AND DEVOPS",
            items: ["Docker", "Kubernetes", "KitOps", "Terraform", "Cloud platforms (AWS, Azure, GCP)", "CI/CD (GitHub Actions, GitLab CI, Jenkins)"]
        },
        {
            cat: "MLOPS PLATFORMS AND MODEL LIFECYCLE",
            items: ["Kubeflow", "MLflow", "Inference servers (llama.cpp, vLLM)", "Observability (Langfuse, Ragas, AriseAI, Opik)", "Airflow", "n8n"]
        },
        {
            cat: "AI/ML FRAMEWORKS",
            items: ["TensorFlow", "PyTorch", "scikit-learn", "LoRa", "RLHF", "XGBoost/LightGBM"]
        },
        {
            cat: "LLM AND AGENTIC AI ECOSYSTEM",
            items: ["LLM APIs (OpenAI, Claude, Gemini)", "Amazon Bedrock/Sagemaker", "LlamaIndex", "Vector databases", "LangChain", "CrewAI"]
        },
        {
            cat: "DEVELOPMENT",
            items: ["FastAPI", "Node.js (Express/NestJS)", "Django/Django REST Framework", "GraphQL", "gRPC", "Redis"],
            extra: true
        },
        {
            cat: "MULTIMODAL",
            items: ["ElevenLabs", "Whisper (ASR)", "DeepSpeech/Vosk", "FFmpeg", "OpenAI Multimodal (GPT-4o/GPT-5)", "CLIP"],
            extra: true
        },
        {
            cat: "COMPUTER VISION",
            items: ["OpenCV", "Yolo", "CNN", "Vision Transformers", "VisionAgent", "OCR (Paddle, MonkeyOCR, Tesseract)"],
            extra: true
        }
    ];

    const steps = [
        {
            num: "01",
            title: "Specification of your requirements",
            duration: "1 day",
            desc: "A domain expert contacts you to clarify your specific needs and gather all the essential details required to begin selecting the best matching dedicated AI developers."
        },
        {
            num: "02",
            title: "Profiling",
            duration: "2–4 days",
            desc: "Our team identifies and selects the most suitable candidates based on your specific technical requirements and project needs."
        },
        {
            num: "03",
            title: "Candidate selection and CV presentation",
            duration: "2–5 days",
            desc: "We present you with a curated list of top-tier AI engineers, providing detailed CVs and facilitating interviews to ensure a perfect fit."
        },
        {
            num: "04",
            title: "Integration of our AI talent",
            duration: "1–2 weeks",
            desc: "Once selected, our experts are seamlessly onboarded into your team and processes, ready to start delivering value immediately."
        }
    ];



    const faqs = [
        { q: "How fast can I hire an AI engineer?", a: "Typically, we can match and onboard an AI engineer within 2-4 weeks depending on the specific skill set required." },
        { q: "What types of AI projects do you support?", a: "We support everything from NLP and Computer Vision to MLOps and Generative AI implementations." },
        { q: "Can I scale the team up or down?", a: "Yes, our engagement models are flexible, allowing you to scale your team based on project needs." },
        { q: "How do you ensure the quality of talent?", a: "Every engineer goes through a rigorous multi-stage technical assessment and background check." }
    ];

    return (
        <div className="dt-hire-page">
            <Helmet>
                <title>Hire Top AI Engineers | Devopstrio</title>
                <meta name="description" content="Access the world's top 3% of AI and Machine Learning talent. Ready to scale your innovation at enterprise speed." />
            </Helmet>
            {/* Hero Section */}
            <ServiceHero />

            {/* Talent Stats Section */}
            <section className="dt-hire-talent-stats">
                <div className="dt-hire-container">
                    <div className="dt-hire-talent-grid">
                        <div className="dt-hire-talent-heading">
                            <h2>Top AI talent to fill <br />your roles <span className="dt-hire-gradient-text">swiftly</span></h2>
                        </div>
                        <div className="dt-hire-talent-cards">
                            <div className="dt-hire-talent-card">
                                <div className="dt-hire-card-front">
                                    <h3>90+</h3>
                                    <p>top AI engineers</p>
                                </div>
                                <div className="dt-hire-card-back">
                                    <p>Our pool of pre-vetted engineers ensures you get the highest quality talent with minimal lead time and maximum efficiency.</p>
                                </div>
                            </div>
                            <div className="dt-hire-talent-card">
                                <div className="dt-hire-card-front">
                                    <h3>120+</h3>
                                    <p>AI projects completed</p>
                                </div>
                                <div className="dt-hire-card-back">
                                    <p>From NLP to Computer Vision, we've delivered diverse AI solutions across multiple industries with proven success.</p>
                                </div>
                            </div>
                            <div className="dt-hire-talent-card">
                                <div className="dt-hire-card-front">
                                    <h3>2-4</h3>
                                    <p>weeks to start</p>
                                </div>
                                <div className="dt-hire-card-back">
                                    <p>Thanks to our track record, best practices, and managerial techniques, our AI team members are ready to join you quickly.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* AI/ML developers sought after section */}
            <section className="dt-hire-sought-after">
                <div className="dt-hire-container">
                    <h2 className="dt-hire-section-title">AI/ML developers are <span className="dt-hire-gradient-text">sought after</span></h2>
                    <div className="dt-hire-sought-grid">
                        <div className="dt-hire-sought-item">
                            <div className="dt-hire-sought-icon-wrap">
                                <FiActivity className="dt-hire-sought-icon" />
                            </div>
                            <h3>AI is growing fast</h3>
                            <p>AI adoption is surging, and companies that do not adapt quickly risk falling behind in both innovation and performance.</p>
                        </div>
                        <div className="dt-hire-sought-item">
                            <div className="dt-hire-sought-icon-wrap">
                                <FiTrendingUp className="dt-hire-sought-icon" />
                            </div>
                            <h3>AI roles are in high demand</h3>
                            <p>The need for dedicated AI developers continues to grow, and securing top talent has become a critical priority.</p>
                        </div>
                        <div className="dt-hire-sought-item">
                            <div className="dt-hire-sought-icon-wrap">
                                <FiUsers className="dt-hire-sought-icon" />
                            </div>
                            <h3>AI talent is limited</h3>
                            <p>Augmenting teams with third-party AI engineers has become a way to address this challenge.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* Roles Section */}
            {/* Roles Section */}
            <section className="dt-hire-roles-section">
                <div className="dt-hire-container">
                    <div className="dt-hire-roles-header">
                        <h2 className="dt-hire-section-title">Hire AI developers: <span className="dt-hire-gradient-text">available roles</span></h2>
                        <p className="dt-hire-roles-subtext">Devopstrio can become your trusted partner whenever you need to quickly hire AI developers with the right expertise to support your engineering plans and business needs.</p>
                    </div>
                    <div className="dt-hire-roles-grid">
                        <div className="dt-hire-roles-list">
                            {roles.map((role, i) => (
                                <button
                                    key={i}
                                    className={`dt-hire-role-btn ${activeRole === i ? 'active' : ''}`}
                                    onClick={() => setActiveRole(i)}
                                >
                                    {role.title}
                                </button>
                            ))}
                        </div>
                        <div className="dt-hire-role-content">
                            <p className="dt-hire-role-desc">{roles[activeRole].content}</p>

                            <div className="dt-hire-results-box">
                                <h4 className="dt-hire-results-title">{roles[activeRole].resultTitle}</h4>
                                <ul className="dt-hire-results-list">
                                    {roles[activeRole].results.map((result, i) => (
                                        <li key={i}><FiCheckCircle /> {result}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Profiles Section */}
            {/* Profiles Section */}
            <section className="dt-hire-profiles">
                <div className="dt-hire-container">
                    <div className="dt-hire-profiles-header">
                        <h2 className="dt-hire-section-title">AI engineers to hire <span className="dt-hire-gradient-text">for your success</span></h2>
                        <p className="dt-hire-profiles-subtext">Choosing Devopstrio to hire Artificial intelligence Engineers through staff augmentation is a straightforward way to reach your goals in a cost-effective and timely fashion.</p>
                    </div>

                    <div className="dt-hire-profiles-slider">
                        <button className="dt-hire-slider-arrow left" onClick={prevProfile}><FiChevronLeft /></button>
                        <div className="dt-hire-profile-grid-container">
                            <div 
                                className="dt-hire-profile-grid"
                                style={{ transform: `translateX(calc(-${profileIndex} * (100% / 3 + 32px * 2 / 3)))` }}
                            >
                                {profiles.map((profile, i) => (
                                    <div key={i} className="dt-hire-profile-card">
                                        <div className="dt-hire-profile-top">
                                            <img src={profile.img} alt={profile.name} className="dt-hire-profile-img" />
                                            <div className="dt-hire-profile-id">
                                                <h4>{profile.name}</h4>
                                                <span>{profile.role}</span>
                                            </div>
                                        </div>
                                        <div className="dt-hire-profile-summary">
                                            <label>SUMMARY</label>
                                            <p>{profile.summary}</p>
                                        </div>
                                        <div className="dt-hire-profile-tags">
                                            {profile.tags.map((tag, j) => (
                                                <span key={j} className="dt-hire-tag">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="dt-hire-slider-arrow right" onClick={nextProfile}><FiChevronRight /></button>
                    </div>

                    <div className="dt-hire-profiles-banner">
                        <h3>Hire best AI professionals to bring your new vision to life</h3>
                        <a href="#contact" className="dt-hire-btn-accent">Start selecting</a>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="dt-hire-tech-section">
                <div className="dt-hire-container">
                    <div className="dt-hire-tech-header">
                        <h2 className="dt-hire-section-title">AI technologies <span className="dt-hire-gradient-text">our team works with</span></h2>
                        <p className="dt-hire-tech-subtext">The tech stack our AI experts bring to your team will make it possible to engineer complex, self-improving, and effective intelligent systems and integrate AI into your business.</p>
                    </div>

                    <div className="dt-hire-tech-grid">
                        {technologies.map((tech, i) => (
                            (!tech.extra || showAllTech) && (
                                <div key={i} className="dt-hire-tech-cat">
                                    <h4>{tech.cat}</h4>
                                    <ul>
                                        {tech.items.map((item, j) => (
                                            <li key={j}><FiCheckCircle /> {item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )
                        ))}
                    </div>

                    <div className="dt-hire-tech-toggle">
                        <button
                            className="dt-hire-toggle-btn"
                            onClick={() => setShowAllTech(!showAllTech)}
                        >
                            {showAllTech ? (
                                <><FiChevronUp /> Hide all</>
                            ) : (
                                <><FiPlus /> View all</>
                            )}
                        </button>
                    </div>
                </div>
            </section>

            {/* Steps Section */}
            {/* Steps Section */}
            <section className="dt-hire-steps-section">
                <div className="dt-hire-container">
                    <div className="dt-hire-steps-header">
                        <h2 className="dt-hire-section-title">Steps to hire AI engineers from us</h2>
                        <p className="dt-hire-steps-subtext">Devopstrio's AI talent staff augmentation framework is transparent and results-driven: we focus on quickly providing you with top AI/ML developers specialists tailored to your needs. Below is a structured overview of how it works:</p>
                    </div>

                    <div className="dt-hire-steps-accordion">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={`dt-hire-step-item ${activeStep === i ? 'active' : ''}`}
                            >
                                <div
                                    className="dt-hire-step-head"
                                    onClick={() => setActiveStep(activeStep === i ? null : i)}
                                >
                                    <div className="dt-hire-step-info">
                                        <span className="dt-hire-step-num">{step.num}</span>
                                        <h4 className="dt-hire-step-title">{step.title}</h4>
                                        <span className="dt-hire-step-duration">{step.duration}</span>
                                    </div>
                                    <div className="dt-hire-step-icon">
                                        {activeStep === i ? <FiMinus /> : <FiPlus />}
                                    </div>
                                </div>
                                <div className="dt-hire-step-body">
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Expert Section */}
            <AITeam type="hire" onScheduleClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} />

            {/* FAQ Section */}
            <section className="dt-hire-faq">
                <div className="dt-hire-container">
                    <h2 className="dt-hire-section-title">Common <span className="dt-hire-gradient-text">Questions</span></h2>
                    <div className="dt-hire-faq-list">
                        {faqs.map((faq, i) => (
                            <div key={i} className="dt-hire-faq-item" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                                <div className="dt-hire-faq-question">
                                    {faq.q}
                                    {openFaq === i ? <FiMinus color="var(--dt-accent)" /> : <FiPlus />}
                                </div>
                                {openFaq === i && (
                                    <div className="dt-hire-faq-answer">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="contact" className="dt-hire-contact">
                <div className="dt-hire-container">
                    <div className="dt-hire-contact-form-wrap">
                        <AIConsultationForm />
                    </div>
                </div>
            </section>


            <CTA />
        </div>
    );
};

export default HireAi;
