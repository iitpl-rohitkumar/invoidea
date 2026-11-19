import React from "react";

export default function MiddleBannerSection() {
  return (
    <section className="middle-banner ptb">
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-lg-11 mx-auto p-lg-5 py-5"
            style={{
              background:
                "url(/assets/transform-your-business-with-AI-and-ML-Automate-Innovate-and-Scale.webp) no-repeat",
              backgroundSize: "cover",
              borderRadius: "20px",
            }}
          >
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <h2 className="subheading">Let’s Build Your AI-Powered Future!</h2>
                <h3 className="heading-2 text-white">
                  Transform your business with AI and ML – Automate, Innovate &amp; Scale!
                </h3>
                <p className="text-white">
                  We deliver compelling content that captivates audiences, drives engagement and achieves impactful results for your business.
                </p>
                <button
                  type="button"
                  className="btn theme-btn mt-3"
                  data-bs-toggle="modal"
                  data-bs-target="#consultation-modal"
                  aria-label="Open consultation form"
                >
                  Get a Free AI Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
