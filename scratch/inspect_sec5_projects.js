const fs = require('fs');

const sec5 = fs.readFileSync('scratch/sec5_raw.txt', 'utf8');
const projects = [];
const blocks = sec5.split('<div class="common-project"');
for (let i = 1; i < blocks.length; i++) {
  const b = blocks[i];
  const no = b.match(/<span class="common-project-no">([\s\S]*?)<\/span>/)?.[1]?.trim() || '';
  const label = b.match(/<span class="common-project-label">([\s\S]*?)<\/span>/)?.[1]?.trim() || '';
  const country = b.match(/<p class="common-project-country">[\s\S]*?<\/i>\s*([\s\S]*?)<\/p>/)?.[1]?.trim() || '';
  const tag = b.match(/<span class="project-case-tag">([\s\S]*?)<\/span>/)?.[1]?.trim() || '';
  const title = b.match(/<h4>([\s\S]*?)<\/h4>/)?.[1]?.trim() || '';
  const desc = b.match(/<p>([\s\S]*?)<\/p>/)?.[1]?.replace(/\s+/g, ' ').trim() || '';
  
  const techDiv = b.match(/<div class="common-project-tech"[\s\S]*?<\/div>/)?.[0] || '';
  const tags = Array.from(techDiv.matchAll(/<span>([\s\S]*?)<\/span>/g)).map(m => m[1].trim());

  projects.push({ no, label, country, tag, title, desc, tags });
}

console.log("SEC 5 Projects count:", projects.length);
console.log(JSON.stringify(projects, null, 2));

