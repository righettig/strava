import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "analytics", component: AnalyticsComponent },
];

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AnalyticsModule { }
