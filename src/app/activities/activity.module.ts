import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ActivityRoutingModule } from './activities-routing-module';

import { FiltersComponent } from './filters/filters.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityNewComponent } from './activity-new/activity-new.component';
import { UserStatsComponent } from './activity-list/user-stats/user-stats.component';
import { ConfirmDeleteActivityModal } from './activity-details/confirm-delete-activity-modal/confirm-delete-activity-modal.component';
import { PendingChangesModal } from './pending-changes-modal/pending-changes-modal.component';

@NgModule({
  declarations: [
    ActivityDetailsComponent,
    ActivityEditComponent,
    ActivityListComponent,
    ActivityNewComponent,
    UserStatsComponent,
    FiltersComponent,
    ConfirmDeleteActivityModal,
    PendingChangesModal
  ],
  exports: [
    ActivityListComponent,
    UserStatsComponent
  ],
  imports: [
    SharedModule,
    ActivityRoutingModule
  ],
  entryComponents: [
    ConfirmDeleteActivityModal,
    PendingChangesModal
  ]
})
export class ActivityModule { }
