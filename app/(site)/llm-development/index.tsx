import React from "react";
import HeroSection from "./components/HeroSection";
import LeadingSection from "./components/LeadingSection";
import ServicesSection from "./components/ServicesSection";
import CapabilitiesSection from "./components/CapabilitiesSection";
import ProcessSection from "./components/ProcessSection";
import TechSection from "./components/TechSection";
import WhyChooseSection from "./components/WhyChooseSection";
import IndustrySection from "./components/IndustrySection";
import FAQSection from "./components/FAQSection";
import ReachOutSection from "./components/ReachOutSection";
import "./styles/llmDevelopment.css";

export default function LLMDevelopment() {
  return (
    <div className="llm-development-page">
      <HeroSection />
      <LeadingSection />
      <ServicesSection />
      <CapabilitiesSection />
      <ProcessSection />
      <TechSection />
      <WhyChooseSection />
      <IndustrySection />
      <FAQSection />
      <ReachOutSection />
    </div>
  );
}

