import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest } from 'rxjs';
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
  queryId: string;
  
  constructor(private reviewService: ReviewService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.reviews = [];
    this.getQueryId();
  }

  getQueryId(): void {
    combineLatest( [this.activatedRoute.paramMap, this.activatedRoute.queryParamMap] )
    .subscribe( ([pathParams, queryParams]) => {
      this.queryId = queryParams.get('id');
      if (this.queryId) {
        this.fetchReviews(+this.queryId, null);
      }
      else {
        this.fetchReviews(null, null);
      }
    })
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

  selectReview(review: Review): void {
    this.stars = review.stars;
    this.bookID = review.bookID;
  }

  addReview(review: Review): void {
    let selectedId = -1;
    if (review)
      selectedId = review.id;

    this.router.navigate(['/review/edit'], { queryParams: { id: selectedId }});
  
  }
}
