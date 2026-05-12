import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FiCloud,
  FiSettings,
  FiShield,
  FiLayers,
  FiUsers,
  FiGlobe,
  FiHome,
  FiChevronRight,
  FiChevronUp,
  FiChevronDown,
  FiStar,
  FiCpu,
  FiCode,
  FiZap,
  FiBriefcase,
  FiHelpCircle,
  FiDatabase,
} from "react-icons/fi";
import AuthorityInfoBar from "./AuthorityInfoBar";

// MediaMenu API Data fetching
import useCompanySections from "../../hooks/useCompanySections.jsx";

// Import images from assets
import CloudPlatformsImage from "../../assets/images/Servicesnav.png";
import "./Navbar.css";

const DEFAULT_DESCRIPTIONS = [
  "Unlocking potential through innovative cloud solutions and architectural excellence.",
  "Driving digital transformation with state-of-the-art DevOps and platform engineering.",
  "Explore our latest case studies, insights, and expert-led technical deep dives.",
  "An inside look at our vibrant culture, core values, and global impact.",
  "Revolutionizing how the world builds software with scalable and secure cloud platforms.",
  "Empowering businesses with cutting-edge technology and unmatched expertise.",
  "Transforming ideas into reality with seamless cloud and DevOps solutions.",
  "Pioneering the future of digital infrastructure with intelligent cloud engineering.",
  "Bridging the gap between strategy and execution through agile transformation.",
  "Fostering collaboration and innovation across our global engineering community.",
  "Optimizing performance and security for enterprise-grade distributed systems.",
  "Building resilient architectures that empower the next generation of digital products.",
  "Accelerating software delivery with fully automated CI/CD and GitOps workflows.",
  "Securing your digital assets with enterprise-grade threat detection and compliance.",
];

const getDefaultDescription = (itemName) => {
  if (!itemName) return DEFAULT_DESCRIPTIONS[0];
  const hash = itemName
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return DEFAULT_DESCRIPTIONS[hash % DEFAULT_DESCRIPTIONS.length];
};

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const [lockedMenu, setLockedMenu] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [panelScroll, setPanelScroll] = useState({ top: false, bottom: true });

  const { platformSections, aboutSections } = useCompanySections();

  const navigate = useNavigate();
  const navbarRef = useRef(null);
  const linksPanelRef = useRef(null); // Added for functional scroll arrows
  const hoverTimeoutRef = useRef(null);
  const clickTimeoutRef = useRef(null);
  const lastClickRef = useRef({ label: null, time: 0 });

  // Handle panel scroll for arrows
  const handlePanelScroll = useCallback((e) => {
    const target = e.target;
    setPanelScroll({
      top: target.scrollTop > 10,
      bottom: target.scrollTop + target.clientHeight < target.scrollHeight - 5,
    });
  }, []);

  // Functional scroll actions
  const scrollPanel = (direction) => {
    if (linksPanelRef.current) {
      const scrollAmount = direction === "up" ? -180 : 180; // Roughly 2 rows
      linksPanelRef.current.scrollBy({
        top: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Reset/Check scroll on menu change
  useEffect(() => {
    setPanelScroll({ top: false, bottom: true });
    const timer = setTimeout(() => {
      const panel = linksPanelRef.current;
      if (panel) {
        setPanelScroll({
          top: panel.scrollTop > 10,
          bottom: panel.scrollHeight > panel.clientHeight + 5,
        });
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [activeMenu]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle click outside to close locked menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setLockedMenu(null);
        setActiveMenu("");
        setActiveCategory(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Clear timeouts on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current);
      }
    };
  }, []);

  // Real Enterprise Mega Menu Data
  const megaMenus = useMemo(
    () => ({
      Services: {
        path: "/services",
        title: "Services",
        categories: [
          {
            name: "AI & Data",
            icon: <FiDatabase />,
            items: [
              {
                name: "Artificial Intelligence",
                path: "/services/artificial-intelligence",
                description: "AI services, AI tools: Recruiter, Self-Assessment, Chatbot, Self-Assistant, ...",
              },
              {
                name: "AI Consulting Services",
                path: "/services/ai-consulting-services",
                description: "Strategy development, integration and deployment, maintenance and support",
              },
              {
                name: "AI for Business Transformation",
                path: "/services/ai-tools",
                description: "Top AI solutions from Devopstrio for 2026",
              },
              {
                name: "Data Science",
                path: "/services/data-science",
                description: "Feedback analysis, metrics analysis, task automation",
              },
              {
                name: "Database Management",
                path: "/services/database-creation-and-management",
                description: "Building modern solutions with advanced tech practices",
              },
              {
                name: "Hire AI Engineers",
                path: "/services/hire-ai-experts",
                description: "Access AI specialists for the roles your project needs",
              },

            ],
          },
          {
            name: "Application Development",
            icon: <FiCode />,
            items: [
              {
                name: "Mobile Development",
                path: "/services/mobile-development",
                description: "Native, cross-platform, and progressive web apps",
              },
              {
                name: "Web Development",
                path: "/services/web-development",
                description: "Customer and employee web portals, apps for front-office, enterprise websites",
              },
              {
                name: "Cross-Platform",
                path: "/services/cross-platform-development",
                description: "Development, consulting, migration, design, QA, support and maintenance",
              },
              {
                name: "PWA Development",
                path: "/services/pwa-development",
                description: "PWA development, design, testing, integration, migration, consulting",
              },
              {
                name: "CMS Web Development",
                path: "/services/cms-based-web-development",
                description: "CMS-based web development: implementation, integration, support, etc.",
              },
              {
                name: "More Services",
                path: "/services/explore",
                description: "Explore all our services",
              }
            ],
          },
          {
            name: "Cloud",
            icon: <FiCloud />,
            items: [
              {
                name: "Cloud Architechture",
                path: "/services/cloud-architecture",
                description: "Multicloud solutions, migration, data protection, and maintenance",
              },
              {
                name: "Cloud Migration",
                path: "/services/cloud-migration",
                description: "Data and server migration, recovery, tracking, and transfer",
              },
              {
                name: "AWS Services",
                path: "/partners/aws",
                description: "Amazon Web Services engineering, analysis, DevOps, and migration",
              },
              {
                name: "Azure Services",
                path: "/partners/azure",
                description: "Azure cloud engineering and optimization, with DB and app migration.",
              },
            ],
          },
          {
            name: "Cybersecurity",
            icon: <FiShield />,
            items: [
              {
                name: "IT Security",
                path: "/services/security-management",
                description: "SSD, QA, security, culture establishment, audits, hardening",
              },
              {
                name: "Security Operations Center",
                path: "/services/security-operations-center",
                description: "Incident response, threat hunting, monitoring, training, assessment",
              },
              {
                name: "Penetration Testing",
                path: "/services/penetration-testing",
                description: "Penetration testing for APIs, IoT, and networks, red teaming, GDPR/PII",
              },
              {
                name: "More Services",
                path: "/services/explore",
                description: "Explore all our services",
              }
            ],
          },
          {
            name: "Digital Transformation",
            icon: <FiZap />,
            items: [
              {
                name: "Digital Transformation",
                path: "/services/digital-transformation",
                description: "Strategy development, system upgrade, and operational transformation",
              },
              {
                name: "IT Consulting",
                path: "/services/it-consulting",
                description: "Strategy, Tech Solutions and Adoption, Advisory, Roadmaps, Risk",
              },
              {
                name: "Digital Sovereignty",
                path: "/services/digital-sovereignty",
                description: "Ensuring data control, security, and compliance in the digital landscape",
              },
              {
                name: "More Services",
                path: "/services/explore",
                description: "Explore all our services",
              }
            ],
          },
          // {
          //   name: "Software Engineering",
          //   icon: <FiLayers />,
          //   items: [
          //     {
          //       name: "Software Engineering",
          //       path: "/services/software-engineering",
          //       description: "Agile and timely software product engineering",
          //     },
          //     {
          //       name: "Custom Software Development",
          //       path: "/services/custom-software-development",
          //       description: "Portal and web app development, back-ends, integration, and adapters",
          //     },
          //     {
          //       name: "Project Development Services",
          //       path: "/services/project-development-services",
          //       description: "PDS with clear timelines, transparency, results, and management",
          //     },
          //     {
          //       name: "IoT Development",
          //       path: "/services/iot-development",
          //       description: "IoT consulting, analytics, design, prototyping, and development",
          //     },
          //     {
          //       name: "Legacy Modernization",
          //       path: "/services/legacy-modernization",
          //       description: "Legacy re-engineering, consulting, APIs, and change management",
          //     },
          //     {
          //       name: "Quality Assurance Services",
          //       path: "/services/quality-assurance",
          //       description: "Automation, managed, and performance testing, consultancy, and audits",
          //     },
          //     {
          //       name: "DevOps Services",
          //       path: "/services/devops",
          //       description: "DevOps, automation support, disaster recovery, planning, and configs",
          //     },
          //     // {
          //     //   name: "API Integration",
          //     //   path: "/services/api-integration",
          //     //   description: "API development, integration, testing, documentation, and optimization",
          //     // },
          //     {
          //       name: "Mobile App Development",
          //       path: "/services/mobile-development",
          //       description: "Custom iOS, Android, and cross-platform mobile application development",
          //     },
          //   ],
          // },
          // {
          //   name: "Enterprise Applications",
          //   icon: <FiBriefcase />,
          //   items: [
          //     {
          //       name: "SAP Services",
          //       path: "/services/sap",
          //       description: "Strengthening development teams with our SAP expertise",
          //     },
          //     {
          //       name: "Salesforce Implementation",
          //       path: "/services/salesforce-implementation",
          //       description: "Comprehensive resources for tackling complex Salesforce solutions",
          //     },
          //     {
          //       name: "Salesforce Consulting",
          //       path: "/services/salesforce-consulting",
          //       description: "Expert guidance for Salesforce integration, customization, and optimization",
          //     },
          //     {
          //       name: "CRM Consulting Services",
          //       path: "/services/crm-consulting",
          //       description: "Consulting on CRM integration, implementation, and customization",
          //     },
          //     {
          //       name: "Creatio CRM Implementation",
          //       path: "/services/creatio-crm",
          //       description: "Creatio CRM setup, customization, and tech support",
          //     },
          //     {
          //       name: "Oracle Managed Services",
          //       path: "/services/oracle-managed-services-enterprise",
          //       description: "Oracle ERP, database, and cloud solutions for secure enterprise growth.",
          //     },
          //   ],
          // },
          // {
          //   name: "Staff Augmentation",
          //   icon: <FiUsers />,
          //   items: [
          //     {
          //       name: "Staff Augmentation",
          //       path: "/services/staff-augmentation",
          //       description: "Scalable staff augmentation for your IT needs",
          //     },
          //     {
          //       name: "Dedicated Team",
          //       path: "/services/dedicated-team",
          //       description: "Dedicated teams of experts for guaranteed results",
          //     },
          //     {
          //       name: "UI/UX Design Services",
          //       path: "/services/ui-ux-design",
          //       description: "Experts in design creating functional and intuitive interfaces",
          //     },
          //     {
          //       name: "Business Analysis",
          //       path: "/services/business-analysis",
          //       description: "Turning business requirements into actionable strategies",
          //     },
          //     {
          //       name: "Solution Architecture",
          //       path: "/services/solution-architecture",
          //       description: "Ensuring a robust, adaptable, and future-ready tech ecosystem",
          //     },
          //     {
          //       name: "Project Management",
          //       path: "/services/project-management",
          //       description: "Keeping your IT projects on track—on budget and on time",
          //     },
          //     {
          //       name: "Marketing Services",
          //       path: "/services/marketing",
          //       description: "Effectively convey your product's strengths to your target audience",
          //     },
          //     {
          //       name: "Discovery Phase",
          //       path: "/services/discovery-phase",
          //       description: "Determining the project's purpose, viability, and the resources needed",
          //     },
          //     {
          //       name: "Startups and MVPs",
          //       path: "/services/startups-and-mvp",
          //       description: "Contributing to the rapid development of MVPs and empowering startups",
          //     },
          //       {
          //       name: "More Services",
          //       path: "/services/explore",
          //       description: "Explore all our services",
          //     }
          //   ],
          // },
        ],
        card: {
          title: "Build Secure & Scalable Cloud Platforms",
          description:
            "End-to-end cloud solutions tailored to your business needs",
          path: "/services",
          image: CloudPlatformsImage,
          badge: "Expert-Led",
        },
      },

      Industries: {
        path: "/platform",
        title: "Industries",
        categories: [
             {
            name: "Industries",
            icon: <FiLayers />,
            items: [
              {
                name: "SaaS Applications",
                path: "/platform/saas-applications",
                description: "Accelerate research and development",
              },
              {
                name: "Retail & E-commerce",
                path: "/platform/retail",
                description: "Scalable platforms for retail",
              },
              {
                name: "Financial Services",
                path: "/platform/financial-services",
                description: "Software for Banking, insurance, inverting, leanding , cypto and more ",
              },
              {
                name: "Healthcare",
                path: "/platform/retail",
                description: "Products for Telehealth, Telecare, Telemonitoring, EMR/EHR, Patient monitoring, etc.",
              },
              {
                name: "Logistics",
                path: "/platform/logistics",
                description: "Products for Logistics and Supply Chain Management",
              },
              {
                name: "Media & Entertainment",
                path: "/platform/media-entertainment",
                description: "Solution for live streaming , video on demand, OTT and other media and entertainment needs",
              },
              {
                name: "Telecommunication",
                path: "/platform/telecommunication",
                description: "Telecom software solutions with Channel Partner Management, OSS, BSS, Cloud Services and other telecom needs",
              },
              {
                name: "Automotive",
                path: "/platform/automotive",
                description: "Automotive IVI solutions, Connectivity, ADAS / AD and powertrain system Software",
              }          
            ],         
          },    

          /* Success Stories menu moved to About */
        ],
        card: {
          title: "Industry-Focused Cloud Solutions",
          description: "Tailored platforms for your specific industry needs",
          path: "/platform",
          image: CloudPlatformsImage,
          badge: "Proven Results",
        },
      },

      Ecosystem: {
        path: "/ecosystem",
        title: "Ecosystem",
        categories: [
          {
            name: "Our Partners",
            icon: <FiGlobe />,
            items: [
              {
                name: "AWS",
                path: "/partners/aws",
                description: "Advanced AWS partner",
              },
              {
                name: "Microsoft Azure",
                path: "/partners/azure",
                description: "Microsoft Gold partner",
              },
              {
                name: "Google Cloud",
                path: "/partners/gcp",
                description: "Premier GCP partner",
              },
              {
                name: "ServiceNow",
                path: "/partners/servicenow",
                description: "Elite ServiceNow partner",
              },
            ],
          },
          {
            name: "Marketplace",
            icon: <FiHome />,
            items: [
              {
                name: "Cloud & Infrastructure",
                path: "/marketplace/cloud-infrastructure",
                description: "Pre-built infrastructure solutions",
              },
              {
                name: "Data & Analytics",
                path: "/marketplace/data-analytics",
                description: "Analytics and BI tools",
              },
              // {
              //   name: "Enterprise Applications",
              //   path: "/marketplace/enterprise-apps",
              //   description: "Ready-to-deploy applications",
              // },
              {
                name: "CX Transformation",
                path: "/marketplace/cx",
                description: "Customer experience solutions",
              },
              // {
              //   name: "AI/ML Solutions",
              //   path: "/marketplace/ai-ml",
              //   description: "AI and machine learning platforms",
              // },
            ],
          },
        ],
        card: {
          title: "Cloud Ecosystem",
          description: "Leverage our extensive partner network",
          path: "/ecosystem",
          image: CloudPlatformsImage,
          badge: "Elite Partner",
        },
      },

      About: {
        path: "/about",
        title: "About",
        categories: [
          {
            name: "Company",
            icon: <FiHome />,
            items: [
              {
                name: "Company Overview",
                path: "/about/overview",
                description: "Our mission and vision",
              },
              // {
              //   name: "Worldwide Locations",
              //   path: "/about/locations",
              //   description: "Global presence",
              // },
              {
                name: "Corporate Values",
                path: "/about/values",
                description: "What we stand for",
              },
              {
                name: "Testimonials",
                path: "/clients",
                description: "Feedback from our global engineering community",
              },
            ],
          },
          ...aboutSections.map((section) => {
            return {
              ...section,
              items: section.items.map((item) => {
                // INSIGHTS & KNOWLEDGE
                if (item.name === "Blogs") {
                  return {
                    ...item,
                    description:
                      "Expert articles, industry trends and technical deep dives",
                  };
                }

                if (item.name === "Case Studies") {
                  return {
                    ...item,
                    description:
                      "Detailed breakdowns of real client success stories",
                  };
                }

                if (item.name === "Newsletters") {
                  return {
                    ...item,
                    description:
                      "Curated updates, insights and company highlights",
                  };
                }

                if (item.name === "Podcasts") {
                  return {
                    ...item,
                    description:
                      "Conversations with industry leaders and innovators",
                  };
                }
                if (item.name === "White Paper" || item.slug === "white-paper") {
                  return {
                    ...item,
                    description:
                      "Securing your digital assets with enterprise-grade threat detection and compliance.",
                  };
                }

                // LIFE AT Devopstrio
                if (item.name === "Celebrations") {
                  return {
                    ...item,
                    description:
                      "Moments that define our culture and shared achievements",
                  };
                }

                if (item.name === "Community") {
                  return {
                    ...item,
                    description:
                      "Our involvement in social impact and tech communities",
                  };
                }

                if (item.name === "Posters") {
                  return {
                    ...item,
                    description:
                      "Creative visuals showcasing events and milestones",
                  };
                }

                if (item.name === "Team Culture") {
                  return {
                    ...item,
                    description:
                      "Inside look at collaboration, values and work environment",
                  };
                }

                // NEWS & EVENTS
                if (item.name === "Achievements") {
                  return {
                    ...item,
                    description:
                      "Key accomplishments and company breakthroughs",
                  };
                }

                if (item.name === "Awards & Milestones") {
                  return {
                    ...item,
                    description:
                      "Recognition, certifications and growth milestones",
                  };
                }

                if (item.name === "Company Announcements") {
                  return {
                    ...item,
                    description: "Official updates and important company news",
                  };
                }

                if (item.name === "Industry Events") {
                  return {
                    ...item,
                    description:
                      "Conferences, summits and technology events we participate in",
                  };
                }

                // SUCCESS STORIES Overrides
                if (item.name === "Client Transformations") {
                  return {
                    ...item,
                    description:
                      "Real-world digital transformation case studies",
                  };
                }

                if (item.name === "Impact Metrics") {
                  return {
                    ...item,
                    description:
                      "Measurable results and performance improvements",
                  };
                }

                if (item.name === "Testimonials") {
                  return {
                    ...item,
                    description: "What our clients say about working with us",
                  };
                }

                // Fallback: Pick a "random" (deterministic) description from the pool
                return {
                  ...item,
                  description:
                    item.description || getDefaultDescription(item.name),
                };
              }),
            };
          }),
        ],
        card: {
          title: "Learn More About Devopstrio ",
          description: "Discover our story, values, and vision",
          path: "/about",
          image: CloudPlatformsImage,
          badge: "Est. 2019",
        },
      },
    }),
    [aboutSections, platformSections],
  );

  // Main menu items
  const menuItems = [
    { label: "Services", path: "/services", mega: true },
    { label: "Industries", path: "/platform", mega: true },
    { label: "Ecosystem", path: "/ecosystem", mega: true },
    { label: "Insights", path: "/insights", mega: false },
    { label: "Careers", path: "/careers", mega: false },
    { label: "About", path: "/about", mega: true },
  ];

  // Mobile menu toggle
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Mobile menu item click handler
  const handleMobileMenuItemClick = (item) => {
    if (item.mega) {
      setActiveMenu(activeMenu === item.label ? "" : item.label);
      if (activeMenu === item.label) {
        setActiveCategory(null);
      } else {
        const menuData = megaMenus[item.label];
        if (menuData && menuData.categories && menuData.categories.length > 0) {
          setActiveCategory(menuData.categories[0].name);
        }
      }
    } else {
      navigate(item.path);
      setMobileMenuOpen(false);
      setActiveMenu("");
      setActiveCategory(null);
    }
  };

  // Desktop click handler
  const handleDesktopClick = useCallback(
    (label, path, isMega) => {
      if (!isMega) {
        navigate(path);
        setActiveMenu("");
        setActiveCategory(null);
        return;
      }

      const DOUBLE_CLICK_DELAY = 300;
      const now = performance.now();
      const lastClick = lastClickRef.current;

      if (
        lastClick.label === label &&
        now - lastClick.time < DOUBLE_CLICK_DELAY
      ) {
        if (clickTimeoutRef.current) {
          clearTimeout(clickTimeoutRef.current);
          clickTimeoutRef.current = null;
        }

        if (lockedMenu === label) {
          setLockedMenu(null);
          setActiveMenu("");
          setActiveCategory(null);
        } else {
          setLockedMenu(label);
          setActiveMenu(label);
          const menuData = megaMenus[label];
          if (
            menuData &&
            menuData.categories &&
            menuData.categories.length > 0
          ) {
            setActiveCategory(menuData.categories[0].name);
          }
        }

        lastClickRef.current = { label: null, time: 0 };
      } else {
        setActiveMenu(label);
        const menuData = megaMenus[label];
        if (menuData && menuData.categories && menuData.categories.length > 0) {
          setActiveCategory(menuData.categories[0].name);
        }

        lastClickRef.current = { label, time: now };

        if (clickTimeoutRef.current) {
          clearTimeout(clickTimeoutRef.current);
        }

        clickTimeoutRef.current = setTimeout(() => {
          if (lastClickRef.current.label === label && !lockedMenu) {
            navigate(path);
            setActiveMenu("");
            setActiveCategory(null);
          }
          clickTimeoutRef.current = null;
          lastClickRef.current = { label: null, time: 0 };
        }, DOUBLE_CLICK_DELAY);
      }
    },
    [navigate, megaMenus, lockedMenu],
  );

  // Desktop hover handlers
  const handleMouseEnter = (label) => {
    if (!mobileMenuOpen) {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }

      if (!lockedMenu || lockedMenu === label) {
        hoverTimeoutRef.current = setTimeout(() => {
          setActiveMenu(label);
          const menuData = megaMenus[label];
          if (
            menuData &&
            menuData.categories &&
            menuData.categories.length > 0
          ) {
            setActiveCategory(menuData.categories[0].name);
          }
        }, 150);
      }
    }
  };

  const handleMouseLeave = () => {
    if (mobileMenuOpen) return;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }

    if (!lockedMenu) {
      setActiveMenu("");
      setActiveCategory(null);
    }
  };

  return (
    <nav
      className={`drio-navbar ${scrolled ? "drio-navbar-scrolled" : "drio-navbar-transparent"}`}
      ref={navbarRef}
    >
      <div className="drio-navbar-container">
        {/* LOGO */}
        <div className="drio-navbar-logo">
          <Link to="/">
            <img
              src="/images/Devopsrio_Main_logo.png"
              alt="Devopstrio "
              className="drio-logo-image"
            />
            <span className="drio-logo-text">Devopstrio</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`drio-mobile-menu-toggle ${mobileMenuOpen ? "drio-active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* MENU WITH MEGA DROPDOWNS */}
        <div
          className={`drio-navbar-menu ${mobileMenuOpen ? "drio-mobile-open" : ""}`}
        >
          {menuItems.map((item) => (
            <div
              key={item.label}
              className={`drio-menu-item ${item.mega ? "drio-has-mega" : ""}`}
              onMouseEnter={() => handleMouseEnter(item.label)}
              onMouseLeave={handleMouseLeave}
            >
              {mobileMenuOpen ? (
                // Mobile view
                item.mega ? (
                  <button
                    type="button"
                    className={`drio-mobile-menu-button ${activeMenu === item.label ? "drio-active" : ""}`}
                    onClick={() => handleMobileMenuItemClick(item)}
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link to={item.path} onClick={() => setMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                )
              ) : (
                // Desktop view
                <button
                  className={`drio-desktop-menu-button ${activeMenu === item.label ? "drio-active" : ""}`}
                  onClick={() =>
                    handleDesktopClick(item.label, item.path, item.mega)
                  }
                >
                  {item.label}
                </button>
              )}

              {/* ENTERPRISE MEGA MENU WITH LEFT VERTICAL CATEGORIES */}
              {item.mega &&
                activeMenu === item.label &&
                megaMenus[item.label] && (
                  <div
                    className="drio-mega-menu"
                    data-menu={item.label.toLowerCase()}
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="drio-mega-menu-header">
                      <h3>{megaMenus[item.label].title}</h3>
                    </div>

                    <div className="drio-mega-container">
                      {/* 1. LEFT CATEGORY SIDEBAR */}
                      <div className="drio-mega-categories-panel">
                        {megaMenus[item.label].categories.map((category) => (
                          <button
                            key={category.name}
                            className={`drio-category-btn ${activeCategory === category.name ? "drio-active" : ""}`}
                            onMouseEnter={() => setActiveCategory(category.name)}
                          >
                            <div className="drio-category-content-left">
                              <span className="drio-category-icon">
                                {category.icon}
                              </span>
                              <span>{category.name}</span>
                            </div>
                            <FiChevronRight className="drio-category-arrow" />
                          </button>
                        ))}
                      </div>

                      {/* 2. MIDDLE DYNAMIC LINK GRID (Active Category Items) */}
                      <div className="drio-mega-links-wrapper">
                        {panelScroll.top && (
                          <div
                            className="drio-scroll-indicator top"
                            onClick={() => scrollPanel("up")}
                            title="Scroll Up"
                          >
                            <FiChevronUp />
                          </div>
                        )}
                        <div
                          className="drio-mega-links-panel"
                          ref={linksPanelRef}
                          onScroll={handlePanelScroll}
                        >
                          <div className="drio-panel-items">
                            {megaMenus[item.label].categories
                              .find((c) => c.name === activeCategory)
                              ?.items.map((link) => (
                                <Link
                                  key={link.name}
                                  to={link.path}
                                  className="drio-panel-link"
                                  onClick={() => {
                                    setMobileMenuOpen(false);
                                    setLockedMenu(null);
                                    setActiveMenu("");
                                    setActiveCategory(null);
                                  }}
                                >
                                  <div className="drio-link-content">
                                    <span className="drio-link-name">
                                      {link.name}
                                    </span>
                                    {link.description && (
                                      <span className="drio-link-description">
                                        {link.description}
                                      </span>
                                    )}
                                  </div>
                                  <FiChevronRight className="drio-link-arrow" />
                                </Link>
                              ))}
                          </div>
                        </div>
                        {panelScroll.bottom && (
                          <div
                            className="drio-scroll-indicator bottom"
                            onClick={() => scrollPanel("down")}
                            title="Scroll Down"
                          >
                            <FiChevronDown />
                          </div>
                        )}
                      </div>

                      {/* 3. RIGHT SIDE FEATURED SIDEBAR */}
                      <div className="drio-mega-card-panel">
                        <div className="drio-nav-feature-card">
                          <div className="drio-card-image-wrapper">
                            <img
                              src={megaMenus[item.label].card.image}
                              alt={megaMenus[item.label].card.title}
                              className="drio-card-image"
                            />
                          </div>
                          <div className="drio-card-content">
                            {megaMenus[item.label].card.badge && (
                              <span className="drio-card-badge">
                                {megaMenus[item.label].card.badge}
                              </span>
                            )}
                            <h4>{megaMenus[item.label].card.title}</h4>
                            <p>{megaMenus[item.label].card.description}</p>
                            {megaMenus[item.label].card.button && (
                              <Link
                                to={megaMenus[item.label].card.path}
                                className="drio-card-link"
                                onClick={() => {
                                  setMobileMenuOpen(false);
                                  setLockedMenu(null);
                                  setActiveMenu("");
                                  setActiveCategory(null);
                                }}
                              >
                                {megaMenus[item.label].card.button}
                              </Link>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* PREMIUM DARK BOTTOM STRIP */}
                    <div className="drio-mega-menu-bottom">
                      <div className="drio-mega-menu-bottom-container">
                        {/* LEFT – SOCIAL ICONS */}
                        <div className="drio-mega-social">
                          <span className="drio-social-label">Follow us:</span>
                          <div className="drio-social-icons">
                            <a
                              href="https://www.linkedin.com/company/devopstrioglobal/posts/?feedView=all"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="drio-nav-social-item drio-brand-li"
                            >
                              <i className="ri-linkedin-fill" />
                            </a>
                            <a
                              href="https://www.facebook.com/profile.php?id=61579126233218"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="drio-nav-social-item drio-brand-fb"
                            >
                              <i className="ri-facebook-fill" />
                            </a>
                            <a
                              href="https://www.instagram.com/devopstrio_offcl/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="drio-nav-social-item drio-brand-ig"
                            >
                              <i className="ri-instagram-fill" />
                            </a>
                            <a
                              href="https://www.youtube.com/@Devopstrioltd"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="drio-nav-social-item drio-brand-yt"
                            >
                              <i className="ri-youtube-fill" />
                            </a>
                          </div>
                        </div>

                        {/* RIGHT – ACTION LINKS */}
                        <div className="drio-mega-quick-links">
                          <Link
                            to="/events"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setLockedMenu(null);
                              setActiveMenu("");
                              setActiveCategory(null);
                            }}
                          >
                            <i className="ri-calendar-line" />
                            Events
                          </Link>
                          <a
                            href="https://wa.me/+447471482903"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setLockedMenu(null);
                              setActiveMenu("");
                              setActiveCategory(null);
                            }}
                          >
                            <i className="ri-chat-1-line" />
                            Chat now
                          </a>
                          <Link
                            to="/contact"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setLockedMenu(null);
                              setActiveMenu("");
                              setActiveCategory(null);
                            }}
                          >
                            <i className="ri-mail-line" />
                            Drop us a Line
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="drio-navbar-actions">
          <Link to="/contact" className="drio-contact-btn">
            Contact Us
          </Link>
        </div>
      </div>

      {/* AUTHORITY INFO BAR */}
      {/* <AuthorityInfoBar isScrolled={scrolled} /> */}
    </nav>
  );
};

export default Navbar;
