import React from "react";
import { aiIntegrationWhyChooseData } from "../data/aiIntegrationData";

export default function WhyChooseSection() {
  return (
    <section className="our-Trusted-AI-and-ML-development-partner ptb theme-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {aiIntegrationWhyChooseData.tag}
            </h2>
            <h3 className="heading-2">
              {aiIntegrationWhyChooseData.title}
            </h3>
            <p className="text-muted">
              {aiIntegrationWhyChooseData.intro}
            </p>
          </div>
        </div>
      </div>

      <div className="process-bottom mt-4 position-relative">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                {aiIntegrationWhyChooseData.items.map((item) => (
                  <div key={item.num} className="col-md-6 mb-4">
                    <div className="why-choose-card">
                      <div className="row align-items-start">
                        <div className="col-3">
                          <div className="number">
                            <h2>{item.num}</h2>
                          </div>
                        </div>
                        <div className="col-9">
                          <div className="content-box">
                            <h5>{item.title}</h5>
                            <p className="text-muted m-0">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4 col-md-12 d-none d-lg-block">
              <div className="image text-center">
                <img
                  loading="lazy"
                  src={aiIntegrationWhyChooseData.imgSrc}
                  alt={aiIntegrationWhyChooseData.imgAlt}
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

