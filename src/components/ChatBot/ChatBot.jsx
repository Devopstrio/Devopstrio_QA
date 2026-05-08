import { useEffect, useState } from "react";
import {
  FiMessageCircle,
  FiX,
  FiMail,
  FiPhone,
  FiBriefcase,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

import "./ChatBot.css";

export default function WhatsAppAlert() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("waAlertShown");
    if (alreadyShown) return;

    const showTimer = setTimeout(() => {
      setOpen(false);
      sessionStorage.setItem("waAlertShown", "true");
    }, 1000);

    return () => clearTimeout(showTimer);
  }, []);

  return (
    <>
      {/* Floating button */}
      <button
        className="wa-float-btn"
        onClick={() => setOpen(!open)}
        aria-label="Open support options"
      >
        <FiMessageCircle />
      </button>

      {/* Popup card */}
      {open && (
        <div className="wa-panel">
          {/* Header */}
          <div className="wa-panel-header">
            <h4>How can we help you?</h4>
            <button className="wa-close" onClick={() => setOpen(false)}>
              <FiX />
            </button>
          </div>

          {/* Body */}
          <div className="wa-panel-body">
            {/* Phone */}
            <a href="tel:+04612940062" className="wa-item">
              <FiPhone className="wa-icon" />
              <span>Call: 0461-2940062</span>
            </a>

            {/* Email */}
            <a href="mailto:info@devopstrioglobal.com" className="wa-item">
              <FiMail className="wa-icon" />
              <span>Email</span>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/8072357581"
              target="_blank"
              rel="noreferrer"
              className="wa-item"
            >
              <FaWhatsapp className="wa-icon wa-whatsapp" />
              <span>Chat with on WhatsApp</span>
            </a>

            {/* Job / Enquiry */}
            <a href="/contact" className="wa-item">
              <FiBriefcase className="wa-icon" />
              <span>Job / Enquiry</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
