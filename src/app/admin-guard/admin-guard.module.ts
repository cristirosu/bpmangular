
import {NgModule} from "@angular/core";
import {AdminComponent} from "./admin-guard.component";
import {AdminRoutingModule} from "./admin-guard-routing.module";
import {AdminGuard} from "./admin-guard-guard.service";

@NgModule({
  declarations:[
    AdminComponent
  ],
  imports: [
    AdminRoutingModule
  ],
  providers: [
    AdminGuard
  ]
})
export class AdminModule {

}
