import {FlashCard} from "./flashcard"
export class FlashCardSet {
    length: number;
    cards: FlashCard[];
    
    constructor()
    {
        length = 0;
    }
    
    addFlashcard(newCard:FlashCard)
    {
        this.cards.push(newCard);
        length++; 
    }
}
