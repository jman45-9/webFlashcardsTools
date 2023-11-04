import FlashCard from "./flashcard"
export default class FlashCardSet {
    length: number;
    cards: FlashCard[];
    
    constructor()
    {
        this.length = 0;
        this.cards = [];
    }
    
    addFlashcard(newCard:FlashCard)
    {
        this.cards.push(newCard);
        length++; 
    }
}
