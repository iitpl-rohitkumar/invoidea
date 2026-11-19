const fs = require('fs');
const path = require('path');

async function downloadAssets() {
  const dir = 'scratch/healthcare';
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

  const urls = new Set();
  for (const f of files) {
    const html = fs.readFileSync(path.join(dir, f), 'utf8');
    const srcMatches = [...html.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
    srcMatches.forEach(u => urls.add(u));

    const bgMatches = [...html.matchAll(/url\(([^)]+)\)/g)].map(m => m[1].replace(/['"]/g, ''));
    bgMatches.forEach(u => urls.add(u));
  }

  const allImgsJson = JSON.parse(fs.readFileSync('scratch/healthcare/all_images.json', 'utf8'));
  allImgsJson.forEach(u => urls.add(u));

  console.log('Total URLs found:', urls.size);

  for (const u of urls) {
    if (!u || u.startsWith('data:') || !u.startsWith('http')) continue;
    const filename = path.basename(u.split('?')[0]);
    const dest = path.join('public/assets', filename);

    if (fs.existsSync(dest)) {
      console.log('Already exists:', filename);
      continue;
    }

    try {
      console.log('Downloading:', u, '->', dest);
      const res = await fetch(u, {
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
      });
      if (res.status === 200) {
        const buf = Buffer.from(await res.arrayBuffer());
        fs.writeFileSync(dest, buf);
        console.log('  Saved:', filename, `(${buf.length} bytes)`);
      } else {
        console.log('  Failed HTTP:', res.status, u);
      }
    } catch (e) {
      console.log('  Download error:', e.message, u);
    }
  }
}

downloadAssets().catch(console.error);

