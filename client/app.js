/* eslint-disable no-sequences */
const dropZone = document.querySelector('.drop-zone');
const button = document.querySelector('.drop-zone__button');
// global variable, will be used in a few functions
let file;
const dragText = document.querySelector('#dropText');
const inputFile = document.querySelector('.drop-zone__file');


dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  dropZone.classList.add('drop-zone--over');
  dragText.textContent = 'Release file to uplaod';
});

dropZone.addEventListener('dragleave', (e) => {
  e.preventDefault();
  dropZone.classList.remove('drop-zone--over');
  dragText.textContent = 'Drag and drop file(s) here';
});

dropZone.addEventListener('drop', (event) => {
  event.preventDefault();

  file = event.dataTransfer.files;
  showFiles();
});

button.addEventListener('click', () => {
  inputFile.click();
});

inputFile.addEventListener('change', function () {
  file = this.files;
  showFiles();
});

document.querySelector('.drop-zone__submit').addEventListener('click', () => {
  console.log(file);
});


// This function will display the files text content
function showFiles() {
  for (let i = 0; i < file.length; i++) {
    const fileType = file[i].type;
    const validExtensions = ['text/javascript'];
    if (validExtensions.includes(fileType)) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const fileURL = fileReader.result;
        console.log(fileURL);
      };
      fileReader.readAsDataURL(file[i]);
    } else {
      alert('Invalid File');
      dropZone.classList.remove('drop-zone--over');
    }
  }
}

// submits the uplaoded files to the server "server.js"
/* const form = document.querySelector('.submitForm');

form.addEventListener('submit', e => {
  e.preventDefault();

  const endpoint = 'upload.js';
  const formdData = new FormData();
  formdData.append('file', file.files);
  console.log(file)
});
*/

// Functions for server
const form = document.getElementById('form');

form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();

  const files = document.getElementsByClassName('drop-zone__file');
  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append('files', files[i]);
  }
  fetch('http://localhost:8080/upload_files', {
    method: 'post',
    body: formData,
  })
    .then((res) => console.log(res))
    // eslint-disable-next-line no-restricted-syntax
    // eslint-disable-next-line no-sequences
    // eslint-disable-next-line no-restricted-syntax
    .catch((err) => ('Error occured', err));
}
