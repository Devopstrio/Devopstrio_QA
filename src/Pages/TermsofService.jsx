import React from "react";
import { Helmet } from "react-helmet-async";
import "../Style/TermsofService.css";

const TermsofService = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Devopstrio UK</title>
        <meta
          name="description"
          content="Devopstrio Terms of Service - Read our terms and conditions for using our services and website."
        />
      </Helmet>

      <div className="tos-page-wrapper">
        <div className="tos-banner-bg"></div>
        <div className="tos-main-container">
          <div className="tos-header-card">
            <h1>Terms of Service</h1>
            <p className="tos-date">Last Updated: Jan 2026</p>
          </div>

          <div className="tos-content-card">
            <section>
              <h2>1. Introduction</h2>
              <p>
                Welcome to Devopstrio. These Terms of Service
                (&quot;Terms&quot;) govern your access to and use of the
                Devopstrio website, products, and services (collectively, the
                &quot;Services&quot;).
              </p>
              <p>
                By accessing or using our Services, you agree to be bound by
                these Terms and our Privacy Policy. If you do not agree to these
                Terms, you may not access or use the Services.
              </p>
            </section>

            <section>
              <h2>2. Use of Services</h2>
              <p>
                You must use our Services only for lawful purposes and in
                accordance with these Terms. You agree not to use the Services:
              </p>
              <ul>
                <li>
                  In any way that violates any applicable local or international
                  law.
                </li>
                <li>
                  To exploit, harm, or attempt to exploit or harm minors in any
                  way.
                </li>
                <li>
                  To transmit, or procure the sending of, any advertising or
                  promotional material.
                </li>
                <li>
                  To impersonate or attempt to impersonate Devopstrio or any
                  other entity.
                </li>
              </ul>
              <p>
                We reserve the right to terminate your use of the Services for
                violating any of the prohibited uses.
              </p>
            </section>

            <section>
              <h2>3. User Accounts</h2>
              <p>
                When you create an account with us, you must provide accurate,
                complete, and up-to-date information. Failure to do so
                constitutes a breach of the Terms, which may result in immediate
                termination of your account.
              </p>
              <p>
                You are responsible for safeguarding the password that you use
                to access the Services and for any activities or actions under
                your password. You must notify us immediately upon becoming
                aware of any breach of security or unauthorized use of your
                account.
              </p>
            </section>

            <section>
              <h2>4. Intellectual Property Rights</h2>
              <p>
                The Services and their entire contents, features, and
                functionality (including but not limited to all information,
                software, text, displays, images, video, and audio) are owned by
                Devopstrio and are protected by United Kingdom and international
                copyright, trademark, patent, trade secret, and other
                intellectual property or proprietary rights laws.
              </p>
              <p>
                You must not reproduce, distribute, modify, create derivative
                works of, publicly display, publicly perform, republish,
                download, store, or transmit any of the material on our website
                without the prior written consent of Devopstrio.
              </p>
            </section>

            <section>
              <h2>5. Limitation of Liability</h2>
              <p>
                In no event will Devopstrio, its affiliates, or their licensors,
                service providers, employees, agents, officers, or directors be
                liable for damages of any kind arising out of or in connection
                with your use, or inability to use, the website or any services
                or items obtained through the website, including any direct,
                indirect, special, incidental, consequential, or punitive
                damages.
              </p>
            </section>

            <section>
              <h2>6. Modification of Terms</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace these Terms at any time. If a revision is material, we
                will provide at least 30 days&apos; notice prior to any new
                terms taking effect. What constitutes a material change will be
                determined at our sole discretion.
              </p>
              <p>
                By continuing to access or use our Services after any revisions
                become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            <section>
              <h2>7. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with
                the laws of the United Kingdom, without regard to its conflict
                of law provisions. Our failure to enforce any right or provision
                of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section>
              <h2>8. Contact Information</h2>
              <p>
                If you have any questions about these Terms, please contact us
                at:
              </p>
              <ul>
                <li>Email: info@devopstrioglobal.com</li>
                <li>Address: 128 City Road, London, EC1V 2NX United Kingdom</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsofService;
