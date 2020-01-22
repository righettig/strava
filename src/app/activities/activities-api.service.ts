import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { IActivity } from './models/activity';
import { catchError, tap, filter, timeout, map } from 'rxjs/operators';

const localUrl = 'api/activities.json';
const TIMEOUT = 5000;

@Injectable({
  providedIn: 'root'
})
export class ActivitiesApiService {

  constructor(private http: HttpClient) { }

  getActivities(): Observable<IActivity[]> {
    return this.http.get<IActivity[]>(localUrl).pipe(
      tap(data => console.log("getActivities: " + JSON.stringify(data))),
      timeout(TIMEOUT),
      catchError(this.handleError)
    );
  }

  getActivity(activityId: number): Observable<IActivity> {
    if (activityId === 0) {
      return of(this.initializeActivity());
    }

    return this.http.get<IActivity[]>(localUrl).pipe(
      map(data => data.find(a => a.id == activityId)),
      tap(data => console.log('getActivity: ' + JSON.stringify(data))),
      timeout(TIMEOUT),
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  private initializeActivity(): IActivity {
    // Return an initialized object
    return {
      id: 0,
      name: '',
      category: '',
      description: '',
      creationDate: '',
      subcategory: '',
      icon: null
    };
  }

}
