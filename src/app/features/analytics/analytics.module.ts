import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { StravaSharedModule } from 'strava-shared';

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    SharedModule,
    StravaSharedModule,
    AnalyticsRoutingModule,
  ]
})
export class AnalyticsModule { }
