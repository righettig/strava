import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationGuard } from '../shared/guards/authentication.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivityModule } from '../features/activities/activity.module';
import { AnalyticsModule } from '../features/analytics/analytics.module';
import { ProfileModule } from '../features/profile/profile.module';
import { RacesModule } from '../features/races/races.module';
import { ShoesModule } from '../features/shoes/shoes.module';
import { AppLayoutComponent } from './layout/app-layout.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthenticationGuard],
    children: [
      ...ActivityModule.routes,
      ...AnalyticsModule.routes,
      ...ProfileModule.routes,
      ...RacesModule.routes,
      ...ShoesModule.routes
    ]
  },
  { 
    path: "**", 
    component: PageNotFoundComponent 
  }
];

@NgModule({
  declarations: [
    NavbarComponent,
    AppLayoutComponent
  ],
  imports: [
    // NB: disabling hashing requires the NotLoggedIn route guard to be changed.
    // In fact, an hard refresh is triggered when trying to hit the 'login' or 'register' pages while
    // being logged in. This wipes the memory and AuthService thinks the user is now logged on.
    RouterModule.forRoot(routes, { useHash: true })
  ]
})
export class AppRoutingModule { }