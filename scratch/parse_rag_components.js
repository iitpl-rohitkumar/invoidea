const fs = require('fs');

// Section 0: Hero
const sec0Html = fs.readFileSync('scratch/rag_sec_0.html', 'utf8');

// Section 1: Leading / About
const sec1Html = fs.readFileSync('scratch/rag_sec_1.html', 'utf8');

// Section 2: Challenges
const sec2Html = fs.readFileSync('scratch/rag_sec_2.html', 'utf8');

// Section 3: Services
const sec3Html = fs.readFileSync('scratch/rag_sec_3.html', 'utf8');

// Section 4: Why Partner
const sec4Html = fs.readFileSync('scratch/rag_sec_4.html', 'utf8');

// Section 5: Case Studies
const sec5Html = fs.readFileSync('scratch/rag_sec_5.html', 'utf8');

// Section 6: Tech Matrix
const sec6Html = fs.readFileSync('scratch/rag_sec_6.html', 'utf8');

// Section 7: Process
const sec7Html = fs.readFileSync('scratch/rag_sec_7.html', 'utf8');

// Section 8: Industry
const sec8Html = fs.readFileSync('scratch/rag_sec_8.html', 'utf8');

// Section 9: FAQ
const sec9Html = fs.readFileSync('scratch/rag_sec_9.html', 'utf8');

// Section 10: Reach Out
const sec10Html = fs.readFileSync('scratch/rag_sec_10.html', 'utf8');

console.log("Checking Section 2 elements:");
// Let's see what items are in sec 2
const sec2Items = sec2Html.match(/<div class="service-item">[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log("Sec 2 item count:", sec2Items.length);

console.log("Checking Section 3 elements:");
const sec3Items = sec3Html.match(/<div class="content-box">[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log("Sec 3 item count:", sec3Items.length);

console.log("Checking Section 4 elements:");
// check cards in sec 4
const sec4Cards = sec4Html.match(/<div class="[^"]*card[^"]*">[\s\S]*?<\/div>/g) || [];
console.log("Sec 4 cards count:", sec4Cards.length);

console.log("Checking Section 5 elements:");
const sec5Cards = sec5Html.match(/<div class="col-lg-6[^"]*">[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log("Sec 5 cards count:", sec5Cards.length);

console.log("Checking Section 6 elements:");
const sec6Tabs = sec6Html.match(/<li[^>]*class="nav-item"[^>]*>[\s\S]*?<\/li>/g) || [];
console.log("Sec 6 nav tabs count:", sec6Tabs.length);

console.log("Checking Section 7 elements:");
const sec7Steps = sec7Html.match(/<div class="cutom-step-item">[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log("Sec 7 steps count:", sec7Steps.length);

console.log("Checking Section 8 elements:");
const sec8Boxes = sec8Html.match(/<div class="box text-start">[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log("Sec 8 boxes count:", sec8Boxes.length);

console.log("Checking Section 9 elements:");
const sec9Faqs = sec9Html.match(/<div class="accordion-item">[\s\S]*?<\/div>\s*<\/div>/g) || [];
console.log("Sec 9 faqs count:", sec9Faqs.length);

