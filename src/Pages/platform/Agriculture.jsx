import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiArrowRight, 
  FiCheckCircle, 
  FiShield, 
  FiCpu, 
  FiSliders, 
  FiUserCheck, 
  FiLayers, 
  FiTrendingUp, 
  FiCalendar,
  FiChevronRight
} from "react-icons/fi";
import seedsImg from "../../assets/images/seeedsxwoiw.jpg";
import AIConsultationForm from "../../components/AIConsultationForm/AIConsultationForm";
import ClientSuccess from "../../components/Hero/ClientSuccess";
import "../../Style/platform/Agriculture.css";

export default function Agriculture() {
  const navigate = useNavigate();

  // Pricing Calculator Interactive States
  const [selectedSolution, setSelectedSolution] = useState([]);
  const [selectedStage, setSelectedStage] = useState("Idea");
  const [selectedSpecialists, setSelectedSpecialists] = useState([]);
  const [expectedDuration, setExpectedDuration] = useState(3);
  const [calculatorSubmitted, setCalculatorSubmitted] = useState(false);

  // Solutions data
  const solutionsList = ["Web", "Mobile", "Integrated platform", "Consultation / More"];
  
  // Stages data
  const stagesList = ["Idea", "Prototype/MVP", "Proof-of-concept", "R&D"];
  
  // Specialists data
  const specialistsList = ["Product Manager", "Business Analyst", "UX/UI Designer", "Architect"];

  // Toggle multiple solution type selections
  const handleSolutionToggle = (sol) => {
    if (selectedSolution.includes(sol)) {
      setSelectedSolution(selectedSolution.filter((item) => item !== sol));
    } else {
      setSelectedSolution([...selectedSolution, sol]);
    }
  };

  // Toggle multiple specialist selections
  const handleSpecialistToggle = (spec) => {
    if (selectedSpecialists.includes(spec)) {
      setSelectedSpecialists(selectedSpecialists.filter((item) => item !== spec));
    } else {
      setSelectedSpecialists([...selectedSpecialists, spec]);
    }
  };

  // Dynamic Pricing Estimator Algorithm
  const calculateEstimate = () => {
    let base = 0;
    
    // Solution base rates
    selectedSolution.forEach(sol => {
      if (sol === "Web") base += 8500;
      if (sol === "Mobile") base += 10500;
      if (sol === "Integrated platform") base += 18000;
      if (sol === "Consultation / More") base += 3500;
    });
    if (selectedSolution.length === 0) base = 5000;

    // Stage multiplier
    let multiplier = 1.0;
    if (selectedStage === "Prototype/MVP") multiplier = 1.25;
    if (selectedStage === "Proof-of-concept") multiplier = 1.15;
    if (selectedStage === "R&D") multiplier = 1.4;

    // Specialists cost
    const specialistCost = selectedSpecialists.length * 3500;

    // Duration cost
    const durationCost = expectedDuration * 2200;

    const totalMin = Math.round((base * multiplier + specialistCost + durationCost) * 0.9);
    const totalMax = Math.round((base * multiplier + specialistCost + durationCost) * 1.15);

    return { min: totalMin.toLocaleString(), max: totalMax.toLocaleString() };
  };

  const currentEstimate = calculateEstimate();

  // Metrics definitions
  const metrics = [
    { val: "3,500+", lbl: "active users / farms", desc: "Successfully managing crops and monitoring soil telemetry in real-time." },
    { val: "19", lbl: "expert AgTech engineers", desc: "Dedicated full-stack developers specializing in precision hardware routing and analytics." },
    { val: "4.9/5", lbl: "satisfaction score", desc: "Based on continuous client assessments and platform quality checks." }
  ];

  // Core capabilities definitions
  const servicesList = [
    {
      title: "Effective Livestock Management Tools",
      desc: "Harness sensor-enabled devices and real-time biometric mapping to configure remote tracking apps. Prevent herd disease spread with high-frequency thermal warnings.",
      icon: <FiUserCheck />
    },
    {
      title: "Next-Gen Agriculture Drone Software",
      desc: "Automate high-speed spatial mapping, crop health analytics, and route algorithms. Program low-latency payload controls and physical auto-steer sequences.",
      icon: <FiCpu />
    },
    {
      title: "Agricultural Business Intelligence",
      desc: "Structure deep analytical charts and predictive yields to make data-driven decisions. Feed real-time time-series telemetry data directly into custom ERP screens.",
      icon: <FiTrendingUp />
    }
  ];

  // Why choose definitions
  const whyChooseList = [
    {
      title: "Industry expertise",
      desc: "Our team deeply understands regional farming dynamics, physical IoT gateway protocols (OPC-UA, MQTT), and ISO agricultural software standards."
    },
    {
      title: "Agile approach",
      desc: "We employ modern agile pipelines to deliver working iterations rapidly and iterate based on direct feedback and physical test cycles."
    },
    {
      title: "Convenient transfer",
      desc: "Ensure seamless handoffs of secure repository access, automated CI/CD pipeline deployments, and cloud platform hosting configurations."
    }
  ];

  return (
    <div className="plt-agri-page">
      {/* 1. Hero Section */}
      <ClientSuccess />
      
      <section className="plt-agri-hero">
        <div className="plt-agri-container">
          <div className="plt-agri-hero-layout">
            <h1 className="plt-agri-hero-h1">
              High-End Agriculture <br />
              <span className="plt-agri-gradient-text">Software Development</span>
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Hero Subtitle & Metrics Section */}
      <section className="plt-agri-metrics-section">
        <div className="plt-agri-container">
          <div className="plt-agri-metrics-grid">
            <div className="plt-agri-metrics-left">
              <h2>On-demand software development for the Agriculture sector</h2>
            </div>
            
            <div className="plt-agri-metrics-right">
              {metrics.map((item, idx) => (
                <div className="plt-agri-metric-card" key={idx}>
                  <h3>{item.val}</h3>
                  <div className="plt-agri-metric-lbl">{item.lbl}</div>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="plt-agri-services-section">
        <div className="plt-agri-container">
          <div className="plt-agri-section-header">
            <h2>Agriculture Software Development Services</h2>
            <p>
              Devopstrio designs tailored and hands-on AgTech solutions and applications for effective and modern agriculture.
            </p>
          </div>

          <div className="plt-agri-services-grid">
            {servicesList.map((srv, idx) => (
              <div className="plt-agri-service-card" key={idx}>
                <div className="plt-agri-service-icon-wrap">{srv.icon}</div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Call to Action Intermediate Banner */}
      <section className="plt-agri-cta-banner">
        <div className="plt-agri-container">
          <div className="plt-agri-cta-card">
            <div className="plt-agri-cta-left">
              <h3>Schedule a call to assess your IT project and discuss how we can help you implement it</h3>
            </div>
            <button className="plt-agri-btn-cta" onClick={() => navigate("/contact")}>
              Request a Call <FiArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Section */}
      <section className="plt-agri-why-section">
        <div className="plt-agri-container">
          <div className="plt-agri-section-header">
            <h2>Why choose Devopstrio for Agriculture Software Development</h2>
            <p>
              As a trusted custom AgTech software partner, we are ready for challenges of any scale. We build secure cloud nodes, coordinate remote mapping, and optimize livestock asset arrays.
            </p>
          </div>

          <div className="plt-agri-why-grid">
            {whyChooseList.map((item, idx) => (
              <div className="plt-agri-why-card" key={idx}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5.5. Reliable Partner Section (Black Theme mockup style) */}
      <section className="plt-agri-partner-section">
        <div className="plt-agri-container">
          <div className="plt-agri-partner-header-row">
            <div className="plt-agri-partner-header-left">
              <h2>Your reliable partner for sustainable AgTech solutions</h2>
            </div>
            <div className="plt-agri-partner-header-right">
              <p>
                At Devopstrio, we're more than just a software development firm — we're your strategic partner in modern agriculture. Our custom platforms are engineered to meet the dynamic needs of remote farms, food processors, and international suppliers.
              </p>
            </div>
          </div>

          <div className="plt-agri-partner-features">
            <div className="plt-agri-partner-feature-card">
              <div className="plt-agri-partner-feat-icon">
                <FiCalendar />
              </div>
              <h3>Our Story</h3>
              <p>
                Devopstrio started with a vision to make precision spatial analysis and edge hardware integrations accessible for farms of all scales.
              </p>
            </div>

            <div className="plt-agri-partner-feature-card">
              <div className="plt-agri-partner-feat-icon">
                <FiCheckCircle />
              </div>
              <h3>Our Mission</h3>
              <p>
                To empower agricultural businesses with high-fidelity soil telemetry, real-time drone route logs, and unified ERP dashboard panels.
              </p>
            </div>

            <div className="plt-agri-partner-feature-card">
              <div className="plt-agri-partner-feat-icon">
                <FiShield />
              </div>
              <h3>What Sets Us Apart</h3>
              <p>
                Our unique engineering model pairs specialized AgTech hardware architects directly with senior React and security developers.
              </p>
            </div>
          </div>

          {/* Landscape Wide Scenery Banner */}
          <div className="plt-agri-partner-banner-wrap">
            <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80" alt="Precision sustainable AgTech crop fields" />
          </div>

          {/* Metrics Row at the bottom */}
          <div className="plt-agri-partner-metrics-row">
            <div className="plt-agri-partner-metric-item">
              <h4>3500+</h4>
              <p>Farms Registered</p>
            </div>
            <div className="plt-agri-partner-metric-divider"></div>
            
            <div className="plt-agri-partner-metric-item">
              <h4>99%</h4>
              <p>Client Satisfaction</p>
            </div>
            <div className="plt-agri-partner-metric-divider"></div>

            <div className="plt-agri-partner-metric-item">
              <h4>50+</h4>
              <p>Completed Systems</p>
            </div>
            <div className="plt-agri-partner-metric-divider"></div>

            <div className="plt-agri-partner-metric-item">
              <h4>10+</h4>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </section>


      {/* 7. Book Free IT Consultation Form */}
      <section className="plt-agri-consultation-section">
        <div className="plt-agri-container" style={{ padding: "0" }}>
          <AIConsultationForm />
        </div>
      </section>
    </div>
  );
}
