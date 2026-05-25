import "./OurClients.css";
import { Users } from "lucide-react";

import DevopsrioMainLogo from "/images/Devopsrio_Main_logo.png";
import HumanexLogo from "../../assets/images/bp-logo.svg";
import HomelaLogo from "../../assets/images/BT.svg";
import BrioLogo from "../../assets/images/gxo.svg";
import PerstivoLogo from "../../assets/images/ASDA_logo.png";
import JustivonLogo from "../../assets/images/NHS_Logo.png";
import CaresuiteLogo from "../../assets/images/Coeur.png";
import SafesignLogo from "../../assets/images/Metrobank.svg";
import CampixLogo from "../../assets/images/Airbnb.svg";
import boviet from "../../assets/images/Boviet_Solar.png";

const CLIENTS = [
  { id: 1, name: "BP", logo: HumanexLogo },
  { id: 2, name: "BT", logo: HomelaLogo },
  { id: 3, name: "GXO", logo: BrioLogo },
  { id: 4, name: "ASDA", logo: PerstivoLogo },
  { id: 5, name: "NHS", logo: JustivonLogo },
  { id: 6, name: "Deloitte", logo: CaresuiteLogo },
  { id: 7, name: "Metrobank", logo: SafesignLogo },
  { id: 8, name: "Airbnb", logo: CampixLogo },
  { id: 9, name: "Boviet Solar", logo: boviet },
];

export default function OurClients() {
  return (
    <section className="our-clients-section">
      <div className="our-clients-container">
        {/* LEFT CONTENT */}
        <div className="our-clients-text">
          <span className="clients-pill">
            <span>Our Clients</span>
          </span>

          <h2>
            One platform <br />
            <span>Every system connected</span>
          </h2>

          <p dangerouslySetInnerHTML={{ __html: "We help organizations of all sizes, from start-ups to global enterprises, across <a href='/platform/financial-services' class='about-inline-link'>financial services</a>, media & comms, <a href='/platform/retail' class='about-inline-link'>retail & consumer goods</a>, and <a href='/services/explore' class='about-inline-link'>professional services</a>." }}></p>

          {/* <div className="clients-brand">
            <img src={DevopsrioMainLogo} alt="Devopstrio " />
            <span>Devopstrio </span>
          </div> */}
        </div>

        {/* RIGHT GRID */}
        <div className="clients-grid">
          {CLIENTS.map((item) => (
            <div className="client-card" key={item.id}>
              {typeof item.logo === "string" ? (
                <img src={item.logo} alt={item.name} className="client-logo" />
              ) : (
                <div className="client-logo-svg">{item.logo}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
