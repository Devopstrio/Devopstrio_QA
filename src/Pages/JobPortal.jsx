import React, { useState, useEffect, useRef, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMapPin,
  FiSearch,
  FiX,
  FiLoader,
  FiBriefcase,
  FiArrowLeft,
  FiUpload,
  FiActivity,
  FiCode,
  FiCpu,
  FiTerminal,
  FiGlobe,
  FiMic,
  FiVideo,
  FiMonitor,
  FiMoreHorizontal,
  FiPhone,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

import Newsletter from "../Components/Newsletter/Newsletter";

import "../Style/JobPortal.css";
import useSEO from "../hooks/useSEO";

const API_BASE_URL =
  "https://hrcopilotserver-fhfufefvb0ahg9eu.southindia-01.azurewebsites.net";
const COMPANY_NAME = "Devopstrio";

const JobPortal = () => {
  useSEO(
    "Explore Careers | Devopstrio",
    "Join our global team of cloud architects and engineers. Find the right job you deserve.",
  );

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 8;

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState(null);

  const [showLocationList, setShowLocationList] = useState(false);
  const [showRoleList, setShowRoleList] = useState(false);
  const jobsSectionRef = useRef(null);
  const locationRef = useRef(null);
  const roleRef = useRef(null);

  useEffect(() => {
    fetchJobs();
    const handleClickOutside = (event) => {
      if (locationRef.current && !locationRef.current.contains(event.target))
        setShowLocationList(false);
      if (roleRef.current && !roleRef.current.contains(event.target))
        setShowRoleList(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `${API_BASE_URL}/api/requirements/public/company/${COMPANY_NAME}`,
      );
      if (res.data.success) {
        setJobs(res.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch jobs:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = (id) => navigate(`/apply/${id}`);

  const openModal = (job) => {
    setSelectedJob(job);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedJob(null);
    document.body.style.overflow = "auto";
  };

  const dynamicCategories = useMemo(() => {
    const counts = {};
    const icons = [
      <FiCode key="code" />,
      <FiCpu key="cpu" />,
      <FiTerminal key="term" />,
      <FiGlobe key="globe" />,
      <FiActivity key="act" />,
      <FiBriefcase key="brief" />,
    ];
    jobs.forEach((j) => {
      const dept = j.department || "General";
      counts[dept] = (counts[dept] || 0) + 1;
    });
    return Object.entries(counts)
      .map(([name, count], index) => ({
        name,
        count,
        icon: icons[index % icons.length],
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 8);
  }, [jobs]);

  const allLocations = useMemo(
    () => [...new Set(jobs.map((j) => j.location).filter(Boolean))],
    [jobs],
  );
  const allRoles = useMemo(
    () => [...new Set(jobs.map((j) => j.title || j.position).filter(Boolean))],
    [jobs],
  );

  const filteredLocations = useMemo(() => {
    if (!selectedLocation) return allLocations.slice(0, 5);
    return allLocations.filter((loc) =>
      loc.toLowerCase().includes(selectedLocation.toLowerCase()),
    );
  }, [selectedLocation, allLocations]);

  const filteredRoles = useMemo(() => {
    if (!searchTerm) return allRoles.slice(0, 5);
    return allRoles.filter((role) =>
      role.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm, allRoles]);

  const filteredJobs = jobs.filter((j) => {
    const title = (j.title || j.position || "").toLowerCase();
    const loc = (j.location || "").toLowerCase();
    const dept = (j.department || "").toLowerCase();
    return (
      title.includes(searchTerm.toLowerCase()) &&
      loc.includes(selectedLocation.toLowerCase()) &&
      (selectedCategory === "all" ||
        dept.includes(selectedCategory.toLowerCase()))
    );
  });

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const currentJobs = filteredJobs.slice(
    (currentPage - 1) * jobsPerPage,
    currentPage * jobsPerPage,
  );

  const testimonials = [
    {
      text: "The recruitment process was seamless. Every note, every beat, and every nuance comes through with stunning clarity and depth.",
      name: "Seddik walid",
      role: "Product Designer",
      avatar: "https://i.pravatar.cc/150?u=1",
    },
    {
      text: "Excelente producto, fácil de enlazar y me gustó que tiene un botón que es para reducción de ruido.",
      name: "Marcus Thorne",
      role: "Senior Engineer",
      avatar: "https://i.pravatar.cc/150?u=2",
    },
    {
      text: "Very nice experience, deep rich sound quality and clear without distortion. Easy blue tooth connection.",
      name: "Elena Rodriguez",
      role: "Solutions Architect",
      avatar: "https://i.pravatar.cc/150?u=3",
    },
    {
      text: "The technical deep dives are balanced and challenging. I found a role that perfectly matches my expertise.",
      name: "Julian Voss",
      role: "Platform Ops",
      avatar: "https://i.pravatar.cc/150?u=4",
    },
  ];

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  if (loading)
    return (
      <div className="jp-page">
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <FiLoader
            className="jp-spin"
            size={48}
            color="#ce2453"
            style={{ animation: "spin 2s linear infinite" }}
          />
        </div>
      </div>
    );

  return (
    <div className="jp-page">
      {/* ── HERO ── */}
      <section className="jp-hero">
        <motion.button 
          className="jp-back-btn" 
          onClick={() => navigate("/careers")}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <FiArrowLeft /> Back to Careers
        </motion.button>

        <div className="jp-wrap">
          <motion.div 
            className="jp-hero-top-text"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="jp-hero-title">
              Connect
              <span className="jp-title-avatars">
                <motion.img initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4 }} src="https://i.pravatar.cc/150?u=12" alt="p1" />
                <motion.img initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} src="https://i.pravatar.cc/150?u=13" alt="p2" />
                <motion.img initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.6 }} src="https://i.pravatar.cc/150?u=14" alt="p3" />
              </span>
              Collaborate <br />
              <span>Anytime & Anywhere</span>
            </h1>
            <p className="jp-hero-subtitle">
              Revolutionize your career with powerful cloud and DevOps tools
              designed to enhance <br />
              collaboration and enrich your engineering interactions every time.
            </p>
          </motion.div>

          <motion.div 
            className="jp-search-bar"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="jp-search-input-group" ref={roleRef}>
              <FiSearch />
              <input
                type="text"
                placeholder="Job title or role"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setShowRoleList(true);
                }}
                onFocus={() => setShowRoleList(true)}
              />
              <AnimatePresence>
                {showRoleList && filteredRoles.length > 0 && (
                  <motion.div 
                    className="jp-suggestions"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    {filteredRoles.map((role, i) => (
                      <div
                        key={i}
                        className="jp-suggestion-item"
                        onClick={() => {
                          setSearchTerm(role);
                          setShowRoleList(false);
                        }}
                      >
                        <FiSearch /> {role}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="jp-search-input-group" ref={locationRef}>
              <FiMapPin />
              <input
                type="text"
                placeholder="All locations"
                value={selectedLocation}
                onChange={(e) => {
                  setSelectedLocation(e.target.value);
                  setShowLocationList(true);
                }}
                onFocus={() => setShowLocationList(true)}
              />
              <AnimatePresence>
                {showLocationList && filteredLocations.length > 0 && (
                  <motion.div 
                    className="jp-suggestions"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    {filteredLocations.map((loc, i) => (
                      <div
                        key={i}
                        className="jp-suggestion-item"
                        onClick={() => {
                          setSelectedLocation(loc);
                          setShowLocationList(false);
                        }}
                      >
                        <FiMapPin /> {loc || "Remote"}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <button 
              className="jp-search-submit" 
              onClick={() => jobsSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            >
              Explore
            </button>
          </motion.div>

          {/* ── VIDEO CALL MOCKUP CARD ── */}
          <motion.div 
            className="jp-hero-mockup"
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
          >
            <div className="jp-mockup-main">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Main Caller"
              />
              <div className="jp-mockup-tag">Jay Presenting</div>
              <motion.div 
                className="jp-mockup-floating-card"
                animate={{ rotate: [-6, -4, -6], y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80"
                  alt="Float"
                />
              </motion.div>
              <div className="jp-mockup-controls">
                {[FiMic, FiVideo, FiMonitor, FiMoreHorizontal].map((Icon, i) => (
                    <button key={i}><Icon /></button>
                ))}
                <button className="hangup">
                  <FiPhone />
                </button>
              </div>
            </div>
            <div className="jp-mockup-side">
              {[12, 13, 14, 15].map((u, i) => (
                  <div key={i} className="jp-side-video">
                  <img src={`https://i.pravatar.cc/300?u=${u}`} alt={`v${i}`} />
                </div>
              ))}
              <motion.div 
                className="jp-mockup-chat"
                initial={{ x: 20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <div className="chat-avatar">
                  <img src="https://i.pravatar.cc/50" alt="user" />
                </div>
                <div className="chat-msg">
                  Hey everyone, we have something important to share...
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED JOBS ── */}
      <motion.section 
        className="jp-section jp-wrap" 
        ref={jobsSectionRef}
        {...fadeUp}
      >
        <h2 className="jp-section-title">Featured Job Circulars</h2>
        {filteredJobs.length > 0 ? (
          <>
            <motion.div 
              className="jp-job-grid"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {currentJobs.map((job) => (
                <motion.div
                  key={job._id}
                  className="jp-job-box"
                  onClick={() => openModal(job)}
                  variants={fadeUp}
                  whileHover={{ y: -5, borderColor: "#ce2453" }}
                >
                  <div className="jp-job-top">
                    <div className="jp-job-logo">
                      <FiBriefcase />
                    </div>
                    <div className="jp-job-company">{COMPANY_NAME}</div>
                  </div>
                  <h3 className="jp-job-title">{job.position || job.title}</h3>
                  <div className="jp-job-loc">
                    <FiMapPin /> {job.location || "Hybrid"}
                  </div>
                  <p className="jp-job-desc">
                    {job.description?.length > 120 
                      ? `${job.description.substring(0, 120)}...` 
                      : (job.description || "Join our team of cloud experts. We are looking for talented individuals to collaborate and innovate.")}
                  </p>
                  <div className="jp-job-foot">
                    <div className="jp-job-salary">
                      {job.salaryRange || "$1500 / monthly"}
                    </div>
                    <span className="jp-job-apply">Apply Now</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {totalPages > 1 && (
              <motion.div
                style={{
                  marginTop: "60px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                }}
                {...fadeUp}
              >
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    style={{
                      background:
                        currentPage === i + 1
                          ? "var(--jp-accent-gradient)"
                          : "var(--jp-surface)",
                      color: "#fff",
                      border: "1px solid var(--jp-border)",
                      padding: "10px 20px",
                      borderRadius: "10px",
                      cursor: "pointer",
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              </motion.div>
            )}
          </>
        ) : (
          <motion.div
            style={{
              color: "var(--jp-muted)",
              padding: "80px 40px",
              maxWidth: "700px",
              margin: "0 auto",
              textAlign: "center",
            }}
            {...fadeUp}
          >
            <div
              style={{ fontSize: "3rem", marginBottom: "20px", opacity: 0.5 }}
            >
              <FiSearch />
            </div>
            <h3
              style={{
                color: "#fff",
                fontSize: "1.5rem",
                marginBottom: "16px",
              }}
            >
              No jobs currently available for your search
            </h3>
            <p style={{ lineHeight: "1.8", color: "var(--jp-muted)" }}>
              Don&apos;t worry! Even if we don&apos;t have a role that matches
              your criteria today, we are always on the lookout for great
              talent.
              <strong> Upload your resume below</strong> and our team will
              consider you as soon as a suitable position opens up.
            </p>
          </motion.div>
        )}
      </motion.section>

      {/* ── TESTIMONIALS ── */}
      <motion.section 
        className="jp-testimonials-wrap jp-wrap"
        {...fadeUp}
      >
        <div className="jp-test-header">
          <h2>Hear What Our Candidates Say About Us</h2>
          <p>
            Candidates like the recruitment process, culture, and career growth
            at Devopstrio. They mention the technical deep dives are balanced
            and challenging.
          </p>
        </div>
        <motion.div 
            className="jp-test-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
        >
          {testimonials.map((t, i) => (
            <motion.div 
                key={i} 
                className="jp-test-card"
                variants={fadeUp}
            >
              <div className="jp-test-label">Testimonial</div>
              <p className="jp-test-content">{t.text}</p>
              <FaQuoteLeft className="jp-test-quote-svg" />
              <div className="jp-test-user">
                <div className="jp-test-avatar">
                  <img src={t.avatar} alt={t.name} />
                </div>
                <div className="jp-user-info">
                  <div>{t.name}</div>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ── MATCH / CV SECTION ── */}
      <motion.section 
        className="jp-wrap"
        {...fadeUp}
      >
        <div className="jp-cv-match">
          <div style={{ maxWidth: "600px", zIndex: 2 }}>
            <h2
              className="jp-cv-title"
              style={{ fontSize: "2.5rem", color: "#fff" }}
            >
              Get Considered for Future Opportunities
            </h2>
            <p
              className="jp-cv-desc"
              style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "1.1rem",
                marginBottom: "40px",
              }}
            >
              Interested but don&apos;t see a matching role? Drop your resume
              below, and if a suitable position becomes available in the future,
              we will certainly consider your application.
            </p>
            <motion.button
              className="jp-upload-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://forms.office.com/pages/responsepage.aspx?id=yTq6JeqKkkSI7wjM0AQgFjHn9r5c8yNKvLr2WMZtxxRUMTExTFJFVDFSMEFYMldWUVRBRko0NzdVOS4u&route=shorturl", "_blank")}
              style={{
                background: "#fff",
                color: "#000",
                border: "none",
                padding: "16px 40px",
                borderRadius: "50px",
                fontWeight: "800",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <FiUpload size={20} /> Upload Your CV
            </motion.button>
          </div>
          <motion.div
            style={{
              fontSize: "180px",
              opacity: 0.1,
              position: "absolute",
              right: "-20px",
              bottom: "-20px",
              transform: "rotate(-15deg)",
            }}
            animate={{ rotate: [-15, -10, -15], y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          >
            📄
          </motion.div>
        </div>
      </motion.section>

      {/* ── NEWSLETTER ── */}
      <Newsletter />
     
      {/* ── MODAL ── */}
      <AnimatePresence>
        {selectedJob && (
            <motion.div 
                className="jp-overlay" 
                onClick={closeModal}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
            <motion.div 
                className="jp-modal" 
                onClick={(e) => e.stopPropagation()}
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
                <div
                style={{
                    padding: "32px",
                    borderBottom: "1px solid var(--jp-border)",
                    position: "relative",
                }}
                >
                <button
                    onClick={closeModal}
                    style={{
                    position: "absolute",
                    top: "24px",
                    right: "24px",
                    background: "none",
                    border: "none",
                    color: "#fff",
                    cursor: "pointer",
                    fontSize: "24px",
                    }}
                >
                    <FiX />
                </button>
                <h2
                    style={{
                    fontSize: "2rem",
                    fontWeight: "800",
                    color: "#fff",
                    margin: "0",
                    }}
                >
                    {selectedJob.position || selectedJob.title}
                </h2>
                </div>
                <div style={{ padding: "32px", flex: 1, overflowY: "auto" }}>
                <h3 style={{ color: "#fff", marginBottom: "16px" }}>
                    Description
                </h3>
                <p style={{ color: "var(--jp-muted)", lineHeight: "1.8" }}>
                    {selectedJob.description}
                </p>
                </div>
                <div
                style={{
                    padding: "24px 32px",
                    borderTop: "1px solid var(--jp-border)",
                    display: "flex",
                    justifyContent: "flex-end",
                }}
                >
                <motion.button
                    className="jp-apply-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleApply(selectedJob._id)}
                    style={{
                    background: "var(--jp-accent-gradient)",
                    color: "#fff",
                    border: "none",
                    padding: "12px 32px",
                    borderRadius: "30px",
                    fontWeight: "700",
                    }}
                >
                    Apply Now
                </motion.button>
                </div>
            </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default JobPortal;
