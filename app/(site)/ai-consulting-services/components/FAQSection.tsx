import React from "react";
import { consultingFAQData } from "../data/consultingData";
import { FAQAccordionSection } from "@/components/sections";

export default function FAQSection() {
  return (
    <FAQAccordionSection
      tag={consultingFAQData.tag}
      title={consultingFAQData.title}
      faqs={consultingFAQData.items}
    />
  );
}
