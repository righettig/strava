import { Component, OnInit } from '@angular/core';
import { faStrava } from '@fortawesome/free-brands-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { IRegisterModel } from '../models/register-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private auth: AuthService, 
    private router: Router) { }

  ngOnInit() {
  }

  register(credentials: IRegisterModel) {
    this.auth.register(credentials).then(result => {
      this.router.navigate(["activities"]);
    })
  }

  faStrava = faStrava;

}
