const fs = require('fs');
const https = require('https');
const path = require('path');

const imagesToDownload = [
  {
    url: 'https://invoidea.com/service08/assets/inv-images/background/realestate-app-development-company-banner.webp',
    name: 'realestate-app-development-company-banner.webp'
  },
  {
    url: 'https://invoidea.com/service08/assets/images/background/innerpage/Building-realestate-Application-Interface.webp',
    name: 'Building-realestate-Application-Interface.webp'
  },
  {
    url: 'https://invoidea.com/service08/assets/images/background/innerpage/Listing-Property-Screens.webp',
    name: 'Listing-Property-Screens.webp'
  },
  {
    url: 'https://invoidea.com/service08/assets/images/background/innerpage/Search-and-Listing-Screens.webp',
    name: 'Search-and-Listing-Screens.webp'
  },
  {
    url: 'https://invoidea.com/service08/assets/images/background/innerpage/Dashboard-and-Transaction-Screens.webp',
    name: 'Dashboard-and-Transaction-Screens.webp'
  },
  {
    url: 'https://invoidea.com/service08/assets/images/background/innerpage/Real-Estate-Application-Development-Services.webp',
    name: 'Real-Estate-Application-Development-Services.webp'
  }
];

function download(item) {
  return new Promise((resolve, reject) => {
    const dest = path.join('public', 'assets', item.name);
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      console.log(`Already exists: ${item.name} (${fs.statSync(dest).size} bytes)`);
      return resolve();
    }
    const file = fs.createWriteStream(dest);
    https.get(item.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, res => {
      if (res.statusCode !== 200) {
        console.error(`Failed ${item.name}: HTTP ${res.statusCode}`);
        file.close();
        return resolve();
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${item.name} (${fs.statSync(dest).size} bytes)`);
        resolve();
      });
    }).on('error', err => {
      console.error(`Error downloading ${item.name}:`, err.message);
      resolve();
    });
  });
}

async function main() {
  for (const item of imagesToDownload) {
    await download(item);
  }
}

main();

