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

  await page.goto('http://localhost:3000/ai-integration-services', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  // Click on FAQ 0 to open it
  const faqBtn = await page.$('.faq-section .accordion-button');
  if (faqBtn) {
    await faqBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.resolve('scratch', 'faq_opened.png'), clip: { x: 0, y: 3500, width: 1440, height: 600 } });
    console.log('FAQ clicked and captured');
  }

  // Click on Service accordion item 1 (CRM & ERP)
  const serviceBtns = await page.$$('.AI-powered-solutions-for-business-growth .accordion-button');
  if (serviceBtns && serviceBtns.length > 1) {
    await serviceBtns[1].click();
    await new Promise(r => setTimeout(r, 600));
    const sec = await page.$('.AI-powered-solutions-for-business-growth');
    if (sec) {
      await sec.screenshot({ path: path.resolve('scratch', 'service_opened.png') });
      console.log('Service accordion 2 clicked and captured');
    }
  }

  await browser.close();
})();

