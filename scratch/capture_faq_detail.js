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

  // Open first FAQ
  const buttons = await page.$$('.faq-section .accordion-button');
  if (buttons.length > 0) {
    await buttons[0].click();
    await new Promise(r => setTimeout(r, 500));
  }

  const faqEl = await page.$('.faq-section');
  if (faqEl) {
    await faqEl.screenshot({ path: path.resolve('scratch', 'faq_detail.png') });
    console.log('FAQ detail screenshot saved');
  }

  await browser.close();
})();

