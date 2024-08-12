"use strict";
let createArea = document.querySelectorAll(".plus")[0];
let writingArea = document.querySelectorAll(".writing-area")[0];
let readContainer = document.querySelectorAll(".read")[0];
let textArea = document.querySelectorAll(".writing-area textarea")[0];
let allDataStore = [];
function create() {
    displayArea();
}
function displayArea() {
    writingArea.style.display = "block";
}
function save() {
    let recTxt = textArea.value;
    allDataStore.push(recTxt);
    localStorage.setItem(`mydata`, JSON.stringify(allDataStore));
    read();
    textArea.value = "";
}
function read() {
    readContainer.innerHTML = "";
    for (let i = 0; i < allDataStore.length; i++) {
        readContainer.innerHTML += `
        <h2>${allDataStore[i]}</h2>
        `;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    let storePrintData = localStorage.getItem("mydata");
    if (storePrintData) {
        allDataStore = JSON.parse(storePrintData);
        read();
    }
});
