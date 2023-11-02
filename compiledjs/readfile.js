// * This file serves to read the users flashcard file
document.body.onload = addElements;
function addElements() {
    // Code for file input
    var uploadDiv = document.createElement("div");
    var uploadText = document.createElement("p");
    var uploadButton = document.createElement("input");
    uploadText.textContent = "Please upload your flashcard set. See 'help' for syntax";
    uploadDiv.appendChild(uploadText);
    document.body.appendChild(uploadDiv);
}
