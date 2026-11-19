import React from "react";
import { industriesData, IndustryItem } from "../data/aiDevData";

export default function IndustrySolutionsSection() {
  return (
    <section className="AI-powered-solutions-for-every-industry ptb pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 m-auto text-lg-center">
            <h2 className="subheading">Industry-Specific AI Solutions</h2>
            <h3 className="heading-2">Empowering Every Industry with Intelligent Innovation</h3>
            <p className="text-muted text-lg-center">
              We work across industries bringing cross sector intelligence that improves every solution we build.
            </p>
          </div>
        </div>

        <div className="row mt-3">
          {industriesData.map((item: IndustryItem, idx: number) => (
            <div key={idx} className="col-lg-4 col-md-6">
              <div className="box text-lg-center text-left">
                <div className="icon">
                  {item.icon ? (
                    <img
                      src={item.icon}
                      className="img-fluid"
                      alt={item.title}
                      loading="lazy"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="53"
                      viewBox="0 0 50 53"
                      fill="none"
                      style={{ objectFit: "contain" }}
                    >
                      <path
                        d="M25 0L46.6506 12.5V37.5L25 50L3.34936 37.5V12.5L25 0Z"
                        fill="#F79B1F"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M25 15L35 25L25 35L15 25L25 15Z"
                        stroke="#F79B1F"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>
                <div className="content">
                  <h5>{item.title}</h5>
                  <p className="text-muted text-lg-center text-left">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
