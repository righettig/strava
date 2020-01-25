import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { FiltersComponent } from './activity-list/filters/filters.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityNewComponent } from './activity-new/activity-new.component';
import { UserStatsComponent } from './activity-list/user-stats/user-stats.component';
import { ConfirmDeleteActivityModal } from './activity-details/confirm-delete-activity-modal/confirm-delete-activity-modal.component';
import { PendingChangesModal } from './pending-changes-modal/pending-changes-modal.component';

import { AuthenticationGuard } from 'src/app/shared/guards/authentication.guard';
import { ActivityEditGuard } from './activity-edit.guard';

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
    SharedModule
  ],
  entryComponents: [
    ConfirmDeleteActivityModal,
    PendingChangesModal
  ]
})
export class ActivityModule { 

  static routes = [
    { 
      path: "activities", 
      canActivate: [AuthenticationGuard],
      component: ActivityListComponent
    },
    {
      path: "activities/create",
      canActivate: [AuthenticationGuard],
      canDeactivate: [ActivityEditGuard],
      component: ActivityNewComponent
    },
    { 
      path: "activities/:id", 
      canActivate: [AuthenticationGuard, ActivityEditGuard],
      canDeactivate: [ActivityEditGuard],
      component: ActivityEditComponent 
    }
  ]

}
