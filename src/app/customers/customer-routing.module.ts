import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerBooksComponent} from './customer-books/customer-books.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerComponent} from './customer/customer.component';


const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      { path: 'books', component: CustomerBooksComponent},
      { path: 'list', component: CustomerListComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
