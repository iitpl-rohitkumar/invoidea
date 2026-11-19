import React from "react";
import { agentLeadingData } from "../data/agentData";

export default function LeadingSection() {
  return (
    <section className="leading-aiand-ml-development-company-in-india py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>{agentLeadingData.tag}</h2>
            <h2 className="heading-2 mb-3">
              {agentLeadingData.title}
            </h2>
            {agentLeadingData.paragraphs.map((p, idx) => (
              <p key={idx} className="text-muted" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                {p}
              </p>
            ))}
          </div>

          <div className="col-lg-6 col-md-12 col-12 pe-lg-0 text-center">
            <img
              loading="lazy"
              src={agentLeadingData.img}
              alt={agentLeadingData.title}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

