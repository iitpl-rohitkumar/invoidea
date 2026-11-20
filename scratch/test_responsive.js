const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Test tablet (768px)
  await page.setViewport({ width: 768, height: 1024 });
  await page.goto('http://localhost:3000/ai-integration-services', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.resolve('scratch', 'tablet_view.png'), fullPage: false });
  console.log('Tablet screenshot captured');

  // Test mobile (390px)
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/ai-integration-services', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: path.resolve('scratch', 'mobile_view.png'), fullPage: false });
  console.log('Mobile screenshot captured');

  await browser.close();
})();

