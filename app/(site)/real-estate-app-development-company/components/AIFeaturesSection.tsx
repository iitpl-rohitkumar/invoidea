import React from "react";
import { realEstateAIFeaturesData } from "../data/realEstateData";

export default function AIFeaturesSection() {
  return (
    <section className="real-estate-ai">
      <div className="container">
        <div className="row text-center mb-4">
          <div className="col-lg-10 mx-auto">
            <span className="subheading">AI-POWERED REAL ESTATE APP DEVELOPMENT</span>
            <h2 className="heading-2">
              Smart AI Features That Make Property Search More Intelligent
            </h2>
            <p className="text-muted mx-auto">
              AI isn’t a buzzword here — it’s mostly about cutting down the manual work on both sides of a deal,
              and surfacing information faster than a person scrolling through hundreds of listings could. Our
              AI-powered real estate app development solutions help automate repetitive work while improving
              customer engagement and decision-making.
            </p>
          </div>
        </div>

        <div className="ai-grid">
          {realEstateAIFeaturesData.map((item, idx) => (
            <div key={idx} className="ai-card">
              <div className="ai-number">{item.number}</div>
              <div>
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

