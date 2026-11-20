import React from "react";
import { aiIntegrationHeroData } from "../data/aiIntegrationData";

export default function HeroSection() {
  return (
    <section className="hero-section other-hero-section mobile-app-main d-flex align-items-center position-relative">
      <picture className="position-absolute top-0 start-0 w-100 h-100 z-0">
        <source
          media="(max-width: 768px)"
          srcSet={aiIntegrationHeroData.mobileImg}
          sizes="100vw"
        />
        <img
          src={aiIntegrationHeroData.desktopImg}
          alt={aiIntegrationHeroData.title}
          width={1920}
          height={700}
          className="w-100 h-100"
          style={{ objectFit: "cover", objectPosition: "right center" }}
        />
      </picture>

      <div className="container position-relative z-1">
        <div className="row align-items-center">
          <div className="col-xl-6 col-md-8 col-lg-6">
            <div className="banner-content-wrapper">
              <h1 className="subheading" style={{ color: "#F79B1F" }}>
                {aiIntegrationHeroData.tag}
              </h1>
              <h2 className="heading-2 text-white mb-3">
                {aiIntegrationHeroData.title}
              </h2>
              <p className="d-none d-md-block light-text mb-4">
                {aiIntegrationHeroData.desc}
              </p>
              <button
                type="button"
                className="btn theme-btn"
                data-bs-toggle="modal"
                data-bs-target="#consultation-modal"
                aria-label="Open consultation form"
              >
                {aiIntegrationHeroData.ctaText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

