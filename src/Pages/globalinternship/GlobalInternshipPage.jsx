// Global Internship  
import GlobalInternship from "../../components/GlobalInternship/GlobalInternship";
import useSEO from "../../hooks/useSEO";
import "./GlobalInternshipPage.css";

const GlobalInternshipPage = () => {
  useSEO(
    "Global Internship | Devopstrio",
    "Join Devopstrio's global internship program. Gain real-world experience in DevOps, Cloud, AI, and more. Apply today.",
  );
  
  return (
    <main className="gip-page">
      <GlobalInternship />
    </main>
  );
};

export default GlobalInternshipPage;