import React from "react";
import { agentWhyData } from "../data/agentData";

export default function WhyChooseSection() {
  return (
    <section className="our-Trusted-AI-and-ML-development-partner ptb py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center text-lg-start mb-4">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>{agentWhyData.tag}</h2>
            <h3 className="heading-2">{agentWhyData.title}</h3>
            <p className="text-muted" style={{ maxWidth: "980px" }}>
              {agentWhyData.desc}
            </p>
          </div>
        </div>

        <div className="row g-4">
          {agentWhyData.items.map((item, idx) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div
                className="column p-4 h-100 rounded-3 border"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#EAEAEA",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.3s ease",
                }}
              >
                <i className={`${item.icon} mb-3`} style={{ fontSize: "36px", color: "#009FE3" }}></i>
                <h5 className="fw-bold mb-2" style={{ color: "#171717" }}>{item.title}</h5>
                <p className="text-muted m-0" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

