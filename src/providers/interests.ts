import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {interest} from'../models/interests';
import {UsersInterests} from'../models/userInterests';

/*
  Generated class for the Interests provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Interests {

 url = "http://localhost:9000/api";
  ints: interest[];
  usersints : UsersInterests[];

  constructor(public http: Http) {
    console.log('Hello Interests Provider');
  }

loadUsersInts() {
    if (this.usersints) {
      return Promise.resolve(this.usersints);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:9000/api/loadUsersInts')
        .map(res => <UsersInterests[]>res.json().interests)
        .subscribe(UsersInts => {
          this.usersints = UsersInts;
          resolve(this.usersints);
        });
    });
  }
loadInterests() {
    if (this.ints) {
      return Promise.resolve(this.ints);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:9000/interestapi')
        .map(res => <interest[]>res.json())
        .subscribe(tags => {
          this.ints = tags;
          resolve(this.ints);
        });
    });
  }

  addIntrToUser(tag){
       let headers = new Headers ();
      headers.append('content-Type','application/json');
      this.http.put('http://localhost:9000/api/addInterestToUser', (tag), {headers: headers})
        .subscribe(res => {
          console.log(res.json());
        });

  }
  deleteIntrFromUser(tag){
    let headers = new Headers ();
     // let options ={p:JSON.stringify(tag),headers:headers};
     headers.append('content-Type','application/json');
     console.log("fct delete int");
    this.http.delete(`http://localhost:9000/api/deleteInterestfromUser`,tag)
      .subscribe(res => {
        console.log(res.json());
      });
  }
}
