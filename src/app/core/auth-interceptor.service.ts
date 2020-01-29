import { Injectable } from '@angular/core';
import { AuthService } from '../features/auth/auth.service';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  
  constructor(private auth: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = this.auth.user.authToken;
    const authReq = req.clone({
      headers: req.headers.set('Authorization', authToken)
    })
    return next.handle(authReq);
  }

}
