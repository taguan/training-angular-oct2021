import {EventEmitter, Injectable} from '@angular/core';
import {Card} from './models/card';

@Injectable()
export class CardService {

  private todoCards = [new Card('Card 1', 'The description of my Card', 'todo'),
    new Card('Card 2', 'The description of my Card', 'todo'),
    new Card('Card 3', 'The description of my Card', 'todo')];

  public newCardEmitter = new EventEmitter<Card>();

  constructor() { }

  public addCard(card: Card): void {
    this.todoCards.push(card);
    this.newCardEmitter.emit(card);
  }

  public getCardsByState(state: 'todo' | 'in-progress' | 'done'): Card[] {
    switch (state) {
      case 'todo':
        const cards = [];
        cards.push(...this.todoCards);
        return cards;
      case 'in-progress':
        return [new Card('Card 4', 'The description of my Card', state),
          new Card('Card 5', 'The description of my Card', state)];
      case 'done':
        return [new Card('Card 6', 'The description of my Card', state)];
    }
  }
}
