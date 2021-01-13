import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from 'src/app/entities/review';
import { ReviewService } from 'src/app/shared/services/review.service';

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  bookID: number;
  stars: number;
  reviews: Review[];
  
  constructor(private reviewService: ReviewService, private router: Router) { }

  ngOnInit(): void {
    this.reviews = [];
    this.fetchReviews(null, null);
  }

  search(): void {
    if (this.bookID && this.stars) {
      this.fetchReviews(this.bookID, this.stars);
    } else if (this.bookID && !this.stars) {
      this.fetchReviews(this.bookID, null);
    } else if (!this.bookID && this.stars) {
      this.fetchReviews(null, this.stars);
    }
  }

  fetchReviews(bookID: number, stars: number): void {
    this.reviewService
      .findReviews(bookID, stars)
      .subscribe(
        reviews => this.reviews = reviews
      );
  }

  reviewSelected(review: Review): void {
    this.stars = review.stars;
    this.bookID = review.bookID;
  }

  addReview(review: Review): void {
    let idSelected = -1;
    if (review)
      idSelected = review.id;

    this.router.navigate(['/review/edit'], { queryParams: { id: idSelected }});
  }
}
