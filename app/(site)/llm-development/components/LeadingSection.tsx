import React from "react";
import { llmLeadingData } from "../data/llmData";

export default function LeadingSection() {
  return (
    <section className="leading-aiand-ml-development-company-in-india py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>{llmLeadingData.tag}</h2>
            <h2 className="heading-2 mb-3">
              {llmLeadingData.title}
            </h2>
            {llmLeadingData.paragraphs.map((p, idx) => (
              <p key={idx} className="text-muted" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                {p}
              </p>
            ))}
          </div>

          <div className="col-lg-6 col-md-12 col-12 pe-lg-0 text-center">
            <img
              loading="lazy"
              src={llmLeadingData.img}
              alt={llmLeadingData.title}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

