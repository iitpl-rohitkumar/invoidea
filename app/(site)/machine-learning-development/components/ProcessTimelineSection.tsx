import React from "react";
import { mlProcessData } from "../data/mlData";

export default function ProcessTimelineSection() {
  const steps = mlProcessData.steps;

  return (
    <section
      className="ptb step-by-step-approach-to-ai-excellence"
      style={{
        background: "url(/assets/Step-by-Step-Approach-to-AI-Excellence.webp) no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2 className="subheading">{mlProcessData.tag}</h2>
            <h3 className="heading-2 text-white">{mlProcessData.title}</h3>
            <p className="light-text pb-lg-3">
              {mlProcessData.desc}
            </p>
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="row mb-5 mt-5 top-columns d-none d-lg-flex">
          {/* Step 01 */}
          <div className="column d-flex">
            <div className="box w-100">
              <h2>{steps[0].num}</h2>
              <h6>{steps[0].title}</h6>
              <p>{steps[0].desc}</p>
            </div>
            <div className="dot"></div>
          </div>
          <div className="column-middle"></div>

          {/* Step 03 */}
          <div className="column d-flex">
            <div className="box w-100">
              <h2>{steps[2].num}</h2>
              <h6>{steps[2].title}</h6>
              <p>{steps[2].desc}</p>
            </div>
            <div className="dot"></div>
          </div>
          <div className="column-middle"></div>

          {/* Step 05 */}
          <div className="column last-column d-flex">
            <div className="box w-100">
              <h2>{steps[4].num}</h2>
              <h6>{steps[4].title}</h6>
              <p>{steps[4].desc}</p>
            </div>
            <div className="dot"></div>
          </div>
          <div className="column-middle"></div>
        </div>

        {/* Desktop Bottom Row */}
        <div className="row bottom-columns d-none d-lg-flex">
          <div className="column-middle"></div>

          {/* Step 02 */}
          <div className="column d-flex">
            <div className="dot"></div>
            <div className="box w-100">
              <h2>{steps[1].num}</h2>
              <h6>{steps[1].title}</h6>
              <p>{steps[1].desc}</p>
            </div>
          </div>
          <div className="column-middle"></div>

          {/* Step 04 */}
          <div className="column d-flex">
            <div className="dot"></div>
            <div className="box w-100">
              <h2>{steps[3].num}</h2>
              <h6>{steps[3].title}</h6>
              <p>{steps[3].desc}</p>
            </div>
          </div>
          <div className="column-middle"></div>

          {/* Step 06 */}
          <div className="column last-column d-flex">
            <div className="dot"></div>
            <div className="box w-100">
              <h2>{steps[5].num}</h2>
              <h6>{steps[5].title}</h6>
              <p>{steps[5].desc}</p>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="row d-lg-none d-block mt-4">
          {steps.map((step) => (
            <div key={step.num} className="column d-flex w-100 mb-4">
              <div className="box w-100">
                <h2>{step.num}</h2>
                <h6>{step.title}</h6>
                <p>{step.desc}</p>
              </div>
              <div className="dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

