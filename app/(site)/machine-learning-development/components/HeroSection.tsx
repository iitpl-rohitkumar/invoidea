import React from "react";
import { mlHeroData } from "../data/mlData";
import { HeroBannerSection } from "@/components/sections";

export default function HeroSection() {
  return (
    <HeroBannerSection
      tag={mlHeroData.tag}
      title={mlHeroData.title}
      desc={mlHeroData.desc}
      ctaText={mlHeroData.ctaText}
      desktopImg={mlHeroData.bannerImg}
    />
  );
}
