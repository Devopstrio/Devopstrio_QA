import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiArrowRight } from "react-icons/fi";
import api from "../../Services/api";
import "./LifeSciCaseStudies.css";

export default function LifeSciCaseStudies() {
  const navigate = useNavigate();
  const [activeSlide, setActiveSlide] = useState(0);
  const [caseStudies, setCaseStudies] = useState([]);
  const [loadingCases, setLoadingCases] = useState(true);

  // Static fallback definitions
  const slidesData = [
    {
      tag: "Case Study 1",
      title: "Digital platform for OSA patients",
      desc: "A comprehensive sleep apnea diagnostic and therapy tracking platform used by clinical research institutions worldwide. Successfully integrated remote sensory devices to upload patient breath statistics and automated therapeutic scheduling.",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
    },
    {
      tag: "Case Study 2",
      title: "High-Throughput Genomic Analyzer",
      desc: "Built a distributed cloud data warehouse for storing, processing, and analyzing next-generation sequencing datasets. Accelerated sequence alignment algorithms by 12x while lowering pipeline operational compute costs.",
      img: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?w=800&q=80"
    },
    {
      tag: "Case Study 3",
      title: "GxP-Compliant Lab Inventory",
      desc: "A fully validated inventory control system for tracking clinical trial samples and drug stability tests across multiple geographic locations. Kept audit trails perfectly in sync with FDA Title 21 compliance rules.",
      img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
    }
  ];

  useEffect(() => {
    const fetchCases = async () => {
      try {
        setLoadingCases(true);
        // Only fetch top 3 recent case studies as requested
        const rawPosts = await api.getAllContentByCategory("insights-knowledge", "case-studies", 3);
        if (rawPosts && rawPosts.length > 0) {
          const transformed = rawPosts.map((post) => 
            api.transformContent(post, 
              { name: "Insights & Knowledge", slug: "insights-knowledge" }, 
              { name: "Case Studies", slug: "case-studies" }
            )
          );
          setCaseStudies(transformed);
        }
      } catch (err) {
        console.error("Error loading case studies in LifeSciCaseStudies component:", err);
      } finally {
        setLoadingCases(false);
      }
    };
    fetchCases();
  }, []);

  // Dynamically mapped active slides limited to 3 items
  const activeSlides = caseStudies.length > 0
    ? caseStudies.slice(0, 3).map((cs, idx) => ({
        tag: `Case Study ${idx + 1}`,
        title: cs.title,
        desc: cs.excerpt || cs.title,
        img: cs.image || [
          "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
          "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?w=800&q=80",
          "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80"
        ][idx % 3],
        link: `/${cs.section?.slug || "insights-knowledge"}/${cs.category?.slug || "case-studies"}/${cs.id}`
      }))
    : slidesData.map(slide => ({ ...slide, link: "/insights-knowledge/case-studies" }));

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % activeSlides.length);
  };

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  return (
    <section className="plt-lifesci-case-section">
      <div className="plt-lifesci-container">
        <div className="plt-lifesci-case-header-row">
          <div>
            <h2 className="plt-lifesci-sec-h2" style={{ marginBottom: "12px" }}>Case studies</h2>
            <p style={{ color: "#9ca3af", maxWidth: "800px", fontSize: "1.05rem", lineHeight: "1.6" }}>
              Focus on the innovative tools our Life Sciences software development team built specifically to improve patient results and optimize healthcare operations.
            </p>
          </div>
          <div className="plt-lifesci-case-arrows">
            <button className="plt-lifesci-arrow-btn" onClick={handlePrevSlide} aria-label="Previous slide">
              <FiChevronLeft size={20} />
            </button>
            <button className="plt-lifesci-arrow-btn" onClick={handleNextSlide} aria-label="Next slide">
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="plt-lifesci-case-slider-wrap">
          <div className="plt-lifesci-case-slide">
            <div className="plt-lifesci-case-content-col">
              <span className="case-tag">{activeSlides[activeSlide]?.tag}</span>
              <h3>{activeSlides[activeSlide]?.title}</h3>
              <p>{activeSlides[activeSlide]?.desc}</p>
              <button className="plt-lifesci-btn-primary" onClick={() => navigate(activeSlides[activeSlide]?.link)}>
                Read case study <FiArrowRight />
              </button>
            </div>

            <div className="plt-lifesci-case-img-col">
              <img src={activeSlides[activeSlide]?.img} alt={activeSlides[activeSlide]?.title} />
            </div>
          </div>
        </div>

        <div className="plt-lifesci-dots-indicator">
          {activeSlides.map((_, idx) => (
            <div 
              key={idx} 
              className={`plt-lifesci-dot ${activeSlide === idx ? "active" : ""}`}
              onClick={() => setActiveSlide(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
