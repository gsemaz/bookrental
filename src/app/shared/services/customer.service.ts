import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Customer } from '../../entities/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

    BASE_URL = 'http://localhost:3000/customers';

    constructor(private http: HttpClient) { }

    find(customerName: string, id: string): Observable<Customer[]> {
        let params: any;

        if (customerName.length != 0 && id.length != 0) {
            params = new HttpParams().set('customer', customerName).set('id', id);
        } else if (customerName.length != 0) {
            params = new HttpParams().set('id', id);
        } else if (customerName.length != 0) {
            params = new HttpParams().set('customer', customerName);
        }

        const headers = new HttpHeaders().set('Accept', 'application/json');

        return this.http.get<Customer[]>(this.BASE_URL, { params, headers })
        .pipe(
            tap(customer => console.log('data access by customer service', customer))
        );
    }

    add(customer: Customer): Observable<Customer> {
        const headers = new HttpHeaders().set('Accept', 'application/json');

        return this.http.post<Customer>(this.BASE_URL, customer, { headers })
        .pipe(
            tap(customer => console.log('data access by customer service', customer))
        );
    }

/*
    getById(id: string): Observable<Customer> {
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Book>(this.BASE_URL + '/' + id, { headers })
        .pipe(
            tap(customer => console.log('data access by customer service', customer))
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

    */
}
