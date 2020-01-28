import { Injectable } from '@angular/core';
import { ILoginModel } from './models/login-model';
import { IRegisterModel } from './models/register-model';
import { IUserModel, UserModel } from './models/user-model';

// local storage entries
const USER = "user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(credentials: ILoginModel): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setUser(
          credentials, credentials.username === "premium");
          
        resolve(true);
      }, 1000)
    })
  }

  logout(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.unloadUser();

        resolve(true);
      }, 1000)
    })
  }

  register(credentials: IRegisterModel) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setUser(
          credentials, credentials.username === "premium");

        resolve(true);
      }, 1000)
    })
  }

  reconnect(): boolean {
    const user = localStorage.getItem(USER);
    
    if (user) {
      this.user = JSON.parse(user);
      if (this.user.authToken == "qwerty123!") {
        return true;
      }
    }

    return false;
  }

  private setUser(credentials, isPremium) {
    this.user = new UserModel(credentials.username, isPremium);
    this.user.authToken = "qwerty123!";

    localStorage.setItem(USER, JSON.stringify(this.user)); // you might want to encrypt user's data
  }

  private unloadUser() {
    this.user = null;

    localStorage.removeItem(USER);
  }

  get isLoggedIn() {
    return this.user != null;
  }

  get currentUsername() {
    return this.user? this.user.username : '';
  }

  user: IUserModel;

  redirectUrl: string;

}
