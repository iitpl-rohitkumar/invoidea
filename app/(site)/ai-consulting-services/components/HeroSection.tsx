import React from "react";
import { consultingHeroData } from "../data/consultingData";
import { HeroBannerSection } from "@/components/sections";

export default function HeroSection() {
  return (
    <HeroBannerSection
      tag={consultingHeroData.tag}
      title={consultingHeroData.title}
      desc={consultingHeroData.desc}
      ctaText={consultingHeroData.ctaText}
      bannerBg={consultingHeroData.bannerBg}
    />
  );
}
