import React from "react";
import { WhyChooseSplitSection } from "@/components/sections";
import { llmWhyData } from "../data/llmData";

export default function WhyChooseSection() {
  return (
    <WhyChooseSplitSection
      tag={llmWhyData.tag}
      title={llmWhyData.title}
      desc={llmWhyData.desc}
      items={llmWhyData.items}
      imgSrc="/assets/ai-development-choose.webp"
      imgAlt="LLM Development Company"
    />
  );
}
