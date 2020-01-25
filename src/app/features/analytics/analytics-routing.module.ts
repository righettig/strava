import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { AnalyticsComponent } from './analytics.component'
import { AuthenticationGuard } from 'src/app/shared/guards/authentication.guard'

const routes: Routes = [
  {
    path: "analytics",
    canActivate: [AuthenticationGuard],
    component: AnalyticsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AnalyticsRoutingModule { }
