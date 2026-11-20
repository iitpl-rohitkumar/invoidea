import React from "react";
import { aiIntegrationProcessData } from "../data/aiIntegrationData";

export default function ProcessSection() {
  return (
    <section
      className="ai-and-ml-development Why-Businesses-Choose-AI-banner-ML ptb"
      style={{
        background: `url(${aiIntegrationProcessData.bannerBg}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container position-relative z-1">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {aiIntegrationProcessData.tag}
            </h2>
            <h3 className="heading-2 text-white">
              {aiIntegrationProcessData.title}
            </h3>
            <p className="text-white mb-4" style={{ opacity: 0.9 }}>
              {aiIntegrationProcessData.intro}
            </p>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-12">
            <div className="search-ads">
              {/* Step 1 */}
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
                  <rect x="3" y="4" width="18" height="6" rx="2"></rect>
                  <rect x="3" y="14" width="18" height="6" rx="2"></rect>
                  <path d="M7 7h.01M7 17h.01"></path>
                  <path d="M12 10v4"></path>
                </svg>
                <h6>{aiIntegrationProcessData.steps[0].title}</h6>
                <p>{aiIntegrationProcessData.steps[0].desc}</p>
              </div>

              {/* Step 2 */}
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
                <h6>{aiIntegrationProcessData.steps[1].title}</h6>
                <p>{aiIntegrationProcessData.steps[1].desc}</p>
              </div>

              {/* Step 3 */}
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
                  <polygon points="12 3 3 8 12 13 21 8 12 3"></polygon>
                  <path d="M3 8v8l9 5 9-5V8"></path>
                  <path d="M12 13v8"></path>
                </svg>
                <h6>{aiIntegrationProcessData.steps[2].title}</h6>
                <p>{aiIntegrationProcessData.steps[2].desc}</p>
              </div>

              {/* Step 4 */}
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
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
                <h6>{aiIntegrationProcessData.steps[3].title}</h6>
                <p>{aiIntegrationProcessData.steps[3].desc}</p>
              </div>

              {/* Step 5 */}
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
                  <path d="M4 12a8 8 0 0 1 16 0"></path>
                  <path d="M6 12v5a2 2 0 0 0 2 2h1"></path>
                  <path d="M18 12v5a2 2 0 0 1-2 2h-1"></path>
                  <polyline points="9 15 11 17 15 13"></polyline>
                </svg>
                <h6>{aiIntegrationProcessData.steps[4].title}</h6>
                <p>{aiIntegrationProcessData.steps[4].desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

