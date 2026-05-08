import React, { useEffect, useRef } from "react";
import "./WhatWeDo.css";
import product from "../../assets/images/product.jpg";
import security from "../../assets/images/security.png";
import cloud from "../../assets/images/cloud.png";
import devops from "../../assets/images/devops.jpg";
import {
  HiOutlineCloudUpload,
  HiOutlineChip,
  HiOutlineTemplate,
  HiOutlineShieldCheck,
  HiOutlineArrowRight,
} from "react-icons/hi";

const services = [
  {
    title: "Cloud Migration",
    desc: "Complete DevOps, Cloud, and Product Engineering Solution Move infrastructure and legacy apps to AWS, Azure, or Google Cloud without any interruptions.",
    icon: <HiOutlineCloudUpload />,
    bg: cloud,
    link: "/services/cloud-migration",
  },
  {
    title: "DevOps Excellence",
    desc: "Use automated CI/CD pipelines, Infrastructure as Code (Terraform), Kubernetes orchestration, and GitOps best practices to expedite software delivery.",
    icon: <HiOutlineChip />,
    bg: devops,
    link: "/services/devops-enablement",
  },
  {
    title: "Product Design",
    desc: "Using contemporary frameworks and cloud-native technologies, we design and develop scalable, secure, high-performance application.",
    icon: <HiOutlineTemplate />,
    bg: product,
    link: "/platform/retail",
  },
  {
    title: "Security Operations",
    desc: "Use threat detection, continuous monitoring, compliance automation (SOC 2, ISO 27001, GDPR)",
    icon: <HiOutlineShieldCheck />,
    bg: security,
    link: "/services/security",
  },
];

export default function WhyDevopstrio() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Function to check if element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) * 0.85
      );
    };

    // Function to handle scroll animations
    const handleScrollAnimation = () => {
      if (sectionRef.current && isInViewport(sectionRef.current)) {
        sectionRef.current.classList.add("active");
      }

      cardsRef.current.forEach((card) => {
        if (card && isInViewport(card)) {
          card.classList.add("active");
        }
      });
    };

    // Initial check on mount
    handleScrollAnimation();

    // Add scroll event listener with throttling
    let scrollTimeout;
    const throttledScroll = () => {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(() => {
          handleScrollAnimation();
          scrollTimeout = null;
        }, 50);
      }
    };

    window.addEventListener("scroll", throttledScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  // Function to set refs for service cards
  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <section className="what-we-do" id="why-Devopstrio ">
      <div className="what-container">
        <span className="section-pill">WHAT WE DO</span>

        <h2 className="section-title-why" ref={sectionRef}>
          Complete Cloud, DevOps and <span>Product Engineering Solutions</span>
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <div
              className="service-card reveal"
              key={index}
              ref={addToRefs}
              style={{ backgroundImage: `url(${service.bg})` }}
            >
              <div className="card-overlay"></div>

              <div className="service-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <a href={service.link}>
                  Learn More
                  <HiOutlineArrowRight className="arrow-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
