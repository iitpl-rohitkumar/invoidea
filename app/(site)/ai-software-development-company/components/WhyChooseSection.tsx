import React from "react";
import { softwareWhyData } from "../data/softwareData";

export default function WhyChooseSection() {
  return (
    <section className="our-Trusted-AI-and-ML-development-partner ptb theme-bg py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <h2 className="subheading">{softwareWhyData.tag}</h2>
            <h3 className="heading-2">{softwareWhyData.title}</h3>
            <p className="text-muted" style={{ maxWidth: "1050px" }}>
              {softwareWhyData.desc}
            </p>
          </div>
        </div>
      </div>

      <div className="process-bottom mt-4" style={{ position: "relative" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                {softwareWhyData.items.map((item, idx) => (
                  <div key={idx} className="col-md-6 mb-4">
                    <div className="row">
                      <div className="col-3 position-relative why-number-col">
                        <div className="number">
                          <h2>{String(idx + 1).padStart(2, "0")}</h2>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="content-box">
                          <h5>{item.title}</h5>
                          <p className="text-muted">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4 col-md-12 d-none d-lg-block">
              <div className="image sticky-top" style={{ top: "120px" }}>
                <img
                  loading="lazy"
                  src="/assets/ai-software-developpment-choose.webp"
                  alt="AI Software Development Company in India"
                  className="img-fluid rounded-4 shadow-sm"
                  style={{ width: "100%", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
