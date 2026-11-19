"use client";

import React, { useState } from "react";

export interface FAQItem {
  q?: string;
  question?: string;
  a?: string | string[];
  answer?: string | string[];
}

export interface FAQAccordionSectionProps {
  tag?: string;
  title?: string;
  desc?: string;
  faqs: FAQItem[];
  columns?: 1 | 2;
  className?: string;
}

export default function FAQAccordionSection({
  tag = "FAQ",
  title = "Quick Answers For Common Questions",
  desc,
  faqs,
  columns = 2,
  className = "",
}: FAQAccordionSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const normalizedFaqs = faqs.map((f) => ({
    question: f.question || f.q || "",
    answer: f.answer || f.a || "",
  }));

  const renderAnswer = (ans: string | string[]) => {
    if (Array.isArray(ans)) {
      return (
        <ul className="mb-0 ps-3">
          {ans.map((pt, i) => (
            <li key={i} className="mb-1">
              {pt}
            </li>
          ))}
        </ul>
      );
    }
    return <p className="mb-0">{ans}</p>;
  };

  const half = Math.ceil(normalizedFaqs.length / 2);
  const col1 = columns === 2 ? normalizedFaqs.slice(0, half) : normalizedFaqs;
  const col2 = columns === 2 ? normalizedFaqs.slice(half) : [];

  return (
    <section
      className={`ptb faq-section position-relative overlayy-bg py-5 ${className}`}
      style={{
        background: "linear-gradient(180deg, #ffffff 0%, #f6fbfe 100%)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {tag}
            </h2>
            <h3 className="heading-2">{title}</h3>
            {desc && (
              <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
                {desc}
              </p>
            )}
          </div>
        </div>

        <div className="row g-4">
          <div className={columns === 2 ? "col-lg-6" : "col-lg-10 mx-auto"}>
            <div className="accordion d-flex flex-column gap-3">
              {col1.map((faq, i) => {
                const actualIdx = i;
                const isOpen = openIndex === actualIdx;
                return (
                  <div
                    key={actualIdx}
                    className="accordion-item border rounded-3 overflow-hidden shadow-sm bg-white"
                    style={{ borderColor: "rgba(0,0,0,0.08)" }}
                  >
                    <button
                      type="button"
                      className={`w-100 text-start p-3 p-md-4 d-flex justify-content-between align-items-center bg-white border-0 ${
                        isOpen ? "fw-bold text-primary" : "fw-semibold"
                      }`}
                      onClick={() => toggle(actualIdx)}
                      aria-expanded={isOpen}
                      style={{
                        fontSize: "16px",
                        color: isOpen ? "#009fe3" : "#111827",
                        cursor: "pointer",
                      }}
                    >
                      <span className="pe-3">{faq.question}</span>
                      <i
                        className={`fa-solid ${
                          isOpen ? "fa-minus" : "fa-plus"
                        }`}
                        style={{
                          fontSize: "14px",
                          color: isOpen ? "#009fe3" : "#6c757d",
                          transition: "transform 0.2s",
                        }}
                      ></i>
                    </button>
                    {isOpen && (
                      <div
                        className="px-3 px-md-4 pb-4 pt-1 text-muted"
                        style={{
                          fontSize: "14.5px",
                          lineHeight: "1.7",
                          borderTop: "1px solid #f1f1f1",
                        }}
                      >
                        {renderAnswer(faq.answer)}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {columns === 2 && (
            <div className="col-lg-6">
              <div className="accordion d-flex flex-column gap-3">
                {col2.map((faq, i) => {
                  const actualIdx = half + i;
                  const isOpen = openIndex === actualIdx;
                  return (
                    <div
                      key={actualIdx}
                      className="accordion-item border rounded-3 overflow-hidden shadow-sm bg-white"
                      style={{ borderColor: "rgba(0,0,0,0.08)" }}
                    >
                      <button
                        type="button"
                        className={`w-100 text-start p-3 p-md-4 d-flex justify-content-between align-items-center bg-white border-0 ${
                          isOpen ? "fw-bold text-primary" : "fw-semibold"
                        }`}
                        onClick={() => toggle(actualIdx)}
                        aria-expanded={isOpen}
                        style={{
                          fontSize: "16px",
                          color: isOpen ? "#009fe3" : "#111827",
                          cursor: "pointer",
                        }}
                      >
                        <span className="pe-3">{faq.question}</span>
                        <i
                          className={`fa-solid ${
                            isOpen ? "fa-minus" : "fa-plus"
                          }`}
                          style={{
                            fontSize: "14px",
                            color: isOpen ? "#009fe3" : "#6c757d",
                            transition: "transform 0.2s",
                          }}
                        ></i>
                      </button>
                      {isOpen && (
                        <div
                          className="px-3 px-md-4 pb-4 pt-1 text-muted"
                          style={{
                            fontSize: "14.5px",
                            lineHeight: "1.7",
                            borderTop: "1px solid #f1f1f1",
                          }}
                        >
                          {renderAnswer(faq.answer)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

