import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { RacesRoutingModule } from './races-routing.module';
import { RacesListComponent } from './races-list/races-list.component';
import { MyRacesComponent } from './my-races/my-races.component';

@NgModule({
  declarations: [
    RacesListComponent, 
    MyRacesComponent
  ],
  imports: [
    SharedModule,
    RacesRoutingModule
  ]
})
export class RacesModule { }
