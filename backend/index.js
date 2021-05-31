const path = require('path');
const fs = require('fs');
const stringSimilarity = require('string-similarity');


function compareFiles() {
// get a list of path names
  const files = fs.readdirSync('Plag-Checker/uploads');
  //
  const pathArr = [];
  for (let i = 0; i < files.length; i++) {
    const filePath = path.join(files[i]);
    pathArr[i] = 'Plag-Checker/uploads' + '/' + filePath;
  // console.log(pathArr[i]);
  }

  // readfile sync in loop using the path array to create a list of files data in strin
  const dataArr = [];
  for (let i = 0; i < files.length; i++) {
    const dataString = fs.readFileSync(pathArr[i], 'utf-8');
    dataArr[i] = dataString;
  }


  const original = dataArr.shift();
  dataArr.shift();
  const targetFiles = dataArr;


  const similarity = stringSimilarity.findBestMatch(original, targetFiles);
  console.log(similarity); // Returns a fraction between 0 and 1


  // used to delete all files after

  for (let i = 0; i < pathArr.length; i++) {
    fs.unlink(pathArr[i], (err) => {
      if (err) {
        console.error(err);
      }

      // file removed
    });
  }
}

compareFiles();
