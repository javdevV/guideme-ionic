import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Categories} from '../models/categories';

/*
  Generated class for the Catprovider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Catprovider {
  categories : Categories[];

  constructor(public http: Http) {
    console.log('Hello Catprovider Provider');
  }
  loadCategories() {
    if(this.categories){
      return Promise.resolve(this.categories);
    }
    return new Promise(resolve => {
      this.http.get("http://localhost:3000/api/categories")
        .map(res => <Categories[]>res.json())
        .subscribe(categories => {
          this.categories = categories;
          resolve(this.categories);
        });
    });
  }


}
