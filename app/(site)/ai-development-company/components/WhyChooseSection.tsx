import React from "react";
import { whyChooseData } from "../data/aiDevData";

export default function WhyChooseSection() {
  return (
    <section className="our-Trusted-AI-and-ML-development-partner ptb theme-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 m-auto">
            <h2 className="subheading">Expert AI Developers</h2>
            <h3 className="heading-2">Why choose Invoidea as a Leading AI Development Company?</h3>
            <p className="text-muted">
              Selecting a development partner is a different kind of decision than procuring your average software vendor. This work is technical and complex and requires deep domain knowledge, data fluency, and type of strategic thinking that connects model performance to business outcomes across an engagement.
            </p>
          </div>
        </div>
      </div>

      <div className="process-bottom mt-4" style={{ position: "relative" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                {whyChooseData.map((item) => (
                  <div key={item.number} className="col-md-6 mb-4">
                    <div className="row">
                      <div className="col-3">
                        <div className="number">
                          <h2>{item.number}</h2>
                        </div>
                      </div>
                      <div className="col-9">
                        <div className="content-box">
                          <h5>{item.title}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4 col-md-12 d-none d-lg-block">
              <div className="image">
                <img
                  loading="lazy"
                  src="/assets/ai-development-choose.webp"
                  alt="AI Developers"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
