import { cardSet } from "./readfile.js";

const nextCardBtn:HTMLButtonElement = document.createElement("button");
const flipBtn:HTMLButtonElement = document.createElement("button");
var cardFront:HTMLParagraphElement;
var cardBack:HTMLParagraphElement;
var cardBreak:HTMLHRElement;

var cardCounter:number = 0;

function checkForSet():void
{
    if(cardSet.complete != true)
        return;
    clearInterval(checkSetInterval);
    
    nextCardBtn.textContent = "Next Card";
    document.body.appendChild(nextCardBtn);
    flipBtn.textContent = "Flip";
}

function nextCard():void
{
    cardFront = document.createElement("p");
    cardBack = document.createElement("p");
    cardBreak = document.createElement("hr");

    cardFront.textContent = cardSet.cards[cardCounter].front;
    cardBack.textContent = cardSet.cards[cardCounter].back;
    cardCounter++;

    document.body.appendChild(cardBreak);
    document.body.appendChild(cardFront);
    document.body.appendChild(flipBtn);
}

function flipCard():void
{
    document.body.appendChild(cardBack);
    document.body.appendChild(nextCardBtn);
}


nextCardBtn.addEventListener("click", nextCard);
flipBtn.addEventListener("click", flipCard);

const checkSetInterval:number = setInterval(checkForSet, 10);