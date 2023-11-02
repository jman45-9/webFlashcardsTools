// * This file serves to read the users flashcard file
document.body.onload = addElements;
function addElements() {
    // Code for file input
    var uploadDiv = document.createElement("div");
    var uploadText = document.createElement("p");
    var uploadButton = document.createElement("input");
    var uploadSubmit = document.createElement("button");
    uploadText.textContent = "Please upload your flashcard set. See 'help' for syntax";
    uploadButton.type = "file";
    uploadDiv.appendChild(uploadText);
    uploadDiv.appendChild(uploadButton);
    document.body.appendChild(uploadDiv);
}
