import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import Serviceshero from "../../components/Hero/Serviceshero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";
import { Helmet } from "react-helmet-async";
import "../../Style/serve/CloudMigration.css";

// React Icons - Only Fi and Fa
import {
  FiArrowRight,
  FiServer,
  FiDatabase,
  FiShield,
  FiZap,
  FiCheckCircle,
  FiClock,
  FiTrendingUp,
  FiRefreshCw,
  FiPlayCircle,
  FiLayers,
  FiBox,
  FiActivity,
  FiAward,
  FiUsers,
  FiBriefcase,
  FiCpu,
  FiHardDrive,
  FiClipboard,
  FiGlobe,
} from "react-icons/fi";

import {
  FaAws,
  FaMicrosoft,
  FaGoogle,
  FaDocker,
  FaQuoteRight,
  FaRocket,
  FaCloudUploadAlt,
  FaGitAlt,
  FaJenkins,
  FaGithub,
} from "react-icons/fa";

const CloudMigration = () => {
  const navigate = useNavigate();
  const [selectedStudy, setSelectedStudy] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openStudy = (study) => {
    setSelectedStudy(study);
    setIsModalOpen(true);
  };

  const closeStudy = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedStudy(null), 300);
  };

  // Unsplash images
  const images = {
    migrationProcess: "/images/New/Migrate Without Stopping Your Business.png",
    dataCenter:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=2034&q=80",
    teamWork:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    cloudInfrastructure:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80",
    security:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    migrationJourney: "/images/NewFolder/Groups_78.png",
    success:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    team: "https://images.unsplash.com-50?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    dashboard:
      "https://images.unsplash.com-51?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    architecture:
      "https://images.unsplash.com-52?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  };

  const migrationSteps = [
    {
      icon: <FiClipboard className="cloud-migration-step-icon" />,
      title: "Assessment",
      description:
        "Comprehensive analysis of your current infrastructure and applications",
    },
    {
      icon: <FiLayers className="cloud-migration-step-icon" />,
      title: "Planning",
      description:
        "Detailed migration strategy with timeline and resource allocation",
    },
    {
      icon: <FiRefreshCw className="cloud-migration-step-icon" />,
      title: "Migration",
      description: "Execute migration with zero downtime and data integrity",
    },
    {
      icon: <FiTrendingUp className="cloud-migration-step-icon" />,
      title: "Optimization",
      description:
        "Post-migration tuning for maximum performance and cost efficiency",
    },
  ];

  const benefits = [
    {
      icon: <FiZap className="cloud-migration-benefit-icon" />,
      title: "50% Faster",
      description: "Accelerated migration process",
    },
    {
      icon: <FiShield className="cloud-migration-benefit-icon" />,
      title: "100% Secure",
      description: "End-to-end data protection and compliance",
    },
    {
      icon: <FiClock className="cloud-migration-benefit-icon" />,
      title: "Zero Downtime",
      description: "Continuous business operations during migration",
    },
    {
      icon: <FiTrendingUp className="cloud-migration-benefit-icon" />,
      title: "30% Cost Save",
      description: "Optimized cloud infrastructure and reduced costs",
    },
  ];

  const caseStudies = [
    {
      company: "FinBank Corp",
      industry: "Banking & Finance",
      apps: "200+",
      time: "3 Months",
      reduction: "40%",
      image: images.success,
      icon: <FiBriefcase className="cloud-migration-case-icon" />,
      challenge:
        "Managing thousands of legacy workloads on-premise with frequent downtime and high maintenance costs.",
      solution:
        "Implemented a phased migration strategy using AWS migration tools, transforming monolithic apps into microservices.",
      results: [
        "40% reduction in infrastructure costs",
        "Zero downtime during transition",
        "99.99% uptime post-migration",
      ],
    },
    {
      company: "HealthCare Plus",
      industry: "Healthcare",
      apps: "150+",
      time: "2 Months",
      reduction: "35%",
      image: images.team,
      icon: <FiActivity className="cloud-migration-case-icon" />,
      challenge:
        "Strict HIPAA compliance requirements and the need for high-speed data access for patient records.",
      solution:
        "Secure migration to Azure with private endpoints and end-to-end encryption for all sensitive data.",
      results: [
        "100% HIPAA compliance met",
        "35% improvement in application speed",
        "Seamless integration with medical devices",
      ],
    },
    {
      company: "EcoMart Retail",
      industry: "E-commerce",
      apps: "300+",
      time: "4 Months",
      reduction: "45%",
      image: images.dashboard,
      icon: <FiGlobe className="cloud-migration-case-icon" />,
      challenge:
        "Scaling issues during peak holiday seasons leading to significant revenue loss.",
      solution:
        "Migration to Google Cloud with auto-scaling Kubernetes clusters and globally distributed databases.",
      results: [
        "45% OpEx savings achieved",
        "Handles 10x traffic spikes automatically",
        "Global latency reduced by 60%",
      ],
    },
  ];

  const technologies = [
    { icon: <FaAws />, name: "AWS" },
    { icon: <FaMicrosoft />, name: "Azure" },
    { icon: <FaGoogle />, name: "GCP" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaJenkins />, name: "Jenkins" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FiBox />, name: "Containers" },
    { icon: <FiDatabase />, name: "Databases" },
    { icon: <FiServer />, name: "Servers" },
  ];

  const faqs = [
    {
      question: "What is cloud migration?",
      answer:
        "Cloud migration is the process of moving applications, data, and IT infrastructure from on-premise or legacy systems to secure cloud platforms like AWS, Azure, or Google Cloud to improve scalability, performance, and cost efficiency.",
    },
    {
      question: "How long does cloud migration take?",
      answer:
        "The timeline for cloud migration depends on the complexity of your infrastructure, but most projects typically range from a few weeks to a few months with proper planning and execution.",
    },
    {
      question: "Can you migrate without downtime?",
      answer:
        "Yes, our cloud migration services are designed to ensure zero downtime using advanced techniques like live data synchronization, phased migration, and real-time monitoring.",
    },
    {
      question: "Is cloud migration secure?",
      answer:
        "Cloud migration is highly secure when implemented correctly. We use end-to-end encryption, strict access controls, and compliance standards to protect your data throughout the migration process.",
    },
    {
      question: "What are the benefits of cloud migration?",
      answer:
        "Cloud migration helps reduce infrastructure costs, improve system performance, enhance scalability, increase security, and enable faster deployment of applications.",
    },
    {
      question: "Which cloud platforms do you support?",
      answer:
        "We provide cloud migration services across leading platforms including Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP).",
    },
    {
      question: "How much does cloud migration cost?",
      answer:
        "The cost of cloud migration depends on your current infrastructure, data volume, and business requirements. We provide customized, cost-optimized solutions based on your needs.",
    },
    {
      question: "Do you provide post-migration support?",
      answer:
        "Yes, we offer ongoing monitoring, optimization, and support to ensure your cloud environment remains secure, efficient, and scalable after migration.",
    },
  ];

  const testimonials = [
    {
      text: "The cloud migration was seamless. We moved 200+ applications with zero downtime. The team’s expertise and execution were exceptional.",
      author: "Sarah Johnson",
      position: "CTO, FinBank Corp",
      icon: <FaQuoteRight className="cloud-migration-quote-icon" />,
    },
    {
      text: "Our healthcare data was securely migrated with full compliance standards. Outstanding cloud migration service and ongoing support.",
      author: "Dr. Michael Chen",
      position: "IT Director, HealthCare Plus",
      icon: <FaQuoteRight className="cloud-migration-quote-icon" />,
    },
  ];

  return (
    <div className="page-wrapper cloud-migration-page">
      <Helmet>
        <title>
          Cloud Migration Services UK | Secure, Zero Downtime Cloud Migration |
          Devopstrio
        </title>
        <meta
          name="description"
          content="Devopstrio delivers expert cloud migration services across the UK move your applications, data, and infrastructure to AWS, Azure, or GCP with zero downtime, 100% security, and 30% cost savings. Get your free migration assessment today."
        />
        <meta
          name="keywords"
          content="Cloud migration services UK, Cloud migration company UK, Cloud migration services in UK, AWS migration services UK, Azure migration services UK, Google Cloud migration UK, Secure cloud migration UK, Zero downtime cloud migration, Cloud migration consultants UK, Enterprise cloud migration UK, Cloud migration cost UK, Move to cloud UK, Legacy system migration to cloud UK, Cloud infrastructure migration UK"
        />
      </Helmet>
      <Serviceshero />
      {/* Stats Section - Minimal Design */}
      {/* <section className="cloud-migration-stats-section">
        <div className="cloud-migration-container">
          <div className="cloud-migration-stats-grid">
            <div className="cloud-migration-stat-card">
              <h3 className="cloud-migration-gradient-texts">500+</h3>
              <p>Successful Migrations</p>
            </div>
            <div className="cloud-migration-stat-card">
              <h3 className="cloud-migration-gradient-texts">99.9%</h3>
              <p>Success Rate</p>
            </div>
            <div className="cloud-migration-stat-card">
              <h3 className="cloud-migration-gradient-texts">0</h3>
              <p>Data Loss Incidents</p>
            </div>
            <div className="cloud-migration-stat-card">
              <h3 className="cloud-migration-gradient-texts">50+</h3>
              <p>Certified Experts</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Modern Hero Section with Split Layout */}
      {/* <section className="cloud-migration-hero-section">
        <div className="cloud-migration-container">
          <div className="cloud-migration-hero-grid">
            <div className="cloud-migration-hero-content">
              <div className="cloud-migration-hero-tag">
                <span className="cloud-migration-gradient-text">
                  CLOUD MIGRATION EXPERTS
                </span>
              </div>
              <h1 className="cloud-migration-title">
                Move to Cloud with
                <span className="cloud-migration-gradient-texts">
                  {" "}
                  Zero Disruption
                </span>
              </h1>
              <p className="cloud-migration-subtitle">
                Enterprise-grade cloud migration services that ensure business
                continuity, data integrity, and optimized performance from day
                one.
              </p>

              <div className="cloud-migration-hero-cta">
                <button className="cloud-migration-outline-btn">
                  <FiPlayCircle className="cloud-migration-btn-icon" /> Watch
                  Demo
                </button>
              </div>

              <div className="cloud-migration-trust-badges">
                <div className="cloud-migration-trust-item">
                  <FiAward className="cloud-migration-trust-icon" />
                  <span>ISO 27001 Certified</span>
                </div>
                <div className="cloud-migration-trust-item">
                  <FiUsers className="cloud-migration-trust-icon" />
                  <span>500+ Migrations</span>
                </div>
                <div className="cloud-migration-trust-item">
                  <FiBriefcase className="cloud-migration-trust-icon" />
                  <span>Enterprise Ready</span>
                </div>
              </div>
            </div>
            <div className="cloud-migration-hero-visual">
              <div className="cloud-migration-hero-card">
                <FaCloudUploadAlt className="cloud-migration-hero-card-icon" />
                <h3>Migration in Progress</h3>
                <div className="cloud-migration-progress-bar">
                  <div
                    className="cloud-migration-progress-fill"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p>75% Completed • 2 Hours Remaining</p>
                <div className="cloud-migration-card-stats">
                  <span>
                    <FiHardDrive /> 1.2TB Data
                  </span>
                  <span>
                    <FiCpu /> 150 Apps
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Migration Process - Timeline Style */}
      <section className="cloud-migration-process-section">
        <div className="cloud-migration-container">
          <div className="cloud-migration-section-header-left">
            <span className="cloud-migration-section-subtitle cloud-migration-gradient-text">
              OUR PROCESS
            </span>
            <h2 className="cloud-migration-section-title">
              4-Step Cloud Migration Framework
            </h2>
            <p className="cloud-migration-section-description">
              Proven cloud migration that ensures a seamless, secure transition
              with minimal downtime
            </p>
          </div>

          <div className="cloud-migration-process-grid">
            {migrationSteps.map((step, index) => (
              <div key={index} className="cloud-migration-process-card">
                <div className="cloud-migration-process-number">
                  {index + 1}
                </div>
                <div className="cloud-migration-process-icon-wrapper">
                  {step.icon}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Layout Feature Section */}
      <section className="cloud-migration-feature-split">
        <div className="cloud-migration-container">
          <div className="cloud-migration-split-grid">
            <div className="cloud-migration-split-content">
              <span className="cloud-migration-section-subtitle cloud-migration-gradient-text">
                ZERO DOWNTIME
              </span>
              <h2>Migrate Without Downtime</h2>
              <p>
              Our cloud migration approach ensures your applications stay fully operational throughout the entire migration process
              </p>
              <ul className="cloud-migration-feature-list">
                <li>
                  <FiCheckCircle className="cloud-migration-list-icon" /> Live
                  data synchronization
                </li>
                <li>
                  <FiCheckCircle className="cloud-migration-list-icon" />{" "}
                  Continuous application availability
                </li>
                <li>
                  <FiCheckCircle className="cloud-migration-list-icon" />{" "}
                  Secure rollback capabilities
                </li>
                <li>
                  <FiCheckCircle className="cloud-migration-list-icon" />{" "}
                  Real-time migration monitoring
                </li>
              </ul>
            </div>
            <div className="cloud-migration-split-image">
              <img src={images.migrationJourney} alt="Migration Process" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Refined Split Layout */}
      <section className="cloud-migration-benefits-section">
        <div className="cloud-migration-container">
          <div className="cloud-migration-benefits-container">
            <div className="cloud-migration-benefits-content">
              <span className="cloud-migration-section-subtitle cloud-migration-gradient-text">
                KEY BENEFITS
              </span>
              <h2 className="cloud-migration-section-title">
                Why Businesses Choose Our Cloud Migration Services
              </h2>
              <p className="cloud-migration-section-description">
              We combine secure, scalable cloud migration solutions with accelerated deployment to deliver a fast, reliable, and cost-efficient transformation.
              </p>
            </div>
            <div className="cloud-migration-benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="cloud-migration-benefit-card">
                  <div className="cloud-migration-benefit-icon-wrapper">
                    {benefit.icon}
                  </div>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="cloud-migration-case-studies-section">
        <div className="cloud-migration-container">
          <div className="cloud-migration-section-header-center">
            <span className="cloud-migration-section-subtitle cloud-migration-gradient-text">
              SUCCESS STORIES
            </span>
            <h2 className="cloud-migration-section-title">
              Trusted by Industry Leaders
            </h2>
            <p className="cloud-migration-section-descriptions">
              Real results from real companies who transformed their
              infrastructure with us
            </p>
          </div>

          <div className="cloud-migration-case-studies-grid">
            {caseStudies.map((study, index) => (
              <div key={index} className="cloud-migration-case-study-card">
                <div className="cloud-migration-case-study-header">
                  <div className="cloud-migration-case-icon-wrapper">
                    {study.icon}
                  </div>
                  <div>
                    <h3>{study.company}</h3>
                    <p>{study.industry}</p>
                  </div>
                </div>
                <div className="cloud-migration-case-stats">
                  <div className="cloud-migration-case-stat">
                    <FiCpu />
                    <span>{study.apps} Apps</span>
                  </div>
                  <div className="cloud-migration-case-stat">
                    <FiClock />
                    <span>{study.time}</span>
                  </div>
                  <div className="cloud-migration-case-stat">
                    <FiTrendingUp />
                    <span>{study.reduction} Savings</span>
                  </div>
                </div>
                <button
                  className="cloud-migration-case-btn"
                  onClick={() => openStudy(study)}
                >
                  Read Case Study <FiArrowRight />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Grid - Compact */}
      <section className="cloud-migration-tech-compact">
        <div className="cloud-migration-container">
          <div className="cloud-migration-tech-header">
            <h3>Technologies We Support</h3>
            <p>Compatible with all major platforms and tools</p>
          </div>
          <div className="cloud-migration-tech-compact-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="cloud-migration-tech-compact-item">
                {tech.icon}
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="cloud-migration-testimonials-section">
        <div className="cloud-migration-container">
          <div className="cloud-migration-section-header-center">
            <span className="cloud-migration-section-subtitle cloud-migration-gradient-text">
              TESTIMONIALS
            </span>
            <h2 className="cloud-migration-section-title">
              What Our Clients Say
            </h2>
          </div>
          <div className="cloud-migration-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="cloud-migration-testimonial-card">
                {testimonial.icon}
                <p className="cloud-migration-testimonial-text">
                  {testimonial.text}
                </p>
                <div className="cloud-migration-testimonial-author">
                  <div className="cloud-migration-author-avatar">
                    <FiUsers />
                  </div>
                  <div>
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="cloud-migration-faq-section">
        <div className="cloud-migration-container">
          <div className="cloud-migration-section-header-center">
            <span className="cloud-migration-section-subtitle cloud-migration-gradient-text">
              FAQ
            </span>
            <h2 className="cloud-migration-section-title">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="cloud-migration-faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="cloud-migration-faq-item">
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Newsletter />
      <Cta />

      {/* Case Study Modal */}
      <AnimatePresence>
        {isModalOpen && selectedStudy && (
          <div className="cloud-migration-modal-overlay" onClick={closeStudy}>
            <motion.div
              className="cloud-migration-modal-content"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="cloud-migration-modal-close"
                onClick={closeStudy}
              >
                <FiX />
              </button>

              <div className="cloud-migration-modal-grid">
                <div className="cloud-migration-modal-header">
                  <div className="cloud-migration-modal-icon-wrap">
                    {selectedStudy.icon}
                  </div>
                  <div>
                    <span className="cloud-migration-modal-tag">
                      {selectedStudy.industry}
                    </span>
                    <h2 className="cloud-migration-modal-title">
                      {selectedStudy.company}
                    </h2>
                  </div>
                </div>

                <div className="cloud-migration-modal-body">
                  <div className="cloud-migration-modal-info-grid">
                    <div className="cloud-migration-modal-info-item">
                      <FiCpu />
                      <span>{selectedStudy.apps} Apps Migrated</span>
                    </div>
                    <div className="cloud-migration-modal-info-item">
                      <FiClock />
                      <span>{selectedStudy.time} Timeline</span>
                    </div>
                    <div className="cloud-migration-modal-info-item">
                      <FiTrendingUp />
                      <span>{selectedStudy.reduction} Savings</span>
                    </div>
                  </div>

                  <div className="cloud-migration-modal-text-section">
                    <h4>The Challenge</h4>
                    <p>{selectedStudy.challenge}</p>
                  </div>

                  <div className="cloud-migration-modal-text-section">
                    <h4>Our Solution</h4>
                    <p>{selectedStudy.solution}</p>
                  </div>

                  <div className="cloud-migration-modal-text-section">
                    <h4>Key Results</h4>
                    <ul className="cloud-migration-modal-results-list">
                      {selectedStudy.results.map((res, i) => (
                        <li key={i}>
                          <FiCheckCircle /> {res}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="cloud-migration-modal-footer">
                  <button
                    className="cloud-migration-primary-btn cloud-migration-gradient-bg"
                    onClick={() => {
                      closeStudy();
                      navigate("/insights-knowledge/case-studies");
                    }}
                  >
                    Ready for a Similar Success? <FiArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CloudMigration;
