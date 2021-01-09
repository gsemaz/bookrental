import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSearchComponent } from './book/book-search/book-search.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' }, // TODO: redirect to '/login' on first launch?
  { path: 'books', component: BookSearchComponent },
  { path: 'reviews/:id', component: ReviewDetailsComponent },
  { path: 'reviews', component: ReviewComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
