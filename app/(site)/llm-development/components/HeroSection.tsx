import React from "react";
import { llmHeroData } from "../data/llmData";
import { HeroBannerSection } from "@/components/sections";

export default function HeroSection() {
  return (
    <HeroBannerSection
      tag={llmHeroData.tag}
      title={llmHeroData.title}
      desc={llmHeroData.desc}
      ctaText={llmHeroData.ctaText}
      bannerBg={llmHeroData.bannerBg}
    />
  );
}
