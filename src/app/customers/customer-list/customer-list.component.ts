import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/customer';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  customers: Customer[];

  ngOnInit(): void {
    this.customers = [];
  }

  fetchCustomers(name: string, id: string): void {
  }

}
