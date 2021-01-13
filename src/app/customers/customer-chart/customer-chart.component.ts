import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';

@Component({
  selector: 'app-customer-chart',
  templateUrl: './customer-chart.component.html',
  styleUrls: ['./customer-chart.component.css']
})
export class CustomerChartComponent implements OnInit {

  signupsPerYear: number = 0;
  joinDates: String[];
  exitDates: String[];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.joinDates = [];
    this.exitDates = [];

    this.fetchDates();
  }

  fetchDates(): void {
    this.fetchJoinDates();
    this.fetchExitDates();
  }

  fetchJoinDates(): void {
    this.customerService
      .getJoins()
      .subscribe(
        joinDates => this.joinDates = joinDates
      );
  }

  fetchExitDates(): void {
    this.customerService
      .getExits()
      .subscribe(
        exitDates => this.exitDates = exitDates
      );
  }
}
