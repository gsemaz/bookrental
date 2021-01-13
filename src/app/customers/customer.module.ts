import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerRoutingModule } from './customer-routing.module';
import {CustomerComponent} from './customer/customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerBooksComponent } from './customer-books/customer-books.component';
import { CustomerChartComponent } from './customer-chart/customer-chart.component';
import { CustomerGraphComponent } from './customer-graph/customer-graph.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';


@NgModule({
  declarations: [CustomerComponent, CustomerListComponent, CustomerBooksComponent, CustomerChartComponent, CustomerGraphComponent, CustomerEditComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule
  ]
})

export class CustomerModule { }
