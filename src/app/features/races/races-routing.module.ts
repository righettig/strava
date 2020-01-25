import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacesListComponent } from './races-list/races-list.component';
import { MyRacesComponent } from './my-races/my-races.component';

const routes: Routes = [
  { 
    path: "races",      
    component: RacesListComponent 
  },
  { 
    path: "races/user", 
    component: MyRacesComponent 
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RacesRoutingModule { }
