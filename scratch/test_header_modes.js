const puppeteer = require('puppeteer-core');

async function testHeaderModes() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  const urls = [
    'https://invoidea.com/',
    'https://invoidea.com/ai-development-company',
    'https://invoidea.com/ai-ml-development-company',
    'https://invoidea.com/ai-chatbot-development-company',
    'https://invoidea.com/ai-software-development-company'
  ];

  for (const url of urls) {
    try {
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 20000 });
      const res = await page.evaluate(() => {
        const h = document.querySelector('header');
        const s = document.querySelector('section');
        return {
          headerClass: h ? h.className : '',
          headerPos: h ? window.getComputedStyle(h).position : '',
          headerHeight: h ? h.offsetHeight : 0,
          heroTop: s ? s.getBoundingClientRect().top : 0
        };
      });
      console.log(url, res);
    } catch (e) {
      console.log(url, 'error:', e.message);
    }
  }

  await browser.close();
}

testHeaderModes().catch(console.error);

