"use client";

import React, { useState } from "react";

export default function ReachOutSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    budget: "",
    service: "",
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
        service: "",
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
      <div className="container">
        <div className="row g-lg-5 align-items-center">
          <div className="col-lg-5 mb-lg-0 mb-4">
            <h2 className="subheading">REACH OUT</h2>
            <h3 className="heading-2">
              Partnering for Business Success - Let Our Experts Discover the Right Solutions!
            </h3>
            <p className="text-muted mb-4">
              Let&apos;s get started on your digital transformation journey. Submit your inquiry today and our experts
              will be in touch with you soon.
            </p>

            <div className="talk-card">
              <h4 className="text-white fw-bold mb-2">Not sure where to start?</h4>
              <p className="mb-4" style={{ color: "#dbe7ff", fontSize: "15px" }}>
                Let’s simplify it. Talk to us directly — we’re here to help.
              </p>
              <button
                type="button"
                className="btn theme-btn"
                data-bs-toggle="modal"
                data-bs-target="#consultation-modal"
                aria-label="Talk To Experts"
              >
                Talk to us <span className="ms-1">→</span>
              </button>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="project-form">
              {submitted ? (
                <div className="alert alert-success text-center py-4 mb-0">
                  <h5 className="fw-bold mb-2">Thank you for reaching out!</h5>
                  <p className="m-0 text-muted">Our AI specialists will review your requirements and respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-dark">Full Name *</label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        style={{ height: "48px", borderRadius: "8px", border: "1px solid #ced4da" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-dark">Email Address *</label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ height: "48px", borderRadius: "8px", border: "1px solid #ced4da" }}
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-dark">Phone Number</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ height: "48px", borderRadius: "8px", border: "1px solid #ced4da" }}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label small fw-bold text-dark">Project Budget</label>
                      <select
                        className="form-select form-control"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        style={{ height: "48px", borderRadius: "8px", border: "1px solid #ced4da" }}
                      >
                        <option value="">Select Budget Range</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k-100k">$50,000 - $100,000</option>
                        <option value="100k+">$100,000+</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label small fw-bold text-dark">Service Needed</label>
                      <select
                        className="form-select form-control"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        style={{ height: "48px", borderRadius: "8px", border: "1px solid #ced4da" }}
                      >
                        <option value="">Select AI Software Service</option>
                        <option value="integration">AI Integration with Existing Systems</option>
                        <option value="custom-dev">Custom AI Software Development</option>
                        <option value="app-dev">AI-Powered Web & Mobile App Development</option>
                        <option value="models">AI/ML Model Development</option>
                        <option value="predictive">Predictive Analytics Solutions</option>
                        <option value="agents">Agentic AI & AI Agents Development</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label small fw-bold text-dark">Project Brief *</label>
                      <textarea
                        required
                        rows={3}
                        className="form-control"
                        placeholder="Tell us about your project, goals, and technical requirements..."
                        value={formData.brief}
                        onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                        style={{ borderRadius: "8px", border: "1px solid #ced4da", resize: "none" }}
                      ></textarea>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="ndaCheck"
                          checked={formData.ndaCopy}
                          onChange={(e) => setFormData({ ...formData, ndaCopy: e.target.checked })}
                        />
                        <label className="form-check-label text-muted small" htmlFor="ndaCheck">
                          I would like to sign a Non-Disclosure Agreement (NDA) before sharing details.
                        </label>
                      </div>
                    </div>

                    <div className="col-12 mt-3">
                      <button
                        type="submit"
                        className="btn theme-btn w-100 py-3"
                        style={{ fontSize: "16px", fontWeight: 700 }}
                      >
                        Send Inquiry
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
