import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReviewComponent } from './review/review.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { BookMainComponent } from './book/book-main/book-main.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDashboardComponent } from './book/book-dashboard/book-dashboard.component';
import { BookEditComponent } from './book/book-edit/book-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ReviewComponent,
    ReviewDetailsComponent,
    BookMainComponent,
    BookListComponent,
    BookDashboardComponent,
    BookEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
