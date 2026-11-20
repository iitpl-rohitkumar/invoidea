const fs = require('fs');

const sec13 = fs.readFileSync('scratch/sec_13_inspect.txt', 'utf8');

// The panels are separated by `<div class="tech-panel`
const panelBlocks = sec13.split('<div class="tech-panel');

console.log("Total panel blocks:", panelBlocks.length);

const panels = [];

for (let i = 1; i < panelBlocks.length; i++) {
  const block = panelBlocks[i];
  const idMatch = block.match(/id="([^"]*)"/);
  const id = idMatch ? idMatch[1] : '';
  const titleMatch = block.match(/<h3>([\s\S]*?)<\/h3>/);
  const title = titleMatch ? titleMatch[1].replace(/<[^>]+>/g, '').trim() : '';

  // All tech-items in this block
  const itemBlocks = block.split('<div class="tech-item"');
  const items = [];
  for (let j = 1; j < itemBlocks.length; j++) {
    const it = itemBlocks[j];
    const strongMatch = it.match(/<strong>([\s\S]*?)<\/strong>/);
    const name = strongMatch ? strongMatch[1].replace(/<[^>]+>/g, '').trim() : '';
    const svgMatch = it.match(/<svg[\s\S]*?<\/svg>/);
    const imgMatch = it.match(/<img[^>]*src="([^"]*)"[^>]*>/);
    const faMatch = it.match(/<i class="([^"]*)"><\/i>/);

    let iconType = 'none';
    let iconVal = '';
    let imgAlt = '';
    if (svgMatch) {
      iconType = 'svg';
      iconVal = svgMatch[0];
    } else if (imgMatch) {
      iconType = 'img';
      iconVal = '/assets/' + imgMatch[1].split('/').pop();
      const altMatch = imgMatch[0].match(/alt="([^"]*)"/);
      imgAlt = altMatch ? altMatch[1] : name;
    } else if (faMatch) {
      iconType = 'fa';
      iconVal = faMatch[1];
    }

    if (name) {
      items.push({ name, iconType, iconVal, imgAlt });
    }
  }

  panels.push({ id, title, itemsCount: items.length, items });
}

console.log(JSON.stringify(panels.map(p => ({ id: p.id, title: p.title, count: p.itemsCount, names: p.items.map(x => x.name) })), null, 2));

fs.writeFileSync('scratch/sec13_parsed.json', JSON.stringify(panels, null, 2));

