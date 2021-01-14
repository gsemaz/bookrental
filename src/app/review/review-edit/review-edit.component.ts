import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { combineLatest } from 'rxjs';
import { Review } from 'src/app/entities/review';
import { ReviewService } from 'src/app/shared/services/review.service';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css']
})
export class ReviewEditComponent implements OnInit {

  isAdd: boolean;
  selectedId: string;
  review: Review;
  form: FormGroup;

  constructor(private builder: FormBuilder, private reviewService: ReviewService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.review = {   // dummy init preventing undefined behaviour
      "id": -1,
      "bookID": null,
      "userID": null,
      "text": "",
      "reviewTitle": "",
      "date": "",
      "stars": null
    };

    this.getQueryId();
    this.form = this.builder.group({
      'bookID':       ['', [Validators.min(1), Validators.required]],
      'userID':       ['', [Validators.min(1), Validators.required]],
      'reviewTitle':  ['', [Validators.minLength(10), Validators.required]],
      'date':         ['', [Validators.minLength(8), Validators.required]],
      'stars':        ['', [Validators.min(1), Validators.required]]
    });
  }

  getQueryId(): void {
    combineLatest( [this.activatedRoute.paramMap, this.activatedRoute.queryParamMap] )
    .subscribe( ([pathParams, queryParams]) => {
      this.selectedId = queryParams.get('id');
      if (this.selectedId === '-1' || !this.selectedId) {
        this.isAdd = true;
        this.getNextId();
      } else
        this.getReview(this.selectedId);
    })
  }

  getReview(id: string): void {
    this.reviewService
      .findReviewById(id)
      .subscribe(
        review => this.review = review
      );
  }

  addReview(review: Review): void {
    this.reviewService
      .addReview(review)
      .subscribe(
        () => this.router.navigateByUrl('/review/list')
      );
  }

  updateReview(review: Review): void {
    this.reviewService
      .updateReview(review)
      .subscribe(
        () => this.router.navigateByUrl('/review/list')
      );
  }

  deleteReview(review: Review): void {
    this.reviewService
      .deleteReview(review)
      .subscribe(
        () => this.router.navigateByUrl('/review/list')
      );
  }

  getNextId(): void {
    let reviewIds = [];

    this.reviewService
      .findReviews(null, null)
      .subscribe(
        reviews => {
          reviewIds = reviews.map((x) => {
            return x.id;
          });

          this.review.id = Math.max(...reviewIds) + 1;
        }
    );
  }

}
