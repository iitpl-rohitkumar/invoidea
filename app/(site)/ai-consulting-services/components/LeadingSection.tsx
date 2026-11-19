import React from "react";
import { consultingLeadingData } from "../data/consultingData";
import { LeadingInfoSection } from "@/components/sections";

export default function LeadingSection() {
  return (
    <LeadingInfoSection
      tag={consultingLeadingData.tag}
      title={consultingLeadingData.title}
      desc={consultingLeadingData.paragraphs}
      imgSrc={consultingLeadingData.img}
      imgAlt={consultingLeadingData.title}
    />
  );
}
