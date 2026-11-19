import React from "react";
import HealthcareAppDevelopmentCompany from "./index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare App Development Company in India | AI Healthcare Apps",
  description:
    "Invoidea is a leading healthcare app development company in India, building secure, HIPAA-compliant telemedicine, EHR, and custom digital health applications.",
  alternates: {
    canonical: "https://invoidea.com/healthcare-app-development-company",
  },
  openGraph: {
    title: "Healthcare App Development Company in India | AI Healthcare Apps",
    description:
      "Invoidea is a leading healthcare app development company in India, building secure, HIPAA-compliant telemedicine, EHR, and custom digital health applications.",
    url: "https://invoidea.com/healthcare-app-development-company",
    type: "website",
  },
};

export default function HealthcareAppDevelopmentCompanyPage() {
  return <HealthcareAppDevelopmentCompany />;
}

