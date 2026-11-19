import React from "react";
import { chatbotBenefitsData } from "../data/chatbotData";

export default function BenefitsSection() {
  return (
    <section className="AI-powered-solutions-for-every-industry py-5 theme-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto text-center mb-5">
            <h2 className="subheading">{chatbotBenefitsData.tag}</h2>
            <h3 className="heading-2">{chatbotBenefitsData.title}</h3>
            <p className="text-muted text-center">
              {chatbotBenefitsData.desc}
            </p>
          </div>
        </div>

        <div className="row g-4">
          {chatbotBenefitsData.items.map((b) => (
            <div key={b.id} className="col-lg-4 col-md-6">
              <div className="box p-4 h-100 bg-white rounded-3 border text-center shadow-sm">
                <div className="icon mb-3">
                  <img
                    src={b.icon}
                    className="img-fluid"
                    alt={b.title}
                    loading="lazy"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="content">
                  <h5 className="fw-bold mb-2">{b.title}</h5>
                  <p className="text-muted m-0" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                    {b.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

