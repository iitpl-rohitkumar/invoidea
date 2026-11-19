import React from "react";
import { aiAppWhyData } from "../data/aiAppData";

export default function WhyChooseSection() {
  return (
    <section
      className="Why-Businesses-Choose-AI-banner-ML ptb mt-lg-5 py-5"
      style={{
        background:
          "url(/assets/why-choose-invoidea-for-ai-app-development.webp) no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center text-lg-start">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {aiAppWhyData.tag}
            </h2>
            <h3 className="heading-2 text-white">{aiAppWhyData.title}</h3>
            <p className="text-white opacity-75" style={{ maxWidth: "980px" }}>
              {aiAppWhyData.desc}
            </p>
          </div>
        </div>

        <div className="row mt-4 g-4">
          {aiAppWhyData.features.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div
                className="column p-4 h-100 rounded-3 border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderColor: "rgba(255, 255, 255, 0.1)",
                  transition: "all 0.3s ease",
                }}
              >
                <i
                  className={`${item.icon} mb-3`}
                  style={{ fontSize: "36px", color: "#f79b1f" }}
                ></i>
                <h5 className="text-white fw-bold mb-2">{item.title}</h5>
                <p
                  className="text-light m-0 opacity-75"
                  style={{ fontSize: "14px", lineHeight: "1.6" }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
