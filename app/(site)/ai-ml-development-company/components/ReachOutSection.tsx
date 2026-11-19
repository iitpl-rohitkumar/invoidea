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
      className="footer-form-wrapper ptb position-relative"
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
                aria-label="Talk To Experts"
              >
                Talk to us <span>&rarr;</span>
              </button>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-1">
            <div className="project-form">
              <div className="row">
                <div className="col-lg-12">
                  <form
                    onSubmit={handleSubmit}
                    className="contact-form customFrom"
                    name="REACH"
                  >
                    {submitted && (
                      <div className="alert alert-success mb-3">
                        Thank you! Your inquiry has been sent successfully. Our team will contact you shortly.
                      </div>
                    )}
                    <div className="row">
                      <div className="mb-3 col-lg-6 col-sm-12 col-md-6 px-1">
                        <div className="form-group">
                          <label htmlFor="reach-name" className="form-label">
                            Full Name <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="reach-name"
                            placeholder="Full Name"
                            className="form-control"
                            required
                            value={formData.fullName}
                            onChange={(e) =>
                              setFormData({ ...formData, fullName: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="mb-3 col-lg-6 col-sm-12 col-md-6 px-1">
                        <div className="form-group">
                          <label htmlFor="reach-email" className="form-label">
                            Email <span className="text-danger">*</span>
                          </label>
                          <input
                            type="email"
                            id="reach-email"
                            placeholder="Enter Your Email"
                            className="form-control"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="mb-3 col-12 col-lg-12 col-md-12 px-1">
                        <div className="form-group">
                          <label htmlFor="reach-phone" className="form-label">
                            Phone Number <span className="text-danger">*</span>
                          </label>
                          <input
                            type="text"
                            id="reach-phone"
                            placeholder="Enter phone number"
                            className="form-control"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="mb-3 px-1 col-12 col-lg-12 col-md-12">
                        <div className="form-group">
                          <label htmlFor="reach-budget" className="form-label">
                            Your Budget?
                          </label>
                          <select
                            id="reach-budget"
                            className="form-select select2"
                            value={formData.budget}
                            onChange={(e) =>
                              setFormData({ ...formData, budget: e.target.value })
                            }
                          >
                            <option value="">Select Your Budget?</option>
                            <option value="Below $10K">Below $10K</option>
                            <option value="$10K - $25K">$10K - $25K</option>
                            <option value="$25K - $50K">$25K - $50K</option>
                            <option value="$50K - $100K">$50K - $100K</option>
                            <option value="Above $100K">Above $100K</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-12 col-lg-12 col-md-12 px-1 mb-3">
                        <div className="form-group">
                          <label htmlFor="reach-brief" className="form-label">
                            Project Brief
                          </label>
                          <textarea
                            className="form-control"
                            rows={5}
                            placeholder="Write it here..."
                            id="reach-brief"
                            value={formData.brief}
                            onChange={(e) =>
                              setFormData({ ...formData, brief: e.target.value })
                            }
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <p className="nda-text mb-3">
                          🛡 Your ideas are fully protected under our <strong>Non-Disclosure Agreement.</strong>
                        </p>
                        <div className="form-check nda-checkbox">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="reach-ndaCopy"
                            checked={formData.ndaCopy}
                            onChange={(e) =>
                              setFormData({ ...formData, ndaCopy: e.target.checked })
                            }
                          />
                          <label className="form-check-label" htmlFor="reach-ndaCopy">
                            Send me a copy of NDA
                          </label>
                        </div>
                      </div>

                      <div className="col-12 col-lg-12 col-md-12 px-1 mt-4">
                        <button
                          type="submit"
                          className="octf-btn octf-btn-primary w-100 btn btn-submit"
                          id="submit"
                          aria-label="form-submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
