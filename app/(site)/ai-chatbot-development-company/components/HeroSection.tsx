import React from "react";
import { chatbotHeroData } from "../data/chatbotData";
import { HeroBannerSection } from "@/components/sections";

export default function HeroSection() {
  return (
    <HeroBannerSection
      tag={chatbotHeroData.tag}
      title={chatbotHeroData.title}
      bullets={chatbotHeroData.bullets}
      ctaText={chatbotHeroData.ctaText}
      bannerBg={chatbotHeroData.bannerBg}
    />
  );
}
