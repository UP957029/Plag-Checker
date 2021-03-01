document.querySelectorAll(".drop-input").forEach(inputElement =>{
    const dropZoneElement = inputElement.closest(".drop-zone");


dropZoneElement.addEventListener("dragover", e => {
    dropZoneElement.classList.add("drop-zone--over")
})

["dragleave", "dragend"].forEach(type => {
    dropZoneElement.addEventListener(type, e=> {
        dropZoneElement.classList.remove('drop-zone-over');
    })
})

})



document.getElementById("compareBtn").addEventListener('submit', compareFiles);


function compareFiles(){
    const path1 = document.getElementById('Custom-text1').value 
    const path2 = document.getElementById('file2').value
    let test = document.getElementById('test')
    test.textContent = path1

}


function showReport(){
let files = JSON.parse(localStorage.getItem('files'))
let codeReport = document.getElementById('codeReport')

codeReport.textContent = '';

for (let i = 0; i , files.length;i++){
    let name = files[i].name
    let similarity = files[i].similarity
    let size = files[i].size 

    codeReport.textContent += '<tr>'
                            + name + 
                            similarity + 
                            size +  '</tr>'

}
}
