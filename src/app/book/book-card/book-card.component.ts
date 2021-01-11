import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../entities/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {
  @Input() item: Book;
  @Output('onBookSelected') selectedChange = new EventEmitter();

  selected: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelection(): void {
    this.selected = !this.selected;
    this.selectedChange.emit(this.item);
  }
}
