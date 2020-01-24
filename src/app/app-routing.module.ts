import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthenticationGuard } from './authentication.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { ActivityModule } from './activities/activity.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ProfileModule } from './profile/profile.module';
import { RacesModule } from './races/races.module';
import { ShoesModule } from './shoes/shoes.module';
import { AppLayoutComponent } from './app-layout/app-layout.component';

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