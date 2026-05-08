import React from "react";
import { Helmet } from "react-helmet-async";
import "../Style/CookiePolicy.css";

const CookiePolicy = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | Devopstrio UK</title>
        <meta
          name="description"
          content="Devopstrio Cookie Policy - Learn how we use cookies and similar technologies on our website."
        />
      </Helmet>

      <div className="cookie-page-wrapper">
        <div className="cookie-banner-bg"></div>
        <div className="cookie-main-container">
          <div className="cookie-header-card">
            <h1>Cookie Policy</h1>
            <p className="cookie-date">Last updated: Jan 2026</p>
          </div>

          <div className="cookie-content-card">
            <section>
              <p>
                Devopstrio (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
                &ldquo;our&rdquo;) uses cookies and similar technologies on our
                website (the &ldquo;Service&rdquo;). This Cookie Policy explains
                what cookies are, how we use them, what types of cookies we use,
                i.e., the information we collect using cookies and how that
                information is used and how to control cookie preferences.
              </p>
            </section>

            <section>
              <h2>What are cookies?</h2>
              <p>
                Cookies are small text files that are placed on your computer or
                mobile device when you visit a website. They are widely used by
                website owners to make their websites work more efficiently, as
                well as to provide information to the owners of the site.
              </p>
            </section>

            <section>
              <h2>How do we use cookies?</h2>
              <p>
                We use cookies to improve your experience on our website, to
                understand how you use our website, and to provide you with
                relevant information.
              </p>
            </section>

            <section>
              <h2>What types of cookies do we use?</h2>
              <p>We use the following types of cookies:</p>
              <ul>
                <li>
                  <strong>Essential cookies:</strong> These cookies are
                  necessary for the website to function properly.
                </li>
                <li>
                  <strong>Analytical cookies:</strong> These cookies help us
                  understand how you use our website.
                </li>
                <li>
                  <strong>Marketing cookies:</strong> These cookies are used to
                  provide you with relevant information.
                </li>
              </ul>
            </section>

            <section>
              <h2>What information do we collect using cookies?</h2>
              <p>We collect the following information using cookies:</p>
              <ul>
                <li>Your IP address</li>
                <li>Your browser type</li>
                <li>Your operating system</li>
                <li>The pages you visit on our website</li>
                <li>The time you spend on our website</li>
              </ul>
            </section>

            <section>
              <h2>How to control cookie preferences?</h2>
              <p>
                You can control cookie preferences by adjusting your browser
                settings. For more information, please visit the following
                links:
              </p>
              <ul>
                <li>
                  <a
                    href="https://support.google.com/chrome/answer/95647?hl=en"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.apple.com/en-us/guide/safari/sfri11471/mac"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Safari
                  </a>
                </li>
                <li>
                  <a
                    href="https://support.microsoft.com/en-us/windows/delete-cookies-in-microsoft-edge-63947406-40ac-119e-106e-4e9e4974e50d"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Microsoft Edge
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2>Changes to this Cookie Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. We will
                notify you of any changes by posting the new Cookie Policy on
                our website.
              </p>
            </section>

            <section>
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Cookie Policy, please
                contact us at <strong>info@devopstrioglobal.com</strong>
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default CookiePolicy;
