import React, { useEffect, useState } from "react";
import "./MoseySection.css";

const MoseySection = () => {
  const [activeTab, setActiveTab] = useState("Boviet Solar");
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");

  const tabs = ["Boviet Solar", "BCLC", "TechGroup", "Paymentology"];

  // Content for each tab with Unsplash images
  const tabContent = {
    "Boviet Solar": {
      cards: [
        {
          title: "Global Supply Chain Optimization",
          description:
            "Streamlined logistics and distribution for solar modules across 20+ countries with automated inventory tracking.",
        },
        {
          title: "Sustainable Manufacturing",
          description:
            "Implemented AI-driven quality control to reduce waste and ensure top-tier solar panel efficiency.",
        },
        {
          title: "Energy Compliance",
          description:
            "Automated environmental compliance reporting to meet global renewable energy standards effortlessly.",
        },
      ],
      image:
        "./images/New/page-1.png",
      stats: ["5GW+ Deployed", "Zero Compliance Issues", "20+ Markets"],
    },
    BCLC: {
      cards: [
        {
          title: "Secure Gaming Infrastructure",
          description:
            "Enhanced security protocols for online gambling platforms, ensuring data integrity and player protection.",
        },
        {
          title: "Regulatory Assurance",
          description:
            "Automated audit trails for lottery and casino operations to meet strict government gaming regulations.",
        },
        {
          title: "High-Volume Transaction Handling",
          description:
            "Scaled infrastructure to support millions of simultaneous users and transactions during peak lottery jackpots.",
        },
      ],
      image:
        "./images/New/page-4.png",
      stats: ["100% Uptime", "Secure Transactions", "Audit Ready"],
    },
    TechGroup: {
      cards: [
        {
          title: "Managed IT Excellence",
          description:
            "Delivering 24/7 automated support and network monitoring for enterprise clients across diverse sectors.",
        },
        {
          title: "Cloud Migration Success",
          description:
            "Seamlessly migrated legacy systems to the cloud, reducing operational costs and improving scalability.",
        },
        {
          title: "Cybersecurity Fortification",
          description:
            "Deployed advanced threat detection and automated response systems to protect client data assets.",
        },
      ],
      image:
        "./images/New/page-3.png",
      stats: ["24/7 Support", "Zero Downtime", "Client Satisfaction"],
    },
    Paymentology: {
      cards: [
        {
          title: "Next-Gen Issuer Processing",
          description:
            "Enabled rapid launch of digital banking programs with flexible, cloud-native card issuing APIs.",
        },
        {
          title: "Real-Time Financial Data",
          description:
            "Provided banks with instant access to transaction data for richer customer insights and fraud prevention.",
        },
        {
          title: "Global Fintech Scale",
          description:
            "Supported expansion into new markets with multi-currency capabilities and local compliance readiness.",
        },
      ],
      image:
        "./images/New/page-2.png",
      stats: ["Global Reach", "Instant Issuance", "Fraud Protected"],
    },
  };

  const handleTabClick = (tab) => {
    if (tab === activeTab || isAnimating) return;
    
    // Determine slide direction based on tab index
    const currentIndex = tabs.indexOf(activeTab);
    const newIndex = tabs.indexOf(tab);
    setSlideDirection(newIndex > currentIndex ? "right" : "left");
    
    setIsAnimating(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);
  };

  const currentContent = tabContent[activeTab];

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  );

  const section = document.querySelector(".mosey-section");
  if (section) {
    observer.observe(section);
  }

  return () => {
    if (section) {
      observer.unobserve(section);
    }
  };
}, []);

  return (
    <section className="mosey-section">
      <div className="mosey-container">
        {/* Gradient Badge */}
        <div className="mosey-badge">TRUSTED COMPLIANCE PLATFORM</div>

        <h2 className="mosey-title">
          Driving success for{" "}
          <span className="mosey-gradient-text">industry leaders</span>{" "}
          worldwide.
        </h2>

        {/* Tabs */}
        <div className="mosey-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`mosey-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Content with slide animation based on active tab */}
        <div className="mosey-content-wrapper">
          <div 
            key={activeTab} 
            className={`mosey-content ${
              isAnimating 
                ? slideDirection === "right" 
                  ? "slide-out-left" 
                  : "slide-out-right"
                : "slide-in"
            }`}
          >
            {/* Left - Cards */}
            <div className="mosey-left">
              {currentContent.cards.map((card, index) => (
                <div
                  key={index}
                  className="mosey-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="mosey-card-gradient"></div>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>

                  {/* Stats for each card (optional) */}
                  {index === 0 && (
                    <div className="mosey-card-stats">
                      {currentContent.stats.map((stat, i) => (
                        <span key={i} className="mosey-stat-pill">
                          {stat}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right - Image with overlay */}
            <div className="mosey-right">
              <div className="mosey-image-wrapper">
                <img
                  src={currentContent.image}
                  alt={`${activeTab} infrastructure dashboard`}
                  className="mosey-image"
                />
              </div>

              {/* Image caption/badge */}
              <div className="mosey-image-caption">
                <span className="mosey-caption-dot"></span>
                {activeTab} Infrastructure Dashboard
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoseySection;