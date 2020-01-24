import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoesListComponent } from './shoes-list/shoes-list.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: "shoes", component: ShoesListComponent },
];

@NgModule({
  declarations: [ShoesListComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ShoesModule { }
