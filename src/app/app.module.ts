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
import { CustomerModule } from './customers/customer.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ReviewComponent,
    ReviewDetailsComponent
  ],
  imports: [
    // TODO: Remove FormsModule, AppRoutingModule (just everything that isn't directly used anymore) when subrouting is ready for every entity.
    // Import those modules in the new module (like in book.module.ts). Import that module (will be called ReviewModule, CustomerModule) here then :)
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BookModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
