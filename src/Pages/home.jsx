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
  useSEO(
    "Enterprise DevOps Consulting & Cloud Engineering | Devopstrio UK",
    "Devopstrio delivers enterprise DevOps consulting, cloud migration, AI-driven automation, and secure multi-cloud engineering solutions across AWS, Azure, and GCP.",
  );

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
