import { cardSet } from "./readfile.js";
import QuizQuestion from "./quizQuestion.js";

const startBtn:HTMLButtonElement = document.createElement("button");

function checkForSet():void
{
    if (cardSet.complete != true)
        return;
    
    clearInterval(cardSetInterval);

    startBtn.textContent = "Start Quiz";
    document.body.appendChild(startBtn);
}

var cardSetInterval:number = setInterval(checkForSet, 10);

