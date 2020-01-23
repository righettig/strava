import { NgModule } from '@angular/core';
import { RacesListComponent } from './races-list/races-list.component';
import { MyRacesComponent } from './my-races/my-races.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared/shared.module';

const routes: Routes = [
  { path: "races",    component: RacesListComponent },
  { path: "my-races", component: MyRacesComponent },
];

@NgModule({
  declarations: [RacesListComponent, MyRacesComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class RacesModule { }
