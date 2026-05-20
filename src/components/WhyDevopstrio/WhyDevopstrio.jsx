import React from "react";
import advances from "../../assets/images/whydevopstrio.png";
import "./WhyDevopstrio.css";
import {
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
  HiOutlineSquares2X2,
} from "react-icons/hi2";

export default function WhyDevopstrio() {
  return (
    <section className="adv-root">
      <div className="adv-container">
        {/* LEFT SIDE */}
        <div className="adv-left">
          <div className="adv-image-wrap">
            <div className="data-bg"></div>
            <img
              src={advances}
              alt="Advantage Illustration"
              className="adv-image"
            />
            {/* FLOATING CARD */}
            <div className="adv-float-card">
              <div className="adv-float-number">100+</div>
              <div className="adv-float-text">Experts Onboard</div>

              <div className="adv-avatars">
                <span />
                <span />
                <span />
                <span className="adv-more">+45</span>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="adv-right">
          <span className="adv-pill">THE ADVANTAGE</span>

          <h2 className="adv-title">
            Engineered for Reliability, <br />
            Designed for Growth.
          </h2>

          <div className="adv-points">
            <div className="adv-point">
              <div className="adv-icon">
                <HiOutlineRocketLaunch />
              </div>
              <div>
                <h4>Cloud-Native Core</h4>
                <p dangerouslySetInnerHTML={{ __html: "Using <a href='/partners/azure' class='about-inline-link'>Azure</a>, <a href='/partners/aws' class='about-inline-link'>AWS</a>, and <a href='/partners/gcp' class='about-inline-link'>GCP</a> best practices, we design <a href='/services/cloud-architecture' class='about-inline-link'>cloud-native environments</a> that optimise scalability, uptime, and cost effectiveness." }}></p>
              </div>
            </div>

            <div className="adv-point">
              <div className="adv-icon">
                <HiOutlineShieldCheck />
              </div>
              <div>
                <h4>Security-First Culture</h4>
                <p dangerouslySetInnerHTML={{ __html: "Through <a href='/services/explore' class='about-inline-link'>proactive monitoring</a>, compliance controls, and <a href='/services/security' class='about-inline-link'>DevSecOps automation</a>, security is not an afterthought but rather integrated into every deployment." }}></p>
              </div>
            </div>

            <div className="adv-point">
              <div className="adv-icon">
                <HiOutlineSquares2X2 />
              </div>
              <div>
                <h4>Infrastructure Agnostic</h4>
                <p dangerouslySetInnerHTML={{ __html: "We create adaptable infrastructure strategies that reduce vendor lock-in and maximise long-term performance, whether they are <a href='/services/multi-cloud' class='about-inline-link'>multi-cloud</a> or hybrid." }}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
