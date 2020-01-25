import { NgModule } from '@angular/core';
import { AnalyticsComponent } from './analytics.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthenticationGuard } from 'src/app/shared/guards/authentication.guard';

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
