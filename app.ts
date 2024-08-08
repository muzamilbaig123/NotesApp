let createArea = document.querySelectorAll(".plus")[0] as HTMLElement;
let writingArea = document.querySelectorAll(".writing-area")[0] as HTMLElement;
let readContainer = document.querySelectorAll(".read")[0] as HTMLElement;
let textArea = document.querySelectorAll(".writing-area textarea")[0] as HTMLInputElement;
let allDataStore:string[] = []

function create () {
    displayArea()
}

function displayArea () {
    writingArea.style.display = "block"    
    
}

function save () {
    let recTxt = textArea.value;
    let localStore = localStorage.setItem(`sr-`, recTxt)
    allDataStore.push(recTxt);
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

