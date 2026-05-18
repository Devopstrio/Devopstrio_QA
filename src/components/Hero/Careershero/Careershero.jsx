import React, { useState } from "react";
import "./Careershero.css";

export default function CareersHero({ scrollId = "jobs-section" }) {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Deep, diverse data set for popups (600+ cubes)
  const nodes = [
    { title: "Variable inputs v2", desc: "Improved Entity reference and Email address inputs for cloud workflows.", tags: ["Feature", "Workflow"], image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=200&fit=crop" },
    { title: "Node.js 20 Support", desc: "Upgraded all core cloud services to the latest Node.js LTS standard.", tags: ["Core", "Infra"] },
    { title: "Cloud Team Expansion", desc: "Welcoming 12 new engineers across APAC and EMEA regions.", tags: ["Team", "Growth"], image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=200&fit=crop" },
    { title: "SOC2 Compliance", desc: "Successfully completed our annual security audit for all cloud layers.", tags: ["Security", "Legal"] },
    { title: "Edge Performance", desc: "Reduced cold start times by 60% with our new global edge clusters.", tags: ["Speed", "Core"], image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=200&fit=crop" },
    { title: "Multi-cloud Router", desc: "Seamless traffic switching between AWS, Azure, and GCP clusters.", tags: ["Networking", "Cloud"] },
    { title: "Auto-Scaling v3", desc: "Smarter capacity management based on real-time traffic predictions.", tags: ["Performance", "Infra"], image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?w=400&h=200&fit=crop" },
    { title: "Observability Hub", desc: "Consolidated all logs and traces into a single high-speed dashboard.", tags: ["DevOps", "Insights"] },
    { title: "K8s Optimized", desc: "Fine-tuned our Kubernetes orchestration for better resource utilization.", tags: ["Core", "Cloud"], image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=200&fit=crop" },
    { title: "Developer SDK 1.0", desc: "Launched our first public SDK for building native cloud extensions.", tags: ["Growth", "DevExp"] },
    { title: "API Gateway 2.0", desc: "Enhanced security and rate-limiting for our public endpoints.", tags: ["API", "Core"] },
    { title: "DevOps Pipeline", desc: "Reducing CI/CD wait times by 40% with smarter caching logic.", tags: ["Efficiency", "DevOps"], image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=200&fit=crop" },
    { title: "Elastic Storage", desc: "Expanding our cloud storage layers horizontally with infinite scale.", tags: ["Storage", "Core"] },
    { title: "Serverless Compute", desc: "Launching regional serverless clusters in 10 new worldwide locations.", tags: ["Cloud", "Growth"] },
    { title: "Database Sharding", desc: "Automated horizontal partitioning for high-throughput SQL clusters.", tags: ["Database", "Core"] },
    { title: "Auth Service v4", desc: "Implementing passkey support and biometric authentication flows.", tags: ["Security", "Auth"] },
    { title: "Global CDN", desc: "Deploying 50 new edge nodes to improve content delivery speed.", tags: ["Network", "Speed"] },
    { title: "AI Analytics", desc: "Predictive resource allocation using machine learning models.", tags: ["AI", "Insights"] },
    { title: "CLI Tooling", desc: "New command-line interface for faster local development cycles.", tags: ["DevExp", "Tooling"] },
    { title: "Billing Engine", desc: "Real-time usage tracking and automated invoicing for enterprise.", tags: ["Finance", "Core"] },
    { title: "Webhooks v2", desc: "Reliable event delivery with automatic retry and backoff logic.", tags: ["API", "Integration"] },
    { title: "Dark Mode UI", desc: "Full accessibility compliance for our new high-contrast dark theme.", tags: ["Design", "UX"] },
    { title: "Log Streaming", desc: "Direct integration with third-party log aggregators.", tags: ["DevOps", "Integration"] },
    { title: "Compliance Dashboard", desc: "Real-time monitoring of regulatory requirements across regions.", tags: ["Security", "Legal"] },
    { title: "Load Balancer", desc: "Advanced traffic shaping and request routing capabilities.", tags: ["Networking", "Core"] },
    { title: "Mobile SDK", desc: "Native support for iOS and Android cloud integration.", tags: ["Mobile", "Growth"] },
    { title: "Terraform Provider", desc: "Official support for infrastructure-as-code workflows.", tags: ["DevOps", "Infra"] },
    { title: "Cache Layer", desc: "In-memory caching for sub-millisecond data retrieval.", tags: ["Performance", "Core"] },
    { title: "Audit Logs", desc: "Immutable record keeping for all administrative actions.", tags: ["Security", "Compliance"] },
    { title: "Community Forum", desc: "Launching our new developer hub for peer-to-peer support.", tags: ["Community", "Growth"] },
  ];

  const cubeColors = [
    "#ce245461", // Pink
    "#1f1f1f61", // Charcoal
    "#2a2a2a61", // Lighter dark
    "#3a3a3a61", // Mid gray
    "#4a4a4a61", // Soft gray
    "#13131361", // Black
  ];

  return (
    <section className="dev-cah-hero">
      <div className="dev-cah-container">
        <div className="dev-cah-content-layer">
          <div className="dev-cah-tag">Innovate Impact Delivery</div>
          <h1 className="dev-cah-heading">
            Our mission is to build the<br /> 
            <strong>Cloud Platform</strong> for the next generation.
          </h1>
          <p className="dev-cah-description">
            We&apos;re redefining Cloud — shipping powerful,<br />
            groundbreaking features at every turn. Join us to<br />
            revolutionize how the world builds software.
          </p>

          <div className="dev-cah-actions">
            <button 
              className="dev-cah-btn-gradient" 
              onClick={() => document.getElementById(scrollId)?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Our Impact
            </button>
            <div className="dev-cah-avatar-stack">
              <img src="https://i.pravatar.cc/150?u=1" alt="Team member" />
              <img src="https://i.pravatar.cc/150?u=2" alt="Team member" />
              <img src="https://i.pravatar.cc/150?u=3" alt="Team member" />
              <div className="dev-cah-avatar-count">+130</div>
            </div>
          </div>
        </div>

        {/* Precise Stair-Step Trend Grid */}
        <div className="dev-cah-grid-visual">
          <div className="dev-cah-grid-mesh">
            {[...Array(600)].map((_, i) => {
              const COLS = 40;
              const row = Math.floor(i / COLS);
              const col = i % COLS;
              
              const rowCounts = [1, 1, 2, 3, 4, 5, 6, 8, 10, 13, 16, 19, 23, 29, 40];
              const countForThisRow = rowCounts[row] || 0;
              const isVisible = (col >= (COLS - countForThisRow));
              
              if (!isVisible) return <div key={i} className="dev-cah-grid-empty" />;

              // Pseudo-unique mapping for each cube
              const colorIdx = (i * 11) % cubeColors.length;
              const dataIdx = (i * 17) % nodes.length;
              const nodeData = nodes[dataIdx];

              // Decide popup alignment based on screen position
              const isRightSide = col > 25;
              const isLeftSide = col < 10;
              const popupClass = isRightSide ? "dev-cahx-popup-left" : isLeftSide ? "dev-cahx-popup-right" : "dev-cahx-popup-center";

              return (
                <div 
                  key={i} 
                  className="dev-cah-grid-square"
                  style={{ backgroundColor: cubeColors[colorIdx] }}
                  onMouseEnter={() => setHoveredNode({ ...nodeData, index: i, align: popupClass })}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {hoveredNode && hoveredNode.index === i && (
                    <div className={`dev-cahx-popup ${hoveredNode.align}`}>
                      {hoveredNode.image && (
                        <img src={hoveredNode.image} alt="Milestone" className="dev-cahx-popup-image" />
                      )}
                      <div className="dev-cahx-popup-content">
                        <div className="dev-cahx-popup-title">{hoveredNode.title}</div>
                        <div className="dev-cahx-popup-desc">{hoveredNode.desc}</div>
                        <div className="dev-cahx-popup-tags">
                          {hoveredNode.tags.map(tag => (
                            <span key={tag} className={`dev-cahx-popup-tag dev-cahx-tag-${tag.toLowerCase()}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="dev-cah-footer-note">
          Features, improvements, milestones over time.
        </div>
      </div>
    </section>
  );
}
