import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RacesListComponent } from './races-list/races-list.component';
import { MyRacesComponent } from './my-races/my-races.component';
import { RacesResolverService } from './races-resolver/races-resolver.service';

const routes: Routes = [
  { 
    path: "races",
    data: { skipPreload: true },
    children: [
      {
        path: "",
        component: RacesListComponent,
        
        // comment out to remove the resolver
        resolve: { resolvedData: RacesResolverService }
      },
      { 
        path: "user", 
        component: MyRacesComponent 
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class RacesRoutingModule { }
