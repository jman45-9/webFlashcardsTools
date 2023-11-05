import { cardSet } from "./readfile.js";

var lastCard:HTMLDivElement|null = null;
const nextCardBtn:HTMLButtonElement = document.createElement("button");

function checkForSet():void
{
    if(cardSet.complete != true)
        return;
    clearInterval(checkSetInterval);
    
    nextCardBtn.textContent = "Next Card";
    document.body.appendChild(nextCardBtn);
}

function addCard():void
{
    //TODO write code to add one flashcard on top of another after pushing the next btn
}

const checkSetInterval:number = setInterval(checkForSet, 10);