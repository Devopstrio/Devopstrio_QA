import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cta.css";

const Cta = ({ 
  heading = "Ready to Transform Your Infrastructure?", 
  description = "Join 200+ companies that have modernized their cloud operations with DevOpsTrio." 
}) => {
  const navigate = useNavigate();

  return (
    <section className="cta-section">
      <div className="dt-container">
        <div className="cta-content">
          <h2 className="cta-heading">
            {heading}
          </h2>
          <p className="cta-description">
            {description}
          </p>
          <div className="cta-buttons">
            <button
              className="cta-btn cta-primary"
              onClick={() => navigate("/careers")}
            >
              Start Your Journey
            </button>
            <button
              className="cta-btn cta-secondary"
              onClick={() => navigate("/contact")}
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
