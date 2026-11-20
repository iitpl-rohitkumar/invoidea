import React from "react";
import HeroSection from "./components/HeroSection";
import LeadingSection from "./components/LeadingSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseSection from "./components/WhyChooseSection";
import ProcessSection from "./components/ProcessSection";
import IndustrySection from "./components/IndustrySection";
import FAQSection from "./components/FAQSection";
import ReachOutSection from "./components/ReachOutSection";
import "./styles/aiIntegrationServices.css";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "AI Integration Services",
  alternateName: "AI Integration Services - InvoIdea",
  description:
    "InvoIdea offers AI integration services in India and worldwide for CRM, ERP, chatbots, automation, and data intelligence to streamline smarter business operations.",
  url: "https://invoidea.com/ai-integration-services",
  image:
    "https://invoidea.com/service08/assets/images/background/Why-Businesses-Choose-AI-and-ML-Banner.webp",
  serviceType: "AI Integration Services",
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
      name: "What is AI Integration?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Artificial intelligence integration refers to the integration of AI capabilities in various software systems to enhance their features, automation and decision making. This way they can increase their productivity without replacing their legacy systems.",
      },
    },
    {
      "@type": "Question",
      name: "How can new capabilities be embedded into existing software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our AI Integration Solutions embed new capabilities using flexible, scalable integration methods that match your system architecture including API-based integrations, middleware layers, custom connectors, and scalable architecture.",
      },
    },
    {
      "@type": "Question",
      name: "Can this work with legacy systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely! AI integration works great even with legacy systems. We find existing integration points, work within technical limits, and skip complete system replacements.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical integration project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timeline depends on scope and complexity: small API integrations take a few weeks, mid-level projects take 1-3 months, and enterprise integrations take several months.",
      },
    },
    {
      "@type": "Question",
      name: "Is this approach secure for enterprise businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Security is baked into every AI integration project from day one, with robust data protection, secure access control, and full compliance with industry standards.",
      },
    },
  ],
};

export default function AIIntegrationServices() {
  return (
    <div className="ai-integration-page">
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

