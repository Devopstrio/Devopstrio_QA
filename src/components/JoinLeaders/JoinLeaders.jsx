import React from "react";
import { useNavigate } from "react-router-dom";
import "./JoinLeaders.css";
import BgImage from "../../assets/images/join-Leader.png";

const JoinLeaders = () => {
  const navigate = useNavigate();

  return (
    <section
      className="join-section"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="join-overlay"></div>

      <div className="join-container">
        {/* LEFT CONTENT */}
        <div className="join-left">
          <div className="badge">Driven by Innovation</div>
          <h2>Engineering The Future Of Digital Excellence</h2>
        </div>

        {/* RIGHT BOX */}
        <div className="join-box">
          <h3>Build What Matters</h3>
          <p>
            At Devopstrio, we don’t just deliver software — we architect
            scalable platforms, resilient systems, and intelligent solutions
            that empower global enterprises. Join a team where innovation,
            ownership, and impact define everything we build.
          </p>

          <button className="join-btn" onClick={() => navigate("/careers")}>
            Discover Opportunities →
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinLeaders;
