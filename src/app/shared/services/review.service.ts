import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Review } from '../../entities/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  BASE_URL = 'http://localhost:3000/reviews';

  constructor(private http: HttpClient) { }

  findReviews(bookID: number, stars: number): Observable<Review[]> {
    let params: any;

    if (bookID != null && stars != null) {
      params = new HttpParams().set('bookID', bookID.toString()).set('stars', stars.toString());
    } else if (bookID != null) {
      params = new HttpParams().set('bookID', bookID.toString());
    } else if (stars != null) {
      params = new HttpParams().set('stars', stars.toString());
    }

    const headers = new HttpHeaders().set('Accept', 'application/json');
    
    return this.http.get<Review[]>(this.BASE_URL, { params, headers })
      .pipe(
        tap(reviews => console.log('data access by review service', reviews))
      );
  }

  findReviewById(id: string): Observable<Review> {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.get<Review>(this.BASE_URL + '/' + id, { headers })
      .pipe(
        tap(review => console.log('data access by review service', review))
    );
  }

  addReview(review: Review): Observable<Review> {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.post<Review>(this.BASE_URL, review, { headers })
    .pipe(
        tap(review => console.log('data access by review service', review))
    );
  }

  updateReview(review: Review): Observable<Review> {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.put<Review>(this.BASE_URL + '/' + review.id, review, { headers })
    .pipe(
        tap(book => console.log('data access by review service', review))
    );
  }

  deleteReview(review: Review): Observable<any> {
    const headers = new HttpHeaders().set('Accept', 'application/json');

    return this.http.delete<any>(this.BASE_URL + '/' + review.id, { headers })
    .pipe(
        tap(review => console.log('data access by review service', review))
    );
  }
}
