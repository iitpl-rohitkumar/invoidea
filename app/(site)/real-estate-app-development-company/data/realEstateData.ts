export interface RealEstateHeroData {
  tag: string;
  title: string;
  desc: string;
  ctaText: string;
  ctaHref: string;
  note: string;
  formTitle: string;
  formSubheading: string;
  formDesc: string;
  bannerBg: string;
  stats: { value: string; label: string }[];
}

export interface RealEstateLeadingData {
  tag: string;
  title: string;
  paragraphs: string[];
  image: string;
}

export interface RealEstateServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface RealEstateGridItem {
  number: string;
  title: string;
  description: string;
}

export interface RealEstateTabItem {
  id: string;
  label: string;
  intro: string;
  features: string[];
  image: string;
}

export interface RealEstateAIFeature {
  number: string;
  title: string;
  description: string;
}

export interface RealEstateTechCategory {
  id: string;
  name: string;
  icon: string;
  tools: { name: string; icon: string }[];
}

export interface RealEstateProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface RealEstateWhyChooseItem {
  number: string;
  title: string;
  description: string;
}

export interface RealEstateFAQItem {
  question: string;
  answer: string;
}

export const realEstateHeroData: RealEstateHeroData = {
  "tag": "REAL ESTATE APP DEVELOPMENT",
  "title": "Make Property Search Smarter with AI-Driven Real Estate Apps",
  "desc": "We develop custom real estate apps that connect property listings, buyers, agents, and leads with AI-powered search, recommendations, and communication tools.",
  "ctaText": "Schedule A Call",
  "ctaHref": "https://calendly.com/invoidea/30min",
  "note": "No obligation • Speak directly with our AI Solutions Team",
  "formTitle": "Schedule Free Call",
  "formSubheading": "Start Your Project",
  "formDesc": "Share your requirements, and our Real Estate AI experts will contact you.",
  "bannerBg": "/assets/realestate-app-development-company-banner.webp",
  "stats": [
    {
      "value": "1560+",
      "label": "Projects Completed"
    },
    {
      "value": "35+",
      "label": "Countries Served"
    },
    {
      "value": "98%",
      "label": "Customer Retention"
    },
    {
      "value": "8+Yrs",
      "label": "In Industry"
    }
  ]
};

export const realEstateLeadingData: RealEstateLeadingData = {
  "tag": "Real Estate App Development Company in India",
  "title": "Custom Real Estate Apps Built for Modern Property Businesses",
  "paragraphs": [
    "We’ve worked with brokers, builders, and property managers who needed something better than spreadsheets and outdated portals. Invoidea builds real estate apps that fit how your team actually works — not a generic template stretched to fit your business. As the top AI-powered real estate app development company in India, we bring data-driven capabilities into the workflow so the platform can recognise patterns, reduce repetitive work and support smarter decisions. The goal is simple: fewer manual steps, faster deals, and a platform that doesn’t fall apart when you scale up.",
    "A lot of real estate platforms get built backwards — someone picks a tech stack first and tries to force the business into it. We do it the other way around. We start with how listings actually move through your business, where leads get lost, and what your team is doing manually that shouldn’t be, and then build the app around that."
  ],
  "image": "/assets/Building-realestate-Application-Interface.webp"
};

export const realEstateServicesData: RealEstateServiceItem[] = [
  {
    "number": "01",
    "title": "Custom Real Estate App Development",
    "description": "Every real estate business has its own workflows, user roles, data requirements, and operational processes. Our real estate app development company builds custom real estate apps around these requirements, from new digital products to completely tailored platforms, while structuring the application around how your business actually works."
  },
  {
    "number": "02",
    "title": "Real Estate App UI/UX Development",
    "description": "Real estate applications need to handle property searches, maps, filters, listings, images, enquiries and multiple user interactions without making the experience difficult to navigate. We design intuitive interfaces for mobile and web that make property discovery, lead handling and everyday workflows easier for everyone."
  },
  {
    "number": "03",
    "title": "Real Estate API &amp; Third-Party Integration",
    "description": "Real estate applications often depend on multiple external systems and data sources. We integrate applications with MLS/IDX feeds, CRM platforms, payment gateways, maps, property data providers, communication tools and other third-party APIs to connect the systems your business relies on."
  },
  {
    "number": "04",
    "title": "Real Estate CRM &amp; Lead Management Integration",
    "description": "Managing property enquiries requires a structured approach to lead capture, assignment, communication, and follow-ups. We connect real estate apps with CRM and lead management systems to capture enquiries, assign leads, track interactions, automate follow-ups and give agents a clearer view of prospects throughout the sales process."
  },
  {
    "number": "05",
    "title": "Real Estate App Modernization",
    "description": "Older real estate applications can become difficult to maintain as interfaces, technologies, integrations and business requirements change. We modernize existing applications by assessing what can be retained, upgraded, migrated or replaced, helping businesses improve their platforms without automatically rebuilding everything from scratch."
  },
  {
    "number": "06",
    "title": "Real Estate Backend &amp; Cloud Development",
    "description": "Real estate applications need reliable backend systems to manage listings, users, leads, permissions, notifications and application data. We develop backend and cloud infrastructure that supports integrations, secure data handling, application performance and growing usage while keeping the underlying systems aligned with business requirements."
  },
  {
    "number": "07",
    "title": "Real Estate App Testing &amp; Quality Assurance",
    "description": "Real estate applications involve multiple user roles, devices, workflows, integrations, and data interactions that need to work reliably together. Our real estate app development company in India test applications across functionality, usability, APIs, security, devices and performance conditions to identify issues before they affect users."
  },
  {
    "number": "08",
    "title": "Real Estate App Maintenance &amp; Support",
    "description": "Real estate applications require ongoing technical attention as operating systems, integrations, security requirements, and business needs evolve. Our maintenance and support services cover bug fixes, application updates, performance improvements, security maintenance, integration changes and new feature development to keep the platform aligned with changing requirements."
  }
];

export const realEstateGridData: RealEstateGridItem[] = [
  {
    "number": "01",
    "title": "Property Buying Apps",
    "description": "We develop property buying apps with smart search, personalised recommendations and intuitive features that help buyers discover properties that match their preferences."
  },
  {
    "number": "02",
    "title": "Property Selling Apps",
    "description": "We build property selling apps with intelligent lead management, enquiry tracking, automated follow-ups and tools that help sellers manage their sales process more efficiently."
  },
  {
    "number": "03",
    "title": "Rental Apps",
    "description": "We develop rental apps with property search, smart matching, listing management, tenant communication and automation to simplify the rental experience for both landlords and tenants."
  },
  {
    "number": "04",
    "title": "Commercial Real Estate Apps",
    "description": "We create commercial real estate apps with property listings, deal tracking, data analytics, lead management and other features designed for complex commercial property transactions."
  },
  {
    "number": "05",
    "title": "Property Marketplace Apps",
    "description": "We build property marketplace apps that bring market participants and service providers together through property listings, advanced search and transaction-focused features."
  },
  {
    "number": "06",
    "title": "Property Management Apps",
    "description": "We develop property management apps that help owners and property managers handle maintenance requests, tenant communication, rent tracking, property records and routine management tasks from one platform."
  },
  {
    "number": "07",
    "title": "Realtor Apps",
    "description": "We create realtor apps with lead management, property search, appointment scheduling and other tools that help real estate agents manage their daily operations."
  },
  {
    "number": "08",
    "title": "Builder Apps",
    "description": "We build builder apps with project listings, unit availability, buyer management, lead tracking, site updates and sales tools that help builders manage projects and connect with potential buyers"
  },
  {
    "number": "09",
    "title": "Real Estate Investment Apps",
    "description": "We develop real estate investment apps with property insights, investment tracking, analytics, portfolio management to help users manage and evaluate their real estate investments."
  },
  {
    "number": "10",
    "title": "Vacation Rental Apps",
    "description": "We create vacation rental apps with property listings and automated responses to bring massive operational and financial perks for both hosts and guests."
  }
];

export const realEstateTabsData: RealEstateTabItem[] = [
  {
    "id": "buyer",
    "label": "Buyer Features",
    "intro": "As an innovative real estate mobile app development company, we design buyer features around how someone actually shops for property — browsing, narrowing down options, and getting questions answered fast enough that they don’t lose interest.",
    "features": [
      "Property Search",
      "Advanced Filters",
      "Saved Listings",
      "Virtual Property Tours",
      "Mortgage Calculator",
      "In-App Chat",
      "Push Notifications",
      "Review & Ratings"
    ],
    "image": "/assets/Listing-Property-Screens.webp"
  },
  {
    "id": "seller",
    "label": "Seller Features",
    "intro": "For sellers, an app needs to make listing a property painless and keep enquiries from slipping through the cracks. Invoidea builds real estate applications that give sellers and agents direct visibility into how listings are performing and who’s reaching out.",
    "features": [
      "Property Listing Management",
      "Enquiries & Leads Management",
      "Scheduled Site Visits",
      "Pricing Suggestions",
      "In-App Communication",
      "Analytics",
      "Notifications"
    ],
    "image": "/assets/Search-and-Listing-Screens.webp"
  },
  {
    "id": "admin",
    "label": "Admin Features",
    "intro": "Our real estate app development approach gives admins a closer look at everything happening across the platform — from users and listings to enquiries, approvals, reports, and activity. We can also automate routine checks and bring important updates to the surface, so administrators spend less time monitoring and more time managing.",
    "features": [
      "User Management",
      "Property Moderation",
      "Reports",
      "Payment Management",
      "CMS"
    ],
    "image": "/assets/Dashboard-and-Transaction-Screens.webp"
  }
];

export const realEstateAIFeaturesData: RealEstateAIFeature[] = [
  {
    "number": "01",
    "title": "AI Property Recommendations",
    "description": "We develop AI-powered property recommendation features that analyse user preferences, browsing behaviour, saved listings and previous interactions to deliver more relevant property suggestions."
  },
  {
    "number": "02",
    "title": "AI Chatbot",
    "description": "We build AI chatbots for real estate apps that answer questions about pricing, availability, amenities, locations, bookings and other property-related information while helping agents manage routine enquiries."
  },
  {
    "number": "03",
    "title": "Predictive Pricing",
    "description": "We develop predictive pricing solutions that analyse historical property data, market trends, location factors and comparable listings to help agents and sellers make more informed pricing decisions."
  },
  {
    "number": "04",
    "title": "Smart Search",
    "description": "We build smart property search features that understand natural-language queries and help users find relevant listings without relying only on traditional filters and keywords."
  },
  {
    "number": "05",
    "title": "Image Recognition",
    "description": "We develop AI-powered image recognition features that identify and organise property details such as bedrooms, kitchens, balconies, parking areas, and other visual elements to improve listing categorisation and search."
  },
  {
    "number": "06",
    "title": "Lead Scoring",
    "description": "We build AI-powered lead scoring systems that analyse property views, enquiries, responses, and user activity to identify high-intent prospects and help agents prioritise their leads."
  },
  {
    "number": "07",
    "title": "AI Property Valuation",
    "description": "We develop AI-based property valuation solutions that use property details, location data, historical prices, and market information to generate estimated property values as an initial reference for users and real estate professionals."
  },
  {
    "number": "08",
    "title": "Automated Push Notifications",
    "description": "We build automated push notification systems that use user activity, property availability, enquiry updates, and other triggers to send timely and relevant alerts to buyers, sellers, tenants, and agents."
  }
];

export const realEstateTechCategories: RealEstateTechCategory[] = [
  {
    "id": "frontend",
    "name": "Frontend",
    "icon": "fa-solid fa-code",
    "tools": [
      {
        "name": "React.js",
        "icon": "fa-brands fa-react"
      },
      {
        "name": "Vue.js",
        "icon": "fa-brands fa-vuejs"
      },
      {
        "name": "Tailwind CSS",
        "icon": "fa-solid fa-palette"
      }
    ]
  },
  {
    "id": "backend",
    "name": "Backend",
    "icon": "fa-solid fa-server",
    "tools": [
      {
        "name": "Node.js",
        "icon": "fa-brands fa-node-js"
      },
      {
        "name": "Laravel",
        "icon": "fa-brands fa-laravel"
      },
      {
        "name": "Django",
        "icon": "fa-brands fa-python"
      }
    ]
  },
  {
    "id": "mobile",
    "name": "Mobile",
    "icon": "fa-solid fa-mobile-screen-button",
    "tools": [
      {
        "name": "Flutter",
        "icon": "fa-solid fa-mobile-screen"
      },
      {
        "name": "React Native",
        "icon": "fa-brands fa-react"
      },
      {
        "name": "Swift",
        "icon": "fa-brands fa-apple"
      },
      {
        "name": "Kotlin",
        "icon": "fa-brands fa-android"
      }
    ]
  },
  {
    "id": "database",
    "name": "Database",
    "icon": "fa-solid fa-layer-group",
    "tools": [
      {
        "name": "PostgreSQL",
        "icon": "fa-solid fa-database"
      },
      {
        "name": "MySQL",
        "icon": "fa-solid fa-database"
      },
      {
        "name": "MongoDB",
        "icon": "fa-solid fa-leaf"
      }
    ]
  },
  {
    "id": "cloud",
    "name": "Cloud",
    "icon": "fa-solid fa-cloud",
    "tools": [
      {
        "name": "Amazon Web Services (AWS)",
        "icon": "fa-brands fa-aws"
      },
      {
        "name": "Azure",
        "icon": "fa-brands fa-microsoft"
      },
      {
        "name": "Google Cloud",
        "icon": "fa-brands fa-google"
      }
    ]
  },
  {
    "id": "ai-ml",
    "name": "AI & ML",
    "icon": "fa-solid fa-brain",
    "tools": [
      {
        "name": "OpenAI",
        "icon": "fa-solid fa-brain"
      },
      {
        "name": "TensorFlow",
        "icon": "fa-solid fa-microchip"
      },
      {
        "name": "Python",
        "icon": "fa-brands fa-python"
      }
    ]
  },
  {
    "id": "APIs",
    "name": "APIs",
    "icon": "fa-solid fa-plug",
    "tools": [
      {
        "name": "MLS/IDX APIs",
        "icon": "fa-solid fa-network-wired"
      },
      {
        "name": "Google Maps API",
        "icon": "fa-solid fa-map-location-dot"
      },
      {
        "name": "Payment Gateways",
        "icon": "fa-solid fa-credit-card"
      }
    ]
  },
  {
    "id": "devOps",
    "name": "DevOps",
    "icon": "fa-solid fa-gears",
    "tools": [
      {
        "name": "Docker",
        "icon": "fa-brands fa-docker"
      },
      {
        "name": "Kubernetes",
        "icon": "fa-solid fa-cubes"
      },
      {
        "name": "CI/CD Pipelines",
        "icon": "fa-solid fa-timeline"
      }
    ]
  }
];

export const realEstateProcessSteps: RealEstateProcessStep[] = [
  {
    "number": "01",
    "title": "Requirement Analysis",
    "description": "We define your business model, target audience, property workflows, and must-have features before design begins, giving our development process a clear direction from day one."
  },
  {
    "number": "02",
    "title": "Research the Market",
    "description": "We conduct competitor, market analysis and real buyer, seller and agent behaviour research to find market gaps, user needs and possibilities for your platform."
  },
  {
    "number": "03",
    "title": "UI/UX Design",
    "description": "We create wireframes and prototypes for the real estate user flow, ensuring every step- search, property selection, enquiry, appointment, and payment- is effortless."
  },
  {
    "number": "04",
    "title": "Prototype Development",
    "description": "We provide a clickable version of your product that allows you to validate the concept, test essential workflows and improve the user experience before beginning full-scale development."
  },
  {
    "number": "05",
    "title": "App Development",
    "description": "We implement the frontend, backend and mobile applications following an iterative sprint-based development process and give regular demos to monitor the development progress."
  },
  {
    "number": "06",
    "title": "AI &amp; Third-Party API Integration",
    "description": "Our developers integrate MLS/IDX feeds, maps and payment gateways, CRM, messaging and other necessary integrations, enabling AI recommendations and predictive insights."
  },
  {
    "number": "07",
    "title": "Testing &amp; Quality Assurance",
    "description": "We evaluate flexibility, performance and security across different real estate processes to be sure you deliver a robust solution to your end users."
  },
  {
    "number": "08",
    "title": "Deployment",
    "description": "Our planned execution guarantees that the deployment of the platform to production is seamless and with adequate cloud configuration, database setup and performance monitoring."
  },
  {
    "number": "09",
    "title": "App Store &amp; Web Launch",
    "description": "We handle the submission and compliance requirements for the Apple App Store and Google Play Store while preparing web platforms for a smooth and reliable production launch."
  },
  {
    "number": "10",
    "title": "Maintenance &amp; Support",
    "description": "Our support continues after launch with performance monitoring, bug fixes, API maintenance, technical improvements and new features as your real estate business grows."
  }
];

export const realEstateWhyChooseData: RealEstateWhyChooseItem[] = [
  {
    "number": "01",
    "title": "Industry Expertise",
    "description": "Our real estate app development company in India understands real estate workflows, listing challenges, compliance requirements and operational needs that help your project start with relevant industry knowledge while identifying opportunities for data-driven insights."
  },
  {
    "number": "02",
    "title": "Experienced Real Estate App Developers",
    "description": "Our developers have experience building real estate applications across business models, combining technical expertise with intelligent recommendations, predictive insights and automated workflows where they genuinely improve the overall platform experience."
  },
  {
    "number": "03",
    "title": "Custom Real Estate App Development",
    "description": "We build around your business model, property workflows, user roles and revenue structure, incorporating intelligent search, personalised recommendations and automation without forcing your platform into standard templates."
  },
  {
    "number": "04",
    "title": "Agile Methodology",
    "description": "Our agile approach keeps you involved throughout development, with regular reviews and feedback cycles that allow us to refine functionality, improve user experiences and adapt features efficiently before launch."
  },
  {
    "number": "05",
    "title": "Secure Architecture",
    "description": "Security is integrated into the architecture from the outset, protecting property data, user information, transactions and communications while ensuring intelligent features operate within appropriate security and privacy measures."
  },
  {
    "number": "06",
    "title": "Scalable Solutions",
    "description": "Our applications support growing listings, users, transactions and traffic while allowing intelligent recommendations, analytics and automation to scale alongside your real estate business without performance issues."
  },
  {
    "number": "07",
    "title": "API Integration",
    "description": "We connect MLS/IDX feeds, payment gateways, maps, CRMs and other services properly, allowing property data, intelligent search, recommendations and automated workflows to work together across your platform."
  },
  {
    "number": "08",
    "title": "Cloud Infrastructure",
    "description": "We use scalable cloud infrastructure to manage property data, application performance and growing traffic while supporting analytics, intelligent recommendations and other data-intensive features as your platform expands."
  },
  {
    "number": "09",
    "title": "Open Communication",
    "description": "We maintain transparency throughout development with regular updates, open discussions and accessible feedback, helping you review intelligent features, understand progress and make informed decisions at every stage."
  },
  {
    "number": "10",
    "title": "Dedicated Support",
    "description": "Our involvement continues after launch with monitoring, maintenance, technical assistance and improvements, helping your platform evolve with new features, changing property data and intelligent capabilities over time."
  }
];

export const realEstateFAQData: RealEstateFAQItem[] = [
  {
    "question": "How long does it take to develop a real estate app?",
    "answer": "The development timeline depends on the scope and complexity of the platform. Here is a breakdown: Basic App: 8–12 weeks Mid-Level App: 3–4 months Complex App: 4–6 months Our team helps define the right scope early so the development timeline stays aligned with your business requirements."
  },
  {
    "question": "What does real estate app development cost?",
    "answer": "Real estate app development costs vary based on the features, platforms, integrations, design requirements, and user roles involved. A property listing platform has very different requirements from a solution combining MLS/IDX, CRM, payments, property management, and AI. We assess the complete scope first so the estimate reflects your actual business requirements. We help you scope the right features and technology so the estimate is based on your actual project requirements."
  },
  {
    "question": "Can you integrate MLS and IDX data into a real estate app?",
    "answer": "Yes. MLS and IDX integrations allow real estate platforms to display and manage property listings from connected data sources. The implementation depends on the MLS providers involved, data-access requirements, field mapping, update frequency and applicable integration rules. Our integration team can connect the required MLS or IDX sources while managing the technical requirements for synchronized property data."
  },
  {
    "question": "Can you build a real estate app for buyers, agents, and property managers?",
    "answer": "Absolutely. A single real estate platform can support administrators through role-specific experiences. Each user can have access to the workflows they actually need, from property discovery and saved listings to lead management, tenant communication, maintenance and administration. Our approach creates role-specific experiences so every user gets the tools and workflows relevant to their responsibilities."
  },
  {
    "question": "Can AI be integrated into a real estate app?",
    "answer": "Yes. AI can be integrated into different areas of a real estate platform where it delivers practical value. This can include property recommendations, intelligent search, lead qualification, chat assistance, listing content, document analysis, and customer communication, depending on the workflows and business objectives involved. We help identify practical AI opportunities that improve real estate workflows rather than adding intelligent features without a clear purpose."
  },
  {
    "question": "Can you connect a real estate app with CRM and lead management systems?",
    "answer": "Real estate applications can connect with CRM and lead management systems to bring enquiries, prospect information, interactions, assignments, and follow-ups into one connected workflow. This becomes particularly useful when leads arrive through multiple channels and mobile applications. Our real estate app development services can connect your CRM with the app so lead information moves smoothly across sales and communication workflows."
  },
  {
    "question": "Can you build both a real estate website and mobile app?",
    "answer": "Yes. A real estate business can have a website, iOS app, Android app or connected web-and-mobile ecosystem based on its requirements. A shared backend can synchronize listings, accounts, enquiries, CRM information, notifications and other core services across platforms. We can create a connected web and mobile experience with shared data and functionality across the platforms your business needs."
  },
  {
    "question": "Can you build a property management app as part of a real estate platform?",
    "answer": "Property management functionality can be developed as part of a larger real estate platform or as a standalone application. Common capabilities include property and tenant records, rent management, maintenance requests, communication, documents, notifications, and reporting, with CRM and other business systems connected where required. Our team can bring these property management workflows into one platform while connecting the systems your business already uses."
  },
  {
    "question": "Can you modernize or redesign an existing real estate application?",
    "answer": "Existing real estate applications can be redesigned, upgraded, or rebuilt based on their current architecture and business requirements. We evaluate the existing application, integrations, infrastructure, and data first to find out what can be kept, enhanced, migrated or replaced — not everything what needs to be scrapped. We transform legacy applications strategically by keeping what works and replacing outdated technology, logic, and user experience."
  },
  {
    "question": "Can a real estate app support multiple property types and locations?",
    "answer": "A custom real estate platform can support residential, commercial, rental, land, luxury and other property categories across multiple cities, regions or markets. Listing structures, search filters, permissions and workflows can be configured according to the markets and property types your business serves. Our development approach allows the platform to support multiple property types and locations while adapting as your market expands."
  },
  {
    "question": "What features should a modern real estate app include?",
    "answer": "A modern real estate application typically brings together property search, filters, maps, listing management, galleries, saved properties, enquiries, user accounts, notifications, analytics, communication, and CRM integration. Depending on the business model, MLS/IDX integration, virtual tours, property management, AI recommendations, and other capabilities can also be added. We help prioritise the features that match your business model while leaving room for intelligent capabilities and future expansion."
  },
  {
    "question": "Do you provide ongoing support after launching a real estate app?",
    "answer": "Post-launch support covers the technical work required to keep a real estate platform reliable as it evolves. Our support team helps keep the platform secure, updated, and ready to evolve as your real estate business grows."
  }
];
