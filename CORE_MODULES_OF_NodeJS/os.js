const os = require('os');

console.log('System Information:');
console.log('--------------------');
console.log('Architecture:', os.arch());
console.log('Platform:', os.platform());
console.log('OS Type:', os.type());
console.log('OS Release:', os.release());
console.log('Total Memory (GB):', (os.totalmem() / (1024 ** 3)).toFixed(2));
console.log('Free Memory (GB):', (os.freemem() / (1024 ** 3)).toFixed(2));
console.log('Home Directory:', os.homedir());
console.log('System Uptime (hours):', (os.uptime() / 3600).toFixed(2));
console.log('CPU Count:', os.cpus().length);
console.log('User Info:', os.userInfo());
