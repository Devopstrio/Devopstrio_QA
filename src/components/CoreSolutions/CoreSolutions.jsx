import "./CoreSolutions.css";
import { useEffect, useRef } from "react";

export default function HexagonGrid() {
  const hexRefs = useRef([]);

  useEffect(() => {
    // Intersection Observer for scroll animation
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { 
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    // Observe all hexagons with animate class
    const animateElements = document.querySelectorAll(".animate");
    animateElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="hex-section">
      <div className="hex-container">
        
        {/* LEFT CONTENT */}
        <div className="hex-left">
          <span className="hex-tag">Our Solutions</span>
          <h2 className="hex-title">
            Enterprise Grade <br />
            <span className="hex-title-gradient">Cloud Platform</span>
          </h2>
          <p className="hex-desc">
            We deliver secure, scalable cloud solutions that transform how 
            enterprises operate and innovate.
          </p>
          <button className="hex-btn">
            Explore All Solutions
            <span className="hex-btn-arrow">→</span>
          </button>
        </div>

        {/* RIGHT - HEXAGON GRID */}
        <div className="hex-wrapper">
          
          {/* Grey Hex Outline Background */}
          <div className="hex-grid-background"></div>
          
          {/* Hexagon 1 - Top Left */}
          <div 
            className="hex hex1"
            ref={el => hexRefs.current[0] = el}
          >
            <div className="hex-border"></div>
            <img src="/images/cloud-architecture.jpg" alt="Cloud Architecture" />
            <div className="hex-overlay">
              <h3>Cloud Architecture</h3>
              <p>Scalable, secure infrastructure</p>
            </div>
          </div>

          {/* Hexagon 2 - Top Right */}
          <div 
            className="hex hex2"
            ref={el => hexRefs.current[1] = el}
          >
            <div className="hex-border"></div>
            <img src="/images/devops.jpg" alt="DevOps" />
            <div className="hex-overlay">
              <h3>DevOps</h3>
              <p>CI/CD, automation, IaC</p>
            </div>
          </div>

          {/* Hexagon 3 - Middle Left */}
          <div 
            className="hex hex3"
            ref={el => hexRefs.current[2] = el}
          >
            <div className="hex-border"></div>
            <img src="/images/security.jpg" alt="Security" />
            <div className="hex-overlay">
              <h3>Cloud Security</h3>
              <p>Zero trust, compliance</p>
            </div>
          </div>

          {/* Hexagon 4 - Middle Right - ANIMATE ON SCROLL */}
          <div 
            className="hex hex4 animate"
            ref={el => hexRefs.current[3] = el}
          >
            <div className="hex-border"></div>
            <img src="/images/data-analytics.jpg" alt="Data Analytics" />
            <div className="hex-overlay">
              <h3>Data Analytics</h3>
              <p>Real-time insights, BI</p>
            </div>
          </div>

          {/* Hexagon 5 - Bottom Left - ANIMATE ON SCROLL */}
          <div 
            className="hex hex5 animate"
            ref={el => hexRefs.current[4] = el}
          >
            <div className="hex-border"></div>
            <img src="/images/ai-ml.jpg" alt="AI/ML" />
            <div className="hex-overlay">
              <h3>AI & Machine Learning</h3>
              <p>Predictive models, automation</p>
            </div>
          </div>

          {/* Hexagon 6 - Bottom Right - ANIMATE ON SCROLL */}
          <div 
            className="hex hex6 animate"
            ref={el => hexRefs.current[5] = el}
          >
            <div className="hex-border"></div>
            <img src="/images/consulting.jpg" alt="Consulting" />
            <div className="hex-overlay">
              <h3>Cloud Consulting</h3>
              <p>Strategy, migration, optimization</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}