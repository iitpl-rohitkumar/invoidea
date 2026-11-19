import React from "react";
import { realEstateWhyChooseData } from "../data/realEstateData";

export default function WhyChooseSection() {
  return (
    <section
      className="real-estate-why"
      style={{
        backgroundImage: "url('/assets/oil-gas-chooseus-bg.webp')"
      }}
    >
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-12">
            <span className="subheading-text">TOP REAL ESTATE APP DEVELOPERS</span>
            <h3 className="heading-2">
              Why Choose Invoidea as Your Real Estate App Development Company?
            </h3>
            <p className="text-muted">
              Invoidea is a real estate mobile app development company that combines industry understanding,
              modern technology and practical design to build applications around your workflows. From
              property discovery and lead management to communication and transactions, we create connected
              platforms with smart recommendations, automation and data-driven insights that support better
              user experiences and business growth:
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          {/* Left 10 Value Propositions in 2 columns */}
          <div className="col-lg-8 mb-4 mb-lg-0">
            <div className="why-grid">
              {realEstateWhyChooseData.map((item, idx) => (
                <div key={idx} className="feature-item">
                  <span className="fw-bold">{item.number}</span>
                  <div>
                    <h6>{item.title}</h6>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Mobile App Screen Mockup */}
          <div className="col-lg-4">
            <div className="side-image">
              <img
                src="/assets/Real-Estate-Application-Development-Services.webp"
                alt="Why Choose Invoidea Real Estate App Development"
                className="img-fluid"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
