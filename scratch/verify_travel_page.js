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
  await page.goto('http://localhost:3000/travel-app-development-company', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  await new Promise(r => setTimeout(r, 2000));

  // Hero
  await page.screenshot({ path: path.resolve('scratch', 'travel_hero.png'), clip: { x: 0, y: 0, width: 1440, height: 860 } });
  console.log("Captured travel_hero.png");

  // Traveler App section
  const travelerApp = await page.$('.customer-app-services-wrapper');
  if (travelerApp) {
    await travelerApp.screenshot({ path: path.resolve('scratch', 'travel_sec_traveler.png') });
    console.log("Captured travel_sec_traveler.png");
  }

  // AI Features section
  const aiFeat = await page.$('.industry-app-feature-wrapper');
  if (aiFeat) {
    await aiFeat.screenshot({ path: path.resolve('scratch', 'travel_sec_ai.png') });
    console.log("Captured travel_sec_ai.png");
  }

  // Niches section
  const niches = await page.$('.different-industries-wrapper');
  if (niches) {
    await niches.screenshot({ path: path.resolve('scratch', 'travel_sec_niches.png') });
    console.log("Captured travel_sec_niches.png");
  }

  // Tech tabs switching
  const tabs = await page.$$('.tech-tab');
  if (tabs.length >= 3) {
    await tabs[2].click(); // mobile tab
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.resolve('scratch', 'travel_tech_tab_switched.png') });
    console.log("Captured travel_tech_tab_switched.png");
  }

  // Reach out form
  const reach = await page.$('.footer-form-wrapper');
  if (reach) {
    await reach.screenshot({ path: path.resolve('scratch', 'travel_sec_reach.png') });
    console.log("Captured travel_sec_reach.png");
  }

  // Mobile 390px
  await page.setViewport({ width: 390, height: 844 });
  await page.goto('http://localhost:3000/travel-app-development-company', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.resolve('scratch', 'travel_mobile.png'), clip: { x: 0, y: 0, width: 390, height: 844 } });
  console.log("Captured travel_mobile.png");

  await browser.close();
  console.log("Puppeteer tests complete successfully!");
})();

