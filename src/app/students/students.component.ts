import {Component, OnInit} from "@angular/core";
import {StudentsService} from "./students.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/Rx";

@Component({
  selector : 'students',
  templateUrl: './students.component.html'
})
export class StudentsComponent implements OnInit{

  constructor(private studentsService: StudentsService, private router: Router, private route: ActivatedRoute){
    console.log("heree");
  }

  private y;

  ngOnInit() {
    this.route.data
      .subscribe((data: { strings: Observable<any> }) => {
        this.y = data;
      });
  }

  goToId(){
    this.router.navigate(['/students', 12]);
  }

}
