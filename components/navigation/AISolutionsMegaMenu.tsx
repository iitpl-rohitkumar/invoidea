"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { aiSolutionsMenuData } from "@/data/aiSolutionsMenu";
import AIMenuColumn from "./AIMenuColumn";

interface AISolutionsMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export default function AISolutionsMegaMenu({
  isOpen,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: AISolutionsMegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className="ai-solutions-mega-menu-wrapper"
      role="region"
      aria-label="AI Solutions Mega Menu"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        position: "absolute",
        left: 0,
        top: "100%",
        width: "100%",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 15px 35px rgba(0, 0, 0, 0.08), 0 4px 6px -1px rgba(0, 0, 0, 0.04)",
        borderTop: "1px solid #D9DEE5",
        zIndex: 9999,
        overflow: "hidden",
        animation: "aiMegaMenuSlideDown 250ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
      }}
    >
      {/* Oversized Background Watermark Text */}
      <div
        className="ai-menu-watermark-text"
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "80px",
          top: "12px",
          fontSize: "96px",
          fontWeight: 900,
          textTransform: "uppercase",
          letterSpacing: "2px",
          userSelect: "none",
          pointerEvents: "none",
          lineHeight: 1,
          fontFamily: "var(--font-heading, Mulish, sans-serif)",
          background: "linear-gradient(180deg, rgba(11, 134, 200, 0.16) 16.76%, rgba(255, 255, 255, 0) 87.78%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          zIndex: 0,
        }}
      >
        {aiSolutionsMenuData.watermarkText}
      </div>

      <div
        className="container position-relative"
        style={{
          maxWidth: "1320px",
          padding: "28px 24px 40px",
          zIndex: 1,
        }}
      >
        {/* Title Header with Icon and Divider */}
        <div
          className="ai-menu-header d-flex align-items-center gap-2 pb-3 mb-4"
          style={{
            borderBottom: "1px solid #D9DEE5",
          }}
        >
          <div className="d-flex align-items-center" style={{ width: "22px", height: "22px" }}>
            <Image
              src={aiSolutionsMenuData.iconSrc}
              alt=""
              width={22}
              height={22}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          <h4
            className="m-0 fw-semibold"
            style={{
              color: "#009FE3",
              fontSize: "24px",
              lineHeight: "32px",
              fontFamily: "var(--font-heading, Mulish, sans-serif)",
              letterSpacing: "-0.2px",
            }}
          >
            {aiSolutionsMenuData.title}
          </h4>
        </div>

        {/* 3-Column Content Layout */}
        <div className="row g-4 ai-menu-content-row">
          {aiSolutionsMenuData.columns.map((column) => (
            <AIMenuColumn key={column.id} column={column} onItemClick={onClose} />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .ai-solutions-mega-menu-wrapper::before {
          content: "";
          position: absolute;
          top: -30px;
          left: 0;
          width: 100%;
          height: 30px;
          background: transparent;
          pointer-events: auto;
        }
        @keyframes aiMegaMenuSlideDown {
          0% {
            opacity: 0;
            transform: translateY(-8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
