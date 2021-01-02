import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BookService } from './book.service';
import { Book } from '../entities/book';


@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {
  title = 'title1';
  author = 'author1';
  books: Book[] = [];
  selectedBook: Book;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.bookService
      .find(this.author)
      .subscribe(
        books => this.books = books
      );
  }
  
  select(book: Book): void {
    this.selectedBook = book;
  }
}
