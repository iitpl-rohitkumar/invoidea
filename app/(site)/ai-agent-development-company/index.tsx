import React from "react";
import HeroSection from "./components/HeroSection";
import LeadingSection from "./components/LeadingSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import IndustrySection from "./components/IndustrySection";
import FAQSection from "./components/FAQSection";
import ReachOutSection from "./components/ReachOutSection";
import "./styles/aiAgentDevelopment.css";

export default function AIAgentDevelopmentCompany() {
  return (
    <div className="ai-agent-development-page">
      <HeroSection />
      <LeadingSection />
      <ServicesSection />
      <WhyChooseSection />
      <IndustrySection />
      <FAQSection />
      <ReachOutSection />
    </div>
  );
}

