import React from "react";
import { aiAppHeroData } from "../data/aiAppData";
import { HeroBannerSection } from "@/components/sections";

export default function HeroSection() {
  return (
    <HeroBannerSection
      tag={aiAppHeroData.tag}
      title={aiAppHeroData.title}
      desc={aiAppHeroData.desc}
      ctaText={aiAppHeroData.ctaText}
      bannerBg={aiAppHeroData.bannerBg}
    />
  );
}
