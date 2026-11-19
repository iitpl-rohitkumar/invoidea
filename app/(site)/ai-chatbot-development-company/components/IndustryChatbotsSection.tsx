import React from "react";
import { chatbotIndustriesData } from "../data/chatbotData";

export default function IndustryChatbotsSection() {
  return (
    <section className="process-wrapper py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center mb-5">
            <h2 className="subheading">
              <span>{chatbotIndustriesData.tag}</span>
            </h2>
            <h3 className="heading-2">{chatbotIndustriesData.title}</h3>
            <p className="head-para text-muted mx-auto" style={{ maxWidth: "880px" }}>
              {chatbotIndustriesData.desc}
            </p>
          </div>
        </div>

        <div className="row g-4">
          {chatbotIndustriesData.items.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="content-box p-4 h-100 bg-white rounded-3 border shadow-sm" style={{ borderTop: "4px solid #009FE3" }}>
                <h5 className="fw-bold mb-2" style={{ color: "#009FE3" }}>{item.title}</h5>
                <p className="text-muted m-0" style={{ fontSize: "14px", lineHeight: "1.6" }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

