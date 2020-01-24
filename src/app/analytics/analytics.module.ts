import { NgModule } from '@angular/core';
import { AnalyticsComponent } from './analytics.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationGuard } from '../authentication.guard';

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    SharedModule
  ]
})
export class AnalyticsModule { 

  static routes = [
    { 
      path: "analytics", 
      canActivate: [AuthenticationGuard],
      component: AnalyticsComponent 
    }
  ]

}
