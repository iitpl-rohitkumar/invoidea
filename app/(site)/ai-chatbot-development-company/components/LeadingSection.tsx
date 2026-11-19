import React from "react";
import { chatbotLeadingData } from "../data/chatbotData";

export default function LeadingSection() {
  return (
    <section className="leading-aiand-ml-development-company-in-india py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-12">
            <h2 className="subheading">{chatbotLeadingData.tag}</h2>
            <h2 className="heading-2">
              {chatbotLeadingData.title}
            </h2>
            <p className="text-muted">
              {chatbotLeadingData.paragraphs[0]}
            </p>
            <p className="mb-1 fw-bold text-dark">What AI Chatbots Are</p>
            <p className="text-muted">
              {chatbotLeadingData.paragraphs[1]}
            </p>
          </div>

          <div className="col-lg-6 col-md-12 col-12 pe-lg-0 text-center">
            <img
              loading="lazy"
              src={chatbotLeadingData.img}
              alt={chatbotLeadingData.title}
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

