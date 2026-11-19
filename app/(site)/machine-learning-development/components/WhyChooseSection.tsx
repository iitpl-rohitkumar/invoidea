import React from "react";
import { mlWhyChooseData } from "../data/mlData";

export default function WhyChooseSection() {
  return (
    <section className="tailored-solutions-wrapper ptb theme-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="main-heading text-center mb-5">
              <h2 className="subheading">{mlWhyChooseData.tag}</h2>
              <h3 className="heading-2">{mlWhyChooseData.title}</h3>
              <p className="text-muted text-center">
                {mlWhyChooseData.desc}
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-04">
          {mlWhyChooseData.features.map((item) => (
            <div key={item.num} className="col-lg-4 col-md-6 mb-5 Custom-built-box text-center">
              <div className="box">
                <strong>{item.num}</strong>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

