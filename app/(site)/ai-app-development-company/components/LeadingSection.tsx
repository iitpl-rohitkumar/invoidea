import React from "react";
import { aiAppLeadingData } from "../data/aiAppData";

export default function LeadingSection() {
  return (
    <section className="leading-aiand-ml-development-company-in-india py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <h2 className="subheading">{aiAppLeadingData.tag}</h2>
            <h2 className="heading-2">
              {aiAppLeadingData.title}
            </h2>
            <p className="text-muted">
              {aiAppLeadingData.paragraphs[0]}
            </p>
            <p className="text-muted">
              {aiAppLeadingData.paragraphs[1]}
            </p>
          </div>

          <div className="col-lg-6 col-md-12 col-12 pe-lg-0 text-center">
            <img
              loading="lazy"
              src={aiAppLeadingData.img}
              alt={aiAppLeadingData.title}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

