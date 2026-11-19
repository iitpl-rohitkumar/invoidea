import React from "react";
import { consultingIndustriesData } from "../data/consultingData";
import { IndustriesSection } from "@/components/sections";

export default function IndustrySection() {
  return (
    <IndustriesSection
      tag={consultingIndustriesData.tag}
      title={consultingIndustriesData.title}
      desc={consultingIndustriesData.desc}
      industries={consultingIndustriesData.items}
    />
  );
}
