const path = require('path');
const fs = require('fs');
const stringSimilarity = require('string-similarity');

// get a list of path names

const files = fs.readdirSync('Plag-Checker/uploads');
console.log(files[1]);
const pathArr = [];
for (let i = 0; i < files.length; i++) {
  const filePath = path.join(files[i]);
  pathArr[i] = 'Plag-Checker/uploads' + '/' + filePath;
  // console.log(pathArr[i]);
}
console.log('The array of paths is: ' + pathArr);


// readfile sync in loop using the path array to create a list of files data in string

const dataArr = [];
for (let i = 0; i < files.length; i++) {
  const dataString = fs.readFileSync(pathArr[i], 'utf-8');
  dataArr[i] = dataString;
}
// console.log('The array of string data is: ' + dataArr + 'this is the end of the data array');


// examples of string-similarity with fs module
// const exercise = fs.readFileSync(pathArr[0], 'utf-8');
// const solution = fs.readFileSync(pathArr[1], 'utf-8');
// const third = fs.readFileSync(pathArr[2], 'utf-8');

// Compares the first file against all of the files

const similarity = stringSimilarity.findBestMatch(dataArr[0], dataArr);
console.log(similarity); // Returns a fraction between 0 and 1
