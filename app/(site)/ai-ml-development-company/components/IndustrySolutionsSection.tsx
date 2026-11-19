import React from "react";
import { industriesData } from "../data/aiMlData";

export default function IndustrySolutionsSection() {
  return (
    <section className="AI-powered-solutions-for-every-industry">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto text-center">
            <h2 className="subheading">AI development services</h2>
            <h3 className="heading-2">AI-Powered Solutions for Every Industry</h3>
            <p className="text-muted text-center">
              We provide AI &amp; ML solutions tailored to a variety of industries, helping businesses innovate and grow through advanced technology.
            </p>
          </div>
        </div>

        <div className="row mt-3">
          {industriesData.map((ind, i) => (
            <div key={i} className="col-lg-3 col-md-6">
              <div className="box">
                <div className="icon">
                  <img
                    src={ind.icon}
                    className="img-fluid"
                    alt={ind.title}
                    loading="lazy"
                  />
                </div>
                <div className="content">
                  <h5>{ind.title}</h5>
                  <p className="text-muted text-center">{ind.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
