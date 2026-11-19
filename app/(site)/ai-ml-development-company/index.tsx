import React from "react";
import HeroSection from "./components/HeroSection";
import LeadingSection from "./components/LeadingSection";
import ServicesAccordionSection from "./components/ServicesAccordionSection";
import TechToolsSection from "./components/TechToolsSection";
import WhyBusinessesChooseSection from "./components/WhyBusinessesChooseSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ProcessTimelineSection from "./components/ProcessTimelineSection";
import MiddleBannerSection from "./components/MiddleBannerSection";
import IndustrySolutionsSection from "./components/IndustrySolutionsSection";
import FAQSection from "./components/FAQSection";
import ReachOutSection from "./components/ReachOutSection";
import "./styles/aiMlDevelopment.css";

export default function AIMLDevelopmentCompany() {
  return (
    <div className="ai-and-ml-development">
      <HeroSection />
      <LeadingSection />
      <ServicesAccordionSection />
      <TechToolsSection />
      <WhyBusinessesChooseSection />
      <WhyChooseSection />
      <ProcessTimelineSection />
      <MiddleBannerSection />
      <IndustrySolutionsSection />
      <FAQSection />
      <ReachOutSection />
    </div>
  );
}

