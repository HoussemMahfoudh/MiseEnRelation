import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError, from } from 'rxjs';
import {Preferance} from 'src/app/Models/preferance/preferance';

@Injectable({
  providedIn: 'root'
})
export class ServicePreferanceService {
 // apiURL = 'http://localhost:8090/MR';
 apiURL = 'http://51.15.220.92:8090/MR';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  Getallpreferance(): Observable<Preferance> {
    return this.http.get<Preferance>(this.apiURL + '/preferance/get')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )


  }

  Getpreferance(id: number): Observable<Preferance> {
    return this.http.get<Preferance>(this.apiURL + '/preferance/get/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API post() method => Create employee
  Addpreferance(universite): Observable<Preferance> {
    return this.http.post<Preferance>(this.apiURL + '/preferance/add', JSON.stringify(universite), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }



  // HttpClient API put() method => Update employee
  updatepreferance(id, universite): Observable<Preferance> {
    return this.http.put<Preferance>(this.apiURL + '/preferance/edit/' + id, JSON.stringify(universite), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete employee
  Deletepreferance(id) {
    return this.http.delete<Preferance>(this.apiURL + '/preferance/supprimer/' + id, this.httpOptions)
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
