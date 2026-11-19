"use client";

import React from "react";
import { AIMenuColumnItem } from "@/data/aiSolutionsMenu";
import AIMenuGroup from "./AIMenuGroup";

interface AIMenuColumnProps {
  column: AIMenuColumnItem;
  onItemClick?: () => void;
}

export default function AIMenuColumn({ column, onItemClick }: AIMenuColumnProps) {
  return (
    <div className="ai-menu-column col-12 col-md-6 col-lg-4 px-lg-4 px-3">
      {column.groups.map((group) => (
        <AIMenuGroup key={group.id} group={group} onItemClick={onItemClick} />
      ))}
    </div>
  );
}

