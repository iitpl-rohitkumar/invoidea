export interface ServiceSubFeature {
  title: string;
  description: string;
}

export interface AIMLServiceItem {
  id: string;
  title: string;
  shortText: string;
  intro: string;
  subFeatures: ServiceSubFeature[];
}

export interface TechToolItem {
  title: string;
  techs: string;
  icon: string;
}

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
}

export interface TimelineStepItem {
  step: string;
  title: string;
  description: string;
}

export interface IndustryItem {
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  bullets?: string[];
}

export const servicesData: AIMLServiceItem[] = [
  {
    id: "gen-ai-nlp",
    title: "Generative AI & NLP Solutions",
    shortText: "Our AI development company in India upgrades businesses with NLP and AI generative solutions...",
    intro:
      "Our AI development company in India upgrades businesses with NLP (Natural Language Processing) and AI generative solutions. This helps users get prompt assistance and convenience, and boost engagement.",
    subFeatures: [
      {
        title: "AI Chatbots",
        description:
          "We integrate AI driven chatbots to streamline customer support with quick responses to users’s queries, helping optimize user experience and enhance engagement.",
      },
      {
        title: "Text & Sentiment Analysis",
        description:
          "With data insight and report analysis, we help businesses gain valuable information based on customer feedback, reviews, & social media trends, contributing to making informed decisions.",
      },
      {
        title: "Speech-to-Text & Text-to-Speech",
        description:
          "Our experts combine voice-based AI features to improve communication and automate the device interactive experience of users – with no need for typing and tapping.",
      },
      {
        title: "AI-Powered Content Generation",
        description:
          "With our AI-powered content generation capability, you can develop content for blogs, generate reports, and get marketing materials in a pinch, helping save time and effort.",
      },
    ],
  },
  {
    id: "computer-vision",
    title: "Computer Vision & Image Recognition",
    shortText: "Our artificial intelligence development company in India streamlines...",
    intro:
      "Our artificial intelligence development company in India streamlines business operations using AI-driven vision and image recognition solutions that help improve the user's experience and save time.",
    subFeatures: [
      {
        title: "Facial Recognition & Emotion Detection",
        description:
          "Our advanced biometric solutions help businesses identify users' authenticity for secure access and emotion detection to optimize the service for a better user experience.",
      },
      {
        title: "Object & Image Classification",
        description:
          "With AI-powered categorization, we make data management faster and smarter by automatically organizing images and objects into precise categories.",
      },
      {
        title: "AI Powered Video Analysis",
        description:
          "We harness the power of AI to automate video analysis help detect movement in real time, monitor activities, and ease data extraction from footage without human intervention.",
      },
      {
        title: "Optical Character Recognition",
        description:
          "We incorporate OCR technology, making it easy to convert printed and handwritten text into digital files while ensuring files can be scanned, edited, and shared smoothly.",
      },
    ],
  },
  {
    id: "ml-predictive-analytics",
    title: "Machine Learning Services & Predictive Analytics",
    shortText: "Being a renowned machine learning development company, we provide data-driven intelligence solution that helps....",
    intro:
      "Being a renowned machine learning development company, we provide data-driven intelligence solution that helps businesses understand customers' preferences and market trends. This integration helps businesses recommend products and services to users based on their needs, improving decision-making.",
    subFeatures: [
      {
        title: "Forecasting & Trend Prediction",
        description:
          "Our AI-based models analyze past data, customer behavior, market trends, and emerging needs to predict future demands and help businesses make better plans.",
      },
      {
        title: "Fraud Prevention",
        description:
          "Leveraging the advanced algorithms of AI security systems, we help businesses prevent fraud by identifying suspicious transactions and getting instant alerts to secure the data.",
      },
      {
        title: "AI-Based Recommendation",
        description:
          "With AI recommendation engines, we help deliver personalized products and content ideas based on user preferences and behaviors, improving user experience for better engagement.",
      },
      {
        title: "Customer Behavior Analysis",
        description:
          "Utilizing advanced algorithms and machine learning, we help businesses study customers' behaviors and patterns of buying things that help them create powerful marketing strategies to retain customers.",
      },
    ],
  },
  {
    id: "data-science-viz",
    title: "Data Science & Data Visualization",
    shortText: "Our AI development company in India helps businesses simplify their complex data with AI powered analytics...",
    intro:
      "Our AI development company in India helps businesses simplify their complex data with AI powered analytics and turn it into valuable decision-making, assisting data management to boost growth.",
    subFeatures: [
      {
        title: "AI-Driven Business Intelligence",
        description: "Our AI analytics tools help businesses get insightful details and make data-driven decisions.",
      },
      {
        title: "Big Data Processing",
        description:
          "With data processing technology, we help businesses manage and study extensive datasets to streamline processing and improve efficiency.",
      },
      {
        title: "Interactive Data Dashboards",
        description:
          "We develop simple and dynamic dashboards for real-time data visualization & insights, helping businesses drive success.",
      },
      {
        title: "AI-Powered Process Automation",
        description: "Our AI automation helps businesses facilitate workflows, save time, and reduce manual effort.",
      },
    ],
  },
  {
    id: "custom-ai-ml",
    title: "Custom AI/ML Development",
    shortText: "We provide customized artificial intelligence development services in India to help businesses transform their...",
    intro:
      "We provide customized artificial intelligence development services in India to help businesses transform their operations with AI potential and technologies and serve their customer the best.",
    subFeatures: [
      {
        title: "Complete AI Model Development",
        description:
          "We create personalized AI models from the concept and ensure they reflect your innovative idea with operation optimization, enhanced user experience, and data analysis, leading to better outcomes.",
      },
      {
        title: "AI Business Automation",
        description:
          "Focus on your core business process and take your business to new heights by automating repetitive operations efficiently, precisely, and quickly using AI.",
      },
      {
        title: "Domain-Specific AI Solutions",
        description:
          "We understand the distinct challenges of different businesses, which is why we implement specialized custom AI models for industries like healthcare, finance, eCommerce, and others.",
      },
      {
        title: "AI Decision Support Systems",
        description:
          "We create AI-powered intelligent systems that help businesses analyze data and develop strategies to make better decisions.",
      },
    ],
  },
  {
    id: "model-deploy-opt",
    title: "AI Model Deployment & Optimization",
    shortText: "Our AI ML development company provides seamless deployment...",
    intro:
      "Our AI ML development company provides seamless deployment and optimization of AI/ML models to ensure you get scalable solutions and enhance the efficiency of your business.",
    subFeatures: [
      {
        title: "Scalable AI Model Deployment",
        description:
          "We deploy custom, scalable, and robust AI models on cloud, edge, or on-premise environments that align with your business needs and deliver optimal performance.",
      },
      {
        title: "AI Model Optimization",
        description:
          "We refine AI models based on real-time data to improve the accuracy, effectiveness, and efficiency of your business and ensure you make result-driven decisions.",
      },
      {
        title: "ML Ops & Continuous AI Monitoring",
        description:
          "We keep working on AI models with automotive retraining mechanisms, version tracking, and real-time updates to ensure your business operations run efficiently and smoothly.",
      },
      {
        title: "AI Performance Acceleration",
        description:
          "To speed up business overall performance, we use powerful GPU, parallel processing, and advanced algorithms, helping reduce the processing time and boost efficiency.",
      },
    ],
  },
];

export const techToolsData: TechToolItem[] = [
  {
    title: "AI & ML Frameworks",
    techs: "TensorFlow, PyTorch, Scikit-learn, Keras",
    icon: "/assets/AI-and-ML-Frameworks.webp",
  },
  {
    title: "Cloud Platforms",
    techs: "Google Cloud AI, AWS AI, Microsoft Azure AI",
    icon: "/assets/Cloud-Platforms.webp",
  },
  {
    title: "Big Data & Analytics",
    techs: "Apache Spark, Hadoop, Tableau, Power BI",
    icon: "/assets/Big-Data-and-Analytics.webp",
  },
  {
    title: "Computer Vision",
    techs: "OpenCV, YOLO, TensorFlow Object Detection API",
    icon: "/assets/Computer-Vision.webp",
  },
  {
    title: "Natural Language Processing (NLP)",
    techs: "NLTK, SpaCy, Hugging Face Transformers",
    icon: "/assets/Natural-Language-Processing.webp",
  },
  {
    title: "AI Deployment Tools",
    techs: "Docker, Kubernetes, Flask, FastAPI",
    icon: "/assets/AI-Deployment-Tools.webp",
  },
];

export const whyChooseData: WhyChooseItem[] = [
  {
    number: "01",
    title: "Industry Expertise",
    description:
      "With years of working for many industries like manufacturing, healthcare, retail, and more, our AI ML development company understands your business needs and concerns and creates strategies that drive success.",
  },
  {
    number: "02",
    title: "Custom AI Models",
    description:
      "As a reputed AI development company in India, we offer customized AI solutions to meet the specific and exact requirements of your business — whether you want automated tasks, predictive analysis, or biometric authentication.",
  },
  {
    number: "03",
    title: "Advanced Technology",
    description:
      "At our AI ML development company, we use advanced technology like the latest AI framework, cloud platform, data analytics, and natural language processing to optimize your business performance.",
  },
  {
    number: "04",
    title: "Scalable & Secure Solutions",
    description:
      "Focusing on scalability & security, our AI development company in India designs AI models to function seamlessly when you grow your business as per the evolving demands and compliance with strict security protocols to keep data safe.",
  },
  {
    number: "05",
    title: "Dedicated AI Engineers",
    description:
      "At Invoidea, we have a dedicated team of skilled AI engineers who deliver tailored & innovative solutions. From planning to deployment, they keep you updated throughout the process and ensure you achieve a desirable result.",
  },
  {
    number: "06",
    title: "End-to-End AI Implementation",
    description:
      "We are a renowned AI development company that provides end-to-end solutions from scratch. Along with our post-launch support, we ensure you not only optimize business processing but also keep performing well every time.",
  },
];

export const timelineStepsData: TimelineStepItem[] = [
  {
    step: "01",
    title: "Requirement Analysis",
    description: "In the first stage, we consult with clients to understand their business needs and challenges and create strategies.",
  },
  {
    step: "02",
    title: "Data Collection & Processing",
    description: "We collect relevant data from different sources and process data for model training.",
  },
  {
    step: "03",
    title: "Model Development & Training",
    description: "Now, we identify the right AI/ML algorithms and train models to use datasets for automation.",
  },
  {
    step: "04",
    title: "Testing & Validation",
    description: "To ensure the high accuracy of the model and performance, we test it and optimize it if required.",
  },
  {
    step: "05",
    title: "Deployment & Integration",
    description: "At this moment, we integrate AI models into business applications that streamline operations.",
  },
  {
    step: "06",
    title: "Monitoring & Continuous Improvement",
    description: "At the last stage, we track real-time performance and adjust accordingly if required for long-term success.",
  },
];

export const industriesData: IndustryItem[] = [
  {
    title: "Healthcare",
    description: "AI-driven diagnostics, patient monitoring, and personalized treatment plans.",
    icon: "/assets/ai-and-ml-development-Healthcare.webp",
  },
  {
    title: "Fintech",
    description: "Fraud detection, automated trading, and risk assessment models.",
    icon: "/assets/ai-and-ml-development-Fintech.webp",
  },
  {
    title: "Real Estate",
    description: "AI-powered property valuation, predictive analytics, & smart home solutions.",
    icon: "/assets/ai-and-ml-development-Real-Estate.webp",
  },
  {
    title: "Education",
    description: "AI-based learning platforms, virtual tutors, and automated grading.",
    icon: "/assets/ai-and-ml-development-Education.webp",
  },
  {
    title: "Retail & E-commerce",
    description: "Personalized recommendations, demand forecasting, & AI chatbots.",
    icon: "/assets/ai-and-ml-development-Retail-and-Ecommerce.webp",
  },
  {
    title: "Manufacturing",
    description: "Predictive maintenance, process automation, and AI-driven quality control.",
    icon: "/assets/ai-and-ml-development-Manufacturing.webp",
  },
  {
    title: "Logistics & Supply Chain",
    description: "AI-powered route optimization, demand prediction, and automated inventory management.",
    icon: "/assets/ai-and-ml-development-Logistics-and-Supply-Chain.webp",
  },
  {
    title: "Media & Entertainment",
    description: "AI content recommendations, automated video editing, and sentiment analysis.",
    icon: "/assets/ai-and-ml-development-Media-and-Entertainment.webp",
  },
];

export const faqData: FAQItem[] = [
  {
    id: "faq_0",
    question: "What industries can benefit from AI/ML solutions?",
    answer:
      "Almost every industry can integrate AI and ML solutions to automate their process, enhance user experience & improve their decision-making. From medical imaging analysis, inventory forecasting, quality control, to real-time tracking, all sizes of businesses can gain benefits from AI and ML technologies. As a reputed AI development company in India, we also provide AI/ML solutions for many industries, such as:",
    bullets: ["Healthcare", "Fintech", "Real Estate", "Education", "E-commerce", "Others"],
  },
  {
    id: "faq_1",
    question: "How much time does it take to develop an AI solution?",
    answer:
      "The duration of an AI solution depends on its complexity, models, and compatibility. An AI ML development company can integrate an AI chatbot, real-time data analytics, AI recommendations, and other specific features. If you have a small project and need just a few AI models integration, it will take less time. On the other hand, if your project is more complex and needs more AI solutions, then the time will be extended.",
  },
  {
    id: "faq_2",
    question: "How much does AI/ML development cost?",
    answer:
      "The cost depends on the project scope, such as specific requirements and budget. If you want to integrate basic features like an AI chatbot, then the cost will be less while more enhancements like customer behavior reports, market analysis, and real-time tracking will extend the cost of development.",
  },
  {
    id: "faq_3",
    question: "Can AI improve my customer engagement?",
    answer:
      "Yes! We are a top AI development company in India that can integrates AI chatbots, recommendation engines & personalization support, and more into your business. This enhancement helps improve customer experience, boost engagement and increase sales.",
  },
  {
    id: "faq_4",
    question: "What services does your AI/ML development company offer?",
    answer:
      "At our AI and machine learning development company, we offer a wide range of Artificial Intelligence development services, such as:",
    bullets: [
      "Computer Vision",
      "NPL (Natural Language Processing)",
      "Recommendation Engines",
      "Chatbot Development",
      "Custom AI Solutions",
    ],
  },
];

