import Hero from "../components/Hero/Hero";
import WhyDevopstrio from "../components/WhyDevopstrio/WhyDevopstrio";
import CloudAIOfferings from "../components/CloudAIOfferings/CloudAIOfferings";
import UnifiedIntegrations from "../components/UnifiedIntegrations/UnifiedIntegrations";
import WeImagine from "../components/WeImagine/WeImagine";
import OurClients from "../components/OurClients/OurClients";
import PartnerEcosystem from "../components/PartnerEcosystem/PartnerEcosystem";
import WhatWeDo from "../components/WhatWeDo/WhatWeDo";
import GlobalOffices from "../components/GlobalOffices/GlobalOffices";
import CoreSolutions from "../components/CoreSolutions/CoreSolutions";
import JoinLeaders from "../components/JoinLeaders/JoinLeaders";

import useSEO from "../hooks/useSEO";

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
      {/* PARTNER_ECOSYSTEM */}
      <PartnerEcosystem />

      {/* WhatWeDo */}
      <WhatWeDo />
      {/* WHY Devopstrio  */}
      <WhyDevopstrio/>

      {/* CORE SOLUTIONS */}
      {/* <CoreSolutions /> */}

      {/* WE IMAGINE / PRODUCTS */}
      <WeImagine />

      {/* CLOUD & AI OFFERINGS */}
      {/* <CloudAIOfferings /> */}

      {/* UNIFIED INTEGRATIONS (NEW COMPONENT) */}
      {/* <UnifiedIntegrations /> */}

      {/* OUR CLIENTS */}
      <OurClients />

      {/* GLOBAL OFFICES */}
      <GlobalOffices limit={3} />

      {/* JOIN THE LEADERS */}
      <JoinLeaders />
    </>
  );
}
