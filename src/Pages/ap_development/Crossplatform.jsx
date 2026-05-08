import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
    FiSmartphone, 
    FiLayers, 
    FiChevronRight, 
    FiArrowRight, 
    FiCheckCircle, 
    FiMonitor, 
    FiShield, 
    FiActivity,
    FiSettings,
    FiSearch
} from 'react-icons/fi';
import '../../Style/ap_development/Crossplatform.css';

//========== Components ==========//
import ServicesHero from '../../components/Hero/Serviceshero';
import Cta from '../../components/Cta/Cta';
import Newsletter from '../../components/Newsletter/Newsletter';
import AIConsultationForm from '../../components/AIConsultationForm/AIConsultationForm';
import { sendEmail } from '../../Services/sendmail';

const RequestServicesModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        requirements: '',
        service: 'Custom cross-platform development',
        nda: false,
        file: null
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const services = [
        "Custom cross-platform development",
        "Cross-platform app development consulting",
        "Cross-platform app migration",
        "Cross-platform app design",
        "Support and Maintenance",
        "Cross-platform app QA"
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await sendEmail({
                fullName: formData.name,
                email: formData.email,
                subject: `Service Request: ${formData.service}`,
                message: `Phone: ${formData.phone}\nRequirements: ${formData.requirements}\nNDA Required: ${formData.nda ? 'Yes' : 'No'}`,
                file: formData.file
            });
            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus(null);
            }, 2000);
        } catch (err) {
            setStatus('error');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="dt-modal-overlay" onClick={onClose}>
            <div className="dt-modal-content dark-theme split-view" onClick={e => e.stopPropagation()}>
                <button className="dt-modal-close" onClick={onClose}>&times;</button>
                
                <div className="dt-modal-grid">
                    <div className="dt-modal-left">
                        <h2 className="dt-modal-title">Request <span className="dt-accent-text">services</span></h2>
                        
                        <div className="dt-service-chips">
                            {services.map(s => (
                                <button 
                                    key={s} 
                                    className={`dt-chip ${formData.service === s ? 'active' : ''}`}
                                    onClick={() => setFormData({...formData, service: s})}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit} className="dt-modal-form">
                            <div className="dt-form-row">
                                <input 
                                    type="text" placeholder="Name" required 
                                    onChange={e => setFormData({...formData, name: e.target.value})}
                                />
                                <input 
                                    type="email" placeholder="Corporate E-mail" required 
                                    onChange={e => setFormData({...formData, email: e.target.value})}
                                />
                            </div>
                            <input 
                                type="tel" placeholder="Phone number" required 
                                onChange={e => setFormData({...formData, phone: e.target.value})}
                            />
                            <textarea 
                                placeholder="Describe your project requirements" required
                                onChange={e => setFormData({...formData, requirements: e.target.value})}
                            ></textarea>

                            <div className="dt-modal-actions">
                                <label className="dt-attach-btn">
                                    <FiArrowRight /> Attach file
                                    <input type="file" style={{display: 'none'}} onChange={e => setFormData({...formData, file: e.target.files[0]})} />
                                </label>
                                {formData.file && <span className="dt-file-name">{formData.file.name}</span>}
                            </div>

                            <label className="dt-nda-label">
                                <input type="checkbox" onChange={e => setFormData({...formData, nda: e.target.checked})} />
                                <span>I want to protect my data by signing an NDA.</span>
                            </label>

                            <button type="submit" className="dt-modal-submit" disabled={loading}>
                                {loading ? 'Sending...' : status === 'success' ? 'Sent!' : 'Get quote'}
                            </button>
                            
                            {status === 'error' && <p className="dt-error">Failed to send. Please try again.</p>}
                        </form>
                    </div>

                    <div className="dt-modal-right">
                        <div className="dt-right-info">
                            <p className="dt-info-text">Reach out to Devopstrio to receive a free consultation and entrust your IT initiative to a company of software experts.</p>
                            
                            <div className="dt-contact-row">
                                <h3>Contact us</h3>
                                <div className="dt-contact-item">
                                    <span className="dt-icon" style={{color: '#ce2453'}}>📞</span>
                                    <span>+44 7471 482903</span>
                                </div>
                                <div className="dt-contact-item">
                                    <span className="dt-icon" style={{color: '#ce2453'}}>✉️</span>
                                    <span>info@devopstrioglobal.com</span>
                                </div>
                            </div>

                            <div className="dt-modal-trust">
                                <h3>Partners who trust us</h3>
                                <div className="dt-trust-logos">
                                    <span>Microsoft</span>
                                    <span>AWS</span>
                                    <span>Google</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Crossplatform = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const formRef = React.useRef(null);
    const [activeStep, setActiveStep] = useState(1);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const [priceData, setPriceData] = useState({
        solution: '',
        stage: '',
        specialist: '',
        duration: '6 months'
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const services = [
        {
            title: "Custom Cross-platform development",
            desc: "Bespoke mobile solutions that run seamlessly on both iOS and Android from a single codebase.",
            icon: <FiSmartphone />
        },
        {
            title: "Cross-platform app modernizing",
            desc: "Upgrade your legacy apps with modern frameworks like Flutter or React Native for better performance.",
            icon: <FiActivity />
        },
        {
            title: "Cross-platform app migration",
            desc: "Smoothly transition your native apps to a unified cross-platform architecture without data loss.",
            icon: <FiLayers />
        },
        {
            title: "Cross-platform app design",
            desc: "Expert UI/UX design that maintains native look and feel while maximizing code reuse.",
            icon: <FiMonitor />
        },
        {
            title: "Support and Maintenance",
            desc: "Continuous monitoring, bug fixes, and feature updates to keep your cross-platform apps running.",
            icon: <FiSettings />
        },
        {
            title: "Cross-platform app QA",
            desc: "Rigorous testing across multiple devices and OS versions to ensure flawless user experience.",
            icon: <FiShield />
        }
    ];

    const expertiseAreas = [
        {
            title: "Finance Software",
            category: "FINTECH",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
            bullets: ["Banking apps", "Trading platforms", "Wallet solutions"]
        },
        {
            title: "Healthcare Solutions",
            category: "HEALTHCARE",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
            bullets: ["Patient portals", "Telemedicine apps", "EHR integrations"]
        },
        {
            title: "E-commerce Platforms",
            category: "RETAIL",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
            bullets: ["Shopping apps", "Inventory management", "Payment gateways"]
        }
    ];

    return (
        <div className="dt-cross-page">
            <Helmet>
                <title>Cross-Platform App Development Services | Devopstrio</title>
                <meta name="description" content="Premium cross-platform mobile app development services. Build high-performance iOS and Android apps with a single codebase." />
            </Helmet>

            {/* Hero Section */}
            <ServicesHero />
           

            {/* Metrics Showcase Section */}
            <section className="dt-cross-metrics">
                <div className="dt-cross-container">
                    <div className="dt-metrics-layout">
                        <div className="dt-metrics-text">
                            <h2>High-quality cross-platform <span className="dt-accent-text">mobile app development</span> services</h2>
                        </div>
                        <div className="dt-metrics-grid">
                            <div className="dt-metric-card">
                                <span className="dt-metric-num">100+</span>
                                <span className="dt-metric-label">Cross-Platform developers</span>
                            </div>
                            <div className="dt-metric-card">
                                <span className="dt-metric-num">80+</span>
                                <span className="dt-metric-label">cross-platform projects</span>
                            </div>
                            <div className="dt-metric-card">
                                <span className="dt-metric-num">4.9/5</span>
                                <span className="dt-metric-label">rating on Clutch</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Questionnaire Section */}
            {/* Scope Section */}
            <section className="dt-cross-scope">
                <div className="dt-cross-container">
                    <h2 className="dt-scope-main-title">Cross-platform development scope</h2>
                    
                    <div className="dt-scope-wrapper">
                        <div className="dt-scope-layout">
                            <div className="dt-scope-info-box">
                                <h3>Professional cross-platform development</h3>
                                <p>Devopstrio's knowledgeable and experienced IT experts possess all the necessary hands-on skills to carry out your cross-platform application development initiatives in:</p>
                                
                                <ul className="dt-scope-list">
                                    <li><span>✓</span> mCommerce app development;</li>
                                    <li><span>✓</span> Wearables and IoT development;</li>
                                    <li><span>✓</span> Logistics app development;</li>
                                    <li><span>✓</span> Consumer app development;</li>
                                    <li><span>✓</span> Industrial app development, and more.</li>
                                </ul>

                                <button onClick={() => setIsModalOpen(true)} className="dt-scope-cta">Request services</button>
                            </div>

                            <div className="dt-scope-tech-grid">
                                {[
                                    { name: 'Flutter', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
                                    { name: 'Dart', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
                                    { name: 'Xamarin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xamarin/xamarin-original.svg' },
                                    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
                                    { name: 'Ionic', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg' },
                                    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                                    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                                    { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
                                    { name: 'Go', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' }
                                ].map((tech, i) => (
                                    <div key={i} className="dt-scope-tech-card">
                                        <div className="dt-scope-icon-wrap">
                                            <img src={tech.icon} alt={tech.name} />
                                        </div>
                                        <span>{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="dt-cross-services-grid">
                <div className="dt-cross-container">
                    <h2 className="dt-services-main-title">Cross-platform development services</h2>
                    
                    <div className="dt-services-3x2-grid">
                        {[
                            { 
                                title: "Custom cross-platform development", 
                                hoverText: "Contact us to develop a cross-platform app for any purpose and within any industry." 
                            },
                            { 
                                title: "Cross-platform app development consulting",
                            hoverText:"Devopstrio will serve as a source of expertise and professional advice for your cross-platform mobile application development." 
                            },
                            { 
                                title: "Cross-platform app migration",
                            hoverText:"Devopstrio is the safe way to convert your app to cross-platform with minimum difficulties." 
                            },
                            { 
                                title: "Cross-platform app design",
                            hoverText:"Cross-platform app development can be problematic when it comes to design. Devopstrio experts will address this challenge." 
                            },
                            { 
                                title: "Support and Maintenance",
                            hoverText:"Devopstrio's cross-platform support engineers ensure your app stays universally functional and has the highest possible uptime." 
                            },
                            { 
                                title: "Cross-platform app QA",
                            hoverText:"Reach out to our cross-platform app testing experts to promptly identify any potential bugs." 
                            }
                        ].map((service, i) => (
                            <div key={i} className="dt-service-box-card">
                                <div className="dt-service-box-content">
                                    <h3 className="dt-service-box-title">{service.title}</h3>
                                    {service.hoverText && (
                                        <div className="dt-service-box-hover">
                                            <p>{service.hoverText}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="dt-services-cta-banner">
                        <p>Select professional IT services for your software development project.</p>
                        <button onClick={() => setIsModalOpen(true)} className="dt-banner-cta">Request services</button>
                    </div>
                </div>
            </section>
            <div ref={formRef} className="dt-cross-container">
                <AIConsultationForm 
                    title="Let's build your <span className='dt-accent-text'>Cross-platform</span> Strategy"
                    description="Our experts are ready to analyze your requirements and propose the best mobile solution for your business."
                />
            </div>
            <Cta/>
            <RequestServicesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default Crossplatform;
