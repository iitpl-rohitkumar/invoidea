"use client";

import React, { useState } from "react";
import { faqData } from "../data/homepageData";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const col1 = faqData.slice(0, 7);
  const col2 = faqData.slice(7);

  return (
    <section className="ptb pb-0">
      <div className="container-fluid faq-section position-relative overlayy-bg py-5">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-12 text-center">
            <h2 className="subheading-text">Frequently Asked Questions</h2>
            <h3 className="heading-2 mb-3">Got Questions? We&apos;ve Got Answers</h3>
            <p className="text-muted" style={{ maxWidth: "750px", margin: "0 auto" }}>
              Explore answers to common questions about our custom web design, software engineering, mobile
              application development, and AI technology services.
            </p>
          </div>
        </div>

        <div className="row g-4">
          {/* Column 1 */}
          <div className="col-lg-6">
            <div className="accordion" id="faqAccordion1">
              {col1.map((item) => (
                <div key={item.id} className="accordion-item mb-3 border rounded-3 overflow-hidden shadow-sm">
                  <h2 className="accordion-header" id={`heading-${item.id}`}>
                    <button
                      className={`accordion-button ${openId === item.id ? "" : "collapsed"} py-3 px-4 fw-semibold`}
                      type="button"
                      onClick={() => toggle(item.id)}
                      aria-expanded={openId === item.id}
                      style={{ fontSize: "16px", background: openId === item.id ? "#fff" : "#fdfdfd", fontWeight: "100 !important" }}
                    >
                      {item.question}
                    </button>
                  </h2>
                  {openId === item.id && (
                    <div className="accordion-collapse show">
                      <div className="accordion-body px-4 py-3 text-secondary" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-lg-6">
            <div className="accordion" id="faqAccordion2">
              {col2.map((item) => (
                <div key={item.id} className="accordion-item mb-3 border rounded-3 overflow-hidden shadow-sm">
                  <h2 className="accordion-header" id={`heading-${item.id}`}>
                    <button
                      className={`accordion-button ${openId === item.id ? "" : "collapsed"} py-3 px-4 fw-semibold`}
                      type="button"
                      onClick={() => toggle(item.id)}
                      aria-expanded={openId === item.id}
                      style={{ fontSize: "16px", background: openId === item.id ? "#fff" : "#fdfdfd" }}
                    >
                      {item.question}
                    </button>
                  </h2>
                  {openId === item.id && (
                    <div className="accordion-collapse show">
                      <div className="accordion-body px-4 py-3 text-secondary" style={{ fontSize: "15px", lineHeight: 1.6 }}>
                        {item.answer}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

