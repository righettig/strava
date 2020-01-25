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
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }