"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { aiSolutionsMenuData } from "@/data/aiSolutionsMenu";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openSub, setOpenSub] = useState<string | null>(null);

  const toggleSub = (menu: string) => {
    setOpenSub(openSub === menu ? null : menu);
  };

  if (!isOpen) return null;

  return (
    <div
      className="mobile-drawer-wrapper"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: 99999,
        display: "flex",
        justifyContent: "flex-end", // right side drawer
        animation: "fadeInBackdrop 0.25s ease",
      }}
    >
      <div
        className="mobile-drawer-inner"
        style={{
          width: "88%",
          maxWidth: "380px",
          height: "100%",
          backgroundColor: "#ffffff",
          display: "flex",
          flexDirection: "column",
          boxShadow: "-8px 0 30px rgba(0, 0, 0, 0.3)",
          overflowY: "auto",
          animation: "slideInRightMobile 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Drawer Header */}
        <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
          <Link href="/" onClick={onClose} className="d-inline-block">
            <Image
              src="/assets/1684994854.svg"
              alt="Invoidea"
              width={140}
              height={36}
              style={{ height: "auto", width: "135px" }}
            />
          </Link>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
            aria-label="Close menu"
            style={{ fontSize: "14px" }}
          ></button>
        </div>

        {/* Menu Items */}
        <div className="p-3 flex-grow-1">
          <ul className="list-unstyled mb-0">
            {/* InvoAI */}
            <li className="border-bottom py-2">
              <div
                className="d-flex justify-content-between align-items-center cursor-pointer fw-semibold text-dark py-1"
                onClick={() => toggleSub("invoai")}
                style={{ cursor: "pointer", fontSize: "15px" }}
              >
                <span className="d-flex align-items-center gap-2">
                  <Image
                    src={aiSolutionsMenuData.iconSrc}
                    alt=""
                    width={18}
                    height={18}
                    style={{ objectFit: "contain" }}
                  />
                  <span>InvoAI</span>
                </span>
                <i
                  className={`fa-solid fa-chevron-${openSub === "invoai" ? "up" : "down"} text-muted small`}
                  style={{ fontSize: "12px" }}
                ></i>
              </div>
              {openSub === "invoai" && (
                <div className="ps-2 pt-2 pb-1" style={{ animation: "fadeInMenu 0.2s ease" }}>
                  {aiSolutionsMenuData.columns.flatMap((col) => col.groups).map((group) => (
                    <div key={group.id} className="mb-3">
                      <p
                        className="fw-bold mb-1"
                        style={{
                          color: "#30343A",
                          fontSize: "14px",
                          letterSpacing: "-0.2px",
                          borderLeft: "2px solid #009FE3",
                          paddingLeft: "8px",
                        }}
                      >
                        {group.title}
                      </p>
                      <ul className="list-unstyled mb-0 ps-2">
                        {group.links.map((link) => (
                          <li key={link.href} className="py-1">
                            <Link
                              href={link.href}
                              onClick={onClose}
                              className="d-flex align-items-center gap-1 text-decoration-none"
                              style={{
                                color: "#53647E",
                                fontSize: "13.5px",
                                transition: "color 0.2s ease",
                              }}
                            >
                              <i
                                className="fa-solid fa-chevron-right"
                                style={{ fontSize: "9px", color: "#009FE3", opacity: 0.7 }}
                              ></i>
                              <span>{link.label}</span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>

            {/* Services */}
            <li className="border-bottom py-2">
              <div
                className="d-flex justify-content-between align-items-center cursor-pointer fw-semibold text-dark py-1"
                onClick={() => toggleSub("services")}
                style={{ cursor: "pointer", fontSize: "15px" }}
              >
                <span>Services</span>
                <i
                  className={`fa-solid fa-chevron-${openSub === "services" ? "up" : "down"} text-muted small`}
                  style={{ fontSize: "12px" }}
                ></i>
              </div>
              {openSub === "services" && (
                <div className="ps-3 pt-2 pb-1">
                  <p className="fw-bold text-primary small mb-1">Mobile App Solutions</p>
                  <ul className="list-unstyled small mb-2">
                    <li className="py-1">
                      <Link href="/hire-android-app-developers" onClick={onClose} className="text-secondary text-decoration-none">
                        Android App Development
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/hire-ios-developers" onClick={onClose} className="text-secondary text-decoration-none">
                        iOS App Development
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/hybrid-app-development" onClick={onClose} className="text-secondary text-decoration-none">
                        Hybrid App Development
                      </Link>
                    </li>
                  </ul>
                  <p className="fw-bold text-primary small mb-1">Web & Software</p>
                  <ul className="list-unstyled small mb-2">
                    <li className="py-1">
                      <Link href="/web-development-services" onClick={onClose} className="text-secondary text-decoration-none">
                        Custom Web Application
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/mvp-development-company" onClick={onClose} className="text-secondary text-decoration-none">
                        MVP Development
                      </Link>
                    </li>
                    <li className="py-1">
                      <Link href="/shopify-development-services" onClick={onClose} className="text-secondary text-decoration-none">
                        Shopify Development
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* Solutions */}
            <li className="border-bottom py-2">
              <div
                className="d-flex justify-content-between align-items-center cursor-pointer fw-semibold text-dark py-1"
                onClick={() => toggleSub("solutions")}
                style={{ cursor: "pointer", fontSize: "15px" }}
              >
                <span>Solutions</span>
                <i
                  className={`fa-solid fa-chevron-${openSub === "solutions" ? "up" : "down"} text-muted small`}
                  style={{ fontSize: "12px" }}
                ></i>
              </div>
              {openSub === "solutions" && (
                <ul className="list-unstyled ps-3 pt-2 text-muted small mb-0">
                  <li className="py-1">
                    <Link href="/food-delivery-app-development-company" onClick={onClose} className="text-secondary text-decoration-none">
                      Food Delivery App
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href="/grocery-app-development-company" onClick={onClose} className="text-secondary text-decoration-none">
                      Grocery Delivery App
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href="/taxi-booking-app-development-company" onClick={onClose} className="text-secondary text-decoration-none">
                      Taxi Booking App
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href="/fintech-app-development" onClick={onClose} className="text-secondary text-decoration-none">
                      Fintech Solutions
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href="/fitness-app-development-company" onClick={onClose} className="text-secondary text-decoration-none">
                      Fitness & Gym App
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Industries */}
            <li className="border-bottom py-2">
              <div
                className="d-flex justify-content-between align-items-center cursor-pointer fw-semibold text-dark py-1"
                onClick={() => toggleSub("industries")}
                style={{ cursor: "pointer", fontSize: "15px" }}
              >
                <span>Industries</span>
                <i
                  className={`fa-solid fa-chevron-${openSub === "industries" ? "up" : "down"} text-muted small`}
                  style={{ fontSize: "12px" }}
                ></i>
              </div>
              {openSub === "industries" && (
                <ul className="list-unstyled ps-3 pt-2 text-muted small mb-0">
                  <li className="py-1">
                    <Link href="/ecommerce-services" onClick={onClose} className="text-secondary text-decoration-none">
                      Ecommerce & Multivendor
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href="/elearning-website-design" onClick={onClose} className="text-secondary text-decoration-none">
                      EdTech & E-Learning
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href="/healthcare-web-development" onClick={onClose} className="text-secondary text-decoration-none">
                      Medical & Healthcare
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href="/real-estate-web-development-services" onClick={onClose} className="text-secondary text-decoration-none">
                      Real Estate & Property
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Insights */}
            <li className="border-bottom py-2">
              <div
                className="d-flex justify-content-between align-items-center cursor-pointer fw-semibold text-dark py-1"
                onClick={() => toggleSub("insights")}
                style={{ cursor: "pointer", fontSize: "15px" }}
              >
                <span>Insights</span>
                <i
                  className={`fa-solid fa-chevron-${openSub === "insights" ? "up" : "down"} text-muted small`}
                  style={{ fontSize: "12px" }}
                ></i>
              </div>
              {openSub === "insights" && (
                <ul className="list-unstyled ps-3 pt-2 text-muted small mb-0">
                  <li className="py-1">
                    <Link href="/about-us" onClick={onClose} className="text-secondary text-decoration-none">
                      About Us
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href="/blog" onClick={onClose} className="text-secondary text-decoration-none">
                      Blogs
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href="/case-studies" onClick={onClose} className="text-secondary text-decoration-none">
                      Case Studies
                    </Link>
                  </li>
                  <li className="py-1">
                    <Link href="/contactus" onClick={onClose} className="text-secondary text-decoration-none">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>

          {/* CTA Button */}
          <div className="mt-4">
            <button
              type="button"
              className="btn w-100 fw-bold py-2 rounded-pill"
              style={{
                background: "linear-gradient(90deg, #00b4d8 0%, #0077b6 100%)",
                color: "#ffffff",
                boxShadow: "0 0 20px rgba(0, 180, 216, 0.4)",
              }}
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent("open-inquiry-drawer"));
              }}
            >
              Contact Us / Get Consultation
            </button>
          </div>

          {/* Contact Details */}
          <div className="mt-4 pt-3 border-top">
            <p className="fw-bold text-dark small mb-2">Direct Contact:</p>
            <div className="d-flex flex-column gap-2 small">
              <a href="tel:+917292050505" className="text-decoration-none text-muted d-flex align-items-center gap-2">
                <Image src="/assets/india.svg" alt="India" width={16} height={12} />
                +91 7292 050505
              </a>
              <a href="tel:+12054650505" className="text-decoration-none text-muted d-flex align-items-center gap-2">
                <Image src="/assets/usa.svg" alt="USA" width={16} height={12} />
                +1 205 465 0505
              </a>
              <a href="mailto:sales@invoidea.com" className="text-decoration-none text-muted d-flex align-items-center gap-2">
                <i className="fa-solid fa-envelope text-primary"></i>
                sales@invoidea.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideInRightMobile {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes fadeInBackdrop {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
