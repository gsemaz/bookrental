import { Component, OnInit, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Customer } from 'src/app/entities/customer';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  displayAddForm: boolean;
  selectedId: string;
  customer: Customer;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private customerService: CustomerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchQueryParams();
    this.form = this.formBuilder.group({
      'firstname': ['', [Validators.minLength(1), Validators.required]],
      'lastname': ['', [Validators.minLength(1), Validators.required]]
    });
  }

  fetchQueryParams(): void {
    combineLatest( [this.activatedRoute.paramMap, this.activatedRoute.queryParamMap] )
    .subscribe( ([pathParams, queryParams]) => {
      this.selectedId = queryParams.get('id');
      if (this.selectedId === '-1')
        this.showAddForm();
      else
        this.fetchCustomer(this.selectedId);
    })
  }

  showAddForm(): void {
    this.displayAddForm = true;
    this.customer = { "id": -1, "firstname": "", "lastname": ""};
    this.getNextId();
  }

  fetchCustomer(id: string): void {
    this.customerService
      .getCustomerById(id)
      .subscribe(
        customer => this.customer = customer
      );
  }

  updateCustomer(customer: Customer): void {
    this.customerService
      .updateCustomerById(customer)
      .subscribe(
        () => this.router.navigateByUrl('/customer/list')
      );
  }

  addCustomer(customer: Customer): void {
    this.customerService
      .addCustomer(customer)
      .subscribe(
        () => this.router.navigateByUrl('/customer/list')
      );
  }

  getNextId(): void {
    let customerIds = [];

    this.customerService
      .find('', '')
      .subscribe(
        customers => {
          customerIds = customers.map((x) => {
            return x.id;
          });

          this.customer.id = Math.max(...customerIds) + 1;
        }
    );
  }
}
