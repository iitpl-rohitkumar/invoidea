export interface AIMenuLinkItem {
  label: string;
  href: string; // local Next.js route
  sourceUrl: string; // reference Invoidea URL
  notes?: string;
}

export interface AIMenuGroupItem {
  id: string;
  title: string;
  links: AIMenuLinkItem[];
}

export interface AIMenuColumnItem {
  id: string;
  groups: AIMenuGroupItem[];
}

export interface AISolutionsMenuData {
  title: string;
  watermarkText: string;
  iconSrc: string;
  columns: AIMenuColumnItem[];
}

export const aiSolutionsMenuData: AISolutionsMenuData = {
  title: "AI Solutions",
  watermarkText: "AI SERVICES",
  iconSrc: "/assets/menu-icon.webp",
  columns: [
    // Column 1: Core AI Services & AI Engineering
    {
      id: "col-1",
      groups: [
        {
          id: "core-ai-services",
          title: "Core AI Services",
          links: [
            {
              label: "AI Development",
              href: "/ai-development-company",
              sourceUrl: "https://invoidea.com/ai-development-company",
            },
            {
              label: "AI & ML Development",
              href: "/ai-ml-development-company",
              sourceUrl: "https://invoidea.com/ai-ml-development-company",
            },
            {
              label: "Machine Learning Development",
              href: "/machine-learning-development",
              sourceUrl: "https://invoidea.com/machine-learning-development",
            },
          ],
        },
        {
          id: "ai-engineering",
          title: "AI Engineering",
          links: [
            {
              label: "AI Software Development",
              href: "/ai-software-development-company",
              sourceUrl: "https://invoidea.com/ai-software-development-company",
            },
            {
              label: "LLM Development",
              href: "/llm-development",
              sourceUrl: "https://invoidea.com/llm-development",
            },
            {
              label: "AI Consulting",
              href: "/ai-consulting-services",
              sourceUrl: "https://invoidea.com/ai-consulting-services",
            },
          ],
        },
      ],
    },

    // Column 2: AI Products & AI-Powered Applications
    {
      id: "col-2",
      groups: [
        {
          id: "ai-products",
          title: "AI Products",
          links: [
            {
              label: "AI App Development",
              href: "/ai-app-development-company",
              sourceUrl: "https://invoidea.com/ai-app-development-company",
              notes: "Reference currently redirects to homepage",
            },
            {
              label: "AI Chatbot Development",
              href: "/ai-chatbot-development-company",
              sourceUrl: "https://invoidea.com/ai-chatbot-development-company",
            },
            {
              label: "AI Agent Development",
              href: "/ai-agent-development-company",
              sourceUrl: "https://invoidea.com/ai-agent-development-company",
            },
            {
              label: "Agentic AI",
              href: "/agentic-ai-development",
              sourceUrl: "https://invoidea.com/agentic-ai-development",
            },
          ],
        },
        {
          id: "ai-powered-applications",
          title: "AI-Powered Applications",
          links: [
            {
              label: "Healthcare Applications",
              href: "/healthcare-app-development-company",
              sourceUrl: "https://invoidea.com/healthcare-app-development-company",
            },
            {
              label: "Real Estate Applications",
              href: "/real-estate-app-development-company",
              sourceUrl: "https://invoidea.com/real-estate-app-development-company",
            },
            {
              label: "Finance & Insurance Applications",
              href: "/finance-insurance-application",
              sourceUrl: "https://invoidea.com/finance-insurance-application",
              notes: "Verified destination from official sitemap",
            },
            {
              label: "Logistics Applications",
              href: "/logistics-app-development-company",
              sourceUrl: "https://invoidea.com/logistics-app-development-company",
            },
            {
              label: "eCommerce Applications",
              href: "/ecommerce-app-development-company",
              sourceUrl: "https://invoidea.com/ecommerce-app-development-company",
            },
            {
              label: "Travel Applications",
              href: "/travel-app-development-company",
              sourceUrl: "https://invoidea.com/travel-app-development-company",
            },
          ],
        },
      ],
    },

    // Column 3: AI Business Solutions
    {
      id: "col-3",
      groups: [
        {
          id: "ai-business-solutions",
          title: "AI Business Solutions",
          links: [
            {
              label: "AI Integration",
              href: "/ai-integration-services",
              sourceUrl: "https://invoidea.com/ai-integration-services",
            },
            {
              label: "AI Automation",
              href: "/ai-automation-services",
              sourceUrl: "https://invoidea.com/ai-automation-services",
            },
            {
              label: "RAG Development",
              href: "/rag-development",
              sourceUrl: "https://invoidea.com/rag-development",
            },
          ],
        },
      ],
    },
  ],
};

