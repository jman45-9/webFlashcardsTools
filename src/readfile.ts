// * This file serves to read the users flashcard file
document.body.onload = addElements;

function addElements():void 
{
    // Code for file input
    const uploadDiv:HTMLDivElement = document.createElement("div");
    const uploadText:HTMLParagraphElement = document.createElement("p");
    const uploadButton:HTMLInputElement = document.createElement("input");
    const uploadSubmit:HTMLButtonElement = document.createElement("button")
    
    uploadDiv.id = "uploadDiv";
    
    uploadText.id = "uploadText";
    uploadText.textContent = "Please upload your flashcard set. See 'help' for syntax";
    
    uploadButton.id = "uploadBtn";
    uploadButton.type = "file";

    uploadDiv.appendChild(uploadText);
    uploadDiv.appendChild(uploadButton);

    document.body.appendChild(uploadDiv);
}
