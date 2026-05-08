import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import { Helmet } from "react-helmet-async";
import {
  FiUsers,
  FiDatabase,
  FiTarget,
  FiBriefcase,
  FiShield,
  FiClock,
  FiUserCheck,
  FiLayers,
  FiGlobe,
  FiAlertTriangle,
  FiRefreshCw,
  FiMail,
} from "react-icons/fi";
import "../Style/FooterCompliance.css";

/* ─────────────────────────────────────── */
/*  DATA                                   */
/* ─────────────────────────────────────── */
const SECTIONS = [
  {
    id: "s01",
    tag: "01",
    title: "Data Controller",
    icon: <FiUsers />,
    body: (
      <>
        <p>
          Devopstrio operates as the data controller for personal information
          collected through our platform, website, and associated services. In
          our capacity as a data controller, we determine the purposes and means
          of processing personal data, ensuring compliance with the UK General
          Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
        </p>
        <p>
          Our commitment is to process your personal data fairly, lawfully, and
          in a transparent manner. If our role changes to that of a data
          processor concerning specific enterprise client data, a separate Data
          Processing Agreement (DPA) will govern those specific activities.
        </p>
      </>
    ),
  },
  {
    id: "s02",
    tag: "02",
    title: "Information We Collect",
    icon: <FiDatabase />,
    body: (
      <>
        <p>
          When you interact with the Devopstrio platform, we collect various
          types of information to ensure the seamless delivery of our services.
          These categories include:
        </p>
        <ul>
          <li>
            <strong>Personal Identification Information:</strong> Your full
            name, email address, phone number, and professional details (such as
            job title and company name) provided during registration or when
            contacting us.
          </li>
          <li>
            <strong>Account Credentials:</strong> Usernames, encrypted
            passwords, and multi-factor authentication data used to secure your
            account.
          </li>
          <li>
            <strong>Platform Interactions:</strong> User preferences, service
            configurations, feature usage logs, and feedback submitted within
            the platform.
          </li>
          <li>
            <strong>Technical Data:</strong> Your Internet Protocol (IP)
            address, browser type and version, time zone setting, browser
            plug-in types, device identifiers, and operating system information.
          </li>
          <li>
            <strong>Analytics & Performance Data:</strong> Aggregated metrics
            used to monitor system health, detect anomalies, and improve the
            overall user experience.
          </li>
        </ul>
        <p>
          We strictly adhere to the principle of data minimization, collecting
          only the information strictly necessary to provide and enhance our
          services.
        </p>
      </>
    ),
  },
  {
    id: "s03",
    tag: "03",
    title: "Purpose of Data Processing",
    icon: <FiTarget />,
    body: (
      <>
        <p>
          Personal data collected through Devopstrio is processed for specific,
          legitimate business purposes, including but not limited to:
        </p>
        <ul>
          <li>
            <strong>Service Delivery:</strong> To set up, manage, and maintain
            your user account, enabling you to access DevOps tools, dashboards,
            and integrations.
          </li>
          <li>
            <strong>Communication:</strong> To send you essential service
            updates, security alerts, administrative notifications, and
            responses to support inquiries.
          </li>
          <li>
            <strong>Platform Optimization:</strong> To analyze user behavior and
            technical data, allowing us to troubleshoot issues, improve system
            performance, and develop new features.
          </li>
          <li>
            <strong>Security & Fraud Prevention:</strong> to proactively monitor
            our network for unauthorized access, cyber threats, and potential
            misuse of our services.
          </li>
          <li>
            <strong>Legal Compliance:</strong> To fulfill statutory obligations,
            respond to lawful requests from authorities, and enforce our Terms
            of Service.
          </li>
        </ul>
        <p>
          We do not sell, rent, or trade your personal data to any third parties
          for their independent marketing purposes.
        </p>
      </>
    ),
  },
  {
    id: "s04",
    tag: "04",
    title: "Legal Basis for Processing",
    icon: <FiBriefcase />,
    body: (
      <>
        <p>
          Under the UK GDPR, we must have a valid legal basis to process your
          personal data. Devopstrio relies on the following lawful bases:
        </p>
        <ul>
          <li>
            <strong>Consent:</strong> Where you have explicitly opted in or
            voluntarily provided information (e.g., subscribing to a newsletter
            or enabling specific tracking cookies).
          </li>
          <li>
            <strong>Contractual Necessity:</strong> Where processing is
            necessary for the performance of a contract we hold with you, such
            as delivering the core features of our platform.
          </li>
          <li>
            <strong>Legal Obligation:</strong> Where processing is mandated by
            applicable UK laws or regulatory requirements (e.g., tax reporting,
            fraud investigations).
          </li>
          <li>
            <strong>Legitimate Interests:</strong> Where we have a justifiable
            business reason to process data—such as ensuring network security,
            conducting analytics to improve the platform, or protecting our
            legal rights—provided this does not override your fundamental rights
            and freedoms.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "s05",
    tag: "05",
    title: "Data Storage and Security",
    icon: <FiShield />,
    body: (
      <>
        <p>
          Devopstrio implements rigorous technical and organizational measures to
          safeguard your personal data against accidental loss, unauthorized
          access, disclosure, or alteration. Our defense-in-depth security
          approach includes:
        </p>
        <ul>
          <li>
            <strong>Encryption:</strong> All sensitive data is encrypted both in
            transit (using TLS 1.2 or higher) and at rest (using AES-256
            encryption standards).
          </li>
          <li>
            <strong>Access Controls:</strong> Strict role-based access control
            (RBAC) ensures that only authorized personnel can access personal
            data on a "least privilege" basis.
          </li>
          <li>
            <strong>Network Protection:</strong> Utilization of enterprise-grade
            firewalls, intrusion detection/prevention systems (IDS/IPS), and
            regular vulnerability scanning.
          </li>
          <li>
            <strong>Monitoring & Auditing:</strong> Continuous automated
            monitoring of our infrastructure and periodic third-party security
            audits to ensure ongoing resilience.
          </li>
        </ul>
        <p>
          If you suspect any unauthorized activity on your account, please
          contact our security team immediately.
        </p>
      </>
    ),
  },
  {
    id: "s06",
    tag: "06",
    title: "Data Retention",
    icon: <FiClock />,
    body: (
      <>
        <p>
          We retain your personal data only for as long as it is legitimately
          required fulfilling the purposes outlined in this notice. Our
          retention practices are guided by the following principles:
        </p>
        <ul>
          <li>
            <strong>Active Accounts:</strong> We retain account and operational
            data for the duration of your active subscription or usage of the
            platform.
          </li>
          <li>
            <strong>Account Deletion:</strong> Upon your request to delete an
            account, we will initiate the secure erasure of your data within 30
            days, barring any legal obligations to retain specific records.
          </li>
          <li>
            <strong>Legal & Financial Records:</strong> Certain transactional
            and compliance-related data may be retained for up to 7 years to
            satisfy UK tax laws and regulatory audits.
          </li>
        </ul>
        <p>
          When data is no longer necessary, it is either irreversibly anonymized
          for statistical purposes or securely and permanently deleted from our
          systems.
        </p>
      </>
    ),
  },
  {
    id: "s07",
    tag: "07",
    title: "User Rights Under UK GDPR",
    icon: <FiUserCheck />,
    body: (
      <>
        <p>
          If you are located in the United Kingdom or the EEA, the UK GDPR
          grants you specific, enforceable rights regarding your personal
          information:
        </p>
        <ul>
          <li>
            <strong>Right of Access:</strong> You can request a copy of the
            personal data we hold about you and information regarding how it is
            processed.
          </li>
          <li>
            <strong>Right to Rectification:</strong> You may request the
            correction of inaccurate or incomplete data.
          </li>
          <li>
            <strong>Right to Erasure ("Right to be Forgotten"):</strong> You
            have the right to request the deletion of your personal data under
            certain conditions.
          </li>
          <li>
            <strong>Right to Restrict Processing:</strong> You can ask us to
            pause the processing of your data while an unresolved dispute or
            data accuracy check is pending.
          </li>
          <li>
            <strong>Right to Data Portability:</strong> You can request your
            data in a structured, commonly used, and machine-readable format to
            transfer to another service provider.
          </li>
          <li>
            <strong>Right to Object:</strong> You may object to data processing
            based on legitimate interests or for direct marketing purposes.
          </li>
          <li>
            <strong>Right to Withdraw Consent:</strong> Where processing is
            based on consent, you may withdraw it at any time without affecting
            the lawfulness of prior processing.
          </li>
        </ul>
        <p>
          To exercise any of these rights, please contact our Data Protection
          Officer using the information in Section 12. We aim to respond to all
          legitimate requests within one calendar month.
        </p>
      </>
    ),
  },
  {
    id: "s08",
    tag: "08",
    title: "Third-Party Services",
    icon: <FiLayers />,
    body: (
      <>
        <p>
          To deliver a robust and scalable platform, Devopstrio engages trusted
          third-party infrastructure and service providers. These sub-processors
          are strictly vetted and legally bound by Data Processing Agreements.
          Categories of third parties include:
        </p>
        <ul>
          <li>
            <strong>Cloud Hosting Providers:</strong> For secure data storage
            and server infrastructure (e.g., AWS, GCP, Azure).
          </li>
          <li>
            <strong>Authentication Providers:</strong> Services that securely
            handle user login, Identity Access Management (IAM), and SSO
            functionality.
          </li>
          <li>
            <strong>Analytics Services:</strong> Platforms that help us
            aggregate performance metrics and monitor user experience (e.g.,
            Google Analytics, Datadog), configured with privacy-preserving
            settings.
          </li>
          <li>
            <strong>Communication Tools:</strong> Services used to dispatch
            transactional emails and provide customer support chat systems.
          </li>
        </ul>
        <p>
          We expect all our third-party partners to uphold security standards
          that are equivalent to, or exceed, our own.
        </p>
      </>
    ),
  },
  {
    id: "s09",
    tag: "09",
    title: "International Data Transfers",
    icon: <FiGlobe />,
    body: (
      <>
        <p>
          As a global platform, Devopstrio many transfer, store, and process your
          personal data outside of the United Kingdom or the European Economic
          Area (EEA).
        </p>
        <p>
          Whenever we transfer your data internationally, we ensure a similar
          degree of, protection is afforded to it by implementing appropriate
          safeguards required by the UK GDPR. This typically includes:
        </p>
        <ul>
          <li>
            Transferring data to countries deemed by the UK government to
            provide an "adequate" level of data protection.
          </li>
          <li>
            Utilizing legally binding Standard Contractual Clauses (SCCs)
            alongside the UK International Data Transfer Addendum (IDTA) for
            transfers to non-adequate jurisdictions.
          </li>
          <li>
            Implementing supplementary technical and organizational measures,
            such as encryption and data minimization, to further secure
            cross-border data flows.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "s10",
    tag: "10",
    title: "Data Breach Notification",
    icon: <FiAlertTriangle />,
    body: (
      <>
        <p>
          Devopstrio maintains a comprehensive Incident Response Plan to address
          suspected or actual data security breaches.
        </p>
        <p>
          In the event of a breach that is likely to result in a risk to your
          rights and freedoms, we are legally committed to:
        </p>
        <ul>
          <li>
            Notifying the Information Commissioner's Office (ICO) without undue
            delay, and no later than 72 hours of becoming aware of the breach.
          </li>
          <li>
            Communicating the nature of the breach to affected users promptly,
            particularly if there is a high risk of material or non-material
            damage (e.g., identity theft or financial loss).
          </li>
          <li>
            Taking immediate technical steps to mitigate the vulnerability,
            contain the incident, and prevent future recurrences.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "s11",
    tag: "11",
    title: "Updates to This Compliance Notice",
    icon: <FiRefreshCw />,
    body: (
      <>
        <p>
          We may update this GDPR Compliance Notice periodically to reflect
          modifications to our platform features, legal obligations, or
          operational practices.
        </p>
        <p>
          Any significant alterations that tangibly impact how your data is
          processed will be communicated via email or through a prominent
          notification within the Devopstrio dashboard prior to taking effect. We
          encourage you to review this page occasionally to remain informed
          about our privacy practices.
        </p>
      </>
    ),
  },
  {
    id: "s12",
    tag: "12",
    title: "Contact Information",
    icon: <FiMail />,
    body: (
      <>
        <p>
          If you have questions, concerns, or requests regarding this compliance
          notice, our data protection practices, or if you wish to exercise your
          UK GDPR rights, please out to our dedicated privacy team:
        </p>
        <div className="fc-contact-grid">
          <div className="fc-contact-item">
            <span className="fc-contact-label">Data Privacy Officer</span>
            <span className="fc-contact-value">info@devopstrioglobal.com </span>
          </div>
          <div className="fc-contact-item">
            <span className="fc-contact-label">Support</span>
            <span className="fc-contact-value">info@devopstrioglobal.com </span>
          </div>
          <div className="fc-contact-item">
            <span className="fc-contact-label">UK Headquarters</span>
            <span className="fc-contact-value">London, United Kingdom</span>
          </div>
        </div>
      </>
    ),
  },
];

/* ─────────────────────────────────────── */
/*  COMPONENT                              */
/* ─────────────────────────────────────── */
const FooterCompliance = () => {
  const [activeId, setActiveId] = useState(SECTIONS[0].id);
  const [visible, setVisible] = useState(new Set());
  const layoutRef = useRef(null);

  /* ── Intersection observer — section reveal + scroll-spy ── */
  useEffect(() => {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible((prev) => new Set([...prev, entry.target.id]));
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    return () => spy.disconnect();
  }, []);

  /* ── Smooth scroll ── */
  const goTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, []);

  /* ── Sidebar (memoised) ── */
  const Sidebar = useMemo(
    () => (
      <div className="fc-sidebar-sticky">
        <div className="fc-sidebar-card">
          <div className="fc-sidebar-head">
            <span className="fc-sidebar-dot" />
            <span className="fc-sidebar-head-label">Compliance Topics</span>
          </div>

          <nav className="fc-sidebar-list">
            {SECTIONS.map(({ id, tag, title }) => {
              const isActive = activeId === id;
              return (
                <button
                  key={id}
                  className={`fc-sidebar-btn${isActive ? " is-active" : ""}`}
                  onClick={() => goTo(id)}
                >
                  <span className="fc-sidebar-bar" />
                  <span className="fc-sidebar-tag">{tag}</span>
                  <span className="fc-sidebar-label">{title}</span>
                </button>
              );
            })}
          </nav>

          <div className="fc-sidebar-foot">
            <span className="fc-sidebar-foot-dot" />
            UK GDPR Compliant
          </div>
        </div>
      </div>
    ),
    [activeId, goTo],
  );

  return (
    <>
      <Helmet>
        <title>GDPR Compliance (UK) | Devopstrio</title>
        <meta
          name="description"
          content="Devopstrio operates in accordance with the UK General Data Protection Regulation (UK GDPR). Learn how we process and protect personal information."
        />
      </Helmet>

      <div className="fc-root">
        <div className="fc-orb-clip">
          <div className="fc-orb fc-orb-a" />
          <div className="fc-orb fc-orb-b" />
          <div className="fc-orb fc-orb-c" />
        </div>
        <div className="fc-grid-bg" />

        <header className="fc-hero">
          <div className="fc-hero-particles" aria-hidden="true">
            {Array.from({ length: 18 }).map((_, i) => (
              <span
                key={i}
                className="fc-particle"
                style={{
                  left: `${(i * 6.1) % 100}%`,
                  animationDelay: `${(i * 0.37) % 3}s`,
                  animationDuration: `${3.5 + (i % 4) * 0.8}s`,
                  width: `${3 + (i % 3)}px`,
                  height: `${3 + (i % 3)}px`,
                }}
              />
            ))}
          </div>

          <div className="fc-hero-ring fc-hring-1" aria-hidden="true" />
          <div className="fc-hero-ring fc-hring-2" aria-hidden="true" />
          <div className="fc-hero-ring fc-hring-3" aria-hidden="true" />

          <div className="fc-hero-center">
            <div className="fc-hero-chip">
              <span className="fc-hero-chip-dot" />
              Legal Document · UK Region
            </div>

            <h1 className="fc-hero-h1">
              GDPR Compliance
              <span className="fc-hero-h1-grad"> (UK)</span>
            </h1>

            <p className="fc-hero-sub">
              Devopstrio is committed to safeguarding the personal data and
              privacy of individuals who use our services. We operate in
              accordance with the UK General Data Protection Regulation (UK
              GDPR) and the Data Protection Act 2018.
            </p>

            <div className="fc-hero-pills">
              <div className="fc-pill">
                <span className="fc-pill-val">UK GDPR</span>
                <span className="fc-pill-key">Standards</span>
              </div>
              <div className="fc-pill">
                <span className="fc-pill-val">12</span>
                <span className="fc-pill-key">Sections</span>
              </div>
              <div className="fc-pill">
                <span className="fc-pill-val">Data Protection</span>
                <span className="fc-pill-key">Act 2018</span>
              </div>
            </div>
          </div>

          <div className="fc-hero-banner">
            <div className="fc-banner-item">
              <svg viewBox="0 0 60 60" fill="none">
                <defs>
                  <linearGradient
                    id="bg1"
                    x1="0"
                    y1="0"
                    x2="60"
                    y2="60"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#dd5c54" />
                    <stop offset="1" stopColor="#e79e57" />
                  </linearGradient>
                </defs>
                <circle
                  cx="30"
                  cy="30"
                  r="28"
                  stroke="url(#bg1)"
                  strokeWidth="1.5"
                />
                <path
                  d="M30 10L42 18V30C42 38 36.6 45.2 30 48C23.4 45.2 18 38 18 30V18L30 10Z"
                  stroke="url(#bg1)"
                  strokeWidth="1.5"
                />
                <path
                  d="M24 30l4 4 8-9"
                  stroke="url(#bg1)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Data Protection</span>
            </div>
            <div className="fc-banner-sep" />
            <div className="fc-banner-item">
              <svg viewBox="0 0 60 60" fill="none">
                <defs>
                  <linearGradient
                    id="bg2"
                    x1="0"
                    y1="0"
                    x2="60"
                    y2="60"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ce2453" />
                    <stop offset="1" stopColor="#dd5c54" />
                  </linearGradient>
                </defs>
                <circle
                  cx="30"
                  cy="30"
                  r="28"
                  stroke="url(#bg2)"
                  strokeWidth="1.5"
                />
                <rect
                  x="18"
                  y="22"
                  width="24"
                  height="18"
                  rx="3"
                  stroke="url(#bg2)"
                  strokeWidth="1.5"
                />
                <path
                  d="M26 22v-4a4 4 0 018 0v4"
                  stroke="url(#bg2)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle cx="30" cy="31" r="2" fill="url(#bg2)" />
              </svg>
              <span>Security First</span>
            </div>
            <div className="fc-banner-sep" />
            <div className="fc-banner-item">
              <svg viewBox="0 0 60 60" fill="none">
                <defs>
                  <linearGradient
                    id="bg3"
                    x1="0"
                    y1="0"
                    x2="60"
                    y2="60"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#962964" />
                    <stop offset="1" stopColor="#ce2453" />
                  </linearGradient>
                </defs>
                <circle
                  cx="30"
                  cy="30"
                  r="28"
                  stroke="url(#bg3)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="30"
                  cy="30"
                  r="10"
                  stroke="url(#bg3)"
                  strokeWidth="1.5"
                />
                <path
                  d="M30 20V10M30 50v-10M20 30H10M50 30H40"
                  stroke="url(#bg3)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span>Transfers</span>
            </div>
            <div className="fc-banner-sep" />
            <div className="fc-banner-item">
              <svg viewBox="0 0 60 60" fill="none">
                <defs>
                  <linearGradient
                    id="bg4"
                    x1="0"
                    y1="0"
                    x2="60"
                    y2="60"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#522c72" />
                    <stop offset="1" stopColor="#962964" />
                  </linearGradient>
                </defs>
                <circle
                  cx="30"
                  cy="30"
                  r="28"
                  stroke="url(#bg4)"
                  strokeWidth="1.5"
                />
                <path
                  d="M20 30a10 10 0 0 1 20 0"
                  stroke="url(#bg4)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M22 36h16M26 40h8"
                  stroke="url(#bg4)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <circle
                  cx="30"
                  cy="22"
                  r="3"
                  stroke="url(#bg4)"
                  strokeWidth="1.5"
                />
              </svg>
              <span>User Rights</span>
            </div>
          </div>

          <div className="fc-hero-line" />
        </header>

        <div className="fc-body" ref={layoutRef}>
          {Sidebar}

          <div className="fc-content">
            {SECTIONS.map(({ id, tag, icon, title, body }, idx) => (
              <article
                key={id}
                id={id}
                className={`fc-card${visible.has(id) ? " fc-card--in" : ""}`}
                style={{ transitionDelay: `${idx * 0.04}s` }}
              >
                <span className="fc-card-strip" />

                <div className="fc-card-head">
                  <span className="fc-card-tag">{tag}</span>
                  <span className="fc-card-icon">{icon}</span>
                  <h2 className="fc-card-title">{title}</h2>
                </div>

                <div className="fc-card-body">{body}</div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterCompliance;
