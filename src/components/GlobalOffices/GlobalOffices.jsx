import "./GlobalOffices.css";

import UsaIcon from "../../assets/images/US.png";
import CanadaIcon from "../../assets/images/UK.png";
import chennai from "../../assets/images/CH.png"
import tooti from "../../assets/images/TN.png"
import IndiaIcon from "../../assets/images/India.png"

const OFFICES = [
  {
    id: 1, 
    country: "London",
    icon: CanadaIcon, // Mapped to UK.png in imports
    address: `128 City Road, London,United Kingdom EC1V 2NX`,
    type: "Head Office",
  },
 
  {
    id: 2,
    country: "Tennessee",
    icon: UsaIcon,
    address: "522 Aventura Dr, Mt Juliet, Tennessee 37122 United States",
    type: "Sub-Regional Office",
  },
  {
    id: 3,
    country: "Bengaluru",
    icon: IndiaIcon,
    address:
      "Embassy Golf Links Business Park, Bengaluru, Karnataka-560071, India",
    type: "Corporate Office",
  },
    {
    id: 4,
    country: "London",
    icon: CanadaIcon, // Mapped to UK.png in imports
    address: `167-169 Great Portland Street, 5th Floor, London, W1W 5PF`,
    type: "Support Office",
  },
    {
      id: 5,
      country: "Chennai",
      icon: chennai,
      address: "Ground Floor, Primus Building, Door No. SP – 7A, Guindy Industrial Estate, SIDCO Industrial Estate, Chennai 600032",
      type: "Operations Center",
  },
 {
     id: 6,
      country: "Thoothukudi",
      icon: tooti,
      address: "4/ 367, Rajeev Colony, Pasuvanthanai 628718 Thoothukudi, Tamilnadu, IN",
      type: "Operations Center",
  }
];

export default function GlobalOffices({ limit }) {
  const displayedOffices = limit ? OFFICES.slice(0, limit) : OFFICES;

  return (
    <section className="global-offices-section">
      <div className="global-offices-container">
        {/* Section Header */}
        <div className="offices-header">
          <span className="offices-pill">Global Presence</span>
          <h2>
            Our <span>Worldwide</span> Offices
          </h2>
          <p>
            Strategically located to serve our clients across the globe with
            local expertise and global standards.
          </p>
        </div>

        {/* Offices Grid */}
        <div className="offices-grid">
          {displayedOffices.map((office) => (
            <div className="office-card" key={office.id}>
              {/* Icon with gradient glow */}
              <div className="office-icon-wrapper">
                <img
                  src={office.icon}
                  alt={office.country}
                  className="office-icon"
                />
              </div>

              {/* Divider with gradient */}
              <div className="office-divider"></div>

              {/* Country with gradient */}
              <h3 className="office-country">{office.country}</h3>

              {/* Address */}
              <div className="office-address-wrapper">
                <p className="office-address">{office.address}</p>
                {office.address2 && <p className="office-address second">{office.address2}</p>}
              </div>

              {/* Type badge */}
              <span className="office-type-badge">({office.type})</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
