const fs = require('fs');

fs.writeFileSync('demo.txt', 'HELLO WORLD!!!');//for  createfile (filename/texts...)
console.log(fs.readFileSync('demo.txt','utf-8')); // read file(f.name/ formate);
fs.appendFileSync('demo.txt', '\n Appending texttttttttt...');
fs.renameSync('demo.txt', 'newdemo.txt');// for rename(old name/ new name)
