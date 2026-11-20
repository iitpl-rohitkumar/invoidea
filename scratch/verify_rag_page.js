const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1440,900']
  });
  
  const page = await browser.newPage();
  
  // Desktop 1440x900
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/rag-development', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  await new Promise(r => setTimeout(r, 2000));

  // Take desktop full screenshot
  await page.screenshot({ path: path.resolve('scratch', 'rag_desktop_full.png'), fullPage: true });
  console.log("Captured rag_desktop_full.png");

  // Hero viewport screenshot
  await page.screenshot({ path: path.resolve('scratch', 'rag_hero.png'), clip: { x: 0, y: 0, width: 1440, height: 860 } });
  console.log("Captured rag_hero.png");

  // Test Tech Stack tab switching
  const tabs = await page.$$('.tech-tab');
  if (tabs.length >= 3) {
    await tabs[2].click(); // click Vector Databases
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.resolve('scratch', 'rag_tech_tab_switched.png') });
    console.log("Captured rag_tech_tab_switched.png");
  }

  // Test FAQ accordion
  const faqButtons = await page.$$('.faq-section .accordion-button');
  if (faqButtons.length > 0) {
    await faqButtons[0].click();
    await new Promise(r => setTimeout(r, 800));
    await page.screenshot({ path: path.resolve('scratch', 'rag_faq_opened.png') });
    console.log("Captured rag_faq_opened.png");
  }

  // Mobile 390px
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/rag-development', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.resolve('scratch', 'rag_mobile.png'), fullPage: true });
  console.log("Captured rag_mobile.png");

  await browser.close();
  console.log("All Puppeteer tests complete successfully!");
})();
