import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IRace } from '../models/race';

const localUrl = 'api/races.json';

@Injectable({
  providedIn: 'root'
})
export class RacesApiService {

  constructor(private http: HttpClient) { }

  getRaces(): Observable<IRace[]> {
    return this.http.get(localUrl).pipe(
      tap(data => console.log('getRaces: ' + JSON.stringify(data))),
      map((data: any) => data.races.map(el => el.race))
    );
  }

}
