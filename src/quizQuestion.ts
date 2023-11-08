export default class QuizQuestion
{
    question:string;
    correctAns:string;
    buttons:HTMLInputElement[];
    choices:HTMLLabelElement[];
    questionID:number;

    constructor(question:string, correctAns:string, buttons:HTMLInputElement[], choices:HTMLLabelElement[], questionID:number)
    {
        this.question = question;
        this.correctAns = correctAns;
        this.buttons = buttons;
        this.choices = choices;
        this.questionID = questionID;
    }
}