import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthenticationGuard } from 'src/app/shared/guards/authentication.guard';

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
