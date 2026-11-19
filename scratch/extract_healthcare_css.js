const puppeteer = require('puppeteer-core');
const fs = require('fs');

async function extractCSS() {
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

  const css = await page.evaluate(() => {
    const selectors = [
      'banner', 'hero-stats-strip', 'hero-stat', 'hero-form-card', 'banner-note',
      'Food-Delivery-App-Solution',
      'industry-gradient-bg', 'ai-services', 'service-item', 'service-number', 'service-content',
      'common-grid', 'common-grid-grid', 'common-grid-step',
      'Functionality', 'inner-tabber',
      'Benefits', 'nummber',
      'devops-tech-matrix', 'matrix-wrap', 'matrix-row', 'matrix-left', 'matrix-right', 'matrix-tools',
      'custom-steps', 'cutom-step-item', 'cutom-step-num',
      'why-choose-us', 'feature-item'
    ];

    const rules = [];
    for (const sheet of document.styleSheets) {
      try {
        for (const rule of sheet.cssRules) {
          if (rule.selectorText) {
            for (const s of selectors) {
              if (rule.selectorText.includes(s)) {
                rules.push(rule.cssText);
                break;
              }
            }
          }
        }
      } catch(e) {}
    }
    return [...new Set(rules)];
  });

  fs.writeFileSync('scratch/healthcare/extracted_rules.css', css.join('\n\n'));
  console.log('Saved extracted CSS rules. Total rules:', css.length);

  await browser.close();
}

extractCSS().catch(console.error);

