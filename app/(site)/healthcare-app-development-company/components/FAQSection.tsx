import React from "react";
import { healthcareFAQData } from "../data/healthcareData";
import { FAQAccordionSection } from "@/components/sections";

export default function FAQSection() {
  return (
    <FAQAccordionSection
      tag={healthcareFAQData.tag}
      title={healthcareFAQData.title}
      faqs={healthcareFAQData.faqs}
    />
  );
}

