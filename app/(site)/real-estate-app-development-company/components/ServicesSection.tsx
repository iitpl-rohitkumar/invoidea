import React from "react";
import { realEstateServicesData } from "../data/realEstateData";

export default function ServicesSection() {
  return (
    <section className="real-estate-services">
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-11">
            <span className="subheading">
              REAL ESTATE APP DEVELOPMENT SERVICES IN INDIA
            </span>
            <h3 className="heading-2">
              End-to-End Real Estate App Development Solutions
            </h3>
            <p className="light-text">
              As a trusted Real Estate app development Company in India, here’s what we typically build for real
              estate clients, depending on where they are in their growth. From property listing and lead
              management to custom platforms that streamline day-to-day operations, each solution is designed
              around specific business needs. We also incorporate intelligent capabilities that help teams work
              with their data, automate routine tasks and make more informed decisions as they scale:
            </p>
          </div>
        </div>

        <div className="ai-services">
          {realEstateServicesData.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-number">{service.number}</div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

