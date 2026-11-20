"use client";

import React, { useState } from "react";
import { aiAutomationReachOutData } from "../data/aiAutomationData";

export default function ReachOutSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    budget: "",
    projectBrief: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        budget: "",
        projectBrief: "",
      });
    }, 1200);
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
      <div className="container">
        <div className="row g-lg-5 align-items-center">
          {/* Left Column */}
          <div className="col-lg-5 mb-lg-0 mb-4">
            <h2 className="subheading" style={{ color: "#F79B1F" }}>
              {aiAutomationReachOutData.tag}
            </h2>
            <h3 className="heading-2">
              {aiAutomationReachOutData.title}
            </h3>
            <p className="text-muted mb-4">
              {aiAutomationReachOutData.desc}
            </p>

            <div className="talk-card">
              <h4>{aiAutomationReachOutData.talkTitle}</h4>
              <p>{aiAutomationReachOutData.talkDesc}</p>
              <button
                type="button"
                className="btn theme-btn"
                data-bs-toggle="modal"
                data-bs-target="#consultation-modal"
                aria-label="Talk to experts"
              >
                {aiAutomationReachOutData.ctaText} <span className="ms-1">→</span>
              </button>
            </div>
          </div>

          {/* Right Column / Project Form */}
          <div className="col-lg-6 offset-lg-1">
            <div className="project-form">
              {submitted ? (
                <div className="alert alert-success text-center py-4 mb-0">
                  <h5 className="fw-bold mb-2">Thank you for reaching out!</h5>
                  <p className="m-0 text-muted">
                    Our AI automation specialists will review your requirements and respond shortly.
                  </p>
                  <button
                    type="button"
                    className="btn theme-btn btn-sm mt-3"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <label className="form-label">
                        Full Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="form-control"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                      />
                    </div>

                    <div className="col-md-6">
                      <label className="form-label">
                        Email <span className="text-danger">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        className="form-control"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">
                        Phone Number <span className="text-danger">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        className="form-control"
                        placeholder="Enter phone number"
                        value={formData.phoneNumber}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            phoneNumber: e.target.value,
                          })
                        }
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">Your Budget?</label>
                      <select
                        className="form-select"
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                      >
                        <option value="" disabled>
                          Select Your Budget?
                        </option>
                        <option value="Below $10K">Below $10K</option>
                        <option value="$10K - $25K">$10K - $25K</option>
                        <option value="$25K - $50K">$25K - $50K</option>
                        <option value="$50K - $100K">$50K - $100K</option>
                        <option value="Above $100K">Above $100K</option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">Project Brief</label>
                      <textarea
                        className="form-control"
                        rows={4}
                        placeholder="Write it here..."
                        value={formData.projectBrief}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            projectBrief: e.target.value,
                          })
                        }
                      ></textarea>
                    </div>

                    <div className="col-12 mt-4">
                      <button
                        type="submit"
                        className="btn-submit"
                        disabled={loading}
                      >
                        {loading ? "Submitting..." : "Submit Request"}
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

