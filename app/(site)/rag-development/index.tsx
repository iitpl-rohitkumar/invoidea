import React from 'react';
import { HeroSection } from './components/HeroSection';
import { LeadingSection } from './components/LeadingSection';
import { ChallengesSection } from './components/ChallengesSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyPartnerSection } from './components/WhyPartnerSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TechStackSection } from './components/TechStackSection';
import { ProcessSection } from './components/ProcessSection';
import { IndustrySection } from './components/IndustrySection';
import { FAQSection } from './components/FAQSection';
import { ReachOutSection } from './components/ReachOutSection';
import { schemaData } from './data/ragData';
import './styles/ragDevelopment.css';

export default function RAGDevelopment() {
  return (
    <div className="rag-page-container">
      {schemaData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <HeroSection />
      <LeadingSection />
      <ChallengesSection />
      <ServicesSection />
      <WhyPartnerSection />
      <CaseStudiesSection />
      <TechStackSection />
      <ProcessSection />
      <IndustrySection />
      <FAQSection />
      <ReachOutSection />
    </div>
  );
}

