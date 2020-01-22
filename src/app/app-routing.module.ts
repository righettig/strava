import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { ActivityEditComponent } from './activities/activity-edit/activity-edit.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "activities", component: ActivityListComponent },
  { 
    path: "activities/:id", 
    //canActivate: [ActivityEditGuard],
    component: ActivityEditComponent 
  },
  //{ path: "dashboard", component: DashboardComponent },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  // { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //useHash: true
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
