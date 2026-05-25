import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

//================ Components =============
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ChatBot from "./components/ChatBot/ChatBot";

// ================ Layouts ====================
import ScrollToTop from "./layout/ScrollToTop";

//=============== Pages ==================
import Home from "./Pages/home";
import ContactPage from "./Pages/Contactpage";
import ProvideServices from "./Pages/ProvideServices";
import Servicespage from "./Pages/ServicesPage";
import Platformpage from "./Pages/Platformpage";
import ClientSuccess from "./Pages/ClientSuccesspage";
import Ecosystempage from "./Pages/Ecosystempage";
import Aboutpage from "./Pages/Aboutpage";
import Careerspage from "./Pages/Careerspage";
import Insightspage from "./Pages/Insightspage";
import Contributions from "./Pages/Contributions";
import PrivacyPolicy from "./Pages/Privacypolicy";
import FooterCompliance from "./Pages/FooterCompliance";
import TermsofService from "./Pages/TermsofService";
import Sitemap from "./Pages/Sitemap";
import CookiePolicy from "./Pages/CookiePolicy";
import Disclaimer from "./Pages/Disclaimer.jsx";
import JobPortal from "./Pages/JobPortal";
import CookieBanner from "./components/CookieBanner/CookieBanner";
import GlobalInternshipPage from "./Pages/globalinternship/GlobalInternshipPage";

// ========== serve SUB-PAGES ==========
// Cloud serve
import CloudArchitecture from "./Pages/serve/CloudArchitecture";
import CloudMigration from "./Pages/serve/CloudMigration";
import MultiCloud from "./Pages/serve/MultiCloud";
import CloudOptimization from "./Pages/serve/CloudOptimization";
import Serverless from "./Pages/serve/Serverless";

// DevOps & Platform
import DevOpsEnablement from "./Pages/serve/DevOpsEnablement";
import CICD from "./Pages/service/CICD";
import IaC from "./Pages/serve/IaC";

// Security & Reliability
import CloudSecurity from "./Pages/serve/CloudSecurity";
import IAM from "./Pages/serve/IAM";
import Compliance from "./Pages/serve/Compliance";
import ThreatDetection from "./Pages/serve/ThreatDetection";
// const GitOps = lazy(() => import("./Pages/serve/GitOps"));

// ========== PLATFORM SUB-PAGES ==========
import SaaSApplications from "./Pages/platform/SaaSApplications";
import RetailPlatform from "./Pages/platform/RetailPlatform";
import FinancialServices from "./Pages/platform/FinancialServices";
import Healthcare from "./Pages/platform/Healthcare";
import LogisticsPage from "./Pages/platform/Logistics";
import MediaEntainment from "./Pages/platform/MediaEntainment";
import Telecom from "./Pages/platform/Telecom";
import Automotive from "./Pages/platform/Automotive";
import LifeSciences from "./Pages/platform/LifeSciences";
import Manufacturing from "./Pages/platform/Manufacturing";
import TravelHospitality from "./Pages/platform/TravelHospitality";
// import IGaming from "./Pages/platform/IGaming";
// import ELearning from "./Pages/platform/ELearning";
// import RealEstate from "./Pages/platform/RealEstate";
// import Aviation from "./Pages/platform/Aviation";
// import OilGas from "./Pages/platform/OilGas";
// import Legal from "./Pages/platform/Legal";
import Agriculture from "./Pages/platform/Agriculture";
// import Energy from "./Pages/platform/Energy";
// import GISDevelopment from "./Pages/platform/GISDevelopment";
// import PublicSector from "./Pages/platform/PublicSector";
import CaseStudies from "./Pages/CaseStudies";
import ROIReports from "./Pages/resources/ROIReports";
import Benchmarks from "./Pages/resources/Benchmarks";
import WhitePapers from "./Pages/Media/IndividualCategoryPage";

// ========== ECOSYSTEM SUB-PAGES ==========
// Partners
import AWSPartners from "./Pages/partners/AWSPartners";
import AzurePartners from "./Pages/partners/AzurePartners";
import GCPPartners from "./Pages/partners/GCPPartners";
import ServiceNowPartners from "./Pages/partners/ServiceNowPartners";

// Marketplace
import MarketplacePage from "./Pages/MarketplacePage";
import CloudInfrastructureMarketplace from "./Pages/marketplace/CloudInfrastructure";
import DataAnalyticsMarketplace from "./Pages/marketplace/DataAnalytics";
import EnterpriseAppsMarketplace from "./Pages/marketplace/EnterpriseApps";
import CXMarketplace from "./Pages/marketplace/CX";
import AIMLMarketplace from "./Pages/marketplace/AIML";

// ========== ABOUT SUB-PAGES ==========
import CompanyOverview from "./Pages/about/CompanyOverview";
// import Locations from "./Pages/about/Locations";
import Values from "./Pages/about/Values";
import Events from "./Pages/Media/Events";

// ========== CAREERS SUB-PAGES ==========
import CandidateApplyPage from "./Pages/CandidateApplyPage";
import InternshipPage from "./Pages/InternshipPage";
import CategoryPage from "./Pages/Media/CategoryPage";
import PostDetail from "./Pages/Media/PostDetail";
import DocumentReader from "./Pages/Media/DocumentReader";

// ========== AI & DATA SUB-PAGES ==========
import ArtificialIntelligence from "./Pages/ai_data/ArtificialIntelligence";
import AIConsulting from "./Pages/ai_data/AIConsulting";
import AiTools from "./Pages/ai_data/AiTools";
import DataScience from "./Pages/ai_data/DataScience";
import DBCreation from "./Pages/ai_data/DBCreation";
import HireAi from "./Pages/ai_data/HireAi";

// ========== APPLICATION DEVELOPMENT SUB-PAGES ==========
import Mobiledevelopment from "./Pages/ap_development/Mobiledevelopment";
import Webdevelopment from "./Pages/ap_development/Webdevelopment";
import Crossplatform from "./Pages/ap_development/Crossplatform";
import PWAdevelopment from "./Pages/ap_development/PWAdevelopment";
import CMSdevelopment from "./Pages/ap_development/CMSdevelopment";
import ITSecurity from "./Pages/Cybersecurity/ITSecurity";
import OperationsCenter from "./Pages/Cybersecurity/Operationscenter";
import PenetrationTesting from "./Pages/Cybersecurity/Penetrationtesting";
import DigitalTransformation from "./Pages/digital/DigitalTransformation";
import ITConsulting from "./Pages/digital/ITConsulting";
import DigitalSovereignty from "./Pages/digital/DigitalSovereignty";

// ========== OTHER PAGES ==========
import NotFoundPage from "./Pages/NotFoundPage";
import CSRPage from "./Pages/CSRPage";

import "./App.css";

import ClickSpark from "./layout/Click_it";

function App() {
  
  return (
    <HelmetProvider>
      <Router>
        <ClickSpark
          sparkColor="rgba(255, 255, 255, 0.6)"
          sparkSize={10}
          sparkRadius={20}
          sparkCount={10}
          duration={400}
        >
          <Helmet>
            {/* Google tag (gtag.js) */}
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=G-NGV5DC74RW"
            ></script>
            <script>
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NGV5DC74RW');
            `}
            </script>
          </Helmet>
          <CookieBanner />
          <ScrollToTop />
          <Navbar />
          <Routes>
            {/* ===== Home ===== */}
            <Route path="/" element={<Home />} />
            <Route path="/navbar" element={<Navbar />} />
            <Route path="/footer" element={<Footer />} />

            {/* ===== Main Navigation Pages ===== */}
            <Route path="/services" element={<Servicespage />} />
            <Route path="/platform" element={<Platformpage />} />
            <Route path="/clients" element={<ClientSuccess />} />
            <Route path="/insights" element={<Insightspage />} />
            <Route path="/ecosystem" element={<Ecosystempage />} />
            <Route path="/about" element={<Aboutpage />} />
            <Route path="/careers" element={<Careerspage />} />
            <Route path="/global-internship" element={<GlobalInternshipPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contributions" element={<Contributions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/footer-compliance" element={<FooterCompliance />} />
            <Route path="/terms-of-service" element={<TermsofService />} />
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="/sustainability" element={<CSRPage />} />
            <Route path="/csr" element={<CSRPage />} />

            {/* ===== SERVICES SUB-ROUTES ===== */}
            {/* ===== Cloud Services ===== */}
            <Route path="/services/cloud-architecture" element={<CloudArchitecture />} />
            <Route path="/services/cloud-migration" element={<CloudMigration />} />
            <Route path="/services/multi-cloud" element={<MultiCloud />} />

            {/* ===== DevOps & Platform ===== */}
            <Route path="/services/devops-enablement" element={<DevOpsEnablement />} />
            <Route path="/services/cicd" element={<CICD />} />
            <Route path="/services/iac" element={<IaC />} />
            {/* <Route path="/services/serverless" element={<Serverless />} /> */}

       
            {/* ===== Security & Reliability ===== */}
            <Route path="/services/security" element={<CloudSecurity />} />
            <Route path="/services/iam" element={<IAM />} />
            <Route path="/services/compliance" element={<Compliance />} />
            <Route path="/services/threat-detection" element={<ThreatDetection />} />
            <Route path="/services/explore" element={<ProvideServices />} />

            {/* ===== AI & Data Services ===== */}
            <Route path="/services/artificial-intelligence" element={<ArtificialIntelligence />} />
            <Route path="/services/ai-consulting-services" element={<AIConsulting />} />
            <Route path="/services/ai-tools" element={<AiTools />} />
            <Route path="/services/data-science" element={<DataScience />} />
            <Route path="/services/database-creation-and-management" element={<DBCreation />} />
            <Route path="/services/hire-ai-experts" element={<HireAi />} />

            {/* Application Development */}
            <Route path="/services/mobile-development" element={<Mobiledevelopment />} />
            <Route path="/services/web-development" element={<Webdevelopment />} />
            <Route path="/services/cross-platform-development" element={<Crossplatform />} />
            <Route path="/services/pwa-development" element={<PWAdevelopment />} />
            <Route path="/services/cms-based-web-development" element={<CMSdevelopment />} />

            {/* Cybersecurity Services */}
            <Route path="/services/security-management" element={<ITSecurity />} />
            <Route path="/services/security-operations-center" element={<OperationsCenter />} />
            <Route path="/services/penetration-testing" element={<PenetrationTesting />} />
            <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
            <Route path="/services/it-consulting" element={<ITConsulting />} />
            <Route path="/services/digital-sovereignty" element={<DigitalSovereignty />} />

            {/* ===== PLATFORM SUB-ROUTES ===== */}
            <Route path="/platform/saas-applications" element={<SaaSApplications />} />
            <Route path="/platform/retail" element={<RetailPlatform />} />
            <Route path="/platform/financial-services" element={<FinancialServices />} />
            <Route path="/platform/healthcare" element={<Healthcare />} />
            <Route path="/platform/logistics" element={<LogisticsPage />} />
            <Route path="/platform/media-entertainment" element={<MediaEntainment />} />
            <Route path="/platform/telecom" element={<Telecom />} />
            <Route path="/platform/automotive" element={<Automotive />} />
            <Route path="/platform/life-sciences" element={<LifeSciences />} />
            <Route path="/platform/manufacturing" element={<Manufacturing />} />
            <Route path="/platform/travel-hospitality" element={<TravelHospitality />} />
            {/* <Route path="/platform/igaming" element={<IGaming />} /> */}
            {/* <Route path="/platform/elearning" element={<ELearning />} /> */}
            {/* <Route path="/platform/real-estate" element={<RealEstate />} /> */}
            {/* <Route path="/platform/aviation" element={<Aviation />} /> */}
            {/* <Route path="/platform/oil-gas" element={<OilGas />} /> */}
            {/* <Route path="/platform/legal" element={<Legal />} /> */}
            <Route path="/platform/agriculture" element={<Agriculture />} />
            {/* <Route path="/platform/energy" element={<Energy />} /> */}
            {/* <Route path="/platform/gis-development" element={<GISDevelopment />} /> */}
            {/* <Route path="/platform/public-sector" element={<PublicSector />} /> */}
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/resources/roi-reports" element={<ROIReports />} />
            <Route path="/resources/benchmarks" element={<Benchmarks />} />
            <Route path="/resources/white-papers" element={<WhitePapers />} />

            {/* ===== ECOSYSTEM SUB-ROUTES ===== */}
            {/* ===== Partners ===== */}
            <Route path="/partners/aws" element={<AWSPartners />} />
            <Route path="/partners/azure" element={<AzurePartners />} />
            <Route path="/partners/gcp" element={<GCPPartners />} />
            <Route path="/partners/servicenow" element={<ServiceNowPartners />} />

            {/* ===== Marketplace ===== */}
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/marketplace/cloud-infrastructure" element={<CloudInfrastructureMarketplace />} />
            <Route path="/marketplace/data-analytics" element={<DataAnalyticsMarketplace />} />
            {/* <Route path="/marketplace/enterprise-apps" element={<EnterpriseAppsMarketplace />} /> */}
            <Route path="/marketplace/cx" element={<CXMarketplace />} />
            {/* <Route path="/marketplace/ai-ml" element={<AIMLMarketplace />} /> */}

            {/* ===== ABOUT SUB-ROUTES ===== */}
            <Route path="/about/overview" element={<CompanyOverview />} />
            {/* <Route path="/about/locations" element={<Locations />} /> */}
            <Route path="/about/values" element={<Values />} />
            <Route path="/events" element={<Events />} />

            {/* ===== MEDIA SUB-ROUTES ===== */}
            <Route path="/:sectionSlug/white-paper" element={<WhitePapers />} />
            <Route path="/:sectionSlug/:categorySlug" element={<CategoryPage />} />
            <Route path="/:sectionSlug/:categorySlug/:postId" element={<PostDetail />} />
            <Route path="/:sectionSlug/:categorySlug/:postId/reader" element={<DocumentReader />} />

            {/* ===== CAREERS SUB-ROUTES ===== */}
            <Route path="/apply/:requirementId" element={<CandidateApplyPage />} />
            <Route path="/careers/internship" element={<InternshipPage />} />
            <Route path="/careers/jobs" element={<JobPortal />} />
            <Route path="/" element={<CandidateApplyPage />} />
          
            {/* ===== 404 Route ===== */}
            <Route path="*" element={<NotFoundPage />} />

            {/* ===== They not to use it ===== */}
            {/* <Route path="/services/gitops" element={<GitOps />} /> */}
            {/* <Route path="/services/incident-response"element={<IncidentResponse />}/> */}

          </Routes>
          {/* ===== CHATBOT ===== */}
          <ChatBot />
          {/* ===== FOOTER ===== */}
          <Footer />
        </ClickSpark>
      </Router>
    </HelmetProvider>
  );
}
export default App;
