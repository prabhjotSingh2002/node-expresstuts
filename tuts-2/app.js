// common js every file is module
// Module --> encapsulated code --- only share to minimum

const names = require('./name.js');
console.log(names);
const sayHi = require('./utils.js');
sayHi(names.laura);
sayHi(names.peter);
sayHi('reena');