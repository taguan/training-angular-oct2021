import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Card} from '../models/card';
import {CardService} from '../card.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';

@Component({
  selector: 'app-new-card-form',
  templateUrl: './new-card-form.component.html',
  styleUrls: ['./new-card-form.component.css']
})
export class NewCardFormComponent implements OnInit {

  private modalRef: NgbModalRef | undefined;

  newCardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl()
  });

  constructor(private cardService: CardService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  createCard() {
    if(this.newCardForm.valid) {
      const newCard = new Card(this.newCardForm.get('name')?.value, this.newCardForm.get('description')?.value, 'todo');
      this.cardService.addCard(newCard).subscribe(() => {
        this.newCardForm.reset();
        this.modalRef?.close();
      });
    }
  }

  open(content: any) {
    this.modalRef = this.modalService.open(content);
  }
}
