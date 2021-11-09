import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CardService} from '../card.service';
import {Card} from '../models/card';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';

@Component({
  selector: 'app-edit-card-form',
  templateUrl: './edit-card-form.component.html',
  styleUrls: ['./edit-card-form.component.css']
})
export class EditCardFormComponent implements OnInit {

  private modalRef: NgbModalRef | undefined;


  @Input()
  card: Card | undefined;

  editCardForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    description: new FormControl()
  });

  constructor(private cardService: CardService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.editCardForm.setValue({
      name: this.card?.name,
      description: this.card?.description
    });
  }

  editCard() {
    if(this.card && this.editCardForm.valid) {
      this.card.name = this.editCardForm.get('name')?.value;
      this.card.description = this.editCardForm.get('description')?.value;
      this.modalRef?.close();
    }
  }

  open(content: any) {
    this.modalRef = this.modalService.open(content);
  }

}
