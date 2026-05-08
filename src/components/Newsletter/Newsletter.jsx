import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  FaBell,
  FaFileAlt,
  FaRocket,
  FaEnvelope,
  FaMicrosoft,
  FaAws,
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import "./Newsletter.css";
import CategoryPopup from "./CategoryPopup";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("dt-visible");
        }
      });
    }, observerOptions);

    const section = document.querySelector(".dt-newsletter-section");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const handleSubscribe = () => {
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

    setMessage("");
    setShowPopup(true);
  };

  return (
    <>
      <section className="dt-newsletter-section">
        <div className="dt-container">
          <div className="dt-newsletter-wrapper">
            <div className="dt-newsletter-left">
              <span className="dt-badge">STAY UPDATED</span>
              <h2>Never Miss an Insight</h2>
              <p>
                Join 10,000+ DevOps professionals who get our latest articles,
                research, and industry trends delivered weekly.
              </p>

              <div className="dt-benefits-list">
                <div className="dt-benefit-item">
                  <FaBell className="dt-benefit-icon" />
                  <span>Weekly DevOps digest</span>
                </div>

                <div className="dt-benefit-item">
                  <FaFileAlt className="dt-benefit-icon" />
                  <span>Exclusive whitepapers</span>
                </div>

                <div className="dt-benefit-item">
                  <FaRocket className="dt-benefit-icon" />
                  <span>Early access to events</span>
                </div>
              </div>
            </div>

            <div className="dt-newsletter-right">
              <div className="dt-subscribe-form">
                <h3>Subscribe to our newsletter</h3>

                <div className="dt-form-group">
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="dt-email-input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <button
                    className="dt-subscribe-btn"
                    onClick={handleSubscribe}
                    disabled={loading}
                  >
                    {loading ? "Subscribing..." : "Subscribe"} <FaEnvelope />
                  </button>
                </div>

                {message && <p className="dt-message">{message}</p>}

                <p className="dt-privacy-note">
                  By subscribing, you agree to our Privacy Policy and consent
                  to receive updates from our company.
                </p>

                <div className="dt-social-proof">
                  <span className="dt-trusted-by">
                    Trusted by professionals from
                  </span>

                  <div className="dt-company-logos">
                    <FaMicrosoft />
                    <FaAws />
                    <FaGoogle />
                    <FaGithub />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popup for category selection */}
      {showPopup && (
        <CategoryPopup
          email={email}
          closePopup={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default Newsletter;