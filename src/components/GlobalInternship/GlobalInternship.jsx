import { useState } from "react";
import "./GlobalInternship.css";

import CtaFinalies from "../CtaFinalies/CtaFinalies";

import Frame4 from "../../assets/images/Site_img/Frame_4.png";
import MapImg from "../../assets/images/Site_img/Map.png";
import StudentsImg from "../../assets/images/Site_img/students.png";
import Stdent1Img from "../../assets/images/Site_img/students2.png";
import Students2Img from "../../assets/images/Site_img/students1.png";
import BenefitsImg from "../../assets/images/Site_img/Benefits.png";
import Benefits1Img from "../../assets/images/Site_img/Benefits1.png";
import QRCodeImg from "../../assets/images/Site_img/QRCode.png";

const GlobalInternship = () => {
  const [activeTab, setActiveTab] = useState("college");

  const scrollToCTA = (e) => {
    if (e) e.preventDefault();
    const ctaSection = document.getElementById("gi-cta-section");
    if (ctaSection) {
      ctaSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const PARTNERS = [
    { name: "Appian", logo: "/images/partners/Microsoft.svg" },
    { name: "AWS", logo: "/images/partners/lenovo.svg" },
    { name: "IBM", logo: "/images/partners/bp-logo.svg" },
    { name: "RedHat", logo: "/images/partners/Boviet_Solar.png" },
    { name: "Salesforce", logo: "/images/partners/BT.svg" },
    { name: "Google", logo: "/images/partners/gxo.svg" },
    { name: "godaddy", logo: "/images/partners/godaddy.svg" },
    { name: "Virgin", logo: "/images/partners/Virgin.svg" },
    { name: "Virgin", logo: "/images/partners/Microsoft.svg" },
    { name: "Virgin", logo: "/images/partners/lenovo.svg" },
  ];

  return (
    <div className="gi-wrapper">
      {/* Hero Section */}
      <section className="gi-hero" aria-label="Global Internship hero">
        <div className="gi-hero__container">
          <div className="gi-hero__left">
            <div className="gi-hero__pill">Global Internship & Learning Program</div>

            <h1 className="gi-hero__title">
              <span className="gi-hero__titleLine gi-hero__titleLine--accent">
                Learn. Grow.
              </span>
              <span className="gi-hero__titleLine">Go Global.</span>
            </h1>

            <p className="gi-hero__lead">
              Whether you're a college student, a fresh graduate, or a job seeker
              ready to break into tech Devopstrio gives you the skills, mentorship,
              and global network to launch your career. No experience needed.
            </p>

            <div className="gi-hero__actions">
              <a
                className="gi-hero__btn gi-hero__btn--primary"
                href="#gi-cta-section"
                onClick={scrollToCTA}
              >
                Apply Now <i className="ri-arrow-right-line" aria-hidden="true" />
              </a>
              <a
                className="gi-hero__btn gi-hero__btn--ghost"
                href="#gi-cta-section"
                onClick={scrollToCTA}
              >
                Find your path <i className="ri-arrow-down-line" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="gi-hero__right" aria-hidden="true">
            <div className="gi-hero__imageFrame">
              <div className="gi-hero__imageCircle">
                <img src={Frame4} alt="Global Internship" className="gi-hero__image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <div className="partner-slider">
        <div className="partner-track">
          {[...PARTNERS, ...PARTNERS].map((item, i) => (
            <div className="partner-card" key={i}>
              <img src={item.logo} alt={item.name} />
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <section className="gi-stats">
        <div className="gi-stats__container">
          <div className="gi-stat">
            <span className="gi-stat__num">10+</span>
            <span className="gi-stat__label">Countries</span>
          </div>
          <div className="gi-stat">
            <span className="gi-stat__num">100%</span>
            <span className="gi-stat__label">Remote</span>
          </div>
          <div className="gi-stat">
            <span className="gi-stat__num">3-6</span>
            <span className="gi-stat__label">Months options</span>
          </div>
          <div className="gi-stat">
            <span className="gi-stat__num">Free</span>
            <span className="gi-stat__label">To Join</span>
          </div>
        </div>
      </section>

      {/* Community Map Section */}
      <section className="gi-community">
        <div className="gi-container">
          <h2 className="gi-section-title gi-text-center">Our Internship Community Spans:</h2>
          <div className="gi-map-wrapper">
            <img src={MapImg} alt="World Map" className="gi-map" />
            <div className="gi-map-marker gi-marker-germany">
              <div className="gi-marker-label"><img src="https://flagcdn.com/w20/de.png" alt="DE" /> Germany</div>
            </div>
            <div className="gi-map-marker gi-marker-uk">
              <div className="gi-marker-label"><img src="https://flagcdn.com/w20/gb.png" alt="UK" /> UK</div>
            </div>
            <div className="gi-map-marker gi-marker-india">
              <div className="gi-marker-label"><img src="https://flagcdn.com/w20/in.png" alt="IN" /> India</div>
            </div>
            <div className="gi-map-marker gi-marker-brazil">
              <div className="gi-marker-label"><img src="https://flagcdn.com/w20/br.png" alt="BR" /> Brazil</div>
            </div>
            <div className="gi-map-marker gi-marker-australia">
              <div className="gi-marker-label"><img src="https://flagcdn.com/w20/au.png" alt="AU" /> Australia</div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Stages Section */}
      <section className="gi-stages">
        <div className="gi-container gi-text-center">
          <span className="gi-subtitle">Who this is for</span>
          <h2 className="gi-section-title gi-title-grad">One program. Every stage of your career.</h2>
          <p className="gi-section-desc">From final-year student to career switcher. Devopstrio adapts to where you are right now.</p>

          <div className="gi-tabs">
            <button className={`gi-tab ${activeTab === 'college' ? 'active' : ''}`} onClick={() => setActiveTab('college')}>College Students</button>
            <button className={`gi-tab ${activeTab === 'grad' ? 'active' : ''}`} onClick={() => setActiveTab('grad')}>Fresh Graduates</button>
            <button className={`gi-tab ${activeTab === 'career' ? 'active' : ''}`} onClick={() => setActiveTab('career')}>Job Seekers</button>
          </div>

          <div className="gi-stage-content">
            <div className="gi-stage-grid">
              <div className="gi-stage-left">
                {activeTab === 'college' && (
                  <>
                    <h3 className="gi-stage-title">Still in college? We built this for you</h3>
                    <p className="gi-stage-desc">Our internships are designed to fit your academic schedule while providing industry-standard training.</p>
                    <ul className="gi-feature-list">
                      <li className="gi-feature-item">
                        <span className="gi-feature-num">01</span>
                        <div className="gi-feature-text">
                          <h4>Learning-Focused Check-ins</h4>
                          <p>Weekly syncs with industry mentors to track your growth and answer questions.</p>
                        </div>
                      </li>
                      <li className="gi-feature-item">
                        <span className="gi-feature-num">02</span>
                        <div className="gi-feature-text">
                          <h4>Real-World Case Studies</h4>
                          <p>Work on actual problems faced by tech companies, not just theoretical tasks.</p>
                        </div>
                      </li>
                      <li className="gi-feature-item">
                        <span className="gi-feature-num">03</span>
                        <div className="gi-feature-text">
                          <h4>Global Network Access</h4>
                          <p>Connect with peers and professionals from across the globe in our community.</p>
                        </div>
                      </li>
                      <li className="gi-feature-item">
                        <span className="gi-feature-num">04</span>
                        <div className="gi-feature-text">
                          <h4>Flexible Project Options</h4>
                          <p>Choose projects that align with your interests and academic requirements.</p>
                        </div>
                      </li>
                    </ul>
                  </>
                )}
                {activeTab === 'grad' && (
                  <>
                    <h3 className="gi-stage-title">Degree done. Experience is next.</h3>
                    <p className="gi-stage-desc">You graduated but every job asks for experience you don't have yet. Devopstrio fixes that. Get hands-on with live projects, sharpen your skills, and walk out with credentials that open real doors.</p>
                    <ul className="gi-feature-list">
                      <li className="gi-feature-item">
                        <span className="gi-feature-num">01</span>
                        <div className="gi-feature-text">
                          <h4>Portfolio of real, provable work</h4>
                          <p>Build actual deliverables in Cloud, DevOps, or Development that any employer can verify and assess.</p>
                        </div>
                      </li>
                      <li className="gi-feature-item">
                        <span className="gi-feature-num">02</span>
                        <div className="gi-feature-text">
                          <h4>Close the experience gap fast</h4>
                          <p>Structured 3-6 month program gives you the bank record employers want - without waiting years.</p>
                        </div>
                      </li>
                      <li className="gi-feature-item">
                        <span className="gi-feature-num">03</span>
                        <div className="gi-feature-text">
                          <h4>LOR from a global UK firm</h4>
                          <p>Carries real weight with employers in India, UK, Singapore and the Middle East.</p>
                        </div>
                      </li>
                      <li className="gi-feature-item">
                        <span className="gi-feature-num">04</span>
                        <div className="gi-feature-text">
                          <h4>Fast-track to employment</h4>
                          <p>High performers are considered for employment offers or referrals into our client network.</p>
                        </div>
                      </li>
                    </ul>
                  </>
                )}
                {activeTab === 'career' && (
                  <>
                    <h3 className="gi-stage-title">Ready to break into tech? Start here.</h3>
                    <p className="gi-stage-desc">Non-tech background. Career gap. Looking to switch industries. None of this disqualifies you. What we care about is commitment. Our program skills you up from scratch with real mentorship and live projects.</p>
                    <ul className="gi-feature-list">
                      <li className="gi-feature-item">
                        <span className="gi-feature-num">01</span>
                        <div className="gi-feature-text">
                          <h4>Beginner-friendly onboarding</h4>
                          <p>Our mentors meet you where you are and build your technical confidence progressively from basics.</p>
                        </div>
                      </li>
                      <li className="gi-feature-item">
                        <span className="gi-feature-num">02</span>
                        <div className="gi-feature-text">
                          <h4>In-demand tech skills</h4>
                          <p>Learn Cloud, DevOps, web development, or digital marketing skills that command strong salaries globally.</p>
                        </div>
                      </li>
                      <li className="gi-feature-item">
                        <span className="gi-feature-num">03</span>
                        <div className="gi-feature-text">
                          <h4>Credential that proves your growth</h4>
                          <p>Certificate + LOR you can add directly to your LinkedIn, CV, and job applications immediately.</p>
                        </div>
                      </li>
                      <li className="gi-feature-item">
                        <span className="gi-feature-num">04</span>
                        <div className="gi-feature-text">
                          <h4>Global job network access</h4>
                          <p>Tap into Devopstrio's professional community across India, UK, Singapore and the Middle East.</p>
                        </div>
                      </li>
                    </ul>
                  </>
                )}
              </div>
              <div className="gi-stage-right">
                <img
                  src={activeTab === 'college' ? StudentsImg : activeTab === 'grad' ? Stdent1Img : Students2Img}
                  alt="Target Audience"
                  className="gi-stage-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Features Section */}
      <section className="gi-grid-features">
        <div className="gi-container gi-text-center">
          <h2 className="gi-section-title">Everything you need to launch your tech career</h2>
          <p className="gi-section-desc">
            Beyond certificates every element is built to develop real <br />
            industry skills and open real global doors.
          </p>

          <div className="gi-grid">
            <div className="gi-grid-card">
              <div className="gi-card-icon-box">
                <i className="ri-user-star-line"></i>
              </div>
              <h3 className="gi-card-title-pink">Expert Mentorship</h3>
              <p>Weekly sessions with senior DevOps and development professionals. Real guidance, feedback, and code reviews from engineers who've worked at global scale.</p>
            </div>
            <div className="gi-grid-card">
              <div className="gi-card-icon-box">
                <i className="ri-global-line"></i>
              </div>
              <h3 className="gi-card-title-pink">Global Community</h3>
              <p>Collaborate with peers across India, UK, Singapore, Malaysia and the Middle East. Build an international professional network from day one — no matter where you are.</p>
            </div>
            <div className="gi-grid-card">
              <div className="gi-card-icon-box">
                <i className="ri-earth-line"></i>
              </div>
              <h3 className="gi-card-title-pink">Real-World Projects</h3>
              <p>Actual industry-grade assignments in Cloud, DevOps, Development and Digital Marketing. Not toy exercises. Not simulations. Real deliverables you can show to employers.</p>
            </div>
            <div className="gi-grid-card">
              <div className="gi-card-icon-box">
                <i className="ri-award-line"></i>
              </div>
              <h3 className="gi-card-title-pink">LOR + Certification</h3>
              <p>Internship Completion Certificate and Letter of Recommendation from a UK-registered global company trusted by Microsoft, Airbnb, BP and GoDaddy.</p>
            </div>
            <div className="gi-grid-card">
              <div className="gi-card-icon-box">
                <i className="ri-briefcase-line"></i>
              </div>
              <h3 className="gi-card-title-pink">Job Opportunities</h3>
              <p>Top performers are considered for Devopstrio employment offer letters and referrals into our global client network. Your internship could be the start of your career.</p>
            </div>
            <div className="gi-grid-card">
              <div className="gi-card-icon-box">
                <i className="ri-time-line"></i>
              </div>
              <h3 className="gi-card-title-pink">Flexible Schedule</h3>
              <p>Evening sessions and weekend tasks built around your existing life — college, part-time work, job hunting, or family. 100% remote. Zero commute.</p>
            </div>
            <div className="gi-button">
              <button
                className="gi-apply-btn"
                onClick={() => window.open("https://forms.office.com/pages/responsepage.aspx?id=yTq6JeqKkkSI7wjM0AQgFv43VAq2y4NIsnG51xqapO9UOVpYOTVUUEhTOEpPQjc1OEFVSUdLMkRJQy4u&route=shorturl")}
              > Apply Now
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="gi-why">
        <div className="gi-container">
          <div className="gi-why-grid">
            <div className="gi-why-left">
              <img src={BenefitsImg} alt="Career Professional" className="gi-why-img" />
            </div>
            <div className="gi-why-right">
              <h2 className="gi-section-title">Why people choose Devopstrio</h2>
              <p className="gi-section-desc">We bridge the gap between education and employment.</p>

              <ul className="gi-why-list">
                <li>
                  <h4>Bridge the gap to career opportunity</h4>
                  <p>Our program is designed to give you the exact skills employers are looking for right now.</p>
                </li>
                <li>
                  <h4>Strengthen your CV in a fast-paced field</h4>
                  <p>Add real project experience to your resume that stands out in the competitive tech market.</p>
                </li>
                <li>
                  <h4>Gain real-world, global experience</h4>
                  <p>Work on international projects and collaborate with teams across different time zones.</p>
                </li>
                <li>
                  <h4>Earn flexible rewards</h4>
                  <p>Top performers receive bonuses, recommendations, and exclusive job opportunities.</p>
                </li>
              </ul>
              <button
                className="gi-apply-btn"
                onClick={() => window.open("https://devopstrio.co.uk/insights-knowledge/undefined/69fc1ee77230edf42505cfb7/reader")}
              >
                Explore the Programs <i className="ri-arrow-right-line"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="gi-process">
        <div className="gi-container">
          <span className="gi-subtitle">How it works</span>
          <h2 className="gi-section-title gi-title-process">From application to certification</h2>
          <p className="gi-section-desc-left">Five simple steps. Get started in days, not months.</p>

          <div className="gi-process-steps">
            <div className="gi-process-step">
              <div className="gi-step-circle">01</div>
              <h3>Register online</h3>
              <p>Fill the application form with your background and area of interest</p>
            </div>
            <div className="gi-process-step">
              <div className="gi-step-circle">02</div>
              <h3>Screening</h3>
              <p>Our team reviews and shortlists based on aptitude, interest, and fit</p>
            </div>
            <div className="gi-process-step">
              <div className="gi-step-circle">03</div>
              <h3>onboarding & mentorship</h3>
              <p>Work on structured assignments with weekly mentor guidance and reviews</p>
            </div>
            <div className="gi-process-step">
              <div className="gi-step-circle">04</div>
              <h3>Certify & grow</h3>
              <p>Complete, receive your LOR + certificate, unlock career opportunities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Domain Selection Section */}
      <section className="gi-domains">
        <div className="gi-container gi-text-center">
          <span className="gi-subtitle">Your Path</span>
          <h2 className="gi-section-title">Choose your domain</h2>

          <div className="gi-domain-grid">
            <div className="gi-domain-card">
              <h3>Cloud Engineering</h3>
              <p>Master AWS, Azure, and Google Cloud Infrastructure.</p>
              <button className="gi-view-btn">View Track <i className="ri-arrow-right-s-line"></i></button>
            </div>
            <div className="gi-domain-card">
              <h3>AI on Security</h3>
              <p>Learn AI Security, Cyber Security and Data Security.</p>
              <button className="gi-view-btn">View Track <i className="ri-arrow-right-s-line"></i></button>
            </div>
            <div className="gi-domain-card">
              <h3>AI on Digital Transformation</h3>
              <p>Learn Digital Transformation, and Cloud Engineering.</p>
              <button className="gi-view-btn">View Track <i className="ri-arrow-right-s-line"></i></button>
            </div>
            <div className="gi-domain-card">
              <h3>AI on Automation </h3>
              <p>Learn AI, Machine Learning, Deep Learning and NLP.</p>
              <button className="gi-view-btn">View Track <i className="ri-arrow-right-s-line"></i></button>
            </div>
          </div>
        </div>
      </section>

      {/* Completion Section */}
      <section className="gi-completion">
        <div className="gi-container gi-text-center">
          <span className="gi-subtitle">Recognition</span>
          <h2 className="gi-section-title gi-title-grad">What you earn when you complete</h2>
          <p className="gi-section-desc">
            Devopstrio is a UK-registered company trusted by Microsoft, Airbnb, BP, GoDaddy, and Heathrow.
            Your certificate carries real global weight.
          </p>

          <div className="gi-completion-visual">
            <div className="gi-completion-labels gi-labels-left">
              <div className="gi-label-minimal">Internship Completion Certificate <span className="gi-dot"></span></div>
              <div className="gi-label-minimal">Letter of Recommendation (LOR) <span className="gi-dot"></span></div>
              <div className="gi-label-minimal">Skill & performance evaluation report <span className="gi-dot"></span></div>
              <div className="gi-label-minimal">Pre-placement offer <span className="gi-dot"></span></div>
              <div className="gi-label-minimal">Access to Devopstrio global alumni network <span className="gi-dot"></span></div>
              {/* <button 
                className="gi-apply-btn-small"
                onClick={scrollToCTA}
              >
                Apply Now <i className="ri-arrow-right-line"></i>
              </button> */}
            </div>
            <div className="gi-completion-image">
              <img src={Benefits1Img} alt="Successful Intern" />
            </div>
            <div className="gi-completion-labels gi-labels-right">
              <div className="gi-label-minimal"><span className="gi-dot"></span> pathway to employment</div>
              <div className="gi-label-minimal"><span className="gi-dot"></span> LinkedIn-shareable digital credential</div>
              <div className="gi-label-minimal"><span className="gi-dot"></span> Portfolio of real, provable work</div>
              <div className="gi-label-minimal"><span className="gi-dot"></span> Global job network access</div>
              <div className="gi-label-minimal"><span className="gi-dot"></span> Expert Mentorship</div>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="gi-feedback">
        <div className="gi-container gi-text-center">
          <h2 className="gi-section-title">Our Interns Feedback</h2>
          <p className="gi-section-desc">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>

          <div className="gi-feedback-slider">
            <div className="gi-feedback-track">
              {/* Original 4 cards duplicated for infinite scroll */}
              {[1, 2].map((i) => (
                <div key={i} className="gi-track-set">
                  <div className="gii-feedback-card">
                    <p className="gi-feedback-quote">"I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. Highly recommend!"</p>
                    <div className="gi-stars">
                      <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                    </div>
                    <div className="gi-user-vertical">
                      <img src="https://i.pravatar.cc/150?u=jane" alt="Jane Smith" />
                      <strong>Jane Smith</strong>
                      <span>Freelance Designer</span>
                    </div>
                  </div>

                  <div className="gii-feedback-card">
                    <p className="gi-feedback-quote">"I learned more in 3 months here than in my entire college degree. Highly recommended for any aspiring DevOps engineer."</p>
                    <div className="gi-stars">
                      <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                    </div>
                    <div className="gi-user-vertical">
                      <img src="https://i.pravatar.cc/150?u=mark" alt="Mark T." />
                      <strong>Mark T.</strong>
                      <span>DevOps Engineer</span>
                    </div>
                  </div>

                  <div className="gii-feedback-card">
                    <p className="gi-feedback-quote">"The global network I built during this program helped me land my first remote job in the UK. Truly life-changing!"</p>
                    <div className="gi-stars">
                      <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                    </div>
                    <div className="gi-user-vertical">
                      <img src="https://i.pravatar.cc/150?u=anita" alt="Anita R." />
                      <strong>Anita R.</strong>
                      <span>Full Stack Dev</span>
                    </div>
                  </div>

                  <div className="gii-feedback-card">
                    <p className="gi-feedback-quote">"I was hesitant to switch, but I'm glad I took the plunge. The control panel is user-friendly and I love the one-click installs."</p>
                    <div className="gi-stars">
                      <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                    </div>
                    <div className="gi-user-vertical">
                      <img src="https://i.pravatar.cc/150?u=sarah" alt="Sarah Johnson" />
                      <strong>Sarah Johnson</strong>
                      <span>Blogger</span>
                    </div>
                  </div>

                  <div className="gii-feedback-card">
                    <p className="gi-feedback-quote">"The AI-powered learning modules made complex concepts so easy to grasp. Best decision ever."</p>
                    <div className="gi-stars">
                      <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-half-line"></i>
                    </div>
                    <div className="gi-user-vertical">
                      <img src="https://i.pravatar.cc/150?u=david" alt="David L." />
                      <strong>David L.</strong>
                      <span>Data Scientist</span>
                    </div>
                  </div>

                  <div className="gii-feedback-card">
                    <p className="gi-feedback-quote">"Outstanding mentorship! The code reviews were deep and helped me understand production-grade DevOps practices."</p>
                    <div className="gi-stars">
                      <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                    </div>
                    <div className="gi-user-vertical">
                      <img src="https://i.pravatar.cc/150?u=robert" alt="Robert K." />
                      <strong>Robert K.</strong>
                      <span>SRE @ CloudFlow</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="gi-cta" id="gi-cta-section">
        <CtaFinalies />
      </section>

      {/* Footer Info */}
      <footer className="ip-cinematic-footer">
        <div className="ip-footer-content">
          <h2 className="ip-footer-logo">
            DEVOPSTRIO <span>INTERN</span>
          </h2>
          <div className="ip-footer-divider"></div>
          <p className="ip-footer-query">
            Questions? Our engineering team is here.
          </p>
          <a
            href="mailto:internship@devopstrioglobal.com"
            className="ip-footer-email"
          >
            internship@devopstrioglobal.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default GlobalInternship;
