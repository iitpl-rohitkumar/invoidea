import React from "react";
import { healthcareServicesData } from "../data/healthcareData";

export default function ServicesSection() {
  return (
    <section className="industry-gradient-bg ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-11">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {healthcareServicesData.tag}
            </h2>
            <h3 className="heading-2 text-white mb-3">
              {healthcareServicesData.title}
            </h3>
            {healthcareServicesData.paragraphs.map((p, idx) => (
              <p
                key={idx}
                className="light-text mb-3"
                style={{ fontSize: "16px", lineHeight: "1.7", color: "rgba(255,255,255,0.85)" }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        <div className="ai-services">
          {healthcareServicesData.items.map((item, idx) => (
            <div key={idx} className="service-item">
              <div className="service-number">{item.num}</div>
              <div className="service-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

