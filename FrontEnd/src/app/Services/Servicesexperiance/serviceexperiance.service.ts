import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError, from } from 'rxjs';
import {Experiance  } from 'src/app/Models/experiance/experiance';

@Injectable({
  providedIn: 'root'
})
export class ServiceexperianceService {
 // apiURL = 'http://localhost:8090/MR';
 apiURL = 'http://51.15.220.92:8090/MR';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  Getallexperiance(): Observable<Experiance> {
    return this.http.get<Experiance>(this.apiURL + '/experiance/get')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )


  }

  Getexperiance(id: number): Observable<Experiance> {
    return this.http.get<Experiance>(this.apiURL + '/experiance/get/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API post() method => Create employee
  Addexperiance(universite): Observable<Experiance> {
    return this.http.post<Experiance>(this.apiURL + '/experiance/add', JSON.stringify(universite), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update employee
  updateexperiance(id, universite): Observable<Experiance> {
    return this.http.put<Experiance>(this.apiURL + '/experiance/edit/' + id, JSON.stringify(universite), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete employee
  Deleteexperiance(id) {
    return this.http.delete<Experiance>(this.apiURL + '/experiance/supprimer/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }




  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


}
