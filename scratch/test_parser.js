const fs = require('fs');

function clean(str) {
  if (!str) return '';
  return str.replace(/\s+/g, ' ').trim();
}

// SEC 1
const sec1 = fs.readFileSync('scratch/rag_sec_1.html', 'utf8');
const pMatches = Array.from(sec1.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)).map(m => clean(m[1].replace(/<[^>]+>/g, '')));

// SEC 2
const sec2 = fs.readFileSync('scratch/rag_sec_2.html', 'utf8');
const sec2Items = [];
const sec2Regex = /<div class="service-item"[^>]*>[\s\S]*?<div class="service-number"[^>]*>([\s\S]*?)<\/div>[\s\S]*?<h3>([\s\S]*?)<\/h3>[\s\S]*?<p>([\s\S]*?)<\/p>/gi;
let m;
while ((m = sec2Regex.exec(sec2)) !== null) {
  sec2Items.push({
    number: clean(m[1]),
    title: clean(m[2]),
    description: clean(m[3])
  });
}

// SEC 3
const sec3 = fs.readFileSync('scratch/rag_sec_3.html', 'utf8');
const sec3Items = [];
// In sec3, let's see how items are formatted
const sec3ColRegex = /<div class="number"[^>]*>[\s\S]*?<h2[^>]*>([\s\S]*?)<\/h2>[\s\S]*?<\/div>[\s\S]*?<div class="content-box"[^>]*>[\s\S]*?<h4[^>]*>([\s\S]*?)<\/h4>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;
while ((m = sec3ColRegex.exec(sec3)) !== null) {
  sec3Items.push({
    number: clean(m[1]),
    title: clean(m[2]),
    description: clean(m[3])
  });
}

// SEC 4
const sec4 = fs.readFileSync('scratch/rag_sec_4.html', 'utf8');
const sec4Items = [];
const sec4Regex = /<div class="common-card"[^>]*>[\s\S]*?<i class="([^"]*)"><\/i>[\s\S]*?<span class="subheading"[^>]*>([\s\S]*?)<\/span>[\s\S]*?<h4>([\s\S]*?)<\/h4>[\s\S]*?<p[^>]*>([\s\S]*?)<\/p>/gi;
while ((m = sec4Regex.exec(sec4)) !== null) {
  sec4Items.push({
    icon: clean(m[1]),
    badge: clean(m[2]),
    title: clean(m[3]),
    description: clean(m[4])
  });
}

// SEC 5
const sec5 = fs.readFileSync('scratch/rag_sec_5.html', 'utf8');
const sec5Items = [];
// Let's inspect sec 5 markup
console.log("SEC 5 sample:", sec5.slice(500, 2500));

// SEC 6
const sec6 = fs.readFileSync('scratch/rag_sec_6.html', 'utf8');
// Let's inspect sec 6 markup
console.log("SEC 6 sample:", sec6.slice(500, 2500));

console.log({
  sec2Count: sec2Items.length,
  sec3Count: sec3Items.length,
  sec4Count: sec4Items.length
});

