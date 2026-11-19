"use client";

import React, { useState } from "react";

export default function ContactSection() {
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
      className="footer-form-wrapper ptb position-relative"
      id="reach-out-form"
      style={{
        background: "url(/assets/steps-bg-image.webp) no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container-fluid">
        <div className="row g-lg-5 align-items-center">
          {/* Left Column */}
          <div className="col-lg-5 mb-lg-0 mb-4">
            <h2 className="subheading">REACH OUT</h2>
            <h3 className="heading-2">
              Partnering for Business Success - Let Our Experts Discover the Right Solutions!
            </h3>
            <p className="text-muted mb-4">
              Let&apos;s get started on your digital transformation journey. Submit your inquiry today and our experts
              will be in touch with you soon.
            </p>
            <div className="talk-card p-4 rounded-4 shadow-sm bg-white border border-light">
              <h4 className="fw-bold mb-2 fs-5">Not sure where to start?</h4>
              <p className="text-secondary small mb-3">
                Let&apos;s simplify it. Talk to us directly — we&apos;re here to help.
              </p>
              <button
                type="button"
                className="btn theme-btn"
                data-bs-toggle="modal"
                data-bs-target="#consultation-modal"
                aria-label="Talk To Experts"
              >
                Talk to us <span>→</span>
              </button>
            </div>
          </div>

          {/* Right Column (Form) */}
          <div className="col-lg-6 offset-lg-1">
            <div className="project-form p-4 p-md-5 rounded-4 bg-white shadow-lg border border-light">
              <h2 className="text-black mb-4 fs-3 fw-bold" style={{ fontFamily: '"DM Serif Text", serif' }}>
                Speak with our <span style={{ color: "var(--theme-color-1)" }}>Digital</span>
                <br />
                <span className="gradient-text">Professionals</span>
              </h2>

              {submitted ? (
                <div className="alert alert-success py-4 text-center">
                  <i className="fa-solid fa-circle-check fs-2 text-success mb-2 d-block"></i>
                  <h5>Inquiry Received!</h5>
                  <p className="mb-0 small">Our technology consultants will contact you within 24 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form customFrom">
                  <div className="row g-3">
                    {/* Full Name */}
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Full Name"
                        className="form-control"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        style={{ borderRadius: "8px", padding: "10px 14px" }}
                      />
                    </div>

                    {/* Email */}
                    <div className="col-md-6">
                      <label className="form-label small fw-semibold text-dark">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter Your Email"
                        className="form-control"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={{ borderRadius: "8px", padding: "10px 14px" }}
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="col-12">
                      <label className="form-label small fw-semibold text-dark">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter phone number"
                        className="form-control"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        style={{ borderRadius: "8px", padding: "10px 14px" }}
                      />
                    </div>

                    {/* Budget */}
                    <div className="col-12">
                      <label className="form-label small fw-semibold text-dark">Your Budget?</label>
                      <select
                        className="form-select"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        style={{ borderRadius: "8px", padding: "10px 14px" }}
                      >
                        <option value="">Select Your Budget?</option>
                        <option value="Below $10K">Below $10K</option>
                        <option value="$10K - $25K">$10K - $25K</option>
                        <option value="$25K - $50K">$25K - $50K</option>
                        <option value="$50K - $100K">$50K - $100K</option>
                        <option value="Above $100K">Above $100K</option>
                      </select>
                    </div>

                    {/* Project Brief */}
                    <div className="col-12">
                      <label className="form-label small fw-semibold text-dark">Project Brief</label>
                      <textarea
                        rows={4}
                        placeholder="Write it here..."
                        className="form-control"
                        value={formData.brief}
                        onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                        style={{ borderRadius: "8px", padding: "10px 14px" }}
                      ></textarea>
                    </div>

                    {/* NDA Checkbox */}
                    <div className="col-12">
                      <p className="nda-text small text-muted mb-2">
                        🛡 Your ideas are fully protected under our <strong>Non-Disclosure Agreement.</strong>
                      </p>
                      <div className="form-check nda-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="ndaCheck"
                          checked={formData.ndaCopy}
                          onChange={(e) => setFormData({ ...formData, ndaCopy: e.target.checked })}
                        />
                        <label className="form-check-label small text-muted" htmlFor="ndaCheck">
                          Send me a copy of NDA
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn theme-btn w-100 py-3 fw-bold" style={{ fontSize: "16px" }}>
                        Submit
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

