const fs = require('fs');

const raw = fs.readFileSync('scratch/travel_raw.html', 'utf8');

// Stylesheets
const links = Array.from(raw.matchAll(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']*)["']/gi)).map(m => m[1]);
console.log("CSS Links:", links);

// Inline styles
const styles = Array.from(raw.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)).map(m => m[1]);
console.log(`Found ${styles.length} inline style blocks`);

styles.forEach((s, idx) => {
  fs.writeFileSync(`scratch/travel_style_${idx}.css`, s);
  console.log(`Style block ${idx}: ${s.length} bytes`);
});

