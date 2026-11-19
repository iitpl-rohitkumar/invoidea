import React from "react";
import { processData } from "../data/aiDevData";

export default function ProcessSection() {
  return (
    <section
      className="tailored-solutions-wrapper ptb"
      style={{
        background: "url(/assets/Step-by-Step-Approach-to-AI-Excellence.webp) no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="main-heading text-lg-center mb-5">
              <h2 className="subheading">Our AI Development Process</h2>
              <h3 className="heading-2 text-white">
                From Strategy to Deployment – Complete AI Solutions Process
              </h3>
              <p className="light-text text-lg-center">
                From early stage consulting to full scale deployment, every engagement is designed around one outcome measurable business value that compounds over time.
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-04">
          {processData.map((item) => (
            <div key={item.step} className="col-lg-4 col-md-6 mb-md-5 Custom-built-box text-lg-center">
              <div className="box">
                <strong>{item.step}</strong>
                <h5>{item.title}</h5>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
