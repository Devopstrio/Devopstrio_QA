import React, { useState } from "react";
import { FiPaperclip, FiUsers, FiShield, FiArrowRight } from "react-icons/fi";
import { sendEmail } from "../../Services/sendmail";
import "./AIConsultationForm.css";

const AIConsultationForm = ({ 
  id = "Scroll", 
  title = "Let's build your AI Strategy", 
  description = "Our experts are ready to analyze your requirements and propose the best AI solution for your business.",
  subjectPrefix = "AI Consultation Request",
  steps = [
    { number: "01", title: "Expert Analysis", desc: "An expert contacts you after analyzing your requirements to understand your vision." },
    { number: "02", title: "Privacy Guaranteed", desc: "If needed, we sign an NDA to ensure the highest level of data security and privacy." },
    { number: "03", title: "Detailed Proposal", desc: "We submit a comprehensive project proposal with estimates, timelines, and expert CVs." }
  ]
}) => {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    requirements: "",
    nda: false,
    file: null,
    preview: null
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 3 * 1024 * 1024) {
        alert("File size exceeds 3MB limit.");
        e.target.value = null;
        return;
      }
      
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => ({ ...prev, file, preview: reader.result }));
        };
        reader.readAsDataURL(file);
      } else {
        setFormData(prev => ({ ...prev, file, preview: null }));
      }
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setStatus({ type: "", message: "" });

    const payload = {
      fullName: subjectPrefix,
      email: formData.email,
      subject: `${subjectPrefix} - ${formData.phone}`,
      message: `Requirements: ${formData.requirements}\nPhone: ${formData.phone}\nNDA: ${formData.nda ? "Yes" : "No"}`,
      toOverride: "meena.s@devopstrioglobal.com",
      file: formData.file
    };

    try {
      await sendEmail(payload);
      setStatus({
        type: "success",
        message: `✅ Request sent to hellosuman29@airsworld.net! We'll review your requirements and contact you shortly.`,
      });
      setFormData({ email: "", phone: "", requirements: "", nda: false, file: null, preview: null });
    } catch (error) {
      setStatus({ type: "error", message: "❌ Failed to send request. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="dt-consultation-section" id={id}>
      <div className="dt-container">
        <div className="dt-consultation-dual">
          <div className="dt-consultation-info">
            <div className="dt-mini-badge">FREE CONSULTATION</div>
            <h2 className="dt-consult-title" dangerouslySetInnerHTML={{ __html: title }}></h2>
            <p className="dt-consult-desc">{description}</p>
            
            <div className="dt-timeline-steps">
              {steps.map((step, idx) => (
                <div key={idx} className="dt-timeline-step">
                  <div className="dt-step-marker">{step.number}</div>
                  <div className="dt-step-content">
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="dt-consult-trust">
              <span className="dt-trust-tag">✦ Customers who trust us</span>
              <div className="dt-trust-brands-row">
                <strong>Advertima</strong> <strong>Universkin</strong> <strong>sema</strong> <strong>TUI</strong>
              </div>
            </div>
          </div>

          <div className="dt-consultation-form-wrapper">
            <div className="dt-glass-form-card">
              <div className="dt-form-header">
                <FiUsers className="dt-form-icon-top" />
                <h3>Order a free consultation</h3>
              </div>

              {status.message && (
                <div className={`dt-form-status dt-status-${status.type}`}>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="dt-premium-form">
                <div className="dt-input-field">
                  <input 
                    type="email" 
                    name="email"
                    placeholder="Corporate E-mail" 
                    required 
                    value={formData.email}
                    onChange={handleInputChange}
                    className={errors.email ? "dt-input-error" : ""}
                  />
                  {errors.email && <span className="dt-error-msg">{errors.email}</span>}
                </div>

                <div className="dt-input-field">
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Phone number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="dt-input-field">
                  <textarea 
                    name="requirements"
                    rows={3} 
                    placeholder="Describe your project requirements"
                    value={formData.requirements}
                    onChange={handleInputChange}
                  ></textarea>
                </div>

                <div className="dt-form-actions">
                  <div className="dt-file-upload-custom">
                    <label htmlFor={`file-upload-${id}`} className="dt-file-btn">
                      <FiPaperclip /> {formData.file ? formData.file.name : "Attach requirements (Max 3MB)"}
                    </label>
                    <input 
                      id={`file-upload-${id}`}
                      type="file" 
                      accept="image/*,.pdf,.doc,.docx"
                      style={{ display: 'none' }} 
                      onChange={handleFileChange}
                    />
                  </div>

                  {formData.preview && (
                    <div className="dt-image-preview">
                      <img src={formData.preview} alt="Upload preview" />
                      <button type="button" onClick={() => setFormData(prev => ({ ...prev, file: null, preview: null }))}>×</button>
                    </div>
                  )}

                  <label className="dt-nda-checkbox">
                    <input 
                      type="checkbox" 
                      name="nda"
                      checked={formData.nda}
                      onChange={handleInputChange}
                    /> 
                    <span>I want to protect my data by signing an NDA.</span>
                  </label>

                  <button 
                    type="submit" 
                    className={`dt-btn-submit ${loading ? "dt-loading" : ""}`}
                    disabled={loading}
                  >
                    {loading ? "Sending..." : <>Send request <FiArrowRight /></>}
                  </button>
                  
                  <div className="dt-privacy-footer">
                    <FiShield /> Your privacy is protected
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIConsultationForm;
