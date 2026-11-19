import React from "react";
import { realEstateProcessSteps } from "../data/realEstateData";

export default function ProcessSection() {
  return (
    <section className="real-estate-process">
      <div className="container">
        <div className="row">
          {/* Left Sticky Column */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="sticky-top-card">
              <span className="subheading">
                REAL ESTATE APPLICATION DEVELOPMENT PROCESS
              </span>
              <h2 className="heading-2">
                From Property App Idea to a Market-Ready Product
              </h2>
              <p className="text-muted">
                Every Real Estate app development Company follows a process, but ours is designed to minimise
                rework while keeping you involved throughout development. Roughly how a project moves from idea
                to launch — this isn’t rigid, but it’s the order that tends to avoid the most rework:
              </p>
            </div>
          </div>

          {/* Right Process Steps Timeline */}
          <div className="col-lg-7">
            <div className="custom-steps">
              {realEstateProcessSteps.map((step, idx) => (
                <div key={idx} className="cutom-step-item">
                  <div className="cutom-step-num">{step.number}</div>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
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

