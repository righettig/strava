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
      { path: '', loadChildren: () => import('../features/analytics/analytics.module').then(m => m.AnalyticsModule) },
      { path: '', loadChildren: () => import('../features/analytics/analytics.module').then(m => m.AnalyticsModule) },
      { path: '', loadChildren: () => import('../features/profile/profile.module').then(m => m.ProfileModule) },
      { path: '', loadChildren: () => import('../features/shoes/shoes.module').then(m => m.ShoesModule) },
      { 
        path: '', 
        canLoad: [PremiumUserGuard],
        loadChildren: () => import('../features/races/races.module').then(m => m.RacesModule) 
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