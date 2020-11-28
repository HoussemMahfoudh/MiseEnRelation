import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError, from } from 'rxjs';
import { Categorie } from 'src/app/Models/categorie/categorie';

@Injectable({
  providedIn: 'root'
})
export class ServiceCategorieService {
  //apiURL = 'http://localhost:8090/MR';
  apiURL = 'http://51.15.220.92:8090/MR';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  Getallcategorie(): Observable<Categorie> {
    return this.http.get<Categorie>(this.apiURL + '/categorie/get')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )


  }

  Getcatgorie(id: number): Observable<Categorie> {
    return this.http.get<Categorie>(this.apiURL + '/categorie/get/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API post() method => Create employee
  Addcategorie(universite): Observable<Categorie> {
    return this.http.post<Categorie>(this.apiURL + '/categorie/add', JSON.stringify(universite), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update employee
  updatecategorie(id, universite): Observable<Categorie> {
    return this.http.put<Categorie>(this.apiURL + '/categorie/edit/' + id, JSON.stringify(universite), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete employee
  Deletecategorie(id) {
    return this.http.delete<Categorie>(this.apiURL + '/categorie/supprimer/' + id, this.httpOptions)
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
