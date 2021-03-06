import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityNewComponent } from './activity-new/activity-new.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { ActivityEditGuard } from './guards/activity-edit.guard';

const routes: Routes = [
  { // default route
    path: '',
    redirectTo: '/activities',
    pathMatch: 'full'
  },
  {
    path: "activities",
    children: [
      {
        path: "",
        component: ActivityListComponent
      },
      {
        path: "create",
        canDeactivate: [ActivityEditGuard],
        component: ActivityNewComponent
      },
      {
        path: ":id",
        canActivate: [ActivityEditGuard],
        canDeactivate: [ActivityEditGuard],
        component: ActivityEditComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ActivityRoutingModule { }