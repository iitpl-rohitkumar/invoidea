const puppeteer = require('puppeteer-core');
const fs = require('fs');
const path = require('path');

async function dumpAll() {
  if (!fs.existsSync('scratch/healthcare')) {
    fs.mkdirSync('scratch/healthcare', { recursive: true });
  }

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

  const sectionHtmls = await page.evaluate(() => {
    const main = document.querySelector('main');
    const sections = Array.from(main ? main.querySelectorAll('section') : document.querySelectorAll('section'));
    return sections.map((s, idx) => ({
      idx: idx + 1,
      className: s.className,
      id: s.id,
      html: s.outerHTML
    }));
  });

  console.log('Found sections in main:', sectionHtmls.length);

  for (const s of sectionHtmls) {
    fs.writeFileSync(`scratch/healthcare/section_${s.idx}_${s.className.replace(/[^a-zA-Z0-9_-]/g, '_')}.html`, s.html);
  }

  // Also collect all image URLs on page
  const images = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('main img, .banner img, section img')).map(img => img.src);
    const bgImgs = Array.from(document.querySelectorAll('*')).map(el => {
      const bg = window.getComputedStyle(el).backgroundImage;
      if (bg && bg.startsWith('url(')) {
        const match = bg.match(/url\(['"]?(.*?)['"]?\)/);
        return match ? match[1] : null;
      }
      return null;
    }).filter(Boolean);

    return [...new Set([...imgs, ...bgImgs])];
  });

  fs.writeFileSync('scratch/healthcare/all_images.json', JSON.stringify(images, null, 2));
  console.log('Saved images list, count:', images.length);

  await browser.close();
}

dumpAll().catch(console.error);

