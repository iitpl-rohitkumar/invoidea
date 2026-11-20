export interface AccordionServiceItem {
  id: string;
  num: string;
  title: string;
  shortText: string;
  fullText: string;
}

export interface WhyChooseItem {
  num: string;
  title: string;
  desc: string;
}

export interface ProcessStepItem {
  title: string;
  desc: string;
  svgPath: string; // or specific SVG structure
}

export interface IndustryItem {
  title: string;
  desc: string;
  icon?: string;
  isSvg?: boolean;
}

export interface FAQItem {
  question: string;
  answerHtml: string;
  bullets?: string[];
  footerHtml?: string;
}

export const aiIntegrationHeroData = {
  tag: "Expert AI Integration Services",
  title: "Building Connected Systems for Better Performance",
  desc: "Powering your Enterprise with seamless integration that drives smarter decisions and faster growth.",
  ctaText: "Get a Free Consultation",
  desktopImg: "/assets/ai-integration-service-banner.webp",
  mobileImg: "/assets/ai-and-ml-development-banner-mobile.webp",
};

export const aiIntegrationLeadingData = {
  tag: "Top AI Integration Company",
  title: "Turn Data into Action with Powerful Integration",
  paragraphs: [
    "Invoidea combines your current systems with the suitable integration solutions to make that a practical, sustainable, outcome truly connected to what your business hopes to achieve. Our integration solutions provide scalable, future proof solutions that extend beyond implementation. We create integrated services which flex with your evolving business requirements, deliver operational efficiencies, and provide ongoing value — enabling your enterprise to grow, innovate, and maintain a competitive edge in an ever-changing digital world.",
    "Whether you're trying to extract more value from your enterprise platforms, infuse forecasting capability into your business practices, or eliminate the manual drudgery that is silently sapping your team's time and focus, we address every engagement with the same focus — to deliver something that works, not just something that reads well in a slide deck.",
  ],
  imgSrc: "/assets/integration-ai-service.webp",
  imgAlt: "AI Integration Services",
};

export const aiIntegrationServicesData = {
  tag: "Artificial Intelligence Integration Services",
  title: "AI Integration Services Built for Real Business Impact",
  intro:
    "We take the time to understand your environment before we suggest anything, because the right integration for one business is rarely the right integration for another, and the last thing you need is a solution that creates new problems while solving old ones.",
  imgSrc: "/assets/ai-integration-services-img.webp",
  items: [
    {
      id: "ai-api",
      num: "01",
      title: "AI API Integration",
      shortText:
        "We connect third-party APIs — including OpenAI, Gemini, Claude, and purpose-built custom models ..",
      fullText:
        "We connect third-party APIs — including OpenAI, Gemini, Claude, and purpose-built custom models — directly into your existing software and products, extending what your platforms can do without requiring you to rebuild the infrastructure you have already invested in building.",
    },
    {
      id: "crm-erp",
      num: "02",
      title: "CRM & ERP Integration",
      shortText:
        "Our AI Integration Services embed intelligent functionality into your CRM and ERP platforms...",
      fullText:
        "Our AI Integration Services embed intelligent functionality into your CRM and ERP platforms. This enhances how your teams manage customer relationships and improves the accuracy and usefulness of reporting. It also brings genuine predictive capability to forecasting processes that currently rely heavily on historical data and manual judgment.",
    },
    {
      id: "chatbot",
      num: "03",
      title: "Chatbot & Conversational Interface Integration",
      shortText:
        "Our chatbot Integration Services handle routine interactions at scale and reduce response ...",
      fullText:
        "Our chatbot Integration Services handle routine interactions at scale and reduce response times that enable your team to focus on work that genuinely requires human involvement.",
    },
    {
      id: "legacy",
      num: "04",
      title: "Legacy System Modernisation",
      shortText:
        "We layer modern functionality onto established architecture, delivering meaningful ...",
      fullText:
        "We layer modern functionality onto established architecture, delivering meaningful performance, scalability and efficiency improvements without the cost, risk or disruption of a full system rebuild.",
    },
    {
      id: "analytics",
      num: "05",
      title: "Analytics & Reporting Integration",
      shortText:
        "Our AI development company integrates predictive analytics and more intelligent reporting...",
      fullText:
        "Our AI development company integrates predictive analytics and more intelligent reporting directly into the dashboards and business intelligence tools your teams already use every day.",
    },
    {
      id: "workflow-platform",
      num: "06",
      title: "Workflow & Platform Integration",
      shortText:
        "We connect models and tools into your operational software, internal workflows, SaaS platforms ...",
      fullText:
        "We connect models and tools into your operational software, internal workflows, SaaS platforms, and business applications, eliminating the manual handoffs.",
    },
    {
      id: "iot",
      num: "07",
      title: "IoT Systems Integration",
      shortText:
        "Our AI Integration Services bridge your connected devices with your wider business platforms...",
      fullText:
        "Our AI Integration Services bridge your connected devices with your wider business platforms so the data they generate becomes operationally useful rather than sitting in isolation.",
    },
    {
      id: "generative",
      num: "08",
      title: "Generative Capability Integration",
      shortText:
        "We embedded content and output generation into existing products in a way that adds real ...",
      fullText:
        "We embedded content and output generation into existing products in a way that adds real capability without disrupting the user experience you have already built.",
    },
    {
      id: "workflow",
      num: "09",
      title: "Workflow Integration",
      shortText:
        "We deploy automated process handlers within your operational environment to handle complex ...",
      fullText:
        "We deploy automated process handlers within your operational environment to handle complex, repeating workflows that currently consume disproportionate amounts of your team's time.",
    },
  ],
};

export const aiIntegrationWhyChooseData = {
  tag: "AI Integration Services Provider",
  title: "Why Do Businesses Choose Invoidea as Their Integration Partner?",
  intro:
    "We have built our reputation on doing technical work properly, communicating honestly about what is realistic and focusing on long-term business needs — not just short-term delivery.",
  imgSrc: "/assets/why-ai-integration-services-img.webp",
  imgAlt: "AI Integration Services",
  items: [
    {
      num: "01",
      title: "Cross-Platform Compatibility",
      desc: "Our integration solutions work seamlessly across websites, mobile apps, CRM, ERP systems, SaaS tools, and enterprise platforms.",
    },
    {
      num: "02",
      title: "Scalable Integration Architecture",
      desc: "We build every system with future growth in mind. Your integration scales with your business and never becomes a technical limitation as requirements evolve.",
    },
    {
      num: "03",
      title: "Advanced Integration for Enterprise Ecosystems",
      desc: "Enterprise systems involve complex dependencies, high data volumes and multiple integrations. Our team handles this level of engineering complexity with strong experience.",
    },
    {
      num: "04",
      title: "Accelerated Deployment with Cloud-Native Architecture",
      desc: "We use cloud-native architecture to speed up deployment and deliver value faster without compromising stability performance or long-term maintainability.",
    },
    {
      num: "05",
      title: "Secure Compliance-Driven Deployments",
      desc: "Security and compliance are built into every solution from the beginning. We follow industry standards and align with your governance requirements from day one.",
    },
    {
      num: "06",
      title: "End-to-End Project Transparency",
      desc: "We keep you informed at every stage with clear milestones and structured reporting. You always have full visibility into progress and system performance.",
    },
    {
      num: "07",
      title: "Expert Team",
      desc: "Our team brings hands-on experience in integration and complex deployments. You work with experts who have solved similar challenges before.",
    },
    {
      num: "08",
      title: "Responsible Development Practice",
      desc: "We follow responsible development principles in every project. Each solution is built with accountability and ensures safety and business readiness.",
    },
  ],
};

export const aiIntegrationProcessData = {
  tag: "AI Integration Solution Process",
  title: "How Do We Work?",
  intro:
    "We follow a structured goal-driven approach to integration. Our process aligns with your business needs and systems to deliver reliable long-term value without unnecessary complexity.",
  bannerBg: "/assets/Why-Businesses-Choose-AI-and-ML-Banner.webp",
  steps: [
    {
      title: "Infrastructure Assessment",
      desc: "We analyze your systems infrastructure and integration points. This helps identify gaps inefficiencies and opportunities for improvement.",
      id: "step-1",
    },
    {
      title: "Integration Planning",
      desc: "We create a clear tailored roadmap based on your goals. We select tools and define an approach aligned with your team and stakeholders.",
      id: "step-2",
    },
    {
      title: "Architecture Design",
      desc: "We design a scalable and future-ready system architecture. It fits your current setup and supports long-term growth without complexity.",
      id: "step-3",
    },
    {
      title: "Implementation & Testing",
      desc: "We deploy the solution and run detailed testing including real-world and edge cases. This ensures stability, accuracy and reliability before rollout.",
      id: "step-4",
    },
    {
      title: "Optimization & Ongoing Support",
      desc: "We monitor performance, fix issues and improve the system based on real usage. This ensures long-term stability and continuous value.",
      id: "step-5",
    },
  ],
};

export const aiIntegrationIndustryData = {
  tag: "Custom AI Integration",
  title: "Industry-Specific AI Integration That Delivers Real Results",
  intro:
    "We deliver tailored integration solutions for each industry. Our focus is compatibility efficiency and measurable business outcomes.",
  items: [
    {
      title: "Healthcare",
      desc: "We support clinical data processing workflow automation and patient engagement while maintaining compliance and data integrity.",
      icon: "/assets/ai-and-ml-development-Healthcare.webp",
    },
    {
      title: "Retail & E-commerce",
      desc: "Our solutions offer analytics for inventory management, personalized recommendation system and auto customer support which improves operational efficiency and customer experience.",
      icon: "/assets/ai-and-ml-development-Retail-and-Ecommerce.webp",
    },
    {
      title: "Fintech",
      desc: "We support risk assessment fraud detection and compliance while improving efficiency and financial data accuracy for institutions.",
      icon: "/assets/ai-and-ml-development-Fintech.webp",
    },
    {
      title: "EdTech",
      desc: "We improve digital learning with adaptive experiences, streamlined assessments and better student engagement across education platforms.",
      icon: "/assets/ai-and-ml-development-Education.webp",
    },
    {
      title: "Travel & Hospitality",
      desc: "We enable smart pricing reservation systems and personalized guest experiences to improve customer satisfaction and operational performance.",
      icon: "/assets/travel-and-tourism.webp",
    },
    {
      title: "Manufacturing",
      desc: "Our AI-based predictive maintenance, quality control and production efficiency solutions are intended to help you transform your business efficiency while reducing the risks associated with operations.",
      icon: "/assets/ai-and-ml-development-Manufacturing.webp",
    },
    {
      title: "Utilities & On-Demand Services",
      desc: "We streamline resource management, improve demand prediction and automate workflows for better operational efficiency and responsiveness.",
      isSvg: true,
    },
    {
      title: "Media & Entertainment",
      desc: "Our AI integrations develop intelligent content recommendation systems, advanced analytics products and metadata management solutions to improve content discovery and consumer engagement.",
      icon: "/assets/ai-and-ml-development-Media-and-Entertainment.webp",
    },
    {
      title: "Transportation & Logistics",
      desc: "Our services offer real-time tracking, route optimization and workflow automation solutions that enhance visibility, reduce delays and increase scalability.",
      icon: "/assets/ai-and-ml-development-Logistics-and-Supply-Chain.webp",
    },
  ],
};

export const aiIntegrationFAQData = {
  tag: "FAQ's",
  title: "Quick Answers For Common Questions",
  items: [
    {
      id: "faq-0",
      question: "What is AI Integration?",
      answerHtml:
        "Artificial intelligence integration refers to the integration of AI capabilities in various software systems to enhance their features, automation and decision making. This way they can increase their productivity without replacing their legacy systems.",
    },
    {
      id: "faq-1",
      question:
        "How can new capabilities be embedded into existing software?",
      intro:
        "Our AI Integration Solutions embed new capabilities using flexible, scalable integration methods that match your system architecture.",
      bullets: [
        "API-based integrations for smooth connectivity",
        "Middleware layers that bridge systems and manage data flow",
        "Custom connectors built for specific platforms and use cases",
        "Scalable architecture that fits with existing workflows",
      ],
    },
    {
      id: "faq-2",
      question: "Can this work with legacy systems?",
      intro: "Absolutely! AI integration works great even with legacy systems.",
      bullets: [
        "Our client's billing AI integration finds and uses existing integration points",
        "Work within your older systems' technical limits",
        "Skip the need for complete system replacement",
        "Add modern capabilities without breaking what's working",
      ],
    },
    {
      id: "faq-3",
      question: "How long does a typical integration project take?",
      intro:
        "Timeline depends on scope, complexity, and how many systems we're connecting.",
      bullets: [
        "Small API integrations: just a few weeks",
        "Mid-level projects: 1–3 months",
        "Enterprise integrations: several months",
        "We'll define clear timelines during planning. Every project gets carefully scoped so you know exactly what to expect — no surprises, just predictable delivery.",
      ],
    },
    {
      id: "faq-4",
      question: "Is this approach secure for enterprise businesses?",
      intro:
        "Yes! Security is baked into every AI integration project from day one.",
      bullets: [
        "Rock-solid data protection and handling practices",
        "Secure access control and authentication systems",
        "Full compliance with industry and regulatory standards",
        "Continuous monitoring and risk mitigation",
      ],
      footerHtml:
        "This means every artificial intelligence integration service isn't just powerful and scalable — it's also secure and aligned with your enterprise governance requirements.",
    },
  ],
};

export const aiIntegrationReachOutData = {
  tag: "REACH OUT",
  title:
    "Partnering for Business Success - Let Our Experts Discover the Right Solutions!",
  desc: "Let's get started on your digital transformation journey. Submit your inquiry today and our experts will be in touch with you soon.",
  talkTitle: "Not sure where to start?",
  talkDesc: "Let’s simplify it. Talk to us directly — we’re here to help.",
  ctaText: "Talk to us",
};

