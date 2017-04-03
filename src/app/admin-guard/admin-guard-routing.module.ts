
import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {AdminComponent} from "./admin-guard.component";
import {AdminGuard} from "./admin-guard-guard.service";

export const appRoutes:Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
  ]
})
export class AdminRoutingModule {

}
