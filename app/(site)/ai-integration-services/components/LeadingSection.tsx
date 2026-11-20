import React from "react";
import { aiIntegrationLeadingData } from "../data/aiIntegrationData";

export default function LeadingSection() {
  return (
    <section className="leading-aiand-ml-development-company-in-india">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6 col-md-12 col-12">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {aiIntegrationLeadingData.tag}
            </h2>
            <h3 className="heading-2 mb-3">
              {aiIntegrationLeadingData.title}
            </h3>
            {aiIntegrationLeadingData.paragraphs.map((p, idx) => (
              <p key={idx} className="text-muted mb-3">
                {p}
              </p>
            ))}
          </div>

          <div className="col-lg-6 col-md-12 col-12 pe-lg-0 mx-auto text-center">
            <img
              loading="lazy"
              src={aiIntegrationLeadingData.imgSrc}
              alt={aiIntegrationLeadingData.imgAlt}
              className="img-fluid rounded-4 shadow-sm"
              style={{ maxHeight: "480px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

