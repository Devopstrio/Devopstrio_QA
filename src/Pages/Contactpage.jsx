import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { sendEmail } from "../Services/sendmail";
import subbiah from "../assets/images/subaiya_dev.png";
import GlobalOffices from "../components/GlobalOffices/GlobalOffices";
import "../Style/Contactpage.css";
import {
  FiMail,
  FiPhone,
  FiMessageCircle,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiArrowRight,
  FiUsers,
  FiHeadphones,
  FiZap,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiShield,
  FiCpu,
  FiBriefcase,
  FiHeart,
  FiAlertCircle,
} from "react-icons/fi";
import { FaWhatsapp, FaAws, FaMicrosoft, FaGoogle } from "react-icons/fa";
import useSEO from "../hooks/useSEO";

const ContactPage = () => {
  useSEO(
    "Contact Devopstrio | Enterprise DevOps Consulting UK",
    "Contact Devopstrio for enterprise DevOps consulting, cloud migration, and AI-powered infrastructure solutions. Speak with our experts today.",
  );

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const offices = [
    {
      id: 1,
      country: "London",
      name: "London Global Offices",
      type: "Head Office",
      locations: [
        {
          label: "Primary HQ",
          address: "128 City Road, London, EC1V 2NX, United Kingdom",
          mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2345007445406!2d-0.09131652322972314!3d51.527258609252264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760b08b17623d1%3A0x6617df320c1480ed!2sDevopstrio%20ltd!5e0!3m2!1sen!2sin!4v1773811632855!5m2!1sen!2sin",
        },
        {
          label: "Support Office",
          address: "167-169 Great Portland Street, 5th Floor, London, W1W 5PF",
          mapSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19860.317706557278!2d-0.143652!3d51.52166!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad65de83cb7%3A0x654d1aa971b4d814!2s167%20169%20Great%20Portland%20St%2C%20London%20W1W%205PF%2C%20UK!5e0!3m2!1sen!2sin!4v1777272155740!5m2!1sen!2sin",
        }
      ],
      // Default map for the card
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2345007445406!2d-0.09131652322972314!3d51.527258609252264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760b08b17623d1%3A0x6617df320c1480ed!2sDevopstrio%20ltd!5e0!3m2!1sen!2sin!4v1773811632855!5m2!1sen!2sin",
      address: "128 City Road, London, EC1V 2NX, United Kingdom",
    },
    {
      id: 2,
      country: "Tennessee",
      name: "Devopstrio USA Office",
      address: "522 Aventura Dr, Mt Juliet, Tennessee 37122 United States",
      type: "Support Office",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102928.98826550711!2d-86.6027150035035!3d36.16584294435728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864119d8544d673%3A0x2f1f0a519808386a!2s522%20Aventura%20Dr%2C%20Mt.%20Juliet%2C%20TN%2037122%2C%20USA!5e0!3m2!1sen!2sin!4v1714185243123!5m2!1sen!2sin",
    },
    {
      id: 4,
      country: "Bengaluru",
      name: "Devopstrio India - Bengaluru",
      address: "Embassy Golf Links, Business Park, Office number VO-173, SY# 13/2. Location No: 8, Challaghatta, Bangalore, Karnataka - 560071",
      type: "Corporate Office",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3207551711457!2d77.6464534!3d12.9513154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152b54eca867%3A0x980925bb507a328c!2sDevopstrio%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1777270477152!5m2!1sen!2sin",
    },
    {
      id: 5,
      country: "Chennai",
      name: "Devopstrio India - Chennai",
      address: "Ground Floor, Primus Building, Door No. SP – 7A, Guindy Industrial Estate, SIDCO Industrial Estate, Chennai 600032",
      type: "Regional Office",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15549.322624543756!2d80.18631090859512!3d13.014603199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267a73ea8f7c9%3A0xd7cb60c8a4a163cd!2sAwfis%20Spero%20Primus!5e0!3m2!1sen!2sin!4v1777270416916!5m2!1sen!2sin",
    },
    {
      id: 6,
      country: "Thoothukudi",
      name: "Devopstrio India - Thoothukudi",
      address: "4/ 367, pasuvai Rajeev Nagar, Pasuvanthanai 628718 Thoothukudi, Tamilnadu, IN",
      type: "Operations Center",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317.7437980381653!2d77.9603682782257!3d9.003746504446383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01557677b55437%3A0xdccfaa15cbbc87ca!2sDevopstrio!5e0!3m2!1sen!2sin!4v1777270094098!5m2!1sen!2sin",
    },
  ];

  const [activeOffice, setActiveOffice] = useState(offices[0]);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const locParam = searchParams.get("location");
    if (locParam) {
      const found = offices.find((o) => o.country.toLowerCase() === locParam.toLowerCase());
      if (found) {
        setActiveOffice(found);
      }
    }

    if (location.hash === '#locations') {
      setTimeout(() => {
        const element = document.getElementById('locations');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, [location.search, location.hash]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      await sendEmail(formData);

      setStatus({
        type: "success",
        message: "Message sent! We'll get back to you within 24 hours.",
      });

      setFormData({
        fullName: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("ACTUAL ERROR:", error);
      setStatus({
        type: "error",
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "What makes Devopstrio different from other consultancies?",
      answer:
        "We don't just implement tools—we transform teams. Our unique Trio Methodology combines people, processes, and platforms to deliver 3x faster deployments with 99.9% reliability.",
    },
    {
      question: "How do you price your services?",
      answer:
        "We offer flexible engagement models: fixed-price for defined projects, dedicated teams for long-term partnerships, and outcome-based pricing where we share the risk and reward.",
    },
    {
      question: "Do you work with startups or only enterprises?",
      answer:
        "Both! We scale our involvement based on your needs—from guiding early-stage startups through Series A readiness to transforming Fortune 500 engineering organizations.",
    },
    {
      question: "How quickly can you start?",
      answer:
        "We can begin within 48 hours for most engagements. Our rapid onboarding process gets you value on day one, not month one.",
    },
    {
      question: "What certifications do you hold?",
      answer:
        "We're AWS Premier Partners, Microsoft Azure Gold Partners, Google Cloud Premier Partners, and maintain ISO 27001, SOC2 Type II, and HIPAA compliance.",
    },
  ];

  return (
    <div className="dt_contact_wrapper">
      {/* ============================================
          1. BLACK HERO - 100vh FULL SCREEN
          CLEAN VERSION - ONLY IMAGE WITH GLOW
          ============================================ */}
      <section className="dt_hero_black">
        <div className="dt_hero_grid">
          {/* LEFT CONTENT - MAIN MESSAGE */}
          <div className="dt_hero_left">
            <div className="dt_hero_overline">
              {/* <span className="dt_hero_pulse"></span> */}
              <FiZap className="dt_hero_icon_zap" />
              <span className="dt_hero_text"> Support</span>
            </div>

            <h1 className="dt_hero_title">
              Have a Challenge?
              <span className="dt_gradient_block">We Have Solutions</span>
              {/* <span className="dt_hero_accent">
                <FiCheckCircle className="dt_accent_icon" />
                24/7 Enterprise Support Ready.
              </span> */}
            </h1>

            <p className="dt_hero_description">
              Join 200+ engineering teams that have slashed deployment times by
              73% and increased release frequency by 5x through our elite DevOps
              partnership.
            </p>

            <div className="dt_hero_trust">
              <div className="dt_trust_logos">
                <span className="dt_logo_item">
                  <FaAws className="dt_logo_icon" /> AWS
                </span>
                <span className="dt_logo_item">
                  <FaMicrosoft className="dt_logo_icon" /> Azure
                </span>
                <span className="dt_logo_item">
                  <FaGoogle className="dt_logo_icon" /> GCP
                </span>
              </div>
              {/* <div className="dt_trust_rating">
                <div className="dt_rating_stars">
                  <FiStar className="dt_star_filled" />
                  <FiStar className="dt_star_filled" />
                  <FiStar className="dt_star_filled" />
                  <FiStar className="dt_star_filled" />
                  <FiStar className="dt_star_half" />
                </div>
                <span className="dt_rating_text">
                  <FiThumbsUp className="dt_rating_icon" />
                  4.9/5 from 156 reviews
                </span>
              </div> */}
            </div>
          </div>

          {/* RIGHT VISUAL - ONLY IMAGE WITH GLOW (ALL CARDS & ICONS REMOVED) */}
          <div className="dt_hero_right">
            <div className="dt_visual_container">
              {/* Background Glow Effects - KEPT FOR IMAGE */}

              {/* Main Image - BIGGEST SIZE WITH GLOW */}
              <div className="dt_image_frame_large">
                <img
                  src={subbiah}
                  alt="Devopstrio Engineering Team"
                  className="dt_main_image_large"
                />
                <div className="dt_image_glow_intense"></div>
              </div>

              {/* ALL FLOATING STATS CARDS REMOVED */}
              {/* ALL FLOATING ICONS REMOVED */}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="dt_scroll_indicator">
          <span className="dt_scroll_text">Scroll to connect</span>
          <div className="dt_scroll_line"></div>
        </div> */}
      </section>

      {/* ============================================
          2. FORM + CONTACT DETAILS SIDE BY SIDE
          ============================================ */}
      <section id="dt_contact_form" className="dt_form_section">
        <div className="dt_section_header">
          <span className="dt_section_badge">
            <FiHeadphones className="dt_badge_icon" />
            CONNECT WITH US
          </span>
          <h2 className="dt_section_title_main">
            Ready to <span className="dt_gradient_text">Accelerate?</span>
          </h2>
          <p className="dt_section_subtitle">
            Choose the way that works best for you. We're always ready to help.
          </p>
        </div>

        <div className="dt_form_container">
          {/* LEFT: CONTACT DETAILS */}
          <div className="dt_details_card">
            <div className="dt_card_header">
              <FiMessageCircle className="dt_card_icon" />
              <h3>Contact Information</h3>
            </div>
            <p className="dt_card_subtitle">
              Reach out through any channel. Average response:{" "}
              <strong>&lt;2 hours</strong>
            </p>

            <div className="dt_methods_grid">
              <div className="dt_method_item">
                <div className="dt_method_icon_wrap dt_method_email">
                  <FiMail className="dt_method_icon" />
                </div>
                <div className="dt_method_content">
                  <h4>Email</h4>
                  <a href="mailto:info@devopstrioglobal.com">
                    info@devopstrioglobal.com
                  </a>
                  <span>
                    <FiCheckCircle className="dt_method_badge" />
                    Priority support
                  </span>
                </div>
              </div>

              <div className="dt_method_item">
                <div className="dt_method_icon_wrap dt_method_phone">
                  <FiPhone className="dt_method_icon" />
                </div>
                <div className="dt_method_content">
                  <h4>Phone</h4>
                  <a href="tel:+44 7471 482903"> </a>
                  <span>Mon-Fri, 9am-6pm EST</span>
                </div>
              </div>

              <div className="dt_method_item">
                <div className="dt_method_icon_wrap dt_method_whatsapp">
                  <FaWhatsapp className="dt_method_icon" />
                </div>
                <div className="dt_method_content">
                  <h4>WhatsApp</h4>
                  <a href="https://wa.me/+44 7471 482903">+44 7471 482903</a>
                  <span>
                    <FiZap className="dt_method_badge" />
                    Instant messaging
                  </span>
                </div>
              </div>
            </div>

            <div className="dt_hours_card">
              <div className="dt_hours_header">
                <FiClock className="dt_hours_icon" />
                <h4>Business Hours</h4>
              </div>
              <div className="dt_hours_grid">
                <div className="dt_hours_row">
                  <span>
                    <FiBriefcase className="dt_row_icon" />
                    Monday - Friday
                  </span>
                  <span className="dt_hours_time">9:00 AM – 6:00 PM</span>
                </div>
                <div className="dt_hours_row dt_row_highlight">
                  <span>
                    <FiHeart className="dt_row_icon" />
                    Saturday
                  </span>
                  <span className="dt_hours_time">10:00 AM – 4:00 PM</span>
                </div>
                <div className="dt_hours_row">
                  <span>
                    <FiAlertCircle className="dt_row_icon" />
                    Sunday
                  </span>
                  <span className="dt_hours_time dt_hours_closed">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="dt_form_card">
            <div className="dt_card_header">
              <FiSend className="dt_card_icon" />
              <h3>Send a Message</h3>
            </div>
            <p className="dt_card_subtitle">
              Fill out the form below. We'll respond within 2-4 hours.
            </p>

            {status.message && (
              <div className={`dt_status_${status.type}`}>
                <FiCheckCircle className="dt_status_icon" />
                {status.message}
              </div>
            )}

            <form className="dt_form" onSubmit={handleSubmit}>
              <div className="dt_form_grid">
                <div className="dt_input_group">
                  <div className="dt_input_icon">
                    <FiUsers />
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    id="dt_fullName"
                    placeholder=" "
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="dt_fullName">Full Name *</label>
                </div>

                <div className="dt_input_group">
                  <div className="dt_input_icon">
                    <FiMail />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="dt_email"
                    placeholder=" "
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="dt_email">Work Email *</label>
                </div>

                <div className="dt_input_group dt_input_full">
                  <div className="dt_input_icon">
                    <FiMessageCircle />
                  </div>
                  <input
                    type="text"
                    name="subject"
                    id="dt_subject"
                    placeholder=" "
                    value={formData.subject}
                    onChange={handleChange}
                  />
                  <label htmlFor="dt_subject">Subject</label>
                </div>

                <div className="dt_input_group dt_input_full">
                  <div className="dt_input_icon">
                    <FiSend />
                  </div>
                  <textarea
                    name="message"
                    id="dt_message"
                    rows="4"
                    placeholder=" "
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <label htmlFor="dt_message">How can we help? *</label>
                </div>
              </div>

              <button
                type="submit"
                className={`dt_submit_btn ${loading ? "dt_loading" : ""}`}
                disabled={loading}
              >
                {loading ? (
                  <>
                    Sending <span className="dt_spinner"></span>
                  </>
                ) : (
                  <>
                    Send Message <FiArrowRight className="dt_btn_icon" />
                  </>
                )}
              </button>

              <p className="dt_footer_note">
                <FiShield className="dt_note_icon" />
                Your information is encrypted and secure. We never share your
                data.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ============================================
          3. MAP SECTION
          ============================================ */}
      <section className="dt_map_section" id="locations">
        <div className="dt_map_container">
          <div className="dt_map_header">
            <div className="dt_map_badge">
              <FiMapPin className="dt_map_badge_icon" />
              OUR LOCATIONS
            </div>
            <h2 className="dt_map_title">
              Visit Our <span className="dt_gradient_text">{activeOffice.country} Office</span>
            </h2>
            <p className="dt_map_subtitle">
              <FiHeart className="dt_map_subtitle_icon" />
              We&apos;d love to meet you in person. Coffee&apos;s on us
            </p>
          </div>

          <div className="dt_map_layout">
            <div className="dt_map_wrapper">
              <iframe
                src={activeOffice.mapSrc}
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title={`Devopstrio ${activeOffice.country} Office`}
              ></iframe>
            </div>

            <div className="dt_offices_list">
              {offices.map((office) => (
                <div
                  key={office.id}
                  className={`dt_address_card_mini ${activeOffice.id === office.id ? "dt_active" : ""}`}
                  onClick={() => setActiveOffice(office)}
                >
                  <div className="dt_address_card_header">
                    <div className="dt_office_meta">
                      <h4>{office.country}</h4>
                      <span className="dt_office_type">{office.type}</span>
                    </div>
                  </div>
                  <div className="dt_address_card_body">
                    {office.locations ? (
                      <div className="dt_location_switcher">
                        {office.locations.map((loc, i) => (
                          <button
                            key={i}
                            className={`dt_loc_tab ${activeOffice.address === loc.address ? "active" : ""}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveOffice({ ...office, mapSrc: loc.mapSrc, address: loc.address });
                            }}
                          >
                            {loc.label}
                          </button>
                        ))}
                      </div>
                    ) : (
                      <div className="dt_address_actions_mini">
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="dt_directions_link_mini"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Directions <FiArrowRight />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          4. FAQ SECTION
          ============================================ */}
      <section className="dt_faq_section">
        <div className="dt_faq_container">
          <div className="dt_faq_header">
            <span className="dt_faq_badge">
              <FiCpu className="dt_faq_badge_icon" />
              KNOWLEDGE BASE
            </span>
            <h2 className="dt_faq_title">
              Frequently Asked{" "}
              <span className="dt_gradient_text">Questions</span>
            </h2>
            <p className="dt_faq_subtitle">
              Everything you need to know about working with Devopstrio
            </p>
          </div>

          <div className="dt_faq_grid">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`dt_faq_item ${activeFaq === index ? "dt_faq_active" : ""}`}
                onClick={() => toggleFaq(index)}
              >
                <div className="dt_faq_question">
                  <div className="dt_faq_number_wrap">
                    <span className="dt_faq_number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3>{faq.question}</h3>
                  <span className="dt_faq_toggle">
                    {activeFaq === index ? "−" : "+"}
                  </span>
                </div>
                {activeFaq === index && (
                  <div className="dt_faq_answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="dt_faq_footer">
            <p>
              <FiMessageCircle className="dt_faq_footer_icon" />
              Still have questions?{" "}
              <a href="#dt_contact_form">Reach out to our team →</a>
            </p>
          </div>
        </div>
      </section>

      {/* ============================================
          TRUST BADGE & CERTIFICATIONS
          ============================================ */}
      {/* <div className="dt_trust_badge">
        <div className="dt_trust_content">
          <div className="dt_certifications">
            <span className="dt_cert_item">
              <FiShield className="dt_cert_icon" />
              ISO 27001
            </span>
            <span className="dt_cert_divider">•</span>
            <span className="dt_cert_item">
              <FiCheckCircle className="dt_cert_icon" />
              SOC2 Type II
            </span>
            <span className="dt_cert_divider">•</span>
            <span className="dt_cert_item">
              <FiHeart className="dt_cert_icon" />
              HIPAA
            </span>
            <span className="dt_cert_divider">•</span>
            <span className="dt_cert_item">
              <FiGlobe className="dt_cert_icon" />
              GDPR
            </span>
          </div>
          <div className="dt_trust_stats">
            <span className="dt_stats_item">
              <FiUsers className="dt_stats_icon" />
              200+ Enterprise Clients
            </span>
            <span className="dt_stats_item">
              <FiZap className="dt_stats_icon" />
              5x Faster Deployments
            </span>
            <span className="dt_stats_item">
              <FiShield className="dt_stats_icon" />
              99.9% Uptime SLA
            </span>
          </div>
        </div>
      </div> */}
      {/* ============================================
          GLOBAL OFFICES COMPONENT
          ============================================ */}
      <GlobalOffices />
    </div>
  );
};

export default ContactPage;
