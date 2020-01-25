import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppLayoutComponent } from './layout/app-layout.component';
import { AuthenticationGuard } from '../shared/guards/authentication.guard';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';
import { PremiumUserGuard } from '../features/auth/guards/premium-user.guard';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    canActivate: [AuthenticationGuard],

    // feature modules are lazy-loaded
    children: [
      { path: '', loadChildren: '../features/activities/activity.module#ActivityModule' },
      { path: '', loadChildren: '../features/analytics/analytics.module#AnalyticsModule' },
      { path: '', loadChildren: '../features/profile/profile.module#ProfileModule' },
      { path: '', loadChildren: '../features/shoes/shoes.module#ShoesModule' },
      { 
        path: '', 
        canLoad: [PremiumUserGuard],
        loadChildren: '../features/races/races.module#RacesModule' 
      }
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
    SharedModule,

    // NB: disabling hashing requires the NotLoggedIn route guard to be changed.
    // In fact, an hard refresh is triggered when trying to hit the 'login' or 'register' pages while
    // being logged in. This wipes the memory and AuthService thinks the user is now logged on.
    RouterModule.forRoot(routes, { useHash: true })
  ]
})
export class AppRoutingModule { }