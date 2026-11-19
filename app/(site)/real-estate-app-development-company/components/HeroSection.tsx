"use client";

import React, { useState } from "react";
import Link from "next/link";
import { realEstateHeroData } from "../data/realEstateData";

export default function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    budget: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="real-estate-hero"
      style={{
        backgroundImage: `url('${realEstateHeroData.bannerBg}')`
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left Text Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="hero-content text-start">
              <span className="subheading">{realEstateHeroData.tag}</span>
              <h3 className="heading-2 text-white pb-2">
                {realEstateHeroData.title}
              </h3>
              <p className="light-text">{realEstateHeroData.desc}</p>
              
              <Link
                href={realEstateHeroData.ctaHref}
                className="theme-btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {realEstateHeroData.ctaText}
                <i className="fa-solid fa-arrow-right ms-2" />
              </Link>

              <p className="banner-note">
                <i className="fa-solid fa-shield-halved" />
                {realEstateHeroData.note}
              </p>
            </div>
          </div>

          {/* Right Lead Capture Form Card */}
          <div className="col-lg-5 offset-lg-1">
            <div className="hero-form-card">
              <span className="subheading">{realEstateHeroData.formSubheading}</span>
              <h2 className="mt-1">{realEstateHeroData.formTitle}</h2>
              <p>{realEstateHeroData.formDesc}</p>

              {submitted ? (
                <div className="alert alert-success p-3 text-center rounded-3">
                  Thank you! Our Real Estate AI team will reach out shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-2">
                    <div className="col-md-6 mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Name *"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6 mb-2">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Work Email *"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6 mb-2">
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="Phone Number *"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6 mb-2">
                      <select
                        className="form-select"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option value="">Select Budget</option>
                        <option value="Below $10000">Below $10,000</option>
                        <option value="$10000 - $25000">$10,000 - $25,000</option>
                        <option value="$25000 - $50000">$25,000 - $50,000</option>
                        <option value="$50000 - $100000">$50,000 - $100,000</option>
                        <option value="Above $100000">Above $100,000</option>
                        <option value="Let's Discuss">Let&apos;s Discuss</option>
                      </select>
                    </div>
                    <div className="col-12 mb-3">
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Tell us briefly about your property app project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn w-100">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              )}

              <p className="form-note">
                <i className="fa-solid fa-lock" /> Your information is secure and will never be shared.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Counter Metrics Strip */}
        <div className="row">
          <div className="col-12">
            <div className="hero-stats-strip">
              {realEstateHeroData.stats.map((stat, i) => (
                <div key={i} className="hero-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

