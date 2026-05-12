import { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import api from "../Services/api";

const useCompanySections = () => {
  const [platformSections, setPlatformSections] = useState([]);
  const [aboutSections, setAboutSections] = useState([]);

  useEffect(() => {
    const fetchStructure = async () => {
      try {
        const structure = await api.getFullSiteStructure();

        const formatted = structure.map((section) => ({
          name: section.name,
          slug: section.slug, // 👈 IMPORTANT
          icon: <FiUsers />,
          items: section.categories.map((cat) => ({
            name: cat.name,
            slug: cat.slug,
            path: `/${section.slug}/${cat.slug}`,
            description: "",
          })),
        }));

        // 🎯 Success stories moved to About
        const platformOnly = [];

        // All sections from API go to About (including success-stories)
        const aboutOnly = formatted;

        setPlatformSections(platformOnly);
        setAboutSections(aboutOnly);
      } catch (err) {
        console.error(err);
      }
    };

    fetchStructure();
  }, []);

  return { platformSections, aboutSections };
};

export default useCompanySections;
