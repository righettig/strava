import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ShoesListComponent } from './shoes-list/shoes-list.component';

const routes: Routes = [
  { 
    path: "shoes", 
    component: ShoesListComponent 
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ShoesRoutingModule { }