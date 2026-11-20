import { Metadata } from "next";
import AIIntegrationServices from "./index";

export const metadata: Metadata = {
  title: "Best AI Integration Services for Enterprises | InvoIdea",
  description:
    "InvoIdea offers AI integration services in India and worldwide for CRM, ERP, chatbots, automation, and data intelligence to streamline smarter business operations.",
  keywords: [
    "AI Integration Services",
    "AI Integration Company",
    "Enterprise AI Integration",
    "AI API Integration",
    "CRM AI Integration",
    "ERP AI Integration",
    "Legacy AI Modernization",
  ],
  openGraph: {
    title: "Best AI Integration Services for Enterprises | InvoIdea",
    description:
      "InvoIdea offers AI integration services in India and worldwide for CRM, ERP, chatbots, automation, and data intelligence to streamline smarter business operations.",
    url: "https://invoidea.com/ai-integration-services",
    type: "website",
    images: [
      {
        url: "/assets/Why-Businesses-Choose-AI-and-ML-Banner.webp",
        width: 1200,
        height: 630,
        alt: "Best AI Integration Services for Enterprises | InvoIdea",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best AI Integration Services for Enterprises | InvoIdea",
    description:
      "InvoIdea offers AI integration services in India and worldwide for CRM, ERP, chatbots, automation, and data intelligence to streamline smarter business operations.",
  },
  alternates: {
    canonical: "https://invoidea.com/ai-integration-services",
  },
};

export default function Page() {
  return <AIIntegrationServices />;
}

