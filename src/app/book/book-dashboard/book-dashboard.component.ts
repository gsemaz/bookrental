import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/app/entities/book';

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.css']
})
export class BookDashboardComponent implements OnInit {
  
  @Input() books: Book[];

  @Input() selectedBook: Book;
  @Output() selectedBookChanged: Book;
  
  constructor() {}

  ngOnInit(): void {
    this.selectedBook = null;
    this.test();
  }

  test(): void {
    this.selectedBook = { "id": 1, "title": "title1", "author": "author1", "userID": 1, "loanDate": "01.01.2020", "returnDate": "03.03.2020" };
    this.selectedBookChanged = this.selectedBook;
  }
}
