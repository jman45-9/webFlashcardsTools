"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
document.body.onload = main;
var uploadDiv = document.createElement("div");
var uploadText = document.createElement("p");
var uploadInput = document.createElement("input");
var uploadSubmit = document.createElement("button");
function main() {
    addElements();
}
function addElements() {
    // Code for file input
    uploadDiv.id = "uploadDiv";
    uploadText.id = "uploadText";
    uploadText.textContent = "Please upload your flashcard set. See 'help' for syntax";
    uploadInput.id = "uploadBtn";
    uploadInput.type = "file";
    uploadSubmit.id = "uploadSubmit";
    uploadSubmit.textContent = "Submit";
    uploadDiv.appendChild(uploadText);
    uploadDiv.appendChild(uploadInput);
    uploadDiv.appendChild(uploadSubmit);
    document.body.appendChild(uploadDiv);
}
function readFile() {
    var _a;
    var file = (_a = uploadInput.files) === null || _a === void 0 ? void 0 : _a.item(0);
    if (file === null)
        return;
    console.log(file);
}
uploadSubmit.addEventListener("click", readFile);
