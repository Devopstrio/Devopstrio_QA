import "./PartnerEcosystem.css";

const PARTNERS = [
  { name: "Appian", logo: "/images/partners/Microsoft.svg" },
  { name: "AWS", logo: "/images/partners/lenovo.svg" },
  { name: "IBM", logo: "/images/partners/bp-logo.svg" },
  { name: "RedHat", logo: "/images/partners/Boviet_Solar.png" },
  { name: "Salesforce", logo: "/images/partners/BT.svg" },
  { name: "Google", logo: "/images/partners/gxo.svg"},
  { name: "godaddy", logo: "/images/partners/godaddy.svg" },
  { name: "Virgin", logo: "/images/partners/Virgin.svg" },
  { name: "DataStax", logo: "/images/partners/servicenow.svg" },
  { name: "FinMkt", logo: "/images/partners/Airbnb.svg" }
];

export default function PartnerEcosystem() {
  return (
    <section className="partner-ecosystem">
      <div className="partner-container">

        <h2 className="partner-title">
          Our Partner <span>Ecosystem</span>
        </h2>

        <p className="partner-subtitle">
          Bringing together the best of our partner network to create competitive
          advantage for your business.
        </p>

        {/* SLIDER */}
        <div className="partner-slider">
          <div className="partner-track">
            {[...PARTNERS, ...PARTNERS].map((item, i) => (
              <div className="partner-card" key={i}>
                <img src={item.logo} alt={item.name} />
              </div>
            ))}
          </div>
        </div>

        {/* <a className="partner-link" href="#">
          Explore Partner Ecosystem →
        </a> */}

      </div>
    </section>
  );
}
