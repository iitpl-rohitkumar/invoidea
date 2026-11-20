const fs = require('fs');

const sec4 = fs.readFileSync('scratch/sec4_raw.txt', 'utf8');
const cards = [];
const cardBlocks = sec4.split('<div class="common-card"');
for (let i = 1; i < cardBlocks.length; i++) {
  const block = cardBlocks[i];
  const icon = block.match(/<i class="([^"]*)"><\/i>/)?.[1] || '';
  const title = block.match(/<h5[^>]*>([\s\S]*?)<\/h5>/)?.[1] || '';
  const desc = block.match(/<p[^>]*>([\s\S]*?)<\/p>/)?.[1] || '';
  cards.push({
    icon,
    title: title.replace(/&amp;/g, '&').trim(),
    desc: desc.replace(/\s+/g, ' ').trim()
  });
}
console.log("SEC 4 Cards (total " + cards.length + "):");
console.log(JSON.stringify(cards, null, 2));

// SEC 8 Industry
const sec8 = fs.readFileSync('scratch/sec8_raw.txt', 'utf8');
const boxes = [];
const boxBlocks = sec8.split('<div class="box text-start"');
for (let i = 1; i < boxBlocks.length; i++) {
  const block = boxBlocks[i];
  const icon = block.match(/<i class="([^"]*)"><\/i>/)?.[1] || '';
  const title = block.match(/<h5[^>]*>([\s\S]*?)<\/h5>/)?.[1] || '';
  const desc = block.match(/<p[^>]*>([\s\S]*?)<\/p>/)?.[1] || '';
  boxes.push({
    icon,
    title: title.replace(/&amp;/g, '&').replace(/&ensp;/g, '').replace(/ /g, '').trim(),
    desc: desc.replace(/\s+/g, ' ').trim()
  });
}
console.log("\nSEC 8 Boxes (total " + boxes.length + "):");
console.log(JSON.stringify(boxes, null, 2));

// SEC 9 FAQ
const sec9 = fs.readFileSync('scratch/sec9_raw.txt', 'utf8');
const faqs = [];
const items = sec9.split('<div class="accordion-item"');
for (let i = 1; i < items.length; i++) {
  const block = items[i];
  const qMatch = block.match(/<button[^>]*class="accordion-button[^"]*"[^>]*>([\s\S]*?)<\/button>/);
  const q = qMatch ? qMatch[1].replace(/<[^>]+>/g, '').trim() : '';
  const aMatch = block.match(/<div class="accordion-body"[^>]*>([\s\S]*?)<\/div>\s*<\/div>/);
  const a = aMatch ? aMatch[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() : '';
  faqs.push({ q, a });
}
console.log("\nSEC 9 FAQs (total " + faqs.length + "):");
console.log(JSON.stringify(faqs, null, 2));

