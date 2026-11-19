import React from "react";
import HeroSection from "./components/HeroSection";
import LeadingSection from "./components/LeadingSection";
import ServicesSection from "./components/ServicesSection";
import IndustryChatbotsSection from "./components/IndustryChatbotsSection";
import WhyChooseSection from "./components/WhyChooseSection";
import SmartFeaturesSection from "./components/SmartFeaturesSection";
import BenefitsSection from "./components/BenefitsSection";
import FAQSection from "./components/FAQSection";
import ReachOutSection from "./components/ReachOutSection";
import "./styles/aiChatbotDevelopment.css";

export default function AIChatbotDevelopmentCompany() {
  return (
    <div className="ai-chatbot-development-page">
      <HeroSection />
      <LeadingSection />
      <ServicesSection />
      <IndustryChatbotsSection />
      <WhyChooseSection />
      <SmartFeaturesSection />
      <BenefitsSection />
      <FAQSection />
      <ReachOutSection />
    </div>
  );
}

