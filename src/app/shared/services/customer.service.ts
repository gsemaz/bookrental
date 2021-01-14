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

    BASE_URL_CUSTOMER = 'http://localhost:3000/customers';
    BASE_URL_JOINDATES = 'http://localhost:3000/customer_joins';
    BASE_URL_EXITDATES = 'http://localhost:3000/customer_exits';

    constructor(private http: HttpClient) { }

    find(firstname: string, lastname: string): Observable<Customer[]> {
        let params: any;

        if (firstname.length != 0 && lastname.length != 0) {
            params = new HttpParams().set('firstname', firstname).set('lastname', lastname);
        } else if (firstname.length != 0) {
            params = new HttpParams().set('firstname', firstname);
        } else if (lastname.length != 0) {
            params = new HttpParams().set('lastname', lastname);
        }

        const headers = new HttpHeaders().set('Accept', 'application/json');

        return this.http.get<Customer[]>(this.BASE_URL_CUSTOMER, { params, headers })
        .pipe(
            tap(customer => console.log('data access by customer service', customer))
        );
    }

    add(customer: Customer): Observable<Customer> {
        const headers = new HttpHeaders().set('Accept', 'application/json');

        return this.http.post<Customer>(this.BASE_URL_CUSTOMER, customer, { headers })
        .pipe(
            tap(customer => console.log('data access by customer service', customer))
        );
    }

    addJoin(dateString: string): Observable<string> {
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.post<string>(this.BASE_URL_JOINDATES, { dateString }, { headers })
        .pipe(
            tap(join => console.log('data access by customer service', join))
        );
    }
    addExit(dateString: string): Observable<string> {
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.post<string>(this.BASE_URL_EXITDATES, { dateString }, { headers })
        .pipe(
            tap(exit => console.log('data access by customer service', exit))
        );
    }

    getJoins(): Observable<string[]> {
        const headers = new HttpHeaders().set('Accept', 'application/json');

        return this.http.get<string[]>(this.BASE_URL_JOINDATES, { headers })
        .pipe(
            tap(joins => console.log('data access by customer service', joins))
        );
    }

    getExits(): Observable<string[]> {
        const headers = new HttpHeaders().set('Accept', 'application/json');

        return this.http.get<string[]>(this.BASE_URL_EXITDATES, { headers })
        .pipe(
            tap(exits => console.log('data access by customer service', exits))
        );
    }

    getCustomerById(id: string): Observable<Customer> {
        const headers = new HttpHeaders().set('Accept', 'application/json');

        return this.http.get<Customer>(this.BASE_URL_CUSTOMER + '/' + id, { headers })
        .pipe(
            tap(customer => console.log('data access by customer service', customer))
        );
    }

    updateCustomerById(customer: Customer): Observable<Customer> {
        const headers = new HttpHeaders().set('Accept', 'application/json');

        return this.http.put<Customer>(this.BASE_URL_CUSTOMER + '/' + customer.id, customer, { headers })
        .pipe(
            tap(customer => console.log('data access by customer service', customer))
        );
    }

    addCustomer(customer: Customer): Observable<Customer> {
        const headers = new HttpHeaders().set('Accept', 'application/json');

        return this.http.post<Customer>(this.BASE_URL_CUSTOMER, customer, { headers })
        .pipe(
            tap(customer => console.log('data access by customer service', customer))
        );
    }

    deleteCustomerById(customer: Customer): Observable<any> {
        const headers = new HttpHeaders().set('Accept', 'application/json');

        return this.http.delete<any>(this.BASE_URL_CUSTOMER + '/' + customer.id, { headers })
        .pipe(
            tap(customer => console.log('data access by book service', customer))
        );
    }
}
