import React from "react";
import { healthcareBenefitsData } from "../data/healthcareData";

export default function AIFeaturesSection() {
  const half = Math.ceil(healthcareBenefitsData.items.length / 2);
  const col1 = healthcareBenefitsData.items.slice(0, half);
  const col2 = healthcareBenefitsData.items.slice(half);

  return (
    <section className="Benefits ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 col-md-12 col-12 mx-auto mb-lg-5 text-center">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {healthcareBenefitsData.tag}
            </h2>
            <h3 className="heading-2 mb-3">{healthcareBenefitsData.title}</h3>
            <p
              className="text-muted mx-auto"
              style={{ maxWidth: "980px", fontSize: "16px", lineHeight: "1.7" }}
            >
              {healthcareBenefitsData.desc}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-10 col-md-12 col-12 m-auto">
            <div className="row g-4">
              {/* Column 1 */}
              <div className="col-lg-6">
                <div className="d-flex flex-column gap-4">
                  {col1.map((item, idx) => (
                    <div key={idx} className="row align-items-start">
                      <div className="col-3 col-sm-2 text-center">
                        <div className="nummber">
                          <strong style={{ fontSize: "32px", color: "#f79b1f" }}>
                            {item.num}
                          </strong>
                        </div>
                      </div>
                      <div className="col-9 col-sm-10">
                        <div className="content">
                          <h5 className="fw-bold mb-2" style={{ fontSize: "18px" }}>
                            {item.title}
                          </h5>
                          <p className="text-muted m-0" style={{ fontSize: "15px", lineHeight: "1.65" }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Column 2 */}
              <div className="col-lg-6">
                <div className="d-flex flex-column gap-4">
                  {col2.map((item, idx) => (
                    <div key={idx} className="row align-items-start">
                      <div className="col-3 col-sm-2 text-center">
                        <div className="nummber">
                          <strong style={{ fontSize: "32px", color: "#f79b1f" }}>
                            {item.num}
                          </strong>
                        </div>
                      </div>
                      <div className="col-9 col-sm-10">
                        <div className="content">
                          <h5 className="fw-bold mb-2" style={{ fontSize: "18px" }}>
                            {item.title}
                          </h5>
                          <p className="text-muted m-0" style={{ fontSize: "15px", lineHeight: "1.65" }}>
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

