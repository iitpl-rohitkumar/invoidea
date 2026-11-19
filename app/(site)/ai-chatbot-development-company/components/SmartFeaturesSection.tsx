import React from "react";
import { chatbotSmartFeaturesData } from "../data/chatbotData";

export default function SmartFeaturesSection() {
  return (
    <section className="our-Trusted-AI-and-ML-development-partner ptb py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto mb-4">
            <h2 className="subheading">{chatbotSmartFeaturesData.tag}</h2>
            <h3 className="heading-2">{chatbotSmartFeaturesData.title}</h3>
            <p className="text-muted">
              {chatbotSmartFeaturesData.desc}
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-8 col-md-12">
            <div className="row g-4">
              {chatbotSmartFeaturesData.features.map((item) => (
                <div key={item.num} className="col-md-6">
                  <div className="d-flex gap-3 p-3 h-100 bg-white rounded-3 border shadow-sm">
                    <div className="number">
                      <span className="fw-bold" style={{ color: "#009FE3", fontSize: "24px" }}>
                        {item.num}
                      </span>
                    </div>
                    <div className="content-box">
                      <h5 className="fw-bold mb-1" style={{ fontSize: "16px" }}>{item.title}</h5>
                      <p className="text-muted m-0" style={{ fontSize: "13.5px", lineHeight: "1.5" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-4 col-md-12 d-none d-lg-block text-center">
            <div className="image sticky-top pt-3">
              <img
                loading="lazy"
                src={chatbotSmartFeaturesData.img}
                alt={chatbotSmartFeaturesData.title}
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

