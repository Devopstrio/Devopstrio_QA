import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiMapPin,
  FiChevronRight,
  FiMail,
  FiPhoneCall,
  FiUser,
  FiEdit3,
  FiLoader,
  FiZap,
  FiCpu,
  FiTerminal,
  FiActivity,
  FiTrendingUp,
  FiBriefcase,
  FiGrid,
  FiHeart,
  FiGift,
  FiClock,
  FiAward,
  FiUsers,
  FiTarget
} from "react-icons/fi";

import Careershero from "../components/Hero/CareeersHeroPage";
import DAN_01 from "../assets/images/DAN_01.png";
import service_8 from "../assets/images/Ai_build_case/service_8.png";
import { sendEmail } from "../Services/sendmail";
import Swal from "sweetalert2";
import "../Style/Careerspage.css";
import useSEO from "../hooks/useSEO";



//Colleague Images
import Kishore1 from "../assets/images/Colleague/Kishore1.jpg";
import Kishore2 from "../assets/images/Colleague/Kishore2.jpg";
import Kishore3 from "../assets/images/Colleague/Kishore3.jpg";
import Kishore4 from "../assets/images/Colleague/Kishore4.jpg";
import Maresh1 from "../assets/images/Colleague/maresh1.png";
import Maresh2 from "../assets/images/Colleague/maresh2.png";
import Maresh3 from "../assets/images/Colleague/maresh3.png";
import Maresh4 from "../assets/images/Colleague/maresh4.png";
import Maresh5 from "../assets/images/Colleague/maresh5.png";
import Ooviya1 from "../assets/images/Colleague/Ooviya_1.png";
import Ooviya2 from "../assets/images/Colleague/Ooviya_2.png";
import Ooviya3 from "../assets/images/Colleague/Ooviya_3.png";
import Ooviya4 from "../assets/images/Colleague/Ooviya_4.png";
import Punitha1 from "../assets/images/Colleague/Punitha_1.png";
import Punitha2 from "../assets/images/Colleague/Punitha_2.png";
import Punitha3 from "../assets/images/Colleague/Punitha_3.png";
import Punitha4 from "../assets/images/Colleague/Punitha_4.png";
import Punitha5 from "../assets/images/Colleague/Punitha_5.png";
import Saga1 from "../assets/images/Colleague/Saga_1.png";
import Saga2 from "../assets/images/Colleague/Saga_2.png";
import Saga3 from "../assets/images/Colleague/Saga_3.png";
import Saga4 from "../assets/images/Colleague/Saga_4.png";
import Saga5 from "../assets/images/Colleague/Saga_5.png";
import Serma1 from "../assets/images/Colleague/Serma_2.jpg";
import Serma2 from "../assets/images/Colleague/Serma_3.jpg";
import Serma3 from "../assets/images/Colleague/Serma_4.jpg";
import Serma4 from "../assets/images/Colleague/Serma_5.jpg";
import Serma5 from "../assets/images/Colleague/Serma_6.png";
import Subbiah1 from "../assets/images/Colleague/Subbiah_1.png";
import Subbiah2 from "../assets/images/Colleague/Subbiah_2.png";
import Subbiah3 from "../assets/images/Colleague/Subbiah_3.png";
import Subbiah4 from "../assets/images/Colleague/Subbiah_4.png";
import Subbiah5 from "../assets/images/Colleague/Subbiah_5.png";
import Suman1 from "../assets/images/Colleague/Suman_1.png";
import Suman2 from "../assets/images/Colleague/Suman_3.png";
import Suman3 from "../assets/images/Colleague/Suman_4.png";
import Suman4 from "../assets/images/Colleague/Suman_5.png";
import Suman5 from "../assets/images/Colleague/Suman_6.png";
import Thangalakshmi1 from "../assets/images/Colleague/thangalakshimi_1.jpeg";
import Thangalakshmi2 from "../assets/images/Colleague/thangalakshimi_2.jpeg";
import Thangalakshmi3 from "../assets/images/Colleague/thangalakshimi_8.jpeg";
import Thangalakshmi4 from "../assets/images/Colleague/thangalakshimi_4.jpeg";
import Thangalakshmi5 from "../assets/images/Colleague/thangalakshimi_5.jpeg";

const ALL_COLLEAGUE_PHOTOS = [
  Thangalakshmi1,
  Subbiah1,
  Saga1,
  Serma1,
  Maresh1,
  Kishore1,
  Suman1,
  Ooviya1,
  Punitha1,
  Thangalakshmi2,
  Subbiah2,
  Saga2,
  Serma2,
  Maresh2,
  Kishore2,
  Suman2,
  Ooviya2,
  Punitha2,
  Thangalakshmi3,
  Subbiah3,
  Saga3,
  Serma3,
  Maresh3,
  Kishore3,
  Suman3,
  Ooviya3,
  Punitha3,
  Thangalakshmi4,
  Subbiah4,
  Saga4,
  Serma4,
  Maresh4,
  Kishore4,
  Suman4,
  Ooviya4,
  Punitha4,
  Thangalakshmi5,
  Subbiah5,
  Saga5,
  Serma5,
  Maresh5,
  Suman5,
  Punitha5,
];

const Careerspage = () => {
  useSEO({
    title: "Careers at Devopstrio | DevOps & Cloud Engineering Jobs",
    description: "Join Devopstrio's world-class team of cloud architects, DevOps engineers, and AI specialists. Explore internships, view JDs, and build a career with global impact.",
    keywords: "careers at Devopstrio, DevOps jobs UK, cloud engineering careers, tech recruitment, remote software engineer positions, UI UX design internship, digital marketing intern, hire SRE analyst, Devopstrio careers",
    ogTitle: "Careers at Devopstrio | DevOps & Cloud Engineering Jobs",
    ogDescription: "Join a fast-paced environment designed to scale your skills. Work on the bleeding edge of AI and DevOps with mentorship from industry leaders.",
    ogImage: "https://devopstrio.com/assets/images/devopstrio-og-careers-hub.jpg",
    ogUrl: "https://devopstrio.com/careers",
    canonicalUrl: "https://devopstrio.com/careers"
  });

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [giTabOpening, setGiTabOpening] = useState(false);

  const [activeTestimonial, setActiveTestimonial] = useState({
    quote:
      "Working here is irresistible. The combination of smart and ambitious people makes me so confident we will succeed.",
    author: "Don",
    role: "GB Operations",
  });

  const buildersQuotes = [
    {
      quote:
        "Every day we&apos;re pushing the boundaries of what&apos;s possible in cloud infrastructure.",
      author: "Sarah",
      role: "DevOps Lead",
    },
    {
      quote:
        "The culture here encourages rapid experimentation and learning from every failure.",
      author: "Marcus",
      role: "Backend Engineer",
    },
    {
      quote:
        "Ship daily, iterate fast. This is the place for engineers who love moving at speed.",
      author: "Jin",
      role: "SRE Analyst",
    },
    {
      quote:
        "Our commitment to security is baked into every line of code we write.",
      author: "Elena",
      role: "Security Architect",
    },
    {
      quote:
        "Building the next-gen cloud platform requires a unique blend of vision and execution.",
      author: "David",
      role: "Product Manager",
    },
    {
      quote:
        "I&apos;ve never seen a team so dedicated to technical excellence and peer support.",
      author: "Aisha",
      role: "Frontend Developer",
    },
    {
      quote:
        "There&apos;s no limit to how much you can grow here if you have the drive.",
      author: "Leo",
      role: "Infrastructure Engineer",
    },
    {
      quote:
        "We don&apos;t just solve problems; we redefine the architecture of the future.",
      author: "Sophia",
      role: "Cloud Architect",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    // Preload Images for the Builders grid only if not already done in this browser session
    const hasPreloaded = localStorage.getItem("colleague_images_preloaded");
    if (!hasPreloaded) {
      ALL_COLLEAGUE_PHOTOS.forEach((photo) => {
        const img = new Image();
        img.src = photo;
      });
      localStorage.setItem("colleague_images_preloaded", "true");
    }

    return () => observer.disconnect();
  }, []);

  const handleFormChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please fill in all fields!",
      });
      return;
    }
    try {
      setIsSubmitting(true);
      await sendEmail({
        ...formData,
        subject: "Careers Inquiry from Devopstrio",
      });
      Swal.fire({
        icon: "success",
        title: "Sent!",
        text: "We&apos;ll get back to you soon.",
      });
      setFormData({ fullName: "", email: "", message: "" });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to send. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const teamTestimonials = [
    {
      quote: "Amazing learning experience and supportive team. The UI/UX internship provided me high technical leverage.",
      author: "Ooviya",
      role: "UI/UX Design Intern",
      date: "1 week ago",
      avatar: Ooviya1,
      stars: 5,
    },
    {
      quote: "The software engineering culture here encourages rapid experimentation, learning, and automated CI/CD releases.",
      author: "Punitha",
      role: "Backend Software Engineer",
      date: "2 weeks ago",
      avatar: Punitha1,
      stars: 5,
    },
    {
      quote: "Every day we're pushing the boundaries of what's possible in secure multicloud architecture and serverless computing.",
      author: "Sagar",
      role: "DevOps Team Lead",
      date: "3 weeks ago",
      avatar: Saga1,
      stars: 5,
    },
    {
      quote: "Technical excellence, test-driven infrastructure, and peer mentorship are baked into our DNA here.",
      author: "Serma",
      role: "Fullstack Architect",
      date: "1 month ago",
      avatar: Serma1,
      stars: 5,
    },
    {
      quote: "A gorgeous sandbox where your system architecture design translates into high-traffic real-world deployments.",
      author: "Subbiah",
      role: "Principal Cloud Engineer",
      date: "2 months ago",
      avatar: Subbiah1,
      stars: 5,
    },
    {
      quote: "Highly resilient pipelines, zero-downtime microservices, and absolute velocity—exactly where you want to grow.",
      author: "Kishore",
      role: "Site Reliability Engineer",
      date: "2 months ago",
      avatar: Kishore1,
      stars: 5,
    },
  ];

  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const handleOpenGlobalInternship = (e) => {
    e.preventDefault();
    if (giTabOpening) return;
    setGiTabOpening(true);
    window.setTimeout(() => {
      window.scrollTo(0, 0);
      navigate("/global-internship");
    }, 420);
  };

  return (
    <div className="careers-cp-page">
      <button
        type="button"
        className={`careers-cp-giSideTab ${giTabOpening ? "careers-cp-giSideTab--opening" : ""}`}
        onClick={handleOpenGlobalInternship}
        aria-label="Open Global Internship page"
      >
        <span className="careers-cp-giSideTab__text">Explore our Global Internship</span>
      </button>
      
      {/* 1. HERO SECTION */}
      <Careershero />

      {/* 2. WHY JOIN US */}
      <section className="careers-cp-section careers-cp-why-join reveal">
        <div className="careers-cp-wrap">
          <div className="careers-cp-why-bento-layout">
            
            {/* Left Column: Title & 2 features */}
            <div className="careers-cp-bento-left">
              <span className="careers-cp-section-label"><FiHeart size={12} /> Core Values</span>
              <h2 className="careers-cp-bento-title">Collaborate to Build The Innovative Tech Ecosystem</h2>
              <p className="careers-cp-bento-subtitle">
                We offer more than just a job. We offer an elite sandbox built to scale your software engineering and DevOps skills.
              </p>
              
              <div className="careers-cp-bento-features">
                <div className="careers-cp-bento-feature-item">
                  <div className="careers-cp-bento-feature-icon">
                    <FiTerminal size={20} />
                  </div>
                  <div className="careers-cp-bento-feature-text">
                    <h3>Cutting-Edge Stack</h3>
                    <p>Work on the bleeding edge of Kubernetes, Infrastructure as Code, GitOps pipelines, and next-gen AI automation.</p>
                  </div>
                </div>

                <div className="careers-cp-bento-feature-item">
                  <div className="careers-cp-bento-feature-icon">
                    <FiGift size={20} />
                  </div>
                  <div className="careers-cp-bento-feature-text">
                    <h3>Unrivaled Compensation</h3>
                    <p>Enjoy highly competitive salaries, private health cover, remote desk stipends, and continuous certifications.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column: Portrait image */}
            <div className="careers-cp-bento-center">
              <img
                src={DAN_01}
                alt="Elite DevOps architects collaborating at Devopstrio"
                className="careers-cp-bento-portrait-img-main"
              />
            </div>

            {/* Right Column: Text Card & Portrait image */}
            <div className="careers-cp-bento-right">
              <div className="careers-cp-bento-text-card">
                <h3>Global Autonomy</h3>
                <p>Enjoy fully remote collaboration with a world-class team of distributed cloud architects and DevOps experts in London and India.</p>
                <a href="#open-jobs" className="careers-cp-bento-btn">
                  More About Us <FiChevronRight size={14} />
                </a>
              </div>

              <div className="careers-cp-bento-image-card">
                <img
                  src={service_8}
                  alt="High performance desk engineering"
                  className="careers-cp-bento-portrait-img-sec"
                />
                <div className="careers-cp-bento-image-card-overlay">
                  <h4>Accelerated Growth</h4>
                  <p>Take charge of your trajectory with fast-track promotion paths and founder mentorship.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OPEN JOBS */}
      <section
        className="careers-cp-section careers-cp-opportunities-modern reveal"
        id="latest-jobs"
      >
        <div className="careers-cp-wrap">
          <div className="careers-cp-opps-header-centered">
            <span className="careers-cp-section-label"><FiBriefcase size={12} /> Openings</span>
            <h2 className="careers-cp-opps-main-title">
              Some opportunities for <br /> you to explore
            </h2>
          </div>
          <div className="careers-cp-opps-grid">
            {[
              {
                title: "UI/UX DESIGN INTERN",
                desc: "Design intuitive and beautiful user interfaces.",
                link: "/images/Internship-JDDesignIntern.pdf",
              },
              {
                title: "DEVELOPMENT INTERN",
                desc: "Join our core engineering team to build scalable microservices.",
                link: "/images/Internship-JDDevelopment.pdf",
              },
              {
                title: "DIGITAL MARKETING INTERN",
                desc: "Drive our global reach through data-driven campaigns.",
                link: "/images/Internship-JDDigitalMarketingIntern.pdf",
              },
              {
                title: "DEVOPS INTERN",
                desc: "Automate infrastructure and optimize CI/CD pipelines.",
                link: "/images/Internship-JDDevOpsIntern.pdf",
              },
            ].map((opp, idx) => (
              <div key={idx} className="careers-cp-opp-card-modern">
                <h3 className="careers-cp-opp-card-title">{opp.title}</h3>
                <p className="careers-cp-opp-card-desc">{opp.desc}</p>
                <div className="careers-cp-opp-card-footer">
                  <span className="careers-cp-opp-tag-green">Full time</span>
                  <a
                    href={opp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="careers-cp-opp-view-btn"
                  >
                    View JD
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TEAMS & TECHNOLOGIES */}
      <section className="careers-cp-section careers-cp-teams-tech reveal">
        <div className="careers-cp-wrap">
          <div className="careers-cp-section-header-centered">
            <span className="careers-cp-section-label"><FiGrid size={12} /> Elite Squads</span>
            <h2 className="careers-cp-section-title-large">Our Specializations & Stack</h2>
            <p className="careers-cp-section-subtitle">
              Collaborate within specialized divisions using high-performance technical frameworks.
            </p>
          </div>
          
          <div className="careers-cp-teams-grid">
            <div className="careers-cp-team-tech-card">
              <div className="careers-cp-team-top">
                <div className="careers-cp-team-badge">Platform Squad</div>
                <h3>Cloud Infrastructure & DevOps</h3>
              </div>
              <p className="careers-cp-team-desc">
                Engineering self-healing, automated server platforms built to handle millions of request spikes flawlessly.
              </p>
              <div className="careers-cp-team-stack">
                <span className="careers-cp-stack-pill">Kubernetes</span>
                <span className="careers-cp-stack-pill">Terraform</span>
                <span className="careers-cp-stack-pill">AWS</span>
                <span className="careers-cp-stack-pill">GCP</span>
                <span className="careers-cp-stack-pill">GitOps</span>
              </div>
            </div>
            
            <div className="careers-cp-team-tech-card">
              <div className="careers-cp-team-top">
                <div className="careers-cp-team-badge">App Squad</div>
                <h3>AI & Frontend Engineering</h3>
              </div>
              <p className="careers-cp-team-desc">
                Designing breathtaking user experiences and highly optimized, low-latency microservices with integrated AI tools.
              </p>
              <div className="careers-cp-team-stack">
                <span className="careers-cp-stack-pill">React</span>
                <span className="careers-cp-stack-pill">Node.js</span>
                <span className="careers-cp-stack-pill">Vite</span>
                <span className="careers-cp-stack-pill">Next.js</span>
                <span className="careers-cp-stack-pill">FastAPI</span>
              </div>
            </div>
            
            <div className="careers-cp-team-tech-card">
              <div className="careers-cp-team-top">
                <div className="careers-cp-team-badge">SecOps Squad</div>
                <h3>SecOps & Zero-Trust Shields</h3>
              </div>
              <p className="careers-cp-team-desc">
                Implementing impenetrable Zero-Trust network topologies and building continuous compliance audit loops.
              </p>
              <div className="careers-cp-team-stack">
                <span className="careers-cp-stack-pill">Zero-Trust</span>
                <span className="careers-cp-stack-pill">HashiCorp Vault</span>
                <span className="careers-cp-stack-pill">IAM Auth</span>
                <span className="careers-cp-stack-pill">CI/CD Guardrails</span>
                <span className="careers-cp-stack-pill">Docker</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WORK ENVIRONMENT (BUILDERS GRAPH) */}
      <section className="careers-cp-section careers-cp-builders reveal">
        <div className="careers-cp-wrap">
          <div className="careers-cp-life-header">
            <span className="careers-cp-section-label"><FiClock size={12} /> Culture Map</span>
            <h2 className="careers-cp-life-title">
              Join Our Team @ <span className="careers-cp-life-accent">Devopstrio</span>
            </h2>
            <p className="careers-cp-life-main-desc">
              Devopstrio is searching for extraordinary individuals to join our team to drive continuous establishments in the innovation of cloud technology.
            </p>
            <div className="careers-cp-life-actions">
              <button
                className="careers-cp-life-btn-cta"
                onClick={() => navigate("/careers/jobs")}
              >
                See Open Positions
              </button>
            </div>
          </div>
          <div className="careers-cp-builders-grid-wrap">
            <div
              className="careers-cp-builders-grid"
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {(() => {
                let photoCounter = 0;
                return [...Array(115)].map((_, i) => {
                  const row = Math.floor(i / 23);
                  const col = i % 23;
                  const isPhotoCol =
                    col >= 5 + Math.abs(2 - row) &&
                    col <= 17 - Math.abs(2 - row);

                  if (isPhotoCol) {
                    const photoIdx = photoCounter % ALL_COLLEAGUE_PHOTOS.length;
                    const currentPhoto = ALL_COLLEAGUE_PHOTOS[photoIdx];
                    photoCounter++;

                    // Calculate distance for ripple effect
                    let scaleValue = 1;
                    if (hoveredIndex !== null) {
                      const hRow = Math.floor(hoveredIndex / 23);
                      const hCol = hoveredIndex % 23;
                      const dist = Math.sqrt(
                        (hRow - row) ** 2 + (hCol - col) ** 2,
                      );
                      if (dist === 0) scaleValue = 1.4;
                      else if (dist <= 1.5) scaleValue = 1.15;
                    }

                    return (
                      <div
                        key={i}
                        className="careers-cp-builder-node has-img"
                        onMouseEnter={() => {
                          setHoveredIndex(i);
                          setActiveTestimonial(
                            buildersQuotes[photoIdx % buildersQuotes.length],
                          );
                        }}
                        style={{
                          transform: `scale(${scaleValue})`,
                          zIndex: hoveredIndex === i ? 10 : 1,
                          transition:
                            "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      >
                        <img
                          src={currentPhoto}
                          alt="Team Member"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    );
                  }
                  return (
                    <div key={i} className="careers-cp-builder-node is-empty"></div>
                  );
                });
              })()}
            </div>
          </div>
          <div
            className="careers-cp-builders-testimonial"
            key={activeTestimonial.author}
          >
            <p className="careers-cp-builders-quote">
              &ldquo;{activeTestimonial.quote}&rdquo;
            </p>
            <div className="careers-cp-builders-author">
              <strong>{activeTestimonial.author}</strong>{" "}
              <span>{activeTestimonial.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HIRING PROCESS */}
      <section className="careers-cp-section careers-cp-hiring-process reveal">
        <div className="careers-cp-wrap">
          <div className="careers-cp-hiring-layout">
            
            {/* Left Column: Sticky Title & Description */}
            <div className="careers-cp-hiring-left">
              <div className="careers-cp-hiring-sticky-content">
                <span className="careers-cp-section-label">
                  <FiActivity size={12} /> Roadmap
                </span>
                <h2 className="careers-cp-hiring-title">Hiring Process</h2>
                <p className="careers-cp-hiring-description">
                  Our structured and transparent path is designed to discover your true potential and welcome you into our elite team.
                </p>
                <div className="careers-cp-hiring-cta-wrapper">
                  <button 
                    onClick={() => navigate("/careers/jobs")} 
                    className="careers-cp-btn careers-cp-btn-primary"
                  >
                    View Open Roles
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Scrollable Steps list */}
            <div className="careers-cp-hiring-right">
              
              {/* Step 1 */}
              <div className="careers-cp-hiring-step-item">
                <div className="careers-cp-hiring-step-num-col">
                  <span className="careers-cp-hiring-step-number">01</span>
                </div>
                <div className="careers-cp-hiring-step-content-col">
                  <h3 className="careers-cp-hiring-step-title">Apply Online</h3>
                  <p className="careers-cp-hiring-step-text">
                    Submit your application along with your portfolio, GitHub, or resume. We look for passion, unique projects, and alignment with our tech stack.
                  </p>
                  <div className="careers-cp-hiring-substep-tags">
                    <span className="careers-cp-hiring-tag-item">Resume Review</span>
                    <span className="careers-cp-hiring-tag-item">Portfolio Check</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="careers-cp-hiring-step-item">
                <div className="careers-cp-hiring-step-num-col">
                  <span className="careers-cp-hiring-step-number">02</span>
                </div>
                <div className="careers-cp-hiring-step-content-col">
                  <h3 className="careers-cp-hiring-step-title">Screening Call</h3>
                  <p className="careers-cp-hiring-step-text">
                    A quick 15-20 minute conversational call to understand your professional goals, background, expectations, and cultural alignment.
                  </p>
                  <div className="careers-cp-hiring-substep-tags">
                    <span className="careers-cp-hiring-tag-item">Culture Fit</span>
                    <span className="careers-cp-hiring-tag-item">15 Mins Call</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="careers-cp-hiring-step-item">
                <div className="careers-cp-hiring-step-num-col">
                  <span className="careers-cp-hiring-step-number">03</span>
                </div>
                <div className="careers-cp-hiring-step-content-col">
                  <h3 className="careers-cp-hiring-step-title">Technical Evaluation</h3>
                  <p className="careers-cp-hiring-step-text">
                    A deep dive into your technical skills with a practical assessment, followed by a live code review or system architecture discussion with our experts.
                  </p>
                  <div className="careers-cp-hiring-substep-tags">
                    <span className="careers-cp-hiring-tag-item">Practical Assessment</span>
                    <span className="careers-cp-hiring-tag-item">Architecture Talk</span>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="careers-cp-hiring-step-item">
                <div className="careers-cp-hiring-step-num-col">
                  <span className="careers-cp-hiring-step-number">04</span>
                </div>
                <div className="careers-cp-hiring-step-content-col">
                  <h3 className="careers-cp-hiring-step-title">Final Interview</h3>
                  <p className="careers-cp-hiring-step-text">
                    Meet key leadership team members to discuss high-level engineering challenges, team dynamics, vision, and how you can make a global impact.
                  </p>
                  <div className="careers-cp-hiring-substep-tags">
                    <span className="careers-cp-hiring-tag-item">Meet Leadership</span>
                    <span className="careers-cp-hiring-tag-item">Q&A Session</span>
                  </div>
                </div>
              </div>

              {/* Step 5 */}
              <div className="careers-cp-hiring-step-item">
                <div className="careers-cp-hiring-step-num-col">
                  <span className="careers-cp-hiring-step-number">05</span>
                </div>
                <div className="careers-cp-hiring-step-content-col">
                  <h3 className="careers-cp-hiring-step-title">Offer & Onboarding</h3>
                  <p className="careers-cp-hiring-step-text">
                    We extend a formal offer letter with a competitive package. Upon acceptance, we kickstart a smooth integration process with equipment delivery and team introductions.
                  </p>
                  <div className="careers-cp-hiring-substep-tags">
                    <span className="careers-cp-hiring-tag-item">Welcome Pack</span>
                    <span className="careers-cp-hiring-tag-item">Mentorship Start</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="careers-cp-section careers-cp-testimonials reveal">
        <div className="careers-cp-wrap">
          <div className="careers-cp-testimonials-layout">
            {/* Left Column: Side title & Navigation indicator */}
            <div className="careers-cp-testimonials-left">
              <div className="careers-cp-testimonials-large-quote">“</div>
              <h2 className="careers-cp-testimonials-side-title">What Our Team Is Saying</h2>
              
              <div className="careers-cp-testimonials-nav">
                <button
                  type="button"
                  className="careers-cp-nav-btn prev"
                  onClick={() => setTestimonialIndex((prev) => (prev === 0 ? 2 : prev - 1))}
                  aria-label="Previous testimonials"
                >
                  ←
                </button>
                <div className="careers-cp-nav-progress-track">
                  <div 
                    className="careers-cp-nav-progress-fill" 
                    style={{ transform: `translateX(${testimonialIndex * 200}%)` }} // 3 segments: 0%, 200% (middle), 400% (right)
                  />
                </div>
                <button
                  type="button"
                  className="careers-cp-nav-btn next"
                  onClick={() => setTestimonialIndex((prev) => (prev === 2 ? 0 : prev + 1))}
                  aria-label="Next testimonials"
                >
                  →
                </button>
              </div>
            </div>

            {/* Right Column: speech cards slider */}
            <div className="careers-cp-testimonials-right">
              {teamTestimonials.slice(testimonialIndex * 2, testimonialIndex * 2 + 2).map((item, idx) => (
                <div className="careers-cp-testimonial-speech-wrapper" key={idx}>
                  {/* Speech bubble card */}
                  <div className="careers-cp-testimonial-speech-card">
                    <p className="careers-cp-test-quote">{item.quote}</p>
                    <div className="careers-cp-test-stars">
                      {Array.from({ length: item.stars }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>

                  {/* Profile connections notches */}
                  <div className="careers-cp-testimonial-profile">
                    <img src={item.avatar} alt={item.author} className="careers-cp-test-avatar" />
                    <div className="careers-cp-test-meta">
                      <span className="careers-cp-test-author">{item.author}</span>
                      <span className="careers-cp-test-date">{item.role} • {item.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA SECTION (INTERNSHIP SPLIT + CONTACT FORM) */}
      <section className="careers-cp-section careers-cp-intern-split-section reveal">
        <div className="careers-cp-intern-split-wrap">
          <div className="careers-cp-intern-visual">
            <div className="careers-cp-intern-blob"></div>
            <img
              src="/images/student_intern.png"
              alt="Interns"
              className="careers-cp-intern-main-img"
            />
          </div>
          <div className="careers-cp-intern-narrative">
            <div className="careers-cp-intern-tag">Internship</div>
            <h2 className="careers-cp-intern-title-elegant">
              <span className="careers-cp-accent-word">Students</span>, build a career with purpose
            </h2>
            <p className="careers-cp-intern-body-text">
              Our student programs help you make a real impact from day one.
            </p>
            <div className="careers-cp-intern-actions">
              <button
                className="careers-cp-btn-pill-minimal"
                onClick={() => navigate("/careers/internship")}
              >
                Get Started <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="careers-cp-section careers-cp-contact-section reveal">
        <div className="careers-cp-wrap">
          <div className="careers-cp-contact-grid">
            <div className="careers-cp-contact-info">
              <div className="careers-cp-section-label">Get in touch</div>
              <h2 className="careers-cp-section-title">Don&apos;t see your role?</h2>
              <p className="careers-cp-body-text">
                We&apos;re always open to connecting. Send us your details.
              </p>
              <div className="careers-cp-contact-items">
                <div className="careers-cp-contact-item">
                  <FiMail />
                  <div>
                    <span>Email</span>
                    <p>career@devopstrioglobal.com</p>
                  </div>
                </div>
                <div className="careers-cp-contact-item">
                  <FiPhoneCall />
                  <div>
                    <span>Phone</span>
                    <p>+44 7471 482903</p>
                  </div>
                </div>
                <div className="careers-cp-contact-item">
                  <FiMapPin />
                  <div>
                    <span>Office</span>
                    <p>128 City Road, London, EC1V 2NX</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="careers-cp-form" onSubmit={handleFormSubmit}>
              <div className="careers-cp-form-field">
                <label>Full Name</label>
                <div className="careers-cp-input-wrap">
                  <FiUser />
                  <input
                    name="fullName"
                    type="text"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    required
                  />
                </div>
              </div>
              <div className="careers-cp-form-field">
                <label>Email</label>
                <div className="careers-cp-input-wrap">
                  <FiMail />
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
              </div>
              <div className="careers-cp-form-field">
                <label>Message</label>
                <div className="careers-cp-input-wrap careers-cp-textarea-wrap">
                  <FiEdit3 />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="careers-cp-btn careers-cp-btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="careers-cp-spin" /> Sending...
                  </>
                ) : (
                  <>
                    Submit <FiChevronRight />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careerspage;
