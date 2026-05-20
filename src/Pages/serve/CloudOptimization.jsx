import React from "react";

import Serviceshero from "../../components/Hero/Serviceshero";
import Newsletter from "../../components/Newsletter/Newsletter";
import Cta from "../../components/Cta/Cta";
import "../../Style/serve/CloudOptimization.css";

const CloudOptimization = () => {
  return (
    <div className="page-wrapper">
      <Serviceshero />
      <section style={{ padding: "160px 0 100px", textAlign: "center" }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
          Cloud Optimization
        </h1>
        <p style={{ color: "#a0a0a0", fontSize: "1.2rem" }}>
          Experience the future of Cloud & AI innovation.
        </p>
      </section>
      <section style={{ padding: "100px 0", textAlign: "center" }}>
        <div
          style={{
            background: "#1a1a1a",
            padding: "60px",
            borderRadius: "20px",
            margin: "0 20px",
          }}
        >
          <h2>Details Coming Soon</h2>
          <p>
            We are currently developing this section to provide you with the
            best experience.
          </p>
        </div>
      </section>
      <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
        <Newsletter />
      </div>      <Cta />
    </div>
  );
};

export default CloudOptimization;
