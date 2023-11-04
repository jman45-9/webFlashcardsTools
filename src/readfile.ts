import FlashCardSet from "./flashcardSet.js";
import FlashCard from "./flashcard.js";

// * This file serves to read the users flashcard file

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
    const reader:FileReader = new FileReader;
    reader.readAsText((file as File));
    
    reader.onload = function(event)
    {
        let text = (event.target?.result as string);
        let lines = text.split('\n');
        let separator:string|null = null;
        if(lines[0].indexOf("#separator:") === 0)
        {
            separator = wordToSeparator(lines[0].substring(10, lines[0].length))
        }
        for (let iii:number = 0; lines.length > iii; iii++)
        {
            let card:FlashCard|null = makeCard(lines[iii], separator);
            if(card === null)
            {
                generateErrForUser("Please use a supported separator. See 'help' for a list of valid options");
                return;
            }
            let set = new FlashCardSet;
        }
    }
}

//@param fullCard is both sides of the card passed in on a line
function makeCard(fullCard:string, separator:string|null):FlashCard|null
{
    if(separator === null)
    {
        separator = getAnkiSeparator(fullCard);
        if(separator === null)
        {
            console.log("Failed to determine card separator. Code will now halt");
            return null;
        }
    }
    console.log(separator);
    
    let temp = new FlashCard("bob", "joe");
    return temp;
}

function getAnkiSeparator(input:string):string|null
{
    let separators:string[] = ["\t", "|", ";", ":", ",", " "];
        for(let iii:number = 0; 6 > iii; iii++)
        {
            if(input.indexOf(separators[iii]) >= 0)
                return separators[iii];
        }   
    return null;
}

function wordToSeparator(word:string):string|null
{
    let separators:string[] = ["\t", "|", ";", ":", ",", " "];
    let separatorWords:string[] = ["tab", "pipe", "semicolon", "colon", "comma", "space"];
    for(let iii:number = 0; 6 > iii; iii++)
    {
        if(word.indexOf(separatorWords[iii]) >= 0)
        return separators[iii];
    }
    return null;
}

function generateErrForUser(message:string):void
{
    let existingErrMsg = document.getElementById("errMsg");
    if(existingErrMsg != null)
    {
        existingErrMsg.textContent = message;
        return;
    }
    let newErrMsg = document.createElement("p");
    newErrMsg.id = "errMsg";
    newErrMsg.textContent = message;
    newErrMsg.style.color = "red";
    newErrMsg.style.fontSize = "50px";
    document.body.appendChild(newErrMsg);
}

uploadSubmit.addEventListener("click", readFile);

