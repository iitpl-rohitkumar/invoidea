import React from "react";
import { realEstateGridData } from "../data/realEstateData";

export default function BusinessNeedGridSection() {
  return (
    <section className="real-estate-grid">
      <div className="container">
        <div className="row">
          <div className="col-lg-9">
            <span className="subheading">
              CUSTOM REAL ESTATE APP DEVELOPMENT SOLUTIONS
            </span>
            <h3 className="heading-2">
              Real Estate Applications Built for Every Property Business Model
            </h3>
            <p className="text-muted">
              Not every real estate business needs the same app. A brokerage, a property manager, and a vacation
              rental host all need very different things — the workflows, the users, and even the deal cycle
              length are completely different, so the app has to be built around that. Our real estate app
              development solutions are tailored to different business models because every property business
              operates differently.
            </p>
          </div>
        </div>

        <div className="common-grid-grid">
          {realEstateGridData.map((item, index) => (
            <div key={index} className="common-grid-step">
              <span className="num">{item.number}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

