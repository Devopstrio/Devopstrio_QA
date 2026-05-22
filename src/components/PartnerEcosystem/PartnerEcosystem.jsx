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
    <section className="partnerecosys-partner-ecosystem">
      <div className="partnerecosys-partner-container">

        <h2 className="partnerecosys-partner-title">
          Our Partner <span>Ecosystem</span>
        </h2>

        <p className="partnerecosys-partner-subtitle" dangerouslySetInnerHTML={{ __html: "Bringing together the best of our <a href='/ecosystem' class='partnerecosys-about-inline-link'>partner network</a> to create competitive advantage for your business." }}></p>

        {/* SLIDER */}
        <div className="partnerecosys-partner-slider">
          <div className="partnerecosys-partner-track">
            {[...PARTNERS, ...PARTNERS].map((item, i) => (
              <div className="partnerecosys-partner-card" key={i}>
                <img src={item.logo} alt={item.name} />
              </div>
            ))}
          </div>
        </div>

        {/* <a className="partnerecosys-partner-link" href="#">
          Explore Partner Ecosystem →
        </a> */}

      </div>
    </section>
  );
}
