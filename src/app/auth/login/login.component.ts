import { Component, OnInit } from '@angular/core';
import { faStrava } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login() {
    const loginModel = {
      username: this.username,
      password: this.password
    }

    this.auth.login(loginModel).then(result => {
      this.router.navigate(["activities"]);
    })
  }

  get canLogin() {
    return this.username && this.password;
  }

  username: string;
  password: string;
  rememberMe: boolean;

  faStrava = faStrava;

}
