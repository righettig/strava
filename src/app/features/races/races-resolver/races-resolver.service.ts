import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { IResolvedRaces } from '../models/race';
import { RacesApiService } from '../services/races-api.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RacesResolverService implements Resolve<IResolvedRaces> {

  constructor(
    private racesApi: RacesApiService) { }

  resolve(route: ActivatedRouteSnapshot, 
          state: RouterStateSnapshot): Observable<IResolvedRaces> {

    return this.racesApi.getRaces().pipe(
      map(races => ({ races })),
      catchError(error => {
        const message = `Retrieval error ${error}`;
        console.error(message);
        return of({ races: null, error: message });
      })
    )

  }

}
