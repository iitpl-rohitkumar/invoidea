"use client";

import React, { useState } from "react";
import { aiIntegrationFAQData } from "../data/aiIntegrationData";

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="ptb faq-section position-relative overlayy-bg">
      <div className="container">
        <div className="row mx-auto text-center mb-4">
          <h2 className="subheading-text" style={{ color: "#0c77bd" }}>
            {aiIntegrationFAQData.tag}
          </h2>
          <h3 className="heading-2">
            {aiIntegrationFAQData.title}
          </h3>
        </div>

        <div className="accordion mt-3" id="faqAccordion">
          <div className="row g-4">
            {aiIntegrationFAQData.items.map((item) => {
              const isOpen = !!openItems[item.id];
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
                        onClick={() => toggleItem(item.id)}
                        aria-expanded={isOpen}
                        aria-controls={`collapse_${item.id}`}
                        itemProp="name"
                      >
                        {item.question}
                      </button>
                    </h2>
                    {isOpen && (
                      <div
                        id={`collapse_${item.id}`}
                        className="accordion-collapse show"
                        aria-labelledby={`heading_${item.id}`}
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <div className="accordion-body" itemProp="text">
                          {item.answerHtml && <p className="m-0">{item.answerHtml}</p>}
                          {item.intro && <p className="mb-2">{item.intro}</p>}
                          {item.bullets && item.bullets.length > 0 && (
                            <ul>
                              {item.bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                              ))}
                            </ul>
                          )}
                          {item.footerHtml && <p className="mt-2 mb-0">{item.footerHtml}</p>}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

