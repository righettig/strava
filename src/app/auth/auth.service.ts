import { Injectable } from '@angular/core';
import { ILoginModel } from './models/login-model';
import { IRegisterModel } from './models/register-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: ILoginModel): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(true);
      }, 1000)
    })
  }

  logout(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(true);
      }, 1000)
    })
  }

  register(credentials: IRegisterModel) {
    return new Promise((resolve, reject) => {
      setInterval(() => {
        resolve(true);
      }, 1000)
    })
  }

}
