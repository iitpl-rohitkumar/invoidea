import React from "react";
import { softwareHeroData } from "../data/softwareData";
import { HeroBannerSection } from "@/components/sections";

export default function HeroSection() {
  return (
    <HeroBannerSection
      tag={softwareHeroData.tag}
      title={softwareHeroData.title}
      desc={softwareHeroData.desc}
      ctaText={softwareHeroData.ctaText}
      bannerBg={softwareHeroData.bannerBg}
    />
  );
}
