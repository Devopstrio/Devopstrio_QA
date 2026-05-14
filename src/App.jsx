import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";

//================ Components =============
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ChatBot from "./components/ChatBot/ChatBot";

// ================ Layouts ====================
import ScrollToTop from "./layout/ScrollToTop";

//=============== Pages ==================
const Home = lazy(() => import("./Pages/home"));
const ContactPage = lazy(() => import("./Pages/Contactpage"));
const ProvideServices = lazy(() => import("./Pages/ProvideServices"));
const Servicespage = lazy(() => import("./Pages/ServicesPage"));
const Platformpage = lazy(() => import("./Pages/Platformpage"));
const ClientSuccess = lazy(() => import("./Pages/ClientSuccesspage"));
const Ecosystempage = lazy(() => import("./Pages/Ecosystempage"));
const Aboutpage = lazy(() => import("./Pages/Aboutpage"));
const Careerspage = lazy(() => import("./Pages/Careerspage"));
const Insightspage = lazy(() => import("./Pages/Insightspage"));
const Contributions = lazy(() => import("./Pages/Contributions"));
const PrivacyPolicy = lazy(() => import("./Pages/Privacypolicy"));
import FooterCompliance from "./Pages/FooterCompliance";
const TermsofService = lazy(() => import("./Pages/TermsofService"));
const Sitemap = lazy(() => import("./Pages/Sitemap"));
const CookiePolicy = lazy(() => import("./Pages/CookiePolicy"));
const Disclaimer = lazy(() => import("./Pages/Disclaimer.jsx"));
const JobPortal = lazy(() => import("./Pages/JobPortal"));
import CookieBanner from "./components/CookieBanner/CookieBanner";
const GlobalInternshipPage = lazy(() => import("./Pages/globalinternship/GlobalInternshipPage"));

// ========== serve SUB-PAGES ==========
// Cloud serve
const CloudArchitecture = lazy(() => import("./Pages/serve/CloudArchitecture"));
const CloudMigration = lazy(() => import("./Pages/serve/CloudMigration"));
const MultiCloud = lazy(() => import("./Pages/serve/MultiCloud"));
const CloudOptimization = lazy(() => import("./Pages/serve/CloudOptimization"));
const Serverless = lazy(() => import("./Pages/serve/Serverless"));

// DevOps & Platform
const DevOpsEnablement = lazy(() => import("./Pages/serve/DevOpsEnablement"));
const CICD = lazy(() => import("./Pages/service/CICD"));
const IaC = lazy(() => import("./Pages/serve/IaC"));

// Security & Reliability
const CloudSecurity = lazy(() => import("./Pages/serve/CloudSecurity"));
const IAM = lazy(() => import("./Pages/serve/IAM"));
const Compliance = lazy(() => import("./Pages/serve/Compliance"));
const ThreatDetection = lazy(() => import("./Pages/serve/ThreatDetection"));
// const GitOps = lazy(() => import("./Pages/serve/GitOps"));

// ========== PLATFORM SUB-PAGES ==========
const SaaSApplications = lazy(() => import("./Pages/platform/SaaSApplications"));
const RetailPlatform = lazy(() => import("./Pages/platform/RetailPlatform"));
const FinancialServices = lazy(() => import("./Pages/platform/FinancialServices"));
const Healthcare = lazy(() => import("./Pages/platform/Healthcare"));
const LogisticsPage = lazy(() => import("./Pages/platform/Logistics"));
const MediaEntainment = lazy(() => import("./Pages/platform/MediaEntainment"));
const Telecom = lazy(() => import("./Pages/platform/Telecom"));
const CaseStudies = lazy(() => import("./Pages/CaseStudies"));
const ROIReports = lazy(() => import("./Pages/resources/ROIReports"));
const Benchmarks = lazy(() => import("./Pages/resources/Benchmarks"));
const WhitePapers = lazy(() => import("./Pages/Media/IndividualCategoryPage"));

// ========== ECOSYSTEM SUB-PAGES ==========
// Partners
const AWSPartners = lazy(() => import("./Pages/partners/AWSPartners"));
const AzurePartners = lazy(() => import("./Pages/partners/AzurePartners"));
const GCPPartners = lazy(() => import("./Pages/partners/GCPPartners"));
const ServiceNowPartners = lazy(() => import("./Pages/partners/ServiceNowPartners"));

// Marketplace
const MarketplacePage = lazy(() => import("./Pages/MarketplacePage"));
const CloudInfrastructureMarketplace = lazy(() => import("./Pages/marketplace/CloudInfrastructure"));
const DataAnalyticsMarketplace = lazy(() => import("./Pages/marketplace/DataAnalytics"));
const EnterpriseAppsMarketplace = lazy(() => import("./Pages/marketplace/EnterpriseApps"));
const CXMarketplace = lazy(() => import("./Pages/marketplace/CX"));
const AIMLMarketplace = lazy(() => import("./Pages/marketplace/AIML"));

// ========== ABOUT SUB-PAGES ==========
const CompanyOverview = lazy(() => import("./Pages/about/CompanyOverview"));
// import Locations from "./Pages/about/Locations";
const Values = lazy(() => import("./Pages/about/Values"));
const Events = lazy(() => import("./Pages/Media/Events"));

// ========== CAREERS SUB-PAGES ==========
const CandidateApplyPage = lazy(() => import("./Pages/CandidateApplyPage"));
const InternshipPage = lazy(() => import("./Pages/InternshipPage"));
const CategoryPage = lazy(() => import("./Pages/Media/CategoryPage"));
const PostDetail = lazy(() => import("./Pages/Media/PostDetail"));
const DocumentReader = lazy(() => import("./Pages/Media/DocumentReader"));

// ========== AI & DATA SUB-PAGES ==========
const ArtificialIntelligence = lazy(() => import("./Pages/ai_data/ArtificialIntelligence"));
const AIConsulting = lazy(() => import("./Pages/ai_data/AIConsulting"));
const AiTools = lazy(() => import("./Pages/ai_data/AiTools"));
const DataScience = lazy(() => import("./Pages/ai_data/DataScience"));
const DBCreation = lazy(() => import("./Pages/ai_data/DBCreation"));
const HireAi = lazy(() => import("./Pages/ai_data/HireAi"));

// ========== APPLICATION DEVELOPMENT SUB-PAGES ==========
const Mobiledevelopment = lazy(() => import("./Pages/ap_development/Mobiledevelopment"));
const Webdevelopment = lazy(() => import("./Pages/ap_development/Webdevelopment"));
const Crossplatform = lazy(() => import("./Pages/ap_development/Crossplatform"));
const PWAdevelopment = lazy(() => import("./Pages/ap_development/PWAdevelopment"));
const CMSdevelopment = lazy(() => import("./Pages/ap_development/CMSdevelopment"));
const ITSecurity = lazy(() => import("./Pages/Cybersecurity/ITSecurity"));
const OperationsCenter = lazy(() => import("./Pages/Cybersecurity/Operationscenter"));
const PenetrationTesting = lazy(() => import("./Pages/Cybersecurity/Penetrationtesting"));
const DigitalTransformation = lazy(() => import("./Pages/digital/DigitalTransformation"));
const ITConsulting = lazy(() => import("./Pages/digital/ITConsulting"));
const DigitalSovereignty = lazy(() => import("./Pages/digital/DigitalSovereignty"));

// ========== OTHER PAGES ==========
const NotFoundPage = lazy(() => import("./Pages/NotFoundPage"));

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
          <Suspense fallback={<div style={{height: "100vh", backgroundColor: "#000", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff"}}>Loading...</div>}>
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
        </Suspense>
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
