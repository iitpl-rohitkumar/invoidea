import React from "react";
import Image from "next/image";

export default function CtaPremiumSection() {
  return (
    <section className="cta-premium">
      <div className="container">
        <div className="cta-inner">
          <div className="col-lg-7 col-md-12">
            <h2 className="subheading">LET&apos;S BUILD TOGETHER</h2>
            <h3 className="heading-2">Let&apos;s Build Smarter Digital Solutions Together</h3>
            <p className="text-muted">
              Need a new website, AI solution, mobile app, or custom software? Share your vision with us, and
              let&apos;s build something exceptional together. Let&apos;s connect and get started.
            </p>
            <div className="d-md-block d-none">
              <div className="d-flex flex-wrap gap-4 text-white align-items-start align-items-md-center mt-3">
                <div className="d-flex align-items-center gap-2">
                  <Image src="/assets/in.webp" width={24} height={16} alt="India Flag" />
                  <a href="tel:+917292050505" className="text-dark text-decoration-none fw-semibold">
                    <span>+91 7292 050505</span>
                  </a>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <Image src="/assets/us.webp" width={24} height={16} alt="USA Flag" />
                  <a href="tel:+12054650505" className="text-dark text-decoration-none fw-semibold">
                    <span>+1 205 465 0505</span>
                  </a>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <i className="fa-solid fa-envelope text-dark"></i>
                  <a href="mailto:sales@invoidea.com" className="text-dark text-decoration-none fw-semibold">
                    <span>sales@invoidea.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="cta-actions mt-4 mt-lg-0 d-flex flex-column flex-sm-row gap-3">
            <button
              type="button"
              className="btn theme-btn"
              data-bs-toggle="modal"
              data-bs-target="#consultation-modal"
              aria-label="Contact Now"
            >
              Start Your Project →
            </button>
            <a href="tel:+917292050505" className="btn cta-link">
              Talk to Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

