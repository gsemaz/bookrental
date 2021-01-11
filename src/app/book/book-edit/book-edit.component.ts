import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Book } from 'src/app/entities/book';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  displayAddForm: boolean;
  selectedId: string;
  book: Book;
  form: FormGroup;

  constructor(private fb: FormBuilder, private bookService: BookService, private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchQueryParams();
    this.form = this.fb.group({
      'author': ['', [Validators.minLength(1), Validators.required]],
      'title': ['', [Validators.minLength(1), Validators.required]],
      'userID': ['', [Validators.nullValidator, Validators.required]],
      'loanDate': ['', [Validators.minLength(1), Validators.required]],
      'returnDate': ['', [Validators.minLength(1), Validators.required]]
    });
  }

  fetchQueryParams(): void {
    combineLatest( [this.activatedRoute.paramMap, this.activatedRoute.queryParamMap] )
    .subscribe( ([pathParams, queryParams]) => {
      this.selectedId = queryParams.get('id');
      if (this.selectedId === '-1')
        this.showAddForm();
      else
        this.fetchBook(this.selectedId);
    })
  }

  showAddForm(): void {
    this.displayAddForm = true;
    this.book = { "id": -1, "title": "", "author": "", "userID": 0, "loanDate": "", "returnDate": "" };
    this.getNextId();
  }

  fetchBook(id: string): void {
    this.bookService
      .getById(id)
      .subscribe(
        book => this.book = book
      );
  }

  update(b: Book): void {
    this.bookService
      .updateById(b)
      .subscribe(
        () => this.router.navigateByUrl('/book/dashboard')
      );
  }

  delete(b: Book): void {
    this.bookService
      .deleteById(b)
      .subscribe(
        () => this.router.navigateByUrl('/book/dashboard')
      );
  }

  add(b: Book): void {
    this.bookService
      .add(b)
      .subscribe(
        () => this.router.navigateByUrl('/book/dashboard')
      );
  }

  getNextId(): void {
    let bookIds = [];

    this.bookService
      .find('', '')
      .subscribe(
        books => {
          bookIds = books.map((x) => {
            return x.id;
          });

          this.book.id = Math.max(...bookIds) + 1;
        }
    );
  }
}
