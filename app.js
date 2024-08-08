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
    let localStore = localStorage.setItem(`sr-`, recTxt);
    allDataStore.push(recTxt);
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
