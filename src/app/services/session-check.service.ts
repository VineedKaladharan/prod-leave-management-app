import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionCheckService {

  constructor() { }

  private subject = new Subject<any>();
  sendMessage(obj: object) {
    this.subject.next({ text: obj });
  }
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }


}
