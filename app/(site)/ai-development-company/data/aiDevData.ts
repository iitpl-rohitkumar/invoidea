export interface AccordionServiceItem {
  id: string;
  title: string;
  link?: string;
  shortText: string;
  fullText: string;
}

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
}

export interface ProcessItem {
  step: string;
  title: string;
  description: string;
}

export interface IndustryItem {
  title: string;
  description: string;
  icon?: string;
  isSvg?: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  intro: string;
  bullets: string[];
}

export const servicesData: AccordionServiceItem[] = [
  {
    id: "ai-consulting",
    title: "AI Consulting",
    shortText: "We assist companies in determining the areas in which technology...",
    fullText:
      "We assist companies in determining the areas in which technology can make a real difference, by closely examining workflows, data environments, and operational challenges. Our consulting methodology emphasizes clarity and practical utility over complexity such that every recommendation is connected to business outcomes that can be measured. We also consider what is possible and scalable because the roadmap that we develop needs to be implemented effectively in your existing environment and long term business plan.",
  },
  {
    id: "ai-product-engineering",
    title: "AI Product Engineering",
    shortText: "We design and build powered products that are engineered for real world...",
    fullText:
      "We design and build powered products that are engineered for real world use and long term scalability. Every stage from system architecture and data flow design to model integration and deployment strategy is planned with production readiness in mind. Our goal is to ensure that the product not only works technically but also delivers consistent performance that handles real user behavior and supports evolving business needs without structural limitations.",
  },
  {
    id: "generative-ai-development",
    title: "Generative AI Development",
    link: "/blog/generative-ai-guide",
    shortText: "We develop advanced generative solutions that go far beyond basic ...",
    fullText:
      "We develop advanced generative solutions that go far beyond basic implementations. This includes fine tuned models retrieval of augmented content generation tools and workflow automation engines that enhance productivity across teams. Our AI development company in India focuses on building systems that understand context that generate accurate outputs and integrate smoothly into existing processes helping businesses unlock new levels of efficiency and operational capability.",
  },
  {
    id: "ai-agent-development",
    title: "AI Agent Development",
    link: "/ai-agent-development-company",
    shortText: "InvoIdea builds intelligent agents that are capable of performing tasks...",
    fullText:
      "InvoIdea builds intelligent agents that are capable of performing tasks that make decisions and interacting with systems in a controlled and reliable manner. These agents are designed with strong guardrails monitoring systems and fallback mechanisms to ensure safe deployment in production environments. The goal is to reduce manual workloads that improve decision speed and enable autonomous execution of structured business processes without compromising control or visibility.",
  },
  {
    id: "smart-assistants-chatbot",
    title: "Smart Assistants and Chatbot Development",
    link: "/ai-chatbot-development-company",
    shortText: "Our best AI developers in India design assistants and chatbots that are built...",
    fullText:
      "Our best AI developers in India design assistants and chatbots that are built around your actual business context rather than generic templates. These systems are trained on your data and workflows allowing them to understand user intent in handling complex queries and deliver accurate responses. Whether used for customer support internal operations or engagement automation our solutions are designed to improve interaction quality and reduce dependency on human intervention for repetitive tasks.",
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    link: "/ai-integration-services",
    shortText: "We provide seamless integration services that connect intelligence ...",
    fullText:
      "We provide seamless integration services that connect intelligence with your existing digital ecosystem including CRMs ERPs APIs databases and third party platforms. Our Best AI development company in India ensures that intelligence does not operate in isolation but becomes a core part of your business workflow. By enabling smooth data flow and system connectivity we help organizations unlock automation that improve decision making and enhance operational efficiency across all touchpoints.",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    shortText: "Our AI development company in India enables organizations to take a proactive...",
    fullText:
      "Our AI development company in India enables organizations to take a proactive approach to detecting threats, analyze risk signals, and reinforce their security posture in advance of vulnerability exploitation. By deploying electromagnetic-spectrum sensing with global cellular IoT coverage, we deliver real-time visibility into asset behavior and potential threats. This translates into better defense throughout the digital landscape, shorter response during events and higher resistance to ever-changing cyber risk trends.",
  },
  {
    id: "voice-agent-solutions",
    title: "Voice Agent Solutions",
    shortText: "We build advanced voice systems that can understand natural speech...",
    fullText:
      "We build advanced voice systems that can understand natural speech that manages context and respond intelligently in real time conversations. These systems are designed to handle interruptions that shifts in intent and multi turn interactions making them suitable for customer service support automation and operational communication. The focus is on creating natural reliable and efficient voice experiences that reduce human dependency while improving response quality.",
  },
  {
    id: "ai-ops",
    title: "AI Ops",
    shortText: "We help organizations bring clarity to complex IT operations by implementing ...",
    fullText:
      "We help organizations bring clarity to complex IT operations by implementing AI driven monitoring predictive analytics and automation systems. These AI development services in India improve infrastructure reliability that reduce downtime and enable faster incident response. By analyzing logs alerts and system metrics in real time these solutions help teams move from reactive troubleshooting to proactive performance management improving overall system efficiency and operational stability.",
  },
  {
    id: "ai-as-a-service",
    title: "AI as a Service",
    shortText: "We provide flexible AI development services in India that allow businesses ...",
    fullText:
      "We provide flexible AI development services in India that allow businesses to easily take advantage of advanced intelligence without heavy infrastructure investment. This approach enables customers to grow or shrink their use of the product, as needed without significant impact to cost or operations. Our intent is to deliver real-world aligned to business objectives that sit within the customer's environment and start being valuable early on without requiring excessive complexity or overhead.",
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    link: "/ai-automation-services",
    shortText: "We design intelligent automation systems that streamline repetitive ...",
    fullText:
      "We design intelligent automation systems that streamline repetitive tasks that reduce manual workload and improve operational efficiency across business functions. These solutions are built to handle structured workflows while adapting to changing business requirements over time. Our Top AI development company in India ensures that automation is not rigid but flexible and easy to maintain helping businesses achieve higher productivity with lower operational friction.",
  },
  {
    id: "agentic-ai-solutions",
    title: "Agentic AI Solutions",
    link: "/agentic-ai-development",
    shortText: "We develop autonomous systems that can execute tasks that collaborate ...",
    fullText:
      "We develop autonomous systems that can execute tasks that collaborate across workflows and make controlled decisions with minimal human intervention. These systems are built with strong oversight mechanisms in real time monitoring and safety controls to ensure reliability in production environments. The focus is on creating intelligent systems that enhance operational capability while maintaining transparency and performance consistency at scale.",
  },
];

export const whyChooseData: WhyChooseItem[] = [
  {
    number: "01",
    title: "Technical Depth with Strong Business Understanding",
    description:
      "We combine engineering with strategic thinking to deliver systems that perform in real environments and create measurable business results.",
  },
  {
    number: "02",
    title: "End-to-End Expertise",
    description:
      "We manage the full lifecycle from research to deployment and optimization ensuring consistency and accountability at every stage.",
  },
  {
    number: "03",
    title: "Business Centric Approach",
    description:
      "We ensure every technical decision aligns with real business outcomes so solutions solve actual problems and deliver measurable value.",
  },
  {
    number: "04",
    title: "Scalable Architecture",
    description:
      "We use cloud-native architecture to speed up deployment and deliver value faster without compromising stability performance or long-term maintainability.",
  },
  {
    number: "05",
    title: "Secure Compliance-Driven Deployments",
    description:
      "We design systems that scale smoothly with increasing data users and complexity without requiring costly rebuilds.",
  },
  {
    number: "06",
    title: "Cross Industry Experience",
    description:
      "We bring experience across multiple industries helping us design faster and more accurate solutions based on proven context.",
  },
  {
    number: "07",
    title: "Applied Engineering With Strategic Depth",
    description:
      "We align engineering execution with business strategy so every solution serves a clear operational purpose.",
  },
  {
    number: "08",
    title: "Context Aware Infrastructure",
    description:
      "We build systems that understand your workflows and environment to deliver more relevant and accurate outputs.",
  },
  {
    number: "09",
    title: "Advanced Responsible Modelling",
    description:
      "We create transparent and explainable systems that support compliance trust and ethical deployment.",
  },
  {
    number: "10",
    title: "Governance Supporting Policies",
    description:
      "We help organizations build governance frameworks that ensure systems remain safe and responsibly managed.",
  },
];

export const processData: ProcessItem[] = [
  {
    step: "01",
    title: "Discovery and Business Analysis",
    description:
      "We understand your business workflows data systems and success criteria to define what meaningful impact looks like before development begins.",
  },
  {
    step: "02",
    title: "Opportunity Mapping and Strategy",
    description:
      "We identify and prioritize opportunities based on business impact technical feasibility and strategic value.",
  },
  {
    step: "03",
    title: "Solution Architecture Design",
    description:
      "We design scalable system architecture that defines how data models and integrations work together for long term performance.",
  },
  {
    step: "04",
    title: "Data Preparation and Engineering",
    description:
      "We structure clean and reliable datasets from raw data ensuring strong foundations for accurate model training.",
  },
  {
    step: "05",
    title: "Model Development and Integration",
    description:
      "We build and integrate models tailored to your use case using custom training fine tuning or multi model systems.",
  },
  {
    step: "06",
    title: "Testing and Validation",
    description:
      "We test systems across accuracy performance and real world conditions to ensure reliability before deployment.",
  },
  {
    step: "07",
    title: "Deployment and Launch",
    description:
      "We manage secure and stable deployment ensuring systems perform smoothly in real production environments.",
  },
  {
    step: "08",
    title: "Continuous Support and Optimization",
    description:
      "We continuously monitor and improve systems to maintain performance as business needs evolve.",
  },
];

export const industriesData: IndustryItem[] = [
  {
    title: "EdTech",
    description:
      "We help education companies transform learning systems into adaptive platforms that improve engagement performance and outcomes",
    icon: "/assets/ai-and-ml-development-Education.webp",
  },
  {
    title: "Fintech",
    description:
      "We build systems for fraud detection credit intelligence risk analysis and faster financial decision making",
    icon: "/assets/ai-and-ml-development-Fintech.webp",
  },
  {
    title: "Utilities & On-Demand Services",
    description:
      "We improve forecasting routing dispatch and operational efficiency in dynamic demand environments",
    isSvg: true,
  },
  {
    title: "Travel & Hospitality",
    description:
      "We help optimize pricing booking recommendations and customer experience systems",
    icon: "/assets/travel-and-tourism.webp",
  },
  {
    title: "Healthcare",
    description:
      "We support clinical workflows decision support patient engagement and operational automation",
    icon: "/assets/ai-and-ml-development-Healthcare.webp",
  },
  {
    title: "Retail & E-commerce",
    description:
      "We improve recommendations inventory planning customer experience and demand forecasting",
    icon: "/assets/ai-and-ml-development-Retail-and-Ecommerce.webp",
  },
  {
    title: "Transportation and Logistics",
    description:
      "We enhance routing fleet optimization predictive maintenance and supply chain visibility.",
    icon: "/assets/ai-and-ml-development-Logistics-and-Supply-Chain.webp",
  },
  {
    title: "Manufacturing",
    description:
      "We improve production quality predictive maintenance scheduling and operational efficiency.",
    icon: "/assets/ai-and-ml-development-Manufacturing.webp",
  },
  {
    title: "Media and Entertainment",
    description:
      "We support content personalization audience insights moderation and content creation workflows.",
    icon: "/assets/ai-and-ml-development-Media-and-Entertainment.webp",
  },
];

export const faqData: FAQItem[] = [
  {
    id: "faq_0",
    question: "How do I know if my business needs AI development?",
    intro:
      "If your business works with large data repetitive processes or complex decision making then AI can improve efficiency and speed of operations.",
    bullets: [
      "Large data handling becomes slow and difficult without automation",
      "Repetitive tasks take up valuable employee time every day",
      "Decisions depend on reports patterns or manual analysis",
      "Existing processes feel limited when business needs to scale",
    ],
  },
  {
    id: "faq_1",
    question: "What type of AI development services in India is right for my business use case?",
    intro:
      "The best AI development services in India depends on your specific business goal whether it is automation forecasting customer interaction or improving product capabilities",
    bullets: [
      "Automation systems reduce manual work and speed up processes.",
      "Forecasting tools help predict demand trends and outcomes.",
      "Customer engagement tools improve support and communication.",
      "Product AI adds smarter features and better user experience.",
    ],
  },
  {
    id: "faq_2",
    question: "Do I need technical knowledge before starting?",
    intro:
      "No. Technical background is required because the entire process is managed in a simple and guided way from start to finish",
    bullets: [
      "No coding or technical skills are needed",
      "Everything is explained in clear business language",
      "Step by step guidance is provided throughout the project",
      "Focus remains only on your business needs and goals",
    ],
  },
  {
    id: "faq_3",
    question: "Will AI replace my employees?",
    intro:
      "No. AI does not replace employees but it supports them by removing repetitive work and helping teams focus on more valuable tasks.",
    bullets: [
      "Repetitive and manual tasks are automated",
      "Employees get more time for strategic work",
      "Productivity increases across teams and departments",
      "AI acts as a support system not a replacement",
    ],
  },
  {
    id: "faq_4",
    question: "What happens after deployment?",
    intro:
      "After deployment the system continues to be monitored improved and optimized so it performs well as your business grows",
    bullets: [
      "Performance is tracked on a regular basis",
      "System is improved using real usage data",
      "Updates are added as business requirements change",
      "Issues are fixed quickly to maintain stability",
    ],
  },
];

