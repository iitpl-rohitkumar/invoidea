const fs = require('fs');
const https = require('https');
const path = require('path');

const allImages = [];

for (let i = 0; i < 11; i++) {
  const content = fs.readFileSync(`scratch/rag_sec_${i}.html`, 'utf8');
  console.log(`\n================================ SECTION ${i} ================================`);

  // Images
  const imgs = [...content.matchAll(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"/gi)].map(m => ({ src: m[1], alt: m[2] }));
  const dataImgs = [...content.matchAll(/data-src="([^"]*)"[^>]*alt="([^"]*)"/gi)].map(m => ({ src: m[1], alt: m[2] }));
  const pictureImgs = [...content.matchAll(/<img[^>]*src="([^"]*)"/gi)].map(m => ({ src: m[1], alt: '' }));
  const sourceImgs = [...content.matchAll(/srcset="([^"]*)"/gi)].map(m => ({ src: m[1], alt: '' }));
  const bgImgs = [...content.matchAll(/background(?:-image)?:\s*url\(([^)]+)\)/gi)].map(m => ({ src: m[1].replace(/['"]/g, ''), alt: 'bg' }));

  const merged = [...imgs, ...dataImgs, ...pictureImgs, ...sourceImgs, ...bgImgs];
  merged.forEach(item => {
    if (item.src && item.src.startsWith('http') && !allImages.some(x => x.src === item.src)) {
      allImages.push(item);
    }
  });

  console.log('Images found in section ' + i + ':', merged.map(x => x.src));
}

console.log('\nTotal unique remote images to check:', allImages.length);
allImages.forEach(img => console.log('-', img.src));

async function download(url) {
  const filename = path.basename(url);
  const dest = path.join('public', 'assets', filename);
  if (fs.existsSync(dest)) {
    console.log('Exists:', filename, '(' + fs.statSync(dest).size + ' bytes)');
    return;
  }
  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.log('Failed:', url, res.statusCode);
        resolve();
        return;
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log('Downloaded:', filename, '(' + fs.statSync(dest).size + ' bytes)');
        resolve();
      });
    }).on('error', (err) => {
      console.log('Error:', url, err.message);
      resolve();
    });
  });
}

(async () => {
  for (const img of allImages) {
    await download(img.src);
  }
})();

