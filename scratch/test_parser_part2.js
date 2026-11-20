const fs = require('fs');

function clean(str) {
  if (!str) return '';
  return str.replace(/\s+/g, ' ').trim();
}

// SEC 4
const sec4 = fs.readFileSync('scratch/sec4_raw.txt', 'utf8');
const sec4Cards = [];
const sec4Matches = sec4.match(/<div class="common-card"[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log("Sec 4 matches count:", sec4Matches.length);
for (const card of sec4Matches) {
  const icon = card.match(/<i class="([^"]*)"><\/i>/)?.[1] || '';
  const title = clean(card.match(/<h5[^>]*>([\s\S]*?)<\/h5>/)?.[1] || '');
  const desc = clean(card.match(/<p[^>]*>([\s\S]*?)<\/p>/)?.[1] || '');
  sec4Cards.push({ icon, title, desc });
}
console.log("Sec 4 parsed:", sec4Cards);

// SEC 5
const sec5 = fs.readFileSync('scratch/sec5_raw.txt', 'utf8');
const sec5Projects = [];
const sec5Matches = sec5.match(/<div class="common-project"[\s\S]*?(?=<div class="common-project"|<\/div>\s*<\/div>\s*<\/section>)/g) || [];
console.log("Sec 5 matches count:", sec5Matches.length);
for (const prj of sec5Matches) {
  const no = clean(prj.match(/<span class="common-project-no">([\s\S]*?)<\/span>/)?.[1] || '');
  const label = clean(prj.match(/<span class="common-project-label">([\s\S]*?)<\/span>/)?.[1] || '');
  const country = clean(prj.match(/<p class="common-project-country">[\s\S]*?<\/i>\s*([\s\S]*?)<\/p>/)?.[1] || '');
  const tag = clean(prj.match(/<span class="project-case-tag">([\s\S]*?)<\/span>/)?.[1] || '');
  const title = clean(prj.match(/<h4>([\s\S]*?)<\/h4>/)?.[1] || '');
  const desc = clean(prj.match(/<p>([\s\S]*?)<\/p>/)?.[1] || '');
  const techMatches = Array.from(prj.matchAll(/<span>([\s\S]*?)<\/span>/g)).map(m => clean(m[1]));
  // filter tech tags
  const tags = techMatches.filter(t => t !== no && t !== label && t !== tag && !t.includes('fa-'));
  sec5Projects.push({ no, label, country, tag, title, desc, tags });
}
console.log("Sec 5 parsed count:", sec5Projects.length);
if (sec5Projects.length) console.log("Sec 5 sample:", sec5Projects[0]);

// SEC 7
const sec7 = fs.readFileSync('scratch/sec7_raw.txt', 'utf8');
const sec7Steps = [];
const sec7Matches = sec7.match(/<div class="cutom-step-item"[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log("Sec 7 matches count:", sec7Matches.length);
for (const st of sec7Matches) {
  const num = clean(st.match(/<div class="cutom-step-num"[^>]*>([\s\S]*?)<\/div>/)?.[1] || '');
  const title = clean(st.match(/<h3>([\s\S]*?)<\/h3>/)?.[1] || '');
  const desc = clean(st.match(/<p>([\s\S]*?)<\/p>/)?.[1] || '');
  sec7Steps.push({ num, title, desc });
}
console.log("Sec 7 parsed:", sec7Steps);

// SEC 8
const sec8 = fs.readFileSync('scratch/sec8_raw.txt', 'utf8');
const sec8Boxes = [];
const sec8Matches = sec8.match(/<div class="box text-start"[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log("Sec 8 matches count:", sec8Matches.length);
for (const b of sec8Matches) {
  const icon = b.match(/<i class="([^"]*)"><\/i>/)?.[1] || '';
  const title = clean(b.match(/<h5[^>]*>([\s\S]*?)<\/h5>/)?.[1] || '');
  const desc = clean(b.match(/<p[^>]*>([\s\S]*?)<\/p>/)?.[1] || '');
  sec8Boxes.push({ icon, title, desc });
}
console.log("Sec 8 parsed count:", sec8Boxes.length);

// SEC 9
const sec9 = fs.readFileSync('scratch/sec9_raw.txt', 'utf8');
const sec9Faqs = [];
const sec9Matches = sec9.match(/<div class="accordion-item"[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/g) || [];
console.log("Sec 9 matches count:", sec9Matches.length);
const qRegex = /<button[^>]*class="accordion-button[^"]*"[^>]*>([\s\S]*?)<\/button>/gi;
const aRegex = /<div class="accordion-body">([\s\S]*?)<\/div>/gi;
const questions = [];
const answers = [];
let qm;
while ((qm = qRegex.exec(sec9)) !== null) {
  questions.push(clean(qm[1].replace(/<[^>]+>/g, '')));
}
let am;
while ((am = aRegex.exec(sec9)) !== null) {
  answers.push(clean(am[1].replace(/<[^>]+>/g, '')));
}
console.log("Questions found:", questions.length, "Answers found:", answers.length);

