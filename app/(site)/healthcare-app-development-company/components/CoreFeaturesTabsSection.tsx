"use client";

import React, { useState } from "react";
import { healthcareFunctionalityData } from "../data/healthcareData";

export default function CoreFeaturesTabsSection() {
  const [activeTab, setActiveTab] = useState(
    healthcareFunctionalityData.tabs[0]?.id || "patient"
  );

  const currentTab =
    healthcareFunctionalityData.tabs.find((t) => t.id === activeTab) ||
    healthcareFunctionalityData.tabs[0];

  return (
    <section className="Functionality ptb pt-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-12 text-center text-lg-start mb-4">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {healthcareFunctionalityData.tag}
            </h2>
            <h3 className="heading-2">{healthcareFunctionalityData.title}</h3>
            <p className="text-muted" style={{ maxWidth: "900px", fontSize: "16px", lineHeight: "1.7" }}>
              {healthcareFunctionalityData.desc}
            </p>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="row">
          <div className="col-md-12">
            <ul className="nav nav-tabs d-flex flex-wrap gap-2">
              {healthcareFunctionalityData.tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <li key={tab.id} className="nav-item">
                    <button
                      type="button"
                      className={`nav-link ${isActive ? "active" : ""}`}
                      onClick={() => setActiveTab(tab.id)}
                    >
                      {tab.label}
                    </button>
                  </li>
                );
              })}
            </ul>

            {/* Tab Content */}
            <div className="inner-tabber">
              <div className="features-list">
                <p className="text-muted mb-4" style={{ fontSize: "15px", lineHeight: "1.7" }}>
                  {currentTab.intro}
                </p>

                <div className="features-container">
                  {currentTab.features.map((feat, idx) => (
                    <div key={idx} className="feature-item-row">
                      <i className="fa-solid fa-circle-check" style={{ color: "#f79b1f" }}></i>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="screen-preview">
                <img
                  src={currentTab.image}
                  alt={currentTab.label}
                  className="img-fluid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

