
import {Injectable} from "@angular/core";
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {Observable} from "rxjs/Rx";
import {StudentsService} from "./students.service";
@Injectable()
export class StudentsDataResolver implements Resolve<string>{

  constructor(private studentService: StudentsService, private router: Router){

  }

  resolve(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<string>|Promise<string>|string {
    console.log("hereee");
    let id = route.params['id'];
    return this.studentService.getData();
  }

}
