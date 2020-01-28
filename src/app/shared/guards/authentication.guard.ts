import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/features/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(
    private router: Router, 
    private auth: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    // the user is currently logged in
    if (this.auth.isLoggedIn) {
      return true;
    }

    // the user is currently not logged in but we he has a valid auth token
    if (this.auth.reconnect()) {
      return true;
    }

    if (state.url !== "/") {
      this.auth.redirectUrl = state.url;
    }
    
    this.router.navigate(['/login']);
    return false;
  }
  
}
