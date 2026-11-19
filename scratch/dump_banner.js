const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function dumpBanner() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('https://invoidea.com/healthcare-app-development-company', {
    waitUntil: 'networkidle2',
    timeout: 35000
  });

  const bannerHtml = await page.evaluate(() => {
    const banner = document.querySelector('.banner') || document.querySelector('.banner-section') || document.querySelector('.hero-section');
    return banner ? banner.outerHTML : 'NOT FOUND';
  });

  fs.writeFileSync('scratch/healthcare/section_0_banner.html', bannerHtml);
  console.log('Saved banner HTML, length:', bannerHtml.length);

  await browser.close();
}

dumpBanner().catch(console.error);

