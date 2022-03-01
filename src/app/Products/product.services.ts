import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable,  } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { Iproduct } from "./products.interface";
import { catchError, tap } from "rxjs/operators";


@Injectable ({
    providedIn: 'root'
})

export class ProductService {
  // To make this code work with an actual backend web server, simply change the link from the local link to the web link. Module 10 lesson 5.
  private productUrl = '/api/products/products.json';

  // http service instance is injected into this constructor()
  constructor (private http: HttpClient) {}

  getProducts(): Observable<Iproduct[]> { 
      return this.http.get<Iproduct[]>(this.productUrl).pipe(
        tap(data => console.log('All', JSON.stringify(data))),
        catchError(this.handleError)
      );   
  }
  
  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}