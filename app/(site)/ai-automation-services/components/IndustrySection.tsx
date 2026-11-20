import React from "react";
import { aiAutomationIndustryData } from "../data/aiAutomationData";

export default function IndustrySection() {
  return (
    <section className="AI-powered-solutions-for-every-industry ptb pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto text-lg-center">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {aiAutomationIndustryData.tag}
            </h2>
            <h3 className="heading-2">
              {aiAutomationIndustryData.title}
            </h3>
            <p className="text-muted text-lg-center">
              {aiAutomationIndustryData.intro}
            </p>
          </div>
        </div>

        <div className="row mt-4 g-4">
          {aiAutomationIndustryData.items.map((item, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="box text-lg-center text-left">
                <div className="icon">
                  {item.svgType === "real-estate" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d56f35"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 21s7-5 7-10a7 7 0 1 0-14 0c0 5 7 10 7 10z"></path>
                      <path d="M9 10l3-2 3 2v4H9z"></path>
                    </svg>
                  )}
                  {item.svgType === "finance" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#d56f35"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 10h20"></path>
                      <path d="M4 10v8"></path>
                      <path d="M8 10v8"></path>
                      <path d="M12 10v8"></path>
                      <path d="M16 10v8"></path>
                      <path d="M20 10v8"></path>
                      <path d="M3 18h18"></path>
                      <path d="M12 3l10 7H2z"></path>
                    </svg>
                  )}
                  {item.svgType === "customer-service" && (
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
                  )}
                  {!item.isSvg && item.icon && (
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

