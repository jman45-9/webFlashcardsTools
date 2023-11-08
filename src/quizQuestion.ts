export default class QuizQuestion
{
    question:string;
    correctAns:string;
    buttons:HTMLInputElement[];
    choices:HTMLLabelElement[];

    constructor(question:string, correctAns:string, buttons:HTMLInputElement[], choices:HTMLLabelElement[])
    {
        this.question = question;
        this.correctAns = correctAns;
        this.buttons = buttons;
        this.choices = choices;
    }
}