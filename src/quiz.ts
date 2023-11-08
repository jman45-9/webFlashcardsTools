import { cardSet } from "./readfile.js";
import QuizQuestion from "./quizQuestion.js";

const startBtn:HTMLButtonElement = document.createElement("button");
var questions:QuizQuestion[];

function checkForSet():void
{
    if (cardSet.complete != true)
        return;
    
    clearInterval(cardSetInterval);

    startBtn.textContent = "Start Quiz";
    document.body.appendChild(startBtn);
}

function mcqMake():void
{
    for(let iii = 0; cardSet.length-1 > iii; iii++)
    {
        let randomQNum = Math.floor(Math.random() * cardSet.length-1);
        let question:string = cardSet.cards[randomQNum].front;
        let correctAns:string = cardSet.cards[randomQNum].back;
        let correctPos:number = Math.floor(Math.random() * 3);
        let buttons:HTMLInputElement[] = [];
        let choices:HTMLLabelElement[] = [];
        
        let choiceIndexs:number[] = [randomQNum];
        
        
        
        for(let iii = 0; 4 > iii; iii++)
        {
            let newButton = document.createElement("input");
            newButton.type = "radio";
            newButton.name = 
            if (iii === correctPos)
            {
                
            }
        }

    }
}

startBtn.addEventListener("click", mcqMake)

var cardSetInterval:number = setInterval(checkForSet, 10);