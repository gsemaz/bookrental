import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/entities/book';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-book-dashboard',
  templateUrl: './book-dashboard.component.html',
  styleUrls: ['./book-dashboard.component.css']
})
export class BookDashboardComponent implements OnInit {
  title = '';
  author = '';
  books: Book[];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.books = [];
    this.fetchBooks('', '');
  }

  search(): void {
    this.fetchBooks(this.author, this.title);
  }

  filterChanged(): void {
    if (!this.author && !this.title)
      this.fetchBooks('', '');
  }

  fetchBooks(author: string, title: string): void {
    this.bookService
      .find(author, title)
      .subscribe(
        books => this.books = books
      );
  }

  bookSelected(selection: Book): void {
    let idSelected = -1;
    if (selection)
      idSelected = selection.id;

    this.router.navigate(['/book/edit'], { queryParams: { id: idSelected }});
  }
}
