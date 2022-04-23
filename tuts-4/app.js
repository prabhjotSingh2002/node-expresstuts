const os = require('os');

//info about cureent user
const user = os.userInfo();
// console.log(user);

//info about the system uptime
console.log(`the system uptime is ${os.uptime()}`);

const currentOS = {
    name: os.type(),
    version: os.version(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};
console.log(currentOS);