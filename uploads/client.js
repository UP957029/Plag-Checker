const dropZone = document.querySelector(".drop-zone");
const button = document.querySelector(".drop-zone__button")
//global variable, will be used in a few functions 
let file; 
const dragText = document.querySelector('#dropText')
const inputFile = document.querySelector('.drop-zone__file')


dropZone.addEventListener("dragover", (e)=>{
  e.preventDefault();
    dropZone.classList.add("drop-zone--over");
    dragText.textContent = "Release file to uplaod"
})

dropZone.addEventListener("dragleave", (e)=>{
  e.preventDefault();
  dropZone.classList.remove("drop-zone--over")
  dragText.textContent = "Drag and drop file(s) here"
})

dropZone.addEventListener("drop", (event) => {
  event.preventDefault();
  
  file = event.dataTransfer.files
  let readers = []
  showFiles()
  

});

button.addEventListener("click", ()=>{
  inputFile.click()
})

inputFile.addEventListener("change", function(){
  file = this.files
  showFiles();
  
})

document.querySelector(".drop-zone__submit").addEventListener("click", ()=>{
  console.log(file)
})


// This function will display the files text content
function showFiles(){
  for(let i =0; i<file.length; i++){
  let fileType = file[i].type
  let validExtensions = ["text/javascript"]; 
  if(validExtensions.includes(fileType)){
    let fileReader = new FileReader();
    fileReader.onload = () =>{
      let fileURL = fileReader.result;
      console.log(fileURL)
    }
    fileReader.readAsDataURL(file[i])
  }else{
    alert("Invalid File")
    dropZone.classList.remove("drop-zone--over")
  }
}
}

//function to upload file to server
async function upload(files) {
  for (const file of files) {
      const opts = {
          method: 'POST',
          body: new FormData()
      };

      opts.body.append(`md5me`, file, file.name);

      try {
        const response = await fetch('/upload', opts);
        if (response.ok) {
            const obj = await response.json();
            reportSuccess(obj);
        } else {
            reportError(response);
        }
      } catch (e) {
        reportError(e);
      }
  }
}

  //submits the uplaoded files to the server "server.js"
  const form = document.getElementById("submitForm");

  form.addEventListener("submit", e=>{
    e.preventDefault();

    const endpoint = "upload.js";
    const formdData = new FormData();
    formdData.append("file", file.files)
    //console.log(file)

  });
