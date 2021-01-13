import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  displayForm: boolean = false;
  displayList: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigateByUrl('/review/list');
    this.displayList = true;
  }

  showForm(): void {
    if (this.displayForm)
      return;

    this.router.navigateByUrl('/review/edit');
    this.displayForm = true;
    this.displayList = false;
  }

  showList(): void {
    if (this.displayList)
      return;

    this.router.navigateByUrl('/review/list');
    this.displayList = true;
    this.displayForm = false;
  }

}
