const path = require('path');

console.log(path.sep);


const filePath = path.join('/examp/', 'lasan', 'nn.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, 'examp', 'lasan', 'nn.txt');
console.log(absolute);