"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "../data/homepageData";

export default function ServiceSection() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="services-section ptb" id="services-wrapper">
      <div className="container-fluid">
        <div className="row g-4 align-items-start">
          {/* Left Content (Sticky) */}
          <div className="col-lg-6 pe-lg-3 sticky-lg-top" style={{ top: "120px" }}>
            <h2 className="subheading-text">Advanced Digital Solutions for Business Success</h2>
            <h3 className="heading-2 mb-3">
              End-to-End AI, Software &amp; Digital Services to Build Smarter Businesses
            </h3>
            <p className="text-muted">
              We offer custom and full-cycle web design services that include intuitive design, feature-rich
              website development, AI solutions and ongoing support. Whether you want to start a new venture or
              scale your existing business globally, our web designing company in India helps create a complete
              digital ecosystem customized for your business goals. From web and mobile apps to intelligent
              AI-powered solutions, we build secure and scalable technologies that drive long-term business
              growth.
            </p>
            <div className="d-lg-block d-none">
              <div className="cta-box d-flex justify-content-between align-items-center mt-4">
                <div className="row align-items-center">
                  <div className="col-lg-4 col-md-4 col-sm-4">
                    <Image
                      src="/assets/cta-img.webp"
                      className="img-fluid"
                      alt="Invoidea end-to-end digital services"
                      width={160}
                      height={120}
                    />
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-8 offset-md-1">
                    <h2 className="mb-3 primary-color" style={{ fontSize: "22px" }}>
                      Start Your Digital Journey with Us
                    </h2>
                    <button
                      type="button"
                      className="btn theme-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#consultation-modal"
                      aria-label="Consult Experts"
                    >
                      Consult Experts
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Cards */}
          <div className="col-lg-6 ps-lg-5">
            {servicesData.map((service, index) => (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className={`service-card mb-4 position-relative ${
                  mounted ? "service-card-reveal" : ""
                } ${service.isDark ? "service-card-dark" : "service-card-light"}`}
                style={{
                  transitionDelay: `${index * 0.08}s`,
                }}
              >
                <h3 className={`fw-bold mb-2 ${service.isDark ? "text-white" : "text-black"}`}>
                  <Link
                    href={service.link}
                    className={
                      service.isDark
                        ? "text-white text-decoration-none"
                        : "text-black text-decoration-none"
                    }
                  >
                    {service.title}
                  </Link>
                </h3>
                <p className={service.isDark ? "light-text" : "dark-text"}>{service.description}</p>
                <ul className="list-unstyled mb-3">
                  {service.subServices.map((sub, sIdx) => (
                    <li key={sIdx}>
                      <Link href={sub.link} className="text-decoration-none">
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <Link href={service.link} aria-label={service.title}>
                  <button className="arrow-btn" aria-label="arrow-btn">
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </Link>
              </div>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="d-lg-none d-block col-12 mt-4">
            <div className="cta-box d-flex justify-content-between align-items-center p-4">
              <div className="row align-items-center">
                <div className="col-4">
                  <Image
                    src="/assets/cta-img.webp"
                    className="img-fluid"
                    alt="Worldwide Software consult"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="col-8">
                  <h5 className="mb-3 primary-color" style={{ fontSize: "16px" }}>
                    Let&apos;s Turn Ambitions Into Achievements Together
                  </h5>
                  <button
                    type="button"
                    className="btn theme-btn btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#consultation-modal"
                    aria-label="Consult Experts"
                  >
                    Consult Experts
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Card entrance reveal */
        .service-card-reveal {
          opacity: 0;
          transform: translateY(35px);
          transition: opacity 0.75s cubic-bezier(0.16, 1, 0.3, 1),
            transform 0.75s cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.45s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .service-card-reveal.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Card container styling */
        .service-card {
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          padding: 2.25rem 2rem;
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        /* Dark Card */
        .service-card-dark {
          background: linear-gradient(112deg, #202020 0.43%, #000000 99.57%);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .service-card-reveal.is-visible.service-card-dark:hover {
          transform: translateY(-8px);
          border-color: rgba(247, 155, 31, 0.45);
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.8),
            0 0 35px -5px rgba(247, 155, 31, 0.22);
        }

        /* Light Card */
        .service-card-light {
          background: #f3f3f3;
          border: 1px solid rgba(0, 0, 0, 0.15);
        }

        .service-card-reveal.is-visible.service-card-light:hover {
          transform: translateY(-8px);
          border-color: rgba(12, 119, 189, 0.45);
          box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.12),
            0 0 35px -5px rgba(12, 119, 189, 0.2);
        }

        /* Ambient Glow ::after */
        .service-card-dark::after {
          content: "";
          position: absolute;
          bottom: -51px;
          right: -93px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(255, 153, 0, 0.35) 0, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease;
          animation: ambientGlowOrange 6s ease-in-out infinite alternate;
        }

        .service-card-light::after {
          content: "";
          position: absolute;
          bottom: -51px;
          right: -93px;
          width: 320px;
          height: 320px;
          background: radial-gradient(circle, rgba(12, 119, 189, 0.22) 0, transparent 70%);
          filter: blur(40px);
          pointer-events: none;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s ease;
          animation: ambientGlowBlue 6s ease-in-out infinite alternate;
        }

        @keyframes ambientGlowOrange {
          0% {
            transform: scale(1) translate(0, 0);
            opacity: 0.65;
          }
          100% {
            transform: scale(1.18) translate(-15px, -15px);
            opacity: 0.95;
          }
        }

        @keyframes ambientGlowBlue {
          0% {
            transform: scale(1) translate(0, 0);
            opacity: 0.6;
          }
          100% {
            transform: scale(1.18) translate(-15px, -15px);
            opacity: 0.9;
          }
        }

        .service-card:hover::after {
          transform: scale(1.35) translate(-18px, -18px) !important;
          opacity: 1 !important;
          filter: blur(45px);
        }

        /* Title Link */
        .service-card h3 {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-card h3 :global(a) {
          transition: color 0.35s ease, transform 0.35s ease;
          display: inline-block;
        }

        .service-card:hover h3 :global(a) {
          transform: translateX(4px);
        }

        .service-card-dark:hover h3 :global(a) {
          color: #f79b1f !important;
        }

        .service-card-light:hover h3 :global(a) {
          color: #0c77bd !important;
        }

        /* Sub Services List */
        .service-card ul {
          margin-top: 1.1rem;
        }

        .service-card li {
          position: relative;
          padding-left: 1.6rem;
          margin-bottom: 0.65rem;
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
        }

        .service-card li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 3px;
          width: 15px;
          height: 15px;
          background: url("/assets/stars.webp") no-repeat center center / contain;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          display: inline-block;
        }

        .service-card li:hover {
          transform: translateX(10px);
        }

        .service-card li:hover::before {
          transform: scale(1.35) rotate(15deg);
        }

        .service-card-dark li :global(a) {
          color: rgba(255, 255, 255, 0.7);
          transition: color 0.3s ease, text-shadow 0.3s ease;
        }

        .service-card-dark li:hover :global(a) {
          color: #ffffff !important;
          text-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
        }

        .service-card-light li :global(a) {
          color: var(--dark-text);
          transition: color 0.3s ease;
        }

        .service-card-light li:hover :global(a) {
          color: var(--theme-color-1) !important;
        }

        /* Arrow Button */
        .arrow-btn {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          width: 56px;
          height: 53px;
          border-radius: 8px;
          background: transparent;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 2;
        }

        .service-card-dark .arrow-btn {
          border: 1px solid rgba(255, 255, 255, 0.4);
          color: #fff;
        }

        .service-card-light .arrow-btn {
          border: 1px solid rgba(0, 0, 0, 0.4);
          color: #000;
        }

        .arrow-btn :global(i) {
          font-size: 16px;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), color 0.3s ease;
        }

        .arrow-btn:hover {
          background: linear-gradient(135deg, #f79b1f 0%, #f16b22 100%) !important;
          border-color: transparent !important;
          transform: scale(1.12);
          box-shadow: 0 10px 25px rgba(247, 155, 31, 0.45);
        }

        .arrow-btn:hover :global(i) {
          color: #fff !important;
          transform: rotate(-45deg) scale(1.15);
        }

        /* Sticky Left CTA Box */
        .cta-box {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .cta-box:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(247, 155, 31, 0.15);
        }

        .cta-box :global(img) {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          animation: floatCta 4s ease-in-out infinite alternate;
        }

        .cta-box:hover :global(img) {
          transform: scale(1.08) translateY(-4px);
        }

        @keyframes floatCta {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-6px);
          }
        }

        .cta-box :global(.theme-btn) {
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cta-box :global(.theme-btn):hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(247, 155, 31, 0.45);
        }
      `}</style>
    </section>
  );
}
