import React from "react";
import { agenticProcessData } from "../data/agenticData";

export default function ProcessSection() {
  return (
    <section
      className="tailored-solutions-wrapper ptb py-5 position-relative"
      style={{
        backgroundImage: "url(/assets/Step-by-Step-Approach-to-AI-Excellence.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="main-heading text-lg-center mb-5">
              <h2 className="subheading" style={{ color: "#F79B1F" }}>
                {agenticProcessData.tag}
              </h2>
              <h3 className="heading-2 text-white">
                {agenticProcessData.title}
              </h3>
              <p className="light-text text-lg-center text-white opacity-75">
                {agenticProcessData.desc}
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4 g-4 justify-content-center">
          {agenticProcessData.steps.map((step) => (
            <div
              key={step.num}
              className="col-lg-4 col-md-6 mb-4 Custom-built-box text-lg-center"
            >
              <div className="box p-3 h-100">
                <strong
                  className="d-block mb-2 font-dm-serif"
                  style={{
                    fontSize: "80px",
                    lineHeight: "1",
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(255, 252, 252, 0.26)",
                  }}
                >
                  {step.num}
                </strong>
                <h5
                  className="mb-2 fw-bold"
                  style={{ color: "rgba(247, 155, 31, 0.95)", fontSize: "19px" }}
                >
                  {step.title}
                </h5>
                <p
                  className="m-0"
                  style={{
                    color: "rgba(255, 255, 255, 0.75)",
                    fontSize: "14px",
                    lineHeight: "1.6",
                  }}
                >
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

