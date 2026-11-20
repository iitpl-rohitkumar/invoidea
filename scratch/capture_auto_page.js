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

  await page.goto('http://localhost:3000/ai-automation-services', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  await new Promise(r => setTimeout(r, 2000));

  // Hero
  const heroPath = path.resolve('scratch', 'auto_hero.png');
  await page.screenshot({ path: heroPath, clip: { x: 0, y: 0, width: 1440, height: 860 } });
  console.log('Hero screenshot saved');

  // Services section
  const servicesEl = await page.$('.AI-powered-solutions-for-business-growth');
  if (servicesEl) {
    await servicesEl.screenshot({ path: path.resolve('scratch', 'auto_services.png') });
    console.log('Services screenshot saved');
  }

  // Why choose section
  const whyEl = await page.$('.our-Trusted-AI-and-ML-development-partner');
  if (whyEl) {
    await whyEl.screenshot({ path: path.resolve('scratch', 'auto_why.png') });
    console.log('Why screenshot saved');
  }

  // Process section
  const procEl = await page.$('.Why-Businesses-Choose-AI-banner-ML');
  if (procEl) {
    await procEl.screenshot({ path: path.resolve('scratch', 'auto_process.png') });
    console.log('Process screenshot saved');
  }

  // Industry section
  const indEl = await page.$('.AI-powered-solutions-for-every-industry');
  if (indEl) {
    await indEl.screenshot({ path: path.resolve('scratch', 'auto_industry.png') });
    console.log('Industry screenshot saved');
  }

  // FAQ section
  const faqEl = await page.$('.faq-section');
  if (faqEl) {
    await faqEl.screenshot({ path: path.resolve('scratch', 'auto_faq.png') });
    console.log('FAQ screenshot saved');
  }

  // Contact section
  const reachEl = await page.$('#reach-out-form');
  if (reachEl) {
    await reachEl.screenshot({ path: path.resolve('scratch', 'auto_reach.png') });
    console.log('Reach screenshot saved');
  }

  // Mobile test (390px)
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/ai-automation-services', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.resolve('scratch', 'auto_mobile.png'), clip: { x: 0, y: 0, width: 390, height: 844 } });
  console.log('Mobile screenshot saved');

  await browser.close();
})();

