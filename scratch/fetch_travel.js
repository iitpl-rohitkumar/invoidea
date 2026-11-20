const https = require('https');
const fs = require('fs');

const url = 'https://invoidea.com/travel-app-development-company';

https.get(url, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    fs.writeFileSync('scratch/travel_raw.html', data);
    console.log(`Saved travel_raw.html: ${data.length} bytes`);
  });
}).on('error', (err) => {
  console.error('Error fetching URL:', err);
});

