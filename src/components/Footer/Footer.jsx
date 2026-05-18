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
  FiGlobe,
  FiChevronDown
} from "react-icons/fi";
import Swal from "sweetalert2";
import CertificationSlider from "../Certification/Certification";
import CategoryPopup from "../Newsletter/CategoryPopup";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showMoreOffices, setShowMoreOffices] = useState(false);
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter your email address to continue.",
        confirmButtonColor: "#ce2453",
        background: "#0a0a0a",
        color: "#fff",
      });
      return;
    }
    setShowPopup(true);
  };

  const aiServices = [
    { label: "AI Consulting", path: "/services/ai-consulting-services" },
    { label: "AI Tools", path: "/services/ai-tools" },
    { label: "Artificial Intelligence", path: "/services/artificial-intelligence" },
    { label: "Data Science", path: "/services/data-science" },
    { label: "Database Creation", path: "/services/database-creation-and-management" },
    { label: "Hire AI Experts", path: "/services/hire-ai-experts" },
  ];

  const appServices = [
    { label: "CMS Web Development", path: "/services/cms-based-web-development" },
    { label: "Cross-platform Dev", path: "/services/cross-platform-development" },
    { label: "Mobile Development", path: "/services/mobile-development" },
    { label: "PWA Development", path: "/services/pwa-development" },
    { label: "Web Development", path: "/services/web-development" },
  ];

  const securityServices = [
    { label: "Digital Sovereignty", path: "/services/digital-sovereignty" },
    { label: "Digital Transformation", path: "/services/digital-transformation" },
    { label: "IT Consulting", path: "/services/it-consulting" },
    { label: "Penetration Testing", path: "/services/penetration-testing" },
    { label: "Security Management", path: "/services/security-management" },
    { label: "Security Ops Center", path: "/services/security-operations-center" },
  ];

  const cloudServices = [
    { label: "CI/CD Pipeline", path: "/services/cicd" },
    { label: "Cloud Migration", path: "/services/cloud-migration" },
    { label: "DevOps Consulting", path: "/services/devops-enablement" },
    { label: "Infrastructure as Code", path: "/services/iac" },
    { label: "Kubernetes Solutions", path: "/services/cloud-architecture" },
  ];

  const industries = [
    { label: "Automotive", path: "/platform/automotive" },
    { label: "Financial Services", path: "/platform/financial-services" },
    { label: "Healthcare", path: "/platform/healthcare" },
    { label: "Logistics", path: "/platform/logistics" },
    { label: "Media & Entertainment", path: "/platform/media-entertainment" },
    { label: "Retail & E-commerce", path: "/platform/retail" },
    { label: "SaaS Applications", path: "/platform/saas-applications" },
    { label: "Telecom", path: "/platform/telecom" }
  ];

  const company = [
    { label: "About Us", path: "/about" },
    { label: "Awards & Milestones", path: "/news-events/awards-milestones" },
    { label: "Blog", path: "/insights-knowledge/blogs" },
    { label: "Case Studies", path: "/insights-knowledge/case-studies" },
    { label: "Celebrations", path: "/life-at/celebrations" },
    { label: "Client Transformations", path: "/success-stories/client-transformations" },
    { label: "Contact Us", path: "/contact" },
    { label: "Events", path: "/news-events/industry-events" },
    { label: "Overview", path: "/about/overview" },
    { label: "Team Culture", path: "/life-at/team-culture" },
    { label: "Testimonials", path: "/clients" },
    { label: "Values", path: "/about/values" },
    { label: "White Papers", path: "/insights-knowledge/white-paper" }
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
          {/* Navigation Links Grid */}
          <div className="dt-footer-links-grid">
            {/* Column 1 */}
            <div className="dt-footer-col">
              <h4 className="dt-footer-title">What We Do</h4>
              <h5 className="dt-footer-subtitle">AI and Generative AI</h5>
              <ul className="dt-footer-list dt-indented-list">
                {aiServices.map((item) => (
                  <li key={item.label}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
              <h5 className="dt-footer-subtitle" style={{ marginTop: '20px' }}>Cloud & Security</h5>
              <ul className="dt-footer-list dt-indented-list">
                {[...cloudServices, ...securityServices].map((item) => (
                  <li key={item.label}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Column 2 */}
            <div className="dt-footer-col">
              <h4 className="dt-footer-title">Industries</h4>
              <ul className="dt-footer-list">
                {industries.map((item) => (
                  <li key={item.label}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
              <h4 className="dt-footer-title" style={{ marginTop: '30px' }}>Applications</h4>
              <ul className="dt-footer-list dt-indented-list">
                {appServices.map((item) => (
                  <li key={item.label}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Column 3 */}
            <div className="dt-footer-col">
              <h4 className="dt-footer-title">Who We Are</h4>
              <ul className="dt-footer-list">
                {company.map((item) => (
                  <li key={item.label}><Link to={item.path}>{item.label}</Link></li>
                ))}
              </ul>
            </div>

            {/* Column 4 */}
            <div className="dt-footer-col">
              <h4 className="dt-footer-title">Careers</h4>
              <ul className="dt-footer-list">
                <li><Link to="/careers">Careers Overview</Link></li>
                <li><Link to="/careers/jobs">Explore job opportunities</Link></li>
              </ul>
              <h4 className="dt-footer-title" style={{ marginTop: '30px' }}>Global Presence</h4>
              <ul className="dt-footer-list">
                {offices.map((office) => (
                  <li key={office.city}>
                    <Link to={`/contact?location=${office.city.toLowerCase()}#locations`}>{office.city} - {office.type}</Link>
                  </li>
                ))}
              </ul>
              
              <h4 className="dt-footer-title" style={{ marginTop: '30px', marginBottom: '15px' }}>Newsletter</h4>
              <p className="dt-footer-newsletter-text">Subscribe to our newsletter for the latest tech insights and company updates.</p>
              <form className="dt-footer-newsletter-form" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                />
                <button type="submit" aria-label="Subscribe"><FiChevronRight /></button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Social Bar */}
        <div className="dt-footer-social-row">
          <div className="dt-footer-logo-bottom">
            <img src="/images/Devopsrio_Main_logo.png" alt="Devopstrio" />
            <span>Devopstrio</span>
          </div>

          <div className="dt-social-icons-centered">
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="dt-social-item-text"
                aria-label={social.name}
              >
                {social.name}
              </a>
            ))}
          </div>

        
        </div>

        {/* Bottom Copyright Bar */}
        <div className="dt-footer-copyright-row">
          <span className="dt-copyright-text">Copyright © {currentYear} Devopstrio Limited</span>
          <div className="dt-copyright-links">
            <Link to="/contact">Contact Us</Link> <span className="dt-sep">/</span>
            <Link to="/disclaimer">Disclaimer</Link> <span className="dt-sep">/</span>
            <Link to="/privacy-policy">Privacy Statement</Link> <span className="dt-sep">/</span>
            <Link to="/terms-of-service">Terms of use</Link> <span className="dt-sep">/</span>
            <Link to="/sitemap">Sitemap</Link>
          </div>
        </div>
      </div>

      {/* Popup for category selection */}
      {showPopup && (
        <CategoryPopup
          email={email}
          closePopup={() => setShowPopup(false)}
        />
      )}
    </footer>

  );
};

export default Footer;
