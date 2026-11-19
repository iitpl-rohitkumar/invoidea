import React from "react";
import HeroSlider from "./components/HeroSlider";
import ClientSlider from "./components/ClientSlider";
import AboutSection from "./components/AboutSection";
import ServiceSection from "./components/ServiceSection";
import PortfolioSection from "./components/PortfolioSection";
import FeatureSection from "./components/FeatureSection";
import CtaPremiumSection from "./components/CtaPremiumSection";
import IndustriesSection from "./components/IndustriesSection";
import TechnologySection from "./components/TechnologySection";
import ProcessSection from "./components/ProcessSection";
import RecognitionSection from "./components/RecognitionSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FAQSection from "./components/FAQSection";
import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import "./styles/homepage.css";

export default function Homepage() {
  return (
    <div className="homepage-root">
      <HeroSlider />
      <ClientSlider />
      <AboutSection />
      <ServiceSection />
      <PortfolioSection />
      <FeatureSection />
      <CtaPremiumSection />
      <IndustriesSection />
      <TechnologySection />
      <ProcessSection />
      <RecognitionSection />
      <TestimonialsSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
