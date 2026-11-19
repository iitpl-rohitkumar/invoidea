const puppeteer = require('puppeteer-core');

async function testHealthcarePage() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to http://localhost:3000/healthcare-app-development-company ...');
  const res = await page.goto('http://localhost:3000/healthcare-app-development-company', {
    waitUntil: 'networkidle2',
    timeout: 30000
  });

  console.log(`Page status: ${res.status()}`);

  // Test header vs hero offset
  const offsets = await page.evaluate(() => {
    const header = document.querySelector('header');
    const headerBottom = header ? header.getBoundingClientRect().bottom : 0;
    const heroContent = document.querySelector('.hero-content, .healthcare-hero-banner');
    const subheading = document.querySelector('.subheading');
    const subheadingTop = subheading ? subheading.getBoundingClientRect().top : 0;
    const h3 = document.querySelector('.hero-content h3');
    const h3Top = h3 ? h3.getBoundingClientRect().top : 0;

    return {
      headerBottom,
      subheadingTop,
      h3Top,
      isOverlapping: subheadingTop < headerBottom
    };
  });

  console.log('Offset verification:');
  console.log(`  headerBottom = ${offsets.headerBottom.toFixed(1)}px`);
  console.log(`  subheadingTop = ${offsets.subheadingTop.toFixed(1)}px`);
  console.log(`  h3Top = ${offsets.h3Top.toFixed(1)}px`);
  console.log(`  Status: ${offsets.isOverlapping ? '❌ OVERLAPPING' : '✅ CLEAN'}`);

  // Test all images on page
  const images = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      complete: img.complete,
      naturalWidth: img.naturalWidth
    }));
  });

  console.log(`\nVerifying ${images.length} images:`);
  let broken = 0;
  for (const img of images) {
    if (img.naturalWidth === 0 && !img.src.includes('data:')) {
      console.log(`  ❌ Broken image: ${img.src}`);
      broken++;
    }
  }
  if (broken === 0) {
    console.log(`  ✅ All ${images.length} images loaded with positive naturalWidth!`);
  }

  // Take full desktop screenshot
  await page.screenshot({ path: 'scratch/healthcare/desktop_full.png', fullPage: true });
  console.log('\nSaved full page desktop screenshot to scratch/healthcare/desktop_full.png');

  // Test mobile viewport (375px)
  await page.setViewport({ width: 375, height: 812 });
  const mobileOffsets = await page.evaluate(() => {
    const header = document.querySelector('header');
    const headerBottom = header ? header.getBoundingClientRect().bottom : 0;
    const subheading = document.querySelector('.subheading');
    const subheadingTop = subheading ? subheading.getBoundingClientRect().top : 0;
    return {
      headerBottom,
      subheadingTop,
      isOverlapping: subheadingTop < headerBottom
    };
  });

  console.log(`\nMobile 375px: headerBottom=${mobileOffsets.headerBottom.toFixed(1)}px, subheadingTop=${mobileOffsets.subheadingTop.toFixed(1)}px, Overlapping: ${mobileOffsets.isOverlapping}`);

  await page.screenshot({ path: 'scratch/healthcare/mobile_full.png', fullPage: true });
  console.log('Saved full page mobile screenshot to scratch/healthcare/mobile_full.png');

  await browser.close();
}

testHealthcarePage().catch(console.error);

