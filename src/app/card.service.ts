import {EventEmitter, Injectable} from '@angular/core';
import {Card} from './models/card';
import {CardApiService} from './api/card-api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class CardService {

  public newCardEmitter = new EventEmitter<Card>();

  constructor(private cardApiService: CardApiService) { }

  public addCard(card: Card): Observable<Card> {
    return this.cardApiService.createCard(card).pipe(
      map((cardFromServer) => {
        this.newCardEmitter.emit(cardFromServer);
        return cardFromServer;
      }));

  }

  public getCardsByState(state: 'todo' | 'in-progress' | 'done'): Observable<Card[]> {
    return this.cardApiService.getCards(state);
  }
}
