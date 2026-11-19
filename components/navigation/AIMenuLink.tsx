"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AIMenuLinkItem } from "@/data/aiSolutionsMenu";

interface AIMenuLinkProps {
  item: AIMenuLinkItem;
  onItemClick?: () => void;
}

export default function AIMenuLink({ item, onItemClick }: AIMenuLinkProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li className="ai-menu-item-wrapper" style={{ listStyle: "none", margin: 0, padding: 0 }}>
      <Link
        href={item.href}
        onClick={onItemClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="ai-menu-link d-flex align-items-center"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          color: isHovered ? "#009FE3" : "#53647E",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "22px",
          padding: "5px 0",
          textDecoration: "none",
          transform: isHovered ? "translateX(3px)" : "translateX(0)",
          transition: "all 200ms ease",
          fontFamily: "var(--font-heading, Mulish, sans-serif)",
          cursor: "pointer",
        }}
        title={item.notes ? `${item.label} (${item.notes})` : item.label}
      >
        <i
          className="fa-solid fa-angle-right"
          style={{
            fontSize: "11px",
            color: "#009FE3",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateX(0)" : "translateX(-3px)",
            transition: "opacity 200ms ease, transform 200ms ease",
            marginTop: "1px",
            width: isHovered ? "10px" : "0px",
            overflow: "hidden",
            display: "inline-block",
          }}
          aria-hidden="true"
        />
        <span>{item.label}</span>
      </Link>
    </li>
  );
}
