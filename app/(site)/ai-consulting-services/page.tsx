import { Metadata } from "next";
import AIConsultingServices from "./index";

export const metadata: Metadata = {
  title: "Top AI Consulting Services in India | AI Strategy & Solutions",
  description:
    "Partner with InvoIdea for enterprise AI Consulting Services in India. We help businesses formulate AI strategy, build custom pipelines, and accelerate digital transformation.",
};

export default function Page() {
  return <AIConsultingServices />;
}

