"use client";

import { useEffect, useState } from "react";

export default function ConsultationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    ndaCopy: false,
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Intercept clicks on buttons targeting #consultation-modal or #consultation-modal-talk
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        '[data-bs-target="#consultation-modal"], [data-bs-target="#consultation-modal-talk"]'
      );
      if (target) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        ndaCopy: false,
      });
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="modal fade show custom-card-modal"
      id="consultation-modal"
      style={{
        display: "block",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        zIndex: 10500,
        overflowY: "auto",
      }}
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div
          className="modal-content"
          style={{
            background: "#121417",
            borderRadius: "16px",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#fff",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="modal-body py-5 px-4 px-md-5 position-relative">
            <button
              type="button"
              className="btn-close btn-close-white position-absolute top-0 end-0 m-4"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              style={{ filter: "invert(1)" }}
            ></button>

            <div className="form-section pb-0">
              <span className="subheading text-start d-block mb-2" style={{ color: "var(--theme-color-1)" }}>
                Let&apos;s build something great together
              </span>
              <h3 className="text-white mb-4" style={{ fontFamily: '"DM Serif Text", serif', fontSize: "28px" }}>
                Want to discuss a project?
              </h3>
            </div>

            {submitted ? (
              <div className="alert alert-success mt-4 text-center">
                Thank you! Our digital specialists will get in touch with you shortly.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form customFrom">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label text-white">
                      Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      className="form-control"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        color: "#fff",
                        borderRadius: "8px",
                        padding: "10px 14px",
                      }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white">Company</label>
                    <input
                      type="text"
                      placeholder="Your Company Name"
                      className="form-control"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        color: "#fff",
                        borderRadius: "8px",
                        padding: "10px 14px",
                      }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white">
                      Email <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      className="form-control"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        color: "#fff",
                        borderRadius: "8px",
                        padding: "10px 14px",
                      }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label text-white">
                      Phone Number <span className="text-danger">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000"
                      className="form-control"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        color: "#fff",
                        borderRadius: "8px",
                        padding: "10px 14px",
                      }}
                    />
                  </div>

                  <div className="col-12">
                    <label className="form-label text-white">Message</label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your project requirements..."
                      className="form-control"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        color: "#fff",
                        borderRadius: "8px",
                        padding: "10px 14px",
                      }}
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <div className="form-check d-flex align-items-center gap-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="modalNdaCopy"
                        checked={formData.ndaCopy}
                        onChange={(e) => setFormData({ ...formData, ndaCopy: e.target.checked })}
                      />
                      <label className="form-check-label text-white-50" htmlFor="modalNdaCopy">
                        🛡 Send me a copy of NDA (Non-Disclosure Agreement)
                      </label>
                    </div>
                  </div>

                  <div className="col-12 mt-4">
                    <button type="submit" className="btn theme-btn w-100 py-3 font-semibold">
                      Submit Request
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

