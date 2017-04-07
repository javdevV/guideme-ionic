import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
//import {User} from '../models/user';
import {Tags} from '../models/tags';
import {Categories} from '../models/categories';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class Myprovider {
  url = "http://localhost:3000/api";
  tags: Tags[];
  categories : Categories[];

  constructor(public http: Http) {
     console.log('Hello Myprovider Provider');
  }

  loadTags() {
    if (this.tags) {
      return Promise.resolve(this.tags);
    }
    return new Promise(resolve => {
      this.http.get("http://localhost:3000/api/tags")
        .map(res => <Tags[]>res.json())
        .subscribe(tags => {
          this.tags = tags;
          resolve(this.tags);
        });
    });
  }
  loadCategories() {

    return new Promise(resolve => {
      this.http.get("http://localhost:3000/api/tags")
        .map(res => <Categories[]>res.json())
        .subscribe(categories => {
          this.categories = categories;
          resolve(this.categories);
        });
    });
  }





}
