import React from "react";
import { healthcareProcessData } from "../data/healthcareData";

export default function ProcessSection() {
  return (
    <section className="custom ptb">
      <div className="container">
        <div className="row g-5">
          {/* Left Sticky Column */}
          <div className="col-lg-5">
            <div className="sticky-top" style={{ top: "140px" }}>
              <h3 className="subheading" style={{ color: "#F79B1F" }}>
                {healthcareProcessData.tag}
              </h3>
              <h2 className="heading-2 mb-3">{healthcareProcessData.title}</h2>
              <p
                className="text-muted"
                style={{ fontSize: "16px", lineHeight: "1.7" }}
              >
                {healthcareProcessData.desc}
              </p>
            </div>
          </div>

          {/* Right Process Steps */}
          <div className="col-lg-7">
            <div className="custom-steps">
              {healthcareProcessData.steps.map((step, idx) => (
                <div key={idx} className="cutom-step-item">
                  <div className="cutom-step-num">{step.num}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

