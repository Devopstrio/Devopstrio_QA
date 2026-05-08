import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiCheckCircle, FiArrowRight, FiSettings, FiLayout, FiZap, FiShield, FiUsers, FiTrendingUp, FiChevronDown, FiPlus, FiMinus, FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import ServicesHero from '../../components/Hero/Serviceshero';
import AITeam from '../../components/AITeam/AITeam';
import Cta from '../../components/Cta/Cta';
import AIConsultationForm from '../../components/AIConsultationForm/AIConsultationForm';
import { sendEmail } from '../../Services/sendmail';
import '../../Style/ap_development/CMSdevelopment.css';

const CMSdevelopment = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeFaq, setActiveFaq] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const [activeStory, setActiveStory] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const benefits = [
        { title: "Rapid Deployment", desc: "Launch your platform faster with pre-built modules and intuitive content management workflows." },
        { title: "SEO Advantage", desc: "Built-in SEO tools and clean code structures to ensure your content ranks high on search engines." },
        { title: "Cost Efficiency", desc: "Reduce development costs by leveraging robust open-source or enterprise CMS foundations." },
        { title: "Scalable Growth", desc: "Effortlessly handle traffic spikes and expand features as your business requirements evolve." }
    ];

    const packages = [
        { name: "Starter CMS", price: "$4k+", features: ["Template Design", "Standard Modules", "Basic SEO", "Mobile Responsive", "1 Month Support"] },
        { name: "Advanced CMS", price: "$10k+", features: ["Custom UI/UX", "API Integrations", "Advanced Security", "High Performance", "3 Months Support"] },
        { name: "Enterprise CMS", price: "Custom", features: ["Full-scale Platform", "Omnichannel Delivery", "Legacy Migration", "24/7 Support", "SLA Guarantee"] }
    ];

    const steps = [
        { id: "01", title: "Business Analysis", desc: "We analyze your content needs, user personas, and business goals to define the right CMS strategy." },
        { id: "02", title: "Architecture & Design", desc: "Developing a robust information architecture and a user-centric design that reflects your brand." },
        { id: "03", title: "Development & Integration", desc: "Building custom modules and integrating third-party services for a seamless operational ecosystem." },
        { id: "04", title: "QA & Deployment", desc: "Rigorous testing across all devices followed by a smooth launch and team training." }
    ];

    const faqs = [
        { q: "Which CMS platform is best for my business?", a: "The choice depends on your needs. WordPress is great for content-heavy sites, Shopify for E-commerce, and Headless CMS like Contentful for omnichannel experiences." },
        { q: "Can you migrate my existing site to a new CMS?", a: "Yes, we specialize in safe content and data migration while preserving your SEO rankings and site structure." },
        { q: "Do you provide training for my team?", a: "Absolutely. We provide comprehensive workshops and documentation to ensure your team can manage content with confidence." }
    ];

    return (
        <div className="dt-cms-page-wrapper">
            <ServicesHero 
                title="CMS-based Website <span className='dt-cms-accent-text'>Development Services</span>"
                description="Empower your team with a high-performance CMS. We build secure, scalable, and intuitive platforms using WordPress, Drupal, and Headless architectures."
            />

            <section className="dt-cms-trust-bar">
                <div className="dt-cms-container">
                    <div className="dt-cms-trust-content">
                        <div className="dt-cms-trust-left">
                            <p>As a leading software company, we help your business thrive online with enterprise-grade CMS solutions.</p>
                        </div>
                        <div className="dt-cms-trust-right">
                            <span className="dt-clutch-badge">Clutch 4.9 ★★★★★</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dt-cms-benefits">
                <div className="dt-cms-container">
                    <h2 className="dt-cms-section-title">Benefits of <span className="dt-cms-accent-text">CMS-based development</span></h2>
                    <div className="dt-cms-benefits-grid">
                        {benefits.map((b, i) => (
                            <div key={i} className="dt-cms-benefit-card">
                                <h3>{b.title}</h3>
                                <p>{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="dt-cms-solutions-section">
                <div className="dt-cms-container">
                    <h2 className="dt-cms-section-title text-center">CMS Development <span className="dt-cms-accent-text">Expertise</span></h2>
                    <div className="dt-cms-solutions-grid">
                        {[
                            {
                                title: "Custom Theme Development",
                                desc: "We build bespoke, high-performance themes from the ground up, ensuring your digital identity is unique and optimized for speed.",
                                features: ["Pixel-perfect UI/UX", "Mobile-first approach", "Lightweight code", "Brand-aligned design"]
                            },
                            {
                                title: "CMS Integration & Migration",
                                desc: "Seamlessly transition your legacy data to modern platforms or integrate your CMS with enterprise CRM and ERP systems.",
                                features: ["Data integrity audits", "Third-party API hooks", "Zero-downtime migration", "Secure data mapping"]
                            },
                            {
                                title: "Headless CMS Solutions",
                                desc: "Future-proof your content with decoupled architectures that deliver content across web, mobile, and IoT devices simultaneously.",
                                features: ["React/Next.js frontend", "API-first delivery", "Omnichannel scaling", "Enhanced security"]
                            }
                        ].map((solution, i) => (
                            <div key={i} className="dt-cms-solution-card">
                                <h3>{solution.title}</h3>
                                <p>{solution.desc}</p>
                                <ul className="dt-solution-features">
                                    {solution.features.map((f, idx) => <li key={idx}><FiCheckCircle /> {f}</li>)}
                                </ul>
                                <button onClick={() => navigate('/contact')} className="dt-solution-cta">Consult our experts</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="dt-cms-partner">
                <div className="dt-cms-container">
                    <h2 className="dt-cms-section-title">Why partner with <span className="dt-cms-accent-text">Devopstrio?</span></h2>
                    <div className="dt-cms-partner-grid">
                        {[
                            { title: "200+ Experts", desc: "Access a global talent pool of certified CMS developers and UI/UX designers." },
                            { title: "15+ Years Exp", desc: "Over a decade of experience delivering complex web platforms across industries." },
                            { title: "Agile Delivery", desc: "Transparent development process with bi-weekly updates and continuous feedback." },
                            { title: "Security First", desc: "Rigorous security audits and hardening to protect your data and user privacy." },
                            { title: "Global Reach", desc: "Helping businesses scale across regions with multilingual and multi-region support." },
                            { title: "24/7 Support", desc: "Post-launch maintenance and support to ensure your platform runs flawlessly." }
                        ].map((p, i) => (
                            <div key={i} className="dt-cms-partner-item">
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                            </div>
                        ))}
                    </div>
                    <div className="dt-cms-partner-banner">
                        <p>Unlock the full potential of your content strategy with our experts.</p>
                        <button onClick={() => setIsModalOpen(true)} className="dt-cms-banner-cta">Request services</button>
                    </div>
                </div>
            </section>

            <section className="dt-cms-steps">
                <div className="dt-cms-container">
                    <h2 className="dt-cms-section-title">Enterprise CMS <br/><span className="dt-cms-accent-text">implementation steps</span></h2>
                    <div className="dt-cms-steps-layout">
                        <div className="dt-cms-steps-left">
                            <div className="dt-cms-visual">
                                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="CMS Architecture" />
                            </div>
                        </div>
                        <div className="dt-cms-steps-right">
                            <div className="dt-cms-accordion">
                                {[
                                    { id: "01", title: "Setup and security implementation", desc: "We initialize your CMS environment with enterprise-grade security protocols, ensuring a robust foundation for your digital operations." },
                                    { id: "02", title: "Custom design and UX development", desc: "Our design studio creates tailored, user-centric interfaces that align with your brand identity and optimize for conversion." },
                                    { id: "03", title: "Integration with third-party systems", desc: "Seamlessly connecting your CMS with CRM, ERP, and marketing automation tools for a unified data ecosystem." },
                                    { id: "04", title: "Training and ongoing support", desc: "Finally, we provide comprehensive training and ongoing support to ensure your team members are in the right position to maximize the full potential of the resulting CMS." }
                                ].map((step, i) => (
                                    <div 
                                        key={i} 
                                        className={`dt-cms-accordion-item ${activeStep === i ? 'active' : ''}`}
                                        onClick={() => setActiveStep(i)}
                                    >
                                        <div className="dt-accordion-header">
                                            <span className="dt-step-idx">{step.id}</span>
                                            <h3>{step.title}</h3>
                                            <span className="dt-accordion-icon">{activeStep === i ? <FiMinus /> : <FiPlus />}</span>
                                        </div>
                                        <div className="dt-accordion-content">
                                            <p>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    <div className="dt-cms-value-section">
                        <h1 className="dt-cms-section-title-value">Value of CMS-based <span className="dt-cms-accent-text">development for enterprises</span></h1>
                        <div className="dt-cms-value-grid">
                            {[
                                {
                                    title: "Scalability and flexibility",
                                    desc: "Modern CMS platforms guarantee scalable solutions. Their modular structures make it possible to add new features, integrate additional systems, or adapt to market changes easily."
                                },
                                {
                                    title: "Resource savings",
                                    desc: "Leveraging existing CMS frameworks greatly accelerates development timelines and reduces costs, compared to engineering website content management solutions from scratch."
                                },
                                {
                                    title: "Enhanced collaboration",
                                    desc: "When choosing a CMS from well-known systems, you can be sure it offers everything needed to streamline workflows, backed by an extensive track record and a large user base."
                                }
                            ].map((item, i) => (
                                <div key={i} className="dt-cms-value-item">
                                    <div className="dt-cms-value-icon">
                                        <FiCheckCircle />
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
            
                </div>
            </section>

            {/* Ai Team */}
            <AITeam />

            <section className="dt-cms-testimonials">
                <div className="dt-cms-container">
                    <div className="dt-testimonial-header">
                        <span className="dt-testimonial-badge">CLIENT SUCCESS STORIES</span>
                        <h2 className="dt-cms-section-title">What Our <span className="dt-cms-accent-text">Clients Say</span></h2>
                        <p className="dt-testimonial-intro">Real stories from businesses who transformed their digital presence with our enterprise-grade CMS solutions.</p>
                    </div>
                    
                    <div className="dt-testimonial-slider">
                        {[
                            {
                                name: "Sarah Thompson",
                                role: "Product Director",
                                time: "3 months ago",
                                quote: "Devopstrio transformed our content workflow. Their headless CMS implementation helped us build a clear strategy and today we finally feel in control of our global digital assets.",
                                rating: 5,
                                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                            },
                            {
                                name: "Michael Ross",
                                role: "CTO, Retail Group",
                                time: "1 month ago",
                                quote: "The scalability of the CMS platform provided by Devopstrio is unmatched. We migrated from legacy systems to a modern architecture without losing any data integrity.",
                                rating: 5,
                                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
                            }
                        ].map((story, i) => (
                            <div key={i} className={`dt-testimonial-item ${activeStory === i ? 'active' : ''}`}>
                                <div className="dt-testimonial-visual">
                                    <img src={story.image} alt={story.name} />
                                </div>
                                <div className="dt-testimonial-content">
                                    <div className="dt-testimonial-rating">
                                        {[...Array(story.rating)].map((_, idx) => <FiStar key={idx} className="dt-star-active" />)}
                                    </div>
                                    <p className="dt-testimonial-quote">"{story.quote}"</p>
                                    <div className="dt-testimonial-author">
                                        <h4>{story.name}</h4>
                                        <span>{story.time}</span>
                                    </div>
                                    <div className="dt-testimonial-footer">
                                        <div className="dt-testimonial-nav">
                                            <button onClick={() => setActiveStory(i === 0 ? 1 : 0)} className="dt-nav-arrow"><FiChevronLeft /></button>
                                            <button onClick={() => setActiveStory(i === 1 ? 0 : 1)} className="dt-nav-arrow"><FiChevronRight /></button>
                                        </div>
                                        <div className="dt-testimonial-dots">
                                            {[0, 1].map((dot) => (
                                                <span key={dot} className={`dt-dot ${activeStory === dot ? 'active' : ''}`} onClick={() => setActiveStory(dot)}></span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="dt-cms-faq">
                <div className="dt-cms-container">
                    <h2 className="dt-cms-section-title">Frequently Asked <span className="dt-cms-accent-text">Questions</span></h2>
                    <div className="dt-cms-faq-list">
                        {faqs.map((f, i) => (
                            <div key={i} className={`dt-cms-faq-item ${activeFaq === i ? 'active' : ''}`} onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                                <div className="dt-faq-q">
                                    <h3>{f.q}</h3>
                                    {activeFaq === i ? <FiMinus /> : <FiPlus />}
                                </div>
                                <div className="dt-faq-a">
                                    <p>{f.a}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <div className="dt-cms-container">
                <AIConsultationForm 
                    title="Let's build your <span className='dt-cms-accent-text'>CMS</span> strategy"
                    description="Our experts are ready to analyze your requirements and propose the best CMS solution for your business."
                />
            </div>

            <Cta />
        </div>
    );
};

export default CMSdevelopment;
