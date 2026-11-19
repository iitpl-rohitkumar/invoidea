const fs = require('fs');
const path = require('path');

function cleanText(str) {
  return str.replace(/\s+/g, ' ').trim();
}

function parseFaqs() {
  const html = fs.readFileSync('scratch/healthcare/section_9_ptb_faq-section_position-relative_overlayy-bg.html', 'utf8');
  const items = [];
  const qMatches = [...html.matchAll(/<button[^>]+class="accordion-button[^>]*>([\s\S]*?)<\/button>/g)].map(m => cleanText(m[1]));
  const aMatches = [...html.matchAll(/<div[^>]+class="accordion-body"[^>]*>([\s\S]*?)<\/div>/g)].map(m => cleanText(m[1].replace(/<[^>]+>/g, '')));

  for (let i = 0; i < qMatches.length; i++) {
    items.push({
      q: qMatches[i],
      a: aMatches[i] || ''
    });
  }
  return items;
}

const faqs = parseFaqs();
console.log('Parsed FAQs count:', faqs.length);
fs.writeFileSync('scratch/healthcare/parsed_faqs.json', JSON.stringify(faqs, null, 2));

