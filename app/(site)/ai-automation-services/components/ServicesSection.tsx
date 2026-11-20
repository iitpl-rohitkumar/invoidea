"use client";

import React, { useState } from "react";
import { aiAutomationServicesData } from "../data/aiAutomationData";

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="AI-powered-solutions-for-business-growth position-relative">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-4 d-none d-lg-block">
            <div className="image desktop-show">
              <img
                src={aiAutomationServicesData.imgSrc}
                alt={aiAutomationServicesData.title}
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-8 services-content-col position-relative">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {aiAutomationServicesData.tag}
            </h2>
            <h3 className="heading-2 text-white mb-3">
              {aiAutomationServicesData.title}
            </h3>
            <p className="text-white mb-4" style={{ opacity: 0.9 }}>
              {aiAutomationServicesData.intro}
            </p>

            <div className="accordion mt-3" id="aiAccordion">
              {aiAutomationServicesData.items.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={item.id} className="accordion-item">
                    <h2 className="accordion-header" id={`heading_${item.id}`}>
                      <button
                        className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggleAccordion(idx)}
                        aria-expanded={isOpen}
                        aria-controls={`collapse_${item.id}`}
                      >
                        <h3>{item.title}</h3>
                        {!isOpen && (
                          <p className="short-text">{item.shortText}</p>
                        )}
                        <span className="arrow-indicator" aria-hidden="true">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </span>
                        <hr />
                      </button>
                    </h2>
                    {isOpen && (
                      <div
                        id={`collapse_${item.id}`}
                        className="accordion-collapse show"
                        aria-labelledby={`heading_${item.id}`}
                      >
                        <div className="accordion-body">
                          <p className="full-text m-0">{item.fullText}</p>
                        </div>
                      </div>
                    )}
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

