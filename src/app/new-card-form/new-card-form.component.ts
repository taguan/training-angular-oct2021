import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Card} from '../models/card';
import {CardService} from '../card.service';

@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.css']
})
export class NewCardFormComponent implements OnInit {

  newCardForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl()
  });

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  createCard() {
    if(this.newCardForm.valid) {
      const newCard = new Card(this.newCardForm.get('title')?.value, this.newCardForm.get('description')?.value, 'todo');
      this.cardService.addCard(newCard);
      this.newCardForm.reset();
    }
  }
}
