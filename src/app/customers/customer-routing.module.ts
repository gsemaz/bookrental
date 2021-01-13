import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerChartComponent } from './customer-chart/customer-chart.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerComponent} from './customer/customer.component';


const routes: Routes = [
  {
    path: 'customer',
    component: CustomerComponent,
    children: [
      // { path: 'books', component: CustomerBooksComponent},
      { path: 'list', component: CustomerListComponent},
      { path: 'chart', component: CustomerChartComponent},
      { path: 'edit', component: CustomerEditComponent}
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
