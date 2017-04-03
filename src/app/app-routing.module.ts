import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {TestComponent} from "./test.component";
import {PageNotFoundComponent} from "./pagenotfound.component";
const appRoutes:Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}



