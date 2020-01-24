import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { FiltersComponent } from './filters/filters.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityNewComponent } from './activity-new/activity-new.component';
import { UserStatsComponent } from './activity-list/user-stats/user-stats.component';
import { ConfirmDeleteActivityModal } from './activity-details/confirm-delete-activity-modal/confirm-delete-activity-modal.component';
import { PendingChangesModal } from './pending-changes-modal/pending-changes-modal.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from '../authentication.guard';
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
