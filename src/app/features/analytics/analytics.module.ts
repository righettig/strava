import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';
import { StravaSharedModule } from 'strava-shared';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    NgxChartsModule,
    SharedModule,
    StravaSharedModule,
    AnalyticsRoutingModule,
  ]
})
export class AnalyticsModule { }
