// npm  - global command , comes with code 
// npm --version 

const { rootCertificates } = require("tls")
const { fileURLToPath } = require("url")
const { inherits } = require("util")

// local dependancy - use it only in this particular project 
// npm i <packagename>

// global dependancy - use it in any project 
// npm install -g  <packagename>
// sudo npm install -g  <packagename> (mac )

// package json - manifest file ( store important information about project/package)
// manual approch. (create package.json in the rootCertificates, create properties etc )
// npm init(step by step, press enter to skip)
// npm init -y (everything default )

const _ = require('lodash');
const items = [1, [2, [3, [4, [5]]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);