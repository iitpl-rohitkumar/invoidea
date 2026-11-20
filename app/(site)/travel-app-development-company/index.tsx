import React from 'react';
import { HeroBanner } from './components/HeroBanner';
import { IntroSection } from './components/IntroSection';
import { SolutionBannerSection } from './components/SolutionBannerSection';
import { CoreServicesSection } from './components/CoreServicesSection';
import { TravelerAppSection } from './components/TravelerAppSection';
import { VendorAppSection } from './components/VendorAppSection';
import { AdminAppSection } from './components/AdminAppSection';
import { VisualBreakSection } from './components/VisualBreakSection';
import { AIFeaturesSection } from './components/AIFeaturesSection';
import { EndToEndSection } from './components/EndToEndSection';
import { BookingPlatformSection } from './components/BookingPlatformSection';
import { PortfolioSection } from './components/PortfolioSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { TravelNichesSection } from './components/TravelNichesSection';
import { TechStackSection } from './components/TechStackSection';
import { WiderAudienceSection } from './components/WiderAudienceSection';
import { ProcessSection } from './components/ProcessSection';
import { FAQSection } from './components/FAQSection';
import { ReachOutSection } from './components/ReachOutSection';
import { schemaData } from './data/travelData';
import './styles/travelAppDevelopment.css';

export default function TravelAppDevelopmentCompany() {
  return (
    <div className="travel-app-page">
      {schemaData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <HeroBanner />
      <IntroSection />
      <SolutionBannerSection />
      <CoreServicesSection />
      <TravelerAppSection />
      <VendorAppSection />
      <AdminAppSection />
      <VisualBreakSection />
      <AIFeaturesSection />
      <EndToEndSection />
      <BookingPlatformSection />
      <PortfolioSection />
      <WhyChooseSection />
      <TravelNichesSection />
      <TechStackSection />
      <WiderAudienceSection />
      <ProcessSection />
      <FAQSection />
      <ReachOutSection />
    </div>
  );
}

