import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  displayDashboard: boolean = false;
  displayList: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.displayDashboard = true;
  }

  showDashboard(): void {
    if (this.displayDashboard)
      return;

    this.router.navigateByUrl('/book/dashboard');
    this.displayDashboard = true;
    this.displayList = false;
  }

  showList(): void {
    if (this.displayList)
      return;

    this.router.navigateByUrl('/book/list');
    this.displayList = true;
    this.displayDashboard = false;
  }
}
