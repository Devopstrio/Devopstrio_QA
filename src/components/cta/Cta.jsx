import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import './Cta.css';

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-description">
            Transform your business with our innovative solutions. Connect with us today.
          </p>
          <div className="cta-buttons">
            <button className="cta-primary-btn">
              Schedule a Demo <FiArrowRight />
            </button>
            <button className="cta-secondary-btn">Learn More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
