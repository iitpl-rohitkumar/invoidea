const fs = require('fs');
const path = require('path');

const parsed = JSON.parse(fs.readFileSync('scratch/sec13_parsed.json', 'utf8'));

// The 8 actual panels are at index 1, 3, 5, 7, 9, 11, 13, 15
const tabDefs = [
  { id: 'frontend', label: 'Frontend', icon: 'fa-solid fa-code' },
  { id: 'backend', label: 'Backend', icon: 'fa-solid fa-server' },
  { id: 'mobile', label: 'Mobile', icon: 'fa-solid fa-mobile-screen' },
  { id: 'database', label: 'Database', icon: 'fa-solid fa-database' },
  { id: 'cloud', label: 'Cloud', icon: 'fa-solid fa-cloud' },
  { id: 'ai', label: 'AI & ML', icon: 'fa-solid fa-brain' },
  { id: 'apis', label: 'APIs', icon: 'fa-solid fa-plug' },
  { id: 'devops', label: 'DevOps', icon: 'fa-solid fa-gears' }
];

const panels = [];
let panelIdx = 1;
for (const tab of tabDefs) {
  const p = parsed[panelIdx];
  panels.push({
    id: tab.id,
    label: tab.label,
    icon: tab.icon,
    title: p.title || `${tab.label} Technologies`,
    items: p.items.map(it => ({
      name: it.name,
      iconType: it.iconType,
      iconVal: it.iconVal,
      imgAlt: it.imgAlt
    }))
  });
  panelIdx += 2;
}

console.log("Structured panels count:", panels.length);

const dataTsPath = path.resolve('app', '(site)', 'travel-app-development-company', 'data', 'travelData.ts');
let content = fs.readFileSync(dataTsPath, 'utf8');

// Replace export const techStackData = ...
content = content.replace(/export const techStackData: TechCategory\[\] = [\s\S]*?;\n\nexport const faqData/i, 
  `export const techStackData: TechCategory[] = ${JSON.stringify(panels, null, 2)};\n\nexport const faqData`);

fs.writeFileSync(dataTsPath, content, 'utf8');
console.log("Updated travelData.ts with all 8 tech stack panels!");

