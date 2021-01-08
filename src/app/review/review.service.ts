import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../entities/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  url = 'http://localhost:3000/reviews';

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Review[]> {

    return this.http.get<Review[]>(this.url);

  }

  getReview(id: number): Observable<Review> {

    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams();

    params.set('id', id.toString());
    return this.http.get<Review>(this.url, { headers, params });
  }
}
