import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { ActivityListComponent } from './activities/activity-list/activity-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { UserStatsComponent } from './activities/activity-list/user-stats/user-stats.component';
import { ActivityDetailsComponent } from './activities/activity-details/activity-details.component';
import { ActivityEditComponent } from './activities/activity-edit/activity-edit.component';
import { ActivityNewComponent } from './activities/activity-new/activity-new.component';
import { FiltersComponent } from './activities/filters/filters.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UserStatsComponent,
    ActivityDetailsComponent,
    ActivityEditComponent,
    ActivityNewComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,

    NgbModule,

    // only icons I have explicitly imported will end up in the bundle and the remaining ones will be tree-shaken away.
    FontAwesomeModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
