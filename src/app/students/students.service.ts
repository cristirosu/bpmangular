
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
@Injectable()
export class StudentsService {

  getData(): Observable<any>{
    return Observable.of('1234').delay(3000);
  }

}
