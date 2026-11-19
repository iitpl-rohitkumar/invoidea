import React from "react";
import HeroSection from "./components/HeroSection";
import LeadingSection from "./components/LeadingSection";
import ServicesSection from "./components/ServicesSection";
import FeaturesSection from "./components/FeaturesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import IndustrySection from "./components/IndustrySection";
import FAQSection from "./components/FAQSection";
import ReachOutSection from "./components/ReachOutSection";
import "./styles/aiSoftwareDevelopment.css";

export default function AISoftwareDevelopmentCompany() {
  return (
    <div className="ai-software-development-page">
      <HeroSection />
      <LeadingSection />
      <ServicesSection />
      <FeaturesSection />
      <WhyChooseSection />
      <IndustrySection />
      <FAQSection />
      <ReachOutSection />
    </div>
  );
}

