import React from "react";
import { Link } from "react-router-dom";
import Newsletter from "../components/Newsletter/Newsletter";
import Cta from "../components/Cta/Cta";

const NotFoundPage = () => {
  return (
    <div
      className="page-wrapper"
      style={{ background: "#0a0a0a", minHeight: "100vh", color: "#ffffff" }}
    >
      <section style={{ padding: "200px 0 100px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "10rem",
            marginBottom: "0",
            background: "linear-gradient(90deg, #522c72, #ce2453)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          404
        </h1>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Page Not Found
        </h2>
        <p
          style={{ color: "#a0a0a0", fontSize: "1.2rem", marginBottom: "40px" }}
        >
          The page you are looking for might have been removed or is temporarily
          unavailable.
        </p>
        <Link
          to="/"
          style={{
            padding: "15px 40px",
            background: "#ce2453",
            color: "white",
            borderRadius: "40px",
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Return Home
        </Link>
      </section>
      <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
        <Newsletter />
      </div>      <Cta />
    </div>
  );
};

export default NotFoundPage;
