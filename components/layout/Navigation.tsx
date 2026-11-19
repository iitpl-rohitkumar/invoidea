"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AISolutionsMegaMenu from "@/components/navigation/AISolutionsMegaMenu";

interface NavigationProps {
  isSolid?: boolean;
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;
  onMenuEnter?: (menu: string) => void;
  onMenuLeave?: () => void;
  onCancelClose?: () => void;
}

export default function Navigation({
  isSolid = false,
  activeMenu,
  setActiveMenu,
  onMenuEnter,
  onMenuLeave,
  onCancelClose,
}: NavigationProps) {
  const handleEnter = (menu: string) => {
    if (onMenuEnter) onMenuEnter(menu);
    else setActiveMenu(menu);
  };

  const handleLeave = () => {
    if (onMenuLeave) onMenuLeave();
    else setActiveMenu(null);
  };

  const handleCancel = () => {
    if (onCancelClose) onCancelClose();
  };
  const [solutionTab, setSolutionTab] = useState<"app" | "enterprise">("app");

  const currentTextColor = isSolid ? "#111827" : "#ffffff";

  return (
    <nav className="menu-desk">
      <ul className="d-flex mb-0 list-unstyled align-items-center gap-4">
        {/* InvoAI */}
        <li
          className="menu-item-has-children services menu-item py-2"
          onMouseEnter={() => handleEnter("invoai")} onMouseLeave={handleLeave}
        >
          <button
            type="button"
            onClick={() => setActiveMenu(activeMenu === "invoai" ? null : "invoai")}
            aria-expanded={activeMenu === "invoai"}
            className="menulink with-arrow d-flex align-items-center gap-1 bg-transparent border-0 p-0 text-decoration-none fw-semibold"
            style={{
              color: currentTextColor,
              fontSize: "15px",
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
          >
            <span>InvoAI</span>
            <i
              className={`fa-solid fa-chevron-${activeMenu === "invoai" ? "up" : "down"} arrow-icon ms-1`}
              style={{ fontSize: "11px", transition: "transform 0.2s ease" }}
            ></i>
          </button>

          {/* InvoAI Mega Menu Dropdown */}
          <AISolutionsMegaMenu
            isOpen={activeMenu === "invoai"}
            onClose={() => setActiveMenu(null)}
            onMouseEnter={handleCancel}
            onMouseLeave={handleLeave}
          />
        </li>

        {/* Services */}
        <li
          className="menu-item-has-children services menu-item py-2"
          onMouseEnter={() => handleEnter("services")} onMouseLeave={handleLeave}
        >
          <button
            type="button"
            className="menulink with-arrow d-flex align-items-center gap-1 bg-transparent border-0 p-0 text-decoration-none fw-semibold"
            style={{
              color: currentTextColor,
              fontSize: "15px",
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
          >
            <span>Services</span>
            <i
              className={`fa-solid fa-chevron-${activeMenu === "services" ? "up" : "down"} arrow-icon ms-1`}
              style={{ fontSize: "11px", transition: "transform 0.2s ease" }}
            ></i>
          </button>

          {/* Services Mega Menu Dropdown */}
          {activeMenu === "services" && (
            <div
              className="menu-mega-fullwidth"
              style={{
                position: "absolute",
                left: 0,
                width: "100%",
                top: "100%",
                backgroundColor: "#ffffff",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
                borderTop: "1px solid #e2e8f0",
                zIndex: 9999,
                overflow: "hidden",
                animation: "fadeInMenu 0.2s ease-in-out forwards",
              }}
              onMouseEnter={() => handleEnter("services")} onMouseLeave={handleLeave}
            >
              {/* Giant Watermark Text */}
              <div
                className="menu-watermark-text"
                style={{
                  position: "absolute",
                  left: "60px",
                  top: "10px",
                  fontSize: "85px",
                  fontWeight: 900,
                  color: "rgba(11, 134, 200, 0.07)",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  userSelect: "none",
                  pointerEvents: "none",
                  lineHeight: "1",
                  fontFamily: "var(--font-heading, sans-serif)",
                }}
              >
                SERVICES
              </div>

              <div className="container py-4 position-relative" style={{ maxWidth: "1280px", zIndex: 1 }}>
                {/* Badge Header with Atom Icon */}
                <div className="tab-title d-flex align-items-center gap-2 pb-3 mb-4 border-bottom">
                  <Image
                    src="/assets/menu-icon.webp"
                    alt="Application Solution Icon"
                    width={22}
                    height={22}
                    className="img-fluid"
                  />
                  <span
                    className="menu-title fw-bold"
                    style={{ color: "#0698d6", fontSize: "19px", letterSpacing: "-0.2px" }}
                  >
                    Application Solution
                  </span>
                </div>

                {/* 3 Columns Layout matching User Image 3 */}
                <div className="row g-4 pb-3">
                  {/* Column 1: Mobile App Solutions & eCommerce Services */}
                  <div className="col-4">
                    <div className="mb-4">
                      <h5 className="fw-bold text-dark mb-2" style={{ fontSize: "15px", letterSpacing: "-0.2px" }}>
                        Mobile App Solutions
                      </h5>
                      <ul className="list-unstyled mb-0">
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/hire-android-app-developers" className="menu-sublink">
                            Android App Development
                          </Link>
                        </li>
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/hire-ios-developers" className="menu-sublink">
                            iOS App Development
                          </Link>
                        </li>
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/hybrid-app-development" className="menu-sublink">
                            Hybrid App Development
                          </Link>
                        </li>
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/cross-platform-app-development" className="menu-sublink">
                            Cross-Platform App Development
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="fw-bold text-dark mb-2" style={{ fontSize: "15px", letterSpacing: "-0.2px" }}>
                        eCommerce Services
                      </h5>
                      <ul className="list-unstyled mb-0">
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/shopify-development-services" className="menu-sublink">
                            Shopify Development
                          </Link>
                        </li>
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/woocommerce-development-company" className="menu-sublink">
                            WooCommerce Development
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 2: AI ML Development & Software Product Development */}
                  <div className="col-4">
                    <div className="mb-4">
                      <h5 className="fw-bold text-dark mb-2" style={{ fontSize: "15px", letterSpacing: "-0.2px" }}>
                        AI ML Development
                      </h5>
                      <ul className="list-unstyled mb-0">
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/ai-chatbot-development-company" className="menu-sublink">
                            AI Chatbot Development
                          </Link>
                        </li>
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/iot-app-development-company" className="menu-sublink">
                            IoT App Development
                          </Link>
                        </li>
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/generative-ai-development-company" className="menu-sublink">
                            Gen AI
                          </Link>
                        </li>
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/blockchain-development-company" className="menu-sublink">
                            Blockchain Development Company
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="fw-bold text-dark mb-2" style={{ fontSize: "15px", letterSpacing: "-0.2px" }}>
                        Software Product Development
                      </h5>
                      <ul className="list-unstyled mb-0">
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/mvp-development-company" className="menu-sublink">
                            MVP Development
                          </Link>
                        </li>
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/saas-application-development" className="menu-sublink">
                            SaaS Application
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Column 3: Web Development & Staff Augmentation Services */}
                  <div className="col-4">
                    <div className="mb-4">
                      <h5 className="fw-bold text-dark mb-2" style={{ fontSize: "15px", letterSpacing: "-0.2px" }}>
                        Web Development
                      </h5>
                      <ul className="list-unstyled mb-0">
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/web-development-services" className="menu-sublink">
                            Custom Web Application
                          </Link>
                        </li>
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/api-development-services" className="menu-sublink">
                            API Development
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h5 className="fw-bold text-dark mb-2" style={{ fontSize: "15px", letterSpacing: "-0.2px" }}>
                        Staff Augmentation Services
                      </h5>
                      <ul className="list-unstyled mb-0">
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/software-testing-services" className="menu-sublink">
                            Quality Assurance Services
                          </Link>
                        </li>
                        <li className="py-1">
                          <Link onClick={() => setActiveMenu(null)} href="/devops-consulting-services" className="menu-sublink">
                            DevOps Services
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Solutions */}
        <li
          className="menu-item-has-children services menu-item py-2"
          onMouseEnter={() => handleEnter("solutions")} onMouseLeave={handleLeave}
        >
          <button
            type="button"
            className="menulink with-arrow d-flex align-items-center gap-1 bg-transparent border-0 p-0 text-decoration-none fw-semibold"
            style={{
              color: currentTextColor,
              fontSize: "15px",
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
          >
            <span>Solutions</span>
            <i
              className={`fa-solid fa-chevron-${activeMenu === "solutions" ? "up" : "down"} arrow-icon ms-1`}
              style={{ fontSize: "11px", transition: "transform 0.2s ease" }}
            ></i>
          </button>

          {/* Solutions Mega Menu */}
          {activeMenu === "solutions" && (
            <div
              className="menu-mega-fullwidth"
              style={{
                position: "absolute",
                left: 0,
                width: "100%",
                top: "100%",
                backgroundColor: "#ffffff",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
                borderTop: "1px solid #e2e8f0",
                zIndex: 9999,
                overflow: "hidden",
                animation: "fadeInMenu 0.2s ease-in-out forwards",
              }}
              onMouseEnter={() => handleEnter("solutions")} onMouseLeave={handleLeave}
            >
              <div
                className="menu-watermark-text"
                style={{
                  position: "absolute",
                  left: "60px",
                  top: "10px",
                  fontSize: "85px",
                  fontWeight: 900,
                  color: "rgba(11, 134, 200, 0.07)",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  userSelect: "none",
                  pointerEvents: "none",
                  lineHeight: "1",
                  fontFamily: "var(--font-heading, sans-serif)",
                }}
              >
                SOLUTIONS
              </div>

              <div className="container py-4 position-relative" style={{ maxWidth: "1280px", zIndex: 1 }}>
                <div className="row g-4">
                  {/* Left Tabs */}
                  <div className="col-3 border-end pe-4">
                    <ul className="list-unstyled mb-0 d-flex flex-column gap-2 pt-2">
                      <li>
                        <button
                          type="button"
                          onClick={() => setSolutionTab("app")}
                          className={`btn text-start w-100 py-2 px-3 fw-bold rounded-2 ${solutionTab === "app" ? "btn-primary text-white" : "btn-light text-dark"
                            }`}
                          style={{
                            backgroundColor: solutionTab === "app" ? "#0698d6" : "#f8fafc",
                            borderColor: "transparent",
                            fontSize: "15px",
                          }}
                        >
                          App Solutions
                        </button>
                      </li>
                      <li>
                        <button
                          type="button"
                          onClick={() => setSolutionTab("enterprise")}
                          className={`btn text-start w-100 py-2 px-3 fw-bold rounded-2 ${solutionTab === "enterprise" ? "btn-primary text-white" : "btn-light text-dark"
                            }`}
                          style={{
                            backgroundColor: solutionTab === "enterprise" ? "#0698d6" : "#f8fafc",
                            borderColor: "transparent",
                            fontSize: "15px",
                          }}
                        >
                          Enterprise Solutions
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Right Tab Content */}
                  <div className="col-9 ps-4">
                    <div className="tab-title d-flex align-items-center gap-2 pb-3 mb-4 border-bottom">
                      <Image
                        src="/assets/menu-icon.webp"
                        alt="Solutions Icon"
                        width={22}
                        height={22}
                        className="img-fluid"
                      />
                      <span
                        className="menu-title fw-bold"
                        style={{ color: "#0698d6", fontSize: "19px", letterSpacing: "-0.2px" }}
                      >
                        {solutionTab === "app" ? "App Solutions" : "Enterprise Solutions"}
                      </span>
                    </div>

                    {solutionTab === "app" ? (
                      <div className="row g-3">
                        {[
                          { title: "Food Delivery", desc: "Create intuitive apps for easy food search, order, and delivery.", link: "/food-delivery-app-development-company" },
                          { title: "Grocery Delivery", desc: "Build custom app for quick shopping and smooth grocery delivery.", link: "/grocery-app-development-company" },
                          { title: "Taxi Service", desc: "Travel safely with a quick, easy, and smooth taxi booking app.", link: "/taxi-booking-app-development-company" },
                          { title: "Fintech", desc: "Smart AI solutions to enhance financial services and operations.", link: "/fintech-app-development" },
                          { title: "Fitness/Gym", desc: "Achieve fitness goals with a personalized workout tracking app.", link: "/fitness-app-development-company" },
                          { title: "Astrology", desc: "Develop astrology app with horoscopes, predictions, & guidance.", link: "/astrology-website-design-company" },
                          { title: "Matrimonial Application", desc: "Build a matrimonial website that helps people find right match.", link: "/matrimonial-website-design" },
                          { title: "Dating", desc: "Develop an AI-driven dating app for a smart matching experience.", link: "/dating-app-development-company" },
                        ].map((item, idx) => (
                          <div key={idx} className="col-4">
                            <Link onClick={() => setActiveMenu(null)} href={item.link} className="text-decoration-none d-block p-2 rounded hover-light">
                              <span className="fw-bold text-dark d-block mb-1" style={{ fontSize: "14.5px" }}>
                                {item.title}
                              </span>
                              <p className="text-muted small mb-0" style={{ fontSize: "12.5px", lineHeight: "1.4" }}>
                                {item.desc}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="row g-3">
                        {[
                          { title: "HRM Solution", desc: "Simplify your HR operations with our complete HRM solution.", link: "/hr-management-system" },
                          { title: "ERP Systems", desc: "Streamline enterprise resources and workflows with custom ERP.", link: "/erp-software-development" },
                          { title: "CRM Solution", desc: "Enhance customer engagement and accelerate sales pipelines.", link: "/crm-development-services" },
                          { title: "Supply Chain", desc: "Optimize inventory and distribution tracking with modern tech.", link: "/supply-chain-solutions" },
                          { title: "Business Automation", desc: "Automate repetitive workflows and enhance operational efficiency.", link: "/business-process-automation" },
                          { title: "Cloud Enterprise Portal", desc: "Secure, scalable cloud portals connecting teams worldwide.", link: "/cloud-consulting-services" },
                        ].map((item, idx) => (
                          <div key={idx} className="col-4">
                            <Link onClick={() => setActiveMenu(null)} href={item.link} className="text-decoration-none d-block p-2 rounded hover-light">
                              <span className="fw-bold text-dark d-block mb-1" style={{ fontSize: "14.5px" }}>
                                {item.title}
                              </span>
                              <p className="text-muted small mb-0" style={{ fontSize: "12.5px", lineHeight: "1.4" }}>
                                {item.desc}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Industries */}
        <li
          className="menu-item-has-children industries menu-item py-2"
          onMouseEnter={() => handleEnter("industries")} onMouseLeave={handleLeave}
        >
          <button
            type="button"
            className="menulink with-arrow d-flex align-items-center gap-1 bg-transparent border-0 p-0 text-decoration-none fw-semibold"
            style={{
              color: currentTextColor,
              fontSize: "15px",
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
          >
            <span>Industries</span>
            <i
              className={`fa-solid fa-chevron-${activeMenu === "industries" ? "up" : "down"} arrow-icon ms-1`}
              style={{ fontSize: "11px", transition: "transform 0.2s ease" }}
            ></i>
          </button>

          {/* Industries Mega Menu */}
          {activeMenu === "industries" && (
            <div
              className="menu-mega-fullwidth"
              style={{
                position: "absolute",
                left: 0,
                width: "100%",
                top: "100%",
                backgroundColor: "#ffffff",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
                borderTop: "1px solid #e2e8f0",
                zIndex: 9999,
                overflow: "hidden",
                animation: "fadeInMenu 0.2s ease-in-out forwards",
              }}
              onMouseEnter={() => handleEnter("industries")} onMouseLeave={handleLeave}
            >
              <div
                className="menu-watermark-text"
                style={{
                  position: "absolute",
                  left: "60px",
                  top: "10px",
                  fontSize: "85px",
                  fontWeight: 900,
                  color: "rgba(11, 134, 200, 0.07)",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  userSelect: "none",
                  pointerEvents: "none",
                  lineHeight: "1",
                  fontFamily: "var(--font-heading, sans-serif)",
                }}
              >
                INDUSTRIES
              </div>

              <div className="container py-4 position-relative" style={{ maxWidth: "1280px", zIndex: 1 }}>
                <div className="tab-title d-flex align-items-center gap-2 pb-3 mb-4 border-bottom">
                  <Image
                    src="/assets/menu-icon.webp"
                    alt="Industries Icon"
                    width={22}
                    height={22}
                    className="img-fluid"
                  />
                  <span
                    className="menu-title fw-bold"
                    style={{ color: "#0698d6", fontSize: "19px", letterSpacing: "-0.2px" }}
                  >
                    Industries
                  </span>
                </div>

                <div className="row g-4">
                  {[
                    { title: "Ecommerce & Multivendor", desc: "Build a smart eCommerce platform to grow reach and brand value.", link: "/ecommerce-services" },
                    { title: "EdTech & E-Learning", desc: "Create learning platforms that engage and boost your brand.", link: "/elearning-website-design" },
                    { title: "Medical & Healthcare", desc: "Custom healthcare applications to improve care and visibility.", link: "/healthcare-web-development" },
                    { title: "Real Estate & Construction", desc: "Real estate web and apps built to attract, convert, and engage.", link: "/real-estate-web-development-services" },
                    { title: "Travel & Hospitality", desc: "Travel applications made to simplify booking for a safe journey.", link: "/travel-web-development" },
                    { title: "Utilities & On Demand", desc: "On-demand websites & apps for fast, reliable, and smart service.", link: "/on-demand-application" },
                    { title: "Media & Entertainment", desc: "Applications for streaming, media sharing, and user delight.", link: "/media-entertainment-application" },
                    { title: "Logistics & Transportation", desc: "Smart transport solutions for smooth tracking and management.", link: "/logistics-web-development" },
                  ].map((ind, i) => (
                    <div key={i} className="col-3">
                      <Link onClick={() => setActiveMenu(null)} href={ind.link} className="text-decoration-none d-block p-2 rounded hover-light">
                        <span className="fw-bold text-dark d-block mb-1" style={{ fontSize: "15px" }}>
                          {ind.title}
                        </span>
                        <p className="text-muted small mb-0" style={{ fontSize: "12.5px", lineHeight: "1.4" }}>
                          {ind.desc}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </li>

        {/* Insights */}
        <li
          className="menu-item-has-children about-us menu-item py-2"
          onMouseEnter={() => handleEnter("insights")} onMouseLeave={handleLeave}
        >
          <button
            type="button"
            className="menulink with-arrow d-flex align-items-center gap-1 bg-transparent border-0 p-0 text-decoration-none fw-semibold"
            style={{
              color: currentTextColor,
              fontSize: "15px",
              cursor: "pointer",
              transition: "color 0.2s ease",
            }}
          >
            <span>Insights</span>
            <i
              className={`fa-solid fa-chevron-${activeMenu === "insights" ? "up" : "down"} arrow-icon ms-1`}
              style={{ fontSize: "11px", transition: "transform 0.2s ease" }}
            ></i>
          </button>

          {/* Insights Mega Menu */}
          {activeMenu === "insights" && (
            <div
              className="menu-mega-fullwidth"
              style={{
                position: "absolute",
                left: 0,
                width: "100%",
                top: "100%",
                backgroundColor: "#ffffff",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08)",
                borderTop: "1px solid #e2e8f0",
                zIndex: 9999,
                overflow: "hidden",
                animation: "fadeInMenu 0.2s ease-in-out forwards",
              }}
              onMouseEnter={() => handleEnter("insights")} onMouseLeave={handleLeave}
            >
              <div
                className="menu-watermark-text"
                style={{
                  position: "absolute",
                  left: "60px",
                  top: "10px",
                  fontSize: "85px",
                  fontWeight: 900,
                  color: "rgba(11, 134, 200, 0.07)",
                  textTransform: "uppercase",
                  letterSpacing: "3px",
                  userSelect: "none",
                  pointerEvents: "none",
                  lineHeight: "1",
                  fontFamily: "var(--font-heading, sans-serif)",
                }}
              >
                INSIGHTS
              </div>

              <div className="container py-4 position-relative" style={{ maxWidth: "1280px", zIndex: 1 }}>
                <div className="row g-4">
                  {/* Left Column: Nav Links */}
                  <div className="col-7 border-end pe-4">
                    <div className="tab-title d-flex align-items-center gap-2 pb-3 mb-4 border-bottom">
                      <Image
                        src="/assets/menu-icon.webp"
                        alt="Insights Icon"
                        width={22}
                        height={22}
                        className="img-fluid"
                      />
                      <span
                        className="menu-title fw-bold"
                        style={{ color: "#0698d6", fontSize: "19px", letterSpacing: "-0.2px" }}
                      >
                        Insights
                      </span>
                    </div>

                    <div className="row g-3">
                      {[
                        { title: "About Us", desc: "Discover our mission and expertise in delivering unique application, digital marketing, and design solutions.", link: "/about-us" },
                        { title: "Blogs", desc: "Follow blog for insights, tips, & trends in digital marketing and emerging software.", link: "/blog" },
                        { title: "Case Studies", desc: "See how our creative digital solutions bring quantifiable business success.", link: "/case-studies" },
                        { title: "Contact Us", desc: "Connect with us today to start your digital transformation journey.", link: "/contactus" },
                        { title: "Careers", desc: "Join our dynamic team and shape the future of digital solutions.", link: "/careers" },
                      ].map((item, idx) => (
                        <div key={idx} className="col-6">
                          <Link onClick={() => setActiveMenu(null)} href={item.link} className="text-decoration-none d-block p-2 rounded hover-light">
                            <span className="fw-bold text-dark d-block mb-1" style={{ fontSize: "15px" }}>
                              {item.title}
                            </span>
                            <p className="text-muted small mb-0" style={{ fontSize: "12px", lineHeight: "1.4" }}>
                              {item.desc}
                            </p>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Highlight Card */}
                  <div className="col-5 ps-4 d-flex flex-column justify-content-between">
                    <div className="p-4 rounded-3" style={{ backgroundColor: "#f8fafc" }}>
                      <h5 className="fw-bold text-dark mb-2" style={{ fontSize: "16px", lineHeight: "1.4" }}>
                        Trusted Worldwide for Cutting-Edge, Premium IT Solutions
                      </h5>
                      <p className="text-muted small mb-4" style={{ fontSize: "13px", lineHeight: "1.5" }}>
                        From website development to enterprise-grade apps and next-gen software systems, we create
                        world-class digital solutions for maximum impact, stability, and best user experiences.
                      </p>

                      <div className="d-flex flex-column gap-2 border-top pt-3">
                        <span className="fw-bold text-dark small">For Business:</span>
                        <a
                          href="tel:+917292050505"
                          className="d-flex align-items-center gap-2 text-decoration-none text-dark small"
                        >
                          <Image src="/assets/india.svg" alt="India" width={16} height={12} />
                          <span>+91 7292 050505</span>
                        </a>
                        <a
                          href="tel:+12054650505"
                          className="d-flex align-items-center gap-2 text-decoration-none text-dark small"
                        >
                          <Image src="/assets/usa.svg" alt="USA" width={16} height={12} />
                          <span>+1 205 465 0505</span>
                        </a>
                        <a
                          href="mailto:sales@invoidea.com"
                          className="d-flex align-items-center gap-2 text-decoration-none text-primary small"
                        >
                          <i className="fa-solid fa-envelope"></i>
                          <span>sales@invoidea.com</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </li>
      </ul>

      <style jsx global>{`
        .menu-mega-fullwidth::before {
          content: "";
          position: absolute;
          top: -30px;
          left: 0;
          width: 100%;
          height: 30px;
          background: transparent;
          pointer-events: auto;
        }
        @keyframes fadeInMenu {
          from {
            opacity: 0;
            transform: translateY(-6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .menu-sublink {
          color: #475569;
          text-decoration: none;
          font-size: 14px;
          display: block;
          transition: all 0.2s ease;
        }
        .menu-sublink:hover {
          color: #0698d6 !important;
          transform: translateX(3px);
        }
        .hover-light:hover {
          background-color: #f8fafc;
        }
        .hover-light:hover span {
          color: #0698d6 !important;
        }
      `}</style>
    </nav>
  );
}
