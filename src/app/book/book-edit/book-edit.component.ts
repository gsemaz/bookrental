import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/entities/book';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  @Input() book: Book;

  constructor() { }

  ngOnInit(): void {
    
  }

}
