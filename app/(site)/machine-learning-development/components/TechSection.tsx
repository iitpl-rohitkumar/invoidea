import React from "react";
import { mlTechData } from "../data/mlData";

export default function TechSection() {
  return (
    <section
      className="process-wrapper"
      style={{
        background: "url(/assets/cutting-edge-AI-and-ML-frameworks-bg.webp) no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="subheading">
              <span>{mlTechData.tag}</span>
            </h2>
            <h3 className="heading-2">{mlTechData.title}</h3>
            <p className="head-para text-muted mx-auto" style={{ maxWidth: "880px" }}>
              {mlTechData.desc}
            </p>
          </div>
        </div>
      </div>
      <div className="process-bottom mt-4" style={{ position: "relative" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                {mlTechData.categories.map((item) => (
                  <div key={item.id} className="col-md-6 mb-4">
                    <div className="d-flex align-items-center gap-3 mb-2">
                      <div className="icon-main">
                        <img src={item.icon} alt={item.title} width={38} height={38} />
                      </div>
                      <h5 className="m-0 fw-bold">{item.title}</h5>
                    </div>
                    <div className="content-box">
                      <p className="text-muted" style={{ fontSize: "14.5px", lineHeight: "1.6" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="image mt-2 d-none d-lg-block">
                <img
                  src="/assets/cutting-edge-AI-and-ML-frameworks.webp"
                  alt={mlTechData.title}
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

