const fs = require('fs');
const https = require('https');
const path = require('path');

const url = 'https://invoidea.com/real-estate-app-development-company';

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function run() {
  if (!fs.existsSync('scratch')) {
    fs.mkdirSync('scratch', { recursive: true });
  }
  console.log('Fetching', url);
  const html = await fetchPage(url);
  fs.writeFileSync('scratch/real_estate.html', html, 'utf8');
  console.log('Saved scratch/real_estate.html, length:', html.length);
}

run().catch(console.error);

