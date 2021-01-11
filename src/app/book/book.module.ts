import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookRoutingModule } from './book-routing.module';
import { BookCardComponent } from './book-card/book-card.component';
import { BookEditComponent } from './book-edit/book-edit.component';



@NgModule({
  declarations: [BookComponent, BookListComponent, BookDashboardComponent, BookCardComponent, BookEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BookRoutingModule
  ]
})
export class BookModule { }
