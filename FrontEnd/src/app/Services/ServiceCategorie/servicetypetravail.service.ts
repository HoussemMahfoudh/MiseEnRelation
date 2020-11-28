import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError, from } from 'rxjs';
import { Typetravail } from 'src/app/Models/typetravail/typetravail';

@Injectable({
  providedIn: 'root'
})
export class ServicetypetravailService {
  //apiURL = 'http://localhost:8090/MR';
  apiURL = 'http://51.15.220.92:8090/MR';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  GetalltypeTravail(): Observable<Typetravail> {
    return this.http.get<Typetravail>(this.apiURL + '/typeTravail/get')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )


  }

  GettypeTravail(id: number): Observable<Typetravail> {
    return this.http.get<Typetravail>(this.apiURL + '/typeTravail/get/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API post() method => Create employee
  AddtypeTravail(universite): Observable<Typetravail> {
    return this.http.post<Typetravail>(this.apiURL + '/typeTravail/add', JSON.stringify(universite), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update employee
  updatetypeTravail(id, universite): Observable<Typetravail> {
    return this.http.put<Typetravail>(this.apiURL + '/typeTravail/edit/' + id, JSON.stringify(universite), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete employee
  DeletetypeTravail(id) {
    return this.http.delete<Typetravail>(this.apiURL + '/typeTravail/supprimer/' + id, this.httpOptions)
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
