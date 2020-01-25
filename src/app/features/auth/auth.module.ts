import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotLoggedInGuard } from './guards/not-logged-in.guard';

const routes: Routes = [
  { 
    path: "login",    
    canActivate: [NotLoggedInGuard],
    component: LoginComponent 
  },
  { 
    path: "register", 
    canActivate: [NotLoggedInGuard],
    component: RegisterComponent 
  }
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AuthModule { }
