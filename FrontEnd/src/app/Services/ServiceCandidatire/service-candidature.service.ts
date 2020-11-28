import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError, from } from 'rxjs';
import { Candidature } from 'src/app/Models/candidature/candidature';
@Injectable({
  providedIn: 'root'
})
export class ServiceCandidatureService {
  apiURL = 'http://localhost:8090/MR';
 //apiURL = 'http://51.15.220.92:8090/MR';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getallcandidature(): Observable<Candidature> {
    return this.http.get<Candidature>(this.apiURL + '/Candidature/get')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )


  }

  Getcandidature(id: number): Observable<Candidature> {
    return this.http.get<Candidature>(this.apiURL + '/Candidature/get/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API post() method => Create employee
  Addcandidature(universite,id:number): Observable<Candidature> {
    return this.http.post<Candidature>(this.apiURL + '/Candidature/add/'+ id, JSON.stringify(universite), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update employee
  updateCandaiture(id, Candidature): Observable<Candidature> {
    return this.http.put<Candidature>(this.apiURL + '/Candidature/edit/' + id, JSON.stringify(Candidature), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete employee
  Detetecandidature(id) {
    return this.http.delete<Candidature>(this.apiURL + '/Candidature/supprimer/' + id, this.httpOptions)
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

