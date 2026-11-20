import React from "react";
import { aiAutomationProcessData } from "../data/aiAutomationData";

export default function ProcessSection() {
  return (
    <section
      className="ai-and-ml-development Why-Businesses-Choose-AI-banner-ML ptb"
      style={{
        background: `url(${aiAutomationProcessData.bannerBg}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container position-relative z-1">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {aiAutomationProcessData.tag}
            </h2>
            <h3 className="heading-2 text-white">
              {aiAutomationProcessData.title}
            </h3>
            <p className="text-white mb-4" style={{ opacity: 0.9 }}>
              {aiAutomationProcessData.intro}
            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="search-ads">
              {/* Step 1: Process Analysis */}
              <div className="column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FAAE1C"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="4" y="3" width="16" height="18" rx="2"></rect>
                  <path d="M8 7h8"></path>
                  <path d="M8 11h8"></path>
                  <path d="M8 15h5"></path>
                  <circle cx="6" cy="7" r="0.5"></circle>
                  <circle cx="6" cy="11" r="0.5"></circle>
                  <circle cx="6" cy="15" r="0.5"></circle>
                </svg>
                <h6>{aiAutomationProcessData.steps[0].title}</h6>
                <p>{aiAutomationProcessData.steps[0].desc}</p>
              </div>

              {/* Step 2: Automation Planning */}
              <div className="column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FAAE1C"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="5" width="6" height="6" rx="1.5"></rect>
                  <rect x="15" y="5" width="6" height="6" rx="1.5"></rect>
                  <rect x="9" y="13" width="6" height="6" rx="1.5"></rect>
                  <path d="M9 8h6"></path>
                  <path d="M12 11v2"></path>
                </svg>
                <h6>{aiAutomationProcessData.steps[1].title}</h6>
                <p>{aiAutomationProcessData.steps[1].desc}</p>
              </div>

              {/* Step 3: Solution Development */}
              <div className="column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FAAE1C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
                <h6>{aiAutomationProcessData.steps[2].title}</h6>
                <p>{aiAutomationProcessData.steps[2].desc}</p>
              </div>

              {/* Step 4: System Integration and Testing */}
              <div className="column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FAAE1C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9"></circle>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
                <h6>{aiAutomationProcessData.steps[3].title}</h6>
                <p>{aiAutomationProcessData.steps[3].desc}</p>
              </div>

              {/* Step 5: Monitoring and Optimisation */}
              <div className="column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FAAE1C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
                <h6>{aiAutomationProcessData.steps[4].title}</h6>
                <p>{aiAutomationProcessData.steps[4].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

