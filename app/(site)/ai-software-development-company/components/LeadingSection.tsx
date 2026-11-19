import React from "react";
import { softwareLeadingData } from "../data/softwareData";

export default function LeadingSection() {
  return (
    <section className="leading-aiand-ml-development-company-in-india py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>{softwareLeadingData.tag}</h2>
            <h2 className="heading-2 mb-3">
              {softwareLeadingData.title}
            </h2>
            {softwareLeadingData.paragraphs.map((p, idx) => (
              <p key={idx} className="text-muted" style={{ fontSize: "16px", lineHeight: "1.7" }}>
                {p}
              </p>
            ))}
          </div>

          <div className="col-lg-6 col-md-12 col-12 pe-lg-0 text-center">
            <img
              loading="lazy"
              src={softwareLeadingData.img}
              alt={softwareLeadingData.title}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

