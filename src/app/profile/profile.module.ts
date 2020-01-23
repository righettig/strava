import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path: "profile", component: ProfileComponent }
];

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class ProfileModule { }
