"use client";

import React, { useState } from "react";
import { agenticFAQData } from "../data/agenticData";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="ptb faq-section position-relative overlayy-bg py-5">
      <div className="container-fluid">
        <div className="row mx-auto text-center mb-4">
          <h2 className="subheading-text" style={{ color: "#F79B1F" }}>{agenticFAQData.tag}</h2>
          <h3 className="heading-2">{agenticFAQData.title}</h3>
        </div>
        <div className="col-xl-10 col-md-12 mx-auto">
          <div className="accordion" id="agenticFaqAccordion">
            <div className="row g-4">
              {agenticFAQData.items.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={idx} className="col-lg-12">
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
    </section>
  );
}

