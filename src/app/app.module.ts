import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';
import { ActivityModule } from './features/activities/activity.module';
import { AuthModule } from './features/auth/auth.module';
import { AnalyticsModule } from './features/analytics/analytics.module';
import { ProfileModule } from './features/profile/profile.module';
import { RacesModule } from './features/races/races.module';
import { ShoesModule } from './features/shoes/shoes.module';

import { AppRoutingModule } from './routing/app-routing.module';
import { PageNotFoundComponent } from './routing/page-not-found/page-not-found.component';

import { AppComponent } from './root/app.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    SharedModule,

    ActivityModule,
    AuthModule,
    AnalyticsModule,
    ProfileModule,
    RacesModule,
    ShoesModule,
    
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
