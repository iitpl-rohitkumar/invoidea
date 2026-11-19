const http = require('http');

http.get('http://localhost:3000/real-estate-app-development-company', res => {
  console.log('Status code:', res.statusCode);
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    console.log('Page response length:', data.length);
    console.log('Contains hero title:', data.includes('Make Property Search Smarter with AI-Driven Real Estate Apps'));
    console.log('Contains leading title:', data.includes('Custom Real Estate Apps Built for Modern Property Businesses'));
    console.log('Contains tech stack:', data.includes('The Technology Behind Modern Real Estate Applications'));
  });
}).on('error', err => {
  console.log('Dev server not running or error:', err.message);
});

