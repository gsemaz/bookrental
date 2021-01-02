import { Component, OnInit } from '@angular/core';
import { iif } from 'rxjs';
import { Review } from '../entities/review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  //book: Book;
  reviews: Review[] = [];
  selectedReview: Review;
  constructor() { }

  ngOnInit(): void {
  }

  select(review: Review): void
  {
    this.selectedReview = review;
  }

  // edit(): boolean
  // {
  //   if(this.selectedReview.userId != sessionId) return false;

    
  // }

}
