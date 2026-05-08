import React, { useState, useEffect } from 'react';
import { FiArrowRight, FiCheckCircle, FiSmartphone, FiGlobe, FiZap, FiLayout, FiActivity, FiShield } from 'react-icons/fi';
import ServicesHero from '../../components/Hero/Serviceshero';
import Cta from '../../components/Cta/Cta';
import AIConsultationForm from '../../components/AIConsultationForm/AIConsultationForm';
import { sendEmail } from '../../Services/sendmail';
import '../../Style/ap_development/PWAdevelopment.css';

const RequestServicesModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        service: 'PWA Development',
        name: '',
        email: '',
        phone: '',
        requirements: '',
        nda: false,
        file: null
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const services = [
        'PWA Development',
        'PWA Migration',
        'PWA Consulting',
        'PWA Design',
        'Service Worker Setup',
        'Push Notifications'
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await sendEmail({
                fullName: formData.name,
                email: formData.email,
                subject: `PWA Service Request: ${formData.service}`,
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
        <div className="dt-pwa-modal-overlay" onClick={onClose}>
            <div className="dt-pwa-modal-content dark-theme split-view" onClick={e => e.stopPropagation()}>
                <button className="dt-pwa-modal-close" onClick={onClose}>&times;</button>
                
                <div className="dt-pwa-modal-grid">
                    <div className="dt-pwa-modal-left">
                        <h2 className="dt-pwa-modal-title">Request <span className="dt-pwa-accent-text">PWA services</span></h2>
                        
                        <div className="dt-pwa-service-chips">
                            {services.map(s => (
                                <button 
                                    key={s} 
                                    className={`dt-pwa-chip ${formData.service === s ? 'active' : ''}`}
                                    onClick={() => setFormData({...formData, service: s})}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>

                        <form onSubmit={handleSubmit} className="dt-pwa-modal-form">
                            <div className="dt-pwa-form-row">
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
                                placeholder="Describe your PWA requirements" required
                                onChange={e => setFormData({...formData, requirements: e.target.value})}
                            ></textarea>

                            <div className="dt-pwa-modal-actions">
                                <label className="dt-pwa-attach-btn">
                                    <FiArrowRight /> Attach file
                                    <input type="file" style={{display: 'none'}} onChange={e => setFormData({...formData, file: e.target.files[0]})} />
                                </label>
                                {formData.file && <span className="dt-pwa-file-name">{formData.file.name}</span>}
                            </div>

                            <label className="dt-pwa-nda-label">
                                <input type="checkbox" onChange={e => setFormData({...formData, nda: e.target.checked})} />
                                <span>I want to protect my data by signing an NDA.</span>
                            </label>

                            <button type="submit" className="dt-pwa-modal-submit" disabled={loading}>
                                {loading ? 'Sending...' : status === 'success' ? 'Sent!' : 'Get quote'}
                            </button>
                            
                            {status === 'error' && <p className="dt-pwa-error">Failed to send. Please try again.</p>}
                        </form>
                    </div>

                    <div className="dt-pwa-modal-right">
                        <div className="dt-pwa-right-info">
                            <p className="dt-pwa-info-text">Transform your web presence with Progressive Web Apps that deliver app-like experiences with zero installation barriers.</p>
                            
                            <div className="dt-pwa-contact-row">
                                <h3>Expert Consultation</h3>
                                <div className="dt-pwa-contact-item">
                                    <span className="dt-pwa-icon">📞</span>
                                    <span>+44 7471 482903</span>
                                </div>
                                <div className="dt-pwa-contact-item">
                                    <span className="dt-pwa-icon">✉️</span>
                                    <span>info@devopstrioglobal.com</span>
                                </div>
                            </div>

                            <div className="dt-pwa-modal-trust">
                                <h3>Global Enterprise Trust</h3>
                                <div className="dt-pwa-trust-logos">
                                    <span>SAMSUNG</span>
                                    <span>TUI</span>
                                    <span>Verivox</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const PWAdevelopment = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const servicesGrid = [
        {
            title: "App-Like Experience",
            desc: "Deliver full-screen, immersive experiences that feel native while remaining accessible via URL.",
            icon: <FiSmartphone />,
            points: ["Installable", "Homescreen Icon", "Offline Ready"]
        },
        {
            title: "Performance Optimization",
            desc: "Leverage advanced caching and service workers for instantaneous load times even on slow networks.",
            icon: <FiZap />,
            points: ["Fast Loading", "Reduced Data", "Smooth Motion"]
        },
        {
            title: "User Engagement",
            desc: "Re-engage users effectively with system-level push notifications and background synchronization.",
            icon: <FiActivity />,
            points: ["Push Notifications", "Background Sync", "Offline Access"]
        },
        {
            title: "Cross-Browser Reach",
            desc: "One codebase that runs everywhere, from Chrome and Safari to mobile and desktop environments.",
            icon: <FiGlobe />,
            points: ["Responsive UI", "One Codebase", "SEO Friendly"]
        },
        {
            title: "Enterprise Security",
            desc: "Ensure data integrity and user safety with HTTPS-only requirements and secure service workers.",
            icon: <FiShield />,
            points: ["HTTPS Secure", "Data Privacy", "Reliable Content"]
        },
        {
            title: "PWA Transformation",
            desc: "Seamlessly convert your existing web portals or native apps into high-performing PWAs.",
            icon: <FiLayout />,
            points: ["Legacy Migration", "Modern Design", "Rapid Deployment"]
        }
    ];

    return (
        <div className="dt-pwa-page-wrapper">
            <ServicesHero />

            <section className="dt-pwa-metrics">
                <div className="dt-pwa-container">
                    <div className="dt-pwa-metrics-layout">
                        <div className="dt-pwa-metrics-info">
                            <h2>Tackle limitations of mobile and native apps with <span className="dt-pwa-accent-text">Progressive Web Apps</span></h2>
                        </div>
                        <div className="dt-pwa-metrics-grid">
                            <div className="dt-pwa-metric-card">
                                <div className="dt-pwa-card-number">450+</div>
                                <div className="dt-pwa-card-label">Web and PWA developers</div>
                            </div>
                            <div className="dt-pwa-metric-card">
                                <div className="dt-pwa-card-number">550+</div>
                                <div className="dt-pwa-card-label">Successful projects</div>
                            </div>
                            <div className="dt-pwa-metric-card">
                                <div className="dt-pwa-card-number">4.9/5</div>
                                <div className="dt-pwa-card-label">Clutch rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dt-pwa-services-section">
                <div className="dt-pwa-container">
                    <h2 className="dt-pwa-section-title">Our Progressive Web App <span className="dt-pwa-accent-text">Development Services</span></h2>
                    
                    <div className="dt-pwa-services-layout">
                        {[
                            {
                                title: "PWA Development",
                                desc: "Providing end-to-end PWA App Development Services, including HTML, CSS, and JS, from initial concepts and design to the final deployment and ongoing maintenance."
                            },
                            {
                                title: "PWA UX/UI Design",
                                desc: "Devopstrio ensures that PWAs provide a seamless and intuitive UX. This includes designing the interface, wireframing and prototyping, and conducting user testing."
                            },
                            {
                                title: "QA Testing",
                                desc: "Providing Manual and Automated Testing to ensure that a Progressive App is bug-free and operates seamlessly across a range of devices and platforms."
                            },
                            {
                                title: "Integration with Existing Systems",
                                desc: "Devopstrio's experts provide Integration Services to ensure that Progressive Apps are seamlessly integrated with the customer's existing systems and workflows."
                            },
                            {
                                title: "PWA Migration",
                                desc: "With our Progressive Web App Development Services, customers safely migrate from existing apps to PWAs. This includes analysis, migration plans, and the transition."
                            },
                            {
                                title: "PWA Consulting",
                                desc: "If you are contemplating ordering an advanced Progressive Web App but don't know where to begin or what to do first, contact our web experts."
                            }
                        ].map((service, i) => (
                            <div key={i} className="dt-pwa-service-reveal-card">
                                <div className="dt-pwa-reveal-front">
                                    <h3>{service.title}</h3>
                                </div>
                                <div className="dt-pwa-reveal-back">
                                    <p>{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="dt-pwa-services-cta-banner">
                        <p>Select professional web developers for your software development project.</p>
                        <button onClick={() => setIsModalOpen(true)} className="dt-pwa-banner-cta">Request services</button>
                    </div>
                </div>
            </section>

            <section className="dt-pwa-reasons-section">
                <div className="dt-pwa-container">
                    <h2 className="dt-pwa-section-title">Reasons to choose Devopstrio for <span className="dt-pwa-accent-text">PWA development</span></h2>
                    <p className="dt-pwa-section-desc">As a dependable and modern PWA development company, we offer the following advantages.</p>
                    
                    <div className="dt-pwa-reasons-grid">
                        {[
                            {
                                title: "Diversified experience",
                                desc: "Devopstrio successfully works with data-intensive and client-focused sectors like FinTech, eCommerce, Healthcare, and more. We know what such businesses want and what challenges they face."
                            },
                            {
                                title: "Multi-module approach",
                                desc: "Depending on your actual needs and tech requirements, you can choose between such collaboration models as simple Staff Augmentation, Dedicated Team, and Managed Delivery."
                            },
                            {
                                title: "Customer-centered policy",
                                desc: "Devopstrio views each project as a full-fledged business partnership, paying attention to every detail and making all efforts to achieve our shared goals. As a result, we take pride in our high customer satisfaction rate."
                            },
                            {
                                title: "Strategic focus",
                                desc: "Devopstrio values the confidence our customers place in us, and we are always ready to support them once the project is completed. That is the reason why so many of our customers are referring and returning ones."
                            },
                            {
                                title: "Tech mastery",
                                desc: "Our progressive web app development company is adept with tools like JavaScript, Angular, React, and Vue, which are increasingly popular due to their ability to create a dynamic and data-driven UI, as well as a fast and seamless UX."
                            },
                            {
                                title: "UI/UX design excellence",
                                desc: "Since responsiveness and adaptability are the main reasons why companies build PWAs, a special focus on design is needed. Devopstrio's UI/UX Design Studio will ensure this."
                            }
                        ].map((reason, i) => (
                            <div key={i} className="dt-pwa-reason-item">
                                <h3>{reason.title}</h3>
                                <p>{reason.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="dt-pwa-container">
                <AIConsultationForm 
                    title="Let's build your <span className='dt-pwa-accent-text'>PWA</span> Strategy"
                    description="Our experts are ready to analyze your requirements and propose the best progressive solution for your business."
                />
            </div>
            <Cta/>
            <RequestServicesModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default PWAdevelopment;
