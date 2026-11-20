import React from "react";
import HeroSection from "./components/HeroSection";
import LeadingSection from "./components/LeadingSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ProcessSection from "./components/ProcessSection";
import IndustrySection from "./components/IndustrySection";
import FAQSection from "./components/FAQSection";
import ReachOutSection from "./components/ReachOutSection";
import "./styles/aiAutomationServices.css";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Automation Services",
  alternateName: "AI Automation Services - InvoIdea",
  description:
    "Get best AI automation services by InvoIdea, an expert AI automation company delivers smart, scalable solutions to streamline workflows, and grow business.",
  url: "https://invoidea.com/ai-automation-services",
  image:
    "https://invoidea.com/service08/assets/images/background/Why-Businesses-Choose-AI-and-ML-Banner.webp",
  serviceType: "AI Automation Services",
  category: "Software Development",
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "Country", name: "United States" },
  ],
  provider: {
    "@type": "Organization",
    name: "InvoIdea",
    url: "https://invoidea.com",
    logo: {
      "@type": "ImageObject",
      url: "https://asset.invoidea.com/IT0101PL//media/website_logo/1684994854.svg",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91 7292 050505",
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: "English",
      },
      {
        "@type": "ContactPoint",
        telephone: "+1 205 465 0505",
        contactType: "customer service",
        areaServed: "US",
        availableLanguage: "English",
      },
    ],
    address: [
      {
        "@type": "PostalAddress",
        streetAddress: "804, Ashok Bhawan, Nehru Place",
        addressLocality: "New Delhi",
        addressCountry: "IN",
      },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What kinds of business work can be automated?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "More than most businesses initially expect. The straightforward candidates are anything rule-based and repetitive including customer support, ticket handling, lead tracking, report generation, data entry, scheduling, approval workflows, and document processing.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my business needs automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Signs include repetitive tasks consuming team time, high communication volume causing backlogs, manual process errors, and bottlenecks across operations.",
      },
    },
    {
      "@type": "Question",
      name: "How much does automation development cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost depends on scope, number of workflows, complexity of logic, system integration requirements, and level of customization. Starting with a targeted pilot provides clear ROI before scaling up.",
      },
    },
  ],
};

export default function AIAutomationServices() {
  return (
    <div className="ai-automation-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HeroSection />
      <LeadingSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <IndustrySection />
      <FAQSection />
      <ReachOutSection />
    </div>
  );
}

