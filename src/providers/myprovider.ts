import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Tags} from'../models/tags';
import {UsersTags} from'../models/usersTags';
import {Observable} from "rxjs";


@Injectable()
export class Myprovider {
  url = "http://localhost:9000/api";
  tags: Tags[];
  usersTags : UsersTags[];


  constructor(public http: Http) {
    console.log('Hello Myprovider Provider');
  }
  loadUsersTags() {
    // return this.http.get(`http://localhost:9000/api/loadUsersTAgs`)
    //   .map(res => <UsersTags[]>res.json().evt_tag);
    if (this.usersTags) {
      return Promise.resolve(this.usersTags);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:9000/api/loadUsersTAgs')
      this.http.get('http://localhost:9000/api/loadUsersTAgs')
        .map(res => <UsersTags[]>res.json().evt_tags)
        .subscribe(UsersTags => {
          this.usersTags = UsersTags;
          resolve(this.usersTags);
        });
    });
  }
 
  loadTags() {
    if (this.tags) {
      return Promise.resolve(this.tags);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:9000/api/tags')
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
    this.http.put('http://localhost:9000/api/updateUserPosition', JSON.stringify({"latitude":x, "longitude":y}), {headers: headers})
      .subscribe(res => {
      //  console.log(res.json());
      });
  }
  getTagByName(name:string):Observable<Tags[]>{

    return this.http.get(`http://localhost:9000/api/getTagByTitle/${name}`)
        .map(res => <Tags[]>res.json());
  }
  addTagToUser(tag){
       let headers = new Headers ();
      headers.append('content-Type','application/json');
      this.http.put('http://localhost:9000/api/addTagToUser', JSON.stringify(tag), {headers: headers})
        .subscribe(res => {
          console.log(res.json());
        });

  }
  deleteTagFromUser(tag){
    let headers = new Headers ();
    headers.append('content-Type','application/json');
    // let options ={p:JSON.stringify(tag),headers:headers};
    this.http.delete(`http://localhost:9000/api/deleteTagfromUser`,tag)
      .subscribe(res => {
        console.log(res.json());
      });
  }


}
