import React from "react";
import { softwareFeaturesData } from "../data/softwareData";

export default function FeaturesSection() {
  return (
    <section
      className="process-wrapper ptb py-5"
      style={{
        background: "url(/assets/cutting-edge-AI-and-ML-frameworks-bg.webp) no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-lg-center mb-4">
            <h2 className="subheading">{softwareFeaturesData.tag}</h2>
            <h3 className="heading-2">{softwareFeaturesData.title}</h3>
            <p className="text-muted">
              {softwareFeaturesData.desc}
            </p>
          </div>
        </div>
      </div>

      <div className="process-bottom mt-3" style={{ position: "relative" }}>
        <div className="container">
          <div className="row">
            {softwareFeaturesData.items.map((item, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 mb-4">
                <div className="feature-item p-3">
                  <div className="icon-main mb-2">
                    <i className={item.icon} style={{ color: "#F79B1F", fontSize: "32px" }}></i>
                  </div>
                  <div className="content-box">
                    <h5 className="mt-3 fw-bold" style={{ color: "#212529", fontSize: "20px" }}>
                      {item.title}
                    </h5>
                    <p className="text-muted" style={{ fontSize: "15px", lineHeight: "1.6" }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
