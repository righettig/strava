import { Component } from '@angular/core';
import { faStrava } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ILoginModel } from '../models/login-model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private auth: AuthService,
    private router: Router) { }

  login(loginModel: ILoginModel) {
    if (!loginModel || loginModel.username || loginModel.password) {
      return;
    }
    
    this.auth.login(loginModel).then(result => {
      this.router.navigate(["activities"]);
    })
  }

  faStrava = faStrava;

}
