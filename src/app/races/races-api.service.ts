import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const localUrl = 'api/races.json';

@Injectable({
  providedIn: 'root'
})
export class RacesApiService {

  constructor(private http: HttpClient) { }

  getRaces() {
    return this.http.get(localUrl).pipe(
      tap(data => console.log('getRaces: ' + JSON.stringify(data)))
    );
  }

}
