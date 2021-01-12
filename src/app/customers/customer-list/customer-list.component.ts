import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/entities/customer';
import { BookService } from 'src/app/shared/services/book.service';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})

export class CustomerListComponent implements OnInit {
  lastname = '';

  constructor(private customerService: CustomerService, private bookService: BookService) { }

  customers: Customer[];

  ngOnInit(): void {
    this.customers = [];
    this.fetchCustomers('', '');
  }

  fetchCustomers(firstname: string, lastname: string): void {
    this.customerService.find(firstname, lastname).subscribe(
      customers => this.customers = customers
    );

    this.customers.forEach(
      customer => {
        this.fetchBooksOfCustomer('1');
      }
    )
  }

  getCustomerOfId(id: string): Customer {
    return this.customers.filter(customer => customer.id == parseInt(id, 10))[0];
    
  }

  fetchBooksOfCustomer(id: string): void {
    this.bookService.getByCustomerId(id).subscribe(
      books => this.getCustomerOfId(id).books = books
    )
  }

  search(): void {
    this.fetchCustomers('', this.lastname);
  }

  filterChanged(): void {
    if (!this.lastname)
      this.fetchCustomers('', '');
  }
}
