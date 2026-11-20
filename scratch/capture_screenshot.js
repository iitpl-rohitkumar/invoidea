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

  console.log('Navigating to http://localhost:3000/ai-integration-services ...');
  await page.goto('http://localhost:3000/ai-integration-services', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  // wait a bit for images and styles
  await new Promise(r => setTimeout(r, 2000));

  const screenshotPath = path.resolve('scratch', 'ai_integration_page_full.png');
  await page.screenshot({ path: screenshotPath, fullPage: true });
  console.log('Full page screenshot saved to:', screenshotPath);

  // Take hero screenshot
  const heroPath = path.resolve('scratch', 'hero.png');
  await page.screenshot({ path: heroPath, clip: { x: 0, y: 0, width: 1440, height: 900 } });
  console.log('Hero screenshot saved to:', heroPath);

  await browser.close();
})();

