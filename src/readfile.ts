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
            makeCard(lines[iii], separator);
            let set = new FlashCardSet;
        }
    }
}

//@param fullCard is both sides of the card passed in on a line
function makeCard(fullCard:string, separator:string|null):FlashCard
{
    if(separator === null)
    {
        separator = getAnkiSeparator(fullCard);
        if(separator === null)
        {
            console.log("Failed to determine card separator. Code will now halt");
            while(true){/*this loop serves to bring execution to a full stop*/}
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
        if(word.indexOf(separators[iii]) >= 0)
        return separators[iii];
    }
    return null;
}

uploadSubmit.addEventListener("click", readFile);

