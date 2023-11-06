import { cardSet } from "./readfile.js";

function checkForSet():void
{
    if (cardSet.complete != true)
        return;
    
    clearInterval(cardSetInterval);
    
}

var cardSetInterval:number = setInterval(checkForSet, 10);

