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
            <h2 className="subheading">REACH OUT</h2>
            <h3 className="heading-2">
              Partnering for Business Success - Let Our Experts Discover the Right Solutions!
            </h3>
            <p className="text-muted">
              Let&apos;s get started on your digital transformation journey. Submit your inquiry today and our experts
              will be in touch with you soon.
            </p>
            <div className="talk-card">
              <h4>Not sure where to start?</h4>
              <p>
                Let’s simplify it. Talk to us directly — we’re here to help.
              </p>
              <button
                type="button"
                className="btn theme-btn"
                data-bs-toggle="modal"
                data-bs-target="#consultation-modal"
              >
                Talk to Our Experts
              </button>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="form-card">
              {submitted ? (
                <div className="alert alert-success p-4 text-center">
                  <h4>Thank you!</h4>
                  <p>Your inquiry has been received. Our team will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="bot-name">Full Name *</label>
                        <input
                          id="bot-name"
                          type="text"
                          className="form-control"
                          placeholder="Your name"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="bot-email">Work Email *</label>
                        <input
                          id="bot-email"
                          type="email"
                          className="form-control"
                          placeholder="name@company.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="bot-phone">Phone Number *</label>
                        <input
                          id="bot-phone"
                          type="tel"
                          className="form-control"
                          placeholder="+1 (555) 000-0000"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="bot-budget">Estimated Budget</label>
                        <select
                          id="bot-budget"
                          className="form-select"
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        >
                          <option value="">Select budget range</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k+">$50,000+</option>
                        </select>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <label htmlFor="bot-brief">Project Brief</label>
                        <textarea
                          id="bot-brief"
                          rows={4}
                          className="form-control"
                          placeholder="Tell us about your AI chatbot use case, platforms, or volume..."
                          value={formData.brief}
                          onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                        ></textarea>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-check">
                        <input
                          id="bot-nda"
                          type="checkbox"
                          className="form-check-input"
                          checked={formData.ndaCopy}
                          onChange={(e) => setFormData({ ...formData, ndaCopy: e.target.checked })}
                        />
                        <label htmlFor="bot-nda" className="form-check-label text-muted small">
                          Include a Mutual Non-Disclosure Agreement (NDA)
                        </label>
                      </div>
                    </div>

                    <div className="col-12 mt-3">
                      <button type="submit" className="btn theme-btn w-100">
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

