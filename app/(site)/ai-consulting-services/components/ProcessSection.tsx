import React from "react";
import { consultingProcessData } from "../data/consultingData";

export default function ProcessSection() {
  return (
    <section
      className="ptb step-by-step-approach-to-ai-excellence py-5 position-relative"
      style={{
        backgroundImage: "url(/assets/ai-strategy-banner.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mb-4">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>{consultingProcessData.tag}</h2>
            <h3 className="heading-2 text-white">{consultingProcessData.title}</h3>
            <p className="light-text text-white opacity-75">{consultingProcessData.desc}</p>
          </div>
        </div>

        <div className="row g-4 mt-2">
          {consultingProcessData.steps.map((step) => (
            <div key={step.num} className="col-lg-4 col-md-6">
              <div
                className="box p-4 h-100 rounded-3"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  backdropFilter: "blur(4px)",
                  transition: "all 0.3s ease",
                }}
              >
                <h2
                  className="mb-2 font-dm-serif"
                  style={{
                    fontSize: "44px",
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(247, 155, 31, 0.8)",
                    lineHeight: "1",
                  }}
                >
                  {step.num}
                </h2>
                <h5 className="text-white fw-bold mb-2" style={{ fontSize: "18px" }}>{step.title}</h5>
                <p className="m-0 text-white opacity-75" style={{ fontSize: "14px", lineHeight: "1.6" }}>
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

