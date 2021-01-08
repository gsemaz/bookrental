import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../entities/review';
import { Location } from '@angular/common';
import { ReviewService } from '../review/review.service';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {

  review: Review;

  constructor(private route: ActivatedRoute, private location: Location, private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.getReview();
  }

  getReview(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.reviewService.getReview(id).subscribe(review => this.review = review);
  }

  goBack(): void {
    this.location.back();
  }

}
