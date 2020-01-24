import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationGuard } from '../authentication.guard';

const routes: Routes = [
  { 
    path: "analytics", 
    canActivate: [AuthenticationGuard],
    component: AnalyticsComponent 
  }
];

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class AnalyticsModule { }
