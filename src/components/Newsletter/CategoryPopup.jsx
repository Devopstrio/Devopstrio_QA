import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import api from "../../Services/api";
import { FiX, FiCheck } from "react-icons/fi";
import "./CategoryPopup.css";

const CategoryPopup = ({ email, closePopup }) => {
  const [sections, setSections] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(true);

  const showAlert = (message, type) => {
    Swal.fire({
      icon: type,
      title: type === "error" ? "Oops..." : "Alert!",
      text: message,
      confirmButtonColor: "#ce2453",
      background: "#0a0a0a",
      color: "#fff",
      // Force z-index high
      didOpen: () => {
        const container = Swal.getContainer();
        if (container) container.style.zIndex = "100000";
      },
    }).then(() => {
      // Automatically close the preference popup after user clicks OK
      closePopup();
    });
  };

  const loadSections = useCallback(async () => {
    try {
      setDataLoading(true);

      // 1️⃣ get user preferences first
      const prefs = await api.getSubscriberPreferences(email);
      const existingCategories = prefs?.categories || [];

      // 2️⃣ load sections
      const data = await api.getSections();
      console.log("SECTIONS RESPONSE:", data);
      if (!data) {
        setSections([]);
        return;
      }

      const sectionsData = data.sections || data;

      const sectionsWithCategories = await Promise.all(
        sectionsData.map(async (section) => {
          const categoriesRes = await api.getCategories(section.slug);

          return {
            ...section,
            categories: categoriesRes?.categories || [],
          };
        }),
      );

      // 3️⃣ update state together
      setSections(sectionsWithCategories);
      setSelectedCategories(
        existingCategories.map((c) => c.toLowerCase().trim()),
      );
    } catch (err) {
      console.error("Error loading categories", err);
    } finally {
      setDataLoading(false);
    }
  }, [email]);

  useEffect(() => {
    loadSections();
  }, [loadSections]);

  const toggleCategory = (slug) => {
    const normalized = slug.toLowerCase().trim();

    setSelectedCategories((prev) => {
      if (prev.includes(normalized)) {
        return prev.filter((c) => c !== normalized);
      }
      return [...prev, normalized];
    });
  };

  const submitSubscription = async () => {
    if (!email || !email.includes("@") || !email.includes(".")) {
      Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please provide a valid email address.",
        confirmButtonColor: "#ce2453",
        background: "#0a0a0a",
        color: "#fff",
        didOpen: () => {
          const container = Swal.getContainer();
          if (container) container.style.zIndex = "100000";
        },
      });
      return;
    }

    if (selectedCategories.length === 0) {
      // Don't close for warnings, just alert
      Swal.fire({
        icon: "warning",
        title: "Wait!",
        text: "Please select at least one category",
        confirmButtonColor: "#ce2453",
        background: "#0a0a0a",
        color: "#fff",
        // Force z-index high
        didOpen: () => {
          const container = Swal.getContainer();
          if (container) container.style.zIndex = "100000";
        },
      });
      return;
    }

    console.log("Selected categories:", selectedCategories);

    try {
      setLoading(true);

      await api.subscribe(email, [], selectedCategories);

      Swal.fire({
        icon: "success",
        title: "Subscription Successful!",
        text: "Your preferences have been updated.",
        confirmButtonColor: "#ce2453",
        background: "#0a0a0a",
        color: "#fff",
        timer: 2000,
        showConfirmButton: false,
        // Force z-index high
        didOpen: () => {
          const container = Swal.getContainer();
          if (container) container.style.zIndex = "100000";
        },
      });

      setTimeout(() => {
        closePopup();
      }, 2000);
    } catch (err) {
      const errorMsg = err.message || "Subscription failed";
      showAlert(errorMsg, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cat-popup-overlay" onClick={closePopup}>
      <div className="cat-popup-box" onClick={(e) => e.stopPropagation()}>
        <button className="cat-popup-close" onClick={closePopup}>
          <FiX />
        </button>

        <div className="cat-popup-header">
          <span className="cat-popup-badge">Preferences</span>
          <h3>Personalize Your Feed</h3>
          <p>
            Select the topics you&apos;re most interested in to receive tailored
            updates.
          </p>
        </div>

        <div className="cat-popup-content">
          {dataLoading ? (
            <div className="cat-popup-loader">
              <div className="cat-spinner"></div>
              <span>Curating sections...</span>
            </div>
          ) : (
            sections.map((section, sIdx) => (
              <div
                key={section.slug}
                className="cat-popup-section"
                style={{ "--delay": sIdx * 0.1 + "s" }}
              >
                <h4>{section.name}</h4>
                <div className="cat-popup-grid">
                  {section.categories.map((cat) => {
                    console.log("Category:", cat);
                    return (
                      <label
                        key={cat.slug}
                        className={`cat-popup-item ${
                          selectedCategories.includes(
                            cat.slug.toLowerCase().trim(),
                          )
                            ? "active"
                            : ""
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(
                            cat.slug.toLowerCase().trim(),
                          )}
                          onChange={() => toggleCategory(cat.slug)}
                        />
                        <div className="cat-checkbox-custom">
                          {selectedCategories.includes(
                            cat.slug.toLowerCase().trim(),
                          ) && <FiCheck />}
                        </div>
                        <span className="cat-cat-name">{cat.name}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cat-popup-actions">
          <button className="cat-btn-cancel" onClick={closePopup}>
            Maybe Later
          </button>
          <button
            className="cat-btn-submit"
            onClick={submitSubscription}
            disabled={loading || dataLoading}
          >
            {loading ? "Joining..." : "Save Preferences"}
          </button>
        </div>
      </div>
    </div>
  );
};

CategoryPopup.propTypes = {
  email: PropTypes.string.isRequired,
  closePopup: PropTypes.func.isRequired,
};

export default CategoryPopup;
