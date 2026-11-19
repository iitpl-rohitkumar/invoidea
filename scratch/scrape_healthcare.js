const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function scrapeHealthcare() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to https://invoidea.com/healthcare-app-development-company ...');
  await page.goto('https://invoidea.com/healthcare-app-development-company', {
    waitUntil: 'networkidle2',
    timeout: 35000
  });

  const pageData = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll('section, main > div, .banner-section')).map((s, idx) => {
      const h1 = s.querySelector('h1')?.innerText?.trim() || '';
      const h2 = Array.from(s.querySelectorAll('h2')).map(h => h.innerText.trim());
      const h3 = Array.from(s.querySelectorAll('h3')).map(h => h.innerText.trim());
      const h4 = Array.from(s.querySelectorAll('h4')).map(h => h.innerText.trim());
      const h5 = Array.from(s.querySelectorAll('h5')).map(h => h.innerText.trim());
      const imgs = Array.from(s.querySelectorAll('img')).map(img => img.src);
      const bgImg = window.getComputedStyle(s).backgroundImage;
      const bgColor = window.getComputedStyle(s).backgroundColor;

      return {
        idx: idx + 1,
        tagName: s.tagName,
        className: s.className,
        id: s.id,
        h1,
        h2,
        h3,
        h4,
        h5,
        imgs,
        bgImg,
        bgColor,
        htmlPreview: s.outerHTML.substring(0, 500)
      };
    });

    return {
      title: document.title,
      sections
    };
  });

  fs.writeFileSync('scratch/healthcare_page_data.json', JSON.stringify(pageData, null, 2));
  console.log('Saved pageData. Total sections found:', pageData.sections.length);

  await browser.close();
}

scrapeHealthcare().catch(console.error);

