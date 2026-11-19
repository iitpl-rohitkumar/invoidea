const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outDir = path.join('scratch', 'real_estate');

async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 400;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          window.scrollTo(0, 0);
          resolve();
        }
      }, 80);
    });
  });
}

async function verify() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  // Desktop
  await page.setViewport({ width: 1440, height: 900 });
  await page.goto('http://localhost:3000/real-estate-app-development-company', { waitUntil: 'networkidle2' });
  await autoScroll(page);
  await new Promise(r => setTimeout(r, 800));

  const desktop = await page.evaluate(() => {
    const header = document.querySelector('header, .main-header, .header-wrapper');
    const hero = document.querySelector('.real-estate-hero');
    const subheading = hero ? hero.querySelector('.subheading') : null;
    return {
      headerBottom: header ? header.getBoundingClientRect().bottom : 0,
      subheadingTop: subheading ? subheading.getBoundingClientRect().top : null,
      images: Array.from(document.querySelectorAll('img')).map(i => ({
        src: i.src,
        width: i.naturalWidth,
        height: i.naturalHeight,
        loaded: i.complete && i.naturalWidth > 0
      }))
    };
  });

  console.log('Desktop Header Bottom:', desktop.headerBottom);
  console.log('Desktop Subheading Top:', desktop.subheadingTop);
  console.log('Loaded images count:', desktop.images.filter(i => i.loaded).length, '/', desktop.images.length);

  await page.screenshot({ path: path.join(outDir, 'desktop_full.png'), fullPage: true });
  console.log('Saved desktop_full.png');

  // Mobile
  await page.setViewport({ width: 375, height: 812, isMobile: true });
  await page.goto('http://localhost:3000/real-estate-app-development-company', { waitUntil: 'networkidle2' });
  await autoScroll(page);
  await new Promise(r => setTimeout(r, 800));

  const mobile = await page.evaluate(() => {
    const header = document.querySelector('header, .main-header, .header-wrapper');
    const hero = document.querySelector('.real-estate-hero');
    const subheading = hero ? hero.querySelector('.subheading') : null;
    return {
      headerBottom: header ? header.getBoundingClientRect().bottom : 0,
      subheadingTop: subheading ? subheading.getBoundingClientRect().top : null,
      isOverlapping: subheading ? subheading.getBoundingClientRect().top < (header ? header.getBoundingClientRect().bottom : 0) : false
    };
  });

  console.log('Mobile Metrics:', mobile);
  await page.screenshot({ path: path.join(outDir, 'mobile_full.png'), fullPage: true });
  console.log('Saved mobile_full.png');

  await browser.close();
}

verify().catch(console.error);
