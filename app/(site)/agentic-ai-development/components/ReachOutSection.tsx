"use client";

import React, { useState } from "react";

export default function ReachOutSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    brief: "",
    ndaCopy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        budget: "",
        brief: "",
        ndaCopy: false,
      });
    }, 4000);
  };

  return (
    <section
      className="footer-form-wrapper ptb position-relative py-5"
      id="reach-out-form"
      style={{
        background: "url(/assets/steps-bg-image.webp) no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container-fluid">
        <div className="row g-lg-5 align-items-center">
          <div className="col-lg-5 mb-lg-0 mb-3">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>REACH OUT</h2>
            <h3 className="heading-2">
              Partnering for Business Success - Let Our Experts Discover the Right Solutions!
            </h3>
            <p className="text-muted">
              Let&apos;s get started on your digital transformation journey. Submit your inquiry today and our experts
              will be in touch with you soon.
            </p>

            <div className="pt-2 d-none d-lg-block">
              <h5 className="fw-bold mb-2">Not sure where to start?</h5>
              <p className="text-muted mb-3" style={{ fontSize: "14px" }}>
                Speak directly with one of our enterprise AI specialists to evaluate technical feasibility and estimate ROI.
              </p>
              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center text-white"
                  style={{ width: "48px", height: "48px", backgroundColor: "#009FE3" }}
                >
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <small className="text-muted d-block">Call us directly</small>
                  <a
                    href="tel:+919654497673"
                    className="fw-bold text-dark text-decoration-none"
                    style={{ fontSize: "17px" }}
                  >
                    +91 (965) 449-7673
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <div
              className="p-4 p-md-5 rounded-4 shadow-sm"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.95)" }}
            >
              {submitted ? (
                <div className="alert alert-success text-center py-4">
                  <h5>Thank you for reaching out!</h5>
                  <p className="m-0">Our AI specialists will review your requirements and respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-bold">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold">Business Email *</label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        className="form-control"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold">Estimated Budget</label>
                      <select
                        className="form-select"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      >
                        <option value="">Select a range</option>
                        <option value="$10k - $25k">$10k - $25k</option>
                        <option value="$25k - $50k">$25k - $50k</option>
                        <option value="$50k - $100k">$50k - $100k</option>
                        <option value="$100k+">$100k+</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <label className="form-label small fw-bold">Project Brief / Questions</label>
                      <textarea
                        rows={4}
                        className="form-control"
                        placeholder="Tell us about your project requirements, challenges, or goals..."
                        value={formData.brief}
                        onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="agenticNdaCheck"
                          checked={formData.ndaCopy}
                          onChange={(e) => setFormData({ ...formData, ndaCopy: e.target.checked })}
                        />
                        <label className="form-check-label small text-muted" htmlFor="agenticNdaCheck">
                          I would like to receive an NDA copy before sharing project files.
                        </label>
                      </div>
                    </div>
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn theme-btn w-100 py-3">
                        Submit Inquiry
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

