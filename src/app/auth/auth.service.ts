import { Injectable } from '@angular/core';
import { ILoginModel } from './models/login-model';
import { IRegisterModel } from './models/register-model';
import { IUserModel, UserModel } from './models/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: ILoginModel): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setUser(credentials);

        resolve(true);
      }, 1000)
    })
  }

  logout(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.user = null;

        resolve(true);
      }, 1000)
    })
  }

  register(credentials: IRegisterModel) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setUser(credentials);

        resolve(true);
      }, 1000)
    })
  }

  private setUser(credentials) {
    this.user = new UserModel(credentials.username);
  }

  get isLoggedIn() {
    return this.user !== null;
  }

  get currentUsername() {
    return this.user? this.user.username : '';
  }

  user: IUserModel;

}
