import FlashCard from "./flashcard"
export default class FlashCardSet {
    length: number;
    cards: FlashCard[];
    complete:boolean;
    
    constructor()
    {
        this.length = 0;
        this.cards = [];
        this.complete = false;
    }
    
    addFlashcard(newCard:FlashCard)
    {
        this.cards.push(newCard);
        length++; 
    }
}
