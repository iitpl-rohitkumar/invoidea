import { Metadata } from 'next';
import RAGDevelopment from './index';

export const metadata: Metadata = {
  title: 'Best RAG Development Company in India | Custom RAG Solutions',
  description:
    'Build AI-powered RAG Solutions in India for enterprise data, documents, knowledge bases, and business workflows with accurate, context-aware responses.',
  keywords: [
    'RAG Development Company',
    'RAG Development Services',
    'Retrieval Augmented Generation India',
    'Custom RAG Solutions',
    'Enterprise AI Search',
    'Vector Database Setup',
    'AI Knowledge Base Development'
  ],
  openGraph: {
    title: 'Best RAG Development Company in India | Custom RAG Solutions',
    description:
      'Build AI-powered RAG Solutions in India for enterprise data, documents, knowledge bases, and business workflows with accurate, context-aware responses.',
    url: 'https://invoidea.com/rag-development',
    type: 'website',
    images: [
      {
        url: '/assets/rag-development-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Best RAG Development Company in India | Custom RAG Solutions'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Best RAG Development Company in India | Custom RAG Solutions',
    description:
      'Build AI-powered RAG Solutions in India for enterprise data, documents, knowledge bases, and business workflows with accurate, context-aware responses.',
    images: ['/assets/rag-development-banner.webp']
  },
  alternates: {
    canonical: 'https://invoidea.com/rag-development'
  }
};

export default function Page() {
  return <RAGDevelopment />;
}

