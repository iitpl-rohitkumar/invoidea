'use client';

import React, { useState } from 'react';
import { faqData } from '../data/travelData';

export const FAQSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const leftColumn = faqData.slice(0, 5);
  const rightColumn = faqData.slice(5, 10);

  return (
    <section className="ptb faq-section position-relative overlayy-bg">
      <div className="container-fluid">
        <div className="row mx-auto text-center mb-4">
          <h2 className="subheading-text">Frequently Asked Questions</h2>
          <h3 className="heading-2">Answers to Your Travel App Development</h3>
        </div>

        <div className="col-xl-12 col-md-12">
          <div className="row mt-3">
            {/* Left Column */}
            <div className="col-lg-6">
              {leftColumn.map((faq, idx) => {
                const isOpen = openIndices.includes(idx);
                return (
                  <div
                    key={idx}
                    className="accordion-item"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <h2 className="accordion-header" id={`heading_${idx}`}>
                      <button
                        className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                        aria-controls={`collapse_${idx}`}
                        itemProp="name"
                      >
                        <span>{faq.question}</span>
                        <i className="fa-solid fa-chevron-down faq-arrow-icon ms-2"></i>
                      </button>
                    </h2>
                    {isOpen && (
                      <div
                        id={`collapse_${idx}`}
                        className="accordion-collapse show"
                        aria-labelledby={`heading_${idx}`}
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <div className="accordion-body" itemProp="text">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column */}
            <div className="col-lg-6">
              {rightColumn.map((faq, rIdx) => {
                const idx = rIdx + 5;
                const isOpen = openIndices.includes(idx);
                return (
                  <div
                    key={idx}
                    className="accordion-item"
                    itemScope
                    itemProp="mainEntity"
                    itemType="https://schema.org/Question"
                  >
                    <h2 className="accordion-header" id={`heading_${idx}`}>
                      <button
                        className={`accordion-button ${isOpen ? '' : 'collapsed'}`}
                        type="button"
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                        aria-controls={`collapse_${idx}`}
                        itemProp="name"
                      >
                        <span>{faq.question}</span>
                        <i className="fa-solid fa-chevron-down faq-arrow-icon ms-2"></i>
                      </button>
                    </h2>
                    {isOpen && (
                      <div
                        id={`collapse_${idx}`}
                        className="accordion-collapse show"
                        aria-labelledby={`heading_${idx}`}
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <div className="accordion-body" itemProp="text">
                          <p>{faq.answer}</p>
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
};

