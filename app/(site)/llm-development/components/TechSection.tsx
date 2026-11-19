import React from "react";
import { llmTechData } from "../data/llmData";

export default function TechSection() {
  return (
    <section className="devops-tech-matrix ptb py-5" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="container">
        <div className="matrix-heading mb-5 text-center text-lg-start">
          <h2 className="subheading" style={{ color: "#F79B1F" }}>{llmTechData.tag}</h2>
          <h3 className="heading-2">{llmTechData.title}</h3>
          <p className="text-muted" style={{ maxWidth: "800px" }}>
            {llmTechData.desc}
          </p>
        </div>

        <div className="matrix-wrap border rounded-3 overflow-hidden shadow-sm">
          {llmTechData.rows.map((row, idx) => (
            <div
              key={row.category}
              className={`matrix-row d-flex flex-column flex-md-row align-items-md-center p-4 ${
                idx !== llmTechData.rows.length - 1 ? "border-bottom" : ""
              }`}
              style={{
                backgroundColor: idx % 2 === 0 ? "#FFFFFF" : "#FBFBFB",
              }}
            >
              <div
                className="matrix-left d-flex align-items-center gap-3 mb-3 mb-md-0"
                style={{ minWidth: "260px" }}
              >
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    width: "44px",
                    height: "44px",
                    backgroundColor: "rgba(0, 159, 227, 0.1)",
                    color: "#009FE3",
                    fontSize: "18px",
                  }}
                >
                  <i className={row.icon}></i>
                </div>
                <h4 className="m-0 fw-bold" style={{ fontSize: "18px", color: "#171717" }}>
                  {row.category}
                </h4>
              </div>
              <div className="matrix-right flex-grow-1 ps-md-4">
                <p className="text-muted mb-0" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                  {row.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

