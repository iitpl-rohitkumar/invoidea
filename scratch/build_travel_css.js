const fs = require('fs');
const path = require('path');

const extractedCss = fs.readFileSync('scratch/travel_extracted.css', 'utf8');

const customStyles = `
/* Travel App Development Custom Styles */

:root {
  --theme-color-1: #f79b1f;
  --theme-color-2: #17B4C8;
  --sub-heading-color: #f79b1f;
  --theme-teal: #17B4C8;
  --theme-btn: linear-gradient(90deg, #f79b1f 0%, #f16b22 100%);
  --light-text: rgba(255, 255, 255, 0.75);
}

.travel-app-page {
  font-family: 'Mulish', sans-serif;
  color: #1e1d28;
  overflow-x: hidden;
}

.travel-app-page h1,
.travel-app-page h2.heading-2,
.travel-app-page h3.heading-2,
.travel-app-page .heading-2 {
  font-family: 'DM Serif Text', serif;
  font-weight: 400;
  letter-spacing: -0.01em;
}

.subheading,
.travel-app-page .subheading {
  color: #f79b1f;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  display: inline-block;
  margin-bottom: 12px;
}

.ptb {
  padding-top: 80px;
  padding-bottom: 80px;
}

@media (max-width: 768px) {
  .ptb {
    padding-top: 50px;
    padding-bottom: 50px;
  }
}

.theme-btn {
  background: var(--theme-btn);
  color: #fff !important;
  border: none;
  padding: 13px 30px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 15px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  text-decoration: none;
  cursor: pointer;
}

.theme-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(247, 155, 31, 0.35);
  color: #fff !important;
}

/* HERO BANNER */
.mobile-app-main {
  min-height: 500px;
  height: min-content !important;
  position: relative;
  display: flex;
  align-items: center;
  background-color: #021626;
  overflow: hidden;
  padding: 110px 0 70px;
}

.mobile-app-main picture img {
  position: absolute;
  top: 0px;
  height: 100%;
  right: 0px;
  width: 100%;
  object-fit: cover;
}

.banner-note {
  font-size: 13.5px;
  color: rgba(255, 255, 255, 0.85);
  margin-top: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.banner-note i {
  color: #17B4C8;
}

/* SECTION 2 CORE SERVICES */
.industry-core-service-box {
  background: #fff;
  border: 1px solid #e2eff6;
  border-radius: 14px;
  padding: 32px 24px;
  text-align: center;
  margin-top: 25px;
  transition: all 0.3s ease;
  height: calc(100% - 25px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.industry-core-service-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(23, 180, 200, 0.12);
  border-color: #17B4C8;
}

.industry-core-service-box h4 {
  font-size: 22px;
  font-weight: 700;
  color: #021626;
  margin-bottom: 12px;
}

.industry-core-service-box p {
  font-size: 14.5px;
  line-height: 1.65;
  color: #666;
  flex-grow: 1;
}

.industry-core-service-box button {
  border-radius: 6px;
  border: 1px solid #16b2c6;
  background: rgba(22, 178, 198, 0.12);
  padding: 10px 24px;
  transition: all 0.25s ease;
  margin-top: 15px;
}

.industry-core-service-box button a {
  color: #16b2c6;
  font-weight: 700;
  text-decoration: none;
  font-size: 14px;
}

.industry-core-service-box button:hover {
  background: #16b2c6;
}

.industry-core-service-box button:hover a {
  color: #fff;
}

/* APP FEATURE BOXES */
.industry-appdevelopment-box {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px 16px;
  text-align: center;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.industry-appdevelopment-box:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: #17B4C8;
  transform: translateY(-3px);
}

.industry-appdevelopment-box svg {
  margin-bottom: 12px;
}

.industry-appdevelopment-box p {
  color: #fff;
  font-size: 13.5px;
  font-weight: 600;
  margin: 0;
  line-height: 1.4;
}

/* SECTION 6: VISUAL BREAK */
.industry-bg-cover-img {
  background: url(/assets/industry-bg-cover-img.webp) bottom center/cover no-repeat;
  height: 100px;
}

/* SECTION 7: AI FEATURES */
.industry-app-feature-wrapper {
  padding: 70px 0;
}

.ai-feature-card {
  padding: 24px;
  border-bottom: 1px solid #eee;
  transition: all 0.3s ease;
}

.ai-feature-card:hover {
  background: #fbfdfe;
}

.ai-feature-num {
  font-size: 28px;
  font-weight: 800;
  color: #17B4C8;
  opacity: 0.8;
  line-height: 1;
  margin-bottom: 8px;
}

.ai-feature-card h5 {
  font-size: 18px;
  font-weight: 700;
  color: #021626;
  margin-bottom: 8px;
}

.ai-feature-card p {
  font-size: 14.5px;
  color: #666;
  line-height: 1.65;
  margin: 0;
}

/* SECTION 8: GRADIENT BG */
.industry-gradient-bg {
  background: radial-gradient(circle at left, #01212e 0%, #000000 45%, #011627 100%);
}

.industry-gradient-bg .service-item {
  display: grid;
  grid-template-columns: 60px 1fr;
  gap: 20px;
  padding: 22px 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  align-items: flex-start;
  position: relative;
  transition: all 0.3s ease;
}

.industry-gradient-bg .service-item:hover {
  background: rgba(255, 255, 255, 0.03);
  padding-left: 24px;
}

.industry-gradient-bg .service-item::before {
  content: "";
  position: absolute;
  left: -20px;
  top: 0;
  width: 4px;
  height: 100%;
  background: #17B4C8;
  opacity: 0;
  transition: all 0.3s ease;
}

.industry-gradient-bg .service-item:hover::before {
  opacity: 1;
  left: 0;
}

.industry-gradient-bg .service-number {
  width: 50px;
  height: 50px;
  border: 1px solid rgba(23, 180, 200, 0.5);
  color: #17B4C8;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  font-weight: 700;
}

.industry-gradient-bg .service-content h3 {
  font-size: 19px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
}

.industry-gradient-bg .service-content p {
  color: rgba(255, 255, 255, 0.75);
  font-size: 14.5px;
  line-height: 1.65;
  margin: 0;
}

/* SECTION 10: PORTFOLIO */
.portfolio-card {
  background: #111;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 30px;
  transition: all 0.35s ease;
}

.portfolio-card:hover {
  border-color: #17B4C8;
  transform: translateY(-5px);
}

.portfolio-card img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.portfolio-card-content {
  padding: 30px;
}

.portfolio-card-content h4 {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 12px;
}

.portfolio-card-content p {
  color: rgba(255, 255, 255, 0.72);
  font-size: 14.5px;
  line-height: 1.65;
}

.portfolio-stats {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}

.portfolio-stat-item h4 {
  color: #17B4C8;
  font-size: 26px;
  font-weight: 800;
  margin: 0;
}

.portfolio-stat-item p {
  font-size: 12.5px;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

/* SECTION 11: WHY CHOOSE */
.why-choose-card {
  background: #fff;
  border-radius: 14px;
  padding: 28px 24px;
  height: 100%;
  transition: all 0.3s ease;
  border: 1px solid #d7eef9;
  box-shadow: 0 8px 24px rgba(11, 134, 200, 0.05);
}

.why-choose-card:hover {
  transform: translateY(-5px);
  border-color: #17B4C8;
  box-shadow: 0 14px 35px rgba(23, 180, 200, 0.12);
}

.why-choose-card h5 {
  font-size: 18px;
  font-weight: 700;
  color: #021626;
  margin-bottom: 10px;
}

.why-choose-card p {
  font-size: 14px;
  color: #555;
  line-height: 1.65;
  margin: 0;
}

/* SECTION 12: TRAVEL NICHES */
.niche-card {
  background: #1c1c1c;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
  overflow: hidden;
  height: 100%;
  transition: all 0.3s ease;
}

.niche-card:hover {
  border-color: #17B4C8;
  transform: translateY(-5px);
}

.niche-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.niche-card-body {
  padding: 24px;
}

.niche-card-body h5 {
  font-size: 18.5px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 10px;
}

.niche-card-body p {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.65;
  margin: 0;
}

/* SECTION 13: TECH STACK */
.tech-tabs-wrapper {
  display: flex;
  gap: 0;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
  margin-top: 35px;
  border: 1px solid #e5ebf0;
}

.tech-tabs-nav {
  display: flex;
  flex-direction: column;
  width: 280px;
  min-width: 280px;
  background: #f7fafd;
  border-right: 1px solid #e5ebf0;
}

.tech-tab {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 18px 22px;
  background: transparent;
  border: none;
  border-left: 3px solid transparent;
  color: #4a5568;
  font-size: 15px;
  font-weight: 600;
  text-align: left;
  transition: all 0.25s ease;
  cursor: pointer;
  border-bottom: 1px solid #edf2f7;
}

.tech-tab i {
  font-size: 18px;
  width: 22px;
  color: #17B4C8;
}

.tech-tab:hover {
  background: #eef5fb;
  color: #021626;
}

.tech-tab.active {
  background: #fff;
  color: #17B4C8;
  border-left-color: #17B4C8;
}

.tech-tabs-content {
  flex: 1;
  background: #fff;
  min-height: 380px;
}

.tech-panel {
  display: none;
  padding: 40px;
  height: 100%;
}

.tech-panel.active {
  display: block;
  animation: techFade 0.3s ease-in-out;
}

.tech-panel-heading h5 {
  font-size: 20px;
  font-weight: 700;
  color: #021626;
  margin-bottom: 24px;
}

.tech-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.tech-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  background: #fafcfd;
  border: 1px solid #edf1f4;
  border-radius: 10px;
  transition: all 0.3s ease;
  min-height: 64px;
}

.tech-item:hover {
  background: #fff;
  border-color: #17B4C8;
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(23, 180, 200, 0.1);
}

.tech-item strong {
  font-size: 14.5px;
  color: #021626;
  font-weight: 700;
}

.tech-item svg,
.tech-item img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  flex-shrink: 0;
}

.tech-item i {
  font-size: 24px;
  color: #17B4C8;
  width: 32px;
  text-align: center;
  flex-shrink: 0;
}

@media (max-width: 991px) {
  .tech-tabs-wrapper {
    flex-direction: column;
  }
  .tech-tabs-nav {
    width: 100%;
    min-width: 100%;
    flex-direction: row;
    overflow-x: auto;
    border-right: none;
    border-bottom: 1px solid #e5ebf0;
  }
  .tech-tab {
    white-space: nowrap;
    padding: 14px 18px;
    border-left: none;
    border-bottom: 3px solid transparent;
  }
  .tech-tab.active {
    border-left-color: transparent;
    border-bottom-color: #17B4C8;
  }
  .tech-items {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 575px) {
  .tech-items {
    grid-template-columns: 1fr;
  }
  .tech-panel {
    padding: 24px 16px;
  }
}

/* SECTION 15: PROCESS */
.process-step-card {
  background: #fbfdfe;
  border: 1px solid #e5eff6;
  border-radius: 14px;
  padding: 30px;
  height: 100%;
  position: relative;
  transition: all 0.3s ease;
}

.process-step-card:hover {
  border-color: #17B4C8;
  transform: translateY(-5px);
  box-shadow: 0 15px 35px rgba(23, 180, 200, 0.08);
}

.process-step-num {
  font-size: 36px;
  font-weight: 800;
  color: #17B4C8;
  line-height: 1;
  margin-bottom: 14px;
}

.process-step-card h4 {
  font-size: 19px;
  font-weight: 700;
  color: #021626;
  margin-bottom: 10px;
}

.process-step-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.65;
  margin: 0;
}

/* SECTION 16: FAQ */
.faq-section {
  background: #fff;
}

.faq-section .accordion-item {
  border: 1px solid #e8eff5;
  border-radius: 10px !important;
  margin-bottom: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-section .accordion-button {
  background-color: #fbfdfe;
  color: #021626;
  font-size: 16.5px;
  font-weight: 700;
  padding: 18px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: all 0.25s ease;
}

.faq-section .accordion-button::before,
.faq-section .accordion-button::after {
  display: none !important;
  content: none !important;
}

.faq-section .accordion-button:hover {
  background-color: #f4f9fd;
}

.faq-section .accordion-button:not(.collapsed) {
  background-color: #edf8fa;
  color: #17B4C8;
  border-bottom: 1px solid #d7edf2;
}

.faq-arrow-icon {
  font-size: 13px;
  color: #9aa8b5;
  transition: transform 0.3s ease;
}

.faq-section .accordion-button:not(.collapsed) .faq-arrow-icon {
  transform: rotate(180deg);
  color: #17B4C8;
}

.faq-section .accordion-body {
  padding: 20px 24px;
  color: #4a5568;
  font-size: 15px;
  line-height: 1.7;
  background: #fff;
}

/* SECTION 17: REACH OUT */
.footer-form-wrapper {
  background-size: cover !important;
  background-position: center !important;
}

.talk-card {
  background: linear-gradient(135deg, #111 0%, #1e2229 100%);
  color: #fff;
  border-radius: 16px;
  padding: 36px 32px;
  margin-top: 30px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.talk-card h4 {
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 10px;
  color: #fff;
}

.talk-card p {
  color: rgba(255, 255, 255, 0.75);
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 24px;
}

.project-form {
  background: #fff;
  border-radius: 18px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08);
}

.project-form .form-label {
  font-size: 13.5px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
}

.project-form .form-control,
.project-form .form-select {
  border: 1px solid #dce3eb;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 14.5px;
  color: #1e1d28;
  transition: all 0.25s ease;
}

.project-form .form-control:focus,
.project-form .form-select:focus {
  border-color: #f79b1f;
  outline: none;
  box-shadow: 0 0 0 3px rgba(247, 155, 31, 0.15);
}

.nda-text {
  font-size: 13.5px;
  color: #555;
}

.nda-checkbox label {
  font-size: 13.5px;
  color: #333;
}

button#submit,
.btn-submit {
  background: #f79b1f !important;
  color: #fff !important;
  border: none !important;
  font-size: 16px !important;
  font-weight: 700 !important;
  padding: 14px 28px !important;
  border-radius: 8px !important;
  transition: all 0.3s ease !important;
  cursor: pointer !important;
  display: block !important;
  width: 100% !important;
}

button#submit:hover,
.btn-submit:hover {
  background: #e28912 !important;
  color: #fff !important;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(247, 155, 31, 0.35);
}
`;

const finalCss = customStyles + '\n\n' + extractedCss;

const targetFile = path.resolve('app', '(site)', 'travel-app-development-company', 'styles', 'travelAppDevelopment.css');
fs.mkdirSync(path.dirname(targetFile), { recursive: true });
fs.writeFileSync(targetFile, finalCss, 'utf8');

console.log(`Successfully created travelAppDevelopment.css (${finalCss.length} bytes)`);

