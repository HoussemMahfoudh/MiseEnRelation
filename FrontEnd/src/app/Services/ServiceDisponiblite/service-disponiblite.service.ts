import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError, from } from 'rxjs';
import {Disponibilte  } from 'src/app/Models/Dispo/disponibilte';

@Injectable({
  providedIn: 'root'
})
export class ServiceDisponibliteService {
 // apiURL = 'http://localhost:8090/MR';
 apiURL = 'http://51.15.220.92:8090/MR';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  Getalldispo(): Observable<Disponibilte> {
    return this.http.get<Disponibilte>(this.apiURL + '/Dispo/get')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )


  }

  Getdispo(id: number): Observable<Disponibilte> {
    return this.http.get<Disponibilte>(this.apiURL + '/Dispo/get/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API post() method => Create employee
  Adddispo(universite): Observable<Disponibilte> {
    return this.http.post<Disponibilte>(this.apiURL + '/Dispo/add', JSON.stringify(universite), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update employee
  updatedispo(id, universite): Observable<Disponibilte> {
    return this.http.put<Disponibilte>(this.apiURL + '/Dispo/edit/' + id, JSON.stringify(universite), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete employee
  Deletedispo(id) {
    return this.http.delete<Disponibilte>(this.apiURL + '/Dispo/supprimer/' + id, this.httpOptions)
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
