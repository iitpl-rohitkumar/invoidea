import React from "react";
import { healthcareGridData } from "../data/healthcareData";

export default function BusinessNeedGridSection() {
  return (
    <section className="common-grid ptb">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mb-4">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {healthcareGridData.tag}
            </h2>
            <h3 className="heading-2">{healthcareGridData.title}</h3>
            <p className="text-muted" style={{ fontSize: "16px", lineHeight: "1.7" }}>
              {healthcareGridData.desc}
            </p>
          </div>
        </div>

        <div className="common-grid-grid">
          {healthcareGridData.items.map((item, idx) => (
            <div key={idx} className="common-grid-step">
              <span className="num">{item.num}</span>
              <h4>{item.title}</h4>
              <p className="text-muted">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

