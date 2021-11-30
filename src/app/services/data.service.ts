import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  errorMsg!:string;
  constructor(private http: HttpClient) { }

  getData() {
   return this.http.get('https://jsonplaceholder.typicode.com/users').pipe(
      catchError(this.errorHandler)
    )}

  errorHandler(error: HttpErrorResponse) {
    return this.errorMsg = (error.message || "server error.");
  }
}
