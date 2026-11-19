import React from "react";
import { llmCapabilitiesData } from "../data/llmData";

export default function CapabilitiesSection() {
  return (
    <section className="process-wrapper ptb py-5" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>{llmCapabilitiesData.tag}</h2>
            <h3 className="heading-2">{llmCapabilitiesData.title}</h3>
            <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
              {llmCapabilitiesData.desc}
            </p>
          </div>
        </div>

        <div className="row g-4">
          {llmCapabilitiesData.items.map((item, idx) => (
            <div key={idx} className="col-lg-3 col-md-6">
              <div
                className="p-4 h-100 rounded-3 border bg-white shadow-sm"
                style={{
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  className="rounded-3 d-inline-flex align-items-center justify-content-center mb-3"
                  style={{
                    width: "52px",
                    height: "52px",
                    backgroundColor: "rgba(0, 159, 227, 0.1)",
                    color: "#009FE3",
                    fontSize: "22px",
                  }}
                >
                  <i className={item.icon}></i>
                </div>
                <h5 className="fw-bold mb-2" style={{ fontSize: "17px", color: "#171717" }}>{item.title}</h5>
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

