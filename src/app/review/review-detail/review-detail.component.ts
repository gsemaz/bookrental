import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Review } from 'src/app/entities/review';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {
  @Input() review: Review;
  @Output('reviewSelectedEvent') reviewSelectedEvent = new EventEmitter();
  @Output('reviewEditEvent') reviewEditEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSelect(): void {
    this.reviewSelectedEvent.emit(this.review);
  }

  toggleEdit(): void {
    this.reviewEditEvent.emit(this.review);
  }
}
