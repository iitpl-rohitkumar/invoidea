"use client";

import React, { useState } from "react";
import { mlFAQData } from "../data/mlData";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="ptb faq-section position-relative overlayy-bg">
      <div className="container-fluid">
        <div className="row mx-auto text-center">
          <h2 className="subheading-text">{mlFAQData.tag}</h2>
          <h3 className="heading-2">{mlFAQData.title}</h3>
        </div>
        <div className="col-xl-12 col-md-12">
          <div>
            <div className="row justify-content-center">
              <div className="row mt-3">
                <div className="col-md-12">
                  <div className="accordion" id="faqAccordion">
                    <div className="row">
                      {mlFAQData.items.map((item, idx) => {
                        const isOpen = openIdx === idx;
                        return (
                          <div key={idx} className="col-lg-6">
                            <div
                              className="accordion-item"
                              itemScope
                              itemProp="mainEntity"
                              itemType="https://schema.org/Question"
                            >
                              <h2 className="accordion-header" id={`heading_${idx}`}>
                                <button
                                  className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                                  type="button"
                                  onClick={() => toggle(idx)}
                                  aria-expanded={isOpen}
                                  itemProp="name"
                                >
                                  {item.q}
                                </button>
                              </h2>
                              <div
                                id={`collapse_${idx}`}
                                className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                                aria-labelledby={`heading_${idx}`}
                                data-bs-parent="#faqAccordion"
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                              >
                                <div className="accordion-body" itemProp="text">
                                  <p>{item.a}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

