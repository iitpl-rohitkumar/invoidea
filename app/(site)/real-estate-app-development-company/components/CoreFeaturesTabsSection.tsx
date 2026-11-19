"use client";

import React, { useState } from "react";
import { realEstateTabsData } from "../data/realEstateData";

export default function CoreFeaturesTabsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentTab = realEstateTabsData[activeTab];

  return (
    <section className="real-estate-functionality">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-12">
            <span className="subheading">
              REAL ESTATE APP DEVELOPMENT FEATURES
            </span>
            <h3 className="main-heading">
              Powerful Features for Smarter Property Search, Sales &amp; Management
            </h3>
            <p className="text-muted">
              Our Real Estate app development Services focus on building separate experiences for different people
              instead of forcing everyone into the same interface. We split features by who’s actually using them —
              buyers, sellers, and admins need different tools, not the same dashboard with different labels.
              Building one generic interface for everyone usually means it’s mediocre for all three.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="nav-tabs-container">
          {realEstateTabsData.map((tab, idx) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(idx)}
              className={`tab-btn ${activeTab === idx ? "active" : ""}`}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="tab-pane-content">
          {/* Left features list */}
          <div className="tab-left">
            <p className="intro">{currentTab.intro}</p>
            <div className="features-grid">
              {currentTab.features.map((feature, i) => (
                <div key={i} className="feature-pill">
                  <i className="fa-solid fa-circle-check" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Mobile Mockup Image */}
          <div className="tab-right">
            <img
              src={currentTab.image}
              alt={currentTab.label}
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
