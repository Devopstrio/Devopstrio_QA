import { useEffect, useRef } from "react";
import { FaLightbulb, FaCode, FaCloud, FaCogs } from "react-icons/fa";
import "./WeImagine.css";

const DATA = [
  {
    id: "ideas",
    title: "We imagine",
    subtitle: "We Design Intelligent Digital Solutions",
    desc: "We develop <a href='/services/artificial-intelligence' class='about-inline-link'>AI-powered systems</a>, automation frameworks, and data-driven platforms that open up new revenue streams and operational efficiency.",
    points: [
      "Integrated Multi-Cloud Design",
      "Practical DevOps and Operational Knowledge",
      "Secure, High-Performance Data Systems",
    ],
    icon: <FaLightbulb />,
    image: "/images/humanex_das.png",
  },
  {
    id: "develop",
    title: "We develop",
    subtitle: "We Build High-Performance Software",
    desc: "To increase release velocity, fortify <a href='/services/security' class='about-inline-link'>security posture</a>, and guarantee enterprise-grade scalability, we optimise <a href='/services/devops-enablement' class='about-inline-link'>development workflows</a>.",
    points: [
      "Scalability at the Enterprise Level",
      "Architecture that is Secure and Compliant",
      "Observability & Real-Time Monitoring",
    ],
    icon: <FaCode />,
    image: "/images/homela-banner.png",
  },
  {
    id: "modernize",
    title: "We modernize",
    subtitle: "We Modernize Infrastructure & Applications",
    desc: "We use scalable <a href='/services/explore' class='about-inline-link'>DevOps techniques</a>, automation, and AI-driven workflows to convert legacy systems into agile, <a href='/services/cloud-architecture' class='about-inline-link'>cloud-native environments</a>.",
    points: [
      "Automation of Processes Driven by AI",
      "Cloud-Native Development",
      "Re-Architecting Legacy Systems",
    ],
    icon: <FaCloud />,
    image: "/images/influencer_chages.png",
  },
  {
    id: "manage",
    title: "We manage",
    subtitle: "Optimize operations",
    desc: "We transform and <a href='/services/ai-consulting-services' class='about-inline-link'>optimize operations</a> to reduce costs, enhance efficiency, and enable sustainable growth.",
    points: [
      "24/7 Proactive Monitoring",
      "Predictive Maintenance",
      "Cost Optimization Strategies",
    ],
    icon: <FaCogs />,
    image: "/images/prestivo-changes.png",
  },
];

export default function WeImagine() {
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = Array.from(
      containerRef.current.querySelectorAll(".weimagine-section"),
    );

    const onScroll = () => {
      sections.forEach((section, i) => {
        section.style.zIndex = sections.length + i;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="weimagine-container" ref={containerRef}>
      <main className="weimagine-content">
        <div className="products-header">
          <span className="products-badge">Our Products</span>

          <h3 className="products-title">
            Explore our <span>innovative solutions</span>
          </h3>

          <p className="products-subtitle">
            Scalable, secure, and performance-driven platforms designed to
            accelerate growth, simplify operations, and deliver real business
            impact.
          </p>
        </div>
        {DATA.map((section) => (
          <section key={section.id} className="weimagine-section">
            <div className="section-content-left">
              <div className="section-header">
                <div className="section-icon">{section.icon}</div>

                <div className="section-titles">
                  <h2 className="section-title">{section.title}</h2>
                  <p className="section-subtitle">{section.subtitle}</p>
                </div>
              </div>

              <div className="section-text">
                <p className="section-desc" dangerouslySetInnerHTML={{ __html: section.desc }}></p>

                <ul className="section-points">
                  {section.points.map((point, i) => (
                    <li key={i} className="section-point">
                      <span className="check-icon">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="section-image-wrap">
              <img
                src={section.image}
                alt={section.title}
                className="section-image"
                draggable="false"
              />
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
