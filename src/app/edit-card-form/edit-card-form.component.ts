import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CardService} from '../card.service';
import {Card} from '../models/card';

@Component({
  selector: 'app-edit-card-form',
  templateUrl: './edit-card-form.component.html',
  styleUrls: ['./edit-card-form.component.css']
})
export class EditCardFormComponent implements OnInit {

  @Input()
  card: Card | undefined;

  editCardForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl()
  });

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.editCardForm.setValue({
      title: this.card?.title,
      description: this.card?.description
    });
  }

  editCard() {
    if(this.card && this.editCardForm.valid) {
      this.card.title = this.editCardForm.get('title')?.value;
      this.card.description = this.editCardForm.get('description')?.value;
    }
  }

}
