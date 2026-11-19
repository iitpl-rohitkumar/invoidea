import React from "react";
import { HeroBannerSection } from "@/components/sections";

export default function HeroSection() {
  return (
    <HeroBannerSection
      tag="AI ML Development"
      title="Empower Your Business with Advanced AI and ML Technologies"
      desc="Integrate your business with advanced AI/ ML solutions to automate operations, enhance decisions, and drive growth."
      bullets={[
        "AI-Powered Solutions for Startups, SMEs & Enterprises",
        "Industry-Specific AI/ML Applications",
        "Custom AI/ML Models Tailored to Your Business",
      ]}
      ctaText="Get a Free Consultation"
      desktopImg="/assets/ai-and-ml-development-banner.webp"
      mobileImg="/assets/ai-and-ml-development-banner-mobile.webp"
    />
  );
}
