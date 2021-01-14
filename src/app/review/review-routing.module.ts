import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReviewEditComponent } from './review-edit/review-edit.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { ReviewComponent } from './review/review.component';


const routes: Routes = [
  {
    path: 'review',
    component: ReviewComponent,
    children: [
      { path: 'list', component: ReviewListComponent},
      { path: 'edit', component: ReviewEditComponent},
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReviewRoutingModule { }
