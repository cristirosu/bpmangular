
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
@Injectable()
export class StudentsService {

  getData(): Observable<any>{
    let strings = [];
    for(let i =  0; i <= 9900000; i++){
      strings.push('' + i);
    }
    return Observable.of(strings);
  }

}
