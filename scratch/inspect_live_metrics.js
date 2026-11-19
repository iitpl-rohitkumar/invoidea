const puppeteer = require('puppeteer-core');

async function inspectLive() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('https://invoidea.com/ai-chatbot-development-company', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  const info = await page.evaluate(() => {
    const header = document.querySelector('header');
    const hero = document.querySelector('section');
    const content = document.querySelector('.banner-content-wrapper') || document.querySelector('.hero-content');
    const heading = document.querySelector('h1, h2.subheading');

    const toObj = (r) => r ? ({ top: r.top, bottom: r.bottom, height: r.height, y: r.y }) : null;

    return {
      header: {
        rect: toObj(header ? header.getBoundingClientRect() : null),
        position: header ? window.getComputedStyle(header).position : null,
        top: header ? window.getComputedStyle(header).top : null,
        height: header ? window.getComputedStyle(header).height : null,
      },
      hero: {
        rect: toObj(hero ? hero.getBoundingClientRect() : null),
        position: hero ? window.getComputedStyle(hero).position : null,
        paddingTop: hero ? window.getComputedStyle(hero).paddingTop : null,
      },
      content: {
        rect: toObj(content ? content.getBoundingClientRect() : null),
        paddingTop: content ? window.getComputedStyle(content).paddingTop : null,
      },
      heading: {
        rect: toObj(heading ? heading.getBoundingClientRect() : null),
      }
    };
  });

  console.log('LIVE INVOIDEA METRICS:\n', JSON.stringify(info, null, 2));

  // Now inspect our local site for comparison!
  await page.goto('http://localhost:3000/ai-chatbot-development-company', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  const localInfo = await page.evaluate(() => {
    const header = document.querySelector('header');
    const hero = document.querySelector('section');
    const content = document.querySelector('.banner-content-wrapper') || document.querySelector('.hero-content');
    const heading = document.querySelector('h1, h2.subheading');

    const toObj = (r) => r ? ({ top: r.top, bottom: r.bottom, height: r.height, y: r.y }) : null;

    return {
      header: {
        rect: toObj(header ? header.getBoundingClientRect() : null),
        position: header ? window.getComputedStyle(header).position : null,
        top: header ? window.getComputedStyle(header).top : null,
        height: header ? window.getComputedStyle(header).height : null,
      },
      hero: {
        rect: toObj(hero ? hero.getBoundingClientRect() : null),
        position: hero ? window.getComputedStyle(hero).position : null,
        paddingTop: hero ? window.getComputedStyle(hero).paddingTop : null,
      },
      content: {
        rect: toObj(content ? content.getBoundingClientRect() : null),
        paddingTop: content ? window.getComputedStyle(content).paddingTop : null,
      },
      heading: {
        rect: toObj(heading ? heading.getBoundingClientRect() : null),
      }
    };
  });

  console.log('\nLOCAL SITE METRICS:\n', JSON.stringify(localInfo, null, 2));

  await browser.close();
}

inspectLive().catch(console.error);
