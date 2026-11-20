import { Metadata } from "next";
import AIAutomationServices from "./index";

export const metadata: Metadata = {
  title: "Ai Automation Services in India | Ai Automation Experts",
  description:
    "Get best AI automation services by InvoIdea, an expert AI automation company delivers smart, scalable solutions to streamline workflows, and grow business.",
  keywords: [
    "AI Automation Services",
    "AI Automation Company",
    "AI Automation in India",
    "Workflow Automation Solutions",
    "CRM and Sales Automation",
    "Robotic Process Automation",
    "Enterprise Process Automation",
  ],
  openGraph: {
    title: "Ai Automation Services in India | Ai Automation Experts",
    description:
      "Get best AI automation services by InvoIdea, an expert AI automation company delivers smart, scalable solutions to streamline workflows, and grow business.",
    url: "https://invoidea.com/ai-automation-services",
    type: "website",
    images: [
      {
        url: "/assets/Why-Businesses-Choose-AI-and-ML-Banner.webp",
        width: 1200,
        height: 630,
        alt: "Ai Automation Services in India | Ai Automation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ai Automation Services in India | Ai Automation Experts",
    description:
      "Get best AI automation services by InvoIdea, an expert AI automation company delivers smart, scalable solutions to streamline workflows, and grow business.",
  },
  alternates: {
    canonical: "https://invoidea.com/ai-automation-services",
  },
};

export default function Page() {
  return <AIAutomationServices />;
}

