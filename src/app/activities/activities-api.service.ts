import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IActivity } from './models/activity';

const localUrl = 'api/activities.json';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesApiService {

  constructor(private http: HttpClient) { }

  getActivities(): Observable<IActivity[]> {
    return this.http.get<IActivity[]>(localUrl);
  }

}
