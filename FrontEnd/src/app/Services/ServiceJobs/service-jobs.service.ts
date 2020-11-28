import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';
import { Observable, throwError, from } from 'rxjs';
import { Mission } from 'src/app/Models/Jobs/mission';

@Injectable({
  providedIn: 'root'
})
export class ServiceJobsService {
//  apiURL = 'http://localhost:8090/MR';
apiURL = 'http://51.15.220.92:8090/MR';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  GetallMsiion(): Observable<Mission> {
    return this.http.get<Mission>(this.apiURL + '/mission/get')
      .pipe(
        retry(1),
        catchError(this.handleError)
      )


  }

  GetMission(id: number): Observable<Mission> {
    return this.http.get<Mission>(this.apiURL + '/mission/get/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }
  // HttpClient API post() method => Create employee
  AddMission(universite,id): Observable<Mission> {
    return this.http.post<Mission>(this.apiURL + '/mission/add/'+id, JSON.stringify(universite), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API put() method => Update employee
  UpdateMission(id, universite): Observable<Mission> {
    return this.http.put<Mission>(this.apiURL + '/mission/edit/' + id, JSON.stringify(universite), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  // HttpClient API delete() method => Delete employee
  DeleteMission(id) {
    return this.http.delete<Mission>(this.apiURL + '/mission/supprimer/' + id, this.httpOptions)
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

