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
} from "react-icons/fi";

import Careershero from "../components/Hero/CareeersHeroPage";
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
  useSEO(
    "Careers at Devopstrio | DevOps & Cloud Engineering Jobs",
    "Join Devopstrio&apos;s team of cloud architects, DevOps engineers, and AI specialists.",
  );

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

    // Preload Images for the Builders grid
    ALL_COLLEAGUE_PHOTOS.forEach((photo) => {
      const img = new Image();
      img.src = photo;
    });

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
      quote: "Amazing learning experience and supportive team.",
      author: "- Intern",
      avatar: Ooviya1,
    },
    {
      quote: "The culture here encourages rapid experimentation and learning.",
      author: "- Backend Engineer",
      avatar: Punitha1,
    },
    {
      quote: "Every day we're pushing the boundaries of what's possible in cloud infra.",
      author: "- DevOps Lead",
      avatar: Saga1,
    },
    {
      quote: "Technical excellence and peer support are at our core every single day.",
      author: "- Fullstack Dev",
      avatar: Serma1,
    },
    {
      quote: "A place where your vision translates into real-world execution rapidly.",
      author: "- Cloud Architect",
      avatar: Subbiah1,
    },
    {
      quote: "Fast iteration and high impact—exactly where I want to be as an engineer.",
      author: "- SRE Engineer",
      avatar: Kishore1,
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
    <div className="cp-page">
      <button
        type="button"
        className={`cp-giSideTab ${giTabOpening ? "cp-giSideTab--opening" : ""}`}
        onClick={handleOpenGlobalInternship}
        aria-label="Open Global Internship page"
      >
        <span className="cp-giSideTab__text">Explore our Global Internship</span>
      </button>
      
      <Careershero />

      {/* ── OPPORTUNITIES FOR YOU TO EXPLORE ── */}
      <section
        className="cp-section cp-opportunities-modern reveal"
        id="latest-jobs"
      >
        <div className="cp-wrap">
          <div className="cp-opps-header-centered">
            <h2 className="cp-opps-main-title">
              Some opportunities for <br /> you to explore
            </h2>
          </div>
          <div className="cp-opps-grid">
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
              <div key={idx} className="cp-opp-card-modern">
                <h3 className="cp-opp-card-title">{opp.title}</h3>
                <p className="cp-opp-card-desc">{opp.desc}</p>
                <div className="cp-opp-card-footer">
                  <span className="cp-opp-tag-green">Full time</span>
                  <a
                    href={opp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cp-opp-view-btn"
                  >
                    View JD
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ── Hiring Process ── */}
      <section className="cp-section cp-hiring-process reveal">
        <div className="cp-wrap">
          <div className="cp-hiring-header">
            <h2 className="cp-hiring-title">Hiring Process</h2>
            <p className="cp-hiring-description">
              Here&apos;s what to expect when you apply for a role at
              Devopstrio:
            </p>
          </div>

          <div className="cp-hiring-container">
            <div className="cp-hiring-steps">
              {/* Step 1 */}
              <div className="cp-hiring-step">
                <div className="cp-hiring-step-number">
                  <span>1</span>
                </div>
                <div className="cp-hiring-step-content">
                  <h3 className="cp-hiring-step-title">Apply Online</h3>
                  <p className="cp-hiring-step-description">
                    Submit your application with your portfolio or resume.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="cp-hiring-step">
                <div className="cp-hiring-step-number">
                  <span>2</span>
                </div>
                <div className="cp-hiring-step-content">
                  <h3 className="cp-hiring-step-title">Screening Call</h3>
                  <p className="cp-hiring-step-description">
                    Quick intro call to understand your skills & goals.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="cp-hiring-step">
                <div className="cp-hiring-step-number">
                  <span>3</span>
                </div>
                <div className="cp-hiring-step-content">
                  <h3 className="cp-hiring-step-title">Technical Round</h3>
                  <p className="cp-hiring-step-description">
                    Practical tasks or discussion based on your role.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="cp-hiring-step">
                <div className="cp-hiring-step-number">
                  <span>4</span>
                </div>
                <div className="cp-hiring-step-content">
                  <h3 className="cp-hiring-step-title">Final Interview</h3>
                  <p className="cp-hiring-step-description">
                    Meet the team and discuss culture fit.
                  </p>
                </div>
              </div>

              {/* Step 5 */}
              <div className="cp-hiring-step">
                <div className="cp-hiring-step-number">
                  <span>5</span>
                </div>
                <div className="cp-hiring-step-content">
                  <h3 className="cp-hiring-step-title">Offer & Onboarding</h3>
                  <p className="cp-hiring-step-description">
                    Get your offer and start your journey with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Team Says */}
      <section className="cp-section cp-testimonials reveal">
        <div className="cp-wrap">
          <h2 className="cp-section-title">What Our Team Says</h2>
          
          <div className="cp-testimonials-grid">
            {teamTestimonials.slice(testimonialIndex * 2, testimonialIndex * 2 + 2).map((item, idx) => (
              <div className="cp-testimonial-card shadow-lg" key={idx}>
                <div className="cp-test-avatar-wrapper">
                  <img src={item.avatar} alt="Team Member" />
                </div>
                <div className="cp-test-content">
                  <p className="cp-test-quote">&ldquo;{item.quote}&rdquo;</p>
                  <p className="cp-test-author">{item.author}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="cp-carousel-dots">
            {[0, 1, 2].map((i) => (
              <span 
                key={i}
                className={`dot ${testimonialIndex === i ? "active" : ""}`}
                onClick={() => setTestimonialIndex(i)}
                style={{ cursor: "pointer" }}
              ></span>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOIN A TEAM OF BUILDERS ── */}
      <section className="cp-section cp-builders">
        <div className="cp-wrap">
          <div className="cp-life-header">
            <h2 className="cp-life-title">
              Join Our Team @ <span className="cp-life-accent">Devopstrio</span>
            </h2>
            <p className="cp-life-main-desc">
              Devopstrio is searching for extraordinary individuals to join our
              team to drive continuous establishments in the innovation of cloud
              technology.
            </p>
            <div className="cp-life-actions">
              <button
                className="cp-life-btn-cta"
                onClick={() => navigate("/careers/jobs")}
              >
                See Open Positions
              </button>
            </div>
          </div>
          <div className="cp-builders-grid-wrap">
            <div
              className="cp-builders-grid"
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
                        className="cp-builder-node has-img"
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
                    <div key={i} className="cp-builder-node is-empty"></div>
                  );
                });
              })()}
            </div>
          </div>
          <div
            className="cp-builders-testimonial"
            key={activeTestimonial.author}
          >
            <p className="cp-builders-quote">
              &ldquo;{activeTestimonial.quote}&rdquo;
            </p>
            <div className="cp-builders-author">
              <strong>{activeTestimonial.author}</strong>{" "}
              <span>{activeTestimonial.role}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTERNSHIP ── */}
      <section className="cp-section cp-intern-split-section reveal">
        <div className="cp-intern-split-wrap">
          <div className="cp-intern-visual">
            {/* <div className="cp-intern-grid"></div> */}
            <div className="cp-intern-blob"></div>
            <img
              src="/images/student_intern.png"
              alt="Interns"
              className="cp-intern-main-img"
            />
          </div>
          <div className="cp-intern-narrative">
            <div className="cp-intern-tag">Internship</div>
            <h2 className="cp-intern-title-elegant">
              <span className="cp-accent-word">Students</span>, build a career
              with purpose
            </h2>
            <p className="cp-intern-body-text">
              Our student programs help you make a real impact from day one.
            </p>
            <div className="cp-intern-actions">
              <button
                className="cp-btn-pill-minimal"
                onClick={() => navigate("/careers/internship")}
              >
                Get Started <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="cp-section cp-contact-section">
        <div className="cp-wrap">
          <div className="cp-contact-grid">
            <div className="cp-contact-info">
              <div className="cp-section-label">Get in touch</div>
              <h2 className="cp-section-title">Don&apos;t see your role?</h2>
              <p className="cp-body-text">
                We&apos;re always open to connecting. Send us your details.
              </p>
              <div className="cp-contact-items">
                <div className="cp-contact-item">
                  <FiMail />
                  <div>
                    <span>Email</span>
                    <p>career@devopstrioglobal.com</p>
                  </div>
                </div>
                <div className="cp-contact-item">
                  <FiPhoneCall />
                  <div>
                    <span>Phone</span>
                    <p>+44 7471 482903</p>
                  </div>
                </div>
                <div className="cp-contact-item">
                  <FiMapPin />
                  <div>
                    <span>Office</span>
                    <p>128 City Road, London, EC1V 2NX</p>
                  </div>
                </div>
              </div>
            </div>
            <form className="cp-form" onSubmit={handleFormSubmit}>
              <div className="cp-form-field">
                <label>Full Name</label>
                <div className="cp-input-wrap">
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
              <div className="cp-form-field">
                <label>Email</label>
                <div className="cp-input-wrap">
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
              <div className="cp-form-field">
                <label>Message</label>
                <div className="cp-input-wrap cp-textarea-wrap">
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
                className="cp-btn cp-btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="cp-spin" /> Sending...
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
