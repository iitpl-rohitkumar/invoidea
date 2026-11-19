"use client";

import React, { useState } from "react";
import { processStepsData } from "../data/homepageData";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section
      className="ptb"
      style={{
        background: "url(/assets/steps-bg-image.webp) no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 mb-4">
            <h2 className="subheading-text">Smart Digital Services for Modern Businesses</h2>
            <h3 className="heading-2">Expert-Driven Product Development Process</h3>
            <p className="text-muted">
              Specializing in custom web, mobile apps, software and AI solutions, we follow proven product
              development process to build powerful, feature-packed, secure applications for businesses worldwide.
              Here&apos;s how a project runs:
            </p>
          </div>
        </div>

        {/* Desktop Steps */}
        <div className="desktop-show d-none d-lg-block">
          <div className="row">
            <div className="steps d-flex justify-content-between align-items-stretch gap-3">
              {processStepsData.map((step, idx) => (
                <div
                  key={idx}
                  className={`step ${activeStep === idx ? "active" : ""}`}
                  onMouseEnter={() => setActiveStep(idx)}
                  style={{
                    flex: 1,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <div className="step-number">{step.step}</div>
                  <div className="step-title">{step.title}</div>
                  <div className="step-description">{step.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Steps */}
        <div className="mobile-show d-block d-lg-none">
          <div className="d-flex flex-column gap-3">
            {processStepsData.map((step, idx) => (
              <div key={idx} className={`step ${idx === 0 ? "active" : ""}`}>
                <div className="step-number">{step.step}</div>
                <div className="step-title">{step.title}</div>
                <div className="step-description">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

