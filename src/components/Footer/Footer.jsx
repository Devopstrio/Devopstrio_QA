import React from "react";
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

  const services = [
    { label: "DevOps Consulting", path: "/services/devops-enablement" },
    { label: "Cloud Migration", path: "/services/cloud-migration" },
    { label: "CI/CD Pipeline", path: "/services/cicd" },
    { label: "Infrastructure as Code", path: "/services/iac" },
    { label: "Kubernetes Solutions", path: "/services/cloud-architecture" },
    // { label: "Monitoring & Observability", path: "/Contributions" },
  ];

  const industries = [
    { label: "FinTech", path: "/marketplace" },
    { label: "Healthcare", path: "/marketplace" },
    { label: "E-commerce", path: "/platform/retail" },
    { label: "SaaS", path: "/platform/saas-applications" },
    { label: "Telecom", path: "/contact" },
  ];

  const company = [
    { label: "About Us", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    { label: "News", path: "/insights-knowledge/newsletters" },
    { label: "Blog", path: "/insights-knowledge/blogs" },
    { label: "Events", path: "/news-events/industry-events" },
  ];

  const quickLinks = [
    { label: "Sitemap", path: "/sitemap" },
    { label: "Privacy Policy", path: "/privacy-policy" },
    { label: "Terms of Service", path: "/terms-of-service" },
    { label: "Cookie Policy", path: "/cookie-policy" },
    { label: "GDPR Compliance", path: "/footer-compliance" },
    { label: "Disclaimer", path: "/disclaimer" },
  ];

  const socialMedia = [
    {
      icon: <FiLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all",
      brand: "brand-li",
    },
    {
      icon: <FiFacebook />,
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61579126233218",
      brand: "brand-fb",
    },
    {
      icon: <FiInstagram />,
      name: "Instagram",
      url: "https://www.instagram.com/devopstrio_offcl/",
      brand: "brand-ig",
    },
    {
      icon: <FiYoutube />,
      name: "YouTube",
      url: "https://www.youtube.com/@Devopstrioltd",
      brand: "brand-yt",
    },
  ];

  return (
    <footer className="footer">
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* Logo & Description Column */}
          <div className="footer-column footer-logo-col">
            <div className="footer-logo">
              <img
                src="/images/Devopsrio_Main_logo.png"
                alt="Devopstrio "
                className="logo-footer-image"
              />
              <svg
                width="200"
                height="40"
                viewBox="0 0 200 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <text
                  x="0"
                  y="30"
                  fill="#ffffff"
                  fontFamily="Inter, sans-serif"
                  fontSize="28"
                  fontWeight="700"
                >
                  Devopstrio
                </text>
                <circle cx="185" cy="14" r="5" fill="#000000   " />
                <circle cx="195" cy="14" r="5" fill="#000000   " />
                <circle cx="190" cy="26" r="5" fill="#000000   " />
              </svg>
            </div>
            <p className="footer-description">
              Transforming businesses through innovative DevOps solutions. We
              help organizations achieve faster delivery, improved reliability,
              and scalable infrastructure.
            </p>

            {/* Social Media */}
            <div className="footer-social">
              <h4 className="footer-social-title">Follow Us</h4>
              <div className="social-icons">
                {socialMedia.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`footer-social-item ${social.brand}`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">
              <FiChevronRight className="title-icon" />
              Services
            </h3>
            <ul className="footer-links">
              {services.map((service) => (
                <li key={service.label}>
                  <Link to={service.path}>
                    <FiChevronRight className="link-icon" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">
              <FiChevronRight className="title-icon" />
              Industries
            </h3>
            <ul className="footer-links">
              {industries.map((industry) => (
                <li key={industry.label}>
                  <Link to={industry.path}>
                    <FiChevronRight className="link-icon" />
                    {industry.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="footer-column">
            <h3 className="footer-column-title">
              <FiChevronRight className="title-icon" />
              Company
            </h3>
            <ul className="footer-links">
              {company.map((company) => (
                <li key={company.label}>
                  <Link to={company.path}>
                    <FiChevronRight className="link-icon" />
                    {company.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter Column */}
          <div className="footer-column footer-contact-col">
            <h3 className="footer-column-title">
              <FiChevronRight className="title-icon" />
              Contact Info
            </h3>

            <div className="contact-info">
              <div className="contact-item">
                <FiMapPin className="contact-icon" />
                <div>
                  <p className="contact-label">Headquarters</p>
                  <p className="contact-text">
                    128, City Road, London, EC1V 2NX<br></br> United Kingdom
                  </p>
                </div>
              </div>

              <div className="contact-item">
                <FiPhone className="contact-icon" />
                <div>
                  <p className="contact-label">Phone</p>
                  <p className="contact-text">+44 7471 482903</p>
                </div>
              </div>

              <div className="contact-item">
                <FiMail className="contact-icon" />
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-text">info@devopstrioglobal.com</p>
                </div>

                {/* <div className="contact-item">
                <FiMessageCircle className="contact-icon" />
                <div>
                  <p className="contact-label">Whatsapp</p>
                  <p className="contact-text">8071357581</p>
                </div>
              </div> */}
              </div>
            </div>

            {/* Newsletter */}
            {/* <div className="newsletter">
              <h4 className="newsletter-title">Stay Updated</h4>
              <p className="newsletter-desc">Subscribe to our newsletter</p>
              <form className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-btn">
                  <FiChevronRight />
                </button>
              </form>
            </div> */}
          </div>
        </div>
      </div>

      {/* <CertificationSlider /> */}
      {/* <Devopstrio /> */}

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="copyright">
            © {currentYear} Devopstrio. All rights reserved.
          </div>

          <div className="footer-bottom-links">
            {quickLinks.map((link) => (
              <Link key={link.label} to={link.path} className="bottom-link">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
