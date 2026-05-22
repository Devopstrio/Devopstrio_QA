import React, { useState } from "react";
import "./CSRPage.css";
import mistyForest from "../assets/images/csr_misty_forest.png";
import mainTeam from "../assets/images/csr_main_team.png";
import archedPerson from "../assets/images/csr_arched_person.png";
import { 
  Leaf, 
  Cpu, 
  TrendingDown, 
  Trees, 
  Zap, 
  Sparkles, 
  ShieldCheck, 
  Check, 
  Globe, 
  ArrowRight, 
  Mail, 
  User, 
  Building,
  MapPin,
  ChevronDown
} from "lucide-react";

export default function CSRPage() {
  const [cloudBudget, setCloudBudget] = useState(25000);
  const [auditSubmitted, setAuditSubmitted] = useState(false);
  const [auditData, setAuditData] = useState({ name: "", email: "", company: "" });
  const [openFaq, setOpenFaq] = useState(null);

  // Realistic carbon and energy savings logic
  const co2Saved = ((cloudBudget * 12 * 0.0005) * 0.45).toFixed(1);
  const treesPlanted = Math.round(co2Saved * 45);
  const coalPrevented = Math.round(co2Saved * 1102); // ~1102 lbs of coal burned per ton of CO2

  const handleAuditSubmit = (e) => {
    e.preventDefault();
    if (auditData.name && auditData.email) {
      setAuditSubmitted(true);
    }
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      q: "How does cloud optimization reduce our corporate carbon footprint?",
      a: "Optimizing cloud assets reduces energy consumption at the underlying physical data centers, which directly prevents greenhouse gas emissions from non-renewable energy grids that power them."
    },
    {
      q: "What does the free green cloud audit include?",
      a: "Our certified systems engineers analyze your hosting telemetry, identify idle VM resource rates, estimate potential carbon cuts, and provide a clear optimization action plan to reduce both waste compute and monthly costs."
    },
    {
      q: "How do you calculate our projected tree plantation offsets?",
      a: "We use standard Greenhouse Gas (GHG) Protocols to convert saved CPU kilowatt-hours to equivalent metric tons of CO₂, then map that directly to verified ecological absorption capacity."
    },
    {
      q: "Is there any performance cost to running eco-conscious infrastructure?",
      a: "None at all. By utilizing modern serverless patterns, aggressive autoscaling, and efficient containerization, we actually improve application response times and scale seamlessly to meet demand spikes."
    }
  ];

  return (
    <main className="csr-page-root">
      {/* Background Animated Elements */}
      <div className="csr-page-grid"></div>
      <div className="csr-page-glow-top"></div>
      <div className="csr-page-glow-mid"></div>

      {/* BRAND NEW HERO SECTION (SPLIT SCREEN FOREST THEME) */}
      <section className="csr-page-hero-split">
        {/* Full-bleed background forest container */}
        <div className="hero-forest-bg-wrap">
          <img 
            src={mistyForest} 
            alt="Misty deep green pine forest wilderness background" 
            className="hero-forest-bg-img" 
          />
          <div className="hero-forest-smudge-mask"></div>
        </div>

        <div className="csr-page-container">
          <div className="hero-split-grid">
            {/* Left Content Column */}
            <div className="hero-split-left">
              <h1 className="hero-split-title">
                We can save our <br />
                <span>Environment.</span>
              </h1>
              
              <p className="hero-split-desc">
                Clean code and zero-emission digital infrastructure are paramount to a sustainable future. 
                Devopstrio is committed to helping global enterprises architect hyper-efficient, carbon-conscious 
                cloud ecosystems that optimize both hardware waste and environmental scale.
              </p>

              {/* Two buttons */}
              <div className="hero-split-btns">
                <a href="#audit-form" className="btn-solid-orange">
                  Request Audit
                </a>
                <a href="#csr-section" className="btn-outline-glass">
                  Our History
                </a>
              </div>

              {/* Coordinates bottom row */}
              <div className="hero-split-coordinates">
                <div className="coord-item">
                  <Mail className="coord-icon" />
                  <span>sustainability@devopstrio.com</span>
                </div>
                <div className="coord-item">
                  <MapPin className="coord-icon" />
                  <span>Silicon Valley, California</span>
                </div>
              </div>
            </div>

            {/* Empty Right Column so the gorgeous background forest shines through */}
            <div className="hero-split-right-spacer"></div>
          </div>
        </div>
      </section>

      {/* SECTION 1: TOP FOUR STATS CARDS */}
      <section className="csr-top-stats-sec">
        <div className="csr-page-container">
          <div className="csr-stats-grid">
            <div className="csr-stat-card">
              <h3>98%</h3>
              <h5>Cloud Optimization Efficiency</h5>
              <p>Achieved across all cloud environments and enterprise workloads.</p>
            </div>
            
            <div className="csr-stat-card highlight-card">
              <h3>565t+</h3>
              <h5>Annual CO₂ Saved</h5>
              <p>Prevented through serverless orchestration and green grid scheduling.</p>
            </div>

            <div className="csr-stat-card">
              <h3>36k+</h3>
              <h5>Trees Planted</h5>
              <p>Through our verified 'One Migration, One Tree' reforestation program.</p>
            </div>

            <div className="csr-stat-card">
              <h3>100%</h3>
              <h5>Offset Operations</h5>
              <p>Remote-first workforce and fully balanced operational footprints.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY CHOOSE US / COMPREHENSIVE AGRICULTURAL OFFERINGS (COMPREHENSIVE GREEN CLOUD SERVICES) */}
      <section className="csr-offerings-sec" id="csr-section">
        <div className="csr-page-container">
          <div className="offerings-tag-wrap">
            <span className="offerings-tag">
              <Leaf className="tag-icon" /> Why Choose Us
            </span>
          </div>
          <h2 className="offerings-title">Comprehensive Green Cloud Services</h2>

          {/* Triple-column grid layout */}
          <div className="offerings-grid">
            {/* Left Image */}
            <div className="offering-img-box left-box">
              <img src={mainTeam} alt="Green cloud operations team" />
            </div>

            {/* Middle Content */}
            <div className="offering-desc-box">
              <p className="offering-desc-text">
                Discover a wide range of high-efficiency green infrastructure designs engineered to reduce digital waste. We take pride in delivering innovative cloud orchestration solutions that help you achieve optimal scaling in your production environments, whether you are a growing startup or a global enterprise.
              </p>
              
              <div className="offering-badges-row">
                <div className="offering-badge-square green-badge">
                  <h4>5+ Years</h4>
                  <p>Of Experience In Green DevOps</p>
                </div>
                <div className="offering-badge-square gold-badge">
                  <h4>100%</h4>
                  <p>Carbon Neutral Workloads</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="offering-img-box right-box">
              <img src={archedPerson} alt="Sustainable software optimization" />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: EXPLORE OUR FARM PRODUCTS (EXPLORE OUR ECO-FRAMEWORKS) */}
      <section className="csr-frameworks-sec">
        <div className="csr-page-container">
          <div className="frameworks-layout">
            
            {/* Left Box */}
            <div className="frameworks-promo-card">
              <div className="promo-glow"></div>
              <div className="promo-icon-wrap">
                <Sparkles className="promo-icon" />
              </div>
              <h3>Explore Our Green Frameworks</h3>
              <p>Discover high-performance green architectures designed to optimize computing waste.</p>
              <div className="promo-arrow-btn">
                <ArrowRight />
              </div>
            </div>

            {/* Right List Box */}
            <div className="frameworks-list-box">
              <div className="framework-list-item">
                <div className="item-num-circle">1</div>
                <div className="item-content">
                  <h4>Serverless & Microservices</h4>
                  <p>Utilize event-driven models that automatically scale down to zero idle compute capacity.</p>
                </div>
              </div>

              <div className="framework-list-item">
                <div className="item-num-circle">2</div>
                <div className="item-content">
                  <h4>Autoscaling & Resource Allocation</h4>
                  <p>Dynamically size VM instances in real-time, eliminating redundant server runtime.</p>
                </div>
              </div>

              <div className="framework-list-item">
                <div className="item-num-circle">3</div>
                <div className="item-content">
                  <h4>Carbon-Conscious Workloads</h4>
                  <p>Intelligently schedule high-compute tasks to align with peak renewable energy availability.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* INTERACTIVE CALCULATOR & SIMULATOR SECTION */}
      <section className="csr-page-simulator-sec">
        <div className="csr-page-container">
          <div className="sim-layout">
            {/* Calculator Left: Slider controls */}
            <div className="sim-control-card">
              <span className="card-tag">Interactive Tool</span>
              <h2>Cloud Carbon Estimator</h2>
              <p>
                Adjust the slider below to estimate your organization's monthly hosting expenditure and preview the structural environmental advantages of eco-optimized infrastructure.
              </p>

              <div className="slider-group">
                <div className="slider-header">
                  <span>Monthly Spend</span>
                  <span className="slider-highlight">${cloudBudget.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="200000"
                  step="2000"
                  value={cloudBudget}
                  onChange={(e) => setCloudBudget(Number(e.target.value))}
                  className="csr-range-slider"
                />
                <div className="slider-limits">
                  <span>$2k</span>
                  <span>$100k</span>
                  <span>$200k+</span>
                </div>
              </div>

              <ul className="calculator-points">
                <li>
                  <span className="point-icon"><Check /></span>
                  <p>Up to 50% decrease in waste compute idle times</p>
                </li>
                <li>
                  <span className="point-icon"><Check /></span>
                  <p>Automatic scaling to zero during off-peak hours</p>
                </li>
                <li>
                  <span className="point-icon"><Check /></span>
                  <p>Migrated workloads scheduled for green energy grids</p>
                </li>
              </ul>
            </div>

            {/* Calculator Right: Output Metrics */}
            <div className="sim-metrics-card">
              <div className="metrics-glow"></div>
              <h3>Projected Annual Savings</h3>
              
              <div className="metric-box-large">
                <div className="metric-box-icon"><Trees /></div>
                <div>
                  <h4 className="value-yellow">🌲 {treesPlanted.toLocaleString()} Trees</h4>
                  <p>Equivalent ecological absorption capacity over a 10-year period.</p>
                </div>
              </div>

              <div className="metrics-small-grid">
                <div className="metric-box-small">
                  <div className="small-icon-wrap rose"><Zap /></div>
                  <h5>{co2Saved} Tons</h5>
                  <p>Annual CO₂ Saved</p>
                </div>
                <div className="metric-box-small">
                  <div className="small-icon-wrap purple"><TrendingDown /></div>
                  <h5>{coalPrevented.toLocaleString()} lbs</h5>
                  <p>Coal Burn Prevented</p>
                </div>
              </div>

              <div className="metric-box-footer">
                <ShieldCheck className="footer-shield" />
                <p>Calculations adhere to GHG Protocols and certified carbon offsets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PRODUCT DETAILS (OUR OPERATIONAL IMPACT) */}
      <section className="csr-impact-sec">
        <div className="csr-page-container">
          <div className="impact-tag-wrap">
            <span className="impact-tag">Our Sustainable Impact</span>
          </div>
          <h2 className="impact-title">We're Leaders in Zero-Waste Digital Solutions</h2>

          <div className="impact-grid">
            {/* Left Image Box */}
            <div className="impact-img-wrap">
              <img src={mistyForest} alt="Zero waste technology forest" />
              <div className="impact-img-badge">
                <Leaf />
              </div>
            </div>

            {/* Right Info Box */}
            <div className="impact-info-wrap">
              <p className="impact-desc-top">
                We engineer hyper-efficient cloud ecosystems that merge peak system performance with minimal environmental impact. Our designs guarantee cost reduction alongside carbon compliance.
              </p>
              
              <a href="#audit-form" className="btn-solid-orange impact-cta-btn">
                Request Green Audit
              </a>

              <div className="impact-list-grid">
                <div className="impact-list-item">
                  <div className="item-icon-circle green">
                    <Cpu />
                  </div>
                  <div className="item-details">
                    <h4>Green Compute Architecture</h4>
                    <p>Deploy automated resource scaling that slashes monthly hosting expenses by up to 40%.</p>
                  </div>
                </div>

                <div className="impact-list-item">
                  <div className="item-icon-circle rose">
                    <TrendingDown />
                  </div>
                  <div className="item-details">
                    <h4>GHG Certified Reporting</h4>
                    <p>Generate production-grade greenhouse gas carbon emission reports for compliance audits.</p>
                  </div>
                </div>

                <div className="impact-list-item">
                  <div className="item-icon-circle green">
                    <Trees />
                  </div>
                  <div className="item-details">
                    <h4>Ecosystem Restoration</h4>
                    <p>Every automated workload migration actively funds verified reforestation.</p>
                  </div>
                </div>

                <div className="impact-list-item">
                  <div className="item-icon-circle orange">
                    <Globe />
                  </div>
                  <div className="item-details">
                    <h4>Sustainable Goals Alignment</h4>
                    <p>Ensure your technology stack directly aligns with international ESG and SDG frameworks.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ SECTION */}
      <section className="csr-faq-sec">
        <div className="csr-page-container">
          <div className="faq-tag-wrap">
            <span className="faq-tag">FAQ</span>
          </div>
          <h2 className="faq-title">Frequently Answered Questions</h2>

          <div className="faq-accordion">
            {faqData.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className={`faq-accordion-item ${isOpen ? "open" : ""}`}>
                  <button className="faq-question-btn" onClick={() => toggleFaq(index)}>
                    <span>{faq.q}</span>
                    <ChevronDown className="faq-chevron" />
                  </button>
                  <div className="faq-answer-wrap">
                    <div className="faq-answer-content">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AUDIT CALL TO ACTION FORM */}
      <section className="csr-page-audit-section" id="audit-form">
        <div className="csr-page-container">
          <div className="audit-card-wrap">
            <div className="audit-content">
              <h2>Request a Free Green Cloud Audit</h2>
              <p>
                Ready to cut down cloud waste and establish carbon transparency? Our certified systems engineers will run a comprehensive diagnostic on your hosting structure and provide a thorough optimization plan.
              </p>
              <div className="audit-specs">
                <div className="spec-item">
                  <span className="spec-check"><Check /></span>
                  <span>Analyze idle virtual machine rates</span>
                </div>
                <div className="spec-item">
                  <span className="spec-check"><Check /></span>
                  <span>Calculate projected carbon tonnage cuts</span>
                </div>
              </div>
            </div>

            <div className="audit-form-wrap">
              {!auditSubmitted ? (
                <form onSubmit={handleAuditSubmit} className="audit-actual-form">
                  <div className="input-group">
                    <User className="input-icon" />
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      required
                      value={auditData.name}
                      onChange={(e) => setAuditData({ ...auditData, name: e.target.value })}
                    />
                  </div>
                  
                  <div className="input-group">
                    <Mail className="input-icon" />
                    <input 
                      type="email" 
                      placeholder="Corporate Email" 
                      required
                      value={auditData.email}
                      onChange={(e) => setAuditData({ ...auditData, email: e.target.value })}
                    />
                  </div>

                  <div className="input-group">
                    <Building className="input-icon" />
                    <input 
                      type="text" 
                      placeholder="Company Name" 
                      value={auditData.company}
                      onChange={(e) => setAuditData({ ...auditData, company: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="audit-submit-btn">
                    <span>Submit Request</span> <ArrowRight className="submit-arrow" />
                  </button>
                </form>
              ) : (
                <div className="audit-success-box">
                  <div className="success-icon-circle"><Check /></div>
                  <h3>Audit Requested!</h3>
                  <p>
                    Thank you, {auditData.name}. Our eco-infrastructure experts will analyze your request and reach out within 24 business hours to schedule your green cloud evaluation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
