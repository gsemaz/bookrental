import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewRoutingModule } from './review-routing.module';
import { ReviewComponent } from './review/review.component';
import { ReviewEditComponent } from './review-edit/review-edit.component';
import { ReviewDetailComponent } from './review-detail/review-detail.component';


@NgModule({
  declarations: [ReviewComponent, ReviewListComponent, ReviewEditComponent, ReviewDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ReviewRoutingModule
  ]
})

export class ReviewModule { }
