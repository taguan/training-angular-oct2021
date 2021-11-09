import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CardService} from '../card.service';
import {Card} from '../models/card';

@Component({
  selector: 'app-scrum-column',
  templateUrl: './scrum-column.component.html',
  styleUrls: ['./scrum-column.component.css']
})
export class ScrumColumnComponent implements OnInit {

  @Input()
  name: string = '';

  @Input()
  state: 'todo' | 'in-progress' | 'done' | undefined;

  cards: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    if (!!this.state) {
      this.cardService.getCardsByState(this.state).subscribe((cards: Card[]) => {
        this.cards = cards;
      });

      if (this.state === 'todo') {
        this.cardService.newCardEmitter.subscribe((card) => {
          this.cards.push(card);
        });
      }
    }
  }

}
