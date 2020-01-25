import { Injectable } from '@angular/core';
import { IProfile } from './models/profile';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileApiService {

  get(): Observable<IProfile> {
    if (this.profile) {
      return of(this.profile);

    } else {
      return of(null);
    }
  }

  update(profile: IProfile): Observable<boolean> {
    this.profile = profile;
    return of(true);
  }

  profile: IProfile;

}
