const path = require('path');

const filepath = 'E:/MCA/Semester - 2/Web Technology - 2/Programs/Node JS/Core Moduals/Spath.js';

console.log('FILE PATH: ', path.basename(filepath));
console.log('DIRECTORY: ', path.dirname(filepath));
console.log('EXTENSION: ', path.extname(filepath));
console.log('NORAMALIZED PATH: ', path.normalize(filepath));
console.log('Is ABSOLUTE: ', path.isAbsolute(filepath));
console.log('JOIN: ', path.join('harsh','ghorecha'));
console.log('RELATIVE PATH: ', path.relative('E:','Programs'));

