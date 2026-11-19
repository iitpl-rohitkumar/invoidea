"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface RightSidebarDrawerProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function RightSidebarDrawer({
  isOpen: controlledIsOpen,
  onClose: controlledOnClose,
}: RightSidebarDrawerProps) {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isControlled = typeof controlledIsOpen === "boolean";
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const handleClose = () => {
    if (isControlled && controlledOnClose) {
      controlledOnClose();
    } else {
      setInternalIsOpen(false);
    }
  };

  useEffect(() => {
    const handleTriggerClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        '[data-drawer="inquiry"], .header-enq-menu, .burger-menu, .contact-modal-btn, [data-bs-target="#sidebar-modal"]'
      );
      if (target) {
        e.preventDefault();
        setInternalIsOpen(true);
      }
    };

    const handleCustomOpen = () => {
      setInternalIsOpen(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("click", handleTriggerClick);
    window.addEventListener("open-inquiry-drawer", handleCustomOpen);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleTriggerClick);
      window.removeEventListener("open-inquiry-drawer", handleCustomOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      handleClose();
      setFormData({
        name: "",
        email: "",
        countryCode: "+91",
        phone: "",
        message: "",
      });
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      className="sidebar-modal-root"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 99999,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {/* Backdrop */}
      <div
        className="sidebar-modal-backdrop"
        onClick={handleClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.72)",
          backdropFilter: "blur(3px)",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Drawer Container */}
      <div
        className="sidebar-modal-drawer"
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1100px",
          height: "100vh",
          backgroundColor: "#ffffff",
          zIndex: 100000,
          overflowY: "auto",
          boxShadow: "-12px 0 45px rgba(0, 0, 0, 0.35)",
          display: "flex",
          flexDirection: "column",
          animation: "slideInRight 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close drawer"
          style={{
            position: "absolute",
            top: "20px",
            right: "24px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            color: "#032736",
            border: "1px solid #e2e8f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "20px",
            cursor: "pointer",
            zIndex: 100010,
            boxShadow: "0 2px 10px rgba(0,0,0,0.15)",
            transition: "all 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f1f5f9")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ffffff")}
        >
          <i className="fa-solid fa-xmark"></i>
        </button>

        <div className="container-fluid p-0 flex-grow-1 d-flex">
          <div className="row g-0 w-100 min-vh-100">
            {/* Left Column: Company Info & QR codes */}
            <div
              className="col-xl-5 col-lg-5 p-4 p-md-5 d-flex flex-column justify-content-between"
              style={{ backgroundColor: "#ffffff" }}
            >
              <div>
                {/* Logo */}
                <div className="mb-4">
                  <Image
                    src="/assets/1684994854.svg"
                    alt="Invoidea"
                    width={160}
                    height={40}
                    style={{ height: "auto", width: "155px" }}
                  />
                </div>

                {/* Heading */}
                <h2
                  className="fw-bold mb-4 text-dark"
                  style={{
                    fontSize: "26px",
                    lineHeight: "1.35",
                    letterSpacing: "-0.5px",
                    color: "#0f172a",
                  }}
                >
                  Let's discuss your goals & find solutions – Reach out to us today!
                </h2>

                {/* QR Codes: Scan & Connect */}
                <div className="d-flex gap-4 mb-4">
                  <div className="text-center">
                    <a
                      href="https://wa.me/917292050505/?text="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-block"
                    >
                      <Image
                        src="/assets/whatsapp_qr_code.webp"
                        alt="WhatsApp QR Code"
                        width={130}
                        height={130}
                        className="img-fluid rounded border p-1 shadow-sm"
                      />
                    </a>
                    <p className="fw-bold text-dark mt-2 mb-0" style={{ fontSize: "13px" }}>
                      Scan & Connect
                    </p>
                  </div>

                  <div className="text-center">
                    <a
                      href="https://teams.live.com/l/invite/FEAD2xb1gQS26KZkQE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-block"
                    >
                      <Image
                        src="/assets/skype_qr_code.webp"
                        alt="Skype & Teams QR Code"
                        width={130}
                        height={130}
                        className="img-fluid rounded border p-1 shadow-sm"
                      />
                    </a>
                    <p className="fw-bold text-dark mt-2 mb-0" style={{ fontSize: "13px" }}>
                      Scan & Connect
                    </p>
                  </div>
                </div>

                {/* Mail Us */}
                <div className="mb-3">
                  <p className="fw-bold text-dark mb-1" style={{ fontSize: "15px" }}>
                    Mail Us -
                  </p>
                  <a
                    href="mailto:sales@invoidea.com"
                    className="d-flex align-items-center gap-2 text-decoration-none"
                    style={{ color: "#475569", fontSize: "15px" }}
                  >
                    <i className="fa-solid fa-envelope text-primary"></i>
                    <span>sales@invoidea.com</span>
                  </a>
                </div>

                {/* Follow Us */}
                <div className="mb-4">
                  <p className="fw-bold text-dark mb-2" style={{ fontSize: "15px" }}>
                    Follow Us -
                  </p>
                  <div className="d-flex align-items-center gap-2">
                    <a
                      href="https://youtube.com/@InvoIdea"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "34px",
                        height: "34px",
                        backgroundColor: "#ff0000",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "14px",
                      }}
                      aria-label="YouTube"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/invoidea"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "34px",
                        height: "34px",
                        backgroundColor: "#0077b5",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "14px",
                      }}
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="https://www.instagram.com/invoidea"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "34px",
                        height: "34px",
                        backgroundColor: "#e4405f",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "14px",
                      }}
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/InvoIdea"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex align-items-center justify-content-center rounded-circle"
                      style={{
                        width: "34px",
                        height: "34px",
                        backgroundColor: "#1877f2",
                        color: "#fff",
                        textDecoration: "none",
                        fontSize: "14px",
                      }}
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                </div>

                {/* Lets Meet At */}
                <div>
                  <p className="fw-bold text-dark mb-2" style={{ fontSize: "15px" }}>
                    Lets Meet At -
                  </p>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <p className="fw-bold text-dark mb-1" style={{ fontSize: "14px" }}>
                        India Office
                      </p>
                      <p className="text-muted small mb-1" style={{ fontSize: "12px", lineHeight: "1.4" }}>
                        C-127, C Block, Sector 63, Noida, Uttar Pradesh, 201301
                      </p>
                      <a
                        href="tel:+917292050505"
                        className="text-dark fw-bold text-decoration-none small d-flex align-items-center gap-1"
                      >
                        <i className="fa-solid fa-phone text-primary" style={{ fontSize: "11px" }}></i>
                        +91 7292 050505
                      </a>
                    </div>
                    <div className="col-12 col-sm-6">
                      <p className="fw-bold text-dark mb-1" style={{ fontSize: "14px" }}>
                        USA Office
                      </p>
                      <p className="text-muted small mb-1" style={{ fontSize: "12px", lineHeight: "1.4" }}>
                        15851 Dallas Parkway #1021 Addison, TX 75001
                      </p>
                      <a
                        href="tel:+12054650505"
                        className="text-dark fw-bold text-decoration-none small d-flex align-items-center gap-1"
                      >
                        <i className="fa-solid fa-phone text-primary" style={{ fontSize: "11px" }}></i>
                        +1 205 465 0505
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Cyan Blue Form */}
            <div
              className="col-xl-7 col-lg-7 p-4 p-md-5 text-white d-flex flex-column justify-content-center"
              style={{
                backgroundColor: "#29abe2",
                minHeight: "100%",
              }}
            >
              <div style={{ maxWidth: "560px", margin: "0 auto", width: "100%" }}>
                <h2
                  className="fw-bold text-white mb-2"
                  style={{
                    fontSize: "28px",
                    lineHeight: "1.3",
                    letterSpacing: "-0.5px",
                  }}
                >
                  You Are A Step Closer To Building
                  <br />
                  Your Vision Into Reality
                </h2>
                <p className="text-white-50 mb-4" style={{ fontSize: "14px" }}>
                  Fill in your details below and we will get back to you within 24 hours
                </p>

                {isSubmitted && (
                  <div
                    className="alert alert-success d-flex align-items-center gap-2 mb-4"
                    role="alert"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.95)",
                      color: "#047857",
                      border: "none",
                      borderRadius: "8px",
                      padding: "14px 18px",
                    }}
                  >
                    <i className="fa-solid fa-circle-check fs-5"></i>
                    <div>
                      <strong>Thank you!</strong> for your enquiry, we will get back to you shortly.
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Name */}
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-control"
                      style={{
                        height: "50px",
                        backgroundColor: "#ffffff",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "14px",
                        padding: "0 16px",
                        color: "#1e293b",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      }}
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-control"
                      style={{
                        height: "50px",
                        backgroundColor: "#ffffff",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "14px",
                        padding: "0 16px",
                        color: "#1e293b",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                      }}
                    />
                  </div>

                  {/* Phone with Country Code */}
                  <div className="mb-3">
                    <div className="d-flex gap-2">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                        className="form-select flex-shrink-0"
                        style={{
                          width: "145px",
                          height: "50px",
                          backgroundColor: "#ffffff",
                          border: "none",
                          borderRadius: "6px",
                          fontSize: "13.5px",
                          color: "#1e293b",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        }}
                      >
                        <option value="+91">India +91</option>
                        <option value="+1">USA / CA +1</option>
                        <option value="+44">UK +44</option>
                        <option value="+971">UAE +971</option>
                        <option value="+61">Australia +61</option>
                        <option value="+65">Singapore +65</option>
                        <option value="+49">Germany +49</option>
                        <option value="+33">France +33</option>
                        <option value="+966">Saudi Arabia +966</option>
                        <option value="+81">Japan +81</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="form-control flex-grow-1"
                        style={{
                          height: "50px",
                          backgroundColor: "#ffffff",
                          border: "none",
                          borderRadius: "6px",
                          fontSize: "14px",
                          padding: "0 16px",
                          color: "#1e293b",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-4">
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="form-control"
                      style={{
                        backgroundColor: "#ffffff",
                        border: "none",
                        borderRadius: "6px",
                        fontSize: "14px",
                        padding: "14px 16px",
                        color: "#1e293b",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                        resize: "vertical",
                      }}
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn w-100 fw-bold"
                    style={{
                      height: "52px",
                      backgroundColor: "#032736",
                      color: "#ffffff",
                      border: "none",
                      borderRadius: "6px",
                      fontSize: "16px",
                      letterSpacing: "0.3px",
                      boxShadow: "0 6px 20px rgba(0,0,0,0.2)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#021c27")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#032736")}
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

