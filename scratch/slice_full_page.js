const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/rag-development', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  // Section 2: Challenges
  const challenges = await page.$('.industry-gradient-bg');
  if (challenges) {
    await challenges.screenshot({ path: path.resolve('scratch', 'verify_sec_challenges.png') });
  }

  // Section 3: Services
  const services = await page.$('.our-Trusted-AI-and-ML-development-partner');
  if (services) {
    await services.screenshot({ path: path.resolve('scratch', 'verify_sec_services.png') });
  }

  // Section 4: Why Partner
  const why = await page.$('.why-partner-section');
  if (why) {
    await why.screenshot({ path: path.resolve('scratch', 'verify_sec_why.png') });
  }

  // Section 5: Case Studies
  const caseStudies = await page.$('.rag-case-studies');
  if (caseStudies) {
    await caseStudies.screenshot({ path: path.resolve('scratch', 'verify_sec_cases.png') });
  }

  // Section 7: Process
  const process = await page.$('.custom.process-section');
  if (process) {
    await process.screenshot({ path: path.resolve('scratch', 'verify_sec_process.png') });
  }

  // Section 8: Industry
  const industry = await page.$('.AI-powered-solutions-for-every-industry');
  if (industry) {
    await industry.screenshot({ path: path.resolve('scratch', 'verify_sec_industry.png') });
  }

  // Section 10: Reach Out
  const reach = await page.$('.footer-form-wrapper');
  if (reach) {
    await reach.screenshot({ path: path.resolve('scratch', 'verify_sec_reach.png') });
  }

  await browser.close();
  console.log("Sections captured successfully!");
})();

