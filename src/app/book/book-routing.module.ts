import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookComponent } from './book/book.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookDashboardComponent } from './book-dashboard/book-dashboard.component';
import { BookEditComponent } from './book-edit/book-edit.component';

const routes: Routes = [
    {
        path: 'book',
        component: BookComponent,
        children: [
            { path: 'list', component: BookListComponent },
            { path: 'dashboard', component: BookDashboardComponent },
            { path: 'edit', component: BookEditComponent }
        ]
    }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }