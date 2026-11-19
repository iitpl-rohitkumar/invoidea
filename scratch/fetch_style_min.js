const fs = require('fs');
const https = require('https');

https.get('https://invoidea.com/service08/assets/style-min.css', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  }
}, res => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    fs.writeFileSync('scratch/style-min.css', data, 'utf8');
    console.log('Saved scratch/style-min.css, length:', data.length);
  });
});

