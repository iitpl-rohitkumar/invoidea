"use client";

import React, { useState } from "react";
import { healthcareHeroData } from "../data/healthcareData";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        budget: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <section
      className="healthcare-hero-banner banner"
      style={{
        backgroundImage: `url(${healthcareHeroData.bannerBg})`,
      }}
    >
      <div className="container position-relative z-1">
        <div className="row align-items-center g-4">
          {/* Left Column: Heading, description, CTA */}
          <div className="col-lg-7 col-xl-6">
            <div className="hero-content text-start">
              <h2 className="subheading">{healthcareHeroData.tag}</h2>
              <h3 className="heading-2 text-white pb-2">{healthcareHeroData.title}</h3>
              <p className="light-text">{healthcareHeroData.desc}</p>

              <div className="d-flex flex-wrap align-items-center gap-3">
                <a
                  href={healthcareHeroData.ctaLink}
                  className="btn theme-btn text-decoration-none"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {healthcareHeroData.ctaText}
                  <i className="fa-solid fa-arrow-right ms-2"></i>
                </a>
              </div>

              <p className="banner-note">
                <i className="fa-solid fa-shield-halved"></i>
                <span>{healthcareHeroData.note}</span>
              </p>
            </div>
          </div>

          {/* Right Column: Hero Form Card */}
          <div className="col-lg-5 col-xl-5 offset-xl-1">
            <div className="hero-form-card">
              <span className="subheading">{healthcareHeroData.form.tag}</span>
              <h2 className="mt-1">{healthcareHeroData.form.title}</h2>
              <p>{healthcareHeroData.form.desc}</p>

              {submitted ? (
                <div className="alert alert-success py-3 text-center my-3 rounded-3">
                  <i className="fa-solid fa-check-circle me-2"></i>
                  Thank you! Our Healthcare AI team will be in touch shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="needs-validation">
                  <div className="row g-2">
                    <div className="col-md-6 col-12">
                      <div className="form-group mb-2">
                        <input
                          type="text"
                          placeholder="Name *"
                          required
                          className="form-control"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group mb-2">
                        <input
                          type="email"
                          placeholder="Email *"
                          required
                          className="form-control"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group mb-2">
                        <input
                          type="tel"
                          placeholder="Phone *"
                          required
                          className="form-control"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-12">
                      <div className="form-group mb-2">
                        <select
                          className="form-select"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        >
                          <option value="">Select Budget</option>
                          <option value="Below $10,000">Below $10,000</option>
                          <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                          <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                          <option value="$50,000 - $100,000">$50,000 - $100,000</option>
                          <option value="Above $100,000">Above $100,000</option>
                          <option value="Let's Discuss">Let&apos;s Discuss</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group mb-3">
                        <textarea
                          className="form-control"
                          rows={3}
                          placeholder="Tell us briefly about your project"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn theme-btn w-100 py-3">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              )}

              <p className="form-note">
                <i className="fa-solid fa-lock"></i>
                <span>Your information is secure and will not be shared.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Hero Stats Strip */}
        <div className="row">
          <div className="col-12">
            <div className="hero-stats-strip">
              {healthcareHeroData.stats.map((stat, idx) => (
                <div key={idx} className="hero-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

