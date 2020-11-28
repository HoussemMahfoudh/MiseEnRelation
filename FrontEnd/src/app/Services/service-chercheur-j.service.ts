import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError, from } from 'rxjs';
import { Chercheurj } from 'src/app/Models/chercheur/chercheurj';
import { User } from '../Models/User/user';
@Injectable({
  providedIn: 'root'
})
export class ServiceChercheurJService {
  apiURL = 'http://localhost:8090/MR';
 //apiURL = 'http://51.15.220.92:8090/MR';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getallchercheurj(): Observable<User> {
    return this.http.get<User>(this.apiURL + '/user/get')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )


  }

  Getchercheurj(id: number): Observable<Chercheurj> {
    return this.http.get<Chercheurj>(this.apiURL + '/chercheurJ/get/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API post() method => Create employee
  Addchercheurj(universite,id:number): Observable<Chercheurj> {
    return this.http.post<Chercheurj>(this.apiURL + '/chercheurJ/add/'+ id, JSON.stringify(universite), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update employee
  updatechercheurj(id, Candidature): Observable<Chercheurj> {
    return this.http.put<Chercheurj>(this.apiURL + '/chercheurJ/edit/' + id, JSON.stringify(Candidature), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete employee
  Detetechercheurj(id) {
    return this.http.delete<Chercheurj>(this.apiURL + '/chercheurJ/supprimer/' + id, this.httpOptions)
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

