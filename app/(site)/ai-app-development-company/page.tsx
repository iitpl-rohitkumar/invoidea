import React from "react";
import AIAppDevelopmentCompany from "./index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trusted AI App Development Company in India & Worldwide",
  description:
    "Invoidea is a trusted AI app development company in India and worldwide with years of experience, delivering scalable, secure, and business-focused AI app solutions.",
  alternates: {
    canonical: "https://invoidea.com/ai-app-development-company",
  },
  openGraph: {
    title: "Trusted AI App Development Company in India & Worldwide",
    description:
      "Invoidea is a trusted AI app development company in India and worldwide with years of experience, delivering scalable, secure, and business-focused AI app solutions.",
    url: "https://invoidea.com/ai-app-development-company",
    type: "website",
  },
};

export default function AIAppDevelopmentCompanyPage() {
  return <AIAppDevelopmentCompany />;
}

