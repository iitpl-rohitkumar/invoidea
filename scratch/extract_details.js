const fs = require('fs');

for (let i = 0; i < 8; i++) {
  const content = fs.readFileSync(`scratch/section_${i}.html`, 'utf8');
  console.log(`\n================================ SECTION ${i} ================================`);
  // Find images
  const imgs = [...content.matchAll(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"/gi)].map(m => ({ src: m[1], alt: m[2] }));
  console.log('Images:', imgs);
  
  // Background images in style
  const bgImgs = [...content.matchAll(/background(?:-image)?:\s*url\(([^)]+)\)/gi)].map(m => m[1]);
  if (bgImgs.length) console.log('Background Images:', bgImgs);

  // Subheadings and headings
  const subheadings = [...content.matchAll(/<(?:h[1-6]|span|p)[^>]*class="[^"]*subheading[^"]*"[^>]*>([\s\S]*?)<\/(?:h[1-6]|span|p)>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h1s = [...content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h2s = [...content.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h3s = [...content.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  const h4s = [...content.matchAll(/<h4[^>]*>([\s\S]*?)<\/h4>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());

  console.log('Subheadings:', subheadings);
  console.log('H1:', h1s);
  console.log('H2:', h2s);
  console.log('H3:', h3s);
  console.log('H4:', h4s);
}

