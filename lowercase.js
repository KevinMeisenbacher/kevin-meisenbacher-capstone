const fs = require('fs');
const file = './seeds/2_subgenres.js';
const lines = fs.readFileSync(file);
const lower = lines.toString().toLowerCase();
fs.writeFileSync(file, lower);
console.log(lines);