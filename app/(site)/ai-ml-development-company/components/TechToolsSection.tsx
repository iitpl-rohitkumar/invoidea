import React from "react";
import { techToolsData } from "../data/aiMlData";

export default function TechToolsSection() {
  return (
    <section
      className="process-wrapper "
      style={{
        background: "url(/assets/cutting-edge-AI-and-ML-frameworks-bg.webp) no-repeat",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="subheading">
              <span>Technologies &amp; Tools We Use</span>
            </h2>
            <h3 className="heading-2">Cutting-Edge AI &amp; ML Frameworks</h3>
          </div>
        </div>
      </div>
      <div className="process-bottom mt-3" style={{ position: "relative" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                {techToolsData.map((item, idx) => (
                  <div key={idx} className="col-md-4 mb-4">
                    <div className="icon-main">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div className="content-box">
                      <h5 className="mt-2">{item.title}</h5>
                      <p>{item.techs}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              <div className="image mt-4 d-none d-lg-block">
                <img
                  src="/assets/cutting-edge-AI-and-ML-frameworks.webp"
                  alt="process"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
