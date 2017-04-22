import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Categories} from '../models/categories';
import {Observable} from "rxjs";
import {UsersCategories} from'../models/usersCategories';

/*
  Generated class for the Catprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Catprovider {
  categories : Categories[];
  usersCats : UsersCategories[];

  constructor(public http: Http) {
    console.log('Hello Catprovider Provider');
  }
  loadCategories() {
    if(this.categories){
      return Promise.resolve(this.categories);
    }
    return new Promise(resolve => {
      this.http.get("http://localhost:9000/api/categories")
        .map(res => <Categories[]>res.json())
        .subscribe(categories => {
          this.categories = categories;
          resolve(this.categories);
        });
    });
  }
  getCatByName(name:string):Observable<Categories[]>{
    return this.http.get(`http://localhost:9000/api/getCatByName/${name}`)
      .map(res => <Categories[]>res.json());
  }
loadUsersCategories() {
    if (this.usersCats) {
      return Promise.resolve(this.usersCats);
    }
    return new Promise(resolve => {
      this.http.get('http://localhost:9000/api/loadUsersCats')
        .map(res => <UsersCategories[]>res.json().evt_categories)
        .subscribe(usersCats => {
          this.usersCats = usersCats;
          resolve(this.usersCats);
        });
    });
  }

  addCatToUser(cat){
       let headers = new Headers ();
      headers.append('content-Type','application/json');
      this.http.put('http://localhost:9000/api/addCatToUser', JSON.stringify(cat), {headers: headers})
        .subscribe(res => {
          console.log(res.json());
        });
  }
    deleteCatFromUser(cat){
    let headers = new Headers ();
     // let options ={p:JSON.stringify(tag),headers:headers};
    this.http.delete(`http://localhost:9000/api/delCatFromUser`,cat)
      .subscribe(res => {
        console.log(res.json());
      });
  }

}
