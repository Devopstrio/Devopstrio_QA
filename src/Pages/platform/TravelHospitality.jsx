import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  FiArrowRight, 
  FiCompass, 
  FiShield, 
  FiTrendingUp, 
  FiGlobe, 
  FiCalendar, 
  FiCheckCircle,
  FiLayers,
  FiUserCheck,
  FiSliders,
  FiUser
} from "react-icons/fi";
import AIConsultationForm from "../../components/AIConsultationForm/AIConsultationForm";
import "../../Style/platform/TravelHospitality.css";

export default function TravelHospitality() {
  const navigate = useNavigate();

  // 1. Core Services Selector States
  const servicesOptions = [
    "Booking Engines",
    "Channel Manager",
    "Dynamic pricing",
    "GDS Integration",
    "Hotel PMS",
    "Security & Multi-Currency"
  ];
  const [selectedServices, setSelectedServices] = useState(["Booking Engines", "GDS Integration"]);

  const toggleService = (srv) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter(s => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  // 2. IT Expertise Selector States
  const expertiseCards = [
    { title: "Booking Engines", desc: "Low-latency seat booking and room availability locking systems." },
    { title: "Hotel Management Systems", desc: "Automate room check-ins, guest billing, and key card integrations." },
    { title: "Travel Portals", desc: "Consumer-facing B2C and B2B search platforms loaded with GDS data feeds." },
    { title: "Payment Management Software", desc: "Mitigate card chargeback risks with robust payment ledger hubs." },
    { title: "Review & CRM Development", desc: "Leverage automated email alerts and dynamic customer reviews widgets." },
    { title: "Built-In App Development", desc: "Native iOS and Android mobile software equipped with offline itinerary lookups." }
  ];
  const [selectedExpertise, setSelectedExpertise] = useState(["Booking Engines"]);

  const toggleExpertise = (title) => {
    if (selectedExpertise.includes(title)) {
      setSelectedExpertise(selectedExpertise.filter(e => e !== title));
    } else {
      setSelectedExpertise([...selectedExpertise, title]);
    }
  };

  // 3. Pricing Calculator Interactive States
  const solutionsList = [
    "Sabre GDS Broker",
    "Hotel PMS System",
    "B2C Travel Portal",
    "Loyalty Reward System"
  ];
  const stagesList = ["Idea stage", "Prototype built", "Legacy modernization"];
  const specialistsList = [
    "Microservice Architect",
    "React/Web Developer",
    "Cloud DevOps Specialist",
    "Security Auditor"
  ];

  const [selectedSolution, setSelectedSolution] = useState(["Sabre GDS Broker"]);
  const [selectedStage, setSelectedStage] = useState("Idea stage");
  const [selectedSpecialists, setSelectedSpecialists] = useState(["Microservice Architect"]);
  const [expectedDuration, setExpectedDuration] = useState(3);
  const [calculatorSubmitted, setCalculatorSubmitted] = useState(false);

  // Dynamic estimate calculation
  const calculateEstimate = () => {
    let baseMin = 12000;
    let baseMax = 20000;

    // Solution weights
    selectedSolution.forEach(sol => {
      if (sol === "Sabre GDS Broker") { baseMin += 8000; baseMax += 15000; }
      if (sol === "Hotel PMS System") { baseMin += 6000; baseMax += 12000; }
      if (sol === "B2C Travel Portal") { baseMin += 5000; baseMax += 10000; }
      if (sol === "Loyalty Reward System") { baseMin += 4000; baseMax += 8000; }
    });

    // Stage weight multiplier
    let multiplier = 1.0;
    if (selectedStage === "Prototype built") multiplier = 0.85;
    if (selectedStage === "Legacy modernization") multiplier = 1.25;

    // Specialists
    selectedSpecialists.forEach(spec => {
      if (spec === "Microservice Architect") { baseMin += 4000; baseMax += 7000; }
      if (spec === "React/Web Developer") { baseMin += 2500; baseMax += 5000; }
      if (spec === "Cloud DevOps Specialist") { baseMin += 3500; baseMax += 6000; }
      if (spec === "Security Auditor") { baseMin += 3000; baseMax += 5500; }
    });

    // Duration scaling
    baseMin = Math.round(baseMin * multiplier * (expectedDuration / 3));
    baseMax = Math.round(baseMax * multiplier * (expectedDuration / 3));

    return { min: baseMin.toLocaleString(), max: baseMax.toLocaleString() };
  };

  const currentEstimate = calculateEstimate();

  return (
    <div className="plt-travel-page">
      
      {/* 1. Hero Banner Section */}
      <section className="plt-travel-hero-new">
        <div className="plt-travel-hero-overlay"></div>
        <div className="plt-travel-container plt-travel-hero-content">
          <h1>Custom Travel & Hospitality <br />Software Development</h1>
        </div>
      </section>

      {/* 2. Robust Metrics Section */}
      <section className="plt-travel-metrics-new">
        <div className="plt-travel-container">
          <div className="plt-travel-metrics-grid-new">
            <div className="plt-travel-metrics-left-new">
              <h2>Robust software for the Travel & Hospitality industry</h2>
            </div>
            <div className="plt-travel-metrics-right-new">
              <div className="plt-travel-metric-card-new">
                <h3>19</h3>
                <p>active developers</p>
              </div>
              <div className="plt-travel-metric-card-new">
                <h3>70+</h3>
                <p>client systems</p>
              </div>
              <div className="plt-travel-metric-card-new">
                <h3>50+</h3>
                <p>travel portals</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Custom Software Selector Section */}
      <section className="plt-travel-core-selector">
        <div className="plt-travel-container">
          <div className="plt-travel-selector-layout">
            <div className="plt-travel-selector-left">
              <h2>Custom software for Travel & Hospitality</h2>
              <p>
                Select your required components below to build a dynamic feature package. Our developers integrate low-latency reservation engines with complete data protection and GDS support.
              </p>

              <div className="plt-travel-services-checklist">
                {servicesOptions.map((srv, idx) => {
                  const isChecked = selectedServices.includes(srv);
                  return (
                    <div 
                      key={idx} 
                      className={`plt-travel-check-item ${isChecked ? "active" : ""}`}
                      onClick={() => toggleService(srv)}
                    >
                      <span className="plt-travel-checkbox-icon">
                        {isChecked ? "✓" : ""}
                      </span>
                      <label>{srv}</label>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="plt-travel-selector-right">
              <div className="plt-travel-summary-card">
                <h4>Summary of your request</h4>
                <div className="plt-travel-summary-tags">
                  {selectedServices.length === 0 ? (
                    <p style={{ color: "#9ca3af", fontStyle: "italic" }}>No components selected yet.</p>
                  ) : (
                    selectedServices.map((srv, idx) => (
                      <span key={idx} className="plt-travel-summary-tag">
                        {srv}
                      </span>
                    ))
                  )}
                </div>
                <button className="plt-travel-summary-btn" onClick={() => navigate("/contact")}>
                  Estimate Component Package
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. IT Expertise Selector Section */}
      <section className="plt-travel-expertise">
        <div className="plt-travel-container">
          <div className="plt-travel-section-header">
            <h2>IT expertise for Travel & Hospitality</h2>
            <p>Empower your business with high-fidelity components built by professional cloud developers.</p>
          </div>

          <div className="plt-travel-expertise-grid">
            {expertiseCards.map((card, idx) => {
              const isSelected = selectedExpertise.includes(card.title);
              return (
                <div 
                  key={idx} 
                  className={`plt-travel-expertise-card ${isSelected ? "active" : ""}`}
                  onClick={() => toggleExpertise(card.title)}
                >
                  <div className="plt-travel-expertise-card-header">
                    <h3>{card.title}</h3>
                    <span className="plt-travel-card-check">
                      {isSelected ? "✓" : "+"}
                    </span>
                  </div>
                  <p>{card.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="plt-travel-expertise-bar">
            <span>Select professional services for your software development project.</span>
            <button className="plt-travel-btn-cta" onClick={() => navigate("/contact")}>
              Request Selected ({selectedExpertise.length})
            </button>
          </div>
        </div>
      </section>

      {/* 5. Intermediate Call to Action Banner */}
      <section className="plt-travel-cta-banner-new">
        <div className="plt-travel-container">
          <div className="plt-travel-cta-box-new">
            <h2>Schedule a call to assess and discuss your IT project</h2>
            <button className="plt-travel-btn-cta" onClick={() => navigate("/contact")}>
              Request a Call
            </button>
          </div>
        </div>
      </section>

      {/* 6. Case Studies Section */}
      <section className="plt-travel-cases">
        <div className="plt-travel-container">
          <div className="plt-travel-section-header" style={{ marginBottom: "56px" }}>
            <h2>Travel & Hospitality case studies</h2>
            <p>
              Assessing a dynamic range of travelers' needs across the globe makes us build beautifully resilient booking systems that scale cleanly.
            </p>
          </div>

          <div className="plt-travel-cases-row">
            <div className="plt-travel-case-info">
              <span className="plt-travel-case-tag">Booking Platform</span>
              <h3>Plug-In for Offering Personalized Trips</h3>
              <p>
                We built a customized Recommendation Engine that suggests custom travel bundles based on previous search trends, loyalty profiles, and real-time flight inventory logs.
              </p>
              <a href="#case" onClick={() => navigate("/insights-knowledge/case-studies")} className="plt-travel-case-link">
                Read case study <FiArrowRight />
              </a>
            </div>

            <div className="plt-travel-case-img-wrap">
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80" 
                alt="Case study travel adventure scenery" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Travel Booking Journey Section (Mockup design style) */}
      <section className="plt-travel-journey-section">
        <div className="plt-travel-container">
          <div className="plt-travel-journey-header">
            <h2>Your seamless booking journey starts here</h2>
            <p>
              Our custom Travel & Hospitality software is designed to keep your reservation flows organized and low-latency with minimal effort.
            </p>
          </div>

          <div className="plt-travel-journey-grid">
            {/* Left Points */}
            <div className="plt-travel-journey-col">
              <div className="plt-travel-journey-card">
                <div className="plt-travel-journey-icon-box">
                  <FiCompass />
                </div>
                <h4>Sign Up & Set Up</h4>
                <p>Configure your GDS keys and start planning booking itineraries effortlessly.</p>
              </div>

              <div className="plt-travel-journey-card">
                <div className="plt-travel-journey-icon-box">
                  <FiSliders />
                </div>
                <h4>Track Progress</h4>
                <p>Use unified reservation boards and analytics dashboards to visualize dynamic sales.</p>
              </div>
            </div>

            {/* Central Portrait */}
            <div className="plt-travel-journey-portrait-wrap">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
                alt="Travel operations manager specialist portrait" 
              />
            </div>

            {/* Right Points */}
            <div className="plt-travel-journey-col">
              <div className="plt-travel-journey-card">
                <div className="plt-travel-journey-icon-box">
                  <FiCalendar />
                </div>
                <h4>Create & Assign Tasks</h4>
                <p>Manage reservations with live categories, check-in deadlines, and agent priorities.</p>
              </div>

              <div className="plt-travel-journey-card">
                <div className="plt-travel-journey-icon-box">
                  <FiTrendingUp />
                </div>
                <h4>Achieve More</h4>
                <p>Stay reliable under huge customer traffic spikes with automated server scalability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="plt-travel-testimonials">
        <div className="plt-travel-container">
          <div className="plt-travel-section-header">
            <h2>Testimonials</h2>
            <p>See what experts in the Travel & Hospitality sector say about our services</p>
          </div>

          <div className="plt-travel-testimonial-card">
            <p className="plt-travel-quote">
              "The service is outstanding. They provided us a custom, reliable, and secure booking platform that handle over 100k requests with absolute ease."
            </p>
            <div className="plt-travel-testimonial-author">
              <div className="plt-travel-avatar">
                <FiUser />
              </div>
              <div>
                <h5>John Davis</h5>
                <span>Chief Technology Officer at TravelGo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Book Free tech consultation Section */}
                    <AIConsultationForm />


    </div>
  );
}
