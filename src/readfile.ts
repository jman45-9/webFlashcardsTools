// * This file serves to read the users flashcard file
document.body.onload = addElements;
function addElements():void 
{
    // Code for file input
    const uploadDiv:HTMLDivElement = document.createElement("div");
    const uploadText:HTMLParagraphElement = document.createElement("p");
    const uploadButton:HTMLInputElement = document.createElement("input");
    
    uploadText.textContent = "Please upload your flashcard set. See 'help' for syntax";

    uploadDiv.appendChild(uploadText);
    document.body.appendChild(uploadDiv);
}
