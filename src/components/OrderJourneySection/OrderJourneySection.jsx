import React, { useState } from "react";
import "./OrderJourneySection.css";

const OrderJourneySection = () => {
  const [active, setActive] = useState(0);

  const accordionData = [
    {
      title: "Order Management System",
      content:
        "Centralize orders across all channels. Manage prepaid, COD, filters, fulfillment and real-time status tracking from a single dashboard."
    },
    {
      title: "Warehouse Management System",
      content:
        "Automate picking, packing, dispatching, stock visibility, and performance metrics across multiple warehouses."
    },
    {
      title: "Inventory Management System",
      content:
        "Live inventory sync across platforms with automated restocking alerts and low-stock detection."
    }
  ];

  return (
    <section className="oj-section">
      <div className="oj-container">
        {/* LEFT CONTENT */}
        <div className="oj-left">
          <span className="oj-badge">Order Management System</span>

          <h2 className="oj-heading">
            Your Entire Order Journey,
            <br />
            <span>Unified and Automated</span>
          </h2>

          <div className="oj-accordion">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`oj-accordion-item ${
                  active === index ? "active" : ""
                }`}
              >
                <div
                  className="oj-accordion-header"
                  onClick={() => setActive(index)}
                >
                  {item.title}
                  <span className="oj-arrow">
                    {active === index ? "−" : "+"}
                  </span>
                </div>

                {active === index && (
                  <div className="oj-accordion-content">
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT UI MOCK */}
        <div className="oj-right">
          <div className="oj-ui-card">
            <div className="oj-ui-header">
              <div className="oj-dot red"></div>
              <div className="oj-dot yellow"></div>
              <div className="oj-dot green"></div>
            </div>

            <div className="oj-ui-body">
              <div className="oj-ui-metric">
                <h3>4x</h3>
                <p>Increase in Workflow</p>
              </div>

              <div className="oj-ui-table">
                <div className="oj-ui-row header">
                  <span>Date</span>
                  <span>Payment</span>
                  <span>Status</span>
                </div>

                <div className="oj-ui-row">
                  <span>Aug 21</span>
                  <span>$899 COD</span>
                  <span className="verified">Verified</span>
                </div>

                <div className="oj-ui-row">
                  <span>Aug 22</span>
                  <span>$129 Prepaid</span>
                  <span className="pending">Pending</span>
                </div>

                <div className="oj-ui-row">
                  <span>Aug 23</span>
                  <span>$549 COD</span>
                  <span className="verified">Verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderJourneySection;

