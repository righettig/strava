import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared/shared.module';

import { FiltersComponent } from './filters/filters.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityNewComponent } from './activity-new/activity-new.component';
import { UserStatsComponent } from './activity-list/user-stats/user-stats.component';

@NgModule({
  declarations: [
    ActivityDetailsComponent,
    ActivityEditComponent,
    ActivityListComponent,
    ActivityNewComponent,
    UserStatsComponent,
    FiltersComponent
  ],
  exports: [
    ActivityListComponent,
    UserStatsComponent
  ],
  imports: [
    SharedModule
  ]
})
export class ActivityModule { }
