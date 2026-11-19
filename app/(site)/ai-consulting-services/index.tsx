import React from "react";
import HeroSection from "./components/HeroSection";
import LeadingSection from "./components/LeadingSection";
import ServicesSection from "./components/ServicesSection";
import SolutionsSection from "./components/SolutionsSection";
import TechTabsSection from "./components/TechTabsSection";
import ProcessSection from "./components/ProcessSection";
import WhyChooseSection from "./components/WhyChooseSection";
import IndustrySection from "./components/IndustrySection";
import FAQSection from "./components/FAQSection";
import ReachOutSection from "./components/ReachOutSection";
import "./styles/aiConsultingServices.css";

export default function AIConsultingServices() {
  return (
    <div className="ai-consulting-services-page">
      <HeroSection />
      <LeadingSection />
      <ServicesSection />
      <SolutionsSection />
      <TechTabsSection />
      <ProcessSection />
      <WhyChooseSection />
      <IndustrySection />
      <FAQSection />
      <ReachOutSection />
    </div>
  );
}

