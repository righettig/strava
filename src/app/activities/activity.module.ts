import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared/shared.module';

import { FiltersComponent } from './filters/filters.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityNewComponent } from './activity-new/activity-new.component';
import { UserStatsComponent } from './activity-list/user-stats/user-stats.component';
import { ConfirmDeleteActivityModal } from './activity-details/confirm-delete-activity-modal/confirm-delete-activity-modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ActivityDetailsComponent,
    ActivityEditComponent,
    ActivityListComponent,
    ActivityNewComponent,
    UserStatsComponent,
    FiltersComponent,
    ConfirmDeleteActivityModal
  ],
  exports: [
    ActivityListComponent,
    UserStatsComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ],
  entryComponents: [
    ConfirmDeleteActivityModal
  ]
})
export class ActivityModule { }
