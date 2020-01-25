import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class PremiumUserGuard implements CanLoad {
  
  constructor(
    private router: Router, 
    private auth: AuthService) { }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    
      if (this.auth.user.isPremium) {
        return true;
        
      } else {
        this.router.navigate(['activities']);
        return false;
      }

  }

}
