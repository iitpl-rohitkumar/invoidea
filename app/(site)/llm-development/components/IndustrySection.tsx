import React from "react";
import { llmIndustriesData } from "../data/llmData";

export default function IndustrySection() {
  return (
    <section className="AI-powered-solutions-for-every-industry ptb pb-0 py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto text-center mb-5">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>{llmIndustriesData.tag}</h2>
            <h3 className="heading-2">{llmIndustriesData.title}</h3>
            <p className="text-muted text-center" style={{ maxWidth: "880px", margin: "0 auto" }}>
              {llmIndustriesData.desc}
            </p>
          </div>
        </div>

        <div className="row mt-3 g-4">
          {llmIndustriesData.items.map((ind) => (
            <div key={ind.id} className="col-lg-3 col-md-6">
              <div
                className="box p-4 h-100 bg-white rounded-3 border text-center shadow-sm"
                style={{
                  transition: "all 0.3s ease",
                }}
              >
                <div className="icon mb-3">
                  <img
                    src={ind.icon}
                    className="img-fluid"
                    alt={ind.title}
                    loading="lazy"
                    width={48}
                    height={48}
                  />
                </div>
                <div className="content">
                  <h5 className="fw-bold mb-2">{ind.title}</h5>
                  <p className="text-muted m-0" style={{ fontSize: "13.5px", lineHeight: "1.5" }}>
                    {ind.desc}
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

