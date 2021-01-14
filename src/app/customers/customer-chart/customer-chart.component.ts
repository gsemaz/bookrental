import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/shared/services/customer.service';
import { ChartYear } from './entities/chartyear';

@Component({
  selector: 'app-customer-chart',
  templateUrl: './customer-chart.component.html',
  styleUrls: ['./customer-chart.component.css']
})
export class CustomerChartComponent implements OnInit {
  joinDates: string[];
  exitDates: string[];
  chartYears: ChartYear[] = [];
  monthsForGraph: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  yearsForGraph: number[] = [];

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
        exitDates => {
          this.exitDates = exitDates;
          this.updateChartData();
        }
      );
  }

  changeYear(year): void {
    this.chartYears.forEach( chartYear => {
      if ( chartYear.year === year ) {
        this.monthsForGraph = chartYear.months;
      }
    });
  }


  updateChartData(): void {
    this.updateChartYears();
    this.updateChartMonths();
  }

  updateChartYears(): void {
    this.yearsForGraph = this.getSortedYears();
    this.yearsForGraph.forEach( year => {
      const chartYear: ChartYear = {
        year: year,
        months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
      };
      this.chartYears.push(chartYear);
    });
  }

  updateChartMonths(): void {
    this.chartYears.forEach(chartYear => {
        this.joinDates.forEach(date => {
          const year = parseInt(date.split('-')[1], 10);
          if (year === chartYear.year) {
              const month = parseInt(date.split('-')[0], 10) - 1;
              chartYear.months[month]++;
            }
        });
        this.exitDates.forEach(date => {
          const year = parseInt(date.split('-')[1], 10);
          if (year === chartYear.year) {
            const month = parseInt(date.split('-')[0], 10) - 1;
            chartYear.months[month]--;
          }
        });
    });

    let addingFromYearBefore = 0;
    this.chartYears.forEach(chartYear => {
      console.log('charyear: ' + chartYear.year + ' | ' + this.chartYears[0].year)
      if (chartYear.year !== this.chartYears[0].year) {
        chartYear.months[0] = chartYear.months[0] + addingFromYearBefore;
      }
      let counter = 0;
      chartYear.months.forEach(month => {
        if ( counter !== 0 )  {
            chartYear.months[counter] = chartYear.months[counter - 1] + chartYear.months[counter];
        }
        counter++;
      });
      addingFromYearBefore = chartYear.months[11];
    });
  }

  getSortedYears(): number[] {
    const years = new Set<number>();
    const allDates = [...this.joinDates, ...this.exitDates]; /*concat both arrays*/
    allDates.forEach( date => {
      years.add(parseInt(date.split('-')[1], 10));
    });
    return Array.from(years.values()).sort((n1, n2) => n1 - n2) ;
  }
}
