"use client";

import React from "react";

export default function MobileBottomBar() {
  return (
    <div className="bottom-section d-lg-none d-block">
      <div className="bottom-nav">
        {/* 1. Call Us */}
        <div className="bottom-nav-item">
          <div className="bottom-nav-link">
            <a
              href="tel:+917292050505"
              className="text-white"
              aria-label="Call Us"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" />
              </svg>
              <div className="fs-15">Call Us</div>
            </a>
          </div>
        </div>

        {/* 2. WhatsApp */}
        <div className="bottom-nav-item">
          <div className="bottom-nav-link">
            <a
              className="text-white"
              href="https://wa.me/917292050505/?text="
              aria-label="Chat on WhatsApp"
              rel="nofollow noopener noreferrer"
              target="_blank"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24h-.18zm-3.56 3.99c-.19 0-.42.07-.64.31-.22.25-.85.83-.85 2.02 0 1.2.87 2.35 1 2.52.12.16 1.7 2.6 4.12 3.65.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.23-.16-.49-.29-.26-.13-1.53-.76-1.77-.85-.24-.09-.42-.13-.59.13-.17.26-.68.85-.83 1.02-.15.18-.3.2-.56.07-.26-.13-1.1-.41-2.1-1.3-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.07-.13-.6-1.44-.82-1.97-.22-.53-.44-.45-.59-.46l-.51-.01z" />
              </svg>
              <div className="fs-15">WhatsApp</div>
            </a>
          </div>
        </div>

        {/* 3. Quick Inquiry */}
        <div className="bottom-nav-item">
          <div className="bottom-nav-link">
            <button
              type="button"
              className="text-white"
              data-bs-toggle="modal"
              data-bs-target="#consultation-modal"
              aria-label="Open consultation form"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              <div className="fs-15">Quick Inquiry</div>
            </button>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .bottom-section {
          display: none;
        }
        @media (max-width: 991px) {
          .bottom-section {
            display: block !important;
          }
        }
        .bottom-nav {
          display: flex;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 99999;
          will-change: transform;
          transform: translateZ(0);
          box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.35);
          height: 52px;
          background: #000000;
        }
        .bottom-nav-item {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          justify-content: center;
          text-align: center;
          color: #ffffff;
          border-right: 1px solid rgba(255, 255, 255, 0.2);
          padding: 4px 0;
          line-height: 1.2;
          height: 52px;
          font-size: 13px;
        }
        .bottom-nav-item:last-child {
          border-right: none;
        }
        .bottom-nav-link a,
        .bottom-nav-link button {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-decoration: none;
          background: none;
          border: none;
          width: 100%;
          height: 100%;
          padding: 0;
          cursor: pointer;
          font-size: 11px;
          gap: 2px;
        }
        .bottom-nav-link a:hover,
        .bottom-nav-link button:hover {
          color: #faae1c;
        }
        .bottom-nav-link svg,
        .bottom-nav-link i {
          margin-bottom: 2px;
        }
        .bottom-nav-link .fs-15 {
          font-size: 11.5px;
          font-weight: 500;
          letter-spacing: 0.2px;
        }
      `}</style>
    </div>
  );
}

