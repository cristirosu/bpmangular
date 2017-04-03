import {Routes, RouterModule} from "@angular/router";
import {StudentsComponent} from "./students.component";
import {NgModule} from "@angular/core";
import {FuckComponent} from "./fuck.component";
import {StudentsDataResolver} from "./students-data.resolver";

export const appRoutes:Routes = [
  {
    path: 'students',
    component: StudentsComponent,
    resolve: {
      strings: StudentsDataResolver
    },
    children : [
      {
        path: ':id',
        component: FuckComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(appRoutes)
  ],
  exports: [
  ]
})
export class StudentsRoutingModule {

}
