"use client";

import React, { useState } from "react";
import { faqData, FAQItem } from "../data/aiDevData";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="ptb faq-section position-relative overlayy-bg">
      <div className="container-fluid">
        <div className="row mx-auto text-center">
          <h2 className="subheading-text">FAQ&apos;s</h2>
          <h3 className="heading-2">Quick Answers For Common Questions</h3>
        </div>
        <div className="col-xl-12 col-md-12">
          <div>
            <div className="row justify-content-center">
              <div className="row mt-3">
                <div className="col-md-12">
                  <div className="accordion" id="faqAccordion">
                    <div className="row">
                      {faqData.map((item: FAQItem) => {
                        const isOpen = openId === item.id;
                        return (
                          <div key={item.id} className="col-lg-6">
                            <div
                              className="accordion-item"
                              itemScope
                              itemProp="mainEntity"
                              itemType="https://schema.org/Question"
                            >
                              <h2 className="accordion-header" id={`heading_${item.id}`}>
                                <button
                                  className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                                  type="button"
                                  onClick={() => toggle(item.id)}
                                  aria-expanded={isOpen}
                                  itemProp="name"
                                >
                                  {item.question}
                                </button>
                              </h2>
                              <div
                                id={`collapse_${item.id}`}
                                className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                                aria-labelledby={`heading_${item.id}`}
                                data-bs-parent="#faqAccordion"
                                itemScope
                                itemProp="acceptedAnswer"
                                itemType="https://schema.org/Answer"
                              >
                                <div className="accordion-body" itemProp="text">
                                  <p>{item.intro}</p>
                                  {item.bullets && item.bullets.length > 0 && (
                                    <ul>
                                      {item.bullets.map((b: string, bi: number) => (
                                        <li key={bi}>{b}</li>
                                      ))}
                                    </ul>
                                  )}
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
