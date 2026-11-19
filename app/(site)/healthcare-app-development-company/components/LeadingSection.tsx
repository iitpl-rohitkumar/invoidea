import React from "react";
import { healthcareLeadingData } from "../data/healthcareData";

export default function LeadingSection() {
  return (
    <section className="Food-Delivery-App-Solution">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6 col-md-12 col-12 pe-lg-4 text-center">
            <img
              src={healthcareLeadingData.img}
              alt={healthcareLeadingData.title}
              className="img-fluid"
              loading="lazy"
            />
          </div>

          <div className="col-lg-6 col-md-12 col-12 ps-lg-4">
            <h1 className="subheading" style={{ color: "#F79B1F" }}>
              {healthcareLeadingData.tag}
            </h1>
            <h2 className="heading-2 mb-3">{healthcareLeadingData.title}</h2>
            {healthcareLeadingData.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="text-muted mb-3"
                style={{ fontSize: "16px", lineHeight: "1.7" }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

