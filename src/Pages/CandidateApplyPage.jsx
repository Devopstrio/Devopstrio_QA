import { useState, useEffect } from "react";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import API_BASE_URL from "../config";
import { getAllCountries } from "../utils/locationData";
import "../Style/CandidateApplyPage.css";
import {
  FiFileText,
  FiUser,
  FiAward,
  FiBriefcase,
  FiZap,
  FiEdit3,
  FiXCircle,
  FiClipboard,
  FiHome,
  FiMapPin,
  FiCalendar,
  FiSearch,
  FiInfo,
  FiFolder,
  FiPaperclip,
  FiCheckCircle,
} from "react-icons/fi";

const CandidateApplyPage = () => {
  const { requirementId } = useParams();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const referralId = searchParams.get("referral");

  const [requirement, setRequirement] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [parsingResume, setParsingResume] = useState(false);
  const [activeSection, setActiveSection] = useState("resume");
  const [reviewMode, setReviewMode] = useState(false);
  const [formProgress, setFormProgress] = useState(0);

  // Location states
  const [countries, setCountries] = useState([]);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    coverLetter: "",
    resume: null,
    country: "",
    state: "",
    district: "",
    address: "",
    pincode: "",
  });

  // Educational Details
  const [educationalDetails, setEducationalDetails] = useState([
    {
      qualification: "",
      institution: "",
      yearOfPassing: "",
      percentage: "",
      degree: "",
    },
  ]);

  // Experience Details
  const [experienceDetails, setExperienceDetails] = useState([
    {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      currentlyWorking: false,
      description: "",
    },
  ]);

  // Skills
  const [skills, setSkills] = useState([""]);
  const [extraFieldsData, setExtraFieldsData] = useState({});

  const getMaxBirthDate = () => {
    const today = new Date();
    const maxDate = new Date(
      today.getFullYear() - 18,
      today.getMonth(),
      today.getDate(),
    );
    return maxDate.toISOString().split("T")[0];
  };

  const getMinBirthDate = () => {
    const today = new Date();
    const minDate = new Date(
      today.getFullYear() - 100,
      today.getMonth(),
      today.getDate(),
    );
    return minDate.toISOString().split("T")[0];
  };

  // Calculate form progress
  useEffect(() => {
    let progress = 0;

    // Basic info (3 fields)
    if (formData.name && formData.email && formData.phone) progress += 30;

    // Resume (1 field)
    if (formData.resume) progress += 10;

    // Location (4 fields)
    if (
      formData.country ||
      formData.state ||
      formData.address ||
      formData.pincode
    )
      progress += 20;

    // Education (at least 1 complete)
    const hasEducation = educationalDetails.some(
      (edu) => edu.qualification && edu.institution,
    );
    if (hasEducation) progress += 15;

    // Skills (at least 1)
    const hasSkills = skills.some((skill) => skill.trim() !== "");
    if (hasSkills) progress += 15;

    // Experience (optional)
    const hasExperience = experienceDetails.some(
      (exp) => exp.company && exp.position,
    );
    if (hasExperience) progress += 10;

    setFormProgress(Math.min(progress, 100));
  }, [formData, educationalDetails, skills, experienceDetails]);

  // Initialize countries on component mount
  useEffect(() => {
    setCountries(getAllCountries());
  }, []);

  // Fetch requirement details
  useEffect(() => {
    const fetchRequirement = async () => {
      try {
        setLoading(true);

        const response = await axios.get(
          `${API_BASE_URL}/api/requirements/public/${requirementId}`,
        );

        if (response.data.success && response.data.data) {
          setRequirement(response.data.data);

          const initialExtraFields = {};
          response.data.data.fields?.forEach((field) => {
            if (field.type === "checkbox") {
              initialExtraFields[field.label] = false;
            } else if (field.type === "file") {
              initialExtraFields[field.label] = null;
            } else {
              initialExtraFields[field.label] = "";
            }
          });
          setExtraFieldsData(initialExtraFields);
        } else {
          setErrorMessage("Job requirement not found");
        }
      } catch (err) {
        console.error("Error fetching requirement:", err);
        setErrorMessage(
          "Failed to load job details. Please check if the link is correct.",
        );
      } finally {
        setLoading(false);
      }
    };

    if (requirementId) {
      fetchRequirement();
    } else {
      setErrorMessage("No job ID provided in the URL");
      setLoading(false);
    }
  }, [requirementId]);

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle pincode change
  const handlePincodeChange = (e) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      pincode: value,
    }));
  };

  // Resume parsing function
  const parseResume = async (file) => {
    setParsingResume(true);
    setErrorMessage("");

    try {
      if (!file) {
        setErrorMessage("Please select a resume file");
        return;
      }

      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!allowedTypes.includes(file.type)) {
        setErrorMessage("Please upload a PDF, DOC, or DOCX file only");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage("File size should be less than 5MB");
        return;
      }

      const formDataToSend = new FormData();
      formDataToSend.append("resume", file);

      const response = await axios.post(
        `${API_BASE_URL}/api/applications/parse-resume`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          timeout: 30000,
        },
      );

      if (response.data.success) {
        const parsedData = response.data.data;

        setFormData((prev) => ({
          ...prev,
          name:
            parsedData.name && parsedData.name !== "Payroll Invoice"
              ? parsedData.name
              : prev.name,
          email: parsedData.email || prev.email,
          phone: parsedData.phone || prev.phone,
          resume: file,
        }));

        if (parsedData.education && parsedData.education.length > 0) {
          const formattedEducation = parsedData.education
            .slice(0, 3)
            .map((edu) => ({
              qualification: edu.qualification || "",
              institution: edu.institution || "",
              yearOfPassing: edu.yearOfPassing || "",
              percentage: edu.percentage || "",
              degree: edu.degree || edu.qualification || "",
            }));

          setEducationalDetails(formattedEducation);
        }

        if (parsedData.experience && parsedData.experience.length > 0) {
          const formattedExperience = parsedData.experience
            .slice(0, 3)
            .map((exp) => ({
              company: exp.company || "",
              position: exp.position || "",
              startDate: exp.startDate ? `${exp.startDate}-01-01` : "",
              endDate: exp.currentlyWorking
                ? ""
                : exp.endDate
                  ? `${exp.endDate}-01-01`
                  : "",
              currentlyWorking: exp.currentlyWorking || false,
              description: exp.description || "",
            }));

          setExperienceDetails(formattedExperience);
        }

        if (parsedData.skills && parsedData.skills.length > 0) {
          const skillsArray = [...parsedData.skills.slice(0, 10)];
          if (skillsArray[skillsArray.length - 1] !== "") {
            skillsArray.push("");
          }
          setSkills(skillsArray);
        }

        setSuccessMessage(
          "Resume parsed successfully! Please review the auto-filled information below.",
        );
        setActiveSection("personal");
      } else {
        setErrorMessage(
          "Failed to parse resume. Please fill the form manually.",
        );
        setFormData((prev) => ({ ...prev, resume: file }));
      }
    } catch (error) {
      console.error("Error parsing resume:", error);
      setErrorMessage("Failed to parse resume. Please fill the form manually.");
      setFormData((prev) => ({ ...prev, resume: file }));
    } finally {
      setParsingResume(false);
    }
  };

  // Dropzone for resume upload with auto-parse
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [".docx"],
    },
    maxFiles: 1,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setFormData((prev) => ({ ...prev, resume: file }));
        parseResume(file);
      }
    },
  });

  // Handle file upload for resume (manual)
  const handleResumeChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, resume: file }));
      parseResume(file);
    }
  };

  // Handle extra fields changes
  const handleExtraFieldChange = (fieldLabel, value) => {
    setExtraFieldsData((prev) => ({
      ...prev,
      [fieldLabel]: value,
    }));
  };

  // Educational Details Handlers
  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...educationalDetails];
    updatedEducation[index][field] = value;
    setEducationalDetails(updatedEducation);
  };

  const addEducationField = () => {
    setEducationalDetails([
      ...educationalDetails,
      {
        qualification: "",
        institution: "",
        yearOfPassing: "",
        percentage: "",
        degree: "",
      },
    ]);
  };

  const removeEducationField = (index) => {
    if (educationalDetails.length > 1) {
      const updatedEducation = educationalDetails.filter((_, i) => i !== index);
      setEducationalDetails(updatedEducation);
    }
  };

  // Experience Details Handlers
  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...experienceDetails];
    updatedExperience[index][field] = value;

    if (field === "currentlyWorking" && value === true) {
      updatedExperience[index].endDate = "";
    }

    setExperienceDetails(updatedExperience);
  };

  const addExperienceField = () => {
    setExperienceDetails([
      ...experienceDetails,
      {
        company: "",
        position: "",
        startDate: "",
        endDate: "",
        currentlyWorking: false,
        description: "",
      },
    ]);
  };

  const removeExperienceField = (index) => {
    if (experienceDetails.length > 1) {
      const updatedExperience = experienceDetails.filter((_, i) => i !== index);
      setExperienceDetails(updatedExperience);
    }
  };

  // Skills Handlers
  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };

  const addSkillField = () => {
    setSkills([...skills, ""]);
  };

  const removeSkillField = (index) => {
    if (skills.length > 1) {
      const updatedSkills = skills.filter((_, i) => i !== index);
      setSkills(updatedSkills);
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    // Validate required fields
    const errors = [];
    if (!formData.name.trim()) errors.push("Full Name");
    if (!formData.email.trim()) errors.push("Email Address");
    if (!formData.phone.trim()) errors.push("Phone Number");
    if (!formData.dateOfBirth) errors.push("Date of Birth");
    if (!formData.resume) errors.push("Resume");

    if (errors.length > 0) {
      setErrorMessage(
        `Please fill the following required fields: ${errors.join(", ")}`,
      );
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[\d\s\-+()]{10,}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      setErrorMessage("Please enter a valid phone number (minimum 10 digits)");
      return;
    }

    // Validate age (must be at least 18 years old)
    if (formData.dateOfBirth) {
      const birthDate = new Date(formData.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--;
      }

      if (age < 18) {
        setErrorMessage("You must be at least 18 years old to apply.");
        return;
      }

      if (age > 100) {
        setErrorMessage("Please enter a valid date of birth.");
        return;
      }
    }

    // Validate resume file size (max 5MB)
    if (formData.resume && formData.resume.size > 5 * 1024 * 1024) {
      setErrorMessage("Resume file size should be less than 5MB");
      return;
    }

    // Validate resume file type
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (formData.resume && !allowedTypes.includes(formData.resume.type)) {
      setErrorMessage("Resume must be PDF, DOC, or DOCX format");
      return;
    }

    // Validate education (at least one complete education)
    const hasValidEducation = educationalDetails.some(
      (edu) =>
        edu.qualification &&
        edu.qualification.trim() &&
        edu.institution &&
        edu.institution.trim(),
    );
    if (!hasValidEducation) {
      setErrorMessage("Please provide at least one education qualification");
      return;
    }

    // Validate skills (at least one skill)
    const hasSkills = skills.some((skill) => skill.trim() !== "");
    if (!hasSkills) {
      setErrorMessage("Please add at least one skill");
      return;
    }

    // If not in review mode, switch to review
    if (!reviewMode) {
      setReviewMode(true);
      setActiveSection("review");
      return;
    }

    // Submit the application
    setSubmitting(true);

    try {
      // Format experience dates properly
      const validatedExperience = experienceDetails.map((exp) => {
        let formattedStartDate = "";
        let formattedEndDate = "";

        if (exp.startDate) {
          const startDate = new Date(exp.startDate);
          if (!isNaN(startDate.getTime())) {
            formattedStartDate = startDate.toISOString().split("T")[0];
          }
        }

        if (!exp.currentlyWorking && exp.endDate) {
          const endDate = new Date(exp.endDate);
          if (!isNaN(endDate.getTime())) {
            formattedEndDate = endDate.toISOString().split("T")[0];
          }
        }

        return {
          company: exp.company || "Not specified",
          position: exp.position || "Not specified",
          startDate:
            formattedStartDate || new Date().toISOString().split("T")[0],
          endDate: formattedEndDate,
          currentlyWorking: exp.currentlyWorking || false,
          description: exp.description || "",
        };
      });

      // Format education
      const validatedEducation = educationalDetails.map((edu) => ({
        qualification: edu.qualification?.trim() || "Not specified",
        institution: edu.institution?.trim() || "Not specified",
        yearOfPassing: edu.yearOfPassing?.toString() || "",
        percentage: edu.percentage?.toString() || "",
        degree:
          edu.degree?.trim() || edu.qualification?.trim() || "Not specified",
      }));

      // Format date of birth
      const formattedDateOfBirth = formData.dateOfBirth
        ? new Date(formData.dateOfBirth).toISOString().split("T")[0]
        : "";

      const applicationData = new FormData();

      // Required fields
      applicationData.append("requirementId", requirementId);
      applicationData.append("name", formData.name.trim());
      applicationData.append("email", formData.email.trim());
      applicationData.append("phone", formData.phone.trim());
      applicationData.append("dateOfBirth", formattedDateOfBirth);
      applicationData.append("appliedRole", requirement.position);

      // Optional fields with validation
      if (formData.coverLetter.trim()) {
        applicationData.append("coverLetter", formData.coverLetter.trim());
      }

      // Location fields
      if (formData.country.trim())
        applicationData.append("country", formData.country.trim());
      if (formData.state.trim())
        applicationData.append("state", formData.state.trim());
      if (formData.district.trim())
        applicationData.append("district", formData.district.trim());
      if (formData.address.trim())
        applicationData.append("address", formData.address.trim());
      if (formData.pincode.trim())
        applicationData.append("pincode", formData.pincode.trim());

      // Education and Experience
      applicationData.append(
        "educationalDetails",
        JSON.stringify(validatedEducation),
      );
      applicationData.append(
        "experienceDetails",
        JSON.stringify(validatedExperience),
      );

      // Skills
      const filteredSkills = skills.filter((skill) => skill.trim() !== "");
      if (filteredSkills.length > 0) {
        applicationData.append("skills", JSON.stringify(filteredSkills));
      }

      // Referral
      if (referralId) {
        applicationData.append("referredBy", referralId);
      }

      // Resume
      applicationData.append("resume", formData.resume);

      // Extra fields
      if (requirement.fields && requirement.fields.length > 0) {
        const formattedExtraFields = Object.entries(extraFieldsData)
          .filter(([label, value]) => {
            const fieldDef = requirement.fields?.find((f) => f.label === label);
            if (!fieldDef) return false;

            if (fieldDef.required && !value) return false;

            return true;
          })
          .map(([label, value]) => {
            const fieldDef = requirement.fields?.find((f) => f.label === label);
            return {
              label,
              type: fieldDef?.type || "text",
              value: value || "",
            };
          });

        if (formattedExtraFields.length > 0) {
          applicationData.append(
            "extraFields",
            JSON.stringify(formattedExtraFields),
          );
        }
      }
      console.log("📤 Submitting application...", {
        requirementId,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        educationCount: validatedEducation.length,
        experienceCount: validatedExperience.length,
        skillsCount: filteredSkills.length,
      });

      const response = await axios.post(
        `${API_BASE_URL}/api/applications/apply`,
        applicationData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Accept: "application/json",
          },
          timeout: 45000,
          onUploadProgress: (progressEvent) => {
            if (progressEvent.total) {
              const progress = Math.round(
                (progressEvent.loaded * 100) / progressEvent.total,
              );
              console.log(`Upload progress: ${progress}%`);
            }
          },
        },
      );

      console.log("✅ Application response:", response.data);

      if (response.data.success) {
        const successMsg =
          response.data.message || "Application submitted successfully!";
        setSuccessMessage(successMsg);

        setTimeout(() => {
          setSuccessMessage("");
        }, 10000);

        setFormData({
          name: "",
          email: "",
          phone: "",
          dateOfBirth: "",
          coverLetter: "",
          resume: null,
          country: "",
          state: "",
          district: "",
          address: "",
          pincode: "",
        });
        setEducationalDetails([
          {
            qualification: "",
            institution: "",
            yearOfPassing: "",
            percentage: "",
            degree: "",
          },
        ]);
        setExperienceDetails([
          {
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            currentlyWorking: false,
            description: "",
          },
        ]);
        setSkills([""]);
        setExtraFieldsData({});
        setReviewMode(false);
        setFormProgress(0);
        setActiveSection("resume");
      } else {
        const errorMsg =
          response.data.message ||
          "Application was not accepted. Please try again.";
        setErrorMessage(errorMsg);
      }
    } catch (err) {
      console.error("❌ Error submitting application:", err);

      let errorMsg = "Failed to submit application. ";

      if (err.response) {
        if (err.response.status === 400) {
          errorMsg =
            err.response.data?.message ||
            "Invalid application data. Please check your information.";
        } else if (err.response.status === 401) {
          errorMsg = "Session expired. Please refresh the page and try again.";
        } else if (err.response.status === 409) {
          errorMsg = "You have already applied for this position.";
        } else if (err.response.status === 413) {
          errorMsg =
            "File too large. Please upload a smaller resume (max 5MB).";
        } else if (err.response.status === 422) {
          errorMsg = "Invalid data format. Please check your information.";
        } else if (err.response.status === 500) {
          errorMsg = "Server error. Please try again later.";
        } else {
          errorMsg = `Server error (${err.response.status}). Please try again.`;
        }
      } else if (err.request) {
        if (err.code === "ECONNABORTED") {
          errorMsg =
            "Request timeout. Please check your internet connection and try again.";
        } else {
          errorMsg = "Network error. Please check your internet connection.";
        }
      } else {
        errorMsg =
          err.message || "An unexpected error occurred. Please try again.";
      }

      setErrorMessage(errorMsg);
    } finally {
      setSubmitting(false);
    }
  };

  // Navigation sections
  const sections = [
    {
      id: "resume",
      label: "Resume Upload",
      icon: <FiFileText />,
      required: true,
    },
    {
      id: "personal",
      label: "Personal Info",
      icon: <FiUser />,
      required: true,
    },
    { id: "education", label: "Education", icon: <FiAward />, required: true },
    {
      id: "experience",
      label: "Experience",
      icon: <FiBriefcase />,
      required: false,
    },
    { id: "skills", label: "Skills", icon: <FiZap />, required: true },
    { id: "cover", label: "Cover Letter", icon: <FiEdit3 />, required: false },
  ];

  if (loading) {
    return (
      <div className="univ-loading-container">
        <div className="univ-spinner"></div>
        <p className="univ-loading-text">Loading Application Form...</p>
      </div>
    );
  }

  if (!requirement) {
    return (
      <div className="univ-error-container">
        <div className="univ-error-card">
          <div className="univ-error-icon">
            <FiXCircle />
          </div>
          <h2 className="univ-error-title">Position Not Available</h2>
          <p className="univ-error-message">
            {errorMessage ||
              "The position you're looking for is no longer available."}
          </p>
          <button onClick={() => navigate("/")} className="univ-primary-btn">
            Browse Other Positions
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="univ-application-page">
      {/* Professional Header */}
      <div className="univ-professional-header">
        <div className="univ-header-content">
          <div className="univ-header-left">
            <div className="univ-header-logo">
              <div className="univ-logo-icon">
                <FiClipboard />
              </div>
              <div className="univ-logo-text">
                <span className="univ-logo-title">CareerPortal</span>
                <span className="univ-logo-subtitle">
                  Professional Recruitment
                </span>
              </div>
            </div>
          </div>

          <div className="univ-header-right">
            <div className="univ-job-details">
              <h1 className="univ-job-title">{requirement.position}</h1>
              <div className="univ-job-meta">
                <span className="univ-meta-item">
                  <span className="univ-meta-icon">
                    <FiHome />
                  </span>
                  {requirement.companyName}
                </span>
                <span className="univ-meta-item">
                  <span className="univ-meta-icon">
                    <FiMapPin />
                  </span>
                  {requirement.location || "Multiple Locations"}
                </span>
                <span className="univ-meta-item">
                  <span className="univ-meta-icon">
                    <FiCalendar />
                  </span>
                  {requirement.department}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="univ-progress-section">
        <div className="univ-progress-header">
          <h3 className="univ-progress-title">Application Progress</h3>
          <span className="univ-progress-percentage">
            {formProgress}% Complete
          </span>
        </div>
        <div className="univ-progress-container">
          <div className="univ-progress-bar">
            <div
              className="univ-progress-fill"
              style={{ width: `${formProgress}%` }}
            ></div>
          </div>
          <div className="univ-progress-steps">
            {formProgress < 30 && (
              <span className="univ-progress-hint">
                Start by uploading your resume
              </span>
            )}
            {formProgress >= 30 && formProgress < 60 && (
              <span className="univ-progress-hint">
                Complete personal and education details
              </span>
            )}
            {formProgress >= 60 && formProgress < 90 && (
              <span className="univ-progress-hint">
                Add experience and skills
              </span>
            )}
            {formProgress >= 90 && (
              <span className="univ-progress-hint">Ready for submission!</span>
            )}
          </div>
        </div>
      </div>

      <div className="univ-application-wrapper">
        {/* Modern Sidebar Navigation */}
        <div className="univ-navigation-sidebar">
          <div className="univ-nav-header">
            <h3 className="univ-nav-title">Application Sections</h3>
            <p className="univ-nav-subtitle">Complete all required fields</p>
          </div>

          <nav className="univ-nav-sections">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id);
                  setReviewMode(false);
                }}
                className={`univ-nav-item ${activeSection === section.id ? "active" : ""}`}
              >
                <div className="univ-nav-icon">{section.icon}</div>
                <div className="univ-nav-content">
                  <span className="univ-nav-label">{section.label}</span>
                  <div className="univ-nav-status">
                    {section.required && (
                      <span className="univ-required-indicator">Required</span>
                    )}
                  </div>
                </div>
                <div className="univ-nav-arrow">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </button>
            ))}

            {/* Review Section */}
            <button
              onClick={() => {
                setActiveSection("review");
                setReviewMode(true);
              }}
              className={`univ-nav-item ${activeSection === "review" ? "active review" : "review"}`}
            >
              <div className="univ-nav-icon">
                <FiSearch />
              </div>
              <div className="univ-nav-content">
                <span className="univ-nav-label">Review & Submit</span>
                <span className="univ-final-step">Final Step</span>
              </div>
              <div className="univ-nav-arrow">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </button>
          </nav>

          <div className="univ-nav-footer">
            <div className="univ-tip-card">
              <div className="univ-tip-icon">
                <FiInfo />
              </div>
              <div className="univ-tip-content">
                <p className="univ-tip-title">Quick Tip</p>
                <p className="univ-tip-text">
                  Upload your resume first to auto-fill information
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Form Content */}
        <div className="univ-main-form">
          {!reviewMode ? (
            <>
              {/* Resume Upload Section */}
              {activeSection === "resume" && (
                <div className="univ-form-section">
                  <div className="univ-section-card">
                    <div className="univ-section-header">
                      <div className="univ-section-title-group">
                        <div className="univ-section-icon">
                          <FiFileText />
                        </div>
                        <div>
                          <h3 className="univ-section-title">Resume Upload</h3>
                          <p className="univ-section-description">
                            Upload your resume to automatically fill your
                            information. Supported formats: PDF, DOC, DOCX
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="univ-upload-section">
                      <div
                        {...getRootProps()}
                        className={`univ-upload-area ${isDragActive ? "active" : ""} ${parsingResume ? "processing" : ""}`}
                      >
                        <input {...getInputProps()} />
                        {parsingResume ? (
                          <div className="univ-processing-state">
                            <div className="univ-spinner large"></div>
                            <p className="univ-processing-title">
                              Analyzing Your Resume
                            </p>
                            <small>
                              Extracting information from your document
                            </small>
                          </div>
                        ) : (
                          <div className="univ-upload-content">
                            <div className="univ-upload-icon">
                              <FiFolder />
                            </div>
                            <h4 className="univ-upload-title">
                              Drag & Drop Your Resume
                            </h4>
                            <p className="univ-upload-subtitle">
                              or click to browse files
                            </p>
                            <div className="univ-file-types">
                              <span className="univ-file-type">PDF</span>
                              <span className="univ-file-type">DOC</span>
                              <span className="univ-file-type">DOCX</span>
                            </div>
                            <small className="univ-file-size">
                              Maximum file size: 5MB
                            </small>
                          </div>
                        )}
                      </div>

                      <div className="univ-upload-divider">
                        <span className="univ-divider-text">OR</span>
                      </div>

                      <div className="univ-manual-upload-section">
                        <label className="univ-file-input-label">
                          <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleResumeChange}
                            disabled={parsingResume}
                            className="univ-file-input"
                          />
                          <div className="univ-browse-button">
                            <span className="univ-browse-icon">
                              <FiPaperclip />
                            </span>
                            Browse Files
                          </div>
                        </label>
                      </div>
                    </div>

                    {formData.resume && (
                      <div className="univ-file-preview-card">
                        <div className="univ-file-info">
                          <div className="univ-file-icon-success">
                            <FiCheckCircle />
                          </div>
                          <div className="univ-file-details">
                            <span className="univ-file-name">
                              {formData.resume.name}
                            </span>
                            <span className="univ-file-size">
                              {(formData.resume.size / 1024 / 1024).toFixed(2)}{" "}
                              MB
                            </span>
                          </div>
                        </div>
                        <button
                          type="button"
                          onClick={() =>
                            setFormData((prev) => ({ ...prev, resume: null }))
                          }
                          className="univ-remove-file-btn"
                        >
                          Remove
                        </button>
                      </div>
                    )}

                    <div className="univ-section-actions">
                      <button
                        type="button"
                        onClick={() => setActiveSection("personal")}
                        className="univ-next-button"
                        disabled={!formData.resume}
                      >
                        Continue to Personal Information
                        <svg
                          className="univ-button-arrow"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Personal Information Section */}
              {activeSection === "personal" && (
                <div className="univ-form-section">
                  <div className="univ-section-card">
                    <div className="univ-section-header">
                      <div className="univ-section-title-group">
                        <div className="univ-section-icon">
                          <FiUser />
                        </div>
                        <div>
                          <h3 className="univ-section-title">
                            Personal Information
                          </h3>
                          <p className="univ-section-description">
                            Please provide your personal details. Fields marked
                            with * are required.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="univ-form-grid">
                      <div className="univ-form-group">
                        <label className="univ-form-label">
                          Full Name *
                          <span className="univ-required-star"> *</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="univ-input-field"
                          placeholder="Enter your full legal name"
                        />
                      </div>

                      <div className="univ-form-group">
                        <label className="univ-form-label">
                          Email Address *
                          <span className="univ-required-star"> *</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="univ-input-field"
                          placeholder="example@email.com"
                        />
                      </div>

                      <div className="univ-form-group">
                        <label className="univ-form-label">
                          Phone Number *
                          <span className="univ-required-star"> *</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="univ-input-field"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>

                      <div className="univ-form-group">
                        <label className="univ-form-label">
                          Date of Birth *
                          <span className="univ-required-star"> *</span>
                        </label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleChange}
                          className="univ-input-field"
                          required
                          max={getMaxBirthDate()}
                          min={getMinBirthDate()}
                        />
                        <small className="univ-field-hint">
                          Must be 18 years or older to apply
                        </small>
                      </div>
                    </div>

                    <div className="univ-section-actions">
                      <button
                        type="button"
                        onClick={() => setActiveSection("resume")}
                        className="univ-back-button"
                      >
                        <svg
                          className="univ-back-arrow"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveSection("education")}
                        className="univ-next-button"
                      >
                        Continue to Education
                        <svg
                          className="univ-button-arrow"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Education Section */}
              {activeSection === "education" && (
                <div className="univ-form-section">
                  <div className="univ-section-card">
                    <div className="univ-section-header">
                      <div className="univ-section-title-group">
                        <div className="univ-section-icon">
                          <FiAward />
                        </div>
                        <div>
                          <h3 className="univ-section-title">
                            Educational Background
                          </h3>
                          <p className="univ-section-description">
                            List your educational qualifications starting with
                            the highest degree.
                          </p>
                        </div>
                      </div>
                    </div>

                    {educationalDetails.map((education, index) => (
                      <div key={index} className="univ-education-card">
                        <div className="univ-card-header">
                          <h4 className="univ-card-title">
                            <span className="univ-card-number">
                              #{index + 1}
                            </span>
                            Education Details
                          </h4>
                          {educationalDetails.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeEducationField(index)}
                              className="univ-remove-card-button"
                            >
                              Remove
                            </button>
                          )}
                        </div>

                        <div className="univ-form-grid">
                          <div className="univ-form-group">
                            <label className="univ-form-label">
                              Degree/Qualification *
                              <span className="univ-required-star"> *</span>
                            </label>
                            <select
                              value={education.qualification}
                              onChange={(e) =>
                                handleEducationChange(
                                  index,
                                  "qualification",
                                  e.target.value,
                                )
                              }
                              className="univ-select-field"
                              required
                            >
                              <option value="">Select Qualification</option>
                              <option value="High School">
                                High School / Secondary School
                              </option>
                              <option value="Associate Degree">
                                Associate Degree
                              </option>
                              <option value="Bachelor's Degree">
                                Bachelor's Degree
                              </option>
                              <option value="Master's Degree">
                                Master's Degree
                              </option>
                              <option value="PhD">Doctorate (PhD)</option>
                              <option value="Diploma">
                                Diploma / Certificate
                              </option>
                              <option value="Other">Other</option>
                            </select>
                          </div>

                          <div className="univ-form-group">
                            <label className="univ-form-label">
                              Institution Name *
                              <span className="univ-required-star"> *</span>
                            </label>
                            <input
                              type="text"
                              value={education.institution}
                              onChange={(e) =>
                                handleEducationChange(
                                  index,
                                  "institution",
                                  e.target.value,
                                )
                              }
                              className="univ-input-field"
                              placeholder="University/College Name"
                              required
                            />
                          </div>

                          <div className="univ-form-group">
                            <label className="univ-form-label">
                              Field of Study
                            </label>
                            <input
                              type="text"
                              value={education.degree}
                              onChange={(e) =>
                                handleEducationChange(
                                  index,
                                  "degree",
                                  e.target.value,
                                )
                              }
                              className="univ-input-field"
                              placeholder="e.g., Computer Science, Business Administration"
                            />
                          </div>

                          <div className="univ-form-group">
                            <label className="univ-form-label">
                              Year of Completion
                            </label>
                            <input
                              type="number"
                              value={education.yearOfPassing}
                              onChange={(e) =>
                                handleEducationChange(
                                  index,
                                  "yearOfPassing",
                                  e.target.value,
                                )
                              }
                              className="univ-input-field"
                              placeholder="YYYY"
                              min="1950"
                              max="2030"
                            />
                          </div>

                          <div className="univ-form-group">
                            <label className="univ-form-label">
                              GPA / Percentage
                            </label>
                            <input
                              type="text"
                              value={education.percentage}
                              onChange={(e) =>
                                handleEducationChange(
                                  index,
                                  "percentage",
                                  e.target.value,
                                )
                              }
                              className="univ-input-field"
                              placeholder="e.g., 3.8 GPA or 85%"
                            />
                          </div>
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={addEducationField}
                      className="univ-add-more-button"
                    >
                      <svg
                        className="univ-add-icon"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                      Add Another Education
                    </button>

                    <div className="univ-section-actions">
                      <button
                        type="button"
                        onClick={() => setActiveSection("personal")}
                        className="univ-back-button"
                      >
                        <svg
                          className="univ-back-arrow"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveSection("experience")}
                        className="univ-next-button"
                      >
                        Continue to Experience
                        <svg
                          className="univ-button-arrow"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Experience Section */}
              {activeSection === "experience" && (
                <div className="univ-form-section">
                  <div className="univ-section-card">
                    <div className="univ-section-header">
                      <div className="univ-section-title-group">
                        <div className="univ-section-icon">
                          <FiBriefcase />
                        </div>
                        <div>
                          <h3 className="univ-section-title">
                            Work Experience
                          </h3>
                          <p className="univ-section-description">
                            List your professional experience in reverse
                            chronological order.
                          </p>
                        </div>
                      </div>
                    </div>

                    {experienceDetails.map((experience, index) => (
                      <div key={index} className="univ-experience-card">
                        <div className="univ-card-header">
                          <h4 className="univ-card-title">
                            <span className="univ-card-number">
                              #{index + 1}
                            </span>
                            Work Experience
                          </h4>
                          {experienceDetails.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeExperienceField(index)}
                              className="univ-remove-card-button"
                            >
                              Remove
                            </button>
                          )}
                        </div>

                        <div className="univ-form-grid">
                          <div className="univ-form-group">
                            <label className="univ-form-label">
                              Company Name
                            </label>
                            <input
                              type="text"
                              value={experience.company}
                              onChange={(e) =>
                                handleExperienceChange(
                                  index,
                                  "company",
                                  e.target.value,
                                )
                              }
                              className="univ-input-field"
                              placeholder="Company/Organization Name"
                            />
                          </div>

                          <div className="univ-form-group">
                            <label className="univ-form-label">Job Title</label>
                            <input
                              type="text"
                              value={experience.position}
                              onChange={(e) =>
                                handleExperienceChange(
                                  index,
                                  "position",
                                  e.target.value,
                                )
                              }
                              className="univ-input-field"
                              placeholder="Your position/role"
                            />
                          </div>

                          <div className="univ-form-group">
                            <label className="univ-form-label">
                              Start Date
                            </label>
                            <input
                              type="date"
                              value={experience.startDate}
                              onChange={(e) =>
                                handleExperienceChange(
                                  index,
                                  "startDate",
                                  e.target.value,
                                )
                              }
                              className="univ-input-field"
                            />
                          </div>

                          <div className="univ-form-group">
                            <label className="univ-form-label">End Date</label>
                            <input
                              type="date"
                              value={experience.endDate}
                              onChange={(e) =>
                                handleExperienceChange(
                                  index,
                                  "endDate",
                                  e.target.value,
                                )
                              }
                              disabled={experience.currentlyWorking}
                              className="univ-input-field"
                            />
                          </div>

                          <div className="univ-form-group univ-checkbox-group">
                            <label className="univ-checkbox-label">
                              <input
                                type="checkbox"
                                checked={experience.currentlyWorking}
                                onChange={(e) =>
                                  handleExperienceChange(
                                    index,
                                    "currentlyWorking",
                                    e.target.checked,
                                  )
                                }
                                className="univ-checkbox-input"
                              />
                              <span className="univ-checkbox-custom"></span>
                              <span className="univ-checkbox-text">
                                I currently work here
                              </span>
                            </label>
                          </div>
                        </div>

                        <div className="univ-form-group">
                          <label className="univ-form-label">
                            Responsibilities & Achievements
                          </label>
                          <textarea
                            value={experience.description}
                            onChange={(e) =>
                              handleExperienceChange(
                                index,
                                "description",
                                e.target.value,
                              )
                            }
                            rows="4"
                            className="univ-textarea-field"
                            placeholder="Describe your key responsibilities, projects, and achievements..."
                          />
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      onClick={addExperienceField}
                      className="univ-add-more-button"
                    >
                      <svg
                        className="univ-add-icon"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                      Add Another Experience
                    </button>

                    <div className="univ-section-actions">
                      <button
                        type="button"
                        onClick={() => setActiveSection("education")}
                        className="univ-back-button"
                      >
                        <svg
                          className="univ-back-arrow"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveSection("skills")}
                        className="univ-next-button"
                      >
                        Continue to Skills
                        <svg
                          className="univ-button-arrow"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Skills Section */}
              {activeSection === "skills" && (
                <div className="univ-form-section">
                  <div className="univ-section-card">
                    <div className="univ-section-header">
                      <div className="univ-section-title-group">
                        <div className="univ-section-icon">
                          <FiZap />
                        </div>
                        <div>
                          <h3 className="univ-section-title">
                            Skills & Competencies
                          </h3>
                          <p className="univ-section-description">
                            List your relevant skills and competencies. Include
                            both technical and soft skills.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="univ-skills-container">
                      {skills.map((skill, index) => (
                        <div key={index} className="univ-skill-input-group">
                          <input
                            type="text"
                            value={skill}
                            onChange={(e) =>
                              handleSkillChange(index, e.target.value)
                            }
                            className="univ-input-field"
                            placeholder="e.g., JavaScript, Project Management, Communication"
                          />
                          {skills.length > 1 && (
                            <button
                              type="button"
                              onClick={() => removeSkillField(index)}
                              className="univ-remove-skill-button"
                              title="Remove skill"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path d="M18 6L6 18M6 6l12 12" />
                              </svg>
                            </button>
                          )}
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      onClick={addSkillField}
                      className="univ-add-more-button"
                    >
                      <svg
                        className="univ-add-icon"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                      Add Another Skill
                    </button>

                    <div className="univ-section-actions">
                      <button
                        type="button"
                        onClick={() => setActiveSection("experience")}
                        className="univ-back-button"
                      >
                        <svg
                          className="univ-back-arrow"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveSection("cover")}
                        className="univ-next-button"
                      >
                        Continue to Cover Letter
                        <svg
                          className="univ-button-arrow"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Cover Letter Section */}
              {activeSection === "cover" && (
                <div className="univ-form-section">
                  <div className="univ-section-card">
                    <div className="univ-section-header">
                      <div className="univ-section-title-group">
                        <div className="univ-section-icon">
                          <FiEdit3 />
                        </div>
                        <div>
                          <h3 className="univ-section-title">Cover Letter</h3>
                          <p className="univ-section-description">
                            Tell us why you're interested in this position and
                            why you'd be a great fit.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="univ-form-group">
                      <textarea
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        rows="8"
                        className="univ-textarea-field"
                        placeholder="Dear Hiring Manager,

I am writing to express my interest in the [Position Title] position at [Company Name].

[Your introduction and why you're interested]

[Highlight your relevant experience and skills]

[Explain why you would be a valuable addition to the team]

Thank you for considering my application.

Sincerely,
[Your Name]"
                      />
                    </div>

                    <div className="univ-section-actions">
                      <button
                        type="button"
                        onClick={() => setActiveSection("skills")}
                        className="univ-back-button"
                      >
                        <svg
                          className="univ-back-arrow"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M19 12H5M12 19l-7-7 7-7" />
                        </svg>
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveSection("review");
                          setReviewMode(true);
                        }}
                        className="univ-review-button"
                      >
                        Review Application
                        <svg
                          className="univ-button-arrow"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            /* Review Section */
            <div className="univ-review-section">
              <div className="univ-section-card">
                <div className="univ-section-header">
                  <div className="univ-section-title-group">
                    <div className="univ-section-icon">
                      <FiSearch />
                    </div>
                    <div>
                      <h3 className="univ-section-title">
                        Review Your Application
                      </h3>
                      <p className="univ-section-description">
                        Please review all information before submitting. You can
                        edit any section by clicking on it.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="univ-review-grid">
                  {/* Personal Information Review */}
                  <div className="univ-review-card">
                    <div className="univ-review-header">
                      <h4 className="univ-review-title">
                        Personal Information
                      </h4>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveSection("personal");
                          setReviewMode(false);
                        }}
                        className="univ-edit-button"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Edit
                      </button>
                    </div>
                    <div className="univ-review-content">
                      <div className="univ-review-item">
                        <span className="univ-review-label">Full Name:</span>
                        <span className="univ-review-value">
                          {formData.name || "Not provided"}
                        </span>
                      </div>
                      <div className="univ-review-item">
                        <span className="univ-review-label">Email:</span>
                        <span className="univ-review-value">
                          {formData.email || "Not provided"}
                        </span>
                      </div>
                      <div className="univ-review-item">
                        <span className="univ-review-label">Phone:</span>
                        <span className="univ-review-value">
                          {formData.phone || "Not provided"}
                        </span>
                      </div>
                      <div className="univ-review-item">
                        <span className="univ-review-label">
                          Date of Birth:
                        </span>
                        <span className="univ-review-value">
                          {formData.dateOfBirth
                            ? new Date(
                                formData.dateOfBirth,
                              ).toLocaleDateString()
                            : "Not provided"}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Education Review */}
                  <div className="univ-review-card">
                    <div className="univ-review-header">
                      <h4 className="univ-review-title">Education</h4>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveSection("education");
                          setReviewMode(false);
                        }}
                        className="univ-edit-button"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Edit
                      </button>
                    </div>
                    {educationalDetails.map((edu, index) => (
                      <div key={index} className="univ-review-content">
                        <div className="univ-review-item">
                          <span className="univ-review-label">Degree:</span>
                          <span className="univ-review-value">
                            {edu.qualification || "Not provided"}
                          </span>
                        </div>
                        <div className="univ-review-item">
                          <span className="univ-review-label">
                            Institution:
                          </span>
                          <span className="univ-review-value">
                            {edu.institution || "Not provided"}
                          </span>
                        </div>
                        {edu.degree && (
                          <div className="univ-review-item">
                            <span className="univ-review-label">
                              Field of Study:
                            </span>
                            <span className="univ-review-value">
                              {edu.degree}
                            </span>
                          </div>
                        )}
                        {index < educationalDetails.length - 1 && (
                          <hr className="univ-review-divider" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Experience Review */}
                  <div className="univ-review-card">
                    <div className="univ-review-header">
                      <h4 className="univ-review-title">Work Experience</h4>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveSection("experience");
                          setReviewMode(false);
                        }}
                        className="univ-edit-button"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Edit
                      </button>
                    </div>
                    {experienceDetails.map((exp, index) => (
                      <div key={index} className="univ-review-content">
                        <div className="univ-review-item">
                          <span className="univ-review-label">Company:</span>
                          <span className="univ-review-value">
                            {exp.company || "Not provided"}
                          </span>
                        </div>
                        <div className="univ-review-item">
                          <span className="univ-review-label">Position:</span>
                          <span className="univ-review-value">
                            {exp.position || "Not provided"}
                          </span>
                        </div>
                        <div className="univ-review-item">
                          <span className="univ-review-label">Duration:</span>
                          <span className="univ-review-value">
                            {exp.startDate
                              ? new Date(exp.startDate).toLocaleDateString()
                              : "Not specified"}
                            {" - "}
                            {exp.currentlyWorking
                              ? "Present"
                              : exp.endDate
                                ? new Date(exp.endDate).toLocaleDateString()
                                : "Not specified"}
                          </span>
                        </div>
                        {index < experienceDetails.length - 1 && (
                          <hr className="univ-review-divider" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Skills Review */}
                  <div className="univ-review-card">
                    <div className="univ-review-header">
                      <h4 className="univ-review-title">Skills</h4>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveSection("skills");
                          setReviewMode(false);
                        }}
                        className="univ-edit-button"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Edit
                      </button>
                    </div>
                    <div className="univ-skills-review">
                      {skills
                        .filter((skill) => skill.trim() !== "")
                        .map((skill, index) => (
                          <span key={index} className="univ-skill-tag">
                            {skill}
                          </span>
                        ))}
                    </div>
                  </div>

                  {/* Resume Review */}
                  <div className="univ-review-card">
                    <div className="univ-review-header">
                      <h4 className="univ-review-title">Resume</h4>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveSection("resume");
                          setReviewMode(false);
                        }}
                        className="univ-edit-button"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        Edit
                      </button>
                    </div>
                    <div className="univ-review-content">
                      <div className="univ-review-item">
                        <span className="univ-review-label">File:</span>
                        <span className="univ-review-value">
                          {formData.resume ? (
                            <>
                              <span className="univ-file-name">
                                {formData.resume.name}
                              </span>
                              <span className="univ-file-size">
                                (
                                {(formData.resume.size / 1024 / 1024).toFixed(
                                  2,
                                )}{" "}
                                MB)
                              </span>
                            </>
                          ) : (
                            "No resume uploaded"
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Cover Letter Review */}
                  {formData.coverLetter && (
                    <div className="univ-review-card">
                      <div className="univ-review-header">
                        <h4 className="univ-review-title">Cover Letter</h4>
                        <button
                          type="button"
                          onClick={() => {
                            setActiveSection("cover");
                            setReviewMode(false);
                          }}
                          className="univ-edit-button"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
                          </svg>
                          Edit
                        </button>
                      </div>
                      <div className="univ-review-content">
                        <div className="univ-review-item full-width">
                          <p className="univ-coverletter-preview">
                            {formData.coverLetter}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="univ-review-actions">
                  <button
                    type="button"
                    onClick={() => setReviewMode(false)}
                    className="univ-back-button"
                  >
                    <svg
                      className="univ-back-arrow"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                    Back to Edit
                  </button>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="univ-submit-button"
                  >
                    {submitting ? (
                      <>
                        <div className="univ-spinner small"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <svg
                          className="univ-submit-icon"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Status Messages */}
          {successMessage && (
            <div className="univ-status-message success">
              <div className="univ-status-icon">
                <FiCheckCircle />
              </div>
              <div className="univ-status-content">
                <h4 className="univ-status-title">Success!</h4>
                <p className="univ-status-text">{successMessage}</p>
              </div>
              <button
                onClick={() => setSuccessMessage("")}
                className="univ-status-close"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}

          {errorMessage && (
            <div className="univ-status-message error">
              <div className="univ-status-icon">
                <FiXCircle />
              </div>
              <div className="univ-status-content">
                <h4 className="univ-status-title">Attention Required</h4>
                <p className="univ-status-text">{errorMessage}</p>
              </div>
              <button
                onClick={() => setErrorMessage("")}
                className="univ-status-close"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Professional Footer */}
      <footer className="univ-application-footer">
        <div className="univ-footer-content">
          <div className="univ-footer-info">
            <p className="univ-footer-text">
              Need assistance? Contact our support team at
              <a href="mailto:career@devopstrioglobal.com">
                {" "}
                career@devopstrioglobal.com
              </a>
            </p>
            <p className="univ-footer-note">
              Your application will be reviewed within 3-5 business days. We'll
              contact you via email for updates.
            </p>
          </div>
          <div className="univ-footer-brand">
            <div className="univ-footer-logo">
              <FiClipboard />
            </div>
            <div className="univ-footer-branding">
              <span className="univ-footer-brand-name">CareerPortal</span>
              <span className="univ-footer-brand-tagline">
                Professional Recruitment Solutions
              </span>
            </div>
          </div>
        </div>
        <div className="univ-footer-copyright">
          © {new Date().getFullYear()} CareerPortal. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default CandidateApplyPage;
