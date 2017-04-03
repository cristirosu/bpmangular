
import {Component} from "@angular/core";
import {StudentsService} from "./students.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/map';
@Component({
  template: ':((( <router-outlet></router-outlet> '
})
export class FuckComponent{

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: StudentsService
  ) {}

  ngOnInit(){
    this.route.params
      .forEach((params: Params) => { console.log(params['id']) })
  }

}
