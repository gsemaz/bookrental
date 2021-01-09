import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from '../../entities/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  find(author: string, title: string, loan: boolean): Observable<Book[]> {
    const url = 'http://localhost:3000/books';
    let params;

    if (author.length != 0 && title.length != 0) {
      params = new HttpParams().set('author', author).set('title', title);
    }
    else if (author.length != 0) {
      console.log('test');
      params = new HttpParams().set('author', author);
    }
    else if (title.length != 0) {
      params = new HttpParams().set('title', title);
    }

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http.get<Book[]>(url, { params, headers })
      .pipe(
        tap(books => console.log('data access by book service', books))
      );
  }
}
