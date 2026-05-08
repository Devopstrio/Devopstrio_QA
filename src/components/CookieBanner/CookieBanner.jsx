import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./CookieBanner.css";

const CookieBanner = () => {
  // isVisible is declared later
  const [showSettings, setShowSettings] = useState(false);
  const [activeTab, setActiveTab] = useState("privacy");

  // Read preferences and existence from localStorage eagerly
  const [preferences, setPreferences] = useState(() => {
    const storedPrefs = localStorage.getItem("devopstrio_cookie_prefs");
    return storedPrefs ? JSON.parse(storedPrefs) : {
      strictly: true,
      performance: false,
      functional: false,
      targeting: false,
    };
  });

  const [isVisible, setIsVisible] = useState(() => {
    return !localStorage.getItem("devopstrio_cookie_prefs");
  });

  const handleAcceptAll = () => {
    const allAccepted = {
      strictly: true,
      performance: true,
      functional: true,
      targeting: true,
    };
    localStorage.setItem("devopstrio_cookie_prefs", JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("devopstrio_cookie_prefs", JSON.stringify(preferences));
    setIsVisible(false);
    setShowSettings(false);
  };

  const handleClose = () => {
    // If they just close without saving, we assume minimal/functional or simply hide it for this session.
    const minimal = {
      strictly: true,
      performance: false,
      functional: false,
      targeting: false,
    };
    localStorage.setItem("devopstrio_cookie_prefs", JSON.stringify(minimal));
    setIsVisible(false);
  };

  const handleToggle = (key) => {
    if (key === "strictly") return; // Cannot turn off strictly necessary
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <AnimatePresence>
      {/* 1. The Bottom Sticky Banner */}
      {isVisible && !showSettings && (
        <motion.div 
          className="cookie-bottom-banner"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        >
          <div className="cookie-banner-content">
            <p>
              We use cookies to enable website functionality, understand the performance of our site, provide social media features, and serve more relevant content to you. We may also place cookies on our and our partners&apos; behalf to help us deliver more targeted content and assess the performance of these campaigns. You may review our <a href="/privacy-policy">Privacy Policy</a> here and our <a href="/cookie-policy">Cookie Policy</a> here.
            </p>
          </div>
          <div className="cookie-banner-actions">
            <button className="btn-secondary" onClick={() => setShowSettings(true)}>
              Cookies Settings
            </button>
            <button className="btn-primary" onClick={handleAcceptAll}>
              Accept Cookies
            </button>
            <button className="btn-close" onClick={handleClose}>
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}

      {/* 2. The Settings Modal (Privacy Preference Center) */}
      {showSettings && (
        <motion.div 
          className="cookie-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div 
            className="cookie-modal"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <div className="cookie-modal-header">
              <h2>Privacy Preference Center</h2>
              <button 
                className="btn-modal-close" 
                onClick={() => {
                  setShowSettings(false);
                  if (!localStorage.getItem("devopstrio_cookie_prefs")) {
                    setIsVisible(true);
                  }
                }}
              >
                <X size={24} />
              </button>
            </div>

            <div className="cookie-modal-body">
              {/* Left Sidebar Tabs */}
              <div className="cookie-tabs">
                <button
                  className={`cookie-tab ${activeTab === "privacy" ? "active" : ""}`}
                  onClick={() => setActiveTab("privacy")}
                >
                  Your Privacy
                </button>
                <button
                  className={`cookie-tab ${activeTab === "strictly" ? "active" : ""}`}
                  onClick={() => setActiveTab("strictly")}
                >
                  Strictly Necessary Cookies
                </button>
                <button
                  className={`cookie-tab ${activeTab === "performance" ? "active" : ""}`}
                  onClick={() => setActiveTab("performance")}
                >
                  Performance Cookies
                </button>
                <button
                  className={`cookie-tab ${activeTab === "functional" ? "active" : ""}`}
                  onClick={() => setActiveTab("functional")}
                >
                  Functional Cookies
                </button>
                <button
                  className={`cookie-tab ${activeTab === "targeting" ? "active" : ""}`}
                  onClick={() => setActiveTab("targeting")}
                >
                  Targeting Cookies
                </button>
              </div>

              {/* Right Content Area */}
              <div className="cookie-tab-content">
                
                {activeTab === "privacy" && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <h3>Your Privacy</h3>
                    <p>
                      When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience.
                    </p>
                    <p>
                      Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.
                    </p>
                  </motion.div>
                )}

                {activeTab === "strictly" && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="content-header-toggle">
                      <h3>Strictly Necessary Cookies</h3>
                      <span className="always-active">Always Active</span>
                    </div>
                    <p>
                      These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
                    </p>
                    <p>
                      You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
                    </p>
                  </motion.div>
                )}

                {activeTab === "performance" && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="content-header-toggle">
                      <h3>Performance Cookies</h3>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={preferences.performance}
                          onChange={() => handleToggle("performance")}
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <p>
                      These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.
                    </p>
                    <p>
                      All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
                    </p>
                  </motion.div>
                )}

                {activeTab === "functional" && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="content-header-toggle">
                      <h3>Functional Cookies</h3>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={preferences.functional}
                          onChange={() => handleToggle("functional")}
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <p>
                      These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages.
                    </p>
                    <p>
                      If you do not allow these cookies then some or all of these services may not function properly.
                    </p>
                  </motion.div>
                )}

                {activeTab === "targeting" && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="content-header-toggle">
                      <h3>Targeting Cookies</h3>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={preferences.targeting}
                          onChange={() => handleToggle("targeting")}
                        />
                        <span className="slider round"></span>
                      </label>
                    </div>
                    <p>
                      These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.
                    </p>
                    <p>
                      They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="cookie-modal-footer">
              <button className="btn-primary" onClick={handleSavePreferences}>
                Confirm My Choices
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
