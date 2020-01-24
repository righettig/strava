import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityEditGuard } from './activity-edit.guard';
import { ActivityNewComponent } from './activity-new/activity-new.component';
import { ActivityEditComponent } from './activity-edit/activity-edit.component';
import { AuthenticationGuard } from '../authentication.guard';

const routes: Routes = [
  { 
    path: "activities", 
    canActivate: [AuthenticationGuard],
    component: ActivityListComponent },
  {
    path: "activities/create",
    canActivate: [AuthenticationGuard],
    canDeactivate: [ActivityEditGuard],
    component: ActivityNewComponent,
  },
  { 
    path: "activities/:id", 
    canActivate: [AuthenticationGuard, ActivityEditGuard],
    canDeactivate: [ActivityEditGuard],
    component: ActivityEditComponent 
  },
  { path: "", redirectTo: "activities", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }