import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationGuard } from '../authentication.guard';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { 

  static routes = [
    { 
      path: "profile",
      canActivate: [AuthenticationGuard],
      component: ProfileComponent 
    }
  ]

}
