const fs = require('fs');
const cheerio = require('cheerio');

for (let i = 0; i <= 10; i++) {
  const html = fs.readFileSync(`scratch/rag_sec_${i}.html`, 'utf8');
  const $ = cheerio.load(html);
  
  const sec = $('section').first();
  const secClass = sec.attr('class') || '';
  const secId = sec.attr('id') || '';
  const h1 = $('h1').text().trim();
  const h2 = $('h2').text().trim();
  const subTitle = $('.sub-title, .title-sub, .sec-sub-title, .subtitle').text().trim();
  const imgs = [];
  $('img').each((_, el) => {
    imgs.push({
      src: $(el).attr('src'),
      alt: $(el).attr('alt'),
      class: $(el).attr('class')
    });
  });

  console.log(`\n=================== SECTION ${i} ===================`);
  console.log(`Class: ${secClass} | ID: ${secId}`);
  if (h1) console.log(`H1: ${h1}`);
  if (h2) console.log(`H2: ${h2}`);
  if (subTitle) console.log(`SubTitle: ${subTitle}`);
  console.log(`Images:`, imgs);
  
  // Quick overview of inner elements
  const h3s = [];
  $('h3').each((_, el) => h3s.push($(el).text().trim()));
  if (h3s.length) console.log(`H3 count: ${h3s.length}, First 3:`, h3s.slice(0, 3));

  const h4s = [];
  $('h4').each((_, el) => h4s.push($(el).text().trim()));
  if (h4s.length) console.log(`H4 count: ${h4s.length}, First 3:`, h4s.slice(0, 3));

  const h5s = [];
  $('h5').each((_, el) => h5s.push($(el).text().trim()));
  if (h5s.length) console.log(`H5 count: ${h5s.length}, First 3:`, h5s.slice(0, 3));
}

