"use client";

import React, { useState } from "react";
import { realEstateTechCategories } from "../data/realEstateData";

export default function TechMatrixSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const currentCat = realEstateTechCategories[activeCategory];

  return (
    <section className="real-estate-tech">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-10">
            <span className="subheading">
              REAL ESTATE APP DEVELOPMENT AGENCY IN INDIA
            </span>
            <h3 className="heading-2">
              The Technology Behind Modern Real Estate Applications
            </h3>
            <p className="light-text">
              Stack choice depends on the project’s scale, timeline, and existing systems — there’s no single
              “best” stack, just the right one for what you’re building. So, this is approximately what we, as a
              real estate application development company, have to work with and why each layer counts:
            </p>
          </div>
        </div>

        <div className="tech-tabs-wrapper">
          {/* Left Vertical Navigation */}
          <div className="tech-tabs-nav">
            {realEstateTechCategories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(idx)}
                className={`tech-tab ${activeCategory === idx ? "active" : ""}`}
                type="button"
              >
                <i className={cat.icon} />
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Right Active Panel */}
          <div className="tech-tabs-content">
            <div className="tech-panel-heading">
              <h5>{currentCat.name}</h5>
            </div>
            <div className="tech-items">
              {currentCat.tools.map((tool, i) => (
                <div key={i} className="tech-item">
                  <i className={tool.icon} />
                  <strong>{tool.name}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

