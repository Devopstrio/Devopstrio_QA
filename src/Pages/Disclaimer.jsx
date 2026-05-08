import React from "react";
import { Helmet } from "react-helmet-async";
import "../Style/Disclaimer.css";

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | Devopstrio UK</title>
        <meta
          name="description"
          content="Devopstrio Disclaimer - Please read this disclaimer regarding the use of our services and information."
        />
      </Helmet>

      <div className="disclaimer-page-wrapper">
        <div className="disclaimer-banner-bg"></div>
        <div className="disclaimer-main-container">
          <div className="disclaimer-header-card">
            <h1>Disclaimer</h1>
            <p className="disclaimer-date">Last updated: Jan 2026</p>
          </div>

          <div className="disclaimer-content-card">
            <section>
              <h2>1. General Information</h2>
              <p>
                The information provided by Devopstrio (&ldquo;we&rdquo;,
                &ldquo;us&rdquo;, or &ldquo;our&rdquo;) on our website is for
                general informational purposes only. All information on the site
                is provided in good faith, however, we make no representation or
                warranty of any kind, express or implied, regarding the
                accuracy, adequacy, validity, reliability, availability, or
                completeness of any information on the site.
              </p>
            </section>

            <section>
              <h2>2. Professional Advice</h2>
              <p>
                The site cannot and does not contain technical advice beyond our
                service offerings. Any cloud, DevOps, or engineering information
                is provided for general informational and educational purposes
                only and is not a substitute for professional advice.
                Accordingly, before taking any actions based upon such
                information, we encourage you to consult with the appropriate
                professionals. We do not provide any kind of direct legal or
                financial advice. The use or reliance of any information
                contained on this site is solely at your own risk.
              </p>
            </section>

            <section>
              <h2>3. External Links</h2>
              <p>
                The site may contain (or you may be sent through the site) links
                to other websites or content belonging to or originating from
                third parties or links to websites and features in banners or
                other advertising. Such external links are not investigated,
                monitored, or checked for accuracy, adequacy, validity,
                reliability, availability, or completeness by us.
              </p>
              <p>
                We do not warrant, endorse, guarantee, or assume responsibility
                for the accuracy or reliability of any information offered by
                third-party websites linked through the site or any website or
                feature linked in any banner or other advertising. We will not
                be a party to or in any way be responsible for monitoring any
                transaction between you and third-party providers of products or
                services.
              </p>
            </section>

            <section>
              <h2>4. Limitation of Liability</h2>
              <p>
                Under no circumstance shall we have any liability to you for any
                loss or damage of any kind incurred as a result of the use of
                the site or reliance on any information provided on the site.
                Your use of the site and your reliance on any information on the
                site is solely at your own risk.
              </p>
            </section>

            <section>
              <h2>5. Testimonials and Success Stories</h2>
              <p>
                The site may contain testimonials or case studies by users of
                our products and/or services. These testimonials reflect the
                real-life experiences and opinions of such users. However, the
                experiences are personal to those particular users, and may not
                necessarily be representative of all users of our products
                and/or services. We do not claim, and you should not assume,
                that all users will have the same experiences. Your individual
                results may vary.
              </p>
            </section>

            <section>
              <h2>6. Contact Us</h2>
              <p>
                If you require any more information or have any questions about
                our site&apos;s disclaimer, please feel free to contact us by
                email at <strong>info@devopstrioglobal.com</strong>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Disclaimer;
