const fs = require('fs');
const https = require('https');
const path = require('path');

const raw = fs.readFileSync('scratch/travel_raw.html', 'utf8');

// Find all src or style url(...) matching invoidea.com or relative
const imgMatches = Array.from(raw.matchAll(/(?:src|url)\s*=\s*["']([^"']*\.(?:webp|png|jpg|jpeg|svg))["']|(?:url\(['"]?([^'")\s]+\.(?:webp|png|jpg|jpeg|svg))['"]?\))/gi));

const urls = new Set();
for (const m of imgMatches) {
  const u = m[1] || m[2];
  if (u && (u.startsWith('http') || u.startsWith('/'))) {
    urls.add(u);
  }
}

console.log(`Found ${urls.size} unique image URLs:`);
for (const u of urls) {
  console.log(' - ' + u);
}

fs.writeFileSync('scratch/travel_image_urls.json', JSON.stringify(Array.from(urls), null, 2));

