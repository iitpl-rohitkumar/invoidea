"use client";

import React, { useState } from "react";
import { agenticServicesData } from "../data/agenticData";

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="AI-powered-solutions-for-business-growth py-5 position-relative">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 d-none d-lg-block">
            {/* Left spacing per original layout */}
          </div>

          <div className="col-lg-8 services-content-col position-relative">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {agenticServicesData.tag}
            </h2>
            <h3 className="heading-2 text-white mb-3">
              {agenticServicesData.title}
            </h3>
            <p className="text-white mb-4" style={{ opacity: 0.9, lineHeight: "1.7" }}>
              {agenticServicesData.desc}
            </p>

            <div className="accordion mt-4" id="aiAccordion">
              {agenticServicesData.items.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={item.id} className="accordion-item border-0 bg-transparent mb-2">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggleAccordion(idx)}
                        aria-expanded={isOpen}
                        style={{
                          background: "transparent",
                          boxShadow: "none",
                          color: "#FFFFFF",
                          padding: "14px 0",
                          borderBottom: "1px solid rgba(255,255,255,0.2)",
                        }}
                      >
                        <div className="d-flex flex-column w-100 pe-4">
                          <h3
                            className="m-0 text-white"
                            style={{
                              fontSize: "17px",
                              fontFamily: "Mulish, sans-serif",
                              fontWeight: 700,
                            }}
                          >
                            {item.title}
                          </h3>
                          <p
                            className="m-0 text-white-50 mt-1"
                            style={{ fontSize: "14px", fontWeight: 400 }}
                          >
                            {item.summary}
                          </p>
                        </div>
                      </button>
                    </h2>
                    {isOpen && (
                      <div className="accordion-body px-0 py-3">
                        <p
                          className="full-text text-white mb-0"
                          style={{
                            fontSize: "15px",
                            lineHeight: "1.7",
                            opacity: 0.85,
                          }}
                        >
                          {item.fullText}
                        </p>
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

