const fs = require('fs');
const html = fs.readFileSync('scratch/real_estate.html', 'utf8');

// Look for banner or hero in html
const bannerMatch = html.match(/<(div|section)[^>]*class=["'][^"']*(banner|hero)[^"']*["'][\s\S]*?<\/(div|section)>/i);
if (bannerMatch) {
  console.log('Banner found, tag:', bannerMatch[1]);
  console.log('Banner snippet:', bannerMatch[0].substring(0, 500));
} else {
  console.log('No banner class match, checking background images');
}

// Find all background-image in inline styles or style tags
const bgMatches = [...html.matchAll(/url\(([^)]+)\)/gi)];
console.log('Background images found:', bgMatches.length);
bgMatches.forEach(m => console.log('BG:', m[1].replace(/['"]/g, '')));

