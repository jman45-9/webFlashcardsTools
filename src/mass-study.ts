import { cardSet } from "./readfile.js";

function checkForSet()
{
    if(cardSet.complete === true)
    {
        console.log("test");
        clearInterval(setCheckInterval);
    }
}

const setCheckInterval:number = setInterval(checkForSet, 10);