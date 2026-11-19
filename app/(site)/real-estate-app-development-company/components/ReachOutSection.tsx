import React from "react";
import ReachOutContactSection from "@/components/sections/ReachOutContactSection";

const realEstateServices = [
  { value: "real-estate-app", label: "Real Estate App Development" },
  { value: "property-portal", label: "Property Listing & Portal Solutions" },
  { value: "property-mgmt", label: "Property Management Software" },
  { value: "mls-idx", label: "MLS / IDX Integration" },
  { value: "ai-real-estate", label: "AI Valuation & Recommendation Engines" },
  { value: "virtual-tour", label: "3D Virtual Tour Integration" }
];

export default function ReachOutSection() {
  return (
    <ReachOutContactSection
      tag="REACH OUT"
      title="Partnering for Business Success - Let Our Experts Discover the Right Solutions!"
      desc="Let's get started on your real estate digital transformation journey. Submit your inquiry today and our property tech experts will be in touch with you soon."
      services={realEstateServices}
      talkTitle="Not sure where to start?"
      talkDesc="Let’s simplify it. Talk to us directly — we’re here to help."
      ctaText="Talk to us"
    />
  );
}

