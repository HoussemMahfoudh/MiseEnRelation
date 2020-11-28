import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError, from } from 'rxjs';
import { Chercheurj } from 'src/app/Models/chercheur/chercheurj';
import { User } from 'src/app/Models/User/user';
@Injectable({
  providedIn: 'root'
})
export class ServiceprofilService {
  //apiURL = 'http://localhost:8090/MR/user';
  apiURL = 'http://51.15.220.92:8090/MR';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getallprofils(): Observable<User[]> {
    console.log(this.apiURL+'/get')
    return this.http.get<User[]>(this.apiURL + '/get',this.httpOptions);


  }

  getprofil(id: number): Observable<User> {
    return this.http.get<User>(this.apiURL + '/get/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API post() method => Create employee
  addprofil(user): Observable<User> {
    return this.http.post<User>(this.apiURL + '/add', JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update employee
  Updateprofil(id, user): Observable<User> {
    console.log("User To",user)
    return this.http.put<User>(this.apiURL + '/edit/' + id, user, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete employee
  DeleteProfil(id) {
    return this.http.delete<Chercheurj>(this.apiURL + '/supprimer/' + id, this.httpOptions)
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

