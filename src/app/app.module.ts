import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {StudentsModule} from "./students/students.module";
import {AppRoutingModule} from "./app-routing.module";
import {TestComponent} from "./test.component";
import {PageNotFoundComponent} from "./pagenotfound.component";
import {AdminModule} from "./admin-guard/admin-guard.module";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StudentsModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
