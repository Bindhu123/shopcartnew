import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  subject = new Subject();

  constructor() { }

  sengMesg(product) {
    this.subject.next(product);
  }

  getMesg()  {
    return this.subject.asObservable();
  }
  sendDelMesg(product) {
    this.subject.next(product);
  }

  getDelMesg() {
    return this.subject.asObservable();
  }
}
