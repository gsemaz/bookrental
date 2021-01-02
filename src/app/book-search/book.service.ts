import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from '../entities/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  find(author: string): Observable<Book[]> {
    const url = 'http://localhost:3000/books';

    const params = new HttpParams()
      .set('author', author);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Book[]>(url, { params, headers })
      .pipe(
        tap(books => console.log('data access by book service', books))
      );
  }
}
