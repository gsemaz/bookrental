import { Book } from 'src/app/entities/book';
import { BookService } from '../book-search/book.service';
import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-book-main',
  templateUrl: './book-main.component.html',
  styleUrls: ['./book-main.component.css']
})
export class BookMainComponent implements OnInit {
  title = '';
  author = '';
  books: Book[];
  selectedBook: Book;
  
  btnSelected: String;

  displayDashboard: boolean = false;
  displayList: boolean = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.books = [];
    this.displayDashboard = true;

    this.fetchBooks('', '');
  }

  search(): void {
    this.fetchBooks(this.author, this.title);
  }

  fetchBooks(author: string, title: string): void {
    this.bookService
      .find(author, title)
      .subscribe(
        books => this.books = books
      );
  }

  filterChanged(): void {
    if (!this.author && !this.title)
      this.fetchBooks('', '');
  }

  showDashboard(): void {
    this.displayDashboard = !this.displayDashboard;
    this.displayList = false;
  }

  showList(): void {
    this.displayList = !this.displayList;
    this.displayDashboard = false;
  }

}
