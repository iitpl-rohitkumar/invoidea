import React from "react";
import { IndustriesSection } from "@/components/sections";
import { agentIndustriesData } from "../data/agentData";

export default function IndustrySection() {
  return <IndustriesSection {...agentIndustriesData} className="theme-bg" />;
}
