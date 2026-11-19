"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "../data/aiDevData";

export default function ServicesAccordionSection() {
  const [openId, setOpenId] = useState<string | null>("ai-consulting");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="AI-powered-solutions-for-business-growth">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4"></div>

          <div className="col-lg-8">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              AI Development Services in India
            </h2>
            <h3 className="heading-2 text-white">
              Transforming Your Business with Advanced AI Development Solutions
            </h3>
            <p className="text-white">
              Our AI Development Company in India takes the time to understand how your teams work where your data lives and what success looks like before any solution is designed. We focus on building practical scalable and business aligned systems that integrate seamlessly into your operations and deliver long term value.
            </p>

            <div className="accordion" id="aiAccordion">
              {servicesData.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="accordion-item">
                    <h2 className="accordion-header" id={`faqHeading-${item.id}`}>
                      <button
                        className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggle(item.id)}
                        aria-expanded={isOpen}
                      >
                        <h3>{item.title}</h3>
                        <p className="short-text">{item.shortText}</p>
                        <hr />
                      </button>
                    </h2>
                    <div
                      id={`collapse-${item.id}`}
                      className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                    >
                      <div className="accordion-body">
                        <p className="full-text">
                          {item.fullText}
                          {item.link && (
                            <Link href={item.link}> learn more</Link>
                          )}
                        </p>
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
