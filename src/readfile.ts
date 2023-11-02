// * This file serves to read the users flashcard file
import fs from 'fs';
document.body.onload = main;

const uploadDiv:HTMLDivElement = document.createElement("div");
const uploadText:HTMLParagraphElement = document.createElement("p");
const uploadInput:HTMLInputElement = document.createElement("input");
const uploadSubmit:HTMLButtonElement = document.createElement("button")

function main():void 
{
    addElements();
}

function addElements():void 
{
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

function readFile():void
{
    const file = uploadInput.files?.item(0);
    if(file === null)
        return;
    console.log(file);
    
}

uploadSubmit.addEventListener("click", readFile);
