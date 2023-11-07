export default class QuizQuestion
{
    question:string;
    correctAns:number;
    buttons:HTMLInputElement[];
    choices:HTMLLabelElement[];

    constructor(question:string, correctAns:number, buttons:HTMLInputElement[], choices:HTMLLabelElement[])
    {
        this.question = question;
        this.correctAns = correctAns;
        this.buttons = buttons;
        this.choices = choices;
    }
}