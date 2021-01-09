import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookSearchComponent } from './book/book-search/book-search.component';
import { BookCardComponent } from './book/book-card/book-card.component';
import { ReviewComponent } from './review/review.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    BookSearchComponent,
    BookCardComponent,
    ReviewComponent,
    ReviewDetailsComponent
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
