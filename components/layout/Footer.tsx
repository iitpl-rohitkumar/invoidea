"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer-area">
      {/* Top Footer Section */}
      <div className="footer-top">
        <div className="container-fluid">
          <div className="row g-4 align-items-start">
            {/* 1. Left Content: Logo, Tagline, Partner Badges */}
            <div className="col-lg-4 col-md-6 col-12 left-content">
              <Link href="/" className="logo d-inline-block mb-2">
                <Image
                  src="/assets/1684994854.svg"
                  alt="InvoIdea Logo"
                  width={160}
                  height={40}
                  className="img-fluid"
                  style={{ height: "auto" }}
                />
              </Link>
              <p className="footer-tagline">Transforming idea to e-nnovation</p>

              {/* Exact 4-Partner Strip Asset */}
              <div className="footer-clients d-flex align-items-center mt-3">
                <Image
                  src="/assets/footer-partners.webp"
                  alt="Google Partner, Meta Business Partner, Google Ads, Shopify Partner"
                  width={300}
                  height={46}
                  style={{ height: "auto", maxWidth: "275px", objectFit: "contain" }}
                  priority
                  unoptimized
                />
              </div>
            </div>

            {/* 2. OUR PRESENCE */}
            <div className="col-lg-3 col-md-6 col-12 border-start border-white-2 ps-lg-4 footer-links">
              <h3 className="mb-3 f-head text-white fw-600">OUR PRESENCE</h3>
              <div className="presence-block mb-3">
                <a
                  href="https://g.page/InvoIdea?gm"
                  className="footer-link d-flex align-items-start gap-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/assets/india.svg"
                    alt="India"
                    width={18}
                    height={14}
                    style={{ marginTop: "4px", flexShrink: 0 }}
                  />
                  <span>C-127, C Block, Sector 63, Noida, Uttar Pradesh, 201301</span>
                </a>
              </div>

              <div className="presence-block">
                <div className="footer-link d-flex align-items-start gap-2">
                  <Image
                    src="/assets/usa.svg"
                    alt="USA"
                    width={18}
                    height={14}
                    style={{ marginTop: "4px", flexShrink: 0 }}
                  />
                  <span>15851 Dallas Parkway #1021 Addison, TX 75001</span>
                </div>
              </div>
            </div>

            {/* 3. FOR BUSINESS */}
            <div className="col-lg-2 col-md-6 col-6 border-start border-white-2 ps-lg-4 footer-links">
              <h3 className="mb-3 f-head text-white fw-600">FOR BUSINESS</h3>
              <ul className="list-unstyled mb-0">
                <li className="list-item mb-2">
                  <a href="tel:+917292050505" className="footer-link d-flex align-items-center gap-2">
                    <Image src="/assets/india.svg" alt="India" width={16} height={12} />
                    <span>+91 7292 050505</span>
                  </a>
                </li>
                <li className="list-item mb-2">
                  <a href="tel:+12054650505" className="footer-link d-flex align-items-center gap-2">
                    <Image src="/assets/usa.svg" alt="USA" width={16} height={12} />
                    <span>+1 20 5465 0505</span>
                  </a>
                </li>
                <li className="list-item mb-2">
                  <a href="tel:+447782230505" className="footer-link d-flex align-items-center gap-2">
                    <Image src="/assets/uk.svg" alt="UK" width={16} height={12} />
                    <span>+44 77 8223 0505</span>
                  </a>
                </li>
                <li className="list-item mb-2">
                  <a href="mailto:sales@invoidea.com" className="footer-link d-flex align-items-center gap-2">
                    <i className="fa fa-envelope" style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}></i>
                    <span>sales@invoidea.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* 4. FOR HIRING & FOLLOW US */}
            <div className="col-lg-3 col-md-6 col-6 border-start border-white-2 ps-lg-4 footer-links">
              <h3 className="mb-3 f-head text-white fw-600">FOR HIRING</h3>
              <ul className="list-unstyled mb-0">
                <li className="list-item mb-2">
                  <a href="tel:+917011505110" className="footer-link d-flex align-items-center gap-2">
                    <Image src="/assets/india.svg" alt="India" width={16} height={12} />
                    <span>+91 7011 505 110</span>
                  </a>
                </li>
                <li className="list-item mb-2">
                  <a href="mailto:career@invoidea.com" className="footer-link d-flex align-items-center gap-2">
                    <i className="fa fa-envelope" style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}></i>
                    <span>career@invoidea.com</span>
                  </a>
                </li>
              </ul>

              {/* FOLLOW US */}
              <div className="social-links-block mt-4">
                <h5 className="text-white fs-14 mb-2 fw-bold text-uppercase" style={{ letterSpacing: "0.5px" }}>
                  FOLLOW US :
                </h5>
                <div className="d-flex align-items-center gap-3">
                  <a
                    href="https://youtube.com/@InvoIdea"
                    className="social-icon-link"
                    aria-label="YouTube"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-youtube"></i>
                  </a>
                  <a
                    href="https://twitter.com/InvoideaTech"
                    className="social-icon-link"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image src="/assets/twitter-logo.svg" alt="Twitter" width={13} height={13} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/invoidea"
                    className="social-icon-link"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/invoidea"
                    className="social-icon-link"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/InvoIdea"
                    className="social-icon-link"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Footer Navigation Links */}
      <div className="footer-bottom">
        <div className="container-fluid" >
          <div className="row g-4">
            {/* 1. SERVICES */}
            <div className="footer-links col-lg-2 col-md-6 col-6">
              <h3>SERVICES</h3>
              <ul className="list-unstyled mb-0">
                <li><Link href="/mobile-app-development">Mobile App Development</Link></li>
                <li><Link href="/web-development-services">Website Development</Link></li>
                <li><Link href="/ai-ml-development-company">AI ML Development</Link></li>
                <li><Link href="/ai-chatbot-development-company">AI Chatbot Development</Link></li>
                <li><Link href="/ai-software-development-company">AI Software Development</Link></li>
                <li><Link href="/ai-automation-services">AI Automation Services</Link></li>
                <li><Link href="/ai-integration-services">AI Integration Services</Link></li>
                <li><Link href="/iot-app-development-company">IoT App Development</Link></li>
                <li><Link href="/mvp-development-company">MVP Development</Link></li>
                <li><Link href="/saas-application-development">SaaS Application Development</Link></li>
                <li><Link href="/custom-web-application-development-services">Custom Web Application</Link></li>
                <li><Link href="/devops-consulting-services">DevOps Services</Link></li>
                <li><Link href="/cloud-consulting-services">Cloud Consulting</Link></li>
              </ul>
            </div>

            {/* 2. SOLUTION */}
            <div className="footer-links col-lg-2 col-md-6 col-6">
              <h3>SOLUTION</h3>
              <ul className="list-unstyled mb-0">
                <li><Link href="/crm-development-company">CRM Solution</Link></li>
                <li><Link href="/custom-erp-software-development">ERP Solution</Link></li>
                <li><Link href="/elearning-app-development-company">LMS Solution</Link></li>
                <li><Link href="/hr-management-system">HRM Solution</Link></li>
              </ul>
            </div>

            {/* 3. QUICK LINK */}
            <div className="footer-links col-lg-2 col-md-6 col-6">
              <h3>QUICK LINK</h3>
              <ul className="list-unstyled mb-0">
                <li><Link href="/industries-we-serve">Industries</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
                <li><Link href="/career">Career</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/sitemap.html">Sitemap</Link></li>
              </ul>
            </div>

            {/* 4. INDUSTRIES WE SERVE */}
            <div className="footer-links col-lg-2 col-md-6 col-6">
              <h3>INDUSTRIES WE SERVE</h3>
              <ul className="list-unstyled mb-0">
                <li><Link href="/on-demand-app-development-company">Utilities &amp; On Demand</Link></li>
                <li><Link href="/elearning-website-design">Education</Link></li>
                <li><Link href="/healthcare-web-development">Healthcare</Link></li>
                <li><Link href="/transportation-logistics-website-design">Transportation &amp; Logistics</Link></li>
                <li><Link href="/real-estate-web-development-services">Real Estate &amp; Construction</Link></li>
                <li><Link href="/travel-web-development">Travel &amp; Hospitality</Link></li>
                <li><Link href="/finance-insurance-web-development">Finance &amp; Insurance</Link></li>
                <li><Link href="/manufacturing-website-design-agency">Manufacturing</Link></li>
                <li><Link href="/media-entertainment-website-development-company">Media &amp; Entertainment</Link></li>
                <li><Link href="/ecommerce-services">Ecommerce &amp; Multivendor</Link></li>
              </ul>
            </div>

            {/* 5. EXPLORE BY LOCATION (2 Columns) */}
            <div className="footer-links col-lg-4 col-md-12 col-12">
              <h3>EXPLORE BY LOCATION</h3>
              <div className="d-flex justify-content-between align-items-start gap-4">
                <ul className="list-unstyled mb-0 footer-last-links">
                  <li><Link href="/mobile-app-development-usa">Mobile App Development in USA</Link></li>
                  <li><Link href="/mobile-app-development-company-dallas">Mobile App Development in Dallas</Link></li>
                  <li><Link href="/mobile-app-development-uk">Mobile App Development in UK</Link></li>
                  <li><Link href="/mobile-app-development-uae">Mobile App Development in UAE</Link></li>
                  <li><Link href="/mobile-app-development-company-dubai">Mobile App Development in Dubai</Link></li>
                  <li><Link href="/mobile-app-development-australia">App Development in Australia</Link></li>
                  <li><Link href="/mobile-app-development-company-in-noida">Mobile App Development in Noida</Link></li>
                </ul>
                <ul className="list-unstyled mb-0 footer-last-links">
                  <li><Link href="/mobile-app-development-company-in-delhi">Mobile App Development in Delhi</Link></li>
                  <li><Link href="/website-designing-company-in-noida">Website Design Company in Noida</Link></li>
                  <li><Link href="/web-development-company-in-noida">Web Development in Noida</Link></li>
                  <li><Link href="/web-development-company-in-delhi">Web Development in Delhi</Link></li>
                  <li><Link href="/website-designing-company-in-delhi">Website Designing in Delhi</Link></li>
                  <li><Link href="/ecommerce-development-company-in-delhi">eCommerce Development Company</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Payment Area */}
      <div className="copyright-area">
        <div className="container-fluid" >
          <div className="border-top-1 d-flex flex-column flex-md-row align-items-center justify-content-between py-3 gap-2">
            <div className="mb-md-0 mb-1">
              <ul className="d-flex gap-4 align-items-center list-unstyled mb-0">
                <li><Link href="/terms-of-service" className="legal-link">Terms of service</Link></li>
                <li><Link href="/privacy-policy" className="legal-link">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <p className="mb-0 text-white-50 small">
                Copyright© 2026 Invoidea Technologies Pvt. Ltd.
              </p>
            </div>
            <div className="footer-experience d-flex align-items-center gap-2">
              <span className="small text-white-50 me-1" style={{ fontSize: "11px", letterSpacing: "0.5px" }}>
                PAYMENTS ACCEPTED :
              </span>
              <span className="text-white fw-bold me-2" style={{ fontSize: "15px", letterSpacing: "1px", fontStyle: "italic" }}>
                VISA
              </span>
              <span className="text-white fw-bold" style={{ fontSize: "15px" }}>
                PayPal
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed WhatsApp Action Button (Right Bottom Corner) */}
      <div className="inquiry-btn">
        <a
          href="https://wa.me/917292050505/?text="
          aria-label="Chat on WhatsApp"
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="#ffffff" aria-hidden="true">
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24h-.18zm-3.56 3.99c-.19 0-.42.07-.64.31-.22.25-.85.83-.85 2.02 0 1.2.87 2.35 1 2.52.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.23-.16-.49-.29-.26-.13-1.53-.76-1.77-.85-.24-.09-.42-.13-.59.13-.17.26-.68.85-.83 1.02-.15.18-.3.2-.56.07-.26-.13-1.1-.41-2.1-1.3-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.6-1.44-.82-1.97-.22-.53-.44-.45-.59-.46l-.51-.01z"/>
          </svg>
        </a>
      </div>

      <style jsx global>{`
        .footer-area {
          position: relative;
          background: #000000;
          padding-top: 50px;
          color: #9ca3af;
        }
        .footer-tagline {
          color: rgba(255, 255, 255, 0.8);
          font-size: 15px;
          margin-bottom: 18px;
        }
        .border-white-2 {
          border-color: rgba(255, 255, 255, 0.1) !important;
        }
        .footer-links h3,
        .f-head {
          font-size: 14px;
          font-weight: 700;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 18px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .footer-links ul li {
          margin-top: 5px;
        }
        .footer-links ul li a,
        .footer-link {
          color: rgba(255, 255, 255, 0.65);
          font-size: 13px;
          font-weight: 300;
          line-height: 22px;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-links ul li a:hover,
        .footer-link:hover {
          color: #faae1c;
        }
        .footer-last-links {
          flex: 1;
        }
        .social-icon-link {
          color: #ffffff;
          font-size: 16px;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .social-icon-link:hover {
          color: #faae1c;
          transform: translateY(-2px);
        }
        .border-top-1 {
          border-top: 1px solid #1e1d28;
        }
        .footer-area .footer-bottom {
          padding-top: 25px;
          padding-bottom: 25px;
        }
        .footer-area .footer-bottom .row {
          border-top: 1px solid #1e1d28;
          padding-top: 34px;
        }
        .legal-link {
          color: rgba(255, 255, 255, 0.65);
          font-size: 13px;
          text-decoration: none;
        }
        .legal-link:hover {
          color: #faae1c;
        }

        /* Fixed WhatsApp Button in Bottom Right */
        .inquiry-btn {
          position: fixed !important;
          right: 25px !important;
          bottom: 25px !important;
          width: 55px !important;
          height: 55px !important;
          border-radius: 50% !important;
          background-color: #10b418 !important;
          box-shadow: 0 8px 16px rgba(16, 180, 24, 0.5) !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          z-index: 99999 !important;
          cursor: pointer !important;
          animation: pulseWhatsAppBtn 1.8s infinite !important;
          transition: transform 0.2s ease !important;
        }
        .inquiry-btn:hover {
          transform: scale(1.08) !important;
        }
        .inquiry-btn a {
          width: 100% !important;
          height: 100% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          text-decoration: none !important;
        }
        @media (max-width: 991px) {
          .inquiry-btn {
            display: none !important;
          }
        }
        @keyframes pulseWhatsAppBtn {
          0% {
            box-shadow: 0 0 0 0 rgba(16, 180, 24, 0.7), 0 8px 16px rgba(16, 180, 24, 0.5);
          }
          70% {
            box-shadow: 0 0 0 16px rgba(16, 180, 24, 0), 0 8px 16px rgba(16, 180, 24, 0.5);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(16, 180, 24, 0), 0 8px 16px rgba(16, 180, 24, 0.5);
          }
        }
      `}</style>
    </footer>
  );
}
