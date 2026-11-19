"use client";

import React, { useState } from "react";
import { aiAppServicesData } from "../data/aiAppData";

export default function ServicesSection() {
  const [openId, setOpenId] = useState<string | null>("custom-ai");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="AI-powered-solutions-for-business-growth py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-4 d-none d-lg-block text-center">
            <img
              src={aiAppServicesData.img}
              alt={aiAppServicesData.title}
              className="img-fluid"
            />
          </div>

          <div className="col-lg-8">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {aiAppServicesData.tag}
            </h2>
            <h3 className="heading-2 text-white">
              {aiAppServicesData.title}
            </h3>
            <p className="text-white">
              {aiAppServicesData.desc}
            </p>

            <div className="accordion" id="aiAppAccordion">
              {aiAppServicesData.items.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id} className="accordion-item">
                    <h2 className="accordion-header" id={`heading-${item.id}`}>
                      <button
                        className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                        type="button"
                        onClick={() => toggle(item.id)}
                        aria-expanded={isOpen}
                      >
                        <h3>{item.title}</h3>
                        <p className="short-text">{item.desc.slice(0, 80)}...</p>
                        <hr />
                      </button>
                    </h2>
                    <div
                      id={`collapse-${item.id}`}
                      className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                    >
                      <div className="accordion-body">
                        <p className="full-text">{item.desc}</p>
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

