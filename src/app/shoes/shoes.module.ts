import { NgModule } from '@angular/core';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: "shoes", component: ShoesListComponent },
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
