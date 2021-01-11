import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Book } from '../../entities/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

    BASE_URL = 'http://localhost:3000/books';

    constructor(private http: HttpClient) { }

    find(author: string, title: string): Observable<Book[]> {
        
        let params: any;

        if (author.length != 0 && title.length != 0) {
            params = new HttpParams().set('author', author).set('title', title);
        } else if (author.length != 0) {
            console.log('test');
            params = new HttpParams().set('author', author);
        } else if (title.length != 0) {
            params = new HttpParams().set('title', title);
        }

        console.log(params);

        const headers = new HttpHeaders().set('Accept', 'application/json');

        return this.http.get<Book[]>(this.BASE_URL, { params, headers })
        .pipe(
            tap(books => console.log('data access by book service', books))
        );
    }

    getById(id: string): Observable<Book> {
        const headers = new HttpHeaders().set('Accept', 'application/json');

        return this.http.get<Book>(this.BASE_URL + '/' + id, { headers })
        .pipe(
            tap(book => console.log('data access by book service', book))
        );
    }

    updateById(book: Book): Observable<Book> {
        const headers = new HttpHeaders().set('Accept', 'application/json');

        return this.http.put<Book>(this.BASE_URL + '/' + book.id, book, { headers })
        .pipe(
            tap(book => console.log('data access by book service', book))
        );
    }

    deleteById(book: Book): Observable<any> {
        const headers = new HttpHeaders().set('Accept', 'application/json');

        return this.http.delete<any>(this.BASE_URL + '/' + book.id, { headers })
        .pipe(
            tap(book => console.log('data access by book service', book))
        );
    }

    add(book: Book): Observable<Book> {
        const headers = new HttpHeaders().set('Accept', 'application/json');

        return this.http.post<Book>(this.BASE_URL, book, { headers })
        .pipe(
            tap(book => console.log('data access by book service', book))
        );
    }
}
