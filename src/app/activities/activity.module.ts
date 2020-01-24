import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { FiltersComponent } from './filters/filters.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityNewComponent } from './activity-new/activity-new.component';
import { UserStatsComponent } from './activity-list/user-stats/user-stats.component';
import { ConfirmDeleteActivityModal } from './activity-details/confirm-delete-activity-modal/confirm-delete-activity-modal.component';
import { RouterModule, Routes } from '@angular/router';
import { ActivityEditGuard } from './activity-edit.guard';
import { PendingChangesModal } from './pending-changes-modal/pending-changes-modal.component';

const routes: Routes = [
  { path: "activities", component: ActivityListComponent },
  {
    path: "activities/create",
    canDeactivate: [ActivityEditGuard],
    component: ActivityNewComponent,
  },
  { 
    path: "activities/:id", 
    canActivate: [ActivityEditGuard],
    canDeactivate: [ActivityEditGuard],
    component: ActivityEditComponent 
  },
  { path: "", redirectTo: "activities", pathMatch: "full" },
];

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
    RouterModule.forChild(routes)
  ],
  entryComponents: [
    ConfirmDeleteActivityModal,
    PendingChangesModal
  ]
})
export class ActivityModule { }
