import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ActivityModule } from './activities/activity.module';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared/shared.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnalyticsModule } from './analytics/analytics.module';
import { RouterModule } from '@angular/router';
import { ProfileModule } from './profile/profile.module';
import { RacesModule } from './races/races.module';
import { ShoesModule } from './shoes/shoes.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    SharedModule,
    ActivityModule,
    AuthModule,
    AnalyticsModule,

    RouterModule,

    ProfileModule,

    RacesModule,

    ShoesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
