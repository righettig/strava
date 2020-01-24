import { NgModule } from '@angular/core';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationGuard } from '../authentication.guard';

const routes: Routes = [
  { 
    path: "shoes", 
    canActivate: [AuthenticationGuard],
    component: ShoesListComponent 
  }
];

@NgModule({
  declarations: [ShoesListComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ]
})
export class ShoesModule { }
