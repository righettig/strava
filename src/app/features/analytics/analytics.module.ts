import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsComponent } from './analytics.component';

@NgModule({
  declarations: [AnalyticsComponent],
  imports: [
    SharedModule,
    AnalyticsRoutingModule,
  ]
})
export class AnalyticsModule { }
