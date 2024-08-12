let createArea = document.querySelectorAll(".plus")[0] as HTMLElement;
let writingArea = document.querySelectorAll(".writing-area")[0] as HTMLElement;
let readContainer = document.querySelectorAll(".read")[0] as HTMLElement;
let textArea = document.querySelectorAll(".writing-area textarea")[0] as HTMLInputElement;
let allDataStore:string[] = []

function create () {
    displayArea()
}

function displayArea () {
    writingArea.style.display = "block";    
    
}

function save () {
    let recTxt:string = textArea.value;
    allDataStore.push(recTxt)   
    localStorage.setItem(`mydata`, JSON.stringify(allDataStore))
    read()
    textArea.value = "";
}
function read () {
    readContainer.innerHTML = "";
    for(let i = 0; i < allDataStore.length; i++){
        readContainer.innerHTML += `
        <h2>${allDataStore[i]}</h2>
        `
    }
}

document.addEventListener('DOMContentLoaded', ()=>{
    let storePrintData = localStorage.getItem("mydata");
    if(storePrintData){
        allDataStore = JSON.parse(storePrintData)
        read()
    }
})