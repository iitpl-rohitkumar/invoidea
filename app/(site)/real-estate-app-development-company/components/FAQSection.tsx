import React from "react";
import FAQAccordionSection from "@/components/sections/FAQAccordionSection";
import { realEstateFAQData } from "../data/realEstateData";

export default function FAQSection() {
  return (
    <FAQAccordionSection
      tag="REAL ESTATE APP DEVELOPMENT FAQS"
      title="Answers to Your Real Estate App Development Questions"
      faqs={realEstateFAQData}
      columns={2}
    />
  );
}

