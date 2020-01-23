import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RacesListComponent } from './races-list/races-list.component';
import { MyRacesComponent } from './my-races/my-races.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "races",    component: RacesListComponent },
  { path: "my-races", component: MyRacesComponent },
];

@NgModule({
  declarations: [RacesListComponent, MyRacesComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class RacesModule { }
