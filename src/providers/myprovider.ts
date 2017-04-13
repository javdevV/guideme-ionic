import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
//import {User} from '../models/user';
import {Tags} from'../models/tags';
import {Observable} from "rxjs";
//import {Observable} from 'rxjs/Rx';

@Injectable()
export class Myprovider {
  url = "http://localhost:3000/api";
  tags: Tags[];

  constructor(public http: Http) {
    console.log('Hello Myprovider Provider');
  }

  loadTags() {
    if (this.tags) {
      return Promise.resolve(this.tags);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:3000/api/tags')
        .map(res => <Tags[]>res.json())
        .subscribe(tags => {
          this.tags = tags;
          resolve(this.tags);
        });
    });
  }
  updateUserPosition(x, y) {
    let headers = new Headers();
    headers.append('content-Type', 'application/json');
    this.http.put('http://localhost:3000/api/updateUserPosition', JSON.stringify({"latitude":x, "longitude":y}), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      });
  }
  getTagByName(name:string):Observable<Tags[]>{

    return this.http.get(`http://localhost:3000/api/getTagByTitle/${name}`)
        .map(res => <Tags[]>res.json());
  }

}
