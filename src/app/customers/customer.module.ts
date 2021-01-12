import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import {CustomerComponent} from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerBooksComponent } from './customer-books/customer-books.component';


@NgModule({
  declarations: [CustomerComponent, CustomerListComponent, CustomerBooksComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule
  ]
})

export class CustomerModule { }
