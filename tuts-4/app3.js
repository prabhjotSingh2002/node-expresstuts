// synchronous fs 

const { readFileSync, writeFileSync, fstat } = require('fs'); //this is destructering mode
// can also be used as fs.readFileSync,fs.writeFileSync

const first = readFileSync('./expam/MyFile.txt', 'utf-8');
const second = readFileSync('./expam/lasan/nn.txt', 'utf-8');

writeFileSync('./expam/MyFile2.txt',
    `fguut ch paranda teri :${first} + ${second}`, { flag: 'a' });