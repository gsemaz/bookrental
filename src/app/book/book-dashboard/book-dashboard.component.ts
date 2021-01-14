import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
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
  queryId: string;

  constructor(private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.books = [];

    // this.fetchBooks('', '');

    this.fetchQueryId();
  }

  fetchQueryId(): void {
    combineLatest( [this.activatedRoute.paramMap, this.activatedRoute.queryParamMap] )
    .subscribe( ([pathParams, queryParams]) => {
      this.queryId = queryParams.get('id');
      if (this.queryId) {
        this.fetchBooksByCustomerId(this.queryId);
      }
      else {
        this.fetchBooks('', '');
      }
    })
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

  fetchBooksByCustomerId(id: string): void {
    this.bookService
      .getByCustomerId(id)
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
