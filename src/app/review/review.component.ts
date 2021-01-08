import { Component, OnInit } from '@angular/core';
import { Review } from '../entities/review';
import { ReviewService } from './review.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  reviews: Review[] = [];
  selectedReview: Review;

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.getReviews();

  }

  open(review: Review): void
  {
    this.selectedReview = review;
  }

  getReviews(): void {
    this.reviewService.getReviews().subscribe(reviews => this.reviews = reviews);
  }


  // edit(): boolean
  // {
  //   if(this.selectedReview.userId != sessionId) return false;
  // }

}
