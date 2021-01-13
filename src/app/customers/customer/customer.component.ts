import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  displayChart: boolean = false;
  displayList: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/customer/list');
    this.displayList = true;
  }

  showList(): void {
    if (this.displayList)
      return;

    this.router.navigateByUrl('/customer/list');
    this.displayList = true;
    this.displayChart = false;
  }

  showChart(): void {
    if (this.displayChart)
      return;

    this.router.navigateByUrl('/customer/chart');
    this.displayChart = true;
    this.displayList = false;
  }

}
