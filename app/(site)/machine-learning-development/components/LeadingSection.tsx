import React from "react";
import { mlLeadingData } from "../data/mlData";

export default function LeadingSection() {
  return (
    <section className="leading-aiand-ml-development-company-in-india">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <h2 className="subheading">{mlLeadingData.tag}</h2>
            <h2 className="heading-2">
              {mlLeadingData.title}
            </h2>
            <p className="text-muted">
              {mlLeadingData.paragraphs[0]}
            </p>
            <p className="text-muted">
              {mlLeadingData.paragraphs[1]}
            </p>
          </div>

          <div className="col-lg-6 col-md-12 col-12 pe-lg-0">
            <img
              loading="lazy"
              src="/assets/leading-AIML-development-company-in-India.webp"
              alt={mlLeadingData.title}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

