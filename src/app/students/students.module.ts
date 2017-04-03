
import {NgModule} from "@angular/core";
import {StudentsComponent} from "./students.component";
import {CommonModule} from "@angular/common";
import {StudentsRoutingModule} from "./students-routing.module";
import {RouterModule} from "@angular/router";
import {StudentsService} from "./students.service";
import {FuckComponent} from "./fuck.component";
import {StudentsDataResolver} from "./students-data.resolver";


@NgModule({
  declarations : [
    StudentsComponent,
    FuckComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    RouterModule
  ],
  exports: [
    StudentsComponent
  ],
  providers:[
    StudentsService,
    StudentsDataResolver
  ]
})
export class StudentsModule{

}
