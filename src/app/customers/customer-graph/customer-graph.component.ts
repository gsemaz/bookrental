import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import * as ApexCharts from 'apexcharts';
import {ChartYear} from '../customer-chart/entities/chartyear';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-customer-graph',
  templateUrl: './customer-graph.component.html',
  styleUrls: ['./customer-graph.component.css']
})
export class CustomerGraphComponent implements OnInit {
  @Input() monthsForGraph: number[];
  @Input() yearsForGraph: number[];
  @Output('onYearSelected') yearSelected = new EventEmitter();
  // TODO: buttons for years, calculate sum, output sum of year to parent

  chart: ApexCharts;
  currentYear: number;

  constructor() { }

  ngOnInit(): void {
  }

  updateChart(): void {
    if( this.chart == null ) {
      const options = {
        chart: {
          type: 'line'
        },
        series: [{
          name: 'users',
          data: this.monthsForGraph
        }],
        xaxis: {
          categories: [1,2,3,4,5,6,7,8,9,10,11,12]
        }
      }
      this.chart = new ApexCharts(document.querySelector("#chart"), options);
      this.chart.render();
    } else {
      this.chart.updateOptions({
        series: [{
          data: this.monthsForGraph
        }]
      });
    }
  }

  changeYear(year): void {
    this.currentYear = year;
    this.yearSelected.emit(year);
    setTimeout(_ => {
      this.updateChart();
    }, 50);
  }

}
