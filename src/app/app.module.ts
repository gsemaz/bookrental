import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ReviewComponent } from './review/review.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { BookModule } from './book/book.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ReviewComponent,
    ReviewDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BookModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
