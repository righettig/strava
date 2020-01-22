import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserStatsComponent } from './user-stats/user-stats.component';
import { ActivityDetailsComponent } from './activities/activity-details/activity-details.component';
import { ActivityEditComponent } from './activities/activity-edit/activity-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UserStatsComponent,
    ActivityDetailsComponent,
    ActivityEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
