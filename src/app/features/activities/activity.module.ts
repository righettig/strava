import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ActivityRoutingModule } from './activity-routing.module';

import { FiltersComponent } from './activity-list/filters/filters.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityNewComponent } from './activity-new/activity-new.component';
import { UserStatsComponent } from './activity-list/user-stats/user-stats.component';
import { ConfirmDeleteActivityModal } from './activity-details/confirm-delete-activity-modal/confirm-delete-activity-modal.component';
import { PendingChangesModal } from './guards/pending-changes-modal/pending-changes-modal.component';
import { AgmCoreModule } from '@agm/core';

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
  imports: [
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDyIPVyF6ouUuH6qXKDVoRQ0y0MatoImRE"
    }),
    SharedModule,
    ActivityRoutingModule,
  ],
  entryComponents: [
    ConfirmDeleteActivityModal,
    PendingChangesModal
  ]
})
export class ActivityModule { }
