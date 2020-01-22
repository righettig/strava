import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';

@Injectable({
  providedIn: 'root'
})
export class ActivityEditGuard implements CanActivate, CanDeactivate<ActivityEditComponent> {

  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id = +next.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Invalid activity Id');
      this.router.navigate(['/activities']);
      return false;
    }
    return true;
  }

  canDeactivate(
    component: ActivityEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.pendingChanges) {
      alert("there are pending changes.");
      return false;
    } else {
      return true;
    }
  }

}
