const fs = require('fs');
const path = require('path');

const sec6 = fs.readFileSync('scratch/sec6_raw.txt', 'utf8');

// Match all svg tags with their preceding/following tool name
const items = sec6.match(/<div class="tech-item"[\s\S]*?<\/div>\s*<\/div>/g) || [];

const svgs = {};

for (const it of items) {
  const nameMatch = it.match(/<strong>([\s\S]*?)<\/strong>/);
  const name = nameMatch ? nameMatch[1].trim() : '';
  const svgMatch = it.match(/<svg[\s\S]*?<\/svg>/);
  if (svgMatch) {
    svgs[name] = svgMatch[0];
  }
}

let fileContent = `import React from 'react';\n\n`;
fileContent += `export const TechIcons: Record<string, React.ReactNode> = {\n`;

for (const [name, svg] of Object.entries(svgs)) {
  const reactSvg = svg
    .replace(/class=/g, 'className=')
    .replace(/clip-path=/g, 'clipPath=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/xmlns:xlink=/g, 'xmlnsXlink=')
    .replace(/xlink:href=/g, 'xlinkHref=');

  fileContent += `  ${JSON.stringify(name)}: (\n    ${reactSvg}\n  ),\n`;
}

fileContent += `};\n`;

const targetPath = path.join('app', '(site)', 'rag-development', 'components', 'TechIcons.tsx');
fs.writeFileSync(targetPath, fileContent, 'utf8');

console.log("Successfully fixed and rewrote TechIcons.tsx");
