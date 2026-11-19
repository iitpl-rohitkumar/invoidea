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
import "./styles/realEstateAppDevelopment.css";

export default function RealEstateAppDevelopmentPage() {
  return (
    <div className="real-estate-page">
      {/* 1. Hero Banner + Form + Stats */}
      <HeroSection />

      {/* 2. Leading Intro Section */}
      <LeadingSection />

      {/* 3. Full-Suite Services Section */}
      <ServicesSection />

      {/* 4. Common Grid: Business Models */}
      <BusinessNeedGridSection />

      {/* 5. Core Features Tabs */}
      <CoreFeaturesTabsSection />

      {/* 6. AI-Powered Clinical / Property Features */}
      <AIFeaturesSection />

      {/* 7. Technology Matrix Section */}
      <TechMatrixSection />

      {/* 8. Development Process Steps */}
      <ProcessSection />

      {/* 9. Why Choose Us Section */}
      <WhyChooseSection />

      {/* 10. Frequently Asked Questions */}
      <FAQSection />

      {/* 11. Reach Out Contact Form */}
      <ReachOutSection />
    </div>
  );
}

