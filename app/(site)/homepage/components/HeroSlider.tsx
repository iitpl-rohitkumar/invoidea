"use client";

import React from "react";
import Link from "next/link";

export default function HeroSlider() {
  return (
    <section className="hero-section">
      {/* Background Video */}
      <video className="hero-video" autoPlay muted loop playsInline>
        <source src="/assets/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Content */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="hero-content">
              <h1
                className="text-uppercase subheading mb-3"
                style={{
                  color: "var(--theme-color-1)",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "1px",
                }}
              >
                Web Designing Company in India
              </h1>
              <h2
                className="text-white mb-3"
                style={{
                  fontFamily: '"DM Serif Text", serif',
                  fontSize: "clamp(36px, 4.8vw, 64px)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  maxWidth: "960px",
                }}
              >
                Where Innovation Meets Imagination
              </h2>
              <p
                className="mt-3 para-text-color d-md-block d-none pb-2"
                style={{
                  color: "rgba(255, 255, 255, 0.85)",
                  fontSize: "16px",
                  lineHeight: 1.6,
                  maxWidth: "880px",
                }}
              >
                We deliver smart, scalable custom software and enterprise-ready web applications to mobile apps
                and AI solutions that transform your ideas into innovative products. Trusted by global
                businesses, we develop high-performing AI-integrated web apps and software that automate
                workflows, accelerate growth and scale with your business.
              </p>
              <div className="mt-4 d-flex gap-3 flex-wrap align-items-center">
                <Link href="#services-wrapper" className="btn theme-btn">
                  Our Services
                </Link>
                <button
                  type="button"
                  className="btn btn-outline-theme"
                  data-bs-toggle="modal"
                  data-bs-target="#consultation-modal"
                  aria-label="Talk To Experts"
                  style={{
                    color: "#ffffff",
                    borderColor: "var(--btn-outline-theme)",
                  }}
                >
                  Talk To Experts
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
