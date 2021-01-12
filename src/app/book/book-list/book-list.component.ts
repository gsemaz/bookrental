import { Component, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/entities/book';
import { BookService } from 'src/app/shared/services/book.service';

import * as jsPDF from 'jspdf';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  title = '';
  author = '';
  books: Book[];

  @ViewChild('htmlData') htmlData: ElementRef;

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

  showReviews(selection: Book): void {
    // let idSelected = -1;
    // if (selection)
    //   idSelected = selection.id;

    // this.router.navigate(['/reviews'], { queryParams: { id: idSelected}});
    alert("TODO: Show Reviews by BookID");
  }

  addReview(selection: Book): void {
    // let idSelected = -1;
    // if (selection)
    //   idSelected = selection.id;

    // this.router.navigate(['/reviews/add'], { queryParams: { id: idSelected}});
    alert("TODO: Add Review by BookID")
  }


  // PDF Export
  public openPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');
    doc.fromHTML(DATA.innerHTML,15,15);
    doc.output('dataurlnewwindow');
  }

  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,15,15,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('books_exported.pdf');
  }

}
