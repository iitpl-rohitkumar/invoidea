'use client';

import React, { useState } from 'react';
import { reachOutData } from '../data/ragData';

export const ReachOutSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    budget: '',
    brief: '',
    ndaCopy: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      className="footer-form-wrapper ptb position-relative"
      id="reach-out-form"
      style={{
        backgroundImage: `url(${reachOutData.bgImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="container-fluid">
        <div className="row g-lg-5 align-items-center">
          <div className="col-lg-5 mb-lg-0 mb-4">
            <h2 className="subheading">{reachOutData.badge}</h2>
            <h3 className="heading-2">{reachOutData.title}</h3>
            <p className="text-muted">{reachOutData.description}</p>

            <div className="talk-card">
              <h4>{reachOutData.talkCard.heading}</h4>
              <p>{reachOutData.talkCard.text}</p>
              <button
                type="button"
                className="btn theme-btn"
                aria-label="Talk To Experts"
                onClick={() => {
                  const input = document.getElementById('fid_742');
                  if (input) input.focus();
                }}
              >
                {reachOutData.talkCard.btnText} <span>→</span>
              </button>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-1">
            <div className="project-form">
              {submitted ? (
                <div className="text-center py-5">
                  <div className="mb-3">
                    <i
                      className="fa-solid fa-circle-check"
                      style={{ fontSize: '48px', color: '#28a745' }}
                    ></i>
                  </div>
                  <h4 className="fw-bold text-dark">Thank You!</h4>
                  <p className="text-muted">
                    Your inquiry has been submitted successfully. Our AI &amp;
                    RAG specialists will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row">
                    {/* Full Name */}
                    <div className="col-lg-6 col-md-6 col-12 mb-3">
                      <div className="form-group">
                        <label htmlFor="fid_742" className="form-label">
                          Full Name <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="fid_742"
                          placeholder="Full Name"
                          className="form-control"
                          name="full-name"
                          required
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="col-lg-6 col-md-6 col-12 mb-3">
                      <div className="form-group">
                        <label htmlFor="fid_743" className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          id="fid_743"
                          placeholder="Enter Your Email"
                          className="form-control"
                          name="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div className="col-12 mb-3">
                      <div className="form-group">
                        <label htmlFor="fid_744" className="form-label">
                          Phone Number <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          id="fid_744"
                          placeholder="Enter phone number"
                          className="form-control"
                          name="phone-number"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    {/* Budget Dropdown */}
                    <div className="col-12 mb-3">
                      <div className="form-group">
                        <label htmlFor="fid_747" className="form-label">
                          Your Budget?
                        </label>
                        <select
                          id="fid_747"
                          className="form-select"
                          name="your-budget"
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

                    {/* Project Brief */}
                    <div className="col-12 mb-3">
                      <div className="form-group">
                        <label htmlFor="fid_745" className="form-label">
                          Project Brief
                        </label>
                        <textarea
                          className="form-control"
                          rows={4}
                          placeholder="Write it here..."
                          id="fid_745"
                          name="project-brief"
                          value={formData.brief}
                          onChange={(e) =>
                            setFormData({ ...formData, brief: e.target.value })
                          }
                        ></textarea>
                      </div>
                    </div>

                    {/* NDA Checkbox */}
                    <div className="col-12 mb-3">
                      <p className="nda-text mb-2">
                        🛡 Your ideas are fully protected under our{' '}
                        <strong>Non-Disclosure Agreement.</strong>
                      </p>
                      <div className="form-check nda-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="ndaCopy"
                          name="nda_copy"
                          checked={formData.ndaCopy}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              ndaCopy: e.target.checked
                            })
                          }
                        />
                        <label className="form-check-label" htmlFor="ndaCopy">
                          Send me a copy of NDA
                        </label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="col-12 mt-2">
                      <button
                        type="submit"
                        className="btn btn-submit w-100"
                        id="submit"
                        aria-label="form-submit"
                      >
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
};

