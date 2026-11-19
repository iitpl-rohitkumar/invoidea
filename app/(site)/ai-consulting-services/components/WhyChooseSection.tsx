import React from "react";
import { consultingApartData } from "../data/consultingData";
import { WhyChooseSplitSection } from "@/components/sections";

export default function WhyChooseSection() {
  return (
    <WhyChooseSplitSection
      tag={consultingApartData.tag}
      title={consultingApartData.title}
      desc={consultingApartData.desc}
      items={consultingApartData.items}
      imgSrc="/assets/aI-consulting-solution.webp"
      imgAlt="AI Consulting Company in India"
    />
  );
}
