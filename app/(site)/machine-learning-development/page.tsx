import React from "react";
import MachineLearningDevelopment from "./index";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machine Learning Development Company in India | ML Solutions",
  description:
    "Invoidea is a top Machine Learning Development Company in India building predictive models, recommendation systems and AI solutions for real-world business use.",
  alternates: {
    canonical: "https://invoidea.com/machine-learning-development",
  },
  openGraph: {
    title: "Machine Learning Development Company in India | ML Solutions",
    description:
      "Invoidea is a top Machine Learning Development Company in India building predictive models, recommendation systems and AI solutions for real-world business use.",
    url: "https://invoidea.com/machine-learning-development",
    type: "website",
  },
};

export default function MachineLearningDevelopmentPage() {
  return <MachineLearningDevelopment />;
}

