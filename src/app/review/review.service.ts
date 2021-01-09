import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Review } from '../entities/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  url = 'http://localhost:3000/reviews';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getReviews(): Observable<Review[]> {

    return this.http.get<Review[]>(this.url);

  }

  getReview(id: number): Observable<Review> {
    const url2 = `${this.url}/${id}`;
    return this.http.get<Review>(url2);
  }

  createReview(): void {

    const headers = new HttpHeaders().set('Accept', 'application/json');
    const params = new HttpParams();

    const rev: Review = {
      id: 10,
      bookID: 2,
      reviewTitle: 'Awesome book!',
      text : 'I have read it in 2 days, it is awesome!',
      userID: 2,
      date: '22.03.2020'
    };

    this.http.post<Review>(this.url, rev, { headers, params });
  }

  update(review: Review): Observable<any> {
    return this.http.put(this.url, review, this.httpOptions);
  }


}
