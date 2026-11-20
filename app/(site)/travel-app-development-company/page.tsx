import { Metadata } from 'next';
import TravelAppDevelopmentCompany from './index';

export const metadata: Metadata = {
  title: 'Travel App Development Company in India | Invoidea',
  description:
    'Invoidea is a Trusted Custom Travel App Development Company in India building flight, hotel and tour booking apps with AI, payments and API integrations.',
  keywords: [
    'Travel App Development Company',
    'Travel App Development Company in India',
    'Custom Travel App Development',
    'Travel Mobile App Development',
    'Tour and Travel App Developers',
    'Hotel Booking App Development',
    'Flight Booking App Development',
    'Travel Portal Development'
  ],
  openGraph: {
    title: 'Travel App Development Company in India | Invoidea',
    description:
      'Invoidea is a Trusted Custom Travel App Development Company in India building flight, hotel and tour booking apps with AI, payments and API integrations.',
    url: 'https://invoidea.com/travel-app-development-company',
    type: 'website',
    images: [
      {
        url: '/assets/travel-application-development-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Travel App Development Company in India | Invoidea'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel App Development Company in India | Invoidea',
    description:
      'Invoidea is a Trusted Custom Travel App Development Company in India building flight, hotel and tour booking apps with AI, payments and API integrations.',
    images: ['/assets/travel-application-development-banner.webp']
  },
  alternates: {
    canonical: 'https://invoidea.com/travel-app-development-company'
  }
};

export default function Page() {
  return <TravelAppDevelopmentCompany />;
}

