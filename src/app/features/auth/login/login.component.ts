import { Component } from '@angular/core';
import { faStrava } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ILoginModel } from '../models/login-model';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private auth: AuthService,
    private router: Router) { }

  login(model: ILoginModel) {
    if (!model || !model.username || !model.password) {
      return;
    }
    
    this.auth.login(model).then(result => {
      if (this.auth.redirectUrl) {
        this.router.navigate([this.auth.redirectUrl]);
      } else {
        this.router.navigate(["activities"]);      
      }
    })
  }

  faStrava = faStrava;

  // for AOT to work fine
  username: string;
  password: string;
  rememberMe: string;

}
