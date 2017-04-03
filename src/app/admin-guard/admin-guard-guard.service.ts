
import {Injectable, Directive} from "@angular/core";
import {CanActivate} from "@angular/router";

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(){
    console.log("ADMIN GUARD - can activate called")
    return true;
  }
}
