"use client";

import React, { useState } from "react";
import { consultingTechData } from "../data/consultingData";

export default function TechTabsSection() {
  const [activeTab, setActiveTab] = useState(
    consultingTechData.tabs[0]?.id || "frontend"
  );

  const currentPanel =
    consultingTechData.panels.find((p) => p.id === activeTab) ||
    consultingTechData.panels[0];

  return (
    <section className="theme-bg ptb py-5" style={{ backgroundColor: "#f1fbff" }}>
      <div className="container">
        <div className="matrix-heading mb-5 text-center text-lg-start">
          <h2 className="subheading" style={{ color: "#F79B1F" }}>
            {consultingTechData.tag}
          </h2>
          <h3 className="heading-2">{consultingTechData.title}</h3>
          <p className="text-muted" style={{ maxWidth: "880px" }}>
            We work across the full stack of leading AI platforms and infrastructure
            tools, pulling in whatever combination fits what you&apos;re actually
            building.
          </p>
        </div>

        <div className="tech-tabs-wrapper row g-4 align-items-stretch">
          {/* Tabs navigation */}
          <div className="col-lg-4 col-md-5">
            <div
              className="tech-tabs-nav d-flex flex-column gap-2 p-3 bg-white rounded-3 shadow-sm border"
              style={{ borderColor: "#e5ebf0" }}
            >
              {consultingTechData.tabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    className={`tech-tab text-start p-3 rounded-3 border-0 d-flex align-items-center gap-3 w-100 ${
                      isActive ? "active text-white" : ""
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      backgroundColor: isActive ? "#174c7b" : "transparent",
                      color: isActive ? "#ffffff" : "#687789",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      fontWeight: 600,
                      fontSize: "14px",
                    }}
                  >
                    <i
                      className={tab.icon}
                      style={{
                        fontSize: "18px",
                        color: isActive ? "#ffffff" : "#174c7b",
                        width: "22px",
                      }}
                    ></i>
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab content panel */}
          <div className="col-lg-8 col-md-7">
            <div
              className="tech-tabs-content p-4 p-md-5 rounded-3 bg-white shadow-sm border h-100"
              style={{
                borderColor: "#e5ebf0",
                minHeight: "340px",
              }}
            >
              <h4 className="fw-bold mb-4" style={{ fontSize: "22px", color: "#111827" }}>
                {currentPanel?.title}
              </h4>
              <div className="row g-3">
                {currentPanel?.items.map((item, idx) => (
                  <div key={idx} className="col-sm-6 col-md-4">
                    <div
                      className="p-3 rounded-3 text-center border h-100 d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "#fafcfd",
                        borderColor: "#edf1f4",
                        transition: "all 0.3s ease",
                        minHeight: "72px",
                      }}
                    >
                      <strong
                        className="d-block"
                        style={{ fontSize: "15px", color: "#174c7b" }}
                      >
                        {item}
                      </strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
