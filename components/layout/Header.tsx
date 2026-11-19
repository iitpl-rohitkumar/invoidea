"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import RightSidebarDrawer from "./RightSidebarDrawer";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Automatically close menus and drawers whenever user redirects or route changes
  useEffect(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveMenu(null);
    setIsMobileMenuOpen(false);
    setIsDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuEnter = (menuName: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    setActiveMenu(menuName);
  };

  const handleMenuLeave = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
    }
    closeTimerRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200); // 200ms grace period so moving to sub-menu never closes prematurely
  };

  const cancelCloseTimer = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const isSolid = isSticky || activeMenu !== null || isHovered;

  return (
    <>
      <header
        className={`main-header ${isSticky ? "is-stuck" : "sc-up"} ${isSolid ? "is-solid" : ""}`}
        onMouseEnter={() => {
          cancelCloseTimer();
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
          handleMenuLeave();
        }}
        style={{
          position: isSticky ? "fixed" : "absolute",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
          transition: "all 0.3s ease",
        }}
      >
        {/* Topbar: Black background */}
        <div
          className="d-lg-block d-none topbar-wrapper"
          style={{
            backgroundColor: "#000000",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            padding: "8px 0",
            fontSize: "13px",
            color: "#ffffff",
          }}
        >
          <div className="container-fluid ">
            <div className="d-flex justify-content-between align-items-center">
              {/* Contact info left */}
              <div className="contact-info text-[14px] d-flex align-items-center gap-4 mb-0">
                <div className="contact-item d-flex align-items-center gap-2">
                  <a
                    href="tel:+44 77 8223 0505"
                    className="d-flex align-items-center gap-1 text-decoration-none text-white hover-opacity"
                  >
                    <Image src="/assets/uk.svg" alt="UK Flag" width={18} height={12} className="img-fluid" />
                    <span>+44 77 8223 0505</span>
                  </a>
                </div>
                <div className="contact-item d-flex align-items-center gap-2">
                  <a
                    href="tel:+1 205 465 0505"
                    className="d-flex align-items-center gap-1 text-decoration-none text-white hover-opacity"
                  >
                    <Image src="/assets/usa.svg" alt="USA Flag" width={18} height={12} className="img-fluid" />
                    <span>+1 205 465 0505</span>
                  </a>
                </div>
                <div className="contact-item d-flex align-items-center gap-2">
                  <a
                    href="tel:+91 7292 050505"
                    className="d-flex align-items-center gap-1 text-decoration-none text-white hover-opacity"
                  >
                    <Image src="/assets/india.svg" alt="India Flag" width={18} height={12} className="img-fluid" />
                    <span>+91 7292 050505</span>
                  </a>
                </div>
                <div className="contact-item d-flex align-items-center gap-2">
                  <a
                    href="mailto:sales@invoidea.com"
                    className="d-flex align-items-center gap-1 text-decoration-none text-white hover-opacity"
                  >
                    <i className="fa-solid fa-envelope text-white"></i>
                    <span>sales@invoidea.com</span>
                  </a>
                </div>
              </div>

              {/* Social icons right */}
              <div className="social-links d-flex align-items-center gap-3">
                <a
                  href="https://facebook.com/invoidea"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-white hover-opacity"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com/invoidea"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-white hover-opacity"
                >
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/invoidea"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-white hover-opacity"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.instagram.com/invoidea"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-white hover-opacity"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://teams.live.com/l/invite/FEAD2xb1gQS26KZkQE"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Microsoft Teams"
                  className="hover-opacity d-flex align-items-center"
                >
                  <Image src="/assets/team-icon.webp" alt="Microsoft Teams" width={18} height={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header / Navigation Middle */}
        <div
          className="header-middle py-3"
          style={{
            backgroundColor: isSolid ? "#ffffff" : "transparent",
            boxShadow: isSolid ? "0 4px 20px rgba(0, 0, 0, 0.07)" : "none",
            transition: "background-color 0.25s ease, box-shadow 0.25s ease",
          }}
        >
          <div className="container-fluid ">
            <div className="d-flex align-items-center justify-content-between">
              {/* Logo */}
              <div className="logo-box">
                <Link href="/" className="d-inline-flex align-items-center text-decoration-none">
                  <Image
                    src="/assets/1684994854.svg"
                    alt="Invoidea"
                    width={160}
                    height={40}
                    priority
                    style={{ height: "auto", width: "155px" }}
                  />
                </Link>
              </div>

              {/* Desktop Nav */}
              <div className="d-none d-lg-block">
                <Navigation
                  isSolid={isSolid}
                  activeMenu={activeMenu}
                  setActiveMenu={setActiveMenu}
                  onMenuEnter={handleMenuEnter}
                  onMenuLeave={handleMenuLeave}
                  onCancelClose={cancelCloseTimer}
                />
              </div>

              {/* Right CTA Button & Drawer Trigger */}
              <div className="d-none d-lg-flex align-items-center gap-3">
                <button
                  type="button"
                  className="ai-btn"
                  data-drawer="inquiry"
                  onClick={() => setIsDrawerOpen(true)}
                  style={{
                    position: "relative",
                    padding: "10px 28px",
                    border: "none",
                    borderRadius: "50px",
                    background: "linear-gradient(90deg, #00b4d8 0%, #0077b6 100%)",
                    color: "#ffffff",
                    fontSize: "15px",
                    fontWeight: 700,
                    cursor: "pointer",
                    boxShadow: "0 0 25px rgba(0, 180, 216, 0.45)",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 32px rgba(0, 180, 216, 0.65)";
                    e.currentTarget.style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 0 25px rgba(0, 180, 216, 0.45)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Contact Us
                </button>
              </div>

              {/* Mobile Hamburger */}
              <div className="d-block d-lg-none">
                <button
                  type="button"
                  className="btn p-1 text-white border-0"
                  onClick={() => setIsMobileMenuOpen(true)}
                  aria-label="Open mobile menu"
                  style={{ color: isSolid ? "#111827" : "#ffffff" }}
                >
                  <i className="fa-solid fa-bars fa-lg" style={{ color: isSolid ? "#111827" : "#ffffff" }}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Right Sidebar Drawer */}
      <RightSidebarDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
