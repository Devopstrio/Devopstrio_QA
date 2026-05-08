import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const CtaFinalies = () => {
    const location = useLocation();
    const isGlobalInternship = location.pathname === '/global-internship';

    const formLink = isGlobalInternship 
        ? "https://forms.office.com/pages/responsepage.aspx?id=yTq6JeqKkkSI7wjM0AQgFv43VAq2y4NIsnG51xqapO9UOVpYOTVUUEhTOEpPQjc1OEFVSUdLMkRJQy4u&route=shorturl"
        : "https://forms.office.com/pages/responsepage.aspx?id=yTq6JeqKkkSI7wjM0AQgFjHn9r5c8yNKvLr2WMZtxxRUMTExTFJFVDFSMEFYMldWUVRBRko0NzdVOS4u&route=shorturl";

    const qrImage = isGlobalInternship
        ? "/images/New/GlobalQr.png"
        : "/images/New/qrcode-for-devopstriointern-registration-1.png";

    const fadeUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    };

    return (
        <section className="ip-v2-section" id="apply-section">
            <motion.div className="ip-lumis-wrapper" {...fadeUp}>
                <div className="ip-lumis-grid">
                    <div className="ip-lumis-left-panel">
                        <h2 className="ip-lumis-main-h">
                            Engineering mastery is your <br />
                            edge. <span>Devopstrio builds it for you.</span>
                        </h2>
                    </div>

                    <div className="ip-lumis-right-panel">
                        <div className="ip-lumis-shards">
                            <div className="ip-shard ip-shard-1"></div>
                            <div className="ip-shard ip-shard-2"></div>
                            <div className="ip-shard ip-shard-3"></div>
                        </div>

                        <div className="ip-lumis-cta-box">
                            <h3>We turn engineering curiosity <br /> into careers.</h3>
                            <a 
                                href={formLink}
                                target="_blank" 
                                rel="noreferrer" 
                                className="ip-lumis-pill-btn"
                            >
                                Apply Now &rarr;
                            </a>
                        </div>

                        <div className="ip-lumis-bottom-row">
                            <p className="ip-lumis-fine-print">
                                When the right perspective meets the right enterprise production, 
                                better engineers happen. Devopstrio connects your potential and delivers.
                            </p>
                            <div className="ip-lumis-qr-stamp">
                                <img src={qrImage} alt="QR" />
                                <span>Portal Apply</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default CtaFinalies;
