import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  Lock, Heart, Film, Zap, Truck, Cpu, Activity, ShoppingBag, Settings, 
  Compass, Dices, BookOpen, Home, Plane, Database, Scale, Leaf, Sun, 
  Map, Globe, ArrowLeft, ArrowRight 
} from "lucide-react";
import "./IndustrySpecialization.css";

const INDUSTRIES = [
  {
    id: "finance",
    title: "Finance Software",
    icon: <Lock size={24} />,
    desc: "Architecting high-frequency ledger processing engines, zero-trust banking APIs, and real-time automated fraud detection systems.",
    path: "/platform/financial-services"
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: <Heart size={24} />,
    desc: "Building HIPAA-compliant telemetry collection nodes, secure electronic health records (EHR) sync gates, and fault-tolerant platforms.",
    path: "/platform/healthcare"
  },
  {
    id: "media",
    title: "Media & Entertainment",
    icon: <Film size={24} />,
    desc: "Engineering ultra-low latency media streaming infrastructure with edge-cached CDN layers and automated media transcoders.",
    path: "/platform/media-entertainment"
  },
  {
    id: "telecom",
    title: "Telecommunication",
    icon: <Zap size={24} />,
    desc: "Orchestrating network virtualization workloads, multi-terabit packet routing, and distributed microservices for carrier-grade cores.",
    path: "/platform/telecom"
  },
  {
    id: "logistics",
    title: "Logistics Software",
    icon: <Truck size={24} />,
    desc: "Streamlining fleet route optimization, automated inventory warehousing hubs, and high-density telemetry tracking gates.",
    path: "/platform/logistics"
  },
  {
    id: "automotive",
    title: "Automotive Solutions",
    icon: <Cpu size={24} />,
    desc: "Deploying secure over-the-air (OTA) firmware delivery gates, connected vehicle telematics APIs, and auto-scaling simulation runtimes.",
    path: "/platform/automotive"
  },
  {
    id: "lifesciences",
    title: "Life Sciences Software",
    icon: <Activity size={24} />,
    desc: "Designing ultra-scale computing clusters for genomic sequencing pipelines, secure bio-data warehouses, and audit-logged repositories.",
    path: "/platform/life-sciences"
  },
  {
    id: "ecommerce & retail",
    title: "eCommerce & Retail Solutions",
    icon: <ShoppingBag size={24} />,
    desc: "Integrating distributed point-of-sale inventory networks, headless retail API routers, and omnichannel warehouse synchronization.",
    path: "/platform/retail"
  },
  {
    id: "manufacturing",
    title: "Manufacturing Software",
    icon: <Settings size={24} />,
    desc: "Orchestrating low-latency industrial IoT sensor collectors, predictive maintenance machine learning pipelines, and smart edge networks.",
    path: "/platform/manufacturing"
  },
  {
    id: "travel",
    title: "Travel & Hospitality",
    icon: <Compass size={24} />,
    desc: "Optimizing high-traffic dynamic booking routers, global distribution system (GDS) integrations, and real-time inventory reservation locks.",
    path: "/platform/travel-hospitality"
  },
  {
    id: "agriculture",
    title: "Agriculture Software",
    icon: <Leaf size={24} />,
    desc: "Orchestrating smart crop health telemetry pipelines, drone imaging computational grids, and automated supply forecasting analytics.",
    path: "/platform/agriculture"
  }
];

export default function IndustrySpecialization() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  const handleScroll = (direction) => {
    if (sliderRef.current) {
      const cardWidth = 340;
      const gap = 24;
      const scrollAmount = (cardWidth + gap) * 6; // Scroll exactly 6 cards at a time
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  const handleCardClick = (path) => {
    if (path) {
      navigate(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="indspec-root" id="industry-specialization-section">
      <div className="indspec-container">
        
        {/* Workspace Layout - Split into Left Header Panel & Right Cards Slider */}
        <div className="indspec-workspace">
          
          {/* Left Block: Info Content & Carousel Controls */}
          <div className="indspec-left-panel">
            <div className="indspec-header">
              <span className="indspec-pill">Industry Focus</span>
              <h2 className="indspec-title">
                We serve our <span>specialized industries</span>
              </h2>
            </div>
            
            <p className="indspec-subtitle">
              Devopstrio engineers high-throughput cloud architectures, zero-trust security setups, and state-of-the-art AI platforms custom-tailored for leading global sectors.
            </p>

            {/* Slider Navigation Buttons at the bottom left */}
            <div className="indspec-controls">
              <button 
                className="indspec-control-btn" 
                onClick={() => handleScroll("left")}
                aria-label="Slide left"
              >
                <ArrowLeft size={20} />
              </button>
              <button 
                className="indspec-control-btn" 
                onClick={() => handleScroll("right")}
                aria-label="Slide right"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Right Block: Horizontally Scrollable Slider Track */}
          <div className="indspec-slider-wrap">
            <div className="indspec-slider-track" ref={sliderRef}>
              {INDUSTRIES.map((ind, index) => {
                const formattedNum = String(index + 1).padStart(2, "0");
                return (
                  <div
                    key={ind.id}
                    className="indspec-card"
                    id={`industry-card-${ind.id}`}
                    onClick={() => handleCardClick(ind.path)}
                    aria-label={`Explore our ${ind.title} solutions`}
                  >
                    {/* Index Number Badge */}
                    <div className="indspec-card-top-row">
                      <span className="indspec-card-num">{formattedNum}</span>
                      <div className="indspec-icon-wrap">
                        {ind.icon}
                      </div>
                    </div>

                    <h3 className="indspec-card-title">{ind.title}</h3>
                    <p className="indspec-card-desc">{ind.desc}</p>

                    <div className="indspec-card-action">
                      <span>Explore Solutions</span>
                      <ArrowRight size={16} className="indspec-action-arrow" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
