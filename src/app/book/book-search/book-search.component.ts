import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BookService } from './book.service';
import { Book } from '../../entities/book';


@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  title = '';
  author = '';
  loan = false;
  // @Input() books: Book[];
  books : Array<Book>;
  @Output() booksFetched = new EventEmitter<Book[]>();
  @Input() display: boolean;
  @Output() displayChange = new EventEmitter<boolean>();

  constructor(private bookService: BookService) { }

  ngOnInit(): void { }

  search(): void {
    this.bookService
      .find(this.author, this.title)
      .subscribe(
        books => {
          alert("Servus");
          this.books = books;
          //this.booksFetched.emit();
          this.display = false;
          this.displayChange.emit(true);
        }
      );
  }
}