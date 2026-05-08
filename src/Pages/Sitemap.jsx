import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import "../Style/Sitemap.css";

const Sitemap = () => {
  // Simple scroll drag logic for the canvas
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const startDragging = (e) => {
    setIsDragging(true);
    if (!containerRef.current) return;
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const drag = (e) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Drag speed
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <Helmet>
        <title>Sitemap | Devopstrio UK</title>
        <meta
          name="description"
          content="Visual user flow and sitemap for navigating the Devopstrio architecture."
        />
      </Helmet>

      <div className="sitemap-flow-page">
        <div className="ambient-glow"></div>
        
        <div className="sitemap-container">
          
          <motion.div 
            className="sitemap-intro"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="intro-tag">(8) Devopstrio User Flow</span>
            <h1>Site Flow</h1>
            <p>
              We employ User Flows as visual roadmaps, illustrating the step-by-step journey a user undertakes to accomplish tasks, access resources, or achieve goals within the Devopstrio ecosystem.
            </p>
          </motion.div>

          {/* Draggable Tree Canvas */}
          <motion.div 
            className="tree-canvas"
            ref={containerRef}
            onMouseDown={startDragging}
            onMouseMove={drag}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flow-tree">
              <ul>
                <li>
                  <Link to="/" className="node-pill"><div className="node-dot"></div>Devopstrio</Link>
                  <ul>
                    
                    {/* Navigation */}
                    <li>
                      <div className="node-pill"><div className="node-dot"></div>Main Navigation</div>
                      <ul>
                        <li><Link to="/" className="node-pill active">Home Screen</Link></li>
                        <li><Link to="/about" className="node-pill">About Us</Link></li>
                        <li><Link to="/clients" className="node-pill">Clients</Link></li>
                        <li><Link to="/careers" className="node-pill">Careers</Link></li>
                        <li><Link to="/contact" className="node-pill">Contact Us</Link></li>
                      </ul>
                    </li>

                    {/* Services */}
                    <li>
                      <div className="node-pill"><div className="node-dot"></div>Services Ecosystem</div>
                      <ul>
                        <li>
                          <Link to="/services" className="node-pill active">Cloud & DevOps</Link>
                          <ul>
                            <li><Link to="/services/cloud-architecture" className="node-pill">Architecture</Link></li>
                            <li><Link to="/services/cloud-migration" className="node-pill">Migration</Link></li>
                            <li><Link to="/services/multi-cloud" className="node-pill">Multi-Cloud</Link></li>
                            {/* <li><Link to="/services/gitops" className="node-pill">GitOps</Link></li> */}
                            <li><Link to="/services/devops-enablement" className="node-pill">Enablement</Link></li>
                            <li><Link to="/services/cicd" className="node-pill">CI/CD</Link></li>
                            <li><Link to="/services/iac" className="node-pill">IaC</Link></li>
                            {/* <li><Link to="/services/serverless" className="node-pill">Serverless</Link></li> */}
                          </ul>
                        </li>
                        <li>
                          <Link to="/services" className="node-pill active">Security Focus</Link>
                          <ul>
                            <li><Link to="/services/security" className="node-pill">Cloud Security</Link></li>
                            <li><Link to="/services/iam" className="node-pill">IAM Setup</Link></li>
                            <li><Link to="/services/compliance" className="node-pill">Compliance</Link></li>
                            <li><Link to="/services/threat-detection" className="node-pill">Threat Detection</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    {/* Platform & Marketplace */}
                    <li>
                      <div className="node-pill"><div className="node-dot"></div>Platform & Ecosystem</div>
                      <ul>
                        <li><Link to="/platform" className="node-pill">Platforms Hub</Link></li>
                        <li><Link to="/ecosystem" className="node-pill">Partners</Link></li>
                        <li><Link to="/marketplace" className="node-pill active">Marketplace</Link></li>
                      </ul>
                    </li>

                    {/* Insights */}
                    <li>
                      <div className="node-pill"><div className="node-dot"></div>Content & Media</div>
                      <ul>
                        <li>
                          <Link to="/insights" className="node-pill active">Insights</Link>
                          <ul>
                            <li><Link to="/insights-knowledge/blogs" className="node-pill">Blogs</Link></li>
                            <li><Link to="/insights-knowledge/case-studies" className="node-pill">Case Studies</Link></li>
                            <li><Link to="/insights-knowledge/newsletters" className="node-pill">Newsletters</Link></li>
                            <li><Link to="/insights-knowledge/podcasts" className="node-pill">Podcasts</Link></li>
                          </ul>
                        </li>
                        <li>
                          <div className="node-pill">News & Events</div>
                          <ul>
                            <li><Link to="/events" className="node-pill">All Events</Link></li>
                            <li><Link to="/news-events/company-announcements" className="node-pill">Announcements</Link></li>
                          </ul>
                        </li>
                      </ul>
                    </li>

                    {/* Life At */}
                    <li>
                      <div className="node-pill"><div className="node-dot"></div>Life at Devopstrio</div>
                      <ul>
                        <li><Link to="/life-at/celebrations" className="node-pill">Celebrations</Link></li>
                        <li><Link to="/life-at/team-culture" className="node-pill">Culture</Link></li>
                        <li><Link to="/life-at/community" className="node-pill">Community</Link></li>
                      </ul>
                    </li>

                    {/* Legal */}
                    <li>
                      <div className="node-pill"><div className="node-dot"></div>Legal Info</div>
                      <ul>
                        <li><Link to="/privacy-policy" className="node-pill">Privacy Policy</Link></li>
                        <li><Link to="/terms-of-service" className="node-pill">Terms of Service</Link></li>
                        <li><Link to="/cookie-policy" className="node-pill">Cookie Policy</Link></li>
                        <li><Link to="/disclaimer" className="node-pill">Disclaimer</Link></li>
                      </ul>
                    </li>

                  </ul>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Sitemap;