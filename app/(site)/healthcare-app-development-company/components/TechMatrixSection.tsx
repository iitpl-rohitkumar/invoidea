import React from "react";
import { healthcareTechData } from "../data/healthcareData";

export default function TechMatrixSection() {
  return (
    <section className="devops-tech-matrix ptb">
      <div className="container">
        <div className="matrix-heading mb-4 text-center text-lg-start">
          <h2 className="subheading" style={{ color: "#F79B1F" }}>
            {healthcareTechData.tag}
          </h2>
          <h3 className="heading-2 text-white mb-3">
            {healthcareTechData.title}
          </h3>
          <p
            className="light-text"
            style={{ maxWidth: "900px", fontSize: "16px", lineHeight: "1.7", color: "rgba(255,255,255,0.85)" }}
          >
            {healthcareTechData.desc}
          </p>
        </div>

        <div className="matrix-wrap">
          {healthcareTechData.rows.map((row, idx) => (
            <div key={idx} className="matrix-row">
              <div className="matrix-left">
                <i className={row.icon}></i>
                <h3>{row.title}</h3>
              </div>
              <div className="matrix-right">
                <div className="matrix-tools">
                  {row.tools.map((tool, tIdx) => (
                    <span key={tIdx}>
                      <b>{tool.name}</b>
                      {tool.desc}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

