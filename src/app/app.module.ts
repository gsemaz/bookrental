import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BookModule } from './book/book.module';
import { CustomerModule } from './customers/customer.module';
import { ReviewModule } from './review/review.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    // TODO: Remove FormsModule, AppRoutingModule (just everything that isn't directly used anymore) when subrouting is ready for every entity.
    // Import those modules in the new module (like in book.module.ts). Import that module (will be called ReviewModule, CustomerModule) here then :)
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BookModule,
    CustomerModule,
    ReviewModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
