import React from 'react';
import './TrustedSection.css';

const TrustedSection = ({ title, items }) => {
    // Default items if none provided
    const defaultItems = [
        {
            title: "Logistics-led engineering approach",
            desc: "We deliver services grounded in domain expertise, aligning solutions with real-world logistics processes and transportation operations. This ensures faster delivery, operational efficiency, and tailored systems."
        },
        {
            title: "End-to-end system integration",
            desc: "Devopstrio delivers logistics software development services that ensure seamless system integration across ERP, CRM, and third-party platforms. This enables consistent logistics data flows."
        },
        {
            title: "Custom, scalable architecture",
            desc: "Our team builds custom software designed for both scalability and flexibility. Our architectures support evolving requirements, growing logistics systems, and long-term performance stability."
        },
        {
            title: "Flexible engagement models",
            desc: "We provide logistics software development services with adaptable engagement models tailored to project scope and priorities. This approach supports efficient resource allocation and transparency."
        },
        {
            title: "Cross-domain innovation",
            desc: "Devopstrio delivers bespoke logistics software by combining expertise across versatile industries and technologies. This provides for advanced data analytics, smart automation, and innovation."
        },
        {
            title: "Secure, compliant logistics solutions",
            desc: "We ensure all logistics solutions comply with global security standards and industry-specific regulations, protecting sensitive supply chain data and maintaining high operational integrity."
        }
    ];

    const displayItems = items || defaultItems;

    return (
        <section className="dt-trusted-section">
            <div className="dt-trusted-container">
                <h2 className="dt-trusted-h2">{title || "Why Devopstrio is a trusted partner"}</h2>
                <div className="dt-trusted-grid">
                    {displayItems.map((item, idx) => (
                        <div key={idx} className="dt-trusted-card">
                            <div className="dt-trusted-card-inner">
                                <div className="dt-trusted-front">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="dt-trusted-back">
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustedSection;
