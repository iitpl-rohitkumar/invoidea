import React from "react";
import { aiIntegrationIndustryData } from "../data/aiIntegrationData";

export default function IndustrySection() {
  return (
    <section className="AI-powered-solutions-for-every-industry ptb pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto text-lg-center">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {aiIntegrationIndustryData.tag}
            </h2>
            <h3 className="heading-2">
              {aiIntegrationIndustryData.title}
            </h3>
            <p className="text-muted text-lg-center">
              {aiIntegrationIndustryData.intro}
            </p>
          </div>
        </div>

        <div className="row mt-4 g-4">
          {aiIntegrationIndustryData.items.map((item, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="box text-lg-center text-left">
                <div className="icon">
                  {item.isSvg ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="54"
                      height="54"
                      viewBox="0 0 64 64"
                      fill="none"
                    >
                      <path
                        d="M38 10a10 10 0 0 0-9 15l-14 14a4 4 0 1 0 6 6l14-14a10 10 0 0 0 15-9l-6 4-5-1-1-5 4-6a10 10 0 0 0-4-1z"
                        stroke="#f79b1f"
                        strokeWidth="2.5"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M42 34l-6 10h6l-4 10 10-14h-6l4-6z"
                        stroke="#009fe3"
                        strokeWidth="2.2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  ) : (
                    <img
                      src={item.icon}
                      className="img-fluid"
                      alt={item.title}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="content">
                  <h5>{item.title}</h5>
                  <p className="text-muted text-lg-center">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

