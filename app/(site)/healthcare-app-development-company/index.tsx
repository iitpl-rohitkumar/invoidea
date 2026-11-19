import React from "react";
import HeroSection from "./components/HeroSection";
import LeadingSection from "./components/LeadingSection";
import ServicesSection from "./components/ServicesSection";
import BusinessNeedGridSection from "./components/BusinessNeedGridSection";
import CoreFeaturesTabsSection from "./components/CoreFeaturesTabsSection";
import AIFeaturesSection from "./components/AIFeaturesSection";
import TechMatrixSection from "./components/TechMatrixSection";
import ProcessSection from "./components/ProcessSection";
import WhyChooseSection from "./components/WhyChooseSection";
import FAQSection from "./components/FAQSection";
import ReachOutSection from "./components/ReachOutSection";
import "./styles/healthcareAppDevelopment.css";

export default function HealthcareAppDevelopmentCompany() {
  return (
    <div className="healthcare-app-development-page">
      <HeroSection />
      <LeadingSection />
      <ServicesSection />
      <BusinessNeedGridSection />
      <CoreFeaturesTabsSection />
      <AIFeaturesSection />
      <TechMatrixSection />
      <ProcessSection />
      <WhyChooseSection />
      <FAQSection />
      <ReachOutSection />
    </div>
  );
}

