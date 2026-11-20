const fs = require('fs');

const raw = fs.readFileSync('scratch/rag_raw.html', 'utf8');

// meta description
const descMatch = raw.match(/<meta\s+name=["']description["']\s+content=["']([\s\S]*?)["']/i);
console.log("Meta description:", descMatch ? descMatch[1] : 'none');

// Stylesheets
const links = Array.from(raw.matchAll(/<link[^>]*rel=["']stylesheet["'][^>]*href=["']([^"']*)["']/gi)).map(m => m[1]);
console.log("CSS Links:", links);

// Inline style blocks
const styles = Array.from(raw.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/gi)).map(m => m[1]);
console.log("Style blocks count:", styles.length);

styles.forEach((s, idx) => {
  fs.writeFileSync(`scratch/rag_style_${idx}.css`, s);
  console.log(`Style block ${idx}: length = ${s.length}`);
});

