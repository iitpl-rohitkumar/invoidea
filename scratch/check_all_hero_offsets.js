const puppeteer = require('puppeteer-core');

const routes = [
  '/machine-learning-development',
  '/ai-app-development-company',
  '/ai-chatbot-development-company',
  '/ai-agent-development-company',
  '/agentic-ai-development',
  '/ai-software-development-company',
  '/llm-development',
  '/ai-consulting-services',
  '/ai-development-company',
  '/ai-ml-development-company'
];

async function checkAllHeroOffsets() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Testing header and hero heading positions on localhost:3000:\n');

  for (const route of routes) {
    await page.goto(`http://localhost:3000${route}`, { waitUntil: 'domcontentloaded' });
    const pos = await page.evaluate(() => {
      const header = document.querySelector('header');
      const headerBottom = header ? header.getBoundingClientRect().bottom : 0;
      const heading = document.querySelector('h1, h2.subheading, .banner-content-wrapper');
      const headingTop = heading ? heading.getBoundingClientRect().top : 0;
      const subheading = document.querySelector('.subheading, .subheading-text');
      const subheadingTop = subheading ? subheading.getBoundingClientRect().top : 0;
      const h1 = document.querySelector('h1, .heading-2');
      const h1Top = h1 ? h1.getBoundingClientRect().top : 0;

      return {
        headerBottom,
        subheadingTop,
        h1Top,
        isOverlapping: subheadingTop < headerBottom || h1Top < headerBottom
      };
    });

    const status = pos.isOverlapping ? '❌ OVERLAPPING' : '✅ CLEAN';
    console.log(`${status} ${route}: headerBottom=${pos.headerBottom.toFixed(1)}px, subheadingTop=${pos.subheadingTop.toFixed(1)}px, h1Top=${pos.h1Top.toFixed(1)}px`);
  }

  await browser.close();
}

checkAllHeroOffsets().catch(console.error);

