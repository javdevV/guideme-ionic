import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Event provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Event {
  events :any;
  constructor(public http: Http) {
    console.log('Hello Event Provider');
  }
  loadEvents(){
    // return this.http.get(`http://localhost:3000/api/evenrs/`)
    //   .map(res => res.json());
    if (this.events) {
      return Promise.resolve(this.events);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:9000/api/events')
        .map(res => res.json())
        .subscribe(events => {
          this.events = events;
          resolve(this.events);
        });
    });
  }
}
