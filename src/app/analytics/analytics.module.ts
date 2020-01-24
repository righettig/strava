import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: "analytics", component: AnalyticsComponent }
];

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AnalyticsModule { }
