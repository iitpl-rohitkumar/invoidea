import React from "react";
import { agenticHeroData } from "../data/agenticData";
import { HeroBannerSection } from "@/components/sections";

export default function HeroSection() {
  return (
    <HeroBannerSection
      tag={agenticHeroData.tag}
      title={agenticHeroData.title}
      desc={agenticHeroData.desc}
      ctaText={agenticHeroData.ctaText}
      bannerBg={agenticHeroData.bannerBg}
    />
  );
}
