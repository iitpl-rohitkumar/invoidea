export interface StatItem {
  value: string;
  label: string;
}

export interface SubService {
  name: string;
  link: string;
}

export interface ServiceItem {
  title: string;
  link: string;
  description: string;
  isDark: boolean;
  subServices: SubService[];
}

export interface CaseStudyStat {
  value: string;
  suffix: string;
  label: string;
}

export interface CaseStudyItem {
  logo: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: CaseStudyStat[];
}

export interface BusinessSolutionItem {
  title: string;
  description: string;
  image: string;
  link: string;
}

export interface ProcessStepItem {
  step: string;
  title: string;
  description: string;
}

export interface AwardItem {
  logo: string;
  name: string;
  stars: number;
  halfStar?: boolean;
  emptyStar?: boolean;
  text: string;
}

export interface TestimonialItem {
  id: number;
  title: string;
  text: string;
  url: string;
  rating: number;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogItem {
  title: string;
  date: string;
  image: string;
  link: string;
  category: string;
  description: string;
}

export interface IntegrationItem {
  title: string;
  desc: string;
  image: string;
}

export const statsData: StatItem[] = [
  {
    "value": "1560+",
    "label": "Project Delivered"
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
    "value": "8+ Yrs",
    "label": "In Industry"
  }
];
export const servicesData: ServiceItem[] = [
  {
    "title": "AI Development Services",
    "link": "/ai-development-company",
    "description": "We build intelligent AI solutions that automate workflows, enhance decision-making and accelerate business growth.",
    "isDark": true,
    "subServices": [
      {
        "name": "AI Software Development",
        "link": "/ai-software-development-company"
      },
      {
        "name": "AI App Development",
        "link": "/ai-app-development-company"
      },
      {
        "name": "AI Agent Development",
        "link": "/ai-agent-development-company"
      },
      {
        "name": "Agentic AI Development",
        "link": "/agentic-ai-development"
      },
      {
        "name": "AI Chatbot Development",
        "link": "/ai-chatbot-development-company"
      },
      {
        "name": "AI Automation Services",
        "link": "/ai-automation-services"
      },
      {
        "name": "AI Integration Services",
        "link": "/ai-integration-services"
      },
      {
        "name": "RAG Development",
        "link": "#"
      }
    ]
  },
  {
    "title": "Mobile App Development",
    "link": "/mobile-app-development",
    "description": "From concept to deployment, we build high-performing mobile applications that function smoothly across platforms.",
    "isDark": false,
    "subServices": [
      {
        "name": "Android App Development",
        "link": "/hire-android-app-developers"
      },
      {
        "name": "iOS App Development",
        "link": "/hire-ios-developers"
      },
      {
        "name": "Flutter App Development",
        "link": "/flutter-app-development-company"
      },
      {
        "name": "Hybrid App Development",
        "link": "/hybrid-app-development"
      },
      {
        "name": "Cross Platform App Development",
        "link": "/cross-platform-app-development"
      }
    ]
  },
  {
    "title": "Web Development Services",
    "link": "/web-development-services",
    "description": "Our web designing company in India creates custom software and web applications built for performance, security, and growth.",
    "isDark": true,
    "subServices": [
      {
        "name": "Custom Web Application Development",
        "link": "/custom-web-application-development-services"
      },
      {
        "name": "Web Design Services",
        "link": "/web-design-services"
      },
      {
        "name": "WordPress Development",
        "link": "/custom-wordpress-development-services"
      },
      {
        "name": "Laravel Development",
        "link": "/laravel-development-services"
      },
      {
        "name": "Shopify Development",
        "link": "/shopify-website-development-company"
      }
    ]
  },
  {
    "title": "Software Product Development",
    "link": "/software-product-development",
    "description": "We transform ideas into scalable software products with modern engineering, enterprise architecture, and agile development.",
    "isDark": false,
    "subServices": [
      {
        "name": "SaaS Application Development",
        "link": "/saas-application-development"
      },
      {
        "name": "MVP Development",
        "link": "/mvp-development-company"
      },
      {
        "name": "Enterprise App Development",
        "link": "/enterprise-app-development-company"
      },
      {
        "name": "Custom API Development",
        "link": "/custom-api-development-services"
      }
    ]
  },
  {
    "title": "Cloud Consulting Services",
    "link": "/cloud-consulting-services",
    "description": "Modernize cloud infrastructure with strategic consulting, seamless migration, and reliable DevOps solutions.",
    "isDark": true,
    "subServices": [
      {
        "name": "Cloud Migration Services",
        "link": "/cloud-migration-services"
      },
      {
        "name": "DevOps Consulting Services",
        "link": "/devops-consulting-services"
      }
    ]
  },
  {
    "title": "Advanced Technology Services",
    "link": "#",
    "description": "As the best website design company, we leverage advanced technologies to build secure, connected, and future-ready digital solutions.",
    "isDark": false,
    "subServices": [
      {
        "name": "Quality Assurance Services",
        "link": "/quality-assurance-services"
      },
      {
        "name": "Blockchain Development",
        "link": "/blockchain-development-company"
      },
      {
        "name": "IoT App Development",
        "link": "/iot-app-development-company"
      },
      {
        "name": "IT Staff Augmentation",
        "link": "/it-staff-augmentation-services-company"
      }
    ]
  }
];
export const caseStudiesData: CaseStudyItem[] = [
  {
    "logo": "/assets/case-study-magellan.webp",
    "tag": "Travel Platform",
    "title": "Magellan – Unified Travel Booking Platform for the Iraqi Market",
    "subtitle": "Web Application | Mobile Apps | API Integrations | Travel Platform",
    "description": "We developed a unified travel platform that brings together flight, hotel, and cab bookings through multiple travel API integrations, offering real-time availability and a seamless booking experience.",
    "image": "/assets/case-1.webp",
    "stats": [
      {
        "value": "10K",
        "suffix": "+",
        "label": "Active Users"
      },
      {
        "value": "1M",
        "suffix": "+",
        "label": "Revenue Growth"
      }
    ]
  },
  {
    "logo": "/assets/case-study-cmx.webp",
    "tag": "Logistics Platform",
    "title": "CMX Haul – On-Demand Truck Booking & Fleet Management Platform",
    "subtitle": "Web Platform | Mobile Apps | Fleet Management | Logistics Automation",
    "description": "We developed a logistics platform that connects customers, drivers, and fleet operators through real-time truck booking, digital trip management, dynamic pricing, and integrated wallet payments.",
    "image": "/assets/case-2.webp",
    "stats": [
      {
        "value": "25K",
        "suffix": "+",
        "label": "Trip Bookings"
      },
      {
        "value": "500",
        "suffix": "+",
        "label": "Fleet Partners"
      }
    ]
  },
  {
    "logo": "/assets/case-study-fitx.webp",
    "tag": "Health & Fitness Platform",
    "title": "FitX – AI-Powered Fitness, Nutrition & Wellness Platform",
    "subtitle": "Mobile App | AI Integration | Nutrition Tracking | Health Analytics",
    "description": "We developed an AI-powered fitness platform that combines personalized workouts, nutrition planning, calorie tracking, and wellness insights to help users build healthier daily habits.",
    "image": "/assets/case-3.webp",
    "stats": [
      {
        "value": "50K",
        "suffix": "+",
        "label": "Workout Sessions"
      },
      {
        "value": "15K",
        "suffix": "+",
        "label": "Active Users"
      }
    ]
  }
];
export const businessSolutionsData: BusinessSolutionItem[] = [
  {
    "title": "AI-Powered CRM Solutions",
    "description": "Our AI-enabled custom CRM helps businesses manage leads, organize customer interactions as well as streamline sales activities and convert more opportunities into customers.",
    "image": "/assets/crm-solution-service.webp",
    "link": "/crm-development-company"
  },
  {
    "title": "Advanced ERP Management Systems",
    "description": "Our intelligent ERP solution streamlines business operations with real-time insights, workflow automation, and centralized data management to improve productivity and support scalable growth.",
    "image": "/assets/erp-solution-service.webp",
    "link": "/custom-erp-software-development"
  },
  {
    "title": "Smart Workforce & HRM Solutions",
    "description": "Our smart HRM solution simplifies workforce management with automated hiring, payroll, attendance, performance tracking, and employee lifecycle management.",
    "image": "/assets/HRM-Solution-service.webp",
    "link": "/hr-management-system"
  },
  {
    "title": "Intelligent LMS Solutions",
    "description": "Our custom LMS solution helps businesses manage online learning with course creation, learner progress tracking, assessments and training management from a single platform.",
    "image": "/assets/lms-solution-service.webp",
    "link": "/elearning-app-development-company"
  },
  {
    "title": "Custom AI Solutions",
    "description": "We build intelligent custom AI solutions through customized AI & web development services that automate processes, deliver predictive insights and enhance business decision-making.",
    "image": "/assets/ai-solution-service.webp",
    "link": "/ai-consulting-services"
  },
  {
    "title": "IoT & Connected Device Solutions",
    "description": "We develop IoT solutions that connect smart devices, collect real-time data and help businesses monitor equipment as well as automate processes and make informed decisions.",
    "image": "/assets/iot-solution-service.webp",
    "link": "/iot-app-development-company"
  }
];
export const processStepsData: ProcessStepItem[] = [
  {
    "step": "01",
    "title": "Strategic Planning",
    "description": "We understand your needs and create a clear plan for your website."
  },
  {
    "step": "02",
    "title": "UI/UX Design",
    "description": "We design a clean, user-friendly layout that looks great & works smoothly."
  },
  {
    "step": "03",
    "title": "Development",
    "description": "Our team use the right framework, features, tools, and technology based on your needs."
  },
  {
    "step": "04",
    "title": "Testing & QA",
    "description": "We check everything carefully to make sure your website works perfectly."
  },
  {
    "step": "05",
    "title": "Launch & Support",
    "description": "We launch your site and stay available to support and update it as needed."
  }
];
export const awardsData: AwardItem[] = [
  {
    "logo": "/assets/good-firms.webp",
    "name": "GoodFirms",
    "stars": 5,
    "halfStar": false,
    "text": "Rated top for reliable and innovative web solutions."
  },
  {
    "logo": "/assets/google-review.webp",
    "name": "Google",
    "stars": 4,
    "halfStar": true,
    "text": "Customers love us for performance, design, & support."
  },
  {
    "logo": "/assets/facebook-review.webp",
    "name": "Facebook",
    "stars": 5,
    "halfStar": false,
    "text": "Trusted by clients with excellent reviews and feedback."
  },
  {
    "logo": "/assets/clutch-review.webp",
    "name": "Clutch",
    "stars": 4,
    "halfStar": true,
    "text": "Recognized for proven results and client satisfaction."
  },
  {
    "logo": "/assets/designrush-review.webp",
    "name": "DesignRush",
    "stars": 4,
    "halfStar": true,
    "text": "Awarded for creativity, strategy, & design excellence."
  },
  {
    "logo": "/assets/trustpilot-review.webp",
    "name": "Trustpilot",
    "stars": 4,
    "halfStar": false,
    "emptyStar": true,
    "text": "Highly rated for service, transparency, & user experience."
  }
];
export const testimonialsData: TestimonialItem[] = [
  {
    "id": 1,
    "title": "Website Revamp & Rebranding",
    "text": "They understood our requirements well and delivered a high-quality solution with great attention to detail.",
    "url": "https://clutch.co/go-to-review/58f58f9e-4986-434b-84fd-335c20856d10/473018",
    "rating": 5,
    "verified": true
  },
  {
    "id": 2,
    "title": "Flooring Website Design & Development",
    "text": "We're impressed by how they understood our requirements and turned our ideas into a practical, high-quality solution.",
    "url": "https://clutch.co/go-to-review/58f58f9e-4986-434b-84fd-335c20856d10/471965",
    "rating": 5,
    "verified": true
  },
  {
    "id": 3,
    "title": "Training Company Web Development",
    "text": "Bhavya and the team are just incredible; highly professional and helpful.",
    "url": "https://clutch.co/go-to-review/58f58f9e-4986-434b-84fd-335c20856d10/467256",
    "rating": 5,
    "verified": true
  },
  {
    "id": 4,
    "title": "Staff Augmentation for Accounts Payable",
    "text": "They delivered quality work thanks to their aim of achieving the best possible results.",
    "url": "https://clutch.co/go-to-review/58f58f9e-4986-434b-84fd-335c20856d10/231752",
    "rating": 5,
    "verified": true
  },
  {
    "id": 5,
    "title": "Grocery Chain Web Design & Development",
    "text": "They possessed excellent technical and communication skills in addition to having a tremendous amount of creativity.",
    "url": "https://clutch.co/go-to-review/58f58f9e-4986-434b-84fd-335c20856d10/214536",
    "rating": 5,
    "verified": true
  }
];
export const faqData: FAQItem[] = [
  {
    "id": "faq-1",
    "question": "Can we start with a smaller engagement or MVP before scaling?",
    "answer": "Yes, absolutely. We often recommend starting with a Minimum Viable Product (MVP) or smaller phase. It helps validate your ideas, gather early user feedback, and test the market while keeping initial investments controlled before expanding further."
  },
  {
    "id": "faq-2",
    "question": "Do you develop AI-powered, web, and mobile applications?",
    "answer": "Yes, we specialize in developing modern web applications, scalable mobile apps for iOS and Android, and integrating custom AI/ML capabilities into software solutions to automate processes and elevate user experiences."
  },
  {
    "id": "faq-3",
    "question": "Can your software scale as my business grows?",
    "answer": "Yes, our applications are built on modern, scalable cloud-native architectures that can seamlessly grow from hundreds of users to millions without performance bottlenecks."
  },
  {
    "id": "faq-4",
    "question": "How do you ensure software quality, security, and reliability?",
    "answer": "We follow industry best practices including automated unit testing, integration tests, QA reviews, secure coding guidelines (OWASP), continuous integration/continuous deployment (CI/CD) pipelines, and rigorous performance benchmarking."
  },
  {
    "id": "faq-5",
    "question": "Do you provide maintenance and support after launch?",
    "answer": "Yes, we offer ongoing maintenance, security updates, server monitoring, bug fixes, and feature enhancements to ensure your digital product operates smoothly at all times."
  },
  {
    "id": "faq-6",
    "question": "What engagement models do you offer?",
    "answer": "We offer flexible engagement models tailored to your project: Fixed-Price contracts, Time & Material (T&M) models, and Dedicated Development Teams / Staff Augmentation."
  },
  {
    "id": "faq-7",
    "question": "How much does it cost and how long does it take to develop custom software?",
    "answer": "Cost and timelines vary depending on project complexity, feature scope, tech stack, and integrations. A typical MVP can take 6-10 weeks, while large-scale platforms take longer. Contact us for a detailed estimate."
  },
  {
    "id": "faq-8",
    "question": "How do I get started with my software development project?",
    "answer": "Simply get in touch via our contact form or phone call. We'll set up an initial consultation, understand your requirements, provide recommendations, and share a detailed roadmap and estimate."
  },
  {
    "id": "faq-9",
    "question": "What types of businesses do you work with?",
    "answer": "We work with early-stage startups, growing SMEs, and enterprise organizations across a wide range of industries including Ecommerce, Healthcare, Logistics, FinTech, Real Estate, and more."
  },
  {
    "id": "faq-10",
    "question": "Can Invoidea integrate software with my existing systems & third-party tools?",
    "answer": "Yes, our engineers specialize in custom API development and third-party integrations with CRMs, ERPs, payment gateways, marketing tools, and internal legacy systems."
  },
  {
    "id": "faq-11",
    "question": "Can I hire dedicated developers or extend my existing development team?",
    "answer": "Yes, we offer dedicated developer staffing across frontend (React, Next.js), backend (Node.js, Laravel, Python), mobile (Flutter, React Native, Swift, Kotlin), and AI/ML technologies."
  },
  {
    "id": "faq-12",
    "question": "How does your software development process work?",
    "answer": "We follow an agile, collaborative approach: Discovery & Strategy Planning, UI/UX Design, Agile Development, Testing & Quality Assurance, and Deployment with ongoing support."
  },
  {
    "id": "faq-13",
    "question": "Can I hire your India software developers?",
    "answer": "Yes, you can hire our experienced Indian developers on full-time, part-time, or hourly contracts, managed by seamless English communication and flexible overlapping working hours."
  },
  {
    "id": "faq-14",
    "question": "Why should you partner with Invoidea for software development?",
    "answer": "With 8+ years of industry experience, 1560+ projects delivered, 98% client retention, and cutting-edge expertise in AI, web, and mobile development, Invoidea is a trusted technology partner built for your scale."
  }
];
export const blogsData: BlogItem[] = [
  {
    "title": "Benefits of AI Integration: Why Businesses Are Adopting AI Fast",
    "date": "10 Feb 2026",
    "image": "/assets/1778240765.webp",
    "link": "https://invoidea.com/blog/benefits-of-ai-integration-why-businesses-are-adopting-ai-fast",
    "category": "AI Technology",
    "description": "Discover how AI integration is revolutionizing operations, boosting efficiency, and giving forward-thinking companies a decisive competitive edge."
  },
  {
    "title": "Top AI Trends Shaping the Future for 2026",
    "date": "04 Feb 2026",
    "image": "/assets/1776768918.webp",
    "link": "https://invoidea.com/blog/top-ai-trends-shaping-the-future-for-2026",
    "category": "Trends",
    "description": "Explore the most influential AI trends set to transform industries in 2026, from Agentic workflows to multimodal intelligence."
  },
  {
    "title": "Virtualization in Cloud Computing: Definition, Types, and Benefits",
    "date": "28 Jan 2026",
    "image": "/assets/1782965582.webp",
    "link": "https://invoidea.com/blog/virtualization-in-cloud-computing-definition-types-and-benefits",
    "category": "Cloud",
    "description": "Understand the core concepts of virtualization in modern cloud architecture, its operational benefits, and best implementation practices."
  }
];
export const integrationsData: IntegrationItem[] = [
  {
    "title": "CMS Integration",
    "desc": "We design websites with CMS integration, allowing businesses to handle operations and manage content efficiently.",
    "image": "/assets/CMS-integration-img.webp"
  },
  {
    "title": "CRM Integration",
    "desc": "Seamlessly connect custom CRM tools to organize customer interactions, automate lead management, and increase retention.",
    "image": "/assets/CRM-integration-img.webp"
  },
  {
    "title": "Payment Gateway Integration",
    "desc": "Secure multi-currency payment gateway integrations including Stripe, PayPal, Razorpay, and regional wallets.",
    "image": "/assets/payment-gateway-integration-img.webp"
  },
  {
    "title": "Social Media Integration",
    "desc": "Connect your digital platforms with major social channels to expand reach, drive engagement, and track conversions.",
    "image": "/assets/smi-img.webp"
  },
  {
    "title": "Email Marketing Integration",
    "desc": "Integrate email marketing automation with custom triggers, segmented lists, and actionable performance metrics.",
    "image": "/assets/emi-img.webp"
  },
  {
    "title": "SEO Tools Integration",
    "desc": "Built-in integration with Google Search Console, Analytics, and SEO automation suites for peak discoverability.",
    "image": "/assets/seot-img.webp"
  },
  {
    "title": "Analytics & Tracking Integration",
    "desc": "Real-time analytics and user behavior tracking to make data-driven product decisions and boost conversion rates.",
    "image": "/assets/analytics-tracking-int-img.webp"
  }
];
