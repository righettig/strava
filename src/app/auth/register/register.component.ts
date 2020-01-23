import { Component } from '@angular/core';
import { faStrava } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { IRegisterModel } from '../models/register-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private auth: AuthService, 
    private router: Router) { }

  register() {
    const registerModel = {
      username: this.username,
      password: this.password
    }

    this.auth.register(registerModel).then(result => {
      this.router.navigate(["activities"]);
    })
  }

  username: string;
  password: string;
  rememberMe: boolean;

  faStrava = faStrava;

}
