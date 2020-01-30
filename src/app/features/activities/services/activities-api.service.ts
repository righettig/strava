import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, of, Subject } from 'rxjs';
import { IActivity } from '../models/activity';
import { catchError, tap, timeout, map } from 'rxjs/operators';
import { faRunning, faBicycle, faHiking } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { ClonerService } from 'strava-shared';
import { AuthService } from '../../auth/auth.service';

declare const Pusher: any;

const localUrl = 'api/activities.json';
const TIMEOUT = 5000;

interface IKudosReply {
  activityId: string;
  kudos: string;
}

interface IActivityReply {
  activity: IActivity
}

@Injectable({
  providedIn: 'root'
})
export class ActivitiesApiService {

  constructor(
    private auth: AuthService,
    private http: HttpClient, 
    private cloner: ClonerService) { 
      this.initPusher();

      this.activitiesSub = new Subject<IActivity[]>();
      this.activities$ = this.activitiesSub.asObservable();
    }

  private activities$: Observable<IActivity[]>
  private activitiesSub: Subject<IActivity[]>;

  private activities: IActivity[]; // in-memory cache
  
  giveKudos(activity: IActivity) {
    activity.kudos++;

    this.http.post('http://localhost:3120/update', 
      {
        activityId: activity.id, 
        kudos: activity.kudos 
      }).subscribe();
  }

  getActivities(): Observable<IActivity[]> {
    if (this.activities) {
      this.activitiesSub.next(
        this.cloner.deepClone<IActivity[]>(this.activities));

    } else {
      let obs = this.http.get<IActivity[]>(localUrl).pipe(
        tap(data => data.forEach(el => el.creationDate = new Date(el.creationDate))),
        tap(data => this.activities = this.cloner.deepClone<IActivity[]>(data)),
        tap(data => console.log("getActivities: " + JSON.stringify(data))),
        timeout(TIMEOUT),
        catchError(this.handleError)
      );

      obs.subscribe(res => {
        this.activitiesSub.next(res);
      })
    }

    return this.activities$;
  }

  getActivity(activityId: number): Observable<IActivity> {
    if (this.activities) {
      const activity = this.activities.find(a => a.id == activityId);
      return of(this.cloner.deepClone<IActivity>(activity));

    } else {
      return this.http.get<IActivity[]>(localUrl).pipe(
        map(data => this.cloner.deepClone<IActivity>(data.find(a => a.id == activityId))),
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
    activity.id = this.activities.length + 1;
    activity.creationDate = new Date();
    activity.username = this.auth.currentUsername;
    activity.kudos = 0;

    switch (activity.category) {
      case "run":  activity.icon = faRunning; break;
      case "ride": activity.icon = faBicycle; break;
      case "hike": activity.icon = faHiking; break;
    }

    this.http.post('http://localhost:3120/activity-new', 
    {
      activity: activity
    }).subscribe();

    return of(activity.id);
  }

  editActivity(activity: IActivity): Observable<boolean> {
    if (this.activities) {
      const index = this.activities.findIndex(a => a.id == activity.id);

      if (index > -1) {
        this.activities.splice(index, 1);
        this.activities.push(this.cloner.deepClone<IActivity>(activity));
        
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

  private initPusher() {
    // Enable pusher logging - don't include this in production
    Pusher.logToConsole = true;

    const pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
      forceTLS: true
    });

    const channel = pusher.subscribe('events-channel');
    
    channel.bind('new-like', (data: IKudosReply) => { 
      this.activities.find(el => el.id == +data.activityId).kudos = +data.kudos;

      this.activitiesSub.next(this.activities);
    });

    channel.bind('new-activity', (data: IActivityReply) => {
      data.activity.creationDate = new Date(data.activity.creationDate);     
      this.activities.push(data.activity);

      this.activitiesSub.next(this.activities);
    });

    // TODO: amend
    // TODO: delete
  }

}
