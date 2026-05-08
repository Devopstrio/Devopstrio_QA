import React from 'react';
import PropTypes from 'prop-types';
import { FiSearch, FiEdit3, FiCpu, FiSend } from 'react-icons/fi';
import './Pinboard.css';

/**
 * Pinboard - A dynamic process flow component with "pinned" cards and a roadmap style.
 */
const Pinboard = ({ 
  pill = "How we work", 
  title = "What Drives Us Forward", 
  subhead = "These core principles guide every decision we make and every relationship we build.",
  items = [],
  footerText = "Ready to be delivered!"
}) => {
  const stepConfig = [
    { title: "Define", icon: <FiSearch /> },
    { title: "Design", icon: <FiEdit3 /> },
    { title: "Build", icon: <FiCpu /> },
    { title: "Launch", icon: <FiSend /> }
  ];

  return (
    <section className="pinboard-section reveal">
      <div className="pinboard-container">
        <div className="pinboard-header">
          <span className="pinboard-pill">{pill}</span>
          <h2 className="pinboard-gradient-text">{title}</h2>
          <p className="pinboard-subhead">{subhead}</p>
        </div>

        <div className="pinboard-visual-container">
          <div className="pinboard-track">
            <div className="pinboard-intro-wrap">
              <div className="pinboard-intro-content">
                <h3>{footerText}</h3>
                {/* <div className="pinboard-arrow-icon">↘</div> */}
              </div>
            </div>

            <div className="pinboard-center-line">
              <div className="pinboard-line-glow"></div>
            </div>
            
            <div className="pinboard-items">
              {items.slice(0, 4).map((item, index) => (
                <div 
                  className={`pinboard-step ${index % 2 === 0 ? 'left-step' : 'right-step'}`} 
                  key={index}
                >
                  <div className="pinboard-node">
                    <div className="pinboard-core">
                      <div className="pinboard-core-inner"></div>
                    </div>
                    <div className="pinboard-pulse"></div>
                  </div>

                  <div className="pinboard-connector"></div>

                  <div className="pinboard-card">
                    <div className="pinboard-card-glow"></div>
                    <div className="pinboard-card-content">
                      <div className="pinboard-card-header">
                        <span className="pinboard-number">{`0${index + 1}`}</span>
                        <div className="pinboard-icon-box">
                          {stepConfig[index].icon}
                        </div>
                      </div>
                      <h3 className="pinboard-step-title">{stepConfig[index].title}</h3>
                      <div className="pinboard-card-inner">
                        <p className="pinboard-desc">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


Pinboard.propTypes = {
  pill: PropTypes.string,
  title: PropTypes.string,
  subhead: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  footerText: PropTypes.string,
};

export default Pinboard;
