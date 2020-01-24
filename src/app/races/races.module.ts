import { NgModule } from '@angular/core';
import { RacesListComponent } from './races-list/races-list.component';
import { MyRacesComponent } from './my-races/my-races.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationGuard } from '../authentication.guard';

const routes: Routes = [
  { 
    path: "races",      
    canActivate: [AuthenticationGuard], 
    component: RacesListComponent },
  { 
    path: "races/user", 
    canActivate: [AuthenticationGuard], 
    component: MyRacesComponent 
  },
];

@NgModule({
  declarations: [RacesListComponent, MyRacesComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class RacesModule { }
