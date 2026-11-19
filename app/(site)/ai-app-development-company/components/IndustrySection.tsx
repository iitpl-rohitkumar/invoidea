import React from "react";
import { IndustriesSection } from "@/components/sections";
import { aiAppIndustriesData } from "../data/aiAppData";

export default function IndustrySection() {
  return <IndustriesSection {...aiAppIndustriesData} className="theme-bg" />;
}
