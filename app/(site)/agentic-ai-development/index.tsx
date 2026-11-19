import React from "react";
import HeroSection from "./components/HeroSection";
import LeadingSection from "./components/LeadingSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ProcessSection from "./components/ProcessSection";
import IndustrySection from "./components/IndustrySection";
import FAQSection from "./components/FAQSection";
import ReachOutSection from "./components/ReachOutSection";
import "./styles/agenticAiDevelopment.css";

export default function AgenticAIDevelopment() {
  return (
    <div className="agentic-ai-development-page">
      <HeroSection />
      <LeadingSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <IndustrySection />
      <FAQSection />
      <ReachOutSection />
    </div>
  );
}

