"use client";

import React, { useState } from "react";
import Link from "next/link";
import { servicesData } from "../data/aiMlData";

export default function ServicesAccordionSection() {
  const [openId, setOpenId] = useState<string | null>("gen-ai-nlp");

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
              Artificial Intelligence Development Services
            </h2>
            <h3 className="heading-2 text-white">
              AI-Powered Solutions for Business Growth
            </h3>
            <p className="text-white">
              As a reliable artificial intelligence development company in India, we offer advanced
              custom AI-powered capabilities that transform your business to reach wider audiences, improve user
              experiences, and drive business growth. Our artificial intelligence development services can smoothly
              integrate{" "}
              <Link href="/ai-chatbot-development-company">AI chatbots</Link>, AI content generation features, text analysis, and more into your application,
              contributing to high engagement with your business.
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
                        <p className="full-text">{item.intro}</p>
                        {item.subFeatures?.map((f) => (
                          <React.Fragment key={f.title}>
                            <h4 className="text-white">
                              <b>{f.title}</b>
                            </h4>
                            <p>{f.description}</p>
                          </React.Fragment>
                        ))}
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
