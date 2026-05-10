import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiLinkedin,
  FiInstagram,
  FiYoutube,
  FiMail,
  FiMapPin,
  FiPhone,
  FiChevronRight,
} from "react-icons/fi";
import CertificationSlider from "../Certification/Certification";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showMoreOffices, setShowMoreOffices] = useState(false);

  const aiServices = [
    { label: "Artificial Intelligence", path: "/services/artificial-intelligence" },
    { label: "AI Consulting", path: "/services/ai-consulting-services" },
    { label: "AI Tools", path: "/services/ai-tools" },
    { label: "Data Science", path: "/services/data-science" },
    { label: "Database Creation", path: "/services/database-creation-and-management" },
    { label: "Hire AI Experts", path: "/services/hire-ai-experts" },
  ];

  const appServices = [
    { label: "Mobile Development", path: "/services/mobile-development" },
    { label: "Web Development", path: "/services/web-development" },
    { label: "Cross-platform Dev", path: "/services/cross-platform-development" },
    { label: "PWA Development", path: "/services/pwa-development" },
    { label: "CMS Web Development", path: "/services/cms-based-web-development" },
  ];

  const securityServices = [
    { label: "Security Management", path: "/services/security-management" },
    { label: "Security Ops Center", path: "/services/security-operations-center" },
    { label: "Penetration Testing", path: "/services/penetration-testing" },
    { label: "Digital Transformation", path: "/services/digital-transformation" },
    { label: "IT Consulting", path: "/services/it-consulting" },
    { label: "Digital Sovereignty", path: "/services/digital-sovereignty" },
  ];

  const cloudServices = [
    { label: "DevOps Consulting", path: "/services/devops-enablement" },
    { label: "Cloud Migration", path: "/services/cloud-migration" },
    { label: "CI/CD Pipeline", path: "/services/cicd" },
    { label: "Infrastructure as Code", path: "/services/iac" },
    { label: "Kubernetes Solutions", path: "/services/cloud-architecture" },
  ];

  const industries = [
    { label: "Retail & E-commerce", path: "/platform/retail" },
    { label: "SaaS Applications", path: "/platform/saas-applications" },
  ];

  const company = [
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    { label: "Newsletters", path: "/insights-knowledge/newsletters" },
    { label: "Blog", path: "/insights-knowledge/blogs" },
    { label: "Events", path: "/news-events/industry-events" },
  ];

  const offices = [
    {
      city: "London",
      type: "Head Office",
      address: "128 City Road, London, United Kingdom EC1V 2NX",
      icon: <FiMapPin />
    },
    {
      city: "Tennessee",
      type: "Sub-Regional Office",
      address: "522 Aventura Dr, Mt Juliet, Tennessee 37122 United States",
      icon: <FiMapPin />
    },
    {
      city: "Bengaluru",
      type: "Corporate Office",
      address: "Embassy Golf Links Business Park, Bengaluru, Karnataka-560071, India",
      icon: <FiMapPin />
    },
    {
      city:"Chennai",
      type:"Sub-Regional Office",
      address:"Ground Floor, Primus Building, Door No. SP – 7A, Guindy Industrial Estate, SIDCO Industrial Estate, Chennai 600032",
      icon:<FiMapPin /> 
    },
    {
      city:"Thoothukudi",
      type:"Sub-Regional Office",
      address:"4/ 367, Rajeev Colony, Pasuvanthanai 628718 Thoothukudi, Tamilnadu, IN",
      icon:<FiMapPin />
    }
  
  ];

  const socialMedia = [
    { icon: <FiLinkedin />, url: "https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all", name: "LinkedIn" },
    { icon: <FiFacebook />, url: "https://www.facebook.com/profile.php?id=61579126233218", name: "Facebook" },
    { icon: <FiInstagram />, url: "https://www.instagram.com/devopstrio_offcl/", name: "Instagram" },
    { icon: <FiYoutube />, url: "https://www.youtube.com/@Devopstrioltd", name: "YouTube" },
  ];


  return (
    <footer className="dt-footer">
      <div className="dt-footer-container">
        <div className="dt-footer-top-row">
          {/* Logo & Description Column */}
          <div className="dt-footer-brand-col">
            <div className="dt-footer-logo">
              <img
                src="/images/Devopsrio_Main_logo.png"
                alt="Devopstrio"
                className="dt-footer-logo-img"
              />
              <span className="dt-footer-logo-text">Devopstrio</span>
            </div>
            <p className="dt-footer-description">
              Transforming businesses through innovative DevOps solutions. We
              help organizations achieve faster delivery, improved reliability,
              and scalable infrastructure.
            </p>

            {/* Social Media */}
            <div className="dt-footer-social">
              <h4 className="dt-footer-social-title">Follow Us</h4>
              <div className="dt-social-icons">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dt-social-item"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="dt-footer-links-grid">
            <div className="dt-footer-col">
              <h4 className="dt-footer-title">AI & DATA</h4>
              <ul className="dt-footer-list">
                {aiServices.map((item) => (
                  <li key={item.label}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="dt-footer-col">
              <h4 className="dt-footer-title">APP DEVELOPMENT</h4>
              <ul className="dt-footer-list">
                {appServices.map((item) => (
                  <li key={item.label}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="dt-footer-col">
              <h4 className="dt-footer-title">SECURITY</h4>
              <ul className="dt-footer-list">
                {securityServices.map((item) => (
                  <li key={item.label}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="dt-footer-col">
              <h4 className="dt-footer-title">CLOUD</h4>
              <ul className="dt-footer-list">
                {cloudServices.map((item) => (
                  <li key={item.label}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div className="dt-footer-col">
              <h4 className="dt-footer-title">COMPANY</h4>
              <ul className="dt-footer-list">
                {[...industries, ...company].map((item) => (
                  <li key={item.label}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Offices Section */}
        <div className="dt-footer-offices-section">
          <div className="dt-footer-offices-header">
            <h4 className="dt-footer-section-title">OUR OFFICES</h4>
            <div className="dt-footer-see-more">
              <button 
                className={`dt-see-more-btn ${showMoreOffices ? 'active' : ''}`}
                onClick={() => setShowMoreOffices(!showMoreOffices)}
              >
                {showMoreOffices ? 'See less' : 'See more'} <FiChevronRight />
              </button>
            </div>
          </div>
          
          <div className="dt-offices-slider-container">
            <div className={`dt-offices-slider ${showMoreOffices ? 'slide-active' : ''}`}>
              {offices.map((office, index) => (
                <div key={`${office.city}-${index}`} className="dt-office-card">
                  <h5 className="dt-office-city">{office.city}</h5>
                  <p className="dt-office-type">
                    <span className="dt-office-icon">{office.icon}</span>
                    {office.type}
                  </p>
                  <p className="dt-office-address">{office.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="dt-footer-contact-section">
          <div className="dt-contact-content">
            <h4 className="dt-footer-section-title">CONTACT US</h4>
            <div className="dt-contact-items">
              <a href="tel:+44 7471 482903" className="dt-contact-link">
                <FiPhone /> +44 7471 482903
              </a>
              <a href="mailto:info@devopstrioglobal.com" className="dt-contact-link">
                <FiMail /> info@devopstrioglobal.com
              </a>
            </div>
          </div>
          <button className="dt-scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <FiChevronRight style={{ transform: 'rotate(-90deg)' }} />
          </button>
        </div>

        {/* Certifications Section */}
        <div className="dt-footer-certifications">
          <CertificationSlider />
        </div>

        {/* Bottom Bar */}
        <div className="dt-footer-bottom">
          <div className="dt-bottom-left">
            <p>© {currentYear} Devopstrio. All Rights Reserved. <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/cookie-policy">Cookie Policy</Link>.</p>
            <p className="dt-recaptcha-text">This site is protected by reCAPTCHA and the Google <Link to="/privacy-policy">Privacy Policy</Link> and <Link to="/terms-of-service">Terms of Service</Link> apply.</p>
          </div>
          <div className="dt-bottom-right">
            <div className="dt-rating-badges">
              <div className="dt-rating-stars">★★★★★</div>
              <div className="dt-rating-text">100+ REVIEWS</div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
