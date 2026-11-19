import React from "react";
import Image from "next/image";
import { realEstateLeadingData } from "../data/realEstateData";

export default function LeadingSection() {
  return (
    <section className="real-estate-leading">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Graphic Asset */}
          <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
            <div className="position-relative text-center">
              <Image
                src={realEstateLeadingData.image}
                alt="Real Estate App Development Company in India"
                width={600}
                height={480}
                className="img-fluid"
                priority
              />
            </div>
          </div>

          {/* Right Text Content */}
          <div className="col-lg-6 col-md-12">
            <span className="subheading">{realEstateLeadingData.tag}</span>
            <h2 className="heading-2">{realEstateLeadingData.title}</h2>
            {realEstateLeadingData.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

