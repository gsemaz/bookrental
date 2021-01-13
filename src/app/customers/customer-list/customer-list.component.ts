import { Component, OnInit, Input, Output } from '@angular/core';
import { Customer } from 'src/app/entities/customer';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
  lastname = '';

  constructor(private customerService: CustomerService, private router: Router) { }

  customers: Customer[];

  ngOnInit(): void {
    this.customers = [];
    this.fetchCustomers('', '');
  }

  fetchCustomers(firstname: string, lastname: string): void {
    this.customerService.find(firstname, lastname).subscribe(
      customers => this.customers = customers
    );
  }

  search(): void {
    this.fetchCustomers('', this.lastname);
  }

  filterChanged(): void {
    if (!this.lastname)
      this.fetchCustomers('', '');
  }

  showBooksOfCustomer(customerId: number): void {
    // this.router.navigate(['/dashboard'], { queryParams: { id: customerId }});
  }

  editCustomer(customer: Customer): void {
    let idSelected = -1;
    if (customer)
      idSelected = customer.id;

    this.router.navigate(['/customer/edit'], { queryParams: { id: idSelected }});
  }

  deleteCustomer(customer: Customer): void {
    this.customerService
      .deleteCustomerById(customer)
      .subscribe(
        () => this.fetchCustomers('', '')
      );
  }
}
