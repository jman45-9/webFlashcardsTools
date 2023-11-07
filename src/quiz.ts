import { cardSet } from "./readfile.js";

const startBtn:HTMLButtonElement = document.createElement("button");

function checkForSet():void
{
    if (cardSet.complete != true)
        return;
    
    clearInterval(cardSetInterval);

    startBtn.textContent = "Start Quiz";
}

var cardSetInterval:number = setInterval(checkForSet, 10);

