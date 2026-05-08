import React, { useState, useEffect } from "react";
import {
  FiStar,
  FiTrendingUp,
  FiGlobe,
  FiUsers,
  FiAward,
  FiHeart,
  FiCpu,
} from "react-icons/fi";
import "./Milestones.css";

const Milestones = () => {
  const [activeYearIndex, setActiveYearIndex] = useState(0);

  const milestones = [
    {
      year: "2019",
      title: "Origins in Bangalore, India",
      description:
        "We opened a small office in Bangalore, India, to reach clients worldwide through platforms like Upwork. This move helped us grow from a startup into a thriving small business, expanding both our reach and impact in the global market.",
      color: "#F4D7C1",
    },
    {
      year: "2020",
      title: "Global Expansion: London Headquarters",
      description:
        "Amid the challenges of the COVID-19 pandemic, we took a bold step and opened a new office in London—now our global headquarters. This move helped us expand into the UK market, with a clear focus on cloud transformation for industries like law, oil & gas, and banking. By zeroing in on these sectors, we deliver smart, secure, and efficient tech solutions that truly make a difference. With our base in London, we’re building stronger partnerships and reaching more clients in today’s fast-changing digital world..",
      color: "#F4D7C1",
    },
    {
      year: "2021",
      title: "Business Expansion and Strategic Focus",
      description:
        "Our focus has grown beyond just cloud transformation; we now embrace a full multi-cloud strategy, working across Azure, AWS, and Google Cloud Platform (GCP). Alongside this, we’ve expanded into the healthcare and banking sectors, delivering custom solutions designed to meet the unique challenges and opportunities of these critical industries.",
      color: "#F4D7C1",
    },
    {
      year: "2023",
      title: "Product Services",
      description:
        "With talented remote teams across India, the US, and the UK, we’ve built a suite of smart, industry-focused products for healthcare, banking, and retail. In healthcare, our solutions boost patient care and streamline operations. In banking, we enhance service delivery and strengthen security. And in retail, we help create better customer experiences and smarter inventory systems. This global collaboration lets us tailor every solution to real-world industry needs, without compromising on quality.",
      color: "#F4D7C1",
    },
    {
      year: "2024",
      title: "Opened a new office in the US",
      description:
        "We’re excited to share our plans to expand in the U.S. as we double down on AI-driven solutions and multi-cloud expertise. This next chapter will help us serve our clients even better and meet the rising demand for smart, scalable technologies in a rapidly evolving market.",
      color: "#F4D7C1",
    },
    {
      year: "2025",
      title: "Expansion in Offshore Capacity & Strategic Partner Empowerment",
      description:
         "We have strategically expanded our operational footprint to support our growing global customer base and expanding portfolio of Data & AI solutions. This includes inauguration a new office in the United States and two additional branch offices in Tamil Nadu, India. As part of our commitment to scalability and customer success, we are ramping up both our offshore and onshore delivery teams. This expansion enables us to: -> Accelerate time-to-market for enterprise-grade Data & AI products. -> Enhance support coverage across multiple time zones.-> Leverage regional talent pools for specialised skill sets.-> Strengthen strategic partnerships through co-innovation and shared delivery models.By increasing headcount and investing in capability centers, we are future-proofing our service delivery and ensuring that our clients receive consistent, high-quality, and scalable solutions tailored to their evolving needs.",      
      color: "#F4D7C1",
    },
    {
      year: "2026",
      title: "Evolution",
      description: 
        "We focused on strengthening global operations, enhancing AI and automation capabilities, and deepening enterprise partnerships. This year reflects smarter scaling, stronger execution, and measurable global impact.",
      color: "#F4D7C1",
    }
  ];

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveYearIndex((prevIndex) => (prevIndex + 1) % milestones.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [milestones.length]);

  return (
    <section className="ms-timeline-section reveal">
      <div className="ms-container">
        <div className="ms-inner">
          {/* Left Navigation */}
          <div className="ms-nav">
            {milestones.map((ms, idx) => (
              <button
                key={idx}
                className={`ms-nav-btn ${activeYearIndex === idx ? "active" : ""}`}
                onClick={() => setActiveYearIndex(idx)}
              >
                <span className="ms-nav-dot"></span>
                {ms.year}
              </button>
            ))}
          </div>

          {/* Main Display Area */}
          <div className="ms-main">
            <div className="ms-year-hero" key={activeYearIndex}>
              {milestones[activeYearIndex].year}
            </div>
            
            <div className="ms-content-box" key={`content-${activeYearIndex}`}>
              <h3 className="ms-title">{milestones[activeYearIndex].title}</h3>
              <p className="ms-desc">{milestones[activeYearIndex].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;
