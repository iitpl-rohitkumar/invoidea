const fs = require('fs');

const sec16 = fs.readFileSync('scratch/sec_16_inspect.txt', 'utf8');

const qRegex = /<button[^>]*class="accordion-button[^"]*"[^>]*>([\s\S]*?)<\/button>/gi;
const aRegex = /<div class="accordion-body"[^>]*>([\s\S]*?)<\/div>/gi;

const questions = [];
const answers = [];
let qm;
while ((qm = qRegex.exec(sec16)) !== null) {
  questions.push(qm[1].replace(/<[^>]+>/g, '').trim());
}
let am;
while ((am = aRegex.exec(sec16)) !== null) {
  answers.push(am[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
}

console.log("Found FAQs:", questions.length);
questions.forEach((q, idx) => {
  console.log(`Q${idx + 1}: ${q}`);
  console.log(`A${idx + 1}: ${answers[idx]?.slice(0, 100)}...`);
});

