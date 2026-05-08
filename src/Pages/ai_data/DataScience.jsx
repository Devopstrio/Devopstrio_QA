import React, { useEffect } from 'react';
import {
    FiArrowRight, FiCheckCircle, FiTrendingUp, FiPieChart,
    FiTarget, FiLayers, FiZap, FiShield, FiActivity, FiGlobe
} from 'react-icons/fi';

import { 
    SiPython, SiTensorflow, SiPytorch, SiApachespark, SiKubernetes, 
    SiDatabricks, SiGooglecloud, SiSnowflake, SiScikitlearn 
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';
import '../../Style/ai_data/DataScience.css';


// CONSULTATION
import AIConsultationForm from '../../components/AIConsultationForm/AIConsultationForm';
// CTA
import CTA from '../../components/cta/Cta';
import Servicehero from '../../components/Hero/Serviceshero';

// Assets
import dsHeroImg from "../../assets/images/thangalakshmi_dev.png";
import DAN_01 from "../../assets/images/DAN_01.png";

import analyticsImg from "../../assets/images/datascience/analytics.png";
import mlImg from "../../assets/images/datascience/ml.png";
import bigDataImg from "../../assets/images/datascience/bigdata.png";
import fintechImg from "../../assets/images/datascience/fintech.jpg";
import healthtechImg from "../../assets/images/datascience/healthtech.png";
import ecommerceImg from "../../assets/images/datascience/ecommerce.png";

const DataScience = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const dsServices = [
        {
            title: "Predictive Analytics",
            desc: "Anticipate market shifts and customer behavior with high-precision forecasting models.",
            icon: <FiTrendingUp />,
            image: analyticsImg
        },
        {
            title: "Machine Learning",
            desc: "Deploy custom ML algorithms that evolve with your data to automate complex decision-making.",
            icon: <FiZap />,
            image: mlImg
        },
        {
            title: "Big Data Solutions",
            desc: "Architect scalable data lakes and warehouses to process petabytes of information in real-time.",
            icon: <FiLayers />,
            image: bigDataImg
        }
    ];

    const techStack = [
        { name: "Python", icon: <SiPython />, cat: "Languages" },
        { name: "TensorFlow", icon: <SiTensorflow />, cat: "Deep Learning" },
        { name: "PyTorch", icon: <SiPytorch />, cat: "Neural Networks" },
        { name: "Apache Spark", icon: <SiApachespark />, cat: "Big Data" },
        { name: "Kubernetes", icon: <SiKubernetes />, cat: "Orchestration" },
        { name: "Databricks", icon: <SiDatabricks />, cat: "Data Lakehouse" },
        { name: "AWS Sagemaker", icon: <FaAws />, cat: "Cloud ML" },
        { name: "Vertex AI", icon: <SiGooglecloud />, cat: "Google AI" },
        { name: "Snowflake", icon: <SiSnowflake />, cat: "Data Warehouse" },
        { name: "Scikit-learn", icon: <SiScikitlearn />, cat: "Statistical ML" }
    ];

    return (
        <div className="dt-datascience-page">
            <Servicehero/>
            {/* Intro Stats Section */}
            <section className="dt-ds-intro-stats">
                <div className="dt-container">
                    <div className="dt-ds-trust-header">
                        <div className="dt-ds-trust-text">
                            <h2>We are passionate about <br /><span className="dt-gradient-text">transforming complex data</span> into <br />strategic intelligence.</h2>
                            <p className="dt-ds-trust-desc">
                                Our team is dedicated to revolutionizing the way enterprises leverage their data assets.
                                We provide intuitive and innovative solutions that empower our clients to achieve measurable success
                                in an increasingly data-driven world.
                            </p>
                        </div>
                        <div className="dt-ds-trust-badge">
                            <div className="dt-trust-pill">
                                <span className="dt-stars">★★★★★</span>
                                <span className="dt-rating-val">4.9/5 from</span>
                                <span className="dt-clutch-text">Clutch</span>
                            </div>
                        </div>
                    </div>

                    <div className="dt-ds-metrics-row">
                        <div className="dt-ds-metric-item">
                            <h3>98%</h3>
                            <p>Customer satisfaction rate, reflecting our dedication</p>
                        </div>
                        <div className="dt-ds-metric-item">
                            <h3>10+</h3>
                            <p>Years of innovation and insight to our clients' journeys</p>
                        </div>
                        <div className="dt-ds-metric-item">
                            <h3>$150M+</h3>
                            <p>Direct value generated through our predictive models</p>
                        </div>
                        <div className="dt-ds-metric-item">
                            <h3>50+</h3>
                            <p>Global enterprise partners trusting our solutions</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="dt-container" id="services">
                {/* Services Section */}
                <section className="dt-section-ds-spacing">
                    <div className="dt-features-header">
                        <h2 className="dt-section-ds-title">Core features that set us <br /><span className="dt-gradient-text">apart from the competition</span></h2>
                        <p className="dt-features-subtitle">Explore our standout features designed to deliver exceptional performance and value, distinguishing us from the competition.</p>
                    </div>
                    <div className="dt-ds-features-layout">
                        {/* Left Column */}
                        <div className="dt-ds-features-col">
                            <div className="dt-ds-feature-card">
                                <div className="dt-ds-feature-icon"><FiPieChart /></div>
                                <h3>Real-time Analytics</h3>
                                <p>Gain actionable insights with our real-time analytics feature for instant decision making.</p>
                            </div>
                            <div className="dt-ds-feature-card">
                                <div className="dt-ds-feature-icon"><FiTrendingUp /></div>
                                <h3>Predictive Modeling</h3>
                                <p>Forecast future trends and outcomes with high-precision statistical modeling and machine learning.</p>
                            </div>
                        </div>

                        {/* Center Image */}
                        <div className="dt-ds-features-center">
                            <div className="dt-features-img-wrapper">
                                <img src={DAN_01} alt="Data Science Features" />
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="dt-ds-features-col">
                            <div className="dt-ds-feature-card">
                                <div className="dt-ds-feature-icon"><FiLayers /></div>
                                <h3>Big Data Scalability</h3>
                                <p>Handle massive datasets with ease using our distributed processing and storage architectures.</p>
                            </div>
                            <div className="dt-ds-feature-card">
                                <div className="dt-ds-feature-icon"><FiShield /></div>
                                <h3>Enhanced Security</h3>
                                <p>Protect your sensitive enterprise data with our state-of-the-art security and governance measures.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Trusted By Section */}
                <section className="dt-ds-brands-row">
                    <p>Trusted by more than 100+ global enterprises</p>
                    <div className="dt-ds-brands-grid">
                        <div className="dt-ds-brand"><strong>Google</strong></div>
                        <div className="dt-ds-brand"><strong>Microsoft</strong></div>
                        <div className="dt-ds-brand"><strong>Databricks</strong></div>
                        <div className="dt-ds-brand"><strong>Amazon</strong></div>
                        <div className="dt-ds-brand"><strong>NVIDIA</strong></div>
                    </div>
                </section>

                {/* Expertise Section */}
                <section className="dt-section-ds-spacing">
                    <div className="dt-ds-exp-header">
                        <div className="dt-ds-exp-title-block">
                            <span className="dt-mini-tag">Our Expertise</span>
                            <h2 className="dt-section-ds-title-left">Data Science Solutions <br />for Enterprise Scale</h2>
                        </div>
                        <div className="dt-ds-exp-desc-block">
                            <p>We leverage advanced statistical modeling and machine learning to solve your most complex business challenges, turning raw data into measurable ROI.</p>
                        </div>
                    </div>

                    <div className="dt-ds-expertise-complex">
                        <div className="dt-ds-exp-main-img">
                            <img src={fintechImg} alt="Enterprise Data Science" />
                        </div>

                        <div className="dt-ds-exp-side-grid">
                            <div className="dt-ds-exp-card ">
                                <h3>Your Growth, <br />Our Priority</h3>
                                <p>We build scalable predictive models that align perfectly with your business growth objectives and operational efficiency.</p>
                                <a href="#consultation" className="dt-exp-link">Learn More <FiArrowRight /></a>
                            </div>

                            <div className="dt-ds-exp-card stats">
                                <div className="dt-exp-stat">
                                    <h4>450+</h4>
                                    <span>Models Deployed</span>
                                </div>
                                <div className="dt-exp-stat">
                                    <h4>98.5%</h4>
                                    <span>Prediction Accuracy</span>
                                </div>
                            </div>

                            <div className="dt-ds-exp-card wide-card">
                                <h3>Innovating for Your Success</h3>
                                <p>Our PhD-level data scientists push the boundaries of AI to deliver bespoke solutions that provide a sustainable competitive advantage in your industry.</p>
                                <div className="dt-exp-footer">
                                    <a href="#consultation" className="dt-exp-link">Learn More <FiArrowRight /></a>
                                    <div className="dt-exp-icons">
                                        <div className="dt-exp-icon-btn blue"><FiZap /></div>
                                        <div className="dt-exp-icon-btn yellow"><FiTrendingUp /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technology Stack Section */}
                <section className="dt-section-ds-spacing">
                    <div className="dt-tech-header">
                        <h2 className="dt-section-ds-title-left">Top Technology Stack</h2>
                        <p className="dt-tech-subtitle-new">Get started with best frameworks</p>
                    </div>

                    <div className="dt-ds-tech-slider-wrapper">
                        <div className="dt-ds-tech-track">
                            {[...techStack, ...techStack].map((tech, idx) => (
                                <div key={idx} className="dt-ds-tech-card-new">
                                    <div className="dt-ds-tech-icon-box">{tech.icon}</div>
                                    <h4> {tech.name}</h4>
                                    <span className="dt-tech-cat-text">{tech.cat}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Consultation Form Integration */}
                <section id="consultation">
                    <AIConsultationForm />
                </section>
            </div>
            {/* Final CTA Section */}
            <CTA />
        </div>
    );
};

export default DataScience;
