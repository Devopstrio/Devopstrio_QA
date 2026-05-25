import "./PartnerEcosystem.css";

const PARTNERS = [
  { name: "Microsoft", logo: "/images/partners/Microsoft.svg" },
  { name: "Airbnb", logo: "/images/partners/Airbnb.svg", isMedium:true },
  { name: "GoDaddy", logo: "/images/partners/godaddy.svg", isLarge: true },
  { name: "ServiceNow", logo: "/images/partners/servicenow.svg" },
  { name: "Appian", logo: "/images/partners/appian.svg" },
  { name: "Lenovo", logo: "/images/partners/lenovo.svg" },
  { name: "BT", logo: "/images/partners/BT.svg", isSmall: true },
  { name: "BP", logo: "/images/partners/bp-logo.svg", isSmall: true },
  { name: "NHS", logo: "/images/partners/NHS.svg" },
  { name: "Boviet Solar", logo: "/images/partners/Boviet_Solar.png" },
  { name: "GXO", logo: "/images/partners/gxo.svg" },
  { name: "ASDA", logo: "/images/partners/ASDA.svg" },
  { name: "Costco", logo: "/images/partners/Costco.svg" },
  { name: "Metrobank", logo: "/images/partners/Metrobank.svg" },
  { name: "Topland", logo: "/images/partners/topland.svg" },
  { name: "Virgin", logo: "/images/partners/Virgin.svg", isLarge: true }
];

export default function PartnerEcosystem() {
  return (
    <section className="partnerecosys-partner-ecosystem">
      <div className="partnerecosys-partner-container">

        <h2 className="partnerecosys-partner-title">
          Trusted by Industry Leaders
        </h2>

        <p className="partnerecosys-partner-subtitle">
          Join 10,000+ companies worldwide that trust our platform
        </p>

        {/* SLIDER */}
        <div className="partnerecosys-partner-slider">
          <div className="partnerecosys-partner-track">
            {[...PARTNERS, ...PARTNERS].map((item, i) => (
              <div className="partnerecosys-partner-card" key={i}>
                <div className="partnerecosys-partner-logo-wrapper">
                  <img 
                    src={item.logo} 
                    alt={item.name} 
                    className={`partnerecosys-partner-logo ${item.isSmall ? "partnerecosys-partner-logo--small" : ""} ${item.isLarge ? "partnerecosys-partner-logo--large" : ""} ${item.isMedium ? "partnerecosys-partner-logo--Medium" : ""}`} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}



