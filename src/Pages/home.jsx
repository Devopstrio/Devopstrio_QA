import Hero from "../components/Hero/Hero";
import WhyDevopstrio from "../components/WhyDevopstrio/WhyDevopstrio";
import CloudAIOfferings from "../components/CloudAIOfferings/CloudAIOfferings";
import UnifiedIntegrations from "../components/UnifiedIntegrations/UnifiedIntegrations";
import WeImagine from "../components/WeImagine/WeImagine";
import OurClients from "../components/OurClients/OurClients";
import PartnerEcosystem from "../components/PartnerEcosystem/PartnerEcosystem";
import BusinessOverview from "../components/BusinessOverview/BusinessOverview";
import GlobalOffices from "../components/GlobalOffices/GlobalOffices";
import CoreServices from "../components/CoreServices/CoreServices";
import JoinLeaders from "../components/JoinLeaders/JoinLeaders";
import Insights from "../components/Insights/Insights";

import useSEO from "../hooks/useSEO";
import IndustrySpecialization from "../components/IndustrySpecialization/IndustrySpecialization";
import CaseStudies from "../components/CaseStudies/CaseStudies";

export default function Home() {
  useSEO({
    title: "Enterprise DevOps Consulting & Cloud Engineering | Devopstrio UK",
    description: "Devopstrio delivers enterprise DevOps consulting, cloud migration, AI-driven automation, and secure multi-cloud engineering solutions across AWS, Azure, and GCP.",
    keywords: "Devopstrio, DevOps Consulting UK, Enterprise Cloud Engineering, Multi-Cloud AWS Azure GCP, AI-Driven Automation, DevSecOps, Continuous Integration, Infrastructure as Code, Kubernetes Orchestration, Cloud Architecture Solutions",
    ogTitle: "Enterprise DevOps Consulting & Cloud Engineering | Devopstrio UK",
    ogDescription: "Accelerate your digital transformation with Devopstrio's expert DevOps consulting, reliable cloud engineering, and advanced AI-driven automation.",
    ogImage: "https://devopstrio.com/assets/images/devopstrio-og-home.jpg",
    ogUrl: "https://devopstrio.com/",
    canonicalUrl: "https://devopstrio.com/",
    robots: "index, follow"
  });

  return (
    <>
      {/* HERO */}
      <Hero />
      {/* CORE SERVICES */}
      <CoreServices />

      {/* PARTNER_ECOSYSTEM */}
      <PartnerEcosystem />

      {/* Business Overview */}
      <BusinessOverview />

      {/* INDUSTRY SPECIALIZATION */}
      <IndustrySpecialization />
         
      {/* WE IMAGINE / PRODUCTS */}
      <WeImagine />
      
      {/* CASE STUDIES */}
      <CaseStudies />

      {/* WHY Devopstrio  */}
      <WhyDevopstrio/>

      {/* OUR CLIENTS */}
      <OurClients />
      
      {/* INSIGHTS / FEATURED CONTENT */}
      <Insights />

      {/* GLOBAL OFFICES */}
      <GlobalOffices limit={3} />
 
      {/* JOIN THE LEADERS */}
      <JoinLeaders />
    </>
  );
}
