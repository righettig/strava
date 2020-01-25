import { NgModule } from '@angular/core';
import { RacesListComponent } from './races-list/races-list.component';
import { MyRacesComponent } from './my-races/my-races.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthenticationGuard } from 'src/app/shared/guards/authentication.guard';

@NgModule({
  declarations: [RacesListComponent, MyRacesComponent],
  imports: [
    SharedModule
  ]
})
export class RacesModule { 

  static routes = [
    { 
      path: "races",      
      canActivate: [AuthenticationGuard], 
      component: RacesListComponent 
    },
    { 
      path: "races/user", 
      canActivate: [AuthenticationGuard], 
      component: MyRacesComponent 
    }
  ]

}
