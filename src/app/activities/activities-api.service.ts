import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { IActivity } from './models/activity';
import { catchError, tap, timeout, map } from 'rxjs/operators';
import { faRunning, faBicycle, faHiking } from '@fortawesome/free-solid-svg-icons';

const localUrl = 'api/activities.json';
const TIMEOUT = 5000;

@Injectable({
  providedIn: 'root'
})
export class ActivitiesApiService {

  constructor(private http: HttpClient) { }

  activities: IActivity[]; // in-memory cache

  getActivities(): Observable<IActivity[]> {
    if (this.activities) {
      return of(this.activities);

    } else {
      return this.http.get<IActivity[]>(localUrl).pipe(
        tap(data => this.activities = data),
        tap(data => console.log("getActivities: " + JSON.stringify(data))),
        timeout(TIMEOUT),
        catchError(this.handleError)
      );
    }
  }

  getActivity(activityId: number): Observable<IActivity> {
    if (this.activities) {
      return of(this.activities.find(a => a.id == activityId));

    } else {
      return this.http.get<IActivity[]>(localUrl).pipe(
        map(data => data.find(a => a.id == activityId)),
        tap(data => console.log('getActivity: ' + JSON.stringify(data))),
        timeout(TIMEOUT),
        catchError(this.handleError)
      )
    }
  }

  deleteActivity(activityId: number): Observable<boolean> {
    if (this.activities) {
      const index = this.activities.findIndex(a => a.id == activityId);
      
      if (index > -1) {
        this.activities.splice(index, 1);
        return of(true);

      } else {
        return of(false);
      }
     
    } else {
      return of(false);
    }
  }

  insertActivity(activity: IActivity): Observable<number> {
    activity.id = this.activities.length;
    activity.creationDate = new Date().toLocaleDateString();

    switch (activity.category) {
      case "run":  activity.icon = faRunning; break;
      case "ride": activity.icon = faBicycle; break;
      case "hike": activity.icon = faHiking;  break;
    }

    this.activities.push(activity);

    return of(activity.id);
  }

  editActivity(activity: IActivity): Observable<boolean> {
    if (this.activities) {
      const index = this.activities.findIndex(a => a.id == activity.id);
      
      if (index > -1) {
        this.activities.splice(index, 1);
        this.activities.push(activity);
        return of(true);

      } else {
        return of(false);
      }
     
    } else {
      return of(false);
    }
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

}
