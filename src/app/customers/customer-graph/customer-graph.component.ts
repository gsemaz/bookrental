import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as ApexCharts from 'apexcharts';

@Component({
  selector: 'app-customer-graph',
  templateUrl: './customer-graph.component.html',
  styleUrls: ['./customer-graph.component.css']
})
export class CustomerGraphComponent implements OnInit {
  @Input() joinDates: String[];
  @Input() exitDates: String[];
  // TODO: buttons for years, calculate sum, output sum of year to parent 

  constructor() { }

  ngOnInit(): void {
    this.showChart();
  }

  showChart(): void {
    var options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'users',
        data: [30,40,35,50,49,60,70,91,125]
      }],
      xaxis: {
        categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
      }
    }
    
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    
    chart.render();
  }

}
