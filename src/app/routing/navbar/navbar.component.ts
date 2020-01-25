import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/features/auth/auth.service';
import { faUserShield } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(
    private auth: AuthService,
    private router: Router) { }

  logout() {
    this.auth.logout().then(result => {
      this.router.navigate(["login"]);
    })
  }

  get currentUsername() {
    return this.auth.currentUsername;
  }

  get isPremium() {
    return this.auth.user.isPremium;
  }
  
  faUserShield = faUserShield;

}
