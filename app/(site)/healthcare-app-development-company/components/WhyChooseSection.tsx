import React from "react";
import { healthcareWhyData } from "../data/healthcareData";

export default function WhyChooseSection() {
  return (
    <section className="why-choose-us ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mb-5">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {healthcareWhyData.tag}
            </h2>
            <h3 className="heading-2 mb-3">{healthcareWhyData.title}</h3>
            <p
              className="text-muted"
              style={{ maxWidth: "1050px", fontSize: "16px", lineHeight: "1.7" }}
            >
              {healthcareWhyData.desc}
            </p>
          </div>
        </div>

        <div className="row align-items-center g-4">
          {/* Left Features Grid */}
          <div className="col-lg-8">
            <div className="row g-4">
              {healthcareWhyData.items.map((item, idx) => (
                <div key={idx} className="col-sm-6">
                  <div className="feature-item">
                    <span className="fw-bold me-2">{item.num}</span>
                    <div>
                      <h6 className="fw-semibold mb-1" style={{ fontSize: "17px" }}>
                        {item.title}
                      </h6>
                      <p className="text-muted" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-4 text-center d-none d-lg-block">
            <div className="sticky-top" style={{ top: "140px" }}>
              <img
                loading="lazy"
                src={healthcareWhyData.image}
                alt="Healthcare Web Development Company"
                className="img-fluid rounded-4 shadow-sm"
                style={{ width: "100%", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

