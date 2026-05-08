import { useCallback, useEffect, useRef, useState } from "react";
import "./UnifiedIntegrations.css";

import DevopsrioMainLogo from "/images/Devopsrio_Main_logo.png";
import HumanexLogo from "../../assets/images/humanex.png";
import HomelaLogo from "../../assets/images/homela.png";
import BrioLogo from "../../assets/images/brio.png";
import PerstivoLogo from "../../assets/images/Prestivo.png";
import JustivonLogo from "../../assets/images/Justivon.png";
import CaresuiteLogo from "../../assets/images/Caresuite.png";
import SafesignLogo from "../../assets/images/safesign.png";
import CampixLogo from "../../assets/images/Campix.png";

/*
  Animation timing (ms) — total cycle ≈ 8.8s
  ──────────────────────────────────────────────
  PULL     0 → 3400   slow gravitational drift inward
  ABSORB   3400 → 4000  600ms absorption (nodes dissolve)
  EJECT    4000 → 5400  1400ms clean release back to rest
  COOLDOWN 5400 → 8200  2800ms quiet before repeating
*/
const PULL_DURATION = 3_400;
const ABSORB_DURATION = 600;
const EJECT_DURATION = 1_400;
const COOLDOWN_DURATION = 2_800;

const nodes = [
  { id: "l1", cls: "left l1", logo: HumanexLogo, alt: "Humanex" },
  { id: "l2", cls: "left l2", logo: HomelaLogo, alt: "Homela" },
  { id: "l3", cls: "left l3", logo: BrioLogo, alt: "Brio" },
  { id: "l4", cls: "left l4", logo: CampixLogo, alt: "Campix" },
  { id: "r1", cls: "right r1", logo: PerstivoLogo, alt: "Perstivo" },
  { id: "r2", cls: "right r2", logo: JustivonLogo, alt: "Justivon" },
  { id: "r3", cls: "right r3", logo: CaresuiteLogo, alt: "Caresuite" },
  { id: "r4", cls: "right r4", logo: SafesignLogo, alt: "Safesign" },
];

export default function UnifiedIntegrations() {
  const [phase, setPhase] = useState("idle");
  const timerRef = useRef(null);
  const cycleRef = useRef(null); // stable ref to avoid stale closure

  const startCycle = useCallback(() => {
    setPhase("pull");

    timerRef.current = setTimeout(() => {
      setPhase("absorb");

      timerRef.current = setTimeout(() => {
        setPhase("eject");

        timerRef.current = setTimeout(() => {
          setPhase("cooldown");

          timerRef.current = setTimeout(() => {
            setPhase("idle");
            // Loop — call via ref to avoid stale closure
            timerRef.current = setTimeout(() => cycleRef.current?.(), 600);
          }, COOLDOWN_DURATION);
        }, EJECT_DURATION);
      }, ABSORB_DURATION);
    }, PULL_DURATION);
  }, []); // no deps — setPhase is stable, timeouts captured by ref

  // Keep ref current without causing re-renders
  useEffect(() => {
    cycleRef.current = startCycle;
  }, [startCycle]);

  useEffect(() => {
    const firstDelay = setTimeout(() => startCycle(), 1_200);
    return () => {
      clearTimeout(firstDelay);
      clearTimeout(timerRef.current);
    };
  }, [startCycle]);

  return (
    <section className="hub-section">
      {/* HEADER */}
      <div className="hub-header">
        <span className="integrations-pill">Unified Integrations</span>
        <h2>
          One platform{" "}
          <span>
            Every system <br />
            connected
          </span>
        </h2>
        <p>
          Devopstrio connects your cloud, operations, security, and enterprise
          tools into a single intelligent command layer.
        </p>
      </div>

      {/* VISUALIZATION */}
      <div className={`hub-visualization hub-phase-${phase}`}>
        {/* SVG CONNECTION LINES */}
        <svg
          className="hub-svg"
          viewBox="0 0 1600 600"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* LEFT */}
          <path
            d="M150 -100 C 450 220, 600 240, 800 300"
            className="hub-line"
          />
          <path d="M150 10 C 450 240, 600 255, 800 300" className="hub-line" />
          <path d="M150 100 C 450 260, 600 270, 800 300" className="hub-line" />
          <path d="M150 200 C 450 280, 600 285, 800 300" className="hub-line" />
          <path d="M150 300 C 450 300, 600 300, 800 300" className="hub-line" />
          <path d="M150 400 C 450 320, 600 315, 800 300" className="hub-line" />
          <path d="M150 500 C 450 340, 600 330, 800 300" className="hub-line" />
          <path d="M220 550 C 450 360, 600 350, 800 300" className="hub-line" />
          {/* RIGHT */}
          <path
            d="M1450 -100 C 1150 220, 1000 240, 800 300"
            className="hub-line"
          />
          <path
            d="M1450 10 C 1150 240, 1000 255, 800 300"
            className="hub-line"
          />
          <path
            d="M1450 100 C 1150 260, 1000 270, 800 300"
            className="hub-line"
          />
          <path
            d="M1450 200 C 1150 280, 1000 285, 800 300"
            className="hub-line"
          />
          <path
            d="M1450 300 C 1150 300, 1000 300, 800 300"
            className="hub-line"
          />
          <path
            d="M1450 400 C 1150 320, 1000 315, 800 300"
            className="hub-line"
          />
          <path
            d="M1450 500 C 1150 340, 1000 330, 800 300"
            className="hub-line"
          />
          <path
            d="M1365 550 C 1150 360, 1000 350, 800 300"
            className="hub-line"
          />
        </svg>

        {/* CENTER HUB */}
        <div className="hub-center">
          {/* Orbital ring (single, slow, minimal) */}
          <span className="hub-accretion" />
          {/* Gravity release ring (fires on eject) */}
          <span className="hub-shockwave" />
          {/* Unused grav spans kept for JSX parity */}
          <span className="hub-grav grav-1" />
          <span className="hub-grav grav-2" />
          <span className="hub-grav grav-3" />
          {/* Ambient depth pulses */}
          <span className="hub-pulse pulse-1" />
          <span className="hub-pulse pulse-2" />
          <span className="hub-pulse pulse-3" />

          <div className="hub-core">
            <img
              src={DevopsrioMainLogo}
              alt="Devopstrio"
              className="hub-center-logo"
            />
          </div>
        </div>

        {/* NODES */}
        {nodes.map((n) => (
          <div key={n.id} className={`hub-node ${n.cls}`}>
            <img src={n.logo} alt={n.alt} className="node-logo" />
          </div>
        ))}
      </div>
    </section>
  );
}
