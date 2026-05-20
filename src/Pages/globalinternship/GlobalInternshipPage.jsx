// Global Internship  
import GlobalInternship from "../../components/GlobalInternship/GlobalInternship";
import useSEO from "../../hooks/useSEO";
import "./GlobalInternshipPage.css";

const GlobalInternshipPage = () => {
  useSEO({
    title: "Global Internship Program | Devopstrio Careers Hub",
    description: "Join Devopstrio's immersive Global Internship Program. Gain real-world production-grade experience in DevOps orchestration, cloud-native deployments, and AI integrations.",
    keywords: "global internship, Devopstrio student programs, DevOps remote internship, cloud engineering intern, build career in cloud, tech trainee program, scale skills global",
    ogTitle: "Immersive Global Internship Program | Devopstrio",
    ogDescription: "Kickstart your technology career. Work on industry-scale CI/CD, Kubernetes systems, and custom automation tools alongside our lead engineers.",
    ogImage: "https://devopstrio.com/assets/images/devopstrio-og-global-internship.jpg",
    ogUrl: "https://devopstrio.com/global-internship",
    canonicalUrl: "https://devopstrio.com/global-internship"
  });
  
  return (
    <main className="gip-page">
      <GlobalInternship />
    </main>
  );
};

export default GlobalInternshipPage;