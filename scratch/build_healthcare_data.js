const fs = require('fs');
const path = require('path');

function clean(str) {
  return str.replace(/\s+/g, ' ').trim();
}

// 1. FAQs
const faqs = JSON.parse(fs.readFileSync('scratch/healthcare/parsed_faqs.json', 'utf8'));

// 2. Common Grid (12 items)
const gridHtml = fs.readFileSync('scratch/healthcare/section_3_common-grid_ptb.html', 'utf8');
const gridItems = [];
const stepMatches = [...gridHtml.matchAll(/<div class="common-grid-step"[^>]*>([\s\S]*?)<\/div>/g)];
for (const m of stepMatches) {
  const num = clean(m[1].match(/<span class="num">([^<]+)<\/span>/)?.[1] || '');
  const title = clean(m[1].match(/<h4>([^<]+)<\/h4>/)?.[1] || '');
  const desc = clean(m[1].match(/<p class="text-muted">([^<]+)<\/p>/)?.[1] || '');
  gridItems.push({ num, title, desc });
}

// 3. Benefits (8 items)
const benefitsHtml = fs.readFileSync('scratch/healthcare/section_5_Benefits_ptb.html', 'utf8');
const benefitItems = [];
const bMatches = [...benefitsHtml.matchAll(/<div class="nummber"[^>]*>\s*<strong>([^<]+)<\/strong>\s*<\/div>[\s\S]*?<div class="content"[^>]*>\s*<h5>([^<]+)<\/h5>\s*<p>([\s\S]*?)<\/p>/g)];
for (const m of bMatches) {
  benefitItems.push({
    num: clean(m[1]),
    title: clean(m[2]),
    desc: clean(m[3])
  });
}

// 4. Services (8 items)
const servicesHtml = fs.readFileSync('scratch/healthcare/section_2_industry-gradient-bg_ptb.html', 'utf8');
const serviceItems = [];
const sMatches = [...servicesHtml.matchAll(/<div class="service-number"[^>]*>\s*([^<]+)\s*<\/div>[\s\S]*?<div class="service-content"[^>]*>\s*<h3>([^<]+)<\/h3>\s*<p>([\s\S]*?)<\/p>/g)];
for (const m of sMatches) {
  serviceItems.push({
    num: clean(m[1]),
    title: clean(m[2]),
    desc: clean(m[3])
  });
}

// 5. Tech Matrix (8 rows)
const techHtml = fs.readFileSync('scratch/healthcare/section_6_devops-tech-matrix__ptb.html', 'utf8');
const techRows = [];
const rowMatches = [...techHtml.matchAll(/<div class="matrix-row"[^>]*>([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>/g)];
for (const m of rowMatches) {
  const icon = m[1].match(/<i class="([^"]+)"><\/i>/)?.[1] || '';
  const title = clean(m[1].match(/<h3>([^<]+)<\/h3>/)?.[1] || '');
  const toolSpans = [...m[1].matchAll(/<span><b>([^<]+)<\/b>([\s\S]*?)<\/span>/g)].map(t => ({
    name: clean(t[1]),
    desc: clean(t[2])
  }));
  techRows.push({ icon, title, tools: toolSpans });
}

// 6. Custom Steps (7 steps)
const procHtml = fs.readFileSync('scratch/healthcare/section_7_custom_ptb.html', 'utf8');
const procSteps = [];
const pMatches = [...procHtml.matchAll(/<div class="cutom-step-num"[^>]*>([^<]+)<\/div>\s*<div[^>]*>\s*<h3>([^<]+)<\/h3>\s*<p>([\s\S]*?)<\/p>/g)];
for (const m of pMatches) {
  procSteps.push({
    num: clean(m[1]),
    title: clean(m[2]),
    desc: clean(m[3])
  });
}

// 7. Why Choose Us (8 features)
const whyHtml = fs.readFileSync('scratch/healthcare/section_8_why-choose-us_ptb.html', 'utf8');
const whyItems = [];
const wMatches = [...whyHtml.matchAll(/<span class="fw-bold me-4">([^<]+)<\/span>\s*<div[^>]*>\s*<h6[^>]*>([\s\S]*?)<\/h6>\s*<p class="[^"]*">([\s\S]*?)<\/p>/g)];
for (const m of wMatches) {
  whyItems.push({
    num: clean(m[1]),
    title: clean(m[2]),
    desc: clean(m[3])
  });
}

console.log({
  faqsCount: faqs.length,
  gridItemsCount: gridItems.length,
  benefitItemsCount: benefitItems.length,
  serviceItemsCount: serviceItems.length,
  techRowsCount: techRows.length,
  procStepsCount: procSteps.length,
  whyItemsCount: whyItems.length
});

const tsContent = `// Healthcare App Development Company Page Data

export const healthcareHeroData = {
  tag: "On-Demand Healthcare Application",
  title: "Build Smarter Healthcare Apps with AI Features",
  desc: "We create secure healthcare apps and platforms that help connect patients as well as providers and healthcare workflows—with AI-powered capabilities built around your business needs.",
  ctaText: "Book a Free 30-Minute Consultation",
  ctaLink: "https://calendly.com/invoidea/30min",
  note: "No obligation • Speak directly with our AI Solutions Team",
  bannerBg: "/assets/healthcare-app-industry-banner.webp",
  stats: [
    { value: "1560+", label: "Projects Completed" },
    { value: "35+", label: "Countries Served" },
    { value: "98%", label: "Customer Retention" },
    { value: "8+Yrs", label: "In Industry" }
  ],
  form: {
    tag: "Start Your Project",
    title: "Get a Healthcare AI Plan",
    desc: "Share your requirements, and our healthcare AI experts will contact you."
  }
};

export const healthcareLeadingData = {
  tag: "Healthcare App Development Company in India",
  title: "Custom Healthcare Apps Built for Modern Care",
  paragraphs: [
    "Invoidea develops secure, HIPAA-compliant healthcare solutions for hospitals, clinics, HealthTech startups, and insurers. Healthcare apps & software have to be more reliable and secure than the typical business software. Systems outages interrupt clinical workflows and slow delivery of care, with potential consequences for quality and continuity of patient services. We build healthcare apps with just the right amount of security, performance, usability and regulatory compliance.",
    "That is why we build around the realities of healthcare from day one — complex workflows, sensitive patient data, strict compliance, and systems that are available when they matter most. From telemedicine and EHR platforms to hospital management systems and AI-powered healthcare app solutions, we combine thoughtful engineering with intelligent technology to make care more connected, efficient, and dependable."
  ],
  img: "/assets/One-Stop-Application-solution-for-Health-Care.webp"
};

export const healthcareServicesData = {
  tag: "Healthcare App Development Services in India",
  title: "End-to-End Healthcare App Development Solutions",
  paragraphs: [
    "We enable full lifecycle healthcare applications from discovery and compliance planning to development, deployment, and maintenance. Healthcare expertise, secure architecture, and AI capabilities are combined where we can create real value—helping to elevate patient care, enable clinical workflows, or ease operational burden. The solutions we develop are frequently a service mix.",
    "Each healthcare organization has workflows, systems, regulatory obligations, and users unique to itself, so off-the-shelf software just doesn’t fit all. We build custom healthcare applications for your processes, patients and care teams -- embedding AI-enabled features where they can boost efficiency, inform decisions, and lighten routine chore."
  ],
  items: ${JSON.stringify(serviceItems, null, 2)}
};

export const healthcareGridData = {
  tag: "Healthcare Mobile App Development Services",
  title: "Custom Apps for Every Healthcare Business Need",
  desc: "So far, we have developed almost all areas of the healthcare business, where we take established healthcare workflows, and enhance them with AI capabilities where they genuinely add value. To advanced hospital systems, we apply AI to automate tedious work, reveal meaningful insights, and enable superior operational and clinical decisions. Here's what comes up most often:",
  items: ${JSON.stringify(gridItems, null, 2)}
};

export const healthcareFunctionalityData = {
  tag: "Healthcare Mobile App Development Company",
  title: "Core Features for Healthcare App Development",
  desc: "A healthcare platform answers to three different audiences, and they don't want the same things. Patients want it simple. Providers want speed and accuracy in the middle of a shift. Administrators want visibility without living in a spreadsheet.",
  tabs: [
    {
      id: "patient",
      label: "Patient App View",
      intro: "Give patients a convenient digital healthcare experience with easy access to appointments, consultations, records, payments, and more.",
      image: "/assets/Healthcare-Home-Screens2.webp",
      features: [
        "User Registration & Insurance",
        "Doctor Search",
        "Appointment Booking",
        "Video Consultation",
        "Digital Prescriptions",
        "Health Records (EHR/EMR)",
        "In-App Payments",
        "Medication Reminders",
        "AI Health Assistant & Symptom Checker"
      ]
    },
    {
      id: "doctor",
      label: "Doctor Panel",
      intro: "Equip clinicians and medical professionals with intuitive dashboards, digital records, prescription writers, and scheduling tools.",
      image: "/assets/Healthcare-Login-Signup-Screens.webp",
      features: [
        "Doctor Profile & Availability Management",
        "Clinical Appointment Scheduling",
        "Digital E-Prescription Generator",
        "Patient EHR / EMR Medical History Access",
        "Secure High-Definition Video Consultations",
        "Lab & Diagnostic Report Reviews",
        "Clinical Notes & ICD-10 Diagnosis"
      ]
    },
    {
      id: "admin",
      label: "Admin Panel",
      intro: "Provide administrators with total visibility and command over operations, staff, billing, analytics, and regulatory compliance.",
      image: "/assets/Dashboard-and-Setting-Screens.webp",
      features: [
        "User Management (Doctors, Staff & Patients)",
        "Hospital & Multi-Clinic Ward Management",
        "Medical Billing, Invoicing & Claims Reports",
        "Operational Analytics & Clinical Metrics",
        "HIPAA & Security Compliance Monitoring",
        "Integrated Customer Support & Helpdesk"
      ]
    }
  ]
};

export const healthcareBenefitsData = {
  tag: "Custom Healthcare App Development Company India",
  title: "AI-Powered Features for Healthcare Apps",
  desc: "We design AI capabilities to assist in a clinical decision, not to make the decision. The result is a faster, more informed starting point for the provider. We create features powered by AI that enable clinical decisions without supplanting the provider’s judgment. Our high-performance solutions enable healthcare providers to quickly uncover relevant insights, recognize patterns, and deliver decisions with increased confidence. We develop every AI feature with transparency, security, and human oversight. The clinical decision always rests with the experienced healthcare provider.",
  items: ${JSON.stringify(benefitItems, null, 2)}
};

export const healthcareTechData = {
  tag: "Technology Stack",
  title: "The Technology Behind Secure AI Healthcare Apps",
  desc: "Stack decisions come down to clinical requirements, regulatory obligations, and where the platform needs to be years from now — not just what ships fastest this quarter.",
  rows: ${JSON.stringify(techRows, null, 2)}
};

export const healthcareProcessData = {
  tag: "Custom Medical Application Development",
  title: "Our Healthcare App Development Process",
  desc: "Healthcare software doesn't move in a straight line. Compliance, clinical input, and engineering happen at the same time, not one after another.",
  steps: ${JSON.stringify(procSteps, null, 2)}
};

export const healthcareWhyData = {
  tag: "Healthcare App Development Agency India",
  title: "Why Choose Invoidea as Your Healthcare App Development Company?",
  desc: "Hospital software requires more than typical digital tools — it has to unify patients, doctors, administrators, appointments, medical records, billing, and compliance within a single secure, connected platform. Our healthcare software solutions are built around these intricate processes and enable hospitals to simplify operations, enhance patient care, enable medical teams, and handle sensitive information more efficiently.",
  items: ${JSON.stringify(whyItems, null, 2)},
  image: "/assets/healthcare-industry-services.webp"
};

export const healthcareFAQData = {
  tag: "Frequently Asked Questions",
  title: "Answers to Your Healthcare App Development",
  faqs: ${JSON.stringify(faqs, null, 2)}
};
`;

const targetDir = 'app/(site)/healthcare-app-development-company/data';
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

fs.writeFileSync(path.join(targetDir, 'healthcareData.ts'), tsContent);
console.log('Successfully written healthcareData.ts!');
