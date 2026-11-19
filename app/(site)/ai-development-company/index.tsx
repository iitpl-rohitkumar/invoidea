import React from "react";
import HeroSection from "./components/HeroSection";
import LeadingSection from "./components/LeadingSection";
import ServicesAccordionSection from "./components/ServicesAccordionSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ProcessSection from "./components/ProcessSection";
import IndustrySolutionsSection from "./components/IndustrySolutionsSection";
import FAQSection from "./components/FAQSection";
import ReachOutSection from "./components/ReachOutSection";
import "./styles/aiDevelopment.css";

export default function AIDevelopmentCompany() {
  return (
    <div className="ai-and-ml-development">
      <HeroSection />
      <LeadingSection />
      <ServicesAccordionSection />
      <WhyChooseSection />
      <ProcessSection />
      <IndustrySolutionsSection />
      <FAQSection />
      <ReachOutSection />
    </div>
  );
}

