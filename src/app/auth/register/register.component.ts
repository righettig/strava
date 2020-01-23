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

  register(model: IRegisterModel) {
    if (!model || !model.username || !model.password) {
      return;
    }

    this.auth.register(model).then(result => {
      this.router.navigate(["activities"]);
    })
  }

  faStrava = faStrava;

}
