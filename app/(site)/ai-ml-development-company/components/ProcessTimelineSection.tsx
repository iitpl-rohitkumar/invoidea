import React from "react";

export default function ProcessTimelineSection() {
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
            <h2 className="subheading">AI Development Company</h2>
            <h3 className="heading-2 text-white">A Step-by-Step Development Process</h3>
            <p className="light-text pb-lg-3">
              We are the foremost AI ML development company in India that offers end-to-end solutions concentrating on clients&apos; needs, concerns, and target audiences. We prioritize transparency and keep our clients updated throughout the development process to ensure they feel satisfied and get personalized outcomes that align perfectly with their business model. Here is a step-by-step process of our artificial intelligence development services:
            </p>
          </div>
        </div>

        {/* Desktop Timeline */}
        <div className="row mb-5 mt-5 top-columns d-none d-lg-flex">
          <div className="column d-flex">
            <div className="box w-100">
              <h2>01</h2>
              <h6>Requirement Analysis</h6>
              <p>In the first stage, we consult with clients to understand their business needs and challenges and create strategies.</p>
            </div>
            <div className="dot"></div>
          </div>
          <div className="column-middle"></div>
          <div className="column d-flex">
            <div className="box w-100">
              <h2>03</h2>
              <h6>Model Development &amp; Training</h6>
              <p>Now, we identify the right AI/ML algorithms and train models to use datasets for automation.</p>
            </div>
            <div className="dot"></div>
          </div>
          <div className="column-middle"></div>
          <div className="column last-column d-flex">
            <div className="box w-100">
              <h2>05</h2>
              <h6>Deployment &amp; Integration</h6>
              <p>At this moment, we integrate AI models into business applications that streamline operations.</p>
            </div>
            <div className="dot"></div>
          </div>
        </div>

        <div className="row bottom-columns d-none d-lg-flex">
          <div className="column-middle"></div>
          <div className="column d-flex">
            <div className="dot"></div>
            <div className="box w-100">
              <h2>02</h2>
              <h6>Data Collection &amp; Processing</h6>
              <p>We collect relevant data from different sources and process data for model training.</p>
            </div>
          </div>
          <div className="column-middle"></div>
          <div className="column d-flex">
            <div className="dot"></div>
            <div className="box w-100">
              <h2>04</h2>
              <h6>Testing &amp; Validation</h6>
              <p>To ensure the high accuracy of the model and performance, we test it and optimize it if required.</p>
            </div>
          </div>
          <div className="column-middle"></div>
          <div className="column last-column d-flex">
            <div className="dot"></div>
            <div className="box w-100">
              <h2>06</h2>
              <h6>Monitoring &amp; Continuous Improvement</h6>
              <p>At the last stage, we track real-time performance and adjust accordingly if required for long-term success.</p>
            </div>
          </div>
        </div>

        {/* Mobile Sequential Layout */}
        <div className="row d-lg-none d-block mt-5">
          <div className="column d-flex w-100 mb-5">
            <div className="box w-100">
              <h2>01</h2>
              <h6>Requirement Analysis</h6>
              <p>In the first stage, we consult with clients to understand their business needs and challenges and create strategies.</p>
            </div>
          </div>
          <div className="column d-flex w-100 mb-5">
            <div className="box w-100">
              <h2>02</h2>
              <h6>Data Collection &amp; Processing</h6>
              <p>We collect relevant data from different sources and process data for model training.</p>
            </div>
          </div>
          <div className="column d-flex w-100 mb-5">
            <div className="box w-100">
              <h2>03</h2>
              <h6>Model Development &amp; Training</h6>
              <p>Now, we identify the right AI/ML algorithms and train models to use datasets for automation.</p>
            </div>
          </div>
          <div className="column d-flex w-100 mb-5">
            <div className="box w-100">
              <h2>04</h2>
              <h6>Testing &amp; Validation</h6>
              <p>To ensure the high accuracy of the model and performance, we test it and optimize it if required.</p>
            </div>
          </div>
          <div className="column d-flex w-100 mb-5">
            <div className="box w-100">
              <h2>05</h2>
              <h6>Deployment &amp; Integration</h6>
              <p>At this moment, we integrate AI models into business applications that streamline operations.</p>
            </div>
          </div>
          <div className="column d-flex w-100">
            <div className="box w-100">
              <h2>06</h2>
              <h6>Monitoring &amp; Continuous Improvement</h6>
              <p>At the last stage, we track real-time performance and adjust accordingly if required for long-term success.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
