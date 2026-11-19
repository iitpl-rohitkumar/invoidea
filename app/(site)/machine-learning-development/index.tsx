import React from "react";
import HeroSection from "./components/HeroSection";
import LeadingSection from "./components/LeadingSection";
import ServicesSection from "./components/ServicesSection";
import TechSection from "./components/TechSection";
import ProcessTimelineSection from "./components/ProcessTimelineSection";
import WhyChooseSection from "./components/WhyChooseSection";
import IndustrySection from "./components/IndustrySection";
import FAQSection from "./components/FAQSection";
import ReachOutSection from "./components/ReachOutSection";
import "./styles/mlDevelopment.css";

export default function MachineLearningDevelopment() {
  return (
    <div className="ai-and-ml-development machine-learning-development-page">
      <HeroSection />
      <LeadingSection />
      <ServicesSection />
      <TechSection />
      <ProcessTimelineSection />
      <WhyChooseSection />
      <IndustrySection />
      <FAQSection />
      <ReachOutSection />
    </div>
  );
}

