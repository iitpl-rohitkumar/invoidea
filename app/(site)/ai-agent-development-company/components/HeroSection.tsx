import React from "react";
import { agentHeroData } from "../data/agentData";
import { HeroBannerSection } from "@/components/sections";

export default function HeroSection() {
  return (
    <HeroBannerSection
      tag={agentHeroData.tag}
      title={agentHeroData.title}
      desc={agentHeroData.desc}
      ctaText={agentHeroData.ctaText}
      bannerBg={agentHeroData.bannerBg}
    />
  );
}
