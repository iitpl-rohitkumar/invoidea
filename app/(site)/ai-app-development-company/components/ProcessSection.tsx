import React from "react";
import { aiAppProcessData } from "../data/aiAppData";

export default function ProcessSection() {
  return (
    <section className="our-Trusted-AI-and-ML-development-partner ptb py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto text-center mb-5">
            <h2 className="subheading">{aiAppProcessData.tag}</h2>
            <h3 className="heading-2">{aiAppProcessData.title}</h3>
            <p className="text-muted">
              {aiAppProcessData.desc}
            </p>
          </div>
        </div>

        <div className="row g-4">
          {aiAppProcessData.steps.map((step) => (
            <div key={step.num} className="col-lg-4 col-md-6">
              <div className="step-box p-4 h-100 rounded-3 border bg-white shadow-sm" style={{ borderLeft: "4px solid #009FE3" }}>
                <span className="badge bg-primary mb-3 px-3 py-2" style={{ backgroundColor: "#009FE3", fontSize: "14px" }}>
                  Step {step.num}
                </span>
                <h5 className="fw-bold mb-2">{step.title}</h5>
                <p className="text-muted m-0" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

