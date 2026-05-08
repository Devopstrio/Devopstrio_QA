import "./Certification.css";
import Microsoft_data from "../../assets/images/Certification/Group_25.png";
import Microsoft_digital from "../../assets/images/Certification/Group_24.png"; 
import Microsoft_security from "../../assets/images/Certification/Group_26.png";
import Microsoft_Modern from "../../assets/images/Certification/Group_22.png";
import Mschannel from "../../assets/images/Certification/Group_18.png";
import OWASP from "../../assets/images/Certification/Group_20.png";
import Fosdem from "../../assets/images/Certification/Group_1.png";
import GitLab from "../../assets/images/Certification/Group_2.png";
import Hashnode from "../../assets/images/Certification/Group_14.png";
import INDIE_HACKERS from "../../assets/images/Certification/Group_15.png";
import Product_Hunt from "../../assets/images/Certification/Group_21.png";
import Ai_Governance from "../../assets/images/Certification/Group_13.png";
import ISO27001 from "../../assets/images/Certification/Group_7.png";
import ISO9001 from "../../assets/images/Certification/Group_8.png";
import ISO42001 from "../../assets/images/Certification/Group_9.png";
import CCPA from "../../assets/images/Certification/Group_4.png";
import AWS_certification from "../../assets/images/Certification/Group_5.png";
import HIPAA from "../../assets/images/Certification/Group_6.png";
import Cyber_essentials from "../../assets/images/Certification/Group_10.png";
import Star_level_one from "../../assets/images/Certification/Group_11.png";
import VPAT_compliance from "../../assets/images/Certification/Group_12.png";
import GDPR_certification from "../../assets/images/Certification/Group_3.png"


const CERTIFICATIONS = [
  { name: "AWS Certified Solutions Architect", logo: Microsoft_data },
  { name: "Microsoft Azure Expert", logo: Microsoft_digital },
  { name: "Google Cloud Professional", logo: Microsoft_security },
  { name: "Salesforce Certified Technical Architect", logo: Microsoft_Modern },
  { name: "AWS_certification", logo:AWS_certification},
  { name: "ServiceNow Certified Master", logo: Product_Hunt },
  { name: "Kubernetes Certified Administrator", logo: Mschannel },
  { name: "Terraform Certified Associate", logo: OWASP },
  { name: "DataStax Cassandra Expert", logo: Fosdem },
  { name: "ISC2 Certified Information Systems", logo: Hashnode },
  { name: "ITIL 4 Master", logo: INDIE_HACKERS },
  { name: "TOGAF 9 Certified", logo: GitLab },
  { name: "AI Governance", logo: Ai_Governance },
  { name: "GDPR_certification", logo:GDPR_certification},
  { name: "ISO27001", logo:ISO27001},
  { name: "ISO42001", logo:ISO42001},
  { name: "ISO9001", logo:ISO9001},
  { name: "CCPA", logo:CCPA},
  { name: "HIPAA", logo:HIPAA},
  { name: "Cyber_essentials", logo:Cyber_essentials},
  { name: "Star_level_one", logo:Star_level_one},
  { name: "VPAT_compliance", logo:VPAT_compliance},

];

export default function CertificationSlider() {
  return (
    <section className="certification-ecosystem">
      <div className="certification-container">
        {/* SLIDER - ONLY THIS REMAINS */}
        <div className="certification-slider">
          <div className="certification-track">
            {[...CERTIFICATIONS, ...CERTIFICATIONS].map((item, i) => (
              <div className="certification-card" key={i}>
                <img src={item.logo} alt={item.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}