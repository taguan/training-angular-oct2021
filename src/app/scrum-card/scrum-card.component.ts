import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../models/card';

@Component({
  selector: 'app-scrum-card',
  templateUrl: './scrum-card.component.html',
  styleUrls: ['./scrum-card.component.css']
})
export class ScrumCardComponent implements OnInit {

  @Input()
  card: Card | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
