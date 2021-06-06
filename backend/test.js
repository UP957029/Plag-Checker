const fs = require('fs');

const files = fs.readdirSync('uploads/');
// console.log(files)
files.sort(function (x, y) {
  return fs.statSync('uploads/' + x).mtime.getTime() -
    fs.statSync('uploads/' + y).mtime.getTime();
});
console.log(files);