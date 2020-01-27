import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ActivityEditComponent } from '../activity-edit/activity-edit.component';
import { ActivityNewComponent } from '../activity-new/activity-new.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PendingChangesModal } from './pending-changes-modal/pending-changes-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ActivityEditGuard 
  implements CanActivate, CanDeactivate<ActivityEditComponent | ActivityNewComponent> {

  constructor(
    private modal: NgbModal,
    private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let id = +next.params.id;
    if (isNaN(id) || id < 1) {
      alert('Invalid activity Id');
      this.router.navigate(['/activities']);
      return false;
    }
    return true;
  }

  canDeactivate(
    component: ActivityEditComponent | ActivityNewComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.dirty) {
      const modal = this.modal.open(PendingChangesModal)
      
      return modal.result
        .then(() => true)
        .catch(err => false)

    } else {
      return true;
    }
  }

}
