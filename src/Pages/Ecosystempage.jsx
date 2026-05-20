import { FiChevronRight, FiUsers, FiCpu, FiAward } from "react-icons/fi";

// Existing Components
import Ecosystemhero from "../components/Hero/Ecosystemhero";
import Newsletter from "../components/Newsletter/Newsletter";
import Cta from "../components/Cta/Cta";
import PartnerEcosystem from "../components/PartnerEcosystem/PartnerEcosystem";

// Assets
import AWSLogo from "../assets/images/AWS.png";
import AWSLogo1 from "../assets/images/AWS_certification.png";
import AzureLogo from "../assets/images/azureLogo.png";
import GCPLogo from "../assets/images/gcpLogo.png";
import DockerLogo from "../assets/images/dockerLogo.png";
import KubernetesLogo from "../assets/images/kubernetesLogo.png";
import KubernetesLogo1 from "../assets/images/kubernetesLogo_1.png";
import GitLab from "../assets/images/GitLab.png";
import GitLabLogo from "../assets/images/GitLab_logo.png";
import DatadogLogo from "../assets/images/MLOps.png";
import MLOps from "../assets/images/MLOps_logo.png";
import SplunkLogo from "../assets/images/Openai.png";
import OWASPLogo from "../assets/images/OWASP.png";
import CheckmarxLogo from "../assets/images/Github.png";
import ServiceNowLogo from "../assets/images/Boviet_Solar.png";
import OracleLogo from "../assets/images/Oracle_logo.png";
import jenkins from "../assets/images/jenkins.svg";
import Lenova from "../assets/images/Lenovologo.svg";
import BT from "../assets/images/BT.svg";

// Styles
import "../Style/Ecosystempage.css";

const Ecosystempage = () => {
  // 1. WHY PARTNER WITH US - 3 Column Layout (Alternative if PartnerEcosystem doesn't match)
  const whyPartnerItems = [
    {
      icon: <FiUsers size={32} />,
      title: "Engineering Leadership",
      description:
        "Access to world-class engineering teams with deep expertise in DevOps, cloud architecture, and enterprise transformation.",
    },
    {
      icon: <FiCpu size={32} />,
      title: "Proven Solutions",
      description:
        "Battle-tested frameworks and methodologies that have delivered results for Fortune 500 companies across industries.",
    },
    {
      icon: <FiAward size={32} />,
      title: "Certified Workforce",
      description:
        "Partners gain access to our certified network of professionals with top-tier cloud and DevOps certifications.",
    },
  ];

  // 2. STRATEGIC PARTNERS - 3 Column Grid
  const strategicPartners = [
    {
      name: "AWS",
      logo: AWSLogo,
      description:
        "Premier cloud provider enabling scalable infrastructure and advanced machine learning capabilities.",
      link: "/partners/aws",
    },
    {
      name: "Microsoft Azure",
      logo: AzureLogo,
      description:
        "Enterprise-grade cloud platform with deep integration for hybrid and multi-cloud environments.",
      link: "/partners/azure",
    },
    {
      name: "Google Cloud",
      logo: GCPLogo,
      description:
        "Leading data analytics and AI/ML platform for modern application development.",
      link: "/partners/gcp",
    },
    {
      name: "Docker",
      logo: DockerLogo,
      description:
        "Industry standard for containerization and application packaging across any infrastructure.",
      link: "/partners/docker",
    },
    {
      name: "Kubernetes",
      logo: KubernetesLogo,
      description:
        "Production-grade container orchestration for automated deployment and scaling.",
      link: "/partners/kubernetes",
    },
    {
      name: "GitLab",
      logo: GitLabLogo,
      description:
        "Integrated DevOps platform for source code management and secure pipelines.",
      link: "/partners/gitlab",
    },
    {
      name: "MLOps",
      logo: MLOps,
      description:
        "Cloud-scale monitoring and observability for modern infrastructure.",
      link: "/partners/datadog",
    },
    {
      name: "OWASP",
      logo: OWASPLogo,
      description:
        "OWASP is a non-profit foundation that works to improve the security of software.",
      link: "/partners/datadog",
    },
    {
      name: "Oracle",
      logo: OracleLogo,
      description:
        "Oracle is a leading provider of database management solutions.",
      link: "/partners/datadog",
    },
  ];

  // 3. ECOSYSTEM LOGOS - Dense Grid
  const ecosystemLogos = [
    { logo: AWSLogo1, name: "AWS" },
    { logo: AzureLogo, name: "Azure" },
    { logo: GCPLogo, name: "Google Cloud" },
    { logo: DockerLogo, name: "Docker" },
    { logo: KubernetesLogo1, name: "Kubernetes" },
    { logo: GitLab, name: "GitLab" },
    { logo: DatadogLogo, name: "MLOps" },
    { logo: SplunkLogo, name: "Openai" },
    { logo: OWASPLogo, name: "OWASP" },
    { logo: CheckmarxLogo, name: "Github" },
    { logo: ServiceNowLogo, name: "Boviet_Solar" },
    { logo: OracleLogo, name: "Oracle" },
    { logo: jenkins, name: "Jenkins" },
    { logo: Lenova, name: "Lenovo" },
    { logo: BT, name: "BT" },
  ];

  return (
    <div className="ecosystem-corporate-wrapper">
      {/* 1. HERO SECTION */}
      <Ecosystemhero />

      {/* 2. WHY PARTNER SECTION - Using existing PartnerEcosystem component */}
      <PartnerEcosystem />

      {/* Alternative Why Partner Section if PartnerEcosystem doesn't match the design */}

      <section className="corporate-why-partner">
        <div className="corporate-container">
          <div className="corporate-section-header">
            <h2>Why Partner With Us</h2>
            <p className="corporate-subhead">
              Join a network of innovative companies building the future of
              DevOps
            </p>
          </div>
          <div className="corporate-three-column">
            {whyPartnerItems.map((item, index) => (
              <div className="corporate-benefit-block" key={index}>
                <div className="corporate-benefit-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STRATEGIC PARTNERS - Card Grid */}
      <section className="corporate-strategic-partners">
        <div className="corporate-container">
          <div className="corporate-section-header">
            <h2>Strategic Partners</h2>
            <p className="corporate-subhead">
              Deep technical integrations with industry-leading technology
              providers
            </p>
          </div>

          <div className="corporate-card-grid">
            {strategicPartners.map((partner, index) => (
              <div className="corporate-partner-card" key={index}>
                <div className="corporate-card-logo">
                  <img src={partner.logo} alt={partner.name} />
                </div>
                <h4>{partner.name}</h4>
                <p>{partner.description}</p>
                {/* <a href={partner.link} className="corporate-card-link">
                  Learn more
                </a> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PARTNER ECOSYSTEM - Dense Logo Grid */}
      <section className="corporate-ecosystem-logos">
        <div className="corporate-container">
          <div className="corporate-section-header">
            <h2>Partner Ecosystem</h2>
            <p className="corporate-subhead">
              Join 200+ technology partners in our growing ecosystem
            </p>
          </div>

          <div className="corporate-logo-grid">
            {ecosystemLogos.map((partner, index) => (
              <div className="corporate-logo-item" key={index}>
                <img src={partner.logo} alt={partner.name} />
                <span className="corporate-logo-tooltip">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC COLLABORATION BANNER - Dark Gradient */}
      <section className="corporate-collaboration-banner">
        <div className="corporate-container">
          <div className="corporate-banner-content">
            <h2>
              Devopstrio Announces Strategic Collaboration with Azure to
              Accelerate Enterprise AI Adoption
            </h2>
            <p>
              Joint investment in go-to-market and delivery capabilities for
              financial services and healthcare
            </p>
            <a href="/insights-knowledge/white-paper" className="corporate-banner-cta">
              Read the announcement <FiChevronRight />
            </a>
          </div>
        </div>
      </section>

      {/* 6. CONTACT SECTION - Clean Corporate Form */}
      {/* <section className="corporate-contact">
        <div className="corporate-container">
          <div className="corporate-contact-grid">
            <div className="corporate-contact-info">
              <h3>Ready to transform your DevOps practice?</h3>
              <p>Partner with us to accelerate your cloud-native journey and deliver better business outcomes.</p>
              
              <div className="corporate-contact-details">
                <div className="corporate-contact-item">
                  <FiMail />
                  <span>partners@Devopstrio.com</span>
                </div>
                <div className="corporate-contact-item">
                  <FiPhone />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="corporate-contact-item">
                  <FiMapPin />
                  <span>San Francisco, CA • New York, NY • London, UK</span>
                </div>
              </div>

              <div className="corporate-trust-badges">
                <span className="trust-badge">
                  <FiCheck /> ISO 27001 Certified
                </span>
                <span className="trust-badge">
                  <FiCheck /> GDPR Compliant
                </span>
                <span className="trust-badge">
                  <FiCheck /> SOC 2 Type II
                </span>
              </div>
            </div>

            <form className="corporate-contact-form" onSubmit={handleSubmit}>
              <div className="corporate-form-row">
                <input
                  type="text"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                />
              </div>
              <div className="corporate-form-row">
                <input
                  type="email"
                  placeholder="Work email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                />
              </div>
              <div className="corporate-form-row">
                <input
                  type="text"
                  placeholder="Company name"
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  required
                />
              </div>
              <div className="corporate-form-row">
                <textarea
                  placeholder="Tell us about your partnership goals"
                  rows="4"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <div className="corporate-form-row">
                <button type="submit" className="corporate-submit-btn">
                  Send inquiry <FiSend />
                </button>
              </div>
              <p className="corporate-form-note">
                By submitting, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </section> */}

      {/* 7. NEWSLETTER SECTION */}
      <div style={{ margin: "0 auto", maxWidth: "1240px" }}>
          <Newsletter />
      </div>     
      {/* 8. CTA SECTION */}
      <Cta />
    </div>
  );
};

export default Ecosystempage;
