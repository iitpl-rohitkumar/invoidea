"use client";

import React from "react";
import { AIMenuGroupItem } from "@/data/aiSolutionsMenu";
import AIMenuLink from "./AIMenuLink";

interface AIMenuGroupProps {
  group: AIMenuGroupItem;
  onItemClick?: () => void;
}

export default function AIMenuGroup({ group, onItemClick }: AIMenuGroupProps) {
  return (
    <div className="ai-menu-group mb-4">
      <h5
        className="ai-group-heading"
        style={{
          color: "#30343A",
          fontSize: "19px",
          fontWeight: 600,
          lineHeight: "26px",
          marginBottom: "12px",
          marginTop: 0,
          fontFamily: "var(--font-heading, Mulish, sans-serif)",
          letterSpacing: "-0.2px",
        }}
      >
        {group.title}
      </h5>
      <ul className="ai-group-links list-unstyled p-0 m-0">
        {group.links.map((link) => (
          <AIMenuLink key={link.href} item={link} onItemClick={onItemClick} />
        ))}
      </ul>
    </div>
  );
}

